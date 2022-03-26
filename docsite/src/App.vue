<template>
  <div class="flex flex-row justify-center w-full" :class="{ dark: user.isDarkMode.value }">
    <div class="w-screen max-w-screen-xl background">
      <div class="fixed z-0 flex w-screen h-16 max-w-screen-xl p-5 min-w-screen-xl">
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
      <div id="main-zone" class="mt-16">
        <div
          class="fixed w-48 h-full pt-6 pl-10 space-y-3 overflow-auto border-r shadow bord-lighter"
        >
          <div>
            <router-link to="/install">Install</router-link>
          </div>
          <div class="mt-3">
            <router-link to="/colors">Colors</router-link>
          </div>
          <div class="mt-3">
            <router-link to="/ressources">Ressources</router-link>
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
        <div class="p-6 pb-24 ml-48" id="main-content">
          <router-view></router-view>
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
#main-zone
  height: calc(100% - 4rem)
#main-content
  & a, a:visited, a:hover
    @apply txt-primary dark:txt-secondary no-underline
.variable
  @apply txt-var
</style>

