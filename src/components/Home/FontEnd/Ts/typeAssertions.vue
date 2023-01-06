<script lang="ts">
import { VueComponent } from "@/markdown/FontEnd/Ts/typeAssertions.md"
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //类型断言将一个联合类型断言为其中一个类型
    interface Cat {
      name: string
      run(): void
    }
    interface Finsh {
      name: string
      swim(): void
    }
    // function getName(animal: Cat | Finsh) {
    //   return animal.name
    // }
    // function isFinsh(animal: Cat | Finsh){
    //   if(typeof (animal as Finsh).swim == 'function'){//会报错
    //     return true
    //   }
    //   return false
    // }

    //这种编译没有报错但是执行时会报错
    // function swim(animal:Cat | Finsh){
    //   (animal as Finsh).swim()
    // }
    // const tom: Cat = {
    //   name: 'Tom',
    //   run:()=>{console.log('run')}
    // }
    // swim(tom)

    //类型断言限制
    // interface Animal {
    //   name: string
    // }
    // interface Cat {
    //   name: string
    //   run(): void
    // }
    // let tom: Cat = {
    //   name:'tom',
    //   run: () => {console.log('run')}
    // }
    // let animal: Animal = tom

    //类型断言 vs类型转换
    // function toBoolean(something: any): boolean{
    //   return something as boolean
    // }
    // console.log(toBoolean(1))

    //将父类断言为更加具体的子类
    class ApiError extends Error{
      code: number =0
    }
    class HttpError extends Error{
      statusCode: number = 200
    }
    function isApiError(error: Error):any{
      if (typeof (error as ApiError).code == 'number'){
        return true
      }
      return false
    }
  }

})
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>