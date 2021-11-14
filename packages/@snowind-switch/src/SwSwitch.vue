<template>
  <div class="inline-block sw-switch" style="background-color:transparent;color:inherit">
    <label :for="'toggle' + sid" class="flex items-center cursor-pointer">
      <div class="relative">
        <input
          :id="'toggle' + sid"
          type="checkbox"
          class="sr-only"
          :checked="isChecked"
          v-model="isChecked"
          @change="onChange()"
        />
        <div class="block rounded-full bg" :class="{ 'big': big === true }"></div>
        <div
          class="absolute transition rounded-full dot left-1 top-1"
          :class="{ 'big': big === true }"
        ></div>
      </div>
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, toRefs } from "vue";
import { guidGenerator } from "./utils";

export default defineComponent({
  props: {
    checked: {
      type: Boolean as () => boolean | null,
      default: null,
    },
    big: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean as () => boolean | null,
      default: null
    }
  },
  emits: ["update:value", "change"],
  setup(props, { emit }) {
    const { checked, value } = toRefs(props);

    const isChecked = ref<boolean>(false);
    const sid = guidGenerator()

    function onChange() {
      emit("change", isChecked.value);
      emit("update:value", isChecked.value);
    }

    onBeforeMount(() => {
      // intitialize the checked state from the v-model if present
      // or from the checked prop
      if (value.value !== null) {
        isChecked.value = value.value;
        return
      }
      if (checked.value !== null) {
        isChecked.value = checked.value;
      }
    });

    return {
      onChange,
      isChecked,
      sid
    };
  },
});
</script>
