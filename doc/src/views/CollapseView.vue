<template>
  <div class="mb-8 text-2xl">Collapse</div>
  <button
    class="btn"
    @click="model.toggle()"
    v-html="model.isCollapsed.value === true ? 'Show' : 'Hide'"
  ></button>
  <sw-collapse :model="model">
    <div class="p-3 mt-3 border shadow">{{ textBlock }}</div>
  </sw-collapse>

  <sw-collapse :model="collapse" class="pt-5">
    <code-block :code="code1"></code-block>
    <code-block :code="code2" class="mt-3" lang="typescript"></code-block>
  </sw-collapse>
  <code-button class="mt-3" :collapse="collapse"></code-button>

  <div class="my-8 text-xl">Style</div>
  <p>Configure the animation with css</p>
  <button
    class="mt-3 btn"
    @click="model2.toggle()"
    v-html="model2.isCollapsed.value === true ? 'Show' : 'Hide'"
  ></button>
  <sw-collapse :model="model2" id="collapse-2">
    <div class="p-3 mt-3 border shadow">{{ textBlock }}</div>
  </sw-collapse>
  <p class="mt-5">
    Here the animation will occur only on slide out with a duration of 500
    milliseconds:
  </p>

  <sw-collapse :model="collapse2" class="pt-5">
    <code-block :code="code3"></code-block>
  </sw-collapse>
  <code-button class="mt-3" :collapse="collapse2"></code-button>

  <div class="mt-12 mb-8 text-xl">Props</div>
  <props-table :tableData="propsData"></props-table>

  <next-bar
    class="mt-24"
    :prev="{ link: '/button', text: 'Buttons' }"
    :next="{ link: '/input', text: 'Input' }"
  ></next-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SwCollapse, SwCollapseModel } from "@/snowind";
import CodeBlock from "@/widgets/CodeBlock.vue";
import { textBlock } from "@/const";
import NextBar from "@/widgets/NextBar.vue";
import PropsTable from "@/widgets/PropsTable.vue";
import CodeButton from "@/widgets/CodeButton.vue";

export default defineComponent({
  components: {
    SwCollapse,
    CodeBlock,
    NextBar,
    PropsTable,
    CodeButton
  },
  setup() {
    const model = new SwCollapseModel();
    const model2 = new SwCollapseModel();
    const collapse = new SwCollapseModel();
    const collapse2 = new SwCollapseModel();

    const code1 = `
      <button
        class="btn"
        @click="model.toggle()"
        v-html="model.isCollapsed.value === true ? 'Show' : 'Hide'"
      ></button>
      <sw-collapse :model="model">
        <div class="p-3 mt-3 border shadow">
          Lorem Ipsum Lorem ipsum dolor sit amet...
        </div>
      </sw-collapse>
    `;

    const code2 = `
    import { SwCollapse, SwCollapseModel } from "@/snowind";
    
    setup() {
      const model = new SwCollapseModel();

      return {
        model
      }            
    }
    `;

    const code3 = `
      <sw-collapse :model="model" id="collapse-2">
        <div class="p-3 mt-3 border shadow">
          Lorem Ipsum Lorem ipsum dolor sit amet...
        </div>
      </sw-collapse>

      <style lang="sass">
        #collapse-2.sw-slide-y
          transition: max-height 0.5s ease-out
      </style>
    `;

    const propsData: Array<Record<string, string | boolean>> = [
      {
        prop: "model",
        description: "The model that controls the collapse widget",
        type: "SwCollapseModel",
        values: "An <code>SwCollapseModel</code> instance",
        default: "",
        required: false,
      }
    ]

    return {
      model,
      model2,
      textBlock,
      code1,
      code2,
      code3,
      propsData,
      collapse,
      collapse2
    };
  },
});
</script>

<style lang="sass">
#collapse-2.sw-slide-y
  transition: max-height 0.5s ease-out
</style>
