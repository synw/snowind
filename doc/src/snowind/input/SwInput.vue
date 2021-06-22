<template>
  <div class="relative sw-input">
    <input
      v-model="input.inputValue.value"
      :type="type"
      :id="id"
      :class="validClass"
      :placeholder="placeholder"
      :required="required"
    />
    <label
      v-if="inlineLabel !== ''"
      :for="id"
      class="absolute px-1 left-2"
      :class="validClass"
    >{{ inlineLabel }}</label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";
import { RxInput } from "rxclass";
import { guidGenerator } from "../utils";

export default defineComponent({
  props: {
    id: {
      type: String,
      default: () => null,
    },
    inlineLabel: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    validator: {
      type: Function,
      default: () => true, // eslint-disable-line
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:value", "update:isvalid"],
  setup(props, { emit }) {
    const { id, value, validator } = toRefs(props);

    const input = new RxInput({
      id: id.value ?? guidGenerator(),
      value: value.value,
      validator: (v: string) => {
        let valid: boolean | null = false;
        switch (validator.value(v)) {
          case true:
            input.isValid.value = true;
            emit("update:isvalid", true);
            emit("update:value", v);
            valid = true;
            break;
          case false:
            input.isValid.value = false;
            emit("update:isvalid", false);
            valid = false;
            break;
          case null:
            input.isValid.value = false;
            emit("update:isvalid", null);
            valid = null;
            break;
          default:
            throw new Error(
              `The ${id} validator received an invalid value ${v}: it must be true, false or null`
            );
        }
        return valid;
      },
    });

    const validClass = computed<string>(() => {
      let v = "";
      switch (input.isValid.value) {
        case true:
          v = "valid";
          break;
        case false:
          v = "invalid";
          break;
        default:
          v = "neutral";
      }
      return v;
    });

    return {
      input,
      validClass,
    };
  },
});
</script>
