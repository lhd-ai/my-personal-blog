import{l as n,z as s,F as u,aH as c,q as e,ab as t,a8 as i,a1 as a,A as d}from"./index.55e83ec9.js";const _="/my-personal-blog/assets/vue@latest.d204346f.png",m=c('<h3>\u5FEB\u901F\u5F00\u59CB</h3><p><a href="https://cn.vuejs.org/guide/quick-start.html">\u5FEB\u901F\u5F00\u59CB</a></p><h4>\u7EBF\u4E0A\u5C1D\u8BD5Vue</h4><ul><li>\u60F3\u8981\u5FEB\u901F\u4F53\u9A8CVue,\u4F60\u53EF\u4EE5\u76F4\u63A5\u8BD5\u8BD5\u6211\u4EEC\u7684<a href="https://sfc.vuejs.org/#eNp9UMtqwzAQ/JXtXtJCbNGrcQO99Q960cWNN4mDXqzWbsH437tK6lBaCAhpZ0cazeyMrynV00jYYJv3PCTZ2UBfKbJAT4dudAKzDQB9J93j07UGYJKRw4oAfD42sHkj5yK8R3b9w+ZKLeXQTVdrbh8oEPLJdUKKANrT826eiwosS2sUXbpDSKPAVPnYk3uxqLxFpVpze41bHHxxW/ku1eccgya52LI/RLbYrEYtatSCLZ5EUm6MyYd9yX/OdeSj0armMcjgqabsqw+On5lYhS1uf2kYbU7EFVPoiYnvaf65+k93nRAu36DOh1k=">\u6F14\u7EC3\u573A</a></li><li>\u5982\u679C\u4F60\u66F4\u559C\u6B22\u4E0D\u7528\u4EFB\u4F55\u6784\u5EFA\u7684\u539F\u59CBHTML\uFF0C\u53EF\u4EE5\u4F7F\u7528<a href="https://jsfiddle.net/yyx990803/2ke1ab0z/">JSFiddle</a>\u5165\u95E8</li><li>\u5982\u679C\u4F60\u5DF2\u7ECF\u6BD4\u8F83\u719F\u6089Node.js\u548C\u6784\u5EFA\u5DE5\u5177\u7B49\u6982\u5FF5\uFF0C\u8FD8\u53EF\u4EE5\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00<a href="https://stackblitz.com/edit/vitejs-vite-ttyhqg?file=index.html&amp;terminal=dev">StacBliz</a>\u6765\u5C1D\u8BD5\u5B8C\u6574\u7684\u6784\u5EFA\u8BBE\u7F6E</li></ul><h4>\u521B\u5EFA\u4E00\u4E2AVue\u5E94\u7528</h4><p>\u5728\u672C\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u672C\u5730\u642D\u5EFAVue\u5355\u9875\u5E94\u7528\u3002\u521B\u5EFA\u7684\u9879\u76EE\u5C06\u4F7F\u7528\u57FA\u4E8EVite\u7684\u6784\u5EFA\u8BBE\u7F6E\uFF0C\u5E76\u8FD0\u884C\u6211\u4EEC\u4F7F\u7528Vue\u7684\u5355\u6587\u4EF6\u7EC4\u4EF6(SFC)</p><p>\u786E\u4FDD\u4F60\u5B89\u88C5\u4E86\u6700\u65B0\u7248\u672C\u7684Node.js\u7136\u540E\u5728\u547D\u4EE4\u884C\u4E2D\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4</p>',7),h=e("pre",null,[e("code",{"v-pre":"true"},`npm init vue@latest
`)],-1),v=e("p",null,"\u8FD9\u4E00\u6307\u4EE4\u5C06\u4F1A\u5B89\u88C5\u5E76\u6267\u884Ccreate-vue\uFF0C\u5B83\u662FVue\u5B98\u65B9\u7684\u9879\u76EE\u811A\u624B\u67B6\u5DE5\u5177\u3002\u4F60\u5C06\u4F1A\u770B\u5230\u4E00\u4E9B\u8BF8\u5982TypeScript\u548C\u6D4B\u8BD5\u652F\u6301\u4E4B\u7C7B\u7684\u53EF\u9009\u529F\u80FD\u63D0\u793A",-1),g=e("img",{src:_},null,-1),V=e("p",null,"\u5982\u679C\u4E0D\u786E\u5B9A\u662F\u5426\u8981\u5F00\u542F\u67D0\u4E2A\u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u6309\u4E0B\u56DE\u8F66\u952E\u9009\u62E9No\u3002\u5728\u9879\u76EE\u88AB\u521B\u5EFA\u540E\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u5B89\u88C5\u4F9D\u8D56\u5E76\u542F\u52A8\u670D\u52A1\u5668",-1),j=e("pre",null,[e("code",{"v-pre":"true"},`cd <your-projectname>
npm install 
npm run dev
`)],-1),f=e("p",null,'\u4F60\u73B0\u5728\u5E94\u8BE5\u5DF2\u7ECF\u8FD0\u884C\u8D77\u6765\u4E86\u4F60\u7684\u7B2C\u4E00\u4E2Avue\u9879\u76EE\uFF01\u8BF7\u6CE8\u610F\uFF0C\u751F\u6210\u7684\u9879\u76EE\u8981\u4E2D\u7684\u793A\u4F8B\u7EC4\u4EF6\u4F7F\u7528\u7684\u662F\u7EC4\u5408\u5F0FAPI\u548C<"script" setup>,\u800C\u975E\u9009\u9879\u5F0FAPI.\u4E0B\u9762\u662F\u4E00\u4E9B\u8865\u5145\u63D0\u793A',-1),y=e("ul",null,[e("li",null,"\u63A8\u8350\u7684 IDE \u914D\u7F6E\u662F Visual Studio Code + Volar \u6269\u5C55\u3002\u5982\u679C\u4F7F\u7528\u5176\u4ED6\u7F16\u8F91\u5668\uFF0C\u53C2\u8003 IDE \u652F\u6301\u7AE0\u8282\u3002"),e("li",null,"\u66F4\u591A\u5DE5\u5177\u7EC6\u8282\uFF0C\u5305\u62EC\u4E0E\u540E\u7AEF\u6846\u67B6\u7684\u6574\u5408\uFF0C\u6211\u4EEC\u4F1A\u5728\u5DE5\u5177\u94FE\u6307\u5357\u8FDB\u884C\u8BA8\u8BBA\u3002"),e("li",null,"\u8981\u4E86\u89E3\u6784\u5EFA\u5DE5\u5177 Vite \u66F4\u591A\u80CC\u540E\u7684\u7EC6\u8282\uFF0C\u8BF7\u67E5\u770B Vite \u6587\u6863\u3002"),e("li",null,"\u5982\u679C\u4F60\u9009\u62E9\u4F7F\u7528 TypeScript\uFF0C\u8BF7\u9605\u8BFB TypeScript \u4F7F\u7528\u6307\u5357\u3002")],-1),S=e("p",null,"\u5F53\u4F60\u51C6\u5907\u5C06\u5E94\u7528\u53D1\u5E03\u5230\u751F\u4EA7\u73AF\u5883\u65F6\uFF0C\u8BF7\u8FD0\u884C",-1),A=e("pre",null,[e("code",{"v-pre":"true"},`npm run build
`)],-1),k=e("h4",null,"\u901A\u8FC7CDN\u4F7F\u7528Vue",-1),C=e("p",null,"\u4F60\u53EF\u4EE5\u501F\u52A9script\u6807\u7B7E\u76F4\u63A5\u901A\u8FC7CDN\u6765\u4F7F\u7528Vue:",-1),b=e("pre",null,[e("code",{class:"language-javascript","v-pre":"true"},`<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>
`)],-1),N=e("p",null,"\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u4E86 unpkg\uFF0C\u4F46\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u63D0\u4F9B npm \u5305\u670D\u52A1\u7684 CDN\uFF0C\u4F8B\u5982 jsdelivr \u6216 cdnjs\u3002\u5F53\u7136\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4E0B\u8F7D\u6B64\u6587\u4EF6\u5E76\u81EA\u884C\u63D0\u4F9B\u670D\u52A1\u3002 ",-1),x=e("p",null,"\u901A\u8FC7 CDN \u4F7F\u7528 Vue \u65F6\uFF0C\u4E0D\u6D89\u53CA\u201C\u6784\u5EFA\u6B65\u9AA4\u201D\u3002\u8FD9\u4F7F\u5F97\u8BBE\u7F6E\u66F4\u52A0\u7B80\u5355\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7528\u4E8E\u589E\u5F3A\u9759\u6001\u7684 HTML \u6216\u4E0E\u540E\u7AEF\u6846\u67B6\u96C6\u6210\u3002\u4F46\u662F\uFF0C\u4F60\u5C06\u65E0\u6CD5\u4F7F\u7528\u5355\u6587\u4EF6\u7EC4\u4EF6 (SFC) \u8BED\u6CD5\u3002",-1),D=e("p",null,null,-1),T=e("h4",null,"\u4F7F\u7528\u5168\u5C40\u6784\u5EFA\u7248\u672C",-1),M=e("p",null,"\u4E0A\u9762\u7684\u4F8B\u5B50\u4F7F\u7528\u4E86\u5168\u5C40\u6784\u5EFA\u7248\u672C\u7684Vue\uFF0C\u8BE5\u7248\u672C\u7684\u6240\u6709\u9876\u5C42API\u90FD\u4EE5\u5C5E\u6027\u7684\u5F62\u5F0F\u66B4\u9732\u5728\u5168\u5C40\u7684Vue\u5BF9\u8C61\u4E0A\u3002\u8FD9\u91CC\u6709\u4E00\u4E2A\u4F7F\u7528\u5168\u5C40\u6784\u5EFA\u7248\u672C\u7684\u4F8B\u5B50",-1),E=e("pre",null,[e("code",{class:"language-javascript","v-pre":"true"},`<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>

<div id="app">{{ message }}</div>

<script>
  const { createApp } = Vue
  
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
<\/script>
`)],-1),H=e("h4",null,"\u4F7F\u7528ES\u6A21\u5757\u6784\u5EFA\u7248\u672C",-1),P=e("p",null,"\u5728\u672C\u6587\u6863\u7684\u5176\u4F59\u90E8\u5206\u6211\u4EEC\u4F7F\u7528\u7684\u4E3B\u8981\u662FES\u6A21\u5757\u8BED\u6CD5\u3002\u73B0\u4EE3\u6D4F\u89C8\u5668\u5927\u591A\u90FD\u5DF2\u539F\u751F\u652F\u6301ES\u6A21\u5757\u3002\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u50CF\u8FD9\u6837\u901A\u8FC7CDN\u4EE5\u53CA\u539F\u751FES\u6A21\u5757\u4F7F\u7528Vue",-1),I=e("pre",null,[e("code",{class:"language-javascript","v-pre":"true"},`<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
  
  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
<\/script>
`)],-1),w=e("h4",null,"\u542F\u7528 Import maps#",-1),J=e("p",null,"\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u5B8C\u6574\u7684 CDN URL \u6765\u5BFC\u5165\uFF0C\u4F46\u5728\u6587\u6863\u7684\u5176\u4F59\u90E8\u5206\u4E2D\uFF0C\u4F60\u5C06\u770B\u5230\u5982\u4E0B\u4EE3\u7801\uFF1A",-1),L=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`import { createApp } from 'vue'
`)],-1),Y=e("p",null,"\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u5BFC\u5165\u6620\u5C04\u8868 (Import Maps) \u6765\u544A\u8BC9\u6D4F\u89C8\u5668\u5982\u4F55\u5B9A\u4F4D\u5230\u5BFC\u5165\u7684 vue\uFF1A",-1),z=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
<\/script>

<div id="app">{{ message }}</div>

<script type="module">
  import { createApp } from 'vue'

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
<\/script>
`)],-1),K=e("h4",null,"\u62C6\u5206\u6A21\u5757",-1),q=e("p",null,"\u968F\u7740\u5BF9\u8FD9\u4EFD\u6307\u5357\u7684\u9010\u6B65\u6DF1\u5165\uFF0C\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u5C06\u4EE3\u7801\u5206\u5272\u6210\u5355\u72EC\u7684 JavaScript \u6587\u4EF6\uFF0C\u4EE5\u4FBF\u66F4\u5BB9\u6613\u7BA1\u7406\u3002\u4F8B\u5982\uFF1A",-1),F=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`<!-- index.html -->
<script type="module">
  import { createApp } from 'vue'
  import MyComponent from './my-component.js'

  createApp(MyComponent).mount('#app')
<\/script>
`)],-1),U=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`// my-component.js
export default {
  data() {
    return { count: 0 }
  },
  template: \`<div>count is {{ count }}</div>\`
}
`)],-1),B=e("p",null," \u5982\u679C\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u4E86\u4E0A\u9762\u7684 index.html\uFF0C\u4F60\u4F1A\u53D1\u73B0\u5B83\u629B\u51FA\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF0C\u56E0\u4E3A ES \u6A21\u5757\u4E0D\u80FD\u901A\u8FC7 file:// \u534F\u8BAE\u5DE5\u4F5C\u3002\u4E3A\u4E86\u4F7F\u5176\u5DE5\u4F5C\uFF0C\u4F60\u9700\u8981\u4F7F\u7528\u672C\u5730 HTTP \u670D\u52A1\u5668\u901A\u8FC7 http:// \u534F\u8BAE\u63D0\u4F9B index.html\u3002 ",-1),Q=e("p",null,"\u8981\u542F\u52A8\u4E00\u4E2A\u672C\u5730\u7684 HTTP \u670D\u52A1\u5668\uFF0C\u8BF7\u5148\u5B89\u88C5 Node.js\uFF0C\u7136\u540E\u901A\u8FC7\u547D\u4EE4\u884C\u5728 HTML \u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u4E0B\u8FD0\u884C npx serve\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u4EFB\u4F55\u53EF\u4EE5\u57FA\u4E8E\u6B63\u786E\u7684 MIME \u7C7B\u578B\u670D\u52A1\u9759\u6001\u6587\u4EF6\u7684 HTTP \u670D\u52A1\u5668\u3002",-1),R=e("p",null,[t("\u53EF\u80FD\u4F60\u4E5F\u6CE8\u610F\u5230\u4E86\uFF0C\u8FD9\u91CC\u5BFC\u5165\u7684\u7EC4\u4EF6\u6A21\u677F\u662F\u5185\u8054\u7684 JavaScript \u5B57\u7B26\u4E32\u3002\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 VSCode\uFF0C\u4F60\u53EF\u4EE5\u5B89\u88C5 es6-string-html \u6269\u5C55\uFF0C\u7136\u540E\u5728\u5B57\u7B26\u4E32\u524D\u52A0\u4E0A\u4E00\u4E2A\u524D\u7F00\u6CE8\u91CA /"),e("em",null,"html"),t("/ \u4EE5\u9AD8\u4EAE\u8BED\u6CD5\u3002")],-1),X=e("p",null,null,-1),O=e("h4",null,"\u65E0\u9700\u6784\u5EFA\u7684\u7EC4\u5408\u5F0FAPI\u7528\u6CD5",-1),Z=e("p",null,'\u7EC4\u5408\u5F0FAPI\u7684\u8BB8\u591A\u793A\u4F8B\u5C06\u4F7F\u7528<"script" setup>\u8BED\u6CD5\u3002\u5982\u679C\u4F60\u60F3\u5728\u65E0\u9700\u6784\u5EFA\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u7EC4\u5408\u5F0FAPI\uFF0C\u8BF7\u53C2\u9605',-1),$=e("p",null,[e("a",{href:"https://cn.vuejs.org/api/composition-api-setup.html"},"setup()\u9009\u9879")],-1);function W(p,l){return n(),s(u,null,[m,h,v,g,V,j,f,y,S,A,k,C,b,N,x,D,T,M,E,H,P,I,w,J,L,Y,z,K,q,F,U,B,Q,R,X,O,Z,$],64)}const o={render:W};o.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/Start/getStartedQuickly.md";const G={components:{MarkDownComponent:o},setup(){}};function ee(p,l,te,ne,se,oe){const r=a("MarkDownComponent");return n(),s("article",null,[d(r)])}const le=i(G,[["render",ee]]);export{le as default};
