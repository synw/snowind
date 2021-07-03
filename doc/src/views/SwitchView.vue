<template>
  <div class="mb-8 text-2xl">Switch</div>
  <sw-switch label="Switch" v-model:value="switch1"></sw-switch>
  <div class="mt-4">
    Value:
    <code>{{ switch1 }}</code>
  </div>

  <sw-collapse :model="collapse" class="pt-5">
    Template:
    <code-block :code="code1" class="my-3"></code-block>Script:
    <code-block :code="code2" lang="typescript" class="mt-3"></code-block>
  </sw-collapse>
  <code-button class="mt-3" :collapse="collapse"></code-button>

  <div class="mt-12 mb-8 text-xl">Style</div>
  <div class="mb-5">Big</div>
  <sw-switch label="Switch" v-model:value="switch2" :checked="switch2" big></sw-switch>
  <div class="mt-4">
    Value:
    <code>{{ switch2 }}</code>
  </div>

  <sw-collapse :model="collapse2" class="pt-5">
    Template:
    <code-block :code="code3" class="my-3"></code-block>Script:
    <code-block :code="code4" lang="typescript" class="mt-3"></code-block>
  </sw-collapse>
  <code-button class="mt-3" :collapse="collapse2"></code-button>

  <div class="my-8">Color variants</div>
  <div class="flex flex-row w-full space-x-3">
    <sw-switch label="Primary" class="primary" :checked="true"></sw-switch>
    <sw-switch label="Secondary" class="secondary" :checked="true"></sw-switch>
    <sw-switch label="Danger" class="danger" :checked="true"></sw-switch>
    <sw-switch label="Warning" class="warning" :checked="true"></sw-switch>
  </div>
  <sw-collapse :model="collapse3" class="pt-5">
    <code-block :code="code5" class="my-3"></code-block>
  </sw-collapse>
  <code-button class="mt-3" :collapse="collapse3"></code-button>

  <div class="mt-12 mb-8 text-xl">Reactivity</div>
  <div class="mt-3">
    There are two ways of handling the switch selected value: using v-model and
    using the change event.
  </div>
  <div class="mt-3 mb-5">
    Using
    <code class="variable">v-model</code> the initial value will be set from
    the linked variable:
  </div>
  <sw-switch v-model:value="switch3" class="inline-block align-middle"></sw-switch>
  <div class="inline ml-2">
    v-model value:
    <code>{{ switch3 }}</code>
  </div>
  <sw-collapse :model="collapse4" class="pt-5">
    <code-block :code="code6" class="my-3"></code-block>
  </sw-collapse>
  <code-button class="mt-3" :collapse="collapse4"></code-button>
  <div class="mt-8 mb-5">
    Using the
    <code class="variable">change</code> event to retrieve values and the
    <code class="variable">checked</code> attribute to set the initial value:
  </div>
  <sw-switch @change="onChangeSwitch($event)" :checked="false"></sw-switch>
  <sw-collapse :model="collapse5" class="pt-5">
    <code-block :code="code7" class="my-3"></code-block>Script:
    <code-block :code="code8" lang="typescript" class="mt-3"></code-block>
  </sw-collapse>
  <code-button class="mt-3" :collapse="collapse5"></code-button>

  <div class="mt-12 mb-8 text-xl">Props</div>
  <props-table :tableData="propsData"></props-table>

  <div class="mt-12 mb-8 text-xl">Events</div>
  <events-table :tableData="eventsData"></events-table>

  <next-bar
    class="mt-24"
    :prev="{ link: '/sidebar', text: 'Sidebar' }"
    :next="{ link: '/examples/form', text: 'Form example' }"
  ></next-bar>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SwSwitch from "@snowind/switch";
import SwCollapse from "@snowind/collapse";
import CodeBlock from "@/widgets/CodeBlock.vue";
import PropsTable from "@/widgets/PropsTable.vue";
import EventsTable from "@/widgets/EventsTable.vue";
import NextBar from "@/widgets/NextBar.vue";
import CodeButton from "@/widgets/CodeButton.vue";

export default defineComponent({
  components: {
    CodeBlock,
    SwCollapse,
    PropsTable,
    EventsTable,
    SwSwitch,
    NextBar,
    CodeButton
  },
  setup() {
    const code1 = `
      <sw-switch label="Switch" v-model:value="switch1"></sw-switch>
      <div class="mt-4">
        Value:
        <code>{{ switch1 }}</code>
      </div>
    `;
    const code2 = `
      setup() {
        const switch1 = ref(false);

        return  {
          switch1
        }
      }
    `;
    const code3 = `
      <sw-switch label="Switch" v-model:value="switch2" :checked="switch2" big></sw-switch>
    `;
    const code4 = `
      setup() {
        const switch2 = ref(false);

        return  {
          switch2
        }
      }
    `;

    const code5 = `
      <sw-switch label="Primary" class="primary" :checked="true"></sw-switch>
      <sw-switch label="Secondary" class="secondary" :checked="true"></sw-switch>
      <sw-switch label="Danger" class="danger" :checked="true"></sw-switch>
      <sw-switch label="Warning" class="warning" :checked="true"></sw-switch>
    `;

    const code6 = `
    <sw-switch v-model:value="switch3"></sw-switch>
    `;

    const code7 = `
    <sw-switch @change="onChangeSwitch($event)" :checked="false"></sw-switch>
    `;

    const code8 = `
    setup() {
      function onChangeSwitch(val: boolean): void {
        console.log("Switch change to", val)
      }

      return {
        onChangeSwitch
      }
    }
    `;

    const switch1 = ref(false);
    const switch2 = ref(true);
    const switch3 = ref(false);
    const switch3Checked = ref(true);
    const collapse = ref(true);
    const collapse2 = ref(true);
    const collapse3 = ref(true);
    const collapse4 = ref(true);
    const collapse5 = ref(true);

    function onChangeSwitch(val: boolean): void {
      console.log("Switch change to", val)
    }

    const propsData: Array<Record<string, string | boolean>> = [
      {
        prop: "checked",
        description: "The initial state of the switch",
        type: "boolean",
        values: "true, false",
        default: "false",
        required: false,
      },
      {
        prop: "label",
        description: "The text label",
        type: "string",
        values: "any string",
        default: "",
        required: false,
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
        name: "@change",
        description: "Event emitted when the switch value changes",
        returnType: "boolean",
      },
    ];

    return {
      switch1,
      switch2,
      switch3,
      switch3Checked,
      onChangeSwitch,
      code1,
      code2,
      code3,
      code4,
      code5,
      code6,
      code7,
      code8,
      collapse,
      collapse2,
      collapse3,
      collapse4,
      collapse5,
      propsData,
      eventsData
    }
  }
});
</script>