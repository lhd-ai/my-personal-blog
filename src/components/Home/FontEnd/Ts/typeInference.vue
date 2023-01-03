<script lang="ts">
import { VueComponent } from "@/markdown/FontEnd/Ts/typeInference.md"
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //ts类型推论
    // let myFavoriteNumber = 'sevrn'
    // myFavoriteNumber = 7//报错
    // //等价于
    // let myFavoriteNumberTwo: string = 'seven'
    // myFavoriteNumberTwo = 7

    //如果定义时没有赋值，那么不管之后会不会赋值，都会被推断成any类型
  
    let myFavoriteNumber
    myFavoriteNumber = 'seven'
    myFavoriteNumber = 7
  },
})
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>
