<template>
  <div class="zoom-modal-content">
    <div class="header">
      <h1 class="__title">{{ imgData.photo_name }}</h1>
      <div class="__btns">
        <button class="__btn">
          <span v-if="isZoomed" class="material-icons-outlined" @click="toggleZoom()">zoom_in_map</span>
          <span v-else class="material-icons-outlined" @click="toggleZoom()">zoom_out_map</span>
        </button>
        <button class="__btn" @click="closeModal()"><span class="material-icons-outlined">close</span></button>
      </div>
    </div>
    <div class="block">
      <div class="__wrapper">
        <img id="__img" :src="imgData.photo_url" :alt="imgData.photo_name" />
        <CommonMainLogo class="__logo" :isWhite="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
const isZoomed = ref(false);

const emit = defineEmits(['close-modal']);

const props = defineProps({
  imgData: {
    type: Object,
    required: true
  }
});

function toggleZoom() {
  isZoomed.value = !isZoomed.value;

  if (isZoomed.value) {
    document.getElementById('__img').style.maxWidth = 'none';
    document.getElementById('__img').style.maxHeight = 'none';
  } else {
    document.getElementById('__img').style.maxWidth = '100vh';
    document.getElementById('__img').style.maxHeight = '100vh';
  }
}

function closeModal() {
  emit('close-modal');
}
</script>

<style lang="scss" scoped>
.zoom-modal-content {
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  overflow: scroll;

  background-color: rgba(0, 0, 0, 0.9);
  color: $white-main;

  .header {
    width: 100%;

    display: flex;
    position: absolute;
    padding: 32px;

    .__btns {
      display: flex;
      gap: 16px;

      margin-left: auto;
    }
  }

  .block {
    height: 100%;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    .__wrapper {
      position: relative;

      img {
        max-height: 100vh;
        max-width: 100vh;
      }

      .__logo {
        position: absolute;
        bottom: 32px;
        left: 32px;
        z-index: 1;
      }
    }
  }
}
</style>
