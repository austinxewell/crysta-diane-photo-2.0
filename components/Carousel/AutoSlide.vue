<template>
  <div class="carousel-wrapper">
    <carousel :autoplay="4000" :pauseAutoplayOnHover="true" :transition="700" :wrap-around="true">
      <slide v-for="slide in clientHeroPhotos" :key="slide">
        <img :src="slide.photo_url" :alt="slide.photo_name" />
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useGalleryStore } from '~/stores/gallery';

const galleryStore = useGalleryStore();
const clientHeroPhotos = reactive([]);

onMounted(async () => {
  try {
    await galleryStore.fetchHeroPhotos();
    clientHeroPhotos.push(...galleryStore.heroPhotos);
  } catch (err) {
    console.error('Error Fetching Gallery:', err);
  }
});
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  width: 100%;
  background-color: $gray-light;
}
img {
  width: 100%;
  height: 40vh;
}
</style>
