<template>
  <div class="temApp">
    <div class="temSidebar" v-if="isShow">
      <el-menu class="menu" router unique-opened :default-active="activeIndex" @select="handleSelect" >
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
    <div class="temContent" :class="{temContentTwo:temContentTwo}">
      <!-- 显示组件内容（3） -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import request from '../../../request/index'
import { ref, reactive, watch, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import myMitt from '../../../mitt'
let username = ref(sessionStorage['username'])
let password = ref(sessionStorage['password'])
let isShow = ref(true)
let temContentTwo = ref(false)
let activeIndex = ref('/hxfgzh')
let dataList = ref([])
const route = useRoute()
onMounted(()=>{

  myMitt.on('isShow',res=>{
    isShow.value = res as boolean
    temContentTwo.value = !res as boolean
  })
})
getDataList()
function getDataList() {
  request({
    url: '/item',
    method: 'get',
    data: {
      username: username.value,
      password: password.value
    }
  })
    .then(res => {
      if (res.data.code == 200) {
        dataList.value = res.data.obj
      }
    })
}
watch(username,(newValue:any) => {
  if (newValue !== route.path) {
        if (route.path == '/interview') {
          activeIndex.value = '/interview-permissions'
        }
      }
})
function handleSelect(keyPath) {
  sessionStorage.setItem('keyPathFive', keyPath);
}
</script>

<style></style>