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
    path:'/interview'
  }
]

Mock.mock('/home','get',option => {
  const { username ,password} = JSON.parse(option.body)
  if(username === 'lhd' && password == '211314'){
    return {
      dataList,
      code:200,
      msg:'成功'
    }
  }else{
    return {
      dataList:dataList.filter((item) => item.name != '面试'),
      code:200,
      msg:'获取失败'
    }
  }
})