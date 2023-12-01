<template>
  <div class="app-wrapper">
    <div class="login-card">
      <CommonMainLogo class="logo" />
      <form class="form" @submit.prevent="login">
        <h2 class="form_title">Sign In As Admin</h2>
        <label class="form_label">
          <p>Username</p>
          <input class="form_input" type="text" />
        </label>
        <label class="form_label">
          <p>Password</p>
          <input class="form_input" id="form_input--password" type="password" />
          <span v-if="showPassword" class="material-icons-outlined" @click="togglePasswordView">
            visibility_off
          </span>
          <span v-else class="material-icons-outlined" @click="togglePasswordView"> visibility </span>
        </label>
        <button class="form_btn">Sign In</button>
      </form>
      <button class="form_btn form_btn--forgot-password">Forgot Password</button>
    </div>
  </div>
</template>

<script setup>
const isLoggedIn = useIsLoggedIn();
const showPassword = ref(false);

function togglePasswordView() {
  showPassword.value = !showPassword.value;
  if (showPassword.value) {
    document.getElementById('form_input--password').type = 'text';
  } else {
    document.getElementById('form_input--password').type = 'password';
  }
}

definePageMeta({
  layout: 'plain'
});

function login() {
  isLoggedIn.value = true;
  useRouter().push('/admin/');
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100vh;

  display: flex;

  background-color: $gray-light;
  background: linear-gradient(to bottom, $gray-light 40%, $gray-dark 100%);

  .login-card {
    width: 50vh;
    height: fit-content;

    margin: auto;
    padding: 32px;

    background-color: $primary;
    border: solid 1px $black-main;
    border-radius: 15px;
    box-shadow: 12px 12px 2px 1px rgba(78, 71, 47, 0.1);

    .logo {
      margin: auto;
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 10px;

      padding-top: 32px;

      &_label {
        position: relative;
      }

      &_input {
        width: 100%;

        padding: 4px;
        border-radius: 5px;
      }

      &_btn {
        color: $white-main;
        background-color: $black-main;

        padding: 4px;
        margin-top: 16px;

        border-radius: 5px;
        box-shadow: 5px 5px 2px 1px rgba(78, 71, 47, 0.1);

        &:active {
          transform: translate(2px, 2px);
          box-shadow: 3px 3px 2px 1px rgba(78, 71, 47, 0.4);
        }

        &--forgot-password {
          width: 100%;

          color: $black-main;
          background-color: $white-main;
        }
      }

      .material-icons-outlined {
        position: absolute;
        right: 8px;
        bottom: 4px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
