<template>
  <div class="sidebar-wrapper" :class="{ 'is-expanded': isExpanded }">
    <div class="logo">
      <CommonMainLogo v-if="isExpanded" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons-outlined">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>&bull; Admin Menu &bull;</h3>
    <div v-for="navLink in navMenu" :key="navLink.id" class="menu-item">
      <NuxtLink class="btn" :to="'/admin' + navLink.link">
        <span class="material-icons-outlined">{{ navLink.icon }}</span>
        <span class="text">{{ navLink.name }}</span>
        <div v-if="navLink.children.length > 0" class="parent-icon">
          <i
            class="material-icons-outlined"
            :class="{ 'is-expanded': isParentExpanded(navLink.name) }"
            @click="handleAdminParentToggle(navLink.name)"
            >expand_more</i
          >
        </div>
      </NuxtLink>
      <div v-if="navLink.children.length > 0 && !isExpanded" class="collapsed-parent-icon">
        <i
          class="material-icons-outlined"
          :class="{ 'is-expanded': isParentExpanded(navLink.name) }"
          @click="handleAdminParentToggle(navLink.name)"
          >expand_more</i
        >
      </div>
      <section class="child-section" :class="{ 'is-expanded': isParentExpanded(navLink.name) }">
        <NuxtLink v-for="childNavLink in navLink.children" class="child-btn" :to="'/admin' + childNavLink.link">
          <span class="material-icons-outlined">{{ childNavLink.icon }}</span>
          <span class="text">{{ childNavLink.name }}</span>
        </NuxtLink>
      </section>
    </div>
    <button class="btn logout" @click="logout">
      <span class="material-icons-outlined nav-icon"> logout </span>
      <span class="text">Logout</span>
    </button>
  </div>
</template>

<script setup>
const navMenu = useNavigationItems();
const isExpanded = useNavigationToggle();
const adminParentToggle = useAdminParentToggle();
const isLoggedIn = useIsLoggedIn();

function isParentExpanded(val) {
  if (adminParentToggle.value === val) {
    return true;
  } else return false;
}

function toggleMenu() {
  isExpanded.value = !isExpanded.value;
}

function handleAdminParentToggle(btnName) {
  if (adminParentToggle.value === btnName) {
    adminParentToggle.value = '';
  } else {
    adminParentToggle.value = btnName;
  }
}

function logout() {
  isLoggedIn.value = false;
  return navigateTo({ path: '/' });
}
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  width: 64px;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px;

  background-color: $primary;

  transition: 0.2s ease-out;

  .logout {
    display: flex;
    align-items: center;
    padding-left: 2px;
    padding-top: 8px;
    .nav-icon {
      font-size: 32px;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
    position: relative;
    top: 0;
    transform: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      .material-icons-outlined {
        font-size: 32px;
      }

      &:hover {
        .material-icons-outlined {
          transform: translateX(8px);
        }
      }
    }
  }
  .btn .text,
  .child-btn .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    display: none;
  }

  .menu-item {
    margin: 0 -16px;
    position: relative;

    .parent-icon {
      padding-top: 8px;

      &:hover {
        cursor: pointer;
      }
    }

    .has-children {
      flex-direction: column;
    }

    .child-section {
      height: 0px;
      overflow: hidden;

      &.is-expanded {
        height: fit-content;
      }
    }

    .btn,
    .child-btn {
      display: flex;
      align-items: center;
      padding: 8px 16px;

      &:router-link-active {
        background-color: $white-main;
      }

      .material-icons-outlined {
        font-size: 32px;
        transition: 0.2s ease-out;
      }

      .text {
        font-size: 24px;
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-active {
        background-color: $white-main;

        .material-icons-outlined,
        .text {
          color: $primary-neutral;
        }
      }

      &.router-link-active {
        border-right: solid 5px $primary-neutral;
      }
    }
    .collapsed-parent-icon {
      padding-left: 16px;

      .material-icons-outlined {
        font-size: 32px;

        &.is-expanded {
          transform: rotate(180deg);
          transition: 0.2s ease-out;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  &.is-expanded {
    width: $sidebar-width;
    padding: 16px 8px 16px 16px;

    .menu-toggle-wrap {
      top: -48px;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3 {
      display: block;
    }

    .menu-item .parent-icon {
      margin-left: auto;

      .is-expanded {
        transform: rotate(180deg);
        transition: 0.2s ease-in-out;
      }
    }

    h3,
    .btn .text,
    .child-btn .text {
      display: flex;
      font-size: 26px;
      opacity: 1;
    }

    .btn,
    .child-btn {
      flex-direction: row;
      .material-icons-outlined {
        margin-right: 16px;
      }
    }

    .logout {
      padding-left: 2px;
      padding-top: 4px;
      transition: 0.3s ease-out;
    }
  }

  @media (max-width: $br-sidebar-fixed) {
    position: fixed;
    z-index: 99;
  }
}
</style>
