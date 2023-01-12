### proxy
[proxy](https://vue3js.cn/interview/es6/proxy.html#%E4%B8%80%E3%80%81%E4%BB%8B%E7%BB%8D)

#### 介绍

**定义：** 用于定义基本操作的自定义行为
<br/>
**本质：** 修改的是程序默认行为，就形同于在编程语言层面上做修改，属于元编程
<p>元编程又译超编程，是指某类计算机程序的编写，这类计算机程序编写或许操纵其他程序（或者自身）作为它们的数据，或者在运行时，完成部分本应在编译时完成的工作</p>
<p>一段代码来理解</p>

```javascript
#!/bin/bash
# metaprogram
echo '#!/bin/bash' >program
for((I=1;I<=1024;I++)) do
      echo "echo $I" >>program
done
chmod +x program
```

<p>这段程序每执行一次能帮我们生成一个名为program的文件，文件内容为1024行echo，如果我们手动来写1024行代码，效率显然低效</p>

* 元编程优点：与手工编写全部代码相比，程序员可以获得更高的工作效率，或者给与程序更大的灵活度去处理新的情形而无需重新编译

<p>Proxy 亦是如此，用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）</p>

#### 用法
<p>Proxy为构造函数，用来生成Proxy实例</p>

```javascript
let proxy = new Proxy(target,handle)
```
##### 参数

* target:表示所要拦截的目标对象(任何类型的对象，包括原生数组，函数，甚至另一个代理)

* handler:通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理p的行为

##### handle解析
<p>关于handler拦截属性，有如下：</p>

* get(target,propKey,receiver):拦截对象属性的读取
* set(target,propKey,value,receiver):拦截对象属性的设置
* has(target,propKey):拦截propKey in proxy的操作，返回一个布尔值
* deleteProperty(target,propKey):拦截delete proxy[propKey]的操作，返回一个布尔值
* ownKey(target):拦截Object.keys(proxy)、for..in等循环，返回一个数组
* getOwnPropertyDesctipotor(target,propKey):拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象
* defineProperty(target,propKey,propDesc):拦截Object.defineProperty(proxy, propKey, propDesc），返回一个布尔值
* preventExensions(target):拦截Object.preventExtensions(proxy),返回一个布尔值
* getPrototypeOf(target):拦截Object.getPrototypeOf(proxy)，返回一个对象
* isExtensible(target):拦截Object.isExtendsible(proxy),返回一个布尔值
* setPrototypeOf(target,proto):拦截Object.setPrototypeOf(proxy,proto),返回一个布尔值
* apply(target,object,args):拦截Proxy实例作为函数调用的操作
* construct(target,args):拦截Proxy实例作为构造函数调用的操作

##### Reflect
<p>若需要在Proxy内部调用对象的默认行为，建议使用Reflect，其是es6中操作对象而提供的新API</p>
<p>基本特点：</p>
* 只要Proxy对象具有的代理方法，Reflect对象全部具有，以静态方法的形式存在
* 修改某些Object方法的返回结果，让其变得更合理(定义不存在属性行为的时候不报错而是返回false)
* 让Object操作都变成函数行为

<p>下面我们介绍proxy几种用法：</p>

##### get()
<p>get接受三个参数，依次为目标对象、属性和proxy实例本身，最后一个参数可选</p>

<img src="@assets/js/proxyget.png"/>
<p>get能够对数组增删改查进行拦截，下面是试下你数组读取负数的索引</p>
<img src="@assets/js/proxygetshuzu.png"/>
<p>注意：如果一个属性不可配置且不可写，则Proxy不能修改属性，否则会报错</p>

##### set()
<p>set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和Proxy实例本身</p>
<p>假定Person对象有一个age属性，该属性应该是一个不大于200的整数，那么可以使用Proxy保证age的属性值符合要求</p>
<img src="@assets/js/proxyset.png"/>
<p>如果目标对象自身的某个属性，不可写且不可配置，那么set方法将不起作用</p>
<p>注意，严格模式下，set代理没有返回true,就会报错</p>

##### deleteProperty()

<p>deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除</p>

<img src="@assets/js/proxydelete.png"/>

#### 取消代理
```javascript
Proxy.revocable(target,handler)
```