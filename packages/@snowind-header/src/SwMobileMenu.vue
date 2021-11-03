<template>
  <div :class="css" class="w-full">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from "vue";

export default defineComponent({
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    breakpoint: {
      type: String as () => "sm" | "md" | "lg" | "xl" | "2xl",
      default: () => "sm",
    },
  },
  setup(props) {
    const { isVisible, breakpoint } = toRefs(props);

    const css = computed<Record<string, boolean>>(() => {
      const cl: Record<string, boolean> = {
        'slide-y': true,
        slideup: isVisible.value === false,
        slidedown: isVisible.value === true,
      };
      cl[`${breakpoint.value}:hidden`] = true;
      return cl;
    });

    return {
      css
    }
  }
});
</script>

