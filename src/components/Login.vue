<template>
  <div class="background">
    <img src="../assets/login.jpg" alt="">
  </div>
  <div class="content">
    <h2>LOGIN</h2>
    <div class="input-box">
      <input type="text" placeholder="请输入用户名" v-model="username" />
    </div>
    <div class="input-box">
      <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <button @click="signIn">登录</button>
  </div>
</template>

<script>
import request from '../request'
import { ElMessage } from 'element-plus'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    sessionStorage.clear()
    if (location.href.indexOf("#reloaded") == -1) {
        location.href = location.href + "#reloaded";
        location.reload();
      }

  },
  mounted() {
    document.onkeydown = (e) => {
      if (e.keyCode == 13) {
        this.signIn()
      }
    }
  },
  methods: {
    signIn() {
      request({
        url: '/login',
        method: 'post',
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then(res => {
          if (res.data.code != 200) {
            this.username = ''
            this.password = ''
            ElMessage({
              showClose: true,
              message: res.data.msg,
              type: 'error',
              duration: 2000
            })
          } else {
            sessionStorage['username'] = res.data.name
            sessionStorage['password'] = res.data.password
            sessionStorage['token'] = res.data.token
            this.$router.replace('/home')
            ElMessage({
              showClose: true,
              message: res.data.msg,
              type: 'success',
              duration: 2000
            })
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
.background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
  }
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 340px;
  border-radius: 10px;
  text-align: center;
  background-color: #00000060;
  z-index: 1;

  h2 {
    color: #ffffff90;
  }

  input {
    border: 0;
    width: 60%;
    font-size: 15px;
    color: #fff;
    background: transparent;
    border-bottom: 2px solid #fff;
    padding: 5px 10px;
    outline: none;
    margin-top: 10px;
  }

  button {
    margin-top: 50px;
    width: 60%;
    height: 30px;
    border-radius: 10px;
    border: 0;
    color: #fff;
    text-align: center;
    line-height: 30px;
    font-size: 15px;
    cursor: pointer;
    background-image: linear-gradient(to right, #30cfd0, #330867);
  }

}
</style>