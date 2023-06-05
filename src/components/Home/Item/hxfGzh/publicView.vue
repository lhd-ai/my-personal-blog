<template>
  <div class="item" v-for="item in data" :key="item">
    <div class="left">
      <div class="left-top">{{ item.name }}</div>
      <div class="letf-bottom">{{ item.date }}</div>
    </div>
    <div class="right">
      <div class="right-top">{{ item.position }}</div>
      <div class="letf-bottom">￥{{ item.money }}/月</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  data: Object,
})

</script>

<style lang="less" scoped>
.com {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.item {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  padding: 10px 30px;
  background-color: aqua;
  margin: 5px 0;
  .left {
    .com
  }

  .right {
    .com
  }
}
.item:nth-child(1){
  margin-top: 0px;
}
</style>