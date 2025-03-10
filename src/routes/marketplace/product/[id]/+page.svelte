<script>
    // @ts-ignore
    import { onMount } from 'svelte';
    import { ProductData } from '../../../../data/ProductData';
    import { page } from '$app/stores';

    let product;
    let productId;

    // @ts-ignore
    $: productId = $page.params.id;
    // @ts-ignore
    $: product = ProductData.find(p => p.id == Number(productId));

    // Calculate discounted price if discount exists
    $: discountedPrice = product?.discount ? 
        product.price - (product.price * product.discount / 100) : 
        // @ts-ignore
        product.price;
    
    // Format price with dot separator for thousands
    // @ts-ignore
    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Function to determine badge color based on status
    // @ts-ignore
    function getBadgeColor(status) {
        if (status === 'eco-friendly') return 'bg-green-500';
        if (status === 'recycle') return 'bg-blue-500';
        return 'bg-purple-500'; // for fixed status or others
    }
</script>

<main class="container mx-auto p-4">
    {#if product}
        <!-- Product Card - Image on left, details on right -->
        <div class="card lg:card-side bg-base-100 shadow-xl mb-8">
            <!-- Image on the left side -->
            <figure class="lg:w-1/2 h-64 lg:h-full">
                <img src={product.image} alt={product.title} class="w-full h-full object-cover" />
            </figure>
            
            <!-- Content on the right side -->
            <div class="card-body lg:w-1/2">
                <!-- Breadcrumbs -->
                <div class="breadcrumbs text-sm mb-2">
                    <ul>
                        <li><a href="/">Marketplace</a></li>
                        <li><a href="/category/{product.category}">{product.category}</a></li>
                        <li>{product.title}</li>
                    </ul>
                </div>
                
                <!-- Product title -->
                <h2 class="card-title text-xl md:text-2xl">{product.title}</h2>
                
                <!-- Status badge -->
                <div class="flex items-center gap-2 my-1">
                    <div class="badge badge-xs text-xs text-white font-bold p-2 {getBadgeColor(product.status)}">
                        {product.status}
                    </div>
                </div>
                
                <!-- Rating -->
                <div class="flex items-center gap-2 mt-1 mb-2">
                    <div class="rating rating-sm">
                        <div class="mask mask-star-2 bg-orange-400"></div>
                    </div>
                    <span class="text-sm">{product.average_ratings} ({product.comments.length} ulasan)</span>
                </div>
                
                <!-- Price section with discount display -->
                <div class="my-2">
                    <p class="font-bold text-lg">
                        Rp. {formatPrice(discountedPrice)}
                    </p>
                    {#if product.discount > 0}
                    <div class="flex gap-2 text-xs mt-1">
                        <p class="line-through text-gray-400 max-w-min">
                            Rp. {formatPrice(product.price)}
                        </p>
                        <span class="text-xs text-red-400 font-bold max-w-min">
                            {product.discount}%
                        </span>
                    </div>
                    {/if}
                </div>
                
                <!-- Product description -->
                <p class="text-sm text-gray-600 my-2">{product.product_desc}</p>
                
                <!-- Detailed info -->
                <div class="collapse collapse-arrow bg-base-200 my-2">
                    <input type="checkbox" /> 
                    <div class="collapse-title text-sm font-medium">
                        Detail Produk
                    </div>
                    <div class="collapse-content"> 
                        <p class="text-sm">{product.detailed_product}</p>
                    </div>
                                         
                </div>
                
                <!-- Action buttons -->
                <div class="card-actions justify-end mt-4">
                    <button class="btn btn-outline">Tambah ke Keranjang</button>
                    <button class="btn btn-success">Beli Sekarang</button>
                </div>
            </div>
        </div>
        
        <!-- Reviews Section (Outside of the card) -->
        <div class="bg-base-100 shadow-xl p-6 rounded-box">
            <h3 class="text-xl font-bold mb-4">Ulasan Pembeli ({product.comments.length})</h3>
            
            {#each product.comments as comment, i}
                <div class="py-4 {i < product.comments.length - 1 ? 'border-b' : ''}">
                    <div class="flex justify-between items-center mb-2">
                        <p class="font-semibold">{comment.user}</p>
                        <div class="flex items-center gap-1">
                            <div class="rating rating-sm">
                                {#each Array(5) as _, i}
                                    <input 
                                        type="radio" 
                                        class="mask mask-star-2 bg-orange-400" 
                                        checked={comment.rating === i + 1} 
                                        disabled
                                    />
                                {/each}
                            </div>
                        </div>
                    </div>
                    <p class="text-sm">{comment.body}</p>
                </div>
            {/each}
            
            {#if product.comments.length === 0}
                <p class="text-center py-4 text-gray-500">Belum ada ulasan untuk produk ini</p>
            {/if}
        </div>
        
        <!-- Similar Products Section -->
        <div class="mt-8">
            <h3 class="text-xl font-bold mb-4">Produk Serupa</h3>
            
            <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                {#each [1, 2, 3, 4] as i}
                    <div class="card bg-base-100 w-full shadow-sm hover:shadow-xl transition-shadow">
                        <figure class="h-40">
                            <img 
                                src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Similar Product" 
                                class="w-full h-full object-cover"
                            />
                        </figure>
                        <div class="card-body p-3 gap-1">
                            <h2 class="card-title line-clamp-2 font-light text-sm">
                                Cardigan Anak Similar #{i}
                            </h2>
                            <p class="font-bold">
                                Rp. 135.000
                            </p>
                            <div class="flex gap-2 text-xs">
                                <p class="line-through text-gray-400 max-w-min">
                                    Rp. 150.000
                                </p>
                                <span class="text-xs text-red-400 font-bold max-w-min">
                                    10%
                                </span>
                            </div>
                            <div class="flex items-center gap-1">
                                <div class="rating rating-xs">
                                    <div class="mask mask-star bg-orange-400"></div>
                                </div>
                                <div class="text-xs">
                                    4.8 | 
                                    <div class="badge badge-xs bg-green-500 font-bold text-white">
                                        eco-friendly
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {:else}
        <div class="flex justify-center items-center h-64">
            <p class="text-lg">Produk tidak ditemukan</p>
        </div>
    {/if}
</main>