<template>
  <div class="flex flex-row justify-end cursor-pointer">
    <button id="btn-left" class="btn" @click="toMobile()" :class="{ 'active': isMobile }">
      <i-zmdi-smartphone-iphone></i-zmdi-smartphone-iphone>&nbsp;Mobile
    </button>
    <button id="btn-right" class="btn" @click="toDesktop()" :class="{ 'active': !isMobile }">
      <i-fa-solid-desktop></i-fa-solid-desktop>&nbsp;Desktop
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["desktop", "mobile"],
  setup(props, { emit }) {
    const isMobile = ref(false);

    function toDesktop() {
      isMobile.value = false;
      emit("desktop");
    }

    function toMobile() {
      isMobile.value = true;
      emit("mobile");
    }

    return {
      isMobile,
      toMobile,
      toDesktop,
    }
  }
});
</script>

<style lang="sass" scoped>
#btn-left
  @apply border border-r-0 rounded-none border-light text-neutral dark:border-light-dark dark:text-neutral-dark
  &.active
    @apply border-r border-b-0 text-foreground dark:text-foreground-dark
#btn-right
  @apply border border-l-0 rounded-none border-light text-neutral dark:border-light-dark dark:text-neutral-dark
  &.active
    @apply border border-b-0 text-foreground dark:text-foreground-dark
</style>