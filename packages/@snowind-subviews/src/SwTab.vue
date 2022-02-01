<template>
  <div
    class="px-4 py-2 border border-l-0 cursor-pointer"
    :class="isActive ?
    ['border-b-0 cursor-auto text-foreground dark:text-foreground-dark']
    : ['txt-neutral']"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    required: true,
  }
});
</script>