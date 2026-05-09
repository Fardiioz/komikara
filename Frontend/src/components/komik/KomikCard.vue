<script setup lang="ts">
// KOMIKARA - Komik Card Component
import type { KomikListItem } from '@/types'

defineProps<{ komik: KomikListItem }>()
</script>

<template>
  <router-link :to="`/komik/${komik.slug}`" class="komik-card">
    <div class="card-thumbnail">
      <img v-if="komik.thumbnail" :src="komik.thumbnail" :alt="komik.title" loading="lazy" />
      <div v-else class="card-thumb-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32">
          <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
        </svg>
      </div>
      <div class="card-badges">
        <span class="badge badge-type">{{ komik.type }}</span>
        <span v-if="komik.status" class="badge" :class="`badge-${komik.status}`">{{ komik.status }}</span>
      </div>
    </div>
    <div class="card-info">
      <h3 class="card-title">{{ komik.title }}</h3>
      <span v-if="komik.chapters_count" class="card-meta">{{ komik.chapters_count }} Chapter</span>
    </div>
  </router-link>
</template>

<style scoped>
.komik-card {
  display: block; text-decoration: none; background: var(--color-surface-50);
  border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.komik-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-card-hover); }
.card-thumbnail { position: relative; aspect-ratio: 3/4; overflow: hidden; background: var(--color-surface-200); }
.card-thumbnail img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
.komik-card:hover .card-thumbnail img { transform: scale(1.05); }
.card-thumb-placeholder { display: flex; align-items: center; justify-content: center; height: 100%; color: var(--color-surface-400); }
.card-badges { position: absolute; top: 0.5rem; left: 0.5rem; display: flex; gap: 0.25rem; }
.badge { padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; }
.badge-type { background: var(--color-primary-900); color: white; }
.badge-ongoing { background: var(--color-success); color: white; }
.badge-completed { background: var(--color-info); color: white; }
.badge-hiatus { background: var(--color-warning); color: white; }
.card-info { padding: 0.75rem; }
.card-title { font-size: 0.9rem; font-weight: 600; color: var(--color-surface-900); line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.card-meta { font-size: 0.75rem; color: var(--color-surface-500); margin-top: 0.25rem; display: block; }
</style>
