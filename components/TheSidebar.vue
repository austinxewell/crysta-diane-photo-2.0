<script setup>
const menuItems = useNavigationItems();
const isExpanded = useNavigationToggle();

function toggleExpanded() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <div>
    <nav v-if="isExpanded" class="nav-wrapper">
      <section class="nav-header">
        <CommonMainLogo />
        <span class="material-icons-outlined expanded-icon"> menu_open </span>
      </section>
      <ul class="nav-link-wrapper">
        <li v-for="navLink in menuItems" :key="navLink.id">
          <NuxtLink :to="navLink.link" class="nav-link">
            <i class="material-icons-outlined nav-icon">{{ navLink.icon }}</i>
            {{ navLink.name }}
          </NuxtLink>
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
.nav-link {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0 8px 0;
}

.nav-link:hover {
  background-color: $white-main;
}
.nav-icon {
  font-size: 30px;
  margin-right: 16px;
}
</style>
