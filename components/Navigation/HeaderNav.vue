<template>
  <div
    class="nav-wrapper"
    :class="[
      { 'admin-expanded': adminSidebarHandler() === 'expanded' },
      { 'admin-collapsed': adminSidebarHandler() === 'collapsed' }
    ]"
  >
    <div v-for="navLink in menuItems" :key="navLink.id" class="link-wrapper">
      <NuxtLink class="link" :to="navLink.link">{{ navLink.name }}</NuxtLink>
      <div v-if="navLink.children.length > 0" class="expand-section-wrapper">
        <span
          v-if="parentToggle === navLink.name"
          @click="handleParentToggle(navLink.name)"
          class="material-icons-outlined btn"
        >
          expand_less
        </span>
        <span v-else @click="handleParentToggle(navLink.name)" class="material-icons-outlined btn">
          expand_more
        </span>
      </div>
      <div v-if="parentToggle === navLink.name" class="dropdown-wrapper">
        <ul>
          <li v-for="childNavLink in navLink.children">
            <NuxtLink class="link" :to="childNavLink.link" @click="closeParentToggle">{{
              childNavLink.name
            }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <CommonMainLogo :isWhite="true" />
  </div>
</template>

<script setup>
const menuItems = useNavigationItems();
const parentToggle = useParentToggle();
const isLoggedIn = useIsLoggedIn();
const isExpanded = useNavigationToggle();

function adminSidebarHandler() {
  if (isLoggedIn.value && isExpanded.value) {
    return 'expanded';
  } else if (isLoggedIn.value && !isExpanded.value) {
    return 'collapsed';
  } else {
    return '';
  }
}

function handleParentToggle(btnName) {
  if (parentToggle.value === btnName) {
    parentToggle.value = '';
  } else {
    parentToggle.value = btnName;
  }
}

function closeParentToggle() {
  parentToggle.value = '';
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  color: $white-main;
  background: $black-main;
  padding: 16px 24px 24px 0;
  font-size: 18px;
  position: fixed;
  z-index: 2;
  width: 100%;
}

.admin-expanded {
  transition: 0.2s ease-out;
  width: calc(100% - $sidebar-width);
}

.admin-collapsed {
  transition: 0.2s ease-out;
  width: calc(100% - 64px);
}

.router-link-active {
  border-bottom: solid 2px $white-main;
}

.link-wrapper {
  display: flex;
  position: relative;
}

.expand-section-wrapper {
  display: flex;
  align-items: center;
}

.btn {
  padding-left: 4px;
}

.btn:hover {
  cursor: pointer;
}

.dropdown-wrapper {
  background: $black-main;
  color: $white-main;
  width: max-content;
  position: absolute;
  margin-top: 68px;
  z-index: 1;
  border-radius: 0 0 5px 5px;
}

.dropdown-wrapper ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.dropdown-wrapper li {
  padding-right: 8px;
  padding-left: 8px;
}

.link:hover {
  border-bottom: solid 2px $white-main;
}
</style>
