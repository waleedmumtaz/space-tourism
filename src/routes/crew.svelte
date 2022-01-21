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

<div class="font-nav text-center px-7 md:max-w-6xl md:mx-auto">
	<p class="uppercase mb-10 sm:mb-14 sm:text-left sm:text-2xl">
		<span class="text-cstm-lavender-blue mr-3">02</span>Meet Your Crew
	</p>
	<Tabs {tabs} {activeTab} {flag} on:tabChange={tabChange} />
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
