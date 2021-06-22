<template>
  <div :class="cssClass" class="sw-sidebar sw-slide-x">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRef } from "vue";
import SwSidebarModel from "./model";

export default defineComponent({
  props: {
    model: {
      type: SwSidebarModel,
      required: true,
    },
  },
  setup(props) {
    const _model = toRef(props, "model");

    const cssClass = computed<string>(() => {
      let c = "";
      if (_model.value.isOpened.value === true) {
        c = "opened";
      }
      return c;
    });

    return {
      cssClass,
    };
  },
});
</script>