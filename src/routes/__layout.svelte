<script>
	import { page } from '$app/stores';
	import Nav from '$lib/nav.svelte';
	import '../app.css';

	let pageUrl = $page.url.pathname;
	let backgroundMobileImagePath, backgroundTabletImagePath, backgroundDesktopImagePath;

	if (pageUrl === '/') {
		backgroundMobileImagePath = "bg-[url('/home/background-home-mobile.jpg')]";
		backgroundTabletImagePath = "sm:bg-[url('/home/background-home-tablet.jpg')]";
		backgroundDesktopImagePath = "md:bg-[url('/home/background-home-desktop.jpg')]";
	} else if (pageUrl === '/destination') {
		backgroundMobileImagePath = "bg-[url('/destination/background-destination-mobile.jpg')]";
		backgroundTabletImagePath = "sm:bg-[url('/destination/background-destination-tablet.jpg')]";
		backgroundDesktopImagePath = "md:bg-[url('/destination/background-destination-desktop.jpg')]";
	} else if (pageUrl === '/crew') {
		backgroundMobileImagePath = "bg-[url('/crew/background-crew-mobile.jpg')]";
		backgroundTabletImagePath = "sm:bg-[url('/crew/background-crew-tablet.jpg')]";
		backgroundDesktopImagePath = "md:bg-[url('/crew/background-crew-desktop.jpg')]";
	} else if (pageUrl === '/technology') {
		backgroundMobileImagePath = "bg-[url('/technology/background-technology-mobile.jpg')]";
		backgroundTabletImagePath = "sm:bg-[url('/technology/background-technology-tablet.jpg')]";
		backgroundDesktopImagePath = "md:bg-[url('/technology/background-technology-desktop.jpg')]";
	} else {
		backgroundMobileImagePath = 'bg-black';
	}
</script>

<div
	class={`min-h-screen text-white flex flex-col ${backgroundMobileImagePath} ${backgroundTabletImagePath} ${backgroundDesktopImagePath} bg-no-repeat bg-cover flex flex-col`}
>
	<header>
		<Nav />
	</header>
	<slot />
	<footer />
</div>
