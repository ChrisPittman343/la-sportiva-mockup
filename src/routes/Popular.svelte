<script lang="ts">
	const popularItems = [
		{
			name: 'Solution Comp Edition (2022)',
			url: '/images/solution_comp.jpg',
			stars: 5,
			reviews: 123,
			price: 150.99
		},
		{
			name: 'Solution Comp Edition (2022)',
			url: '/images/solution_comp.jpg',
			stars: 5,
			reviews: 123,
			price: 150.99
		},
		{
			name: 'Solution Comp Edition (2022)',
			url: '/images/solution_comp.jpg',
			stars: 5,
			reviews: 123,
			price: 150.99
		},
		{
			name: 'Solution Comp Edition (2022)',
			url: '/images/solution_comp.jpg',
			stars: 5,
			reviews: 123,
			price: 150.99
		}
	];
</script>

<section id="popular-items" class="mx-12 my-16">
	<h2 class="pb-8">Popular</h2>

	<div class="flex gap-8 basis-0">
		{#each popularItems as item}
			<a
				href="/"
				class="py-8 px-6 border border-stone-200 shadow-sm flex flex-col items-center flex-1 hover:shadow-md group"
			>
				<img src={item.url} alt="" class="w-48" />
				<h3 class="text-xl font-bold w-full group-hover:underline pt-4">{item.name}</h3>
				<div class="w-full pb-8">
					{Array(item.stars).fill('★').join('')}
					<span class="opacity-50 text-sm pl-1">
						{item.reviews} reviews
					</span>
				</div>
				<div class="text-lg flex justify-between items-center w-full">
					<span class="font-medium">
						${item.price}
					</span>
					<i
						class="fa-sharp fa-solid fa-arrow-right w-4 group-hover:translate-x-1 transition-transform"
					/>
				</div>
			</a>
		{/each}
	</div>
</section>

<style lang="postcss">
</style>
