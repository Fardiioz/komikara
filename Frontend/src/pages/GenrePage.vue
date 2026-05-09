<script setup lang="ts">
// ============================================
// KOMIKARA - Genre Page
// /genre & /genre/:slug
// ============================================
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentGenre = ref<string | null>(route.params.slug as string || null)

watch(() => route.params.slug, (newSlug) => {
  currentGenre.value = (newSlug as string) || null
})
</script>

<template>
  <div class="genre-page">
    <div class="page-container">
      <h1 class="page-title">
        {{ currentGenre ? `Genre: ${currentGenre}` : 'Semua Genre' }}
      </h1>

      <!-- Genre Tags -->
      <div v-if="!currentGenre" class="genre-grid">
        <div class="genre-placeholder">
          <p class="placeholder-text">Daftar genre akan ditampilkan di sini setelah API backend siap.</p>
        </div>
      </div>

      <!-- Komik by Genre -->
      <div v-else class="genre-results">
        <router-link to="/genre" class="back-link">
          ← Kembali ke Semua Genre
        </router-link>
        <div class="results-placeholder">
          <p class="placeholder-text">Komik dengan genre "{{ currentGenre }}" akan ditampilkan di sini.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.genre-page {
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
  text-transform: capitalize;
}

.genre-placeholder,
.results-placeholder {
  background: var(--color-surface-50);
  border: 2px dashed var(--color-surface-300);
  border-radius: var(--radius-lg);
  padding: 3rem 2rem;
  text-align: center;
}

.placeholder-text {
  color: var(--color-surface-500);
}

.back-link {
  display: inline-block;
  color: var(--color-primary-900);
  font-weight: 600;
  margin-bottom: 1rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--color-primary-700);
}
</style>
