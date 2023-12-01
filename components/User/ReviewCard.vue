<template>
  <div>
    <h3>&bull; Reviews &bull;</h3>
    <CarouselReviewSlide />
    <div class="leave-review-btn">
      <p>
        <span class="material-icons-outlined"> add </span>
        Leave Review
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
h3 {
  text-align: center;
  font-size: 36px;
  font-family: 'Nothing You Could Do', cursive;
  padding-bottom: 16px;
}
.leave-review-btn {
  display: flex;
  justify-content: flex-end;
}

p {
  display: flex;
  vertical-align: middle;
  background-color: $primary;
  padding: 6px;
  border: solid 1px $black-main;
  border-radius: 5px;
  box-shadow: 5px 5px 2px 1px rgba(78, 71, 47, 0.1);
}

p:hover {
  cursor: pointer;
}

p:active {
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 2px 1px rgba(78, 71, 47, 0.4);
}

.material-icons-outlined {
  color: green;
  padding-right: 2px;
}
</style>
