### 类型断言
[类型断言](http://ts.xcatliu.com/basics/type-assertion.html)
<p>类型断言可以用来手动指定一个值的类型</p>

#### 语法

<p>值 as 类型</p>

或

<p><类型>值</p>
<p>在tsx语法（React的jsx语法的ts版)中必须使用前者，即值as类型</p>
<p>形如<Foo>的语法在tsx中表示的是一个ReactNode，在ts中出来表示类型断言之外，也可能是表示一个泛型<br/>故建议大家在使用类型断言时，统一使用值 as 类型这样的语法，本书中也会贯彻这一思想</p>

#### 类型断言的用处
<p>类型断言的常见用途有以下几种：</p>

##### 将一个联合类型断言为其中一个类型
<p>之前讲过，当ts不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法</p>

<img src="@assets/ts/leixingduanyan1.png"/>
<p>而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法比如</p>
<img src="@assets/ts/leixingduanyan2.png"/>
<p>上面的例子中，获取animal.swim的时候会报错</p>

<p>此时可以使用类型断言，将animal断言成Fish</p>
<img src="@assets/ts/leixingduanyan3.png"/>

<p>这样就可以解决访问animal.swim时报错的问题了</p>

<p>需要注意的是，类型断言只能够欺骗ts编辑器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误</p>
<img src="@assets/ts/leixingduanyan4.png"/>

<p>上面的例子编译时不会报错，但在运行时会报错，原因是(animal As Finsh).swim这段代码隐藏了animal可能为Cat的情况，将animal直接断言为了Fish了，而ts编译器信任了我们的断言，故在调用swim()时没有编译错误<br/>可是swim函数接受的参数是Cat | Finsh,一旦传入的参数是Cat类型的变量，由于Cat上没有swim方法，就会导致运行时错误了</p>

<p>总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误</p>

##### 将一个父类断言为更加具体的子类
<P>当类之间有继承关系时，类型断言也是很常见的</P>
<img src="@assets/ts/leiduanyan.png"/>
<p>上面的例子中，我们声明了函数isApiError，它用来判断传入的参数是不是ApiError类型，伪类实现这样一个函数，它的参数的类型肯定得时比较抽象的父类Error，这样的话这个函数就能接受Error或它的子类作为参数了</p>
<p>但是由于父类Error中没有code属性，故直接获取error.code会报错，需要使用类型断言获取(error as ApiError).code</p>
<p>大家可能会注意到，在这个例子中有一个更合适的方式来判断是不是ApiError，那就是使用instanceof</p>

```JavaScript
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
```
<p>上面的例子中，确实使用instanceof更加合适，因为ApiError是一个JavaScript的类，能够通过instanceof来判断error是否是它的实例</p>

<p>但是有的情况下ApiError和HttpError不是一个真正的类，而只是一个Ts的接口，接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用instanceof来做运行时判断了：</p>

```JavaScript
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}

// index.ts:9:26 - error TS2693: 'ApiError' only refers to a type, but is being used as a value here.
```
此时就只能用类型断言，通过判断是否存在 code 属性，来判断传入的参数是不是 ApiError 了：

```JavaScript
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
```

##### 将任何一个类型断言为any
<p>理想情况下，TypeScript的类型系统运转良好，每个值的类型都具体而精确</p>
<p>当我们引用一个在此类型上不存在的属性或方法时，就会报错</p>

```JavaScript
const foo: number = 1
foo.length//报错 index.ts:2:5 - error TS2339: Property 'length' does not exist on type 'number'.
```
<p>上面的例子中，数字类型的变量foo上是没有length属性的，故TypeScript给出了相应的错误提交</p>
<p>这种错误提示显然是非常有用的<br/>但有的时候，我们非常确定这段代码不会出错，比如下面这个例子</p>

```JavaScript
window.foo = 1
```
<p>上面的例子中，我们需要将window上添加一个属性foo，但ts编译会报错提示我们window上不存在foo属性</p>
<p>此时我们可以使用 as any临时将window断言为any类型</p>

```JavaScript
(window as any).foo =1
```
<p>在any类型的变量上，访问任何属性都是允许的</p>
<p>需要注意的是，将一个变量断言为any可以说是解决ts中类型问题的最后一个手断</p>
<P><b>它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要用as any</b></P>

<p>上面的例子中，我们也可以通过扩展window的类型解决这个问题，不过如果只是临时的增加foo属性，as any会更加方便</p>

<p>总之，一方面不能滥用as any。而另一方面也不要完全否认它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡(这也是ts的设计理念职业)才能发挥出ts最大的价值</p>

##### 将any断言为一个具体的类型
<p>在日常的开发中，我们不可避免的需要处理any类型的变量，它们可能是由于第三方库未能定义好自己的类型，也有可能是历史遗留的或其他人编写的烂代码，还可能是受到ts类型系统的限制而无法精确定义类型的场景</p>

<p>遇到any类型的变量时，我们可以选中无视它，任由它滋生更多的any</p>

<p>我们也可以选择改进它，通过类型断言及时的把any断言为精确的类型，亡羊补牢，使我们的代码向着高可维护性的目标发展</p>

<p>举例来说，历史遗留的代码中有个getCacheData,它的返回值是any</p>

```JavaScript
funcyion getCacheData(key: string): any{
  return(window as any).cache[key]
}
```
<p>那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作</p>

```JavaScript
function getCacheData(key: string): any{
  return (window as any).cache[key]
}
interface Cat {
  name: string
  run(): void
}
const tom = getCacheData('tom') as Cat
tom.run()
```
<p>上面的例子中，我们调用完getCacheData之后，立即将它断言为Cat类型。这样的化明确了tom的类型，后续对tom的访问时就有了代码补全，提高了代码的可维护性</p>

#### 类型断言的限制
从上面的例子中，我们可以总结出：
* 联合类型可以被断言为其中一个类型
* 父类可以被断言为子类
* 任何类型都可以被断言为子类
* any可以被断言为任何类型
<p>那么类型断言有没有什么限制呢？是不是任何一个类型都可以被断言为任何另一个类型呢？</p>
<p>答案是否定的————并不是任何一个类型都可以被断言为任何另一个类型</p>
<p>具体来说，若A兼容B，那么A能够被断言为B，B也能被断言为A</p>
<p>下面我们通过一个简化的例子，来理解类型断言的限制</p>
<img src="@assets/ts/leixingduanyanxianzhi.png"/>

<p>我们知道，ts是结构类型系统，类型之间的对比只会比较它们最终的结构，而会忽略它们定义时的关系</p>
<p>在上面的例子中，Cat包含了Animal中的所有属性，除此之外，它还有一个额外的方法run。ts并不关心Cat和Animal之间定义时是什么关系，而只会看它们最终的结构有什么关系——所以它与Cat extends Animal是等价的</p>

```JavaScript
interface Animal {
  name: string
}
interface Cat extends Animal{
  run():void
}
```
<p>那么也不难理解为什么Cat类型的tom可以赋值给Animal类型的animal了就像面向对象编程中我们可以将子类的实例赋值给类型为父类的变量</p>
<p>我们把它换成ts中更专业的说法，即Animal兼容Cat</p>
<p>当Animal兼容Cat时，它们就可以互相进行类型断言了</p>

```JavaScript
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

function testAnimal(animal: Animal) {
    return (animal as Cat);
}
function testCat(cat: Cat) {
    return (cat as Animal);
}
```
<p>这样的设计其实也很容易就能理解：</p>

* 允许 animal as Cat 是因为「父类可以被断言为子类」，这个前面已经学习过了
* 允许 cat as Animal 是因为既然子类拥有父类的属性和方法，那么被断言为父类，获取父类的属性、调用父类的方法，就不会有任何问题，故「子类可以被断言为父类」
<p>需要注意的是，这里我们使用了简化的父类子类的关系来表达类型的兼容性，而实际上 TypeScript 在判断类型的兼容性时，比这种情况复杂很多，详细请参考[类型的兼容性（TODO)][]章节。</p>

<p>总之，若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A。</p>

<p>同理，若 B 兼容 A，那么 A 能够被断言为 B，B 也能被断言为 A。</p>

<p>所以这也可以换一种说法：</p>

<p>要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可，这也是为了在类型断言时的安全考虑，毕竟毫无根据的断言是非常危险的。</p>

<p>综上所述：</p>

* 联合类型可以被断言为其中一个类型
* 父类可以被断言为子类
* 任何类型都可以被断言为 any
* any 可以被断言为任何类型
* 要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可

<p>其实前四种情况都是最后一个的特例。</p>

#### 双重断言
既然
* 任何类型都可以被断言为any
* any可以被断言为任何类型
<p>那么我们是不是肯使用双重断言as any as Foo来将任何一个类型断言为任何另一个类型呢？</p>

```JavaScript
interface Cat {
  run(): void
}
interface Fish {
  swim(): void
}
function testCat(cat: Cat){
  return (cat as any as Fish)
}
```
<p>在上面的例子中，若直接使用 cat as Fish 肯定会报错，因为 Cat 和 Fish 互相都不兼容。</p>

<p>但是若使用双重断言，则可以打破「要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可」的限制，将任何一个类型断言为任何另一个类型。</p>

<p>若你使用了这种双重断言，那么十有八九是非常错误的，它很可能会导致运行时错误。</p>

<p>除非迫不得已，千万别用双重断言。</p>

#### 类型断言 vs 类型转换
<p>类型断言只会影响ts编译时的类型，类型断言在编译结果中会被删除</p>

```JavaScript
function toBoolean(sonmething: any):boolean{
  return something as boolean
}
toBoolean(1)//返回值为1
```
<p>在上面的例子中，将something断言为boolean虽然可以通过编译，但是并没有什么用，代码在编译后会变成</p>

```JavaScript
function toBoolean(something){
  return something
}
toBoolean(1)//返回1
```
<p>所以类型断言不是类型转换，它不会真的影响到变量的类型</p>
<p>若要进行类型转换。需要直接调用类型转换的方法</p>

```JavaScript
function toBoolean(something: any):boolean{
  return Boolean(something)
}
toBoolean(1)//返回值为true
```

#### 类型断言 vs类型声明
在这个例子中：

```JavaScript
function getCacheData(key: string): any{
  return (window as any).cache[key]
}
interface Cat {
  name: string
  run(): void
}
const tom = getCacheData('tom') as Cat
tom.run()
```
<p>我们使用as Cat将any类型断言为了Cat类型</p>
<p>但实际上还有其他方式可以解决这个问题</p>

```JavaScript
function getCacheData(key: string): any{
  return (window as any).cache[key]
}
interface Cat{
  name: string
  run(): void
}
const tom: Cat = getCacheData('tom')
tom.run()
```
<p>上面的例子中，我们通过类型声明的方式，将tom声明为Cat,然后再将any类型的getCacheData('tom')赋值给Cat类型的tom</p>
<p>这和类型断言是非常相似的，而且产生的结果也几乎是一样的——tom在接下来的代码中都变成了Cat类型</p>
<p>它们的区别，可以通过这个例子理解</p>

```JavaScript
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal: Animal = {
    name: 'tom'
};
let tom = animal as Cat;
```
<p>在上面的例子中，由于Animal兼容Cat，故可以将animal断言为Cat赋值给tom</p>

<p>但是若直接声明tom为Cat类型</p>

```JavaScript
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal: Animal = {
    name: 'tom'
};
let tom: Cat = animal;
// index.ts:12:5 - error TS2741: Property 'run' is missing in type 'Animal' but required in type 'Cat'.
```
<p>则会报错，不允许将 animal 赋值为 Cat 类型的 tom。</p>

<p>这很容易理解，Animal 可以看作是 Cat 的父类，当然不能将父类的实例赋值给类型为子类的变量。</p>

<p>深入的讲，它们的核心区别就在于：</p>

* animal 断言为 Cat，只需要满足 Animal 兼容 Cat 或 Cat 兼容 Animal 即可
* animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行
<p>但是 Cat 并不兼容 Animal。</p>

<p>而在前一个例子中，由于 getCacheData('tom') 是 any 类型，any 兼容 Cat，Cat 也兼容 any，故</p>

```JavaScript
const tom = getCacheData('tom') as Cat;
```
等价于

```JavaScript
const tom: Cat = getCacheData('tom');
```
知道了它们的核心区别，就知道了类型声明是比类型断言更加严格的。

所以为了增加代码的质量，我们最好优先使用类型声明，这也比类型断言的 as 语法更加优雅。

#### 类型断言 vs 泛型
<p>还是这个例子</p>

```JavaScript
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();
```
我们还有第三种方式可以解决这个问题，那就是泛型：

```JavaScript
function getCacheData<T>(key: string): T {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData<Cat>('tom');
tom.run();
```
通过给 getCacheData 函数添加了一个泛型 <T>，我们可以更加规范的实现对 getCacheData 返回值的约束，这也同时去除掉了代码中的 any，是最优的一个解决方案
