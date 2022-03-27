<template>
  <div class="mb-8 text-2xl">Colors</div>
  <div>
    The Snowind default palette is a set of semantic colors created with the
    <a
      href="https://github.com/synw/tailwindcss-semantic-colors"
    >tailwindcss-semantic-colors plugin</a>. They can be
    customized in the Tailwind configuration file
  </div>
  <div class="grid grid-flow-col gap-8 mt-5 auto-cols-max">
    <div class="inline-block">
      <div class="color-block primary">Text</div>
      <div class="mt-2 text-center">
        Primary
        <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
      </div>
    </div>
    <div class="inline-block">
      <div class="color-block secondary">Text</div>
      <div class="mt-2 text-center">Secondary</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div class="color-block light">Text</div>
      <div class="mt-2 text-center">Light</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div class="color-block lighter">Text</div>
      <div class="mt-2 text-center">Lighter</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div class="color-block success">Text</div>
      <div class="mt-2 text-center">Success</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div class="color-block warning">Text</div>
      <div class="mt-2 text-center">Warning</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
    <div class="inline-block">
      <div class="color-block danger">Text</div>
      <div class="mt-2 text-center">Danger</div>
      <div v-if="user.isDarkMode.value === true" class="text-center">dark</div>
    </div>
  </div>

  <div class="mt-8">
    Check the
    <a
      href="https://github.com/synw/tailwindcss-semantic-colors#usage"
    >semantic colors plugin doc</a>
    for examples of semantic color utilities usage
  </div>

  <anchor-title name="configure" class="mt-12 mb-8 text-xl">Configure the colors</anchor-title>
  <div class="mt-3">
    Use the
    <i>tailwind.config.js</i> file to customize the Snowind color palette and override the
    default colors:
  </div>
  <code-block class="mt-3" lang="typescript" :code="code1"></code-block>
  <div class="mt-3">
    In this example the
    <code class="variable">primary</code> color will be overrided
  </div>

  <div class="mt-12 mb-8 text-xl">Default Snowind semantic colors</div>
  <code-block class="mt-3" lang="typescript" :code="code2"></code-block>
  <next-bar
    class="mt-24"
    :prev="{ link: '/install', text: 'Install' }"
    :next="{ link: '/ressources', text: 'Ressources' }"
  ></next-bar>
</template>


<script setup lang="ts">
import CodeBlock from "@/widgets/CodeBlock.vue";
import NextBar from "@/widgets/NextBar.vue";
import AnchorTitle from "@/widgets/AnchorTitle.vue";
import StorybookButton from "@/widgets/StorybookButton.vue";
import { user } from "../state";


const code1 = `
    const colors = require('tailwindcss/colors');

    module.exports = {
      // ...
      theme: {
        extend: {
          semanticColors: {
            primary: {
              light: {
                bg: colors.cyan[800],
                txt: colors.white
              },
              dark: {
                bg: colors.cyan[900],
                txt: colors.neutral[100]
              }
            }
          }
        }
      }
    }
    `;

const code2 = `
    const colors = require('tailwindcss/colors');

    theme: {
        semanticColors: {
          primary: {
            light: {
              bg: colors.cyan[700],
              txt: colors.white
            },
            dark: {
              bg: colors.cyan[800],
              txt: colors.neutral[100]
            }
          },
          secondary: {
            light: {
              bg: colors.cyan[500],
              txt: colors.white
            },
            dark: {
              bg: colors.slate[600],
              txt: colors.neutral[100]
            }
          },
          success: {
            light: {
              bg: colors.green[600],
              txt: colors.white
            },
            dark: {
              bg: colors.green[600],
              txt: colors.neutral[100]
            }
          },
          warning: {
            light: {
              bg: colors.amber[500],
              txt: colors.white
            },
            dark: {
              bg: colors.amber[500],
              txt: colors.neutral[100]
            }
          },
          danger: {
            light: {
              bg: colors.red[500],
              txt: colors.white
            },
            dark: {
              bg: colors.red[400],
              txt: colors.neutral[100]
            }
          },
          light: {
            light: {
              bg: colors.gray[500],
              txt: colors.white
            },
            dark: {
              bg: colors.gray[300],
              txt: colors.gray[800]
            }
          },
          lighter: {
            light: {
              bg: colors.slate[200],
              txt: colors.gray[800]
            },
            dark: {
              bg: colors.neutral[700],
              txt: colors.white
            }
          },
          background: {
            light: {
              bg: colors.white,
              txt: colors.gray[800]
            },
            dark: {
              bg: "#272822",
              txt: colors.neutral[300]
            }
          },
        }
      }
    }
    `;
</script>

<style lang="sass" scoped>
.color-block
  @apply w-16 rounded-md text-center p-3
</style>