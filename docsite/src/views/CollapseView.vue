<template>
  <div class="mb-8 text-2xl">Collapse</div>
  <button
    class="mt-4 btn lighter"
    @click="collapse = !collapse"
    v-html="collapse ? 'Open' : 'Close'"
  ></button>
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse === true,
      'slidedown': collapse === false
    }"
    class="mt-4"
  >
    <div class="p-3 mt-3 border shadow">{{ textBlock }}</div>
  </div>

  <div
    :class="{
      'slide-y': true,
      'slideup': collapseCode1 === true,
      'slidedown': collapseCode1 === false
    }"
    class="mt-4"
  >
    Template:
    <code-block :code="code1" class="my-3"></code-block>Script:
    <code-block :code="code2" lang="typescript" class="mt-3"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapseCode1" @toggle="collapseCode1 = !collapseCode1"></code-button>

  <div class="my-8 text-xl">Style</div>
  <p>Configure the animation with css</p>
  <button
    class="mt-4 btn lighter"
    @click="collapse2 = !collapse2"
    v-html="collapse2 ? 'Open with delay' : 'Close with delay'"
  ></button>
  <div
    :class="{
      'slideup': collapse2 === true,
      'slidedown': collapse2 === false
    }"
    class="mt-4 duration-500 delay-1000 slide-y"
  >
    <div class="p-3 mt-3 border shadow">{{ textBlock }}</div>
  </div>
  <p class="mt-5">
    Here the animation will occur after a delay of 1 second and has a duration of 500
    milliseconds
  </p>

  <div
    :class="{
      'slide-y': true,
      'slideup': collapseCode2 === true,
      'slidedown': collapseCode2 === false
    }"
    class="mt-4"
  >
    <code-block :code="code3"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapseCode2" @toggle="collapseCode2 = !collapseCode2"></code-button>

  <next-bar
    class="mt-24"
    :prev="{ link: '/button', text: 'Button' }"
    :next="{ link: '/input', text: 'Input' }"
  ></next-bar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import CodeButton from "@/widgets/CodeButton.vue";
import { textBlock } from "../const";
import NextBar from "@/widgets/NextBar.vue";


const collapse = ref(true);
const collapseCode1 = ref(true);
const collapse2 = ref(true);
const collapseCode2 = ref(true);
const code1 = `
    <button class="mt-4 btn" @click="collapse = !collapse" v-html="collapse ? 'Open' : 'Close'"></button>
    <div
      :class="{
        'slide-y': true,
        'slideup': collapse === true,
        'slidedown': collapse === false
      }"
      class="mt-4"
    >
    </div>
    `;

const code2 = `
    const collapse = ref(false);
    `;

const code3 = `
    <button
      class="mt-4 btn"
      @click="collapse2 = !collapse2"
      v-html="collapse2 ? 'Open with delay' : 'Close with delay'"
    ></button>
    <div
      :class="{
        'slideup': collapse2 === true,
        'slidedown': collapse2 === false
      }"
      class="mt-4 duration-500 delay-1000 slide-y"
    >
    </div>
    `;
</script>

<style lang="sass">
#collapse2.slide-y
  @apply duration-1000
</style>