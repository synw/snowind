<template>
  <div class="flex flex-row items-center">
    <div class="flex-none hidden" :class="breakpoint + ':block'">
      <slot name="branding"></slot>
    </div>
    <div class="inline-flex flex-row items-center h-full" :class="breakpoint + ':hidden'">
      <div @click="back()">
        <slot name="mobile-back"></slot>
      </div>

      <slot name="mobile-branding"></slot>
    </div>
    <div class="flex-grow hidden h-full" :class="breakpoint + ':block'">
      <slot name="menu"></slot>
    </div>
    <div
      class="flex items-center justify-end flex-grow h-full cursor-pointer"
      :class="breakpoint + ':hidden'"
    >
      <div class="border-none btn" @click="onClick()">
        <slot name="menuicon">
          <div class="mr-5 text-3xl" :class="breakpoint + ':hidden'">
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2z"
                />
              </g>
            </svg>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    breakpoint: {
      type: String as () => "sm" | "md" | "lg" | "xl" | "2xl",
      default: () => "sm",
    },
  },
  emits: ["togglemenu"],
  setup(props, { emit }) {
    function onClick() {
      emit("togglemenu");
    }

    function back() {
      if (history.length > 0) {
        history.back();
      }
    }

    return {
      onClick,
      back,
    };
  },
});
</script>
