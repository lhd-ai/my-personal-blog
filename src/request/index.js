import axios from "axios";

const request = axios.create({
  baseUrl:'/mock',
  timeout:60000
})
export default request