import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.less'
import App from './App.vue'
import router from './routes.js'
import './mock/login'
import'./mock/home'
import './mock/technology'
import './mock/buildtools'
import './mock/fontend'
import './mock/interview'
import './mock/item'
import './mock/hxfgzh'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


// import 'element-plus/theme-chalk/src/index.scss'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
const pinia = createPinia()
app.directive('isShow',{
  created(){
    console.log('执行111111')
  },
  beforeMount(el,binding,vnode,prevNode){
    console.log('执行111')
    console.log(el)
    console.log(binding)
    console.log(vnode)
    console.log(prevNode)
  }
})
app.use(router)
app.use(pinia)
app.mount('#app')

