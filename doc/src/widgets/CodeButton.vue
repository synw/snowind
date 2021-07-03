<template>
  <button
    @click="toggle()"
    class="border-none focus:outline-none text-neutral btn dark:text-neutral-dark"
  >
    <i class="fas fa-code"></i>&nbsp;
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
  setup(props) {
    const { collapse } = toRefs(props);

    function toggle() {
      collapse.value = !collapse.value;
    }
    return {
      toggle
    }
  }
});
</script>