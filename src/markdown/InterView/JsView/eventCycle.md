### 事件循环
[事件循环](https://vue3js.cn/interview/JavaScript/event_loop.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88)

#### 一、是什么
<p>首先，js是一门单线程的语言，意味着同一时间内只能做一件事，但是这并不意味着单线程就是阻塞，而实现单线程非阻塞的方法就是事件循环</p>

<p>在js中，所有的任务都可以分为</p>

* 同步任务：理解执行的任务，同步任务一般会直接进入到主线程中执行
* 异步任务：异步执行的任务，比如ajax网络请求，setTimeout定时函数等

<p>同步任务与异步任务的运行流程图如下：</p>

<img src="@assets/mianshi/js/tongbuyibu.png"/>

<p>从上面我们可以看到，同步任务进入主线程，即主执行栈，异步任务进入任务队列，主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。上述过程的不管重复就是事件循环</p>

#### 二、宏任务与微任务

<p>如果将任务划分为同步任务和异步任务并不是那么的准确，举个例子</p>

```js
console.log(1)

setTimeout(() => {
  console.log(2)
},0)

new Promise((resolve,reject) => {
  console.log('new Proise')
  resolve()
}).then(() => {
  console.log('then')
})

console.log(3)
```

<p>如果按照上面流程图来分析代码，我们会得到下面的执行步骤</p>

* console.log(1),同步任务，主线程中执行
* setTimeout(),异步任务，放到Event Table,0毫秒后console.log(2)回调推入Evebt Queue中
* new Promise,同步任务，主线程直接执行
* .then,异步任务，放到Event Tablr
* console.log(3),同步任务，主线程执行

<p>所以按照分析，它的结果应该是，1，new Promise,3,2,then</p>

<p>但是实际结果是： 1，new Promise,3,then,2</p>

<p>出现分歧的原因在于异步任务执行顺序，事件队列其实是一个先进先出的数据结构，排在前面的事件会优先被主线程读取</p>

<p>例子中setTimeout回调是先进入队列中的，按理说应该先于.then中的执行，的女生结果却偏偏相反</p>

<p>原因在于异步任务还可以细分为微任务和宏任务</p>

##### 微任务
<p>一个需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前</p>

<p>常见的微任务有：</p>

* Promise.then
* MutaionObserver
* Object.observe(已废弃，Proxy对象替代)
* process.nextTick(Node.js)

##### 宏任务
<p>宏任务的时间粒度比较大，执行的时间间隔是不能精确控制的，对一些高时性的需求就不太符合</p>

<p>常见的宏任务有：</p>

* script(可以理解为外层同步代码)
* setTimeout/setInteval
* UI reding/UI事件
* postMessage、MessageChannel
* setImmediate、I/O(Node.js)

<p>这时候，事件循环，宏任务，微任务的关系如图所示</p>

<img src="@assets/mianshi/js/hongweirenwu.png"/>

<p>按照这个流程，它的执行机制是：</p>

* 执行一个宏任务，如果遇到微任务就将它放到微任务的事件队列中
* 当前宏任务执行完成后，会查看微任务的事件对象，然后将里面的所有微任务依次执行完

<p>上面的题目流程应该是</p>

* //遇到console.log(1),直接打印
* //遇到定时器，属于新的宏任务，留着后面执行
* //遇到new Promise，这个是直接执行的，打印'new Promise'
* //.then属于微任务，放入微任务队列，后面执行
* //遇到console.log(3)，直接执行
* 好了本轮宏任务执行完毕，现在去微任务列表查看是否有微任务，发现.then的回调，执行
* 当一次宏任务执行完，再去执行新的宏任务，这里就剩一个定时器的宏任务了，执行它，打印 2

#### 三、async与await
<p>async是异步的意思，await则可以理解为async wait.所以可以理解为async就是用来声明一个异步方法，而await是用来等待异步方法执行</p>

##### async
async函数返回一个promise对象，下面两种方法是等效的

```js
function f() {
    return Promise.resolve('TEST');
}

// asyncF is equivalent to f!
async function asyncF() {
    return 'TEST';
}
```

##### await
正常情况下，await命令后面是一个 Promise对象，返回该对象的结果。如果不是 Promise对象，就直接返回对应的值

```js
async function f(){
    // 等同于
    // return 123
    return await 123
}
f().then(v => console.log(v)) // 123
```
不管await后面跟着的是什么，await都会阻塞后面的代码

```js
async function fn1 (){
    console.log(1)
    await fn2()
    console.log(2) // 阻塞
}

async function fn2 (){
    console.log('fn2')
}

fn1()
console.log(3)
```

<p>上面的例子中，await会阻塞下面的代码(即加入微任务队列)先执行async外面的同步的代码，同步代码执行完，再回到async函数中，再执行之前阻塞的代码
</p>

<p>所以上述输出结果为：1，'fn2',3,2</p>

#### 四、流程分析
<p>通过对上面的了解，我们对js对各种场景的执行顺序有了大致的了解
</p>

<p>这里直接上代码</p>

<img src="@assets/mianshi/js/liuchengfenxi.png"/>

<p>结果：'script start' 'async1 start' 'async2' 'promise1' 'script end' 'async1 end' 'promise2' 'settimeout'</p>

<p>分析过程：</p>

1. 执行整段代码，遇到console.log('script start') 直接打印,输出script start
2. 遇到定时器，它的宏任务，先放着不执行
3. 遇到async1()，执行async1函数，先打印async1 start下面遇到await怎么办？先执行async2,打印async2,然后阻塞下面代码(即加入微任务队列)，跳出去执行同步代码
4. 跳到new Promise这里，直接执行，打印promise1,下面遇到.then().它是微任务，放到微任务列表等待执行
5. 最后一行直接打印script end，现在同步代码执行完了，开始执行微任务，即await下面的代码打印async1 end
6. 继续执行下一个微任务，即执行then的回调，打印promise2
7. 上一个宏任务所有事都做完了，开始下一个宏任务，就是定时器，打印settimeout