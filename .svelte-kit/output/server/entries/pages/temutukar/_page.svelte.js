import { W as ensure_array_like, S as pop, P as push } from "../../../chunks/index.js";
import { a as attr, e as escape_html } from "../../../chunks/attributes.js";
const UserMarkers = [
  {
    name: "Anita Wijaya",
    title: "Sepatu Running Wanita",
    lat: -6.5971,
    lng: 106.7931,
    distance: 2,
    imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=300",
    category: "sepatu",
    description: "Sepatu running wanita ukuran 38, masih bagus",
    requirement: true,
    requirement_description: "Butuh pakaian anak perempuan usia 6 tahun"
  },
  {
    name: "Budi Santoso",
    title: "Kemeja Pria Katun",
    lat: -6.5795,
    lng: 106.8134,
    distance: 1.2,
    imageUrl: "https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&w=300",
    category: "pakaian dewasa",
    description: "Kemeja pria bahan katun ukuran L, warna biru",
    requirement: false,
    requirement_description: "Tanpa Syarat"
  },
  {
    name: "Dian Purnama",
    title: "Kacamata Fashion",
    lat: -6.585,
    lng: 106.799,
    distance: 0.8,
    imageUrl: "https://images.unsplash.com/photo-1604176424472-9d740a17a46a?q=80&w=300",
    category: "kacamata",
    description: "Kacamata fashion frame bulat, kondisi mulus",
    requirement: true,
    requirement_description: "Butuh tas ransel untuk anak SMP"
  },
  {
    name: "Eko Prasetyo",
    title: "Tas Selempang Hitam",
    lat: -6.601,
    lng: 106.805,
    distance: 2.5,
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=300",
    category: "tas",
    description: "Tas selempang ukuran sedang warna hitam",
    requirement: true,
    requirement_description: "Butuh sepatu pria ukuran 42"
  },
  {
    name: "Fitriani Rahma",
    title: "Baju Anak Laki-laki",
    lat: -6.576,
    lng: 106.7875,
    distance: 1.9,
    imageUrl: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=300",
    category: "pakaian anak",
    description: "Baju anak laki-laki usia 4-5 tahun, 3 set",
    requirement: true,
    requirement_description: "Butuh pakaian dewasa wanita ukuran M"
  },
  {
    name: "Gita Ardani",
    title: "Sandal Wanita Terbaru",
    lat: -6.592,
    lng: 106.818,
    distance: 1.4,
    imageUrl: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=300",
    category: "sendal",
    description: "Sandal wanita ukuran 37, model terbaru",
    requirement: false,
    requirement_description: "Tanpa Syarat"
  },
  {
    name: "Hadi Gunawan",
    title: "Jam Tangan Kasual",
    lat: -6.583,
    lng: 106.823,
    distance: 1.7,
    imageUrl: "https://images.unsplash.com/photo-1558191053-8edcb01e1da3?q=80&w=300",
    category: "akesesoris",
    description: "Jam tangan pria model kasual",
    requirement: true,
    requirement_description: "Butuh kacamata baca"
  },
  {
    name: "Indah Permata",
    title: "Dress Casual Wanita",
    lat: -6.605,
    lng: 106.798,
    distance: 2.3,
    imageUrl: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?q=80&w=300",
    category: "pakaian dewasa",
    description: "Dress casual wanita ukuran S, warna pastel",
    requirement: true,
    requirement_description: "Butuh pakaian olahraga ukuran M"
  },
  {
    name: "Joko Widodo",
    title: "Sepatu Formal Pria",
    lat: -6.571,
    lng: 106.81,
    distance: 2.1,
    imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=300",
    category: "sepatu",
    description: "Sepatu formal pria ukuran 41, warna coklat",
    requirement: false,
    requirement_description: "Tanpa Syarat"
  },
  {
    name: "Kartika Dewi",
    title: "Tas Tote Motif Bunga",
    lat: -6.5975,
    lng: 106.827,
    distance: 1.8,
    imageUrl: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=300",
    category: "tas",
    description: "Tas tote wanita bahan kanvas, motif bunga",
    requirement: true,
    requirement_description: "Butuh sandal anak ukuran 30"
  }
];
const EventMarkers = [
  {
    title: "Tukar Ria Sempur",
    lat: -6.5971,
    lng: 106.7931,
    distance: 2,
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=300",
    address: "Jl. Sempur No.1, Sempur, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16129",
    datetime: "15 Maret 2025 | 09:00 - 15:00"
  },
  {
    title: "Fashion Swap Bogor",
    lat: -6.585,
    lng: 106.82,
    distance: 1.3,
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=300",
    address: "Jl. Kapten Muslihat No.17 A, RT.04/RW.06, Pabaton, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16121",
    datetime: "20 Maret 2025 | 10:00 - 16:00"
  }
];
const TukarPoinMarker = [
  {
    title: "Alfa Midi Bogor Baru",
    lat: -6.582,
    lng: 106.805,
    distance: 0.7,
    imageUrl: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?q=80&w=300",
    address: "Jl. Pajajaran No. 123, Bogor Tengah, Kota Bogor"
  },
  {
    title: "Indomaret Plus Pajajaran",
    lat: -6.594,
    lng: 106.798,
    distance: 1.1,
    imageUrl: "https://images.unsplash.com/photo-1567346953138-1ed130169bca?q=80&w=300",
    address: "Jl. Pajajaran No. 57, Baranangsiang, Kota Bogor"
  },
  {
    title: "Bank Sampah Hijau",
    lat: -6.575,
    lng: 106.8,
    distance: 1.6,
    imageUrl: "https://images.unsplash.com/photo-1571724434581-141ac057eb1c?q=80&w=300",
    address: "Botani Square Lantai 2, Jl. Raya Pajajaran No. 69, Tegallega, Kota Bogor"
  },
  {
    title: "Toko Zero Waste Bogor",
    lat: -6.589,
    lng: 106.825,
    distance: 1.9,
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=300",
    address: "Jl. Siliwangi No. 88, Sukasari, Kota Bogor"
  }
];
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(EventMarkers);
  const each_array_1 = ensure_array_like(TukarPoinMarker);
  const each_array_2 = ensure_array_like(UserMarkers);
  $$payload.out += `<main><div class="flex flex-col-reverse md:flex-row overflow-hidden"><div class="flex w-full md:w-[820px] h-screen"><div class="w-full rounded-2xl overflow-auto px-1"><div class="flex flex-col items-center"><div class="sticky top-0 z-50 w-full bg-white"><label class="input w-full my-2"><svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg> <input type="search" required placeholder="Search"></label></div> <h2 class="w-full p-2 text-black font-bold text-2xl">Events</h2> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let marker = each_array[$$index];
    $$payload.out += `<div class="card card-border bg-base-100 rounded-none border-gray-200 w-full hover:bg-base-300"><div class="card-body p-0"><div class="flex gap-2"><div class="p-2 w-56 h-40"><img class="w-36 h-36 object-center rounded-xl"${attr("src", marker.imageUrl)} alt="img"></div> <div class="flex flex-col w-full gap-2"><div class="flex gap-2 items-center mt-2"><div class="flex flex-col"><h2 class="font-bold">${escape_html(marker.title)}</h2> <p class="text-xs">${escape_html(marker.distance)} km</p></div></div> <div class="flex items-start gap-2"><div class="tooltip"><div class="tooltip-content"><div class="test-xs text-slate-50">Jadwal</div></div> <img src="icons/cloth.svg" alt="" class="w-3"></div> <p class="text-wrap text-xs">${escape_html(marker.datetime)}</p></div> <div class="flex gap-2 items-start"><div class="tooltip"><div class="tooltip-content"><div class="test-xs text-slate-50">Deskripsi</div></div> <img src="icons/agreement.svg" alt="" class="w-3"></div> <p class="text-wrap w-full">${escape_html(marker.address)}</p></div></div></div></div></div>`;
  }
  $$payload.out += `<!--]--> <h2 class="w-full p-2 text-black font-bold text-2xl">Tukar Poin</h2> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let marker = each_array_1[$$index_1];
    $$payload.out += `<div class="card card-border bg-base-100 rounded-none border-gray-200 w-full hover:bg-base-300"><div class="card-body p-0"><div class="flex gap-2"><div class="p-2 w-40 h-40"><img class="w-36 h-36 object-center m-2 rounded-xl"${attr("src", marker.imageUrl)} alt="img"></div> <div class="flex flex-col gap-1"><div class="flex gap-2 items-center mt-2"><div class="flex flex-col"><h2 class="font-bold">${escape_html(marker.title)}</h2> <p class="text-xs">${escape_html(marker.distance)} km</p></div></div> <div><p>${escape_html(marker.address)}</p></div></div></div></div></div>`;
  }
  $$payload.out += `<!--]--> <h2 class="w-full p-2 text-black font-bold text-2xl">People</h2> <!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let marker = each_array_2[$$index_2];
    $$payload.out += `<div class="card card-border bg-base-100 rounded-none border-gray-200 w-full h-48 hover:bg-base-300"><div class="card-body p-0"><div class="flex gap-2"><div class="p-2 w-56 h-40"><img class="w-36 h-36 object-center rounded-xl"${attr("src", marker.imageUrl)} alt="img"></div> <div class="flex flex-col w-full gap-2"><div class="flex gap-2 items-center mt-2"><div class="avatar avatar-placeholder"><div class="bg-neutral text-neutral-content w-8 h-8 rounded-full"><span class="text-xs">UI</span></div></div> <div class="flex flex-col"><h2 class="font-bold">${escape_html(marker.title)}</h2> <p class="text-xs">${escape_html(marker.name)} | ${escape_html(marker.distance)} km</p></div></div> <div><p>${escape_html(marker.description)}</p></div> <div class="flex items-center gap-2"><div class="tooltip"><div class="tooltip-content"><div class="test-xs text-slate-50">kategori baju</div></div> <img src="icons/cloth.svg" alt="" class="w-4"></div> <p>${escape_html(marker.category)}</p></div> <div class="flex gap-2 items-center"><div class="tooltip"><div class="tooltip-content"><div class="test-xs text-slate-50">Persyaratan dalam menukar baju</div></div> <img src="icons/agreement.svg" alt="" class="w-4"></div> <p>${escape_html(marker.requirement_description)}</p></div> <div class="w-36"><button class="btn btn-xs btn-success text-white font-bold w-full"><img src="icons/chat.svg" alt="" class="w-3"> Chat</button></div></div></div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></div> <div class="md:h-screen w-full h-96"><div class="flex items-center absolute z-[999] left-16 top-2"><div class="filter flex gap-1"><input class="btn btn-xs md:btn-sm filter-reset" type="radio" name="filter" aria-label="All"> <input class="btn btn-xs md:btn-sm" type="radio" name="filter" aria-label="Tukar Dengan Orang lain"> <input class="btn btn-xs md:btn-sm" type="radio" name="filter" aria-label="Event"> <input class="btn btn-xs md:btn-sm" type="radio" name="filter" aria-label="Tukar Poin"> <div><select class="select select-xs md:select-sm"><option selected>Jarak</option><option>1 km - 5 km</option><option>6 km - 10 km</option><option>11 km - 15 km</option></select></div> <div><select class="select select-xs md:select-sm"><option selected>Semua Kategori</option><option>Pakaian Anak</option><option>Pakaian Dewasa</option><option>Sepatu &amp; Sendal</option><option>Aksesoris</option><option>Kacamata</option><option>Topi</option></select></div></div></div></div></div></main>`;
  pop();
}
export {
  _page as default
};
