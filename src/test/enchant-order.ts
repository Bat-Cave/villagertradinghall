export type EnchantName = string;

export interface EnchantPair {
  0: EnchantName;
  1: number; // level
}

export interface IdWeightData {
  ids: Record<EnchantName, number>;
  weights: number[];
}

export interface WeightsByNameData {
  weightsByName: Record<EnchantName, number>;
}

export type EnchantData = IdWeightData | WeightsByNameData;

export type ItemName = string;

export interface RunOptions {
  item: ItemName;
  enchants: EnchantPair[];
  mode?: 'levels' | 'xp';
  data: EnchantData;
}

const MAXIMUM_MERGE_LEVELS = 39;

class MergeLevelsTooExpensiveError extends Error {
  constructor(message = 'merge levels is above maximum allowed') {
    super(message);
    this.name = 'MergeLevelsTooExpensiveError';
  }
}

type CombineLeaf = { identifier: number | string; value: number; work: number };
type CombineNode = { left: CombineLeaf | CombineNode; right: CombineLeaf | CombineNode; mergeCost: number; work: number; value: number };
type CombineTree = CombineLeaf | CombineNode;

class ItemObj {
  item: string | number;
  enchantIds: number[];
  combineTree: CombineTree;
  work: number;
  value: number;
  totalXp: number;
  constructor(name: string | number, value = 0, id: number[] = []) {
    this.item = name;
    this.enchantIds = id;
    this.combineTree = { identifier: name, value: 0, work: 0 } as CombineLeaf;
    this.work = 0;
    this.value = value;
    this.totalXp = 0;
  }
}

class MergeEnchants extends ItemObj {
  constructor(left: ItemObj, right: ItemObj) {
    const merge_cost = right.value + 2 ** left.work - 1 + 2 ** right.work - 1;
    if (merge_cost > MAXIMUM_MERGE_LEVELS) {
      throw new MergeLevelsTooExpensiveError();
    }
    const new_value = left.value + right.value;
    super(left.item, new_value);
    this.enchantIds = left.enchantIds.concat(right.enchantIds);
    this.work = Math.max(left.work, right.work) + 1;
    this.totalXp = left.totalXp + right.totalXp + experience(merge_cost);
    this.combineTree = { left: left.combineTree, right: right.combineTree, mergeCost: merge_cost, work: this.work, value: this.value };
  }
}

const experience = (level: number): number => {
  if (level === 0) return 0;
  if (level <= 16) return level ** 2 + 6 * level;
  if (level <= 31) return 2.5 * level ** 2 - 40.5 * level + 360;
  return 4.5 * level ** 2 - 162.5 * level + 2220;
};

function combinations<T>(set: T[], k: number): T[][] {
  if (k > set.length || k <= 0) return [];
  if (k === set.length) return [set];
  if (k === 1) return set.map((x) => [x]);
  const combs: T[][] = [];
  for (let i = 0; i < set.length - k + 1; i++) {
    const head = set.slice(i, i + 1);
    const tailcombs = combinations(set.slice(i + 1), k - 1);
    for (let j = 0; j < tailcombs.length; j++) combs.push(head.concat(tailcombs[j]));
  }
  return combs;
}

function compareCheapest(item1: ItemObj, item2: ItemObj): Record<number, ItemObj> {
  const work2item: Record<number, ItemObj> = {};
  const work1 = item1.work;
  const work2 = item2.work;
  if (work1 === work2) {
    const value1 = item1.value;
    const value2 = item2.value;
    if (value1 === value2) {
      const min_xp_cost1 = item1.totalXp;
      const min_xp_cost2 = item2.totalXp;
      if (min_xp_cost1 <= min_xp_cost2) work2item[work1] = item1;
      else work2item[work2] = item2;
    } else if (value1 < value2) work2item[work1] = item1;
    else work2item[work2] = item2;
  } else {
    work2item[work1] = item1;
    work2item[work2] = item2;
  }
  return work2item;
}

function removeExpensiveCandidatesFromDictionary(work2item: Record<number, ItemObj>): Record<number, ItemObj> {
  const cheapest_work2item: Record<number, ItemObj> = {};
  let cheapest_value: number | undefined;
  for (const work in work2item) {
    const item = work2item[work as unknown as number];
    const value = item.value;
    if (!(cheapest_value !== undefined && value >= cheapest_value)) {
      cheapest_work2item[work as unknown as number] = item;
      cheapest_value = value;
    }
  }
  return cheapest_work2item;
}

function cheapestItemsFromDictionaries2(left_work2item: Record<number, ItemObj>, right_work2item: Record<number, ItemObj>): Record<number, ItemObj> {
  let cheapest_work2item: Record<number, ItemObj> = {};
  const cheapest_prior_works: number[] = [];
  for (const left_work in left_work2item) {
    const left_item = left_work2item[left_work as unknown as number];
    for (const right_work in right_work2item) {
      const right_item = right_work2item[right_work as unknown as number];
      let cheapest_pair: ItemObj | undefined;
      try {
        cheapest_pair = cheapestItemFromItems2(left_item, right_item);
      } catch (error) {
        if (!(error instanceof MergeLevelsTooExpensiveError)) throw error;
      }
      if (!cheapest_pair) continue;
      const wnum = Number(cheapest_pair.work);
      const prior_exists = cheapest_prior_works.includes(wnum);
      if (prior_exists) {
        const cheapest_item = cheapest_work2item[wnum];
        const new_cheapest_work2item = compareCheapest(cheapest_item, cheapest_pair);
        cheapest_work2item[wnum] = new_cheapest_work2item[wnum];
      } else {
        cheapest_work2item[wnum] = cheapest_pair;
        cheapest_prior_works.push(wnum);
      }
    }
  }
  cheapest_work2item = removeExpensiveCandidatesFromDictionary(cheapest_work2item);
  return cheapest_work2item;
}

function cheapestItemsFromDictionaries(work2items: Array<Record<number, ItemObj>>): Record<number, ItemObj> {
  switch (work2items.length) {
    case 1:
      return work2items[0];
    case 2: {
      const [left_work2item, right_work2item] = work2items;
      return cheapestItemsFromDictionaries2(left_work2item, right_work2item);
    }
    default:
      return work2items[0];
  }
}

function cheapestItemFromItems2(left_item: ItemObj, right_item: ItemObj): ItemObj {
  if (right_item.item === 'item') return new MergeEnchants(right_item, left_item);
  if (left_item.item === 'item') return new MergeEnchants(left_item, right_item);
  let normal_item_obj: ItemObj;
  try {
    normal_item_obj = new MergeEnchants(left_item, right_item);
  } catch {
    return new MergeEnchants(right_item, left_item);
  }
  let reversed_item_obj: ItemObj;
  try {
    reversed_item_obj = new MergeEnchants(right_item, left_item);
  } catch {
    return normal_item_obj;
  }
  const cheapest_work2item = compareCheapest(normal_item_obj, reversed_item_obj);
  const prior_work = Number(Object.keys(cheapest_work2item)[0]);
  return cheapest_work2item[prior_work];
}

// stateless memo store bound to a single run
function createCheapestMemo() {
  const results = new Map<string, Record<number, ItemObj>>();
  const memoizeHashFromArgs = (args: [ItemObj[]]) => {
    const items = args[0];
    const hashes = items.map((item) => [typeof item.item === 'string' ? item.item[0] : undefined, [...item.enchantIds].sort(), item.work]);
    return JSON.stringify(hashes);
  };
  const memoizeCheapest = (func: (items: ItemObj[]) => Record<number, ItemObj>) => {
    return (...args: [ItemObj[]]) => {
      const key = memoizeHashFromArgs(args);
      const existing = results.get(key);
      if (existing) return existing;
      const computed = func(...args);
      results.set(key, computed);
      return computed;
    };
  };
  const cheapestItemsFromList = memoizeCheapest((items: ItemObj[]): Record<number, ItemObj> => {
    const item_count = items.length;
    switch (item_count) {
      case 1: {
        const item = items[0];
        const work2item: Record<number, ItemObj> = {};
        work2item[item.work] = item;
        return work2item;
      }
      case 2: {
        const left_item = items[0];
        const right_item = items[1];
        const cheapest_item = cheapestItemFromItems2(left_item, right_item);
        const work2item: Record<number, ItemObj> = {};
        work2item[cheapest_item.work] = cheapest_item;
        return work2item;
      }
      default: {
        return cheapestItemsFromListN(items, Math.floor(item_count / 2));
      }
    }
  });
  function cheapestItemsFromListN(items: ItemObj[], max_subcount: number): Record<number, ItemObj> {
    const cheapest_work2item: Record<number, ItemObj> = {};
    const cheapest_prior_works: number[] = [];
    for (let subcount = 1; subcount <= max_subcount; subcount++) {
      combinations(items, subcount).forEach((left_items) => {
        const right_items = items.filter((obj) => !left_items.includes(obj));
        const left_work2item = cheapestItemsFromList(left_items);
        const right_work2item = cheapestItemsFromList(right_items);
        const new_work2item = cheapestItemsFromDictionaries([left_work2item, right_work2item]);
        for (const work in new_work2item) {
          const wnum = Number(work);
          const new_item = new_work2item[wnum];
          const prior_exists = cheapest_prior_works.includes(wnum);
          if (prior_exists) {
            const cheapest_item = cheapest_work2item[wnum];
            const new_cheapest_work2item = compareCheapest(cheapest_item, new_item);
            cheapest_work2item[wnum] = new_cheapest_work2item[wnum];
          } else {
            cheapest_work2item[wnum] = new_item;
            cheapest_prior_works.push(wnum);
          }
        }
      });
    }
    return cheapest_work2item;
  }
  return { cheapestItemsFromList };
}

type Instruction = [unknown, unknown, number, number, number];

function getInstructions(comb: unknown, idList: Record<EnchantName, number>, itemName: ItemName): Instruction[] {
  const node = comb as any;
  const instructions: Instruction[] = [];
  let child_instructions: Instruction[];
  for (const key in node) {
    if (key === 'left' || key === 'right') {
      if (typeof node[key].identifier === 'undefined') {
        child_instructions = getInstructions(node[key], idList, itemName);
        child_instructions.forEach((si) => instructions.push(si));
      }
      let id: number | undefined;
      if (Number.isInteger(node[key].identifier)) {
        id = node[key].identifier;
        node[key].identifier = Object.keys(idList).find((k) => idList[k] === id);
      } else if (typeof node[key].identifier === 'string' && !Object.keys(idList).includes(node[key].identifier)) {
        node[key].identifier = itemName;
      }
    }
  }
  let merge_cost: number;
  if (Number.isInteger(node.right.value)) merge_cost = node.right.value + 2 ** node.left.work - 1 + 2 ** node.right.work - 1;
  else merge_cost = node.right.mergeCost + 2 ** node.left.work - 1 + 2 ** node.right.work - 1;
  const work = Math.max(node.left.work, node.right.work) + 1;
  const single_instruction: Instruction = [node.left, node.right, merge_cost, experience(merge_cost), 2 ** work - 1];
  instructions.push(single_instruction);
  return instructions;
}

function buildContext(data: EnchantData) {
  let ID_LIST: Record<EnchantName, number> = {};
  let ENCHANTMENT2WEIGHT: number[] = [];
  if ('ids' in data && 'weights' in data) {
    ID_LIST = data.ids;
    ENCHANTMENT2WEIGHT = data.weights;
  } else if ('weightsByName' in data) {
    ID_LIST = {};
    ENCHANTMENT2WEIGHT = [];
    let id = 0;
    for (const name of Object.keys(data.weightsByName)) {
      ID_LIST[name] = id;
      ENCHANTMENT2WEIGHT[id] = data.weightsByName[name];
      id++;
    }
  } else {
    throw new Error('runEnchantProcess: missing data { ids, weights } or { weightsByName }');
  }
  return { ID_LIST, ENCHANTMENT2WEIGHT } as const;
}

export function runEnchantProcess(options: RunOptions) {
  const { item, enchants, mode = 'levels', data } = options;
  const { ID_LIST, ENCHANTMENT2WEIGHT } = buildContext(data);
  const ITEM_NAME = item;
  const enchant_objs: ItemObj[] = [];
  enchants.forEach((enchant) => {
    const id = ID_LIST[enchant[0]];
    const e_obj = new ItemObj('book', enchant[1] * ENCHANTMENT2WEIGHT[id], [id]);
    e_obj.combineTree = { identifier: id, value: e_obj.value, work: e_obj.work } as CombineLeaf;
    enchant_objs.push(e_obj);
  });
  let mostExpensive = enchant_objs.reduce((maxIndex, it, currentIndex, array) => (it.value > array[maxIndex].value ? currentIndex : maxIndex), 0);
  let base: ItemObj;
  if (ITEM_NAME === 'book') {
    const id = enchant_objs[mostExpensive].enchantIds[0];
    base = new ItemObj(id as unknown as number, enchant_objs[mostExpensive].value);
    base.enchantIds.push(id);
    enchant_objs.splice(mostExpensive, 1);
    if (enchant_objs.length) {
      mostExpensive = enchant_objs.reduce((maxIndex, it, currentIndex, array) => (it.value > array[maxIndex].value ? currentIndex : maxIndex), 0);
    } else {
      mostExpensive = 0;
    }
  } else {
    base = new ItemObj('item');
  }
  const merged_item = new MergeEnchants(base, enchant_objs[mostExpensive]);
  if ('mergeCost' in merged_item.combineTree) {
    const node = merged_item.combineTree as CombineNode;
    node.left = { identifier: base.item, value: 0, work: 0 };
    merged_item.combineTree = node;
  }
  enchant_objs.splice(mostExpensive, 1);

  const all_objs = enchant_objs.concat(merged_item);
  const { cheapestItemsFromList } = createCheapestMemo();
  const cheapest_items = cheapestItemsFromList(all_objs);

  let cheapest_cost = Infinity;
  let cheapest_key: number | undefined;
  for (const key in cheapest_items) {
    const idx = Number(key);
    const candidate = cheapest_items[idx];
    const item_cost = mode === 'levels' ? candidate.totalXp : candidate.work;
    if (item_cost < cheapest_cost) {
      cheapest_cost = item_cost;
      cheapest_key = idx;
    }
  }
  const cheapest_item = cheapest_key !== undefined ? cheapest_items[cheapest_key] : merged_item;
  const instructions = getInstructions(cheapest_item.combineTree, ID_LIST, ITEM_NAME);

  let max_levels = 0;
  instructions.forEach((instr) => {
    max_levels += instr[2];
  });
  const max_xp = experience(max_levels);

  return {
    msg: 'complete' as const,
    item_obj: cheapest_item,
    instructions,
    extra: [max_levels, max_xp] as const,
    enchants,
  };
}
