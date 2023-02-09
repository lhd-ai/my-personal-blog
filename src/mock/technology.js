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
  const { username,password} = JSON.parse(option.body)
  if(username == 'lhd' && password == '211314'){
    return {
      list,
      code:200,
      msg:'成功'
    }
  }else{
    return {
      list,
      code:200,
      msg:'成功'
    }
  }
})