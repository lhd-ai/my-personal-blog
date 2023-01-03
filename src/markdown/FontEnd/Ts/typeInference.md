### 类型推论
[类型推论](http://ts.xcatliu.com/basics/type-inference.html)

<p>如果没有明确的指定类型，那么TypeScript会依照类型推论的规则推断出一个类型</p>

#### 什么是类型推论
<p>以下代码虽然没有指定类型，但是会在编译的时候报错</p>

<img src="@assets/Ts/leixingtuilun.png"/>
<p>TypeScript会在没有明确的指定类型的时候推测出一个类型，这就是类型推论</p>

#### 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型而完全不被类型检查

<img src="@assets/ts/leixingtuiluntwo.png"/>
