<template>
  <div class="gallery-content">
    <h3>Gallery</h3>
    <div class="pictures-container">
      <div v-for="img in dummyData" :key="img.id" class="card">
        <img class="__img" :src="img.src" :alt="img.title" />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Gallery'
});

const dummyData = useGalleryInfo();
</script>
<style lang="scss" scoped>
.gallery-content {
  padding: 32px;
  background-color: $gray-light;
  background: linear-gradient(to bottom, $gray-light 40%, $gray-dark 100%);

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
