<template>
  <div class="mb-8 text-2xl">Progress stepper</div>
  <div class="mt-12 md:w-1/2">
    <sw-progress-stepper class="stepper-secondary" :steps="steps" :active-index="activeIndex"></sw-progress-stepper>
  </div>
  <div class="mt-16 flex flex-row">
    <button
      v-for="(_, i) in Object.keys(steps)"
      :key="i"
      class="mr-1 btn bord-lighter"
      :class="activeIndex == i ? 'txt-lighter' : 'txt-light'"
      @click="activeIndex = i"
    >{{ steps[i].label }}</button>
  </div>
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse === true,
      'slidedown': collapse === false
    }"
    class="mt-4"
  >
    Template:
    <code-block :code="code1" class="mt-3"></code-block>Script:
    <code-block :code="code2" lang="typescript" class="mt-3"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapse" @toggle="collapse = !collapse"></code-button>

  <anchor-title name="colors" class="mt-8 mb-8 text-lg">Colors and style</anchor-title>
  <div class="mt-5">
    The stepper is available for all the defined semantic colors (the default Snowind ones and the ones defined
    by the user), using a css class:
    <code
      class="variable"
    >
      <span>stepper-</span>
      <i>mycolorname</i>
    </code>. Example with a
    <code class="variable">stepper-success</code> class:
    <div class="mt-12 md:w-1/2">
      <sw-progress-stepper class="stepper-success" :steps="steps" :active-index="activeIndex2"></sw-progress-stepper>
    </div>
    <div class="mt-16 flex flex-row">
      <button
        v-for="(step, i) in Object.keys(steps)"
        :key="i"
        class="mr-1 btn bord-lighter"
        :class="activeIndex2 == i ? 'txt-lighter' : 'txt-light'"
        @click="activeIndex2 = i"
      >{{ steps[i].label }}</button>
    </div>
  </div>

  <anchor-title name="slots" class="mt-8 mb-8 text-lg">Slots</anchor-title>
  <div class="mt-5">To customize the label and content of the stepper some slots are available:</div>
</template>

<script setup lang="ts">
import SwProgressStepper from "@snowind/stepper";
import { reactive, ref } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import CodeButton from "@/widgets/CodeButton.vue";
import NextBar from "@/widgets/NextBar.vue";
import AnchorTitle from "@/widgets/AnchorTitle.vue";

const steps = reactive([
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" }
]);
const activeIndex = ref(0);
const activeIndex2 = ref(1);

const collapse = ref(true);

const code1 = `
    <div class="mb-8 text-2xl">Progress stepper</div>
    <div class="mt-12 md:w-1/2">
      <sw-progress-stepper 
        class="stepper-secondary" 
        :steps="steps" 
        :active-index="activeIndex">
      </sw-progress-stepper>
    </div>
    <div class="mt-16 flex flex-row">
      <button
        v-for="(step, i) in Object.keys(steps)"
        :key="i"
        class="mr-1 btn bord-lighter"
        :class="activeIndex == i ? 'txt-lighter' : 'txt-light'"
        @click="activeIndex = i"
      >{{ steps[i].label }}</button>
    </div>

`;

const code2 = `
    import SwProgressStepper from "@snowind/stepper";
    import { reactive, ref } from "vue";

    const steps = reactive([
      { label: "Step 1" },
      { label: "Step 2" },
      { label: "Step 3" }
    ]);
    const activeIndex = ref(0);

`;
</script>