import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children:[
      {
        path: '',
        name: 'HomePage',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home-page/homePage.vue'),
        meta:{
          isLogin:true
        }
      },
      {
        path: '/person',
        name: 'person',
        component: () => import(/* webpackChunkName: "about" */ '../views/Person/person.vue'),
        meta:{
          isLogin:true
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
