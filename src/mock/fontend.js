import Mock from "mockjs";

let obj = [
  {
    name: 'Vue3',
    children: [
      {
        name:'开始',
        grandson: [
          {
            name: '简介',
            path: '/vue-briefIntroduction'
          },
          {
            name: '快速上手',
            path: '/vue-getStartedQuickly'
          }
        ]
      },
      {
        name: '组合式API',
        grandson: [
          {
            name: '介绍',
            path: '/vue3-setupStart'
          },
          {
            name: 'setup()',
            path: '/vue3-setup'
          },
          {
            name:'响应式核心',
            path:'/vue3-core'
          },
          {
            name: '响应式工具',
            path: '/vue3-tool'
          }
        ]
      },
      {
        name: '路由',
        grandson: [
          {
            name:'安装',
            path: '/vue3-routerInstallation'
          },
          {
            name:'入门',
            path:'/vue3-routerGetStart'
          },
          {
            name: '动态路由匹配',
            path: '/vue3-dynRoutering/222'
          },
          {
            name: '路由的匹配语法',
            path: '/vue3-routerMatch'
          },
          {
            name:'路由嵌套',
            path: '/vue3-routerNested'
          },
          {
            name: '编程式导航',
            path: '/vue3-gorNav'
          },
          {
            name:'命名路由',
            path: '/vue3-nameRouter'
          },
          {
            name:'命名视图',
            path: '/vue3-nameView'
          },
          {
            name:'重定向和别名',
            path: '/vue3-redirect'
          },
          {
            name:'路由组件传参',
            path: '/vue3-rotrerParameter'
          },
          {
            name:'不同的历史纪录模式',
            path: '/vue3-historyMode'
          },
          {
            name:'路由懒加载',
            path: '/vue3-lazyLoading'
          }
        ]
      }
    ]
  },
  {
    name: 'Ts',
    children: [
      {
        name: '原始数据类型',
        path: '/ts-originalData'
      },
      {
        name: '任意值',
        path: '/ts-arbitranily'
      },
      {
        name: '类型推论',
        path: '/ts-typeInference'
      },
      {
        name: '联合类型',
        path: '/ts-fedratedType'
      },
      {
        name: '对象的类型——接口',
        path: '/ts-interface'
      },
      {
        name: '数组的类型',
        path: '/ts-arrayType'
      },
      {
        name: '函数的类型',
        path: '/ts-functionType'
      },
      {
        name: '类型断言',
        path: '/ts-typeAssertions'
      },
      {
        name: '内置对象',
        path: '/ts-builtObject'
      },
      {
        name: '类型别名',
        path: '/ts-typeAlias'
      },
      {
        name: '字符串字面量类型',
        path: '/ts-stringLiteral'
      },
      {
        name: '元组',
        path: '/ts-tuples'
      },
      {
        name: '枚举',
        path: '/ts-enum'
      },
      {
        name: '类',
        path: '/ts-class'
      },
      {
        name: '类与接口',
        path: '/ts-classInterface'
      },
      {
        name: '泛型',
        path: '/ts-generic'
      },
      {
        name: '声明合并',
        path: '/ts-declarationMerge'
      }
    ]
  },
  {
    name: 'Js',
    children: [
      {
        name: 'proxy',
        path: '/js-proxy'
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