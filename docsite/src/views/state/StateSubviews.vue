<template>
  <div class="mb-8 text-2xl">Subviews</div>
  <div>Manage local reactive subviews without any router. The views are mapped on components</div>

  <div class="mt-8 mb-8 text-xl">Usage</div>
  <div class="mt-5">Create a component for each view and declare the views:</div>
  <code-block :code="code1" lang="typescript" class="mt-5"></code-block>
  <div class="mt-5">Then use the views in template:</div>
  <code-block :code="code2" class="mt-5"></code-block>
  <div class="mt-5">To activate a view:</div>
  <code-block :code="code3" class="mt-5"></code-block>

  <anchor-title name="options" class="mt-8 mb-8 text-lg">Options</anchor-title>
  <ul class="mx-3 mt-5 space-y-2">
    <li>
      <div class="inline-block font-bold">activeView</div>:
      <code class="variable">Literal</code>: the initialy active view. One of the view names declared
    </li>
    <li>
      <div class="inline-block font-bold">invisibleViews</div>:
      <code class="variable">Array of literal</code>: hidden views. An array with some of the view names declared
    </li>
    <li>
      <div class="inline-block font-bold">onViewChange</div>:
      <code class="variable">function</code> a function that takes a view name as parameter. Called
      each time the view changes
    </li>
  </ul>
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse === true,
      'slidedown': collapse === false
    }"
    class="mt-4"
  >
    <code-block :code="code4" lang="typescript" class="mt-3"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapse" @toggle="collapse = !collapse"></code-button>

  <anchor-title name="methods" class="mt-8 mb-8 text-lg">Methods</anchor-title>
  <ul class="mx-3 mt-5 space-y-2">
    <li>
      <div class="inline-block font-bold">activate</div>:
      to activate a view
    </li>
    <li>
      <div class="inline-block font-bold">hide</div>:
      to hide a visible view
    </li>
    <li>
      <div class="inline-block font-bold">show</div>:
      to show a hidden view
    </li>
    <li>
      <div class="inline-block font-bold">isVisible</div>:
      to check if a view is visible
    </li>
  </ul>
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse2 === true,
      'slidedown': collapse2 === false
    }"
    class="mt-4"
  >
    <code-block :code="code5" lang="typescript" class="mt-3"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapse2" @toggle="collapse2 = !collapse2"></code-button>

  <anchor-title name="props" class="mt-8 mb-8 text-lg">Properties, getters and computed props</anchor-title>
  <ul class="mx-3 mt-5 space-y-2">
    <li>
      <div class="inline-block font-bold">views</div>:
      <code class="variable">Record&lt;T, SubViewData&gt;</code>: an object view the view name
      as key and the view data as value. This property is read only
    </li>
    <li>
      <div class="inline-block font-bold">activeName</div>:
      <code class="variable">Ref&lt;T&gt;</code>: the active view name reactive ref
    </li>
    <li>
      <div class="inline-block font-bold">active</div>:
      <code class="variable">SubViewData</code>: the active view data
    </li>
    <li>
      <div class="inline-block font-bold">activeIndex</div>:
      <code class="variable">computed prop</code>: the active view index number
    </li>
    <li>
      <div class="inline-block font-bold">component</div>:
      <code class="variable">a Vue component</code>: the component associated with the view
    </li>
    <li>
      <div class="inline-block font-bold">visibleViews</div>:
      <code class="variable">computed prop</code>: a computed prop array of the visible views names
    </li>
  </ul>
  <div
    :class="{
      'slide-y': true,
      'slideup': collapse3 === true,
      'slidedown': collapse3 === false
    }"
    class="mt-4"
  >
    <code-block :code="code6" lang="typescript" class="mt-3"></code-block>
  </div>
  <code-button class="mt-3" :collapse="collapse3" @toggle="collapse3 = !collapse3"></code-button>

  <anchor-title name="custom-props" class="mt-8 mb-8 text-lg">Custom view props</anchor-title>
  <div class="mt-5">The views can have custom properties. Example:</div>
  <code-block :code="code7" lang="typescript" class="mt-3"></code-block>Template:
  <code-block :code="code8" class="mt-3"></code-block>

  <anchor-title name="install" class="mt-12 mb-8 text-lg">Install</anchor-title>
  <code lang="bash">npm install @snowind/subviews</code>
  <br />
  <code class="mt-3 text-neutral"># or</code>
  <br />
  <code class="mt-3">yarn add @snowind/subviews</code>

  <next-bar
    class="mt-24"
    :prev="{ link: '/state/user', text: 'User' }"
    :next="{ link: '/examples/form', text: 'Form example' }"
  ></next-bar>
</template>

<script setup lang="ts">
import CodeBlock from "@/widgets/CodeBlock.vue";
import CodeButton from "@/widgets/CodeButton.vue";
import NextBar from "@/widgets/NextBar.vue";
import AnchorTitle from "@/widgets/AnchorTitle.vue";
import { ref } from "vue";

const collapse = ref(true);
const collapse2 = ref(true);
const collapse3 = ref(true);

const code1 = `
    import { SubViews } from "@snowind/subviews";
    import SubviewOne from "./views/SubviewOne.vue";
    import SubviewTwo from "./views/SubviewTwo.vue";
    import SubviewThree from "./views/SubviewThree.vue";

    const subviews = new SubViews({
      views: {
        "one": SubviewOne,
        "two": SubviewTwo,
        "three": SubviewThree,
      }
    });
    `;

const code2 = `
    <div>
      <component :is="subviews.component"></component>
    </div>
    `;

const code3 = `
  <button class="btn" @click="subviews.activate('two')">Activate view two</button>

`;

const code4 = `
    import { SubViews } from "@snowind/subviews";
    import SubviewOne from "./views/SubviewOne.vue";
    import SubviewTwo from "./views/SubviewTwo.vue";
    import SubviewThree from "./views/SubviewThree.vue";

    const subviews = new SubViews({
      views: {
        "one": SubviewOne,
        "two": SubviewTwo,
        "three": SubviewThree,
      },
      activeView: "three",
      invisibleViews: ["two"],
      onChangeView: (v: typeof subviews) { 
        console.log("View changed to", v)
       }
    });

`

const code5 = `
    // activate a view
    subviews.activate("two");
    // hide a view
    subviews.hide("two")
    // show a view
    subviews.show("two")
    // check if a view is visible
    const isVisible: boolean = subviews.isVisible("two")

`

const code6 = `
    import { Component } from "vue";
    import { SubViewData } from "@snowind/subviews";

    // all views
    const views: Record<"one" | "two" | "three", SubViewData> = subviews.views;
    // active view name
    const active: "one" | "two" | "three" = subviews.activeName.value;
    // active view data
    const activeView: SubViewData = subviews.active;
    // active view index number
    const activeIndex: number = subviews.activeIndex.value;
    // active component
    const activeComponent: Component = subviews.component;
    // visible views
    const visibleViews: ("one" | "two" | "three")[] = subviews.visibleViews.value;

`

const code7 = `
    const subviews = new SubViews({
      views: {
        "one": { component: SubviewOne, props: { label: "Label prop 1" } },
        "two": { component: SubviewTwo, props: { label: "Label prop 2" } },
        "three": { component: SubviewThree, props: { label: "Label prop 3" } },
      }
    });

`;

const code8 = `
    <div>Active view label prop: {{ subviews.active.props.label }}</div>

`
</script>