import{l as a,z as p,F as l,aH as u,q as t,aK as i,aL as _,a8 as d,a1 as m,ac as r,A as h}from"./index.55e83ec9.js";const b="/my-personal-blog/assets/getter.cbd59d51.png",f="/my-personal-blog/assets/gettertwo.8dbbb2b1.png",y="/my-personal-blog/assets/getterthree.3b8f261a.png",S="/my-personal-blog/assets/getterfour.b7e74592.png",x="/my-personal-blog/assets/gettercanshu.67982522.png",v="/my-personal-blog/assets/gettercanshutwo.97af0ff2.png",C="/my-personal-blog/assets/getterhuancun.b51cdab2.png",D="/my-personal-blog/assets/xuanxianggetter.5919d918.png",I="/my-personal-blog/assets/xuanxiangsetup.149e399e.png",P="/my-personal-blog/assets/xuanxiangnosetup.e184b565.png",k=u('<h3>Getter</h3><p><a href="https://pinia.vuejs.org/zh/core-concepts/getters.html">Getter</a></p><p>Getter\u5B8C\u5168\u7B49\u540C\u4E8Estore\u7684state\u7684\u8BA1\u7B97\u503C\u3002\u53EF\u4EE5\u901A\u8FC7defineStore()\u4E2D\u7684getters\u5C5E\u6027\u6765\u5B9A\u4E49\u5B83\u4EEC\u3002\u63A8\u8350\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\uFF0C\u5E76\u4E14\u5B83\u5C06\u63A5\u6536state\u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570</p><img src="'+b+'"><p>\u5927\u591A\u6570\u65F6\u5019\uFF0Cgetter\u4EC5\u4F9D\u8D56state,\u4E0D\u8FC7\uFF0C\u6709\u65F6\u5B83\u4EEC\u4E5F\u53EF\u80FD\u4F1A\u4F7F\u7528\u5176\u4ED6getter.\u56E0\u6B64\uFF0C\u5373\u4F7F\u5728\u4F7F\u7528\u5E38\u89C4\u51FD\u6570\u5B9A\u4E49getter\u65F6\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7this\u8BBF\u95EE\u5230\u6574\u4E2Astore\u5B9E\u4F8B\uFF0C\u4F46(\u5728TypeScript)\u5FC5\u987B\u5B9A\u4E49\u8FD4\u56DE\u7C7B\u578B\u3002\u8FD9\u662F\u4E3A\u4E86\u907F\u514DTypeScript\u7684\u5DF2\u77E5\u7F3A\u9677\uFF0C\u4E0D\u8FC7\u8FD9\u4E0D\u5F71\u54CD\u7528\u7BAD\u5934\u51FD\u6570\u5B9A\u4E49\u7684getter,\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u4E0D\u4F7F\u7528this\u7684getter</p><img src="'+f+'"><p>\u7136\u540E\u4F60\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EEstore\u5B9E\u4F8B\u4E0A\u7684getter\u4E86</p><img src="'+y+'"><h4>\u8BBF\u95EE\u5176\u4ED6getter</h4><p>\u4E0E\u5176\u4ED6\u5C5E\u6027\u4E00\u6837\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7EC4\u5408\u591A\u4E2Agetter\u3002\u901A\u8FC7this,\u4F60\u53EF\u4EE5\u8BBF\u95EE\u5230\u5176\u4ED6\u4EFB\u4F55getter\u3002\u5373\u4F7F\u4F60\u6CA1\u6709\u4F7F\u7528TypeScript\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7528JSDoc\u6765\u8BA9\u4F60\u7684IDE\u63D0\u793A\u7C7B\u578B</p><img src="'+S+'"><h4>\u5411getter\u4F20\u9012\u53C2\u6570</h4><p>Getter\u53EA\u662F\u5E55\u540E\u7684\u8BA1\u7B97\u5C5E\u6027\uFF0C\u6240\u6709\u4E0D\u53EF\u4EE5\u5411\u4ED6\u4EEC\u4F20\u9012\u4EFB\u4F55\u53C2\u6570\u3002\u4E0D\u8FC7\uFF0C\u4F60\u53EF\u4EE5\u4ECEgetter\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4EFB\u610F\u53C2\u6570</p><img src="'+x+'"><p>\u5E76\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528</p><img src="'+v+'"><p>\u8BF7\u6CE8\u610F\uFF0C\u5F53\u4F60\u8FD9\u6837\u505A\u65F6\uFF0Cgetter\u5C06\u4E0D\u518D\u88AB\u7F13\u5B58\uFF0C\u5B83\u4EEC\u53EA\u662F\u4E00\u4E2A\u88AB\u4F60\u8C03\u7528\u7684\u51FD\u6570\u3002\u4E0D\u8FC7\uFF0C\u4F60\u53EF\u4EE5\u5728getter\u672C\u8EAB\u4E2D\u7F13\u5B58\u4E00\u4E9B\u7ED3\u679C\uFF0C\u867D\u7136\u8FD9\u79CD\u505A\u6CD5\u5E76\u4E0D\u5E38\u89C1\uFF0C\u4F46\u6709\u8BC1\u660E\u8868\u73B0\u5B83\u7684\u6027\u80FD\u4F1A\u66F4\u597D</p><img src="'+C+'"><h4>\u8BBF\u95EE\u5176\u4ED6store\u7684getter</h4><p>\u60F3\u8981\u4F7F\u7528\u53E6\u4E00\u4E2Astore\u7684getter\u7684\u8BDD\uFF0C\u90A3\u5C31\u76F4\u63A5\u5728getter\u5185\u4F7F\u7528\u5C31\u597D</p>',20),w=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`import { useOtherStore } from './other-store'

export const useStore = defineStore('main', {
  state: () => ({
    // ...
  }),
  getters: {
    otherGetter(state) {
      const otherStore = useOtherStore()
      return state.localData + otherStore.data
    },
  },
})
`)],-1),B=t("h4",null,"\u4F7F\u7528setup()\u65F6\u7684\u7528\u6CD5",-1),G=t("p",null,"\u4F5C\u4E3Astore\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u4EFB\u4F55getter(\u4E0Estate\u5C5E\u6027\u5B8C\u5168\u4E00\u6837)",-1),O=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`export default {
  setup(){
    const store = useStore()
    store.count = 3
    store.doubleCount//6
  }
}
`)],-1),A=t("h4",null,"\u4F7F\u7528\u9009\u9879\u5F0FAPI\u7684\u7528\u6CD5",-1),T=t("p",null,"\u5728\u4E0B\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u5047\u8BBE\u76F8\u5173\u7684store\u5DF2\u7ECF\u521B\u5EFA\u4E86",-1),U=t("img",{src:D},null,-1),V=t("h5",null,"\u4F7F\u7528setup()",-1),j=t("p",null,"\u867D\u7136\u5E76\u4E0D\u662F\u6BCF\u4E2A\u5F00\u53D1\u8005\u90FD\u4F1A\u4F7F\u7528\u7EC4\u5408\u5F0FAPI,\u4F46setup()\u94A9\u5B50\u4F9D\u65E7\u53EF\u4EE5\u4F7FPinia\u5728\u9009\u9879\u5F0FAPI\u4E2D\u66F4\u6613\u7528\u3002\u5E76\u4E14\u4E0D\u9700\u8981\u989D\u5916\u7684\u6620\u5C04\u8F85\u52A9\u51FD\u6570",-1),E=t("img",{src:I},null,-1),F=t("h5",null,"\u4E0D\u4F7F\u7528setup()",-1),M=t("p",null,"\u4F60\u53EF\u4EE5\u4F7F\u7528\u524D\u4E00\u8282\u7684state\u4E2D\u7684mapState()\u51FD\u6570\u6765\u5C06\u5176\u6620\u5C04\u4E3Agetters",-1),N=t("img",{src:P},null,-1);function z(e,s){return a(),p(l,null,[k,w,B,G,O,A,T,U,V,j,E,F,M,N],64)}const c={render:z};c.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/Pinia/getter.md";const R=i("getter",{state:()=>({count:3,users:[{id:1,name:"111"},{id:2,name:"222"},{id:3,name:"333"}]}),getters:{doubleCount:e=>e.count*2,doublePlusOne(){return this.doubleCount+1},getUserById:e=>s=>e.users.find(n=>n.id===s)}}),q={components:{MarkDownComponent:c},setup(){const e=R(),{doubleCount:s,doublePlusOne:n,getUserById:o}=_(e);return{doubleCount:s,doublePlusOne:n,getUserById:o}}};function H(e,s,n,o,J,K){const g=m("MarkDownComponent");return a(),p(l,null,[t("div",null,r(o.doubleCount),1),t("div",null,r(o.doublePlusOne),1),t("div",null,"User2:"+r(o.getUserById(2).name),1),t("article",null,[h(g)])],64)}const $=d(q,[["render",H]]);export{$ as default};
