<script lang="ts">
import { VueComponent } from "@/markdown/FontEnd/Ts/federatedType.md"
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //ts联合类型-简单例子
    let myFavoriteNumber: string | number
    
    //不会报错
    // myFavoriteNumber = 'seven'
    // myFavoriteNumber = 7
    // myFavoriteNumber = true//报错类型不匹配

    //联合类型只能访问所有类型共有的属性或方法
    // let getLength = (something:string | number): number => {
    //   return something.length//报错
    // }
    // let getString = (something: string | number): string =>{
    //   return something.toString()//这是可以的
    // }

    //联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
    // let myFavoriteNumberThree: string | number
    // myFavoriteNumberThree = 'seven'
    // myFavoriteNumberThree.length
    // console.log(myFavoriteNumberThree.length)//5
    // myFavoriteNumberThree = 7
    // console.log(myFavoriteNumberThree.length)//编译报错
  }
})
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>