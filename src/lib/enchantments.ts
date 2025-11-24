import type { ItemKey } from './items';

export function calculateEmeraldCostRange(enchantmentLevel: number) {
	const min = Math.max(1, 2 + 3 * enchantmentLevel);
	const max = Math.min(64, 6 + 13 * enchantmentLevel);
	return [min, max];
}

export const enchantableItems: Array<ItemKey> = [
	// Armor
	'iron-helmet',
	'iron-chestplate',
	'iron-leggings',
	'iron-boots',
	'chainmail-helmet',
	'chainmail-chestplate',
	'chainmail-leggings',
	'chainmail-boots',
	'leather-cap',
	'leather-tunic',
	'leather-pants',
	'leather-boots',
	'diamond-helmet',
	'diamond-chestplate',
	'diamond-leggings',
	'diamond-boots',
	'turtle-shell',
	'elytra',

	// Weapons & tools
	'iron-sword',
	'iron-axe',
	'iron-pickaxe',
	'iron-shovel',
	'diamond-axe',
	'diamond-pickaxe',
	'diamond-shovel',
	'diamond-sword',
	'mace',
	'trident',

	// Ranged & utility
	'bow',
	'crossbow',
	'compass',
	'shield',
	'brush',
	'fishing-rod',
	'shears',
	'flint-and-steel',
	'carrot-on-a-stick',
	'warped-fungus-on-a-stick',
	'carved-pumpkin'
] as const;

export type EnchantmentableItem = (typeof enchantableItems)[number];

export const enchantments = [
	'protection',
	'aqua-affinity',
	'bane-of-arthropods',
	'blast-protection',
	'channeling',
	'curse-of-binding',
	'curse-of-vanishing',
	'depth-strider',
	'efficiency',
	'feather-falling',
	'fire-aspect',
	'fire-protection',
	'flame',
	'fortune',
	'frost-walker',
	'impaling',
	'infinity',
	'knockback',
	'looting',
	'loyalty',
	'luck-of-the-sea',
	'lure',
	'mending',
	'multishot',
	'piercing',
	'power',
	'projectile-protection',
	'punch',
	'quick-charge',
	'respiration',
	'riptide',
	'sharpness',
	'silk-touch',
	'smite',
	'soul-speed',
	'sweeping',
	'swift-sneak',
	'thorns',
	'unbreaking',
	'density',
	'breach',
	'wind-burst'
] as const;

export type EnchantmentKey = (typeof enchantments)[number];
export type Enchantment = {
	key: EnchantmentKey;
	label: string;
	levelMax: string;
	weight: string;
	incompatible: EnchantmentKey[];
	items: Array<EnchantmentableItem>;
};

export const enchantmentDetails: Record<EnchantmentKey, Enchantment> = {
	protection: {
		key: 'protection',
		label: 'Protection',
		levelMax: '4',
		weight: '10',
		incompatible: ['blast-protection', 'fire-protection', 'projectile-protection'],
		items: [
			'iron-helmet',
			'iron-chestplate',
			'iron-leggings',
			'iron-boots',
			'chainmail-helmet',
			'chainmail-chestplate',
			'chainmail-leggings',
			'chainmail-boots',
			'leather-cap',
			'leather-tunic',
			'leather-pants',
			'leather-boots',
			'diamond-helmet',
			'diamond-chestplate',
			'diamond-leggings',
			'diamond-boots',
			'turtle-shell'
		]
	},
	'aqua-affinity': {
		key: 'aqua-affinity',
		label: 'Aqua Affinity',
		levelMax: '1',
		weight: '2',
		incompatible: [],
		items: ['iron-helmet', 'chainmail-helmet', 'leather-cap', 'diamond-helmet', 'turtle-shell']
	},
	'bane-of-arthropods': {
		key: 'bane-of-arthropods',
		label: 'Bane of Arthropods',
		levelMax: '5',
		weight: '5',
		incompatible: ['smite', 'sharpness', 'density', 'breach'],
		items: ['iron-sword', 'diamond-sword', 'iron-axe', 'diamond-axe', 'mace']
	},
	'blast-protection': {
		key: 'blast-protection',
		label: 'Blast Protection',
		levelMax: '4',
		weight: '2',
		incompatible: ['fire-protection', 'protection', 'projectile-protection'],
		items: [
			'iron-helmet',
			'iron-chestplate',
			'iron-leggings',
			'iron-boots',
			'chainmail-helmet',
			'chainmail-chestplate',
			'chainmail-leggings',
			'chainmail-boots',
			'leather-cap',
			'leather-tunic',
			'leather-pants',
			'leather-boots',
			'diamond-helmet',
			'diamond-chestplate',
			'diamond-leggings',
			'diamond-boots',
			'turtle-shell'
		]
	},
	channeling: {
		key: 'channeling',
		label: 'Channeling',
		levelMax: '1',
		weight: '1',
		incompatible: ['riptide'],
		items: ['trident']
	},
	'depth-strider': {
		key: 'depth-strider',
		label: 'Depth Strider',
		levelMax: '3',
		weight: '2',
		incompatible: ['frost-walker'],
		items: ['iron-boots', 'chainmail-boots', 'leather-boots', 'diamond-boots']
	},
	efficiency: {
		key: 'efficiency',
		label: 'Efficiency',
		levelMax: '5',
		weight: '10',
		incompatible: [],
		items: ['iron-pickaxe', 'iron-shovel', 'iron-axe']
	},
	'feather-falling': {
		key: 'feather-falling',
		label: 'Feather Falling',
		levelMax: '4',
		weight: '5',
		incompatible: [],
		items: ['iron-boots', 'chainmail-boots', 'leather-boots', 'diamond-boots']
	},
	'fire-aspect': {
		key: 'fire-aspect',
		label: 'Fire Aspect',
		levelMax: '2',
		weight: '2',
		incompatible: [],
		items: ['iron-sword', 'diamond-sword', 'mace']
	},
	'fire-protection': {
		key: 'fire-protection',
		label: 'Fire Protection',
		levelMax: '4',
		weight: '5',
		incompatible: ['blast-protection', 'protection', 'projectile-protection'],
		items: [
			'iron-helmet',
			'iron-chestplate',
			'iron-leggings',
			'iron-boots',
			'chainmail-helmet',
			'chainmail-chestplate',
			'chainmail-leggings',
			'chainmail-boots',
			'leather-cap',
			'leather-tunic',
			'leather-pants',
			'leather-boots',
			'diamond-helmet',
			'diamond-chestplate',
			'diamond-leggings',
			'diamond-boots',
			'turtle-shell'
		]
	},
	flame: {
		key: 'flame',
		label: 'Flame',
		levelMax: '1',
		weight: '2',
		incompatible: [],
		items: ['bow']
	},
	fortune: {
		key: 'fortune',
		label: 'Fortune',
		levelMax: '3',
		weight: '2',
		incompatible: ['silk-touch'],
		items: ['iron-pickaxe', 'diamond-pickaxe']
	},
	'frost-walker': {
		key: 'frost-walker',
		label: 'Frost Walker',
		levelMax: '2',
		weight: '2',
		incompatible: ['depth-strider'],
		items: ['iron-boots', 'chainmail-boots', 'leather-boots', 'diamond-boots']
	},
	impaling: {
		key: 'impaling',
		label: 'Impaling',
		levelMax: '5',
		weight: '2',
		incompatible: [],
		items: ['trident']
	},
	infinity: {
		key: 'infinity',
		label: 'Infinity',
		levelMax: '1',
		weight: '1',
		incompatible: ['mending'],
		items: ['bow']
	},
	knockback: {
		key: 'knockback',
		label: 'Knockback',
		levelMax: '2',
		weight: '5',
		incompatible: [],
		items: ['iron-sword', 'diamond-sword']
	},
	looting: {
		key: 'looting',
		label: 'Looting',
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['iron-sword', 'diamond-sword']
	},
	loyalty: {
		key: 'loyalty',
		label: 'Loyalty',
		levelMax: '3',
		weight: '5',
		incompatible: ['riptide'],
		items: ['trident']
	},
	'luck-of-the-sea': {
		key: 'luck-of-the-sea',
		label: 'Luck of the Sea',
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['fishing-rod']
	},
	lure: {
		key: 'lure',
		label: 'Lure',
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['fishing-rod']
	},
	mending: {
		key: 'mending',
		label: 'Mending',
		levelMax: '1',
		weight: '2',
		incompatible: ['infinity'],
		items: [
			'iron-helmet',
			'iron-chestplate',
			'iron-leggings',
			'iron-boots',
			'chainmail-helmet',
			'chainmail-chestplate',
			'chainmail-leggings',
			'chainmail-boots',
			'leather-cap',
			'leather-tunic',
			'leather-pants',
			'leather-boots',
			'diamond-helmet',
			'diamond-chestplate',
			'diamond-leggings',
			'diamond-boots',
			'iron-pickaxe',
			'iron-shovel',
			'iron-axe',
			'iron-sword',
			'brush',
			'fishing-rod',
			'bow',
			'shears',
			'flint-and-steel',
			'carrot-on-a-stick',
			'warped-fungus-on-a-stick',
			'shield',
			'elytra',
			'trident',
			'turtle-shell',
			'crossbow',
			'mace'
		]
	},
	multishot: {
		key: 'multishot',
		label: 'Multishot',
		levelMax: '1',
		weight: '2',
		incompatible: ['piercing'],
		items: ['crossbow']
	},
	piercing: {
		key: 'piercing',
		label: 'Piercing',
		levelMax: '4',
		weight: '1',
		incompatible: ['multishot'],
		items: ['crossbow']
	},
	power: {
		key: 'power',
		label: 'Power',
		levelMax: '5',
		weight: '1',
		incompatible: [],
		items: ['bow']
	},
	'projectile-protection': {
		key: 'projectile-protection',
		label: 'Projectile Protection',
		levelMax: '4',
		weight: '1',
		incompatible: ['protection', 'blast-protection', 'fire-protection'],
		items: [
			'iron-helmet',
			'iron-chestplate',
			'iron-leggings',
			'iron-boots',
			'chainmail-helmet',
			'chainmail-chestplate',
			'chainmail-leggings',
			'chainmail-boots',
			'leather-cap',
			'leather-tunic',
			'leather-pants',
			'leather-boots',
			'diamond-helmet',
			'diamond-chestplate',
			'diamond-leggings',
			'diamond-boots',
			'turtle-shell'
		]
	},
	punch: {
		key: 'punch',
		label: 'Punch',
		levelMax: '2',
		weight: '2',
		incompatible: [],
		items: ['bow']
	},
	'quick-charge': {
		key: 'quick-charge',
		label: 'Quick Charge',
		levelMax: '3',
		weight: '1',
		incompatible: [],
		items: ['crossbow']
	},
	respiration: {
		key: 'respiration',
		label: 'Respiration',
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['iron-helmet', 'chainmail-helmet', 'leather-cap', 'diamond-helmet', 'turtle-shell']
	},
	riptide: {
		key: 'riptide',
		label: 'Riptide',
		levelMax: '3',
		weight: '2',
		incompatible: ['channeling', 'loyalty'],
		items: ['trident']
	},
	sharpness: {
		key: 'sharpness',
		label: 'Sharpness',
		levelMax: '5',
		weight: '10',
		incompatible: ['bane-of-arthropods', 'smite'],
		items: ['iron-sword', 'diamond-sword', 'iron-axe', 'diamond-axe']
	},
	'silk-touch': {
		key: 'silk-touch',
		label: 'Silk Touch',
		levelMax: '1',
		weight: '1',
		incompatible: ['fortune'],
		items: ['iron-pickaxe', 'iron-shovel', 'iron-axe']
	},
	smite: {
		key: 'smite',
		label: 'Smite',
		levelMax: '5',
		weight: '5',
		incompatible: ['bane-of-arthropods', 'sharpness', 'density', 'breach'],
		items: ['iron-sword', 'diamond-sword', 'iron-axe', 'diamond-axe', 'mace']
	},
	'soul-speed': {
		key: 'soul-speed',
		label: 'Soul Speed',
		levelMax: '3',
		weight: '4',
		incompatible: [],
		items: ['iron-boots', 'chainmail-boots', 'leather-boots', 'diamond-boots']
	},
	sweeping: {
		key: 'sweeping',
		label: 'Sweeping',
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['iron-sword', 'diamond-sword']
	},
	'swift-sneak': {
		key: 'swift-sneak',
		label: 'Swift Sneak',
		levelMax: '3',
		weight: '4',
		incompatible: [],
		items: ['iron-leggings', 'chainmail-leggings', 'leather-pants', 'diamond-leggings']
	},
	thorns: {
		key: 'thorns',
		label: 'Thorns',
		levelMax: '3',
		weight: '4',
		incompatible: [],
		items: [
			'iron-helmet',
			'iron-chestplate',
			'iron-leggings',
			'iron-boots',
			'chainmail-helmet',
			'chainmail-chestplate',
			'chainmail-leggings',
			'chainmail-boots',
			'leather-cap',
			'leather-tunic',
			'leather-pants',
			'leather-boots',
			'diamond-helmet',
			'diamond-chestplate',
			'diamond-leggings',
			'diamond-boots',
			'turtle-shell'
		]
	},
	unbreaking: {
		key: 'unbreaking',
		label: 'Unbreaking',
		levelMax: '3',
		weight: '5',
		incompatible: [],
		items: [
			'iron-helmet',
			'iron-chestplate',
			'iron-leggings',
			'iron-boots',
			'chainmail-helmet',
			'chainmail-chestplate',
			'chainmail-leggings',
			'chainmail-boots',
			'leather-cap',
			'leather-tunic',
			'leather-pants',
			'leather-boots',
			'diamond-helmet',
			'diamond-chestplate',
			'diamond-leggings',
			'diamond-boots',
			'iron-pickaxe',
			'iron-shovel',
			'iron-axe',
			'iron-sword',
			'brush',
			'fishing-rod',
			'bow',
			'shears',
			'flint-and-steel',
			'carrot-on-a-stick',
			'warped-fungus-on-a-stick',
			'shield',
			'elytra',
			'trident',
			'turtle-shell',
			'crossbow',
			'mace'
		]
	},
	'curse-of-binding': {
		key: 'curse-of-binding',
		label: 'Curse of Binding',
		levelMax: '1',
		weight: '4',
		incompatible: [],
		items: [
			'iron-helmet',
			'iron-chestplate',
			'iron-leggings',
			'iron-boots',
			'chainmail-helmet',
			'chainmail-chestplate',
			'chainmail-leggings',
			'chainmail-boots',
			'leather-cap',
			'leather-tunic',
			'leather-pants',
			'leather-boots',
			'diamond-helmet',
			'diamond-chestplate',
			'diamond-leggings',
			'diamond-boots',
			'elytra',
			'pumpkin',
			'turtle-shell'
		]
	},
	'curse-of-vanishing': {
		key: 'curse-of-vanishing',
		label: 'Curse of Vanishing',
		levelMax: '1',
		weight: '4',
		incompatible: [],
		items: [
			'iron-helmet',
			'iron-chestplate',
			'iron-leggings',
			'iron-boots',
			'chainmail-helmet',
			'chainmail-chestplate',
			'chainmail-leggings',
			'chainmail-boots',
			'leather-cap',
			'leather-tunic',
			'leather-pants',
			'leather-boots',
			'diamond-helmet',
			'diamond-chestplate',
			'diamond-leggings',
			'diamond-boots',
			'iron-pickaxe',
			'iron-shovel',
			'iron-axe',
			'iron-sword',
			'brush',
			'fishing-rod',
			'bow',
			'shears',
			'flint-and-steel',
			'carrot-on-a-stick',
			'warped-fungus-on-a-stick',
			'shield',
			'elytra',
			'pumpkin',
			'trident',
			'turtle-shell',
			'crossbow',
			'mace'
		]
	},
	density: {
		key: 'density',
		label: 'Density',
		levelMax: '5',
		weight: '5',
		incompatible: ['breach', 'smite', 'bane-of-arthropods'],
		items: ['mace']
	},
	breach: {
		key: 'breach',
		label: 'Breach',
		levelMax: '4',
		weight: '2',
		incompatible: ['density', 'smite', 'bane-of-arthropods'],
		items: ['mace']
	},
	'wind-burst': {
		key: 'wind-burst',
		label: 'Wind Burst',
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['mace']
	}
};

export const getPossibleEnchantmentsForItem = (item: EnchantmentableItem) => {
	return Object.entries(enchantmentDetails).reduce((acc, [, details]) => {
		if (details.items.includes(item)) {
			acc.push(details);
		}
		return acc;
	}, [] as Enchantment[]);
};
