<template>
  <div v-if="$router.currentRoute.value.query.partial">
    <router-view></router-view>
  </div>
  <div
    class="flex flex-row justify-center h-screen"
    :class="{ dark: user.isDarkMode.value }"
    v-else
  >
    <div class="w-screen flex flex-row justify-center max-w-screen-2xl background" id="main">
      <div class="z-30 fixed flex justify-center max-w-screen-2xl w-full h-16 p-5 mr-5">
        <div class="flex-none text-2xl cursor-pointer" @click="$router.push('/')">
          <img src="/img/logo.png" class="inline align-middle" style="height:35px;width:31px" />
          <span class="ml-3">Snowind</span>
        </div>
        <div class="flex-1 text-right">
          <div class="flex flex-row items-center justify-end h-full">
            <button
              class="border-none cursor-pointer focus:outline-none btn txt-light"
              @click="user.toggleDarkMode()"
            >
              <i-fa-solid:moon class="txt-lighter" v-if="!user.isDarkMode.value"></i-fa-solid:moon>
              <i-fa-solid:sun v-else></i-fa-solid:sun>
            </button>
            <a href="https://github.com/synw/snowind">
              <button class="text-xl border-none btn">
                <i-fa-brands:github></i-fa-brands:github>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-16 main-zone-height relative w-full">
        <div
          class="w-60 fixed main-zone-height py-6 pl-10 space-y-3 overflow-auto border-r shadow bord-lighter scrollbar-hide"
        >
          <div>
            <router-link to="/install">Install</router-link>
          </div>
          <div class="mt-3">
            <router-link to="/colors">Colors</router-link>
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
            <router-link to="/input">Input</router-link>
          </div>
          <div>
            <router-link to="/sidebar">Sidebar</router-link>
          </div>
          <div>
            <router-link to="/switch">Switch</router-link>
          </div>
          <div>
            <router-link to="/stepper">Progress stepper</router-link>
          </div>

          <div class="pt-6 pb-2 text-xl">Mobile</div>
          <div>
            <router-link to="/header">Header</router-link>
          </div>
          <div>
            <router-link to="/toast">Toast message</router-link>
          </div>

          <div class="pt-6 pb-2 text-xl">State</div>
          <div>
            <router-link to="/state/screen">Screen size</router-link>
          </div>
          <div>
            <router-link to="/state/user">User</router-link>
          </div>
          <div>
            <router-link to="/state/subviews">Subviews</router-link>
          </div>

          <div class="pt-6 pb-2 text-xl">Examples</div>
          <div>
            <router-link to="/examples/form">Form</router-link>
          </div>
        </div>
        <div class="p-6 ml-60 main-zone-height overflow-visible w-full" id="main-content">
          <router-view></router-view>
          <div class="h-24"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { user } from "./state";
</script>

<style lang="sass">

body,
html
  margin: 0
  font-family: Arial, Helvetica, sans-serif
.main-zone-height
  height: calc(100% - 4rem)
#main-content
  max-width: calc(100% - 15rem)
  & a, a:visited, a:hover
    @apply txt-primary dark:txt-secondary no-underline
.variable
  @apply txt-var
</style>

