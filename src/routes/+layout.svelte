<script lang="ts">
	import '../app.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
</script>

<Header />
<main class="min-h-screen">
	<slot />
</main>
<Footer />
