### 函数的类型
[函数的类型](http://ts.xcatliu.com/basics/type-of-function.html)

<font color="blue">函数是JavaScript中的一等公民</font>

#### 函数声明
<p>在JavaScript中，有两种常见的定义函数的方式——函数声明和函数表达式</p>

<img src="@assets/ts/hanshushengming.png"/>

<p>一个函数有输入和输出，要在TypeScript中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义比较简单</p>

```JavaScript
function sum(x:number,y:number): number{
  return x + y
}
```
注意，**输入多余的（或者少于要求的）参数，是不被允许的**

```JavaScript
funtion sum(x: number, y: number):number{
  return x + y
}

sum(1)//报错
sum(1,2,3)//报错
```

#### 函数表达式
<p>如果要我们限制写一个对函数表达式的定义，可能会写成这样</p>

```JavaScript
let mySum = function(x: number,y: number):number{
  return x + y
}
```
<p>这是可以编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号右边的mySum是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给mySum添加类型，则应该这样：</p>

```JavaScript
let mySum: (x: number,y: number) => number = function(x: number, y: number):number{
  return x + y
}
```
<p>注意不要混淆了TypeScript中的=>和es6中的=><br/>在ts的类型定义中,=>用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型<br/>在es6中，=>叫做箭头函数，应用十分广泛</p>

#### 用接口定义函数的形状
<p>我们也可以使用接口的方式来定义一个函数需要符合的形状：</p>

<img src="@assets/ts/hanshujiekou.png"/>

<p>采用寒素表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变</p>

#### 可选参数
<p>前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？</p>
<p>与接口中的可选属性类似，我们用?表示可选的参数：</p>

<p>需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了</p>

<img src="@assets/ts/hanshukexuan.png"/>

#### 参数默认值
<p>在es6中，我们允许给函数添加默认值，TypeScriupt会将添加了默认值的参数识别为可选参数<br/>此时就不受可选参数必须接在必选参数后面的限制了</p>
<img src="@assets/ts/hanshumoren.png"/>

#### 剩余参数
<p>ES6中，可以使用...rest的方式获取函数中的剩余参数</p>

```JavaScript
function push(array,...items){
  items.forEach((item) => {
    arr.push(item)
  })
}
let aL any[] = []
push(a,1,2,3)
```
<p>事实上，items是一个数组。所以我们可以用数组的类型来定义它</p>

<img src="@assets/ts/hanshushengyu.png"/>
<p>注意。rest参数只能是最后一个参数</p>

#### 重载
<p>重载允许一个函数接受不同数量或类型的参数时，作出不同的处理</p>
<p>比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。

<br/>利用联合类型，我们可以这么实现：</p>
<img src="@assets/ts/hanshuchongzai.png"/>

<p><b>然而这样有一个缺点，就是不能够精确的表达，输入数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串</b></p>

<p>这时，我们可以使用重载定义多个reverse的函数类型</p>
<img src="@assets/ts/hanshuchongzaitwo.png"/>
<p>上例中，我们重复定义了多次函数reverse，前几次都是函数定义，最后依次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示</p>
<p>注意，ts会优先从最前面的函数定义开始匹配，所以多个函数定义如果包含关系，需要优先把精确的定义写在前面</p>