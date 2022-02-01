import { Component, computed, Ref, ref } from "vue";
import { SubviewParams } from "../interfaces";
import SubViewData from "./subview_data";


export default class SubViews<T extends string> {
  readonly _views: Record<T, SubViewData>;
  active: Ref<T>;
  onChangeView?: (v: T) => void;

  constructor(params: SubviewParams<T>) {
    const keys = Object.keys(params.views)
    if (keys.length < 2) {
      throw new Error("Provide and object with at least 2 subviews")
    }
    this._views = {} as Record<T, SubViewData>;
    for (const view of (Object.keys(params.views) as Array<T>)) {
      let isVisible = true;
      if (params.invisibleViews?.includes(view)) {
        isVisible = false;
      }
      this._views[view] = new SubViewData(params.views[view], isVisible)
    }
    this.active = !params.activeView ? ref<T>(keys[0] as T) as Ref : ref(params.activeView);
    if (params.onViewChange) {
      this.onChangeView = params.onViewChange;
    }
  }

  get component() {
    return this._views[this.active.value].component;
  }

  visibleViews = computed<Array<T>>(() => {
    const v = new Array<T>();
    for (const view of Object.keys(this._views) as Array<T>) {
      if (this._views[view].isVisible) {
        v.push(view)
      }
    }
    return v;
  });

  activate(view: T) {
    this.active.value = view;
    if (this.onChangeView) {
      this.onChangeView(view)
    }
  }

  hide(view: T) {
    this._views[view].isVisible = false;
  }

  show(view: T) {
    this._views[view].isVisible = true;
  }
}