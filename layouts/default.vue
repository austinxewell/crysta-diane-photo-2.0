<template>
  <div v-if="!isAdmin">
    <NavigationHeaderNav />
    <slot></slot>
    <AppFooter />
  </div>
  <div v-else class="layout-wrapper">
    <AppSidebar />
    <div class="app-view-content">
      <NavigationHeaderNav />
      <slot></slot>
      <AppFooter />
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
}
</style>
