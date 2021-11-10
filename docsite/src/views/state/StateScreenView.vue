<template>
  <div class="mb-8 text-2xl">Screen size</div>
  <div>Utilities for screen sizes and responsive design:</div>
  <code-block :code="code1" lang="typescript" class="mt-5"></code-block>
  <div class="mt-5">Available refs:</div>
  <ul class="mx-3 mt-5 space-y-2">
    <li>
      <div class="inline-block font-bold">isMobile</div>: screen smaller than the mobile breakpoint
    </li>
    <li>
      <div class="inline-block font-bold">isTablet</div>: screen between the mobile breakpoint and the tablet breakpoint
    </li>
    <li>
      <div class="inline-block font-bold">isDesktop</div>: screen bigger than the tablet breakpoint
    </li>
  </ul>

  <div class="mt-12 mb-8 text-xl">Install</div>
  <code lang="bash">npm install @snowind/state</code>
  <br />
  <code class="mt-3 text-neutral"># or</code>
  <br />
  <code class="mt-3">yarn add @snowind/state</code>

  <next-bar
    class="mt-24"
    :prev="{ link: '/switch', text: 'Switch' }"
    :next="{ link: '/state/user', text: 'User' }"
  ></next-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import NextBar from "@/widgets/NextBar.vue";

export default defineComponent({
  components: {
    CodeBlock,
    NextBar,
  },
  setup() {
    const code1 = `
    import { useScreenSize } from "@snowind/state";

    // provide a mobile breakpoint and a tablet breakpoint
    const { isMobile, isTablet, isDesktop } = useScreenSize('sm', 'md');
    `;

    return {
      code1
    }
  }
});
</script>