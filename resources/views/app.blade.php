<!Doctype html>
<html lang="id">
    <head>
        <title>Komikara</title>
        <meta charset="utf-8">
       <style>
           body {
               font-family: Arial, sans-serif;
               background-color: #f0f0f0;
               margin: 0;
               padding: 20px;
           }
           h1 {
               color: #333;
           }
           </style>
    </head>
    <body>
        <h1>Daftar Komik</h1>
        Foreach ($komiks as $komik)
        <div class="komik-card">
            <h3>{{ $komik['judul']}}</h3>