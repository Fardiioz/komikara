<?php
namespace App\Models;

use illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    //mass assignment
    protected $fillable = ['work_id', 'chapter_number', 'title', 'context_text', 'uploader_id']; 

    //relasi balik ke judul utama
    public function komik(){
        return $this->belongsTo(Komik::class);
    }
}