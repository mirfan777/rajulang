
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
        { id: 1, image: 'https://th.bing.com/th/id/OIP.OirGO7swB4uw9cy0_ThQnQHaE7?rs=1&pid=ImgDetMain' },
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
        <div class="carousel w-full h-[20rem] relative ">
            {#each slides as slide, index}
                <div class="carousel-item w-full {index === currentSlide ? 'block' : 'hidden'}">
                    <img src={slide.image} class="w-full h-[20rem] object-fill" alt="Slide {slide.id}">
                </div>
            {/each}
            
            <button on:click={prevSlide} class="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-primary mx-2 bg-transparent">&lt;</button>
            <button on:click={nextSlide} class="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-primary mx-2 bg-transparent">&gt;</button>
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4">
                {#each slides as _, index}
                    <button on:click={() => currentSlide = index} class="h-2 w-2 rounded-full {index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}" aria-label="Slide {index + 1}"></button>
                {/each}
            </div>
        </div>

    </section>
    <section class="product">
       

        <div class="flex w-full gap-3">
            <aside class="w-2/3 p-4">
                <div class="card shadow-lg w-full border-solid">
                    <div class="card-body">
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
                    </div>
                </div>
            </aside>
            <div class="max-w-3/4 product-section">
                <div class="w-full grid grid-cols-3 gap-4 p-4">
                    {#each paginatedProducts() as product, index}
                        <div class="card shadow-sm"  on:click={() => window.location.href = `/marketplace/product/${product.id}`}>
                            <div class="card-body">
                                <img src={product.image} alt={product.title} class="w-full h-48 object-cover mb-2">
                                <h3 class="text-lg font-bold">{product.title}</h3>
                                <h2 class="text-md font-normal text-ellipsis overflow-hidden whitespace-nowrap">{product.description}</h2>
                                <p class="text-gray-600">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}</p>
                            </div>
                            
                        </div>
                        {#if currentPage === 1 && index === 8}
                            <div class="card col-span-3 shadow-md">
                                <div class="card-body p-4">
                                    <h3 class="text-lg font-bold">Empty Card</h3>
                                    <p class="text-gray-600">This is an empty card that spans 3 columns.</p>
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
                <div class="flex justify-center mt-6">
                    <button on:click={prevPage} class="btn btn-primary mx-2" disabled={currentPage === 1}>&lt; Previous</button>
                    {#if totalPages <= 8}
                        {#each Array(totalPages) as _, index}
                            <button on:click={() => currentPage = index + 1} class="btn mx-1 {currentPage === index + 1 ? 'btn-primary' : 'bg-sky-50'}">{index + 1}</button>
                        {/each}
                    {:else}
                        {#if currentPage <= 4}
                            {#each Array(5) as _, index}
                                <button on:click={() => currentPage = index + 1} class="btn mx-1 {currentPage === index + 1 ? 'btn-primary' : 'bg-sky-50'}">{index + 1}</button>
                            {/each}
                            <span class="mx-1">...</span>
                            <button on:click={() => currentPage = totalPages} class="btn mx-1 {currentPage === totalPages ? 'btn-primary' : 'bg-sky-50'}">{totalPages}</button>
                        {:else if currentPage > totalPages - 4}
                            <button on:click={() => currentPage = 1} class="btn mx-1 {currentPage === 1 ? 'btn-primary' : 'bg-sky-50'}">1</button>
                            <span class="mx-1">...</span>
                            {#each Array(5) as _, index}
                                <button on:click={() => currentPage = totalPages - 4 + index} class="btn mx-1 {currentPage === totalPages - 4 + index ? 'btn-primary' : 'bg-sky-50'}">{totalPages - 4 + index}</button>
                            {/each}
                        {:else}
                            <button on:click={() => currentPage = 1} class="btn mx-1 {currentPage === 1 ? 'btn-primary' : 'bg-sky-50'}">1</button>
                            <span class="mx-1">...</span>
                            {#each Array(3) as _, index}
                                <button on:click={() => currentPage = currentPage - 2 + index} class="btn mx-1 {currentPage === currentPage - 2 + index ? 'btn-primary' : 'bg-sky-50'}">{currentPage - 2 + index}</button>
                            {/each}
                            <span class="mx-1">...</span>
                            <button on:click={() => currentPage = totalPages} class="btn mx-1 {currentPage === totalPages ? 'btn-primary' : 'bg-sky-50'}">{totalPages}</button>
                        {/if}
                    {/if}
                    <button on:click={nextPage} class="btn btn-primary mx-2" disabled={currentPage === totalPages || paginatedProducts().length < itemsPerPage}>Next &gt;</button>
                </div>
            </div>
            
        </div>
    </section>
</main>
