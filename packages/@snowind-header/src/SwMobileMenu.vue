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
        'slideup': isVisible.value === false,
        'slidedown': isVisible.value === true,
      };
      let bp = "";
      switch (breakpoint.value) {
        case "sm":
          bp = "sm:hidden"
          break;
        case "md":
          bp = "md:hidden"
          break;
        case "lg":
          bp = "lg:hidden"
          break;
        case "xl":
          bp = "xl:hidden"
          break;
        case "2xl":
          bp = "2xl:hidden"
          break;
      }
      cl[`${bp}`] = true;
      return cl;
    });

    return {
      css
    }
  }
});
</script>

