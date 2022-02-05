<template>
  <button
    class="text-sm group btn border-light dark:border-light-dark hover:secondary dark:hover:secondary-dark txt-neutral"
    @click="onClick()"
  >
    <i-twemoji-movie-camera class="mb-1 mr-2 text-xl opacity-50 group-hover:opacity-100" />
    <slot>Storybook</slot>
  </button>
</template>

<script lang="js">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    link: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { link } = toRefs(props);
    const base = import.meta.env.PROD ?
      "https://synw.github.io/snowind-stories/?path=/"
      : "http://localhost:6006/?path=/";

    function onClick() {
      window.open(base + link.value, '_blank').focus();
    }

    return {
      base,
      onClick,
    }
  }
});
</script>