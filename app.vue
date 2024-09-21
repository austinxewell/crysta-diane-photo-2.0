<template>
  <div class="app-wrapper">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useLoginStore } from '~/stores/login';
const store = useLoginStore();
const { isLoggedIn } = store;

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Crysta Diane Photography` : 'Crysta Diane Photography';
  },
  // TODO-Correct Meta Data with accurate information
  meta: [
    { name: 'description', content: 'This will be Description' },
    { property: 'og:description', content: 'This will be OG Description' },
    {
      property: 'og:image',
      content:
        'https://images.squarespace-cdn.com/content/v1/53adb9cbe4b05e0d792c6c88/1550648026001-4ZBCU78RRK15T8D4D45K/Jingna-Zhang-%E5%BC%A0%E6%99%B6%E5%A8%9C--Singaporean-Chinese-Photographer-Self-Portrait-2018-2.jpg?format=2500w'
    },
    { name: 'twitter:card', content: `summary_large_image` }
  ]
});
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
}
</style>
