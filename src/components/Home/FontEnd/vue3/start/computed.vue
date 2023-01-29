<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/vue3/Start/computed.md'
import { last } from 'lodash';
import { reactive, computed, ref } from 'vue';
export default ({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    //计算数学-基础示例
    // interface Author {
    //   name: string
    //   books: Array<string>
    // }
    // const author: Author = reactive({
    //   name: 'John Doe ',
    //   books: [
    //     'Vue 2 - Advanced Guide',
    //     'Vue 3 - Basic Guide',
    //     'Vue 4 - The Mystery'
    //   ]
    // })

    // //计算属性重构
    // const publishedBooksMessage = computed(() => {
    //   return author.books.length > 0 ? 'YES' : 'No'
    // })
    // return { author, publishedBooksMessage }

    //可写计算属性
    let firstName: any = ref('John')
    let lastName: any = ref('Doe')

    const fullName = computed({
      //getter
      get(): string{
        return firstName + lastName
      },

      //setter
      set(newValue:string): void{
        // 注意：我们这里使用的是解构赋值语法
        [firstName.value, lastName.value] = newValue.split(' ')
      }
    })
  },
})
</script>
<template>
  <!-- <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>

  <div>{{ publishedBooksMessage }}</div> -->
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>