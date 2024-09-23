<template>
  <div>
    <footer class="footer-wrapper">
      <div class="content-wrapper">
        <section class="social-links-wrapper">
          <h3>Contact</h3>
          <ul>
            <li>
              Email:
              <a :href="clientWebsiteEmail">{{ clientWebsiteEmail }}</a>
            </li>
            <li class="social-media-icon-wrapper">
              <a
                v-for="socialLink in clientSocialLinks"
                :key="socialLink.id"
                :href="socialLink.contact_information_url"
                target="_blank"
              >
                <img
                  :src="findIcon(socialLink.contact_information_name)"
                  :alt="`${socialLink.contact_information_name} Icon`"
                  class="social-media-icon"
                />
              </a>
              <!-- <a href="https://www.instagram.com/crystadianephoto/" target="_blank">
                <img src="~/assets/images/instagram.png" alt="Instagram Icon" class="social-media-icon" />
              </a> -->
            </li>
          </ul>
        </section>
        <section class="logo-wrapper">
          <CommonMainLogo class="make-white" :isWhite="true" />
        </section>
        <section class="copy-right-wrapper">
          <ul>
            <li>&copy; crystadianephotography</li>
            <li>
              Created By:
              <a href="https://github.com/austinxewell" target="_blank">Austin Ewell</a>
            </li>
            <li><NuxtLink to="/login">Admin Login</NuxtLink></li>
          </ul>
        </section>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useContactInfoStore } from '~/stores/contactInformation';

const contactInfoStore = useContactInfoStore();
const clientWebsiteEmail = ref('');
const clientSocialLinks = reactive([]);

onMounted(async () => {
  try {
    await contactInfoStore.fetchWebsiteEmail();
    clientWebsiteEmail.value = contactInfoStore.websiteEmail?.website_email_address;
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
.footer-wrapper {
  background-color: $black-main;
  overflow: hidden;
  padding-bottom: 32px;
  padding-top: 32px;
}

.content-wrapper {
  display: flex;
  width: 100%;
  color: white;
}

.social-links-wrapper,
.logo-wrapper,
.copy-right-wrapper {
  width: 33.33%;
  padding-bottom: 8px;
}
.social-links-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  padding-left: 16px;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 24px;
}

.copy-right-wrapper {
  text-align: end;
  padding-right: 16px;
  padding-top: 24px;
}

.social-media-icon-wrapper {
  display: flex;
  gap: 10px;
  width: 100%;
  padding-top: 4px;
}

.social-media-icon {
  width: 32px;
  height: auto;
}
</style>
