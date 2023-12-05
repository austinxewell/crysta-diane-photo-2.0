<template>
  <div class="contact-content">
    <h3>Contact</h3>
    <div class="contact-info">
      <ul class="__list">
        <li class="__email">
          Email:
          <a href="mailto:crystadianephotography@gmail.com">crystadianephotography@gmail.com</a>
        </li>
        <li class="__text">Text: (801) 800-0771</li>
        <li class="__socials">
          <a href="https://www.facebook.com/crystadianephotography" target="_blank">
            <img src="~/assets/images/facebook.png" alt="Facebook Icon" class="__social-media-icon" />
          </a>
          <a href="https://www.instagram.com/crystadianephoto/" target="_blank">
            <img src="~/assets/images/instagram.png" alt="Instagram Icon" class="__social-media-icon" />
          </a>
        </li>
      </ul>
    </div>
    <CommonContactForm class="contact-form" />
  </div>
</template>

<script setup>
useHead({
  title: 'Contact'
});
</script>

<style lang="scss" scoped>
.contact-content {
  padding: 32px;
  background: linear-gradient(to bottom, $gray-light 40%, $gray-dark 100%);

  h3 {
    display: flex;

    padding-bottom: 16px;
    padding-left: 8%;

    font-size: 64px;
    font-weight: 800;
    font-family: 'Nothing You Could Do', cursive;

    border-bottom: solid 2px $black-main;
  }

  .contact-info {
    display: flex;
    justify-content: center;

    padding: 32px;

    text-align: center;
    .__list {
      font-size: 20px;

      .__email,
      .__text {
        padding-bottom: 8px;
      }

      .__socials {
        display: flex;
        justify-content: center;
        gap: 16px;

        .__social-media-icon {
          width: 36px;
        }
      }
    }
  }

  .contact-form {
    margin: auto;
  }
}
</style>
