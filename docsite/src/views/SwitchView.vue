<template>
  <div>
    <div class="mb-8 text-2xl">Switch</div>
    <sw-switch label="Switch" v-model:value="switch1" class="switch-primary"></sw-switch>
    <div class="mt-4">
      Value:
      <code>{{ switch1 }}</code>
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
      <code-block :code="code1" lang="html" class="my-3"></code-block>Script:
      <code-block :code="code2" lang="typescript" class="mt-3"></code-block>
    </div>
    <code-button class="mt-3" :collapse="collapse" @toggle="collapse = !collapse"></code-button>

    <anchor-title name="style" class="mt-12 mb-8 text-lg">Style</anchor-title>
    <div class="mb-5">Big</div>
    <sw-switch label="Switch" v-model:value="switch2" class="switch-primary" big></sw-switch>
    <div class="mt-4">
      Value:
      <code>{{ switch2 }}</code>
    </div>

    <div
      :class="{
        'slide-y': true,
        'slideup': collapse2 === true,
        'slidedown': collapse2 === false
      }"
      class="pt-5"
    >
      Template:
      <code-block :code="code3" class="my-3"></code-block>Script:
      <code-block :code="code4" lang="typescript" class="mt-3"></code-block>
    </div>
    <code-button class="mt-3" :collapse="collapse2" @toggle="collapse2 = !collapse2"></code-button>

    <div class="my-8">Color variants and clickable labels</div>
    <div class="flex flex-row w-full space-x-3">
      <sw-switch class="switch-primary" v-model:value="switch3">
        <div class="ml-2">Primary</div>
      </sw-switch>
      <sw-switch class="switch-secondary" v-model:value="switch3">
        <div class="ml-2">Secondary</div>
      </sw-switch>
      <sw-switch class="switch-danger" v-model:value="switch3">
        <div class="ml-2">Danger</div>
      </sw-switch>
      <sw-switch class="switch-warning" v-model:value="switch3">
        <div class="ml-2">Warning</div>
      </sw-switch>
    </div>
    <div
      :class="{
        'slide-y': true,
        'slideup': collapse3 === true,
        'slidedown': collapse3 === false
      }"
      class="pt-5"
    >
      <code-block :code="code5" class="my-3"></code-block>
    </div>
    <code-button class="mt-3" :collapse="collapse3" @toggle="collapse3 = !collapse3"></code-button>

    <anchor-title name="reactivity" class="mt-12 mb-8 text-lg">Reactivity</anchor-title>
    <div class="mt-3">
      To manage update events use the
      <code class="variable">update:value</code> event. Example with a toast that
      pops up when a change is made:
    </div>
    <div class="mt-8">
      <sw-switch
        class="inline-block align-middle switch-secondary"
        v-model:value="switch4"
        @update:value="onUpdate(Boolean($event))"
      ></sw-switch>
      <sw-toast :class="toastClass" :show="isToastVisible">{{ toastMsg }}</sw-toast>
      <div class="inline ml-2">
        v-model:value
        <code>{{ switch4 }}</code>
      </div>
    </div>
    <div
      :class="{
        'slide-y': true,
        'slideup': collapse4 === true,
        'slidedown': collapse4 === false
      }"
      class="pt-5"
    >
      <code-block :code="code6" class="my-3"></code-block>Script:
      <code-block :code="code7" lang="typescript" class="mt-3"></code-block>
    </div>
    <code-button class="mt-3" :collapse="collapse4" @toggle="collapse4 = !collapse4"></code-button>

    <anchor-title name="semantic-colors" class="mt-12 mb-8 text-lg">Semantic colors</anchor-title>
    <div class="mt-3">
      A css class will be generated for each semantic color defined
      in the config, in the form of
      <code
        class="variable"
      >
        <span>switch-</span>
        <i>mycolorname</i>
      </code>. For example if we have an
      <code class="variable">accent</code> color defined:
    </div>
    <code-block :code="code10" lang="javascript" class="mt-5"></code-block>
    <div class="mt-5">
      Then a
      <code class="variable">switch-accent</code> class will be available:
    </div>
    <sw-switch class="mt-5 switch-accent" v-model:value="switch5">
      <div class="ml-2">Custom color</div>
    </sw-switch>
    <div
      :class="{
        'slide-y': true,
        'slideup': collapse5 === true,
        'slidedown': collapse5 === false
      }"
      class="pt-5"
    >
      <code-block :code="code11" class="mt-3"></code-block>
    </div>
    <code-button class="mt-3" :collapse="collapse5" @toggle="collapse5 = !collapse5"></code-button>

    <anchor-title name="install" class="mt-12 mb-8 text-lg">Install</anchor-title>
    <code lang="bash">npm install @snowind/switch</code>
    <br />
    <code class="mt-3 text-neutral"># or</code>
    <br />
    <code class="mt-3">yarn add @snowind/switch</code>

    <div class="mt-12 mb-8 text-xl">Props</div>
    <props-table :tableData="propsData"></props-table>

    <div class="mt-12 mb-8 text-xl">Events</div>
    <events-table :tableData="eventsData"></events-table>

    <next-bar
      class="mt-24"
      :prev="{ link: '/sidebar', text: 'Sidebar' }"
      :next="{ link: '/stepper', text: 'Progress stepper' }"
    ></next-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SwSwitch from "@snowind/switch";
import CodeBlock from "@/widgets/CodeBlock.vue";
import PropsTable from "@/widgets/PropsTable.vue";
import EventsTable from "@/widgets/EventsTable.vue";
import NextBar from "@/widgets/NextBar.vue";
import CodeButton from "@/widgets/CodeButton.vue";
import { SwToast, useToast } from "@snowind/toast";
import AnchorTitle from "@/widgets/AnchorTitle.vue";

const code1 = `
      <sw-switch 
        label="Switch" 
        v-model:value="switch1"
        class="switch-primary">
      </sw-switch>
      <div class="mt-4">
        Value:
        <code>{{ switch1 }}</code>
      </div>
    `;
const code2 = `
    import SwSwitch from "@snowind/switch";
    
    const switch1 = ref(false);
    `;
const code3 = `
      <sw-switch
        label="Switch"
        v-model:value="switch2"
        class="switch-primary" big>
      </sw-switch>
    `;
const code4 = `
      const switch2 = ref(false);
    `;

const code5 = `
      <sw-switch class="switch-primary" v-model:value="switch3">
        <div class="ml-2">Primary</div>
      </sw-switch>
      <sw-switch class="switch-secondary" v-model:value="switch3">
        <div class="ml-2">Secondary</div>
      </sw-switch>
      <sw-switch class="switch-danger" v-model:value="switch3">
        <div class="ml-2">Danger</div>
      </sw-switch>
      <sw-switch class="switch-warning" v-model:value="switch3">
        <div class="ml-2">Warning</div>
      </sw-switch>
    `;

const code6 = `
    <sw-switch
        class="inline-block align-middle switch-secondary"
        v-model:value="switch4"
        @update:value="onUpdate(Boolean($event))"
      ></sw-switch>
      <sw-toast :class="toastClass" :show="isToastVisible">{{ toastMsg }}</sw-toast>
      <div class="inline ml-2">
        v-model:value
        <code>{{ switch4 }}</code>
      </div>
    `;

const code7 = `
    import { SwToast, useToast } from "@snowind/toast";

    const switch4 = ref(true);
    const { popToast, isToastVisible } = useToast();
    const toastMsg = ref("");
    const toastClass = ref("success");

    function onUpdate(val: boolean): void {
      switch (val) {
        case true:
          toastClass.value = "success";
          toastMsg.value = \`Update to true\`;
          break;
        default:
          toastClass.value = "danger";
          toastMsg.value = \`Update to false\`;
      }
      popToast();
    }
    `;

const code10 = `
    const colors = require('tailwindcss/colors');

    module.exports = {
      // ...
      theme: {
        extend: {
          semanticColors: {
            accent: {
              light: {
                bg: colors.pink[500],
                txt: colors.white
              },
              dark: {
                bg: colors.purple[600],
                txt: colors.neutral[100]
              }
            }
          }
        }
      }
    }
    `;

const code11 = `
    <sw-switch class="mt-5 switch-accent" v-model:value="switch5">
      <div class="ml-2">Custom color</div>
    </sw-switch>

`;

const switch1 = ref(false);
const switch2 = ref(true);
const switch3 = ref(true);
const switch4 = ref(true);
const switch5 = ref(true);
const collapse = ref(true);
const collapse2 = ref(true);
const collapse3 = ref(true);
const collapse4 = ref(true);
const collapse5 = ref(true);
const { popToast, isToastVisible } = useToast();
const toastMsg = ref("");
const toastClass = ref("success");

function onUpdate(val: boolean): void {
  console.log("Update:", val);
  switch (val) {
    case true:
      toastClass.value = "success";
      toastMsg.value = `Update to true`;
      break;
    default:
      toastClass.value = "danger";
      toastMsg.value = `Update to false`;
  }
  popToast();
}

const propsData: Array<Record<string, string | boolean>> = [
  {
    prop: "v-model:value",
    description: "The reactive variable to bind with the widget",
    type: "boolean Ref",
    values: "true, false",
    default: "",
    required: true,
  },
  {
    prop: "big",
    description: "Size of the switch",
    type: "boolean",
    values: "true, false",
    default: "false",
    required: false,
  },
];

const eventsData: Array<Record<string, string | boolean>> = [
  {
    name: "@update:value",
    description: "Event emitted when the switch value changes",
    returnType: "boolean",
  },
];
</script>