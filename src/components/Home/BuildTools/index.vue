<template>
  <div class="temApp">
    <div class="temSidebar">
      <el-menu class="menu" router="true" :default-active="activeIndex" @select="handleSelect">
        <el-menu-item v-for="(item, index) in dataList" :key="index" :index="item.path" :route="item.path">
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="temContent">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import request from '../../../request/index'
import { toRaw } from 'vue';
export default {
  data() {
    return {
      username: sessionStorage['username'],
      dataList: [],
      activeIndex:'/webpack'
    }
  },
  created() {
    this.getDataList()
    this.activeIndex = sessionStorage.getItem('keyPathTwo') || '/webpack';
  },
  watch:{
    activeIndex(newValue){
      if(newValue !== this.$route.path){
        if(this.$route.path == '/buildtools'){
          this.activeIndex = '/webpack'
        }
      }
    }
  },
  methods: {
    handleSelect(keyPath) {
      sessionStorage.setItem('keyPathTwo', keyPath);
    },
    getDataList() {
      request({
        url: '/buildtools',
        method: 'get',
        data: {
          username: toRaw(this.username)
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            this.dataList = res.data.obj
          }
        })
    }
  }
}
</script>

<style>

</style>