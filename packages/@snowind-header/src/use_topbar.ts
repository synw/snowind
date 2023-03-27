import { ref } from "vue";

const useTopbar = (router?: any, autoclose = true) => {
  const isMenuVisible = ref(false);
  let forceCloseMenu = ref(false);

  const closeMenu = () => {
    isMenuVisible.value = false;
  }

  const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value
    console.log("Click", isMenuVisible.value)
  }

  const hideMenu = () => {
    isMenuVisible.value = false;
    if (autoclose) {
      forceCloseMenu.value = true;
      setTimeout(() => {
        forceCloseMenu.value = false;
      }, 1);
    }
  }

  const link = (url: string) => {
    hideMenu();
    if (router) {
      router.push(url);
    } else {
      throw new Error("Please provide a router before at useTopbar initialization to use this function")
    }
  }

  return {
    isMenuVisible,
    forceCloseMenu,
    closeMenu,
    toggleMenu,
    hideMenu,
    link,
  }
}

export { useTopbar }