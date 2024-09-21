<template>
  <div v-if="!isLoggedIn">
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
import { onMounted, computed } from 'vue';
import { useLoginStore } from '~/stores/login';

const loginStore = useLoginStore();

// Make isLoggedIn reactive using computed
const isLoggedIn = computed(() => loginStore.isLoggedIn);

// Call the initialize action when the layout is mounted
onMounted(async () => {
  await loginStore.initialize(); // Ensures the token is validated when the layout is loaded
});
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
