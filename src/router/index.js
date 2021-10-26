import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "login_home_welome" */ 'components/login/Login')
const Home = () => import(/* webpackChunkName: "login_home_welome" */ 'components/home/Home')
const Welcome = () => import(/* webpackChunkName: "login_home_welome" */ 'components/home/welcome/Welcome')

const Users = () => import('components/home/users/Users')

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
    component: Home,
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        name:'Welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
    ]
  },
 
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
