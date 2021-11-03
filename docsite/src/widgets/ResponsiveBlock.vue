<template>
  <div class="flex flex-row justify-end space-x-3 cursor-pointer">
    <div @click="toMobile()" :class="{ 'text-neutral': !isMobile }">
      <i-zmdi-smartphone-iphone></i-zmdi-smartphone-iphone>&nbsp;Mobile
    </div>
    <div @click="toDesktop()" :class="{ 'text-neutral': isMobile }">
      <i-fa-solid-desktop></i-fa-solid-desktop>&nbsp;Desktop
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    breakpoint: {
      type: String,
      default: "sm"
    }
  },
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