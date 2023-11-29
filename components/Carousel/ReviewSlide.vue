<template>
  <div>
    <h3>&bull; Reviews &bull;</h3>
    <carousel :breakpoints="breakpoints" :wrap-around="true" :transition="600">
      <slide v-for="slide in dummyData" :key="slide">
        <div class="review-node-wrapper">
          <div class="review-node-content">
            <div class="node-content-wrapper">
              <p class="review-text">{{ slide.review }}</p>
              <p class="review-signature">- {{ slide.reviewedBy }}</p>
              <p class="review-rating">
                <span
                  v-for="(rating, index) in 5"
                  class="material-icons-outlined"
                  :class="{ gold: index < slide.rating }"
                >
                  star
                </span>
              </p>
            </div>
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
      "Hello, it's me. I've been wondering if after all these years you'd like to meet to go over everything.",
    rating: 4
  },
  {
    id: 1,
    reviewedBy: 'Willow Mendez',
    review: 'I fart on my boyfriend',
    rating: 5
  },
  {
    id: 1,
    reviewedBy: 'Myla',
    review: 'I play make believe with flowers that they are food... except i really eat them',
    rating: 5
  },
  {
    id: 1,
    reviewedBy: 'Sailor',
    review: 'Ouch. caca. akka. sorry. pweese',
    rating: 1
  },
  {
    id: 1,
    reviewedBy: 'Austin Sir-Mix-Alot',
    review: 'I like big butts and I can not lie',
    rating: 2
  },
  {
    id: 1,
    reviewedBy: 'Willard',
    review: 'Is she a duck or a tree, we may never know.',
    rating: 3
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
  display: flex;
  align-items: center;
  height: 90%;
  background-color: $primary;
  padding: 16px;
  border-radius: 10px;
  overflow: auto;
  border: solid 1px $black-light;
  box-shadow: 12px 12px 2px 1px rgba(78, 71, 47, 0.1);
}

h3 {
  text-align: center;
  font-size: 36px;
  font-family: 'Nothing You Could Do', cursive;
}

.node-content-wrapper {
  width: 100%;
}

.review-signature {
  padding-top: 8px;
}

.gold {
  color: #9d7a06;
  text-shadow: 1px 2px 2px rgba(8, 8, 8, 1);
}

.review-rating {
  padding-top: 8px;
}
</style>
