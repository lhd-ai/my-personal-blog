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
  }
]
const router = VueRouter.createRouter({
  history:VueRouter.createWebHashHistory(),
  routes
})
export default router