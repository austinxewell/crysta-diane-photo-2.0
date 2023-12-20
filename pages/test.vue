<template>
  <div>
    <pre>{{ test }}</pre>
  </div>
</template>

<script setup>
const test = ref();

onMounted(async () => {
  const { result } = await $fetch('/api/query?col=pages');

  test.value = result;
});
</script>

<style lang="scss" scoped></style>
