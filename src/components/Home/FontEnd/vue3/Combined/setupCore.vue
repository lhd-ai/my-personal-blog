<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/vue3/Setup/setupCore.md'
import { ref } from 'vue'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    // let count: any = ref(0)
    // console.log(count.value)//0
    // count.value++
    // console.log(count.value)//1
  },
}
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>