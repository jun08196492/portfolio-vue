import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import(/* webpackChunkName: "Join" */ '@/views/Join.vue')
  },
  {
    path: '/onlineshop',
    name:'OnlineShop',
    component: () => import(/* webpackChunkName: "OnlineShop" */ '@/views/OnlineShop.vue'),
    children:[
      {
        path: '/shopbowl',
        name: 'ShopBowl',
        component: () => import(/* webpackChunkName: "OnlineShop" */ '@/views/ShopMenu/ShopBowl.vue'),
      },
      {
        path: '/shopcup',
        name: 'ShopCup',
        component: () => import(/* webpackChunkName: "OnlineShop" */ '@/views/ShopMenu/ShopCup.vue'),
      },
      {
        path: '/shopother',
        name: 'ShopOther',
        component: () => import(/* webpackChunkName: "OnlineShop" */ '@/views/ShopMenu/ShopOther.vue'),
      }
    ]
  },
  {
    path:'/event',
    name:'Event',
    component: () => import(/* webpackChunkName: "Event" */ '@/views/Event.vue'),
  },
  {
    path:'/qna',
    name:'QnN',
    component: () => import(/* webpackChunkName: "QnA" */ '@/views/QnA.vue'),
  },
  {
    path:'/notice',
    name:'Notice',
    component: () => import(/* webpackChunkName: "Notice" */ '@/views/Notice.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
