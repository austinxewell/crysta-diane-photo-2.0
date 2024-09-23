<template>
  <div class="contact-content">
    <h3>Contact</h3>
    <div class="contact-info">
      <ul class="__list">
        <li class="__email">
          Email:
          <a :href="clientWebsiteEmail">{{ clientWebsiteEmail }}</a>
        </li>
        <li class="__text">Text: {{ clientWebsitePhoneNumber }}</li>
        <li class="__socials">
          <a
            v-for="socialLink in clientSocialLinks"
            :key="socialLink.id"
            :href="socialLink.contact_information_url"
            target="_blank"
          >
            <img
              :src="findIcon(socialLink.contact_information_name)"
              :alt="`${socialLink.contact_information_name} Icon`"
              class="__social-media-icon"
            />
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

import { ref, reactive, onMounted } from 'vue';
import { useContactInfoStore } from '~/stores/contactInformation';

const contactInfoStore = useContactInfoStore();
const clientWebsiteEmail = ref('');
const clientWebsitePhoneNumber = ref('');
const clientSocialLinks = reactive([]);

onMounted(async () => {
  try {
    await contactInfoStore.fetchWebsiteEmail();
    clientWebsiteEmail.value = contactInfoStore.websiteEmail?.website_email_address;
  } catch (err) {
    console.error('Error Fetching Website Email:', err);
  }

  try {
    await contactInfoStore.fetchWebsitePhoneNumber();
    clientWebsitePhoneNumber.value = contactInfoStore.websitePhoneNumber?.website_phone_number;
  } catch (err) {
    console.error('Error Fetching Website Email:', err);
  }

  try {
    await contactInfoStore.fetchSocialLinks();
    clientSocialLinks.push(...contactInfoStore.socialLinks);
  } catch (err) {
    console.error('Error Fetching Website Social Links:', err);
  }
});

function findIcon(iconName) {
  if (iconName.toLowerCase().includes('facebook')) {
    return new URL('~/assets/images/facebook.png', import.meta.url).href;
  } else if (iconName.toLowerCase().includes('instagram')) {
    return new URL('~/assets/images/instagram.png', import.meta.url).href;
  } else if (iconName.toLowerCase().includes('linkedin')) {
    return new URL('~/assets/images/linkedin.png', import.meta.url).href;
  } else if (iconName.toLowerCase().includes('snapchat')) {
    return new URL('~/assets/images/snapchat.png', import.meta.url).href;
  } else if (iconName.toLowerCase().includes('twitter') || iconName.toLowerCase() === 'x') {
    return new URL('~/assets/images/twitter.png', import.meta.url).href;
  } else if (iconName.toLowerCase().includes('youtube')) {
    return new URL('~/assets/images/youtube.png', import.meta.url).href;
  } else return new URL('~/assets/images/social-media.png', import.meta.url).href;
}
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
