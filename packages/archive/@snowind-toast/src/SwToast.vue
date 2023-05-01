<template>
  <div
    class="fixed inset-x-0 px-5 py-2 mx-auto text-sm duration-300 rounded-xl bottom-12 w-max"
    :class="transitionClass.join(' ')"
  >
    <div class="toast-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watchEffect } from "vue";
import { promiseTimeout } from '@vueuse/core';

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    delay: {
      type: Number,
      default: 1500,
    },
    transitionDelay: {
      type: Number,
      default: 300,
    }
  },
  setup(props) {
    const { show, delay, transitionDelay } = toRefs(props);
    const showToast = ref(show.value);
    const _transitionInitial = ["translate-y-24", "transform-gpu", "opacity-100", "transition-none"]
    const transitionClass = ref<Array<string>>(_transitionInitial);

    function makeTransitionOut() {
      transitionClass.value = ["transition-opacity", "opacity-0"];
    }

    function makeTransitionIn() {
      transitionClass.value = ["ease-in", "transform-gpu", "translate-y-0"];
    }

    async function pop() {
      showToast.value = true;
      makeTransitionIn();
      await promiseTimeout(transitionDelay.value);
      await promiseTimeout(delay.value);
      makeTransitionOut();
      await promiseTimeout(transitionDelay.value);
      transitionClass.value = _transitionInitial;
      showToast.value = false;
    }

    watchEffect(async () => {
      if (show.value === true) {
        await pop()
      }
    })

    return {
      showToast,
      transitionClass,
    }
  }
});
</script>
