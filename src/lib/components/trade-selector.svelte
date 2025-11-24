<script lang="ts">
	import X from '@lucide/svelte/icons/x';
	import Button from './ui/button/button.svelte';
	import * as Popover from './ui/popover';
	import * as Command from './ui/command';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
	import { tick } from 'svelte';
	import { itemDetails, type ItemKey } from '$lib/items';
	import type { professions } from '$lib/villagers';
	import type { createForm } from '@tanstack/svelte-form';
	import { getContext } from 'svelte';
	import Input from './ui/input/input.svelte';
	import type { Villager } from '$lib/stores/villager-inventory';
	import * as Select from './ui/select';
	import {
		enchantmentDetails,
		getPossibleEnchantmentsForItem,
		type EnchantmentKey
	} from '$lib/enchantments';
	import { integerToRoman } from '$lib/string-utils';

	let form = getContext('villagerForm') as ReturnType<typeof createForm>;

	let {
		i,
		field,
		selectedProfessionTrades
	}: {
		i: number;
		field: { removeValue: (index: number) => void };
		selectedProfessionTrades: (typeof professions)[number]['possibleTrades'];
	} = $props();

	let open = $state(false);
	let triggerRef = $state<HTMLButtonElement>(null!);
	let internalTrade = $state<string | null>(null);
	let internalEnchantment = $state<EnchantmentKey | null>(null);

	let levels = [
		{ level: 'novice', label: 'Novice' },
		{ level: 'apprentice', label: 'Apprentice' },
		{ level: 'journeyman', label: 'Journeyman' },
		{ level: 'expert', label: 'Expert' },
		{ level: 'master', label: 'Master' }
	];

	const getLevelTrades = (level: string) =>
		selectedProfessionTrades.filter((trade) => trade.level === level);

	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<p class="text-xs text-white uppercase opacity-80">Trade</p>
<div class="relative grid w-full grid-cols-[1fr_0.1fr_1fr] items-center gap-x-[6px]">
	{#if i > 0}
		<Button
			onclick={() => field.removeValue(i)}
			class="absolute right-full z-10 size-6 -translate-x-1 p-0 [--base-color:#b91c1c]"
		>
			<X class="size-3" />
			<span class="sr-only">Remove Trade {i + 1}</span>
		</Button>
	{/if}
	<form.Field name={`prominentTrades[${i}].trade`}>
		{#snippet children(subField)}
			{@const selectedTrade = selectedProfessionTrades.find(
				(trade) => trade.id === subField.state.value
			)}
			<div class="col-span-3">
				<label>
					<Popover.Root bind:open>
						<Popover.Trigger bind:ref={triggerRef} class="w-full p-0">
							{#snippet child({ props })}
								<Button {...props} role="combobox" aria-expanded={open}>
									<div class="grid w-full grid-cols-2 items-center justify-between gap-2">
										{#if selectedTrade}
											<div class="flex gap-2 p-2">
												{#each selectedTrade.wants as item}
													<img
														class="size-4 [image-rendeering:pixelated]"
														src={`/assets/items/${item.item}.png`}
														alt={item.item}
													/>
												{/each}
											</div>
											<span class="absolute inset-0 flex items-center justify-center">{'->'}</span>
											<div class="flex gap-2 p-2">
												{#each selectedTrade.gives as item}
													<img
														class="size-4 [image-rendeering:pixelated]"
														src={`/assets/items/${item.item}.png`}
														alt={item.item}
													/>
												{/each}
											</div>
										{:else}
											Select a trade...
										{/if}
										<ChevronsUpDown class="absolute right-2 ml-2 size-4 shrink-0 opacity-50" />
									</div>
								</Button>
							{/snippet}
						</Popover.Trigger>
						<Popover.Content class="w-(--bits-popover-anchor-width) p-0">
							<Command.Root>
								<Command.Input placeholder="Search trade..." />
								<Command.List>
									<Command.Empty>No trade found.</Command.Empty>
									{#each levels as level}
										<Command.Group heading={level.label}>
											{#each getLevelTrades(level.level) as trade}
												<Command.Item
													value={trade.id}
													onSelect={() => {
														subField.handleChange(trade.id);
														form.setFieldValue(
															`prominentTrades[${i}].amountGiven`,
															trade.wants.sort((a, b) => b.amount - a.amount)[0].amount
														);
														form.setFieldValue(
															`prominentTrades[${i}].amountReceived`,
															trade.gives.sort((a, b) => b.amount - a.amount)[0].amount
														);
														internalTrade = trade.id;
														closeAndFocusTrigger();
													}}
													aria-selected={subField.state.value === trade.id}
												>
													{#each trade.wants as item}
														{@const detail = itemDetails[item.item]}
														<img
															class="size-6 object-contain [image-rendeering:pixelated]"
															src={item.enchanted && detail.enchantable
																? detail.enchantedImage
																: detail.image}
															alt={item.item}
														/>
													{/each}
													{' -> '}
													{#each trade.gives as item}
														{@const detail = itemDetails[item.item]}
														<img
															class="size-6 object-contain [image-rendeering:pixelated]"
															src={item.enchanted && detail.enchantable
																? detail.enchantedImage
																: detail.image}
															alt={item.item}
														/>
													{/each}
													{#if subField.state.value === trade.id}
														<CheckIcon class="ml-2 size-4 shrink-0 text-white opacity-90" />
													{/if}
												</Command.Item>
											{/each}
										</Command.Group>
									{/each}
								</Command.List>
							</Command.Root>
						</Popover.Content>
					</Popover.Root>
				</label>
			</div>
		{/snippet}
	</form.Field>
	<div class="col-span-3">
		{#if internalTrade}
			{@const internalTradeItemsWanted = selectedProfessionTrades.find(
				(trade) => trade.id === internalTrade
			)?.wants}
			{@const internalTradeItemsGiven = selectedProfessionTrades.find(
				(trade) => trade.id === internalTrade
			)?.gives}
			<div class="col-span-3 mt-2">
				<p class="text-xs text-white uppercase opacity-80">Amounts</p>
			</div>
			<div class="flex items-stretch gap-2">
				<form.Field name={`prominentTrades[${i}].amountGiven`}>
					{#snippet children(subField)}
						<div class="minecraft-border flex items-center gap-1 px-1 py-0">
							<Input
								type="number"
								value={subField.state.value}
								min={1}
								max={64}
								oninput={(e: Event & { currentTarget: HTMLInputElement }) =>
									subField.handleChange(Number(e.currentTarget.value))}
								class="w-14 overflow-visible py-1 pr-0 pl-2"
							/>
							<div class="flex shrink-0 items-center gap-2 pr-2">
								{#each internalTradeItemsWanted?.map((item) => {
									const detail = itemDetails[item.item];
									return detail;
								}) as detail, i}
									{#if i > 0}
										<span>+</span>
									{/if}
									<img
										class="size-6 object-contain [image-rendeering:pixelated]"
										src={detail.enchantable ? detail.enchantedImage : detail.image}
										alt={detail.name}
									/>
								{/each}
							</div>
						</div>
					{/snippet}
				</form.Field>
				<div>{'->'}</div>
				<form.Field name={`prominentTrades[${i}].amountReceived`}>
					{#snippet children(subField)}
						<div class="minecraft-border flex items-center gap-1 px-1 py-0">
							{#if (subField.state.value as number) > 1}
								<Input
									type="number"
									value={subField.state.value}
									min={1}
									max={64}
									oninput={(e: Event & { currentTarget: HTMLInputElement }) =>
										subField.handleChange(Number(e.currentTarget.value))}
									class="w-8 overflow-visible py-1 pr-0 pl-2"
									disabled
								/>
							{/if}
							<div class="flex shrink-0 items-center gap-2 px-2">
								{#each internalTradeItemsGiven?.map((item) => {
									const detail = itemDetails[item.item];
									return detail;
								}) as detail, i}
									{#if i > 0}
										<span>+</span>
									{/if}
									<img
										class="size-6 object-contain [image-rendeering:pixelated]"
										src={detail.enchantable ? detail.enchantedImage : detail.image}
										alt={detail.name}
									/>
									{#if detail.enchantable}
										<Select.Root
											value={internalEnchantment as EnchantmentKey}
											onValueChange={(value) => {
												form.setFieldValue(`prominentTrades[${i}].enchantment`, value as string);
												internalEnchantment = value as EnchantmentKey;
											}}
											type="single"
										>
											<Select.Trigger class="border-none text-xs"
												>{internalEnchantment
													? `${enchantmentDetails[internalEnchantment.slice(0, -2) as EnchantmentKey].label} ${integerToRoman(Number(internalEnchantment.slice(-1)))}`
													: 'Select enchantment'}</Select.Trigger
											>
											<Select.Content>
												{#each getPossibleEnchantmentsForItem(detail.key as ItemKey).sort( (a, b) => a.key.localeCompare(b.key) ) as enchantment}
													{#each Array(Number(enchantment.levelMax)) as _, i}
														<Select.Item value={`${enchantment.key}-${i + 1}`}
															>{enchantment.label}{enchantment.levelMax === '1'
																? ''
																: ` ${integerToRoman(i + 1)}`}
														</Select.Item>
													{/each}
												{/each}
											</Select.Content>
										</Select.Root>
									{/if}
								{/each}
							</div>
						</div>
					{/snippet}
				</form.Field>
			</div>
		{/if}
	</div>
</div>
