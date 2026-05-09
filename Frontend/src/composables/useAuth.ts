// ============================================
// KOMIKARA - Auth Composable
// ============================================

import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

/**
 * Composable untuk mengakses auth state dan actions
 * dengan mudah di komponen manapun.
 */
export function useAuth() {
  const authStore = useAuthStore()
  const router = useRouter()

  const {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    isAdmin,
    isPublisher,
    isUser,
    userRole,
  } = storeToRefs(authStore)

  /**
   * Login dan redirect berdasarkan role.
   */
  async function loginAndRedirect(email: string, password: string): Promise<boolean> {
    const success = await authStore.login({ email, password })

    if (success) {
      const role = authStore.user?.role

      if (role === 'admin') {
        await router.push('/admin/dashboard')
      } else if (role === 'publisher') {
        await router.push('/publisher/dashboard')
      } else {
        await router.push('/')
      }
    }

    return success
  }

  /**
   * Register dan redirect ke home.
   */
  async function registerAndRedirect(
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ): Promise<boolean> {
    const success = await authStore.register({
      name,
      email,
      password,
      password_confirmation,
    })

    if (success) {
      await router.push('/')
    }

    return success
  }

  /**
   * Logout dan redirect ke home.
   */
  async function logoutAndRedirect(): Promise<void> {
    await authStore.logout()
    await router.push('/')
  }

  /**
   * Redirect ke login jika belum terautentikasi.
   */
  function requireAuth(): boolean {
    if (!isAuthenticated.value) {
      router.push('/login')
      return false
    }
    return true
  }

  return {
    // State (reactive refs)
    user,
    token,
    loading,
    error,
    isAuthenticated,
    isAdmin,
    isPublisher,
    isUser,
    userRole,
    // Actions
    loginAndRedirect,
    registerAndRedirect,
    logoutAndRedirect,
    requireAuth,
    clearError: authStore.clearError,
    checkAuth: authStore.checkAuth,
  }
}
