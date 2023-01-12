### 入门
[入门](https://router.vuejs.org/zh/guide/)

<p>用Vue+Vue Router创建单页应用非常简单：通过Vue.js，我们已经用组件组成了我们的应用。当加入Vue Router时，我们需要做的就是将我们的组件映射到路由上，让Vue Router知道在哪里渲染它们。下面是一个基本的例子</p>

#### HTML
<img src="@assets/vue3/luyourumen1.png"/><br/>
<img src="@assets/vue3/luyourumen2.png"/><br/>
<img src="@assets/vue3/luyourumen3.png"/>

##### router-link
<p>请注意，我们没有使用常规的a标签，而是使用一个自定义组件router-link来创建链接。这使得VUe Router可以在不重载加载页面的情况下更改URL，处理URL的生成以及编码。我们将在后面看到如何从这些功能中获益</p>

##### router-view
<p>router-view将显示与url对应的组件。你可以把它放在任何地方，以适应你的布局</p>

#### JavaScript
<img src="@assets/vue3/luyourumenjs.png"/>
<p>通过调用app.use(router),，我们可以在任意组件以this.$router的形式访问它，并且以this.$route的形式访问路由</p>
<p>我们可以通过this.$route查看当前活跃路由的信息，比如parms等，可以通过this.$router进行路由跳转等操作</p>

<p>要在 setup 函数中访问路由，请调用 useRouter 或 useRoute 函数。我们将在 Composition API 中了解更多信息。
因为我们在 setup 里面没有访问 this，所以我们不能再直接访问 this.$router 或 this.$route。作为替代，我们使用 useRouter 函数：

在整个文档中，我们会经常使用 router 实例，请记住，this.$router 与直接使用通过 createRouter 创建的 router 实例完全相同。我们使用 this.$router 的原因是，我们不想在每个需要操作路由的组件中都导入路由。</p>
<img src="@assets/vue3/setuprouter.png"/>