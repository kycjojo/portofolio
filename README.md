# Portofolio — Rochmad Djojo Oktabianto

Website portofolio pribadi Rochmad Djojo Oktabianto (Jojo) — Data Analyst & Full-Stack Developer.

## 🚀 Fitur

- ✅ Dark & Light mode (toggle)
- ✅ Responsive design (mobile-first)
- ✅ Animasi scroll reveal
- ✅ Loading screen
- ✅ Filter proyek berdasarkan kategori
- ✅ Halaman studi kasus proyek
- ✅ Form kontak dengan validasi
- ✅ Tombol WhatsApp floating
- ✅ Download CV
- ✅ SEO-friendly dengan Open Graph
- ✅ Tombol back to top
- ✅ Halaman 404 custom
- ✅ Navigasi sticky & responsive
- ✅ Accessibility (ARIA, keyboard nav, focus-visible)

## 🛠️ Teknologi

- HTML5
- CSS3 (Vanilla CSS, Custom Properties)
- JavaScript (ES Modules)
- Google Fonts (Inter)
- Lucide Icons
- Devicons

## 📂 Struktur Folder

```
portofolio/
├── index.html                 # Halaman utama (single page)
├── project-detail.html        # Halaman detail/studi kasus proyek
├── 404.html                   # Halaman 404
├── css/
│   └── style.css              # Seluruh styles (design system, themes, components, responsive)
├── js/
│   ├── app.js                 # Script utama (tema, navbar, skill, proyek, kontak)
│   └── project-detail.js      # Script halaman detail proyek
├── data/
│   ├── profile.js             # Data profil (nama, bio, kontak, sosmed)
│   ├── skills.js              # Data skill per kategori
│   ├── projects.js            # Data proyek (studi kasus)
│   └── education.js           # Data pendidikan & penghargaan
├── assets/
│   ├── images/
│   │   ├── profile/           # Foto profil
│   │   └── projects/          # Screenshot proyek
│   └── cv/                    # File CV (PDF)
└── README.md
```

## 🏃 Cara Menjalankan

### Opsi 1: Buka langsung di browser

Cukup buka file `index.html` di browser.

> ⚠️ **Catatan:** Beberapa fitur (ES Modules) membutuhkan server lokal. Jika ada error, gunakan Opsi 2.

### Opsi 2: Menggunakan Live Server

1. Install ekstensi **Live Server** di VS Code.
2. Klik kanan pada `index.html` → **Open with Live Server**.

### Opsi 3: Menggunakan Python

```bash
cd portofolio
python -m http.server 3000
```

Buka `http://localhost:3000` di browser.

### Opsi 4: Menggunakan npx serve

```bash
npx serve .
```

## ✏️ Cara Mengganti Data Diri

Semua data dipisahkan ke file tersendiri di folder `data/` agar mudah diedit:

| File | Isi |
|------|-----|
| `data/profile.js` | Nama, bio, headline, deskripsi, kontak, sosmed |
| `data/skills.js` | Skill per kategori |
| `data/projects.js` | Proyek lengkap (studi kasus) |
| `data/education.js` | Pendidikan & penghargaan |

### Mengganti Foto Profil

1. Simpan foto ke `assets/images/profile/foto-profil.jpg`
2. Ukuran rekomendasi: 400x400px (persegi)
3. Format: JPG atau PNG

### Menambahkan CV

1. Simpan file CV ke `assets/cv/cv-rochmad-djojo.pdf`
2. Tombol "Download CV" akan otomatis berfungsi

### Menambahkan Proyek Baru

Edit file `data/projects.js` dan tambahkan objek baru:

```javascript
{
  id: "nama-unik-proyek",
  name: "Nama Proyek",
  category: "Aplikasi Web",
  tagline: "Deskripsi singkat",
  thumbnail: "assets/images/projects/screenshot.png",
  thumbnailDark: null,
  liveDemo: "https://demo.com",
  github: "https://github.com/user/repo",
  summary: "Ringkasan proyek...",
  background: "Latar belakang...",
  problem: "Permasalahan...",
  solution: "Solusi...",
  features: ["Fitur 1", "Fitur 2"],
  techStack: ["React", "Node.js"],
  role: "Full-Stack Developer",
  teamType: "Individu",
  status: "Selesai",
}
```

### Mengganti Warna & Tema

Edit variabel CSS di `css/style.css`:

```css
/* Dark Theme */
[data-theme="dark"] {
  --accent-primary: #00d4ff;    /* Warna aksen utama */
  --accent-secondary: #00b4d8;  /* Warna aksen sekunder */
  --bg-primary: #0a192f;        /* Background utama */
  /* ... */
}

/* Light Theme */
[data-theme="light"] {
  --accent-primary: #0369a1;
  --accent-secondary: #0891b2;
  --bg-primary: #f0f4f8;
  /* ... */
}
```

## 🌐 Deployment

### Vercel

1. Push ke GitHub repository
2. Hubungkan repo ke [vercel.com](https://vercel.com)
3. Deploy otomatis

### Netlify

1. Push ke GitHub repository
2. Hubungkan repo ke [netlify.com](https://netlify.com)
3. Deploy otomatis

### GitHub Pages

1. Push ke GitHub repository
2. Buka Settings → Pages → Source: main branch
3. Website akan tersedia di `https://username.github.io/repo-name`

## 📝 Lisensi

© 2026 Rochmad Djojo Oktabianto. All rights reserved.
