<script lang="ts">
	const people = [
		{
			name: 'Margot Hayes',
			url: '/images/margot_hayes.png',
			bio: 'Bouldering world champion 2017-2020, first woman to climb 5.15a Biographie'
		},
		{
			name: 'Margot Hayes',
			url: '/images/margot_hayes.png',
			bio: 'Bouldering world champion 2017-2020, first woman to climb 5.15a Biographie'
		},
		{
			name: 'Margot Hayes',
			url: '/images/margot_hayes.png',
			bio: 'Bouldering world champion 2017-2020, first woman to climb 5.15a Biographie'
		},
		{
			name: 'Margot Hayes',
			url: '/images/margot_hayes.png',
			bio: 'Bouldering world champion 2017-2020, first woman to climb 5.15a Biographie'
		},
		{
			name: 'Margot Hayes',
			url: '/images/margot_hayes.png',
			bio: 'Bouldering world champion 2017-2020, first woman to climb 5.15a Biographie'
		},
		{
			name: 'Margot Hayes',
			url: '/images/margot_hayes.png',
			bio: 'Bouldering world champion 2017-2020, first woman to climb 5.15a Biographie'
		},
		{
			name: 'Margot Hayes',
			url: '/images/margot_hayes.png',
			bio: 'Bouldering world champion 2017-2020, first woman to climb 5.15a Biographie'
		},
		{
			name: 'Margot Hayes',
			url: '/images/margot_hayes.png',
			bio: 'Bouldering world champion 2017-2020, first woman to climb 5.15a Biographie'
		},
		{
			name: 'Margot Hayes',
			url: '/images/margot_hayes.png',
			bio: 'Bouldering world champion 2017-2020, first woman to climb 5.15a Biographie'
		}
	];
</script>

<section id="ambassadors" class="mx-12 my-16">
	<h2 class="pb-4">La Sportiva Ambassadors</h2>
	<p class="pb-16">
		We are honored to sponsor <span class="font-medium">extraordinary</span> athletes who break boundaries
		in their sport.
	</p>

	<div class="grid grid-cols-3 gap-8 pb-12">
		{#each people as person}
			<a href="/" class="flex items-center gap-4 justify-start pr-8 group">
				<img src={person.url} alt="" class="w-24 h-24" />
				<div>
					<h3
						class="font-medium w-full pb-1 underline decoration-amber-300 underline-offset-1 decoration-2 group-hover:decoration-4"
						style="text-decoration-skip-ink: none;"
					>
						{person.name}
					</h3>
					<p class="opacity-50 text-sm">{person.bio}</p>
				</div>
			</a>
		{/each}
	</div>

	<div class="w-full flex justify-center">
		<a href="/" class="btn-secondary">See more athletes</a>
	</div>
</section>

<style lang="postcss">
</style>
