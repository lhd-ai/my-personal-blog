<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/vue3/Pinia/action.md'
import actionStore from '../../../../../stores/action'
import { storeToRefs } from 'pinia'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    const action = actionStore()
    const { increment, randomizeCounter} = action
    const {count} = storeToRefs(action)
    return { increment, randomizeCounter, count}
  },
}
</script>
<template>
  <div>{{ count }}</div>
  <button @click="increment">按钮1</button>
  <button @click="randomizeCounter">按钮2</button>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>