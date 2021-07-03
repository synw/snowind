import { RxStorage } from "rxclass";

export default class User extends RxStorage {
  constructor() {
    const store = {
      isDarkMode: false
    };
    super("user", store);
    this.setDarkMode()
  }


  toggleDarkMode(): void {
    this.store.isDarkMode.value = !this.store.isDarkMode.value;
    this.setDarkMode();
  }

  setDarkMode(): void {
    if (this.store.isDarkMode.value === true) {
      document.body.classList.add("bg-background-dark");
    } else {
      document.body.classList.remove("bg-background-dark");
    }
  }
}



