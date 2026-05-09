// ============================================
// KOMIKARA - UI Store (Pinia)
// ============================================

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  // --- State ---

  /** Global loading state (untuk API calls) */
  const isLoading = ref(false)

  /** Sidebar visibility (mobile menu) */
  const isSidebarOpen = ref(false)

  /** Reader mode: sembunyikan semua UI (Distraction-Free Reader Mode) */
  const isReaderMode = ref(false)

  /** Reader navigation visibility (muncul saat scroll up / tap) */
  const isReaderNavVisible = ref(false)

  /** Search query global */
  const searchQuery = ref('')

  /** Toast notification */
  const toast = ref<{ message: string; type: 'success' | 'error' | 'warning' | 'info' } | null>(null)

  // --- Actions ---

  function setLoading(state: boolean): void {
    isLoading.value = state
  }

  function toggleSidebar(): void {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function closeSidebar(): void {
    isSidebarOpen.value = false
  }

  function enterReaderMode(): void {
    isReaderMode.value = true
    isReaderNavVisible.value = false
  }

  function exitReaderMode(): void {
    isReaderMode.value = false
    isReaderNavVisible.value = false
  }

  function toggleReaderNav(): void {
    isReaderNavVisible.value = !isReaderNavVisible.value
  }

  function showReaderNav(): void {
    isReaderNavVisible.value = true
  }

  function hideReaderNav(): void {
    isReaderNavVisible.value = false
  }

  function showToast(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void {
    toast.value = { message, type }
    // Auto-hide setelah 4 detik
    setTimeout(() => {
      toast.value = null
    }, 4000)
  }

  function clearToast(): void {
    toast.value = null
  }

  return {
    // State
    isLoading,
    isSidebarOpen,
    isReaderMode,
    isReaderNavVisible,
    searchQuery,
    toast,
    // Actions
    setLoading,
    toggleSidebar,
    closeSidebar,
    enterReaderMode,
    exitReaderMode,
    toggleReaderNav,
    showReaderNav,
    hideReaderNav,
    showToast,
    clearToast,
  }
})
