<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/Ts/builtObject.md'
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    // ts将变量定义为内置对象类型
    // let b: Boolean = new Boolean(1)
    // let e: Error = new Error('Error occurred')
    // let d: Date = new Date()
    // let r: RegExp = /[a-z]/
    // console.log(b)
    // console.log(e)
    // console.log(d)
    // console.log(r)
    
  },
})
</script>

<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>
