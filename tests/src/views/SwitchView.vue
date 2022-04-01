<template>
  <div class="text-xl text-gray-500 w-max dark:text-gray-300">Switch</div>
  <sw-switch
    id="sw-switch"
    @update:value="user.toggleDarkMode()"
    v-model:value="user.isDarkMode.value"
    class="mt-5 switch-secondary"
  >
    <div class="ml-2">Dark mode</div>
  </sw-switch>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SwSwitch from "@snowind/switch";
import { user } from "@/state";

export default defineComponent({
  components: {
    SwSwitch,
  },
  setup() {

    /*async function logout() {
      await api.logout();
    }*/

    return {
      user,
      //logout,
    }
  }
})
</script>