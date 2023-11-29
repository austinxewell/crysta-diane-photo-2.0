export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = useIsLoggedIn();

  if (!userIsLoggedIn.value) {
    return navigateTo({ path: '/login' });
  }
});
