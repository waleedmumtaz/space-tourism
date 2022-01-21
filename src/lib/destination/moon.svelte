<script>
	import data from '../../../static/data.json';

	let moonData = data.destinations[0];
	let name = moonData.name;
	let imageUrl = moonData.images.png;
	let description = moonData.description;
	let distance = moonData.distance;
	let travel = moonData.travel;
</script>

<div>
	<img src={imageUrl} alt={name} class="w-60 sm:w-80 mx-auto mt-4 mb-8" />
	<h3 class="uppercase sm:hidden">{name}</h3>
	<h2 class="uppercase hidden sm:block">{name}</h2>
	<p class="font-body text-cstm-lavender-blue tracking-normal sm:max-w-lg sm:mx-auto">
		{description}
	</p>
	<div class="bg-gray-700 h-[1px] my-10" />
	<div class="uppercase sm:flex sm:justify-center sm:items-start sm:gap-28">
		<div class="mb-5">
			<p class="font-subheading-two">Avg. Distance</p>
			<h4>{distance}</h4>
		</div>
		<div>
			<p class="font-subheading-two">Est. Travel Time</p>
			<h4>{travel}</h4>
		</div>
	</div>
</div>
