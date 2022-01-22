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

<div
	class="flex-1 md:flex md:flex-col md:justify-center md:max-w-7xl md:mx-auto md:relative w-full md:px-5"
>
	<div class="font-nav text-center pb-10 md:pb-0">
		<p
			class="sm:pl-7 md:pl-0 uppercase mb-10 sm:mb-14 sm:text-left sm:text-2xl md:absolute md:top-20"
		>
			<span class="text-cstm-lavender-blue mr-3">03</span>Space Launch 101
		</p>
		<div class="md:flex md:justify-between md:items-center md:gap-10">
			<div>
				<Tabs {tabs} {activeTab} {flag} on:tabChange={tabChange} />
			</div>
			<div>
				{#if activeTab === '1'}
					<LaunchVehicle />
				{:else if activeTab === '2'}
					<Spaceport />
				{:else if activeTab === '3'}
					<SpaceCapsule />
				{/if}
			</div>
		</div>
	</div>
</div>
