### Action
[Action](https://pinia.vuejs.org/zh/core-concepts/actions.html)

<p>Action相当于组件中的method。它们可以通过defineStore()中的actions属性来定义，并且它们也是定义业务逻辑的完美选择</p>

<img src="@assets/vue3/action.png"/>

<p>类似getter,action也可通过this访问整个store实例，并支持完整的类型标注(以及自动补全)。不同的式，action可以是异步的，你可以在它们里面await调用任何API,以及其他action,下面是一个使用Mande的例子。请注意你使用什么库并不重要，只要你得到的是一个Promise，你甚至可以使用fetch函数</p>

<img src="@assets/vue3/yibuaction.png"/>

<p>你也完全可以自由地设置任何你想要的参数以及返回任何结果。当调用action时，一切类型也都是可以被自动推断出来的</p>

<p>Action可以像方法一样被调用</p>

```js
export default defineComponent({
  setup() {
    const main = useMainStore()
    // 作为 store 的一个方法调用该 action
    main.randomizeCounter()

    return {}
  },
})
```

#### 访问其他store的action
<p>想要使用另一个store的话，那你直接在action中调用就好了</p>

<img src="@assets/vue3/qitaaction.png"/>

#### 使用setup()时的用法

你可以将任何action作为store的一个方法直接调用

```js
export default {
  setup(){
    const store = useStore()
    store.randomizeCounter()
  }
}
```

#### 使用选项式API的用法

<p>在下面的例子中你可以假设相关的store已经创建了</p>

<img src="@assets/vue3/xuanxiangaction.png"/>

##### 使用setup()
<P>虽然并不是每个开发者都会使用组合式API，但setup()钩子依旧可以使Pinia在选项式API中更易用。并且不需要额外的映射辅助函数</P>

<img src="@assets/vue3/actionsetup.png"/>

##### 不使用setup()
<p>如果你不喜欢使用组合式API,你也可以使用mapActions()辅助函数将action属性映射为你组件中的方法</p>

<img src="@assets/vue3/actionnosetup.png"/>

#### 订阅action
<P>你可以通过 store.$onAction() 来监听 action 和它们的结果。传递给它的回调函数会在 action 本身之前执行。after 表示在 promise 解决之后，允许你在 action 解决后执行一个一个回调函数。同样地，onError 允许你在 action 抛出错误或 reject 时执行一个回调函数。这些函数对于追踪运行时错误非常有用，类似于Vue docs 中的这个提示。

这里有一个例子，在运行 action 之前以及 action resolve/reject 之后打印日志记录</P>

<img src="@assets/vue3/dingyueaction.png"/>

<p>默认情况下，action订阅器会被绑定到添加它们的组件上(如果store在组件的setup()内）。这意味着，当该组件被卸载时，它们会被自动删除。如果你想在组件卸载后依旧保留它们，请将true作为第二个参数传递给action订阅器，以便将其从当前组件中分离</p>

```js
export default{
  setup(){
    const someStore = useSomeStore()
    //在组件被卸载后，这个订阅依旧会被保留
    someStore.$onAction(callback,true)
  }
}