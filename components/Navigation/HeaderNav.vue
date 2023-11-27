<template>
  <div>
    <div class="nav-wrapper">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/gallery">Gallery</NuxtLink>
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  gap: 10px;
}
</style>
