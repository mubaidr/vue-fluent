<template>
  <div class="control">
    <label
      ref="label"
      :class="[checked ? type : null, size, { 'is-disabled': disabled }]"
      :disabled="disabled"
      :tabindex="disabled ? false : 0"
      class="b-checkbox checkbox button"
      @keydown.prevent.enter.space="$refs.label.click()">
      <slot/>
      <input
        v-model="newValue"
        :disabled="disabled"
        :name="name"
        :value="nativeValue"
        type="checkbox">
    </label>
  </div>
</template>

<script>
export default {
  name: 'BCheckboxButton',
  introduction: 'an amazing checkbox',
  description: `
  This \`checkbox\` is amazing, you should _check_ it out.
  `,
  token: "<checkbox label='foo'></checkbox>",
  props: {
    value: [String, Number, Boolean, Function, Object, Array, Symbol],
    nativeValue: [String, Number, Boolean, Function, Object, Array, Symbol],
    disabled: Boolean,
    name: String,
    size: String,
    type: {
      type: String,
      default: 'is-primary',
    },
  },
  data() {
    return {
      newValue: this.value,
    }
  },
  computed: {
    checked() {
      if (Array.isArray(this.newValue)) {
        return this.newValue.indexOf(this.nativeValue) >= 0
      }
      return this.newValue === this.nativeValue
    },
  },
  watch: {
    /**
     * When v-model change, set internal value.
     */
    value(value) {
      this.newValue = value
    },
    /**
     * Emit input event to update the user v-model.
     */
    newValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>
