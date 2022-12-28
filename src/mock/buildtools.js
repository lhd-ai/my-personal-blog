import Mock from "mockjs";

let obj = [
  {
    name: 'webpack',
    path: '/webpack'
  },
  {
    name: 'vite',
    children:[
      {
        name:'vite与webpack区别',
        path:'/vite-difference'
      },
      {
        name:'介绍',
        path:'/vite-intro'
      },
      {
        name:'开始',
        path:'/vite-start'
      },
      {
        name:'基本配置',
        path:'/vite-general'
      },
      {
        name:'共享配置',
        path:'/vite-shareConfigure'
      },
      {
        name:'服务器选项',
        path:'/vite-serve'
      },
      {
        name:'构建选项',
        path:'/vite-structure'
      },
      {
        name:'预览选项',
        path:'/vite-preview'
      },
      {
        name:'依赖优化选项',
        path:'/vite-relyon'
      },
      {
        name:'SSR选项',
        path:'/vite-ssr'
      },
      {
        name:'Worker选项',
        path:'/vite-worker'
      }
    ]
  }
]
Mock.mock('/buildtools', 'get', option => {
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