<template>
  <div class="bgImage">
    <img src="../../assets/login.jpg" alt="">
  </div>
  <div class="navBar">
    <el-icon v-if="isShow" @click="sendBrother"><Fold /></el-icon>
    <el-icon v-else @click="sendBrother"><Expand /></el-icon>
    <div class="navItem">
      <div class="item" v-for="item in dataList" :key="item.name">
        <el-dropdown :disabled="!item.children">
          <div class="el-dropdown-link">
            <router-link :to="item.path">{{ item.name }}</router-link>
           <div>
           </div>
          </div>
        </el-dropdown>
      </div>
    </div>
    <el-dropdown >
      <span class="el-dropdown-link">
        {{ username }}.blog
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="signOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <router-view ></router-view>
</template>

<script>
import myMitt from '../../mitt';
import request from '../../request';
export default {
  data() {
    return {
      username: sessionStorage['username'],
      password: sessionStorage['password'],
      dataList: [],
      isShow:true
      
    }
  },
  created() {
    this.getData()
  },
  methods: {
    signOut() {
      sessionStorage.clear()
      this.$router.replace('/login')
    },
    getData() {
      request({
        url: '/home',
        method: 'get',
        data: {
          username: this.username,
          password:this.password
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            this.dataList = res.data.dataList
          }
        })
    },
    sendBrother(){
      this.isShow = !this.isShow
      myMitt.emit('isShow',this.isShow)
    }
  }
}
</script>

<style lang="less" scoped>
.bgImage {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  img {
    width: 100%;
    height: 100%;
  }
}

.navBar {
  width: 100vw;
  height: 8vh;
  background-image: linear-gradient(to right, #30cfd0, #330867);
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 40px;
  z-index: 11;
  .navItem {
    flex: 1;
    display: flex;

    .item { 
      padding:  0 5px;
      .el-dropdown-link {
        display: flex;
        color: #330867;
      }
    }
  }

  .el-dropdown-link {
    color: #30cfd0;
    font-size: 20px;
    cursor: pointer;

  }

  .example-showcase .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a{
    text-decoration: none
  }
}
</style>