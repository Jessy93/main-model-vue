import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase/app'

import store from '@/store';

Vue.use(VueRouter)

const router =   new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: {layout: 'empty'},
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/inscription',
      name: 'Inscription',
      meta: {layout: 'empty'},
      component: () => import('@/views/Inscription.vue')
    },
    {
      path: '/',
      name: 'Home',
      meta: {layout: 'main', auth: true},
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/error',
      name: 'Error',
      meta: {layout: 'main', auth: true},
      component: () => import('@/views/Error.vue')
    },
    {
      path: '*',
      meta: {layout: 'main' || 'empty', auth: true || false},
      redirect: '/404'
    },
  ]
})

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router

router.beforeEach((to, from, next) => {
  // const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (!requireAuth) {
    console.log(1);
    next('/login');
  } else {next()}
})
