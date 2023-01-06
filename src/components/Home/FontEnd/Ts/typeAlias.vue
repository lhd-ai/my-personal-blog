<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/Ts/typeAlias.md'
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //类型别名
    // type Name = string
    // type NameResolver = () => string
    // type NameOrResolver = Name | NameResolver
    // function getName(n: NameOrResolver): Name {
    //   if (typeof n === 'string') {
    //     return n
    //   } else {
    //     return n()
    //   }
    // }
  }
})
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>