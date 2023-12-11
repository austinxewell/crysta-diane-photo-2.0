<template>
  <div class="service-content" :class="{ '--fixed': openContactForm }">
    <h3>Services</h3>
    <div class="card-wrapper">
      <CommonServiceCard
        v-for="service in serviceData"
        :key="service.id"
        :data="service"
        @toggle-contact="toggleContact"
      />
    </div>
    <ModalContactForm v-if="openContactForm" @toggle-contact="toggleContact" />
  </div>
</template>

<script setup>
useHead({
  title: 'Services'
});

const serviceData = useServiceInfo();
const openContactForm = ref(false);

function toggleContact() {
  openContactForm.value = !openContactForm.value;
}
</script>

<style lang="scss" scoped>
.service-content {
  padding: 32px;
  background: linear-gradient(to bottom, $gray-light 40%, $gray-dark 100%);

  &.--fixed {
    position: fixed;
    z-index: 2;
  }

  h3 {
    display: flex;

    padding-bottom: 16px;
    padding-left: 8%;

    font-size: 64px;
    font-weight: 800;
    font-family: 'Nothing You Could Do', cursive;

    border-bottom: solid 2px $black-main;
  }

  .card-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;

    margin-top: 32px;
  }
}
</style>
