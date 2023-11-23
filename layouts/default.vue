<template>
  <div class="app-wrapper">
    <TheSidebar />
    <div>
      <TheHeader />
      <slot></slot>
      <TheFooter />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.app-wrapper {
  display: flex;
}
</style>
