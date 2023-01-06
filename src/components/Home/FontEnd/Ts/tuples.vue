<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/Ts/tuples.md'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    
    //ts定义元组
    // let tom: [string,number] = ['tom',25]
    // console.log(tom)//['tom',2]
  },
}
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>