<template>
  <div>admin {{ $route.params.name }} service page</div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
});
</script>

<style lang="scss" scoped></style>
