<script>
  import { onMount } from 'svelte';
  import { UserCurrentMarker, EventMarkers, TukarPoinMarker, UserMarkers } from '../../data/MarkerData';
  
  // @ts-ignore
  let mapContainer;
  // @ts-ignore
  let map;
  // @ts-ignore
  let L; // Declare Leaflet variable but don't initialize yet
  
  onMount(async () => {
    // Only import Leaflet on the client side
    if (typeof window !== 'undefined') {
      // Dynamically import Leaflet
      L = await import('leaflet');
      
      // Import Leaflet CSS
      const linkEl = document.createElement('link');
      linkEl.rel = 'stylesheet';
      linkEl.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(linkEl);
      
      // Wait a moment for CSS to load, then initialize
      setTimeout(() => {
        initMap();
      }, 200);
    }
  });
  
  function initMap() {
    // @ts-ignore
    if (!L || !mapContainer) return; // Safety check
    
    // Fix for Leaflet default icon paths
    delete L.Icon.Default.prototype._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
    });
    
    // Initialize map centered around Bogor area
    map = L.map(mapContainer).setView([UserCurrentMarker.lat, UserCurrentMarker.lng], 13);
    
    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Create custom icons for different marker types
    const userIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    
    const currentUserIcon = L.icon({
      iconUrl: 'icons/current_user.svg',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    
    const eventIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    
    const poinIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    
    // Add current user marker
    L.marker([UserCurrentMarker.lat, UserCurrentMarker.lng], {icon: currentUserIcon})
      .addTo(map)
      .bindPopup('<b>Your Location</b>')
      .openPopup();
    
    // Add user markers (blue)
    UserMarkers.forEach(user => {
      // @ts-ignore
      const marker = L.marker([user.lat, user.lng], {icon: userIcon}).addTo(map);
      
      // Create rich popup content
      const popupContent = `
        <div style="max-width: 200px">
          <img src="${user.imageUrl}" alt="${user.title}" style="width: 200px; height: 200px; margin-bottom: 5px; border-radius: 4px">
          <h3 class="text-bold text-lg" style="margin: 0 0 5px 0"><strong>${user.title}</strong></h3>
          <p class="text-xs" style="margin: 0 0 5px 0"><b>${user.name}</b> • ${user.distance} km away</p>
          <p class="text-xs" style="margin: 0 0 5px 0"><b>Category:</b> ${user.category}</p>
          <p class="text-xs" style="margin: 0 0 5px 0">${user.description}</p>
        </div>
      `;
      
      marker.bindPopup(popupContent);
    });
    
    // Add event markers (red)
    EventMarkers.forEach(event => {
      // @ts-ignore
      const marker = L.marker([event.lat, event.lng], {icon: eventIcon}).addTo(map);
      
      // Create rich popup content
      const popupContent = `
        <div style="max-width: 200px">
          <h3 style="margin: 0 0 5px 0">${event.title}</h3>
          <p style="margin: 0 0 5px 0">${event.distance} km away</p>
          <img src="${event.imageUrl}" alt="${event.title}" style="width: 100%; height: auto; margin-bottom: 5px; border-radius: 4px">
          <p style="margin: 0 0 5px 0">${event.address}</p>
          <p style="margin: 0; font-weight: bold">${event.datetime}</p>
        </div>
      `;
      
      marker.bindPopup(popupContent);
    });
    
    // Add tukar poin markers (green)
    TukarPoinMarker.forEach(place => {
      // @ts-ignore
      const marker = L.marker([place.lat, place.lng], {icon: poinIcon}).addTo(map);
      
      // Create rich popup content with rewards as list
      const popupContent = `
        <div style="max-width: 200px">
          <h3 style="margin: 0 0 5px 0">${place.title}</h3>
          <p style="margin: 0 0 5px 0">${place.distance} km away</p>
          <img src="${place.imageUrl}" alt="${place.title}" style="width: 100%; height: auto; margin-bottom: 5px; border-radius: 4px">
          <p style="margin: 0 0 5px 0"><b>Address:</b><br>${place.address}</p>
        </div>
      `;
      
      marker.bindPopup(popupContent);
    });
  }
</script>

  
  <main>
    <div class="flex flex-col-reverse md:flex-row overflow-hidden">
        <div class="flex w-full md:w-[820px] h-screen ">
            <div class="w-full rounded-2xl overflow-auto px-1">
                <div class="flex flex-col items-center ">
                  <div class="sticky top-0 z-50 w-full bg-white">
                    <label class="input w-full my-2 ">
                      <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                      <input type="search" required placeholder="Search"/>
                    </label>
                  </div>
                  <!-- Events -->
                  <h2 class="w-full p-2 text-black font-bold text-2xl">Events</h2>
                  {#each EventMarkers as marker}
                  <div class="card card-border bg-base-100  rounded-none border-gray-200 w-full hover:bg-base-300">
                    <div class="card-body p-0">
                     <div class="flex  gap-2">
                      <div class="p-2 w-56 h-40" >
                        <img class="w-36 h-36 object-center rounded-xl"
                        src={marker.imageUrl}
                        alt="img" />
                      </div>
                      <div class="flex flex-col w-full gap-2">
                        <div class="flex gap-2 items-center mt-2">
                          <div class="flex flex-col">
                            <h2 class="font-bold " >{marker.title}</h2>
                            <p class="text-xs">{marker.distance} km</p>
                          </div>
                        </div>
                        <div class="flex items-start gap-2">
                          <div  class="tooltip">
                            <div class="tooltip-content">
                              <div class="test-xs text-slate-50">Jadwal</div>
                            </div>
                            <img src="icons/cloth.svg" alt="" class="w-3">
                          </div>
                          <p class="text-wrap text-xs">{marker.datetime}</p>
                        </div>
                        <div class="flex gap-2 items-start">
                          <div  class="tooltip">
                            <div class="tooltip-content">
                              <div class="test-xs text-slate-50">Deskripsi</div>
                            </div>
                            <img src="icons/agreement.svg" alt="" class="w-3">
                          </div>
                          <p class="text-wrap w-full">{marker.address}</p>
                        </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  {/each}
                  <!-- Tukar Poin -->
                  <h2 class="w-full p-2 text-black font-bold text-2xl">Tukar Poin</h2>
                  {#each TukarPoinMarker  as marker}
                  <div class="card card-border bg-base-100  rounded-none border-gray-200 w-full hover:bg-base-300">
                    <div class="card-body p-0">
                     <div class="flex gap-2">
                      <div class="p-2 w-40 h-40">
                        <img class="w-36 h-36 object-center m-2 rounded-xl"
                        src={marker.imageUrl}
                        alt="img" />
                      </div>
                      <div class="flex flex-col gap-1">
                        <div class="flex gap-2 items-center mt-2">
                          <div class="flex flex-col">
                            <h2 class="font-bold " >{marker.title}</h2>
                            <p class="text-xs">{marker.distance} km</p>
                          </div>
                        </div>
                        <div>
                          <p>{marker.address}</p>
                        </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  {/each}

                  <!-- people -->
                  <h2 class="w-full p-2 text-black font-bold text-2xl">People</h2>
                  {#each UserMarkers as marker}
                  <div class="card card-border bg-base-100  rounded-none border-gray-200 w-full h-48 hover:bg-base-300">
                    <div class="card-body p-0">
                     <div class="flex gap-2">
                      <div class="p-2 w-56 h-40">
                        <img class="w-36 h-36 object-center rounded-xl"
                        src={marker.imageUrl}
                        alt="img" />
                      </div>
                      <div class="flex flex-col w-full gap-2">
                        <div class="flex gap-2 items-center mt-2">
                          <div class="avatar avatar-placeholder">
                            <div class="bg-neutral text-neutral-content w-8 h-8 rounded-full">
                              <span class="text-xs">UI</span>
                            </div>
                          </div>
                          <div class="flex flex-col">
                            <h2 class="font-bold " >{marker.title}</h2>
                            <p class="text-xs">{marker.name} | {marker.distance} km</p>
                          </div>
                        </div>
                        <div>
                          <p>{marker.description}</p>
                        </div>
                        <div class="flex items-center gap-2">
                          <div  class="tooltip">
                            <div class="tooltip-content">
                              <div class="test-xs text-slate-50">kategori baju</div>
                            </div>
                            <img src="icons/cloth.svg" alt="" class="w-4">
                          </div>
                          <p>{marker.category}</p>
                        </div>
                        <div class="flex gap-2 items-center">
                          <div  class="tooltip">
                            <div class="tooltip-content">
                              <div class="test-xs text-slate-50">Persyaratan dalam menukar baju</div>
                            </div>
                            <img src="icons/agreement.svg" alt="" class="w-4">
                          </div>
                          <p>{marker.requirement_description}</p>
                        </div>
                       <div class="w-36"> 
                        <button class="btn btn-xs btn-success text-white font-bold w-full"><img src="icons/chat.svg" alt="" class="w-3"> Chat</button>
                      </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  {/each}
                </div>
              </div>
        </div>
        <div bind:this={mapContainer} class="md:h-screen w-full h-96">
          <!-- Filter -->
          <div class="flex items-center absolute z-[999] left-16 top-2">
            <div class="filter flex gap-1">
              <input class="btn btn-xs md:btn-sm filter-reset" type="radio" name="filter" aria-label="All"/>
              <input class="btn btn-xs md:btn-sm" type="radio" name="filter" aria-label="Tukar Dengan Orang lain"/>
              <input class="btn btn-xs md:btn-sm" type="radio" name="filter" aria-label="Event"/>
              <input class="btn btn-xs md:btn-sm" type="radio" name="filter" aria-label="Tukar Poin"/>
              <div>
                <select class="select select-xs md:select-sm">
                  <option selected>Jarak</option>
                  <option>1 km - 5 km</option>
                  <option>6 km - 10 km</option>
                  <option>11 km - 15 km</option>
                </select>
              </div>
              <div>
                <select class="select select-xs md:select-sm">
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
          <!-- endFilter -->
    </div>
    
  </main>