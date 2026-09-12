# Portofolio — Rochmad Djojo Oktabianto

[![Live Demo](https://img.shields.io/badge/Live_Demo-portojojoit.vercel.app-BF9A30?style=for-the-badge&logo=vercel&logoColor=white)](https://portojojoit.vercel.app)

> 🌐 **Live Website**: [https://portojojoit.vercel.app](https://portojojoit.vercel.app)

Website portofolio profesional pribadi **Rochmad Djojo Oktabianto (Jojo)** — IT Network System Administrator & ITNSA Medalist (D4 Teknik Informatika, Politeknik Elektronika Negeri Surabaya - PENS).

---

## 🚀 Fitur Utama

- ✅ **Three-Ink Editorial Design**: Tipografi modern, layout bergaya editorial dengan palet warna kontras elegan (Pitch Dark, Alabaster Cream, & Antique Gold).
- ✅ **Dark & Light Mode**: Switch tema dinamis dengan persistensi preferensi via `localStorage`.
- ✅ **Responsive & Mobile-First**: Tampilan optimal di semua perangkat (Desktop, Tablet, & Smartphone).
- ✅ **Filter Proyek & Kompetisi**: Filter interaktif untuk memilah pencapaian lomba dan proyek teknis.
- ✅ **Halaman Detail Studi Kasus**: Analisis mendalam per kompetisi/proyek (latar belakang, arsitektur, tantangan, dan solusi).
- ✅ **Formulir Kontak Cerdas**: Integrasi langsung dengan klien email (`mailto:`) tanpa perantara server pihak ketiga.
- ✅ **Aksesibilitas & SEO**: Semantic HTML5, metadata Open Graph, Twitter Card, rasio kontras WCAG AA, serta navigasi keyboard yang ramah pengguna.
- ✅ **Halaman 404 Kustom**: Halaman penanganan error dengan styling terintegrasi.

---

## 🛠️ Teknologi yang Digunakan

- **Markup & Struktur**: HTML5 Semantik
- **Styling**: Vanilla CSS3 (CSS Custom Properties, Flexbox, CSS Grid)
- **Tipografi**: [Google Fonts](https://fonts.google.com/) — *Plus Jakarta Sans* & *JetBrains Mono*
- **Logika & Interaktivitas**: Vanilla JavaScript (ES6+ Modules)
- **Ikonografi**: [Lucide Icons](https://lucide.dev/) & [Devicon](https://devicon.dev/)

---

## 📂 Struktur Folder

```text
portofolio/
├── index.html                 # Halaman utama (beranda portofolio)
├── project-detail.html        # Halaman detail / studi kasus proyek & kompetisi
├── 404.html                   # Halaman 404 custom
├── css/
│   └── style.css              # Seluruh sistem desain (tokens, typography, responsive)
├── js/
│   ├── app.js                 # Logika interaksi beranda, tema, navbar, filter proyek
│   └── project-detail.js      # Rendering data dinamis halaman detail studi kasus
├── data/
│   ├── profile.js             # Profil diri, bio, kontak, dan tautan sosial media
│   ├── skills.js              # Keahlian teknis (Networking, SysAdmin, Security, Tools)
│   ├── projects.js            # Riwayat kompetisi resmi & studi kasus infrastruktur
│   └── education.js           # Riwayat pendidikan, sertifikasi, & penghargaan
├── assets/
│   ├── images/
│   │   ├── profile/           # Foto profil (foto-profil.jpg)
│   │   ├── projects/          # Dokumentasi teknis proyek
│   │   └── certificates/      # Preview visual sertifikat (PNG)
│   ├── certificates/          # Dokumen PDF sertifikat resmi (disimpan privat secara lokal)
│   └── cv/                    # File PDF Curriculum Vitae (disimpan privat secara lokal)
├── vercel.json                # Konfigurasi routing clean URLs untuk deployment Vercel
├── .gitignore                 # Proteksi keamanan (mengecualikan PDF & file privat)
└── README.md                  # Dokumentasi proyek
```

---

## 🏃 Cara Menjalankan Secara Lokal

### Opsi 1: VS Code Live Server (Direkomendasikan)
1. Pasang ekstensi **Live Server** di VS Code.
2. Klik kanan pada `index.html` → pilih **Open with Live Server**.

### Opsi 2: Python HTTP Server
```bash
python -m http.server 3000
```
Lalu buka peramban dan akses `http://localhost:3000`.

### Opsi 3: Node.js (npx serve)
```bash
npx serve .
```

---

## ✏️ Panduan Pengelolaan Data

Seluruh konten situs dikelola secara modular pada folder `data/`:

| File | Keterangan Konten |
|---|---|
| [`data/profile.js`](file:///d:/portofolio/data/profile.js) | Nama lengkap, gelar/headline, bio, kontak email, dan akun profesional. |
| [`data/skills.js`](file:///d:/portofolio/data/skills.js) | Daftar keahlian teknis berdasarkan kategori spesialisasi. |
| [`data/projects.js`](file:///d:/portofolio/data/projects.js) | Daftar kompetisi/proyek beserta ringkasan, masalah, dan solusi teknis. |
| [`data/education.js`](file:///d:/portofolio/data/education.js) | Riwayat institusi pendidikan dan daftar pencapaian medali/juara. |

---

## 🎨 Sistem Desain (Three-Ink Palette)

Portofolio ini menerapkan sistem desain kontras tinggi:

```css
/* Dark Mode (Default) */
[data-theme="dark"] {
  --bg-primary: #0F0F0F;       /* Pitch Dark Black */
  --bg-surface: #171512;       /* Elevated Dark Card */
  --text-primary: #FAF8F5;     /* Warm Alabaster Cream */
  --text-secondary: #C8C2BA;   /* Muted Cream */
  --accent-gold: #BF9A30;      /* Antique Gold */
  --rule: 1px solid #2B2620;  /* Subtle Divider */
}

/* Light Mode */
[data-theme="light"] {
  --bg-primary: #FAF8F5;       /* Warm Alabaster Cream */
  --bg-surface: #FFFFFF;       /* Pure White Card */
  --text-primary: #0F0F0F;     /* Pitch Dark Black */
  --text-secondary: #4A4640;   /* Muted Charcoal */
  --accent-gold: #9E7D1E;      /* Deep Gold */
}
```

---

## 🛡️ Keamanan & Privasi Data

Dokumen resmi sensitif (seperti PDF Curriculum Vitae lengkap dan file PDF sertifikat asli beresolusi penuh) dikecualikan dari repositori publik melalui konfigurasi `.gitignore`. Website menampilkan bukti autentik melalui **gambar preview visual (PNG)** dan **nomor registrasi sertifikat resmi**, menjaga integritas data tanpa mengekspos data identitas pribadi (PII) ke publik.

---

## 🌐 Panduan Deployment

### Vercel (Production Live)
Website telah di-deploy dan aktif secara live di:  
🔗 **[https://portojojoit.vercel.app](https://portojojoit.vercel.app)**

Konfigurasi clean URL ditangani secara otomatis melalui file `vercel.json`.

### GitHub Pages
1. Masuk ke tab **Settings** repositori di GitHub.
2. Buka menu **Pages** di panel kiri.
3. Pada **Build and deployment**, pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.

---

## 📝 Lisensi

© 2026 Rochmad Djojo Oktabianto. Seluruh hak cipta dilindungi undang-undang.
