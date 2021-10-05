import { useStorage } from '@vueuse/core'

export default class SwSidebarModel {
  isOpened = useStorage("isOpened", true);

  constructor(isOpened = false) {
    this.isOpened.value = isOpened;
  }
}