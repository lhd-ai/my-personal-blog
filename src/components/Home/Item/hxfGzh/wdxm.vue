<template>
  <!--mescroll滚动区域的基本结构-->

  <PublicVivw :data="dataList" ></PublicVivw>
</template>

<script lang="ts" setup>
import PublicVivw from '@/components/Home/Item/hxfGzh/publicView.vue';
import request from '../../../../request/index'
import { ref, } from 'vue'
let username = ref(sessionStorage['username'])
let password = ref(sessionStorage['password'])
let dataList = ref([])
request({
  url: '/xmdt',
  method: 'get',
  data: {
    username: username.value,
    password: password.value,
    value:'wdxm'
  }
})
  .then(res => {
    if (res.data.code == 200) {
      dataList.value = res.data.dataListTwo
    }
  })
</script>

<style></style>