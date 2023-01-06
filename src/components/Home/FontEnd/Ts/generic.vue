<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/Ts/generic.md'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //ts泛型初体验
    // function createArray(length: number,value: any): Array<any>{
    //   let result = []
    //   for(let i = 0;i < length;i++){
    //     result[i] = value
    //   }
    //   return result
    // }
    // console.log(createArray(3,'x'))//['x','x','x']
    // function createArrayTwo<T>(length: number,value: T): Array<T>{
    //   let result: T[] = []
    //   for(let i = 0; i < length; i++){
    //     result[i] = value
    //   }
    //   return result
    // }
    // createArrayTwo<string>(3, 'x'); // ['x', 'x', 'x']

    //多个类型参数
    // function swap<T,U>(tuple: [T, U]):[U,T]{
    //   return [tuple[1], tuple[0]]
    // }
    // console.log(swap(['seven',7]))//[7,'seven']

    //泛型约束
    // function genericConstraints<T>(arg: T): T{
    //   console.log(arg.length)//arg不一定包含length属性所以会报错
    //   return arg;
    // }

    // interface Lengthwise {
    //   length: number
    // }
    // function genericConstraintsTwo<T extends Lengthwise>(arg: T): T {
    //   console.log(arg.length)//arg不一定包含length属性所以会报错
    //   return arg;
    // }

    //多个参数之间互相约束
    // function copyFields<T extends U, U>(target: T, source: U): T {
    //   for (let id in source) {
    //     target[id] = (source as T)[id];
    //   }
    //   return target;
    // }
    // let x = { a: 1, b: 2, c: 3, d: 4 };

    // copyFields(x, { b: 10, d: 20 });

    //泛型接口
    // interface CreateArrayFunc<T> {
    //   (length: number, value: T): Array<T>
    // }
    // let createArray: CreateArrayFunc<string>;
    // createArray = function <T>(length: number, value: T): Array<T> {
    //   let result: T[] = [];
    //   for (let i = 0; i < length; i++) {
    //     result[i] = value;
    //   }
    //   return result;
    // }

    // createArray(3, 'x'); // ['x', 'x', 'x']
  },
}
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>