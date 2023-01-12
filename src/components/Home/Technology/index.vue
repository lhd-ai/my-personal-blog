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
import request from '../../../request'
export default {
  data() {
    return {
      username: sessionStorage['username'],
      dataList: [],
      activeIndex: '/markdown',
    }
  },
  created() {
    this.getDataList()
    this.activeIndex = sessionStorage.getItem('keyPath') || '/markdown';
  },
  watch:{
    activeIndex(newValue){
     if(newValue != this.$route.path){
      if(this.$route.path == '/technology' || this.$route.path == '/home'){
        this.activeIndex = '/markdown'
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
          username: this.username
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

</style>