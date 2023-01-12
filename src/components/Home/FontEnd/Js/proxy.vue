<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/Js/proxy.md'
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //jsProxy-get()
    interface Person{
      name: string
    }
    let person: Person = {
      name: '张三'
    }
    let proxy = new Proxy(person,{
      get: function(target:any,propKey:any): any{
        return Reflect.get(target,propKey)
      }
    })
    console.log(proxy.name)//张三
    Proxy.revocable(person,{
      get: function(target:any,propKey:any): any{
        return Reflect.get(target,propKey)
      }
    })
    console.log(proxy.name)//张三
    //get对数组增删改查进行拦截
    // let arr: string[] = ['a','b','c']
    // let proxyTwo = new Proxy(arr,{
    //   get(target:any,propKey:any,recevier:any){
    //     let index = Number(propKey)
    //     if(index < 0){
    //       propKey =String(target.length + index)
    //     }
    //     console.log(propKey)
    //     return Reflect.get(target,propKey,recevier)
    //   }
    // })
    // let target = proxyTwo[-1]
    // console.log(target)//c

    //jsProxy-set()
    // interface Person {
    //   age: number
    // }
    // let person: Person = {
    //   age: 20
    // }
    // let proxyThree = new Proxy(person, {
    //   set(target: any, propKey: any, value: any, recevier: any): any {
    //     if (!Number.isInteger(value)) {
    //       throw new TypeError('The age is not an integer');
    //     }
    //     if (value > 200) {
    //       throw new RangeError('The age seems invalid');
    //     }
    //   }
    // })
    // proxyThree.age =300// The age seems invalid

    //jsProxy-deleteProperty
    // interface Person{
    //   name: string
    // }
    // let person: Person = {
    //   name:'张三'
    // }
    // let proxyFour = new Proxy(person,{
    //   deleteProperty(target:any,propKey:any):any{
    //     if(propKey == 'name'){
    //       return false
    //     }
    //   }
    // })
    // delete proxyFour.name
    //deleteProperty' on proxy: trap returned falsish for property 'name'
  }
})
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>