<template>
  <div>
    <h3 class="text-center">&bull; Reviews &bull;</h3>
    <carousel :breakpoints="breakpoints" :wrap-around="true" :transition="600">
      <slide v-for="slide in dummyData" :key="slide">
        <div class="review-node-wrapper">
          <div class="review-node-content">
            <p>{{ slide.review }}</p>
            <p>- {{ slide.reviewedBy }}</p>
          </div>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
const dummyData = ref([
  {
    id: 1,
    reviewedBy: 'Austin Ewell',
    review:
      "Hello, it's me. I've been wondering if after all these years you'd like to meet to go over everything.Hello, it's me. I've been wondering if after all these years you'd like to meet to go over everything.Hello, it's me. I've been wondering if after all these years you'd like to meet to go over everything.Hello, it's me. I've been wondering if after all these years you'd like to meet to go over everything.Hello, it's me. I've been wondering if after all these years you'd like to meet to go over everything.Hello, it's me. I've been wondering if after all these years you'd like to meet to go over everything."
  },
  {
    id: 1,
    reviewedBy: 'Willow Mendez',
    review: 'I fart on my boyfriend'
  },
  {
    id: 1,
    reviewedBy: 'Myla',
    review: 'I play make believe with flowers that they are food... except i really eat them'
  },
  {
    id: 1,
    reviewedBy: 'Sailor',
    review: 'Ouch. caca. akka. sorry. pweese'
  },
  {
    id: 1,
    reviewedBy: 'Austin Sir-Mix-Alot',
    review: 'I like big butts and I can not lie'
  },
  {
    id: 1,
    reviewedBy: 'Willard',
    review: 'Is she a duck or a tree, we may never know.'
  }
]);
const breakpoints = {
  768: {
    itemsToShow: 1.5,
    snapAlign: 'center'
  },
  1024: {
    itemsToShow: 2,
    snapAlign: 'start'
  }
};
</script>

<style lang="scss" scoped>
.review-node-wrapper {
  width: 70%;
  height: 250px;
}

.review-node-content {
  height: 90%;
  background-color: $primary;
  padding: 16px;
  border-radius: 10px;
  overflow: auto;
  border: solid 1px $black-light;
  box-shadow: 12px 12px 2px 1px rgba(78, 71, 47, 0.1);
}
</style>
