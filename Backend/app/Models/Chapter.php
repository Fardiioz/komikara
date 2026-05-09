<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chapter extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'komik_id',
        'chapter_number',
        'title',
        'slug',
    ];

    /**
     * The komik that owns the chapter.
     */
    public function komik(): BelongsTo
    {
        return $this->belongsTo(Komik::class);
    }

    /**
     * The contents that belong to the chapter.
     */
    public function contents(): HasMany
    {
        return $this->hasMany(ChapterContent::class);
    }
}
