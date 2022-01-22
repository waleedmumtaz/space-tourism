<script>
	import data from '../../../static/data.json';

	let launchVehicleData = data.technology[1];
	let name = launchVehicleData.name;
	let imageUrlLandscape = launchVehicleData.images.landscape;
	let imageUrlPortrait = launchVehicleData.images.portrait;
	let description = launchVehicleData.description;
</script>

<div>
	<div class="md:grid md:grid-cols-2 md:gap-20">
		<div class="md:hidden">
			<img src={imageUrlLandscape} alt="launch vehicle" class="w-full mb-10" />
		</div>
		<div class="hidden md:block md:order-last md:w-full">
			<img src={imageUrlPortrait} alt={name} class="md:w-full" />
		</div>
		<div class="px-7 md:flex md:flex-col md:justify-center md:items-start">
			<div class="md:text-left">
				<div class="uppercase mb-5">
					<p class="font-bellefair text-[16px] text-cstm-lavender-blue sm:mb-5">
						The Terminology...
					</p>
					<p class="font-subheading-one sm:text-5xl">{name}</p>
				</div>
				<p class="font-body tracking-normal text-cstm-lavender-blue sm:max-w-md sm:mx-auto">
					{description}
				</p>
			</div>
		</div>
	</div>
</div>
