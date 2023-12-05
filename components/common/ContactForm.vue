<template>
  <div class="contact-form-wrapper">
    <CommonMainLogo class="logo" />
    <form class="form">
      <input class="__input --name" type="text" placeholder="Name:" />
      <input class="__input --email" type="email" placeholder="Email:" />
      <input class="__input --tel" type="tel" placeholder="Phone Number:" />
      <input class="__input --text" type="text" placeholder="Desired Location" />
      <select class="--service" name="Service:" id="">
        <option value="" hidden>Select Service:</option>
        <option value="weddings">Weddings</option>
        <option value="maternity">Maternity</option>
        <option value="head shots">Head Shots</option>
      </select>
      <textarea class="__input" name="" id="" rows="5" placeholder="Please Leave a Detailed Message..."></textarea>
    </form>
    <button class="__btn" @click="submitForm">Submit</button>
  </div>
</template>

<script setup>
function submitForm() {
  console.log('validate form');
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

    .__input {
      padding: 4px;
      text-align: center;
      border-radius: 8px;

      &::placeholder {
        color: $black-main;
        text-align: center;
      }
    }

    select {
      padding: 4px;
      text-align: center;
      border-radius: 8px;
    }

    option {
      text-align: center;
      font-weight: bolder;
    }
  }
}
</style>
