import { customRef, ref, Ref } from "@vue/reactivity";

export default class RxInput<T> {
  id: string;
  validator: (value: T) => boolean | null;
  isValid: Ref<boolean | null> = ref(null);
  _value: Ref<T>;
  inputValue: Ref<T>;
  private _timeout: NodeJS.Timeout | null = null;

  constructor({ id, value, validator, validationDelay = 400 }: {
    id: string,
    value: T,
    validator: (v: T) => boolean | null,
    validationDelay?: number
  }) {
    this.id = id;
    this._value = ref<T>(value) as Ref<T>;
    this.validator = validator;
    const instance = this;  // eslint-disable-line
    this.inputValue = customRef<T>((track, trigger) => ({
      get() {
        track();
        return instance._value.value;
      },
      set: (value: T) => {
        if (this._timeout !== null) {
          clearTimeout(this._timeout as NodeJS.Timeout);
        }
        this._timeout = setTimeout(() => {
          instance._value.value = value;
          trigger();
          instance.isValid.value = instance.validator(value)
          instance._timeout = null;
        }, validationDelay);
      }
    }));
  }
}