<script setup lang="ts">
// ============================================
// KOMIKARA - Home Page
// Menampilkan komik terbaru, populer, dan rekomendasi
// ============================================
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Baca <span class="text-gradient">Komik & Novel</span> Favoritmu
        </h1>
        <p class="hero-subtitle">
          Manga, Manhwa, Manhua, dan Novel — semua ada di Komikara.
        </p>

        <!-- Search Bar -->
        <div class="search-wrapper">
          <div class="search-bar">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Cari judul komik atau novel..."
              class="search-input"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Titles -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Latest Titles</h2>
      </div>
      <div class="grid-placeholder">
        <p class="placeholder-text">Latest titles will be displayed here.</p>
      </div>
    </section>

    <!-- Popular Titles -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Popular Titles</h2>
      </div>
      <div class="grid-placeholder">
        <p class="placeholder-text">Popular titles will be displayed here.</p>
      </div>
    </section>

    <!-- Recommended Titles -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Recommended Titles</h2>
      </div>
      <div class="grid-placeholder">
        <p class="placeholder-text">Recommended titles will be displayed here.</p>
      </div>
    </section>

    <!-- Novels -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Novels</h2>
      </div>
      <div class="grid-placeholder">
        <p class="placeholder-text">Novel series will be displayed here.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  animation: var(--animate-fade-in);
}

/* --- Hero Section --- */
.hero {
  background: linear-gradient(135deg, var(--color-primary-950) 0%, var(--color-primary-900) 50%, var(--color-primary-800) 100%);
  padding: 4rem 1.5rem;
  text-align: center;
  border-radius: 0 0 var(--radius-2xl) var(--radius-2xl);
}

.hero-content {
  max-width: 640px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.25rem;
  font-weight: 800;
  color: white;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.text-gradient {
  background: linear-gradient(90deg, #f9d0d9, #fdf2f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  color: var(--color-primary-200);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* --- Search Bar --- */
.search-wrapper {
  max-width: 480px;
  margin: 0 auto;
}

.search-bar {
  display: flex;
  align-items: center;
  background: white;
  border-radius: var(--radius-xl);
  padding: 0.75rem 1.25rem;
  box-shadow: var(--shadow-elevated);
  transition: box-shadow 0.2s ease;
}

.search-bar:focus-within {
  box-shadow: 0 0 0 3px rgba(91, 35, 51, 0.3), var(--shadow-elevated);
}

.search-icon {
  width: 20px;
  height: 20px;
  color: var(--color-surface-500);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  margin-left: 0.75rem;
  color: var(--color-surface-900);
  background: transparent;
}

.search-input::placeholder {
  color: var(--color-surface-400);
}

/* --- Sections --- */
.section {
  padding: 2rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-surface-900);
}

.grid-placeholder {
  background: var(--color-surface-50);
  border: 2px dashed var(--color-surface-300);
  border-radius: var(--radius-lg);
  padding: 3rem 2rem;
  text-align: center;
}

.placeholder-text {
  color: var(--color-surface-500);
  font-size: 0.95rem;
}

@media (min-width: 768px) {
  .hero {
    padding: 6rem 2rem;
  }

  .hero-title {
    font-size: 3rem;
  }
}
</style>
