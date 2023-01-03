### 数组的类型
[数组的类型](http://ts.xcatliu.com/basics/type-of-array.html)

<P>在TypeScript中，数组类型有多种定义方式，比较灵活</P>

#### [类型 + 方括号]表示法
<p>最简单的方式是使用[类型 + 方括号]来表示数组</p>

```
let fibonacci: number[] = [1,2,3,4,5]
```

<p>数组的项中不允许出现其他的类型</p>

```
let fibonacci: number[] = [1,2,3,'4',5]
//报错Type 'string' is not assignable to type 'number'.
``` 

<p>数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：</p>

```
let fibonacci: number[] = [1,2,3,4,5]

fibonacci.push('8')
//报错 Argument of type '"8"' is not assignable to parameter of type 'number'.
```

<p>上例中，push方法之允许传入number类型的参数，但是却传了一个string类型的参数，所以报错了。这里 "8" 是一个字符串字面量类型，会在后续章节中详细介绍</p>

#### 数组泛型
<p>我们也可以使用数组泛型Array<elemType>来表示数组</p>

```
let fibonacci: Array<number> = [1,2,3,4,5]
```
<p>关于泛型，可以参考 泛型一章</p> 

[泛型](http://ts.xcatliu.com/advanced/generics.html)

#### 用接口表示数组

<img src="@assets/ts/shuzujiekou.png"/>
<p>NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。

虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。

不过有一种情况例外，那就是它常用来表示类数组</p>

#### 类数组
<p>类数组不是数组类型，比如arguments</p>

<img src="@assets/ts/shuzuleishuzu.png"/>
<p>关于内置对象，可以参考内置对象一章</p>

[内置对象](http://ts.xcatliu.com/basics/built-in-objects.html)

#### any在数组中的应用
<p>一个比较常见的用法是，用any表示数组中允许出现任意类型</p>

<img src="@assets/ts/shuzuany.png"/>
<img src="@assets/ts/shuzuanytwo.png"/>