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
    component:() => import('./components/Home/home.vue'),
    children:[
      {
        path:'',
        name:'technology',
        component: () => import('./components/Home/Technology/index.vue'),
        children:[
          {
            path:'',
            component: () => import('./components/Home/Technology/markdown.vue')
          }
        ]
      },
      {
        path:'/technology',
        component: () => import('./components/Home/Technology/index.vue'),
        children:[
          {
            path:'',
            component: () => import('./components/Home/Technology/markdown.vue')
          },
          {
            path:'/git',
            name:'git',
            component: () => import('./components/Home/Technology/git.vue')
          }
        ]
      }
    ]
  }
]
const router = VueRouter.createRouter({
  history:VueRouter.createWebHashHistory(),
  routes
})
export default router