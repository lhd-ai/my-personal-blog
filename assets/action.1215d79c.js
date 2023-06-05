import{j as a,s as r,F as i,m as n,aH as u,aK as m,aL as d,a7 as _,Z as h,ab as g,x as b}from"./index.647868c6.js";const f="/my-personal-blog/assets/action.bd860ac0.png",A="/my-personal-blog/assets/yibuaction.c711a794.png",C="/my-personal-blog/assets/qitaaction.ab32ea2b.png",x="/my-personal-blog/assets/xuanxiangaction.5001bd40.png",y="/my-personal-blog/assets/actionsetup.bd4d9c1c.png",S="/my-personal-blog/assets/actionnosetup.182005df.png",v="/my-personal-blog/assets/dingyueaction.82f56bd9.png",k=n("h3",null,"Action",-1),P=n("p",null,[n("a",{href:"https://pinia.vuejs.org/zh/core-concepts/actions.html"},"Action")],-1),j=n("p",null,"Action\u76F8\u5F53\u4E8E\u7EC4\u4EF6\u4E2D\u7684method\u3002\u5B83\u4EEC\u53EF\u4EE5\u901A\u8FC7defineStore()\u4E2D\u7684actions\u5C5E\u6027\u6765\u5B9A\u4E49\uFF0C\u5E76\u4E14\u5B83\u4EEC\u4E5F\u662F\u5B9A\u4E49\u4E1A\u52A1\u903B\u8F91\u7684\u5B8C\u7F8E\u9009\u62E9",-1),z=n("img",{src:f},null,-1),M=n("p",null,"\u7C7B\u4F3Cgetter,action\u4E5F\u53EF\u901A\u8FC7this\u8BBF\u95EE\u6574\u4E2Astore\u5B9E\u4F8B\uFF0C\u5E76\u652F\u6301\u5B8C\u6574\u7684\u7C7B\u578B\u6807\u6CE8(\u4EE5\u53CA\u81EA\u52A8\u8865\u5168)\u3002\u4E0D\u540C\u7684\u5F0F\uFF0Caction\u53EF\u4EE5\u662F\u5F02\u6B65\u7684\uFF0C\u4F60\u53EF\u4EE5\u5728\u5B83\u4EEC\u91CC\u9762await\u8C03\u7528\u4EFB\u4F55API,\u4EE5\u53CA\u5176\u4ED6action,\u4E0B\u9762\u662F\u4E00\u4E2A\u4F7F\u7528Mande\u7684\u4F8B\u5B50\u3002\u8BF7\u6CE8\u610F\u4F60\u4F7F\u7528\u4EC0\u4E48\u5E93\u5E76\u4E0D\u91CD\u8981\uFF0C\u53EA\u8981\u4F60\u5F97\u5230\u7684\u662F\u4E00\u4E2APromise\uFF0C\u4F60\u751A\u81F3\u53EF\u4EE5\u4F7F\u7528fetch\u51FD\u6570",-1),I=n("img",{src:A},null,-1),w=n("p",null,"\u4F60\u4E5F\u5B8C\u5168\u53EF\u4EE5\u81EA\u7531\u5730\u8BBE\u7F6E\u4EFB\u4F55\u4F60\u60F3\u8981\u7684\u53C2\u6570\u4EE5\u53CA\u8FD4\u56DE\u4EFB\u4F55\u7ED3\u679C\u3002\u5F53\u8C03\u7528action\u65F6\uFF0C\u4E00\u5207\u7C7B\u578B\u4E5F\u90FD\u662F\u53EF\u4EE5\u88AB\u81EA\u52A8\u63A8\u65AD\u51FA\u6765\u7684",-1),D=n("p",null,"Action\u53EF\u4EE5\u50CF\u65B9\u6CD5\u4E00\u6837\u88AB\u8C03\u7528",-1),E=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`export default defineComponent({
  setup() {
    const main = useMainStore()
    // \u4F5C\u4E3A store \u7684\u4E00\u4E2A\u65B9\u6CD5\u8C03\u7528\u8BE5 action
    main.randomizeCounter()

    return {}
  },
})
`)],-1),V=n("h4",null,"\u8BBF\u95EE\u5176\u4ED6store\u7684action",-1),B=n("p",null,"\u60F3\u8981\u4F7F\u7528\u53E6\u4E00\u4E2Astore\u7684\u8BDD\uFF0C\u90A3\u4F60\u76F4\u63A5\u5728action\u4E2D\u8C03\u7528\u5C31\u597D\u4E86",-1),F=n("img",{src:C},null,-1),N=n("h4",null,"\u4F7F\u7528setup()\u65F6\u7684\u7528\u6CD5",-1),R=n("p",null,"\u4F60\u53EF\u4EE5\u5C06\u4EFB\u4F55action\u4F5C\u4E3Astore\u7684\u4E00\u4E2A\u65B9\u6CD5\u76F4\u63A5\u8C03\u7528",-1),q=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`export default {
  setup(){
    const store = useStore()
    store.randomizeCounter()
  }
}
`)],-1),H=u('<h4>\u4F7F\u7528\u9009\u9879\u5F0FAPI\u7684\u7528\u6CD5</h4><p>\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\u4F60\u53EF\u4EE5\u5047\u8BBE\u76F8\u5173\u7684store\u5DF2\u7ECF\u521B\u5EFA\u4E86</p><img src="'+x+'"><h5>\u4F7F\u7528setup()</h5><p>\u867D\u7136\u5E76\u4E0D\u662F\u6BCF\u4E2A\u5F00\u53D1\u8005\u90FD\u4F1A\u4F7F\u7528\u7EC4\u5408\u5F0FAPI\uFF0C\u4F46setup()\u94A9\u5B50\u4F9D\u65E7\u53EF\u4EE5\u4F7FPinia\u5728\u9009\u9879\u5F0FAPI\u4E2D\u66F4\u6613\u7528\u3002\u5E76\u4E14\u4E0D\u9700\u8981\u989D\u5916\u7684\u6620\u5C04\u8F85\u52A9\u51FD\u6570</p><img src="'+y+'"><h5>\u4E0D\u4F7F\u7528setup()</h5><p>\u5982\u679C\u4F60\u4E0D\u559C\u6B22\u4F7F\u7528\u7EC4\u5408\u5F0FAPI,\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528mapActions()\u8F85\u52A9\u51FD\u6570\u5C06action\u5C5E\u6027\u6620\u5C04\u4E3A\u4F60\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5</p><img src="'+S+'"><h4>\u8BA2\u9605action</h4><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 store.$onAction() \u6765\u76D1\u542C action \u548C\u5B83\u4EEC\u7684\u7ED3\u679C\u3002\u4F20\u9012\u7ED9\u5B83\u7684\u56DE\u8C03\u51FD\u6570\u4F1A\u5728 action \u672C\u8EAB\u4E4B\u524D\u6267\u884C\u3002after \u8868\u793A\u5728 promise \u89E3\u51B3\u4E4B\u540E\uFF0C\u5141\u8BB8\u4F60\u5728 action \u89E3\u51B3\u540E\u6267\u884C\u4E00\u4E2A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u540C\u6837\u5730\uFF0ConError \u5141\u8BB8\u4F60\u5728 action \u629B\u51FA\u9519\u8BEF\u6216 reject \u65F6\u6267\u884C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u8FD9\u4E9B\u51FD\u6570\u5BF9\u4E8E\u8FFD\u8E2A\u8FD0\u884C\u65F6\u9519\u8BEF\u975E\u5E38\u6709\u7528\uFF0C\u7C7B\u4F3C\u4E8EVue docs \u4E2D\u7684\u8FD9\u4E2A\u63D0\u793A\u3002 </p><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5728\u8FD0\u884C action \u4E4B\u524D\u4EE5\u53CA action resolve/reject \u4E4B\u540E\u6253\u5370\u65E5\u5FD7\u8BB0\u5F55</p><p></p><img src="'+v+'"><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Caction\u8BA2\u9605\u5668\u4F1A\u88AB\u7ED1\u5B9A\u5230\u6DFB\u52A0\u5B83\u4EEC\u7684\u7EC4\u4EF6\u4E0A(\u5982\u679Cstore\u5728\u7EC4\u4EF6\u7684setup()\u5185\uFF09\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5F53\u8BE5\u7EC4\u4EF6\u88AB\u5378\u8F7D\u65F6\uFF0C\u5B83\u4EEC\u4F1A\u88AB\u81EA\u52A8\u5220\u9664\u3002\u5982\u679C\u4F60\u60F3\u5728\u7EC4\u4EF6\u5378\u8F7D\u540E\u4F9D\u65E7\u4FDD\u7559\u5B83\u4EEC\uFF0C\u8BF7\u5C06true\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9action\u8BA2\u9605\u5668\uFF0C\u4EE5\u4FBF\u5C06\u5176\u4ECE\u5F53\u524D\u7EC4\u4EF6\u4E2D\u5206\u79BB</p>',15),K=n("pre",null,[n("code",{class:"language-js","v-pre":"true"},`export default{
  setup(){
    const someStore = useSomeStore()
    //\u5728\u7EC4\u4EF6\u88AB\u5378\u8F7D\u540E\uFF0C\u8FD9\u4E2A\u8BA2\u9605\u4F9D\u65E7\u4F1A\u88AB\u4FDD\u7559
    someStore.$onAction(callback,true)
  }
}`)],-1);function L(e,o){return a(),r(i,null,[k,P,j,z,M,I,w,D,E,V,B,F,N,R,q,H,K],64)}const p={render:L};p.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/Pinia/action.md";const T=m("action",{state:()=>({count:0}),actions:{increment(){this.count++},randomizeCounter(){this.count=Math.round(100*Math.random())}}}),Z={components:{MarkDownComponent:p},setup(){const e=T(),{increment:o,randomizeCounter:c}=e,{count:t}=d(e);return{increment:o,randomizeCounter:c,count:t}}};function $(e,o,c,t,G,J){const l=h("MarkDownComponent");return a(),r(i,null,[n("div",null,g(t.count),1),n("button",{onClick:o[0]||(o[0]=(...s)=>t.increment&&t.increment(...s))},"\u6309\u94AE1"),n("button",{onClick:o[1]||(o[1]=(...s)=>t.randomizeCounter&&t.randomizeCounter(...s))},"\u6309\u94AE2"),n("article",null,[b(l)])],64)}const Q=_(Z,[["render",$]]);export{Q as default};