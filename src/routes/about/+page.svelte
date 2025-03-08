<!-- App.svelte -->
<script>
    import { onMount } from 'svelte';
    // @ts-ignore
    
    // @ts-ignore
    let mapContainer;
    // @ts-ignore
    let map;
    
    const bogorMarkers = $state([
      {
        name: "Kebun Raya Bogor",
        lat: -6.5971,
        lng: 106.7931,
        description: "Kebun botani terkenal di Bogor"
      },
      {
        name: "Istana Bogor",
        lat: -6.5972,
        lng: 106.7974,
        description: "Istana kepresidenan Indonesia"
      },
      {
        name: "Taman Safari Indonesia",
        lat: -6.7184,
        lng: 106.9559,
        description: "Taman margasatwa konservasi"
      },
      {
        name: "Gunung Salak",
        lat: -6.7193,
        lng: 106.7320,
        description: "Gunung berapi yang terletak di Bogor"
      },
      {
        name: "Danau Dora",
        lat: -6.6251,
        lng: 106.8434,
        description: "Danau buatan di kawasan Sentul"
      },
      {
        name: "Danau Dora",
        lat: -6.6251,
        lng: 106.8434,
        description: "Danau buatan di kawasan Sentul"
      },
      {
        name: "Danau Dora",
        lat: -6.6251,
        lng: 106.8434,
        description: "Danau buatan di kawasan Sentul"
      }
    ]);
    
    onMount(() => {
      // Inisialisasi map
      // @ts-ignore
      map = L.map(mapContainer).setView([-6.6000, 106.8000], 11);
      
      // Tambahkan layer tile dari OpenStreetMap
      // @ts-ignore
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      // Tambahkan marker untuk setiap lokasi
      // @ts-ignore
      bogorMarkers.forEach(location => {
        // @ts-ignore
        const marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(`<b>${location.name}</b><br>${location.description}`);
      });
    });
  </script>
  
  <svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" 
          crossorigin="" />
    
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" 
            integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" 
            crossorigin=""></script>
  </svelte:head>
  
  <main>
    <!-- filter -->
    <!-- <div class="flex bg-slate-400 py-2 gap-2 items-center">
      <label class="input w-full">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
        <input type="search" required placeholder="Search"/>
      </label>
      <div class="filter">
        <input class="btn btn-sm filter-reset" type="radio" name="filter" aria-label="All"/>
        <input class="btn btn-sm" type="radio" name="filter" aria-label="Tukar Dengan Orang lain"/>
        <input class="btn btn-sm" type="radio" name="filter" aria-label="Event"/>
        <input class="btn btn-sm" type="radio" name="filter" aria-label="Tukar Poin"/>
      </div>
      <div>
        <select class="select select-sm">
          <option selected>Jarak</option>
          <option>1 km - 5 km</option>
          <option>6 km - 10 km</option>
          <option>11 km - 15 km</option>
        </select>
      </div>
      <div>
        <select class="select select-sm">
          <option selected>Semua Kategori</option>
          <option>Pakaian Anak</option>
          <option>Pakaian Dewasa</option>
          <option>Sepatu & Sendal</option>
          <option>Aksesoris</option>
          <option>Kacamata</option>
          <option>Topi</option>
        </select>
      </div>
    </div> -->
    <!-- filter -->
    <div class="flex flex-col-reverse md:flex-row overflow-hidden">
        <div class="flex w-full md:w-1/4 h-screen ">
            <div class="w-full rounded-2xl overflow-auto px-1">
                <div class="flex flex-col items-center ">
                  <label class="input w-full my-2">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                    <input type="search" required placeholder="Search"/>
                  </label>
                  {#each bogorMarkers as marker}
                  <div class="card card-border bg-base-100  rounded-none border-gray-200 w-full hover:bg-base-300">
                    <div class="card-body p-0">
                     <div class="flex gap-2">
                      <div >
                        <img class="w-36 h-36 object-cover"
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="img" />
                      </div>
                      <div class="flex flex-col gap-1">
                        <div class="flex gap-2 items-center mt-2">
                          <div class="avatar avatar-placeholder">
                            <div class="bg-neutral text-neutral-content w-8 h-8 rounded-full">
                              <span class="text-xs">UI</span>
                            </div>
                          </div>
                          <div class="flex flex-col">
                            <h2 class="font-bold " >{marker.name}</h2>
                            <p class="text-xs"> 2km </p>
                          </div>
                        </div>
                        <div class="flex items-center gap-2">
                          <div  class="tooltip">
                            <div class="tooltip-content">
                              <div class="test-xs text-slate-50">kategori baju</div>
                            </div>
                            <img src="icons/cloth.svg" alt="" class="w-3">
                          </div>
                          <p>{marker.description}</p>
                        </div>
                        <div class="flex gap-2 items-center">
                          <div  class="tooltip">
                            <div class="tooltip-content">
                              <div class="test-xs text-slate-50">Persyaratan dalam menukar baju</div>
                            </div>
                            <img src="icons/agreement.svg" alt="" class="w-3">
                          </div>
                          <p>{marker.description}</p>
                        </div>
                       <div class="w-36"> 
                        <button class="btn btn-sm btn-success text-white font-bold w-full"><img src="icons/chat.svg" alt="" class="w-3"> Chat</button>
                      </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  {/each}
                </div>
              </div>
        </div>
        <div bind:this={mapContainer} class="md:w-3/4 md:h-screen w-full h-96">
          <div class="flex items-center absolute z-[999] left-16 top-2 gap-2">
            <div class="filter">
              <input class="btn btn-sm filter-reset" type="radio" name="filter" aria-label="All"/>
              <input class="btn btn-sm" type="radio" name="filter" aria-label="Tukar Dengan Orang lain"/>
              <input class="btn btn-sm" type="radio" name="filter" aria-label="Event"/>
              <input class="btn btn-sm" type="radio" name="filter" aria-label="Tukar Poin"/>
            </div>
            <div>
              <select class="select select-sm">
                <option selected>Jarak</option>
                <option>1 km - 5 km</option>
                <option>6 km - 10 km</option>
                <option>11 km - 15 km</option>
              </select>
            </div>
            <div>
              <select class="select select-sm">
                <option selected>Semua Kategori</option>
                <option>Pakaian Anak</option>
                <option>Pakaian Dewasa</option>
                <option>Sepatu & Sendal</option>
                <option>Aksesoris</option>
                <option>Kacamata</option>
                <option>Topi</option>
              </select>
            </div>
          </div>
        </div>
    </div>
    
  </main>