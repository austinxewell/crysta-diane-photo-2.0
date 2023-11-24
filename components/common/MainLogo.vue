<template>
  <div :class="[isWhite ? 'main-logo-wrapper white' : 'main-logo-wrapper']" style="">
    <p class="name">CRYSTADIANE</p>
    <p :class="[isWhite ? 'profession white-font' : 'profession']">photography</p>
    <div :class="[isWhite ? 'right-bottom-border white-partial-border' : 'right-bottom-border']"></div>
    <div :class="[isWhite ? 'left-bottom-border white-partial-border' : 'left-bottom-border']"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  isWhite: {
    type: Boolean,
    required: false
  },
  isLarge: {
    type: Boolean,
    require: false
  }
});
</script>

<style lang="scss" scoped>
.main-logo-wrapper {
  position: relative;
  padding: 8px 16px 8px 16px;
  border-top: solid 2px $black-light;
  border-right: solid 2px $black-light;
  border-left: solid 2px $black-light;
  text-align: center;
  width: fit-content;
  background-color: transparent;
}

.right-bottom-border {
  position: absolute;
  bottom: 0px;
  right: 0;
  border-bottom: solid 2px $black-light;
  width: 40px;
}

.left-bottom-border {
  position: absolute;
  bottom: 0px;
  left: 0;
  border-bottom: solid 2px $black-light;
  width: 40px;
}

.name {
  font-family: 'Playfair Display', serif;
  font-size: 30px;
}

.profession {
  position: absolute;
  font-size: 36px;
  bottom: -24px;
  right: 50%;
  transform: translateX(50%);
  font-family: 'Cookie', cursive;
  color: $gray-dark;
  background-color: transparent;
}

.white-partial-border {
  border-bottom: solid 2px $white-main;
}

.white-font {
  color: $white-main;
}

.white {
  border-top: solid 2px $white-main;
  border-right: solid 2px $white-main;
  border-left: solid 2px $white-main;
  color: $white-main;
}
</style>
