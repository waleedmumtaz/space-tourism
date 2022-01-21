<script>
	import { page } from '$app/stores';

	let isNavOpen = false;

	const toggleNav = () => {
		isNavOpen = !isNavOpen;
	};

	const closeNav = () => {
		isNavOpen = false;
	};

	$: pageUrl = $page.url.pathname;
</script>

<nav class="font-nav mb-3 relative z-50">
	<!-- mobile nav -->
	<div class="sm:hidden relative p-5">
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
			} w-2/3 absolute right-0 top-0 min-h-screen flex flex-col items-end p-5 after:absolute after:w-full after:h-full after:blur after:bg-black after:opacity-80 after:-z-10 after:top-0 after:left-0`}
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

	<!-- tablet nav -->
	<div class="hidden sm:block sm:container sm:mx-auto pt-5 mb-20">
		<div class="flex justify-between items-center">
			<img src="/shared/logo.svg" alt="logo" />
			<ul class="flex uppercase gap-10">
				<li class="relative">
					<a
						href="/"
						class={`${
							pageUrl === '/'
								? 'after:absolute after:h-1 after:w-full after:bg-white after:left-0 after:-bottom-5 after:rounded-full'
								: ''
						}`}>Home</a
					>
				</li>
				<li class="relative">
					<a
						href="/destination"
						class={`${
							pageUrl === '/destination'
								? 'after:absolute after:h-1 after:w-full after:bg-white after:left-0 after:-bottom-5 after:rounded-full'
								: ''
						}`}>Destination</a
					>
				</li>
				<li class="relative">
					<a
						href="/crew"
						class={`${
							pageUrl === '/crew'
								? 'after:absolute after:h-1 after:w-full after:bg-white after:left-0 after:-bottom-5 after:rounded-full'
								: ''
						}`}>Crew</a
					>
				</li>
				<li class="relative">
					<a
						href="/technology"
						class={`${
							pageUrl === '/technology'
								? 'after:absolute after:h-1 after:w-full after:bg-white after:left-0 after:-bottom-5 after:rounded-full'
								: ''
						}`}>Technology</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
