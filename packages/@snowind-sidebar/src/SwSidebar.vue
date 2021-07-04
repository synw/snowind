<template>
  <div :class="{
    'opened': model.store.isOpened.value === true
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
    },
    name: {
      type: String,
      default: "sidebar"
    }
  },
  emits: ["update:opened"],
  setup(props, { emit }) {
    const { opened, name } = toRefs(props);
    const model = new SwSidebarModel({ name: name.value });
    let initialized = ref(false);

    watchEffect(() => {
      if (initialized.value === true) {
        if (opened.value === true) {
          model.store.isOpened.value = true;
        } else if (opened.value === false) {
          model.store.isOpened.value = false;
        }
      }
    });

    onMounted(() => {
      emit("update:opened", model.store.isOpened.value);
      initialized.value = true;
    })

    return {
      model
    }
  },
});
</script>