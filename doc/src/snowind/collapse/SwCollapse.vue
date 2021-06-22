<template>
  <div :aria-hidden="model.isCollapsed" :class="cssClass" class="sw-slide-y">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";
import SwCollapseModel from "./model";

export default defineComponent({
  props: {
    model: {
      type: SwCollapseModel,
      default: () => new SwCollapseModel(),
    },
  },
  setup(props) {
    const { model } = toRefs(props);
    const cssClass = computed<string>(() => {
      let v = "";
      if (model.value.isCollapsed.value === true) {
        v = "sw-slideup";
      } else {
        v = "sw-slidedown";
      }
      return v;
    });

    return {
      cssClass,
    };
  },
});
</script>