<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('author_komik', function (Blueprint $table) {
            $table->unsignedBigInteger('komik_id');
            $table->unsignedBigInteger('author_id');
            $table->string('role')->default('both');

            $table->primary(['komik_id', 'author_id']);

            $table->foreign('komik_id')
                  ->references('id')
                  ->on('komiks')
                  ->onDelete('cascade');

            $table->foreign('author_id')
                  ->references('id')
                  ->on('authors')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('author_komik');
    }
};
