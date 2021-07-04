import { computed } from "@vue/reactivity";
import { RxStorage } from "rxclass";

export default class SwSidebarModel extends RxStorage {
  constructor({ isOpened = false, name = "sw-sidebar" }: { isOpened?: boolean, name?: string } = {}) {
    const store = {
      isOpened: isOpened,
    };
    super(name, store, {});
  }
}