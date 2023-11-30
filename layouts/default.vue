<template>
  <div v-if="!isAdmin">
    <NavigationHeaderNav />
    <div class="page-content">
      <slot></slot>
      <AppFooter />
    </div>
  </div>
  <div v-else class="layout-wrapper">
    <AppSidebar />
    <div class="app-view-content">
      <NavigationHeaderNav />
      <div class="page-content">
        <slot></slot>
        <AppFooter />
      </div>
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

.page-content {
  padding-top: 103px;
}
</style>
