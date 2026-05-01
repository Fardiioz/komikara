<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Work extends Model
{
    //mass assignment
    protected $fillable = ['title', 'slug', 'sinopsis', 'type', 'status', 'author_id', 'languange_id', 'cover']; 
    
    //relasi dengan author
    public function author(){
        return $this->belongsTo(Author::class);
    }

    // relasi ke bahasa
    public function language(){
        return $this->belongsTo(Language::class);
    }

    //relasi many to many dengan genre
    public function genres (){
        return $this->belongstomany(genre::class);
    }

    //relasi ke chapter
    public function chapters(){
        return $this->hasmany(chapter::class);
    }
    
}
