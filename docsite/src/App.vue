<template>
  <div
    class="flex flex-row justify-center w-full"
    :class="{ dark: user.isDarkMode.value === true }"
  >
    <div
      class="w-screen max-w-screen-xl min-w-screen-xl dark:text-foreground-dark dark:bg-background-dark"
    >
      <div class="fixed flex w-screen h-16 max-w-screen-xl p-5 min-w-screen-xl">
        <div class="flex-none text-2xl cursor-pointer" @click="$router.push('/')">
          <img src="/img/logo.png" class="inline align-middle" style="height:35px;width:31px" />
          <span class="ml-3">Snowind</span>
        </div>
        <div class="flex-1 text-right">
          <div class="flex flex-row items-center justify-end h-full">
            <button class="text-xl border-none btn">
              <i-fa-brands:github></i-fa-brands:github>
            </button>
            <button
              class="text-gray-300 border-none cursor-pointer focus:outline-none btn"
              @click="user.toggleDarkMode()"
            >
              <i :class="modeIcon"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="main-zone" class="mt-16">
        <div
          class="fixed w-48 h-full pt-6 pl-10 space-y-3 border-r shadow border-light dark:border-light-dark"
        >
          <div>
            <router-link to="/install">Install</router-link>
          </div>
          <div class="mt-3">
            <router-link to="/colors">Colors</router-link>
          </div>
          <div class="mt-3">
            <router-link to="/storybook">Storybook</router-link>
          </div>
          <div class="pt-6 pb-2 text-xl">Css</div>
          <div>
            <router-link to="/button">Button</router-link>
          </div>
          <div>
            <router-link to="/collapse">Collapse</router-link>
          </div>

          <div class="pt-6 pb-2 text-xl">Widgets</div>
          <div>
            <router-link to="/header">Header</router-link>
          </div>
          <div>
            <router-link to="/input">Input</router-link>
          </div>
          <div>
            <router-link to="/sidebar">Sidebar</router-link>
          </div>
          <div>
            <router-link to="/switch">Switch</router-link>
          </div>

          <div class="pt-6 pb-2 text-xl">Examples</div>
          <div>
            <router-link to="/examples/form">Form</router-link>
          </div>
        </div>
        <div class="p-6 pb-24 ml-48" id="main-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { user } from "@/state";

export default defineComponent({
  setup() {
    const modeIcon = computed<string>(() => {
      if (user.isDarkMode.value === true) {
        return "fas fa-sun text-xl";
      }
      return "fas fa-moon text-xl";
    });

    return {
      user,
      modeIcon,
    };
  },
});
</script>

<style lang="sass">
body,
html
  margin: 0
  font-family: Arial, Helvetica, sans-serif
#main-zone
  height: calc(100% - 4rem)
#main-content
  & a, a:visited, a:hover
    @apply text-primary dark:text-secondary-dark
.dark
  @apply bg-gray-600
.variable
  @apply text-danger dark:text-yellow-300
</style>

