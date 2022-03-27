<template>
  <div class="mb-8 text-2xl">Install</div>
  <code-block :code="code1" class="mt-8"></code-block>
  <div class="my-8 text-xl">Enable the plugin</div>
  <div>
    Enable the Snowind plugin in
    <i>tailwind.config.js</i>:
  </div>
  <code-block :code="code2" lang="typescript" class="mt-8"></code-block>
  <div class="mt-8">All the css is available. The Vue components must be installed independently</div>

  <div class="mt-12 text-xl">Template</div>
  <div class="mt-5">
    The
    <a href="https://github.com/synw/snowind-template">Snowind template</a> repository can be used as a starter template
  </div>

  <a name="newproject"></a>
  <div class="mt-12 text-xl">Create a new Snowind project</div>
  <div class="mt-8">
    This guide show how to create a Snowind project using Yarn, Vite and Typescript.
    Create the base Vue project:
  </div>
  <code-block :code="code3" class="mt-8"></code-block>
  <div class="mt-3">
    Select the
    <code class="variable">vue</code> and
    <code class="variable">vue-ts</code> options
  </div>

  <div class="mt-8 text-lg">1. Install the base dependencies</div>
  <code-block :code="code4" class="mt-8"></code-block>

  <div class="mt-8 text-lg">2. Configure Tailwind</div>
  <div class="mt-8">
    Create a
    <code class="variable">src/assets/index.css</code> file:
  </div>
  <code-block :code="code5" class="mt-8"></code-block>
  <div class="mt-8">
    Import this file in
    <code class="variable">src/main.ts</code>:
  </div>
  <code-block :code="code6" lang="typescript" class="mt-8"></code-block>
  <div class="mt-8">
    Create a
    <code class="variable">tailwind.config.js</code> file:
  </div>
  <code-block :code="code7" lang="javascript" class="mt-8"></code-block>
  <div class="mt-8">
    Create a
    <code class="variable">postcss.config.js</code> file:
  </div>
  <code-block :code="code8" lang="javascript" class="mt-8"></code-block>
  <div class="mt-8">
    The
    <code class="variable">vite.config.ts</code> file:
  </div>
  <code-block :code="code9" lang="javascript" class="mt-8"></code-block>

  <div class="mt-8 text-lg">3. Run</div>
  <code-block :code="code10" class="mt-8"></code-block>
  <div class="mt-8">
    To
    <router-link to="/colors" class="underline">configure the colors</router-link>&nbsp;see next section
  </div>

  <next-bar
    class="mt-24"
    :next="{ link: '/colors', text: 'Colors' }"
    :prev="{ link: '/', text: 'Introduction' }"
  ></next-bar>
</template>

<script setup lang="ts">
import CodeBlock from "@/widgets/CodeBlock.vue";
import NextBar from "@/widgets/NextBar.vue";


const code1 = `
      npm install -D @snowind/plugin
      # or
      yarn add -D @snowind/plugin
    `;

const code2 = `
    module.exports = {
      // ...
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './node_modules/@snowind/**/*.{vue,js,ts}',
      ],
      darkMode: 'class',
      plugins: [
        require('@tailwindcss/forms'),
        require('@snowind/plugin'),
        require('tailwindcss-semantic-colors'),
      ],
    };
    `;

const code3 = `
    yarn create @vitejs/app
    `;

const code4 = `
    cd myproject
    yarn add -D tailwindcss autoprefixer sass postcss tslib @tailwindcss/forms @snowind/plugin
    `;

const code5 = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    `;

const code6 = `
    import { createApp } from 'vue';
    import App from './App.vue';
    import './assets/index.css';

    createApp(App).mount('#app');
    `;

const code7 = `
    module.exports = {
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './node_modules/@snowind/**/*.{vue,js,ts}',
      ],
      darkMode: 'class',
      plugins: [
        require('@tailwindcss/forms'),
        require('@snowind/plugin'),
        require('tailwindcss-semantic-colors'),
      ],
    }
    `;

const code8 = `
    module.exports = {
      plugins: [
        require("postcss-import"),
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }
    `;

const code9 = `
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import typescript2 from "rollup-plugin-typescript2"
    const path = require('path')

    export default defineConfig({
      plugins: [
        typescript2({
          check: false,
          tsconfig: path.resolve(__dirname, 'tsconfig.json'),
          clean: true
        }),
        vue(),
      ],
      resolve: {
        alias: [
          { find: '@/', replacement: '/src/' }
        ]
      }
    })
    `;

const code10 = `
    yarn dev
    `;
</script>