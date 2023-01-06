### 原始数据类型
[原始数据类型](http://ts.xcatliu.com/basics/primitive-data-types.html)
<p>JavaScript的类型分为两种：原始数据类型和对象类型</p>
<p>原始数据类型包括：布尔值、数值、字符串、null、undefined、以及ES6新增的Symbol和ES10中的新类型BigInt</p>
<p>本节主要介绍前五中原始数据类型在TypeScript中的应用</p>

#### 布尔值
<p>布尔值是最基础的数据类型，在TypeScript中，使用boolean定义布尔值类型</p>

```JavaScript
let isDone: bolean = false
//编译通过
//后面约定，未强调编译错误的代码片段，默认为编译通过
``` 

<img src="@assets/ts/boolean.png"/>

<p><font color="red">注意，使用构造函数Boolean创造的对象不是布尔值</font></p>

<img src="@assets/ts/Boolean2.png"/>

```JavaScript
let createdByNewBoolean:boolean = new Boolean(1)
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
```
<p>事实上new boolean()返回的是一个Boolean对象,直接调用Boolean也可以返回一个boolean对象</p>

```JavaScript
let createdByNewBoolean:Boolean = new Boolean(1)
let createdByNewBoolean:boolean = Boolean(1)
```
<p>在TypeScript，boolean是javascript中的基本类型，而Boolean是JavaScript中的构造函数。其他基本类型（除了null和undefined)一样</p>

#### 数值
<p>使用number定义数值类型：</p>

```JavaScript
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```
<p>编译结果为</p>

```JavaScript
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
```

<img src="@assets/ts/number.png"/>
<p>其中0b1010和0o744是ES6中的二进制和八进制表示法，它们会被编译为十进制数字</p>

#### 字符串
<p>使用sting定义字符串类型</p>

<img src="@assets/ts/string.png"/>

#### 空值
<p>JavaScript没有空值(void)的概念，在TypeScript中，可以用void表示没有任何返回值的函数</p>
<p>声明一个void类型的变量没有什么用，因为你只能将它赋值为undefined和null(只在 --strictNullChecks 未指定时）</p>
<img src="@assets/ts/void.png"/>

#### Null和Undefined
<P>在TypeScript中，可以使用null和undefined来定义这两个原始数据类型</P>
<p>与void的区别是，undefined和null是所有类型的子类型。也就是说undefined类型的变量可以赋值给number类型的变量(tsconfig.json中strict设置为非严格模式下才可以)</p>
<p>而void类型的变量不能赋值给number类型的变量</p>

<img src="@assets/ts/nullundefined.png"/>