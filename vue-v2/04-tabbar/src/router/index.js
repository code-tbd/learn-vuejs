import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/category.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/cart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/profile.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
