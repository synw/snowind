import { Component } from "vue";

export default class SubViewData {
  isVisible: boolean;
  component: Component;

  constructor(component: Component, isVisible: boolean = true) {
    this.isVisible = isVisible;
    this.component = component;
  }
}