### 路由组件传参
[路由组件传参](https://router.vuejs.org/zh/guide/essentials/passing-props.html)

#### 将props传递给路由组件
<p>在你的组件中使用$route会于路由紧密耦合，这限制了组件的灵活性。因为它只能用于特定的url。虽然这不一定是件坏事，但我们可以通过props配置来解除这种行为</p>

<p>我们可以将下面的代码</p>

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const routes = [{ path: '/user/:id', component: User }]
```
<P>替换为</P>

```js
const User = {
  // 请确保添加一个与路由参数完全相同的 prop 名
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const routes = [{ path: '/user/:id', component: User, props: true }]
```
这允许你在任何地方使用该组件，使得该组件更容易重用和测试。

##### 布尔模式
当props设置为true时，route.params将被设置为组件的props

##### 命名视图
对于有命名视图的路由，你必须为每个命名视图定义 props 配置：
<img src="@assets/vue3/propsshitu.png"/>

##### 对象模式
<p>当props是一个对象时，它将原样设置为组件props。当props是静态的时候很有用</p>

<img src="@assets/vue3/propsduixiang.png"/>

##### 函数模式
<p>你可以创建一个返回props的函数。这允许你将参数转换为其他类型，将静态值与基于路由的值相结合等等</p>

<img src="@assets/vue3/propshanshu.png"/>

<p>URL/search?q=vue将传递给{query: 'vue'}作为props传给SearchUser组件</p>

<p>请尽可能保持 props 函数为无状态的，因为它只会在路由发生变化时起作用。如果你需要状态来定义 props，请使用包装组件，这样 vue 才可以对状态变化做出反应。</p>