import Mock from "mockjs";

let dataList = [
  {
    name:'前端',
    path:'/fontend'
  },
  {
    name:'构建工具',
    path:'/buildtools'
  },
  {
    name:'技术',
    path:'/technology'
  },
  {
    name:'面试',
    path:'/fontend'
  }
]

Mock.mock('/home','get',option => {
  const { username } = JSON.parse(option.body)
  if(username === 'lhd'){
    return {
      dataList,
      code:200,
      msg:'成功'
    }
  }else{
    return {
      code:401,
      msg:'获取失败'
    }
  }
})