### 编程式导航
[编程式导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)

<p>除了使用router-link创建a标签来定义导航链接，我们还可以借助router的实例方法，通过编写代码来实现</p>

#### 导航到不同的位置
<p>注意：在vue实例中，你可以通过$router访问路由实例。因此你可以调用this.$router.push</p>

<p>想要导航到不同的URL,可以使用router.push方法。这个方法会向history栈添加一个新的记录，所以，当用户，点击浏览器后退按钮时，会回到之前的URL</p>

<p>当你点击router-link时，内部会调用这个方法，所以点击router-link相对于调用router.psuh()</p>

<img src="@assets/vue3/biancheng.png"/>

<p>该方法的参数可以是一个字符串路径，或者一个描述地址的对象。例如</p>

```js
//字符串路径
router.push('/users/eduardo')

//带有路径的对象
router.push({path:'/users/eduardo'})

//命名的路由，并加上参数，让路由建立url
router.push({name:'user',params:{username: 'eduardo'}})

//带查询参数结果是/register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })
```

<p>注意，如果提供了path，params会被忽略，上述例子中的query并不属于这种情况。取而代之的是下面的例子，你需要提供路由的name或手写完整的带有参数的path</p>

<img src="@assets/vue3/params.png"/>

<p>当指定 params 时，可提供 string 或 number 参数（或者对于可重复的参数可提供一个数组）。任何其他类型（如 undefined、false 等）都将被自动字符串化。对于可选参数，你可以提供一个空字符串（""）来跳过它。

由于属性 to 与 router.push 接受的对象种类相同，所以两者的规则完全相同。

router.push 和所有其他导航方法都会返回一个 Promise，让我们可以等到导航完成后才知道是成功还是失败。我们将在 Navigation Handling 中详细介绍。</p>

#### 替换当前位置

<p>它的作用类似于 router.push，唯一不同的是，它在导航时不会向 history 添加新记录，正如它的名字所暗示的那样——它取代了当前的条目。</p>

<img src="@assets/vue3/history.png"/>
<p>也可以直接在传递给 router.push 的 routeLocation 中增加一个属性 replace: true ：</p>

```js
router.push({ path: '/home', replace: true })
// 相当于
router.replace({ path: '/home' })
```

#### 横跨历史
<p>该方法采用一个整数作为参数，表示在历史堆栈中前进或后退多少步，类似于window.history.go(n)

例子：
</p>
<img src="@assets/vue3/historygo.png"/>

#### 篡改历史
<p>
你可能已经注意到，router.push、router.replace 和 router.go 是 window.history.pushState、window.history.replaceState 和 window.history.go 的翻版，它们确实模仿了 window.history 的 API。

因此，如果你已经熟悉 Browser History APIs，在使用 Vue Router 时，操作历史记录就会觉得很熟悉。

值得一提的是，无论在创建路由器实例时传递什么样的 history 配置，Vue Router 的导航方法( push、replace、go )都能始终正常工作。</p>