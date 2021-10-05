<template>
  <div :class="{
    'opened': model.isOpened.value === true
  }" class="sw-sidebar slide-x">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, ref, toRefs, watchEffect
} from "vue";
import SwSidebarModel from "./model";

export default defineComponent({
  props: {
    opened: {
      type: Boolean as () => boolean,
      required: true
    }
  },
  emits: ["update:opened"],
  setup(props, { emit }) {
    const { opened } = toRefs(props);
    const model = new SwSidebarModel();
    let initialized = ref(false);

    watchEffect(() => {
      if (initialized.value === true) {
        if (opened.value === true) {
          model.isOpened.value = true;
        } else if (opened.value === false) {
          model.isOpened.value = false;
        }
      }
    });

    onMounted(() => {
      emit("update:opened", model.isOpened.value);
      initialized.value = true;
    })

    return {
      model
    }
  },
});
</script>