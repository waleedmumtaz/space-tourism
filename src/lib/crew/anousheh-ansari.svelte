<script>
	import data from '../../../static/data.json';

	let douglasData = data.crew[3];
	let name = douglasData.name;
	let imageUrl = douglasData.images.png;
	let role = douglasData.role;
	let bio = douglasData.bio;
</script>

<div>
	<div class="relative">
		<img src={imageUrl} alt={name} class="w-60 mx-auto mt-4 mb-8" />
		<div
			class="after:absolute after:bg-gray-700 after:h-[1px] after:w-full after:left-0 after:bottom-0"
		/>
	</div>
	<div>
		<div class="uppercase mb-5">
			<p class="font-bellefair text-[16px] text-cstm-lavender-blue">{role}</p>
			<p />
			<p class="font-subheading-one">{name}</p>
		</div>
		<p class="font-body tracking-normal text-cstm-lavender-blue">{bio}</p>
	</div>
</div>
