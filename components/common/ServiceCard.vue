<template>
  <div class="service-card">
    <img class="__img" :src="data.serviceImg" alt="" />
    <div class="__service-text">
      <div class="--top">
        <h3 class="__title">{{ data.serviceName }}</h3>
        <h4 class="__price">
          Price: $<span>{{ data.priceRange[0] }}</span>
          <span v-if="data.priceRange.length > 1"> - ${{ data.priceRange[data.priceRange.length - 1] }}</span>
        </h4>
        <ul class="__list">
          <li v-if="data.hasMultiplePackages">&bull; Multiple Packages Available</li>
          <li class="__list-item" v-for="detail in data.details" :key="detail.id">&bull; {{ detail }}</li>
        </ul>
      </div>
      <div class="--bottom">
        <div class="__btn-wrapper">
          <NuxtLink v-if="data.isServiceDisplay" class="__btn --details" :to="`services/${data.id}`"
            >More Details</NuxtLink
          >
          <NuxtLink class="__btn --gallery" to="/gallery">View Gallery</NuxtLink>
        </div>
        <NuxtLink class="__btn --inquire" to="/contact">
          INQUIRE NOW
          <span class="material-icons-outlined"> arrow_right_alt </span>
        </NuxtLink>
      </div>
    </div>
    <CommonMultiPackageIcon v-if="data.hasMultiplePackages" class="__multi-icon" />
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.service-card {
  width: 60%;
  max-width: 900px;

  display: flex;
  justify-content: center;
  position: relative;

  padding: 32px;

  background-color: $primary;
  border: double 4px $black-main;

  .__img {
    max-width: 50%;
    border: solid 1px $black-main;
  }

  .__service-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 32px;
    .__title {
      font-size: 38px;
    }

    .__price {
      font-size: 28px;
      padding-left: 32px;
    }

    .__list {
      padding-top: 16px;
      font-size: 20px;
    }

    .__btn-wrapper {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      padding-bottom: 8px;
      padding-top: 8px;
    }

    .--gallery {
      font-family: 'Nothing You Could Do', cursive;
      font-size: 20px;
    }

    .--details {
      padding-right: 16px;
    }

    .--gallery:hover,
    .--details:hover {
      font-style: italic;
    }

    .__btn {
      display: flex;

      &.--inquire {
        width: fit-content;

        margin: auto;
        padding: 12px;

        color: white;
        background-color: $black-main;
        border: solid 2px $black-main;
        border-radius: 12px;

        .material-icons-outlined {
          padding-left: 8px;
        }
      }
    }
  }

  .__multi-icon {
    position: absolute;
    top: -52px;
    right: -12px;
    z-index: 1;
  }
}
</style>
