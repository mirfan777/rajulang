<script>
    import { onMount } from 'svelte';
    import { ProductData } from '../../../../data/ProductData';
    import { page } from '$app/stores';

    let product;
    let productId;

    $: productId = $page.params.id;
    $: product = ProductData.find(p => p.id == Number(productId));
</script>

<main class="container mx-auto p-6">
    {#if product}
        <div class="card w-auto bg-base-100 shadow-sm grid grid-cols-2 p-1">
            <figure class="m-4" style="background-image: url({product.image}); background-size: cover; background-position: center;">
            </figure>
            <div class="card-body grid grid-cols-1 gap-[-4rem]">
                <div class="breadcrumbs text-sm">
                    <ul>
                    <li><p>Marketplace</p></li>
                    <li><p>{product.title}</p></li>
                    </ul>
                </div>
                <h2 class="card-title">{product.title}</h2>
                <p class="text-justify text-xl">Rp {product.price.toLocaleString('id-ID')}</p>
                <div class="rating">
                    {#each Array(5) as _, i}
                        <input type="radio" name="rating-1" class="mask mask-star" aria-label={`${i + 1} star`} checked={product.Rating === i + 1} />
                    {/each}
                </div>
                <!-- Card  -->
                <div class="card shadow-sm">
                    <div class="card-body">
                        <p class="text-lg">
                            Compare
                        </p> 
                    </div>
                </div>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    {:else}
        <p>Product not found</p>
    {/if}
</main>

