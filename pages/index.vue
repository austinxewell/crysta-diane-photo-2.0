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
  background-color: $gray-light;
}
.review-card-content {
  margin: auto;
  // width: 100%;
  width: 80%;
}
</style>
