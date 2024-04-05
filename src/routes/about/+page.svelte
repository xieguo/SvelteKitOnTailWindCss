<script>
	const people = [
		{
			name: 'Jane Cooper',
			title: 'Regional Paradigm Technicia',
			email: 'jane.cooper@example.com'
		},
		{
			name: 'Cody Fisher',
			title: 'Product Directives Officer',
			email: 'cody.fisher@example.com'
		},
		{
			name: 'Leonard Krasner',
			title: 'Senior Designer',
			email: 'leonard.krasner@example.com'
		},
		{
			name: 'Emily Selman',
			title: 'VP, Hardware Engineering',
			email: 'emily.selman@example.com'
		},
		{
			name: 'Anna Roberts',
			title: 'Chief Strategy Officer',
			email: 'anna.roberts@example.com'
		}
	]
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>



<div class="custom-card mb-4">Custom</div>
<div class="card">Card</div>

<div>
	<div class="flex items-center space-x-2 text-base">
		<h4 class="font-semibold text-slate-900">Contributors</h4>
		<span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
	</div>
	<div class="mt-3 flex -space-x-2 overflow-hidden">
		<img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
		<img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
		<img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
		<img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
		<img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
	</div>
	<div class="mt-3 text-sm font-medium">
		<a href="/" class="text-blue-500">+ 198 others</a>
	</div>
</div>

<!-- Will generate a font-size utility -->
<div class="text-[22px]">...</div>

<!-- Will generate a color utility -->
<div class="text-[#bada55]">...</div>


<div class="top-[117px] lg:top-[344px]">
	<!-- ... -->
</div>

<!-- Before extracting a custom class -->
<button class="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
	Save changes
</button>

<!-- After extracting a custom class -->
<button class="btn-primary">
	Save changes
</button>


<div class="grid gap-4 grid-cols-2">
	<div class="bg-sky-500">01</div>
	<div class="bg-amber-500">02</div>
	<div class="bg-sky-600 custom">03</div>
	<div class="p-4 rounded-lg shadow-lg bg-sky-500">06</div>
</div>

<div class="w-[139px] h-[77px] bg-[#165DFF]"></div>

<div class="w-32 h-32 bg-green-500" />
<div class="w-32 h-32 bg-green-500 md:bg-blue-500" />
<div class="w-32 h-32 max-[1300px]:bg-green-500 bg-blue-500"></div>


<div class="max-w-lg mx-auto p-8">
	<details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
		<summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
			Why do they call it Ovaltine?
		</summary>
		<div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
			<p>The mug is round. The jar is round. They should call it Roundtine.</p>
		</div>
	</details>
</div>



<style>
	.custom {
		border: 5px solid theme('colors.gray.200');
	}
	.custom-card {
		background-color: theme('colors.white');
		border-radius: theme('borderRadius.lg');
		padding: theme('spacing.6');
		box-shadow: theme('boxShadow.xl');
	}
</style>