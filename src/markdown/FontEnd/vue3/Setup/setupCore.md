### 响应式核心
[响应式核心](https://cn.vuejs.org/api/reactivity-core.html#ref)

#### ref()
<p>接受一个内部值，返回一个响应式的、可更改的ref对象，此对象只有一个指向其内部值的属性.value</p>

* 类型

```js
function ref<T>(value: T): Ref<UnwrapRef<T>>

interface Ref<T> {
  value: T
}
```
* 详细信息
<p>ref对象是可更改的，也就是说你可以为.value赋予新的值。它也是响应式的，即所有对.value的操作都将被追踪，并且写操作会触发与之相关的副作用</p>

<p>如果将一个对象赋值给ref，那么这个对象将通过reactive()转为具有深层次响应式的对象。这也意味如果对象中包含了嵌套的ref，它们将被深层地解包</p>

<p>若要避免这种深层次的转换，请使用shallowRef()来替代</p>
<p>示例：</p>
<img src="@assets/vue3/ref.png"/>

#### computed()
暂定
#### reactive()
<p>返回一个对象的响应式代理</p>

* 类型
```js
function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
```
* 详细信息
<p>响应式转换是深层的：它会影响到所有嵌套的属性。一个响应式对象也将深层地解包任何ref属性，同时保持响应性</p>

<p>值得注意的是，当访问到某个响应式数组或Map这样的原生集合类型中的ref元素时，不会执行ref的解包</p>

<p>若要避免深层响应式转换，只想保留对这个对象顶层次访问的响应性，请使用 shallowReactive() 作替代。</p>
<p>返回的对象以及其中嵌套的对象都会通过ES Proxy包裹，因此不等于源对象，建议只使用响应式代理，避免使用原始对象</p>

* 示例
<P>创建一个响应式对象</P>

```js
let obj = reactive({ count: 0})
obj.count++
```
<P>ref的解包</P>

```js
const count = ref(1)
const obj = reactive({ count })

// ref 会被解包
console.log(obj.count === count.value) // true

// 会更新 `obj.count`
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// 也会更新 `count` ref
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3
```
<p>注意当访问到某个响应式数组或Map这样的原生集合类型中的ref元素时，不会执行ref的解包</p>

```
const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)
```
<p>将一个ref赋值给为一个reactive属性时，该ref会被自动解包</p>

```js
const count = ref(1)
const obj = reactive({})

obj.count = count

console.log(obj.count) // 1
console.log(obj.count === count.value) // true
```

#### readonly()
<p>接受一个对象（不管是响应式还是普通的）或是一个ref，返回一个原值的只读代理</p>

* 类型
```js
function readonly<T extends object>(
  target: T
): DeepReadonly<UnwrapNestedRefs<T>>
```
* 详细信息

<p>只读代理是深层的：对任何嵌套属性的访问都将是只读的。它的 ref 解包行为与 reactive() 相同，但解包得到的值是只读的。

要避免深层级的转换行为，请使用 shallowReadonly() 作替代。</p>

* 示例
```js
const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
  // 用来做响应性追踪
  console.log(copy.count)
})

// 更改源属性会触发其依赖的侦听器
original.count++

// 更改该只读副本将会失败，并会得到一个警告
copy.count++ // warning!
```
