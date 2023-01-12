### 重定向和别名
[重定向和别名](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html)

#### 重定向
<p>重定向也是通过routes配置来完成，下面例子是从/home重定向到/</p>

```js
const routes = [{path: '/home',redirect: '/'}]
```

<p>重定向的目标也可以是一个命名的路由</p>

```js
const routes = [{[path: '/home',redirect: {name: 'homepage'}]}]
```
<p>甚至是一个方法，动态返回重定向目标</p>
<img src="@assets/vue3/redirect.png"/>

<p>请注意，导航守卫并没有应用在跳转路由上，而仅仅应用在其目标上。在上面的例子中，在 /home 路由中添加 beforeEnter 守卫不会有任何效果。

在写 redirect 的时候，可以省略 component 配置，因为它从来没有被直接访问过，所以没有组件要渲染。唯一的例外是嵌套路由：如果一个路由记录有 children 和 redirect 属性，它也应该有 component 属性。</p>

#### 相对重定向
<p>先可以重定向到相对位置</p>

<img src="@assets/vue3/chongdingxiang.png"/>

### 别名
<p>重定向是指当用户访问/home时，URL会被/替换，然后匹配成/。那么什么是别名呢？
</p>

<p>将/别名为/home，意味着当用户访问/home时，url仍然是/home,但会被匹配为用户正在访问/</p>

<p>上面对应的路由配置为</p>

```js
const routes = [{ path: '/', component: Homepage, alias: '/home' }]
```

<p>通过别名，你可以自由地将 UI 结构映射到一个任意的 URL，而不受配置的嵌套结构的限制。使别名以 / 开头，以使嵌套路径中的路径成为绝对路径。你甚至可以将两者结合起来，用一个数组提供多个别名：</p>

<img src="@assets/vue3/bieming.png"/>

<p>如果你的路由有参数，请确保在任何绝对别名中包含它们</p>

<img src="@assets/vue3/biemingcanshu.png"/>