<template>
  <div class="flex items-center sw-stepper">
    <template v-for="(viewname, i) in subviews.visibleViews.value">
      <div class="relative flex items-center" :class="getRowClass(viewname, i)">
        <div class="stepper-step">{{ i + 1 }}</div>
        <div class="stepper-label">{{ subviews.views[viewname].props.label }}</div>
      </div>
      <div class="stepper-line" v-if="!isLastLoop(i)" :class="getRowClass(viewname, i)"></div>
    </template>
  </div>
</template>

<script setup lang="ts">import { SubViews } from './main';

const props = defineProps({
  subviews: {
    type: SubViews,
    required: true,
  },
});

function getRowClass(viewname: string, i: number): string {
  let cls = "";
  if (props.subviews.active.value == viewname) {
    cls = "active"
  } else if (i < props.subviews.activeIndex.value) {
    cls = "done"
  }
  return cls
}

function isLastLoop(i: number): boolean {
  return (i + 1) == props.subviews.visibleViews.value.length;
}
</script>