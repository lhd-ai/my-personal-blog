<template>
  <div class="temApp">
    <div class="temSidebar" v-if="isShow">
      <el-menu class="menu" router="true" :default-active="activeIndex" @select="handleSelect">
        <el-menu-item v-for="(item, index) in dataList" :key="index" :index="item.path" :route="item.path">
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="temContent" :class="{temContentTwo:temContentTwo}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import request from '../../../request'
import myMitt from '../../../mitt';
export default {
  data() {
    return {
      username: sessionStorage['username'],
      dataList: [],
      activeIndex: '/markdown',
      isShow:true,
      temContentTwo:false
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
  },
  mounted(){
    myMitt.on('isShow',res=>{
    this.isShow = res 
    this.temContentTwo = !res 
  })
  }
}
</script>

<style lang="less" scoped>

</style>