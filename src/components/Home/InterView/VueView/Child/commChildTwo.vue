<template>
    <div>
        <h1>我是{{ name }}的子组件</h1>
        <p>{{ father }}</p>
        <p>{{ brother }}</p>
    </div>
</template>

<script lang="ts">
import { inject, onMounted, ref } from 'vue'
import myMitt from "../../../../../mitt"
export default {

    props: {
        name: String
    },
    setup(props, { emit, expose }) {
        // console.log(props.name)
        // return{props}
        let text = '我是子组件2'
        emit('childtwo', text)
        expose({
            text
        })
        let father = ref(inject('parent'))
        let brother = ref('')
        console.log(brother.value)
        onMounted(()=>{
           myMitt.on('handleChange',(res)=>{
           brother.value = res as string
           })
        })
        return { father ,brother}
    }
}
</script>

<style lang="scss" scoped></style>