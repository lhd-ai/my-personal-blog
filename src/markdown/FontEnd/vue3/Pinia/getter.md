### Getter
[Getter](https://pinia.vuejs.org/zh/core-concepts/getters.html)

<p>Getter完全等同于store的state的计算值。可以通过defineStore()中的getters属性来定义它们。推荐使用箭头函数，并且它将接收state作为第一个参数</p>

<img src="@assets/vue3/getter.png"/>

<p>大多数时候，getter仅依赖state,不过，有时它们也可能会使用其他getter.因此，即使在使用常规函数定义getter时，我们也可以通过this访问到整个store实例，但(在TypeScript)必须定义返回类型。这是为了避免TypeScript的已知缺陷，不过这不影响用箭头函数定义的getter,也不会影响不使用this的getter</p>

<img src="@assets/vue3/gettertwo.png"/>

<p>然后你可以直接访问store实例上的getter了</p>

<img src="@assets/vue3/getterthree.png"/>

#### 访问其他getter

<p>与其他属性一样，你也可以组合多个getter。通过this,你可以访问到其他任何getter。即使你没有使用TypeScript，你也可以用JSDoc来让你的IDE提示类型</p>

<img src="@assets/vue3/getterfour.png"/>

#### 向getter传递参数

<p>Getter只是幕后的计算属性，所有不可以向他们传递任何参数。不过，你可以从getter返回一个函数，该函数可以接受任意参数</p>

<img src="@assets/vue3/gettercanshu.png"/>

<p>并在组件中使用</p>

<img src="@assets/vue3/gettercanshutwo.png"/>

<p>请注意，当你这样做时，getter将不再被缓存，它们只是一个被你调用的函数。不过，你可以在getter本身中缓存一些结果，虽然这种做法并不常见，但有证明表现它的性能会更好</p>

<img src="@assets/vue3/getterhuancun.png"/>

#### 访问其他store的getter
<p>想要使用另一个store的getter的话，那就直接在getter内使用就好</p>

```js
import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
```

#### 使用setup()时的用法
<p>作为store的一个属性，你可以直接访问任何getter(与state属性完全一样)</p>

```js
export default {
  setup(){
    const store = useStore()
    store.count = 3
    store.doubleCount//6
  }
}
```

#### 使用选项式API的用法

<p>在下面的例子中，你可以假设相关的store已经创建了</p>

<img src="@assets/vue3/xuanxianggetter.png"/>

##### 使用setup()

<p>虽然并不是每个开发者都会使用组合式API,但setup()钩子依旧可以使Pinia在选项式API中更易用。并且不需要额外的映射辅助函数</p>

<img src="@assets/vue3/xuanxiangsetup.png"/>

##### 不使用setup()

<p>你可以使用前一节的state中的mapState()函数来将其映射为getters</p>

<img src="@assets/vue3/xuanxiangnosetup.png"/>