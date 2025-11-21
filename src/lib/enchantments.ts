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
	levelMax: string;
	weight: string;
	incompatible: EnchantmentKey[];
	items: Array<ItemKey>;
};

export const enchantmentDetails: Record<EnchantmentKey, Enchantment> = {
	protection: {
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
		levelMax: '1',
		weight: '2',
		incompatible: [],
		items: ['iron-helmet', 'chainmail-helmet', 'leather-cap', 'diamond-helmet', 'turtle-shell']
	},
	'bane-of-arthropods': {
		levelMax: '5',
		weight: '5',
		incompatible: ['smite', 'sharpness', 'density', 'breach'],
		items: ['iron-sword', 'diamond-sword', 'iron-axe', 'diamond-axe', 'mace']
	},
	'blast-protection': {
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
		levelMax: '1',
		weight: '1',
		incompatible: ['riptide'],
		items: ['trident']
	},
	'depth-strider': {
		levelMax: '3',
		weight: '2',
		incompatible: ['frost-walker'],
		items: ['iron-boots', 'chainmail-boots', 'leather-boots', 'diamond-boots']
	},
	efficiency: {
		levelMax: '5',
		weight: '10',
		incompatible: [],
		items: ['iron-pickaxe', 'iron-shovel', 'iron-axe']
	},
	'feather-falling': {
		levelMax: '4',
		weight: '5',
		incompatible: [],
		items: ['iron-boots', 'chainmail-boots', 'leather-boots', 'diamond-boots']
	},
	'fire-aspect': {
		levelMax: '2',
		weight: '2',
		incompatible: [],
		items: ['iron-sword', 'diamond-sword', 'mace']
	},
	'fire-protection': {
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
		levelMax: '1',
		weight: '2',
		incompatible: [],
		items: ['bow']
	},
	fortune: {
		levelMax: '3',
		weight: '2',
		incompatible: ['silk-touch'],
		items: ['iron-pickaxe', 'diamond-pickaxe']
	},
	'frost-walker': {
		levelMax: '2',
		weight: '2',
		incompatible: ['depth-strider'],
		items: ['iron-boots', 'chainmail-boots', 'leather-boots', 'diamond-boots']
	},
	impaling: {
		levelMax: '5',
		weight: '2',
		incompatible: [],
		items: ['trident']
	},
	infinity: {
		levelMax: '1',
		weight: '1',
		incompatible: ['mending'],
		items: ['bow']
	},
	knockback: {
		levelMax: '2',
		weight: '5',
		incompatible: [],
		items: ['iron-sword', 'diamond-sword']
	},
	looting: {
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['iron-sword', 'diamond-sword']
	},
	loyalty: {
		levelMax: '3',
		weight: '5',
		incompatible: ['riptide'],
		items: ['trident']
	},
	'luck-of-the-sea': {
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['fishing-rod']
	},
	lure: {
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['fishing-rod']
	},
	mending: {
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
		levelMax: '1',
		weight: '2',
		incompatible: ['piercing'],
		items: ['crossbow']
	},
	piercing: {
		levelMax: '4',
		weight: '1',
		incompatible: ['multishot'],
		items: ['crossbow']
	},
	power: {
		levelMax: '5',
		weight: '1',
		incompatible: [],
		items: ['bow']
	},
	'projectile-protection': {
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
		levelMax: '2',
		weight: '2',
		incompatible: [],
		items: ['bow']
	},
	'quick-charge': {
		levelMax: '3',
		weight: '1',
		incompatible: [],
		items: ['crossbow']
	},
	respiration: {
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['iron-helmet', 'chainmail-helmet', 'leather-cap', 'diamond-helmet', 'turtle-shell']
	},
	riptide: {
		levelMax: '3',
		weight: '2',
		incompatible: ['channeling', 'loyalty'],
		items: ['trident']
	},
	sharpness: {
		levelMax: '5',
		weight: '10',
		incompatible: ['bane-of-arthropods', 'smite'],
		items: ['iron-sword', 'diamond-sword', 'iron-axe', 'diamond-axe']
	},
	'silk-touch': {
		levelMax: '1',
		weight: '1',
		incompatible: ['fortune'],
		items: ['iron-pickaxe', 'iron-shovel', 'iron-axe']
	},
	smite: {
		levelMax: '5',
		weight: '5',
		incompatible: ['bane-of-arthropods', 'sharpness', 'density', 'breach'],
		items: ['iron-sword', 'diamond-sword', 'iron-axe', 'diamond-axe', 'mace']
	},
	'soul-speed': {
		levelMax: '3',
		weight: '4',
		incompatible: [],
		items: ['iron-boots', 'chainmail-boots', 'leather-boots', 'diamond-boots']
	},
	sweeping: {
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['iron-sword', 'diamond-sword']
	},
	'swift-sneak': {
		levelMax: '3',
		weight: '4',
		incompatible: [],
		items: ['iron-leggings', 'chainmail-leggings', 'leather-pants', 'diamond-leggings']
	},
	thorns: {
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
		levelMax: '5',
		weight: '5',
		incompatible: ['breach', 'smite', 'bane-of-arthropods'],
		items: ['mace']
	},
	breach: {
		levelMax: '4',
		weight: '2',
		incompatible: ['density', 'smite', 'bane-of-arthropods'],
		items: ['mace']
	},
	'wind-burst': {
		levelMax: '3',
		weight: '2',
		incompatible: [],
		items: ['mace']
	}
};
