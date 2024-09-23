import { useLoginStore } from '~/stores/login';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const loginStore = useLoginStore();

  if (!loginStore.isLoggedIn) {
    await loginStore.initialize();

    if (!loginStore.isLoggedIn) {
      return navigateTo('/login');
    }
  }
});
