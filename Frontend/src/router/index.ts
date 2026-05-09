// ============================================
// KOMIKARA - Vue Router Configuration
// ============================================

import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import ReaderLayout from '@/layouts/ReaderLayout.vue'

// Pages (lazy loaded)
const HomePage = () => import('@/pages/HomePage.vue')
const LoginPage = () => import('@/pages/LoginPage.vue')
const RegisterPage = () => import('@/pages/RegisterPage.vue')
const KomikDetailPage = () => import('@/pages/KomikDetailPage.vue')
const ReaderPage = () => import('@/pages/ReaderPage.vue')
const BookshelfPage = () => import('@/pages/BookshelfPage.vue')
const GenrePage = () => import('@/pages/GenrePage.vue')
const AdminDashboard = () => import('@/pages/admin/AdminDashboard.vue')
const PublisherDashboard = () => import('@/pages/publisher/PublisherDashboard.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    // ---- Default Layout ----
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', name: 'home', component: HomePage },
        { path: 'komik/:slug', name: 'komik-detail', component: KomikDetailPage },
        { path: 'genre', name: 'genre', component: GenrePage },
        { path: 'genre/:slug', name: 'genre-detail', component: GenrePage },
        {
          path: 'bookshelf',
          name: 'bookshelf',
          component: BookshelfPage,
          meta: { requiresAuth: true },
        },
      ],
    },

    // ---- Auth Layout ----
    {
      path: '/',
      component: AuthLayout,
      children: [
        { path: 'login', name: 'login', component: LoginPage, meta: { guestOnly: true } },
        { path: 'register', name: 'register', component: RegisterPage, meta: { guestOnly: true } },
      ],
    },

    // ---- Reader Layout (Distraction-Free) ----
    {
      path: '/',
      component: ReaderLayout,
      children: [
        {
          path: 'komik/:slug/chapter/:chapter_number',
          name: 'reader',
          component: ReaderPage,
        },
      ],
    },

    // ---- Dashboard Layout (Admin) ----
    {
      path: '/admin',
      component: DashboardLayout,
      meta: { requiresAuth: true, requiresRole: 'admin' },
      children: [
        { path: 'dashboard', name: 'admin-dashboard', component: AdminDashboard },
      ],
    },

    // ---- Dashboard Layout (Publisher) ----
    {
      path: '/publisher',
      component: DashboardLayout,
      meta: { requiresAuth: true, requiresRole: 'publisher' },
      children: [
        { path: 'dashboard', name: 'publisher-dashboard', component: PublisherDashboard },
      ],
    },

    // ---- 404 Catch-all ----
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/',
    },
  ],
})

// ============================================
// Navigation Guards
// ============================================

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  // Check auth on first load
  if (!authStore.user && authStore.token) {
    await authStore.fetchUser()
  }

  const isAuthenticated = authStore.isAuthenticated
  const userRole = authStore.user?.role

  // requiresAuth guard
  if (to.meta.requiresAuth && !isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  // guestOnly guard (redirect authenticated users away from login/register)
  if (to.meta.guestOnly && isAuthenticated) {
    return { name: 'home' }
  }

  // requiresRole guard
  if (to.meta.requiresRole && userRole !== to.meta.requiresRole) {
    return { name: 'home' }
  }

  // Allow navigation
  return true
})

export default router
