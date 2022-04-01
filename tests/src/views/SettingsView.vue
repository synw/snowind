<template>
  <div class="text-xl text-gray-500 w-max dark:text-gray-300">Settings</div>
  <sw-switch
    @change="user.toggleDarkMode()"
    :checked="user.isDarkMode.value"
    class="mt-5 switch-secondary"
  >
    <div class="ml-2">Mode sombre</div>
  </sw-switch>
  <!-- div class="mt-5">
    <div
      v-if="user.isLoggedIn.value === true"
      class="align-middle cursor-pointer"
      @click="logout()"
    >
      <i-si-glyph:sign-out class="inline-block ml-3"></i-si-glyph:sign-out>&nbsp;&nbsp;Se déconnecter
    </div>
  </div-->
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