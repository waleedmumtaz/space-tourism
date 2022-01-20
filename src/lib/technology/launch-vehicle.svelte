<script>
	import data from '../../../static/data.json';

	let launchVehicleData = data.technology[0];
	let name = launchVehicleData.name;
	let imageUrl = launchVehicleData.images.landscape;
	let description = launchVehicleData.description;
</script>

<div>
	<img src={imageUrl} alt="launch vehicle" class="w-full mb-10" />
	<div class="px-7">
		<div>
			<div class="uppercase mb-5">
				<p class="font-bellefair text-[16px] text-cstm-lavender-blue">The Terminology...</p>
				<p />
				<p class="font-subheading-one">{name}</p>
			</div>
			<p class="font-body tracking-normal text-cstm-lavender-blue">
				{description}
			</p>
		</div>
	</div>
</div>
