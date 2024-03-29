import{aG as a,aJ as u,r as s,a7 as c,Z as l,j as m,s as h,m as n,ab as P,x as V,F as S}from"./index.420141bb.js";const d="/my-personal-blog/assets/piniatwo.836cbbd6.png",x="/my-personal-blog/assets/shiyongpinia.5704e63a.png",_=a('<h3>\u4ECB\u7ECD</h3><p><a href="https://pinia.vuejs.org/zh/introduction.html">\u4ECB\u7ECD</a></p><h4>\u7B80\u4ECB</h4><p>Pinia\u8D77\u59CB\u4E8E2019\u5E7411\u6708\u5DE6\u53F3\u7684\u4E00\u6B21\u5B9E\u9A8C\uFF0C\u5176\u76EE\u7684\u662F\u8BBE\u8BA1\u4E00\u4E2A\u62E5\u6709\u7EC4\u5408\u5F0FAPI\u7684Vue\u72B6\u6001\u7BA1\u7406\u5E93\u3002\u4ECE\u90A3\u65F6\u8D77\uFF0C\u6211\u4EEC\u5C31\u503E\u5411\u4E8E\u540C\u65F6\u652F\u6301Vue2\u548CVue3\uFF0C\u5E76\u4E14\u4E0D\u5F3A\u5236\u8981\u6C42\u5F00\u53D1\u8005\u4F7F\u7528\u7EC4\u5408\u5F0FAPI\uFF0C\u6211\u4EEC\u7684\u521D\u5FC3\u81F3\u4ECA\u6CA1\u6709\u6539\u53D8\u3002\u9664\u4E86\u5B89\u88C5\u548CSSR\u4E24\u7AE0\u4E4B\u5916\uFF0C\u5176\u4F59\u7AE0\u8282\u4E2D\u63D0\u5230\u7684API\u5747\u652F\u6301Vue2\u548CVue3\u3002\u867D\u7136\u672C\u6587\u6863\u4E3B\u8981\u662F\u9762\u5411Vue3\u7684\u7528\u6237\uFF0C\u4F46\u5728\u5FC5\u8981\u65F6\u4F1A\u6807\u6CE8\u51FAVue2\u7684\u5185\u5BB9\uFF0C\u56E0\u6B64Vue2\u548CVue3\u7684\u7528\u6237\u90FD\u53EF\u4EE5\u9605\u8BFB\u672C\u6587\u6863</p><h4>\u4E3A\u4EC0\u4E48\u4F60\u5E94\u8BE5\u4F7F\u7528pinia</h4><p>Pinia\u662FVue\u7684\u4E13\u5C5E\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u5B83\u5141\u8BB8\u4F60\u8DE8\u7EC4\u4EF6\u6216\u9875\u9762\u5171\u4EAB\u72B6\u6001\u3002\u5982\u679C\u4F60\u719F\u6089\u7EC4\u5408\u5F0FAPI\u7684\u8BDD\uFF0C\u4F60\u53EF\u80FD\u4F1A\u8BA4\u4E3A\u901A\u8FC7\u4E00\u884C\u7B80\u5355\u7684export const state = reactive({})\u6765\u5171\u4EAB\u4E00\u4E2A\u5168\u5C40\u72B6\u6001\u3002\u5BF9\u4E8E\u5355\u9875\u5E94\u7528\u6765\u8BF4\u786E\u5B9E\u53EF\u4EE5\uFF0C\u4F46\u5982\u679C\u5E94\u7528\u5728\u670D\u52A1\u5668\u7AEF\u6E32\u67D3\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u4F7F\u4F60\u7684\u5E94\u7528\u66B4\u9732\u51FA\u4E00\u4E9B\u5B89\u5168\u6F0F\u6D1E\u3002\u800C\u5982\u679C\u4F7F\u7528Pinia\uFF0C\u5373\u4F7F\u5728\u5C0F\u578B\u5355\u9875\u5E94\u7528\u4E2D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u83B7\u5F97\u5982\u4E0B\u529F\u80FD\uFF1A</p><ul><li>Devtools\u652F\u6301</li></ul><blockquote><p>1.\u8FFD\u8E2Aactions\u3001mutations\u7684\u65F6\u95F4\u7EBF</p></blockquote><blockquote><p>2.\u5728\u7EC4\u4EF6\u4E2D\u5C55\u793A\u5B83\u4EEC\u6240\u7528\u5230\u7684Store</p></blockquote><blockquote><p>3.\u8BA9\u8C03\u8BD5\u66F4\u5BB9\u6613\u7684Time travel</p></blockquote><ul><li>\u70ED\u66F4\u65B0</li></ul><blockquote><p>1.\u4E0D\u5FC5\u91CD\u8F7D\u9875\u9762\u5373\u53EF\u4FEE\u6539Store</p></blockquote><blockquote><p>2.\u5F00\u53D1\u65F6\u53EF\u4FDD\u6301\u5F53\u524D\u7684State</p></blockquote><ul><li>\u63D2\u4EF6\uFF1A \u53EF\u901A\u8FC7\u63D2\u4EF6\u6269\u5C55Pinia\u529F\u80FD</li><li>\u4E3AJS\u5F00\u53D1\u8005\u63D0\u4F9B\u9002\u5F53\u7684TypeScript\u652F\u6301\u4EE5\u53CA\u81EA\u52A8\u8865\u5168\u529F\u80FD</li><li>\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3</li></ul><h4>\u57FA\u7840\u793A\u4F8B</h4><p>\u4E0B\u9762\u5C31\u662Fpinia API\u7684\u57FA\u672C\u7528\u6CD5(\u4E3A\u7EE7\u7EED\u9605\u8BFB\u672C\u7B80\u4ECB\u8BF7\u786E\u4FDD\u4F60\u5DF2\u9605\u8BFB\u8FC7\u4E86\u5F00\u59CB\u7AE0\u8282)\u3002\u4F60\u53EF\u4EE5\u5148\u521B\u5EFA\u4E00\u4E2AStore</p><img src="'+d+'"><p>\u7136\u540E\u4F60\u5C31\u53EF\u4EE5\u5728\u4E00\u4E2A\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u8BE5store\u4E86</p><img src="'+x+'"><h4>\u4E3A\u4EC0\u4E48\u53D6\u540DPinia?</h4><p>Pinia (\u53D1\u97F3\u4E3A /pi\u02D0nj\u028C/\uFF0C\u7C7B\u4F3C\u82F1\u6587\u4E2D\u7684 \u201Cpeenya\u201D) \u662F\u6700\u63A5\u8FD1\u6709\u6548\u5305\u540D pi\xF1a (\u897F\u73ED\u7259\u8BED\u4E2D\u7684 pineapple\uFF0C\u5373\u201C\u83E0\u841D\u201D) \u7684\u8BCD\u3002 \u83E0\u841D\u82B1\u5B9E\u9645\u4E0A\u662F\u4E00\u7EC4\u5404\u81EA\u72EC\u7ACB\u7684\u82B1\u6735\uFF0C\u5B83\u4EEC\u7ED3\u5408\u5728\u4E00\u8D77\uFF0C\u7531\u6B64\u5F62\u6210\u4E00\u4E2A\u591A\u91CD\u7684\u6C34\u679C\u3002 \u4E0E Store \u7C7B\u4F3C\uFF0C\u6BCF\u4E00\u4E2A\u90FD\u662F\u72EC\u7ACB\u8BDE\u751F\u7684\uFF0C\u4F46\u6700\u7EC8\u5B83\u4EEC\u90FD\u662F\u76F8\u4E92\u8054\u7CFB\u7684\u3002 \u5B83(\u83E0\u841D)\u4E5F\u662F\u4E00\u79CD\u539F\u4EA7\u4E8E\u5357\u7F8E\u6D32\u7684\u7F8E\u5473\u70ED\u5E26\u6C34\u679C\u3002</p><h4>\u5BF9\u6BD4Vuex</h4><p>Pinia \u8D77\u6E90\u4E8E\u4E00\u6B21\u63A2\u7D22 Vuex \u4E0B\u4E00\u4E2A\u8FED\u4EE3\u7684\u5B9E\u9A8C\uFF0C\u56E0\u6B64\u7ED3\u5408\u4E86 Vuex 5 \u6838\u5FC3\u56E2\u961F\u8BA8\u8BBA\u4E2D\u7684\u8BB8\u591A\u60F3\u6CD5\u3002\u6700\u540E\uFF0C\u6211\u4EEC\u610F\u8BC6\u5230 Pinia \u5DF2\u7ECF\u5B9E\u73B0\u4E86\u6211\u4EEC\u5728 Vuex 5 \u4E2D\u60F3\u8981\u7684\u5927\u90E8\u5206\u529F\u80FD\uFF0C\u6240\u4EE5\u51B3\u5B9A\u5C06\u5176\u4F5C\u4E3A\u65B0\u7684\u63A8\u8350\u65B9\u6848\u6765\u4EE3\u66FF Vuex\u3002 </p><p>\u4E0E Vuex \u76F8\u6BD4\uFF0CPinia \u4E0D\u4EC5\u63D0\u4F9B\u4E86\u4E00\u4E2A\u66F4\u7B80\u5355\u7684 API\uFF0C\u4E5F\u63D0\u4F9B\u4E86\u7B26\u5408\u7EC4\u5408\u5F0F API \u98CE\u683C\u7684 API\uFF0C\u6700\u91CD\u8981\u7684\u662F\uFF0C\u642D\u914D TypeScript \u4E00\u8D77\u4F7F\u7528\u65F6\u6709\u975E\u5E38\u53EF\u9760\u7684\u7C7B\u578B\u63A8\u65AD\u652F\u6301\u3002</p><p></p><h5>RFC</h5><p>\u6700\u521D\uFF0CPinia \u6CA1\u6709\u7ECF\u8FC7\u4EFB\u4F55 RFC \u7684\u6D41\u7A0B\u3002\u6211\u57FA\u4E8E\u81EA\u5DF1\u5F00\u53D1\u5E94\u7528\u7684\u7ECF\u9A8C\uFF0C\u540C\u65F6\u901A\u8FC7\u9605\u8BFB\u5176\u4ED6\u4EBA\u7684\u4EE3\u7801\uFF0C\u4E3A\u4F7F\u7528 Pinia \u7684\u7528\u6237\u5DE5\u4F5C\uFF0C\u4EE5\u53CA\u5728 Discord \u4E0A\u56DE\u7B54\u95EE\u9898\u7B49\u65B9\u5F0F\u9A8C\u8BC1\u4E86\u4E00\u4E9B\u60F3\u6CD5\u3002 \u8FD9\u4E9B\u7ECF\u5386\u4F7F\u6211\u4EA7\u51FA\u4E86\u8FD9\u6837\u4E00\u4E2A\u53EF\u7528\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5E76\u9002\u5E94\u4E86\u5404\u79CD\u573A\u666F\u548C\u5E94\u7528\u89C4\u6A21\u3002\u6211\u4F1A\u4E00\u76F4\u5728\u4FDD\u6301\u5176\u6838\u5FC3 API \u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\u53D1\u5E03\u65B0\u7248\u672C\uFF0C\u540C\u65F6\u4E0D\u65AD\u4F18\u5316\u672C\u5E93\u3002 </p><p>\u73B0\u5728 Pinia \u5DF2\u7ECF\u6210\u4E3A\u63A8\u8350\u7684\u72B6\u6001\u7BA1\u7406\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u548C Vue \u751F\u6001\u7CFB\u7EDF\u4E2D\u7684\u5176\u4ED6\u6838\u5FC3\u5E93\u4E00\u6837\uFF0C\u90FD\u8981\u7ECF\u8FC7 RFC \u6D41\u7A0B\uFF0C\u5B83\u7684 API \u4E5F\u5DF2\u7ECF\u8FDB\u5165\u7A33\u5B9A\u72B6\u6001\u3002</p><p></p><h5>\u5BF9\u6BD4Vuex3.x/4.x</h5><p>Vuex3.x\u53EA\u9002\u914DVue2,\u800CVuex4.x\u662F\u9002\u914DVue3\u7684</p><p>Pinia API \u4E0EVuex(&lt;=4)\u4E5F\u6709\u5F88\u591A\u4E0D\u540C\uFF0C\u5373</p><ul><li>mutation\u5DF2\u88AB\u5F03\u7528\u3002\u5B83\u4EEC\u7ECF\u5E38\u88AB\u8BA4\u4E3A\u662F\u53CA\u5176\u5197\u4F59\u7684\u3002\u5B83\u4EEC\u521D\u8877\u662F\u5E26\u6765devtools\u7684\u96C6\u6210\u65B9\u6848\uFF0C\u4F46\u8FD9\u5DF2\u4E0D\u518D\u662F\u4E00\u4E2A\u95EE\u9898\u4E86</li><li>\u65E0\u9700\u8981\u521B\u5EFA\u81EA\u5B9A\u4E49\u7684\u590D\u6742\u5305\u88C5\u5668\u6765\u652F\u6301 TypeScript\uFF0C\u4E00\u5207\u90FD\u53EF\u6807\u6CE8\u7C7B\u578B\uFF0CAPI \u7684\u8BBE\u8BA1\u65B9\u5F0F\u662F\u5C3D\u53EF\u80FD\u5730\u5229\u7528 TS \u7C7B\u578B\u63A8\u7406\u3002</li><li>\u65E0\u8FC7\u591A\u7684\u9B54\u6CD5\u5B57\u7B26\u4E32\u6CE8\u5165\uFF0C\u53EA\u9700\u8981\u5BFC\u5165\u51FD\u6570\u5E76\u8C03\u7528\u5B83\u4EEC\uFF0C\u7136\u540E\u4EAB\u53D7\u81EA\u52A8\u8865\u5168\u7684\u4E50\u8DA3\u5C31\u597D\u3002</li><li>\u65E0\u9700\u8981\u52A8\u6001\u6DFB\u52A0 Store\uFF0C\u5B83\u4EEC\u9ED8\u8BA4\u90FD\u662F\u52A8\u6001\u7684\uFF0C\u751A\u81F3\u4F60\u53EF\u80FD\u90FD\u4E0D\u4F1A\u6CE8\u610F\u5230\u8FD9\u70B9\u3002\u6CE8\u610F\uFF0C\u4F60\u4ECD\u7136\u53EF\u4EE5\u5728\u4EFB\u4F55\u65F6\u5019\u624B\u52A8\u4F7F\u7528\u4E00\u4E2A Store \u6765\u6CE8\u518C\u5B83\uFF0C\u4F46\u56E0\u4E3A\u5B83\u662F\u81EA\u52A8\u7684\uFF0C\u6240\u4EE5\u4F60\u4E0D\u9700\u8981\u62C5\u5FC3\u5B83\u3002</li><li>\u4E0D\u518D\u6709\u5D4C\u5957\u7ED3\u6784\u7684\u6A21\u5757\u3002\u4F60\u4ECD\u7136\u53EF\u4EE5\u901A\u8FC7\u5BFC\u5165\u548C\u4F7F\u7528\u53E6\u4E00\u4E2A Store \u6765\u9690\u542B\u5730\u5D4C\u5957 stores \u7A7A\u95F4\u3002\u867D\u7136 Pinia \u4ECE\u8BBE\u8BA1\u4E0A\u63D0\u4F9B\u7684\u662F\u4E00\u4E2A\u6241\u5E73\u7684\u7ED3\u6784\uFF0C\u4F46\u4ECD\u7136\u80FD\u591F\u5728 Store \u4E4B\u95F4\u8FDB\u884C\u4EA4\u53C9\u7EC4\u5408\u3002\u4F60\u751A\u81F3\u53EF\u4EE5\u8BA9 Stores \u6709\u5FAA\u73AF\u4F9D\u8D56\u5173\u7CFB\u3002</li><li>\u4E0D\u518D\u6709\u53EF\u547D\u540D\u7684\u6A21\u5757\u3002\u8003\u8651\u5230 Store \u7684\u6241\u5E73\u67B6\u6784\uFF0CStore \u7684\u547D\u540D\u53D6\u51B3\u4E8E\u5B83\u4EEC\u7684\u5B9A\u4E49\u65B9\u5F0F\uFF0C\u4F60\u751A\u81F3\u53EF\u4EE5\u8BF4\u6240\u6709 Store \u90FD\u5E94\u8BE5\u547D\u540D\u3002</li></ul><p>\u5173\u4E8E\u5982\u4F55\u5C06\u73B0\u6709 Vuex(&lt;=4) \u7684\u9879\u76EE\u8F6C\u5316\u4E3A\u4F7F\u7528 Pinia \u7684\u66F4\u591A\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u8BF7\u53C2\u9605</p><p><a href="https://pinia.vuejs.org/zh/cookbook/migration-vuex.html">\u8FC1\u79FB\u6307\u5357</a></p>',35);function k(e,t){return _}const i={render:k};i.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/Pinia/introduce.md";const b=u("counter",{state:()=>({count:0}),actions:{increment(){this.count++}}}),g=b,I={components:{MarkDownComponent:i},setup(){const e=g();e.count++;const t=s(e.count);e.increment();const o=e.increment;return{counts:t,increment:o}}};function v(e,t,o,p,A,f){const r=l("MarkDownComponent");return m(),h(S,null,[n("div",null,P(p.counts),1),n("article",null,[V(r)])],64)}const C=c(I,[["render",v]]);export{C as default};
