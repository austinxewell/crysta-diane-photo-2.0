<template>
  <div class="gallery-content" :class="{ '--fixed': viewPhoto }">
    <h3>Gallery</h3>
    <div class="pictures-container">
      <template v-for="img in clientGallery">
        <div v-if="Boolean(img.show_in_gallery) === true" :key="img.photo_id" class="card">
          <img class="__img" :src="img.photo_url" :alt="img.photo_name" @click="setPhoto(img)" />
        </div>
      </template>
    </div>
    <ModalSelectImg v-if="viewPhoto" :imgData="selectedPhoto" @close-modal="closeModal" />
  </div>
</template>

<script setup>
useHead({
  title: 'Gallery'
});

import { ref, reactive, onMounted } from 'vue';
import { useGalleryStore } from '~/stores/gallery';

const galleryStore = useGalleryStore();
const clientGallery = reactive([]);
const viewPhoto = ref(false);
const selectedPhoto = ref({});

onMounted(async () => {
  try {
    await galleryStore.fetchGallery();
    clientGallery.push(...galleryStore.gallery);
  } catch (err) {
    console.error('Error Fetching Gallery:', err);
  }
});

function setPhoto(val) {
  selectedPhoto.value = val;
  viewPhoto.value = true;
}

function closeModal() {
  viewPhoto.value = false;
}
</script>

<style lang="scss" scoped>
.gallery-content {
  padding: 32px;
  background: linear-gradient(to bottom, $gray-light 40%, $gray-dark 100%);

  &.--fixed {
    position: fixed;
    z-index: 2;
  }

  h3 {
    display: flex;

    padding-bottom: 16px;
    padding-left: 8%;

    font-size: 64px;
    font-weight: 800;
    font-family: 'Nothing You Could Do', cursive;

    border-bottom: solid 2px $black-main;
  }

  .pictures-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

    padding-top: 32px;

    .card {
      position: relative;
      padding: 24px;

      background-color: $primary;
      border: double 4px $black-main;

      .__img {
        max-width: 400px;
        height: auto;

        border: solid 1px $black-main;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
