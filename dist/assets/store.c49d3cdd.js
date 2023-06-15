import{j as r,s as u,F as c,m as e,aG as p,aJ as d,r as _,aK as m,a7 as S,Z as h,ab as f,x as C}from"./index.420141bb.js";const g=e("h3",null,"\u5B9A\u4E49Store",-1),v=e("p",null,[e("a",{href:"https://pinia.vuejs.org/zh/core-concepts/"},"\u5B9A\u4E49Store")],-1),b=e("p",null,"\u5728\u6DF1\u5165\u7814\u7A76\u6838\u5FC3\u6982\u5FF5\u4E4B\u524D\uFF0C\u6211\u4EEC\u5F97\u77E5\u9053Store\u662F\u7528defineStore()\u5B9A\u4E49\u7684\uFF0C\u5B83\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u8981\u6C421\u662F\u4E00\u4E2A\u72EC\u4E00\u65E0\u4E8C\u7684\u540D\u5B57",-1),x=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},"import { defineStore } from 'Pinia'\n\n// \u4F60\u53EF\u4EE5\u5BF9 `defineStore()` \u7684\u8FD4\u56DE\u503C\u8FDB\u884C\u4EFB\u610F\u547D\u540D\uFF0C\u4F46\u6700\u597D\u4F7F\u7528 store \u7684\u540D\u5B57\uFF0C\u540C\u65F6\u4EE5 `use` \u5F00\u5934\u4E14\u4EE5 `Store` \u7ED3\u5C3E\u3002(\u6BD4\u5982 `useUserStore`\uFF0C`useCartStore`\uFF0C`useProductStore`)\n// \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4F60\u7684\u5E94\u7528\u4E2D Store \u7684\u552F\u4E00 ID\u3002\n\nexport const useStore = defineStore('main', {\n  //\u5176\u4ED6\u914D\u7F6E\n})\n")],-1),P=e("p",null,"\u8FD9\u4E2A\u540D\u5B57\uFF0C\u4E5F\u88AB\u7528\u4F5Cid,\u662F\u5FC5\u987B\u4F20\u5165\u7684\uFF0CPinia\u5C06\u7528\u5B83\u8FDE\u63A5store\u548Cdevtools\u3002\u4E3A\u4E86\u517B\u6210\u4E60\u60EF\u6027\u7684\u7528\u6CD5\uFF0C\u5C06\u8FD4\u56DE\u7684\u51FD\u6570\u547D\u540D\u4E3Ause...\u662F\u4E00\u4E2A\u7B26\u5408\u7EC4\u5408\u5F0F\u51FD\u6570\u98CE\u683C\u7684\u7EA6\u5B9A ",-1),V=e("p",null,"defineStore()\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u63A5\u53D7\u4E24\u7C7B\u503C\uFF1ASetup\u51FD\u6570\u6216Option\u5BF9\u8C61",-1),j=e("p",null,null,-1),k=e("h4",null,"Option Store",-1),D=e("p",null,"\u4E0E Vue \u7684\u9009\u9879\u5F0F API \u7C7B\u4F3C\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5E26\u6709 state\u3001actions \u4E0E getters \u5C5E\u6027\u7684 Option \u5BF9\u8C61",-1),I=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
`)],-1),O=p("<p>\u4F60\u53EF\u4EE5\u8BA4\u4E3Astate\u662Fstore\u7684\u6570\u636E(data),getters\u662Fstore\u7684\u8BA1\u7B97\u5C5E\u6027(computed)\u800Cactions\u5219\u662F\u65B9\u6CD5(methods)</p><p>\u4E3A\u65B9\u4FBF\u4E0A\u624B\u4F7F\u7528\uFF0COption Store\u5E94\u5C3D\u53EF\u80FD\u76F4\u89C2\u7B80\u5355</p><h4>Setip Store</h4><p>\u4E5F\u5B58\u5728\u53E6\u4E00\u79CD\u5B9A\u4E49store\u7684\u53EF\u7528\u8BED\u6CD5\u3002\u4E0EVue\u7EC4\u5408\u5F0FAPI\u7684setup\u51FD\u6570\u76F8\u4F3C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u5B9A\u4E49\u4E86\u4E00\u4E9B\u54CD\u5E94\u5F0F\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5E76\u4E14\u8FD4\u56DE\u4E00\u4E2A\u5E26\u6709\u6211\u4EEC\u60F3\u66B4\u9732\u51FA\u53BB\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u7684\u5BF9\u8C61</p><p>\u5728 Setup Store \u4E2D\uFF1A</p><ul><li>ref() \u5C31\u662F state \u5C5E\u6027</li><li>computed() \u5C31\u662F getters</li><li>function() \u5C31\u662F actions Setup store \u6BD4 Option Store \u5E26\u6765\u4E86\u66F4\u591A\u7684\u7075\u6D3B\u6027\uFF0C\u56E0\u4E3A\u4F60\u53EF\u4EE5\u5728\u4E00\u4E2A store \u5185\u521B\u5EFA\u4FA6\u542C\u5668\uFF0C\u5E76\u81EA\u7531\u5730\u4F7F\u7528\u4EFB\u4F55\u7EC4\u5408\u5F0F\u51FD\u6570\u3002\u4E0D\u8FC7\uFF0C\u8BF7\u8BB0\u4F4F\uFF0C\u4F7F\u7528\u7EC4\u5408\u5F0F\u51FD\u6570\u4F1A\u8BA9 SSR \u53D8\u5F97\u66F4\u52A0\u590D\u6742\u3002</li></ul><h4>\u4F60\u5E94\u8BE5\u9009\u7528\u54EA\u79CD\u8BED\u6CD5</h4><p>\u548C\u5728 Vue \u4E2D\u5982\u4F55\u9009\u62E9\u7EC4\u5408\u5F0F API \u4E0E\u9009\u9879\u5F0F API \u4E00\u6837\uFF0C\u9009\u62E9\u4F60\u89C9\u5F97\u6700\u8212\u670D\u7684\u90A3\u4E00\u4E2A\u5C31\u597D\u3002\u5982\u679C\u4F60\u8FD8\u4E0D\u786E\u5B9A\uFF0C\u53EF\u4EE5\u5148\u8BD5\u8BD5 Option Store\u3002</p><h4>\u4F7F\u7528Store</h4><p>\u867D\u7136\u6211\u4EEC\u524D\u9762\u5B9A\u4E49\u4E86\u4E00\u4E2Astore\uFF0C\u4F46\u5728setup()\u8C03\u7528useStore()\u4E4B\u524D\uFF0Cstore\u5B9E\u4F8B\u662F\u4E0D\u4F1A\u88AB\u521B\u5EFA\u7684</p>",10),R=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const store = useCounterStore()

    return {
      // \u4E3A\u4E86\u80FD\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\u5B83\uFF0C\u4F60\u53EF\u4EE5\u8FD4\u56DE\u6574\u4E2A Store \u5B9E\u4F8B\u3002
      store,
    }
  },
}
`)],-1),A=e("p",null,"\u4F60\u53EF\u4EE5\u5B9A\u4E49\u4EFB\u610F\u591A\u7684 store\uFF0C\u4F46\u4E3A\u4E86\u8BA9\u4F7F\u7528 pinia \u7684\u76CA\u5904\u6700\u5927\u5316(\u6BD4\u5982\u5141\u8BB8\u6784\u5EFA\u5DE5\u5177\u81EA\u52A8\u8FDB\u884C\u4EE3\u7801\u5206\u5272\u4EE5\u53CA TypeScript \u63A8\u65AD)\uFF0C\u4F60\u5E94\u8BE5\u5728\u4E0D\u540C\u7684\u6587\u4EF6\u4E2D\u53BB\u5B9A\u4E49 store\u3002 ",-1),T=e("p",null,"\u5982\u679C\u4F60\u8FD8\u4E0D\u4F1A\u4F7F\u7528 setup \u7EC4\u4EF6\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6620\u5C04\u8F85\u52A9\u51FD\u6570\u6765\u4F7F\u7528 Pinia\u3002",-1),w=e("p",null,"\u4E00\u65E6 store \u88AB\u5B9E\u4F8B\u5316\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u5728 store \u7684 state\u3001getters \u548C actions \u4E2D\u5B9A\u4E49\u7684\u4EFB\u4F55\u5C5E\u6027\u3002\u6211\u4EEC\u5C06\u5728\u540E\u7EED\u7AE0\u8282\u7EE7\u7EED\u4E86\u89E3\u8FD9\u4E9B\u7EC6\u8282\uFF0C\u76EE\u524D\u81EA\u52A8\u8865\u5168\u5C06\u5E2E\u52A9\u4F60\u4F7F\u7528\u76F8\u5173\u5C5E\u6027\u3002",-1),y=e("p",null,"\u8BF7\u6CE8\u610F\uFF0Cstore \u662F\u4E00\u4E2A\u7528 reactive \u5305\u88C5\u7684\u5BF9\u8C61\uFF0C\u8FD9\u610F\u5473\u7740\u4E0D\u9700\u8981\u5728 getters \u540E\u9762\u5199 .value\uFF0C\u5C31\u50CF setup \u4E2D\u7684 props \u4E00\u6837\uFF0C\u5982\u679C\u4F60\u5199\u4E86\uFF0C\u6211\u4EEC\u4E5F\u4E0D\u80FD\u89E3\u6784\u5B83\uFF1A",-1),B=e("p",null,null,-1),E=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`export default defineComponent({
  setup() {
    const store = useCounterStore()
    // \u274C \u8FD9\u5C06\u65E0\u6CD5\u751F\u6548\uFF0C\u56E0\u4E3A\u5B83\u7834\u574F\u4E86\u54CD\u5E94\u6027
    // \u8FD9\u4E0E\u4ECE \`props\` \u4E2D\u89E3\u6784\u662F\u4E00\u6837\u7684\u3002
    const { name, doubleCount } = store

    name // "eduardo"
    doubleCount // 2

    return {
      // \u59CB\u7EC8\u662F "eduardo"
      name,
      // \u59CB\u7EC8\u662F 2
      doubleCount,
      // \u8FD9\u4E2A\u5C06\u662F\u54CD\u5E94\u5F0F\u7684
      doubleValue: computed(() => store.doubleCount),
      }
  },
})

`)],-1),F=e("p",null,"\u4E3A\u4E86\u4ECE store \u4E2D\u63D0\u53D6\u5C5E\u6027\u65F6\u4FDD\u6301\u5176\u54CD\u5E94\u6027\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 storeToRefs()\u3002\u5B83\u5C06\u4E3A\u6BCF\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5C5E\u6027\u521B\u5EFA\u5F15\u7528\u3002\u5F53\u4F60\u53EA\u4F7F\u7528 store \u7684\u72B6\u6001\u800C\u4E0D\u8C03\u7528\u4EFB\u4F55 action \u65F6\uFF0C\u5B83\u4F1A\u975E\u5E38\u6709\u7528\u3002\u8BF7\u6CE8\u610F\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u4ECE store \u4E2D\u89E3\u6784 action\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4E5F\u88AB\u7ED1\u5B9A\u5230 store \u4E0A\uFF1A",-1),M=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const store = useCounterStore()
    // \`name\` and \`doubleCount\` \u90FD\u662F\u54CD\u5E94\u5F0F refs
    // \u8FD9\u4E5F\u5C06\u4E3A\u7531\u63D2\u4EF6\u6DFB\u52A0\u7684\u5C5E\u6027\u521B\u5EFA refs
    // \u540C\u65F6\u4F1A\u8DF3\u8FC7\u4EFB\u4F55 action \u6216\u975E\u54CD\u5E94\u5F0F(\u975E ref/\u54CD\u5E94\u5F0F)\u5C5E\u6027
    const { name, doubleCount } = storeToRefs(store)
    // \u540D\u4E3A increment \u7684 action \u53EF\u4EE5\u76F4\u63A5\u63D0\u53D6
    const { increment } = store

    return {
      name,
      doubleCount,
      increment,
    }
  },
})
`)],-1);function N(t,n){return r(),u(c,null,[g,v,b,x,P,V,j,k,D,I,O,R,A,T,w,y,B,E,F,M],64)}const a={render:N};a.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/Pinia/store.md";const $=d("main",()=>{const t=_(0);function n(){t.value++}return{count:t,increment:n}}),z=$,G={components:{MarkDownComponent:a},setup(){const t=z(),{count:n}=m(t),{increment:s}=t;return{count:n,increment:s}}};function J(t,n,s,o,K,U){const i=h("MarkDownComponent");return r(),u(c,null,[e("div",null,f(o.count),1),e("button",{onClick:n[0]||(n[0]=(...l)=>o.increment&&o.increment(...l))},"\u6309\u94AE"),e("article",null,[C(i)])],64)}const q=S(G,[["render",J]]);export{q as default};
