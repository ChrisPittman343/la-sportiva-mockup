<section
	id="newsletter"
	class="my-16 mx-auto flex h-[300px] max-w-4xl items-center justify-between"
>
	<div class="max-w-lg">
		<h2 class="pb-4 text-2xl">
			Interested in pushing your limits <br /> with La Sportiva?
		</h2>
		<p class="">
			Join our newsletter to stay updated on new equipment, special deals, and historic achievements
			made by our athletes.
		</p>
	</div>

	<form on:submit|preventDefault class="flex flex-col gap-2">
		<div class="relative">
			<input
				type="email"
				class="h-[44px] border-2 border-stone-800 p-2 pl-12 transition-colors 
						placeholder-stone-500 focus:bg-stone-200 bg-white outline-none"
				placeholder="you@domain.com"
			/>
			<i
				class="fa-sharp fa-solid fa-envelope absolute top-1/2 left-3 -translate-y-1/2 transform w-auto text-lg"
			/>
		</div>
		<button type="submit" class="btn-primary h-[44px]"> Subscribe </button>
	</form>
</section>
