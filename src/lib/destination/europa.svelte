<script>
	import data from '../../../static/data.json';

	let europaData = data.destinations[2];
	let name = europaData.name;
	let imageUrl = europaData.images.webp;
	let description = europaData.description;
	let distance = europaData.distance;
	let travel = europaData.travel;
</script>

<div class="md:grid md:grid-cols-2 md:gap-20">
	<div>
		<img src={imageUrl} alt={name} class="w-60 sm:w-80 md:w-96 mx-auto mt-4 mb-8" />
	</div>
	<div>
		<h3 class="uppercase sm:hidden">{name}</h3>
		<h2 class="uppercase hidden sm:block md:text-left">{name}</h2>
		<p
			class="font-body text-cstm-lavender-blue tracking-normal sm:max-w-lg sm:mx-auto md:text-left"
		>
			{description}
		</p>
		<div class="bg-gray-700 h-[1px] my-10" />
		<div class="uppercase sm:flex sm:justify-center md:justify-start sm:items-start sm:gap-28">
			<div class="mb-5 md:text-left">
				<p class="font-subheading-two">Avg. Distance</p>
				<h4>{distance}</h4>
			</div>
			<div class="md:text-left">
				<p class="font-subheading-two">Est. Travel Time</p>
				<h4>{travel}</h4>
			</div>
		</div>
	</div>
</div>
