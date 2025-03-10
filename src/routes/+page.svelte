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
     <div class="flex gap-5 lg:w-[1200px] w-full  overflow-auto">
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-md md:btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">Semua Kategori</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-md md:btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">Wanita</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-md md:btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">Pria</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-md md:btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">All Categories</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-md md:btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">All Categories</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-md md:btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">All Categories</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-md md:btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">All Categories</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-md md:btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">All Categories</h3>
      </div>
     </div>

    <!-- endCategories -->

    <!-- Cards -->
     <div class="flex justify-center w-full">
      <div class="lg:w-[1200px] w-full place-items-center grid lg:grid-cols-5 lg:gap-4 gap-2 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 overflow-x-hidden">
      
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40 h-72  shadow-sm  hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40  h-40">
            <img class="lg:w-56 sm:w-48 w-40 aspect-square h-40 object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body p-2 gap-1">
            <h2 class="card-title line-clamp-2 font-light md:text-base text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, explicabo incidunt reiciendis nemo cupiditate fugit quis et error tenetur, ratione possimus? Ad impedit ducimus magnam. Nesciunt dolores ullam rem adipisci.</h2>
            <p class="font-bold ">RP. 12.000</p>
            <div class="flex gap-2 just text-xs ">
              <p class="line-through text-gray-400 max-w-min">Rp.24.000</p>
              <span class="text-xs text-red-400 font-bold max-w-min">50%</span>
            </div>
           <div class="flex items-center gap-1">
            <div class="rating rating-xs">
              <div  class="mask mask-star bg-orange-400 " aria-current="true" ></div>
            </div>
            <div class="text-xs">4.9 | <div class="badge badge-xs bg-green-500 font-bold text-white">eco-friendly</div> </div>
           </div>
          </div>
        </div>
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40  shadow-sm  hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40  h-40">
            <img class="lg:w-56 sm:w-48 w-40  h-40 object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body p-2">
            <h2 class="card-title line-clamp-2 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, explicabo incidunt reiciendis nemo cupiditate fugit quis et error tenetur, ratione possimus? Ad impedit ducimus magnam. Nesciunt dolores ullam rem adipisci.</h2>
            <p class="font-bold ">RP. 12.000</p>
            <div class="rating rating-xs">
              <div  class="mask mask-star-2 bg-orange-400"></div>
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
             
            </div>
          </div>
        </div>
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40  shadow-sm  hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40  h-40">
            <img class="lg:w-56 sm:w-48 w-40  h-40 object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body p-2">
            <h2 class="card-title line-clamp-2 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, explicabo incidunt reiciendis nemo cupiditate fugit quis et error tenetur, ratione possimus? Ad impedit ducimus magnam. Nesciunt dolores ullam rem adipisci.</h2>
            <p class="font-bold ">RP. 12.000</p>
            <div class="rating rating-xs">
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="3 star" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="4 star" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="5 star" />
            </div>
          </div>
        </div>
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40  shadow-sm  hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40  h-40">
            <img class="lg:w-56 sm:w-48 w-40  h-40 object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body p-2">
            <h2 class="card-title line-clamp-2 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, explicabo incidunt reiciendis nemo cupiditate fugit quis et error tenetur, ratione possimus? Ad impedit ducimus magnam. Nesciunt dolores ullam rem adipisci.</h2>
            <p class="font-bold ">RP. 12.000</p>
            <div class="rating rating-xs">
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="3 star" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="4 star" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="5 star" />
            </div>
          </div>
        </div>
        <div class="card bg-base-100 lg:w-56 sm:w-48 w-40  shadow-sm  hover:shadow-2xl hover:shadow-slate-200">
          <figure class="lg:w-56 sm:w-48 w-40  h-40">
            <img class="lg:w-56 sm:w-48 w-40  h-40 object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body p-2">
            <h2 class="card-title line-clamp-2 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, explicabo incidunt reiciendis nemo cupiditate fugit quis et error tenetur, ratione possimus? Ad impedit ducimus magnam. Nesciunt dolores ullam rem adipisci.</h2>
            <p class="font-bold ">RP. 12.000</p>
            <div class="rating rating-xs">
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="3 star" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="4 star" />
              <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="5 star" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- endCards -->  
    <!-- landing -->
      <div class="flex flex-col w-full  gap-10">
        <div class="flex flex-col w-full items-center gap-5">
          <h1 class="font-bold text-3xl sm:text-center text-left">Ubah Pakaian Lama Jadi Lebih Berarti!</h1>
          <h2 class="sm:text-center sm:w-4/5 w-full text-left text-gray-500">Rajulang adalah platform sustainable fashion yang mengubah pakaian bekas menjadi kesempatan baru! Kami hadir untuk mengurangi limbah tekstil dan menciptakan ekonomi sirkular yang lebih berkelanjutan.</h2>
        </div>
        <div class="flex flex-col w-full">
          <h1 class="font-bold text-3xl sm:text-center text-left">Apa yang Bisa Kamu Lakukan di Rajulang?</h1>
        </div>
        <div class="flex flex-wrap gap-20 justify-center">
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
          <h2 class="sm:text-center sm:w-4/5 w-full text-left text-gray-500">Yuk, bergabung dengan Rajulang dan bantu selamatkan lingkungan dengan cara yang mudah dan bermanfaat!</h2>
          <button class="btn btn-wide">Mulai Sekarang!</button>
        </div>
        

      </div>
    <!-- endLanding -->

  
</main>
