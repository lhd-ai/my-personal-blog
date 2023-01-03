### 联合类型
[联合类型](http://ts.xcatliu.com/basics/union-types.html)
<p>联合类型表示可以取值为多种类型中的一种</p>

#### 简单的例子
<img src="@assets/ts/lianheleixing.png"/>

<p>联合类型使用 | 分隔每个类型<br/>这里的let myFavoriteNumber: string | number的含义是，允许myFavoriteNumber的类型是string或者number，但是不能是其他类型</p>

#### 访问联合类型的属性和方法
<p>当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，，<b>我们只能访问此联合类型的所有类型里共有的属性或方法</b></p>

<img src="@assets/ts/lianheleixingtwo.png"/>

<p>联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型</p>
<img src="@assets/ts/lianheleixingtuiduan.png"/>

<p>上例中，第二行的myFavoriteNumberThree被推断成了string,访问它的length属性不会报错</p>
<p>而第四行的mmyFavoriteNumberThree被推断成了number，访问它的lenth属性时就报错了</p>