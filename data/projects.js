const PROJECTS = [
  {
    id: "kelola-finansial",
    name: "KelolaFinansial",
    category: "Aplikasi Web",
    tagline: "Pengelola Keuangan Pribadi",
    thumbnail: "assets/images/projects/money-mgmt-light.png",
    thumbnailDark: "assets/images/projects/money-mgmt-dark.png",
    liveDemo: "https://money-mgmt-fawn.vercel.app",
    github: null,
    deviceType: "mobile",

    summary:
      "Aplikasi web pengelola keuangan pribadi yang membantu pengguna mencatat dan memantau pemasukan serta pengeluaran secara terstruktur melalui dashboard keuangan yang informatif.",

    background:
      "Banyak orang kesulitan mengelola keuangan pribadi karena pencatatan yang tidak konsisten dan tidak terorganisir. Dibutuhkan solusi digital yang sederhana namun efektif untuk membantu pengguna mengontrol arus keuangan mereka.",

    problem:
      "Pengelolaan keuangan pribadi yang dilakukan secara manual rentan terhadap ketidakakuratan dan sulit dipantau secara keseluruhan.",

    solution:
      "Membangun aplikasi web yang memungkinkan pengguna mencatat transaksi keuangan, melihat ringkasan melalui dashboard visual, dan mengakses data dari mana saja.",

    features: [
      "Autentikasi pengguna (login & register)",
      "Pencatatan transaksi pemasukan dan pengeluaran",
      "Dashboard keuangan dengan visualisasi data",
      "Multi-wallet management",
      "Mode gelap dan terang",
      "Akun demo untuk mencoba tanpa registrasi",
    ],

    techStack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
    ],

    role: "Full-Stack Developer",
    teamType: "Individu",
    status: "Selesai",
  },
  {
    id: "sikunci-lab",
    name: "SiKunci Lab",
    category: "Sistem Informasi",
    tagline: "Sistem Peminjaman Kunci Laboratorium",
    thumbnail: "assets/images/projects/sikunci-lab.png",
    thumbnailDark: null,
    liveDemo: "https://web-production-dbb18.up.railway.app",
    github: null,
    deviceType: "desktop",

    summary:
      "Sistem informasi berbasis web untuk mengelola peminjaman kunci laboratorium sekolah secara digital, menggantikan pencatatan manual dengan sistem yang efisien dan tertelusuri.",

    background:
      "Proses peminjaman kunci laboratorium di lingkungan sekolah masih menggunakan buku catatan manual yang rentan terhadap kehilangan data dan sulit untuk dilacak.",

    problem:
      "Pencatatan peminjaman kunci laboratorium secara manual tidak efisien, sulit dipantau, dan tidak memiliki sistem pelanggaran yang terstruktur.",

    solution:
      "Membangun sistem informasi web dengan tiga level akses (Admin, Pengawas, Murid) yang mencakup seluruh alur peminjaman dari pengajuan hingga pengembalian kunci, dilengkapi dengan sistem poin pelanggaran otomatis.",

    features: [
      "Manajemen multi-role (Admin, Pengawas, Murid)",
      "Dashboard dengan statistik dan grafik",
      "Alur peminjaman digital lengkap",
      "CRUD laboratorium dan pengguna",
      "Sistem poin pelanggaran dengan blokir otomatis",
      "Upload foto kondisi ruangan",
      "Laporan peminjaman, keterlambatan, dan pelanggaran",
    ],

    techStack: [
      "Laravel 11",
      "PHP 8.2+",
      "MySQL",
      "Bootstrap 5.3",
      "Chart.js",
      "Blade",
    ],

    role: "Full-Stack Developer",
    teamType: "Individu",
    status: "Selesai",
  },
  {
    id: "koslife",
    name: "KosLife",
    category: "Aplikasi Web",
    tagline: "Manajemen Kehidupan Anak Kos",
    thumbnail: "assets/images/projects/koslife.png",
    thumbnailDark: null,
    liveDemo: "https://kos-life.vercel.app",
    github: null,
    deviceType: "desktop",

    summary:
      "Aplikasi full-stack yang dirancang untuk membantu anak kos mengatur kehidupan sehari-hari agar lebih teratur, sehat, hemat, dan produktif melalui berbagai fitur pelacakan dan pengingat.",

    background:
      "Anak kos sering menghadapi tantangan dalam mengatur jadwal, keuangan, kesehatan, dan kebersihan secara bersamaan tanpa bantuan keluarga di sekitar mereka.",

    problem:
      "Tidak adanya satu platform terpadu yang membantu anak kos mengelola berbagai aspek kehidupan sehari-hari mulai dari jadwal, keuangan, kesehatan, hingga kebersihan.",

    solution:
      "Membangun aplikasi web all-in-one yang mengintegrasikan berbagai fitur pelacakan dan manajemen kehidupan sehari-hari dalam satu dashboard yang mudah digunakan.",

    features: [
      "Dashboard ringkasan harian",
      "Jadwal harian dan kalender kegiatan",
      "Pengingat makan + rekomendasi menu",
      "Tracker minum air dan tidur",
      "Catatan keuangan dan reminder tagihan",
      "To-do list dan target harian",
      "Jadwal kebersihan kamar dan stok barang kos",
      "Tracker kesehatan",
      "Laporan mingguan otomatis",
    ],

    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
    ],

    role: "Full-Stack Developer",
    teamType: "Individu",
    status: "Selesai",
  },
];

export default PROJECTS;
