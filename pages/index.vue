<template>
  <div class="dashboard-content">
    <CarouselAutoSlide />
    <div>
      <div class="intro-wrapper">
        <div class="left-side">
          <UserIntroCard />
          <section class="review-pre-text">
            <h4>Reviews are so Important to me!</h4>
            <p>Please take a second to read or leave me a review!</p>
            <button>&bull; Leave a Review &bull;</button>
          </section>
        </div>
        <div class="divider"></div>
        <div class="right-side">
          <CommonFullAvi />
          <NuxtLink to="/gallery">Check out some of my work!</NuxtLink>
        </div>
      </div>
      <UserReviewCard class="review-card-content" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.dashboard-content {
  padding-top: 103px;
  background: $gray-light;
  background: linear-gradient(to bottom, $gray-light 40%, $gray-dark 100%);
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
  position: relative;
}

.right-side {
  padding-left: 32px;
}

.divider {
  width: 1px;
  border: solid 1px $black-main;
  border-radius: 5px;
  background-color: $black-main;
}

.review-pre-text {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 16px;
  right: 32px;
}

.review-pre-text h4 {
  text-align: center;
  font-size: 24px;
  font-weight: 800;
}
</style>
