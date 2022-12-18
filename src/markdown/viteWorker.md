### Worker选项
[worker选项](https://cn.vitejs.dev/config/worker-options.html)

***

#### worker.format
* **类型：** 'es' |'iife'
* **默认：** iife
<p>worker打包时的输出类型</p>

***

#### worker.plugins
* **类型：** (Plugin | Plugin[])[]
<p>应用于worker打包的vite插件。注意config.plugin不会应用于worker,而是应该在这里配置所用到的插件</p>

***

#### worker.rollupOptions
* **类型：** RollupOptions
<p>用于打包worker的Rollup配置项</p>