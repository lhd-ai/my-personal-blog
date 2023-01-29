### 监听器
[侦听器](https://cn.vuejs.org/guide/essentials/watchers.html)

#### 基本示例
<p>计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些"副作用":例如更改DOM,或是根据异步操作的结果取修改另一处的状态</p>

<p>在组合式API中，我们可以使用watch函数在每次响应式状态发生变化时触发回调函数</p>

<img src="@assets/vue3/jiantingqi.png"/>

#### 侦听数据源类型
<p>watch的第一个参数可以是不同形式的"数据源"：它可以是一个ref(包括计算属性)、一个响应式对象、一个getter函数、或多个数据源组成的数组</p>

<img src="@assets/vue3/jiantingqitwo.png"/>

<p>注意，你不能直接侦听响应式对象的属性值，例如</p>

<img src="@assets/vue3/jtxy.png"/>

<p>这里需要用一个返回该属性的getter函数</p>

<img src="@assets/vue3/jtxytwo.png"/>

#### 深层侦听器

<p>直接给watch传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发</p>

<img src="@assets/vue3/scjt.png"/>

<p>相比之下，一个返回响应式对象的getter函数，只有在返回不同的对象时，才会触发回调</p>

<img src="@assets/vue3/scjttwo.png"/>

<p>你也可以给上面这个例子显式地加上deep选项，强制转成深层侦听器</p>

<img src="@assets/vue3/scjtthree.png"/>

<font color="red">谨慎使用：深度侦听需要遍历被侦听对象中的所有嵌套的属性，当用于大型数据结构时，开销很大。因此请只在必要时才使用它，并且要留意性能</font>


#### watchEffect()

<p>watch是懒执行的：仅当数据源发生变化时，才会执行回调。但在某些场景中，我们希望在创建侦听器时，立即执行一遍回调。举例来说，我们想请求一些初始数据，然后在相关状态更改时重新请求数据。我们可以这样写</p>

<img src="@assets/vue3/watcheffect.png"/>

<p>我们可以用watchEffect函数来简化上面的代码。watchEffect()会立即执行一遍回到函数，如果这时函数产生了副作用，Vue会自动追踪副作用的依赖关系，自动分析出响应源。上面的例子可以重写为</p>

```js
watchEffect(async () => {
  const response = await fetch(url.value)
  data.value = await response.json()
})
```

<p>这个例子中。回调会立即执行。在执行期间，它会自动追踪url.value作为依赖(和计算属性的行为类似)。每当url.value变化时，回调会再次执行</p>

##### watch vs watchEffect
watch和watchEffect都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式

* watch只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。watch会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机

* wacthEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确

#### 回调的触发时机
<p>当你更改了响应式状态，它可能会同时触发Vue组件更新和侦听器回调</p>

<p>默认情况下，用户创建的侦听器回调，都会在Vue组件更新之前被调用。这意味着你在侦听器回调中访问的DOM将是被VUe更新之前的状态</p>

<p>如果想在侦听器回调中能访问被Vue更新之后的DOM，你需要指明flush: 'post'选项</p>

<img src="@assets/vue3/hdcssj.png"/>

<p>后置刷新的watchEffect()有个更方便的别名watchPostEffect()</p>

```js
import { watchPostEffect } from 'vue'

watchPostEffect(() => {
  //在vue更新后执行


})
```

#### 停止侦听器

<p>在setup()或script setup中用同步语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。因此大多数情况下，你无需关心怎么停止一个侦听器</p>

<p>一个关键点是，侦听器必须用同步语句创建：如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。如下面这个例子</p>

```js
<script setup>
import { watchEffect } from 'vue'

// 它会自动停止
watchEffect(() => {})

// ...这个则不会！
setTimeout(() => {
  watchEffect(() => {})
}, 100)
</script>
```

<p>要手动停止一个侦听器，请调用 watch 或 watchEffect 返回的函数：</p>

```js
const unwatch = watchEffect(() => {})

// ...当该侦听器不再需要时
unwatch()
```

<p>注意，需要异步创建侦听器的情况很少，请尽可能选择同步创建。如果需要等待一些异步数据，你可以使用条件式的侦听逻辑</p>

```js
// 需要异步请求得到的数据
const data = ref(null)

watchEffect(() => {
  if (data.value) {
    // 数据加载后执行某些操作...
  }
})
```