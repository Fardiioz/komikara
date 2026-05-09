<script setup lang="ts">
// ============================================
// KOMIKARA - Publisher Dashboard
// /publisher/dashboard (Role: publisher only)
// ============================================
import { useAuth } from '@/composables/useAuth'

const { user } = useAuth()
</script>

<template>
  <div class="dashboard-page">
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1 class="dashboard-title">Publisher Dashboard</h1>
        <p class="dashboard-subtitle">Selamat datang, {{ user?.name || 'Publisher' }}</p>
      </div>

      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-number">0</span>
          <span class="stat-label">Komik Saya</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">0</span>
          <span class="stat-label">Total Chapter</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">0</span>
          <span class="stat-label">Total Views</span>
        </div>
      </div>

      <!-- Publisher Actions -->
      <div class="publisher-sections">
        <section class="publisher-section">
          <div class="section-header-row">
            <h2 class="section-title">Komik Saya</h2>
            <button class="btn btn-primary btn-sm">+ Upload Komik Baru</button>
          </div>
          <div class="section-placeholder">
            <p>Daftar komik yang telah kamu upload akan ditampilkan di sini.</p>
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

.publisher-sections {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.publisher-section {
  background: var(--color-surface-50);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  box-shadow: var(--shadow-card);
}

.section-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1.2rem;
  color: var(--color-surface-800);
}

.btn {
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-lg);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
}

.btn-primary {
  background: var(--color-primary-900);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-800);
  transform: translateY(-1px);
}

.section-placeholder {
  color: var(--color-surface-500);
  padding: 1rem;
  background: var(--color-surface-100);
  border-radius: var(--radius-md);
}
</style>
