### 快速开始
[快速开始](https://cn.vuejs.org/guide/quick-start.html)

#### 线上尝试Vue

* 想要快速体验Vue,你可以直接试试我们的[演练场](https://sfc.vuejs.org/#eNp9UMtqwzAQ/JXtXtJCbNGrcQO99Q960cWNN4mDXqzWbsH437tK6lBaCAhpZ0cazeyMrynV00jYYJv3PCTZ2UBfKbJAT4dudAKzDQB9J93j07UGYJKRw4oAfD42sHkj5yK8R3b9w+ZKLeXQTVdrbh8oEPLJdUKKANrT826eiwosS2sUXbpDSKPAVPnYk3uxqLxFpVpze41bHHxxW/ku1eccgya52LI/RLbYrEYtatSCLZ5EUm6MyYd9yX/OdeSj0armMcjgqabsqw+On5lYhS1uf2kYbU7EFVPoiYnvaf65+k93nRAu36DOh1k=)
* 如果你更喜欢不用任何构建的原始HTML，可以使用[JSFiddle](https://jsfiddle.net/yyx990803/2ke1ab0z/)入门
* 如果你已经比较熟悉Node.js和构建工具等概念，还可以直接在浏览器中打开[StacBliz](https://stackblitz.com/edit/vitejs-vite-ttyhqg?file=index.html&terminal=dev)来尝试完整的构建设置

#### 创建一个Vue应用
<p>在本节中，我们将介绍如何在本地搭建Vue单页应用。创建的项目将使用基于Vite的构建设置，并运行我们使用Vue的单文件组件(SFC)</p>
<p>确保你安装了最新版本的Node.js然后在命令行中运行以下命令</p>

```
npm init vue@latest
```
<P>这一指令将会安装并执行create-vue，它是Vue官方的项目脚手架工具。你将会看到一些诸如TypeScript和测试支持之类的可选功能提示</P>
<img src="@assets/vue3/vue@latest.png"/>

<P>如果不确定是否要开启某个功能，你可以直接按下回车键选择No。在项目被创建后，通过以下步骤安装依赖并启动服务器</P>

```
cd <your-projectname>
npm install 
npm run dev
```
<p>你现在应该已经运行起来了你的第一个vue项目！请注意，生成的项目要中的示例组件使用的是组合式API和<"script" setup>,而非选项式API.下面是一些补充提示</p>

* 推荐的 IDE 配置是 Visual Studio Code + Volar 扩展。如果使用其他编辑器，参考 IDE 支持章节。
* 更多工具细节，包括与后端框架的整合，我们会在工具链指南进行讨论。
* 要了解构建工具 Vite 更多背后的细节，请查看 Vite 文档。
* 如果你选择使用 TypeScript，请阅读 TypeScript 使用指南。

<p>当你准备将应用发布到生产环境时，请运行</p>

```
npm run build
```
#### 通过CDN使用Vue
<p>你可以借助script标签直接通过CDN来使用Vue:</p>

```javascript
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```
<p>这里我们使用了 unpkg，但你也可以使用任何提供 npm 包服务的 CDN，例如 jsdelivr 或 cdnjs。当然，你也可以下载此文件并自行提供服务。

通过 CDN 使用 Vue 时，不涉及“构建步骤”。这使得设置更加简单，并且可以用于增强静态的 HTML 或与后端框架集成。但是，你将无法使用单文件组件 (SFC) 语法。</p>

#### 使用全局构建版本
<p>上面的例子使用了全局构建版本的Vue，该版本的所有顶层API都以属性的形式暴露在全局的Vue对象上。这里有一个使用全局构建版本的例子</p>

```javascript
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue
  
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

#### 使用ES模块构建版本
<p>在本文档的其余部分我们使用的主要是ES模块语法。现代浏览器大多都已原生支持ES模块。因此我们可以像这样通过CDN以及原生ES模块使用Vue</p>

```javascript
<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
  
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

#### 启用 Import maps#
<p>在上面的示例中，我们使用了完整的 CDN URL 来导入，但在文档的其余部分中，你将看到如下代码：</p>

```js
import { createApp } from 'vue'
```
我们可以使用导入映射表 (Import Maps) 来告诉浏览器如何定位到导入的 vue：

```js
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'vue'

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

#### 拆分模块
<p>随着对这份指南的逐步深入，我们可能需要将代码分割成单独的 JavaScript 文件，以便更容易管理。例如：</p>

```js
<!-- index.html -->
<script type="module">
  import { createApp } from 'vue'
  import MyComponent from './my-component.js'

  createApp(MyComponent).mount('#app')
</script>
```
```js
// my-component.js
export default {
  data() {
    return { count: 0 }
  },
  template: `<div>count is {{ count }}</div>`
}
```
<p>
如果直接在浏览器中打开了上面的 index.html，你会发现它抛出了一个错误，因为 ES 模块不能通过 file:// 协议工作。为了使其工作，你需要使用本地 HTTP 服务器通过 http:// 协议提供 index.html。

要启动一个本地的 HTTP 服务器，请先安装 Node.js，然后通过命令行在 HTML 文件所在文件夹下运行 npx serve。你也可以使用其他任何可以基于正确的 MIME 类型服务静态文件的 HTTP 服务器。

可能你也注意到了，这里导入的组件模板是内联的 JavaScript 字符串。如果你正在使用 VSCode，你可以安装 es6-string-html 扩展，然后在字符串前加上一个前缀注释 /*html*/ 以高亮语法。
</p>

#### 无需构建的组合式API用法
<p>组合式API的许多示例将使用<"script" setup>语法。如果你想在无需构建的情况下使用组合式API，请参阅</p>

[setup()选项](https://cn.vuejs.org/api/composition-api-setup.html)