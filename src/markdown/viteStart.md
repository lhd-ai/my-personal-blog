# 开始
[vite开始](https://cn.vitejs.dev/guide/)
### 总览
Vite是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：
* 一个开发服务器，它基于原生ES模块提供了丰富的内建功能，如速度快到惊人的模块热更新(HMR)
* 一套构建指令，它使用Rollup打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源
Vite意在提供开箱即用的配置，同时它的插件API和JavaScript API带来了高度的可扩展性，并有完整1类型支持
### 浏览器支持
默认的构建目标是能支持原生ESM语法的script标签、原生ESM动态导入和import.meta的浏览器。传统浏览器可通过官方插件@vite/plugin-legacy支持
### 搭建第一个Vite项目

使用NPM:
<br/>
**npm create vite@latest**
<br/>
使用Yarn:
<br/>
**yarn create vite**
<br/>
使用PNPM:
<br/>
**pnpm create vite**
<br/>
然后按照提示操作即可！
<br/>

你还可以通过附加的命令行选项直接指定项目名称和你想要使用的模板。例如，要构建一个Vite + Vue项目，运行：
<br/>
# npm 6.x
npm create vite@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template vue

# yarn
yarn create vite my-vue-app --template vue

# pnpm
pnpm create vite my-vue-app --template vue
<br/>
查看 create-vite 以获取每个模板的更多细节：vanilla，vanilla-ts, vue, vue-ts，react，react-ts，react-swc，react-swc-ts，preact，preact-ts，lit，lit-ts，svelte，svelte-ts