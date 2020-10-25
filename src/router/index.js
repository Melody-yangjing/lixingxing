import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('../views/Home.vue') },
  { path: '/about', component: () => import('../views/About.vue') },
  { path: '/navigation', component: () => import('../views/Navigation.vue') },
  { path: '/subscribe', component: () => import('../views/Subscribe.vue') },
  { path: '/auth', component: () => import('../views/Authen.vue') },
  { path: '/city', component: () => import('../views/City.vue') },
  { path: '/buy', component: () => import('../views/BuyCar.vue') },
  { path: '/sell', component: () => import('../views/SellCar.vue') },
  { path: '/detail', component: () => import('../views/Detail.vue') },
  { path: '/active', component: () => import('../views/Active.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
