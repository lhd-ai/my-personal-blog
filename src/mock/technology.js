import Mock from "mockjs";

let list = [
  {
    name:'markdown',
    path:'/markdown',
  },
  {
    name:'git',
    path:'/git'
  }
]
Mock.mock('/technology','get',option => {
  const { username } = JSON.parse(option.body)
  if(username == 'lhd'){
    return {
      list,
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