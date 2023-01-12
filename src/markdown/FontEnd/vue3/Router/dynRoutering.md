### 动态路由
[动态路由](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html)

#### 带参数的动态路由匹配
<p>很多时候，我们需要将给定匹配模式的路由映射到同一个组件。例如，我们可能有一个User组件，它应该对所有用户进行渲染，但用户ID不同。在Vue Router中，我们可以在路径中使用一个动态字段来实现，我们称之为路径参数</p>

```js
const User = {
  template: '<div>User</div>',
}

// 这些都会传递给 `createRouter`
const routes = [
  // 动态字段以冒号开始
  { path: '/users/:id', component: User },
]
```
<p>现在像/users/johnny和/users/jolyne这样的URL都会映射到同一个路由</p>

<p>路径参数用冒号 ： 表示。当一个路由被匹配时，它的params的值将在每个组件中以this.$route.params的形式暴露处理(setup中用useRoute)。因此我们可以通过更新User的模板来呈现当前用户的id</p>

```js
const User = {
  template: '<div>User {{$route.params.id}}</div>'
}
```
<p>你可以在同一个路由中设置有多个 路径参数，它们会映射到 $route.params 上的相应字段。例如：</p>
<img src="@assets/vue3/dongtailuyou.png"/>
<p>除了 $route.params 之外，$route 对象还公开了其他有用的信息，如 $route.query（如果 URL 中存在参数）、$route.hash 等。你可以在 API 参考中查看完整的细节。

这个例子的 demo 可以在这里找到。</p>

[这里](https://codesandbox.io/s/route-params-vue-router-examples-mlb14?from-embed&initialpath=%2Fusers%2Feduardo%2Fposts%2F1)

#### 响应路由参数的变化
<p>使用带有参数的路由时需要注意的时，当用户从/users/johnny导航到/users/jolyne时，相同的组件实例将被重复使用。因为两个路由都渲染同一个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的声明周期钩子不会被调用</p>

<p>要对同一个组件中参数的变化做出响应的话，你可以简单地watch $route对象上的任意属性，在这个场景中就是$route.params</p>

```js
const User = {
  template: '...',
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // 对路由变化做出响应...
      }
    )
  },
}
```

<p>或者，使用 beforeRouteUpdate 导航守卫，它也可以取消导航：</p>

```js
const User = {
  template: '...',
  async beforeRouteUpdate(to, from) {
    // 对路由变化做出响应...
    this.userData = await fetchUser(to.params.id)
  },
}
```

#### 捕获所有路由或404 Not Found路由
<p>常规参数只匹配url字段之间的字符，用/分隔。如果我们想匹配任意路径，我们可以使用自定义的路径参数正则表达式，在路径参数后面的括号中加入正则表达式</p>

```js
const routes = [
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
  { path: '/user-:afterUser(.*)', component: UserGeneric },
]
```
<p>在这个特定的场景中，我们在括号之间使用了自定义正则表达式，并将pathMatch 参数标记为可选可重复。这样做是为了让我们在需要的时候，可以通过将 path 拆分成一个数组，直接导航到路由：</p>

#### 高级匹配模式
<p>Vue Router使用自己的路径匹配语法，其灵感来自于express,因此它支持许多高级匹配模式，如可选的参数，零或多个/一个或多个，甚至自定义的正则匹配规则。请查看高级匹配文档来探索它们</p>

[高级匹配](https://router.vuejs.org/zh/guide/essentials/route-matching-syntax.html)