<template>
  <div class="text-xl text-gray-500 w-max dark:text-gray-300 mb-5">Collapse</div>
  <button
    class="mt-4 btn lighter"
    @click="collapse = !collapse"
    v-html="collapse ? 'Open' : 'Close'"
  ></button>
  <div
    id="sw-collapse"
    :class="{
      'slide-y': true,
      'slideup': collapse === true,
      'slidedown': collapse === false
    }"
    class="mt-4 pl-4"
  >Lorem ipsum</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const collapse = ref(false);
</script>