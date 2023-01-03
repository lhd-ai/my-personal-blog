<script lang="ts">
import { VueComponent } from "@/markdown/FontEnd/Ts/interface.md"
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //ts对象类型——接口
    // interface Person {
    //   name: string;
    //   age: number
    // }
    // let tom: Person = {
    //   name:'tom',
    //   age:25
    // }
    //比接口属性少会报错
    // let tomTwo: Person = {
    //   name:'lhd'
    // }
    //比接口属性多也会报错
    // let tomThree: Person = {
    //   name:'zmy',
    //   age:23,
    //   sex:'女'
    // }

    //ts对象类型-接口（可选属性）
    // interface Person {
    //   name: string;
    //   age?: number
    // }
    // let tomFour: Person = {
    //   name:'tom'
    // }
    // let tomFive: Person = {
    //   name:'tom',
    //   age:23
    // }
    //仍然不可以添加未定义的属性
    // let tomSix: Person = {
    //   name:'tom',
    //   age:25,
    //   sex:'男'
    // }

    //ts对象类型-接口(任意属性)
    // interface Person {
    //   name: string;
    //   age?: number;
    //   [propName: string]: any
    // }

    // let bob: Person = {
    //   name:'Bob',
    //   sex:'男'
    // }

    // interface PersonTwo {
    //   name: string;
    //   age?: number;//number不是string的子类型所以报错
    //   [propName: string]: string
    // }
    // let bobTwo: PersoTwo = {
    //   name:'Bob',
    //   age:26,
    //   sex:'男'
    // }

    //ts对象类型-接口(任意属性与联合类型结合)
    // interface PersonThree {
    //   name: string
    //   age?: number
    //   [propName: string]: number | string | undefined
    // }
    // let bobThree: PersonThree = {
    //   name:'Bob',
    //   age:26,
    //   sex:'男'
    // }

    //ts对象类型-接口(只读属性)
    // interface PersonFour {
    //   readonly id: number
    //   name: string
    //   age?: number
    //   [propName:string]: any
    // }
    // let jack: PersonFour = {
    //   id:11111,
    //   name:'jack',
    //   age:23,
    //   sex:'男'
    // }
    // jack.id = 2222//使用readonly定义的属性id初始化后，又被赋值了，所以报错
    // jack.name = 'jackTwo'

    // interface PersonFive {
    //   readonly id: number
    //   name: string
    //   age?: number
    //   [propName: string]: any
    // }
    // let jack: PersonFive = {//没有给id赋值报错
    //   name: 'jack',
    //   age: 23,
    //   sex: '男'
    // }
    // jack.id = 2222//使用readonly定义的属性id初始化后，又被赋值了，所以报错
    // jack.name = 'jackTwo'
  }
})
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>