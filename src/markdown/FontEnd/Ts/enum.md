### 枚举
[枚举](http://ts.xcatliu.com/advanced/enum.html)
<p>枚举类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等</p>

#### 简单的例子
<p>枚举使用enum关键字来定义</p>

```JavaScript
enum Days {Sun,Mon,Tue,Web,Thu,Fri,Sat}
console.log(Days)
```
<img src="@assets/ts/meiju.png"/>
<p>枚举成员会被赋值从0开始递增的数字，同时也会对枚举值到枚举名进行反向映射：</p>

<img src="@assets/ts/meijutwo.png"/>
<img src="@assets/ts/meijuthree.png"/>

<p>事实上，上面的例子会被编译为</p>

```JavaScript
var Days
(function(Days){
   Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}))
```
#### 手动赋值
<p>我们也可以给枚举手动赋值</p>

```JavaScript
enum Days {Sun=7,Mon = 1,Tue,Web,Thu,Fri,Sat}

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
```
<p>上面的例子中，未手动赋值的枚举型会接着上一个枚举项递增</p>

<p>如果未手动赋值的枚举型与手动赋值的重复了，ts是不会察觉到这一点的</p>

<img src="@assets/ts/meijufour.png"/>
<p>上面的例子中，递增到3的时候与前面的Sun的取值重复了，但是ts并没有报错，导致DayTwo[3]的值先是'Sun'，而后又被"Web"覆盖了。编译的结果是：</p>

```JavaScript
var DaysTwo;
(function (DaysTwo) {
    DaysTwo[DaysTwo["Sun"] = 3] = "Sun";
    DaysTwo[DaysTwo["Mon"] = 1] = "Mon";
    DaysTwo[DaysTwo["Tue"] = 2] = "Tue";
    DaysTwo[DaysTwo["Wed"] = 3] = "Wed";
    DaysTwo[DaysTwo["Thu"] = 4] = "Thu";
    DaysTwo[DaysTwo["Fri"] = 5] = "Fri";
    DaysTwo[DaysTwo["Sat"] = 6] = "Sat";
})(DaysTwo || (DaysTwo = {}));
```
<p>所以使用的时候需要注意，最好不要出现这种覆盖的情况</p>
<p>手动赋值的枚举型可以不是数字，此时需要使用类型断言来让tsc无视类型检查（编译出来的js仍然是可用的）</p>

```JavaScript
enum Days {Sun = 7, Mon, Tue, Web, Thu, Fri, Sat = "s" as any}

var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 8] = "Mon";
    Days[Days["Tue"] = 9] = "Tue";
    Days[Days["Wed"] = 10] = "Wed";
    Days[Days["Thu"] = 11] = "Thu";
    Days[Days["Fri"] = 12] = "Fri";
    Days[Days["Sat"] = "S"] = "Sat";
})(Days || (Days = {}));
```
<p>当然手动赋值的枚举型也可以为小数或者负数，此时后续未手动赋值的项的递增步长仍未1</p>

<img src="@assets/ts/mneijufive.png"/>

#### 常数项和计算所得项
<p>枚举有两种类型：常数项和计算所得项</p>

<p>前面我们所举的例子都是常数项，一个典型的计算所得项的例子：</p>

```JavaScript
enum Color {Red, Green, Blue = "bule".length}
```
上面的例子中，"blue".length就是一个计算所得项
<p>上面的例子不会报错，但是如果<b>紧接在计算所得项后面的是未手动赋值的项，那么它就和无法获得初始值而报错</b></p>
<img src="@assets/ts/meijujisuan.png"/>

<p>下面是常数项和计算所得项的完整定义，部分引用子</p>

[中文手册——枚举](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Enums.html)
<p>当满足以下条件时，枚举成员被当作是常数：</p>

1. 不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值未上一个枚举成员的值加1.但第一个枚举元素是个例外，如果它没有初始化方法，那么它的初始值为0
2. 枚举成员使用常数枚举表达式初始化。阐述枚举表达式是ts表达式的自己，它可以在编译阶段求值，当一个表达式满足下面条件之一时，它就是一个常数枚举表达式
    >数字字面量
    >引用之前定义的常数枚举成员(可以是在不同的枚举类型中定义的)如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用
    >带括号的常数枚举表达式
    >+，-，~一元运算符一个应用于常数枚举表达式
    >+，-，*，/，%，<<，>>，>>>，&，|，^二元运算符，常数枚举表达式做为其中一个操作对象。若常数枚举表达式求值后为NaN或Infinity，则会在编译阶段报错

<p>所有其他情况的枚举成员会被当作是计算得出的值</p>

#### 常数枚举
<p>常数枚举是使用const enum定义的枚举类型</p>
<p>常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员</p>
<p>上面的编译结果是</p>

```JavaScript
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
```
<p>加入包含了计算成员，则会在编译阶段报错</p>

<img src="@assets/ts/changshumeiju.png"/>

#### 外部枚举
<p>外部枚举是使用declare enum定义的枚举类型</p>
<img src="@assets/ts/waibumeiju.png"/>
<p>之前提到过，declare 定义的类型只会用于编译时的检查，编译结果中会被删除。</p>

<p>上例的编译结果是：</p>

```
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```
外部枚举与声明语句一样，常出现在声明文件中
<p>同时使用declare和const也是可以的</p>

```JavaScript
declare const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```
编译结果：

```JavaScript
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
//目前测试这样写也会报错，原因也是编译后就会报错找不到Directions
```
