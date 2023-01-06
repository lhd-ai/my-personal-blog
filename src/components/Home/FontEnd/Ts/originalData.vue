<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>
<script lang="ts">
import { onScopeDispose, ref } from 'vue'
import { VueComponent } from '@/markdown/FontEnd/Ts/originalData.md'
export default {
  components:{
    MarkDownComponent:VueComponent
  },
  setup() {

    //测试typescript原始数据类型-布尔值
    let isDone: boolean= false
    isDone = true
    let createdByNewBoolean3: Boolean = new Boolean(1)
    let createdByNewBoolean: boolean = Boolean(1)//正确的
    // console.log(isDone,createdByNewBoolean,createdByNewBoolean3)

    //测试ts原始数据-数值
    let decLiteral: number = 6
    let hexLiteral: number = 0xf00d
    let binaryLiteral:number = 0b1010
    let octalLiteral:number = 0o744
    let notANumber:number = NaN
    let infinityNumber:number = Infinity
    // console.log(decLiteral,hexLiteral,binaryLiteral,octalLiteral,notANumber,infinityNumber)
    //输出结果：6 61453 10 484 NaN Infinity
    // let num:number = new Number(1)//报错
    let numTwo:number = Number(1)//正确
    // console.log(numTwo)//输出1

    //测试ts原始数据-字符串
    let myName:string = 'Tom'
    let myAge:number=25
    let sentence:string = `hello,my name is${myName},age is ${myAge}`
    // console.log(sentence)//输出结果hello,my name isTom,age is 25
    // let str:string = 25//保存类型不对
    // let strTwo:string = new String(1)//报错new String()生成的是实例对象
    // let strThree:string =String(1)//正确

    //测试ts空值
    function alertName():void{
      alert('my name is Tom')
    }
    let unusable: void= undefined
  
    // let unusableTwo: void = 25//报错类型不对

    //测试ts原始数据类型-null/undefined
    let n:null = null
    let u:undefined = undefined
    // console.log(u,n)//undefined null
    //undefined和null是所有类型的子类型
    let uTwo: undefined = undefined
    // let numFour:number =uTwo//严格模式会报错，非严格模式不报错
    // console.log(numFour)//undefined
    // let numFivee:number = undefined//严格模式会报错，非严格模式不报错
    //void不行
    // let numSix:number = void
    // console.log(numSix)
    // let voidTwo: void
    // let numSeven:number = voidTwo//类型报错
    return {

    }
  }
}
</script>