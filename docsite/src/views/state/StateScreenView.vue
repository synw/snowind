<template>
  <div class="mb-8 text-2xl">Screen size</div>
  <div>Utilities for screen sizes and responsive design:</div>
  <code-block :code="code1" lang="typescript" class="mt-5"></code-block>
  <div class="mt-5">
    <code class="variable">useScreenSize</code> parameters:
  </div>
  <ul class="mx-3 mt-5 space-y-2">
    <li>
      <div class="inline-block font-bold">mobileBreakpoint</div>: the mobile Tailwind breakpoint: default
      if not provided:
      <code class="variable">sm</code>
    </li>
    <li>
      <div class="inline-block font-bold">tabletBreakpoint</div>: the tablet Tailwind breakpoint: default
      if not provided:
      <code class="variable">lg</code>
    </li>
  </ul>
  <div class="mt-5">Possible Tailwind breakpoints:</div>
  <code-block :code="code2" lang="typescript" class="mt-5"></code-block>
  <div class="mt-5">Available refs:</div>
  <ul class="mx-3 mt-5 space-y-2">
    <li>
      <div class="inline-block font-bold">isMobile</div>:
      <code class="variable">boolean</code> screen smaller than the mobile breakpoint
    </li>
    <li>
      <div class="inline-block font-bold">isTablet</div>:
      <code class="variable">boolean</code> screen between the mobile breakpoint and the tablet breakpoint
    </li>
    <li>
      <div class="inline-block font-bold">isDesktop</div>:
      <code class="variable">boolean</code> screen bigger than the tablet breakpoint
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

    // optionaly provide mobile and tablet Tailwind breakpoints
    // defaults: 'sm' and 'lg'
    const { isMobile, isTablet, isDesktop } = useScreenSize('sm', 'xl');
    `;

    const code2 = `
    type TwBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl";
    `;

    return {
      code1,
      code2,
    }
  }
});
</script>