import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import './mock/login'
import'./mock/home'
import './mock/technology'
// import 'element-plus/theme-chalk/src/index.scss'
const app = createApp(App)
app.use(router)
app.mount('#app')

