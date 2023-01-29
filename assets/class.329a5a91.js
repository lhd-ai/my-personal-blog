import{l as e,z as a,ab as c,F as i,aH as r,q as n,a8 as p,a1 as m,A as u}from"./index.55e83ec9.js";const _="/my-personal-blog/assets/es6lei.27c4db2f.png",d="/my-personal-blog/assets/es7lei.5ea8efb3.png",h=r('<h3>\u7C7B</h3><p>\u4F20\u7EDF\u65B9\u5F0F\u4E2D\uFF0CJavaScript\u901A\u8FC7\u6784\u9020\u51FD\u6570\u5B9E\u73B0\u7C7B\u7684\u6982\u5FF5\uFF0C\u901A\u8FC7\u539F\u578B\u94FE\u5B9E\u73B0\u7EE7\u627F\u3002\u800C\u5728ES6\u4E2D\uFF0C\u6211\u4EEC\u7EC8\u4E8E\u8FCE\u6765\u4E86class</p><p>TypeScript\u9664\u4E86\u5B9E\u73B0\u6240\u6709ES6\u4E2D\u7684\u7C7B\u7684\u529F\u80FD\u4EE5\u5916\uFF0C\u8FD8\u6DFB\u52A0\u4E86\u4E00\u4E9B\u65B0\u7684\u7528\u6CD5</p><p>\u8FD9\u4E00\u8282\u4E3B\u8981\u4ECB\u7ECD\u7C7B\u7684\u7528\u6CD5\uFF0C\u4E0B\u4E00\u8282\u518D\u4ECB\u7ECD\u5982\u4F55\u5B9A\u4E49\u7C7B\u7684\u7C7B\u578B</p><h4>\u7C7B\u7684\u6982\u5FF5</h4><p>\u867D\u7136JavaScript\u4E2D\u6709\u7C7B\u7684\u6982\u5FF5\uFF0C\u4F46\u662F\u5927\u591A\u6570JavaScript\u7A0B\u5E8F\u5458\u5E76\u4E0D\u662F\u975E\u5E38\u719F\u6089\u7C7B\uFF0C\u8FD9\u91CC\u5BF9\u7C7B\u76F8\u5173\u7684\u6982\u5FF5\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u4ECB\u7ECD</p><ul><li>\u7C7B\uFF1A\u5B9A\u4E49\u4E86\u4E00\u4EF6\u4E8B\u52A1\u7684\u62BD\u8C61\u7279\u70B9\uFF0C\u5305\u542B\u5B83\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</li><li>\u5BF9\u8C61\uFF1A \u7C7B\u7684\u5B9E\u4F8B\uFF0C\u901A\u8FC7new\u751F\u6210</li><li>\u9762\u5411\u5BF9\u8C61\u7684\u4E09\u5927\u7279\u6027\uFF1A \u5C01\u88C5\uFF0C\u7EE7\u627F\uFF0C\u591A\u6001</li><li>\u5C01\u88C5\uFF1A \u5C06\u5BF9\u6570\u636E\u7684\u64CD\u4F5C\u7EC6\u8282\u9690\u85CF\u8D77\u6765\uFF0C\u53EA\u66B4\u9732\u5BF9\u5916\u7684\u63A5\u53E3\u3002\u5916\u754C\u8C03\u7528\u7AEF\u4E0D\u9700\u8981\u77E5\u9053\u7EC6\u8282\uFF0C\u5C31\u80FD\u901A\u8FC7\u5BF9\u5916\u63D0\u4F9B\u7684\u63A5\u53E3\u6765\u8BBF\u95EE\u8BE5\u5BF9\u8C61\uFF0C\u540C\u65F6\u4E5F\u4FDD\u8BC1\u4E86\u5916\u754C\u65E0\u6CD5\u4EFB\u610F\u66F4\u6539\u5BF9\u8C61\u5185\u90E8\u7684\u6570\u636E</li><li>\u7EE7\u627F\uFF1A\u5B50\u7C7B\u7EE7\u627F\u7236\u7C7B\uFF0C\u5B50\u7C7B\u9664\u4E86\u62E5\u6709\u7236\u7C7B\u7684\u6240\u6709\u7279\u6027\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u66F4\u5177\u4F53\u7684\u7279\u6027</li><li>\u591A\u6001\uFF1A \u7531\u7EE7\u627F\u800C\u4EA7\u751F\u4E86\u76F8\u5173\u7684\u4E0D\u540C\u7684\u7C7B\uFF0C\u5BF9\u540C\u4E00\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u54CD\u5E94\u3002\u6BD4\u5982Cat\u548CDog\u90FD\u7EE7\u627F\u81EAAnimal\uFF0C\u4F46\u662F\u5206\u522B\u5B9E\u73B0\u4E86\u81EA\u5DF1\u7684eat\u65B9\u6CD5\u3002\u6B64\u65F6\u9488\u5BF9\u67D0\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u4E86\u89E3\u5B83\u662FCat\u8FD8\u662FDog\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528est\u65B9\u6CD5\uFF0C\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u5224\u65AD\u51FA\u6765\u5E94\u8BE5\u5982\u4F55\u6267\u884Ceat</li><li>\u5B58\u53D6\u5668\uFF1A\u7528\u4EE5\u6539\u53D8\u5C5E\u6027\u7684\u8BFB\u53D6\u548C\u8D4B\u503C\u884C\u4E3A</li><li>\u4FEE\u9970\u7B26\uFF1A\u4FEE\u9970\u7B26\u662F\u4E00\u4E9B\u5173\u952E\u5B57\uFF0C\u7528\u4E8E\u9650\u5B9A\u6210\u5458\u6216\u7C7B\u578B\u7684\u7279\u8D28\u3002\u6BD4\u5982public\u8868\u793A\u516C\u6709\u5C5E\u6027\u6216\u65B9\u6CD5</li><li>\u62BD\u8C61\u7C7B\uFF1A \u62BD\u8C61\u7C7B\u662F\u4F9B\u5176\u4ED6\u7C7B\u7EE7\u627F\u7684\u57FA\u7C7B\uFF0C\u62BD\u8C61\u7C7B\u4E0D\u5141\u8BB8\u88AB\u5B9E\u4F8B\u5316\u3002\u62BD\u8C61\u7C7B\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\u5FC5\u987B\u518D\u5B50\u7C7B\u4E2D\u88AB\u5B9E\u73B0</li><li>\u63A5\u53E3\uFF1A \u4E0D\u540C\u7C7B\u4E4B\u95F4\u516C\u6709\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u62BD\u8C61\u6210\u4E00\u4E2A\u63A5\u53E3\u3002\u63A5\u53E3\u53EF\u4EE5\u88AB\u7C7B\u5B9E\u73B0\u3002\u4E00\u4E2A\u7C7B\u53EA\u80FD\u7EE7\u627F\u81EA\u53E6\u4E00\u4E2A\u7C7B\uFF0C\u4F46\u662F\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u63A5\u53E3</li></ul><h4>ES6\u4E2D\u7C7B\u7684\u7528\u6CD5</h4><p>\u4E0B\u9762\u6211\u4EEC\u5148\u56DE\u987E\u4E00\u4E0BES6\u4E2D\u7C7B\u7684\u7528\u6CD5\uFF0C\u66F4\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u53EF\u4EE5\u53C2\u8003</p><p><a href="https://es6.ruanyifeng.com/#docs/class">ECMAScript6\u5165\u95E8-class</a></p><h5>\u5C5E\u6027\u548C\u65B9\u6CD5</h5><p>\u4F7F\u7528class\u5B9A\u4E49\u7C7B\uFF0C\u4F7F\u7528constructor\u5B9A\u4E49\u6784\u9020\u51FD\u6570</p><p>\u901A\u8FC7new\u751F\u6210\u65B0\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u8C03\u7528\u6784\u9020\u51FD\u6570</p>',13),g=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal {
  public name;
  constructor(name){
    this.name = name
  }
  sayHi(){
    return \`My name is $(this.name)
  }
}
let a = new Animal('Jack')
console.log(a.sayHi())
`)],-1),v=n("h5",null,"\u7C7B\u7684\u7EE7\u627F",-1),A=n("p",null,"\u4F7F\u7528extends\u5173\u952E\u5B57\u5B9E\u73B0\u7EE7\u627F\uFF0C\u5B50\u7C7B\u4E2D\u4F7F\u7528super\u5173\u952E\u5B57\u6765\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u548C\u65B9\u6CD5",-1),b=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Cat extends Animal {
  constructor(name){
    super(name)//\u8C03\u7528\u7236\u7C7B\u7684constructor(name)
    console.log(this.name)
  }
  saiHi(){
    return 'Meow,' + super.sayHi()//\u8C03\u7528\u7236\u7C7B\u7684sayHi
  }
}
let c = new Cat('Tom')//Tom
console.log(c.sayHi())//Meow,My name is Tom
`)],-1),y=n("h5",null,"\u5B58\u53D6\u5668",-1),S=n("p",null,"\u4F7F\u7528getter\u548Csetter\u53EF\u4EE5\u6539\u53D8\u5C5E\u6027\u7684\u8D4B\u503C\u548C\u8BFB\u53D6\u884C\u4E3A",-1),J=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal {
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
`)],-1),w=n("h5",null,"\u9759\u6001\u65B9\u6CD5",-1),C=n("p",null,"\u4F7F\u7528static\u4FEE\u9970\u7B26\u4FEE\u9970\u7684\u65B9\u6CD5\u79F0\u4E3A\u9759\u6001\u65B9\u6CD5\uFF0C\u5B83\u4EEC\u4E0D\u9700\u8981\u5B9E\u4F8B\u5316\uFF0C\u800C\u662F\u76F4\u63A5\u901A\u8FC7\u7C7B\u6765\u8C03\u7528",-1),T=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class AnimalThree {
  static isAnimal(a){
    return a instanceof Animal
  }
}
let e = new Animal('Jack')
AnimalThree.isAnimal(e)//true
e.isAnimal(e)// // TypeError: a.isAnimal is not a function
`)],-1),x=n("img",{src:_},null,-1),f=n("h4",null,"ES7\u4E2D\u7C7B\u7684\u7528\u6CD5",-1),k=n("p",null,"ES7\u4E2D\u6709\u4E00\u4E9B\u5173\u4E8E\u7C7B\u7684\u63D0\u6848\uFF0Cts\u4E5F\u5B9E\u73B0\u4E86\u5B83\u4EEC\u3002\u8FD9\u91CC\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u4ECB\u7ECD",-1),H=n("h5",null,"\u5B9E\u4F8B\u5C5E\u6027",-1),M=n("p",null,"ES6\u4E2D\u5B9E\u4F8B\u7684\u5C5E\u6027\u53EA\u80FD\u901A\u8FC7\u6784\u9020\u51FD\u6570\u4E2D\u7684this.xxx\u6765\u5B9A\u4E49\uFF0CES7\u63D0\u6848\u4E2D\u53EF\u4EE5\u76F4\u63A5\u5728\u7C7B\u91CC\u9762\u5B9A\u4E49\uFF1A",-1),E=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal {
  name = 'Jack'
  constructor(){
    //...
  }
}
let a = new Animal()
console.log(a.name)
`)],-1),$=n("h5",null,"\u9759\u6001\u5C5E\u6027",-1),D=n("p",null,"ES7\u63D0\u6848\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528static\u5B9A\u4E49\u4E00\u4E2A\u9759\u6001\u5C5E\u6027",-1),F=n("pre",null,[n("code",{"v-pre":"true"},`class AnimalFive {
  static num = 42
  constructor(){
    //...
  }
}
console.log(AnimalFive.num)
`)],-1),N=n("img",{src:d},null,-1),V=n("h4",null,"TypeScript\u4E2D\u7C7B\u7684\u7528\u6CD5",-1),P=n("h5",null,"public private\u548Cpretected",-1),B=n("p",null,"TypeScript\u53EF\u4EE5\u4F7F\u7528\u4E09\u79CD\u4FEE\u9970\u7B26\uFF0C\u5206\u522B\u662Fpublic\u3001private\u548Cprotected",-1),O=n("p",null,"\u4E0B\u9762\u4E3E\u4E00\u4E9B\u4F8B\u5B50\uFF1A",-1),j=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal{
  public name
  public constructor(name){
    this.name = name
  }
}
let a = new Animal('Jack')
console.log(a.name)
a.name = 'Tom'
console.log(a.name)
`)],-1),q=n("p",null,"\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0Cname\u88AB\u8BBE\u7F6E\u4E3A\u4E86public\uFF0C\u6240\u4EE5\u76F4\u63A5\u8BBF\u95EE\u5B9E\u4F8B\u7684name\u5C5E\u6027\u662F\u5141\u8BB8\u7684",-1),z=n("p",null,"\u5F88\u591A\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u6709\u7684\u5C5E\u6027\u662F\u65E0\u6CD5\u76F4\u63A5\u5B58\u53D6\u7684\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u7528private\u4E86",-1),I=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal {
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
`)],-1),R=n("p",null,"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CTypeScript \u7F16\u8BD1\u4E4B\u540E\u7684\u4EE3\u7801\u4E2D\uFF0C\u5E76\u6CA1\u6709\u9650\u5236 private \u5C5E\u6027\u5728\u5916\u90E8\u7684\u53EF\u8BBF\u95EE\u6027\u3002",-1),G=n("p",null,"\u4E0A\u9762\u7684\u4F8B\u5B50\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u662F\uFF1A",-1),K=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`var Animal = (function () {
  function Animal(name) {
    this.name = name;
  }
  return Animal;
})();
var a = new Animal('Jack');
console.log(a.name);
a.name = 'Tom';
`)],-1),L=n("p",null,"\u4F7F\u7528 private \u4FEE\u9970\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\uFF0C\u5728\u5B50\u7C7B\u4E2D\u4E5F\u662F\u4E0D\u5141\u8BB8\u8BBF\u95EE\u7684\uFF1A",-1),Q=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal {
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
`)],-1),U=n("p",null,"\u800C\u5982\u679C\u662F\u7528 protected \u4FEE\u9970\uFF0C\u5219\u5141\u8BB8\u5728\u5B50\u7C7B\u4E2D\u8BBF\u95EE\uFF1A",-1),W=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal {
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
`)],-1),X=n("p",null,"\u5F53\u6784\u9020\u51FD\u6570\u4FEE\u9970\u4E3A private \u65F6\uFF0C\u8BE5\u7C7B\u4E0D\u5141\u8BB8\u88AB\u7EE7\u627F\u6216\u8005\u5B9E\u4F8B\u5316\uFF1A",-1),Y=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal {
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
`)],-1),Z=n("p",null,"\u5F53\u6784\u9020\u51FD\u6570\u4FEE\u9970\u4E3A protected \u65F6\uFF0C\u8BE5\u7C7B\u53EA\u5141\u8BB8\u88AB\u7EE7\u627F\uFF1A",-1),nn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal {
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
`)],-1),en=n("h5",null,"\u53C2\u6570\u5C5E\u6027",-1),an=n("p",null,"\u4FEE\u9970\u7B26\u548Creadonly\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5728\u6784\u9020\u51FD\u6570\u53C2\u6570\u4E2D\uFF0C\u7B49\u540C\u4E8E\u7C7B\u4E2D\u5B9A\u4E49\u8BE5\u5C5E\u6027\u540C\u65F6\u7ED9\u6539\u5C5E\u6027\u8D4B\u503C\uFF0C\u4F7F\u4EE3\u7801\u66F4\u7B80\u6D01",-1),tn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal {
  //ppublic name: string
  public constructor(public name){
    //this.name
  }
}
`)],-1),sn=n("h5",null,"readonly",-1),ln=n("p",null,"\u53EA\u8BFB\u5C5E\u6027\u5173\u952E\u5B57\uFF0C\u53EA\u5141\u8BB8\u51FA\u73B0\u5728\u5C5E\u6027\u58F0\u660E\u6216\u7D22\u5F15\u7B7E\u540D\u6216\u6784\u9020\u51FD\u6570\u4E2D",-1),on=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal{
  readonly name
  public constructor(name){
    this.name = name
  }
}
let a = new Animal('Jack')
console.log(a.name)
a.name = 'Tom'

// index.ts(10,3): TS2540: Cannot assign to 'name' because it is a read-only property.
`)],-1),cn=n("p",null,"\u6CE8\u610F\u5982\u679Creadonly\u548C\u5176\u4ED6\u4FEE\u9970\u7B26\u540C\u65F6\u5B58\u5728\u7684\u5316\uFF0C\u9700\u8981\u5199\u5728\u5176\u540E\u9762",-1),rn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal{
  // public readonly name;
  public constructor(public readonly name) {
    // this.name = name;
  }
}
`)],-1),pn=n("h5",null,"\u62BD\u8C61\u7C7B",-1),mn=n("p",null,"abstract \u7528\u4E8E\u5B9A\u4E49\u62BD\u8C61\u7C7B\u548C\u5176\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\u3002",-1),un=n("p",null,"\u4EC0\u4E48\u662F\u62BD\u8C61\u7C7B\uFF1F",-1),_n=n("p",null,"\u9996\u5148\uFF0C\u62BD\u8C61\u7C7B\u662F\u4E0D\u5141\u8BB8\u88AB\u5B9E\u4F8B\u5316\u7684\uFF1A",-1),dn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

let a = new Animal('Jack');

// index.ts(9,11): error TS2511: Cannot create an instance of the abstract class 'Animal'.
`)],-1),hn=n("p",null,"\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u62BD\u8C61\u7C7B Animal\uFF0C\u5E76\u4E14\u5B9A\u4E49\u4E86\u4E00\u4E2A\u62BD\u8C61\u65B9\u6CD5 sayHi\u3002\u5728\u5B9E\u4F8B\u5316\u62BD\u8C61\u7C7B\u7684\u65F6\u5019\u62A5\u9519\u4E86\u3002",-1),gn=n("p",null,"\u5176\u6B21\uFF0C\u62BD\u8C61\u7C7B\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\u5FC5\u987B\u88AB\u5B50\u7C7B\u5B9E\u73B0\uFF1A",-1),vn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public eat() {
    console.log(\`\${this.name} is eating.\`);
  }
}

let cat = new Cat('Tom');

// index.ts(9,7): error TS2515: Non-abstract class 'Cat' does not implement inherited abstract member 'sayHi' from class 'Animal'.
`)],-1),An=n("p",null,"\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7C7B Cat \u7EE7\u627F\u4E86\u62BD\u8C61\u7C7B Animal\uFF0C\u4F46\u662F\u6CA1\u6709\u5B9E\u73B0\u62BD\u8C61\u65B9\u6CD5 sayHi\uFF0C\u6240\u4EE5\u7F16\u8BD1\u62A5\u9519\u4E86\u3002",-1),bn=n("p",null,"\u4E0B\u9762\u662F\u4E00\u4E2A\u6B63\u786E\u4F7F\u7528\u62BD\u8C61\u7C7B\u7684\u4F8B\u5B50\uFF1A",-1),yn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public sayHi() {
    console.log(\`Meow, My name is \${this.name}\`);
  }
}

let cat = new Cat('Tom');
`)],-1),Sn=n("p",null,"\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u62BD\u8C61\u65B9\u6CD5 sayHi\uFF0C\u7F16\u8BD1\u901A\u8FC7\u4E86\u3002",-1),Jn=n("p",null,"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5373\u4F7F\u662F\u62BD\u8C61\u65B9\u6CD5\uFF0CTypeScript \u7684\u7F16\u8BD1\u7ED3\u679C\u4E2D\uFF0C\u4ECD\u7136\u4F1A\u5B58\u5728\u8FD9\u4E2A\u7C7B\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u7684\u7F16\u8BD1\u7ED3\u679C\u662F\uFF1A",-1),wn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`var __extends =
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
`)],-1),Cn=n("h4",null,"\u7C7B\u7684\u7C7B\u578B",-1),Tn=n("p",null,"\u7ED9\u7C7B\u52A0\u4E0ATypeScript\u7684\u7C7B\u578B\u5F88\u7B80\u5355\uFF0C\u4E0E\u63A5\u53E3\u7C7B\u4F3C",-1),xn=n("pre",null,[n("code",{class:"language-JavaScript","v-pre":"true"},`class Animal{
  name: string
  constructor(name:string){
    this.name = name
  }
  sayHi():string{
    return \`My name is \${this.name}\`
  }
}
let a: Animal  =new Animal('Jack')
console.log(a.sayHi())//My name is Jack
`)],-1);function fn(s,l){return e(),a(i,null,[h,g,v,A,b,y,S,J,w,C,T,x,f,k,H,M,E,$,D,F,N,V,P,B,c(" * public\u4FEE\u9970\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u662F\u516C\u6709\u7684\uFF0C\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u65B9\u88AB\u8BBF\u95EE\u5230\uFF0C\u9ED8\u8BA4\u6240\u6709\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u90FD\u662Fpublic\u7684 * private\u4FEE\u9970\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u662F\u79C1\u6709\u7684\uFF0C\u4E0D\u80FD\u58F0\u660E\u5B83\u7684\u7C7B\u7684\u5916\u90E8\u8BBF\u95EE * protected\u4FEE\u9970\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u662F\u53D7\u4FDD\u62A4\u7684\uFF0C\u5B83\u548Cprivate\u7C7B\u4F3C\uFF0C\u533A\u522B\u662F\u5B83\u5728\u5B50\u7C7B\u4E2D\u4E5F\u662F\u5141\u8BB8\u88AB\u8BBF\u95EE\u7684 "),O,j,q,z,I,R,G,K,L,Q,U,W,X,Y,Z,nn,en,an,tn,sn,ln,on,cn,rn,pn,mn,un,_n,dn,hn,gn,vn,An,bn,yn,Sn,Jn,wn,Cn,Tn,xn],64)}const t={render:fn};t.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/Ts/class.md";const kn={components:{MarkDownComponent:t},setup(){}};function Hn(s,l,Mn,En,$n,Dn){const o=m("MarkDownComponent");return e(),a("article",null,[u(o)])}const Nn=p(kn,[["render",Hn]]);export{Nn as default};
