<template>
  <div class="intro-card-wrapper">
    <div>
      <section class="text-card-wrapper">
        <div class="text-card-content">
          <h4>{{ clientWebsiteInfo.website_greeting }}</h4>
          <p>{{ clientWebsiteInfo.website_about }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
defineProps({
  clientWebsiteInfo: {
    type: Object,
    require: true
  }
});
</script>

<style lang="scss" scoped>
.intro-card-wrapper {
  position: relative;
}
.text-card-wrapper {
  display: flex;
  justify-content: flex-end;
}

.text-card-content {
  width: 80%;
  text-align: end;
}

.text-card-wrapper p {
  text-align: center;
  margin-left: auto;
}

h4 {
  padding-right: 32px;
  font-size: 60px;
  font-family: 'Nothing You Could Do', cursive;
}
</style>
