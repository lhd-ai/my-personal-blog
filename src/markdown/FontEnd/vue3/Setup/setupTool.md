### 响应式工具
[响应式工具](https://cn.vuejs.org/api/reactivity-utilities.html#isref)

<p>检查某个值是否为ref</p>

* 类型
```js
function isRef<T>(r: Ref<T> | unknown): r is Ref<T>
```
<p>请注意，返回值是一个类型判定，这意味着isRef可以被用作类型守卫：</p>
<img src="@assets/vue3/isref.png"/>

#### unref()
<p>如果参数是ref，则返回内部值，否则返回参数本身。这时val = isRef(val)?val.value : val计算的一个语法糖</p>
* 类型
```js
function unref<T>(ref: T | Ref<T>): T
```
* 示例
<img src="@assets/vue3/unref.png"/>

#### toRef()
<p>基于响应式对象上的一个属性，创建一个对应的ref。这样创建的ref与其源属性保持同步：改变源属性的值将更新ref的值，反之亦然</p>
* 类型

```js
function toRef<T extends object, K extends keyof T>(
  object: T,
  key: K,
  defaultValue?: T[K]
): ToRef<T[K]>

type ToRef<T> = T extends Ref ? T : Ref<T>
```
* 示例
  
```js
const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo')

// 更改该 ref 会更新源属性
fooRef.value++
console.log(state.foo) // 2

// 更改源属性也会更新该 ref
state.foo++
console.log(fooRef.value) // 3
```
<p>请注意，这不同于</p>

```js
const fooRef = ref(state.foo)
```
<p>上面这个ref不会和state.foo保持同步，因为这个ref()接受到的是一个纯数值</p>
<p>toRef()这个函数在你想把一个prop的ref传递给一个组合式函数时会很有用</p>
<p>当 toRef 与组件 props 结合使用时，关于禁止对 props 做出更改的限制依然有效。尝试将新的值传递给 ref 等效于尝试直接更改 props，这是不允许的。在这种场景下，你可能可以考虑使用带有 get 和 set 的 computed 替代。详情请见在组件上使用 v-model 指南。

即使源属性当前不存在，toRef() 也会返回一个可用的 ref。这让它在处理可选 props 的时候格外实用，相比之下 toRefs 就不会为可选 props 创建对应的 refs</p>

#### toRefs()
<p>将一个响应式对象转换为一个普通对象，这个普通对象的每个属性都是指向源对象相应属性的 ref。每个单独的 ref 都是使用 toRef() 创建的</p>

<p>toRefs 在调用时只会为源对象上可以枚举的属性创建 ref。如果要为可能还不存在的属性创建 ref，请改用 toRef</p>

#### isProxy()
<p>检查一个对象是否是由reactive()、readonly()、shallowReactive或shalowReadonly创建的代理</p>

#### isReactive()
<p>检查一个对象是否由reactive()或shallowReactive创建的代理</p>

#### isReadonly()
<p>检查传入的值是否为只读对象。只读对象的属性可以更改，但他们不能通过传入的对象直接复制</p>
<p>通过readonly()和shallowReadonly()创建的代理都是只读的，因为他们是没有set函数的computed() ref</p>