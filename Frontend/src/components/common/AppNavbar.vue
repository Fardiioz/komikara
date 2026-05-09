<script setup lang="ts">
// ============================================
// KOMIKARA - App Navbar
// Navigasi utama: Home, Genre, Bookshelf, Profile/Login
// ============================================
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useUiStore } from '@/stores/ui'

const { isAuthenticated, user, isAdmin, isPublisher, logoutAndRedirect } = useAuth()
const uiStore = useUiStore()

const isProfileMenuOpen = ref(false)

function toggleProfileMenu() {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
}

function closeProfileMenu() {
  isProfileMenuOpen.value = false
}

async function handleLogout() {
  closeProfileMenu()
  await logoutAndRedirect()
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <!-- Logo -->
      <router-link to="/" class="navbar-logo">
        <span class="logo-text">Komikara</span>
      </router-link>

      <!-- Desktop Nav Links -->
      <div class="nav-links">
        <router-link to="/" class="nav-link" active-class="nav-link-active">
          Home
        </router-link>
        <router-link to="/genre" class="nav-link" active-class="nav-link-active">
          Genre
        </router-link>
        <router-link
          v-if="isAuthenticated"
          to="/bookshelf"
          class="nav-link"
          active-class="nav-link-active"
        >
          Bookshelf
        </router-link>
      </div>

      <!-- Right Side: Auth -->
      <div class="nav-right">
        <!-- Not logged in -->
        <template v-if="!isAuthenticated">
          <router-link to="/login" class="nav-link">Masuk</router-link>
          <router-link to="/register" class="btn btn-primary-sm">Daftar</router-link>
        </template>

        <!-- Logged in -->
        <template v-else>
          <div class="profile-wrapper" @click="toggleProfileMenu" v-click-away="closeProfileMenu">
            <button class="profile-btn">
              <div class="avatar">
                {{ user?.name?.charAt(0)?.toUpperCase() || 'U' }}
              </div>
              <span class="profile-name">{{ user?.name }}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="chevron-icon">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            <!-- Profile Dropdown -->
            <Transition name="scale">
              <div v-if="isProfileMenuOpen" class="profile-dropdown">
                <div class="dropdown-header">
                  <span class="dropdown-name">{{ user?.name }}</span>
                  <span class="dropdown-role">{{ user?.role }}</span>
                </div>
                <div class="dropdown-divider"></div>

                <router-link
                  v-if="isAdmin"
                  to="/admin/dashboard"
                  class="dropdown-item"
                  @click="closeProfileMenu"
                >
                  Admin Dashboard
                </router-link>
                <router-link
                  v-if="isPublisher"
                  to="/publisher/dashboard"
                  class="dropdown-item"
                  @click="closeProfileMenu"
                >
                  Publisher Dashboard
                </router-link>
                <router-link to="/bookshelf" class="dropdown-item" @click="closeProfileMenu">
                  Bookshelf
                </router-link>

                <div class="dropdown-divider"></div>
                <button class="dropdown-item dropdown-item-danger" @click="handleLogout">
                  Keluar
                </button>
              </div>
            </Transition>
          </div>
        </template>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" @click="uiStore.toggleSidebar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="menu-icon">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Sidebar Overlay -->
    <Transition name="fade">
      <div v-if="uiStore.isSidebarOpen" class="sidebar-overlay" @click="uiStore.closeSidebar"></div>
    </Transition>

    <!-- Mobile Sidebar -->
    <Transition name="slide-sidebar">
      <div v-if="uiStore.isSidebarOpen" class="sidebar">
        <div class="sidebar-header">
          <span class="logo-text">Komikara</span>
          <button @click="uiStore.closeSidebar" class="sidebar-close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="close-icon">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>

        <div class="sidebar-links">
          <router-link to="/" class="sidebar-link" @click="uiStore.closeSidebar">Home</router-link>
          <router-link to="/genre" class="sidebar-link" @click="uiStore.closeSidebar">Genre</router-link>
          <router-link v-if="isAuthenticated" to="/bookshelf" class="sidebar-link" @click="uiStore.closeSidebar">Bookshelf</router-link>
        </div>

        <div class="sidebar-footer">
          <template v-if="!isAuthenticated">
            <router-link to="/login" class="btn btn-outline-full" @click="uiStore.closeSidebar">Masuk</router-link>
            <router-link to="/register" class="btn btn-primary-full" @click="uiStore.closeSidebar">Daftar</router-link>
          </template>
          <template v-else>
            <button class="btn btn-outline-full" @click="handleLogout">Keluar</button>
          </template>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script lang="ts">
// v-click-away custom directive (inline for simplicity)
export default {
  directives: {
    'click-away': {
      mounted(el: HTMLElement, binding: any) {
        el._clickAway = (event: Event) => {
          if (!(el === event.target || el.contains(event.target as Node))) {
            binding.value()
          }
        }
        document.addEventListener('click', el._clickAway)
      },
      unmounted(el: any) {
        document.removeEventListener('click', el._clickAway)
      },
    },
  },
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-surface-200);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.navbar-logo {
  text-decoration: none;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-primary-900);
  letter-spacing: -0.02em;
}

/* Nav Links */
.nav-links {
  display: none;
  align-items: center;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  padding: 0.5rem 0.85rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-surface-700);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--color-primary-900);
  background: var(--color-primary-50);
}

.nav-link-active {
  color: var(--color-primary-900);
  font-weight: 600;
}

/* Right Side */
.nav-right {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-primary-sm {
  padding: 0.45rem 1rem;
  background: var(--color-primary-900);
  color: white;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
}

.btn-primary-sm:hover {
  background: var(--color-primary-800);
  color: white;
}

/* Profile */
.profile-wrapper {
  position: relative;
}

.profile-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.35rem;
  border-radius: var(--radius-lg);
  transition: background 0.2s ease;
}

.profile-btn:hover {
  background: var(--color-surface-200);
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-primary-900);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
}

.profile-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-surface-800);
  display: none;
}

@media (min-width: 768px) {
  .profile-name {
    display: inline;
  }
}

.chevron-icon {
  width: 16px;
  height: 16px;
  color: var(--color-surface-500);
}

/* Profile Dropdown */
.profile-dropdown {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  width: 220px;
  background: var(--color-surface-50);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-elevated);
  border: 1px solid var(--color-surface-200);
  overflow: hidden;
}

.dropdown-header {
  padding: 0.75rem 1rem;
}

.dropdown-name {
  display: block;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-surface-900);
}

.dropdown-role {
  font-size: 0.75rem;
  color: var(--color-surface-500);
  text-transform: capitalize;
}

.dropdown-divider {
  height: 1px;
  background: var(--color-surface-200);
}

.dropdown-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.65rem 1rem;
  font-size: 0.875rem;
  color: var(--color-surface-700);
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s ease;
}

.dropdown-item:hover {
  background: var(--color-surface-100);
  color: var(--color-surface-900);
}

.dropdown-item-danger:hover {
  background: #fef2f2;
  color: #dc2626;
}

/* Scale Transition */
.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: top right;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Mobile Toggle */
.mobile-toggle {
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
}

.mobile-toggle:hover {
  background: var(--color-surface-200);
}

@media (min-width: 768px) {
  .mobile-toggle {
    display: none;
  }
}

.menu-icon,
.close-icon {
  width: 24px;
  height: 24px;
  color: var(--color-surface-700);
}

/* Sidebar */
.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 60;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: var(--color-surface-50);
  z-index: 70;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-elevated);
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-surface-200);
}

.sidebar-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
}

.sidebar-links {
  flex: 1;
  padding: 1rem 0;
}

.sidebar-link {
  display: block;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-surface-700);
  text-decoration: none;
  transition: all 0.15s ease;
}

.sidebar-link:hover {
  background: var(--color-primary-50);
  color: var(--color-primary-900);
}

.sidebar-footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--color-surface-200);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.btn {
  padding: 0.7rem 1rem;
  border-radius: var(--radius-lg);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary-full {
  background: var(--color-primary-900);
  color: white;
  border: none;
}

.btn-primary-full:hover {
  background: var(--color-primary-800);
  color: white;
}

.btn-outline-full {
  background: transparent;
  color: var(--color-primary-900);
  border: 2px solid var(--color-primary-900);
}

.btn-outline-full:hover {
  background: var(--color-primary-900);
  color: white;
}

/* Sidebar Transitions */
.slide-sidebar-enter-active,
.slide-sidebar-leave-active {
  transition: transform 0.3s ease;
}

.slide-sidebar-enter-from,
.slide-sidebar-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
