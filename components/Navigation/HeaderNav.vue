<template>
  <div>
    <div class="nav-wrapper">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/gallery" class="nav-link">Gallery</NuxtLink>
      <NuxtLink to="/services" class="nav-link">Services</NuxtLink>
      <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      <CommonMainLogo :isWhite="true" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  color: $white-main;
  background: $black-main;
  padding: 16px 24px 24px 0;
  font-size: 18px;
}

.router-link-active {
  border-bottom: solid 2px $white-main;
}
</style>
