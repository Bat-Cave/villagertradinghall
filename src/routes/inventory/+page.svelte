<script lang="ts">
	import { villagerInventoryStore, type Villager } from '$lib/stores/villager-inventory';
	import { onMount } from 'svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import VillagerForm from '$lib/forms/villager-form.svelte';
	import { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import { professions } from '$lib/villagers';
	import { cn } from '$lib/utils';

	let villagers = $state<Villager[]>([]);
	let open = $state(false);

	onMount(() => {
		villagers = villagerInventoryStore.getState().villagers;
	});
</script>

<div class="flex items-center justify-between gap-2">
	<h1 class="text-2xl font-bold">My Villagers</h1>
	<Dialog.Root
		bind:open
		onOpenChange={(newState) => {
			open = newState;
		}}
	>
		<Dialog.Trigger class={cn(buttonVariants(), '[--base-color:#166534]')}
			>Add Villager</Dialog.Trigger
		>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title>Add Villager</Dialog.Title>
				<Dialog.Description>Add a new villager to your trading hall inventory.</Dialog.Description>
			</Dialog.Header>
			<VillagerForm
				onSuccess={(newVillagers) => {
					villagers = newVillagers;
					open = false;
				}}
			/>
		</Dialog.Content>
	</Dialog.Root>
</div>

<div class="mt-4 grid grid-cols-3 gap-3">
	{#each villagers as villager}
		{@const profession = professions[villager.profession as keyof typeof professions]}
		<div class="minecraft-border flex gap-3 p-3">
			<div class="minecraft-border size-20 -translate-y-1 p-0 pt-2">
				<div class="size-full overflow-hidden">
					<img src={profession.image} alt="" class="h-[200%] w-full object-contain object-top" />
				</div>
			</div>
			<div>
				<div>{profession.label}</div>
				{#each villager.prominentTrades as trade}
					{@const tradeDetails = profession.possibleTrades.find((t) => t.id === trade.trade)}
					<div class="flex items-center gap-2">
						<div>
							{trade.amountGiven}
							{tradeDetails?.wants[0].item} for {trade.amountReceived}
							{tradeDetails?.gives[0].item}
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
