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
      },
      {
        name:'函数的类型',
        path:'/ts-functionType'
      },
      {
        name:'类型断言',
        path:'/ts-typeAssertions'
      },
      {
        name:'内置对象',
        path:'/ts-builtObject'
      },
      {
        name:'类型别名',
        path:'/ts-typeAlias'
      },
      {
        name:'字符串字面量类型',
        path:'/ts-stringLiteral'
      },
      {
        name:'元组',
        path:'/ts-tuples'
      },
      {
        name:'枚举',
        path:'/ts-enum'
      },
      {
        name:'类',
        path:'/ts-class'
      },
      {
        name:'类与接口',
        path:'/ts-classInterface'
      },
      {
        name:'泛型',
        path:'/ts-generic'
      },
      {
        name:'声明合并',
        path:'/ts-declarationMerge'
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