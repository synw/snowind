<template>
  <table class="w-full py-5">
    <thead class="text-neutral dark:text-neutral-dark">
      <tr>
        <th class="px-8 py-3">Name</th>
        <th class="px-8 py-3">Description</th>
        <th class="px-8 py-3">Type</th>
        <th class="px-8 py-3">Accepted values</th>
        <th class="px-8 py-3">Default</th>
        <th class="px-8 py-3">Required</th>
      </tr>
    </thead>
    <tbody class="divide-y">
      <tr v-for="(row, i) in tableData" :key="i">
        <td class="px-8 py-3 font-bold">{{ row.prop }}</td>
        <td class="px-8 py-3">{{ row.description }}</td>
        <td class="px-8 py-3">
          <code v-html="row.type"></code>
        </td>
        <td class="px-8 py-3" v-html="row.values"></td>
        <td class="px-8 py-3">
          <code v-html="row.default"></code>
        </td>
        <td class="px-8 py-3">
          <i class="fas fa-check text-success dark:text-success-dark" v-if="row.required === true"></i>
          <i class="text-light dark:text-light-dark fas fa-times" v-else></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    tableData: {
      type: Array as () => Array<Record<string, string | boolean>>,
      required: true,
    },
  },
});
</script>


