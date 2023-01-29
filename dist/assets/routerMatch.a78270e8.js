import{l as s,z as t,F as u,q as e,a8 as c,a1 as p,A as l}from"./index.55e83ec9.js";const h=e("h3",null,"\u8DEF\u7531\u7684\u5339\u914D\u8BED\u6CD5",-1),d=e("p",null,[e("a",{href:"https://router.vuejs.org/zh/guide/essentials/route-matching-syntax.html"},"\u8DEF\u7531\u7684\u5339\u914D\u8BED\u6CD5")],-1),_=e("p",null,"\u5927\u591A\u6570\u5E94\u7528\u90FD\u4F1A\u4F7F\u7528/about\u8FD9\u6837\u7684\u9759\u6001\u8DEF\u7531\u548C/users/:userId\u8FD9\u6837\u7684\u52A8\u6001\u8DEF\u7531\uFF0C\u5C31\u50CF\u6211\u4EEC\u521A\u624D\u5728\u52A8\u6001\u8DEF\u7531\u5339\u914D\u4E2D\u770B\u5230\u7684\u90A3\u6837\uFF0C\u4F46\u662FVue Router\u53EF\u4EE5\u63D0\u4F9B\u66F4\u591A\u7684\u65B9\u5F0F",-1),i=e("h4",null,"\u5728\u53C2\u6570\u4E2D\u81EA\u5B9A\u4E49\u6B63\u5219",-1),m=e("p",null," \u5F53\u5B9A\u4E49\u50CF :userId \u8FD9\u6837\u7684\u53C2\u6570\u65F6\uFF0C\u6211\u4EEC\u5185\u90E8\u4F7F\u7528\u4EE5\u4E0B\u7684\u6B63\u5219 ([^/]+) (\u81F3\u5C11\u6709\u4E00\u4E2A\u5B57\u7B26\u4E0D\u662F\u659C\u6760 / )\u6765\u4ECE URL \u4E2D\u63D0\u53D6\u53C2\u6570\u3002\u8FD9\u5F88\u597D\u7528\uFF0C\u9664\u975E\u4F60\u9700\u8981\u6839\u636E\u53C2\u6570\u7684\u5185\u5BB9\u6765\u533A\u5206\u4E24\u4E2A\u8DEF\u7531\u3002\u60F3\u8C61\u4E00\u4E0B\uFF0C\u4E24\u4E2A\u8DEF\u7531 /:orderId \u548C /:productName\uFF0C\u4E24\u8005\u4F1A\u5339\u914D\u5B8C\u5168\u76F8\u540C\u7684 URL\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4E00\u79CD\u65B9\u6CD5\u6765\u533A\u5206\u5B83\u4EEC\u3002\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u5C31\u662F\u5728\u8DEF\u5F84\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u9759\u6001\u90E8\u5206\u6765\u533A\u5206\u5B83\u4EEC\uFF1A",-1),v=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const routes = [
  // \u5339\u914D /o/3549
  { path: '/o/:orderId' },
  // \u5339\u914D /p/books
  { path: '/p/:productName' },
]
`)],-1),g=e("p",null,"\u4F46\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E76\u4E0D\u60F3\u6DFB\u52A0\u9759\u6001\u7684 /o /p \u90E8\u5206\u3002\u7531\u4E8E\uFF0CorderId \u603B\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u800C productName \u53EF\u4EE5\u662F\u4EFB\u4F55\u4E1C\u897F\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5728\u62EC\u53F7\u4E2D\u4E3A\u53C2\u6570\u6307\u5B9A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u6B63\u5219\uFF1A",-1),f=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const routes = [
  // /:orderId -> \u4EC5\u5339\u914D\u6570\u5B57
  { path: '/:orderId(\\\\d+)' },
  // /:productName -> \u5339\u914D\u5176\u4ED6\u4EFB\u4F55\u5185\u5BB9
  { path: '/:productName' },
]
`)],-1),I=e("p",null,"\u73B0\u5728\uFF0C\u8F6C\u5230 /25 \u5C06\u5339\u914D /:orderId\uFF0C\u5176\u4ED6\u60C5\u51B5\u5C06\u4F1A\u5339\u914D /:productName\u3002routes \u6570\u7EC4\u7684\u987A\u5E8F\u5E76\u4E0D\u91CD\u8981!",-1),j=e("h4",null,"\u53EF\u91CD\u590D\u7684\u53C2\u6570",-1),w=e("p",null,"\u5982\u679C\u4F60\u9700\u8981\u5339\u914D\u5177\u6709\u591A\u4E2A\u90E8\u5206\u7684\u8DEF\u7531\uFF0C\u5982/first/second/third,\u4F60\u5E94\u8BE5\u7528*(0\u4E2A\u6216\u591A\u4E2A)\u548C+(1\u4E2A\u6216\u591A\u4E2A)\u5C06\u53C2\u6570\u6807\u8BB0\u4E3A\u91CD\u590D",-1),N=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const routes = [
  // /:chapters ->  \u5339\u914D /one, /one/two, /one/two/three, \u7B49
  { path: '/:chapters+' },
  // /:chapters -> \u5339\u914D /, /one, /one/two, /one/two/three, \u7B49
  { path: '/:chapters*' },
]
`)],-1),k=e("p",null,"\u8FD9\u5C06\u4E3A\u4F60\u63D0\u4F9B\u4E00\u4E2A\u53C2\u6570\u6570\u7EC4\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5E76\u4E14\u5728\u4F7F\u7528\u547D\u540D\u8DEF\u7531\u65F6\u4E5F\u9700\u8981\u4F60\u4F20\u9012\u4E00\u4E2A\u6570\u7EC4\uFF1A",-1),b=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`// \u7ED9\u5B9A { path: '/:chapters*', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// \u4EA7\u751F /
router.resolve({ name: 'chapters', params: { chapters: ['a', 'b'] } }).href
// \u4EA7\u751F /a/b

// \u7ED9\u5B9A { path: '/:chapters+', name: 'chapters' },
router.resolve({ name: 'chapters', params: { chapters: [] } }).href
// \u629B\u51FA\u9519\u8BEF\uFF0C\u56E0\u4E3A \`chapters\` \u4E3A\u7A7A 
`)],-1),x=e("p",null,"\u8FD9\u4E9B\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5728\u53F3\u62EC\u53F7\u540E\u6DFB\u52A0\u5B83\u4EEC\u4E0E\u81EA\u5B9A\u4E49\u6B63\u5219\u7ED3\u5408\u4F7F\u7528\uFF1A",-1),R=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const routes = [
  // \u4EC5\u5339\u914D\u6570\u5B57
  // \u5339\u914D /1, /1/2, \u7B49
  { path: '/:chapters(\\\\d+)+' },
  // \u5339\u914D /, /1, /1/2, \u7B49
  { path: '/:chapters(\\\\d+)*' },
]
`)],-1),C=e("h4",null,"Sensitive \u4E0E strict \u8DEF\u7531\u914D\u7F6E",-1),M=e("p",null," \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6240\u6709\u8DEF\u7531\u662F\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\uFF0C\u5E76\u4E14\u80FD\u5339\u914D\u5E26\u6709\u6216\u4E0D\u5E26\u6709\u5C3E\u90E8\u659C\u7EBF\u7684\u8DEF\u7531\u3002\u4F8B\u5982\uFF0C\u8DEF\u7531 /users \u5C06\u5339\u914D /users\u3001/users/\u3001\u751A\u81F3 /Users/\u3002\u8FD9\u79CD\u884C\u4E3A\u53EF\u4EE5\u901A\u8FC7 strict \u548C sensitive \u9009\u9879\u6765\u4FEE\u6539\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u65E2\u53EF\u4EE5\u5E94\u7528\u5728\u6574\u4E2A\u5168\u5C40\u8DEF\u7531\u4E0A\uFF0C\u53C8\u53EF\u4EE5\u5E94\u7528\u4E8E\u5F53\u524D\u8DEF\u7531\u4E0A\uFF1A",-1),U=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const router = createRouter({
  history: createWebHistory(),
  routes: [
    // \u5C06\u5339\u914D /users/posva \u800C\u975E\uFF1A
    // - /users/posva/ \u5F53 strict: true
    // - /Users/posva \u5F53 sensitive: true
    { path: '/users/:id', sensitive: true },
    // \u5C06\u5339\u914D /users, /Users, \u4EE5\u53CA /users/42 \u800C\u975E /users/ \u6216 /users/42/
    { path: '/users/:id?' },
  ]
  strict: true, // applies to all routes
})
`)],-1),y=e("h4",null,"\u53EF\u9009\u53C2\u6570",-1),D=e("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528?\u4FEE\u9970\u7B26\uFF080\u4E2A\u62161\u4E2A\uFF09\u5C06\u4E00\u4E2A\u53C2\u6570\u6807\u8BB0\u4E3A\u53EF\u9009 ",-1),V=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const routes = [
    // \u5339\u914D /users \u548C /users/posva
  { path: '/users/:userId?' },
  // \u5339\u914D /users \u548C /users/42
  { path: '/users/:userId(\\\\d+)?' },
]
`)],-1),$=e("p",null,"\u8BF7\u6CE8\u610F\uFF0C* \u5728\u6280\u672F\u4E0A\u4E5F\u6807\u5FD7\u7740\u4E00\u4E2A\u53C2\u6570\u662F\u53EF\u9009\u7684\uFF0C\u4F46 ? \u53C2\u6570\u4E0D\u80FD\u91CD\u590D\u3002",-1);function B(r,o){return s(),t(u,null,[h,d,_,i,m,v,g,f,I,j,w,N,k,b,x,R,C,M,U,y,D,V,$],64)}const n={render:B};n.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/Router/routerMatch.md";const F={components:{MarkDownComponent:n},setup(){}};function z(r,o,E,L,q,A){const a=p("MarkDownComponent");return s(),t("article",null,[l(a)])}const S=c(F,[["render",z]]);export{S as default};
