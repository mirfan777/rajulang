const UserCurrentMarker = {
    lat: -6.5890033546432205,
    lng: 106.80614863217669
}


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
        lat: -6.5850,
        lng: 106.7990,
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
        lat: -6.6010,
        lng: 106.8050,
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
        lat: -6.5760,
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
        lat: -6.5920,
        lng: 106.8180,
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
        lat: -6.5830,
        lng: 106.8230,
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
        lat: -6.6050,
        lng: 106.7980,
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
        lat: -6.5710,
        lng: 106.8100,
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
        lng: 106.8270,
        distance: 1.8,
        imageUrl: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=300",
        category: "tas",
        description: "Tas tote wanita bahan kanvas, motif bunga",
        requirement: true,
        requirement_description: "Butuh sandal anak ukuran 30"
    }
]

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
        lat: -6.5850,
        lng: 106.8200,
        distance: 1.3,
        imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=300",
        address: "Jl. Kapten Muslihat No.17 A, RT.04/RW.06, Pabaton, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16121",
        datetime: "20 Maret 2025 | 10:00 - 16:00"
    }
]

const TukarPoinMarker = [
    {
        title: "Alfa Midi Bogor Baru",
        lat: -6.5820,
        lng: 106.8050,
        distance: 0.7,
        imageUrl: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?q=80&w=300",
        address: "Jl. Pajajaran No. 123, Bogor Tengah, Kota Bogor"
    },
    {
        title: "Indomaret Plus Pajajaran",
        lat: -6.5940,
        lng: 106.7980,
        distance: 1.1,
        imageUrl: "https://images.unsplash.com/photo-1567346953138-1ed130169bca?q=80&w=300",
        address: "Jl. Pajajaran No. 57, Baranangsiang, Kota Bogor"
    },
    {
        title: "Bank Sampah Hijau",
        lat: -6.5750,
        lng: 106.8000,
        distance: 1.6,
        imageUrl: "https://images.unsplash.com/photo-1571724434581-141ac057eb1c?q=80&w=300",
        address: "Botani Square Lantai 2, Jl. Raya Pajajaran No. 69, Tegallega, Kota Bogor"
    },
    {
        title: "Toko Zero Waste Bogor",
        lat: -6.5890,
        lng: 106.8250,
        distance: 1.9,
        imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=300",
        address: "Jl. Siliwangi No. 88, Sukasari, Kota Bogor"
    }
]

export { UserCurrentMarker, UserMarkers, EventMarkers, TukarPoinMarker };