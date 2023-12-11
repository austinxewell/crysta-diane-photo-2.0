<template>
  <div class="contact-form-wrapper">
    <CommonMainLogo class="logo" />
    <form class="form">
      <p class="__text">Required Fields are Indicated With a *</p>
      <input
        class="__input --name"
        :class="{ '--error': fullNameErr }"
        type="text"
        v-model="fullName"
        :placeholder="fullNamePlaceholder"
      />
      <input
        class="__input --email"
        :class="{ '--error': emailErr }"
        type="email"
        v-model="email"
        :placeholder="emailPlaceholder"
      />
      <input
        class="__input --tel"
        :class="{ '--error': phoneNumberErr }"
        type="tel"
        v-model="phoneNumber"
        :placeholder="phoneNumberPlaceholder"
      />
      <input class="__input --text" type="text" v-model="location" placeholder="Desired Location" />
      <select class="--service" v-model="service">
        <option class="--option" value="" hidden>Select Service:</option>
        <option class="--option" v-for="service in services" :key="service.id">{{ service.name }}</option>
      </select>
      <textarea
        class="__input"
        :class="{ '--error': messageErr }"
        v-model="message"
        rows="5"
        :placeholder="messagePlaceholder"
      ></textarea>
    </form>
    <button class="__btn" @click="submitForm">Submit</button>
  </div>
</template>

<script setup>
const navData = useNavigationItems();
const services = navData.value[2].children;

const fullName = ref('');
const email = ref('');
const phoneNumber = ref('');
const location = ref('');
const service = ref('');
const message = ref('');

const fullNamePlaceholder = ref('* Name:');
const emailPlaceholder = ref('* Email:');
const phoneNumberPlaceholder = ref('* Phone Number:');
const messagePlaceholder = ref('* Please Leave a Detailed Message...');

const fullNameErr = ref(false);
const emailErr = ref(false);
const phoneNumberErr = ref(false);
const messageErr = ref(false);

function submitForm() {
  var form = {};
  form.fullName = fullName.value;
  form.email = email.value;
  form.phoneNumber = phoneNumber.value;
  form.location = location.value;
  form.service = service.value;
  form.message = message.value;

  if (validateForm(form)) {
    console.log('submit form');
  }
}

function validateForm(form) {
  var isFormValid = true;
  var validName = /^[a-zA-Z]*$/;
  var validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var validPhoneNumber = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

  if (form.fullName.length < 3 || validName.test(form.fullName) === false) {
    fullNameErr.value = true;
    fullName.value = '';
    fullNamePlaceholder.value = '* Please Enter a Valid Name';
    isFormValid = false;
  }
  if (validEmail.test(form.email) === false) {
    emailErr.value = true;
    email.value = '';
    emailPlaceholder.value = '* Please Enter a Valid Email';
    isFormValid = false;
  }
  if (validPhoneNumber.test(form.phoneNumber) === false) {
    phoneNumberErr.value = true;
    phoneNumber.value = '';
    phoneNumberPlaceholder.value = '* Please Enter a Valid Phone Number';
    isFormValid = false;
  }
  if (form.message.length < 12) {
    messageErr.value = true;
    message.value = '';
    messagePlaceholder.value = '* Detailed Message is Required';
    isFormValid = false;
  }
  return isFormValid;
}
</script>

<style lang="scss" scoped>
.contact-form-wrapper {
  width: 70%;
  padding: 32px;

  background-color: $primary;
  border: double 4px $black-main;

  .logo {
    margin: auto;
  }

  .__btn {
    width: 100%;

    margin-top: 16px;
    padding: 16px;

    background: $black-main;
    color: $white-main;
    font-size: 20px;
    border-radius: 8px;
    box-shadow: 5px 5px 2px 1px rgba(78, 71, 47, 0.1);

    &:active {
      transform: translate(2px, 2px);
      box-shadow: 3px 3px 2px 1px rgba(78, 71, 47, 0.4);
    }

    &:hover {
      cursor: pointer;
    }
  }

  .form {
    display: flex;
    flex-direction: column;

    padding-top: 32px;
    gap: 16px;

    font-size: 18px;

    .__text {
      text-align: center;
      padding: 16px;
    }

    .__input {
      padding: 4px;
      text-align: center;
      border-radius: 8px;

      &::placeholder {
        color: $black-main;
        text-align: center;
      }
    }

    .--error::placeholder {
      color: red;
    }

    .--service {
      padding: 4px;
      text-align: center;
      border-radius: 8px;

      .--option {
        text-align: center;
        font-weight: bolder;
      }
    }
  }
}
</style>
