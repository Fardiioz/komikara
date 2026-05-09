<script setup lang="ts">
// KOMIKARA - Chapter List Component
import type { Chapter } from '@/types'

defineProps<{
  chapters: Chapter[]
  komikSlug: string
}>()
</script>

<template>
  <div class="chapter-list">
    <div v-if="chapters.length === 0" class="empty-chapters">
      <p>Belum ada chapter tersedia.</p>
    </div>
    <router-link
      v-else
      v-for="chapter in chapters"
      :key="chapter.id"
      :to="`/komik/${komikSlug}/chapter/${chapter.chapter_number}`"
      class="chapter-item"
    >
      <span class="chapter-number">Ch. {{ chapter.chapter_number }}</span>
      <span v-if="chapter.title" class="chapter-title">{{ chapter.title }}</span>
      <span class="chapter-date">{{ new Date(chapter.created_at).toLocaleDateString('id-ID') }}</span>
    </router-link>
  </div>
</template>

<style scoped>
.chapter-list { display: flex; flex-direction: column; gap: 0.25rem; }
.chapter-item {
  display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1rem;
  background: var(--color-surface-50); border-radius: var(--radius-md); text-decoration: none;
  transition: background 0.15s ease;
}
.chapter-item:hover { background: var(--color-primary-50); }
.chapter-number { font-weight: 700; color: var(--color-primary-900); min-width: 60px; font-size: 0.9rem; }
.chapter-title { flex: 1; color: var(--color-surface-700); font-size: 0.9rem; }
.chapter-date { font-size: 0.8rem; color: var(--color-surface-500); }
.empty-chapters { padding: 2rem; text-align: center; color: var(--color-surface-500); }
</style>
