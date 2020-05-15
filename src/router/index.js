import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/views/first.vue'
import index from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
