<template>
  <div class="mb-8 text-2xl">Toast message</div>
  <div class="mb-5">An animated toast message</div>
  <button class="border-neutral btn" @click="popTheToast('success')">Pop toast</button>
  <sw-toast :class="toastType" :show="isToastVisible">Toast message</sw-toast>
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse1 === true,
      'slidedown': collapse1 === false
    }"
    class="mt-4"
  >
    Template:
    <code-block class="mt-3" lang="html" :code="code1"></code-block>
    <div class="mt-3">Script:</div>
    <code-block class="mt-3" lang="typescript" :code="code2"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapse1" @toggle="collapse1 = !collapse1"></code-button>

  <anchor-title name="colors" class="mt-8 text-lg">Colors</anchor-title>
  <div class="flex flex-row mt-5 space-x-3">
    <button class="btn primary" @click="popTheToast('primary')">Toast</button>
    <button class="btn secondary" @click="popTheToast('secondary')">Toast</button>
    <button class="btn light" @click="popTheToast('light')">Toast</button>
    <button class="btn neutral" @click="popTheToast('neutral')">Toast</button>
    <button class="btn success" @click="popTheToast('success')">Toast</button>
    <button class="btn warning" @click="popTheToast('warning')">Toast</button>
    <button class="btn danger" @click="popTheToast('danger')">Toast</button>
  </div>
  <code-block class="mt-8" lang="html" :code="code3"></code-block>

  <div class="mt-12 mb-8 text-xl">Install</div>
  <code lang="bash">npm install @snowind/toast</code>
  <br />
  <code class="mt-3 text-neutral"># or</code>
  <br />
  <code class="mt-3">yarn add @snowind/toast</code>

  <div class="mt-12 mb-8 text-xl">Props</div>
  <props-table :tableData="propsData"></props-table>

  <next-bar
    class="mt-24"
    :prev="{ link: '/header', text: 'Header' }"
    :next="{ link: '/state/screen', text: 'Screen size' }"
  ></next-bar>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import AnchorTitle from "@/widgets/AnchorTitle.vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import PropsTable from "@/widgets/PropsTable.vue";
import NextBar from "@/widgets/NextBar.vue";
import CodeButton from "@/widgets/CodeButton.vue";
import { SwToast, useToast } from "@snowind/toast";

export default defineComponent({
  components: {
    CodeBlock,
    PropsTable,
    NextBar,
    CodeButton,
    SwToast,
    AnchorTitle,
  },
  setup() {
    type ToastType = "primary" | "secondary" | "success" | "danger" | "neutral" | "light" | "warning";

    const propsData: Array<Record<string, string | boolean>> = [
      {
        prop: "show",
        description: "The isToastVisible ref from useToast",
        type: "boolean",
        values: 'true, false',
        required: true,
      },
      {
        prop: "delay",
        description: "The number of milliseconds the message will stay visible",
        type: "number",
        default: "1500"
      },
      {
        prop: "transition-delay",
        description: "The duration in milleseconds of the animations",
        type: "number",
        default: "300"
      },
    ];
    const { popToast, isToastVisible } = useToast();
    const collapse1 = ref(true);
    const toastType: Ref<ToastType> = ref("success");

    function popTheToast(type: ToastType) {
      toastType.value = type;
      popToast();
    }

    const code1 = `
    <button class="btn border-neutral" @click="popToast()">Pop toast</button>
    <sw-toast class="success" :show="isToastVisible">Toast message</sw-toast>
    `;

    const code2 = `
    import { SwToast, useToast } from "@snowind/toast";

    export default defineComponent({
      components: {
        SwToast,
      },
      setup() {
        const { popToast, isToastVisible } = useToast();

        return  {
          isToastVisible,
          popToast,
        }
      }
    });
    `;

    const code3 = `
    <sw-toast class="primary" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="secondary" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="light" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="neutral" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="success" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="warning" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="danger" :show="isToastVisible">Toast</sw-toast>
    `;

    return {
      code1,
      code2,
      code3,
      isToastVisible,
      popTheToast,
      collapse1,
      toastType,
      propsData,
    }
  }
});
</script>