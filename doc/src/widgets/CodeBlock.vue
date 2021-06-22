<template>
  <pre class="bg-yellow-50 dark:bg-gray-700"><code
    v-html="parsedCode"
    style="white-space: pre"
    
  ></code></pre>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import hljs from "highlight.js";

export default defineComponent({
  props: {
    code: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      default: "xml",
    },
  },
  setup(props) {
    const { code, lang } = toRefs(props);

    const parsedCode = hljs.highlight(code.value, { language: lang.value })
      .value;

    return {
      parsedCode,
    };
  },
});
</script>
