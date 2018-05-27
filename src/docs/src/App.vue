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
import HeaderView from './components/Header'
import FooterView from './components/Footer'

export default {
  components: {
    HeaderView,
    FooterView,
  },
}
</script>

<style lang="sass">
@import '../../lib/vue-fluent.sass'
</style>
