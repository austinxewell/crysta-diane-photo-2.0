<template>
  <div class="sidebar-wrapper">
    <NavigationSidebarExpanded v-if="isExpanded" class="sidebar-wrapper" />
    <NavigationSidebarCollapsed v-else class="sidebar-wrapper" />
  </div>
</template>

<script setup>
const isExpanded = useNavigationToggle();
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  height: 100%;
}
</style>
