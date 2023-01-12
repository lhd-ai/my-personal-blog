### 路由懒加载
[路由懒加载](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)


<p>当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。</p>

<p>Vue Router 支持开箱即用的动态导入，这意味着你可以用动态导入代替静态导入：</p>

<img src="@assets/vue3/lanjiazai.png"/>

<p>component和components配置接收一个返回Promise组件的函数，Vue Router只会在第一次进入页面时才会获取这个函数，然后使用缓存数据。这意味着你也可以使用更复杂的函数，之一它们返回一个Promise</p>

<img src="@assets/vue3/lanjiazaihanshu.png"/>

<p>如果你使用的是 webpack 之类的打包器，它将自动从代码分割中受益。

如果你使用的是 Babel，你将需要添加 syntax-dynamic-import 插件，才能使 Babel 正确地解析语法。</p>

### 把组件按组分块

#### 使用webpack
<p>有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)：</p>

<img src="@assets/vue3/webpackfenzu.png"/>

<p>webpack会将任何一个异步模块与相同的块名称组合到相同的异步块中</p>

#### 使用Vite
<p>在Vite中，你可以在rollupOptions下定义分块</p>

<img src="@assets/vue3/vitefenzu.png"/>