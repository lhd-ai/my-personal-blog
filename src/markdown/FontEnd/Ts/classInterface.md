### 类与接口
[类与接口](http://ts.xcatliu.com/advanced/class-and-interfaces.html)
<p>之前学习过，接口可以用于对对象的形状进行描述</p>
<p>这一章主要介绍接口的另一个用途，对类的一部分行为2进行抽象</p>

#### 类实现接口
<p>实现是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口，用implements关键字实现。这个特性大大提高了面向对象的灵活性</p>
<p>举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：</p>

<img src="@assets/ts/leiyujiekou.png"/>

<p>一个类可以实现多个接口</p>
<img src="@assets/ts/leishixianduogejiekou.png"/>
<p>上例中，Car实现了Alarm和Light接口，既可以报警也可以开车关灯</p>

#### 接口继承接口
<img src="@assets/ts/jiekoujichengjiekou.png"/>
<p>这很好理解，LightableAlarm继承了Alarm，除了拥有alert方法之外，还有两个新方法lightOn和lightOff</p>

#### 接口继承类
<p>常见的面向对象语言中，接口是不能继承类的，但是在TypeScript中确是可以的</p>
<img src="@assets/ts/jiekoujichenglei.png"/>
<p>为什么TypeScript会支持接口继承类呢？</p>
<p>实际上，当我们在声明class Point时，除了会创建一个名为Point的类之外，同时也创建一个名为Point的类型(实例的类型)</p>
<p>所以我们既可以将Point当做一个类来用（使用new Point创建它的实例)</p>
<img src="@assets/ts/jiekoulei.png"/>
<p>也可以将Point当做一个类型来用(使用:Point表示参数的类型)</p>
<img src="@assets/ts/jiekouleitwo.png"/>
<p>这个例子实际上可以等价于：</p>

```JavaScript
class Point{
  x: number
  y: number
  constructor(x:number, y: number){
    this.x = x
    this.y = y
  }
}
interface PointInstanceType{
  x: number
  y: number
}
function printPoint(p: PointInstanceType){
  console.log(p.x,p.y)
}
printPoint(new Point(1, 2));
```
<p>上例中我们新声明的PointInstanceType类型，与声明class Point时创建的Point类型是等价的</p>
<p>所以回到Point3d的例子中，我们就能很容易的理解为什么TypeScript会支持接口继承类了</p>

```JavaScript
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface PointInstanceType {
    x: number;
    y: number;
}

// 等价于 interface Point3d extends PointInstanceType
interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```
<p>当我们声明interface Point3d extend Point时，Point3d继承的实际上是类Point的实例的类型</p>
<p>换句话说，可以理解为定义了一个接口Point3d继承另一个接口PointInsatnceType</p>
<p>所以，接口继承类和接口继承接口没有什么本质的区别</p>
<p>值得注意的是，PointInstanceType相比于Point，缺少了constructor方法，这时因为声明Point类时创建的Point类型是不包含构造函数的。另外，除了构造函数是不包含的，静态属性或静态方法也是不包含的(实例的类型当然不应该包括构造函数、静态属性、或静态方法)</p>
<p>话句话说，声明Point类时创建的Point类型只包含其中的实例属性和实例方法</p>
<img src="@assets/ts/jiekouleithree.png"/>
<p>上例中最后的类型Point和类型PointInstanceType的等价的</p>
<p>同样的，在接口继承类的时候，也只会继承它的实例属性和实例方法</p>