import { createRouter ,createWebHashHistory} from 'vue-router'
import Login from './components/Login.vue'
import ansyncRouteMap from './dynRoute'
const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: Login
  },
  {
    path: '/login',
    name:'login',
    component: Login,
    meta: {
      textName: '登录'
    }
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/technology',
    component: () => import('./components/Home/home.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
let isF = false  //这个是用于判断动态路由是否已经被获取

router.beforeEach( (to, from) => {
  if (to.meta.textName) {
    document.title = to.meta.textName
  }
  console.log(sessionStorage.getItem('token'))
  if (to.path === '/login') {
    return true
  }
  if(sessionStorage.getItem('token')){
    if(isF){
      return true
    }else{
      const role = sessionStorage.getItem('token')
      const newMap =ansyncRouteMap.filter(item => {
        return item.meta.role.indexOf(role) != -1
      })
      newMap.forEach(item => {
        router.addRoute('home',item)
      })
      isF = true
      return { ...to, replace:true}
    }
  }else{
    return {path:'/login'}
  }

})

export default router
