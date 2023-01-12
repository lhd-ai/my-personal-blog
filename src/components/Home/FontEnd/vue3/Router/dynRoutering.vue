<script lang="ts">
import { VueComponent } from "@/markdown/FontEnd/vue3/Router/dynRoutering.md"
import { useRoute } from 'vue-router'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    const route = useRoute()
    console.log(route.params)
  },
  
}
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>