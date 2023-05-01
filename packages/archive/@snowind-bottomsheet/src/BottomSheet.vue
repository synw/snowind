<template>
  <div ref="target" class="slide-y" :class="mainClass">
    <div class="flex flex-row w-full rounded-tl-lg rounded-tr-lg" :class="headerClass">
      <div class="flex-grow">
        <slot name="header"></slot>
      </div>
      <div class="flex items-center px-2" @click="close()">
        <i-fa:close></i-fa:close>
      </div>
    </div>
    <div class="h-full">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useSwipe } from '@vueuse/core'
//import { usePointerSwipe } from '@vueuse/core'
import BottomSheetController from "./controller"
import { computed } from '@vue/reactivity';

const emit = defineEmits(["close"]);
const target = ref<HTMLElement | null>(null)
const { isSwiping, direction } = useSwipe(target);

const props = defineProps({
  controller: {
    type: BottomSheetController,
    required: true
  },
  durationClass: {
    type: String,
    default: 'duration-500'
  },
  headerClass: {
    type: String,
    default: ""
  }
});

const delay = parseInt(props.durationClass.replace('duration-', ''))

function close() {
  //console.log("Close sheet from internal")
  props.controller.close();
  setTimeout(() => {
    emit("close")
  }, delay);
}

const mainClass = computed<string>(() => {
  let cls = props.durationClass
  if (props.controller.isOpened.value == true) {
    cls += ' slidedown'
  } else {
    cls += ' slideup'
  }
  return cls
})

watchEffect(() => {
  if (isSwiping.value) {
    //console.log("Is swipping", direction.value)
    if (direction.value == "DOWN") {
      close()
    }
  }
});
</script>