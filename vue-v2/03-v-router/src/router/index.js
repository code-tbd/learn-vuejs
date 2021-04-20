import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
// import About from '../views/About.vue'

// 通过Vue.use安装插件
Vue.use(VueRouter)

// 创建routes对象
const routes = [
  {
    // 配置路径
    path: '/',
    name: 'Home',
    // 映射组件
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // component: About
    children: [
      {
        path: '/',
        name: 'Message',
        component: () => import('../components/Message.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../components/News.vue')
      }
    ]
  },
  {
    path: '/user/:id',
    name: 'User',
    // component: () => import('../views/User.vue')
    component: User,

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
