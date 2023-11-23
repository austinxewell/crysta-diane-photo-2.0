<template>
  <div>
    <nav class="nav-wrapper">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/gallery">Gallery</NuxtLink>
      <NuxtLink to="/services">Services</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: aqua;
}
.nav-wrapper:hover {
  cursor: pointer;
}
</style>
