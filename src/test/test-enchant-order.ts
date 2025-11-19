import { runEnchantProcess } from './enchant-order.ts';

const enchants: [string, number][] = [
  ['sharpness', 5],
  ['unbreaking', 3],
  ['mending', 1],
  ['sweeping', 3],
];

const enchantData = {
  ids: {
    sharpness: 0,
    unbreaking: 1,
    mending: 2,
    sweeping: 3,
  },
  weights: [1, 1, 2, 2],
};

const result = runEnchantProcess({
  item: 'item',
  enchants,
  mode: 'levels',
  data: enchantData,
});

console.log('RESULT:');
console.dir(result, { depth: null });
