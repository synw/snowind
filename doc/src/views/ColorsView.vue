<template>
  <div class="mb-8 text-2xl">Colors</div>
  <div>The Snowind default palette is customizable in the Tailwind configuration file</div>
  <div class="grid grid-flow-col gap-8 mt-5 auto-cols-max">
    <div class="inline-block">
      <div
        class="color-block bg-primary dark:bg-primary-dark text-primary-r dark:text-primary-r-dark"
      >Text</div>
      <div class="mt-2 text-center">
        Primary
        <div v-if="user.store.isDarkMode.value === true" class="text-center">dark</div>
      </div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-secondary dark:bg-secondary-dark text-secondary-r dark:text-secondary-r-dark"
      >Text</div>
      <div class="mt-2 text-center">Secondary</div>
      <div v-if="user.store.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-neutral dark:bg-neutral-dark text-neutral-r dark:text-neutral-r-dark"
      >Text</div>
      <div class="mt-2 text-center">Neutral</div>
      <div v-if="user.store.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div class="color-block bg-light dark:bg-light-dark text-light-r dark:text-light-r-dark">Text</div>
      <div class="mt-2 text-center">Light</div>
      <div v-if="user.store.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-success dark:bg-success-dark text-success-r dark:text-success-r-dark"
      >Text</div>
      <div class="mt-2 text-center">Success</div>
      <div v-if="user.store.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-warning dark:bg-warning-dark text-warning-r dark:text-warning-r-dark"
      >Text</div>
      <div class="mt-2 text-center">Warning</div>
      <div v-if="user.store.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark"
      >Text</div>
      <div class="mt-2 text-center">Danger</div>
      <div v-if="user.store.isDarkMode.value === true" class="text-center">dark</div>
    </div>
  </div>
  <div class="mt-12 mb-8 text-xl">Configure the colors</div>
  <div class="mt-3">
    Use the
    <i>tailwind.config.js</i> file to customize the Snowind color palette and override the
    default colors:
  </div>
  <code-block class="mt-3" lang="typescript" :code="code1"></code-block>
  <div class="mt-3">
    In this example the
    <code>primary</code> color will be overrided. The
    <code>primary-r</code> class is the primary reversed color, example for text if primary is the background.
    The dark variants has to be set as well
  </div>
  <div class="mt-12 mb-8 text-xl">Default Snowind colors</div>
  <code-block class="mt-3" lang="typescript" :code="code2"></code-block>
  <next-bar
    class="mt-24"
    :prev="{ link: '/install', text: 'Install' }"
    :next="{ link: '/button', text: 'Button' }"
  ></next-bar>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import NextBar from "@/widgets/NextBar.vue";
import { user } from "@/state";

export default defineComponent({
  components: {
    CodeBlock,
    NextBar,
  },
  setup() {
    const code1 = `
    theme: {
      extend: {
        colors: {
          'primary': {
            DEFAULT: "#somecolor",
            dark: "#somecolor",
          },
          'primary-r': {
            DEFAULT: "#somecolor",
            dark: "#somecolor",
          },
        }
      },
    },
    `;

    const code2 = `
    const colors = require('tailwindcss/colors');

    colors: {
        'primary': {
          DEFAULT: colors.cyan[700],
          dark: colors.cyan[700],
        },
        'primary-r': {
          DEFAULT: colors.white,
          dark: colors.white
        },
        'secondary': {
          DEFAULT: colors.cyan[500],
          dark: colors.cyan[500],
        },
        'secondary-r': {
          DEFAULT: colors.white,
          dark: colors.white
        },
        'success': {
          DEFAULT: colors.green[600],
          dark: colors.green[600]
        },
        'success-r': {
          DEFAULT: colors.white,
          dark: colors.white
        },
        'warning': {
          DEFAULT: colors.amber[500],
          dark: colors.amber[500]
        },
        'warning-r': {
          DEFAULT: colors.white,
          dark: colors.white
        },
        'danger': {
          DEFAULT: colors.red[500],
          dark: colors.red[400]
        },
        'danger-r': {
          DEFAULT: colors.white,
          dark: colors.white
        },
        'neutral': {
          DEFAULT: colors.gray[500],
          dark: colors.coolGray[300]
        },
        'neutral-r': {
          DEFAULT: colors.white,
          dark: colors.gray[800]
        },
        'light': {
          DEFAULT: colors.warmGray[200],
          dark: colors.gray[500]
        },
        'light-r': {
          DEFAULT: colors.gray[800],
          dark: colors.white
        },
        'background': {
          DEFAULT: colors.white,
          dark: colors.coolGray[600]
        },
        'foreground': {
          DEFAULT: colors.gray[800],
          dark: colors.white
        }
      }
    `;

    return {
      code1,
      code2,
      user
    };
  },
});
</script>

<style lang="sass" scoped>
.color-block
  @apply w-16 rounded-md text-center p-3
</style>