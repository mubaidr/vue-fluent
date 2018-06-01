<template>
  <div class="control">
    <label
      ref="label"
      :class="[newValue === nativeValue ? type : null, size]"
      :disabled="disabled"
      :tabindex="disabled ? false : 0"
      class="b-radio radio button"
      @keydown.prevent.enter.space="$refs.label.click()">
      <slot/>
      <input
        v-model="newValue"
        :disabled="disabled"
        :name="name"
        :value="nativeValue"
        type="radio">
    </label>
  </div>
</template>

<script>
    export default {
        name: 'BRadioButton',
        props: {
            value: [String, Number, Boolean, Function, Object, Array, Symbol],
            nativeValue: [String, Number, Boolean, Function, Object, Array, Symbol],
            type: {
                type: String,
                default: 'is-primary'
            },
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
