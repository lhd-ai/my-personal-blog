<template>
  <div class="temApp">
    <div class="temSidebar">
      <el-menu class="menu" router unique-opened :default-active="activeIndex" @select="handleSelect">
        <template v-for="(item, index) in dataList" :key="index">
          <el-menu-item v-if="!item.children" :index="item.path" :route="item.path">
            <span>{{ item.name }}</span>
          </el-menu-item>
          <el-sub-menu v-if="item.children" :index="item.name">
            <template #title>
              {{ item.name }}
            </template>
            <template v-for="(itemChild, itemIndex) in item.children" :key="itemIndex">
              <el-menu-item :route="itemChild.path" :index="itemChild.path" v-if="!itemChild.grandson">
                {{ itemChild.name }}
              </el-menu-item>
              <el-sub-menu v-if="itemChild.grandson" :index="itemChild.name">
                <template #title>
                  {{ itemChild.name }}
                </template>
                <el-menu-item v-for="(itemSon, sonIndex) in itemChild.grandson" :key="sonIndex" :index="itemSon.path"
                  :route="itemSon.path">{{ itemSon.name }}</el-menu-item>
              </el-sub-menu>
            </template>
          </el-sub-menu>
        </template>

      </el-menu>
    </div>
    <div class="temContent">
      <!-- 显示组件内容（3） -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import request from '../../../request/index'

export default {
  data() {
    return {
      username: sessionStorage['username'],
      dataList: [],
      activeIndex: '/interview-permissions',

    }
  },
  created() {
    this.getDataList()
    this.activeIndex = sessionStorage.getItem('keyPathFour') || '/interview-permissions';
  },
  watch: {
    activeIndex(newValue) {
      if (newValue !== this.$route.path) {
        if (this.$route.path == '/interview') {
          this.activeIndex = '/interview-permissions'
        }
      }
    }
  },
  methods: {
    handleSelect(keyPath) {
      sessionStorage.setItem('keyPathFour', keyPath);
    },
    getDataList() {
      request({
        url: '/interview',
        method: 'get',
        data: {
          username: this.username
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