<template>
  <div id="app">
    <header-view></header-view>
    <transition name="slide-right" appear="appear" mode="out-in">
      <router-view/>
    </transition>
    <footer-view></footer-view>
  </div>
</template>
<script>
import HeaderView from './components/Header.vue'
import FooterView from './components/Footer.vue'

export default {
  components: {
    HeaderView,
    FooterView
  }
}
</script>

<style lang="sass">
</style>
