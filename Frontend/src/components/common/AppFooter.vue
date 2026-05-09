<script setup lang="ts">
// ============================================
// KOMIKARA - App Footer
// ============================================
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">Komikara</span>
        <p class="footer-tagline">Platform baca Komik & Novel terbaik.</p>
      </div>

      <div class="footer-links">
        <div class="footer-col">
          <h4 class="footer-col-title">Jelajahi</h4>
          <router-link to="/" class="footer-link">Home</router-link>
          <router-link to="/genre" class="footer-link">Genre</router-link>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Akun</h4>
          <router-link to="/login" class="footer-link">Masuk</router-link>
          <router-link to="/register" class="footer-link">Daftar</router-link>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Komikara. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-primary-950);
  color: var(--color-primary-200);
  margin-top: auto;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 640px) {
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-brand {
  max-width: 280px;
}

.footer-logo {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 800;
  color: white;
}

.footer-tagline {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-primary-300);
}

.footer-links {
  display: flex;
  gap: 3rem;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-col-title {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-primary-400);
  margin-bottom: 0.25rem;
}

.footer-link {
  font-size: 0.875rem;
  color: var(--color-primary-200);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: var(--color-primary-400);
}
</style>
