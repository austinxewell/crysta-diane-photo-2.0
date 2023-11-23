<script setup>
const menuItems = useNavigationItems();
const isExpanded = useNavigationToggle();
const parentToggle = useParentToggle();

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

<template>
  <div>
    <nav class="nav-wrapper">
      <section class="nav-header">
        <CommonMainLogo />
        <span class="material-icons-outlined expanded-icon" @click="toggleExpanded"> menu_open </span>
      </section>
      <ul class="nav-link-wrapper">
        <li v-for="navLink in menuItems" :key="navLink.id">
          <NuxtLink :to="navLink.link" class="nav-link">
            <i class="material-icons-outlined nav-icon">{{ navLink.icon }}</i>
            {{ navLink.name }}
            <div v-if="navLink.children.length > 0">
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
          </NuxtLink>
          <div v-if="parentToggle === navLink.name">
            <ul class="nav-link-wrapper child-nav-link-wrapper">
              <li v-for="navLinkChild in navLink.children" :key="navLinkChild.id">
                <NuxtLink :to="navLinkChild.link" class="nav-link child-nav-link">
                  <i class="material-icons-outlined nav-icon child-nav-icon">{{ navLinkChild.icon }}</i>
                  {{ navLinkChild.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: $primary;
  width: 300px;
  height: 100%;
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
  background-color: white;
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
</style>
