<template>
    <h2>防抖</h2>
    <p>防抖的作用是n秒后执行数据，如果在此期间再次触发该事件则重新计时</p>

    <div>{{ debounceCount }}</div>

    <button @click="debounceAdd">防抖按钮</button>
    <p style="margin-top: 30px">
        实现思路：设置一个变量表示定时器，执行函数首先清除已有定时器，然后重新开启一个定时器赋值给先前设置的变量，这样就实现了每次触发事件就清除已有定时器，并重新开启一个n秒后执行的定时器，在定时器的回调函数执行之前再次触发此事件就会重新计时
    </p>

    <div>{{ debounceCountTwo }}</div>

    <button @click="debounceAddTwo">防抖首次点击会先执行一次</button>

    <p style="margin-top:80px">实现思路：多设置一个变量，初始值为true，执行函数时先判断变量值如果为true就立即执行函数并且把改变量赋值false。这样第一次触发事件会立即执行，往后的点击还是n秒后才会执行
    </p>

    <h2 style="margin-top: 80px">节流</h2>
    <p>节流的作用是n秒内只执行一次事件，若在n秒内重复执行则只执行一次</p>

    <div>{{ throttleCount }}</div>

    <button @click="throttleAdd">节流按钮</button>

    <p style="margin-top:80px">
        实现思路：设置一个变量表示定时器初始化赋值null,执行函数首先判断该函数是否有true值，如果没有就返回一个定时器，定时器的回调函数里面执行传入的函数以及清除该回调函数并给变量赋值null。这样就是实现了n秒内触发该事件只会执行一次，只有本次执行完才会开启下一个定时器
    </p>

    <div>{{ throttleCountTwo }}</div>
    <button @click="throttleAddTwo">节流改进按钮触发事件会立即执行事件</button>
    <p style="margin-top: 80px;">实现思路：也需要多传入一个值初始值为true进入函数设置两个变量一个表示执行时的时间戳，一个表示触发事件时的时间戳。然后判断传入的值为true时时立即执行传入的函数并且给oldDate赋值当前时间，给传入的表示第一次点击的变量赋值false.往后再次触发改事件时，首先给newDate赋值当前时间，然后判断当前时间戳和上次执行时的时间戳相差时间是否大于给定的间隔时间。如果满足则立即执行传入的函数，并将newDate的值赋值给oldDate</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

//防抖
let debounceCount = ref(0)

//防抖方法
function debounce(date: number, fn: any): any {
    let timer = null
    return function (): void {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, date)
    }

}

function dAdd() {
    debounceCount.value++
}
let debounceAdd = debounce(3000, dAdd)


//防抖改进，第一次点击会先执行一次
let debounceCountTwo = ref(0)
function debounceTwo(date: number, fn: any, is): any {
    let timer = null
    return function (): void {
        if (is) {
            fn()
            is = false
        } else {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn()
            }, date)
        }

    }

}

function dAddTwo() {
    debounceCountTwo.value++
}
let debounceAddTwo = debounceTwo(3000, dAddTwo, true)
//节流
let throttleCount = ref(0)

//节流方法
function throttle(date: number, fn: any): any {
    let timer = null
    return function (): void {
        if (!timer) {
            timer = setTimeout(() => {
                fn()
                clearTimeout(timer)
                timer = null
            }, date)
        }
    }
}
function tAdd() {
    throttleCount.value++
}
let throttleAdd = throttle(3000, tAdd)

//节流改进，触发事件会立即执行
let throttleCountTwo = ref(0)
function throttleTwo(date: number, fn: any, is): any {
    let oldDate = null
    let newDate = null
    return function () {
        if (is) {
            fn()
            is = false
            oldDate = new Date().getTime()
        } else {
            newDate = new Date().getTime()
            if (newDate - oldDate >= date) {
                fn()
                oldDate = newDate
            }
        }
    }

}
function tAddTwo() {
    throttleCountTwo.value++
}
let throttleAddTwo = throttleTwo(3000, tAddTwo, true) 
</script>

<style lang="scss" scoped></style>