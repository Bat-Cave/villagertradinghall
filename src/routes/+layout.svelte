<script lang="ts">
import "../app.css";
import favicon from "$lib/assets/favicon.svg";

let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="w-full max-w-6xl mx-auto py-8">{@render children()}</main>
