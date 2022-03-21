import { Component, reactive, ref, Ref, ShallowUnwrapRef } from "vue";
import { SubviewDefinition } from "../interfaces";

export default class SubViewData {
  isVisible: Ref<boolean>;
  component: Component;
  props: ShallowUnwrapRef<Record<string, any>> = reactive({});

  constructor(param: SubviewDefinition, isVisible: boolean = true) {
    this.isVisible = ref(isVisible);
    if (typeof param == "object") {
      this.component = param.component;
      this.props = reactive(param.props)
    } else {
      this.component = param;
    }
  }
}