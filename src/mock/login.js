import Mock from "mockjs"

Mock.mock('/login', 'post', option => {
  const { username, password } = JSON.parse(option.body)
  if(username === 'lhd' && password === 'woaixuexi666'){
    return {
      code:200,
      msg:'登录成功'
    }
  }else{
    return {
      code:401,
      msg:'登录失败'
    }
  }

})