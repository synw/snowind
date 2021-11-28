<template>
  <div class="text-2xl">Introduction</div>
  <div class="mt-8">
    Snowind is a set of tools for Vuejs 3 and Tailwindcss to help create a design system. It is composed
    of a Tailwindcss plugin and some Vuejs 3 components.
  </div>
  <ul class="mt-5 ml-5 space-y-2 list-disc list-inside">
    <li>
      <span class="font-semibold">Consistent design system</span>: the widgets rely on
      a default high level customizable set of
      <router-link to="/colors" class="underline">colors</router-link>
    </li>
    <li>
      <span class="font-semibold">Dark mode support</span>: dark mode is fully supported out of the box
    </li>
  </ul>

  <div class="mt-12 mb-8 text-xl">Css</div>
  <ul class="mt-5 ml-5 space-y-2 list-disc list-inside">
    <li>
      <router-link to="/button" class="underline">Button</router-link>: styled button using only
      css and base colors
    </li>
    <li>
      <router-link to="/collapse" class="underline">Collapse</router-link>: a vertical
      collapsable widget: can be opened and closed and uses a configurable css animation
    </li>
  </ul>

  <div class="mt-12 mb-8 text-xl">Widgets</div>
  <ul class="mt-5 ml-5 space-y-2 list-disc list-inside">
    <li>
      <router-link to="/input" class="underline">Input</router-link>: a reactive input form
      field with debouncing and validation management
    </li>
    <li>
      <router-link to="/sidebar" class="underline">Sidebar</router-link>: a vertical
      collapsable sidebar
    </li>
    <li>
      <router-link to="/switch" class="underline">Switch</router-link>: a switch
      checkbox like widget
    </li>
  </ul>

  <div class="mt-12 mb-8 text-xl">Mobile</div>
  <ul class="mt-5 ml-5 space-y-2 list-disc list-inside">
    <li>
      <router-link to="/header" class="underline">Header</router-link>: a responsive header with a mobile menu widget
    </li>
    <li>
      <router-link to="/toast" class="underline">Toast</router-link>: a toast message
    </li>
  </ul>

  <div class="mt-12 mb-8 text-xl">State management</div>
  <ul class="mt-5 ml-5 space-y-2 list-disc list-inside">
    <li>
      <router-link to="/state/screen" class="underline">Screen size</router-link>: responsive
      utilities
    </li>
    <li>
      <router-link to="/state/user" class="underline">User</router-link>: presistent user preferences with
      dark mode support
    </li>
  </ul>

  <div class="mt-12 mb-8 text-xl">Examples</div>
  <ul class="mt-5 ml-5 space-y-2 list-disc list-inside">
    <li>
      <router-link to="/examples/form" class="underline">Form</router-link>: a complete form example
      with validation and hints
    </li>
  </ul>
  <next-bar class="mt-24" :next="{ link: '/install', text: 'Install' }"></next-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NextBar from "@/widgets/NextBar.vue";

export default defineComponent({
  components: {
    NextBar
  }
});
</script>
