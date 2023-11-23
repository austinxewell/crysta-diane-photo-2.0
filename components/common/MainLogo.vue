<template>
  <div class="main-logo-wrapper">
    <p class="name">CRYSTADIANE</p>
    <div class="right-bottom-border"></div>
    <div class="left-bottom-border"></div>
    <p class="profession">photography</p>
  </div>
</template>

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
</style>
