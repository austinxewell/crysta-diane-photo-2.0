<template>
  <div class="corner-badge">
    <div class="__triangle"></div>
    <p class="__text">Packages Available</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.corner-badge {
  position: relative;

  .__triangle {
    width: 0;
    height: 0;
    border-top: 80px solid transparent;
    border-bottom: 80px solid transparent;
    border-left: 80px solid $black-main;

    transform: rotate(-45deg);
  }

  .__text {
    position: absolute;
    top: 70px;
    right: 14px;

    transform: rotate(45deg);

    color: $white-main;
  }
}
</style>
