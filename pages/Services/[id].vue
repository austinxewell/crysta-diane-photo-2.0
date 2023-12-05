<template>
  <div class="service-content" id="service-content" :class="{ '--fixed': viewPhoto }">
    <header class="__header">
      <h3 class="__title">{{ weddingData.service }}</h3>
      <a href="#gallery" class="__gallery-link">&bull; View {{ weddingData.service }} Gallery &bull;</a>
    </header>
    <div class="card-wrapper">
      <CommonServiceCard v-for="service in weddingData.serviceDetails" :key="service.id" :data="service" />
    </div>
    <CarouselGallerySlide
      class="__gallery"
      id="gallery"
      :gallery="weddingData.gallery"
      @toggle-value="toggleView"
    />
    <a href="#service-content">Back to top</a>
  </div>
</template>

<script setup>
const weddingData = useWeddingInfo();
const viewPhoto = ref(false);

function toggleView(val) {
  viewPhoto.value = val;
}
</script>

<style lang="scss" scoped>
.service-content {
  padding: 32px;
  background: linear-gradient(to bottom, $gray-light 40%, $gray-dark 100%);

  &.--fixed {
    position: fixed;
    z-index: 2;
  }

  .__header {
    padding-bottom: 16px;
    padding-left: 8%;

    border-bottom: solid 2px $black-main;
    font-family: 'Nothing You Could Do', cursive;

    .__title {
      font-size: 64px;
      font-weight: 800;
    }

    .__gallery-link {
      font-size: 20px;

      &:hover {
        cursor: pointer;
        font-style: italic;
      }
    }
  }

  .card-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;

    margin-top: 32px;
  }

  .__gallery {
    padding-top: 32px;
  }
}
</style>
