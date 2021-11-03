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
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse === true,
      'slidedown': collapse === false
    }"
    class="mt-4"
  >
    Template:
    <code-block :code="code1" class="my-3"></code-block>Script:
    <code-block :code="code2" lang="typescript" class="mt-3"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapse" @toggle="collapse = !collapse"></code-button>

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
import { defineComponent, reactive, ref } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import SwInput from "@snowind/input";
import CodeButton from "@/widgets/CodeButton.vue";

export default defineComponent({
  components: {
    CodeBlock,
    SwInput,
    CodeButton
  },
  setup() {
    const collapse = ref(true);

    const form = reactive({
      name: {
        val: "",
        isValid: null,
        validator: (v: string) => v.length > 2
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
      import SwInput from "@snowind/input";
      
      components: {
        SwInput
      },
      setup() {
        const form = reactive({
          name: {
            val: "",
            isValid: null,
            validator: (v: string) => v.length > 2
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

