<script>
	import data from '../../../static/data.json';

	let douglasData = data.crew[0];
	let name = douglasData.name;
	let imageUrl = douglasData.images.webp;
	let role = douglasData.role;
	let bio = douglasData.bio;
</script>

<div class="sm:grid sm:grid-cols-1 md:grid-cols-2 md:gap-0 md:items-center">
	<div class="relative sm:order-last">
		<img src={imageUrl} alt={name} class="w-60 sm:w-96 md:w-full mx-auto mt-4 mb-8 sm:mb-0" />
		<div
			class="after:absolute after:bg-gray-700 after:h-[1px] after:w-full after:left-0 after:bottom-0 sm:hidden"
		/>
	</div>
	<div class="">
		<div class="uppercase mb-5">
			<p
				class="font-bellefair text-[16px] sm:text-2xl text-cstm-lavender-blue sm:mb-5 md:text-left"
			>
				{role}
			</p>
			<p />
			<p class="font-subheading-one sm:text-5xl md:text-left">{name}</p>
		</div>
		<p
			class="font-body tracking-normal text-cstm-lavender-blue sm:max-w-md sm:mx-auto sm:mb-20 md:text-left md:mt-10 md:ml-0"
		>
			{bio}
		</p>
	</div>
</div>
