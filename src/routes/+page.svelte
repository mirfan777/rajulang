<script>
  // @ts-nocheck
  import { base } from '$app/paths';
  import { onMount, onDestroy } from 'svelte';

  let currentIndex = 0;
  const totalItems = 3;
  let interval;
  let paused = false;


  function startAutoSlide() {
    interval = setInterval(() => {
      if (!paused) {
        currentIndex = (currentIndex + 1) % totalItems;
        goToSlide(currentIndex);
      }
    }, 5000); 
  }

  function stopAutoSlide() {
    clearInterval(interval);
  }

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

 
  function handleMouseOver() {
    paused = true;
  }

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
  
<main class="flex justify-center ">
  <div class="lg:w-[1200px] w-full p-5 flex flex-col gap-5">
    <!-- carousel container -->
    <div class="relative group">
      <!-- main carousel -->
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
        <button 
          class="btn btn-circle btn-primary bg-black/50 border-none text-white" 
          on:click={prevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
      </div>
      
      <div class="absolute top-1/2 transform -translate-y-1/2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          class="btn btn-circle btn-primary bg-black/50 border-none text-white" 
          on:click={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
    
    <!-- indicator buttons -->
    <!-- <div class="flex w-full justify-center gap-2 py-2">
      <button 
        class="btn btn-xs {currentIndex === 0 ? 'btn-primary' : 'btn-outline'}" 
        on:click={() => goToSlide(0)}
      >1</button>
      <button 
        class="btn btn-xs {currentIndex === 1 ? 'btn-primary' : 'btn-outline'}" 
        on:click={() => goToSlide(1)}
      >2</button>
      <button 
        class="btn btn-xs {currentIndex === 2 ? 'btn-primary' : 'btn-outline'}" 
        on:click={() => goToSlide(2)}
      >3</button>
    </div> -->
     
    <!-- categories -->
    <h1 class="text-2xl font-bold">Kategori</h1>
     <div class="flex gap-5 lg:w-[1200px] w-full overflow-auto my-10">
        <div class="flex flex-col w-full items-center gap-2">
            <button class="btn btn-md md:btn-xl btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
            </button>
            <h3 class="text-center">Semua Kategori</h3>
        </div>
        
        <div class="flex flex-col w-full items-center gap-2">
            <button class="btn btn-md md:btn-xl btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
            </button>
            <h3 class="text-center">Wanita</h3>
        </div>
        
        <div class="flex flex-col w-full items-center gap-2">
            <button class="btn btn-md md:btn-xl btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </button>
            <h3 class="text-center">Pria</h3>
        </div>
        
        <div class="flex flex-col w-full items-center gap-2">
            <button class="btn btn-md md:btn-xl btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75.0Z" />
                </svg>
            </button>
            <h3 class="text-center">Tas</h3>
        </div>
        
        <div class="flex flex-col w-full items-center gap-2">
            <button class="btn btn-md md:btn-xl btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
            </button>
            <h3 class="text-center">Aksesoris</h3>
        </div>
        
        <div class="flex flex-col w-full items-center gap-2">
            <button class="btn btn-md md:btn-xl btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            </button>
            <h3 class="text-center">Perhiasan</h3>
        </div>
        
        <div class="flex flex-col w-full items-center gap-2">
            <button class="btn btn-md md:btn-xl btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </button>
            <h3 class="text-center">Pakaian Anak</h3>
        </div>
        
        <div class="flex flex-col w-full items-center gap-2">
            <button class="btn btn-md md:btn-xl btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
            </button>
            <h3 class="text-center">Sport</h3>
        </div>
    </div>

    <!-- endCategories -->

    <!-- Cards -->
    <h1 class="text-2xl font-bold">Rekomendasi untuk anda</h1>
    <div class="flex justify-center w-full">
      <div class="flex gap-5 lg:w-[1200px] w-full overflow-auto my-10">
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40 h-72 shadow-sm hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40 h-40">
            <img class="lg:w-56 sm:w-48 w-40 aspect-square h-40 object-cover"
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea"
              alt="Premium Denim Jacket" />
          </figure>
          <div class="card-body p-2 gap-1">
            <h2 class="card-title line-clamp-2 font-light md:text-base text-sm">Premium Denim Jacket - Classic Washed Blue with Vintage Details</h2>
            <p class="font-bold">Rp. 399.000</p>
            <div class="flex gap-2 just text-xs">
              <p class="line-through text-gray-400 max-w-min">Rp. 599.000</p>
              <span class="text-xs text-red-400 font-bold max-w-min">33%</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="rating rating-xs">
                <div class="mask mask-star bg-orange-400" aria-current="true"></div>
              </div>
              <div class="text-xs">4.8 | <div class="badge badge-xs bg-green-500 font-bold text-white">bestseller</div></div>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40 h-72 shadow-sm hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40 h-40">
            <img class="lg:w-56 sm:w-48 w-40 aspect-square h-40 object-cover"
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
              alt="Slim Fit Chinos" />
          </figure>
          <div class="card-body p-2 gap-1">
            <h2 class="card-title line-clamp-2 font-light md:text-base text-sm">Slim Fit Chinos - Stretchy Cotton Blend Pants in Khaki</h2>
            <p class="font-bold">Rp. 275.000</p>
            <div class="flex gap-2 just text-xs">
              <p class="line-through text-gray-400 max-w-min">Rp. 359.000</p>
              <span class="text-xs text-red-400 font-bold max-w-min">23%</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="rating rating-xs">
                <div class="mask mask-star bg-orange-400" aria-current="true"></div>
              </div>
              <div class="text-xs">4.7 | <div class="badge badge-xs bg-green-500 font-bold text-white">new</div></div>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40 h-72 shadow-sm hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40 h-40">
            <img class="lg:w-56 sm:w-48 w-40 aspect-square h-40 object-cover"
              src="https://images.unsplash.com/photo-1503341504253-dff4815485f1"
              alt="Graphic Tee" />
          </figure>
          <div class="card-body p-2 gap-1">
            <h2 class="card-title line-clamp-2 font-light md:text-base text-sm">Retro Graphic T-Shirt - 100% Cotton with Urban Print Design</h2>
            <p class="font-bold">Rp. 129.000</p>
            <div class="flex gap-2 just text-xs">
              <p class="line-through text-gray-400 max-w-min">Rp. 199.000</p>
              <span class="text-xs text-red-400 font-bold max-w-min">35%</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="rating rating-xs">
                <div class="mask mask-star bg-orange-400" aria-current="true"></div>
              </div>
              <div class="text-xs">4.6 | <div class="badge badge-xs bg-green-500 font-bold text-white">trending</div></div>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40 h-72 shadow-sm hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40 h-40">
            <img class="lg:w-56 sm:w-48 w-40 aspect-square h-40 object-cover"
              src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
              alt="Leather Sneakers" />
          </figure>
          <div class="card-body p-2 gap-1">
            <h2 class="card-title line-clamp-2 font-light md:text-base text-sm">Minimalist Leather Sneakers - Premium White with Subtle Details</h2>
            <p class="font-bold">Rp. 499.000</p>
            <div class="flex gap-2 just text-xs">
              <p class="line-through text-gray-400 max-w-min">Rp. 789.000</p>
              <span class="text-xs text-red-400 font-bold max-w-min">37%</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="rating rating-xs">
                <div class="mask mask-star bg-orange-400" aria-current="true"></div>
              </div>
              <div class="text-xs">4.9 | <div class="badge badge-xs bg-green-500 font-bold text-white">premium</div></div>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40 h-72 shadow-sm hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40 h-40">
            <img class="lg:w-56 sm:w-48 w-40 aspect-square h-40 object-cover"
              src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6 "
              alt="Crossbody Bag" />
          </figure>
          <div class="card-body p-2 gap-1">
            <h2 class="card-title line-clamp-2 font-light md:text-base text-sm">Leather Crossbody Bag - Compact Design with Adjustable Strap</h2>
            <p class="font-bold">Rp. 349.000</p>
            <div class="flex gap-2 just text-xs">
              <p class="line-through text-gray-400 max-w-min">Rp. 499.000</p>
              <span class="text-xs text-red-400 font-bold max-w-min">30%</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="rating rating-xs">
                <div class="mask mask-star bg-orange-400" aria-current="true"></div>
              </div>
              <div class="text-xs">4.7 | <div class="badge badge-xs bg-green-500 font-bold text-white">handcrafted</div></div>
            </div>
          </div>
        </div>
        
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40 h-72 shadow-sm hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40 h-40">
            <img class="lg:w-56 sm:w-48 w-40 aspect-square h-40 object-cover"
              src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9"
              alt="Beanie Hat" />
          </figure>
          <div class="card-body p-2 gap-1">
            <h2 class="card-title line-clamp-2 font-light md:text-base text-sm">Wool Blend Beanie - Warm Winter Hat in Heather Gray</h2>
            <p class="font-bold">Rp. 89.000</p>
            <div class="flex gap-2 just text-xs">
              <p class="line-through text-gray-400 max-w-min">Rp. 129.000</p>
              <span class="text-xs text-red-400 font-bold max-w-min">31%</span>
            </div>
            <div class="flex items-center gap-1">
              <div class="rating rating-xs">
                <div class="mask mask-star bg-orange-400" aria-current="true"></div>
              </div>
              <div class="text-xs">4.5 | <div class="badge badge-xs bg-green-500 font-bold text-white">seasonal</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- endCards -->  
    <!-- landing -->
      <div class="flex flex-col w-full  gap-10 my-20">
        <div class="flex flex-col w-full items-center gap-10">
          <h1 class="font-bold text-3xl sm:text-center text-left">Ubah Pakaian Lama Jadi Lebih Berarti!</h1>
          <h2 class="sm:text-center sm:w-4/5 w-full text-left text-gray-500">Rajulang adalah platform sustainable fashion yang mengubah pakaian bekas menjadi kesempatan baru! Kami hadir untuk mengurangi limbah tekstil dan menciptakan ekonomi sirkular yang lebih berkelanjutan.</h2>
        </div>
        <div class="flex flex-col w-full my-10">
          <h1 class="font-bold text-3xl sm:text-center text-left">Apa yang Bisa Kamu Lakukan di Rajulang?</h1>
        </div>
        <div class="flex flex-wrap gap-20 justify-center my-10">
          <div class="flex gap-5 items-start">
            <img class="w-10 h-10" src="images/tukarpoin.png" alt="img">
            <div class="flex flex-col">
              <h3 class="font-bold text text-2xl">Tukar Poin</h3>
              <p class="lg:w-96 w-full text-gray-500">Punya pakaian bekas? Kumpulkan minimal 2 kg pakaian dan dapatkan 10 poin. Poin bisa ditukar dengan pakaian hasil perbaikan atau desain ulang!</p>
            </div>
          </div>
          <div class="flex gap-5 items-start">
            <img class="w-10 h-10" src="images/event.png" alt="img">
            <div class="flex flex-col">
              <h3 class="font-bold text text-2xl">Artikel & Event</h3>
              <p class="lg:w-96 w-full text-gray-500">Ikuti berbagai acara menarik, seperti kegiatan tukar-menukar pakaian dan workshop membuat pakaian lama jadi baru. Jangan lewatkan event terbaru!</p>
            </div>
          </div>
          <div class="flex gap-5 items-start">
            <img class="w-10 h-10" src="images/tukarbaju.png" alt="img">
            <div class="flex flex-col">
              <h3 class="font-bold text text-2xl">Temutukar</h3>
              <p class="lg:w-96 w-full text-gray-500">Cari atau bagikan pakaian bekas dengan mudah! Kamu bisa menemukan pakaian yang kamu butuhkan atau memberikan pakaian kepada orang lain yang membutuhkan.</p>
            </div>
          </div>
          <div class="flex gap-5 items-start">
            <img class="w-10 h-10" src="images/market.png" alt="img">
            <div class="flex flex-col">
              <h3 class="font-bold text text-2xl">Marketplace</h3>
              <p class="lg:w-96 w-full text-gray-500">Beli pakaian bekas yang sudah diperbaiki atau didesain ulang agar lebih menarik! Bisa dibeli langsung atau ditukar dengan poin dari pakaian bekasmu.</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full items-center gap-5">
          <h1 class="font-bold text-3xl sm:text-center text-left"> Bersama, Kita Bisa Kurangi Limbah Pakaian!</h1>
          <h2 class="sm:text-center sm:w-96 w-full text-left text-gray-500 ">Yuk, bergabung dengan Rajulang dan bantu selamatkan lingkungan dengan cara yang mudah dan bermanfaat!</h2>
          <button class="btn btn-wide bg-success">Mulai Sekarang!</button>
        </div>
        

      </div>
    <!-- endLanding -->

  
</main>
