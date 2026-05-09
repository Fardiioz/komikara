<script setup lang="ts">
// KOMIKARA - Novel Reader (Teks)
defineProps<{ content: string }>()
</script>

<template>
  <div class="novel-reader">
    <div class="novel-content" v-html="content"></div>
  </div>
</template>

<style scoped>
.novel-reader {
  max-width: 700px; margin: 0 auto; padding: 2rem 1.5rem;
  background: var(--color-surface-100); min-height: 60vh;
}
.novel-content {
  font-size: 1.1rem; line-height: 1.9; color: var(--color-surface-800);
  font-family: Georgia, 'Times New Roman', serif;
}
</style>
