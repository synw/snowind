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
    <code class="variable">stepper-success</code> class and 5 steps:
    <div class="mt-12 md:w-2/3">
      <sw-progress-stepper class="stepper-success" :steps="steps2" :active-index="activeIndex2"></sw-progress-stepper>
    </div>
    <div class="mt-16 flex flex-row">
      <button
        class="mr-1 btn bord-lighter"
        :class="activeIndex2 != 0 ? 'txt-light' : 'txt-lighter'"
        @click="activeIndex2 != 0 ? --activeIndex2 : null"
      >Previous</button>
      <button
        class="mr-1 btn bord-lighter"
        :class="activeIndex2 != 4 ? 'txt-light' : 'txt-lighter'"
        @click="activeIndex2 != 4 ? ++activeIndex2 : null"
      >Next</button>
    </div>
    <div
      :class="{
        'slide-y': true,
        'slideup': collapse5 === true,
        'slidedown': collapse5 === false
      }"
      class="mt-4"
    >
      Script:
      <code-block :code="code6" lang="typescript" class="mt-3"></code-block>Template:
      <code-block :code="code7" class="mt-3"></code-block>
    </div>
    <code-button class="mt-3" :collapse="collapse5" @toggle="collapse5 = !collapse5"></code-button>
  </div>

  <anchor-title name="customize-content" class="mt-8 mb-8 text-lg">Customize content</anchor-title>
  <div class="mt-5">To customize the content of the circle declare it's content:</div>
  <div class="mt-12 md:w-1/2">
    <sw-progress-stepper class="stepper-light" :steps="steps3" :active-index="activeIndex3"></sw-progress-stepper>
    <div class="mt-16 flex flex-row">
      <button
        v-for="(step, i) in Object.keys(steps)"
        :key="i"
        class="mr-1 btn bord-lighter"
        :class="activeIndex3 == i ? 'txt-lighter' : 'txt-light'"
        @click="activeIndex3 = i"
      >{{ steps[i].label }}</button>
    </div>
  </div>
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse2 === true,
      'slidedown': collapse2 === false
    }"
    class="mt-4"
  >
    <code-block :code="code3" lang="typescript" class="mt-3"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapse2" @toggle="collapse2 = !collapse2"></code-button>
  <div class="mt-5">
    Or use the
    <code class="variable">content</code> slot for more control. Example to use an icon
    only on the third step:
    <div class="mt-12 md:w-1/2">
      <sw-progress-stepper class="stepper-lighter" :steps="steps" :active-index="activeIndex4">
        <template #content="slotProps">
          <svg
            v-if="slotProps.index == 2"
            class="text-xl"
            :class="activeIndex3 == 2 ? '' : 'txt-light'"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z"
            />
          </svg>
        </template>
      </sw-progress-stepper>
      <div class="mt-16 flex flex-row">
        <button
          v-for="(step, i) in Object.keys(steps)"
          :key="i"
          class="mr-1 btn bord-lighter"
          :class="activeIndex4 == i ? 'txt-lighter' : 'txt-light'"
          @click="activeIndex4 = i"
        >{{ steps[i].label }}</button>
      </div>
    </div>
    <div
      :class="{
        'slide-y': true,
        'slideup': collapse3 === true,
        'slidedown': collapse3 === false
      }"
      class="mt-4"
    >
      <code-block :code="code4" class="mt-3"></code-block>
    </div>
    <code-button class="mt-3" :collapse="collapse3" @toggle="collapse3 = !collapse3"></code-button>
  </div>

  <anchor-title name="customize-label" class="mt-8 mb-8 text-lg">Customize label</anchor-title>
  <div class="mt-5">
    To customize the label under the circle use the
    <code class="variable">label</code> slot:
  </div>
  <div class="mt-12 md:w-1/2">
    <sw-progress-stepper class="stepper-light" :steps="steps3" :active-index="activeIndex5">
      <template #label="slotProps">
        <div :class="slotProps.index == activeIndex5 ? 'txt-success' : 'txt-light'">
          Label for
          <span v-html="slotProps.step.content"></span>
        </div>
      </template>
    </sw-progress-stepper>
    <div class="mt-16 flex flex-row">
      <button
        v-for="(step, i) in Object.keys(steps3)"
        :key="i"
        class="mr-1 btn bord-lighter"
        :class="activeIndex5 == i ? 'txt-lighter' : 'txt-light'"
        @click="activeIndex5 = i"
      >{{ steps[i].label }}</button>
    </div>
  </div>
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse4 === true,
      'slidedown': collapse4 === false
    }"
    class="mt-4"
  >
    <code-block :code="code5" class="mt-3"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapse4" @toggle="collapse4 = !collapse4"></code-button>

  <anchor-title name="install" class="mt-12 mb-8 text-lg">Install</anchor-title>
  <code lang="bash">npm install @snowind/stepper</code>
  <br />
  <code class="mt-3 text-neutral"># or</code>
  <br />
  <code class="mt-3">yarn add @snowind/stepper</code>

  <div class="mt-12 mb-8 text-xl">Props</div>
  <props-table :tableData="propsData"></props-table>

  <next-bar
    class="mt-24"
    :prev="{ link: '/switch', text: 'Switch' }"
    :next="{ link: '/header', text: 'Header' }"
  ></next-bar>
</template>

<script setup lang="ts">
import SwProgressStepper from "@snowind/stepper";
import PropsTable from "@/widgets/PropsTable.vue";
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
const steps2 = reactive([
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
  { label: "Step 4" },
  { label: "Step 5" },
]);
const steps3 = reactive([
  { label: "Step 1", content: "One" },
  { label: "Step 2", content: "Two" },
  { label: "Step 3", content: "<i>3</i>" }
]);
const activeIndex = ref(0);
const activeIndex2 = ref(1);
const activeIndex3 = ref(1);
const activeIndex4 = ref(0);
const activeIndex5 = ref(0);

const collapse = ref(true);
const collapse2 = ref(true);
const collapse3 = ref(true);
const collapse4 = ref(true);
const collapse5 = ref(true);

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

const code3 = `
    const steps3 = reactive([
      { label: "Step 1", content: "One" },
      { label: "Step 2", content: "Two" },
      { label: "Step 3", content: "<i>3</i>" }
    ]);
    const activeIndex3 = ref(1);

`;

const code4 = `
      <sw-progress-stepper class="stepper-lighter" :steps="steps" :active-index="activeIndex4">
        <template #content="slotProps">
          <svg
            v-if="slotProps.index == 2"
            class="text-xl"
            :class="activeIndex3 == 2 ? '' : 'txt-light'"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z"
            />
          </svg>
        </template>
      </sw-progress-stepper>

`;

const code5 = `
      <sw-progress-stepper class="stepper-light" :steps="steps2" :active-index="activeIndex5">
        <template #label="slotProps">
          <div :class="slotProps.index == activeIndex5 ? 'txt-success' : 'txt-light'">
            Label for
            <span v-html="slotProps.step.content"></span>
          </div>
        </template>
      </sw-progress-stepper>

`;

const code6 = `
    const steps2 = reactive([
      { label: "Step 1" },
      { label: "Step 2" },
      { label: "Step 3" },
      { label: "Step 4" },
      { label: "Step 5" },
    ]);
    const activeIndex2 = ref(1);
    
`;

const code7 = `
    <div class="mt-12 md:w-2/3">
      <sw-progress-stepper 
        class="stepper-success" 
        :steps="steps2" 
        :active-index="activeIndex2">
      </sw-progress-stepper>
    </div>
    <div class="mt-16 flex flex-row">
      <button
        class="mr-1 btn bord-lighter"
        :class="activeIndex2 != 0 ? 'txt-light' : 'txt-lighter'"
        @click="activeIndex2 != 0 ? --activeIndex2 : null"
      >Previous</button>
      <button
        class="mr-1 btn bord-lighter"
        :class="activeIndex2 != 4 ? 'txt-light' : 'txt-lighter'"
        @click="activeIndex2 != 4 ? ++activeIndex2 : null"
      >Next</button>
    </div>

`;

const propsData: Array<Record<string, string | boolean>> = [
  {
    prop: "steps",
    description: "The steps data",
    type: "Array&lt;{ label: string, content?: string }&gt;",
    values: "",
    default: "",
    required: true,
  },
  {
    prop: "activeIndex",
    description: "The active step ref index",
    type: "Ref&lt;number&gt;",
    values: "",
    default: "",
    required: true,
  },
];
</script>