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
          class="btn btn-circle btn-success bg-black/50 border-none text-white" 
          on:click={prevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
      </div>
      
      <div class="absolute top-1/2 transform -translate-y-1/2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          class="btn btn-circle btn-success bg-black/50 border-none text-white" 
          on:click={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>
    </div>
    
    <!-- indicator buttons -->
    <!-- <div class="flex w-full justify-center gap-2 py-2">
      <button 
        class="btn btn-xs {currentIndex === 0 ? 'btn-success' : 'btn-outline'}" 
        on:click={() => goToSlide(0)}
      >1</button>
      <button 
        class="btn btn-xs {currentIndex === 1 ? 'btn-success' : 'btn-outline'}" 
        on:click={() => goToSlide(1)}
      >2</button>
      <button 
        class="btn btn-xs {currentIndex === 2 ? 'btn-success' : 'btn-outline'}" 
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
              <svg fill="#000000" viewBox="0 0 50 50" class="w-8 h-8" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="22.875" cy="4.625" r="4.125"></circle><path d="M32.913 32l-5.909-16.237-.034-.167c0-.237.199-.429.447-.429.211 0 .388.141.435.329l4.017 10.504c.267.601 1.365 1 2.087 1 .965 0 1.065-1.895 1.044-2l-4.017-10.357c-.349-2.321-2.693-4.643-5.368-4.643h-5.235c-2.675 0-5.193 2.322-5.542 4.643l-3.837 10.357c-.087.199 0 2 1.043 2 .811 0 1.89-.283 2.087-1l3.875-10.549c.062-.166.228-.284.421-.284.247 0 .446.192.446.428l-.028.153-5.757 16.252c-.011.048 0 .951 0 1 0 .346.835 1 1.198 1h3.714v13.095c0 1.04.916 1.905 2 1.905s2-.866 2-1.905v-13.104c0-.283 2-.274 2 .009v13c0 1.04.917 2 2 2 1.086 0 2-.961 2-2v-13h3.869c.362 0 1.044-.654 1.044-1 0-.08.029-.931 0-1z"></path></g>
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
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
              </g><g id="SVGRepo_iconCarrier"> <path d="M6 17C6 17 6 21 9 21H15C12 21 12 17 12 17M6 7C6 7 6 3 9 3H15C12 3 12 7 12 7M15 3.0034C15 3.0034 20 2.55357 20 12C20 21.4464 15 20.9966 15 20.9966M9 10V12L10.5 13.5M7.2 17H10.8C11.9201 17 12.4802 17 12.908 16.782C13.2843 16.5903 13.5903 16.2843 13.782 15.908C14 15.4802 14 14.9201 14 13.8V10.2C14 9.0799 14 8.51984 13.782 8.09202C13.5903 7.71569 13.2843 7.40973 12.908 7.21799C12.4802 7 11.9201 7 10.8 7H7.2C6.07989 7 5.51984 7 5.09202 7.21799C4.71569 7.40973 4.40973 7.71569 4.21799 8.09202C4 8.51984 4 9.0799 4 10.2V13.8C4 14.9201 4 15.4802 4.21799 15.908C4.40973 16.2843 4.71569 16.5903 5.09202 16.782C5.51984 17 6.07989 17 7.2 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
              </svg>
            </button>
            <h3 class="text-center">Aksesoris</h3>
        </div>
        
        <div class="flex flex-col w-full items-center gap-2">
            <button class="btn btn-md md:btn-xl btn-circle">
              <svg class="w-5 h-5" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3,14A9,9,0,1,0,14.822,5.46l1.019-1.585a1,1,0,0,0,.031-1.032l-.75-1.333A1,1,0,0,0,14.25,1H9.75a1,1,0,0,0-.872.51l-.75,1.333a1,1,0,0,0,.031,1.032L9.178,5.46A9.011,9.011,0,0,0,3,14Zm8.282-8.966L10.167,3.3l.168-.3h3.33l.168.3L12.718,5.034C12.468,5.011,12.23,5,12,5S11.532,5.011,11.282,5.034ZM12,7a7,7,0,1,1-7,7A7.022,7.022,0,0,1,12,7Z"></path></g>
              </svg>
            </button>
            <h3 class="text-center">Perhiasan</h3>
        </div>
        
        <div class="flex flex-col w-full items-center gap-2">
            <button class="btn btn-md md:btn-xl btn-circle">
                <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0">
                </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.9391 5.49826C11.0902 5.1126 10.9001 4.67744 10.5144 4.5263C10.1288 4.37516 9.69362 4.56528 9.54248 4.95093L10.9391 5.49826ZM11.8058 9.56459L12.1694 8.90867L12.1687 8.90826L11.8058 9.56459ZM13.502 10.7516C13.9162 10.7509 14.2514 10.4146 14.2508 10.0004C14.2501 9.58617 13.9138 9.25093 13.4996 9.25159L13.502 10.7516ZM10.2408 5.22459L10.0531 4.49845L10.0517 4.49883L10.2408 5.22459ZM18.7648 10.1936L18.0404 10.3881C18.1005 10.6118 18.2606 10.7952 18.4742 10.885C18.6877 10.9748 18.9308 10.9608 19.1327 10.8472L18.7648 10.1936ZM20.6096 10.4908L20.0551 10.9958V10.9958L20.6096 10.4908ZM20.7332 12.3554L21.3496 12.7827V12.7827L20.7332 12.3554ZM18.9438 12.8936L19.2222 12.1972C19.0067 12.111 18.7635 12.1295 18.5635 12.2471C18.3635 12.3648 18.2292 12.5683 18.1998 12.7985L18.9438 12.8936ZM5.05677 12.8936L5.80072 12.7985C5.7713 12.5683 5.63701 12.3648 5.43702 12.2471C5.23702 12.1295 4.99384 12.111 4.77839 12.1972L5.05677 12.8936ZM3.2673 12.3554L2.65095 12.7827L2.65095 12.7827L3.2673 12.3554ZM3.39092 10.4908L3.94546 10.9958L3.94546 10.9958L3.39092 10.4908ZM5.23577 10.1936L4.86789 10.8472C5.06979 10.9608 5.31288 10.9748 5.52645 10.885C5.74003 10.7952 5.90011 10.6117 5.96015 10.388L5.23577 10.1936ZM9.54248 4.95093C8.76469 6.93559 9.57741 9.18941 11.4428 10.2209L12.1687 8.90826C10.9617 8.2408 10.4358 6.78245 10.9391 5.49826L9.54248 4.95093ZM11.4421 10.2205C12.0723 10.57 12.7813 10.7528 13.502 10.7516L13.4996 9.25159C13.0342 9.25234 12.5764 9.13431 12.1694 8.90867L11.4421 10.2205ZM10.4284 5.95074C13.7534 5.09153 17.1498 7.07144 18.0404 10.3881L19.4891 9.99908C18.385 5.88768 14.1748 3.43336 10.0531 4.49845L10.4284 5.95074ZM19.1327 10.8472C19.4372 10.6757 19.8198 10.7374 20.0551 10.9958L21.1642 9.98589C20.4583 9.21068 19.3105 9.02575 18.3969 9.54002L19.1327 10.8472ZM20.0551 10.9958C20.2904 11.2542 20.316 11.6409 20.1169 11.9281L21.3496 12.7827C21.947 11.9211 21.8701 10.7611 21.1642 9.98589L20.0551 10.9958ZM20.1169 11.9281C19.9178 12.2153 19.5467 12.3269 19.2222 12.1972L18.6654 13.59C19.6389 13.9792 20.7522 13.6443 21.3496 12.7827L20.1169 11.9281ZM18.1998 12.7985C17.801 15.9185 15.1457 18.256 12.0003 18.256V19.756C15.9006 19.756 19.1932 16.8575 19.6877 12.9887L18.1998 12.7985ZM12.0003 18.256C8.85488 18.256 6.19955 15.9185 5.80072 12.7985L4.31283 12.9887C4.80737 16.8575 8.09999 19.756 12.0003 19.756V18.256ZM4.77839 12.1972C4.45388 12.3269 4.08278 12.2153 3.88366 11.9281L2.65095 12.7827C3.24832 13.6443 4.36161 13.9792 5.33515 13.59L4.77839 12.1972ZM3.88366 11.9281C3.68453 11.6409 3.71017 11.2542 3.94546 10.9958L2.83637 9.98589C2.13048 10.7611 2.05358 11.9211 2.65095 12.7827L3.88366 11.9281ZM3.94546 10.9958C4.18076 10.7374 4.56334 10.6757 4.86789 10.8472L5.60365 9.54002C4.69 9.02575 3.54225 9.21068 2.83637 9.98589L3.94546 10.9958ZM5.96015 10.388C6.5438 8.21268 8.25047 6.51828 10.4299 5.95036L10.0517 4.49883C7.35024 5.20278 5.23482 7.30298 4.51139 9.99924L5.96015 10.388Z" fill="#000000"></path> <path d="M9.00073 12.5016C8.72503 12.5016 8.50073 12.2773 8.50073 12.0016C8.50073 11.7259 8.72503 11.5016 9.00073 11.5016C9.27643 11.5016 9.50073 11.7259 9.50073 12.0016C9.50073 12.2773 9.27643 12.5016 9.00073 12.5016Z" fill="#000000"></path> <path d="M9.00073 13.0016C8.44845 13.0016 8.00073 12.5539 8.00073 12.0016C8.00073 11.4493 8.44845 11.0016 9.00073 11.0016C9.55301 11.0016 10.0007 11.4493 10.0007 12.0016C10.0007 12.5539 9.55301 13.0016 9.00073 13.0016Z" fill="#000000"></path> <path d="M15.0007 12.5016C14.725 12.5016 14.5007 12.2773 14.5007 12.0016C14.5007 11.7259 14.725 11.5016 15.0007 11.5016C15.2764 11.5016 15.5007 11.7259 15.5007 12.0016C15.5007 12.2773 15.2764 12.5016 15.0007 12.5016Z" fill="#000000"></path> <path d="M15.0007 13.0016C14.4485 13.0016 14.0007 12.5539 14.0007 12.0016C14.0007 11.4493 14.4485 11.0016 15.0007 11.0016C15.553 11.0016 16.0007 11.4493 16.0007 12.0016C16.0007 12.5539 15.553 13.0016 15.0007 13.0016Z" fill="#000000"></path> </g>
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
