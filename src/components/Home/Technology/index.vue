<template>
  <div class="app">
    <div class="sidebar">
      <el-menu class="menu" router="true" :default-active="activeIndex" @select="handleSelect">
        <el-menu-item v-for="(item, index) in dataList" :key="index" :index="item.path" :route="item.path">
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import request from '../../../request';
import { toRaw } from 'vue';
export default {
  data() {
    return {
      username: sessionStorage['username'],
      dataList: [],
      activeIndex: '/technology',
    }
  },
  created() {
    this.getDataList()
    this.activeIndex = sessionStorage.getItem('keyPath') || '/technology';
  },
  watch:{
    activeIndex(newValue){
     if(newValue != this.$route.path){
      if(this.$route.path == '/home'){
        this.activeIndex = '/technology'
      }
     }
    }
  },
  methods: {
    handleSelect(keyPath) {
      sessionStorage.setItem('keyPath', keyPath);
    },
    getDataList() {
      request({
        url: '/technology',
        method: 'get',
        data: {
          username: toRaw(this.username)
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            this.dataList = res.data.list
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  display: flex;

  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    .menu {
      min-width: 250px;

      span {
        font-size: 18px;
      }
    }
  }

  .content {
    position: fixed;
    margin: 20px 30px 0 15px;
    top: 60px;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    left:250px;
    padding: 30px;
    background-color: #fff;
    background-image: linear-gradient(90deg,rgba(50,0,0,0.05) 3%,transparent 0),linear-gradient(0deg,rgba(50,0,0,0.05) 3%,transparent 0);
    background-position: 50%;
    background-size: 20px 20px;
  }
}
</style>