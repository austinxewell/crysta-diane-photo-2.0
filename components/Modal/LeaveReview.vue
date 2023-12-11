<template>
  <div class="modal-background">
    <div class="modal">
      <div class="__card">
        <h3>Please Leave a Review:</h3>
        <form class="__form">
          <p v-if="isRatingErr" class="--error">* Please Select a Rating</p>
          <span
            v-for="(icon, index) in 5"
            @mouseover="setRatingIndex(index)"
            @mouseleave="setRatingIndex('')"
            @click="setRating(index)"
            class="material-icons-outlined --rating"
            :class="{ '--gold': index < ratingIndex || index < rating }"
          >
            star
          </span>
          <p v-if="!rating">Select a Star Rating</p>
          <p v-else>You Gave a {{ rating }} Star Review!</p>
          <div class="__thank-you-text">
            <p v-if="rating && rating < 4">
              Thank you for your rating! Please leave a comment on how I can make the experience more enjoyable.
            </p>
            <p v-if="rating && rating > 3">
              Thank you for your rating! Please leave a comment on why you had a great experience.
            </p>
          </div>
          <textarea
            class="__comment"
            :class="{ '--error': isCommentErr }"
            v-model="ratingText"
            rows="5"
            :placeholder="commentPlaceholder"
          ></textarea>
        </form>
        <button class="__btn" @click="submitForm">Submit</button>
      </div>
      <span class="material-icons-outlined --close" @click="emit('toggle-review')"> close </span>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggle-contact']);

const ratingIndex = ref('');
const rating = ref('');
const isRatingErr = ref(false);

const ratingText = ref('');
const commentPlaceholder = ref('Please Leave a Comment on Your Experience');
const isCommentErr = ref(false);

function setRatingIndex(i) {
  ratingIndex.value = i;
}

function setRating(i) {
  isRatingErr.value = false;
  rating.value = i + 1;
}

function validateForm(form) {
  var isValidated = true;

  if (form.rating === '') {
    isRatingErr.value = true;
    isValidated = false;
  }
  if (form.ratingText.length < 6) {
    ratingText.value = '';
    isCommentErr.value = true;
    commentPlaceholder.value = '* Please Leave a Valid Comment';
    isValidated = false;
  }
  return isValidated;
}

function submitForm() {
  var form = {};
  form.rating = rating.value;
  form.ratingText = ratingText.value;

  if (validateForm(form)) {
    console.log('submit form: ', form);
  }
}
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

    .__card {
      width: 100%;

      padding: 32px;
      margin: auto;
      text-align: center;

      background-color: $primary;

      .--rating {
        padding: 4px;

        &:hover {
          color: #9d7a06;
          text-shadow: 1px 2px 2px rgba(8, 8, 8, 1);
          cursor: pointer;
        }
      }

      .--gold {
        color: #9d7a06;
        text-shadow: 1px 2px 2px rgba(8, 8, 8, 1);
      }

      .__btn {
        width: 100%;

        margin-top: 16px;
        padding: 8px;

        background: $black-main;
        color: $white-main;
        font-size: 20px;
        border-radius: 8px;
        box-shadow: 5px 5px 2px 1px rgba(78, 71, 47, 0.1);

        &:active {
          transform: translate(2px, 2px);
          box-shadow: 3px 3px 2px 1px rgba(78, 71, 47, 0.4);
        }
      }

      .__form .--error {
        color: red;
      }
      .__form .__comment {
        width: 100%;

        padding: 8px;
        text-align: center;

        color: black;
        border: solid 2px $black-main;
        border-radius: 5px;

        &.--error::placeholder {
          color: red;
        }
      }

      .__form .__thank-you-text {
        padding: 16px 0 16px 0;
      }
    }

    .--close {
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
