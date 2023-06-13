<template>
  <div class="title">
    <h2>项目大厅</h2>
  </div>
  <div class="content">
    <el-tabs class="eltabl demo-tabs"  @tab-click="handleClick" v-model="activeName">
      <el-tab-pane label="项目大厅" class="is-activww" name="first">
        <div class="emty" v-if="isShowImg">
          <div class="emtytext">暂无项目</div>
        </div>
        <Xmdt v-if="!isShowImg"></Xmdt>
      </el-tab-pane>
      <el-tab-pane label="我的项目" class="is-activww" name="second">
        <div class="emty"  v-if="isShowImg">
          <div class="emtytext">暂未报名项目</div>
        </div>
        <Wdxm v-if="!isShowImg"></Wdxm>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import Xmdt from '@/components/Home/Item/hxfGzh/xmdt.vue'
  import Wdxm from '@/components/Home/Item/hxfGzh/wdxm.vue'
  let isShowImg =  ref(false)
  const activeName = ref('first')
  const handleClick = (tab, event: Event) => {
  // console.log(tab.paneName, event)
}
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  text-align: center;
}

.eltabl {
  :deep .el-tabs__nav {
    display: flex;
    width: 100%;
    justify-content: space-around;

  }

  :deep .el-tabs__active-bar{
    transition: none;
  }
  .is-activww{
    text-align: center;
  }
}
</style>

