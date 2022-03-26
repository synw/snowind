<template>
  <div>
    <div class="text-2xl">Form</div>
    <div class="mt-8">A complete form example with validation and hints</div>
    <div id="form2" class="mt-8">
      <sw-input
        v-model:value="form.name.val"
        v-model:isvalid="form.name.isValid"
        :validator="form.name.validator"
        inlineLabel="Username"
      ></sw-input>
      <div class="mt-3 text-sm text-gray-500 dark:text-gray-200">
        <div v-if="form.name.isValid === true" class="text-success">Ok</div>
        <div v-else-if="form.name.isValid === false" class="text-danger">Type 3 characters minimum</div>
        <div v-else>Type a username</div>
      </div>
      <sw-input
        class="mt-5"
        v-model:value="form.password.val"
        v-model:isvalid="form.password.isValid"
        :validator="form.password.validator"
        inlineLabel="Password"
        type="password"
      ></sw-input>
      <div class="mt-3 text-sm text-gray-500 dark:text-gray-200">
        <div v-if="form.password.isValid === true" class="text-success">Ok</div>
        <div
          v-else-if="form.password.isValid === false"
          class="text-danger"
        >Type 8 characters minimum</div>
        <div v-else>Type a password</div>
      </div>
      <button
        class="mt-3 btn"
        :disabled="!isFormValid"
        :class="{ 'success': isFormValid, 'light': !isFormValid }"
      >Submit</button>
    </div>
    <div class="mt-5">
      The form fields use a tristate: neutral when nothing has been typed,
      invalid when something has been typed but does not statisfy the validator conditions,
      and valid when the validator passes. We use a computed property to check the form
      validity and enable the submit button
    </div>
    <div class="mt-5">
      Template:
      <code-block :code="code1" class="mb-3"></code-block>Script:
      <code-block :code="code2" lang="typescript"></code-block>
    </div>
    <next-bar class="mt-24" :prev="{ link: '/state/subviews', text: 'Subviews' }"></next-bar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import SwInput from "@snowind/input";
import NextBar from "@/widgets/NextBar.vue";

export default defineComponent({
  components: {
    CodeBlock,
    SwInput,
    NextBar
  },
  setup() {

    const form = reactive({
      name: {
        val: "",
        isValid: null,
        validator: (v: string) => v.length > 2,
      },
      password: {
        val: "",
        isValid: null,
        validator: (v: string) => v.length > 7,
      },
    });

    const isFormValid = computed<boolean>(() => {
      return form.name.isValid === true && form.password.isValid === true;
    });

    const code1 = `
      <sw-input
        v-model:value="form.name.val"
        v-model:isvalid="form.name.isValid"
        :validator="form.name.validator"
        inlineLabel="Username"
      ></sw-input>
      <div class="mt-3 text-sm text-gray-500 dark:text-gray-200">
        <div v-if="form.name.isValid === true" class="text-success">Ok</div>
        <div v-else-if="form.name.isValid === false" class="text-danger">Type 3 characters minimum</div>
        <div v-else>Type a username</div>
      </div>
      <sw-input
        class="mt-5"
        v-model:value="form.password.val"
        v-model:isvalid="form.password.isValid"
        :validator="form.password.validator"
        inlineLabel="Password"
        type="password"
      ></sw-input>
      <div class="mt-3 text-sm text-gray-500 dark:text-gray-200">
        <div v-if="form.password.isValid === true" class="text-success">Ok</div>
        <div
          v-else-if="form.password.isValid === false"
          class="text-danger"
        >Type 8 characters minimum</div>
        <div v-else>Type a password</div>
      </div>
      <button
        class="mt-3 btn"
        :disabled="!isFormValid"
        :class="{ 'success': isFormValid, 'light': !isFormValid }"
      >Submit</button>
    `;

    const code2 = `
    import { Validators } from "@/snowind";
    
    setup() {
      const form = reactive({
        name: {
          val: "", // initial value
          isValid: null, // initial state
          validator: (v: string) => v.length > 2,
        },
        password: {
          val: "", // initial value
          isValid: null, // initial state
          validator: (v: string) => v.length > 7,
        },
      });

      const isFormValid = computed<boolean>(() => {
        return form.name.isValid === true && form.password.isValid === true;
      });

      return {
        form,
        isFormValid
      }
    }
    `;

    return {
      form,
      code1,
      code2,
      isFormValid
    };
  },
});
</script>


