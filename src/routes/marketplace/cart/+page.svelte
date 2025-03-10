<script>
    // @ts-ignore
    import { ProductData } from "../../../data/ProductData";
    import { writable } from 'svelte/store';

    // Initialize store with product data
    // @ts-ignore
    const items = writable(ProductData.map(product => ({ 
        ...product, 
        selected: false, 
        quantity: 1,
        // Make sure we have a consistent rating property
        Rating: product.average_ratings
    })));
    
    const allSelected = writable(false);
    let cartVisible = true;
    let summaryVisible = true;

    // Toggle select all items
    function toggleSelectAll() {
        allSelected.update(value => {
            const newValue = !value;
            items.update(currentItems => {
                // @ts-ignore
                return currentItems.map(item => ({ ...item, selected: newValue }));
            });
            return newValue;
        });
    }

    // Toggle selection for a specific item
    // @ts-ignore
    function toggleItemSelection(index) {
        items.update(currentItems => {
            const updatedItems = [...currentItems];
            updatedItems[index].selected = !updatedItems[index].selected;
            allSelected.set(updatedItems.every(item => item.selected));
            return updatedItems;
        });
    }

    // Update item quantity
    // @ts-ignore
    function updateQuantity(index, change) {
        items.update(currentItems => {
            const updatedItems = [...currentItems];
            updatedItems[index].quantity = Math.max(1, (updatedItems[index].quantity || 1) + change);
            return updatedItems;
        });
    }

    // Remove item from cart
    // @ts-ignore
    function removeItem(index) {
        items.update(currentItems => {
            const updatedItems = [...currentItems];
            updatedItems.splice(index, 1);
            return updatedItems;
        });
    }

    // Calculate total items and price (selected items only)
   // @ts-ignore
     $: selectedItems = $items.filter(item => item.selected);
   // @ts-ignore
     $: totalItems = selectedItems.reduce((total, item) => total + item.quantity, 0);
   // @ts-ignore
     $: totalPrice = selectedItems.reduce((total, item) => {
        const priceAfterDiscount = item.discount ? 
            item.price * (1 - item.discount / 100) : 
            item.price;
        return total + (priceAfterDiscount * item.quantity);
    }, 0);

    // Toggle visibility for mobile
    function toggleCart() {
        cartVisible = !cartVisible;
    }

    function toggleSummary() {
        summaryVisible = !summaryVisible;
    }
</script>

<main class="container mx-auto p-4">
    <!-- Mobile header with toggle buttons -->
    <div class="lg:hidden flex justify-between items-center mb-4">
        <button class="btn btn-primary" on:click={toggleCart}>
            {cartVisible ? 'Hide Cart' : 'Show Cart'}
        </button>
        <button class="btn btn-secondary" on:click={toggleSummary}>
            {summaryVisible ? 'Hide Summary' : 'Show Summary'}
        </button>
    </div>

    <div class="flex flex-col lg:flex-row gap-5">
        <!-- Cart Section -->
        <div class="list-cart w-full lg:w-2/3" class:hidden={!cartVisible}>
            <div class="card bg-base-100 shadow-md mb-4">
                <div class="card-body p-4">
                    <div class="flex items-center">
                        <input type="checkbox" bind:checked={$allSelected} on:change={toggleSelectAll} 
                               class="checkbox checkbox-primary mr-2" />
                        <span class="font-bold">Select All Items</span>
                    </div>
                </div>
            </div>

            {#if $items.length === 0}
                <div class="card bg-base-100 shadow-md">
                    <div class="card-body p-4 text-center">
                        <p class="text-lg">Your cart is empty</p>
                    </div>
                </div>
            {:else}
                {#each $items as item, index}
                    <div class="card bg-base-100 shadow-md mb-4">
                        <div class="card-body p-4">
                            <!-- Complete restructure for better responsiveness -->
                            <div class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
                                <!-- Left section: Checkbox and Image (stacks on mobile) -->
                                <div class="flex items-start gap-3">
                                    <div class="flex-none">
                                        <input type="checkbox" 
                                               bind:checked={item.selected} 
                                               on:change={() => toggleItemSelection(index)} 
                                               class="checkbox checkbox-primary mt-2" />
                                    </div>
                                    <div class="flex-none">
                                        <img class="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg" 
                                             src={item.image} alt={item.title} />
                                    </div>
                                </div>
                                
                                <!-- Right section: All product details -->
                                <div class="flex flex-col justify-between gap-2 overflow-hidden">
                                    <!-- Product info -->
                                    <div>
                                        <h3 class="text-lg md:text-xl font-bold line-clamp-1">{item.title}</h3>
                                        
                                        <!-- Product description with truncation for long text -->
                                        <p class="text-sm md:text-base text-gray-600 line-clamp-2 mb-1">
                                            {item.product_desc}
                                        </p>
                                        
                                        <!-- Price with discount calculation -->
                                        {#if item.discount > 0}
                                            <div class="flex flex-wrap items-baseline gap-2">
                                                <p class="text-sm md:text-lg font-semibold text-primary">
                                                    Rp {(item.price * (1 - item.discount / 100)).toLocaleString('id-ID')}
                                                </p>
                                                <p class="text-xs md:text-sm line-through text-gray-400">
                                                    Rp {item.price.toLocaleString('id-ID')}
                                                </p>
                                                <span class="badge badge-accent">{item.discount}% OFF</span>
                                            </div>
                                        {:else}
                                            <p class="text-sm md:text-lg font-semibold">
                                                Rp {item.price.toLocaleString('id-ID')}
                                            </p>
                                        {/if}
                                        
                                        <!-- Badge for product status -->
                                        <div class="mt-1">
                                            {#if item.status === 'eco-friendly'}
                                                <div class="badge badge-success">Eco-friendly</div>
                                            {:else if item.status === 'recycle'}
                                                <div class="badge badge-info">Recycled</div>
                                            {:else if item.status === 'fixed'}
                                                <div class="badge badge-warning">Fixed</div>
                                            {/if}
                                        </div>
                                    </div>
                                    
                                    <!-- Actions and rating in a row that wraps responsively -->
                                    <div class="flex flex-wrap justify-between items-center gap-y-3 mt-2">
                                        <!-- Rating -->
                                        <div class="flex items-center gap-1">
                                            <span class="text-sm md:text-base whitespace-nowrap">Rating: {item.Rating}</span>
                                            <div class="rating rating-sm">
                                                {#each Array(5) as _, i}
                                                    <input type="radio" name="rating-{index}" 
                                                           class="mask mask-star-2 bg-orange-400" 
                                                           checked={Math.round(item.Rating) === i + 1} disabled />
                                                {/each}
                                            </div>
                                        </div>
                                        
                                        <!-- Action Buttons -->
                                        <div class="flex items-center gap-3">
                                            <button class="btn btn-circle btn-sm btn-outline" 
                                                    on:click={() => removeItem(index)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            
                                            <button class="btn btn-circle btn-sm btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                            
                                            <!-- Quantity controls -->
                                            <div class="join">
                                                <button class="btn btn-sm join-item" 
                                                        on:click={() => updateQuantity(index, -1)}>-</button>
                                                <div class="btn btn-sm join-item pointer-events-none">
                                                    {item.quantity}
                                                </div>
                                                <button class="btn btn-sm join-item" 
                                                        on:click={() => updateQuantity(index, 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/each}
            {/if}
        </div>

        <!-- Order Summary -->
        <div class="w-full lg:w-1/3 sticky top-4 h-fit" class:hidden={!summaryVisible}>
            <div class="card bg-base-100 shadow-md">
                <div class="card-body">
                    <h2 class="card-title text-xl">Ringkasan Belanja</h2>
                    
                    <div class="divider my-2"></div>
                    
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span>Total Barang:</span>
                            <span class="font-semibold">{totalItems} Barang</span>
                        </div>
                        
                        <div class="flex justify-between">
                            <span>Total Harga:</span>
                            <span class="font-semibold">Rp {totalPrice.toLocaleString('id-ID')}</span>
                        </div>
                        
                        <!-- Selected items counter -->
                        <div class="flex justify-between text-sm text-gray-500">
                            <span>Barang Dipilih:</span>
                            <span>{selectedItems.length} dari {$items.length}</span>
                        </div>
                    </div>
                    
                    <div class="divider my-2"></div>
                
                    
                    <div class="card-actions mt-4">
                        <button class="btn btn-success btn-block" >
                            Checkout ({totalItems} Barang)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>