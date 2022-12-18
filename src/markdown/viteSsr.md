### SSR选项
[SSR选项](https://cn.vitejs.dev/config/ssr-options.html)

***

#### ssr.external
* **类型：** string[]
* **默认：** SSR外部化
<p>列出的是要为SSR强制外部化的依赖</p>

***

#### ssr.noExternal
* **类型：** string | RegExp | (string | RegExp)[] | true
* **相关：** SSR 外部化
<p>列出的是防止被SSR外部化依赖项。如果设为true,将没有依赖被外部化</p>

***

#### ssr.target
* **类型：** 'node' | 'webworker'
* **默认：** node
<p>SSR服务器的构建目标</p>

***

#### ssr.format
* **实验性**
* **类型：**  'esm' | 'cjs'
* **默认：**  esm
<p>SSR 服务器的构建语法格式。从 Vite v3 开始，SSR 构建默认生成 ESM 格式。设置为 'cjs' 可以构建为 CJS 格式，但不推荐这样做。这个选项被标记为实验性的，以便给用户更多时间更新到 ESM。CJS 构建需要复杂的外部化启发式，但在 ESM 格式中则不需要。</p>