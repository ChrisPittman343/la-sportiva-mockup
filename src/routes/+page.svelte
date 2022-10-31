<script lang="ts">
	import Ambassadors from './Ambassadors.svelte';
	import Hero from './Hero.svelte';
	import Newsletter from './Newsletter.svelte';
	import Popular from './Popular.svelte';
</script>

<svelte:head>
	<title>La Sportiva</title>
	<meta
		name="description"
		content="Explore the outdoors with the best technical footwear, clothing and accessories for climbing, hiking, trail running, skiing and mountaineering from La Sportiva."
	/>
</svelte:head>

<Hero />
<Popular />
<hr class="mx-auto w-2/3 opacity-0" />
<Ambassadors />
<Newsletter />
