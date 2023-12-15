export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = useIsLoggedIn();

  if (process.server) {
    const authCookie = useCookie('authCookie');
    isLoggedIn.value = authCookie.value ? true : false;
  }

  if (!isLoggedIn.value) {
    return navigateTo({ path: '/login' });
  }
});
