<template>
  <div class="avi-wrapper">
    <section>
      <NuxtLink class="gallery-btn" to="/gallery">Come See More Of My Work!</NuxtLink>
      <div class="arrow-left"></div>
    </section>
    <img :src="profileData.fullAvi" alt="" />
  </div>
</template>

<script setup>
const profileData = useProfileInfo();
</script>

<style lang="scss" scoped>
.avi-wrapper {
  position: relative;
}

.gallery-btn {
  display: flex;
  text-align: center;
  padding: 8px;
  width: 150px;
  background-color: $primary;
  border-radius: 10px;
  position: absolute;
  margin-left: -5px;
  left: 27vh;
  top: 16px;
}

.arrow-left {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid $primary;
  position: absolute;
  top: 30px;
  left: 25vh;
}

img {
  border-radius: 50%;
  width: 80%;
  height: auto;
}
</style>
