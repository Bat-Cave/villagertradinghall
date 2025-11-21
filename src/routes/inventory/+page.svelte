<script lang="ts">
	import { villagerInventoryStore, type Villager } from '$lib/stores/villager-inventory';
	import { onMount } from 'svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import VillagerForm from '$lib/forms/villager-form.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { professions } from '$lib/villagers';

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
		<Dialog.Trigger>
			<Button>Open</Button>
		</Dialog.Trigger>
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

<div class="flex flex-col gap-2">
	{#each villagers as villager}
		{@const profession = professions[villager.profession as keyof typeof professions]}
		<div class="flex gap-2">
			<div class="flex items-center gap-2">
				<div class="size-10">
					<img src={profession.image} alt="" />
				</div>
				<div>{profession.label}</div>
			</div>
			<div>
				{#each villager.prominentTrades as trade}
					<div class="flex items-center gap-2">
						<div>{trade.trade}</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>
