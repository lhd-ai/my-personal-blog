### 命名视图
[命名视图](https://router.vuejs.org/zh/guide/essentials/named-views.html)

<p>有时候同时（同级）展示多个视图，而不是嵌套显示，例如创建一个布局，有sidebar（测导航）和main（主内容）两个视图，这时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出门。如果router-view没有设置命名，那么默认为default</p>

<img src="@assets/vue3/mingmingshitu.png"/>

<p>一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置 (带上 s)：</p>

<img src="@assets/vue3/mingmingshitutweo.png"/>

#### 嵌套命名视图
<p>我们也有肯使用命名视图创建嵌套视图的复杂布局。这时你也需要命名用到的嵌套的router-view组件。我们以一个设置面板为例</p>

<img src="@assets/vue3/qiantaoshitu.png"/>

* Nav 只是一个常规组件。
* UserSettings 是一个视图组件。
* UserEmailsSubscriptions、UserProfile、UserProfilePreview 是嵌套的视图组件。

<p>注意：我们先忘记html/css具体的布局的样子，只专注在用到的组件上</p>

<p>UserSetting组件的template部分应该是类似下面的这段代码</p>

<img src="@assets/vue3/qiantaoshitutwo.png"/>