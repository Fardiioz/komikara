<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Author extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'slug',
        'bio',
    ];

    /**
     * The komiks that belong to the author.
     */
    public function komiks(): BelongsToMany
    {
        return $this->belongsToMany(Komik::class, 'author_komik')
                    ->withPivot('role');
    }
}
