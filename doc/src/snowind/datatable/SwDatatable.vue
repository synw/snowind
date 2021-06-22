<template>
  <table>
    <thead>
      <tr>
        <th v-for="(col, i) in model.columns.value" :key="i.toString()" v-html="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in model.rows.value" :key="i.toString()">
        <td v-for="(cell, ii) in Object.keys(row)" :key="ii">
          <component
            :key="i.toString() + cell"
            :is="getRenderer(cell)"
            :k="cell"
            :v="row[cell]"
            @update:v="onChange($event, parseInt(i.toString()))"
          ></component>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
import SwDatatableModel from "./model";
import DefaultCellRenderer from "./DefaultCellRenderer.vue";

export default defineComponent({
  props: {
    model: {
      type: SwDatatableModel,
      required: true,
    },
    renderers: {
      type: Object,
      default: () => { }, // eslint-disable-line
    },
  },
  setup(props) {
    const { model, renderers } = toRefs(props);

    function getRenderer(k: string) {
      if (renderers.value !== undefined) {
        const rendererNames = new Set<string>(Object.keys(renderers.value));
        if (rendererNames.has(k)) {
          return renderers.value[k];
        }
      }
      return DefaultCellRenderer;
    }

    // eslint-disable-next-line
    function onChange(event: Record<string, any>, i: number) {
      console.log("ON CHG", event)
      model.value.rows.value[i][event.k] = event.v;
    }

    return {
      getRenderer,
      onChange,
    };
  },
});
</script>