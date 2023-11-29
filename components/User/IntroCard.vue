<template>
  <div class="intro-card-wrapper">
    <div>
      <section class="text-card-wrapper">
        <div class="text-card-content">
          <h4>Hi, I'm Crysta!</h4>
          <p>
            I enjoy traveling, thrifting and good music. I am so happy that you are here and can not wait to get to
            know you! Please take a moment to check out a few of my reviews.
          </p>
        </div>
      </section>
    </div>
    <img
      src="https://www.shutterstock.com/image-photo/portrait-isolated-cutout-studio-full-600nw-2247820669.jpg"
      alt=""
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.intro-card-wrapper {
  position: relative;
}
.text-card-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: $gray-light;
  padding-bottom: 8px;
}

.text-card-content {
  width: 65%;
}

.text-card-wrapper p {
  text-align: center;
  margin: auto;
  width: 80%;
}

h4 {
  text-align: center;
  font-size: 60px;
  font-family: 'Nothing You Could Do', cursive;
}

img {
  margin-right: 20px;
  border-radius: 50%;
  width: 25%;
  height: auto;
  box-shadow: 10px 5px 5px $gray-dark;
  position: absolute;
  right: 20px;
  top: 8%;
}
</style>
