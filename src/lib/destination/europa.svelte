<script>
	import data from '../../../static/data.json';

	let europaData = data.destinations[2];
	let name = europaData.name;
	let imageUrl = europaData.images.png;
	let description = europaData.description;
	let distance = europaData.distance;
	let travel = europaData.travel;
</script>

<div>
	<img src={imageUrl} alt={name} class="w-60 mx-auto mt-4 mb-8" />
	<h3>{name}</h3>
	<p class="font-body text-cstm-lavender-blue tracking-normal">{description}</p>
	<div class="bg-gray-700 h-[1px] my-10" />
	<div class="uppercase">
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
