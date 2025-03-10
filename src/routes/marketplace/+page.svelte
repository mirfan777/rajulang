
<script>
    // @ts-ignore
    // @ts-ignore
    import { base } from '$app/paths';
    import { onMount, onDestroy } from 'svelte';
    import { ProductData } from '../../data/ProductData';

    // @ts-ignore
    function navigateToProduct(id) {
        window.location.href = base + `/marketplace/product/${id}`;
    }
    

    // @ts-ignore
    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // Fungsi untuk menentukan warna badge berdasarkan status
    // @ts-ignore
    function getBadgeColor(status) {
        if (status === 'eco-friendly') return 'bg-green-500';
        if (status === 'recycle') return 'bg-blue-500';
        return 'bg-purple-500'; // untuk status fixed atau lainnya
    }

    let categories = [...new Set(ProductData.map(product => product.category))];
    let selectedCategory = 'All';
    let currentIndex = 0;
    const totalItems = 3;
    // @ts-ignore
    let interval;
    let paused = false;

    const filterProducts = () => {
        return selectedCategory === 'All' ? ProductData : ProductData.filter(product => product.category === selectedCategory);
    };
    // @ts-ignore
    // @ts-ignore
    let currentSlide = 0;

    let currentPage = 1;
    const itemsPerPage = 15;

    // @ts-ignore
    const paginatedProducts = () => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filterProducts().slice(start, end);
    };

    const totalPages = Math.ceil(filterProducts().length / itemsPerPage);

    // @ts-ignore
    const nextPage = () => {
        if (currentPage < totalPages) {
            currentPage++;
        }
    };

    // @ts-ignore
    const prevPage = () => {
        if (currentPage > 1) {
            currentPage--;
        }
    };
    // @ts-ignore
    // @ts-ignore
    let slides = [
        { id: 1, image: 'https://th.bing.com/th/id/OIP.OirGO7swB4uw9cy0_ThQnQHaE7?rs=1&pid=ImgDetMain' },
        { id: 2, image: 'https://i.ytimg.com/vi/EywyRdz6Q5o/maxresdefault.jpg' },
        { id: 3, image: 'https://i.ytimg.com/vi/DU4MvUMkk6c/maxresdefault.jpg' }
    ];

    function startAutoSlide() {
    interval = setInterval(() => {
      if (!paused) {
        currentIndex = (currentIndex + 1) % totalItems;
        goToSlide(currentIndex);
      }
    }, 5000); 
  }

  function stopAutoSlide() {
    // @ts-ignore
    clearInterval(interval);
  }

  // @ts-ignore
  function goToSlide(index) {
    currentIndex = index;
    
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      
      const scrollPosition = carousel.clientWidth * index;
      
    
      carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    goToSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    goToSlide(currentIndex);
  }

 
  // @ts-ignore
  function handleMouseOver() {
    paused = true;
  }

  // @ts-ignore
  function handleMouseOut() {
    paused = false;
  }

  onMount(() => {
    startAutoSlide();
  });

  onDestroy(() => {
    stopAutoSlide();
  });;
</script>

<main class="w-full flex flex-col items-center">
    <!-- carousel container -->
    <!-- svelte-ignore a11y_mouse_events_have_key_events -->
    <div class="lg:w-[1200px] w-full p-5 flex flex-col gap-5">
        <!-- main carousel -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div 
          class="carousel w-full rounded-lg overflow-hidden" 
          on:mouseover={handleMouseOver} 
          on:mouseout={handleMouseOut}
        >
          <div id="item1" class="carousel-item w-full">
            <img
              src="images/banner1.png"
              class="w-full object-cover" alt="Banner 1" />
          </div>
          <div id="item2" class="carousel-item w-full">
            <img
              src="images/banner2.png"
              class="w-full object-cover" alt="Banner 2" />
          </div>
          <div id="item3" class="carousel-item w-full">
            <img
              src="images/banner3.png"
              class="w-full object-cover" alt="Banner 3" />
          </div>
        </div>
        
        <!-- side navigation buttons -->
        <div class="absolute top-1/2 transform -translate-y-1/2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button 
            class="btn btn-circle btn-success bg-black/50 border-none text-white" 
            on:click={prevSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
        </div>
        
        <div class="absolute top-1/2 transform -translate-y-1/2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <!-- svelte-ignore a11y_consider_explicit_label -->
          <button 
            class="btn btn-circle btn-success bg-black/50 border-none text-white" 
            on:click={nextSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    <section class="product">
       

        <div class="flex w-[1200px] gap-3">
            <aside class="w-1/4 p-4">
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
            <div class="lg:w-[1200px] w-full place-items-center grid lg:grid-cols-4 lg:gap-4 gap-2 md:grid-cols-3  grid-cols-2 overflow-x-hidden">
                {#each ProductData as product (product.id)}
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <div class="card bg-base-100 lg:w-56 sm:w-48 w-40 h-72 shadow-sm hover:shadow-2xl hover:shadow-slate-200 "  on:click={() => navigateToProduct(product.id)}>
                <figure class="lg:w-56 sm:w-48 w-40 h-40">
                    <img 
                    class="lg:w-56 sm:w-48 w-40 aspect-square h-40 object-cover"
                    src={product.image}
                    alt={product.title} 
                    />
                </figure>
                <div class="card-body p-2 gap-1">
                    <h2 class="card-title line-clamp-2 font-light md:text-base text-sm">
                    {product.title}
                    </h2>
                    <p class="font-bold">
                    Rp. {formatPrice(product.discount > 0 
                        ? product.price - (product.price * product.discount / 100) 
                        : product.price)}
                    </p>
                    {#if product.discount > 0}
                    <div class="flex gap-2 just text-xs">
                        <p class="line-through text-gray-400 max-w-min">
                        Rp. {formatPrice(product.price)}
                        </p>
                        <span class="text-xs text-red-400 font-bold max-w-min">
                        {product.discount}%
                        </span>
                    </div>
                    {/if}
                    <div class="flex items-center gap-1">
                    <div class="rating rating-xs">
                        <div class="mask mask-star bg-orange-400" aria-current="true"></div>
                    </div>
                    <div class="text-xs">
                        {product.average_ratings} | 
                        <div class="badge badge-xs {getBadgeColor(product.status)} font-bold text-white">
                        {product.status}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            {/each} 
              </div>

        
    </section>
</main>
