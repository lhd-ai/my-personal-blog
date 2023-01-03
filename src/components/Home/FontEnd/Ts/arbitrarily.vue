<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/Ts/anyValue.md'
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //ts任意值类型
    let myFavoriteNumber: string = 'seven'
    // myFavoriteNumber = 7//会报错
    let myFavoriteNumberTwo: any = 'seven'
    myFavoriteNumberTwo = 7//不会报错，是允许的
    
    // let anyThing: any = 'hello'
    // console.log(anyThing.myName)
    // console.log(anyThing.myName.firstName)

    // let anyThingTwo: any = 'Tom'
    // anyThingTwo.setName('Jerry')
    // anyThing.setName('Jerry').sayHello();
    // anyThing.myName.setFirstName('Cat');

    let someThing
    someThing = 'seven'
    someThing = 7//不会报错
    //等价为
    let someThingTwo:any
    someThingTwo = 'seven'
    someThingTwo = 7
  },
})
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>
