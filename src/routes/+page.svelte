<h1>Created by Maulana Irfan | Fahri ferdinnansya | Rio Radiansyah</h1>

pardon?
<script>
    import { base } from '$app/paths';
	let count = 0;
</script>

<a href="{base}/about">About my site</a>

<button on:click={() => count -= 1}>-</button>
<span>{ count }</span>
<button on:click={() => count += 1}>+</button>