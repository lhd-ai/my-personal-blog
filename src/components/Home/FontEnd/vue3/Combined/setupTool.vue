<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/vue3/Setup/setupTool.md'
import {isRef, ref, unref} from 'vue'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //isRef()
    // let foo: unknown
    // console.log(isRef(foo))//false
    // if(isRef(foo)){
    //   console.log(foo.value)
    // }

    //unref()
    // let count = ref(9)
    // console.log(unref(count))//9
    // interface Person{
    //   name: string
    //   age: number
    // }
    // let countTwo: Person = {name:'lhd',age:18}
    // console.log(unref(countTwo))//{name: 'lhd', age: 18}
  },
}
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>