<template>
  <div class="dashboard-content" :class="{ '--fixed': isReviewOpen }">
    <CarouselAutoSlide />
    <div>
      <div class="intro-wrapper">
        <div class="left-side">
          <UserIntroCard />
          <section class="review-pre-text">
            <h4>{{ profileData.reviewHeader }}</h4>
            <p>{{ profileData.reviewText }}</p>
            <button @click="toggleReview">&bull; Leave a Review &bull;</button>
          </section>
        </div>
        <div class="divider"></div>
        <div class="right-side">
          <CommonFullAvi />
        </div>
      </div>
      <UserReviewCard class="review-card-content" @toggle-review="toggleReview" />
      <ModalLeaveReview v-if="isReviewOpen" @toggle-review="toggleReview" />
    </div>
  </div>
</template>

<script setup>
const profileData = useProfileInfo();
const isReviewOpen = ref(false);

function toggleReview() {
  isReviewOpen.value = !isReviewOpen.value;
}
</script>

<style lang="scss" scoped>
.dashboard-content {
  background: linear-gradient(to bottom, $gray-light 40%, $gray-dark 100%);

  &.--fixed {
    position: fixed;
    z-index: 2;
  }
}
.review-card-content {
  margin: auto;
  width: 80%;
  padding-top: 32px;
  padding-bottom: 16px;
}

.intro-wrapper {
  width: 100%;
  display: flex;
  padding-top: 32px;
}

.left-side {
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 32px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-side {
  padding-left: 32px;
  position: relative;
}

.divider {
  width: 1px;
  border: solid 1px $black-main;
  border-radius: 5px;
  background-color: $black-main;
}

.review-pre-text {
  padding-top: 40px;
  text-align: end;
  width: 80%;
  margin-left: auto;
}

.review-pre-text h4 {
  padding-right: 32px;
  font-size: 24px;
  font-weight: 800;
}
.review-pre-text button {
  padding-top: 16px;
  margin-right: 25%;
}

.review-pre-text button:hover {
  border-bottom: solid 1px $black-main;
}
</style>
