<script setup lang="ts">
// KOMIKARA - Reusable Button Component
withDefaults(defineProps<{
  variant?: 'primary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
})
</script>

<template>
  <button class="app-btn" :class="[`btn-${variant}`, `btn-${size}`]" :disabled="disabled || loading">
    <span v-if="loading" class="btn-spinner"></span>
    <slot v-else />
  </button>
</template>

<style scoped>
.app-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
  border: none; border-radius: var(--radius-lg); font-weight: 600; cursor: pointer;
  transition: all 0.2s ease; font-family: inherit;
}
.app-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-sm { padding: 0.4rem 0.85rem; font-size: 0.8rem; }
.btn-md { padding: 0.7rem 1.25rem; font-size: 0.95rem; }
.btn-lg { padding: 0.85rem 1.5rem; font-size: 1.05rem; }
.btn-primary { background: var(--color-primary-900); color: white; }
.btn-primary:hover:not(:disabled) { background: var(--color-primary-800); transform: translateY(-1px); }
.btn-outline { background: transparent; color: var(--color-primary-900); border: 2px solid var(--color-primary-900); }
.btn-outline:hover:not(:disabled) { background: var(--color-primary-900); color: white; }
.btn-ghost { background: transparent; color: var(--color-surface-700); }
.btn-ghost:hover:not(:disabled) { background: var(--color-surface-200); }
.btn-danger { background: var(--color-danger); color: white; }
.btn-danger:hover:not(:disabled) { opacity: 0.9; }
.btn-spinner {
  width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white; border-radius: 50%; animation: spin 0.6s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
