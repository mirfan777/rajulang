
<script>
    import { onMount } from 'svelte';

    import { ProductData } from '../../data/ProductData';

    let categories = [...new Set(ProductData.map(product => product.category))];
    let selectedCategory = 'All';

    const filterProducts = () => {
        return selectedCategory === 'All' ? ProductData : ProductData.filter(product => product.category === selectedCategory);
    };
    let currentSlide = 0;

    let currentPage = 1;
    const itemsPerPage = 15;

    const paginatedProducts = () => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filterProducts().slice(start, end);
    };

    const totalPages = Math.ceil(filterProducts().length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            currentPage++;
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            currentPage--;
        }
    };
    let slides = [
        { id: 1, image: 'https://i.ytimg.com/vi/78tNYZUS-ps/maxresdefault.jpg' },
        { id: 2, image: 'https://i.ytimg.com/vi/EywyRdz6Q5o/maxresdefault.jpg' },
        { id: 3, image: 'https://i.ytimg.com/vi/DU4MvUMkk6c/maxresdefault.jpg' }
    ];

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    };

    onMount(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    });
</script>

<main class="container w-3/4 mx-auto">
    <section class="hero">
        <div class="carousel w-full relative ">
            {#each slides as slide, index}
                <div class="carousel-item w-full {index === currentSlide ? 'block' : 'hidden'}">
                    <img src={slide.image} class="w-full h-[25rem]" alt="Slide {slide.id}">
                </div>
            {/each}
            
            <button on:click={prevSlide} class="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-primary mx-2 bg-transparent">&lt;</button>
            <button on:click={nextSlide} class="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-primary mx-2 bg-transparent">&gt;</button>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4">
                {#each slides as _, index}
                    <button on:click={() => currentSlide = index} class="h-2 w-2 rounded-full {index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}"></button>
                {/each}
            </div>
        </div>
    </section>
    <section class="product">
       

        <div class="flex">
            <aside class="w-1/4 p-4">
                <h2 class="text-xl font-bold mb-4">Categories</h2>
                <ul>
                    <li class="mb-2">
                        <button on:click={() => selectedCategory = 'All'} class="text-left w-full {selectedCategory === 'All' ? 'font-bold' : ''}">All</button>
                    </li>
                    {#each categories as category}
                        <li class="mb-2">
                            <button on:click={() => selectedCategory = category} class="text-left w-full {selectedCategory === category ? 'font-bold' : ''}">{category}</button>
                        </li>
                    {/each}
                </ul>
            </aside>  
            <div class="product-section">
                <div class="w-full grid grid-cols-3 gap-4 p-4">
                    {#each paginatedProducts() as product, index}
                        <div class="border p-4"  on:click={() => window.location.href = `/marketplace/product/${product.id}`}>
                            <img src={product.image} alt={product.title} class="w-full h-48 object-cover mb-2">
                            <h3 class="text-lg font-bold">{product.title}</h3>
                            <h2 class="text-md font-normal">{product.description}</h2>
                            <p class="text-gray-600">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}</p>
                        </div>
                        {#if currentPage === 1 && index === 8}
                            <div class="border p-4 col-span-3">
                                <h3 class="text-lg font-bold">Empty Card</h3>
                                <p class="text-gray-600">This is an empty card that spans 3 columns.</p>
                            </div>
                        {/if}
                    {/each}
                </div>
                <div class="flex justify-center mt-4">
                    <button on:click={prevPage} class="btn btn-primary mx-2" disabled={currentPage === 1}>&lt; Previous</button>
                    <button on:click={nextPage} class="btn btn-primary mx-2" disabled={currentPage === totalPages || paginatedProducts().length < itemsPerPage}>Next &gt;</button>
                </div>
            </div>
            
        </div>
    </section>
</main>
