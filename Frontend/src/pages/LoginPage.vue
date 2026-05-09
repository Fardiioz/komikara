<script setup lang="ts">
// ============================================
// KOMIKARA - Login Page
// User login via email & password
// ============================================
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { loginAndRedirect, loading, error, clearError } = useAuth()

const email = ref('')
const password = ref('')

async function handleLogin() {
  await loginAndRedirect(email.value, password.value)
}
</script>

<template>
  <div class="login-page">
    <div class="auth-card">
      <div class="auth-header">
        <h1 class="auth-title">Selamat Datang</h1>
        <p class="auth-subtitle">Masuk ke akun Komikara kamu</p>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="alert alert-error">
        <span>{{ error }}</span>
        <button @click="clearError" class="alert-close">&times;</button>
      </div>

      <form @submit.prevent="handleLogin" class="auth-form">
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-input"
            placeholder="email@example.com"
            required
            autocomplete="email"
          />
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-input"
            placeholder="••••••••"
            required
            autocomplete="current-password"
          />
        </div>

        <button type="submit" class="btn btn-primary" :disabled="loading">
          <span v-if="loading" class="spinner"></span>
          <span v-else>Masuk</span>
        </button>
      </form>

      <div class="auth-footer">
        <p>Belum punya akun? <router-link to="/register" class="auth-link">Daftar di sini</router-link></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  animation: var(--animate-fade-in);
}

.auth-card {
  width: 100%;
  max-width: 420px;
  background: var(--color-surface-50);
  border-radius: var(--radius-2xl);
  padding: 2.5rem;
  box-shadow: var(--shadow-elevated);
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-title {
  font-size: 1.75rem;
  color: var(--color-primary-900);
  margin-bottom: 0.5rem;
}

.auth-subtitle {
  color: var(--color-surface-600);
  font-size: 0.95rem;
}

.alert {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
}

.alert-error {
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

.alert-close {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: inherit;
  padding: 0 0.25rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-surface-700);
}

.form-input {
  padding: 0.75rem 1rem;
  border: 1.5px solid var(--color-surface-300);
  border-radius: var(--radius-lg);
  font-size: 1rem;
  color: var(--color-surface-900);
  background: var(--color-surface-100);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary-900);
  box-shadow: 0 0 0 3px rgba(91, 35, 51, 0.15);
}

.form-input::placeholder {
  color: var(--color-surface-400);
}

.btn {
  padding: 0.85rem 1.5rem;
  border-radius: var(--radius-lg);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--color-primary-900);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-primary-800);
  transform: translateY(-1px);
  box-shadow: var(--shadow-card-hover);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.auth-footer {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: var(--color-surface-600);
}

.auth-link {
  color: var(--color-primary-900);
  font-weight: 600;
}

.auth-link:hover {
  text-decoration: underline;
}
</style>
