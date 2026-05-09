<script setup lang="ts">
// ============================================
// KOMIKARA - Reader Page (Distraction-Free)
// /komik/:slug/chapter/:chapter_number
// ============================================
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUiStore } from '@/stores/ui'

const route = useRoute()
const router = useRouter()
const uiStore = useUiStore()

const slug = ref(route.params.slug as string)
const chapterNumber = ref(route.params.chapter_number as string)

// Scroll direction detection untuk show/hide nav
let lastScrollY = 0

function handleScroll() {
  const currentScrollY = window.scrollY

  if (currentScrollY < lastScrollY && currentScrollY > 100) {
    // Scroll UP → Show nav
    uiStore.showReaderNav()
  } else if (currentScrollY > lastScrollY) {
    // Scroll DOWN → Hide nav
    uiStore.hideReaderNav()
  }

  lastScrollY = currentScrollY
}

function handleTap() {
  uiStore.toggleReaderNav()
}

function goBack() {
  router.push(`/komik/${slug.value}`)
}

onMounted(() => {
  uiStore.enterReaderMode()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  uiStore.exitReaderMode()
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="reader-page" @click="handleTap">
    <!-- Reader Navigation (muncul saat scroll up / tap) -->
    <Transition name="slide-down">
      <div v-if="uiStore.isReaderNavVisible" class="reader-nav">
        <button @click.stop="goBack" class="nav-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Kembali
        </button>

        <span class="chapter-indicator">Ch. {{ chapterNumber }}</span>

        <div class="chapter-nav-btns">
          <button class="nav-btn" title="Chapter Sebelumnya">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button class="nav-btn" title="Chapter Selanjutnya">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="nav-icon">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </Transition>

    <!-- Reader Content -->
    <div class="reader-content">
      <div class="reader-placeholder">
        <div class="placeholder-icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="big-icon">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
        </div>
        <h2 class="placeholder-title">Mode Baca</h2>
        <p class="placeholder-subtitle">{{ slug }} — Chapter {{ chapterNumber }}</p>
        <p class="placeholder-hint">Konten chapter akan ditampilkan di sini.<br>Tap layar untuk menampilkan navigasi.</p>
      </div>
    </div>

    <!-- End of Chapter -->
    <div class="chapter-end">
      <p>— Akhir Chapter {{ chapterNumber }} —</p>
      <button class="btn btn-primary" @click.stop="goBack">
        Kembali ke Detail Komik
      </button>
    </div>
  </div>
</template>

<style scoped>
.reader-page {
  min-height: 100vh;
  background: #1a1a1a;
  color: white;
  cursor: pointer;
}

/* --- Reader Nav (Distraction-Free) --- */
.reader-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: none;
  border: none;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  transition: background 0.2s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-icon {
  width: 20px;
  height: 20px;
}

.chapter-indicator {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-primary-200);
}

.chapter-nav-btns {
  display: flex;
  gap: 0.25rem;
}

/* --- Slide Down Transition --- */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* --- Reader Content --- */
.reader-content {
  max-width: 800px;
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reader-placeholder {
  text-align: center;
  padding: 3rem 2rem;
}

.placeholder-icon-wrapper {
  margin-bottom: 1.5rem;
}

.big-icon {
  width: 64px;
  height: 64px;
  color: var(--color-primary-400);
  margin: 0 auto;
}

.placeholder-title {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.5rem;
}

.placeholder-subtitle {
  color: var(--color-primary-300);
  font-size: 1rem;
  margin-bottom: 1rem;
}

.placeholder-hint {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* --- Chapter End --- */
.chapter-end {
  text-align: center;
  padding: 4rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.chapter-end p {
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-primary-900);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-800);
}
</style>
