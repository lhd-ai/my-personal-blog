import{l as t,z as n,F as r,q as e,aH as i,a8 as c,a1 as l,A as u}from"./index.55e83ec9.js";const d="/my-personal-blog/assets/pinia.ebdc6683.png",_="/my-personal-blog/assets/vue2pinia.83e9247d.png",m=e("h3",null,"\u5F00\u59CB",-1),h=e("p",null,[e("a",{href:"https://pinia.vuejs.org/zh/getting-started.html"},"\u5F00\u59CB")],-1),g=e("h4",null,"\u5B89\u88C5",-1),v=e("p",null,"\u7528\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\u5B89\u88C5Pinia",-1),V=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`yarn add pinia
\u6216
npm install pinia
`)],-1),f=i('<p><strong>\u5982\u679C\u4F60\u7684\u5E94\u7528\u4F7F\u7528\u7684\u662FVue2\uFF0C\u4F60\u8FD8\u9700\u8981\u5B89\u88C5\u7EC4\u5408\u5F0FAPI\u5305\uFF1A @vue/composition-api\u3002\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662FNuxt,\u4F60\u5E94\u8BE5\u53C2\u8003\u8FD9\u7BC7\u6307\u5357</strong></p><p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528Vue CLI,\u4F60\u53EF\u4EE5\u8BD5\u8BD5\u8FD9\u4E2A</p><p><a href="https://github.com/wobsoriano/vue-cli-plugin-pinia">\u975E\u5B98\u65B9\u63D2\u4EF6</a></p><p>\u521B\u5EFA\u4E00\u4E2Apinia\u5B9E\u4F8B(\u6839store)\u5E76\u5C06\u8D77\u4F20\u9012\u7ED9\u5E94\u7528</p><img src="'+d+'"><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662FVue2,\u4F60\u8FD8\u9700\u8981\u5B89\u88C5\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u5E76\u5728\u5E94\u7528\u7684\u6839\u90E8\u6CE8\u5165\u521B\u5EFA\u7684pinia</p><img src="'+_+'"><p>\u8FD9\u6837\u624D\u80FD\u63D0\u4F9Bdevtools\u7684\u652F\u6301\u3002\u5728Vue3\u4E2D\uFF0C\u4E00\u4E9B\u529F\u80FD\u4ECD\u7136\u4E0D\u88AB\u652F\u6301\uFF0C\u5982time traveling\u548C\u7F16\u8F91\uFF0C\u8FD9\u662F\u56E0\u4E3Avue-devtools\u8FD8\u6CA1\u6709\u76F8\u5173\u7684API\uFF0C\u4F46devtools\u4E5F\u6709\u5F88\u591A\u9488\u5BF9Vue3\u7684\u4E13\u5C5E\u529F\u80FD\uFF0C\u800C\u4E14\u5C31\u5F00\u53D1\u8005\u7684\u4F53\u9A8C\u6765\u8BF4\uFF0CVue3\u6574\u4F53\u4E0A\u8981\u597D\u5F97\u591A\u3002\u5728Vue2\u4E2D\uFF0CPinia\u4F7F\u7528\u7684\u662FVuex\u7684\u73B0\u6709\u63A5\u53E3(\u56E0\u6B64\u4E0D\u80FD\u4E0EVuex\u4E00\u8D77\u4F7F\u7528)</p><h4>Store\u662F\u4EC0\u4E48\uFF1F</h4><p>Store(\u5982Pinia)\u662F\u4E00\u4E2A\u4FDD\u5B58\u72B6\u6001\u548C\u4E1A\u52A1\u903B\u8F91\u7684\u5B9E\u4F53\uFF0C\u5B83\u5E76\u4E0D\u4E0E\u4F60\u7684\u7EC4\u4EF6\u6811\u7ED1\u5B9A\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5B83\u627F\u8F7D\u7740\u5168\u5C40\u72B6\u6001\u3002\u5B83\u6709\u70B9\u50CF\u4E00\u4E2A\u6C38\u8FDC\u5B58\u5728\u7684\u7EC4\u4EF6\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u8BFB\u53D6\u548C\u5199\u5165\u5B83\u3002\u5B83\u6709\u4E09\u4E2A\u6982\u5FF5\uFF0Cstate\u3001getter\u548Caction\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5047\u8BBE\u8FD9\u4E9B\u6982\u5FF5\u76F8\u5F53\u4E8E\u7EC4\u4EF6\u4E2D\u7684data\u3001computed\u548Cmethods</p><h4>\u5E94\u8BE5\u5728\u4EC0\u4E48\u65F6\u5019\u4F7F\u7528Store?</h4><p>\u4E00\u4E2AStore\u5E94\u8BE5\u5305\u542B\u53EF\u4EE5\u5728\u6574\u4E2A\u5E94\u7528\u4E2D\u8BBF\u95EE\u7684\u6570\u636E\u3002\u8FD9\u5305\u62EC\u5728\u8BB8\u591A\u5730\u65B9\u4F7F\u7528\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u663E\u793A\u5728\u5BFC\u822A\u680F\u4E2D\u7684\u7528\u6237\u4FE1\u606F\uFF0C\u4EE5\u53CA\u9700\u8981\u901A\u8FC7\u9875\u9762\u4FDD\u5B58\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u4E00\u4E2A\u975E\u5E38\u590D\u6742\u7684\u591A\u6B65\u9AA4\u8868\u5355</p><p>\u53E6\u4E00\u65B9\u9762\uFF0C\u4F60\u5E94\u8BE5\u907F\u514D\u5728Store\u4E2D\u5F15\u5165\u90A3\u4E9B\u539F\u672C\u53EF\u4EE5\u5728\u7EC4\u4EF6\u4E2D\u4FDD\u5B58\u7684\u672C\u5730\u6570\u636E\uFF0C\u4F8B\u5982\uFF0C\u4E00\u4E2A\u5143\u7D20\u5728\u9875\u9762\u4E2D\u7684\u53EF\u89C1\u6027</p><p>\u5E76\u975E\u6240\u6709\u7684\u5E94\u7528\u90FD\u9700\u8981\u8BBF\u95EE\u5168\u5C40\u72B6\u6001\uFF0C\u4F46\u5982\u679C\u4F60\u7684\u5E94\u7528\u786E\u5B9E\u9700\u8981\u4E00\u4E2A\u5168\u5C40\u72B6\u6001\uFF0C\u90A3pinia\u5C06\u4F7F\u4F60\u7684\u5F00\u53D1\u8FC7\u7A0B\u66F4\u8F7B\u677E</p>',14);function x(s,a){return t(),n(r,null,[m,h,g,v,V,f],64)}const o={render:x};o.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/Pinia/start.md";const b={components:{MarkDownComponent:o},setup(){}};function k(s,a,C,P,S,w){const p=l("MarkDownComponent");return t(),n("article",null,[u(p)])}const D=c(b,[["render",k]]);export{D as default};