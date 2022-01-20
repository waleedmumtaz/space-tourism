<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let tabs;
	export let activeTab;
	export let flag;
</script>

{#if flag === 'destination'}
	<div class="mb-10">
		<ul class="uppercase text-cstm-lavender-blue flex justify-center items-center gap-5 mb-5">
			{#each tabs as tab}
				<li on:click={() => dispatch('tabChange', tab)} class="relative">
					<p
						class={`${
							tab === activeTab
								? 'after:absolute after:bg-white after:h-1 after:w-full after:left-0 after:-bottom-2'
								: ''
						}`}
					>
						{tab}
					</p>
				</li>
			{/each}
		</ul>
	</div>
{:else if flag === 'crew'}
	<div class="mb-10">
		<ul class="flex justify-center items-center gap-6 mb-8">
			{#each tabs as tab}
				<li on:click={() => dispatch('tabChange', tab)}>
					<div class={`${tab === activeTab ? 'bg-white' : 'bg-gray-500'} w-4 h-4 rounded-full`} />
				</li>
			{/each}
		</ul>
	</div>
{:else if flag === 'technology'}
	<div class="mb-10">
		<ul class="flex justify-center items-center gap-6 mb-10">
			{#each tabs as tab}
				<li
					on:click={() => dispatch('tabChange', tab)}
					class={`${
						tab === activeTab
							? 'bg-white text-black'
							: 'bg-black text-white border-[1px] border-gray-500'
					} w-10 h-10 rounded-full inline-flex justify-center items-center`}
				>
					{tab}
				</li>
			{/each}
		</ul>
	</div>
{/if}
