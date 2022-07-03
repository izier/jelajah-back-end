const local_yogyakarta_missions = [
  [
    {
      id: 1,
      planId: 1,
      name: "Pergi ke Taman Sari",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 2,
      planId: 1,
      name: "Beli souvenir di Taman Sari",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 3,
      planId: 1,
      name: "Pergi ke Keraton",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 4,
      planId: 1,
      name: "Lihat koleksi Museum Kereta Keraton",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 5,
      planId: 1,
      name: "Menikmati sunset di Parangtritis",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
  ],
  [
    {
      id: 6,
      planId: 2,
      name: "Makan gudeg di Gudeg Lorem Ipsum",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 7,
      planId: 2,
      name: "Makan mangut lele di Warung Mangut Lele Lorem Ipsum",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
  ],
  [
    {
      id: 8,
      planId: 3,
      name: "Menikmati sunrise di Svargabumi",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 9,
      planId: 3,
      name: "Mendaki Gunung Merapi",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 10,
      planId: 3,
      name: "Menikmati pemandangan Bukit Pengilon",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 11,
      planId: 3,
      name: "Mendaki sunset di Parangtritis",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 12,
      planId: 3,
      name: "Menikmati langit malam di Bukit Bintang",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
  ],
];

const local_bandung_missions = [
  [
    {
      id: 13,
      planId: 4,
      name: "Mengunjungi Farmhouse Lembang",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 14,
      planId: 4,
      name: "Menikmati susu di Farmhouse Susu Lembang",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
  ],
  [
    {
      id: 15,
      planId: 5,
      name: "Menikmati susu di Farmhouse Susu Lembang",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 16,
      planId: 5,
      name: "Makan sate di Gedung Sate",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
  ],
  [
    {
      id: 17,
      planId: 6,
      name: "Mengunjungi Tangkuban Perahu",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 18,
      planId: 6,
      name: "Menikmati sunrise di Gunung Burangrang",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
  ],
];

const local_malang_missions = [
  [
    {
      id: 19,
      planId: 7,
      name: "Pergi ke Kampung Wisata Jodipan",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 20,
      planId: 7,
      name: "Menikmati sunrise di bukit Paralayang",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
  ],
  [
    {
      id: 21,
      planId: 8,
      name: "Makan rawon di warung MbakTen",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
    {
      id: 22,
      planId: 8,
      name: "Minum susu di kota Batu",
      lat: -7.816072,
      long: 110.368462,
      status: false,
    },
  ],
];

const local_yogyakarta_plans = [
  {
    id: 1,
    name: "Yogyakarta basic plan",
    category: "https://jelajah-back-end.izier.repl.co/images/Basic.png",
    description:
      "Plan wisata standar dalam menikmati Yogyakarta dan budayanya. Mengunjungi beberapa objek wisata terpopuler yang terdapat di Yogyakarta dan cukup mudah untuk bisa diakses oleh berbagai kalangan.",
    missions: local_yogyakarta_missions[0],
    status: false,
  },
  {
    id: 2,
    name: "Yogyakarta culinary plan",
    category: "https://jelajah-back-end.izier.repl.co/images/Culinary.png",
    description:
      "Plan wisata bagi yang mencintai wisata kuliner. Mengunjungi beberapa warung dan restoran yang menyajikan berbagai macam kuliner terbaik dan khas Yogyakarta.",
    missions: local_yogyakarta_missions[1],
    status: false,
  },
  {
    id: 3,
    name: "Yogyakarta nature plan",
    category: "https://jelajah-back-end.izier.repl.co/images/Nature.png",
    description:
      "Plan wisata bagi yang mencintai alam dan keindahannya. Mengunjungi beberapa objek wisata alam yang menyajikan kenikmatan bagi indera penglihatan di wilayah Yogyakarta.",
    missions: local_yogyakarta_missions[2],
    status: false,
  },
];

const local_bandung_plans = [
  {
    id: 4,
    name: "Bandung basic plan",
    category: "https://jelajah-back-end.izier.repl.co/images/Basic.png",
    description:
      "Plan wisata standar dalam menikmati Bandung dan budayanya. Mengunjungi beberapa objek wisata terpopuler yang terdapat di Bandung dan cukup mudah untuk bisa diakses oleh berbagai kalangan.",
    missions: local_bandung_missions[0],
    status: false,
  },
  {
    id: 5,
    name: "Bandung culinary plan",
    category: "https://jelajah-back-end.izier.repl.co/images/Culinary.png",
    description:
      "Plan wisata bagi yang mencintai wisata kuliner. Mengunjungi beberapa warung dan restoran yang menyajikan berbagai macam kuliner terbaik dan khas Bandung.",
    missions: local_bandung_missions[1],
    status: false,
  },
  {
    id: 6,
    name: "Bandung nature plan",
    category: "https://jelajah-back-end.izier.repl.co/images/Nature.png",
    description:
      "Plan wisata bagi yang mencintai alam dan keindahannya. Mengunjungi beberapa objek wisata alam yang menyajikan kenikmatan bagi indera penglihatan di wilayah Bandung.",
    missions: local_bandung_missions[2],
    status: false,
  },
];

const local_malang_plans = [
  {
    id: 7,
    name: "Malang basic plan",
    category: "https://jelajah-back-end.izier.repl.co/images/Basic.png",
    description:
      "Plan wisata standar dalam menikmati Malang dan budayanya. Mengunjungi beberapa objek wisata terpopuler yang terdapat di Malang dan cukup mudah untuk bisa diakses oleh berbagai kalangan.",
    missions: local_malang_missions[0],
    status: false,
  },
  {
    id: 8,
    name: "Malang culinary plan",
    category: "https://jelajah-back-end.izier.repl.co/images/Culinary.png",
    description:
      "Plan wisata bagi yang mencintai wisata kuliner. Mengunjungi beberapa warung dan restoran yang menyajikan berbagai macam kuliner terbaik dan khas Malang.",
    missions: local_malang_missions[1],
    status: false,
  },
];

const local_yogyakarta_places = [
  {
    id: 1,
    name: "Pantai Parangtritis",
    address: "Desa Parangtritis, Kabupaten Bantul, Yogyakarta",
    description:
      "Pantai Parangtritis adalah tempat wisata yang terletak di Desa Parangtritis, Kapanéwon Kretek, Kabupaten Bantul, Daerah Istimewa Yogyakarta. Jaraknya kurang lebih 27 km dari pusat Kota Yogyakarta. Pantai ini menjadi salah satu destinasi wisata terkenal di Yogyakarta dan telah menjadi ikon pariwisata di Yogyakarta. Pantai ini mempunyai nilai simbolis yang merupakan garis yang bersifat magis yang menghubungkan Panggung Krapyak, Keraton Yogyakarta, Tugu Yogyakarta dan Gunung Merapi yang dikenal sebagai Garis Imajiner Yogyakarta.",
    rating: 4.6,
    plans: [local_yogyakarta_plans[0], local_yogyakarta_plans[2]],
    image: [
      "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1599486349027-77fd046baf63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1606873237103-c75e58c388a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1606820031302-d26dcd6b8990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Svargabumi",
    address: "Jl. Borobudur - Ngadiharjo, Sawah, Borobudur, Kec. Borobudur, Kabupaten Magelang, Jawa Tengah",
    description:
      "Svargabumi Borobudur adalah salah satu destinasi wisata terbaru di Kabupaten Magelang, Jawa Tengah. Usianya sebagai lokasi wisata mungkin baru seumur jagung. Tetapi, tempat ini sudah ramai wara-wiri di media sosial terutama Instagram. Penyebabnya tidak lain karena daya tarik instagrammable yang ditawarkannya. Menyematkan nama candi terbesar di dunia, Svargabumi memang tidak sembarangan. Tempat wisata ini menyajikan kawasan berfoto hits di tengah sawah yang hijau. Latar belakangnya? Apalagi kalau bukan Candi Borobudur. Svargabumi sukses memadukan unsur alam dengan budaya modern menjadi destinasi wisata menarik.",
    rating: 4.5,
    plans: [local_yogyakarta_plans[0], local_yogyakarta_plans[2]],
    image: [
      "https://asset.kompas.com/crops/nqNDOErNxJ_2z4EzWRj1unzngh4=/0x0:1080x720/750x500/data/photo/2022/01/25/61ef43d31ce28.jpeg",
      "https://awsimages.detik.net.id/community/media/visual/2022/03/08/wisata-persawahan-svarga-bumi-desa-ngadiharjo-borobudur-magelang-jawa-tengah-2_169.jpeg?w=600&q=90",
      "https://www.javatravel.net/wp-content/uploads/2021/11/Daya-Tarik-Dimiliki-Svargabumi-Borobudur.jpg",
    ],
    coverImage:
      "https://cdn-2.tstatic.net/travel/foto/bank/images/svarga-bumi-borobudur-ms.jpg",
  },
];

const local_bandung_places = [
  {
    id: 3,
    name: "Farmhouse Lembang",
    address: "Jl. Raya Lembang No.108, Gudangkahuripan, Kec. Lembang, Kabupaten Bandung Barat, Jawa Barat",
    description:
      "Farmhouse Lembang bisa dikatakan tempat liburan terbaru di Bandung yang dikelola dengan baik. Keberadaannya semakin melengkapi tempat wisata di Lembang yang bisa anda kunjungi. Berada tidak jauh dari pusat Lembang, popularitasnya melesat naik cukup cepat. Dari awal dibuka untuk umum langsung penuh dengan pengunjung. Lokasi yang strategis di ruas jalan utama Bandung – Lembang, ditambah banyaknya spot berfoto yang bagus, membuat Farmhouse Bandung langsung jadi tempat wisata di Bandung yang difavoritkan pengunjung.",
    rating: 4.4,
    plans: [local_bandung_plans[0]],
    image: [
      "https://i0.wp.com/kelloggsnyc.com/wp-content/uploads/2020/03/farmhouse-lembang-bandung-adalah.jpg",
      "https://cdn.nativeindonesia.com/foto/farmhouse-lembang-bandung/farm-house-lembang-Bandung.jpg",
      "https://www.king-adventure.com/wp-content/uploads/2020/06/farmhouse-lembang-5.jpg",
    ],
    coverImage:
      "https://cdn.nativeindonesia.com/foto/farmhouse-lembang-bandung/farm-house-bandung.webp",
  },
];

const local_malang_places = [
  {
    id: 4,
    name: "Kampung Jodipan",
    address: "Jodipan, Kec. Blimbing, Kota Malang, Jawa Timur",
    description:
      "Kampung Wisata Jodipan adalah kampung wisata pertama di Kota Malang berupa sederetan rumah warga di tepi Sungai Brantas yang menampilkan dinding dengan aneka warna yang menarik dan tidak monoton. Kampung ini terletak di Jodipan berada di tepi Sungai Brantas. Kampung Wisata Jodipan ini biasanya dijuluki Kampung Warna Warni.[1] Kampung Warna Warni terdapat di dua wilayah, yaitu Kampung Jodipan dan Kampung Tridi. Antara keduanya dihubungkan dengan jembatan kaca \"Ngalam\" Indonesia (Ngalam dibaca Malang). Jembatan mini berlantaikan kaca ini diresmikan penggunaannya oleh Wali kota Malang, Moch. Anton, 9 Oktober 2017.",
    rating: 4.6,
    plans: [local_malang_plans[0]],
    image: [
      "https://hondacommunity.net/assets/images/5f2b0c1d1d073_ori.jpg",
      "https://asset.kompas.com/crops/zNyWyokJtgo0b3a_mRg02zSNhSk=/0x0:739x493/750x500/data/photo/2020/09/01/5f4dff678e752.jpg",
      "https://1.bp.blogspot.com/-0kaEHGbGPbU/XZgj3Du48cI/AAAAAAAAIQo/ldradfQW_j81OcmAJr-JjMcNOwmaSeEVQCLcBGAsYHQ/s1600/20191005_120133.jpg",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1646842926907-03ba5d35f122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1836&q=80",
  },
];

const local_bandung_city = {
  id: 3,
  name: "Bandung",
  icon: "https://jelajah-back-end.izier.repl.co/images/Bandung.png",
  description:
    "Bandung adalah ibu kota provinsi Jawa Barat, Indonesia serta menjadi kota terbesar ketiga di Indonesia setelah Jakarta dan Surabaya. Secara kepadatan kota ini merupakan kota terpadat ke-2 di Indonesia setelah Jakarta dengan kepadatan penduduk mencapai 15.051/km2. Kota ini terletak 140 km sebelah Tenggara Jakarta, dan merupakan kota terbesar di wilayah Pulau Jawa bagian selatan. Sedangkan wilayah Bandung Raya (Wilayah Metropolitan Bandung) merupakan metropolitan terbesar ketiga di Indonesia setelah Jabodetabek dan Gerbangkertosusila. Kota Bandung Berbatasan dengan Kota Cimahi dan Kabupaten Bandung Barat di Barat dan Utara, dan Kabupaten Bandung di Timur dan Selatan.",
  coverImage:
    "https://images.unsplash.com/photo-1564901236182-daaec707fbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  plans: local_bandung_plans,
  places: local_bandung_places,
};

const local_malang_city = {
  id: 2,
  name: "Malang",
  icon: "https://jelajah-back-end.izier.repl.co/images/Malang.png",
  description:
    "Kota Malang adalah sebuah kota yang terletak di provinsi Jawa Timur, Indonesia,kota terbesar kedua di Jawa Timur setelah Surabaya, dan kota terbesar ke-12 di Indonesia. Kota ini didirikan pada masa Pemerintahan Belanda pada tanggal 1 April 1914, yang dimana E.K Broeveldt sebagai walikota pertama,Kota ini terletak di dataran tinggi seluas 145,28 km² yang merupakan enklave Kabupaten Malang. Bersama dengan Kota Batu dan Kabupaten Malang, Kota Malang merupakan bagian dari kesatuan wilayah yang dikenal dengan Malang Raya.",
  coverImage:
    "https://images.unsplash.com/photo-1619183681242-d8d1500e7ee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
  plans: local_malang_plans,
  places: local_malang_places,
};

const local_yogyakarta_city = {
  id: 1,
  name: "Yogyakarta",
  icon: "https://jelajah-back-end.izier.repl.co/images/Yogyakarta.png",
  description:
    "Kota Yogyakarta atau dikenal oleh masyarakat setempat dengan nama Kota Jogja atau Kota Yogya adalah ibu kota dan pusat pemerintahan Daerah Istimewa Yogyakarta, Indonesia. Kota ini adalah kota besar yang mempertahankan konsep tradisional dan budaya Jawa. Kota Yogyakarta adalah kediaman bagi Sultan Hamengkubuwana dan Adipati Paku Alam. Kota Yogyakarta merupakan salah satu kota terbesar di Indonesia dan kota terbesar keempat di wilayah Pulau Jawa bagian selatan menurut jumlah penduduk. Kota Yogyakarta juga pernah menjadi ibu kota RI pada tahun 1946.",
  coverImage:
    "https://images.unsplash.com/photo-1552035191-f10bd9fbf35e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
  plans: local_yogyakarta_plans,
  places: local_yogyakarta_places,
};

module.exports.Cities = [
  local_yogyakarta_city,
  local_malang_city,
  local_bandung_city,
];

module.exports.Places = [
  ...local_yogyakarta_places,
  ...local_malang_places,
  ...local_bandung_places,
];

module.exports.Plans = [
  local_yogyakarta_plans,
  local_malang_plans,
  local_bandung_plans,
];
