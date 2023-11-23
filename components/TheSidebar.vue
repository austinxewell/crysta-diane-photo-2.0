<template>
  <div class="sidebar-wrapper">
    <SidebarDesktopExpanded v-if="isExpanded" class="sidebar-wrapper" />
    <SidebarDesktopCollapsed v-else class="sidebar-wrapper" />
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
