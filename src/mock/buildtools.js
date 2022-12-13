import Mock from "mockjs";

let obj = [
  {
    name: 'webpack',
    path: '/webpack'
  },
  {
    name: 'vite',
    path: '/vite'
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