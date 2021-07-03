<template>
  <div :aria-hidden="model" :class="cssClass" class="sw-slide-y">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    model: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const { model } = toRefs(props);

    const cssClass = computed<string>(() => {
      let v = "";
      if (model.value === true) {
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