<template>
  <div class="nav-wrapper">
    <span class="material-icons-outlined expanded-icon" @click="toggleExpanded"> menu </span>
    <ul class="nav-link-wrapper">
      <li v-for="navLink in menuItems" :key="navLink.id">
        <NuxtLink class="btn" :to="`/admin${navLink.link}`" :data-tooltip="navLink.name">
          <span class="material-icons-outlined nav-icon">{{ navLink.icon }}</span>
        </NuxtLink>
        <div v-if="navLink.children.length > 0" class="expanded-wrapper">
          <i
            v-if="parentToggle === navLink.name"
            @click="handleParentToggle(navLink.name)"
            class="material-icons-outlined parent-icon"
            >expand_less</i
          >
          <i v-else @click="handleParentToggle(navLink.name)" class="material-icons-outlined parent-icon"
            >expand_more</i
          >
        </div>
        <div v-if="parentToggle === navLink.name">
          <ul class="child-nav-link-wrapper">
            <li v-for="navLinkChild in navLink.children" :key="navLinkChild.id">
              <NuxtLink class="btn" :to="`/admin${navLinkChild.link}`" :data-tooltip="navLinkChild.name">
                <span class="material-icons-outlined nav-icon">{{ navLinkChild.icon }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <p class="btn" data-tooltip="Logout" @click="logout">
      <span class="material-icons-outlined nav-icon">logout</span>
    </p>
  </div>
</template>

<script setup>
const menuItems = useNavigationItems();
const isExpanded = useNavigationToggle();
const parentToggle = useParentToggle();
const isLoggedIn = useIsLoggedIn();

function logout() {
  isLoggedIn.value = false;
  return navigateTo({ path: '/' });
}

function handleParentToggle(btnName) {
  if (parentToggle.value === btnName) {
    parentToggle.value = '';
  } else {
    parentToggle.value = btnName;
  }
}

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: $primary;
  width: 42px;
  height: 100%;
}
.expanded-icon {
  padding-top: 12px;
  font-size: 40px;
}
.expanded-icon:hover {
  cursor: pointer;
}
.nav-link-wrapper {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 24px;
}
.nav-icon {
  font-size: 36px;
}
.nav-icon:hover {
  color: $primary-neutral;
}
.router-link-active {
  color: $primary-neutral;
}
.parent-icon {
  font-size: 32px;
  padding-left: 2px;
}
.parent-icon:hover {
  cursor: pointer;
}
.expanded-wrapper,
.child-nav-link-wrapper {
  margin-bottom: -10px;
}

.btn {
  position: relative;
}

.btn::before,
.btn::after {
  --scale: 0;

  position: absolute;
  top: -50%;
  left: 85%;
  transform: translateY(100%) scale(var(--scale));
  transition: 250ms transform;
  transform-origin: left;
}

.btn::before {
  content: attr(data-tooltip);
  width: max-content;
  padding: 2px 4px 2px 4px;
  border: solid 1px $black-main;
  border-radius: 5px;
  font-size: small;
  background: $gray-light;
}

.btn:hover::before {
  --scale: 1;
}
.btn:hover {
  cursor: pointer;
}
</style>
