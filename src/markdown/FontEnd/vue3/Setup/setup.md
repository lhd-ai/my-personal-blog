### 组合式API: setup()
[组合式API:setup()](https://cn.vuejs.org/api/composition-api-setup.html)

<p>setup()钩子是在组件中使用组合式API的入口，通常只在以下情况下使用：</p>
1. 需要在非单文件组件中使用组合式API时
2. 需要在基于选项式API的组件中集成基于组合式API的代码时

#### 基本使用
<p>我们可以使用响应式API来声明响应式的状态，在setup()函数中返回的对象会暴露给模板和组件实例，其它的选项也可以通过组件实例来获取setup()暴露的属性</p>
<img src="@assets/vue3/setup.png"/>
<p>在模板中访问从setup返回的ref时，它会自动浅层解包，因此你无须再在模板中为它写.value.当通过this访问时也会统一如此解包

setup()自身并不含对组件实例的访问权，即在setup()中访问this会是undefined.你可以在选项时API中访问组合式API暴露的值，但反过来不行

setup()应该同步地返回一个对象。唯一可以使用async setup()的情况是，该组件是Suspense组件的后裔.
</p>

#### 访问Props
<P>setup函数的第一个参数是组件的props。与标准的组件一致，一个setup函数的props是响应式的，并且会在传入新的props时同步更新</P>

```js
  props: {
    title: String
  },
  setup(props) {
    console.log(props)
  }
```
<p>请注意如果你解构了props对象，解构出的变量将会丢失响应性。因此我们推荐通过props.xxx的形式来使用其中的props</p>
<P>如果你确实需要解构props对象，或者需要将某个prop传到一个外部函数中并保持响应性，那么你可以使用toRefs()和toRef()这两个工具函数</P>
<img src="@assets/vue3/setupprops.png"/>

#### Setup上下文
<p>保存当父组件传过来值时没有被props接收的值</p>
<P>传入setup函数的第二个参数是一个Setup上下文对象。上下文对象暴露了其他一些在setup中可能会用到的值</P>
<img src="@assets/vue3/setupcontext.png"/>
<p>该上下文对象是非响应式的，可以安全地解构</p>

```js
export default {
  setup(props,{ arrts, slots, emit, expose}){
    ...
  }
}
```
<p>arrts和slots都是有状态的对象，它们总是会随着组件自身的更新而更新。这意味着你应当避免解构它们，并始终通过arrts.x或slots.x的形式使用其中的属性。此外还需要注意，和props不同，arrts和slots的属性都不是响应式的。如果你想要基于arrts或slots的改变来执行副作用，那么你应在onBeforeUpdate生命周期钩子中编写相关逻辑</p>

##### 暴露公共属性
<p>expose函数用于显示地限制该组件暴露出的属性，当父组件通过模板引用访问该组件的实例时，将仅能访问expose函数暴露出的内容</p>
<img src="@assets/vue3/expose.png"/>

#### 与渲染函数一起使用
<p>setup也可以返回一个渲染函数，此时在渲染函数中可以直接使用在同一作用域下声明的响应式状态</p>

```js
const countThree: any = ref(0)
console.log(countThree)
return () => h('div',countThree.value)
```
<P>返回一个渲染函数将会阻止我们返回其他东西。对于组件内部来说，这样没问题，但如果我们想通过模板引用将这个组件的方法暴露给父组件，那就有问题了</P>

<p>我们可以通过调用expose()解决这个问题</p>
<img src="@assets/vue3/exposewaibu.png"/>
<p>此时父组件可以通过模板引用来访问这个increment方法</p>
