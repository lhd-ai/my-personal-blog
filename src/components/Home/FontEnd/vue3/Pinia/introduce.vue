<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/vue3/Pinia/introduce.md'
import  useCounterStore  from '../../../../../stores/counter'
import { ref } from 'vue'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    const counters = useCounterStore()
    counters.count++ 
    const counts = ref(counters.count)
    counters.increment()
    const increment = counters.increment
    return { counts, increment }
  },
}
</script>
<template>
    <div>{{ counts }}</div>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>