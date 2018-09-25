<template>
  <div id="app">
    <header-view/>

    <section class="section">
      <div class="container">

        <transition
          name="slide-right"
          appear="appear"
          mode="out-in">
          <router-view/>
        </transition>

      </div>
    </section>

    <footer-view/>
  </div>
</template>
<script>
import HeaderView from './components/Header.vue'
import FooterView from './components/Footer.vue'

export default {
  components: {
    HeaderView,
    FooterView,
  },
}
</script>

<style lang="sass">
</style>
