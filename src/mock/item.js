import Mock from "mockjs";

let obj = [
  {
    name: '慧薪福公众号',
    path:'/hxfgzh'
  },
]
Mock.mock('/item', 'get', option => {
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