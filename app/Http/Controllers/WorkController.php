<?php

namespace App\Http\Controllers;

use App\Models\Work;
use Illuminate\Http\Request;

class WorkController extends Controller
{
    // menampilkan semua daftar karya semua komik/novel
    public function index()
    {
        $works = Work::with(['author', 'genres', 'language'])->latest()->paginate(20);
        return view('works.index', compact('works'));
    }

    // Menampilkan detail satu judul
    public function show($slug)
    {
        $work = Work::with(['genres', 'chapters', 'author', 'language'])
                    ->where('slug', $slug)
                    ->firstOrFail();
                    
        return view('works.show', compact('work'));
    }
}