<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/vue3/Pinia/getter.md'
import getterStore from '../../../../../stores/getter'
import { storeToRefs } from 'pinia'
export default {
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    const getter = getterStore()
    const {doubleCount,doublePlusOne,getUserById} = storeToRefs(getter)
    return {doubleCount,doublePlusOne,getUserById}
  },
}
</script>
<template>
  <div>{{ doubleCount }}</div>
  <div>{{ doublePlusOne }}</div>
  <div>User2:{{ getUserById(2).name }}</div>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>