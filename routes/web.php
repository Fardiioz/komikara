<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'Welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

Route::get('/coba', function () {
    return 'Hello World, pak jokowi bangga';

});

Route::get('/komik/{judul}', function ($judul) {
    return 'Sedang Membaca Komik: ' . $judul;
});

Route::get('/users{nama}',function($nama = 'tamu'){
    return 'Selamat Datang, ' . $nama;
});

Route::get('/komik', [App\Http\Controllers\KomikController::class, 'index']);
Route::get('/komik/detail/{id}', [App\Http\Controllers\KomikController::class, 'detail']);