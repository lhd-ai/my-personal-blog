<template>
    <h1>浅拷贝、深拷贝</h1>

    <p>基本类型数据保存在栈内存中，引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中</p>

    <h2>浅拷贝</h2>
    <p>浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝</p>
    <p>如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址</p>
    <p>在js中，存在浅拷贝的现象有</p>

    <ul>
        <li>
            <p>Object.assign，如果拷贝的对象的第一层属性的值是基本类型那就是深拷贝，如果对象里面还包含引用对象，那下一级引用类型数据就是浅拷贝</p>
            <div>{{ obj }}</div>
            <button @click="objectRevise">Object.assign修改</button>
        </li>
        <li>
            <p>Array.slice Array.concat 和上面一样 如果拷贝的对象的第一层属性的值是基本类型那就是深拷贝，如果对象里面还包含引用对象，那下一级引用类型数据就是浅拷贝</p>

            <div>{{ arr }}</div>
            <button @click="sliceRevise">Array.prototype.slice修改</button>
            <button @click="concatRevise">Array.prototype.concat修改</button>
        </li>
        <li>
            <p>扩展运算符 和上面一样如果拷贝的对象的第一层属性的值是基本类型那就是深拷贝，如果对象里面还包含引用对象，那下一级引用类型数据就是浅拷贝</p>
            <div>{{ obj }}</div>
            <button @click="kuozhanRevise">扩展运算符修改</button>
        </li>
    </ul>

    <h2>深拷贝</h2>
    <p>深拷贝开辟一个新的栈，两个对象属性完全相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个属性</p>
    <p>常见的深拷贝方式有</p>
    <ul>
        <li>Lodash库的 _.cloneDeep()</li>
        <li>JQuery.extend</li>
        <li>
            <p>JSON.stringify</p>
            <div>{{ obj }}</div>
            <button @click="jsonRevise">JSON修改</button>
        </li>
        <li>
            <p>手写循环递归</p>
            <div>{{ obj }}</div>
            <button @click="shouxieRevise">手写循环递归修改</button>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
let obj = reactive({
    age: 18,
    nature: ['smart', 'good'],
    names: {
        name1: 'fx',
        name2: 'xka'
    },
})
let objOne = Object.assign({}, obj)
function objectRevise() {
    objOne.age = 20
    objOne.names.name1 = 'lhd'
}

let arr: any[] = [1, 2, 3, 4, 5, obj]
let arrone = arr.slice(0)
let arrtwo = arr.concat(arr)
function sliceRevise() {
    arrone[5].names.name1 = 'zmy'
}
function concatRevise() {
    arrtwo[5].names.name2 = 'sj'
}

let arrthree = Array.of(...arr)
function kuozhanRevise(){
    arrthree[5].names.name2 = 'wtt'
}

let objtwo = JSON.parse(JSON.stringify(obj))
function jsonRevise(){
    objtwo.age = 20
    objtwo.names.name1 = '李浩达'
    console.log(objtwo)
}

function deepClone(obj){
    //首先判断obj如果不是引用类型或者obj为null则不进行深拷贝直接返回
    if(typeof obj !== 'object' || obj === null){
        return obj
    }

    //初始化变量
    let copy
    if(obj instanceof Array){
        copy = []
    }else{
        copy = {}
    }

    //循环obj拿到属性名，判断是否是obj自身的属性，通过递归深拷贝每一个属性
    for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            copy[key] = deepClone(obj[key])
        }
    }
    return copy
}
let objthree = deepClone(obj)
function shouxieRevise(){
    objthree.names.name1 = '张梦瑶'
}
</script>

<style lang="less" scoped></style>