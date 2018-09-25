import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/form',
      name: 'form',
      component: () =>
        import(/* webpackChunkName: "form" */ './views/form.vue'),
    },
    {
      path: '/elements',
      name: 'elements',
      component: () =>
        import(/* webpackChunkName: "elements" */ './views/elements.vue'),
    },
    {
      path: '/components',
      name: 'components',
      component: () =>
        import(/* webpackChunkName: "components" */ './views/components.vue'),
    },
    {
      path: '/extras',
      name: 'extras',
      component: () =>
        import(/* webpackChunkName: "extras" */ './views/extras.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})
