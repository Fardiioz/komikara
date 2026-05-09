<script setup lang="ts">
// ============================================
// KOMIKARA - Loading Spinner
// Spinner bertema warna #5B2333 (sesuai README)
// ============================================

withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  text?: string
}>(), {
  size: 'md',
  text: '',
})
</script>

<template>
  <div class="spinner-wrapper" :class="`spinner-${size}`">
    <div class="spinner">
      <div class="spinner-ring"></div>
      <div class="spinner-ring spinner-ring-inner"></div>
    </div>
    <p v-if="text" class="spinner-text">{{ text }}</p>
  </div>
</template>

<style scoped>
.spinner-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
}

.spinner {
  position: relative;
}

/* Size variants */
.spinner-sm .spinner {
  width: 24px;
  height: 24px;
}

.spinner-md .spinner {
  width: 48px;
  height: 48px;
}

.spinner-lg .spinner {
  width: 72px;
  height: 72px;
}

.spinner-ring {
  position: absolute;
  inset: 0;
  border: 3px solid var(--color-primary-100);
  border-top-color: var(--color-primary-900);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.spinner-ring-inner {
  inset: 6px;
  border-width: 2px;
  border-color: var(--color-primary-200);
  border-top-color: var(--color-primary-700);
  animation-direction: reverse;
  animation-duration: 1.2s;
}

.spinner-sm .spinner-ring {
  border-width: 2px;
}

.spinner-sm .spinner-ring-inner {
  display: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner-text {
  font-size: 0.9rem;
  color: var(--color-surface-600);
  animation: var(--animate-pulse-soft);
}
</style>
