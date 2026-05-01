<?php

namespace App\Http\Controllers\Uploader;

use App\Http\Controllers\Controller;
use App\Models\Work;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class WorkManagerController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'type' => 'required|in:comic,novel',
            'author_id' => 'required',
            'language_id' => 'required',
        ]);

        Work::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'type' => $request->type,
            'synopsis' => $request->synopsis,
            'author_id' => $request->author_id,
            'language_id' => $request->language_id,
        ]);

        return redirect()->back()->with('success', 'Judul baru berhasil ditambahkan!');
    }
}
