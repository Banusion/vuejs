import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import A from '@/components/PageA'
import B from '@/components/PageB'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      path: '/a',
      name: 'pageA',
      component: A
    },
    {
      path: '/article/:id(\\d+)',
      name: 'post',
      components: {
        default: A,
        sidebar: B
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
