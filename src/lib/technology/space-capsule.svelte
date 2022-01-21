<script>
	import data from '../../../static/data.json';

	let launchVehicleData = data.technology[2];
	let name = launchVehicleData.name;
	let imageUrl = launchVehicleData.images.landscape;
	let description = launchVehicleData.description;
</script>

<div>
	<img src={imageUrl} alt="launch vehicle" class="w-full mb-10" />
	<div class="px-7">
		<div>
			<div class="uppercase mb-5">
				<p class="font-bellefair text-[16px] text-cstm-lavender-blue sm:mb-5">The Terminology...</p>
				<p class="font-subheading-one sm:text-5xl">{name}</p>
			</div>
			<p class="font-body tracking-normal text-cstm-lavender-blue sm:max-w-md sm:mx-auto">
				{description}
			</p>
		</div>
	</div>
</div>
