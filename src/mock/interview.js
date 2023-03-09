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
      {
        name:'浅拷贝/深拷贝',
        path:'/interview-copy'
      },
      {
        name:'防抖/节流',
        path:'/interview-debounce'
      }
    ]
  },
  {
    name: 'Css',
    children: [
      {
        name:'选择器',
        path:'/interview-select'
      },
      {
        name:'水平垂直居中',
        path:'/interview-center'
      },
      {
        name:'双栏/三栏布局',
        path:'/interview-layout'
      },
      {
        name:'BFC',
        path:'/interview-bfc'
      },
      {
        name:'零散',
        path:'/interview-scattered'
      }
    ]
  },{
    name:'Vue',
    children:[
      
    ]
  }
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