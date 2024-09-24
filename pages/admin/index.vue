<template>
  <div class="admin-home-page-content">
    <div class="page-header">
      <h3 class="page-header__text">Admin - Home Page</h3>
      <button v-if="!isFormMatch" class="page-header__button" @click="submitForm">Save</button>
    </div>

    <section class="admin-content-container">
      <ul class="website-info-list">
        <!-- Website Greeting -->
        <li class="website-info-list__item">
          <button v-if="!editGreeting" @click="editGreeting = true" class="" aria-label="Edit">
            <span class="material-icons-outlined" aria-hidden="true">edit</span>
          </button>
          <button v-else @click="closeGreeting" class="" aria-label="Cancel">
            <span class="material-icons-outlined material-icons-outlined--cancel" aria-hidden="true">cancel</span>
          </button>
          <div class="text-container">
            <h4 class="text-container__header">Website Greeting:</h4>
            <p v-if="!editGreeting" @click="editGreeting = true" class="text-container__text">
              {{ clientWebsiteInfo.website_greeting }}
            </p>
            <input v-else class="text-container__input" type="text" v-model="greeting" />
          </div>
        </li>

        <!-- Website About -->
        <li class="website-info-list__item">
          <button v-if="!editAbout" @click="editAbout = true" class="" aria-label="Edit">
            <span class="material-icons-outlined" aria-hidden="true">edit</span>
          </button>
          <button v-else @click="closeAbout" class="" aria-label="Cancel">
            <span class="material-icons-outlined material-icons-outlined--cancel" aria-hidden="true">cancel</span>
          </button>
          <div class="text-container text-container--long">
            <h4 class="text-container__header text-container__header--long">Website About:</h4>
            <p v-if="!editAbout" @click="editAbout = true" class="text-container__text">
              {{ clientWebsiteInfo.website_about }}
            </p>
            <textarea v-else class="text-container__text-area" type="text" v-model="about" />
          </div>
        </li>

        <!-- Website Review Header -->
        <li class="website-info-list__item">
          <button v-if="!editReviewHeader" @click="editReviewHeader = true" class="" aria-label="Edit">
            <span class="material-icons-outlined" aria-hidden="true">edit</span>
          </button>
          <button v-else @click="closeReviewHeader" class="" aria-label="Cancel">
            <span class="material-icons-outlined material-icons-outlined--cancel" aria-hidden="true">cancel</span>
          </button>
          <div class="text-container">
            <h4 class="text-container__header">Website Review Header:</h4>
            <p v-if="!editReviewHeader" @click="editReviewHeader = true" class="text-container__text">
              {{ clientWebsiteInfo.website_review_header }}
            </p>
            <input v-else class="text-container__input" type="text" v-model="reviewHeader" />
          </div>
        </li>

        <!-- Website Review Text -->
        <li class="website-info-list__item">
          <button v-if="!editReviewText" @click="editReviewText = true" class="" aria-label="Edit">
            <span class="material-icons-outlined" aria-hidden="true">edit</span>
          </button>
          <button v-else @click="closeReviewText" class="" aria-label="Cancel">
            <span class="material-icons-outlined material-icons-outlined--cancel" aria-hidden="true">cancel</span>
          </button>
          <div class="text-container text-container--long">
            <h4 class="text-container__header text-container__header--long">Website Review Text:</h4>
            <p v-if="!editReviewText" @click="editReviewText = true" class="text-container__text">
              {{ clientWebsiteInfo.website_review_text }}
            </p>
            <textarea v-else class="text-container__text-area" type="text" v-model="reviewText" />
          </div>
        </li>

        <!-- Website Comment -->
        <li class="website-info-list__item">
          <button v-if="!editComment" @click="editComment = true" class="" aria-label="Edit">
            <span class="material-icons-outlined" aria-hidden="true">edit</span>
          </button>
          <button v-else @click="closeComment" class="" aria-label="Cancel">
            <span class="material-icons-outlined material-icons-outlined--cancel" aria-hidden="true">cancel</span>
          </button>
          <div class="text-container">
            <h4 class="text-container__header">Website Comment:</h4>
            <p v-if="!editComment" @click="editComment = true" class="text-container__text">
              {{ clientWebsiteInfo.website_comment }}
            </p>
            <input v-else class="text-container__input" type="text" v-model="comment" />
          </div>
        </li>

        <!-- Website Avatar -->
        <li class="website-info-list__item">
          <button v-if="!editAvatar" @click="editAvatar = true" class="" aria-label="Edit">
            <span class="material-icons-outlined" aria-hidden="true">edit</span>
          </button>
          <button v-else @click="closeAvatar" class="" aria-label="Cancel">
            <span class="material-icons-outlined material-icons-outlined--cancel" aria-hidden="true">cancel</span>
          </button>
          <div class="text-container text-container--long">
            <h4 class="text-container__header text-container__header--long">Website Avatar:</h4>
            <p v-if="!editAvatar" @click="editAvatar = true" class="text-container__text">
              {{ clientWebsiteInfo.website_avi }}
            </p>
            <textarea v-else class="text-container__text-area" type="text" v-model="avatar" />
            <button class="page-header__button" @click="setAvatar">View Avatar</button>
          </div>
        </li>
      </ul>

      <ModalSelectImg v-if="viewAvatar" :imgData="avatarData" @close-modal="closeAvatarPreview" />
      <button v-if="!isFormMatch" class="large-button" @click="submitForm">Save Changes</button>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import { useWebsiteStore } from '~/stores/website';
import { compareFormFields } from '~/utils/formUtils'; // Import the utility function

const websiteStore = useWebsiteStore();
const clientWebsiteInfo = reactive({});

const editGreeting = ref(false);
const editAbout = ref(false);
const editReviewHeader = ref(false);
const editReviewText = ref(false);
const editComment = ref(false);
const editAvatar = ref(false);
const viewAvatar = ref(false);
const avatarData = reactive({});

const greeting = ref('');
const about = ref('');
const reviewHeader = ref('');
const reviewText = ref('');
const comment = ref('');
const avatar = ref('');

// Computed object representing the form values
const formBody = computed(() => ({
  greeting: greeting.value,
  about: about.value,
  reviewHeader: reviewHeader.value,
  reviewText: reviewText.value,
  comment: comment.value,
  avatar: avatar.value
}));

// Computed to compare form fields using utility function
const isFormMatch = computed(() => {
  const storedFields = {
    greeting: websiteStore.websiteInfo.website_greeting,
    about: websiteStore.websiteInfo.website_about,
    reviewHeader: websiteStore.websiteInfo.website_review_header,
    reviewText: websiteStore.websiteInfo.website_review_text,
    comment: websiteStore.websiteInfo.website_comment,
    avatar: websiteStore.websiteInfo.website_avi
  };

  return compareFormFields(formBody.value, storedFields);
});

// On mounted lifecycle hook to fetch website info
onMounted(async () => {
  await websiteStore.fetchWebsiteInfo();
  Object.assign(clientWebsiteInfo, websiteStore.websiteInfo);

  greeting.value = websiteStore.websiteInfo.website_greeting;
  about.value = websiteStore.websiteInfo.website_about;
  reviewHeader.value = websiteStore.websiteInfo.website_review_header;
  reviewText.value = websiteStore.websiteInfo.website_review_text;
  comment.value = websiteStore.websiteInfo.website_comment;
  avatar.value = websiteStore.websiteInfo.website_avi;
});

// Methods to close the edit modes and reset values
function closeGreeting() {
  editGreeting.value = false;
  greeting.value = websiteStore.websiteInfo.website_greeting;
}

function closeAbout() {
  editAbout.value = false;
  about.value = websiteStore.websiteInfo.website_about;
}

function closeReviewHeader() {
  editReviewHeader.value = false;
  reviewHeader.value = websiteStore.websiteInfo.website_review_header;
}

function closeReviewText() {
  editReviewText.value = false;
  reviewText.value = websiteStore.websiteInfo.website_review_text;
}

function closeComment() {
  editComment.value = false;
  comment.value = websiteStore.websiteInfo.website_comment;
}

function closeAvatar() {
  editAvatar.value = false;
  avatar.value = websiteStore.websiteInfo.website_avi;
}

function setAvatar() {
  const obj = {
    photo_id: 1,
    photo_url: avatar.value,
    photo_name: 'Potential Avatar'
  };
  Object.assign(avatarData, obj);
  viewAvatar.value = true;
}

function closeAvatarPreview() {
  viewAvatar.value = false;
}

// Form submission
function submitForm() {
  websiteStore.postWebsiteInfo(formBody.value);
}
</script>

<style lang="scss" scoped>
.admin-home-page-content {
  padding: 32px;
  background: linear-gradient(to bottom, $gray-light 40%, $gray-dark 100%);

  .page-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    padding-left: 8%;
    border-bottom: solid 2px $black-main;

    &__text {
      font-size: 64px;
      font-weight: 800;
      font-family: 'Nothing You Could Do', cursive;
    }

    &__button {
      padding: 0.5rem 1rem;
      margin-top: auto;
      color: $white-main;
      background: $black-main;
      border-radius: 0.5rem;
      box-shadow: 5px 5px 2px 1px rgba(78, 71, 47, 0.1);
    }
  }

  .admin-content-container {
    .website-info-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;

      .material-icons-outlined {
        display: flex;
        align-items: center;
        font-size: 32px;

        &--cancel {
          color: red;
        }
      }

      &__item {
        display: flex;
        gap: 1rem;
        align-items: center;

        padding: 1rem 0.5rem;

        background: $primary;
        border-radius: 1rem;

        .text-container {
          display: flex;
          gap: 1rem;
          align-items: center;
          width: 100%;

          &--long {
            flex-direction: column;
            gap: 0.25rem;
          }

          &__header {
            text-decoration: underline;

            &--long {
              margin-right: auto;
            }
          }

          &__text:hover {
            cursor: pointer;
          }

          &__input {
            padding: 0.25rem 0.5rem;
          }

          &__text-area {
            padding: 0.25rem 0.5rem;
            width: 100%;
          }
        }
      }
    }
  }

  .large-button {
    margin-top: 1rem;
    width: 100%;
    padding: 1rem 0;
    color: $white-main;
    background: $black-main;
    border-radius: 1rem;
    box-shadow: 5px 5px 2px 1px rgba(78, 71, 47, 0.1);
  }
}
</style>
