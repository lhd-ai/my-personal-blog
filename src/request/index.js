import axios from "axios";
const env = import.meta.env
const baseUrl = env.MODE == 'development' ? '/mock' :''
const request = axios.create({
  baseUrl,
  timeout:60000
})
//添加请求拦截器
request.interceptors.request.use((config) => {
  if(config.url != '/login'){
    config.headers.Ayuthozation = sessionStorage.getItem('token')
  }
  // console.log(config)
  return config
})
request.interceptors.response.use((config) => {
  if(config.data.code !== 200){
    this.$router.replace('/login')
  }else{
    return config
  }
})
export default request