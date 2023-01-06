### 内置对象
[内置对象](http://ts.xcatliu.com/basics/built-in-objects.html)
[声明文件](http://ts.xcatliu.com/basics/declaration-files.html)

<p>js中有很多内置对象，它们可以直接在ts中当做定义好了的类型</p>

<p>内置对象是根据标准在全局作用域上存在的对象。这里的标准是指ECMAScript和其他环境的标准</p>

#### ECMAScript的内置对象
<p>ECMAScript标准提供的内置对象有：Boolean,Error,Data,RrgExp等</p>
<p>我们可以在ts中将变量定义为这些类型</p>
<img src="@assets/ts/nzhiduixiang1.png"/>
<img src="@assets/ts/nzhiduixiang2.png"/>

<p>更多内置对象。可以查看</p>

[MDN的文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

<p>而它们的定义文件，则在</p>

[ts核心库的定义文件中](https://github.com/Microsoft/TypeScript/tree/main/src/lib)

#### DOM和BOM的内置对象
<p>DOM和BOM提供的内置对象有</p>

<p>Document,HTMLElement,Event,NodeList等</p>
ts中经常会用到这些类型

```JavaScript
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
```
<p>而她们的定义文件，则在</p>

[ts核心库的定义文件中](https://github.com/Microsoft/TypeScript/tree/main/src/lib)

#### TypeScript核心库的定义文件
<p>TypeScript 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。</p>

<p>当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了，比如：</p>

```
Math.pow(10, '2');
// index.ts(1,14): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```
<p>上面的例子中，Math.pow 必须接受两个 number 类型的参数。事实上 Math.pow 的类型定义如下：</p>

```JavaScript
interface Math {
    /**
     * Returns the value of a base expression taken to a specified power.
     * @param x The base value of the expression.
     * @param y The exponent value of the expression.
     */
    pow(x: number, y: number): number;
}
```
再举一个 DOM 中的例子：

```
document.addEventListener('click', function(e) {
    console.log(e.targetCurrent);
});

// index.ts(2,17): error TS2339: Property 'targetCurrent' does not exist on type 'MouseEvent'.
```
上面的例子中，addEventListener 方法是在 TypeScript 核心库中定义的：

```JavaScript
interface Document extends Node, GlobalEventHandlers, NodeSelector, DocumentEvent {
    addEventListener(type: string, listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
}
```
<p>所以 e 被推断成了 MouseEvent，而 MouseEvent 是没有 targetCurrent 属性的，所以报错了。<br/>

注意，TypeScript 核心库的定义中不包含 Node.js 部分。</p>

#### 用TypeScript写Node.js
<p>Node.js不是内置对象的一部分，如果想用TypeScript写Node.js，则需要引入第三方声明文件</p>

```
npm install @type/node --save-dev
```
举例
* 设置路径别名是就是通过ndoe的path来设置的，需要引入@type/node