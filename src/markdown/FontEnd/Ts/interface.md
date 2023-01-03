### 对象的类型——接口2
[对象的类型——接口](http://ts.xcatliu.com/basics/type-of-object-interfaces.html)

<p>在TypeScript中，我们使用接口来定义对象的类型</p>

#### 什么是接口
<P>在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何实现需要由类去实现<br/>TypeScript中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对对象的形状进行描述</P>

#### 简单的例子

<img src="@assets/ts/duixiangjiekou.png"/>

<p>我们定义一个接口Person。接着定义了一个变量tom。它的类型是Person。这样，我们就约束了tom的形状必须和接口Person保持一致</p>

<p>接口一般首字母大写，有的编程语言中会建议接口的名称加上I前缀<br/>定义的变量比接口少了一些属性是不允许的，多一些属性也是不允许的</p>

#### 可选属性
<p>有时我们希望不要完全匹配一个形状，那么可以用可选属性</p>
<p>这时仍然不允许添加未定义的属性</p>

<img src="@assets/ts/duixiangleixingkexuan.png"/>

#### 任意属性
<p>有时候我们希望一个接口允许有任意的属性，可以使用如下方法</p>

<img src="@assets/ts/duixiangleixingrenyi.png"/>

<p>使用[propName: string]定义了任意属性取string类型的值</p>

<p>需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型子集</p>

<img src="@assets/ts/duixiangleixingrenyitwo.png"/>

<p>上例中，任意属性的值允许是string，但是可选属性age的值确实number，number不是string的子属下，所以报错了<br/>另外，在报错信息中可以看出，此时 { name: 'Tom', age: 25, gender: 'male' } 的类型被推断成了 { [x: string]: string | number; name: string; age: number; gender: string; }，这是联合类型和接口的结合。</p>

<p>一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型(在3.9.3中，如果同时存在任意属性、可选属性，那么任意属性的数据类型要带undefined)</p>

<img src="@assets/ts/duixiangleixingrenyithree.png"/>

#### 只读属性
<p>有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用readonly定义只读属性</p>

<img src="@assets/ts/duixiangleixingzhidu.png"/>

**注意。只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候**

<img src="@assets/ts/duixiangleixingzhidutwo.png"/>