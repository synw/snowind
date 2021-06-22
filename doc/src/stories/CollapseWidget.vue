<template>
  <button
    class="mt-3 btn"
    @click="onClick()"
    v-html="model.isCollapsed.value === true ? 'Show' : 'Hide'"
  ></button>
  <sw-collapse :model="model">
    <div class="p-3 mt-3 border shadow">{{ textBlock }}</div>
  </sw-collapse>
</template>


<script lang="ts">
import { reactive, watchEffect } from 'vue';
import { SwCollapse, SwCollapseModel } from '../snowind';
import { textBlock } from "../const";

export default {
  components: {
    SwCollapse
  },
  props: {
    isCollapsed: {
      type: Boolean,
      default: true
    }
  },

  // eslint-disable-next-line
  setup(props: any) {
    props = reactive(props);

    const model = new SwCollapseModel();

    watchEffect(() => {
      model.isCollapsed.value = props.isCollapsed
    });

    function onClick(): void {
      model.toggle();
    }

    return {
      model,
      textBlock,
      onClick
    }
  },
};
</script>
