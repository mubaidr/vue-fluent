<template>
  <div 
    v-if="attached && closable" 
    class="tags has-addons">
    <span
      :class="[type, size, { 'is-rounded': rounded }]"
      class="tag">
      <slot/>
    </span>
    <a
      :tabindex="tabstop ? 0 : false"
      :disabled="disabled"
      :class="[size, { 'is-rounded': rounded }]"
      class="tag is-delete"
      role="button"
      @click="close()"
      @keyup.delete.prevent="close()"
    />
  </div>
  <span
    v-else
    :class="[type, size, { 'is-rounded': rounded }]"
    class="tag">
    <slot/>

    <a
      v-if="closable"
      :disabled="disabled"
      :tabindex="tabstop ? 0 : false"
      role="button"
      class="delete is-small"
      @click="close()"
      @keyup.delete.prevent="close()"
    />
  </span>
</template>

<script>
    export default {
        name: 'BTag',
        props: {
            attached: Boolean,
            closable: Boolean,
            type: String,
            size: String,
            rounded: Boolean,
            disabled: Boolean,
            tabstop: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            /**
             * Emit close event when delete button is clicked
             * or delete key is pressed.
             */
            close() {
                if (this.disabled) return

                this.$emit('close')
            }
        }
    }
</script>
