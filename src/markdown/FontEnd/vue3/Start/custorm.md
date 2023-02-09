### 自定义指令
[自定义指令](https://v3-migration.vuejs.org/zh/breaking-changes/custom-directives.html)

#### 概览
<p>指令的钩子函数已经被重命名，以更好地与组件的生命周期保持一致</p>

<p>额外地，expression字符串不再作为binding对象的一部分被传入</p>

#### vue2自定义指令
<p>除了核心功能默认的指令(v-model和v-show),Vue也允许注册自定义指令。注意，在vue2.0中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通DOM元素进行底层操作，这时候就会用到自定义指令</p>

##### 全局注册

```js
Vue.directive('focus',{
  inserted:function(el){
    //聚焦元素
    el.focus()
  }
})
```

##### 局部注册
<p>如果想注册局部指令，组件中也接受一个 directives 的选项</p>

```js
directive: {
  focus: {
    //之类的定义
    inserted: function(el){
      el.focus()
    }
  }
}
```
<p>然后你可以在模板中任何元素上使用新的 v-focus property，如下：</p>

```js
<input v-focus>
```

##### 钩子函数
<p>一个指令定义对象可以提供如下几个钩子函数(均为可选)</p>

* bind: 只调用一次，指令第一次被绑定到元素时调用。在这里可以进行一次性的初始化操作
* inserted: 被绑定元素插入父节点时调用。（仅保证父节点存在，但不一定已被插入文档中）
* update: 所在组件的VNode更新时调用，**但是可能在其子VNode更新之前。** 指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
* componentUpdate: 指令所在组件的VNode及其子VNode全部更新后调用
* unbind:只调用一次，指令与元素解绑时调用
  
##### 钩子函数参数

<p>指令钩子函数会被传入以下参数：</p>

* el：指令所绑定的元素，可以用来直接操作 DOM。
* binding：一个对象，包含以下 property：

  1.name：指令名，不包括 v- 前缀。

  2.value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。

  3.oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。

  4.expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。

  5.arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。

  6.modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
* vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
* oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
  
##### 动态指令参数
指令的参数可以是动态的。例如，在 v-mydirective:[argument]="value" 中，argument 参数可以根据组件实例数据进行更新！这使得自定义指令可以在应用中被灵活使用。

例如你想要创建一个自定义指令，用来通过固定布局将元素固定在页面上。我们可以像这样创建一个通过指令值来更新竖直位置像素值的自定义指令：

```js
<div id="baseexample">
  <p>Scroll down the page</p>
  <p v-pin="200">Stick me 200px from the top of the page</p>
</div>
Vue.directive('pin', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    el.style.top = binding.value + 'px'
  }
})

new Vue({
  el: '#baseexample'
})
```

#### vue3自定义指令

<p>除了 Vue 内置的一系列指令 (比如 v-model 或 v-show) 之外，Vue 还允许你注册自定义的指令 (Custom Directives)。</p>

<p>我们已经介绍了两种在 Vue 中重用代码的方式：组件和组合式函数。组件是主要的构建模块，而组合式函数则侧重于有状态的逻辑。另一方面，自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。

一个自定义指令由一个包含类似组件生命周期钩子的对象来定义。钩子函数会接收到指令所绑定元素作为其参数。下面是一个自定义指令的例子，当一个 input 元素被 Vue 插入到 DOM 中后，它会被自动聚焦：</p>

```js
<script setup>
//在模板中启用v-focus
const vFocus = {
  mounted: (el) => el.focus
}
</script>
```
<p>
假设你还未点击页面中的其他地方，那么上面这个 input 元素应该会被自动聚焦。该指令比 autofocus attribute 更有用，因为它不仅仅可以在页面加载完成后生效，还可以在 Vue 动态插入元素后生效。

在" script setup" 中，任何以 v 开头的驼峰式命名的变量都可以被用作一个自定义指令。在上面的例子中，vFocus 即可以在模板中以 v-focus 的形式使用。

在没有使用 script setup 的情况下，自定义指令需要通过 directives 选项注册：
</p>

```js
export default {
  setup() {
    /*...*/
  },
  directives: {
    // 在模板中启用 v-focus
    focus: {
      /* ... */
    }
  }
}
```
<p>将一个自定义指令全局注册到应用层级也是一种常见的作法</p>

```js
const app = createApp({})

//使v-focus在所有组件中都可用
app.directive('focus',{

})
```

##### 指令钩子

<img src="@assets/vue3/zhilinggouzi.png"/>

##### 简化形式

<p>对于自定义指令来说，一个很常见的情况是仅仅需要在 mounted 和 updated 上实现相同的行为，除此之外并不需要其他钩子。这种情况下我们可以直接用一个函数来定义指令，如下所示：</p>

<img src="@assets/vue3/jianhuaxingshi.png"/>
