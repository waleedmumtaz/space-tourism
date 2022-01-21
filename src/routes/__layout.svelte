<script>
	import { page } from '$app/stores';
	import Nav from '$lib/nav.svelte';
	import '../app.css';

	let pageUrl = $page.url.pathname;
	let backgroundImagePath;

	if (pageUrl === '/') {
		backgroundImagePath = "bg-[url('/home/background-home-mobile.jpg')]";
	} else if (pageUrl === '/destination') {
		backgroundImagePath = "bg-[url('/destination/background-destination-mobile.jpg')]";
	} else if (pageUrl === '/crew') {
		backgroundImagePath = "bg-[url('/crew/background-crew-mobile.jpg')]";
	} else if (pageUrl === '/technology') {
		backgroundImagePath = "bg-[url('/technology/background-technology-mobile.jpg')]";
	} else {
		backgroundImagePath = 'bg-black';
	}
</script>

<div class={`min-h-screen text-white flex flex-col ${backgroundImagePath} bg-no-repeat bg-cover`}>
	<header>
		<Nav />
	</header>
	<slot />
	<footer />
</div>
