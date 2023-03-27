<template>
  <div>
    <div class="flex flex-row items-center w-full">
      <div class="flex-none" v-if="!isMobile">
        <slot name="branding"></slot>
      </div>
      <div class="inline-flex flex-row items-center flex-grow h-full" v-if="isMobile">
        <div @click="back()">
          <slot name="mobile-back"></slot>
        </div>
        <slot name="mobile-branding"></slot>
      </div>
      <div class="flex-grow h-full" v-if="!isMobile">
        <slot name="menu"></slot>
      </div>
      <div class="flex items-center justify-end h-full mr-5 cursor-pointer" v-else>
        <slot name="extra-mobile-buttons"></slot>
        <div class="border-none btn" @click="topbar.toggleMenu()" ref="ignoreElRef">
          <slot name="menuicon">
            <div class="text-3xl">
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <g>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2z" />
                </g>
              </svg>
            </div>
          </slot>
        </div>
      </div>
    </div>
    <div :class="css" id="mobile-menu" ref="menuTarget">
      <slot name="mobile-menu"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { onClickOutside } from '@vueuse/core';
import { useScreenSize, TwBreakpoint } from "@snowind/state";
import { useTopbar } from "./use_topbar";

const props = defineProps({
  breakpoint: {
    type: String as () => TwBreakpoint,
    default: () => "sm",
  },
  topbar: {
    type: Object as () => ReturnType<typeof useTopbar>,
    required: true,
  },
  mobileMenuCss: {
    type: String,
    default: "",
  }
});

const { isMobile } = useScreenSize(props.breakpoint, 'lg');
const menuTarget = ref();
const ignoreElRef = ref();

onClickOutside(menuTarget, (event) => props.topbar.closeMenu(), { ignore: [ignoreElRef] });

function back() {
  if (history.length > 0) {
    history.back();
  }
}

const css = computed<Record<string, boolean>>(() => {
  const cl: Record<string, boolean> = {
    'slide-y': true,
    'slideup': props.topbar.isMenuVisible.value === false && props.topbar.forceCloseMenu.value === false,
    'slidedown': props.topbar.isMenuVisible.value === true && props.topbar.forceCloseMenu.value === false,
    'transition-none invisible': props.topbar.forceCloseMenu.value === true,
  };
  let bp = "";
  switch (props.breakpoint) {
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
  for (const cls of props.mobileMenuCss.split(" ")) {
    cl[cls] = true
  }
  return cl;
});
</script>