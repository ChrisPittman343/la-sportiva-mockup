<script lang="ts">
	export let onMouseOver: () => void;
	export let isActive: boolean;
	export let head: string;
	export let text: string;
</script>

<div />

<!-- todo: make this onClick or just less buggy
    onMouseOver={props.onMouseOver} -->
<div class="my-1 w-fit">
	<span
		class="inline-flex w-32 justify-end text-right font-bold transition-opacity duration-500"
		style={`opacity: ${isActive ? 1 : 0.5}`}
	>
		<span class="relative inline-block w-fit">
			{#if isActive}
				<div
					class="absolute bottom-0 left-0 -z-10 h-1 w-full animate-grow-to-right 
                      bg-amber-300 transition-opacity duration-500"
				/>
			{/if}

			{head}
		</span>
	</span>{' '}
	<span class={'transition-opacity duration-500'} style={`opacity: ${isActive ? 1 : 0}`}>
		{text}
	</span>
</div>
