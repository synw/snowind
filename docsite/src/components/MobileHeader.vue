<template>
  <sw-header class="h-12 primary" @togglemenu="isMenu1Visible = !isMenu1Visible">
    <template #branding>
      <div class="ml-5 text-lg">Branding2</div>
    </template>
    <template #mobile-branding>
      <div class="ml-5 text-lg">Mobile branding</div>
    </template>
    <template #mobile-back>
      <i-ion-arrow-back-outline
        class="inline-flex ml-2 text-3xl"
        v-if="$router.currentRoute.value.path != ''"
      ></i-ion-arrow-back-outline>
    </template>
    <template #menu>
      <div class="flex flex-row items-center justify-end h-full space-x-1">
        <button class="border-none btn" @click="closeMenu1()">Page 1</button>
        <button class="border-none btn" @click="closeMenu1()">Page 2</button>
        <div class="px-5 text-lg cursor-pointer" @click="user.toggleDarkMode()">
          <i-fa-solid-moon v-if="user.isDarkMode.value == false"></i-fa-solid-moon>
          <i-fa-solid-sun v-else></i-fa-solid-sun>
        </div>
      </div>
    </template>
  </sw-header>
  <sw-mobile-menu :is-visible="isMenu1Visible" class="light" breakpoint="2xl">
    <div class="flex flex-col p-3 space-y-5">
      <button class="border-none btn">Page 1</button>
      <button class="border-none btn">Page 2</button>
    </div>
  </sw-mobile-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { user } from "@/state";
import { SwHeader, SwMobileMenu } from "@snowind/header";

const isMenu1Visible = ref(false);

function closeMenu1() {
  isMenu1Visible.value = false;
}
</script>