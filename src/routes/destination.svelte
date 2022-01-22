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

<div
	class="flex-1 font-nav text-center pb-10 md:pb-0 px-7 md:max-w-7xl md:mx-auto md:flex md:flex-col md:justify-center"
>
	<div>
		<p class="uppercase mb-10 sm:mb-14 sm:text-left sm:text-2xl">
			<span class="text-cstm-lavender-blue mr-3">01</span>Pick Your Destination
		</p>
		<div class="md:grid md:grid-cols-2 md:place-items-start md:gap-20">
			<div class="col-start-2">
				<Tabs {tabs} {activeTab} {flag} on:tabChange={tabChange} />
			</div>
		</div>
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
</div>
