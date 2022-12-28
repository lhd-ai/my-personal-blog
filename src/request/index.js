import axios from "axios";
const env = import.meta.env
const baseUrl = env.MODE == 'development' ? '/mock' :''
const request = axios.create({
  baseUrl,
  timeout:60000
})
export default request