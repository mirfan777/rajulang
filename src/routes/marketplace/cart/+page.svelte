<script>
    import { ProductData } from "../../../data/ProductData";
    import { writable } from 'svelte/store';

    const items = writable(ProductData.map(product => ({ ...product, selected: false, quantity: 1 })));
    const allSelected = writable(false);

    function toggleSelectAll() {
        allSelected.update(value => {
            const newValue = !value;
            items.update(currentItems => {
                return currentItems.map(item => ({ ...item, selected: newValue }));
            });
            return newValue;
        });
    }

    function toggleItemSelection(index) {
        items.update(currentItems => {
            currentItems[index].selected = !currentItems[index].selected;
            allSelected.set(currentItems.every(item => item.selected));
            return currentItems;
        });
    }

    function updateQuantity(index, change) {
        items.update(currentItems => {
            currentItems[index].quantity = (currentItems[index].quantity || 1) + change;
            if (currentItems[index].quantity < 1) {
                currentItems[index].quantity = 1;
            }
            return currentItems;
        });
    }
</script>

<main class="container mx-auto p-10">
    <div class="container flex">
        <div class="list-cart grid grid-cols-1 gap-4 w-1/2">
            <div class="card shadow-sm">
                <div class="card-body">
                    <div class="flex items-center">
                        <input type="checkbox" bind:checked={$allSelected} on:change={toggleSelectAll} class="mr-2" /> Select All
                    </div>
                </div>
            </div>
            {#each $items.slice(0, 10) as item, index}
                <div class="card shadow-sm">
                    <div class="card-body p-4 rounded-md">
                        <div class="flex gap-5">
                            <div class="flex flex-col self-start mt-1">
                                <input type="checkbox" bind:checked={item.selected} on:change={() => toggleItemSelection(index)} class="w-5 h-5" />
                            </div>
                            <img class="w-32 h-32 object-cover rounded-lg" src={item.image} alt={item.title} />
                            <div class="desc w-full grid grid-cols-1 gap-5">
                                <div class="contain">
                                    <p class="text-xl font-semibold">{item.title}</p>
                                    <p class="text-lg text-gray-600">{item.product_desc}</p>
                                </div>
                                <div class="flex justify-between items-center mt-2">
                                    <div class="flex gap-21">
                                        <div class="avg-rate flex gap-1">
                                            <p class="text-lg">Avg Rate : {item.Rating}</p>
                                            <img src="/src/assets/star.svg" alt="rate" class="w-5">
                                        </div>
                                        <div class="trash-add flex gap-3">
                                            <img src="/src/assets/trash.svg" alt="Hapus dari whislist" class="w-5" />
                                            <img src="/src/assets/heart.svg" alt="Tambah ke cart" class="w-5" />
                                            <div class="addorno">
                                                <div class="flex items-center border  rounded-lg">
                                                    <button on:click={() => updateQuantity(index, -1)} class="px-2 py-1 bg-gray-200 rounded-lg">-</button>
                                                    <span class="mx-2">{item.quantity}</span>
                                                    <button on:click={() => updateQuantity(index, 1)} class="px-2 py-1 bg-gray-200 rounded-lg">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>