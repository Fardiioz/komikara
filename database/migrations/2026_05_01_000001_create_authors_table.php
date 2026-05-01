<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Jalankan migrasi (Membuat Tabel).
     */
    public function up(): void
    {
        Schema::create('authors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('bio')->nullable(); // Tambahan opsional untuk profil penulis
            $table->timestamps();
        });
    }

    /**
     * Batalkan migrasi (Menghapus Tabel).
     */
    public function down(): void
    {
        Schema::dropIfExists('authors');
    }
};
