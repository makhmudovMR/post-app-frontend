import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    meta:{
      auth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue'),
    meta:{
      auth: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta:{
      auth: false
    }
  },

  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/views/Registration.vue'),
    meta:{
      auth: false
    }
  },

  {
    path: '/postdetail',
    name: 'PostDetail',
    component: () => import('@/views/PostDetail.vue'),
    meta:{
      auth: true
    }
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)){
    if(localStorage.getItem('token') == null){
      next({name: 'Login'})
    }
    next();
  } else {
    next()
  }
})

export default router
