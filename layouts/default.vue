<template>
  <div v-if="!isAdmin">
    <NavigationHeaderNav />
    <slot></slot>
    <TheFooter />
  </div>
  <div v-else class="layout-wrapper">
    <TheSidebar />
    <div class="app-view-content">
      <NavigationHeaderNav />
      <slot></slot>
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
const isAdmin = useIsLoggedIn();
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
  display: flex;
  overflow: hidden;
}

.app-view-content {
  width: 100%;
  overflow: auto;
  background-color: $gray-light;
}
</style>
