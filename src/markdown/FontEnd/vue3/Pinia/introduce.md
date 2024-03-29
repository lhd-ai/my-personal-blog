### 介绍
[介绍](https://pinia.vuejs.org/zh/introduction.html)

#### 简介
<p>Pinia起始于2019年11月左右的一次实验，其目的是设计一个拥有组合式API的Vue状态管理库。从那时起，我们就倾向于同时支持Vue2和Vue3，并且不强制要求开发者使用组合式API，我们的初心至今没有改变。除了安装和SSR两章之外，其余章节中提到的API均支持Vue2和Vue3。虽然本文档主要是面向Vue3的用户，但在必要时会标注出Vue2的内容，因此Vue2和Vue3的用户都可以阅读本文档</p>

#### 为什么你应该使用pinia
<p>Pinia是Vue的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式API的话，你可能会认为通过一行简单的export const state = reactive({})来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。而如果使用Pinia，即使在小型单页应用中，你也可以获得如下功能：</p>

* Devtools支持
> 1.追踪actions、mutations的时间线

> 2.在组件中展示它们所用到的Store

> 3.让调试更容易的Time travel

* 热更新
> 1.不必重载页面即可修改Store

> 2.开发时可保持当前的State

* 插件： 可通过插件扩展Pinia功能
* 为JS开发者提供适当的TypeScript支持以及自动补全功能
* 支持服务端渲染
  
#### 基础示例
<p>下面就是pinia API的基本用法(为继续阅读本简介请确保你已阅读过了开始章节)。你可以先创建一个Store</p>

<img src="@assets/vue3/piniatwo.png"/>

<p>然后你就可以在一个组件中使用该store了</p>

<img src="@assets/vue3/shiyongpinia.png"/>

#### 为什么取名Pinia?

<p>Pinia (发音为 /piːnjʌ/，类似英文中的 “peenya”) 是最接近有效包名 piña (西班牙语中的 pineapple，即“菠萝”) 的词。 菠萝花实际上是一组各自独立的花朵，它们结合在一起，由此形成一个多重的水果。 与 Store 类似，每一个都是独立诞生的，但最终它们都是相互联系的。 它(菠萝)也是一种原产于南美洲的美味热带水果。</p>

#### 对比Vuex
<p>Pinia 起源于一次探索 Vuex 下一个迭代的实验，因此结合了 Vuex 5 核心团队讨论中的许多想法。最后，我们意识到 Pinia 已经实现了我们在 Vuex 5 中想要的大部分功能，所以决定将其作为新的推荐方案来代替 Vuex。

与 Vuex 相比，Pinia 不仅提供了一个更简单的 API，也提供了符合组合式 API 风格的 API，最重要的是，搭配 TypeScript 一起使用时有非常可靠的类型推断支持。</p>

##### RFC

<P>最初，Pinia 没有经过任何 RFC 的流程。我基于自己开发应用的经验，同时通过阅读其他人的代码，为使用 Pinia 的用户工作，以及在 Discord 上回答问题等方式验证了一些想法。 这些经历使我产出了这样一个可用的解决方案，并适应了各种场景和应用规模。我会一直在保持其核心 API 不变的情况下发布新版本，同时不断优化本库。

现在 Pinia 已经成为推荐的状态管理解决方案，它和 Vue 生态系统中的其他核心库一样，都要经过 RFC 流程，它的 API 也已经进入稳定状态。</P>

##### 对比Vuex3.x/4.x
<P>Vuex3.x只适配Vue2,而Vuex4.x是适配Vue3的</P>

Pinia API 与Vuex(<=4)也有很多不同，即

* mutation已被弃用。它们经常被认为是及其冗余的。它们初衷是带来devtools的集成方案，但这已不再是一个问题了
* 无需要创建自定义的复杂包装器来支持 TypeScript，一切都可标注类型，API 的设计方式是尽可能地利用 TS 类型推理。
* 无过多的魔法字符串注入，只需要导入函数并调用它们，然后享受自动补全的乐趣就好。
* 无需要动态添加 Store，它们默认都是动态的，甚至你可能都不会注意到这点。注意，你仍然可以在任何时候手动使用一个 Store 来注册它，但因为它是自动的，所以你不需要担心它。
* 不再有嵌套结构的模块。你仍然可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间。虽然 Pinia 从设计上提供的是一个扁平的结构，但仍然能够在 Store 之间进行交叉组合。你甚至可以让 Stores 有循环依赖关系。
* 不再有可命名的模块。考虑到 Store 的扁平架构，Store 的命名取决于它们的定义方式，你甚至可以说所有 Store 都应该命名。
  
<p>关于如何将现有 Vuex(<=4) 的项目转化为使用 Pinia 的更多详细说明，请参阅</p>

[迁移指南](https://pinia.vuejs.org/zh/cookbook/migration-vuex.html)