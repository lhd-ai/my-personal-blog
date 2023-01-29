<script lang="ts">
import { VueComponent } from '@/markdown/FontEnd/vue3/Pinia/store.md'
import useSetupStore from '../../../../../stores/setupMain';
import { ref} from 'vue';
import { storeToRefs } from 'pinia';
export default({
  components: {
    MarkDownComponent: VueComponent
  },
  setup() {
    const main = useSetupStore()
    const {count} = storeToRefs(main)
    const { increment } = main
    return {count, increment}
  },
})
</script>
<template>
  <div>{{ count }}</div>
  <button @click="increment">按钮</button>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>
