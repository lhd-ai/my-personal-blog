### 路由嵌套
[路由嵌套](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)
<p>一些应用程序的UI由多层嵌套的组件组成。在这种情况下，URL的片段通常对应于特定的嵌套组件解构，例如</p>
<img src="@assets/vue3/luyouqiantao.png"/>

<p>通过 Vue Router，你可以使用嵌套路由配置来表达这种关系</p>

```js
<div id="app">
  <router-view></router-view>
</div>
```
```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>',
}

// 这些都会传递给 `createRouter`
const routes = [{ path: '/user/:id', component: User }]
```

<p>这里的"<'router'-view>"是一个顶层的router-view。它渲染顶层路由匹配的组件。同样地，一个被渲染的组件也可以包含组件嵌套的router-view。例如，如果我们在User组件的模板内添加一个router-view</p>

```js
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `,
}
```

<p>要将组件渲染到这个嵌套的 router-view 中，我们需要在路由中配置 children：</p>
<img src="@assets/vue3/qiantaoluyou.png"/>

<p>此时，按照上面的配置，当你访问 /user/eduardo 时，在 User 的 router-view 里面什么都不会呈现，因为没有匹配到嵌套路由。也许你确实想在那里渲染一些东西。在这种情况下，你可以提供一个空的嵌套路径</p>

<img src="@assets/vue3/qiantaoluyoutwo.png"/>

#### 嵌套的命名路由
<p>在处理命名路由时，你通常会给予子路由命名</p>

<img src="@assets/vue3/qiantaoluyouthree.png"/>

<p>这将确保导航到 /user/:id 时始终显示嵌套路由。

在一些场景中，你可能希望导航到命名路由而不导航到嵌套路由。例如，你想导航 /user/:id 而不显示嵌套路由。那样的话，你还可以命名父路由，但请注意重新加载页面将始终显示嵌套的子路由，因为它被视为指向路径/users/:id 的导航，而不是命名路由：</p>

<img src="@assets/vue3/qiantaoluyoufour.png"/>