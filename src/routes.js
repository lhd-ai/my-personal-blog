import * as VueRouter from 'vue-router'
import Login from './components/Login.vue'
const routes = [
  {
    path:'/:pathMatch(.*)*',
    redirect: '/login'
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/home',
    component:() => import('./components/Home/home.vue')
  }
]
const router = VueRouter.createRouter({
  history:VueRouter.createWebHashHistory(),
  routes
})
export default router