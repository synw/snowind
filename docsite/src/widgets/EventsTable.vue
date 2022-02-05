<template>
  <table class="w-full py-5">
    <thead class="text-neutral dark:text-neutral-dark">
      <tr>
        <th class="px-8 py-3">Name</th>
        <th class="px-8 py-3">Description</th>
        <th class="px-8 py-3">Return type</th>
      </tr>
    </thead>
    <tbody class="divide-y">
      <tr v-for="(row, i) in tableData" :key="i">
        <td class="px-8 py-3 font-bold">{{ row.name }}</td>
        <td class="px-8 py-3">{{ row.description }}</td>
        <td class="px-8 py-3">
          <code>{{ row.returnType }}</code>
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


