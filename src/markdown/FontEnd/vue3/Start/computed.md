### 计算属性
[计算属性](https://cn.vuejs.org/guide/essentials/computed.html#basic-example)

#### 基础示例
<p>模板中的表达式虽然方便，但也只能用来做简单的操作。如果在模板中写太多逻辑，会让模板变得臃肿，难以维护。比如说，我们有这样一个包含嵌套数组的对象</p>

<img src="@assets/vue3/jisuanshuxing.png"/>

<p>这里的模板看起来有些复杂。我们必须认真看好一会才能明白它的计算依赖于author.books。更重要的是，如果在模板中需要不止一次这样的计算，我们可不想将这样的代码在模板里重复好多遍</p>

<P>因此我们推荐使用计算属性来描述依赖响应式状态的复杂逻辑。这是重构后的示例
</P>

<img src="@assets/vue3/jisuanshuxingtwo.png"/>

<p>我们在这里定义了一个计算属性publishedBooksMessage.computed()方法期望接收一个getter函数，返回值为一个计算属性ref.和其他一般的ref类似，你可以通过publishedBooksMessage.value访问计算结果。计算属性ref也会在模板中自动解包，因此在模板表达式中引用时无需添加.value</p>

<p>Vue的计算属性会自动追踪响应式依赖。它会检测到publishedBooksMessage依赖于author.books,所以当author.books改变时，任何依赖于publishedBooksMessage的绑定都会同时更新</p>

#### 计算属性缓存 VS 方法

<p>你可能注意到我们在表达式中像这样调用一个函数也会获得和计算属性相同的结果：
</p>

```js
<p>{{ calculateBooksMessage()}}</p>
```

<P>组件中</P>

```js
function calculateBooksMessage(){
  return author.books.length > 0 > 'YES' : 'No'

}
```

<P>若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算，这意味着只要author.books不改变，无论多少次访问publioshedBooksMessage都会立即返回先前的计算结果，而不用重复执行getter函数</P>

<p>这也解释了为什么下面的计算属性永远不会更新，因为Date.now()并不是一个响应式依赖</p>

```js
const now = computed(() => Date.now())
```

<p>相比之下，方法调用总是会在重新渲染发生时再次执行函数
</p>

<P>为什么需要缓存呢？想象一下我们有一个非常耗性能的计算属性list,需要循环一个巨大的数组并做许多计算逻辑，并且可能也有其他计算属性依赖于list。没有缓存的话，我们会重复执行非常多次list的getter,然而这实际上没有必要，如果你确定不需要缓存，那么也可以使用方法调用</P>

#### 可写计算属性

<p>计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到可写属性，你可以通过同时提供getter和setter来创建
</p>

<img src="@assets/vue3/jisuanshuxingkexie.png"/>

<p>现在当你再运行fullName.value = 'John Doe'时，setter会被调用而firstName和lastName会随之更新</p>

#### 最佳实践

##### Getter不应有副作用

<p>计算属性的getter应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，不要再getter中做异步请求或者更改DOM一个计算属性的声明中描述的是如何根据其他值派生出一个值。因此getter的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用监听器根据其他响应式状态的变更来创建副作用</p>

##### 避免直接修改计算属性值
<p>从计算属性返回的值的派生状态。可以把它看作是一个"临时快照"，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。</p>