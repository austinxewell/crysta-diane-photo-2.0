<template>
  <div>
    <footer class="footer-wrapper">
      <div class="content-wrapper">
        <section class="social-links-wrapper">
          <h3>Contact:</h3>
          <ul>
            <li>Email: <a href="mailto:crystadianephotography@gmail.com">crystadianephotography@gmail.com</a></li>
            <li class="social-media-icon-wrapper">
              <a href="https://www.facebook.com/crystadianephotography" target="_blank">
                <img src="~/assets/images/facebook.png" alt="Facebook Icon" class="social-media-icon" />
              </a>
              <a href="https://www.instagram.com/crystadianephoto/" target="_blank">
                <img src="~/assets/images/instagram.png" alt="Instagram Icon" class="social-media-icon" />
              </a>
            </li>
          </ul>
        </section>
        <section class="logo-wrapper">
          <CommonMainLogo class="make-white" :isWhite="true" />
        </section>
        <section class="copy-right-wrapper">
          <ul>
            <li>&copy; crystadianephotography</li>
            <li>Created By: <a href="https://github.com/austinxewell" target="_blank">Austin Ewell</a></li>
          </ul>
        </section>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer-wrapper {
  background-color: $black-main;
  overflow: hidden;
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
