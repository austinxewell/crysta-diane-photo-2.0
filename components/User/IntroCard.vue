<template>
  <div class="intro-card-wrapper">
    <div>
      <section class="text-card-wrapper">
        <div class="text-card-content">
          <h4>{{ profileData.intro }}</h4>
          <p>{{ profileData.aboutMe }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const profileData = useProfileInfo();
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
  width: 90%;
  text-align: end;
}

.text-card-wrapper p {
  text-align: center;
  margin-left: auto;
  width: 80%;
}

h4 {
  padding-right: 32px;
  font-size: 60px;
  font-family: 'Nothing You Could Do', cursive;
}
</style>
