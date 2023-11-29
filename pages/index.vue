<template>
  <div class="dashboard-content">
    <CarouselAutoSlide />
    <div>
      <UserIntroCard2 />
      <UserReviewCard2 class="review-card-content" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.dashboard-content {
  padding-top: 103px;
  background: $gray-light;
  background: linear-gradient(to bottom, $gray-light 50%, $gray-dark 100%);
}
.review-card-content {
  margin: auto;
  // use 80% for for UserReviewCard2
  // width: 100%;
  width: 80%;
}
</style>
