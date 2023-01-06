<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/Ts/functionType.md'
import { first } from 'lodash';
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //ts函数类型-函数声明，函数表达式
    //函数声明
    // function sum(x:number,y:number):number{
    //   return x + y
    // }
    //函数表达式
    // let add = function(x:number,y:number):number{
    //   return x + y
    // }
    // add(1,2)
    //函数表达式定义类型应该这样做
    // let addTwo:(x: number, y:number) => number = function(x: number, y: number):number{
    //   return x + y
    // }
    // addTwo(2,3)

    //用接口定义函数的形状
    // interface SearchFunc{
    //   (source:string,subString: string): boolean
    // }
    // let mySearch:SearchFunc = function(source:string, subString:string):boolean{
    //   return source.search(subString) !== -1
    // }

    //函数可选参数
    // function buildName(firstName:string, lastName?:string){
    //   if(lastName){
    //     return firstName = lastName
    //   } else {
    //     return firstName
    //   }
    // }
    //都不会报错
    // buildName('lhd')
    // buildName('lhd','zmmy')

    // function buildNameTwo(firstName?:string, lastName:string){
    //   if(lastName){
    //     return firstName = lastName
    //   } else {
    //     return firstName
    //   }
    // }

    // buildNameTwo('lhd')
    // buildNameTwo('lhd','zmmy')

    //函数参数默认值
    // function buildNameThree(firstName: string, lastName: string = 'Cat') {
    //   return firstName + lastName
    // }

    // let tomCat = buildNameThree('Tom', 'cat')
    // let tom = buildNameThree('Tome')
    // console.log(tomCat, tom)//Tomcat TomeCat

    // function buildNameFour(firstName: string="Tom", lastName:string) {
    //   return firstName + lastName
    // }

    // let catTom = buildNameThree('Tom', 'cat')
    // let cat = buildNameThree('Tome')
    // console.log(catTom, cat)//Tomcat TomeCat

    //函数剩余参数
    // function push(array:any[],...items:any[]){
    //   items.forEach(item => {
    //     array.push(item)
    //   })
    // }

    //函数重载
    // function reverse(x: number | string): number | string | void {
    //   if (typeof x === 'number') {
    //     return Number(x.toString().split('').reverse().join(''))
    //   } else if (typeof x === 'string') {
    //     return x.split('').reverse().join('')
    //   }
    // }

    // function reverseTwo(x: number): number
    // function reverseTwo(x: string): string
    // function reverseTwo(x: number | string): number | string | void {
    //   if (typeof x === 'number') {
    //     return Number(x.toString().split('').reverse().join(''));
    //   } else if (typeof x === 'string') {
    //     return x.split('').reverse().join('');
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