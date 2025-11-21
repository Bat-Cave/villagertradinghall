import { type ItemKey } from './items';

type VillagerTradeItem = {
	item: ItemKey;
	amount: number;
	enchanted?: boolean;
};

type VillagerTrade = {
	id: string;
	level: 'novice' | 'apprentice' | 'journeyman' | 'expert' | 'master';
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
				level: 'novice',
				wants: [
					{
						item: 'coal',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'iron-ingot',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'raw-chicken',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'raw-rabbit',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'raw-porkchop',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'coal',
						amount: 1
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
						amount: 1
					}
				],
				id: 'butcher-apprentice-emerald-for-cooked-chicken'
			},
			{
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
						amount: 1
					}
				],
				id: 'butcher-apprentice-emerald-for-cooked-porkchop'
			},
			{
				level: 'journeyman',
				wants: [
					{
						item: 'raw-beef',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'raw-mutton',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'dried-kelp-block',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'sweet-berries',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'paper',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'glass-pane',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'rotten-flesh',
						amount: 1
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
						amount: 1
					}
				],
				id: 'cleric-novice-emerald-for-redstone-dust'
			},
			{
				level: 'apprentice',
				wants: [
					{
						item: 'gold-ingot',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'rabbits-foot',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'turtle-scute',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'glass-bottle',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'nether-wart',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'wheat',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'potato',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'carrot',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'beetroot',
						amount: 1
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
						amount: 1
					}
				],
				id: 'farmer-novice-emerald-for-bread'
			},
			{
				level: 'apprentice',
				wants: [
					{
						item: 'pumpkin',
						amount: 1
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
						amount: 1
					}
				],
				id: 'farmer-apprentice-emerald-for-pumpkin-pie'
			},
			{
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
						amount: 1
					}
				],
				id: 'farmer-apprentice-emerald-for-apple'
			},
			{
				level: 'journeyman',
				wants: [
					{
						item: 'melon',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cookie',
						amount: 1
					}
				],
				id: 'farmer-journeyman-emerald-for-cookie'
			},
			{
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'golden-carrot',
						amount: 1
					}
				],
				id: 'farmer-master-emerald-for-golden-carrot'
			},
			{
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'glistering-melon-slice',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'string',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'coal',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'raw-cod',
						amount: 1
					},
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cooked-cod',
						amount: 1
					}
				],
				id: 'fisherman-novice-raw-cod-and-emerald-for-cooked-cod'
			},
			{
				level: 'apprentice',
				wants: [
					{
						item: 'raw-cod',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'raw-salmon',
						amount: 1
					},
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'cooked-salmon',
						amount: 1
					}
				],
				id: 'fisherman-apprentice-raw-salmon-and-emerald-for-cooked-salmon'
			},
			{
				level: 'journeyman',
				wants: [
					{
						item: 'raw-salmon',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'tropical-fish',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'pufferfish',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'stick',
						amount: 1
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
						amount: 1
					}
				],
				id: 'fletcher-novice-emerald-for-arrow'
			},
			{
				level: 'novice',
				wants: [
					{
						item: 'gravel',
						amount: 1
					},
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'flint',
						amount: 1
					}
				],
				id: 'fletcher-novice-gravel-and-emerald-for-flint'
			},
			{
				level: 'apprentice',
				wants: [
					{
						item: 'flint',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'string',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'feather',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'tripwire-hook',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-weakness',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-weakness'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-strength',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-strength'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-regeneration',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-regeneration'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-poison',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-poison'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-harming',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-harming'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-healing',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-healing'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-water-breathing',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-water-breathing'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-turtle-master',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-turtle-master'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-slowness',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-slowness'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-swiftness',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-swiftness'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-fire-resistance',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-fire-resistance'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-leaping',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-leaping'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-invisibility',
						amount: 1
					}
				],
				id: 'fletcher-expert-emerald-and-arrow-for-tipped-arrow-invisibility'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
					},
					{
						item: 'arrow',
						amount: 1
					}
				],
				gives: [
					{
						item: 'tipped-arrow-night-vision',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'leather',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'flint',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'rabbit-hide',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'turtle-scute',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'paper',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'book',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'ink-sac',
						amount: 1
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
						amount: 1
					}
				],
				id: 'librarian-journeyman-emerald-for-glass'
			},
			{
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'clay-ball',
						amount: 1
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
						amount: 1
					}
				],
				id: 'mason-novice-emerald-for-brick'
			},
			{
				level: 'apprentice',
				wants: [
					{
						item: 'stone',
						amount: 1
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
						amount: 1
					}
				],
				id: 'mason-apprentice-emerald-for-chiseled-stone-bricks'
			},
			{
				level: 'journeyman',
				wants: [
					{
						item: 'granite',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'andesite',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'diorite',
						amount: 1
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
						amount: 1
					}
				],
				id: 'mason-journeyman-emerald-for-dripstone-block'
			},
			{
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
						amount: 1
					}
				],
				id: 'mason-journeyman-emerald-for-polished-andesite'
			},
			{
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
						amount: 1
					}
				],
				id: 'mason-journeyman-emerald-for-polished-diorite'
			},
			{
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
						amount: 1
					}
				],
				id: 'mason-journeyman-emerald-for-polished-granite'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'nether-quarts',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'white-wool',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'brown-wool',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'black-wool',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'gray-wool',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'white-dye',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'gray-dye',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'black-dye',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'light-blue-dye',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'lime-dye',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'yellow-dye',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'light-gray-dye',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'orange-dye',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'red-dye',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'pink-dye',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'brown-dye',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'purple-dye',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'blue-dye',
						amount: 1
					}
				],
				gives: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				id: 'shepherd-expert-blue-dye-for-emerald'
			},
			{
				level: 'expert',
				wants: [
					{
						item: 'green-dye',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'magenta-dye',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'cyan-dye',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
					}
				],
				gives: [
					{
						item: 'painting',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'coal',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'iron-ingot',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'flint',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'coal',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'novice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'iron-ingot',
						amount: 1
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
				level: 'apprentice',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'journeyman',
				wants: [
					{
						item: 'flint',
						amount: 1
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
				level: 'expert',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
				level: 'master',
				wants: [
					{
						item: 'emerald',
						amount: 1
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
