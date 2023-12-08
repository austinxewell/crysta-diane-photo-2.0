<template>
  <div class="modal-background">
    <div class="modal">
      <CommonContactForm class="--form" />
      <span class="material-icons-outlined" @click="emit('toggle-contact')"> close </span>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggle-contact']);
</script>

<style lang="scss" scoped>
.modal-background {
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.9);

  .modal {
    width: 60%;
    position: relative;

    .--form {
      width: 100%;
      margin: auto;
    }
    .material-icons-outlined {
      position: absolute;
      top: 16px;
      right: 16px;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
