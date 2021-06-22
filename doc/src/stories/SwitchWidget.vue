<template>
  <sw-switch :label="label" v-model:value="model" :big="big"></sw-switch>
</template>


<script lang="ts">
import { reactive, ref } from 'vue';
import { SwSwitch } from '../snowind';

export default {
  components: {
    SwSwitch
  },
  props: {
    label: {
      type: String,
      default: "Switch"
    },
    big: {
      type: Boolean,
      default: false
    },
    darkVariant: {
      type: Boolean,
      default: false
    }
  },

  // eslint-disable-next-line
  setup(props: any) {
    props = reactive(props);
    const model = ref(props.checked);

    return {
      model
    }
  },
};
</script>
