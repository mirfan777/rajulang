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
                <div class="title-button flex justify-between">
                    <h2 class="text-2xl font-bold">{product.title}</h2>
                    <div class="flex gap-5">
                        <!-- <i class="fa-solid fa-heart"></i> -->
                        <img src="/src/assets/heart.svg" alt="Like this product" class="w-5"/>
                        <a href="/marketplace/cart"><img src="/src/assets/add.svg" alt="Add to cart" class="w-6"/></a>
                    </div>
                </div>
                <p class="text-justify text-xl">Rp {product.price.toLocaleString('id-ID')}</p>
                <div class="rating">
                    {#each Array(5) as _, i}
                        <input type="radio" name="rating-1" class="mask mask-star" aria-label={`${i + 1} star`} checked={product.Rating === i + 1} />
                    {/each}
                </div>
                <!-- Card  -->
                <div class="card shadow-sm">
                    
                    <div class="card-body grid grid-cols-1 gap-4">
                        
                        <p class="text-lg">
                            Compare
                        </p> 
                        <ol class="list-decimal list-inside">
                            <li>Materials: Wool vs Plastic</li>
                            <li>Durability: High vs Low</li>
                            <li>Comfort: Soft vs Hard</li>
                            <li>Breathability: Excellent vs Poor</li>
                            <li>Environmental Impact: Biodegradable vs Non-biodegradable</li>
                            <li>Cost: Expensive vs Cheap</li>
                        </ol>
                        <div class="flex gap-5 ">
                            <div class="flex flex-col items-center">
                                <div class="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center">
                                    100%
                                </div>
                                <p class="mt-2">Quality</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="rounded-full bg-green-500 text-white w-16 h-16 flex items-center justify-center">
                                    100%
                                </div>
                                <p class="mt-2">Durability</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="rounded-full bg-red-500 text-white w-16 h-16 flex items-center justify-center">
                                    100%
                                </div>
                                <p class="mt-2">Stylish</p>
                            </div>
                        </div>
                    </div>
                                         
                </div>
               
            </div>
        </div>
    {:else}
        <p>Product not found</p>
    {/if}
</main>

