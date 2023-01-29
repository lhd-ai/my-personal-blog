<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/vue3/Start/watch.md'
import { ref, watch, reactive } from 'vue'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    // //侦听器基本示例
    // let question = ref('')
    // let answer = ref('Questions usually contain a question mark. ;-)')
    // // 可以直接侦听一个 ref
    // watch(question, async (newQuestion, oldQuestion) => {
    //   if (newQuestion.indexOf('?') > -1) {
    //     answer.value = 'Thinking...'
    //     try {
    //       const res = await fetch('https://yesno.wtf/api')
    //       answer.value = (await res.json()).answer
    //     } catch (error) {
    //       answer.value = 'Error! Could not reach the API. ' + error
    //     }
    //   }
    // })
    // return {question,answer}

    //深层侦听器

    let obj = reactive({ count: 0 })
    watch(obj, (newValue, oldValue) => {
      // 在嵌套的属性变更时触发
      // 注意：`newValue` 此处和 `oldValue` 是相等的
      // 因为它们是同一个对象！
    })
    obj.count++
  },
}
</script>
<template>
  <!-- <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p> -->
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>