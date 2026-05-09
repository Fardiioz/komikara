<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

# CONTEXT: PROJECT KOMIKARA (LARAVEL)

Halo! Saya sedang membangun sebuah website platform baca Komik (Manga, Manhwa, Manhua) dan Novel bernama **Komikara** menggunakan framework Laravel.

Saya ingin kamu bertindak sebagai Expert Full-Stack Laravel Developer yang akan membantu saya merealisasikan proyek ini langkah demi langkah secara rapi, bersih, dan sesuai dengan *best practices*.

## PENTING: ATURAN ALUR KERJA (WORKFLOW)
Sebelum kita mulai menulis kode atau membuat file apa pun, harap ikuti aturan ini:
1. **BACA README.md TERLEBIH DAHULU:** Semua instruksi kerja, detail arsitektur, konfigurasi, dan tugas yang harus diselesaikan ada di dalam file `README.md` proyek saya.
2. **Jangan berasumsi:** Jika ada instruksi di `README.md` yang kurang spesifik atau membingungkan, silakan tanyakan dan konfirmasikan kepada saya terlebih dahulu sebelum membuat keputusan sendiri.
3. **Fokus Satu Per Satu:** Selesaikan tugas yang tertera di `README.md` secara bertahap. Jangan langsung memberikan semua kode sekaligus jika tugasnya terlalu besar.

---

## 1. RANCANGAN DATABASE (DATABASE SCHEMA)
Berikut adalah struktur database yang sudah disepakati untuk proyek ini. Harap gunakan ini sebagai acuan utama saat nanti kita membuat Migration, Model, dan Relationship di Laravel:

### A. Tabel Utama
* **users**: `id`, `name`, `email`, `password`, `role` (enum: user, admin), `timestamps`
* **authors**: `id`, `name`, `slug`, `bio` (nullable), `timestamps`
* **publishers**: `id`, `name`, `slug`, `country` (nullable), `timestamps`
* **genres**: `id`, `name`, `slug`, `timestamps`
* **komiks**: `id`, `title`, `slug`, `description` (text), `thumbnail`, `type` (enum: manga, manhwa, manhua, novel), `status` (enum: ongoing, completed, hiatus), `publisher_id` (FK, nullable), `timestamps`
* **chapters**: `id`, `komik_id` (FK), `chapter_number` (decimal/float), `title` (nullable), `slug`, `timestamps`
* **chapter_contents**: `id`, `chapter_id` (FK), `content` (longtext, nullable untuk tipe novel), `image_path` (string, nullable untuk tipe komik), `step` (integer, untuk urutan gambar komik), `timestamps`

### B. Tabel Pivot (Many-to-Many)
* **komik_genres**: `komik_id` (FK), `genre_id` (FK)
* **author_komik**: `komik_id` (FK), `author_id` (FK), `role` (string, e.g., 'story', 'art', 'both')

---

## REQUEST SEKARANG:
Saya sudah menyiapkan project Laravel kosong dan sudah membuat file `README.md` di dalamnya yang berisi instruksi tugas pertama kita.

Tolong jawab dengan:
1. Mengonfirmasi bahwa kamu memahami rancangan database di atas.
2. Mengonfirmasi bahwa kamu siap membaca dan mengikuti panduan dari `README.md` saya.
3. Minta saya untuk mengunggah atau menempelkan isi dari file `README.md` tersebut agar kita bisa mulai bekerja.