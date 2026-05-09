<script setup lang="ts">
// KOMIKARA - Komik Reader (Gambar/Komik)
import type { ChapterContent } from '@/types'

defineProps<{ contents: ChapterContent[] }>()
</script>

<template>
  <div class="komik-reader">
    <div v-for="content in contents" :key="content.id" class="reader-page-img">
      <img
        v-if="content.image_path"
        :src="content.image_path"
        :alt="`Halaman ${content.step}`"
        loading="lazy"
        class="page-image"
      />
    </div>
  </div>
</template>

<style scoped>
.komik-reader { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; }
.reader-page-img { width: 100%; }
.page-image { width: 100%; height: auto; display: block; }
</style>
