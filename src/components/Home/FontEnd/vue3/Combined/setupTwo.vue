<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/vue3/Setup/setup.md'
import { ref, toRefs, toRef, h } from 'vue'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  props: {
    title: String
  },
  setup(props, context) {
    //context
    console.log(context)
    // 透传 Attributes（非响应式的对象，等价于 $attrs）
    // console.log(context.attrs)

    // 插槽（非响应式的对象，等价于 $slots）
    // console.log(context.slots)

    // 触发事件（函数，等价于 $emit）
    // console.log(context.emit)

    // 暴露公共属性（函数）
    // console.log(context.expose)
    // console.log(props)

    //expose 暴露公共属性
    // context.expose()
    // const publickCount = ref(0)
    // const privateCount = ref(0)
    //有选择的暴露局部状态
    // context.expose({count: publickCount})

    //props
    //将 `props` 转为一个其中全是 ref 的对象，然后解构
    // const { title } = toRefs(props)
    //`title` 是一个追踪着 `props.title` 的 ref
    // console.log(title.value)
    //或者将props的单个属性转为一个ref
    // const titleTwo = toRef(props,'title')
    //创建响应式数据并返回，暴露给模板
    // let count: any = ref(0)
    // return { count }

    //返回渲染函数
    // const countThree: any = ref(0)
    // console.log(countThree)
    // return () => h('div',countThree.value)

    // let countFive: any = ref(0)
    // const increment = () => ++countFive.value
    // context.expose({
    //   increment
    // })
    // return () => h('div', countFive.value)
  },
  methods: {
    //暴露给其他选项式的API钩子
    addCount(): void {
      this.count++
    }
  }
}
</script>
<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
  <div class="app"></div>
  <!-- <button @click="addCount">{{ count }}</button> -->
</template>