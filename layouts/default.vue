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
html .layout-wrapper {
  height: 100%;
  display: flex;
  overflow: hidden;
}
</style>
