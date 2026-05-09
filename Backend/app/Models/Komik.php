<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Komik extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'slug',
        'description',
        'thumbnail',
        'type',
        'status',
        'publisher_id',
    ];

    /**
     * The publisher that owns the komik.
     */
    public function publisher(): BelongsTo
    {
        return $this->belongsTo(Publisher::class);
    }

    /**
     * The authors that belong to the komik.
     */
    public function authors(): BelongsToMany
    {
        return $this->belongsToMany(Author::class, 'author_komik')
                    ->withPivot('role');
    }

    /**
     * The genres that belong to the komik.
     */
    public function genres(): BelongsToMany
    {
        return $this->belongsToMany(Genre::class, 'komik_genres');
    }

    /**
     * The chapters that belong to the komik.
     */
    public function chapters(): HasMany
    {
        return $this->hasMany(Chapter::class);
    }
}
