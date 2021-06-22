import { computed } from "@vue/reactivity";
import { RxStorage } from "rxclass";

export default class SwSidebarModel extends RxStorage {
  constructor({ isOpened = false, name = "sw-sidebar" }: { isOpened?: boolean, name?: string } = {}) {
    const store = {
      _isOpened: isOpened,
    };
    super(name, store, {});
    this.isOpened = computed<boolean>(() => {
      return this.store._isOpened.value
    })
  }

  toggle(): void {
    this.store._isOpened.value = !this.store._isOpened.value;
  }
}