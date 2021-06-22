<template>
  <div class="flex justify-between">
    <div>
      <router-link :to="prev.link" v-if="prev !== null">
        <i class="mr-3 fas fa-long-arrow-alt-left"></i>
        Previous: {{ prev.text }}
      </router-link>
    </div>
    <div>
      <router-link v-if="next !== null" :to="next.link">
        Next:
        {{ next.text }}
        <i class="ml-3 fas fa-long-arrow-alt-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    prev: {
      type: Object as () => Record<string, string> | null,
      default: null
    },
    next: {
      type: Object as () => Record<string, string> | null,
      default: null
    }
  }
});
</script>