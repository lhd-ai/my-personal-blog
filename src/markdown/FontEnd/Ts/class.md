### 类
<p>传统方式中，JavaScript通过构造函数实现类的概念，通过原型链实现继承。而在ES6中，我们终于迎来了class</p>

<p>TypeScript除了实现所有ES6中的类的功能以外，还添加了一些新的用法</p>

<p>这一节主要介绍类的用法，下一节再介绍如何定义类的类型</p>

#### 类的概念
<p>虽然JavaScript中有类的概念，但是大多数JavaScript程序员并不是非常熟悉类，这里对类相关的概念做一个简单的介绍</p>
* 类：定义了一件事务的抽象特点，包含它的属性和方法
* 对象： 类的实例，通过new生成
* 面向对象的三大特性： 封装，继承，多态
* 封装： 将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
* 继承：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
* 多态： 由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如Cat和Dog都继承自Animal，但是分别实现了自己的eat方法。此时针对某一个实例，我们不需要了解它是Cat还是Dog，就可以直接调用est方法，程序会自动判断出来应该如何执行eat
* 存取器：用以改变属性的读取和赋值行为
* 修饰符：修饰符是一些关键字，用于限定成员或类型的特质。比如public表示公有属性或方法
* 抽象类： 抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须再子类中被实现
* 接口： 不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现。一个类只能继承自另一个类，但是可以实现多个接口

#### ES6中类的用法
<p>下面我们先回顾一下ES6中类的用法，更详细的介绍可以参考</p>

[ECMAScript6入门-class](https://es6.ruanyifeng.com/#docs/class)
##### 属性和方法
使用class定义类，使用constructor定义构造函数
<p>通过new生成新实例的时候，会自动调用构造函数</p>

```JavaScript
class Animal {
  public name;
  constructor(name){
    this.name = name
  }
  sayHi(){
    return `My name is $(this.name)
  }
}
let a = new Animal('Jack')
console.log(a.sayHi())
```

##### 类的继承
<p>使用extends关键字实现继承，子类中使用super关键字来调用父类的构造函数和方法</p>

```JavaScript
class Cat extends Animal {
  constructor(name){
    super(name)//调用父类的constructor(name)
    console.log(this.name)
  }
  saiHi(){
    return 'Meow,' + super.sayHi()//调用父类的sayHi
  }
}
let c = new Cat('Tom')//Tom
console.log(c.sayHi())//Meow,My name is Tom
```
##### 存取器
<p>使用getter和setter可以改变属性的赋值和读取行为</p>

```JavaScript
class Animal {
  constructor(name){
    this.name = name
  }
  get name(){
    return "Jack"
  }
  set name(value){
    console.log('setter' + value)
  }
}

let d = new Animal('kitty')//'setter': kitty
d.name = 'Tom'; // setter: Tom
console.log(d.name); // Jack
```
##### 静态方法
<p>使用static修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用</p>

```JavaScript
class AnimalThree {
  static isAnimal(a){
    return a instanceof Animal
  }
}
let e = new Animal('Jack')
AnimalThree.isAnimal(e)//true
e.isAnimal(e)// // TypeError: a.isAnimal is not a function
```

<img src="@assets/ts/es6lei.png"/>

#### ES7中类的用法
<p>ES7中有一些关于类的提案，ts也实现了它们。这里做一个简单的介绍</p>

##### 实例属性
<p>ES6中实例的属性只能通过构造函数中的this.xxx来定义，ES7提案中可以直接在类里面定义：</p>

```JavaScript
class Animal {
  name = 'Jack'
  constructor(){
    //...
  }
}
let a = new Animal()
console.log(a.name)
```

##### 静态属性
<p>ES7提案中，可以使用static定义一个静态属性</p>

```
class AnimalFive {
  static num = 42
  constructor(){
    //...
  }
}
console.log(AnimalFive.num)
```
<img src="@assets/ts/es7lei.png"/>

#### TypeScript中类的用法

##### public private和pretected
<p>TypeScript可以使用三种修饰符，分别是public、private和protected</p>
* public修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public的
* private修饰的属性或方法是私有的，不能声明它的类的外部访问
* protected修饰的属性或方法是受保护的，它和private类似，区别是它在子类中也是允许被访问的
<p>下面举一些例子：</p>

```JavaScript
class Animal{
  public name
  public constructor(name){
    this.name = name
  }
}
let a = new Animal('Jack')
console.log(a.name)
a.name = 'Tom'
console.log(a.name)
```

<p>上面的例子中，name被设置为了public，所以直接访问实例的name属性是允许的</p>
<p>很多时候，我们希望有的属性是无法直接存取的，这时候就可以用private了</p>

```JavaScript
class Animal {
  private name
  public constructor(name){
    this.name = name
  }
}
let a = new Animal('Jack');
console.log(a.name);
a.name = 'Tom';
// index.ts(9,13): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
// index.ts(10,1): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
```
需要注意的是，TypeScript 编译之后的代码中，并没有限制 private 属性在外部的可访问性。

上面的例子编译后的代码是：

```JavaScript
var Animal = (function () {
  function Animal(name) {
    this.name = name;
  }
  return Animal;
})();
var a = new Animal('Jack');
console.log(a.name);
a.name = 'Tom';
```
使用 private 修饰的属性或方法，在子类中也是不允许访问的：

```JavaScript
class Animal {
  private name;
  public constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}

// index.ts(11,17): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
```
而如果是用 protected 修饰，则允许在子类中访问：

```JavaScript
class Animal {
  protected name;
  public constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}
```
当构造函数修饰为 private 时，该类不允许被继承或者实例化：

```JavaScript
class Animal {
  public name;
  private constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

let a = new Animal('Jack');

// index.ts(7,19): TS2675: Cannot extend a class 'Animal'. Class constructor is marked as private.
// index.ts(13,9): TS2673: Constructor of class 'Animal' is private and only accessible within the class declaration.
```
当构造函数修饰为 protected 时，该类只允许被继承：

```JavaScript
class Animal {
  public name;
  protected constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

let a = new Animal('Jack');

// index.ts(13,9): TS2674: Constructor of class 'Animal' is protected and only accessible within 
```


##### 参数属性
<P>修饰符和readonly还可以使用在构造函数参数中，等同于类中定义该属性同时给改属性赋值，使代码更简洁</P>

```JavaScript
class Animal {
  //ppublic name: string
  public constructor(public name){
    //this.name
  }
}
```
##### readonly
<p>只读属性关键字，只允许出现在属性声明或索引签名或构造函数中</p>

```JavaScript
class Animal{
  readonly name
  public constructor(name){
    this.name = name
  }
}
let a = new Animal('Jack')
console.log(a.name)
a.name = 'Tom'

// index.ts(10,3): TS2540: Cannot assign to 'name' because it is a read-only property.
```
<p>注意如果readonly和其他修饰符同时存在的化，需要写在其后面</p>

```JavaScript
class Animal{
  // public readonly name;
  public constructor(public readonly name) {
    // this.name = name;
  }
}
```
##### 抽象类
<p>abstract 用于定义抽象类和其中的抽象方法。</p>

<p>什么是抽象类？</p>

<p>首先，抽象类是不允许被实例化的：</p>

```JavaScript
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

let a = new Animal('Jack');

// index.ts(9,11): error TS2511: Cannot create an instance of the abstract class 'Animal'.
```

<p>上面的例子中，我们定义了一个抽象类 Animal，并且定义了一个抽象方法 sayHi。在实例化抽象类的时候报错了。</p>

<p>其次，抽象类中的抽象方法必须被子类实现：</p>

```JavaScript
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public eat() {
    console.log(`${this.name} is eating.`);
  }
}

let cat = new Cat('Tom');

// index.ts(9,7): error TS2515: Non-abstract class 'Cat' does not implement inherited abstract member 'sayHi' from class 'Animal'.
```
<p>上面的例子中，我们定义了一个类 Cat 继承了抽象类 Animal，但是没有实现抽象方法 sayHi，所以编译报错了。</p>

<p>下面是一个正确使用抽象类的例子：</p>

```JavaScript
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}

let cat = new Cat('Tom');
```
<p>上面的例子中，我们实现了抽象方法 sayHi，编译通过了。</p>

<p>需要注意的是，即使是抽象方法，TypeScript 的编译结果中，仍然会存在这个类，上面的代码的编译结果是：</p>

```JavaScript
var __extends =
  (this && this.__extends) ||
  function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var Animal = (function () {
  function Animal(name) {
    this.name = name;
  }
  return Animal;
})();
var Cat = (function (_super) {
  __extends(Cat, _super);
  function Cat() {
    _super.apply(this, arguments);
  }
  Cat.prototype.sayHi = function () {
    console.log('Meow, My name is ' + this.name);
  };
  return Cat;
})(Animal);
var cat = new Cat('Tom');
```

#### 类的类型
<p>给类加上TypeScript的类型很简单，与接口类似</p>

```JavaScript
class Animal{
  name: string
  constructor(name:string){
    this.name = name
  }
  sayHi():string{
    return `My name is ${this.name}`
  }
}
let a: Animal  =new Animal('Jack')
console.log(a.sayHi())//My name is Jack
```