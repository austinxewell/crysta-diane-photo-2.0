<template>
  <div class="app-wrapper">
    <div class="login-card">
      <CommonMainLogo class="__logo" />
      <form class="__form" @submit.prevent="login">
        <h2 class="__title">Sign Up As Admin</h2>
        <label class="__label">
          <p>Email</p>
          <input class="__input" type="email" v-model="userForm.email" />
        </label>
        <label class="__label">
          <p>Password</p>
          <input class="__input" id="form__input--password" type="password" v-model="userForm.password" />
          <span v-if="showPassword" class="material-icons-outlined" @click="togglePasswordView"> visibility </span>
          <span v-else class="material-icons-outlined" @click="togglePasswordView"> visibility_off </span>
        </label>
        <button class="__btn" @click.stop="process">Sign Up</button>
      </form>
      <NuxtLink class="__btn--to-home" to="/">Back to Home Page</NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Login'
});

definePageMeta({
  layout: 'plain'
});

const userForm = reactive({
  email: '',
  password: ''
});

const isLoggedIn = useIsLoggedIn();
const showPassword = ref(false);
const { errorBag, signUp } = useAuth();

function togglePasswordView() {
  showPassword.value = !showPassword.value;
  if (showPassword.value) {
    document.getElementById('form__input--password').type = 'text';
  } else {
    document.getElementById('form__input--password').type = 'password';
  }
}

function process() {
  signUp(userForm);
  // useRouter().push('/admin/');
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100vh;

  display: flex;

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

    .__logo {
      margin: auto;
    }

    .__form {
      display: flex;
      flex-direction: column;
      gap: 10px;

      padding-top: 32px;

      .__label {
        position: relative;

        .material-icons-outlined {
          position: absolute;
          right: 8px;
          bottom: 4px;

          &:hover {
            cursor: pointer;
          }
        }

        .__input {
          width: 100%;

          padding: 4px;
          border-radius: 5px;
        }
      }

      .__btn {
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
      }

      &:hover {
        cursor: pointer;
      }
    }

    .__btn--forgot-password {
      width: 100%;

      padding: 4px;
      margin-top: 16px;

      color: $black-main;
      background-color: $white-main;
      border: solid 1px $black-main;
      border-radius: 5px;
      box-shadow: 5px 5px 2px 1px rgba(78, 71, 47, 0.1);

      &:active {
        transform: translate(2px, 2px);
        box-shadow: 3px 3px 2px 1px rgba(78, 71, 47, 0.4);
      }
    }

    .__btn--to-home {
      display: flex;
      justify-content: center;
      width: 100%;

      padding: 4px;
      margin-top: 16px;

      color: $black-main;
      background-color: $white-main;
      border: solid 1px $black-main;
      border-radius: 5px;
      box-shadow: 5px 5px 2px 1px rgba(78, 71, 47, 0.1);

      &:active {
        transform: translate(2px, 2px);
        box-shadow: 3px 3px 2px 1px rgba(78, 71, 47, 0.4);
      }
    }
  }
}
</style>
