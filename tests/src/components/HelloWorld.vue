<template>
  <div>
    <h1 class="text-success">{{ msg }}</h1>
    <button class="mt-3 btn primary" @click="count++; popToast()">count is: {{ count }}</button>
    <sw-toast :show="isToastVisible" class="secondary">
      <div>Change: {{ count }}</div>
    </sw-toast>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { SwToast, useToast } from '@snowind/toast';

export default defineComponent({
  components: {
    SwToast,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const { isToastVisible, popToast } = useToast();

    return {
      count,
      isToastVisible,
      popToast,
    }
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
