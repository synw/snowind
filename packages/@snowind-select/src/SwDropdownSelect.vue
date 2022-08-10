<template>
  <div class="relative z-10 w-full min-h-[2rem] text-sm">
    <div class="absolute background top-0 right-0 flex flex-col justify-start w-full">
      <div class="flex flex-row w-full lighter" @click="collapse = !collapse">
        <div class="flex-grow">
          <button class="btn w-full text-left">
            <slot name="main"></slot>
          </button>
        </div>
        <div class="flex justify-center items-center text-lg mr-2">
          <carret-down v-if="collapse"></carret-down>
          <carret-up v-else></carret-up>
        </div>
      </div>
      <div
        :class="collapse === true ? ['slideup'] : ['slidedown']"
        class="slide-y duration-200 border bord-lighter"
      >
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CarretDown from './CarretDown.vue';
import CarretUp from './CarretUp.vue';

const props = defineProps({
  contentData: {
    type: Array,
    default: []
  }
});
const emit = defineEmits(["changepreset"]);

const collapse = ref(true);

</script>