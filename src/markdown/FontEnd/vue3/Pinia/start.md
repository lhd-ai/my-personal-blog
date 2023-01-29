### 开始
[开始](https://pinia.vuejs.org/zh/getting-started.html)

#### 安装
<p>用你喜欢的包管理器安装Pinia</p>

```js
yarn add pinia
或
npm install pinia
```

**如果你的应用使用的是Vue2，你还需要安装组合式API包： @vue/composition-api。如果你使用的是Nuxt,你应该参考这篇指南**

<p>如果你正在使用Vue CLI,你可以试试这个</p>

[非官方插件](https://github.com/wobsoriano/vue-cli-plugin-pinia)

<p>创建一个pinia实例(根store)并将起传递给应用</p>

<img src="@assets/vue3/pinia.png"/>

<p>如果你使用的是Vue2,你还需要安装一个插件，并在应用的根部注入创建的pinia</p>

<img src="@assets/vue3/vue2pinia.png"/>

<p>这样才能提供devtools的支持。在Vue3中，一些功能仍然不被支持，如time traveling和编辑，这是因为vue-devtools还没有相关的API，但devtools也有很多针对Vue3的专属功能，而且就开发者的体验来说，Vue3整体上要好得多。在Vue2中，Pinia使用的是Vuex的现有接口(因此不能与Vuex一起使用)</p>

#### Store是什么？
<p>Store(如Pinia)是一个保存状态和业务逻辑的实体，它并不与你的组件树绑定。换句话说，它承载着全局状态。它有点像一个永远存在的组件，每个组件都可以读取和写入它。它有三个概念，state、getter和action，我们可以假设这些概念相当于组件中的data、computed和methods</p>

#### 应该在什么时候使用Store?
<p>一个Store应该包含可以在整个应用中访问的数据。这包括在许多地方使用的数据，例如显示在导航栏中的用户信息，以及需要通过页面保存的数据，例如一个非常复杂的多步骤表单</p>

<p>另一方面，你应该避免在Store中引入那些原本可以在组件中保存的本地数据，例如，一个元素在页面中的可见性</p>

<p>并非所有的应用都需要访问全局状态，但如果你的应用确实需要一个全局状态，那pinia将使你的开发过程更轻松</p>