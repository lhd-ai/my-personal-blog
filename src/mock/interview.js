import Mock from "mockjs";

let obj = [
  {
    name: '综合',
    children: [
      {
        name:'权限管理',
        path:'/interview-permissions'
      },
    ]
  },
  {
    name: 'js',
    children: [
      {
        name:'原型链',
        path:'/interview-prototype'
      },
      {
        name:'事件循环',
        path:'/interview-eventCycle'
      },
    ]
  },
]
Mock.mock('/interview', 'get', option => {
  const { username,password} = JSON.parse(option.body)
  if (username == 'lhd' && password == '211314') {
    return {
      obj,
      code: 200,
      msg: '获取成功'
    }
  } else {
    return {
      obj,
      code: 200,
      msg: '获取失败'
    }
  }
})