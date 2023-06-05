<template>
  <h1>我是{{ name }}{{ age }} (props)的子组件</h1>
  <p>{{ father }}(provide/inject)</p>
  <button @click="sendBrother">发送给兄弟组件(mitt)</button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, defineExpose, inject } from 'vue';
import myMitt from "../../../../../mitt"

defineProps({
  name: String,
  age: {
    type: Number,
    default: 18
  }
})
let text = ref('我是子组件1')

const emit = defineEmits(['childone'])
emit('childone', text)

defineExpose({
  text
})

let father = ref(inject('parent'))

function sendBrother(){
  myMitt.emit('handleChange','我是兄弟组件1')
}

</script>

<style lang="scss" scoped></style>