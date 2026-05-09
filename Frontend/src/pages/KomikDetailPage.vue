<script setup lang="ts">
// ============================================
// KOMIKARA - Komik Detail Page
// /komik/:slug
// ============================================
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = ref(route.params.slug as string)
</script>

<template>
  <div class="detail-page">
    <div class="detail-container">
      <!-- Komik Info Header -->
      <div class="komik-header">
        <div class="thumbnail-wrapper">
          <div class="thumbnail-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="placeholder-icon">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="m21 15-5-5L5 21"/>
            </svg>
          </div>
        </div>

        <div class="komik-info">
          <h1 class="komik-title">Judul Komik</h1>
          <p class="komik-slug">{{ slug }}</p>

          <div class="meta-tags">
            <span class="tag tag-type">Manga</span>
            <span class="tag tag-status tag-ongoing">Ongoing</span>
          </div>

          <p class="komik-description">
            Deskripsi/sinopsis komik akan ditampilkan di sini setelah API backend siap.
          </p>

          <div class="action-buttons">
            <button class="btn btn-primary">
              Mulai Membaca
            </button>
            <button class="btn btn-outline">
              Simpan ke Bookshelf
            </button>
          </div>
        </div>
      </div>

      <!-- Chapter List -->
      <section class="chapter-section">
        <h2 class="section-title">Daftar Chapter</h2>
        <div class="chapter-placeholder">
          <p class="placeholder-text">Daftar chapter akan ditampilkan di sini.</p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  animation: var(--animate-fade-in);
  padding: 2rem 1rem;
}

.detail-container {
  max-width: 900px;
  margin: 0 auto;
}

.komik-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: var(--color-surface-50);
  border-radius: var(--radius-2xl);
  padding: 2rem;
  box-shadow: var(--shadow-card);
}

@media (min-width: 640px) {
  .komik-header {
    flex-direction: row;
  }
}

.thumbnail-wrapper {
  flex-shrink: 0;
}

.thumbnail-placeholder {
  width: 200px;
  height: 280px;
  background: var(--color-surface-200);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .thumbnail-placeholder {
    margin: 0;
  }
}

.placeholder-icon {
  width: 48px;
  height: 48px;
  color: var(--color-surface-400);
}

.komik-info {
  flex: 1;
}

.komik-title {
  font-size: 1.75rem;
  color: var(--color-primary-900);
  margin-bottom: 0.25rem;
}

.komik-slug {
  font-size: 0.85rem;
  color: var(--color-surface-500);
  margin-bottom: 1rem;
}

.meta-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 600;
}

.tag-type {
  background: var(--color-primary-100);
  color: var(--color-primary-900);
}

.tag-status {
  color: white;
}

.tag-ongoing {
  background: var(--color-success);
}

.komik-description {
  color: var(--color-surface-700);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.action-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.7rem 1.25rem;
  border-radius: var(--radius-lg);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-primary-900);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-800);
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  color: var(--color-primary-900);
  border: 2px solid var(--color-primary-900);
}

.btn-outline:hover {
  background: var(--color-primary-900);
  color: white;
}

.chapter-section {
  margin-top: 2rem;
}

.section-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.chapter-placeholder {
  background: var(--color-surface-50);
  border: 2px dashed var(--color-surface-300);
  border-radius: var(--radius-lg);
  padding: 3rem 2rem;
  text-align: center;
}

.placeholder-text {
  color: var(--color-surface-500);
}
</style>
