<template>
  <div class="mb-8 text-2xl">Sidebar</div>
  <div>
    Note: the sidebar state is preserved in localstorage. If you reload the page
    the sidebar will be in the same state
  </div>
  <div class="flex flex-row mt-5 h-96">
    <sw-sidebar :model="sidebar" class="flex flex-col h-full bg-secondary text-secondary-r">
      <div class="flex-grow mt-5 ml-6 space-y-6">
        <div>
          <i class="far fa-file fa-2x"></i>
          <span v-if="sidebar.isOpened.value === true" class="ml-3">Page 1</span>
        </div>
        <div>
          <i class="far fa-file-image fa-2x"></i>
          <span v-if="sidebar.isOpened.value === true" class="ml-3">Page 2</span>
        </div>
        <div>
          <i class="fas fa-file-alt fa-2x"></i>
          <span v-if="sidebar.isOpened.value === true" class="ml-3">Page 3</span>
        </div>
      </div>
      <div
        class="flex-none h-12 mb-3 text-2xl text-center cursor-pointer"
        @click="sidebar.toggle()"
      >
        <i class="fas fa-angle-double-left" v-if="sidebar.isOpened.value === true"></i>
        <i class="fas fa-angle-double-right" v-else></i>
      </div>
    </sw-sidebar>
    <div class="w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark">
      <div class="m-5">
        Is the sidebar opened?
        <b>{{ sidebar.isOpened.value }}</b>
      </div>
    </div>
  </div>
  <sw-collapse :model="collapse1" class="pt-5">
    Template:
    <code-block :code="code1" class="my-3"></code-block>Script:
    <code-block :code="code2" lang="typescript" class="mt-3"></code-block>
  </sw-collapse>
  <button @click="collapse1.toggle()" class="my-5 text-gray-500 border-none btn dark:text-white">
    <i class="fas fa-code"></i>&nbsp;
    <span v-if="collapse1.isCollapsed.value === true">Show code</span>
    <span v-else>Hide code</span>
  </button>

  <div class="my-8 text-xl">Width</div>
  <div class="mt-3">Configure the sidebar width using utility classes and sass</div>
  <div class="flex flex-row mt-5 h-96">
    <sw-sidebar
      id="sidebar2"
      :model="sidebar2"
      class="flex flex-col w-40 h-full bg-secondary text-secondary-r"
    >
      <div class="flex-grow mt-5 ml-6 space-y-6">
        <div>
          <i class="far fa-file fa-2x"></i>
          <span v-if="sidebar2.isOpened.value === true" class="ml-3">Page 1</span>
        </div>
        <div>
          <i class="far fa-file-image fa-2x"></i>
          <span v-if="sidebar2.isOpened.value === true" class="ml-3">Page 2</span>
        </div>
        <div>
          <i class="fas fa-file-alt fa-2x"></i>
          <span v-if="sidebar2.isOpened.value === true" class="ml-3">Page 3</span>
        </div>
      </div>
      <div
        class="flex-none h-12 mb-3 text-2xl text-center cursor-pointer"
        @click="sidebar2.toggle()"
      >
        <i class="fas fa-angle-double-left" v-if="sidebar2.isOpened.value === true"></i>
        <i class="fas fa-angle-double-right" v-else></i>
      </div>
    </sw-sidebar>
    <div class="w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark">
      <div class="m-5">
        Is the sidebar opened?
        <b>{{ sidebar2.isOpened.value }}</b>
      </div>
    </div>
  </div>
  <sw-collapse :model="collapse2" class="pt-5">
    Template:
    <code-block :code="code3" class="my-3"></code-block>Sass:
    <code-block :code="code4" lang="html" class="mt-3"></code-block>
  </sw-collapse>
  <button @click="collapse2.toggle()" class="my-5 text-gray-500 border-none btn dark:text-white">
    <i class="fas fa-code"></i>&nbsp;
    <span v-if="collapse2.isCollapsed.value === true">Show code</span>
    <span v-else>Hide code</span>
  </button>

  <div class="mt-12 mb-8 text-xl">Props</div>
  <props-table :tableData="propsData"></props-table>

  <next-bar
    class="mt-24"
    :prev="{ link: '/input', text: 'Input' }"
    :next="{ link: '/switch', text: 'Switch' }"
  ></next-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SwSidebar, SwSidebarModel } from "@/snowind";
import CodeBlock from "@/widgets/CodeBlock.vue";
import SwCollapse from "@/snowind/collapse/SwCollapse.vue";
import SwCollapseModel from "@/snowind/collapse/model";
import NextBar from "@/widgets/NextBar.vue";
import PropsTable from "@/widgets/PropsTable.vue";

export default defineComponent({
  components: {
    SwSidebar,
    CodeBlock,
    SwCollapse,
    NextBar,
    PropsTable
  },
  setup() {
    const sidebar = new SwSidebarModel({ name: "sidebar1" });
    const sidebar2 = new SwSidebarModel({ name: "sidebar2" });
    const collapse1 = new SwCollapseModel();
    const collapse2 = new SwCollapseModel();

    const code1 = `
    <div class="flex flex-row h-96">
      <sw-sidebar :model="sidebar" class="flex flex-col h-full bg-secondary text-secondary-r">
        <div class="flex-grow mt-5 ml-6 space-y-6">
          <div>
            <i class="far fa-file fa-2x"></i>
            <span v-if="sidebar.isOpened.value === true" class="ml-3">Page 1</span>
          </div>
          <div>
            <i class="far fa-file-image fa-2x"></i>
            <span v-if="sidebar.isOpened.value === true" class="ml-3">Page 2</span>
          </div>
          <div>
            <i class="fas fa-file-alt fa-2x"></i>
            <span v-if="sidebar.isOpened.value === true" class="ml-3">Page 3</span>
          </div>
        </div>
        <div
          class="flex-none h-12 mb-3 text-2xl text-center cursor-pointer"
          @click="sidebar.toggle()"
        >
          <i class="fas fa-angle-double-left" v-if="sidebar.isOpened.value === true"></i>
          <i class="fas fa-angle-double-right" v-else></i>
        </div>
      </sw-sidebar>
      <div class="w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark">
        <div class="m-5">
          Is the sidebar opened?
          <b>{{ sidebar.isOpened.value }}</b>
        </div>
      </div>
    </div>
    `;

    const code2 = `
    import { SwSidebar, SwSidebarModel } from "@/snowind";

    export default defineComponent({
      components: {
        SwSidebar
      },
      setup() {
        const sidebar = new SwSidebarModel();
        
        return {
          sidebar
        }
      }
    });
    `;

    const code3 = `
    <sw-sidebar :model="sidebar2" class="w-40 ...">
    </sw-sidebar>
    `;

    const code4 = `
    <style lang="sass" scoped>
    #sidebar2
      &.opened
        @apply w-96
    </style>
    `;

    const propsData: Array<Record<string, string | boolean>> = [
      {
        prop: "model",
        description: "The model that controls the sidebar widget",
        type: "SwSidebarModel",
        values: "An <code>SwSidebarModel</code> instance",
        default: "",
        required: true,
      }
    ]

    return {
      sidebar,
      sidebar2,
      collapse1,
      collapse2,
      code1,
      code2,
      code3,
      code4,
      propsData
    }
  }
});
</script>

<style lang="sass" scoped>
.sw-slidedown
  max-height: 1500px
#sidebar2
  &.opened
    @apply w-96
</style>
