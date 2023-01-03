### 任意值
[任意值](http://ts.xcatliu.com/basics/any.html)
<p>任意值(Any)用来表示允许赋值为任意类型</p>

#### 什么是任意值类型
<p>如果是一个普通类型，在赋值过程中改变类型是不被允许的</p>
<p>但如果是any类型，则允许被赋值为任意类型</p>

<img src="@/assets/ts/renyizhi.png"/>

#### 任意值的属性和方法
<p>在任意值访问任何属性都是允许的：</p>
<p>也允许调用任何方法</p>

<img src="@assets/ts/renyizhifangfa.ong.png"/>

<p>可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值</p>

#### 未声明类型的变量
<p>变量如果在声明的时候，未指定其类型，那么它会被识别未任意值类型</p>

<img src="@assets/ts/renyizhitwo.png"/>