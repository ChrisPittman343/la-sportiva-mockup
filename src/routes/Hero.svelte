<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import HeroTextLine from './HeroTextLine.svelte';

	let index = 0;
	const heroImage = [
		{
			url: '/images/adam_ondra.jpg',
			caption: 'Adam Ondra after winning the 2020 Innsbruck World Cup'
		},
		{
			url: '/images/anton_krupicka_edited.jpg',
			caption: 'Anton Krupicka during his running of the 2021 Hardrock 100'
		},
		{
			url: '/images/nick_elson_edited.jpg',
			caption: 'Nick Elson starting his run down Crestone Peak, CO'
		}
	];

	onMount(() => {
		const interval = setInterval(() => {
			index = (index + 1) % 3;
		}, 4000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="relative flex min-h-[40vh] flex-col justify-center px-24 py-24 shadow-lg">
	<div class="text-4xl font-thin">
		<HeroTextLine
			onMouseOver={() => (index = 0)}
			isActive={index === 0}
			head="Climbing"
			text="gear trusted by world class athletes"
		/>
		<HeroTextLine
			onMouseOver={() => (index = 1)}
			isActive={index === 1}
			head="Running"
			text="gear trusted by world class athletes"
		/>
		<HeroTextLine
			onMouseOver={() => (index = 2)}
			isActive={index === 2}
			head="Skiing"
			text="gear trusted by world class athletes"
		/>
	</div>

	<div class="mt-16 flex gap-4">
		<button class="btn-primary">Shop</button>
		<button class="btn-secondary">About us</button>
	</div>

	{#key index}
		<div
			transition:fade={{ duration: 800 }}
			class="opacity absolute top-0 right-0 -z-10 h-full w-1/2 bg-cover bg-right bg-no-repeat contrast-[1.1] grayscale"
			style={`background-image: url('${heroImage[index].url}');`}
		>
			<!-- Fade image to white on right side -->
			<div
				class="opacity absolute top-0 left-0 h-full w-1/2 bg-gradient-to-l from-transparent to-white"
			/>

			<!-- Caption -->
			<div class="absolute bottom-2 right-2 text-xs bg-white/50 px-2 py-1 backdrop-blur-[2px]">
				{heroImage[index].caption}
			</div>
		</div>
	{/key}
</div>
