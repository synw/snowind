<template>
  <div class="flex justify-between" id="nextbar">
    <div>
      <button class="btn" @click="$router.push(prev?.link ?? '/')" v-if="prev !== null">
        <i class="mr-3 fas fa-long-arrow-alt-left"></i>
        Previous: {{ prev.text }}
      </button>
    </div>
    <div>
      <button v-if="next !== null" class="btn" @click="$router.push(next?.link ?? '/')">
        Next:
        {{ next.text }}
        <i class="ml-3 fas fa-long-arrow-alt-right"></i>
      </button>
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

<style lang="sass" scoped>
button
  @apply border-none
</style>