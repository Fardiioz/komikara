# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
### Desain
Untuk Desain saya mau Layout nya tidak membingungkan para user( user friendly lahh )

lalu saya mau saat user di mode baca atau sedang di mode baca dia semua tombol aksi akan di hilangkan agar user fokus membaca komik

# Komikara - Frontend (Vite)

Komikara adalah platform modern untuk membaca Komik (Manga, Manhwa, Manhua) dan Novel. Repositori ini berisi kode sumber untuk bagian **Frontend** yang dibangun menggunakan **Vite** dan akan berkomunikasi dengan Backend Laravel via RESTful API.

---

## 🚀 TUJUAN PROYEK (PROJECT GOALS)
Membangun antarmuka pengguna (UI/UX) yang bersih, responsif, sangat cepat, dan ramah pengguna (*user-friendly*), terutama pada perangkat mobile, dengan fitur unggulan **Mode Baca Bebas Gangguan (Distraction-Free Reader Mode)**.

---

## 🎨 IDENTITAS VISUAL & WARNA (THEME COLORS)
Aplikasi ini wajib menggunakan palet warna utama berikut untuk menjaga konsistensi desain yang elegan dan nyaman di mata:
* **Primary / Accent Color (`#5B2333`):** Warna merah marun gelap (deep wine). Gunakan untuk tombol utama, header, link aktif, border fokus, dan elemen penegasan penting lainnya.
* **Background / Paper Color (`#F7F4F3`):** Warna putih tulang hangat (off-white). Gunakan sebagai latar belakang utama halaman, area baca novel, dan kartu informasi agar tidak membuat mata cepat lelah jika dibandingkan dengan warna putih murni (#FFFFFF).

---

## 🛠️ STACK TEKNOLOGI
* **Build Tool:** Vite
* **Frontend Library/Framework:** [React.js / Vue.js / Svelte] *(Sesuaikan dengan framework pilihanmu, contoh: React + Tailwind CSS)*
* **Styling:** Tailwind CSS (Konfigurasikan warna `#5B2333` dan `#F7F4F3` ke dalam `tailwind.config.js`)
* **State Management & Fetching:** Axios (untuk API request), Context API / Pinia / Redux (untuk Auth & Global State)
* **Hosting/Deployment:** Render

---

## 🎨 DESAIN & PENGALAMAN PENGGUNA (UX)

### 1. Desain Umum (Layout)
* **Sederhana & Intuitif (User Friendly):** Navigasi yang tidak membingungkan. Menu utama hanya terdiri dari: *Home*, *Genre*, *Bookshelf (Library)*, dan *Profile/Login*.
* **Mobile First:** Mayoritas pembaca komik menggunakan smartphone. Desain wajib responsif, ringan, dan nyaman disentuh (*touch-friendly*).

### 2. Mode Baca Bebas Gangguan (Distraction-Free Reader Mode)
Ini adalah fitur paling krusial di website ini:
* **Fokus Penuh pada Konten:** Saat user berada di halaman baca chapter (`/komik/:slug/chapter/:chapter_number`):
  * **Sembunyikan semua tombol aksi dan elemen UI** (Header, Footer, tombol navigasi, sidebar, dll) secara default agar layar bersih dan user fokus sepenuhnya membaca konten komik/novel.
  * Tampilkan kembali menu navigasi minimalis (Kembali ke Detail, Chapter Sebelumnya, Chapter Selanjutnya) **hanya ketika user melakukan scroll ke atas (*scroll up*)** sedikit, atau mengetuk (*tap*) bagian tengah layar.
* **Alur Perpindahan Bab (Flow):**
  * User dapat menggeser layar ke bawah (*scroll down*) untuk membaca komik.
  * User dapat menggeser ke atas (*scroll up*) untuk kembali ke bab sebelumnya atau memunculkan navigasi.
  * Ketika user sudah selesai membaca sampai halaman terbawah dari chapter tersebut, arahkan kembali secara otomatis (atau dengan tombol konfirmasi) ke **Halaman Detail Komik**.

---

## 📋 DAFTAR HALAMAN & ALUR PENGGUNA (USER FLOW)

### A. Sisi Pengunjung Biasa (Guest & Regular User)
1. **Halaman Home (`/`):**
   * Menampilkan daftar komik terbaru, komik terpopuler, dan rekomendasi novel.
   * Pencarian (*search bar*) komik/novel berdasarkan judul.
   * Bisa diakses oleh siapapun tanpa harus login.
2. **Halaman Login & Register (`/login` & `/register`):**
   * **User Biasa:** Login menggunakan **Username & Password** (Tanpa akun Google). Pendaftaran membutuhkan verifikasi OTP via email (SMTP backend).
   * **Publisher & Admin:** Login wajib menggunakan **Google Auth** (Socialite integration).
3. **Halaman Detail Komik (`/komik/:slug`):**
   * Menampilkan Cover/Thumbnail, Judul, Deskripsi/Sinopsis, Genre, Author, Publisher, dan Status (Ongoing/Completed).
   * Tombol **"Simpan ke Bookshelf"** (Hanya muncul/bisa diklik jika sudah login. Jika belum, arahkan langsung ke halaman `/login`).
   * Daftar Chapter yang urut dari terbaru atau terlama. Klik chapter akan mengarahkan ke halaman baca.
4. **Halaman Baca (`/komik/:slug/chapter/:chapter_number`):**
   * Menerapkan aturan *Distraction-Free Reader Mode* di atas.
   * **Jika tipe "Komik":** Render gambar secara vertikal dari atas ke bawah menggunakan optimasi *lazy loading* agar hemat kuota dan cepat.
   * **Jika tipe "Novel":** Render dalam bentuk teks bersih dengan pengaturan ukuran font menggunakan latar belakang `#F7F4F3` yang ramah mata.
5. **Halaman Bookshelf / Library (`/bookshelf`):**
   * **Hanya bisa diakses setelah login.**
   * Menampilkan komik-komik yang disimpan/difavoritkan oleh user.
   * Menampilkan status komik (*Ongoing, Completed, Dropped, Cancel*) dan informasi kapan komik tersebut terakhir kali mendapatkan update bab baru.
   * Fitur *History (Lanjutkan Membaca)*: Menampilkan riwayat komik yang terakhir kali dibaca oleh user agar bisa langsung dilanjutkan dalam satu klik.

### B. Sisi Publisher Dashboard (`/publisher/dashboard`)
* **Akses:** Hanya untuk user dengan role `publisher` yang login via Google Auth.
* **Fitur:**
  * Alur pertama login: Mengisi/menaruh nama Publisher mereka.
  * Dashboard khusus yang berbeda dari User biasa.
  * Publisher hanya bisa mengupload komik miliknya sendiri (Cover dikirim ke backend untuk disimpan di Cloudinary).
  * Publisher hanya bisa mengedit/menghapus komik miliknya sendiri, mengedit status update, serta menambah/mengedit chapter yang sudah mereka upload.

### C. Sisi Admin Dashboard (`/admin/dashboard`)
* **Akses:** Hanya untuk user dengan role `admin` yang login via Google Auth.
* **Fitur:**
  * Alur pertama login: Mengisi/menaruh nama Admin mereka.
  * Dashboard khusus berskala penuh (*Super Admin*).
  * Bisa melihat, mengedit, mengubah status update, mengedit chapter, dan menghapus komik/chapter dari **seluruh** publisher tanpa batasan.
  * Halaman Manajemen Pengguna: Berwenang menghapus akun user biasa atau publisher yang melanggar aturan platform.

---

## 🔒 KEAMANAN & INTEGRASI API (JWT & CLOUDINARY)
1. **JWT Auth:** * Token JWT yang diterima setelah login harus disimpan dengan aman di Frontend (direkomendasikan menggunakan `HttpOnly Cookie` atau `LocalStorage` dengan sistem *auto-refresh* token jika kedaluwarsa).
   * Kirimkan token di setiap *request* API yang membutuhkan autentikasi dalam bentuk header: `Authorization: Bearer <token>`.
2. **Upload Gambar:**
   * Proses upload gambar (cover komik & halaman chapter) dilakukan dengan mengirimkan file dari Frontend ke API Laravel, yang nantinya akan diteruskan oleh Laravel ke Cloudinary. Frontend akan menerima URL gambar yang aman dari backend.
3. **Penanganan Server Render (Free Tier):**
   * Karena backend di-deploy di Render Free Tier yang memiliki jeda waktu *spin-down* (server tidur), Frontend wajib menampilkan animasi **Loading Spinner / Skeleton Screen** bertema warna `#5B2333` yang interaktif saat aplikasi pertama kali dimuat atau saat memanggil API, agar user tahu sistem sedang bekerja dengan baik.
