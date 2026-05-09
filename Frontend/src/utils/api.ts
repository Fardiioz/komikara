// ============================================
// KOMIKARA - Axios API Configuration
// Sesuai README poin 4: src/utils/api.js
// ============================================

import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import type { ApiError } from '@/types'

// Base URL dari environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

/**
 * Axios instance terkonfigurasi untuk komunikasi dengan Backend Laravel.
 *
 * Fitur:
 * - Base URL otomatis dari env
 * - Auto-attach Authorization Bearer token
 * - Auto-handle CSRF untuk Sanctum SPA
 * - Response error interceptor (401 auto-logout)
 */
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 detik (untuk Render free tier yang lambat spin-up)
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true, // Penting untuk Sanctum SPA cookie-based auth
})

// ============================================
// REQUEST INTERCEPTOR
// ============================================

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Ambil token dari localStorage
    const token = localStorage.getItem('komikara_token')

    // Jika ada token, attach ke header Authorization
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// ============================================
// RESPONSE INTERCEPTOR
// ============================================

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  async (error: AxiosError<ApiError>) => {
    const status = error.response?.status

    // 401 Unauthorized → Token expired / invalid
    if (status === 401) {
      // Hapus token dari localStorage
      localStorage.removeItem('komikara_token')
      localStorage.removeItem('komikara_user')

      // Redirect ke login jika bukan di halaman login
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }

    // 403 Forbidden → Tidak punya akses
    if (status === 403) {
      console.warn('[Komikara API] Forbidden: Anda tidak memiliki akses.')
    }

    // 422 Validation Error → Biarkan komponen handle
    // 429 Too Many Requests → Rate limited
    if (status === 429) {
      console.warn('[Komikara API] Terlalu banyak request. Silakan tunggu sebentar.')
    }

    // 500 Server Error
    if (status && status >= 500) {
      console.error('[Komikara API] Server error:', error.response?.data?.message)
    }

    return Promise.reject(error)
  }
)

// ============================================
// HELPER: Sanctum CSRF Cookie
// ============================================

/**
 * Ambil CSRF cookie dari Sanctum sebelum login/register.
 * Diperlukan untuk Sanctum SPA authentication.
 */
export async function getCsrfCookie(): Promise<void> {
  const sanctumUrl = import.meta.env.VITE_SANCTUM_URL || 'http://localhost:8000'
  await axios.get(`${sanctumUrl}/sanctum/csrf-cookie`, {
    withCredentials: true,
  })
}

// ============================================
// HELPER: Token Management
// ============================================

export function setToken(token: string): void {
  localStorage.setItem('komikara_token', token)
}

export function getToken(): string | null {
  return localStorage.getItem('komikara_token')
}

export function removeToken(): void {
  localStorage.removeItem('komikara_token')
}

export function setUser(user: object): void {
  localStorage.setItem('komikara_user', JSON.stringify(user))
}

export function getStoredUser(): object | null {
  const user = localStorage.getItem('komikara_user')
  return user ? JSON.parse(user) : null
}

export function removeUser(): void {
  localStorage.removeItem('komikara_user')
}

export default api
