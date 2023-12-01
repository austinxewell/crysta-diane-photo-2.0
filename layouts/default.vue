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
  display: flex;
  flex: 1 1 0;
}

.page-content {
  width: 100%;
  padding-top: 103px;
  overflow: auto;
}
</style>
