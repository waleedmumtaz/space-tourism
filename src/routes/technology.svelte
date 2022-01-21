<script>
	import Tabs from '$lib/shared/tabs.svelte';
	import LaunchVehicle from '$lib/technology/launch-vehicle.svelte';
	import SpaceCapsule from '$lib/technology/space-capsule.svelte';
	import Spaceport from '$lib/technology/spaceport.svelte';

	let tabs = ['1', '2', '3'];
	let activeTab = '1';
	let flag = 'technology';

	const tabChange = (e) => {
		activeTab = e.detail;
	};
</script>

<div>
	<div class="font-nav text-center pb-20">
		<p class="sm:pl-7 uppercase mb-10 sm:mb-14 sm:text-left sm:text-2xl">
			<span class="text-cstm-lavender-blue mr-3">03</span>Space Launch 101
		</p>
		<Tabs {tabs} {activeTab} {flag} on:tabChange={tabChange} />
		{#if activeTab === '1'}
			<LaunchVehicle />
		{:else if activeTab === '2'}
			<Spaceport />
		{:else if activeTab === '3'}
			<SpaceCapsule />
		{/if}
	</div>
</div>
