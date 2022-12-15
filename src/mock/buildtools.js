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