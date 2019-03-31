import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/sensor',
      name: 'sensor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "sensor" */
        './views/Sensors.vue'
      )
    },
    {
      path: '/functional-programming',
      name: 'functional-programming',
      component: () => import(/* webpackChunkName: "functional-programming" */
        './views/FunctionalProgramming.vue'
      )
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
