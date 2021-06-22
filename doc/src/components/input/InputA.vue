<template>
  <div id="form">
    <sw-input
      id="form-username"
      v-model:value="form.name.val"
      v-model:isvalid="form.name.isValid"
      :validator="form.name.validator"
      placeholder="username"
      required
    ></sw-input>
    <div class="mt-3 text-sm">
      <div v-if="form.name.isValid === true" class="text-success dark:text-success-dark">Ok</div>
      <div
        v-else-if="form.name.isValid === false"
        class="text-danger dark:text-danger-dark"
      >Type 3 characters minimum</div>
      <div v-else class="text-neutral dark:text-neutral-dark">Type a username</div>
    </div>
  </div>
  <sw-collapse :model="collapse" class="pt-5">
    Template:
    <code-block :code="code1" class="my-3"></code-block>Script:
    <code-block :code="code2" lang="typescript" class="mt-3"></code-block>
  </sw-collapse>
  <code-button class="mt-3" :collapse="collapse"></code-button>

  <div class="mt-5">
    The input field has a tristate:
    <code class="variable">null</code>
    : nothing has been edited,
    <code class="variable">false</code>: invalid
    input and
    <code class="variable">true</code>: valid input
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import { SwInput, Validators } from "@/snowind";
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
        validator: Validators.minStringLength(3)
      },
    });

    const code1 = `
      <sw-input
        id="username"
        v-model:value="form.name.val"
        v-model:isvalid="form.name.isValid"
        :validator="form.name.validator"
        placeholder="username"
        required>
      </sw-input>
      <div class="mt-3 text-sm">
        <div v-if="form.name.isValid === true" class="text-success dark:text-success-dark">Ok</div>
        <div
          v-else-if="form.name.isValid === false"
          class="text-danger dark:text-danger-dark"
        >Type 3 characters minimum</div>
        <div v-else class="text-neutral dark:text-neutral-dark">Type a username</div>
      </div>
    `;

    const code2 = `
      import { SwInput, Validators } from "@/snowind";
      
      components: {
        SwInput
      },
      setup() {
        const form = reactive({
          name: {
            val: "",
            isValid: null,
            validator: Validators.minStringLength(3)
            // or define your own function
            /* validator: (v: string) => {
              if (v.length >= 3) {
                return true;
              }
              return false;
            } */
          }
        });

        return {
          form
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

