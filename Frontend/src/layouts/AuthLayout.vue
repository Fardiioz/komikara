<script setup lang="ts">
// ============================================
// KOMIKARA - Auth Layout
// Layout untuk halaman Login & Register (tanpa Navbar/Footer)
// ============================================
</script>

<template>
  <div class="auth-layout">
    <div class="auth-bg-pattern"></div>
    <router-view />
  </div>
</template>

<style scoped>
.auth-layout {
  min-height: 100vh;
  position: relative;
  background: linear-gradient(135deg, var(--color-surface-100) 0%, var(--color-surface-200) 100%);
}

.auth-bg-pattern {
  position: fixed;
  inset: 0;
  opacity: 0.03;
  background-image:
    radial-gradient(circle at 25% 25%, var(--color-primary-900) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, var(--color-primary-900) 1px, transparent 1px);
  background-size: 50px 50px, 30px 30px;
  pointer-events: none;
}
</style>
