// ============================================
// KOMIKARA - Auth Store (Pinia)
// ============================================

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api, { setToken, removeToken, setUser, removeUser, getCsrfCookie } from '@/utils/api'
import type { User, LoginCredentials, RegisterData, AuthResponse } from '@/types'

export const useAuthStore = defineStore('auth', () => {
  // --- State ---
  const user = ref<User | null>(null)
  const token = ref<string | null>(localStorage.getItem('komikara_token'))
  const loading = ref(false)
  const error = ref<string | null>(null)

  // --- Getters ---
  const isAuthenticated = computed(() => !!user.value && !!token.value)
  const isAdmin = computed(() => user.value?.role === 'admin')
  const isPublisher = computed(() => user.value?.role === 'publisher')
  const isUser = computed(() => user.value?.role === 'user')
  const userRole = computed(() => user.value?.role ?? null)

  // --- Actions ---

  /**
   * Login pengguna dengan email & password.
   */
  async function login(credentials: LoginCredentials): Promise<boolean> {
    loading.value = true
    error.value = null

    try {
      await getCsrfCookie()
      const response = await api.post<AuthResponse>('/login', credentials)

      const { user: userData, token: tokenData } = response.data
      user.value = userData
      token.value = tokenData
      setToken(tokenData)
      setUser(userData)

      return true
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Login gagal. Silakan coba lagi.'
      return false
    } finally {
      loading.value = false
    }
  }

  /**
   * Registrasi pengguna baru.
   */
  async function register(data: RegisterData): Promise<boolean> {
    loading.value = true
    error.value = null

    try {
      await getCsrfCookie()
      const response = await api.post<AuthResponse>('/register', data)

      const { user: userData, token: tokenData } = response.data
      user.value = userData
      token.value = tokenData
      setToken(tokenData)
      setUser(userData)

      return true
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Registrasi gagal. Silakan coba lagi.'
      return false
    } finally {
      loading.value = false
    }
  }

  /**
   * Logout pengguna.
   */
  async function logout(): Promise<void> {
    try {
      await api.post('/logout')
    } catch {
      // Tetap logout di frontend meskipun API error
    } finally {
      user.value = null
      token.value = null
      removeToken()
      removeUser()
    }
  }

  /**
   * Ambil data user yang sedang login dari API.
   */
  async function fetchUser(): Promise<void> {
    if (!token.value) return

    loading.value = true
    try {
      const response = await api.get<{ data: User }>('/user')
      user.value = response.data.data
      setUser(response.data.data)
    } catch {
      // Token invalid, bersihkan
      user.value = null
      token.value = null
      removeToken()
      removeUser()
    } finally {
      loading.value = false
    }
  }

  /**
   * Cek apakah user masih terautentikasi (dijalankan saat app mount).
   */
  async function checkAuth(): Promise<void> {
    const storedToken = localStorage.getItem('komikara_token')
    if (storedToken) {
      token.value = storedToken
      await fetchUser()
    }
  }

  /**
   * Reset error state.
   */
  function clearError(): void {
    error.value = null
  }

  return {
    // State
    user,
    token,
    loading,
    error,
    // Getters
    isAuthenticated,
    isAdmin,
    isPublisher,
    isUser,
    userRole,
    // Actions
    login,
    register,
    logout,
    fetchUser,
    checkAuth,
    clearError,
  }
})
