import { useStorage } from '@vueuse/core'
import { ref } from 'vue';

export default class User {
  name = useStorage<string>("name", "anonymous");
  isDarkMode = useStorage<boolean>("isDarkMode", false);
  isLoggedIn = ref<boolean>(false);

  constructor() {
    this.checkDarkMode()
  }

  toggleDarkMode() {
    this.isDarkMode.value = !this.isDarkMode.value;
    this.checkDarkMode()
  }

  checkDarkMode() {
    if (this.isDarkMode.value === true) {
      document.body.classList.add("dark", "bg-background-dark", "text-foreground-dark");
    } else {
      document.body.classList.remove("dark", "bg-background-dark", "text-foreground-dark");
    }
  }
}



