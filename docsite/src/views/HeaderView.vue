<template>
  <div>
    <div class="mb-8 text-2xl">Responsive header with menu</div>
    <responsive-block
      class="mt-5"
      @desktop="isMobile1 = false; closeMenu1()"
      @mobile="isMobile1 = true"
    ></responsive-block>
    <div
      class="mt-3 border h-96"
      :class="{ 'w-96': isMobile1, 'w-full': !isMobile1, 'mx-auto': isMobile1 }"
    >
      <sw-header
        class="h-12 bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-r-dark"
        @togglemenu="isMenu1Visible = !isMenu1Visible"
        :breakpoint="isMobile1 ? '2xl' : 'sm'"
      >
        <template #branding>
          <div class="ml-5 text-lg">Branding</div>
        </template>
        <template #mobile-branding>
          <div class="ml-5 text-lg">Mobile branding</div>
        </template>
        <template #mobile-back>
          <i-ion-arrow-back-outline
            class="inline-flex ml-2 text-3xl"
            v-if="$router.currentRoute.value.path != ''"
          ></i-ion-arrow-back-outline>
        </template>
        <template #menu>
          <div class="flex flex-row items-center justify-end h-full space-x-1">
            <button class="border-none btn" @click="closeMenu1()">Page 1</button>
            <button class="border-none btn" @click="closeMenu1()">Page 2</button>
            <div class="px-5 text-lg cursor-pointer" @click="user.toggleDarkMode()">
              <i-fa-solid-moon v-if="user.isDarkMode.value == false"></i-fa-solid-moon>
              <i-fa-solid-sun v-else></i-fa-solid-sun>
            </div>
          </div>
        </template>
      </sw-header>
      <sw-mobile-menu
        :is-visible="isMenu1Visible"
        class="bg-neutral text-neutral-r dark:bg-neutral-dark dark:text-neutral-r-dark"
        breakpoint="2xl"
      >
        <div class="flex flex-col p-3 space-y-5">
          <button class="border-none btn">Page 1</button>
          <button class="border-none btn">Page 2</button>
        </div>
      </sw-mobile-menu>
      <div class="p-3">Main</div>
    </div>
    <div
      id="collapse1"
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
    <code-button class="mt-3" :collapse="collapse1" @toggle="collapse1 = !collapse1"></code-button>

    <div class="mt-12 mb-8 text-xl">Props</div>
    <props-table :tableData="propsData"></props-table>

    <div class="mt-12 mb-8 text-xl">Events</div>
    <events-table :tableData="eventsData"></events-table>

    <next-bar
      class="mt-24"
      :prev="{ link: '/collapse', text: 'Collapse' }"
      :next="{ link: '/input', text: 'Input' }"
    ></next-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { SwHeader, SwMobileMenu } from "@snowind/header";
import CodeBlock from "@/widgets/CodeBlock.vue";
import PropsTable from "@/widgets/PropsTable.vue";
import EventsTable from "@/widgets/EventsTable.vue";
import NextBar from "@/widgets/NextBar.vue";
import CodeButton from "@/widgets/CodeButton.vue";
import ResponsiveBlock from "../widgets/ResponsiveBlock.vue";
import { user } from "@/state";

export default defineComponent({
  components: {
    CodeBlock,
    PropsTable,
    EventsTable,
    SwHeader,
    SwMobileMenu,
    NextBar,
    CodeButton,
    ResponsiveBlock,
  },
  setup() {
    const isMobile1 = ref(false);
    const isMenu1Visible = ref(false);
    const collapse1 = ref(true);

    const propsData: Array<Record<string, string | boolean>> = [
      {
        prop: "breakpoint",
        description: "A Tailwind breakpoint from where to trigger the mobile layout",
        type: "string",
        values: '"sm" | "md" | "lg" | "xl" | "2xl"',
        default: "sm",
        required: false,
      }
    ];

    const eventsData: Array<Record<string, string | boolean>> = [
      {
        name: "togglemenu",
        description: "Event emitted when the menu button is clicked",
        returnType: "null",
      },
    ];

    const code1 = `
      <div>
        <sw-header
          class="h-12 bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-r-dark"
          @togglemenu="isMenuVisible = !isMenuVisible"
        >
          <template #branding>
            <div class="ml-5 text-lg">Branding</div>
          </template>
          <template #mobile-branding>
            <div class="ml-5 text-lg">Mobile branding</div>
          </template>
          <template #mobile-back>
            <i-ion-arrow-back-outline
              class="inline-flex ml-2 text-3xl"
              v-if="$router.currentRoute.value.path != ''"
            ></i-ion-arrow-back-outline>
          </template>
          <template #menu>
            <div class="flex flex-row items-center justify-end h-full space-x-1">
              <button class="border-none btn" @click="closeMenu()">Page 1</button>
              <button class="border-none btn" @click="closeMenu()">Page 2</button>
              <div class="px-5 text-lg cursor-pointer" @click="user.toggleDarkMode()">
                <i-fa-solid-moon v-if="user.isDarkMode.value == false"></i-fa-solid-moon>
                <i-fa-solid-sun v-else></i-fa-solid-sun>
              </div>
            </div>
          </template>
        </sw-header>
        <sw-mobile-menu
          :is-visible="isMenuVisible"
          class="bg-neutral text-neutral-r dark:bg-neutral-dark dark:text-neutral-r-dark">
          <div class="flex flex-col p-3 space-y-5">
            <button class="border-none btn">Page 1</button>
            <button class="border-none btn">Page 2</button>
          </div>
        </sw-mobile-menu>
      </div>
    `;

    const code2 = `
      import { SwHeader, SwMobileMenu } from "@snowind/header";
    
      export default defineComponent({
        components: {
          SwHeader,
          SwMobileMenu,
        },
        setup() {
          const isMenuVisible = ref(false);

          function closeMenu() {
            isMenuVisible.value = false;
          }

          return {
              isMenuVisible,
              closeMenu,
          }
        }
      });
    `;

    function closeMenu1() {
      isMenu1Visible.value = false;
    }

    return {
      isMobile1,
      user,
      isMenu1Visible,
      closeMenu1,
      code1,
      code2,
      collapse1,
      propsData,
      eventsData,
    }
  }
});
</script>

<style lang="sass">
#collapse1.slidedown
  max-height: 2000px
</style>