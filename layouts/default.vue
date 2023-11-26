<template>
  <div class="layout-wrapper">
    <TheSidebar />
    <div class="app-view-content">
      <slot></slot>
      <TheFooter />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
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
