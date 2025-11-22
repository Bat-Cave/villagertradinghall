import { type ItemKey } from './items';

type VillagerTradeItem = {
	item: ItemKey;
	amount: number;
	enchanted?: boolean;
};

type VillagerTrade = {
	id: string;
	level: 'novice' | 'apprentice' | 'journeyman' | 'expert' | 'master';
	probability: number;
	wants: Array<VillagerTradeItem>;
	gives: Array<VillagerTradeItem>;
};

type VillagerProfession = {
	label: string;
	image: string;
	possibleTrades: VillagerTrade[];
};

export const professions: Record<string, VillagerProfession> = {
	unemployed: {
		label: 'Unemployed',
		image: '/assets/villagers/plains-unemployed.png',
		possibleTrades: []
	},
	armorer: {
		label: 'Armorer',
		image: '/assets/villagers/plains-armorer.png',
		possibleTrades: [
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'coal',
						amount: 15
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'armorer-novice-coal-for-emerald'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 5
					}
				],
				gives: [
					{
						item: 'iron-helmet',
						amount: 1
					}
				],
				id: 'armorer-novice-emerald-for-iron-helmet'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 9
					}
				],
				gives: [
					{
						item: 'iron-chestplate',
						amount: 1
					}
				],
				id: 'armorer-novice-emerald-for-iron-chestplate'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 7
					}
				],
				gives: [
					{
						item: 'iron-leggings',
						amount: 1
					}
				],
				id: 'armorer-novice-emerald-for-iron-leggings'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 4
					}
				],
				gives: [
					{
						item: 'iron-boots',
						amount: 1
					}
				],
				id: 'armorer-novice-emerald-for-iron-boots'
			},
			{
				probability: 0.5,
				level: 'apprentice',
				wants: [
					{
						item: 'iron-ingot',
						amount: 4
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'armorer-apprentice-iron-ingot-for-emerald'
			},
			{
				probability: 0.5,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 36
					}
				],
				gives: [
					{
						item: 'bell',
						amount: 1
					}
				],
				id: 'armorer-apprentice-emerald-for-bell'
			},
			{
				probability: 0.5,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'chainmail-leggings',
						amount: 1
					}
				],
				id: 'armorer-apprentice-emerald-for-chainmail-leggings'
			},
			{
				probability: 0.5,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'chainmail-boots',
						amount: 1
					}
				],
				id: 'armorer-apprentice-emerald-for-chainmail-boots'
			},
			{
				probability: 0.4,
				level: 'journeyman',
				wants: [
					{
						item: 'lava-bucket',
						amount: 1
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'armorer-journeyman-lava-bucket-for-emerald'
			},
			{
				probability: 0.4,
				level: 'journeyman',
				wants: [
					{
						item: 'diamond',
						amount: 1
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'armorer-journeyman-diamond-for-emerald'
			},
			{
				probability: 0.4,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'chainmail-helmet',
						amount: 1
					}
				],
				id: 'armorer-journeyman-emerald-for-chainmail-helmet'
			},
			{
				probability: 0.4,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 4
					}
				],
				gives: [
					{
						item: 'chainmail-chestplate',
						amount: 1
					}
				],
				id: 'armorer-journeyman-emerald-for-chainmail-chestplate'
			},
			{
				probability: 0.4,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 5
					}
				],
				gives: [
					{
						item: 'shield',
						amount: 1
					}
				],
				id: 'armorer-journeyman-emerald-for-shield'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 26
					}
				],
				gives: [
					{
						item: 'diamond-leggings',
						amount: 1,
						enchanted: true
					}
				],
				id: 'armorer-expert-emerald-for-enchanted-diamond-leggings'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 20
					}
				],
				gives: [
					{
						item: 'diamond-boots',
						amount: 1,
						enchanted: true
					}
				],
				id: 'armorer-expert-emerald-for-enchanted-diamond-boots'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 20
					}
				],
				gives: [
					{
						item: 'diamond-helmet',
						amount: 1,
						enchanted: true
					}
				],
				id: 'armorer-master-emerald-for-enchanted-diamond-helmet'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 28
					}
				],
				gives: [
					{
						item: 'diamond-chestplate',
						amount: 1,
						enchanted: true
					}
				],
				id: 'armorer-master-emerald-for-enchanted-diamond-chestplate'
			}
		]
	},
	butcher: {
		label: 'Butcher',
		image: '/assets/villagers/plains-butcher.png',
		possibleTrades: [
			{
				probability: 0.5,
				level: 'novice',
				wants: [
					{
						item: 'raw-chicken',
						amount: 14
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'butcher-novice-raw-chicken-for-emerald'
			},
			{
				probability: 0.5,
				level: 'novice',
				wants: [
					{
						item: 'raw-rabbit',
						amount: 4
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'butcher-novice-raw-rabbit-for-emerald'
			},
			{
				probability: 0.5,
				level: 'novice',
				wants: [
					{
						item: 'raw-porkchop',
						amount: 7
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'butcher-novice-raw-porkchop-for-emerald'
			},
			{
				probability: 0.5,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'rabbit-stew',
						amount: 1
					}
				],
				id: 'butcher-novice-emerald-for-rabbit-stew'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'coal',
						amount: 15
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'butcher-apprentice-coal-for-emerald'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cooked-chicken',
						amount: 8
					}
				],
				id: 'butcher-apprentice-emerald-for-cooked-chicken'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cooked-porkchop',
						amount: 5
					}
				],
				id: 'butcher-apprentice-emerald-for-cooked-porkchop'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'raw-beef',
						amount: 10
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'butcher-journeyman-raw-beef-for-emerald'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'raw-mutton',
						amount: 7
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'butcher-journeyman-raw-mutton-for-emerald'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'dried-kelp-block',
						amount: 10
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'butcher-expert-dried-kelp-block-for-emerald'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'sweet-berries',
						amount: 10
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'butcher-master-sweet-berries-for-emerald'
			}
		]
	},
	cartographer: {
		label: 'Cartographer',
		image: '/assets/villagers/plains-cartographer.png',
		possibleTrades: [
			{
				probability: 1,
				level: 'novice',
				wants: [
					{
						item: 'paper',
						amount: 24
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'cartographer-novice-paper-for-emerald'
			},
			{
				probability: 1,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 7
					}
				],
				gives: [
					{
						item: 'empty-map',
						amount: 1
					}
				],
				id: 'cartographer-novice-emerald-for-empty-map'
			},
			{
				probability: 0.5,
				level: 'apprentice',
				wants: [
					{
						item: 'glass-pane',
						amount: 11
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'cartographer-apprentice-glass-pane-for-emerald'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 8
					},
					{
						item: 'compass',
						amount: 1
					}
				],
				gives: [
					{
						item: 'explorer-map',
						amount: 1
					}
				],
				id: 'cartographer-apprentice-emerald-and-compass-for-explorer-map'
			},
			{
				probability: 0.67,
				level: 'journeyman',
				wants: [
					{
						item: 'compass',
						amount: 1
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'cartographer-journeyman-compass-for-emerald'
			},
			{
				probability: 0.67,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 13
					},
					{
						item: 'compass',
						amount: 1
					}
				],
				gives: [
					{
						item: 'ocean-explorer-map',
						amount: 1
					}
				],
				id: 'cartographer-journeyman-emerald-and-compass-for-ocean-explorer-map'
			},
			{
				probability: 0.67,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 12
					},
					{
						item: 'compass',
						amount: 1
					}
				],
				gives: [
					{
						item: 'trial-explorer-map',
						amount: 1
					}
				],
				id: 'cartographer-journeyman-emerald-and-compass-for-trial-explorer-map'
			},
			{
				probability: 0.12,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 7
					}
				],
				gives: [
					{
						item: 'item-frame',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-item-frame'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'white-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-white-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'light-gray-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-light-gray-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'gray-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-gray-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'black-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-black-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'brown-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-brown-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'red-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-red-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'orange-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-orange-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'yellow-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-yellow-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'lime-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-lime-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'green-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-green-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'cyan-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-cyan-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'light-blue-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-light-blue-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'blue-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-blue-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'purple-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-purple-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'magenta-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-magenta-banner'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'pink-banner',
						amount: 1
					}
				],
				id: 'cartographer-expert-emerald-for-pink-banner'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 8
					}
				],
				gives: [
					{
						item: 'globe-banner-pattern',
						amount: 1
					}
				],
				id: 'cartographer-master-emerald-for-globe-banner-pattern'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 14
					},
					{
						item: 'compass',
						amount: 1
					}
				],
				gives: [
					{
						item: 'woodland-explorer-map',
						amount: 1
					}
				],
				id: 'cartographer-master-emerald-and-compass-for-woodland-explorer-map'
			}
		]
	},
	cleric: {
		label: 'Cleric',
		image: '/assets/villagers/plains-cleric.png',
		possibleTrades: [
			{
				probability: 1,
				level: 'novice',
				wants: [
					{
						item: 'rotten-flesh',
						amount: 32
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'cleric-novice-rotten-flesh-for-emerald'
			},
			{
				probability: 1,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'redstone-dust',
						amount: 2
					}
				],
				id: 'cleric-novice-emerald-for-redstone-dust'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'gold-ingot',
						amount: 3
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'cleric-apprentice-gold-ingot-for-emerald'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'lapis-lazuli',
						amount: 1
					}
				],
				id: 'cleric-apprentice-emerald-for-lapis-lazuli'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'rabbits-foot',
						amount: 2
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'cleric-journeyman-rabbits-foot-for-emerald'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 4
					}
				],
				gives: [
					{
						item: 'glowstone',
						amount: 1
					}
				],
				id: 'cleric-journeyman-emerald-for-glowstone'
			},
			{
				probability: 0.67,
				level: 'expert',
				wants: [
					{
						item: 'turtle-scute',
						amount: 4
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'cleric-expert-turtle-scute-for-emerald'
			},
			{
				probability: 0.67,
				level: 'expert',
				wants: [
					{
						item: 'glass-bottle',
						amount: 9
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'cleric-expert-glass-bottle-for-emerald'
			},
			{
				probability: 0.67,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 5
					}
				],
				gives: [
					{
						item: 'ender-pearl',
						amount: 1
					}
				],
				id: 'cleric-expert-emerald-for-ender-pearl'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'nether-wart',
						amount: 22
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'cleric-master-nether-wart-for-emerald'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'bottle-o-enchanting',
						amount: 1
					}
				],
				id: 'cleric-master-emerald-for-bottle-o-enchanting'
			}
		]
	},
	farmer: {
		label: 'Farmer',
		image: '/assets/villagers/plains-farmer.png',
		possibleTrades: [
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'wheat',
						amount: 20
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'farmer-novice-wheat-for-emerald'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'potato',
						amount: 26
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'farmer-novice-potato-for-emerald'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'carrot',
						amount: 22
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'farmer-novice-carrot-for-emerald'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'beetroot',
						amount: 15
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'farmer-novice-beetroot-for-emerald'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'bread',
						amount: 6
					}
				],
				id: 'farmer-novice-emerald-for-bread'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'pumpkin',
						amount: 6
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'farmer-apprentice-pumpkin-for-emerald'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'pumpkin-pie',
						amount: 4
					}
				],
				id: 'farmer-apprentice-emerald-for-pumpkin-pie'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'apple',
						amount: 4
					}
				],
				id: 'farmer-apprentice-emerald-for-apple'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'melon',
						amount: 4
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'farmer-journeyman-melon-for-emerald'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'cookie',
						amount: 18
					}
				],
				id: 'farmer-journeyman-emerald-for-cookie'
			},
			{
				// I don't know if this probability is actually correct. See https://minecraft.wiki/w/Farmer#cite_note-1
				probability: 0.86,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'suspicious-stew',
						amount: 1
					}
				],
				id: 'farmer-expert-emerald-for-suspicious-stew'
			},
			{
				probability: 0.14,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cake',
						amount: 1
					}
				],
				id: 'farmer-expert-emerald-for-cake'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'golden-carrot',
						amount: 3
					}
				],
				id: 'farmer-master-emerald-for-golden-carrot'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 4
					}
				],
				gives: [
					{
						item: 'glistering-melon-slice',
						amount: 3
					}
				],
				id: 'farmer-master-emerald-for-glistering-melon-slice'
			}
		]
	},
	fisherman: {
		label: 'Fisherman',
		image: '/assets/villagers/plains-fisherman.png',
		possibleTrades: [
			{
				probability: 0.5,
				level: 'novice',
				wants: [
					{
						item: 'string',
						amount: 20
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fisherman-novice-string-for-emerald'
			},
			{
				probability: 0.5,
				level: 'novice',
				wants: [
					{
						item: 'coal',
						amount: 10
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fisherman-novice-coal-for-emerald'
			},
			{
				probability: 0.5,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'bucket-of-cod',
						amount: 1
					}
				],
				id: 'fisherman-novice-emerald-for-bucket-of-cod'
			},
			{
				probability: 0.5,
				level: 'novice',
				wants: [
					{
						item: 'raw-cod',
						amount: 6
					},
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cooked-cod',
						amount: 6
					}
				],
				id: 'fisherman-novice-raw-cod-and-emerald-for-cooked-cod'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'raw-cod',
						amount: 15
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fisherman-apprentice-raw-cod-for-emerald'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 2
					}
				],
				gives: [
					{
						item: 'campfire',
						amount: 1
					}
				],
				id: 'fisherman-apprentice-emerald-for-campfire'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'raw-salmon',
						amount: 6
					},
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cooked-salmon',
						amount: 6
					}
				],
				id: 'fisherman-apprentice-raw-salmon-and-emerald-for-cooked-salmon'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'raw-salmon',
						amount: 13
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fisherman-journeyman-raw-salmon-for-emerald'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 15
					}
				],
				gives: [
					{
						item: 'fishing-rod',
						amount: 1,
						enchanted: true
					}
				],
				id: 'fisherman-journeyman-emerald-for-enchanted-fishing-rod'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'tropical-fish',
						amount: 6
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fisherman-expert-tropical-fish-for-emerald'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'pufferfish',
						amount: 4
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fisherman-master-pufferfish-for-emerald'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'boat',
						amount: 1
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fisherman-master-boat-for-emerald'
			}
		]
	},
	fletcher: {
		label: 'Fletcher',
		image: '/assets/villagers/plains-fletcher.png',
		possibleTrades: [
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'stick',
						amount: 32
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fletcher-novice-stick-for-emerald'
			},
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'arrow',
						amount: 16
					}
				],
				id: 'fletcher-novice-emerald-for-arrow'
			},
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'gravel',
						amount: 10
					},
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'flint',
						amount: 10
					}
				],
				id: 'fletcher-novice-gravel-and-emerald-for-flint'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'flint',
						amount: 26
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fletcher-apprentice-flint-for-emerald'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 2
					}
				],
				gives: [
					{
						item: 'bow',
						amount: 1
					}
				],
				id: 'fletcher-apprentice-emerald-for-bow'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'string',
						amount: 14
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fletcher-journeyman-string-for-emerald'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'crossbow',
						amount: 1
					}
				],
				id: 'fletcher-journeyman-emerald-for-crossbow'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'feather',
						amount: 24
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fletcher-expert-feather-for-emerald'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 14
					}
				],
				gives: [
					{
						item: 'bow',
						amount: 1,
						enchanted: true
					}
				],
				id: 'fletcher-expert-emerald-for-enchanted-bow'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'tripwire-hook',
						amount: 8
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'fletcher-master-tripwire-hook-for-emerald'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 15
					}
				],
				gives: [
					{
						item: 'crossbow',
						amount: 1,
						enchanted: true
					}
				],
				id: 'fletcher-master-emerald-for-enchanted-crossbow'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-weakness',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-weakness'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-poison',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-poison'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-regeneration',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-regeneration'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-harming',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-harming'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-healing',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-healing'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-water-breathing',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-water-breathing'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-turtle-master',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-turtle-master'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-slowness',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-slowness'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-swiftness',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-swiftness'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-fire-resistance',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-fire-resistance'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-leaping',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-leaping'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-invisibility',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-invisibility'
			},
			{
				probability: 0.67,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					},
					{
						item: 'arrow',
						amount: 5
					}
				],
				gives: [
					{
						item: 'tipped-arrow-night-vision',
						amount: 5
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-night-vision'
			}
		]
	},
	leatherworker: {
		label: 'Leatherworker',
		image: '/assets/villagers/plains-leatherworker.png',
		possibleTrades: [
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'leather',
						amount: 6
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'leatherworker-novice-leather-for-emerald'
			},
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'leather-pants',
						amount: 1
					}
				],
				id: 'leatherworker-novice-emerald-for-leather-pants'
			},
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 7
					}
				],
				gives: [
					{
						item: 'leather-tunic',
						amount: 1
					}
				],
				id: 'leatherworker-novice-emerald-for-leather-tunic'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'flint',
						amount: 26
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'leatherworker-apprentice-flint-for-emerald'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 5
					}
				],
				gives: [
					{
						item: 'leather-cap',
						amount: 1
					}
				],
				id: 'leatherworker-apprentice-emerald-for-leather-cap'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 4
					}
				],
				gives: [
					{
						item: 'leather-boots',
						amount: 1
					}
				],
				id: 'leatherworker-apprentice-emerald-for-leather-boots'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'rabbit-hide',
						amount: 9
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'leatherworker-journeyman-rabbit-hide-for-emerald'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 7
					}
				],
				gives: [
					{
						item: 'leather-tunic',
						amount: 1
					}
				],
				id: 'leatherworker-journeyman-emerald-for-leather-tunic'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'turtle-scute',
						amount: 4
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'leatherworker-expert-turtle-scute-for-emerald'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 6
					}
				],
				gives: [
					{
						item: 'leather-horse-armor',
						amount: 1
					}
				],
				id: 'leatherworker-expert-emerald-for-leather-horse-armor'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 5
					}
				],
				gives: [
					{
						item: 'leather-cap',
						amount: 1
					}
				],
				id: 'leatherworker-master-emerald-for-leather-cap'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 6
					}
				],
				gives: [
					{
						item: 'saddle',
						amount: 1
					}
				],
				id: 'leatherworker-master-emerald-for-saddle'
			}
		]
	},
	librarian: {
		label: 'Librarian',
		image: '/assets/villagers/plains-librarian.png',
		possibleTrades: [
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'paper',
						amount: 24
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'librarian-novice-paper-for-emerald'
			},
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 9
					}
				],
				gives: [
					{
						item: 'bookshelf',
						amount: 1
					}
				],
				id: 'librarian-novice-emerald-for-bookshelf'
			},
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 35
					},
					{
						item: 'book',
						amount: 1
					}
				],
				gives: [
					{
						item: 'book',
						amount: 1,
						enchanted: true
					}
				],
				id: 'librarian-novice-emerald-and-book-for-enchanted-book'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'book',
						amount: 4
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'librarian-apprentice-book-for-emerald'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'lantern',
						amount: 1
					}
				],
				id: 'librarian-apprentice-emerald-for-lantern'
			},
			{
				probability: 0.67,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 35
					},
					{
						item: 'book',
						amount: 1
					}
				],
				gives: [
					{
						item: 'book',
						amount: 1,
						enchanted: true
					}
				],
				id: 'librarian-apprentice-emerald-and-book-for-enchanted-book'
			},
			{
				probability: 0.67,
				level: 'journeyman',
				wants: [
					{
						item: 'ink-sac',
						amount: 5
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'librarian-journeyman-ink-sac-for-emerald'
			},
			{
				probability: 0.67,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'glass',
						amount: 4
					}
				],
				id: 'librarian-journeyman-emerald-for-glass'
			},
			{
				probability: 0.67,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 35
					},
					{
						item: 'book',
						amount: 1
					}
				],
				gives: [
					{
						item: 'book',
						amount: 1,
						enchanted: true
					}
				],
				id: 'librarian-journeyman-emerald-and-book-for-enchanted-book'
			},
			{
				probability: 0.5,
				level: 'expert',
				wants: [
					{
						item: 'book-and-quill',
						amount: 1
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'librarian-expert-book-and-quill-for-emerald'
			},
			{
				probability: 0.5,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 4
					}
				],
				gives: [
					{
						item: 'compass',
						amount: 1
					}
				],
				id: 'librarian-expert-emerald-for-compass'
			},
			{
				probability: 0.5,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 5
					}
				],
				gives: [
					{
						item: 'clock',
						amount: 1
					}
				],
				id: 'librarian-expert-emerald-for-clock'
			},
			{
				probability: 0.5,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 35
					},
					{
						item: 'book',
						amount: 1
					}
				],
				gives: [
					{
						item: 'book',
						amount: 1,
						enchanted: true
					}
				],
				id: 'librarian-expert-emerald-and-book-for-enchanted-book'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 20
					}
				],
				gives: [
					{
						item: 'name-tag',
						amount: 1
					}
				],
				id: 'librarian-master-emerald-for-name-tag'
			}
		]
	},
	mason: {
		label: 'Mason',
		image: '/assets/villagers/plains-mason.png',
		possibleTrades: [
			{
				probability: 1,
				level: 'novice',
				wants: [
					{
						item: 'clay-ball',
						amount: 10
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'mason-novice-clay-ball-for-emerald'
			},
			{
				probability: 1,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'brick',
						amount: 10
					}
				],
				id: 'mason-novice-emerald-for-brick'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'stone',
						amount: 20
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'mason-apprentice-stone-for-emerald'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'chiseled-stone-bricks',
						amount: 4
					}
				],
				id: 'mason-apprentice-emerald-for-chiseled-stone-bricks'
			},
			{
				probability: 0.29,
				level: 'journeyman',
				wants: [
					{
						item: 'granite',
						amount: 16
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'mason-journeyman-granite-for-emerald'
			},
			{
				probability: 0.29,
				level: 'journeyman',
				wants: [
					{
						item: 'andesite',
						amount: 16
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'mason-journeyman-andesite-for-emerald'
			},
			{
				probability: 0.29,
				level: 'journeyman',
				wants: [
					{
						item: 'diorite',
						amount: 16
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'mason-journeyman-diorite-for-emerald'
			},
			{
				probability: 0.29,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'dripstone-block',
						amount: 4
					}
				],
				id: 'mason-journeyman-emerald-for-dripstone-block'
			},
			{
				probability: 0.29,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'polished-andesite',
						amount: 4
					}
				],
				id: 'mason-journeyman-emerald-for-polished-andesite'
			},
			{
				probability: 0.29,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'polished-diorite',
						amount: 4
					}
				],
				id: 'mason-journeyman-emerald-for-polished-diorite'
			},
			{
				probability: 0.29,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'polished-granite',
						amount: 4
					}
				],
				id: 'mason-journeyman-emerald-for-polished-granite'
			},
			{
				probability: 0.06,
				level: 'expert',
				wants: [
					{
						item: 'nether-quartz',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'mason-expert-nether-quarts-for-emerald'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'white-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-white-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'light-gray-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-light-gray-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'gray-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-gray-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'black-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-black-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'brown-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-brown-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'red-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-red-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'orange-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-orange-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'yellow-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-yellow-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'lime-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-lime-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'green-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-green-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cyan-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-cyan-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'light-blue-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-light-blue-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'blue-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-blue-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'purple-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-purple-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'magenta-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-magenta-terracotta'
			},
			{
				probability: 0.74,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'pink-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-pink-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'white-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-white-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'light-gray-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-light-gray-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'gray-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-gray-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'black-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-black-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'brown-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-brown-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'red-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-red-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'orange-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-orange-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'yellow-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-yellow-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'lime-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-lime-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'green-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-green-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cyan-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-cyan-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'light-blue-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-light-blue-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'blue-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-blue-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'purple-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-purple-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'magenta-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-magenta-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'pink-glazed-terracotta',
						amount: 1
					}
				],
				id: 'mason-expert-emerald-for-pink-glazed-terracotta'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'quartz-pillar',
						amount: 1
					}
				],
				id: 'mason-master-emerald-for-quartz-pillar'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'block-of-quartz',
						amount: 1
					}
				],
				id: 'mason-master-emerald-for-block-of-quartz'
			}
		]
	},
	shepherd: {
		label: 'Shepherd',
		image: '/assets/villagers/plains-shepherd.png',
		possibleTrades: [
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'white-wool',
						amount: 18
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-novice-white-wool-for-emerald'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'brown-wool',
						amount: 18
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-novice-brown-wool-for-emerald'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'black-wool',
						amount: 18
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-novice-black-wool-for-emerald'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'gray-wool',
						amount: 18
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-novice-gray-wool-for-emerald'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 2
					}
				],
				gives: [
					{
						item: 'shears',
						amount: 1
					}
				],
				id: 'shepherd-novice-emerald-for-shears'
			},
			{
				probability: 0.05,
				level: 'apprentice',
				wants: [
					{
						item: 'white-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-white-dye-for-emerald'
			},
			{
				probability: 0.05,
				level: 'apprentice',
				wants: [
					{
						item: 'gray-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-gray-dye-for-emerald'
			},
			{
				probability: 0.05,
				level: 'apprentice',
				wants: [
					{
						item: 'black-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-black-dye-for-emerald'
			},
			{
				probability: 0.05,
				level: 'apprentice',
				wants: [
					{
						item: 'light-blue-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-light-blue-dye-for-emerald'
			},
			{
				probability: 0.05,
				level: 'apprentice',
				wants: [
					{
						item: 'lime-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-lime-dye-for-emerald'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'white-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-white-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'light-gray-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-light-gray-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'gray-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-gray-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'black-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-black-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'brown-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-brown-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'red-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-red-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'orange-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-orange-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'yellow-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-yellow-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'lime-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-lime-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'green-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-green-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cyan-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-cyan-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'light-blue-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-light-blue-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'blue-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-blue-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'purple-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-purple-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'magenta-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-magenta-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'pink-wool',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-pink-wool'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'white-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-white-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'light-gray-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-light-gray-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'gray-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-gray-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'black-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-black-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'brown-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-brown-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'red-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-red-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'orange-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-orange-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'yellow-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-yellow-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'lime-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-lime-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'green-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-green-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cyan-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-cyan-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'light-blue-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-light-blue-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'blue-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-blue-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'purple-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-purple-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'magenta-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-magenta-carpet'
			},
			{
				probability: 0.68,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'pink-carpet',
						amount: 1
					}
				],
				id: 'shepherd-apprentice-emerald-for-pink-carpet'
			},
			{
				probability: 0.1,
				level: 'journeyman',
				wants: [
					{
						item: 'yellow-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-yellow-dye-for-emerald'
			},
			{
				probability: 0.1,
				level: 'journeyman',
				wants: [
					{
						item: 'light-gray-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-light-gray-dye-for-emerald'
			},
			{
				probability: 0.1,
				level: 'journeyman',
				wants: [
					{
						item: 'orange-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-orange-dye-for-emerald'
			},
			{
				probability: 0.1,
				level: 'journeyman',
				wants: [
					{
						item: 'red-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-red-dye-for-emerald'
			},
			{
				probability: 0.1,
				level: 'journeyman',
				wants: [
					{
						item: 'pink-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-pink-dye-for-emerald'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'white-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-white-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'light-gray-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-light-gray-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'gray-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-gray-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'black-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-black-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'brown-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-brown-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'red-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-red-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'orange-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-orange-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'yellow-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-yellow-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'lime-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-lime-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'green-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-green-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cyan-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-cyan-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'light-blue-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-light-blue-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'blue-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-blue-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'purple-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-purple-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'magenta-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-magenta-bed'
			},
			{
				probability: 0.95,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'pink-bed',
						amount: 1
					}
				],
				id: 'shepherd-journeyman-emerald-for-pink-bed'
			},
			{
				probability: 0.09,
				level: 'expert',
				wants: [
					{
						item: 'brown-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-expert-brown-dye-for-emerald'
			},
			{
				probability: 0.09,
				level: 'expert',
				wants: [
					{
						item: 'purple-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-expert-purple-dye-for-emerald'
			},
			{
				probability: 0.09,
				level: 'expert',
				wants: [
					{
						item: 'blue-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 12
					}
				],
				id: 'shepherd-expert-blue-dye-for-emerald'
			},
			{
				probability: 0.09,
				level: 'expert',
				wants: [
					{
						item: 'green-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-expert-green-dye-for-emerald'
			},
			{
				probability: 0.09,
				level: 'expert',
				wants: [
					{
						item: 'magenta-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-expert-magenta-dye-for-emerald'
			},
			{
				probability: 0.09,
				level: 'expert',
				wants: [
					{
						item: 'cyan-dye',
						amount: 12
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-expert-cyan-dye-for-emerald'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'white-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-white-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'light-gray-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-light-gray-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'gray-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-gray-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'black-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-black-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'brown-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-brown-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'red-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-red-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'orange-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-orange-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'yellow-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-yellow-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'lime-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-lime-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'green-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-green-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'cyan-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-cyan-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'light-blue-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-light-blue-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'blue-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-blue-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'purple-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-purple-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'magenta-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-magenta-banner'
			},
			{
				probability: 0.94,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'pink-banner',
						amount: 1
					}
				],
				id: 'shepherd-expert-emerald-for-pink-banner'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 2
					}
				],
				gives: [
					{
						item: 'painting',
						amount: 3
					}
				],
				id: 'shepherd-master-emerald-for-painting'
			}
		]
	},
	toolsmith: {
		label: 'Toolsmith',
		image: '/assets/villagers/plains-toolsmith.png',
		possibleTrades: [
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'coal',
						amount: 15
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'toolsmith-novice-coal-for-emerald'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'stone-axe',
						amount: 1
					}
				],
				id: 'toolsmith-novice-emerald-for-stone-axe'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'stone-shovel',
						amount: 1
					}
				],
				id: 'toolsmith-novice-emerald-for-stone-shovel'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'stone-pickaxe',
						amount: 1
					}
				],
				id: 'toolsmith-novice-emerald-for-stone-pickaxe'
			},
			{
				probability: 0.4,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'stone-hoe',
						amount: 1
					}
				],
				id: 'toolsmith-novice-emerald-for-stone-hoe'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'iron-ingot',
						amount: 4
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'toolsmith-apprentice-iron-ingot-for-emerald'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 36
					}
				],
				gives: [
					{
						item: 'bell',
						amount: 1
					}
				],
				id: 'toolsmith-apprentice-emerald-for-bell'
			},
			{
				probability: 0.4,
				level: 'journeyman',
				wants: [
					{
						item: 'flint',
						amount: 30
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'toolsmith-journeyman-flint-for-emerald'
			},
			{
				probability: 0.4,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 13
					}
				],
				gives: [
					{
						item: 'iron-axe',
						amount: 1,
						enchanted: true
					}
				],
				id: 'toolsmith-journeyman-emerald-for-enchanted-iron-axe'
			},
			{
				probability: 0.4,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 14
					}
				],
				gives: [
					{
						item: 'iron-shovel',
						amount: 1,
						enchanted: true
					}
				],
				id: 'toolsmith-journeyman-emerald-for-enchanted-iron-shovel'
			},
			{
				probability: 0.4,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 15
					}
				],
				gives: [
					{
						item: 'iron-pickaxe',
						amount: 1,
						enchanted: true
					}
				],
				id: 'toolsmith-journeyman-emerald-for-enchanted-iron-pickaxe'
			},
			{
				probability: 0.4,
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 4
					}
				],
				gives: [
					{
						item: 'diamond-hoe',
						amount: 1
					}
				],
				id: 'toolsmith-journeyman-emerald-for-diamond-hoe'
			},
			{
				probability: 0.67,
				level: 'expert',
				wants: [
					{
						item: 'diamond',
						amount: 1
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'toolsmith-expert-diamond-for-emerald'
			},
			{
				probability: 0.67,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 24
					}
				],
				gives: [
					{
						item: 'diamond-axe',
						amount: 1,
						enchanted: true
					}
				],
				id: 'toolsmith-expert-emerald-for-enchanted-diamond-axe'
			},
			{
				probability: 0.67,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 17
					}
				],
				gives: [
					{
						item: 'diamond-shovel',
						amount: 1,
						enchanted: true
					}
				],
				id: 'toolsmith-expert-emerald-for-enchanted-diamond-shovel'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 25
					}
				],
				gives: [
					{
						item: 'diamond-pickaxe',
						amount: 1,
						enchanted: true
					}
				],
				id: 'toolsmith-master-emerald-for-enchanted-diamond-pickaxe'
			}
		]
	},
	weaponsmith: {
		label: 'Weaponsmith',
		image: '/assets/villagers/plains-weaponsmith.png',
		possibleTrades: [
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'coal',
						amount: 15
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'weaponsmith-novice-coal-for-emerald'
			},
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 3
					}
				],
				gives: [
					{
						item: 'iron-axe',
						amount: 1
					}
				],
				id: 'weaponsmith-novice-emerald-for-iron-axe'
			},
			{
				probability: 0.67,
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 14
					}
				],
				gives: [
					{
						item: 'iron-sword',
						amount: 1,
						enchanted: true
					}
				],
				id: 'weaponsmith-novice-emerald-for-enchanted-iron-sword'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'iron-ingot',
						amount: 4
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'weaponsmith-apprentice-iron-ingot-for-emerald'
			},
			{
				probability: 1,
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 36
					}
				],
				gives: [
					{
						item: 'bell',
						amount: 1
					}
				],
				id: 'weaponsmith-apprentice-emerald-for-bell'
			},
			{
				probability: 1,
				level: 'journeyman',
				wants: [
					{
						item: 'flint',
						amount: 24
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'weaponsmith-journeyman-flint-for-emerald'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'diamond',
						amount: 1
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'weaponsmith-expert-diamond-for-emerald'
			},
			{
				probability: 1,
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 24
					}
				],
				gives: [
					{
						item: 'diamond-axe',
						amount: 1,
						enchanted: true
					}
				],
				id: 'weaponsmith-expert-emerald-for-enchanted-diamond-axe'
			},
			{
				probability: 1,
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 20
					}
				],
				gives: [
					{
						item: 'diamond-sword',
						amount: 1,
						enchanted: true
					}
				],
				id: 'weaponsmith-master-emerald-for-enchanted-diamond-sword'
			}
		]
	}
};
