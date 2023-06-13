import{j as e,s as o,F as u,m as n,aG as r,a7 as a,Z as p,x as _}from"./index.6a6c2c3a.js";const i="/my-personal-blog/assets/ref.18d7f584.png",d=n("h3",null,"\u54CD\u5E94\u5F0F\u6838\u5FC3",-1),h=n("p",null,[n("a",{href:"https://cn.vuejs.org/api/reactivity-core.html#ref"},"\u54CD\u5E94\u5F0F\u6838\u5FC3")],-1),f=n("h4",null,"ref()",-1),v=n("p",null,"\u63A5\u53D7\u4E00\u4E2A\u5185\u90E8\u503C\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u3001\u53EF\u66F4\u6539\u7684ref\u5BF9\u8C61\uFF0C\u6B64\u5BF9\u8C61\u53EA\u6709\u4E00\u4E2A\u6307\u5411\u5176\u5185\u90E8\u503C\u7684\u5C5E\u6027.value",-1),g=n("ul",null,[n("li",null,"\u7C7B\u578B")],-1),m=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`function ref<T>(value: T): Ref<UnwrapRef<T>>

interface Ref<T> {
  value: T
}
`)],-1),j=r('<ul><li>\u8BE6\u7EC6\u4FE1\u606F</li></ul><p>ref\u5BF9\u8C61\u662F\u53EF\u66F4\u6539\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4F60\u53EF\u4EE5\u4E3A.value\u8D4B\u4E88\u65B0\u7684\u503C\u3002\u5B83\u4E5F\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u5373\u6240\u6709\u5BF9.value\u7684\u64CD\u4F5C\u90FD\u5C06\u88AB\u8FFD\u8E2A\uFF0C\u5E76\u4E14\u5199\u64CD\u4F5C\u4F1A\u89E6\u53D1\u4E0E\u4E4B\u76F8\u5173\u7684\u526F\u4F5C\u7528</p><p>\u5982\u679C\u5C06\u4E00\u4E2A\u5BF9\u8C61\u8D4B\u503C\u7ED9ref\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u5C06\u901A\u8FC7reactive()\u8F6C\u4E3A\u5177\u6709\u6DF1\u5C42\u6B21\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\u3002\u8FD9\u4E5F\u610F\u5473\u5982\u679C\u5BF9\u8C61\u4E2D\u5305\u542B\u4E86\u5D4C\u5957\u7684ref\uFF0C\u5B83\u4EEC\u5C06\u88AB\u6DF1\u5C42\u5730\u89E3\u5305</p><p>\u82E5\u8981\u907F\u514D\u8FD9\u79CD\u6DF1\u5C42\u6B21\u7684\u8F6C\u6362\uFF0C\u8BF7\u4F7F\u7528shallowRef()\u6765\u66FF\u4EE3</p><p>\u793A\u4F8B\uFF1A</p><img src="'+i+'"><h4>computed()</h4><p>\u6682\u5B9A</p><h4>reactive()</h4><p>\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406</p><ul><li>\u7C7B\u578B</li></ul>',11),b=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
`)],-1),w=n("ul",null,[n("li",null,"\u8BE6\u7EC6\u4FE1\u606F")],-1),y=n("p",null,"\u54CD\u5E94\u5F0F\u8F6C\u6362\u662F\u6DF1\u5C42\u7684\uFF1A\u5B83\u4F1A\u5F71\u54CD\u5230\u6240\u6709\u5D4C\u5957\u7684\u5C5E\u6027\u3002\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E5F\u5C06\u6DF1\u5C42\u5730\u89E3\u5305\u4EFB\u4F55ref\u5C5E\u6027\uFF0C\u540C\u65F6\u4FDD\u6301\u54CD\u5E94\u6027",-1),T=n("p",null,"\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u8BBF\u95EE\u5230\u67D0\u4E2A\u54CD\u5E94\u5F0F\u6570\u7EC4\u6216Map\u8FD9\u6837\u7684\u539F\u751F\u96C6\u5408\u7C7B\u578B\u4E2D\u7684ref\u5143\u7D20\u65F6\uFF0C\u4E0D\u4F1A\u6267\u884Cref\u7684\u89E3\u5305",-1),R=n("p",null,"\u82E5\u8981\u907F\u514D\u6DF1\u5C42\u54CD\u5E94\u5F0F\u8F6C\u6362\uFF0C\u53EA\u60F3\u4FDD\u7559\u5BF9\u8FD9\u4E2A\u5BF9\u8C61\u9876\u5C42\u6B21\u8BBF\u95EE\u7684\u54CD\u5E94\u6027\uFF0C\u8BF7\u4F7F\u7528 shallowReactive() \u4F5C\u66FF\u4EE3\u3002",-1),x=n("p",null,"\u8FD4\u56DE\u7684\u5BF9\u8C61\u4EE5\u53CA\u5176\u4E2D\u5D4C\u5957\u7684\u5BF9\u8C61\u90FD\u4F1A\u901A\u8FC7ES Proxy\u5305\u88F9\uFF0C\u56E0\u6B64\u4E0D\u7B49\u4E8E\u6E90\u5BF9\u8C61\uFF0C\u5EFA\u8BAE\u53EA\u4F7F\u7528\u54CD\u5E94\u5F0F\u4EE3\u7406\uFF0C\u907F\u514D\u4F7F\u7528\u539F\u59CB\u5BF9\u8C61",-1),k=n("ul",null,[n("li",null,"\u793A\u4F8B")],-1),C=n("p",null,"\u521B\u5EFA\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",-1),M=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`let obj = reactive({ count: 0})
obj.count++
`)],-1),D=n("p",null,"ref\u7684\u89E3\u5305",-1),N=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`const count = ref(1)
const obj = reactive({ count })

// ref \u4F1A\u88AB\u89E3\u5305
console.log(obj.count === count.value) // true

// \u4F1A\u66F4\u65B0 \`obj.count\`
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// \u4E5F\u4F1A\u66F4\u65B0 \`count\` ref
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3
`)],-1),V=n("p",null,"\u6CE8\u610F\u5F53\u8BBF\u95EE\u5230\u67D0\u4E2A\u54CD\u5E94\u5F0F\u6570\u7EC4\u6216Map\u8FD9\u6837\u7684\u539F\u751F\u96C6\u5408\u7C7B\u578B\u4E2D\u7684ref\u5143\u7D20\u65F6\uFF0C\u4E0D\u4F1A\u6267\u884Cref\u7684\u89E3\u5305",-1),E=n("pre",null,[n("code",{"v-pre":"true"},`const books = reactive([ref('Vue 3 Guide')])
// \u8FD9\u91CC\u9700\u8981 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// \u8FD9\u91CC\u9700\u8981 .value
console.log(map.get('count').value)
`)],-1),$=n("p",null,"\u5C06\u4E00\u4E2Aref\u8D4B\u503C\u7ED9\u4E3A\u4E00\u4E2Areactive\u5C5E\u6027\u65F6\uFF0C\u8BE5ref\u4F1A\u88AB\u81EA\u52A8\u89E3\u5305",-1),B=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`const count = ref(1)
const obj = reactive({})

obj.count = count

console.log(obj.count) // 1
console.log(obj.count === count.value) // true
`)],-1),F=n("h4",null,"readonly()",-1),S=n("p",null,"\u63A5\u53D7\u4E00\u4E2A\u5BF9\u8C61\uFF08\u4E0D\u7BA1\u662F\u54CD\u5E94\u5F0F\u8FD8\u662F\u666E\u901A\u7684\uFF09\u6216\u662F\u4E00\u4E2Aref\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u539F\u503C\u7684\u53EA\u8BFB\u4EE3\u7406",-1),U=n("ul",null,[n("li",null,"\u7C7B\u578B")],-1),G=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`function readonly<T extends object>(
  target: T
): DeepReadonly<UnwrapNestedRefs<T>>
`)],-1),I=n("ul",null,[n("li",null,"\u8BE6\u7EC6\u4FE1\u606F")],-1),P=n("p",null,"\u53EA\u8BFB\u4EE3\u7406\u662F\u6DF1\u5C42\u7684\uFF1A\u5BF9\u4EFB\u4F55\u5D4C\u5957\u5C5E\u6027\u7684\u8BBF\u95EE\u90FD\u5C06\u662F\u53EA\u8BFB\u7684\u3002\u5B83\u7684 ref \u89E3\u5305\u884C\u4E3A\u4E0E reactive() \u76F8\u540C\uFF0C\u4F46\u89E3\u5305\u5F97\u5230\u7684\u503C\u662F\u53EA\u8BFB\u7684\u3002 ",-1),Z=n("p",null,"\u8981\u907F\u514D\u6DF1\u5C42\u7EA7\u7684\u8F6C\u6362\u884C\u4E3A\uFF0C\u8BF7\u4F7F\u7528 shallowReadonly() \u4F5C\u66FF\u4EE3\u3002",-1),q=n("p",null,null,-1),z=n("ul",null,[n("li",null,"\u793A\u4F8B")],-1),A=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
  // \u7528\u6765\u505A\u54CD\u5E94\u6027\u8FFD\u8E2A
  console.log(copy.count)
})

// \u66F4\u6539\u6E90\u5C5E\u6027\u4F1A\u89E6\u53D1\u5176\u4F9D\u8D56\u7684\u4FA6\u542C\u5668
original.count++

// \u66F4\u6539\u8BE5\u53EA\u8BFB\u526F\u672C\u5C06\u4F1A\u5931\u8D25\uFF0C\u5E76\u4F1A\u5F97\u5230\u4E00\u4E2A\u8B66\u544A
copy.count++ // warning!
`)],-1);function H(l,s){return e(),o(u,null,[d,h,f,v,g,m,j,b,w,y,T,R,x,k,C,M,D,N,V,E,$,B,F,S,U,G,I,P,Z,q,z,A],64)}const t={render:H};t.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/Setup/setupCore.md";const J={components:{MarkDownComponent:t},setup(){}};function K(l,s,L,O,Q,W){const c=p("MarkDownComponent");return e(),o("article",null,[_(c)])}const Y=a(J,[["render",K]]);export{Y as default};
