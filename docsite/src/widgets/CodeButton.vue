<template>
  <button
    @click="toggle()"
    class="flex flex-row items-center justify-center border-none focus:outline-none txt-light btn"
  >
    <i-fa-solid:code class="mr-1" />&nbsp;
    <span v-if="collapse === true">Show code</span>
    <span v-else>Hide code</span>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    const { collapse } = toRefs(props);

    function toggle() {
      emit("toggle");
    }
    return {
      toggle
    }
  }
});
</script>