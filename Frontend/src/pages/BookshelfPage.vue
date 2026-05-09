<script setup lang="ts">
// ============================================
// KOMIKARA - Bookshelf / Library Page
// /bookshelf (Hanya untuk user yang sudah login)
// ============================================
</script>

<template>
  <div class="bookshelf-page">
    <div class="page-container">
      <h1 class="page-title">Bookshelf Saya</h1>

      <!-- Tabs -->
      <div class="tabs">
        <button class="tab active">Koleksi Saya</button>
        <button class="tab">Riwayat Baca</button>
      </div>

      <!-- Bookshelf Content -->
      <div class="content-placeholder">
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="empty-icon">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>
          </svg>
          <h3 class="empty-title">Bookshelf masih kosong</h3>
          <p class="empty-text">Simpan komik favoritmu agar mudah ditemukan kembali.</p>
          <router-link to="/" class="btn btn-primary">Jelajahi Komik</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bookshelf-page {
  animation: var(--animate-fade-in);
  padding: 2rem 1rem;
}

.page-container {
  max-width: 1000px;
  margin: 0 auto;
}

.page-title {
  font-size: 1.75rem;
  color: var(--color-primary-900);
  margin-bottom: 1.5rem;
}

.tabs {
  display: flex;
  gap: 0;
  border-bottom: 2px solid var(--color-surface-200);
  margin-bottom: 2rem;
}

.tab {
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-surface-500);
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s ease;
}

.tab:hover {
  color: var(--color-primary-900);
}

.tab.active {
  color: var(--color-primary-900);
  border-bottom-color: var(--color-primary-900);
}

.content-placeholder {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-state {
  text-align: center;
  padding: 3rem 2rem;
}

.empty-icon {
  width: 64px;
  height: 64px;
  color: var(--color-surface-400);
  margin: 0 auto 1.5rem;
}

.empty-title {
  font-size: 1.25rem;
  color: var(--color-surface-700);
  margin-bottom: 0.5rem;
}

.empty-text {
  color: var(--color-surface-500);
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-primary-900);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-800);
}
</style>
