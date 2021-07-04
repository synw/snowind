<template>
  <div class="mb-8 text-2xl">Install</div>
  <code-block :code="code1" class="mt-8"></code-block>
  <div class="my-8 text-xl">Enable the plugin</div>
  <div>
    Enable the Snowind plugin in
    <i>tailwind.config.js</i>:
  </div>
  <code-block :code="code2" lang="typescript" class="mt-8"></code-block>
  <div class="mt-8">All the css is available. The components must be installed independently</div>
  <next-bar
    class="mt-24"
    :next="{ link: '/colors', text: 'Colors' }"
    :prev="{ link: '/', text: 'Introduction' }"
  ></next-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import NextBar from "@/widgets/NextBar.vue";

export default defineComponent({
  components: {
    CodeBlock,
    NextBar
  },
  setup() {
    const code1 = `
      npm install @snowind/plugin
      # or
      yarn install @snowind/plugin
    `;

    const code2 = `
    const snowindPlugin = require('@snowind/plugin');

    module.exports = {
      // ...
      purge: [
        './public/**/*.html',
        './src/**/*.vue',
      ],
      darkMode: 'class',
      plugins: [
        require('@tailwindcss/forms'),
        snowindPlugin
      ],
    };
    `;

    return {
      code1,
      code2
    }
  }
});
</script>