<script setup lang="ts">
// ============================================
// KOMIKARA - Root App Component
// ============================================
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useUiStore } from '@/stores/ui'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'

const authStore = useAuthStore()
const uiStore = useUiStore()

onMounted(async () => {
  await authStore.checkAuth()
})
</script>

<template>
  <!-- Global Loading Overlay -->
  <Transition name="fade">
    <div v-if="uiStore.isLoading" class="global-loading">
      <LoadingSpinner size="lg" text="Memuat..." />
    </div>
  </Transition>

  <!-- Toast Notification -->
  <Transition name="slide-up">
    <div v-if="uiStore.toast" class="toast" :class="`toast-${uiStore.toast.type}`">
      <span>{{ uiStore.toast.message }}</span>
      <button @click="uiStore.clearToast" class="toast-close">&times;</button>
    </div>
  </Transition>

  <!-- Router View -->
  <router-view v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<style scoped>
.global-loading {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(247, 244, 243, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.toast {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 150;
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: var(--shadow-elevated);
  max-width: 400px;
}

.toast-success { background: #dcfce7; color: #166534; }
.toast-error { background: #fef2f2; color: #dc2626; }
.toast-warning { background: #fefce8; color: #a16207; }
.toast-info { background: #eff6ff; color: #1d4ed8; }

.toast-close {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
}
.toast-close:hover { opacity: 1; }

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
