import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name:'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
// 前置首位验证token
router.beforeEach((to,from,next) =>{
  if(to.path ==='/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
export default router
