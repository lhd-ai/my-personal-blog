<template>
    <h1>组件通信方式</h1>
    <p style="margin-top: 50px">
        方式一：通过props可以父传子，父组件通过字面量进行传值,子组件通过props接收。vue2方式“props:{name:String}”.vue3可以采用混合模式，也就是和vue2一样，也可以使用vue3的语法糖，导入defineProps代替props,写法和props写法一样
    </p>
    <CommChild :name="nameOne" @childone="oneClick" ref="myOne"></CommChild>
    <button @click="lll">点击1(ref)</button>
    <p>{{ oneTetx }}(emit)</p>
    <CommChildTwo :name="nameTwo" @childtwo="twoChild" ref="myTwo"></CommChildTwo>
    <button @click="kkk">点击2(ref)</button>
    <p>{{ twoText }}(emit)</p>
    <p style="margin-top: 50px">
        方式二：vue2中是通过在子组件中this.$emit自定义事件，第一个参数为自定义事件名称，后面参数传参，在父组件中使用的子组件标签里@自定义事件名="父组件"。在父组件事件里可以接收子组件传过来的参数</p>
    <p>vue3中，方法基本类似，子组件中直接通过setup的第二个参数里包含的emit自定义事件，两种方式，不使用setup语法糖则直接第二个参数传参{emit}，emit用法和this.$emit一样，如果使用语法糖，需要导入defineEmits,然后创建一个实例，创建实例时，defineEmits需要传入一个数组里面包含自定义事件名称，创建实例之后用法和emit一样，区别是这种方法带的参数在父组件中不能直接使用需要通过.value拿到传的值
    </p>

    <p style="margin-top:50px">方式三，父组件在调用子组件时给子组件绑定ref，子组件通过expose暴露的公共属性，可以通过该方法在父组件获取到。需要注意，ref传值需要等到dom挂载完成之后才可以获取到</p>

    <p style="margin-top: 50px">方式四：祖先组件通过provide设置传出的参数名称和参数值，子组件通过inject接收</p>

    <p style="margin-top: 50px">方式五，vue2可以通过EventBus用于兄弟之间传值，vue3取消了这个方法，可以改用mitt，原理和EventBus类似，首先安装mitt,然后自己简单封装一下，在需要传值的兄弟组件中导入封装好的mitt方法。其中一个兄弟组件通过mitt.emit触发自定义事件并传值，另一个兄弟组件通过mitt.on监听事件的触发并接收值</p>
</template>

<script lang="ts" setup>
import CommChild from '@/components/Home/InterView/VueView/Child/commChild.vue'
import CommChildTwo from '@/components/Home/InterView/VueView/Child/commChildTwo.vue'
import { onMounted, ref, provide } from 'vue';

let nameOne = ref('组件通信方式1')
let oneTetx = ref('')
const oneClick = (msg) => { oneTetx.value = msg.value }

let nameTwo = ref('组件通信方式2')
let twoText = ref('')
const twoChild = (msg) => { twoText.value = msg }
const myOne = ref()

let myTwo = ref()

onMounted(() => {
    // console.log(myOne.value.text, myTwo.value.text, 'onMounted')
    console.log(process.env.NODE_ENV)
})

function kkk() {
    console.log(myTwo.value.text)
}
function lll() {
    console.log(myOne.value.text)
}
provide('parent', '我是父组件1')
</script>

<style lang="scss" scoped></style>
