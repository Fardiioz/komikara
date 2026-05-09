<script setup lang="ts">
// ============================================
// KOMIKARA - Admin Dashboard
// /admin/dashboard (Role: admin only)
// ============================================
import { useAuth } from '@/composables/useAuth'

const { user } = useAuth()
</script>

<template>
  <div class="dashboard-page">
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1 class="dashboard-title">Admin Dashboard</h1>
        <p class="dashboard-subtitle">Selamat datang, {{ user?.name || 'Admin' }}</p>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-number">0</span>
          <span class="stat-label">Total Komik</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">0</span>
          <span class="stat-label">Total Chapter</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">0</span>
          <span class="stat-label">Total User</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">0</span>
          <span class="stat-label">Total Publisher</span>
        </div>
      </div>

      <!-- Admin Actions -->
      <div class="admin-sections">
        <section class="admin-section">
          <h2 class="section-title">Manajemen Komik</h2>
          <div class="section-placeholder">
            <p>Kelola semua komik dari seluruh publisher.</p>
          </div>
        </section>

        <section class="admin-section">
          <h2 class="section-title">Manajemen Pengguna</h2>
          <div class="section-placeholder">
            <p>Kelola akun user biasa dan publisher.</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-page {
  animation: var(--animate-fade-in);
  padding: 2rem 1rem;
}

.dashboard-container {
  max-width: 1100px;
  margin: 0 auto;
}

.dashboard-header {
  margin-bottom: 2rem;
}

.dashboard-title {
  font-size: 1.75rem;
  color: var(--color-primary-900);
  margin-bottom: 0.25rem;
}

.dashboard-subtitle {
  color: var(--color-surface-600);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: var(--color-surface-50);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary-900);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-surface-600);
  margin-top: 0.25rem;
}

.admin-sections {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.admin-section {
  background: var(--color-surface-50);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  box-shadow: var(--shadow-card);
}

.section-title {
  font-size: 1.2rem;
  color: var(--color-surface-800);
  margin-bottom: 1rem;
}

.section-placeholder {
  color: var(--color-surface-500);
  padding: 1rem;
  background: var(--color-surface-100);
  border-radius: var(--radius-md);
}
</style>
