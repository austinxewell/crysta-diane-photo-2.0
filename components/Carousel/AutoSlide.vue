<template>
  <div class="carousel-wrapper">
    <carousel :autoplay="6000" :wrap-around="true">
      <slide v-for="slide in dummyData" :key="slide">
        <img :src="slide.src" :alt="slide.photoName" />
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
const dummyData = ref([
  {
    photoName: 'First Photo',
    src: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3IlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D'
  },
  {
    photoName: 'Second Photo',
    src: 'https://media.photographycourse.net/wp-content/uploads/2014/11/08164934/Landscape-Photography-steps.jpg'
  },
  {
    photoName: 'Third Photo',
    src: 'https://cdn.visualwilderness.com/wp-content/uploads/2019/12/Norway-Landscape-Photography-3-845x321.jpg'
  }
]);
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
