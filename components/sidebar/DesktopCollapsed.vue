<template>
  <div class="nav-wrapper">
    <span class="material-icons-outlined expanded-icon" @click="toggleExpanded"> menu </span>
    <ul class="nav-link-wrapper">
      <li v-for="navLink in menuItems" :key="navLink.id">
        <NuxtLink :to="navLink.link">
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
              <NuxtLink :to="navLinkChild.link">
                <span class="material-icons-outlined nav-icon">{{ navLinkChild.icon }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

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
</style>
