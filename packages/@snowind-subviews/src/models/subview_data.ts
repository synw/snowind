import { Component, ref, Ref } from "vue";

export default class SubViewData {
  isVisible: Ref<boolean>;
  component: Component;

  constructor(component: Component, isVisible: boolean = true) {
    this.isVisible = ref(isVisible);
    this.component = component;
  }
}