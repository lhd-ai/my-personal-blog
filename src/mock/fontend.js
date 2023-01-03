import Mock from "mockjs";

let obj = [
  {
    name:'Vue3',
    children:[
      {
        name:'组合式API',
        path:'/vue3-setup'
      }
    ]
  },
  {
    name:'ts',
    children:[
      {
        name:'原始数据类型',
        path:'/ts-originalData'
      },
      {
        name:'任意值',
        path:'/ts-arbitranily'
      },
      {
        name:'类型推论',
        path:'/ts-typeInference'
      },
      {
        name:'联合类型',
        path:'/ts-fedratedType'
      },
      {
        name:'对象的类型——接口',
        path:'/ts-interface'
      },
      {
        name:'数组的类型',
        path:'/ts-arrayType'
      }
    ]
  }
]
Mock.mock('/fontend', 'get', option => {
  const { username } = JSON.parse(option.body)
  if (username == 'lhd') {
    return {
      obj,
      code: 200,
      msg: '获取成功'
    }
  } else {
    return {
      code: 401,
      msg: '获取失败'
    }
  }
})