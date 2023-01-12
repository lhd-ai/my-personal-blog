<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/vue3/Router/getStart.md'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    
  },
}
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
  <!-- 使用router-link跳转（2） -->
  <router-link to="/vue3-routerInstallation">路由安装</router-link>
  <router-link to="/vue3-dynRoutering/111">动态路由</router-link>
</template>
