<template>
  <div class="mb-5">The validation state can be customized with css:</div>
  <div id="form3">
    <sw-input
      v-model:value="form.name.val"
      v-model:isvalid="form.name.isValid"
      :validator="form.name.validator"
      placeholder="username"
      class="w-40 border-t-0 border-b border-l-0 border-r-0 border-gray-500"
    ></sw-input>
  </div>
  <sw-collapse :model="collapse" class="pt-5">
    <code-block :code="code1" class="mb-3"></code-block>
    <code-block :code="code2" lang="html" class="mb-3"></code-block>
  </sw-collapse>
  <code-button class="mt-3" :collapse="collapse"></code-button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import { SwInput } from "@/snowind";
import SwCollapse from "@/snowind/collapse/SwCollapse.vue";
import SwCollapseModel from "@/snowind/collapse/model";
import CodeButton from "@/widgets/CodeButton.vue";

export default defineComponent({
  components: {
    CodeBlock,
    SwInput,
    SwCollapse,
    CodeButton
  },
  setup() {
    const collapse = new SwCollapseModel();

    const form = reactive({
      name: {
        val: "",
        isValid: null,
        // eslint-disable-next-line
        validator: (v: string) => {
          if (v.length === 0) {
            return null;
          } else if (v.length >= 3) {
            return true;
          }
          return false;
        },
      },
    });

    const code1 = `
    <div id="form">
      <sw-input
        v-model:value="form.name.val"
        v-model:isvalid="form.name.isValid"
        :validator="form.name.validator"
        placeholder="username">
      </sw-input>
    </div>
    `;

    const code2 = `
    <style lang="sass">
      #form
        & input
          @apply ring-0 dark:bg-transparent border-b border-t-0 border-l-0 border-r-0 w-40
          &.neutral
            @apply border-secondary dark:border-secondary-dark
          &.invalid
            @apply bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark
          &.valid
            @apply border-success dark:border-success-dark text-success dark:text-success-dark
    </style>
    `;

    return {
      form,
      code1,
      code2,
      collapse,
    };
  },
});
</script>

<style lang="sass">
#form3
  & input
    @apply ring-0 dark:bg-transparent border-b border-t-0 border-l-0 border-r-0 w-40
    &.neutral
      @apply border-secondary dark:border-secondary-dark
    &.invalid
      @apply bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark
    &.valid
      @apply border-success dark:border-success-dark text-success dark:text-success-dark
</style>
