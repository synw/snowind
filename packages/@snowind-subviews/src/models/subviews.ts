import { computed, Ref, ref } from "@vue/reactivity";
import { SubviewParams } from "../interfaces";
import SubViewData from "./subview_data";


export default class SubViews<T extends string> {
  readonly views: Record<T, SubViewData>;
  active: Ref<T>;
  onChangeView?: (v: T) => void;

  constructor(params: SubviewParams<T>) {
    const keys = Object.keys(params.views)
    if (keys.length < 2) {
      throw new Error("Provide and object with at least 2 subviews")
    }
    this.views = {} as Record<T, SubViewData>;
    for (const view of (Object.keys(params.views) as Array<T>)) {
      let isVisible = true;
      if (params.invisibleViews?.includes(view)) {
        isVisible = false;
      }
      this.views[view] = new SubViewData(params.views[view], isVisible)
    }
    this.active = !params.activeView ? ref<T>(keys[0] as T) as Ref : ref(params.activeView);
    if (params.onViewChange) {
      this.onChangeView = params.onViewChange;
    }
  }

  get component() {
    return this.views[this.active.value].component;
  }

  visibleViews = computed<Array<T>>(() => {
    const v = new Array<T>();
    for (const view of Object.keys(this.views) as Array<T>) {
      if (this.views[view].isVisible.value) {
        v.push(view)
      }
    }
    return v;
  });

  isVisible(view: T): boolean {
    return this.views[view].isVisible.value;
  }

  activate(view: T) {
    this.active.value = view;
    if (this.onChangeView) {
      this.onChangeView(view)
    }
  }

  hide(view: T) {
    console.log("Hiding view", view);
    this.views[view].isVisible.value = false;
  }

  show(view: T) {
    console.log("Showing view", view);
    this.views[view].isVisible.value = true;
  }
}