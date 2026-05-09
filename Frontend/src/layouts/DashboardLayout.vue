<script setup lang="ts">
// ============================================
// KOMIKARA - Dashboard Layout
// Layout untuk Admin & Publisher Dashboard
// ============================================
import AppNavbar from '@/components/common/AppNavbar.vue'
</script>

<template>
  <div class="dashboard-layout">
    <AppNavbar />
    <main class="dashboard-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-surface-100);
}

.dashboard-content {
  flex: 1;
}
</style>
