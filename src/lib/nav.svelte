<script>
	let isNavOpen = false;

	const toggleNav = () => {
		isNavOpen = !isNavOpen;
	};

	const closeNav = () => {
		isNavOpen = false;
	};
</script>

<nav class="font-nav mb-3">
	<div class="relative p-5">
		<div class="flex justify-between items-center">
			<img src="/shared/logo.svg" alt="logo" />
			<button on:click|preventDefault={toggleNav}>
				<img
					src="/shared/icon-hamburger.svg"
					alt="hamburger menu"
					class={`${isNavOpen ? 'hidden' : 'block'}`}
				/>
			</button>
		</div>
		<div
			class={`${
				isNavOpen ? 'block' : 'hidden'
			} bg-gray-500 bg-opacity-75 w-2/3 absolute right-0 top-0 min-h-screen flex flex-col items-end p-5`}
		>
			<button on:click|preventDefault={toggleNav}>
				<img src="/shared/icon-close.svg" alt="close menu" class="mt-3" />
			</button>
			<ul class="uppercase mt-14 self-start space-y-5 w-full">
				<li class="">
					<a href="/" class="block" on:click={closeNav}><span class="font-bold">00 </span>Home</a>
				</li>
				<li>
					<a href="/destination" class="block" on:click={closeNav}
						><span class="font-bold">01 </span>Destination</a
					>
				</li>
				<li>
					<a href="/crew" class="block" on:click={closeNav}
						><span class="font-bold">02 </span>Crew</a
					>
				</li>
				<li>
					<a href="/technology" class="block" on:click={closeNav}
						><span class="font-bold">03 </span>Technology</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
