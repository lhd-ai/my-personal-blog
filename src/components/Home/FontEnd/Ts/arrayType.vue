<script lang="ts">
import { VueComponent } from "@/markdown/FontEnd/Ts/arrayType.md"
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //ts数组类型（用接口表示数组）
    // interface NumberArray {
    //   [index: number]: number
    // }
    // let fibonacci: NumberArray = [1, 1, 2, 3, 5];

    //类数组
    // function sum() {
    //   let args: number[] = arguments
    // }
    // function sunTwo() {
    //   let args: {
    //     [index: number]: number
    //     length: number
    //     callee: Function
    //   } = arguments
    // }

    //常用的类数组都有自己的接口定义
    // function sumThree() {
    //   let args: IArguments = arguments;
    //   //其中IArguments是TypeScript中定义好了的类型，它实际上就是
    //   interface IArguments {
    //     [index: number]: any;
    //     length: number;
    //     callee: Function;
    //   }
    // }
    
    //any在数组中的应用
    // let arr: any[] = [1,'2',true]//不报错
    // let arrTwo: Array<any> = [2,'3',false]
    // let arrThree:{
    //   [index:number]: any
    // } = [4,'5']
    // console.log(arr,arrTwo,arrThree)
  }
})
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>