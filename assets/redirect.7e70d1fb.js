import{j as o,s as t,F as p,m as e,aH as a,a7 as l,Z as _,x as i}from"./index.647868c6.js";const m="/my-personal-blog/assets/redirect.07c18970.png",d="/my-personal-blog/assets/chongdingxiang.f6fd6b49.png",h="/my-personal-blog/assets/bieming.369c3be3.png",u="/my-personal-blog/assets/biemingcanshu.470fe4f3.png",g=e("h3",null,"\u91CD\u5B9A\u5411\u548C\u522B\u540D",-1),f=e("p",null,[e("a",{href:"https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html"},"\u91CD\u5B9A\u5411\u548C\u522B\u540D")],-1),b=e("h4",null,"\u91CD\u5B9A\u5411",-1),v=e("p",null,"\u91CD\u5B9A\u5411\u4E5F\u662F\u901A\u8FC7routes\u914D\u7F6E\u6765\u5B8C\u6210\uFF0C\u4E0B\u9762\u4F8B\u5B50\u662F\u4ECE/home\u91CD\u5B9A\u5411\u5230/",-1),x=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const routes = [{path: '/home',redirect: '/'}]
`)],-1),k=e("p",null,"\u91CD\u5B9A\u5411\u7684\u76EE\u6807\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u547D\u540D\u7684\u8DEF\u7531",-1),j=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const routes = [{[path: '/home',redirect: {name: 'homepage'}]}]
`)],-1),y=a('<p>\u751A\u81F3\u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u52A8\u6001\u8FD4\u56DE\u91CD\u5B9A\u5411\u76EE\u6807</p><img src="'+m+'"><p>\u8BF7\u6CE8\u610F\uFF0C\u5BFC\u822A\u5B88\u536B\u5E76\u6CA1\u6709\u5E94\u7528\u5728\u8DF3\u8F6C\u8DEF\u7531\u4E0A\uFF0C\u800C\u4EC5\u4EC5\u5E94\u7528\u5728\u5176\u76EE\u6807\u4E0A\u3002\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u5728 /home \u8DEF\u7531\u4E2D\u6DFB\u52A0 beforeEnter \u5B88\u536B\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6548\u679C\u3002 </p><p>\u5728\u5199 redirect \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7701\u7565 component \u914D\u7F6E\uFF0C\u56E0\u4E3A\u5B83\u4ECE\u6765\u6CA1\u6709\u88AB\u76F4\u63A5\u8BBF\u95EE\u8FC7\uFF0C\u6240\u4EE5\u6CA1\u6709\u7EC4\u4EF6\u8981\u6E32\u67D3\u3002\u552F\u4E00\u7684\u4F8B\u5916\u662F\u5D4C\u5957\u8DEF\u7531\uFF1A\u5982\u679C\u4E00\u4E2A\u8DEF\u7531\u8BB0\u5F55\u6709 children \u548C redirect \u5C5E\u6027\uFF0C\u5B83\u4E5F\u5E94\u8BE5\u6709 component \u5C5E\u6027\u3002</p><p></p><h4>\u76F8\u5BF9\u91CD\u5B9A\u5411</h4><p>\u5148\u53EF\u4EE5\u91CD\u5B9A\u5411\u5230\u76F8\u5BF9\u4F4D\u7F6E</p><img src="'+d+'"><h3>\u522B\u540D</h3><p>\u91CD\u5B9A\u5411\u662F\u6307\u5F53\u7528\u6237\u8BBF\u95EE/home\u65F6\uFF0CURL\u4F1A\u88AB/\u66FF\u6362\uFF0C\u7136\u540E\u5339\u914D\u6210/\u3002\u90A3\u4E48\u4EC0\u4E48\u662F\u522B\u540D\u5462\uFF1F </p><p>\u5C06/\u522B\u540D\u4E3A/home\uFF0C\u610F\u5473\u7740\u5F53\u7528\u6237\u8BBF\u95EE/home\u65F6\uFF0Curl\u4ECD\u7136\u662F/home,\u4F46\u4F1A\u88AB\u5339\u914D\u4E3A\u7528\u6237\u6B63\u5728\u8BBF\u95EE/</p><p>\u4E0A\u9762\u5BF9\u5E94\u7684\u8DEF\u7531\u914D\u7F6E\u4E3A</p>',12),C=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`const routes = [{ path: '/', component: Homepage, alias: '/home' }]
`)],-1),w=e("p",null,"\u901A\u8FC7\u522B\u540D\uFF0C\u4F60\u53EF\u4EE5\u81EA\u7531\u5730\u5C06 UI \u7ED3\u6784\u6620\u5C04\u5230\u4E00\u4E2A\u4EFB\u610F\u7684 URL\uFF0C\u800C\u4E0D\u53D7\u914D\u7F6E\u7684\u5D4C\u5957\u7ED3\u6784\u7684\u9650\u5236\u3002\u4F7F\u522B\u540D\u4EE5 / \u5F00\u5934\uFF0C\u4EE5\u4F7F\u5D4C\u5957\u8DEF\u5F84\u4E2D\u7684\u8DEF\u5F84\u6210\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u3002\u4F60\u751A\u81F3\u53EF\u4EE5\u5C06\u4E24\u8005\u7ED3\u5408\u8D77\u6765\uFF0C\u7528\u4E00\u4E2A\u6570\u7EC4\u63D0\u4F9B\u591A\u4E2A\u522B\u540D\uFF1A",-1),D=e("img",{src:h},null,-1),R=e("p",null,"\u5982\u679C\u4F60\u7684\u8DEF\u7531\u6709\u53C2\u6570\uFF0C\u8BF7\u786E\u4FDD\u5728\u4EFB\u4F55\u7EDD\u5BF9\u522B\u540D\u4E2D\u5305\u542B\u5B83\u4EEC",-1),V=e("img",{src:u},null,-1);function $(s,r){return o(),t(p,null,[g,f,b,v,x,k,j,y,C,w,D,R,V],64)}const n={render:$};n.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/Router/redirect.md";const B={components:{MarkDownComponent:n},setup(){}};function E(s,r,F,M,N,U){const c=_("MarkDownComponent");return o(),t("article",null,[i(c)])}const I=l(B,[["render",E]]);export{I as default};