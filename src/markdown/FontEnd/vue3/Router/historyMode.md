### 不同的历史纪录模式
[不同的历史纪录模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html#hash-%E6%A8%A1%E5%BC%8F)

#### Hash模式
<p>hash模式是用createWebHashHistory()创建的</p>

<img src="@assets/vue3/hash.png"/>

<p>它在内部传递的实际 URL 之前使用了一个哈希字符（#）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。不过，它在 SEO 中确实有不好的影响。如果你担心这个问题，可以使用 HTML5 模式。</p>

#### HTML5模式
<p>用createWebHistory()创建HTLM5.推荐使用这个模式</p>

<img src="@assets/vue3/hisrotymode.png"/>
<p>当使用这种历史模式时，URL 会看起来很 "正常"，例如 https://example.com/user/id。漂亮!

不过，问题来了。由于我们的应用是一个单页的客户端应用，如果没有适当的服务器配置，用户在浏览器中直接访问 https://example.com/user/id，就会得到一个 404 错误。这就尴尬了。

不用担心：要解决这个问题，你需要做的就是在你的服务器上添加一个简单的回退路由。如果 URL 不匹配任何静态资源，它应提供与你的应用程序中的 index.html 相同的页面。漂亮依旧!</p>