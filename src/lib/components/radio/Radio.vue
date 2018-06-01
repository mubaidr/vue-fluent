<template>
  <label
    ref="label"
    :class="[size, { 'is-disabled': disabled }]"
    :disabled="disabled"
    :tabindex="disabled ? false : 0"
    class="b-radio radio"
    @keydown.prevent.enter.space="$refs.label.click()">
    <input
      v-model="newValue"
      :disabled="disabled"
      :name="name"
      :value="nativeValue"
      type="radio">
    <span 
      :class="type" 
      class="check" />
    <span class="control-label"><slot/></span>
  </label>
</template>

<script>
    export default {
        name: 'BRadio',
        props: {
            value: [String, Number, Boolean, Function, Object, Array, Symbol],
            nativeValue: [String, Number, Boolean, Function, Object, Array, Symbol],
            type: String,
            disabled: Boolean,
            name: String,
            size: String
        },
        data() {
            return {
                newValue: this.value
            }
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
                // only trigger input event
                // when current bRadioButton is clicked.
                if (value === this.nativeValue) {
                    this.$emit('input', value)
                }
            }
        }
    }
</script>
