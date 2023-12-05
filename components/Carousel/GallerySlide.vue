<template>
  <div class="carousel-wrapper">
    <carousel :breakpoints="breakpoints" :wrap-around="true" :transition="600">
      <slide v-for="slide in gallery" :key="slide">
        <div class="__slide-content">
          <div class="__card">
            <img :src="slide.src" :alt="slide.title" class="__img" @click="setPhoto(slide)" />
          </div>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
    <ModalSelectImg v-if="viewPhoto" :imgData="selectedPhoto" @close-modal="closeModal" />
  </div>
</template>

<script setup>
const selectedPhoto = ref('');
const viewPhoto = ref(false);

const emit = defineEmits(['toggle-value']);

const props = defineProps({
  gallery: {
    type: Array,
    required: true
  }
});

const breakpoints = {
  768: {
    itemsToShow: 1.5,
    snapAlign: 'center'
  },
  1024: {
    itemsToShow: 2,
    snapAlign: 'start'
  }
};

function setPhoto(val) {
  selectedPhoto.value = val;
  viewPhoto.value = true;
  emit('toggle-value', viewPhoto.value);
}

function closeModal() {
  viewPhoto.value = false;
  emit('toggle-value', viewPhoto.value);
}
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  .__slide-content {
    width: 400px;
    height: 400px;

    padding: 32px;

    background-color: $primary;
    border: double 4px $black-main;

    .__card {
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      .__img {
        max-width: 336px;
        max-height: 336px;

        object-fit: contain;

        border: solid 1px $black-main;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  &:hover {
    cursor: grab;
  }
}
</style>
