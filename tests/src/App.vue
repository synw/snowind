<template>
  <div
    id="toplevel"
    :class="{ dark: user.isDarkMode.value == true }"
    class="h-screen flex flex-col"
  >
    <the-header></the-header>
    <div class="flex flex-row h-full w-full">
      <the-sidebar></the-sidebar>
      <div class="p-3 background container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TheSidebar from "./components/TheSidebar.vue";
import { user } from "@/state";
</script>




