<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Snowind" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';


export default defineComponent({
  components: {
    HelloWorld,
  },
})
</script>