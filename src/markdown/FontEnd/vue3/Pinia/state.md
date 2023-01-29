### State
[State](https://pinia.vuejs.org/zh/core-concepts/state.html)

<p>在大多数情况下，state都是你的store的核心。人们通常会先定义能代表它们APP的state。在pinia中，state被定义为一个返回初始状态的函数。这使得pinia可以同时支持服务端和客户端</p>

```js
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
})
```

<p>如果你使用的是 Vue 2，你在 state 中创建的数据与 Vue 实例中的 data 遵循同样的规则，即 state 对象必须是清晰的，当你想向其添加新属性时，你需要调用 Vue.set() 。参考：Vue#data。</p>

#### TypeScript
<p>你并不需要做太多努力就能使你的state兼容TS.pinia会自动推断出你的state的类型，但在一些情况下，你得用一些方法来帮它一把</p>

```js
const useStore = defineStore('storeId', {
  state: () => {
    return {
      // 用于初始化空列表
      userList: [] as UserInfo[],
      // 用于尚未加载的数据
      user: null as UserInfo | null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
```
如果你愿意，你可以用一个接口定义 state，并添加 state() 的返回值的类型。

```js
interface State {
  userList: UserInfo[]
  user: UserInfo | null
}

const useStore = defineStore('storeId', {
  state: (): State => {
    return {
      userList: [],
      user: null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
```

#### 访问state
<p>默认情况下，你可以通过store实例访问state，直接对其进行读写</p>

```js
const store = useStore()
store.count++
```

#### 重置state
<p>你可以通过调用store的$reset()方法将state重置为初始值</p>

```js
const store = useStore()
store.$reset()
```

#### 变更state
<p>除了用store.count++直接改变store,你还可以调用$patch方法。它允许你用一个state的补丁对象在同一时间更改多个属性</p>


```js
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO'
})
```
不过，用这种语法的话，有些变更真的很难实现或者很耗时：任何集合的修改（例如，向数组中添加、移除一个元素或是做 splice 操作）都需要你创建一个新的集合。因此，$patch 方法也接受一个函数来组合这种难以用补丁对象实现的变更。

```js
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```
两种变更 store 方法的主要区别是，$patch() 允许你将多个变更归入 devtools 的同一个条目中。同时请注意，直接修改 state，$patch() 也会出现在 devtools 中，而且可以进行 time travel(在 Vue 3 中还没有)。

#### 替换state
<p>你不能完全替换掉store的state，因为那样为破坏起响应性。但是你可以patch它</p>


```js
// 这实际上并没有替换`$state`
store.$state = { count: 24 }
// 在它内部调用 `$patch()`：
store.$patch({ count: 24 })
```
你也可以通过变更 pinia 实例的 state 来设置整个应用的初始 state。这常用于 SSR 中的激活过程。

```js
pinia.state.value = {}
```

#### 订阅state
<p>类似于 Vuex 的 subscribe 方法，你可以通过 store 的 $subscribe() 方法侦听 state 及其变化。比起普通的 watch()，使用 $subscribe() 的好处是 subscriptions 在 patch 后只触发一次(例如，当使用上面的函数版本时)。</p>


```js
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 和 cartStore.$id 一样
  mutation.storeId // 'cart'
  // 只有 mutation.type === 'patch object'的情况下才可用
  mutation.payload // 传递给 cartStore.$patch() 的补丁对象。

  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  localStorage.setItem('cart', JSON.stringify(state))
})
```
默认情况下，state subscription 会被绑定到添加它们的组件上(如果 store 在组件的 setup() 里面)。这意味着，当该组件被卸载时，它们将被自动删除。如果你想在组件卸载后依旧保留它们，请将 { detached: true } 作为第二个参数，以将 state subscription 从当前组件中分离：

```js
export default {
  setup() {
    const someStore = useSomeStore()

    // 在组件被卸载后，该订阅依旧会被保留。
    someStore.$subscribe(callback, { detached: true })

    // ...
  },
}
```
TIP

你可以在 pinia 实例上侦听整个 state。
```js
watch(
  pinia.state,
  (state) => {
    // 每当状态发生变化时，将整个 state 持久化到本地存储。
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
```