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
        <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
      </div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-secondary dark:bg-secondary-dark text-secondary-r dark:text-secondary-r-dark"
      >Text</div>
      <div class="mt-2 text-center">Secondary</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-neutral dark:bg-neutral-dark text-neutral-r dark:text-neutral-r-dark"
      >Text</div>
      <div class="mt-2 text-center">Neutral</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div class="color-block bg-light dark:bg-light-dark text-light-r dark:text-light-r-dark">Text</div>
      <div class="mt-2 text-center">Light</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-success dark:bg-success-dark text-success-r dark:text-success-r-dark"
      >Text</div>
      <div class="mt-2 text-center">Success</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-warning dark:bg-warning-dark text-warning-r dark:text-warning-r-dark"
      >Text</div>
      <div class="mt-2 text-center">Warning</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div
        class="color-block bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark"
      >Text</div>
      <div class="mt-2 text-center">Danger</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
  </div>

  <div class="mt-12 mb-3 text-xl">Available classes</div>

  <anchor-title name="twutils" class="mt-5 text-lg">Tailwind utilities</anchor-title>
  <div class="mt-5">
    The Tailwind utilities will be available for each color:
    <code-block class="mt-3" lang="html" :code="code3"></code-block>
  </div>

  <anchor-title name="swutils" class="mt-8 text-lg">Semantic color as utilities</anchor-title>
  <div class="mt-5">
    The Snowind color classes can be used directly:
    <code-block class="mt-3" lang="html" :code="code4"></code-block>will do the same as:
    <code-block class="mt-3" lang="html" :code="code5"></code-block>
  </div>
  <storybook-button class="mt-5" link="story/colors--basic-utilities"></storybook-button>

  <anchor-title name="textutils" class="mt-8 text-lg">Text utilities</anchor-title>
  <div class="mt-5">
    Semantic colors as text utilities:
    <code-block class="mt-3" lang="html" :code="code7"></code-block>will do the same as:
    <code-block class="mt-3" lang="html" :code="code8"></code-block>
  </div>
  <storybook-button class="mt-5" link="story/colors--text-utilities"></storybook-button>

  <anchor-title name="blockutils" class="mt-8 text-lg">Background utilities</anchor-title>
  <div class="mt-5">
    Semantic colors as background utilities:
    <code-block class="mt-3" lang="html" :code="code9"></code-block>will do the same as:
    <code-block class="mt-3" lang="html" :code="code10"></code-block>
  </div>
  <storybook-button class="mt-5" link="story/colors--background-utilities"></storybook-button>

  <anchor-title name="hovervariants" class="mt-8 text-lg">Hover variants</anchor-title>
  <div class="mt-5 mb-3">
    To apply an hover variant for light and dark mode:
    <code-block class="mt-3" lang="html" :code="code6"></code-block>
  </div>Renders:
  <div class="p-3 mt-3 light hover:success dark:hover:secondary-dark">
    Block
    <div v-if="user.isDarkMode.value === true" class="inline-block">in dark mode</div>
  </div>
  <div class="mt-3">
    Use a
    <code class="variable">-dark</code> suffix to apply the dark color with the hover variant
  </div>
  <storybook-button class="mt-5" link="story/colors--hover-variants"></storybook-button>

  <anchor-title name="responsivevariants" class="mt-8 text-lg">Responsive variants</anchor-title>
  <div class="mt-5 mb-3">
    To apply a responsive variant for light and dark mode for the
    <code class="variable">sm</code>
    breakpoint
    <code-block class="mt-3" lang="html" :code="code11"></code-block>will display a primary block only
    for mobile, same as:
    <code-block class="mt-3" lang="html" :code="code12"></code-block>
  </div>
  <div class="mt-3">
    Use a
    <code class="variable">-dark</code> suffix to apply the dark color with the hover variant
  </div>
  <storybook-button class="mt-5" link="story/colors--responsive-variants"></storybook-button>

  <anchor-title name="configure" class="mt-12 mb-8 text-xl">Configure the colors</anchor-title>
  <div class="mt-3">
    Use the
    <i>tailwind.config.js</i> file to customize the Snowind color palette and override the
    default colors:
  </div>
  <code-block class="mt-3" lang="typescript" :code="code1"></code-block>
  <div class="mt-3">
    In this example the
    <code class="variable">primary</code> color will be overrided. The
    <code class="variable">primary-r</code> class is the primary reversed color, example for text if primary is the background.
    The dark variants has to be set as well
  </div>
  <storybook-button class="mt-8" link="story/colors--basic-utilities"></storybook-button>

  <div class="mt-12 mb-8 text-xl">Default Snowind colors</div>
  <code-block class="mt-3" lang="typescript" :code="code2"></code-block>
  <next-bar
    class="mt-24"
    :prev="{ link: '/install', text: 'Install' }"
    :next="{ link: '/storybook', text: 'Storybook' }"
  ></next-bar>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import NextBar from "@/widgets/NextBar.vue";
import AnchorTitle from "@/widgets/AnchorTitle.vue";
import StorybookButton from "@/widgets/StorybookButton.vue";
import { user } from "@/state";

export default defineComponent({
  components: {
    AnchorTitle,
    StorybookButton,
    CodeBlock,
    NextBar,
  },
  setup() {
    const code1 = `
    const colors = require('tailwindcss/colors');

    module.exports = {
      // ...
      theme: {
        extend: {
          colors: {
            // the primary background color
            'primary': {
              DEFAULT: "#somecolor",
              dark: colors.gray[700],
            },
            // the primary text color
            'primary-r': {
              DEFAULT: "#somecolor",
              dark: colors.white,
            },
          }
        },
      }
    }
    `;

    const code2 = `
    const colors = require('tailwindcss/colors');

    colors: {
      'primary': {
        DEFAULT: colors.cyan[700],
        dark: colors.gray[800],
      },
      'primary-r': {
        DEFAULT: colors.white,
        dark: colors.white,
      },
      'secondary': {
        DEFAULT: colors.cyan[500],
        dark: colors.gray[700],
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
        DEFAULT: colors.warmGray[100],
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

    const code3 = `
    <div class="text-primary">Text primary</div>
    <div class="bg-primary">Background primary</div>
    `;

    const code4 = `
    <div class="light">Light block</div>
    `;

    const code5 = `
    <div class="bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark">Light block</div>
    `;

    const code6 = `
    <div class="p-3 light hover:success dark:hover:secondary-dark">Block</div>
    `

    const code7 = `
    <div class="txt-primary">txt-primary</div>
    `;

    const code8 = `
    <div class="text-primary dark:text-primary-dark">txt-primary</div>
    `;

    const code9 = `
    <div class="block-primary">block-primary</div>
    `;

    const code10 = `
    <div class="bg-primary dark:bg-primary-dark">txt-primary</div>
    `;

    const code11 = `
    <div class="sm:background sm:dark:background-dark primary">primary mobile only</div>
    `;

    const code12 = `
    <div class="bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-dark\n\t\tsm:bg-background sm:text-foreground sm:dark:bg-background-dark sm:dark:text-foreground-dark">
      primary mobile only</div>
    `;

    return {
      code1,
      code2,
      code3,
      code4,
      code5,
      code6,
      code7,
      code8,
      code9,
      code10,
      code11,
      code12,
      user,
    };
  },
});
</script>

<style lang="sass" scoped>
.color-block
  @apply w-16 rounded-md text-center p-3
</style>