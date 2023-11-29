<template>
  <div>
    <img :src="profileData.fullAvi" alt="" />
  </div>
</template>

<script setup>
const profileData = useProfileInfo();
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  height: 50vh;
}
</style>
