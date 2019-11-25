<template>
  <label
    class="lx-radio"
    :class="{
      'is-bordered': border,
      'is-disabled': isDisabled,
      'is-checked': model === label
    }"
    role="radio"
  >
    <!-- <span
      class="el-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="el-radio__inner"></span>
      <input v-model="model" :value="label" type="radio" />
    </span> -->
      <input v-model="model" :value="label" type="radio" :disabled="isDisabled" />
    <span>
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
import Emitter from "../../../mixins/emitter";
export default {
  name: "LxRadio",
  componentName: "LxRadio",
  mixins: [Emitter],
  props: {
    label: {},
    value: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
        // return this.value
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch("LxRadioGroup", "input", [val]);
        } else {
          this.$emit("input", val);
        }
      }
    },
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "LxRadioGroup") {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },
    isDisabled() {
      return this.isGroup
        ? this._radioGroup.disabled || this.disabled
        : this.disabled;
    }
  }
};
</script>
