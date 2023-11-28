<template>
  <nav class="nav-wrapper">
    <section class="nav-header">
      <CommonMainLogo />
      <span class="material-icons-outlined expanded-icon" @click="toggleExpanded"> menu_open </span>
    </section>
    <h2>&bull; Admin View &bull;</h2>
    <ul class="nav-link-wrapper">
      <li v-for="navLink in menuItems" :key="navLink.id">
        <NuxtLink :to="`/admin${navLink.link}`" class="nav-link">
          <i class="material-icons-outlined nav-icon">{{ navLink.icon }}</i>
          {{ navLink.name }}
          <div v-if="navLink.children.length > 0">
            <i
              v-if="adminParentToggle === navLink.name"
              @click="handleAdminParentToggle(navLink.name)"
              class="material-icons-outlined parent-icon"
              >expand_less</i
            >
            <i v-else @click="handleAdminParentToggle(navLink.name)" class="material-icons-outlined parent-icon"
              >expand_more</i
            >
          </div>
        </NuxtLink>
        <div v-if="adminParentToggle === navLink.name">
          <ul class="nav-link-wrapper child-nav-link-wrapper">
            <li v-for="navLinkChild in navLink.children" :key="navLinkChild.id">
              <NuxtLink :to="`/admin${navLinkChild.link}`" class="nav-link child-nav-link">
                <i class="material-icons-outlined nav-icon child-nav-icon">{{ navLinkChild.icon }}</i>
                {{ navLinkChild.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <p class="logout-btn" @click="logout"><span class="material-icons-outlined nav-icon"> logout </span>Logout</p>
  </nav>
</template>

<script setup>
const menuItems = useNavigationItems();
const isExpanded = useNavigationToggle();
const adminParentToggle = useAdminParentToggle();
const isLoggedIn = useIsLoggedIn();

function logout() {
  isLoggedIn.value = false;
  return navigateTo({ path: '/' });
}

function handleAdminParentToggle(btnName) {
  if (adminParentToggle.value === btnName) {
    adminParentToggle.value = '';
  } else {
    adminParentToggle.value = btnName;
  }
}

function toggleExpanded() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: $primary;
  width: 300px;
  height: 100%;
  overflow: auto;
}
.nav-header {
  margin: 16px 8px 16px 8px;
  display: flex;
  justify-content: space-between;
}
.expanded-icon {
  font-size: 40px;
}
.expanded-icon:hover {
  cursor: pointer;
}

h2 {
  padding-left: 40px;
}
.nav-link-wrapper {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 24px;
}
.child-nav-link-wrapper {
  font-size: 16px;
}
.nav-link {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0 8px 0;
}
.child-nav-link {
  padding-left: 40px;
}
.nav-link:hover,
.child-nav-link:hover {
  background-color: $white-main;
  cursor: pointer;
}
.router-link-active {
  background-color: $white-main;
}
.nav-icon {
  font-size: 30px;
  margin-right: 16px;
}
.child-nav-icon {
  font-size: 24px;
}
.parent-icon {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 32px;
}

.logout-btn {
  display: flex;
  width: 24px;
  font-size: 24px;
  padding-bottom: 8px;
}

.logout-btn:hover {
  cursor: pointer;
}
</style>
