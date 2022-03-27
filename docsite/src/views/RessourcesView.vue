<template>
  <div class="mb-8 text-2xl">Ressources</div>
  <div class="mt-3">
    A
    <a href="https://synw.github.io/snowind-stories/" target="_blank">Snowind storybook</a> is available online to show the components
  </div>
  <div class="mt-3">
    The
    <a href="https://github.com/synw/snowind-template">Snowind template</a> repository can be used as a starter template
  </div>
  <next-bar
    class="mt-24"
    :next="{ link: '/button', text: 'Button' }"
    :prev="{ link: '/colors', text: 'Colors' }"
  ></next-bar>
</template>

<script setup lang="ts">
import NextBar from "@/widgets/NextBar.vue";
</script>