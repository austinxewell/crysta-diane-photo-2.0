<template>
  <div class="avi-wrapper">
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
img {
  border-radius: 50%;
  width: 80%;
  height: auto;
}
</style>
