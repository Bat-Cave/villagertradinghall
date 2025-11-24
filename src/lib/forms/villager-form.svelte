<script lang="ts">
	import TradeSelector from '$lib/components/trade-selector.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { enchantments } from '$lib/enchantments';
	import { villagerInventoryStore, type Villager } from '$lib/stores/villager-inventory';
	import { professions } from '$lib/villagers';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
	import { createForm } from '@tanstack/svelte-form';
	import { setContext, tick } from 'svelte';
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
				trade: z.string(),
				amountGiven: z.number().min(1),
				amountReceived: z.number().min(1),
				enchantment: z.enum(enchantments).optional()
			})
		)
	});

	const form = createForm(() => ({
		defaultValues: {
			profession: Object.keys(professions)[1],
			prominentTrades: [
				{ trade: '', amountGiven: 1, amountReceived: 1, enchantment: undefined }
			] as Villager['prominentTrades']
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

	setContext('villagerForm', form);

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
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
									<Button {...props} role="combobox" aria-expanded={open}>
										<div class="flex w-full items-center justify-between gap-2">
											{field.state.value
												? professions[field.state.value as keyof typeof professions].label
												: 'Select a profession...'}
											<ChevronsUpDown class="ml-2 size-4 shrink-0 opacity-50" />
										</div>
									</Button>
								{/snippet}
							</Popover.Trigger>
							<Popover.Content class="w-(--bits-popover-anchor-width) p-0">
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
							onclick={() => field.pushValue({ trade: '', amountGiven: 1, amountReceived: 1 })}
							type="button"
							class="h-auto px-2 py-1 text-xs leading-none"
						>
							Add Trade
						</Button>
					</div>
					<div class="mt-2 flex flex-col items-start gap-1">
						{#each field.state.value as _, i}
							<TradeSelector {i} {field} {selectedProfessionTrades} />
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
