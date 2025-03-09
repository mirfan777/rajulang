<h1>Created by Maulana Irfan | Fahri ferdinnansya | Rio Radiansyah</h1>

<script>
// @ts-nocheck

  import { base } from '$app/paths';
	let count = 0;

    let modal;
  
  function openModal() {
    modal.showModal();
  }
</script>
  
<main class="flex justify-center ">
  <div class="w-[1000px] m-5">
    <!-- caraousel -->
    <div class="carousel w-full">
      <div id="item1" class="carousel-item w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          class="w-full" />
      </div>
      <div id="item2" class="carousel-item w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          class="w-full" />
      </div>
      <div id="item3" class="carousel-item w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          class="w-full" />
      </div>
      <div id="item4" class="carousel-item w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          class="w-full" />
      </div>
    </div>
    <div class="flex w-full justify-center gap-2 py-2">
      <a href="#item1" class="btn btn-xs">1</a>
      <a href="#item2" class="btn btn-xs">2</a>
      <a href="#item3" class="btn btn-xs">3</a>
      <a href="#item4" class="btn btn-xs">4</a>
    </div>
    <!-- endCaraousel -->
     
    <!-- categories -->
     <div class="flex gap-5 w-full overflow-auto">
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">Semua Kategori</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">Wanita</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">Pria</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">All Categories</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">All Categories</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">All Categories</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">All Categories</h3>
      </div>
      <div class="flex flex-col w-full items-center gap-2">
        <button class="btn btn-xl btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
        </button>
        <h3 class="text-center">All Categories</h3>
      </div>
     </div>

    <!-- endCategories -->

    <!-- Cards -->
     <div class="grid grid-cols-6 gap-4">
      <div class="card bg-base-100 w-56 shadow-sm">
        <figure class="w-56 h-40">
          <img class="w-56 h-40"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div class="card-body p-2">
          <h2 class="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div class="rating rating-sm">
            <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="1 star" />
            <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
            <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="3 star" />
            <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="4 star" />
            <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" aria-label="5 star" />
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      

     </div>

    <!-- endCards -->
  </div>
  
</main>
