<script setup lang="ts">
// Skeleton Card - Loading placeholder
withDefaults(defineProps<{ count?: number }>(), { count: 6 })
</script>

<template>
  <div class="skeleton-grid">
    <div v-for="i in count" :key="i" class="skeleton-card">
      <div class="skeleton-thumb shimmer"></div>
      <div class="skeleton-info">
        <div class="skeleton-title shimmer"></div>
        <div class="skeleton-meta shimmer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}
.skeleton-card {
  background: var(--color-surface-50);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.skeleton-thumb {
  width: 100%;
  aspect-ratio: 3 / 4;
  background: var(--color-surface-200);
}
.skeleton-info { padding: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem; }
.skeleton-title { height: 16px; width: 80%; background: var(--color-surface-200); border-radius: var(--radius-sm); }
.skeleton-meta { height: 12px; width: 50%; background: var(--color-surface-200); border-radius: var(--radius-sm); }
.shimmer { position: relative; overflow: hidden; }
.shimmer::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(91,35,51,0.06) 50%, transparent 100%);
  animation: shimmer 1.5s infinite;
}
@keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
</style>
