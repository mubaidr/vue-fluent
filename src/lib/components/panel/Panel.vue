<template>
  <nav class="panel">
    <div
      :class="{'is-collapsible' : collapsible}"
      class="panel-heading"
      @click="toggle">
      <span 
        v-if="header" 
        v-html="header"/>
      <slot 
        v-else 
        name="header"/>
      <b-icon
        v-if="collapsible"
        :icon="isOpen ? 'menu-up' : 'menu-down'"
        class="is-pulled-right"
        both/>
    </div>
    <transition :name="animation">
      <div
        v-show="isOpen"
        :class="{'panel-block' : !hasCustomTemplate}"
        class="panel-content">
        <div 
          v-if="content" 
          v-html="content"/>
        <slot v-else/>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  name: 'BPanel',
  props: {
    collapsible: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: true,
    },
    hasCustomTemplate: {
      type: Boolean,
      default: false,
    },
    header: String,
    content: String,
    animation: {
      type: String,
      default: 'fade',
    },
  },
  data() {
    return {
      isOpen: this.open,
    }
  },
  watch: {
    open(value) {
      this.isOpen = value
    },
  },
  methods: {
    /**
     * Toggle the Panel and emit events if collapsible.
     */
    toggle() {
      if (!this.collapsible) return

      this.isOpen = !this.isOpen
      this.$emit('update:open', this.isOpen)

      if (this.isOpen) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
    },
  },
}
</script>
