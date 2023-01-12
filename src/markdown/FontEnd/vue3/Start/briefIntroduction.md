### 简介
[简介](https://cn.vuejs.org/guide/introduction.html)

#### 什么是Vue?
<p>Vue(发音为 /vjuː/，类似 view)是一款用于构建用户界面的JavaScript框架。它基于标准Html、CSS和JavaScript构建，并提供了一套声明式的、组件化的编程模型，帮助你高校地开发用户界面。无论是简单还是复杂的界面，Vue都可以胜任</p>

<p>下面是一个最基本的示例：</p>

```javascript
import { createApp } from 'vue'
create({
  data(){
    return {
      count: 0
    }
  }
}).mount('#app')
<div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>
```
<p>上面的示例展示了Vue的两个核心功能：</p>

* **声明式渲染：** Vue基于标准HTML扩展了一套模板语法，使得我们可以声明式地描述最终输出的HTML和JavsScript状态之间的关系
<p>“声明式渲染 Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统。” 我的理解是vue制定了一套模板语法，在template里，然后我们通过js声明的变量可以通过模板语法直接在模板语法里使用，我们可以直观的看到js与html之间的对应关系，我们只用声明变量并在模板语法里使用，至于两者之间怎么映射的我们不需要管</p>

* **响应性：** Vue会自动跟踪JavaScript状态并在其发生变化时响应式地更新DOM

#### 渐进式框架
<p>Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。但 Web 世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。考虑到这一点，Vue 的设计非常注重灵活性和“可以被逐步集成”这个特点。根据你的需求场景，你可以用不同的方式使用 Vue：</p>

* 无需构建步骤，渐进式增强静态的 HTML
* 在任何页面中作为 Web Components 嵌入
* 单页应用 (SPA)
* 全栈 / 服务端渲染 (SSR)
* Jamstack / 静态站点生成 (SSG)
* 开发桌面端、移动端、WebGL，甚至是命令行终端中的界面
<p>如果你是初学者，可能会觉得这些概念有些复杂。别担心！理解教程和指南的内容只需要具备基础的 HTML 和 JavaScript 知识。即使你不是这些方面的专家，也能够跟得上。

如果你是有经验的开发者，希望了解如何以最合适的方式在项目中引入 Vue，或者是对上述的这些概念感到好奇，我们在使用 Vue 的多种方式中讨论了有关它们的更多细节。

无论再怎么灵活，Vue 的核心知识在所有这些用例中都是通用的。即使你现在只是一个初学者，随着你的不断成长，到未来有能力实现更复杂的项目时，这一路上获得的知识依然会适用。如果你已经是一个老手，你可以根据实际场景来选择使用 Vue 的最佳方式，在各种场景下都可以保持同样的开发效率。这就是为什么我们将 Vue 称为“渐进式框架”：它是一个可以与你共同成长、适应你不同需求的框架。</p>

#### 单文件组件
<p>在大多数启用了构建工具的 Vue 项目中，我们可以使用一种类似 HTML 格式的文件来书写 Vue 组件，它被称为单文件组件 (也被称为 *.vue 文件，英文 Single-File Components，缩写为 SFC)。顾名思义，Vue 的单文件组件会将一个组件的逻辑 (JavaScript)，模板 (HTML) 和样式 (CSS) 封装在同一个文件里。下面我们将用单文件组件的格式重写上面的计数器示例：</p>

```javascript
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```
<P>单文件组件是 Vue 的标志性功能。如果你的用例需要进行构建，我们推荐用它来编写 Vue 组件。你可以在后续相关章节里了解更多关于单文件组件的用法及用途。但你暂时只需要知道 Vue 会帮忙处理所有这些构建工具的配置就好。</P>

#### API风格
vue的组件可以按两种不同的风格书写： **选项式APi** 和 **组合式API**

#####  选项式API
<p>使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，例如 data、methods 和 mounted。选项所定义的属性都会暴露在函数内部的 this 上，它会指向当前的组件实例。
</p>

```javascript
<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {
    return {
      count: 0
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```
##### 组合式API
<p>通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 <"script" setup> 搭配使用。这个 setup attribute 是一个标识，告诉 Vue 需要在编译时进行一些处理，让我们可以更简洁地使用组合式 API。比如，<"script" setup> 中的导入和顶层变量/函数都能够在模板中直接使用。

下面是使用了组合式 API 与 <"script" setup> 改造后和上面的模板完全一样的组件：</p>

```javascript
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

#### 该选哪一个
<p>两种API风格都能够覆盖大部分的应用场景。它们只是同一个底层系统所提供的两套不同的接口。实际上，选项式API是在组合式API的基础上实现的，关于Vue的基础概念和知识在它们之间都是通用的</p>

<p>选项式API以"组件实例"的概念为中心（即上述例子中的this），对于有面向对象语言背景的用户来说，这通常与基本类的心智模型更为一致。同时，它将响应性相关的细节抽象出来，并强制按照选项来组织代码，从而对初学者而言更为友好</p>

<p>组合式APi的核心思想是直接在函数作用域内定义响应式状态变量，并将从·多个函数中得到的状态组合起来处理复杂问题。这种形式更加自由，也需要对Vue的响应式系统有更深的理解才能高效使用。相应的，它的灵活性也使得代码和重用逻辑的模式变得更加强大</p>

<p>如果你是使用Vue的新手，这里是我们的大致建议：</p>

* 在学习的过程中，推荐采用更易于自己理解的风格。再强调一下，大部分的核心概念在这两种风格之间都是通用的。熟悉了一种风格以后，你也能够很快地理解另一种风格。
* 在生产项目中
     >1.当你不需要使用构建工具，或者打算主要在低复杂度的场景中使用 Vue，例如渐进增强的应用场景，推荐采用选项式 API。
     <br/>
     >2.当你打算用 Vue 构建完整的单页应用，推荐采用组合式 API + 单文件组件。
<p>在学习阶段，不必只固守一种风格。在接下来的文档中我们会为你提供一系列两种风格的代码供你参考，你可以随时通过左上角的API风格偏好来做切换</p>
