import Mock from "mockjs"

Mock.mock('/login', 'post', option => {
  const { username, password } = JSON.parse(option.body)
  if(username === 'lhd' && password === '211314'){
    return Mock.mock({
      name:username,
      password:password,
      code:200,
      token:'admin',
      msg:'登录成功'
    })
  }else{
    return {
      name:username,
      password:password,
      code:200,
      token:'editor',
      msg:'登录成功'
    }
  }

})