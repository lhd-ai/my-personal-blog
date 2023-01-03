<template>
  <div class="temApp">
    <div class="temSidebar">
      <el-menu class="menu" router="true" unique-opened=true :default-active="activeIndex" @select="handleSelect" >
        <template v-for="(item, index) in dataList" :key="index">
          <el-menu-item v-if="!item.children" :index="item.path" :route="item.path">
            <span>{{ item.name }}</span>
          </el-menu-item>
          <el-sub-menu v-if="item.children" :index="item.name">
            <template #title>
              {{ item.name }}
            </template>
            <el-menu-item v-for="(itemChild, itemIndex) in item.children" :key="itemIndex" :route="itemChild.path"
              :index="itemChild.path">
              {{ itemChild.name }}
            </el-menu-item>
          </el-sub-menu>
        </template>

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
      activeIndex: '/vue3-setup',

    }
  },
  created() {
    this.getDataList()
    this.activeIndex = sessionStorage.getItem('keyPathThree') || '/vue3-setup';
  },
  watch: {
    activeIndex(newValue) {
      if (newValue !== this.$route.path) {
        if (this.$route.path == '/fontend') {
          this.activeIndex = '/vue3-setup'
        }
      }
    }
  },
  methods: {
    handleSelect(keyPath) {
      sessionStorage.setItem('keyPathThree', keyPath);
    },
    getDataList() {
      request({
        url: '/fontend',
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