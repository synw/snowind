<template>
  <div
    class="w-max"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :class="{ 'cursor-pointer': isHovered }"
  >
    <a :name="name"></a>
    <div v-if="isHovered">
      <a :href="'#' + name">
        <slot></slot>
        <i-akar-icons-link-chain class="ml-2"></i-akar-icons-link-chain>
      </a>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    const isHovered = ref<boolean>(false);

    return {
      isHovered,
    };
  },
});
</script>