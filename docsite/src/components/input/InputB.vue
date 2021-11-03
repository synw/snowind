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
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse === true,
      'slidedown': collapse === false
    }"
    class="mt-4"
  >
    Template:
    <code-block :code="code1" class="mb-3"></code-block>Script:
    <code-block :code="code2" lang="typescript"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapse" @toggle="collapse = !collapse"></code-button>
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
        validator: (v: string) => v.length >= 3
      },
      password: {
        val: "",
        isValid: false,
        validator: (v: string) => v.length >= 6
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
          validator: (v: string) => v.length >= 3
        },
        password: {
          val: "",
          isValid: false,
          validator: (v: string) => v.length >= 6
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
