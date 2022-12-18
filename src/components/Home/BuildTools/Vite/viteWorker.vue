<template>
  <article>
    <MarkDownComponent></MarkDownComponent>
  </article>
</template>

<script>
import { VueComponent } from "../../../../markdown/viteWorker.md"
export default {
  components: {
    MarkDownComponent: VueComponent
  }
}
</script>

<style>

</style>