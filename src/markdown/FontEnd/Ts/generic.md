### 泛型
[泛型](http://ts.xcatliu.com/advanced/generics.html)

<p>泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性</p>

#### 简单的例子
<p>首先，我们来实现一个函数createArray,它可以创建一个指定长度的数组，同时将每一项都填充一个默认值</p>

<img src="@assets/ts/fanxing.png"/>
<P>上例中，我们使用了之前提到过的数组泛型来定义返回值的类型</P>
<p>这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型</p>
<p>Array\<\any\>\允许数组的每一项都为任意类型。但我们预期的是，数组的每一项都应该是输入的value的类型</p>
<p>这时候，泛型就派上用场了</p>

<img src="@assets/ts/fanxingtwo.png"/>
<p>上例中，我们在函数名后添加了《T》其中T用来指代任意输入的类型，在后面的输入value: T和输出Array<t>中即可使用了</p>
<p>接着在调用的时候，可以指定它具体的类型为 string。当然，也可以不手动指定，而让类型推论自动推算出来：</p>

```JavaScript
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```

#### 多个类型参数
<p>定义泛型的时候,可以一次定义多个类型参数</p>
<img src="@assets/ts/fanxingthree.png"/>
<p>上例中,我们定义了一个swap函数,用交换输入的元组</p>

#### 泛型约束
<p>在函数内部使用泛型变量的时候,由于事先不知道它是哪种类型,所以不能随意的操作它的属性或方法</p>
<img src="@assets/ts/fanxingyuesu.png"/>
<p>上例中,泛型T不一定包含属性length,所以编译的时候报错了</p>
<p>这时,我们可以对泛型进行约束,只允许这个函数传入那些包含length属性的变量这就是泛型约束</p>
<img src="@assets/ts/fanxingyuesutwo.png"/>
<p>上例中,我们使用了extends约束了泛型T必须符合接口Lengthwise的形状,也就是必须包含length属性</p>
<p>此时如果调用genericConstraints的时候,传入的arg不包含length,那么在编译阶段就会报错</p>

#### 多个类型参数之间也可以互相约束
<img src="@assets/ts/fanxingduogecanshuyuesu.png"/>
<p>上例中,我们使用了两个类型参数,其中要求T继承U,这样就保证了U上不会出现T中不存在的字段</p>

#### 泛型接口
<p>之前学习过,可以使用接口的方式来定义一个函数需要符合的形状</p>

```JavaScript
interface SearchFunc {
  (source: string,subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```
<p>当然也可以使用含有泛型的接口来定义函数的形状</p>

```JavaScript
interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```
<p>进一步,我们可以把泛型参数提取到接口名上</p>
<img src="@assets/ts/fanxingjiekou.png"/>
<p><b>注意,此时在使用泛型接口的时候,需要定义泛型的类型</b></p>

#### 泛型类
暂定

#### 泛型参数的默认类型
<p>在ts2.3之后,我们可以为泛型中的类型参数指定默认类型.当使用泛型时没有在代码中直接指定类型参数,从实际值参数中也无法推测出时,这个默认类型就会起作用</p>

```JavaScript
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
```