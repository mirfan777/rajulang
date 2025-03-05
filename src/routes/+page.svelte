<h1>Created by Maulana Irfan | Fahri ferdinnansya | Rio Radiansyah</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

huh?
<script>
	let count = 0;
</script>

<button on:click={() => count -= 1}>-</button>
<span>{ count }</span>
<button on:click={() => count += 1}>+</button>