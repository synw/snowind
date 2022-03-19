<template>
  <div class="mb-8 text-2xl">Button</div>
  <div class="flex flex-row space-x-3">
    <button class="btn">Button</button>
    <button class="btn primary">Button</button>
    <button class="btn secondary">Button</button>
    <button class="btn light">Button</button>
    <button class="btn lighter">Button</button>
    <button class="btn success">Button</button>
    <button class="btn warning">Button</button>
    <button class="btn danger">Button</button>
  </div>
  <code-block :code="code1" class="mt-8"></code-block>

  <div class="my-8 text-xl">Style</div>
  <div class="mt-3">Customize with utility classes</div>
  <button
    class="mt-5 rounded-none txt-warning block-lighter dark:txt-danger btn hover:bord-danger"
  >Button</button>
  <code-block :code="code2" class="mt-8"></code-block>

  <div class="mt-8">Customize with sass</div>
  <button class="mt-5 btn small">Button</button>
  <code-block :code="code3" lang="html" class="mt-8"></code-block>
  <code-block :code="code4" lang="html" class="mt-5"></code-block>

  <next-bar
    class="mt-24"
    :prev="{ link: '/colors', text: 'Colors' }"
    :next="{ link: '/collapse', text: 'Collapse' }"
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
        <button class="btn">Button</button>
        <button class="btn primary">Button</button>
        <button class="btn secondary">Button</button>
        <button class="btn light">Button</button>
        <button class="btn lighter">Button</button>
        <button class="btn success">Button</button>
        <button class="btn warning">Button</button>
        <button class="btn danger">Button</button>
    `;

    const code2 = `
    <button class="rounded-none txt-warning block-lighter dark:txt-danger btn hover:bord-danger">Button</button>
      `;

    const code3 = `
    <button class="btn small">Button</button>
    `;

    const code4 = `
    <style lang="sass">
    .btn.small
      @apply text-xs block-lighter bord-warning hover:bord-danger txt-danger
    </style>
    `;

    return {
      code1,
      code2,
      code3,
      code4
    };
  },
});
</script>

<style lang="sass">
.btn.small
  @apply text-xs block-lighter bord-warning hover:bord-danger txt-danger
</style>