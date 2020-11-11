import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('../views/Home.vue') },
  { path: '/about', component: () => import('../views/About.vue') },
  { path: '/navigation', component: () => import('../views/Navigation.vue') },
  { path: '/subscribebuy', component: () => import('../views/Subscribe.vue') },
  { path: '/subscribesell', component: () => import('../views/Subscribe.vue') },
  { path: '/auth', component: () => import('../views/Authen.vue') },
  { path: '/city', component: () => import('../views/City.vue') },
  { path: '/buy', component: () => import('../views/BuyCar.vue') },
  { path: '/sell', component: () => import('../views/SellCar.vue') },
  { path: '/detail/:id', component: () => import('../views/Detail.vue') },
  { path: '/active/:id', component: () => import('../views/Active.vue') },
  { path: '/asess', component: () => import('../views/Asess.vue') },
  { path: '/map', component: () => import('../views/testMap.vue') }
]

const router = new VueRouter({
  base: '/mobileweb/',
  routes
})

export default router
