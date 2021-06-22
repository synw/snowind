<template>
  <button
    @click="collapse.toggle()"
    class="border-none focus:outline-none text-neutral btn dark:text-neutral-dark"
  >
    <i class="fas fa-code"></i>&nbsp;
    <span v-if="collapse.isCollapsed.value === true">Show code</span>
    <span v-else>Hide code</span>
  </button>
</template>

<script lang="ts">
import SwCollapseModel from "@/snowind/collapse/model";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    collapse: {
      type: SwCollapseModel,
      required: true
    }
  }
});
</script>