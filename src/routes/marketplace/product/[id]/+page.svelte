<script>
    import { onMount } from 'svelte';
    import { ProductData } from '../../../../data/ProductData';
    import { page } from '$app/stores';

    let product;
    let productId;

    $: productId = $page.params.id;
    $: product = ProductData.find(p => p.id == Number(productId));
</script>

<main class="container mx-auto p-4">
    {#if product}
        <h1 class="text-3xl font-bold">{product.title}</h1>
        <img src={product.image} alt={product.title} class="w-full h-48 object-cover mb-2">
        <p>{product.description}</p>
        <p class="text-gray-600">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}</p>
    {:else}
        <p>Product not found</p>
    {/if}
</main>