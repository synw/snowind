<template>
  <div class="mb-8 text-2xl">Sidebar</div>
  <div>
    Note: the sidebar state is preserved in localstorage. If you reload the page
    the sidebar will be in the same state
  </div>
  <div class="flex flex-row mt-5 h-96">
    <sw-sidebar
      v-model:opened="sidebar"
      name="sidebar1"
      class="flex flex-col h-full bg-secondary text-secondary-r"
    >
      <div class="flex-grow mt-5 ml-6 space-y-6">
        <div>
          <i class="far fa-file fa-2x"></i>
          <span v-if="sidebar === true" class="ml-3">Page 1</span>
        </div>
        <div>
          <i class="far fa-file-image fa-2x"></i>
          <span v-if="sidebar === true" class="ml-3">Page 2</span>
        </div>
        <div>
          <i class="fas fa-file-alt fa-2x"></i>
          <span v-if="sidebar === true" class="ml-3">Page 3</span>
        </div>
      </div>
      <div
        class="flex-none h-12 mb-3 text-2xl text-center cursor-pointer"
        @click="sidebar = !sidebar"
      >
        <i class="fas fa-angle-double-left" v-if="sidebar === true"></i>
        <i class="fas fa-angle-double-right" v-else></i>
      </div>
    </sw-sidebar>
    <div class="w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark">
      <div class="m-5">
        Is the sidebar opened?
        <b>{{ sidebar }}</b>
      </div>
    </div>
  </div>
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse1 === true,
      'slidedown': collapse1 === false
    }"
    class="mt-4"
  >
    Template:
    <code-block :code="code1" class="my-3"></code-block>Script:
    <code-block :code="code2" lang="typescript" class="mt-3"></code-block>
  </div>
  <button
    @click="collapse1 = !collapse1"
    class="my-5 text-gray-500 border-none btn dark:text-white"
  >
    <i class="fas fa-code"></i>&nbsp;
    <span v-if="collapse1 === true">Show code</span>
    <span v-else>Hide code</span>
  </button>

  <div class="my-8 text-xl">Width</div>
  <div class="mt-3">Configure the sidebar width using utility classes and sass</div>
  <div class="flex flex-row mt-5 h-96">
    <sw-sidebar
      id="sidebar2"
      name="sidebar2"
      v-model:opened="sidebar2"
      class="flex flex-col w-40 h-full bg-secondary text-secondary-r"
    >
      <div class="flex-grow mt-5 ml-6 space-y-6">
        <div>
          <i class="far fa-file fa-2x"></i>
          <span v-if="sidebar2 === true" class="ml-3">Page 1</span>
        </div>
        <div>
          <i class="far fa-file-image fa-2x"></i>
          <span v-if="sidebar2 === true" class="ml-3">Page 2</span>
        </div>
        <div>
          <i class="fas fa-file-alt fa-2x"></i>
          <span v-if="sidebar2 === true" class="ml-3">Page 3</span>
        </div>
      </div>
      <div
        class="flex-none h-12 mb-3 text-2xl text-center cursor-pointer"
        @click="sidebar2 = !sidebar2"
      >
        <i class="fas fa-angle-double-left" v-if="sidebar2 === true"></i>
        <i class="fas fa-angle-double-right" v-else></i>
      </div>
    </sw-sidebar>
    <div class="w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark">
      <div class="m-5">
        Is the sidebar opened?
        <b>{{ sidebar2 }}</b>
      </div>
    </div>
  </div>
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse2 === true,
      'slidedown': collapse2 === false
    }"
    class="mt-4"
  >
    Template:
    <code-block :code="code3" class="my-3"></code-block>Sass:
    <code-block :code="code4" lang="html" class="mt-3"></code-block>
  </div>
  <button
    @click="collapse2 = !collapse2"
    class="my-5 text-gray-500 border-none btn dark:text-white"
  >
    <i class="fas fa-code"></i>&nbsp;
    <span v-if="collapse2 === true">Show code</span>
    <span v-else>Hide code</span>
  </button>

  <div class="mt-12 mb-8 text-xl">Install</div>
  <code lang="bash">npm install @snowind/sidebar</code>
  <br />
  <code class="mt-3 text-neutral"># or</code>
  <br />
  <code class="mt-3">yarn add @snowind/sidebar</code>

  <div class="mt-12 mb-8 text-xl">Props</div>
  <props-table :tableData="propsData"></props-table>

  <next-bar
    class="mt-24"
    :prev="{ link: '/input', text: 'Input' }"
    :next="{ link: '/switch', text: 'Switch' }"
  ></next-bar>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SwSidebar from "@snowind/sidebar";
import CodeBlock from "@/widgets/CodeBlock.vue";
import NextBar from "@/widgets/NextBar.vue";
import PropsTable from "@/widgets/PropsTable.vue";

export default defineComponent({
  components: {
    SwSidebar,
    CodeBlock,
    NextBar,
    PropsTable
  },
  setup() {
    const sidebar = ref(true);
    const sidebar2 = ref(true);
    const collapse1 = ref(true);
    const collapse2 = ref(true);

    const code1 = `
    <div class="flex flex-row mt-5 h-96">
      <sw-sidebar
        v-model:opened="sidebar"
        name="sidebar1"
        class="flex flex-col h-full bg-secondary text-secondary-r"
      >
        <div class="flex-grow mt-5 ml-6 space-y-6">
          <div>
            <i class="far fa-file fa-2x"></i>
            <span v-if="sidebar === true" class="ml-3">Page 1</span>
          </div>
          <div>
            <i class="far fa-file-image fa-2x"></i>
            <span v-if="sidebar === true" class="ml-3">Page 2</span>
          </div>
          <div>
            <i class="fas fa-file-alt fa-2x"></i>
            <span v-if="sidebar === true" class="ml-3">Page 3</span>
          </div>
        </div>
        <div
          class="flex-none h-12 mb-3 text-2xl text-center cursor-pointer"
          @click="sidebar = !sidebar"
        >
          <i class="fas fa-angle-double-left" v-if="sidebar === true"></i>
          <i class="fas fa-angle-double-right" v-else></i>
        </div>
      </sw-sidebar>
      <div class="w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark">
        <div class="m-5">
          Is the sidebar opened?
          <b>{{ sidebar }}</b>
        </div>
      </div>
    </div>
    `;

    const code2 = `
    import SwSidebar from "@snowind/sidebar";

    export default defineComponent({
      components: {
        SwSidebar
      },
      setup() {
        const sidebar = ref(true);
        
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
        prop: "v-model:opened",
        description: "The reactive variable that controls the sidebar widget",
        type: "Ref",
        values: "A <code>Ref</code> instance",
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
.slidedown
  max-height: 1500px
#sidebar2
  &.opened
    @apply w-96
</style>
