<script>
// @ts-nocheck

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

  // Filter kategori fashion yang lebih spesifik
  let categories = [
      'All',
      'Women Clothing',
      'Men Clothing',
      'Kids Clothing',
      'Shoes',
      'Bags & Accessories',
      'Sports Wear',
      'Vintage',
      'Underwear',
      'Ethnic Wear'
  ];
  
  // Status produk untuk filter
  let statuses = [
      { value: 'eco-friendly', label: 'Eco-Friendly', color: 'bg-green-500' },
      { value: 'recycle', label: 'Recycled Material', color: 'bg-blue-500' },
      { value: 'fixed', label: 'Fixed Price', color: 'bg-purple-500' }
  ];
  
  // Range harga
  let priceRanges = [
      { id: 1, label: 'Under Rp 100.000', min: 0, max: 100000 },
      { id: 2, label: 'Rp 100.000 - Rp 300.000', min: 100000, max: 300000 },
      { id: 3, label: 'Rp 300.000 - Rp 500.000', min: 300000, max: 500000 },
      { id: 4, label: 'Above Rp 500.000', min: 500000, max: Infinity }
  ];
  
  // Material filter
  let materials = [
      'Cotton',
      'Polyester',
      'Linen',
      'Denim',
      'Silk',
      'Wool',
      'Bamboo',
      'Leather',
      'Synthetic'
  ];
  
  // State untuk filter yang aktif
  let selectedCategory = 'All';
  let selectedStatus = null;
  let selectedPriceRange = null;
  let selectedMaterials = [];
  
  let currentIndex = 0;
  const totalItems = 3;
  // @ts-ignore
  let interval;
  let paused = false;

  // Carousel slides
  let slides = [
      { id: 1, image: 'images/banner1.png' },
      { id: 2, image: 'images/banner2.png' },
      { id: 3, image: 'images/banner3.png' }
  ];
  
  // Fungsi untuk menerapkan filter
  function applyFilter(type, value) {
      if (type === 'category') {
          selectedCategory = value;
      } else if (type === 'status') {
          selectedStatus = selectedStatus === value ? null : value;
      } else if (type === 'price') {
          selectedPriceRange = selectedPriceRange?.id === value.id ? null : value;
      } else if (type === 'material') {
          if (selectedMaterials.includes(value)) {
              selectedMaterials = selectedMaterials.filter(m => m !== value);
          } else {
              selectedMaterials = [...selectedMaterials, value];
          }
      }
      
      // Reset pagination setelah filter berubah
      currentPage = 1;
  }
  
  // Fungsi untuk reset semua filter
  function resetFilters() {
      selectedCategory = 'All';
      selectedStatus = null;
      selectedPriceRange = null;
      selectedMaterials = [];
      currentPage = 1;
  }

  // Fungsi filter produk
  const filterProducts = () => {
      return ProductData.filter(product => {
          // Filter berdasarkan kategori
          const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
          
          // Filter berdasarkan status (jika dipilih)
          const statusMatch = !selectedStatus || product.status === selectedStatus;
          
          // Filter berdasarkan range harga (jika dipilih)
          const priceMatch = !selectedPriceRange || 
              (product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max);
          
          // Filter berdasarkan material (jika dipilih)
          const materialMatch = selectedMaterials.length === 0 || 
              selectedMaterials.some(m => product.material === m);
          
          return categoryMatch && statusMatch && priceMatch && materialMatch;
      });
  };
  
  // Fungsi untuk menghitung total produk setelah filter
  function getFilteredProductsCount() {
      return filterProducts().length;
  }
  
  // Pagination
  let currentPage = 1;
  const itemsPerPage = 12;

  $: filteredProducts = filterProducts();
  $: paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  $: totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

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

  // Carousel functions
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
  });
</script>

<main class="w-full flex flex-col items-center">
  <!-- carousel container -->
  <!-- svelte-ignore a11y_mouse_events_have_key_events -->
  <div class="lg:w-[1200px] w-full p-5 flex flex-col gap-5">
      <!-- main carousel -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div 
          class="carousel w-full rounded-lg overflow-hidden relative group" 
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
          
          <!-- Carousel indicators -->
          <!-- <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {#each Array(totalItems) as _, i}
                  <button 
                      class="w-3 h-3 rounded-full {currentIndex === i ? 'bg-primary' : 'bg-white/50'}" 
                      on:click={() => goToSlide(i)}
                  ></button>
              {/each}
          </div> -->
      </div>
  </div>

  <section class="product w-full flex flex-col items-center">
      <div class="flex flex-col lg:flex-row xl:w-[1200px] w-full gap-4 px-4">
          <!-- Sidebar with filters -->
          <aside class="lg:w-1/4 w-full">
              <!-- Mobile filter dengan collapse -->
              <div class="lg:hidden w-full mb-4">
                  <div class="collapse collapse-arrow bg-base-100 border-base-300 border mb-2">
                      <input type="checkbox" checked={true} /> 
                      <div class="collapse-title font-medium flex justify-between items-center">
                          <span>Categories</span>
                          <span class="text-xs text-primary">{selectedCategory !== 'All' ? selectedCategory : ''}</span>
                      </div>
                      <div class="collapse-content">
                          <ul class="menu w-full p-0">
                              {#each categories as category}
                                  <li>
                                      <button 
                                          on:click={() => applyFilter('category', category)} 
                                          class="w-full {selectedCategory === category ? 'active bg-primary/10 font-medium' : ''}"
                                      >
                                          {category}
                                      </button>
                                  </li>
                              {/each}
                          </ul>
                      </div>
                  </div>
                  
                  <div class="collapse collapse-arrow bg-base-100 border-base-300 border mb-2">
                      <input type="checkbox" /> 
                      <div class="collapse-title font-medium flex justify-between items-center">
                          <span>Product Status</span>
                          <span class="text-xs text-primary">{selectedStatus ? statuses.find(s => s.value === selectedStatus)?.label : ''}</span>
                      </div>
                      <div class="collapse-content">
                          <div class="flex flex-col gap-2">
                              {#each statuses as status}
                                  <label class="flex items-center gap-2 cursor-pointer">
                                      <input 
                                          type="checkbox" 
                                          class="checkbox checkbox-sm" 
                                          checked={selectedStatus === status.value}
                                          on:change={() => applyFilter('status', status.value)} 
                                      />
                                      <span class="badge {status.color} text-white">{status.label}</span>
                                  </label>
                              {/each}
                          </div>
                      </div>
                  </div>
                  
                  <div class="collapse collapse-arrow bg-base-100 border-base-300 border mb-2">
                      <input type="checkbox" /> 
                      <div class="collapse-title font-medium flex justify-between items-center">
                          <span>Price Range</span>
                          <span class="text-xs text-primary">{selectedPriceRange?.label || ''}</span>
                      </div>
                      <div class="collapse-content">
                          <div class="flex flex-col gap-2">
                              {#each priceRanges as range}
                                  <label class="flex items-center gap-2 cursor-pointer">
                                      <input 
                                          type="radio" 
                                          class="radio radio-sm" 
                                          name="price-range"
                                          checked={selectedPriceRange?.id === range.id}
                                          on:change={() => applyFilter('price', range)} 
                                      />
                                      <span>{range.label}</span>
                                  </label>
                              {/each}
                          </div>
                      </div>
                  </div>
                  
                  <div class="collapse collapse-arrow bg-base-100 border-base-300 border mb-2">
                      <input type="checkbox" /> 
                      <div class="collapse-title font-medium flex justify-between items-center">
                          <span>Material</span>
                          <span class="text-xs text-primary">{selectedMaterials.length ? `${selectedMaterials.length} selected` : ''}</span>
                      </div>
                      <div class="collapse-content">
                          <div class="flex flex-wrap gap-2">
                              {#each materials as material}
                                  <label class="flex items-center gap-1 cursor-pointer">
                                      <input 
                                          type="checkbox" 
                                          class="checkbox checkbox-xs" 
                                          checked={selectedMaterials.includes(material)}
                                          on:change={() => applyFilter('material', material)} 
                                      />
                                      <span class="text-sm">{material}</span>
                                  </label>
                              {/each}
                          </div>
                      </div>
                  </div>
                  
                  <div class="flex gap-2 mt-3">
                      <button 
                          class="btn btn-sm btn-outline flex-1" 
                          on:click={resetFilters}
                      >
                          Reset Filters
                      </button>
                      <button 
                          class="btn btn-sm btn-success flex-1"
                      >
                          Apply ({getFilteredProductsCount()} items)
                      </button>
                  </div>
              </div>
              
              <!-- Desktop filter dengan card -->
              <div class="hidden lg:block w-full sticky top-4">
                  <div class="card shadow-lg w-full border-solid">
                      <div class="card-body p-4">
                          <div class="flex justify-between items-center mb-2">
                              <h2 class="text-xl font-bold">Filters</h2>
                              <button 
                                  class="btn btn-xs btn-ghost" 
                                  on:click={resetFilters}
                              >
                                  Reset All
                              </button>
                          </div>
                          
                          <div class="collapse collapse-arrow bg-base-100">
                              <input type="checkbox" checked={true} /> 
                              <div class="collapse-title font-medium pl-0">
                                  Categories
                              </div>
                              <div class="collapse-content pl-0">
                                  <ul class="menu w-full p-0">
                                      {#each categories as category}
                                          <li>
                                              <button 
                                                  on:click={() => applyFilter('category', category)} 
                                                  class="w-full {selectedCategory === category ? 'active bg-primary/10 font-medium' : ''}"
                                              >
                                                  {category}
                                              </button>
                                          </li>
                                      {/each}
                                  </ul>
                              </div>
                          </div>
                          
                          <div class="divider my-1"></div>
                          
                          <div class="collapse collapse-arrow bg-base-100">
                              <input type="checkbox" checked={true} /> 
                              <div class="collapse-title font-medium pl-0">
                                  Product Status
                              </div>
                              <div class="collapse-content pl-0">
                                  <div class="flex flex-col gap-2">
                                      {#each statuses as status}
                                          <label class="flex items-center gap-2 cursor-pointer">
                                              <input 
                                                  type="checkbox" 
                                                  class="checkbox checkbox-sm" 
                                                  checked={selectedStatus === status.value}
                                                  on:change={() => applyFilter('status', status.value)} 
                                              />
                                              <span class="badge {status.color} text-white">{status.label}</span>
                                          </label>
                                      {/each}
                                  </div>
                              </div>
                          </div>
                          
                          <div class="divider my-1"></div>
                          
                          <div class="collapse collapse-arrow bg-base-100">
                              <input type="checkbox" checked={true} /> 
                              <div class="collapse-title font-medium pl-0">
                                  Price Range
                              </div>
                              <div class="collapse-content pl-0">
                                  <div class="flex flex-col gap-2">
                                      {#each priceRanges as range}
                                          <label class="flex items-center gap-2 cursor-pointer">
                                              <input 
                                                  type="radio" 
                                                  class="radio radio-sm" 
                                                  name="price-range-desktop"
                                                  checked={selectedPriceRange?.id === range.id}
                                                  on:change={() => applyFilter('price', range)} 
                                              />
                                              <span>{range.label}</span>
                                          </label>
                                      {/each}
                                  </div>
                              </div>
                          </div>
                          
                          <div class="divider my-1"></div>
                          
                          <div class="collapse collapse-arrow bg-base-100">
                              <input type="checkbox" /> 
                              <div class="collapse-title font-medium pl-0">
                                  Material
                              </div>
                              <div class="collapse-content pl-0">
                                  <div class="flex flex-col gap-1">
                                      {#each materials as material}
                                          <label class="flex items-center gap-2 cursor-pointer">
                                              <input 
                                                  type="checkbox" 
                                                  class="checkbox checkbox-xs" 
                                                  checked={selectedMaterials.includes(material)}
                                                  on:change={() => applyFilter('material', material)} 
                                              />
                                              <span>{material}</span>
                                          </label>
                                      {/each}
                                  </div>
                              </div>
                          </div>
                          
                          <div class="mt-4">
                              <div class="badge badge-info">
                                  {getFilteredProductsCount()} products found
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </aside>

          <!-- Products grid -->
          <div class="flex-1">
              <!-- Category indicator dan sort -->
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                      <h2 class="text-xl font-bold">{selectedCategory === 'All' ? 'All Products' : selectedCategory}</h2>
                      <p class="text-sm text-gray-500">{filteredProducts.length} products found</p>
                  </div>
                  
                  <div class="mt-2 md:mt-0">
                      <select class="select select-bordered select-sm">
                          <option selected>Sort By: Latest</option>
                          <option>Sort By: Price Low to High</option>
                          <option>Sort By: Price High to Low</option>
                          <option>Sort By: Most Popular</option>
                      </select>
                  </div>
              </div>
              
              <!-- Product grid -->
              {#if paginatedProducts.length > 0}
                  <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                      {#each paginatedProducts as product (product.id)}
                          <!-- svelte-ignore a11y_no_static_element_interactions -->
                          <!-- svelte-ignore a11y_click_events_have_key_events -->
                          <div class="card bg-base-100 w-full shadow-sm hover:shadow-xl transition-shadow duration-300" on:click={() => navigateToProduct(product.id)}>
                              <figure class="w-full h-40 relative">
                                  <img 
                                      class="w-full h-40 object-cover"
                                      src={product.image}
                                      alt={product.title} 
                                  />
                                  {#if product.discount > 0}
                                      <div class="absolute top-2 right-2 badge badge-error text-white">
                                          {product.discount}% OFF
                                      </div>
                                  {/if}
                              </figure>
                              <div class="card-body p-3 gap-1">
                                  <h2 class="card-title line-clamp-2 font-light md:text-base text-sm">
                                      {product.title}
                                  </h2>
                                  <p class="font-bold">
                                      Rp. {formatPrice(product.discount > 0 
                                          ? product.price - (product.price * product.discount / 100) 
                                          : product.price)}
                                  </p>
                                  {#if product.discount > 0}
                                      <div class="flex gap-2 text-xs">
                                          <p class="line-through text-gray-400">
                                              Rp. {formatPrice(product.price)}
                                          </p>
                                      </div>
                                  {/if}
                                  <div class="flex items-center gap-1">
                                      <div class="rating rating-xs">
                                          <div class="mask mask-star bg-orange-400"></div>
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
              {:else}
                  <div class="flex flex-col items-center justify-center py-10 text-center">
                      <div class="text-5xl mb-4">😕</div>
                      <h3 class="text-xl font-bold">No products found</h3>
                      <p class="text-gray-500 mb-4">Try adjusting your filters to find what you're looking for</p>
                      <button class="btn btn-success btn-sm" on:click={resetFilters}>
                          Reset Filters
                      </button>
                  </div>
              {/if}
              
              <!-- Pagination controls -->
              {#if totalPages > 1}
                  <div class="flex justify-center mt-8">
                      <div class="join">
                          <button class="join-item btn" disabled={currentPage === 1} on:click={prevPage}>«</button>
                          {#if totalPages <= 5}
                              {#each Array(totalPages) as _, i}
                                  <button 
                                      class="join-item btn {currentPage === i+1 ? 'btn-active' : ''}" 
                                      on:click={() => currentPage = i+1}
                                  >
                                      {i+1}
                                  </button>
                              {/each}
                          {:else}
                              <!-- Show limited page buttons with ellipsis for many pages -->
                              {#if currentPage > 2}
                                  <button class="join-item btn" on:click={() => currentPage = 1}>1</button>
                                  {#if currentPage > 3}
                                      <button class="join-item btn btn-disabled">...</button>
                                  {/if}
                              {/if}
                              
                              {#each Array(3).map((_, i) => Math.max(1, Math.min(currentPage - 1 + i, totalPages))) as pageNum}
                                  {#if pageNum >= 1 && pageNum <= totalPages}
                                      <button 
                                          class="join-item btn {currentPage === pageNum ? 'btn-active' : ''}" 
                                          on:click={() => currentPage = pageNum}
                                      >
                                          {pageNum}
                                      </button>
                                  {/if}
                              {/each}
                              
                              {#if currentPage < totalPages - 1}
                                  {#if currentPage < totalPages - 2}
                                      <button class="join-item btn btn-disabled">...</button>
                                  {/if}
                                  <button class="join-item btn" on:click={() => currentPage = totalPages}>{totalPages}</button>
                              {/if}
                          {/if}
                          <button class="join-item btn" disabled={currentPage === totalPages} on:click={nextPage}>»</button>
                      </div>
                  </div>
              {/if}
              
              <!-- Product count and view options -->
              <div class="flex justify-between items-center mt-4">
                  <p class="text-sm text-gray-500">
                      Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredProducts.length)} of {filteredProducts.length} items
                  </p>
                  <div class="flex items-center gap-2">
                      <span class="text-sm">View:</span>
                      <button class="btn btn-sm btn-circle btn-ghost">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                      </button>
                      <button class="btn btn-sm btn-circle btn-ghost">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="12" x2="3" y2="12"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </section>
</main>