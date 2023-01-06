### 元组
[元组](http://ts.xcatliu.com/advanced/tuple.html)
<p>数组合并了相同类型的对象，而元组合并了不同类型的对象</p>
<p>元组起源于函数编程语言，这些语言中会频繁使用元组</p>

#### 简单的例子
<p>定义一对值分别为string和number的元组</p>
<img src="@assets/ts/yuanzu.png"/>
<p>当赋值或访问一个已知索引的元素时，会得到正确的类型</p>

```JavaScript
let tom: [string,number]
tom[0] = 'Tom'
tom[1] = 25

tom[0].slice(1)
tom[1].toFixed(2)
```
也可以只赋值其中一项
```JavaScript
let tom: [string,number]
tom[0] = 'tom'
```
<p>但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项</p>

```JavaScript
let tom: [string,number]
tom = ['tom',25]

let tomTwo: [string,number]
tom = ['tom']
// Property '1' is missing in type '[string]' but required in type '[string, number]'.
```

#### 越界的元素
<p>当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：</p>

```JavaScript
let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
tom.push(true);

// Argument of type 'true' is not assignable to parameter of type 'string | number'.
```