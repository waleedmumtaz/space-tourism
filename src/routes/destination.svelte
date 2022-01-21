<script>
	import Europa from '$lib/destination/europa.svelte';
	import Mars from '$lib/destination/mars.svelte';
	import Moon from '$lib/destination/moon.svelte';
	import Titan from '$lib/destination/titan.svelte';
	import Tabs from '$lib/shared/tabs.svelte';

	let tabs = ['Moon', 'Mars', 'Europa', 'Titan'];
	let activeTab = 'Moon';
	let flag = 'destination';

	const tabChange = (e) => {
		activeTab = e.detail;
	};
</script>

<div class="font-nav text-center px-7 pb-20">
	<p class="uppercase mb-10 sm:mb-14 sm:text-left sm:text-2xl">
		<span class="text-cstm-lavender-blue mr-3">01</span>Pick Your Destination
	</p>
	<Tabs {tabs} {activeTab} {flag} on:tabChange={tabChange} />
	{#if activeTab === 'Moon'}
		<Moon />
	{:else if activeTab === 'Mars'}
		<Mars />
	{:else if activeTab === 'Europa'}
		<Europa />
	{:else if activeTab === 'Titan'}
		<Titan />
	{/if}
</div>
