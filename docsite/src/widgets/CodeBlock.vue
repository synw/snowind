<template>
  <pre class="code-block dark:bg-neutral-700 bg-amber-50 w-max pr-20"><code v-html="parsedCode" style="white-space: pre"></code></pre>
</template>

<script lang="js">
import { defineComponent, toRefs } from "vue";
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);

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

<style lang="sass" scoped>
.code-block
  min-width: 48rem
</style>
