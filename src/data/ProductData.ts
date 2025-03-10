import Users from '../data/UserData';

const UserData = Users.map(user => ({
    id: user.id,
    name: user.name,
    address: user.address,
    phone_number: user.phone_number
}));

const ProductData = [
    {
      id: 1,
      title: "Kaos Anak Sustainable",
      description: "Kaos ramah lingkungan untuk anak-anak dari bahan organik 100%",
      status: "eco-friendly",
      user_id: 3,
      price: 89000,
      discount: 0,
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      average_ratings: 4.7,
      product_desc: "Kaos anak dengan desain lucu yang terbuat dari katun organik. Nyaman dipakai sehari-hari dan ramah lingkungan.",
      category: "pakaian anak",
      detailed_product: "Terbuat dari 100% katun organik. Pewarna alami bebas bahan kimia. Ukuran tersedia dari S hingga XL anak.",
      comments: [
        {
          user: "Budi Santoso",
          body: "Sangat nyaman dipakai anak saya, tidak panas dan tidak gatal.",
          rating: 5
        },
        {
          user: "Siti Nuraini",
          body: "Bagus sekali, anak saya suka desainnya. Ukurannya juga pas.",
          rating: 5
        },
        {
          user: "Ahmad Faisal",
          body: "Kualitas bagus tapi agak kecil ukurannya.",
          rating: 4
        }
      ]
    },
    {
      id: 2,
      title: "Celana Jeans Daur Ulang",
      description: "Celana jeans premium dari bahan daur ulang",
      status: "recycle",
      user_id: 7,
      price: 350000,
      discount: 15,
      image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      average_ratings: 4.5,
      product_desc: "Celana jeans stylish dengan konsep sustainable fashion. Terbuat dari bahan jeans daur ulang namun tetap nyaman dan tahan lama.",
      category: "pakaian dewasa",
      detailed_product: "80% kapas daur ulang, 18% polyester daur ulang, 2% elastan. Tersedia dalam warna biru tua, biru muda, dan hitam. Model slim fit.",
      comments: [
        {
          user: "Diana Putri",
          body: "Sangat puas dengan celana ini, nyaman dan fashionable sekaligus eco-friendly!",
          rating: 5
        },
        {
          user: "Rudi Hartono",
          body: "Bahannya bagus tapi ukurannya agak besar dari yang diharapkan.",
          rating: 4
        },
        {
          user: "Andi Wijaya",
          body: "Desainnya keren dan pas di badan, sangat merekomendasikan!",
          rating: 5
        }
      ]
    },
    {
      id: 3,
      title: "Topi Pantai Anyaman",
      description: "Topi pantai dari anyaman bambu tradisional",
      status: "eco-friendly",
      user_id: 2,
      price: 125000,
      discount: 0,
      image: "https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      average_ratings: 4.8,
      product_desc: "Topi pantai stylish dari anyaman bambu yang dibuat oleh pengrajin lokal. Sempurna untuk melindungi dari terik matahari.",
      category: "aksesoris",
      detailed_product: "Terbuat dari 100% serat bambu alami. Proses pembuatan tradisional. Diameter 40cm dengan pita dekoratif organik.",
      comments: [
        {
          user: "Nina Susanti",
          body: "Sangat cantik dan ringan, sempurna untuk liburan di pantai!",
          rating: 5
        },
        {
          user: "Dewi Lestari",
          body: "Kualitas anyamannya sangat bagus dan rapi.",
          rating: 5
        },
        {
          user: "Hendra Gunawan",
          body: "Bagus, tapi agak besar untuk kepala saya.",
          rating: 4
        }
      ]
    },
    {
      id: 4,
      title: "Blouse Batik Modern",
      description: "Blouse batik kontemporer dengan sentuhan modern",
      status: "fixed",
      user_id: 5,
      price: 225000,
      discount: 0,
      image: "https://images.unsplash.com/photo-1568252542512-9a39a6a3ee8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      average_ratings: 4.6,
      product_desc: "Blouse batik elegan yang menggabungkan motif tradisional dengan potongan modern. Cocok untuk acara formal maupun casual.",
      category: "pakaian dewasa",
      detailed_product: "Kain katun premium dengan pewarna alami. Tersedia dalam ukuran S, M, L, dan XL. Produk hasil kolaborasi dengan pengrajin batik lokal.",
      comments: [
        {
          user: "Maya Sari",
          body: "Blouse yang sangat cantik! Motif batiknya unik dan potongannya pas di badan.",
          rating: 5
        },
        {
          user: "Indah Permata",
          body: "Suka dengan warnanya yang tidak luntur dan desain yang elegan.",
          rating: 5
        },
        {
          user: "Linda Wijaya",
          body: "Bahannya bagus tapi agak ketat di bagian lengan.",
          rating: 4
        }
      ]
    },
    {
      id: 5,
      title: "Tas Tote Daur Ulang",
      description: "Tas tote dari kain perca daur ulang",
      status: "recycle",
      user_id: 8,
      price: 150000,
      discount: 10,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      average_ratings: 4.4,
      product_desc: "Tas tote multifungsi dari kain perca daur ulang. Spacious, kuat, dan ramah lingkungan untuk kegiatan sehari-hari.",
      category: "aksesoris",
      detailed_product: "Dibuat dari 100% kain perca tekstil industri. Lapisan dalam tahan air. Ukuran 40x35x10 cm dengan saku dalam berzipper.",
      comments: [
        {
          user: "Ratna Dewi",
          body: "Tas yang sangat bagus dan awet, sudah setahun masih seperti baru!",
          rating: 5
        },
        {
          user: "Agus Hermawan",
          body: "Suka dengan desainnya yang unik, setiap tas punya pola berbeda.",
          rating: 4
        },
        {
          user: "Dian Sastro",
          body: "Kapasitasnya besar, cocok untuk belanja atau bawa laptop.",
          rating: 5
        }
      ]
    },
    {
      id: 6,
      title: "Rompi Anak Handmade",
      description: "Rompi rajut tangan untuk anak-anak",
      status: "eco-friendly",
      user_id: 4,
      price: 120000,
      discount: 0,
      image: "https://images.unsplash.com/photo-1618677819924-b5fecd33d41f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      average_ratings: 4.7,
      product_desc: "Rompi anak yang dibuat dengan rajutan tangan menggunakan benang organik. Hangat, nyaman, dan ramah lingkungan.",
      category: "pakaian anak",
      detailed_product: "Terbuat dari 100% benang wol organik. Available untuk usia 3-8 tahun. Tersedia dalam warna netral yang cocok untuk unisex.",
      comments: [
        {
          user: "Farida Ningsih",
          body: "Rajutannya sangat rapi dan halus, anak saya suka memakainya.",
          rating: 5
        },
        {
          user: "Dedi Setiawan",
          body: "Kualitas benang bagus dan tidak membuat anak gatal.",
          rating: 5
        },
        {
          user: "Lisa Guntari",
          body: "Ukurannya agak besar, tapi tetap bagus.",
          rating: 4
        }
      ]
    },
    {
      id: 7,
      title: "Gelang Etnik Daur Ulang",
      description: "Gelang dari material daur ulang dengan motif etnik",
      status: "recycle",
      user_id: 1,
      price: 55000,
      discount: 0,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      average_ratings: 4.5,
      product_desc: "Gelang etnik unik yang dibuat dari manik-manik daur ulang. Menggabungkan kearifan lokal dengan konsep sustainable fashion.",
      category: "aksesoris",
      detailed_product: "Terbuat dari manik-manik kaca dan logam daur ulang. Tali adjustable dari serat alami. Setiap produk unik dan sedikit berbeda.",
      comments: [
        {
          user: "Anita Permata",
          body: "Gelangnya cantik sekali dan suka dengan cerita di balik pembuatannya!",
          rating: 5
        },
        {
          user: "Bima Arya",
          body: "Detailnya bagus tapi talinya agak mudah kendor.",
          rating: 4
        },
        {
          user: "Citra Kirana",
          body: "Unik dan berbeda dari yang lain, suka sekali!",
          rating: 5
        }
      ]
    },
    {
      id: 8,
      title: "Kemeja Linen Premium",
      description: "Kemeja linen sustainable untuk pria",
      status: "eco-friendly",
      user_id: 9,
      price: 375000,
      discount: 20,
      image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      average_ratings: 4.8,
      product_desc: "Kemeja linen berkualitas tinggi dengan sentuhan tailoring modern. Airy, breathable, dan sempurna untuk iklim tropis.",
      category: "pakaian dewasa",
      detailed_product: "100% linen organik bersertifikat. Tombol dari kerang laut ramah lingkungan. Jahitan double-stitched untuk ketahanan. Tersedia dalam warna putih, beige, dan navy.",
      comments: [
        {
          user: "Rama Wijaya",
          body: "Kemeja terbaik yang pernah saya miliki. Cocok untuk formal dan casual.",
          rating: 5
        },
        {
          user: "Bayu Purnama",
          body: "Kualitas linennya sangat bagus, nyaman dipakai sepanjang hari.",
          rating: 5
        },
        {
          user: "Gunawan Sanjaya",
          body: "Bahannya premium tapi perlu disetrika dengan hati-hati.",
          rating: 4
        }
      ]
    },
    {
      id: 9,
      title: "Sepatu Sneakers Recycled",
      description: "Sneakers unisex dari material daur ulang",
      status: "recycle",
      user_id: 6,
      price: 450000,
      discount: 0,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      average_ratings: 4.6,
      product_desc: "Sepatu sneakers ramah lingkungan dengan sol dari ban bekas dan upper dari botol plastik daur ulang. Stylish dan nyaman untuk aktivitas sehari-hari.",
      category: "aksesoris",
      detailed_product: "Upper terbuat dari 8-10 botol plastik daur ulang. Sol dari 100% karet ban bekas. Alas kaki dari serat kelapa. Tersedia dalam ukuran 36-45.",
      comments: [
        {
          user: "Tono Suherman",
          body: "Sepatu yang stylish dan nyaman. Saya bangga menggunakannya karena nilai sustainabilitynya.",
          rating: 5
        },
        {
          user: "Putri Andini",
          body: "Desainnya bagus dan nyaman dipakai. Ukurannya sesuai.",
          rating: 5
        },
        {
          user: "Raden Saleh",
          body: "Kualitas bagus tapi perlu waktu untuk break-in.",
          rating: 4
        }
      ]
    },
    {
      id: 10,
      title: "Cardigan Anak Katun Organik",
      description: "Cardigan lucu untuk anak dari katun organik",
      status: "eco-friendly",
      user_id: 10,
      price: 135000,
      discount: 0,
      image: "https://images.unsplash.com/photo-1519238425857-d6939211aa77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      average_ratings: 4.9,
      product_desc: "Cardigan anak yang nyaman dan hangat terbuat dari katun organik 100%. Cocok untuk menemani si kecil di hari yang dingin.",
      category: "pakaian anak",
      detailed_product: "Terbuat dari 100% katun organik bersertifikat GOTS. Kancing dari kayu alami. Tersedia untuk usia 2-7 tahun. Pilihan warna pastel yang soft.",
      comments: [
        {
          user: "Nadia Ayu",
          body: "Sangat lembut dan nyaman untuk kulit sensitif anak saya!",
          rating: 5
        },
        {
          user: "Kartika Dewi",
          body: "Cardigannya cantik sekali dan tidak luntur meski sudah beberapa kali dicuci.",
          rating: 5
        },
        {
          user: "Bambang Suta",
          body: "Anakku sangat suka memakainya, bahkan tidak mau melepasnya!",
          rating: 5
        }
      ]
    }
  ];



export { UserData, ProductData };