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

<script setup lang="ts">
import { onBeforeMount, ref, toRefs, watch } from "vue";
import { guidGenerator } from "./utils";

const props = defineProps({
  big: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:value"]);

const { value } = toRefs(props);

const isChecked = ref<boolean>(false);
const sid = guidGenerator()

function onChange() {
  emit("update:value", isChecked.value);
}

onBeforeMount(() => {
  isChecked.value = value.value;
});

watch(() => props.value, (newval, oldval) => {
  //console.log("Watch Update is checked from", newval, "to", oldval)
  isChecked.value = newval
});
</script>
