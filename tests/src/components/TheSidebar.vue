<template>
  <sw-sidebar
    id="sw-sidebar"
    v-model:opened="sidebar"
    name="sidebar1"
    class="sw-sidebar flex flex-col h-full secondary"
  >
    <div class="flex-grow mt-5 ml-6 space-y-6">
      <div>
        <router-link to="/switch">
          <i-jam:switch-right class="text-2xl"></i-jam:switch-right>
          <span v-if="sidebar === true" class="ml-3">Switch</span>
        </router-link>
      </div>
      <div>
        <router-link to="/collapse">
          <i-clarity:collapse-card-line class="text-2xl"></i-clarity:collapse-card-line>
          <span v-if="sidebar === true" class="ml-3">Collapse</span>
        </router-link>
      </div>
    </div>
    <div
      class="flex-none h-12 mb-3 text-2xl text-center cursor-pointer"
      @click="sidebar = !sidebar"
      id="sidebar-control"
    >
      <i-fa-solid:angle-double-left v-if="sidebar === true"></i-fa-solid:angle-double-left>
      <i-fa-solid:angle-double-right v-else></i-fa-solid:angle-double-right>
    </div>
  </sw-sidebar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SwSidebar from "@snowind/sidebar";

const sidebar = ref(true);
</script>

 <style lang="sass" scoped>

#sidebar1
  &.opened
    @apply w-96
</style>


