<template>
  <div class="review-card-wrapper">
    <div class="review-card-container">
      <h4>&bull; Reviews &bull;</h4>
      <div class="review-card-content">
        <section class="left-side-content">
          <div class="review-names-container">
            <h5>&bull; Select Review &bull;</h5>
            <ul class="review-names-list">
              <li
                v-for="reviewPerson in dummyData"
                :key="reviewPerson.id"
                class="review-name"
                :class="{ selected: reviewPerson === selectedReview }"
                @click="setReview(reviewPerson)"
              >
                {{ reviewPerson.fullName }}
              </li>
            </ul>
          </div>
          <div class="review-text-container">
            <h5>&bull; Review &bull;</h5>
            <p>{{ selectedReview.review }}</p>
          </div>
        </section>
        <img :src="selectedReview.src" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
const dummyData = ref([
  {
    fullName: 'Austin Ewell',
    src: 'https://pbs.twimg.com/media/EfOgqk6XoAEbSK0.jpg:large',
    review:
      'Austin is the best dad ever. He absolutely never plays jokes or makes fun of anyone in his family. He is a very calm person who never gets mad and loves to cook, clean, and sleep all day. He basically never wants to do anything other than sleep all day, every day'
  },
  {
    fullName: 'Willard Mendez',
    src: 'https://www.wholesalenurseryco.com/cdn/shop/files/34976__61987_upop_1_1.webp?v=1698252616&width=416',
    review: 'Willow, so much to ask. Is she a duck or a tree? One may never know.'
  },
  {
    fullName: 'Myla Shithead',
    src: 'https://cdn2.momjunction.com/wp-content/uploads/2021/12/Simple-And-Creative-Drawing-Ideas-For-Teenagers-624x702.jpg',
    review:
      'Its Shi-THHH-eeeed. Dont get your panties in a bunch. You know you got spoiled yesterday and those cool new action figures are the dopest dope. Like, so dope my sista.'
  },
  {
    fullName: 'Sailor Stomps-a-lot',
    src: 'https://media.istockphoto.com/id/1352888384/photo/cute-little-red-haired-boy-posing-at-the-camera.jpg?s=612x612&w=0&k=20&c=TDs__g_KYXtH7Egg1oYdocMraM-KWx_0zRG1hH1tu1A=',
    review: 'I cry, I poop, I scream, but mostly I STOMP!'
  }
]);

const selectedReview = ref(dummyData.value[0]);

function setReview(review) {
  selectedReview.value = review;
}
</script>

<style lang="scss" scoped>
.review-card-wrapper {
  background-color: $black-main;
  padding-top: 8px;
  padding-bottom: 16px;
  border-bottom: solid 1px $gray-light;
}

.review-card-container {
  width: 65%;
}

h4 {
  font-size: 40px;
  text-align: center;
  padding-bottom: 8px;
  font-family: 'Nothing You Could Do', cursive;
  color: $white-main;
}

h5 {
  text-align: center;
  font-size: 24px;
  font-family: 'Nothing You Could Do', cursive;
}

.review-card-content {
  display: flex;
  justify-content: space-around;
}

img {
  width: 50%;
  border-radius: 5px;
}

.left-side-content {
  width: 40%;
}

.review-names-container {
  margin-top: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  padding: 8px 0 8px 0;
  max-height: 240px;
  overflow: auto;
  background-color: $primary;
}

.review-names-list {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  gap: 16px;
  font-size: 18px;
}

.review-name {
  padding-right: 16px;
  padding-left: 16px;
}

.review-name:hover {
  cursor: pointer;
  background: white;
  width: 100%;
}

.review-text {
  text-align: center;
  padding: 24px 8px 0 8px;
}

.selected {
  background-color: white;
}

.review-text-container {
  border-radius: 8px;
  padding: 8px;
  background-color: $primary;
}
</style>
