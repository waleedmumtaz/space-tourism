<script>
	import AnoushehAnsari from '$lib/crew/anousheh-ansari.svelte';
	import DouglasHurley from '$lib/crew/douglas-hurley.svelte';
	import MarkShuttleworth from '$lib/crew/mark-shuttleworth.svelte';
	import VictorGlover from '$lib/crew/victor-glover.svelte';
	import Tabs from '$lib/shared/tabs.svelte';

	let tabs = ['dotOne', 'dotTwo', 'dotThree', 'dotFour'];
	let activeTab = 'dotOne';
	let flag = 'crew';

	const tabChange = (e) => {
		activeTab = e.detail;
	};
</script>

<div
	class="flex-1 font-nav text-center pb-10 sm:pb-0 md:mt-0 px-7 md:max-w-7xl md:mx-auto md:w-full md:relative md:flex md:flex-col md:justify-end"
>
	<p class="uppercase mb-10 sm:text-left sm:text-2xl md:absolute md:top-10">
		<span class="text-cstm-lavender-blue mr-3">02</span>Meet Your Crew
	</p>
	<div>
		<div class="md:absolute md:bottom-20">
			<Tabs {tabs} {activeTab} {flag} on:tabChange={tabChange} />
		</div>
		<div>
			{#if activeTab === 'dotOne'}
				<DouglasHurley />
			{:else if activeTab === 'dotTwo'}
				<MarkShuttleworth />
			{:else if activeTab === 'dotThree'}
				<VictorGlover />
			{:else if activeTab === 'dotFour'}
				<AnoushehAnsari />
			{/if}
		</div>
	</div>
</div>
