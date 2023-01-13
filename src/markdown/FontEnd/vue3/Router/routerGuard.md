### 导航守卫
[导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

<p>正如其名，vue-router提供的导航守卫主要用来通过跳转或取消的方式守卫导航。这里有很多方式植入路由导航中：全局的、单个路由独享的，或者组件级的</p>

#### 全局前置守卫
<p>你可以使用router.beforeEach注册一个全局前置守卫</p>

<img src="@assets/vue3/quanjushouwei.png"/>

<p>当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫resolve完之前一直处于等待中</p>

<p>每个守卫方法接收两个参数</p>

* to: 即将要进入的目标用一种标准化1方式
* from： 当前导航正要离开的路由用一种标准化的方式
  
<p>可以返回的值如下：</p>

* false: 取消当前的导航。如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
* 一个路由地址: 通过一个路由地址跳转到一个不同的地址，就像你调用 router.push() 一样，你可以设置诸如 replace: true 或 name: 'home' 之类的配置。当前的导航被中断，然后进行一个新的导航，就和 from 一样。

<img src="@assets/vue3/luyoudizhi.png"/>

<p>如果遇到了意料之外的情况，可能会抛出一个Error。这会取消导航并且调用router.onError注册过的回调


如果什么都没有，undefined或返回true，则导航是有效的，并调用下一个导航守卫</p>

<p>以上所有都同async函数或promise工作方式一样</p>

<img src="@assets/vue3/yibushouwei.png"/>

##### 可选的第三个参数next
<p>在之前的Vue Router版本中，也是可以使用第三个参数next的。这是一个常见的错误来源，可以通过RFC来消除错误。然而，它仍然是被支持的，这意味着你可以向任何导航守卫传递第三个参数。在这种情况下，确保next在任何给定的导航守卫中都被严格调用依次。它可以出现多余依次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错。这里有一个在用户未能验证身份时重定向到/login的错误用例</p>

<img src="@assets/vue3/next.png"/>

##### 全局解析守卫

<p>你可以用 router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，因为它在 每次导航时都会触发，但是确保在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被正确调用。这里有一个例子，确保用户可以访问自定义 meta 属性 requiresCamera 的路由：</p>

<img src="@assets/vue3/quanjujiexi.png"/>

<p>router.beforeResolve 是获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置。</p>

##### 全局后置钩子1
<p>你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：</p>

<img src="@assets/vue3/houzhigouzi.png"/>

#### 路由独享的守卫
<p>你可以直接在路由配置上定义bedoreEach守卫</p>

<img src="@assets/vue3/luyouduxiang.png"/>

<p>beforeEnter 守卫 只在进入路由时触发，不会在 params、query 或 hash 改变时触发。例如，从 /users/2 进入到 /users/3 或者从 /users/2#info 进入到 /users/2#projects。它们只有在 从一个不同的 路由导航时，才会被触发。</p>

<p>你也可以将一个函数数组传递给 beforeEnter，这在为不同的路由重用守卫时很有用</p>

<img src="@assets/vue3/luyouduxianghanshu.png"/>

#### 组件内的守卫
<p>最后你可以在路由组件内直接定义路由导航守卫(传递给路由配置的)</p>

##### 可用的配置API
你可以为路由组件添加以下配置

* beforeRouteEnter
* beforeRouteUpdate
* beforeRouteLeave

<img src="@assets/vue3/zujianshouwei.png"/>

<p>beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。

不过，你可以通过传一个回调给 next 来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数：</p>

<img src="@assets/vue3/zujianshouweithis.png"/>

<p>注意 beforeRouteEnter 是支持给 next 传递回调的唯一守卫。对于 beforeRouteUpdate 和 beforeRouteLeave 来说，this 已经可用了，所以不支持 传递回调，因为没有必要了</p>

#### 使用组合API
<p>如果你正在使用组合 API 和 setup 函数来编写组件，你可以通过 onBeforeRouteUpdate 和 onBeforeRouteLeave 分别添加 update 和 leave 守卫。 请参考组合 API 部分以获得更多细节</p>

#### 完整的导航解析流程

1. 导航被触发
2. 在失活的组件里调用beforeRouteLeave守卫
3. 调用全局的beforeEach守卫
4. 在重用的组件里调用beforeRouteUpdate
5. 在路由配置里调用beforeEnter
6. 解析异步路由组件
7. 在被激活的组件里调用beforeRouterEnter
8. 调用全局的beforeResolve守卫
9. 导航被确认
10. 调用全局的afterEach钩子
11. 触发DOM更新
12. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入