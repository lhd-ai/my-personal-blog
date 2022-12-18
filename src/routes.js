import * as VueRouter from 'vue-router'
import Login from './components/Login.vue'
const routes = [
  {
    path:'/:pathMatch(.*)*',
    redirect: '/login'
  },
  {
    path:'/login',
    component:Login,
    meta:{
      textName:'登录'
    }
  },
  {
    path:'/home',
    component:() => import('./components/Home/home.vue'),
    children:[
      {
        path:'',
        component: () => import('./components/Home/Technology/index.vue'),
        children:[
          {
            path:'',
            component: () => import('./components/Home/Technology/markdown.vue'),
            meta:{
              textName:'技术'
            },
          }
        ]
      },
      {
        path:'/technology',
        component: () => import('./components/Home/Technology/index.vue'),
        meta:{
          textName:'技术'
        },
        children:[
          {
            path:'',
            component: () => import('./components/Home/Technology/markdown.vue')
          },
          {
            path:'/markdown',
            component: () => import('./components/Home/Technology/markdown.vue'),
            meta:{
              textName:'markdown'
            }
          },
          {
            path:'/git',
            component: () => import('./components/Home/Technology/git.vue'),
            meta:{
              textName:'git'
            }
          }
        ]
      },
      {
        path:'/buildtools',
        component: () => import('./components/Home/BuildTools/index.vue'),
        children:[
          {
            path:'',
            component: () => import('./components/Home/BuildTools/webpack.vue'),
            meta:{
              textName:'构建工具'
            },
          },
          {
            path:'/webpack',
            component: () => import('./components/Home/BuildTools/webpack.vue'),
            meta:{
              textName:'webpack'
            }
          },
          {
            path:'/vite-intro',
            component: () => import('./components/Home/BuildTools/Vite/intro.vue'),
            meta:{
              textName:'vite介绍'
            }
          },
          {
            path:'/vite-start',
            component: () => import('./components/Home/BuildTools/Vite/viteStart.vue'),
            meta:{
              textName:'vite开始'
            }
          },
          {
            path:'/vite-general',
            component: () => import('./components/Home/BuildTools/Vite/general.vue'),
            meta:{
              textName:'配置vite'
            }
          },
          {
            path:'/vite-shareConfigure',
            component: () => import('./components/Home/BuildTools/Vite/shareConFigure.vue'),
            meta:{
              textName:'vite共享配置'
            }
          },
          {
            path:'/vite-serve',
            component: () => import('./components/Home/BuildTools/Vite/viteServe.vue'),
            meta:{
              textName:'vite开发服务器选项'
            }
          },
          {
            path:'/vite-structure',
            component: () => import('./components/Home/BuildTools/Vite/structure.vue'),
            meta:{
              textName:'vite开发服务器选项'
            }
          },
          {
            path:'/vite-preview',
            component: () => import('./components/Home/BuildTools/Vite/vitePreview.vue'),
            meta:{
              textName:'vite预览选项'
            }
          },
          {
            path:'/vite-relyon',
            component: () => import('./components/Home/BuildTools/Vite/relyOn.vue'),
            meta:{
              textName:'vite依赖优化'
            }
          },
          {
            path:'/vite-ssr',
            component: () => import('./components/Home/BuildTools/Vite/viteSsr.vue'),
            meta:{
              textName:'viteSSR选项'
            }
          },
          {
            path:'/vite-worker',
            component: () => import('./components/Home/BuildTools/Vite/viteWorker.vue'),
            meta:{
              textName:'viteSSR选项'
            }
          }
        ]
      },
      {
        path:'/fontend',
        component: () => import('./components/Home/FontEnd/index.vue'),
        meta:{
          textName:'前端'
        },
      }
    ]
  }
]
const router = VueRouter.createRouter({
  history:VueRouter.createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next) => {
  if(to.meta.textName){
    document.title = to.meta.textName
  }
  if(to.path != '/login'){
    if(!sessionStorage['username']){
      next('/login')
    }else{
      next()
    }
  }else{
    next()
  }

})
export default router