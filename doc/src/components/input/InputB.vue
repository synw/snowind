<template>
  <div id="form2">
    <sw-input
      v-model:value="form.name.val"
      v-model:isvalid="form.name.isValid"
      :validator="form.name.validator"
      inlineLabel="Username"
    ></sw-input>
    <sw-input
      class="mt-5"
      v-model:value="form.password.val"
      v-model:isvalid="form.password.isValid"
      :validator="form.password.validator"
      inlineLabel="Password"
      type="password"
    ></sw-input>
  </div>
  <sw-collapse :model="collapse" class="pt-5">
    Template:
    <code-block :code="code1" class="mb-3"></code-block>Script:
    <code-block :code="code2" lang="typescript"></code-block>
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
          if (v.length >= 3) {
            return true;
          }
          return false;
        },
      },
      password: {
        val: "",
        isValid: false,
        // eslint-disable-next-line
        validator: (v: string) => {
          if (v.length >= 6) {
            return true;
          }
          return false;
        },
      },
    });

    const code1 = `
    <sw-input
      v-model:value="form.name.val"
      v-model:isvalid="form.name.isValid"
      :validator="form.name.validator"
      inlineLabel="Username">
    </sw-input>
    <sw-input
      class="mt-5"
      v-model:value="form.password.val"
      v-model:isvalid="form.password.isValid"
      :validator="form.password.validator"
      inlineLabel="Password"
      type="password">
    </sw-input>
    `;

    const code2 = `
    setup() {
      const form = reactive({
        name: {
          val: "",
          isValid: null,
          validator: (v: string) => {
            if (v.length >= 3) {
              return true;
            }
            return false;
          },
        },
        password: {
          val: "",
          isValid: false,
          validator: (v: string) => {
            if (v.length >= 6) {
              return true;
            }
            return false;
          },
        },
      });

      return {
        form,
      }
    }
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
#form2
  & label, input
    @apply dark:bg-transparent
.sw-slidedown
  max-height: 1500px
</style>
