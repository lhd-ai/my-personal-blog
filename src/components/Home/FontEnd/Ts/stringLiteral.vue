<script lang="ts">
import { VueComponent } from "@/markdown/FontEnd/Ts/stringLiteral.md"
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    
    //字符串字面量类型
    // type EvntNames = 'click' | 'sroll' | 'mousemove'
    // function handleEvent(ele: HTMLElement,event: EvntNames){

    // }
    // handleEvent(document.getElementById('hello') as HTMLElement,'sroll')
    // handleEvent(document.getElementById('hello') as HTMLElement,'dbsroll')//报错取值不是上面定义的几种其中的某个
    // let b: HTMLElement = document.getElementById('hello') as HTMLElement

  },
})
</script>
<template>
  <div id="hello"></div>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>
