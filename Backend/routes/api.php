<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes - Komikara
|--------------------------------------------------------------------------
|
| Route untuk komunikasi Frontend (Vue/Vite) ↔ Backend (Laravel).
| Semua route di sini otomatis memiliki prefix /api.
|
| Catatan:
| - Route publik bisa diakses tanpa autentikasi.
| - Route terproteksi memerlukan token (Sanctum).
| - Controller dan logic CRUD lengkap akan diimplementasikan bertahap.
|
*/

// ============================================
// PUBLIC ROUTES (Tanpa Autentikasi)
// ============================================

Route::prefix('v1')->group(function () {

    // --- Auth ---
    Route::post('/login', function () {
        return response()->json(['message' => 'Login endpoint — belum diimplementasikan'], 501);
    });

    Route::post('/register', function () {
        return response()->json(['message' => 'Register endpoint — belum diimplementasikan'], 501);
    });

    // --- Komik (Public) ---
    Route::get('/komiks', function () {
        return response()->json([
            'data' => [],
            'message' => 'List komik — belum diimplementasikan',
        ]);
    });

    Route::get('/komiks/{slug}', function (string $slug) {
        return response()->json([
            'data' => null,
            'message' => "Detail komik '{$slug}' — belum diimplementasikan",
        ]);
    });

    Route::get('/komiks/{slug}/chapters/{chapter_number}', function (string $slug, string $chapter_number) {
        return response()->json([
            'data' => null,
            'message' => "Chapter {$chapter_number} dari '{$slug}' — belum diimplementasikan",
        ]);
    });

    // --- Genre (Public) ---
    Route::get('/genres', function () {
        return response()->json([
            'data' => [],
            'message' => 'List genre — belum diimplementasikan',
        ]);
    });

    // ============================================
    // PROTECTED ROUTES (Memerlukan Autentikasi)
    // ============================================

    Route::middleware('auth:sanctum')->group(function () {

        // --- User ---
        Route::get('/user', function (\Illuminate\Http\Request $request) {
            return response()->json([
                'data' => $request->user(),
            ]);
        });

        Route::post('/logout', function (\Illuminate\Http\Request $request) {
            // Untuk Sanctum token-based, revoke token
            // $request->user()->currentAccessToken()->delete();
            return response()->json(['message' => 'Berhasil logout']);
        });

        // --- Bookshelf ---
        Route::get('/bookshelf', function () {
            return response()->json([
                'data' => [],
                'message' => 'Bookshelf — belum diimplementasikan',
            ]);
        });

        Route::post('/bookshelf/{komik_id}', function (int $komik_id) {
            return response()->json([
                'message' => "Simpan komik {$komik_id} ke bookshelf — belum diimplementasikan",
            ]);
        });

        // --- Admin Routes ---
        Route::prefix('admin')->group(function () {
            Route::get('/stats', function () {
                return response()->json([
                    'data' => [
                        'total_komiks' => 0,
                        'total_chapters' => 0,
                        'total_users' => 0,
                        'total_publishers' => 0,
                    ],
                ]);
            });
        });

        // --- Publisher Routes ---
        Route::prefix('publisher')->group(function () {
            Route::get('/my-komiks', function () {
                return response()->json([
                    'data' => [],
                    'message' => 'Komik milik publisher — belum diimplementasikan',
                ]);
            });

            Route::post('/komiks', function () {
                return response()->json([
                    'message' => 'Upload komik baru — belum diimplementasikan',
                ], 501);
            });
        });
    });
});
