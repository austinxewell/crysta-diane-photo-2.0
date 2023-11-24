<template>
  <div class="layout-wrapper">
    <TheSidebar />
    <div>
      <TheHeader />
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

.minimized-footer-content {
  width: calc(100% - 42px);
}
</style>
