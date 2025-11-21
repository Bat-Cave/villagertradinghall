<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Command from '$lib/components/ui/command/index.js';
	import { Input } from '$lib/components/ui/input';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { villagerInventoryStore, type Villager } from '$lib/stores/villager-inventory';
	import { professions } from '$lib/villagers';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
	import X from '@lucide/svelte/icons/x';
	import { createForm } from '@tanstack/svelte-form';
	import { tick } from 'svelte';
	import { z } from 'zod';

	let {
		onSuccess
	}: {
		onSuccess?: (data: Villager[]) => void;
	} = $props();

	let open = $state(false);
	let triggerRef = $state<HTMLButtonElement>(null!);
	let selectedProfession = $state(Object.keys(professions)[1]);
	let selectedProfessionTrades = $derived(
		professions[selectedProfession as keyof typeof professions].possibleTrades
	);

	const VillagerSchema = z.object({
		profession: z.string(),
		prominentTrades: z.array(
			z.object({
				trade: z.string()
				// cost: z.number().min(1)
			})
		)
	});

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}

	const form = createForm(() => ({
		defaultValues: {
			profession: selectedProfession,
			prominentTrades: [{ trade: '0' }] as Villager['prominentTrades']
		},
		validators: {
			onChange: VillagerSchema
		},
		onSubmit: async ({ value }) => {
			// Do something with form data
			const nextVillagerInventory = [...villagerInventoryStore.getState().villagers, value];
			villagerInventoryStore.setState({
				villagers: nextVillagerInventory
			});
			onSuccess?.(nextVillagerInventory);
			form.reset();
		}
	}));
</script>

<form
	onsubmit={(e) => {
		e.preventDefault();
		e.stopPropagation();
		form.handleSubmit();
	}}
	class="w-full"
>
	<div class="mb-3 grid w-full grid-cols-[120px_1fr] gap-2">
		<div class="w-30 items-start justify-center">
			<img
				src={selectedProfession
					? professions[selectedProfession as keyof typeof professions].image
					: professions.unemployed.image}
				alt=""
				class="h-auto w-full -translate-x-3 object-cover object-top"
			/>
		</div>
		<div class="w-full">
			<form.Field name="profession">
				{#snippet children(field)}
					<div class="flex w-full gap-2">
						<Popover.Root bind:open>
							<Popover.Trigger bind:ref={triggerRef} class="w-full">
								{#snippet child({ props })}
									<Button variant="outline" {...props} role="combobox" aria-expanded={open}>
										<div class="flex w-full items-center justify-between gap-2">
											{field.state.value
												? professions[field.state.value as keyof typeof professions].label
												: 'Select a profession...'}
											<ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
										</div>
									</Button>
								{/snippet}
							</Popover.Trigger>
							<Popover.Content class="w-full p-0">
								<Command.Root>
									<Command.Input placeholder="Search profession..." />
									<Command.List>
										<Command.Empty>No profession found.</Command.Empty>
										<Command.Group>
											{#each Object.entries(professions) as [key, profession]}
												{#if key !== 'unemployed'}
													<Command.Item
														value={key}
														onSelect={() => {
															field.handleChange(key);
															selectedProfession = key;
															closeAndFocusTrigger();
														}}
													>
														<div class="flex size-10 items-start justify-center overflow-hidden">
															<img src={profession.image} alt="" />
														</div>
														{profession.label}
														{#if field.state.value === key}
															<CheckIcon class="ml-2 size-4 shrink-0 opacity-50" />
														{/if}
													</Command.Item>
												{/if}
											{/each}
										</Command.Group>
									</Command.List>
								</Command.Root>
							</Popover.Content>
						</Popover.Root>
					</div>
					{#if field.state.meta.errors}
						<em role="alert">{field.state.meta.errors.join(', ')}</em>
					{/if}
				{/snippet}
			</form.Field>
			<form.Field name="prominentTrades" mode="array">
				{#snippet children(field)}
					<div class="mt-4 mb-2 flex items-center justify-between gap-2">
						<p class="text-sm font-semibold">Important Trades:</p>
						<Button
							size="sm"
							variant="outline"
							onclick={() => field.pushValue({ trade: '' })}
							type="button"
							class="h-auto px-2 py-1 text-xs leading-none"
						>
							Add Trade
						</Button>
					</div>
					<div class="mt-2 flex flex-col items-start gap-1">
						<div
							class="grid w-full grid-cols-[2.5fr_1fr] items-center gap-2 text-xs leading-none font-semibold text-muted-foreground uppercase"
						>
							<p>Trade</p>
							<p class="flex items-center gap-2">
								Cost <img
									src="/assets/items/emerald.png"
									alt=""
									class="size-4 [image-rendering:pixelated]"
								/>
							</p>
						</div>
						{#each field.state.value as trade, i}
							<div class="relative grid w-full grid-cols-[2.5fr_1fr] items-center gap-2">
								{#if i > 0}
									<Button
										size="icon"
										variant="ghost"
										onclick={() => field.removeValue(i)}
										class="absolute right-full size-5 translate-x-1/4 rounded-sm border border-destructive bg-white p-1 text-xs leading-none text-destructive/90 hover:bg-red-50 hover:text-destructive"
									>
										<X class="size-3" />
										<span class="sr-only">Remove Trade {i + 1}</span>
									</Button>
								{/if}
								<form.Field name={`prominentTrades[${i}].trade`}>
									{#snippet children(subField)}
										{@const selectedTrade = selectedProfessionTrades[Number(subField.state.value)]}
										<div>
											<label>
												<Popover.Root>
													<Popover.Trigger class="w-full">
														{#snippet child({ props })}
															<Button
																variant="outline"
																{...props}
																role="combobox"
																aria-expanded={open}
															>
																<div class="flex w-full items-center justify-between gap-2">
																	{#if selectedTrade}
																		{#each selectedTrade.wants as item}
																			<img
																				class="size-4 [image-rendeering:pixelated]"
																				src={`/assets/items/${item.item}.png`}
																				alt={item.item}
																			/>
																		{/each}
																		{' -> '}
																		{#each selectedTrade.gives as item}
																			<img
																				class="size-4 [image-rendeering:pixelated]"
																				src={`/assets/items/${item.item}.png`}
																				alt={item.item}
																			/>
																		{/each}
																	{:else}
																		Select a trade...
																	{/if}
																	<ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
																</div>
															</Button>
														{/snippet}
													</Popover.Trigger>
													<Popover.Content class="w-full p-0">
														<Command.Root>
															<Command.Input placeholder="Search trade..." />
															<Command.List>
																<Command.Empty>No trade found.</Command.Empty>
																<Command.Group>
																	{#each selectedProfessionTrades as trade, tradeIndex}
																		<Command.Item
																			value={String(tradeIndex)}
																			onSelect={() => {
																				subField.handleChange(String(tradeIndex));
																				closeAndFocusTrigger();
																			}}
																		>
																			{#each trade.wants as item}
																				<img
																					class="size-4 [image-rendeering:pixelated]"
																					src={`/assets/items/${item.item}.png`}
																					alt={item.item}
																				/>
																			{/each}
																			{' -> '}
																			{#each trade.gives as item}
																				<img
																					class="size-4 [image-rendeering:pixelated]"
																					src={`/assets/items/${item.item}.png`}
																					alt={item.item}
																				/>
																			{/each}
																			{#if subField.state.value === String(tradeIndex)}
																				<CheckIcon class="ml-2 size-4 shrink-0 opacity-50" />
																			{/if}
																		</Command.Item>
																	{/each}
																</Command.Group>
															</Command.List>
														</Command.Root>
													</Popover.Content>
												</Popover.Root>
											</label>
										</div>
									{/snippet}
								</form.Field>
							</div>
						{/each}
					</div>
					{#if field.state.meta.errors}
						<em role="alert">{field.state.meta.errors.join(', ')}</em>
					{/if}
				{/snippet}
			</form.Field>
		</div>
	</div>
	<div class="flex w-full justify-end">
		<form.Subscribe
			selector={(state) => ({
				canSubmit: state.canSubmit,
				isSubmitting: state.isSubmitting,
				isPristine: state.isPristine
			})}
		>
			{#snippet children({ canSubmit, isSubmitting, isPristine })}
				<Button type="submit" disabled={!canSubmit || isPristine}>
					{isSubmitting ? 'Submitting' : 'Submit'}
				</Button>
			{/snippet}
		</form.Subscribe>
	</div>
</form>
