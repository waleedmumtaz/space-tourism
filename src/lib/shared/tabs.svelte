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
				<li on:click={() => dispatch('tabChange', tab)} class="relative cursor-pointer">
					<p
						class={`${
							tab === activeTab
								? 'after:absolute after:bg-white after:h-1 after:w-full after:left-0 after:-bottom-2 rounded-full after:hover:bg-white'
								: ''
						} after:hover:absolute after:hover:h-1 after:hover:w-full after:hover:bg-gray-400 after:hover:left-0 after:hover:-bottom-2 after:hover:rounded-full`}
					>
						{tab}
					</p>
				</li>
			{/each}
		</ul>
	</div>
{:else if flag === 'crew'}
	<div class="mb-10">
		<ul class="flex justify-center items-center gap-6 mb-8 sm:mb-16">
			{#each tabs as tab}
				<li on:click={() => dispatch('tabChange', tab)} class="cursor-pointer">
					<div
						class={`${
							tab === activeTab ? 'bg-white hover:bg-white' : 'bg-gray-700'
						} w-4 h-4 rounded-full hover:bg-gray-500`}
					/>
				</li>
			{/each}
		</ul>
	</div>
{:else if flag === 'technology'}
	<div class="mb-10">
		<ul class="flex md:flex-col justify-center items-center gap-6 mb-10">
			{#each tabs as tab}
				<li
					on:click={() => dispatch('tabChange', tab)}
					class={`${
						tab === activeTab
							? 'bg-white text-black'
							: 'bg-black text-white border-[1px] border-gray-700'
					} w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 sm:text-2xl md:text-3xl rounded-full inline-flex justify-center items-center cursor-pointer hover:border-gray-400`}
				>
					{tab}
				</li>
			{/each}
		</ul>
	</div>
{/if}
