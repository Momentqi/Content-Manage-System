import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('components/login/Login')
const Home = () => import('components/home/Home')
const Welcome = () => import('components/home/welcome/Welcome')

const Users = () => import('components/home/users/Users')
const Rights = () => import('components/home/power/rights/Rights')
const Roles = () => import('components/home/power/roles/Roles')

const Cate = () => import( 'components/home/goods/cate/Cate')
const Params = () => import( 'components/home/goods/params/Params')

const GoodsList = () => import('components/home/goods/list/List')
const Add = () => import('components/home/goods/list/children/Add')

const Order = () => import('components/home/order/Order')
const Report = () => import('components/home/report/Report')








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
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: GoodsList
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      {
        path: '/reports',
        component: Report
      }
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
