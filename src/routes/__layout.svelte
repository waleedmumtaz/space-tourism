<script>
	import Nav from '$lib/nav.svelte';
	import '../app.css';
</script>

<div
	class="min-h-screen bg-[url('/home/background-home-mobile.jpg')] bg-no-repeat bg-cover text-white flex flex-col"
>
	<header>
		<Nav />
	</header>
	<slot />
	<footer />
</div>
