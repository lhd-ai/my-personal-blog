### 声明合并
[声明合并](http://ts.xcatliu.com/advanced/declaration-merging.html)
<p>如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型</p>

#### 函数的合并
<p>之前1学习过，我们可以使用重载定义多个函数类型</p>

```javascript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

#### 接口的合并
<p>接口中的属性在合并时会简单的合并到一个接口中</p>

```javascript
interface Alarm{
  price: number
}
interface Alarm{
  weight: number
}
```
<p>相对于</p>

```javascript
interface Alarm{
  price: number
  weight: number
}
```
<p>注意，合并的属性的类型必须是唯一的</p>

```javascript
interface Alarm{
  price:number
}
interface Alarm{
  price: number
  weight: number//虽然重复了，但是类型都是number，所以不会报错
}
```
```javascript
interface Alarm {
    price: number;
}
interface Alarm {
    price: string;  // 类型不一致，会报错
    weight: number;
}

// index.ts(5,3): error TS2403: Subsequent variable declarations must have the same type.  Variable 'price' must be of type 'number', but here has type 'string'.
```
<p>接口中方法的合并，与函数的合并不一样</p>

```javascript
interface Alarm{
  price: number
  alert(s: string): string
}
interface Alarm{
  weight: number
  alert(s: string. n: number):string
}
```
<p>相当于</p>

```javascript
interface Alarm{
  price: number
  weight: number
  alert(s: sting): string
  alert(s: string,n: number): string
}
```
#### 类的合并
类的合并与接口的合并规则一致