import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';

export type Villager = {
	profession: string;
	prominentTrades: {
		trade: string;
	}[];
};

type VillagerInventoryStoreState = { villagers: Villager[] };

type VillagerInventoryStoreActions = {
	setVillagerInventory: (nextVillagerInventory: VillagerInventoryStoreState['villagers']) => void;
};

type VillagerInventoryStore = VillagerInventoryStoreState & VillagerInventoryStoreActions;

export const villagerInventoryStore = createStore<VillagerInventoryStore>()(
	persist(
		(set) => ({
			villagers: [],
			setVillagerInventory: (villagers) => set({ villagers })
		}),
		{ name: 'villager-inventory-storage' }
	)
);
