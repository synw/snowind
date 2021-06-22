import { RxClass } from "rxclass";

export default class SwCollapseModel extends RxClass {

  constructor() {
    const state = {
      isCollapsed: true
    };
    super(state);
  }

  toggle(): void {
    this.isCollapsed.value = !this.isCollapsed.value;
  }
}