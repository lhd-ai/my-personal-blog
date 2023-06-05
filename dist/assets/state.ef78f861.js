import{j as e,s as n,F as c,m as t,a7 as u,Z as l,x as i}from"./index.647868c6.js";const p=t("h3",null,"State",-1),d=t("p",null,[t("a",{href:"https://pinia.vuejs.org/zh/core-concepts/state.html"},"State")],-1),_=t("p",null,"\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0Cstate\u90FD\u662F\u4F60\u7684store\u7684\u6838\u5FC3\u3002\u4EBA\u4EEC\u901A\u5E38\u4F1A\u5148\u5B9A\u4E49\u80FD\u4EE3\u8868\u5B83\u4EECAPP\u7684state\u3002\u5728pinia\u4E2D\uFF0Cstate\u88AB\u5B9A\u4E49\u4E3A\u4E00\u4E2A\u8FD4\u56DE\u521D\u59CB\u72B6\u6001\u7684\u51FD\u6570\u3002\u8FD9\u4F7F\u5F97pinia\u53EF\u4EE5\u540C\u65F6\u652F\u6301\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF",-1),h=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // \u4E3A\u4E86\u5B8C\u6574\u7C7B\u578B\u63A8\u7406\uFF0C\u63A8\u8350\u4F7F\u7528\u7BAD\u5934\u51FD\u6570
  state: () => {
    return {
      // \u6240\u6709\u8FD9\u4E9B\u5C5E\u6027\u90FD\u5C06\u81EA\u52A8\u63A8\u65AD\u51FA\u5B83\u4EEC\u7684\u7C7B\u578B
      count: 0,
      name: 'Eduardo',
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
})
`)],-1),m=t("p",null,"\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F Vue 2\uFF0C\u4F60\u5728 state \u4E2D\u521B\u5EFA\u7684\u6570\u636E\u4E0E Vue \u5B9E\u4F8B\u4E2D\u7684 data \u9075\u5FAA\u540C\u6837\u7684\u89C4\u5219\uFF0C\u5373 state \u5BF9\u8C61\u5FC5\u987B\u662F\u6E05\u6670\u7684\uFF0C\u5F53\u4F60\u60F3\u5411\u5176\u6DFB\u52A0\u65B0\u5C5E\u6027\u65F6\uFF0C\u4F60\u9700\u8981\u8C03\u7528 Vue.set() \u3002\u53C2\u8003\uFF1AVue#data\u3002",-1),g=t("h4",null,"TypeScript",-1),S=t("p",null,"\u4F60\u5E76\u4E0D\u9700\u8981\u505A\u592A\u591A\u52AA\u529B\u5C31\u80FD\u4F7F\u4F60\u7684state\u517C\u5BB9TS.pinia\u4F1A\u81EA\u52A8\u63A8\u65AD\u51FA\u4F60\u7684state\u7684\u7C7B\u578B\uFF0C\u4F46\u5728\u4E00\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F60\u5F97\u7528\u4E00\u4E9B\u65B9\u6CD5\u6765\u5E2E\u5B83\u4E00\u628A",-1),f=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`const useStore = defineStore('storeId', {
  state: () => {
    return {
      // \u7528\u4E8E\u521D\u59CB\u5316\u7A7A\u5217\u8868
      userList: [] as UserInfo[],
      // \u7528\u4E8E\u5C1A\u672A\u52A0\u8F7D\u7684\u6570\u636E
      user: null as UserInfo | null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
`)],-1),$=t("p",null,"\u5982\u679C\u4F60\u613F\u610F\uFF0C\u4F60\u53EF\u4EE5\u7528\u4E00\u4E2A\u63A5\u53E3\u5B9A\u4E49 state\uFF0C\u5E76\u6DFB\u52A0 state() \u7684\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u3002",-1),v=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`interface State {
  userList: UserInfo[]
  user: UserInfo | null
}

const useStore = defineStore('storeId', {
  state: (): State => {
    return {
      userList: [],
      user: null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
`)],-1),b=t("h4",null,"\u8BBF\u95EEstate",-1),j=t("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7store\u5B9E\u4F8B\u8BBF\u95EEstate\uFF0C\u76F4\u63A5\u5BF9\u5176\u8FDB\u884C\u8BFB\u5199",-1),I=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`const store = useStore()
store.count++
`)],-1),y=t("h4",null,"\u91CD\u7F6Estate",-1),V=t("p",null,"\u4F60\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528store\u7684$reset()\u65B9\u6CD5\u5C06state\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C",-1),x=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`const store = useStore()
store.$reset()
`)],-1),k=t("h4",null,"\u53D8\u66F4state",-1),C=t("p",null,"\u9664\u4E86\u7528store.count++\u76F4\u63A5\u6539\u53D8store,\u4F60\u8FD8\u53EF\u4EE5\u8C03\u7528$patch\u65B9\u6CD5\u3002\u5B83\u5141\u8BB8\u4F60\u7528\u4E00\u4E2Astate\u7684\u8865\u4E01\u5BF9\u8C61\u5728\u540C\u4E00\u65F6\u95F4\u66F4\u6539\u591A\u4E2A\u5C5E\u6027",-1),w=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO'
})
`)],-1),U=t("p",null,"\u4E0D\u8FC7\uFF0C\u7528\u8FD9\u79CD\u8BED\u6CD5\u7684\u8BDD\uFF0C\u6709\u4E9B\u53D8\u66F4\u771F\u7684\u5F88\u96BE\u5B9E\u73B0\u6216\u8005\u5F88\u8017\u65F6\uFF1A\u4EFB\u4F55\u96C6\u5408\u7684\u4FEE\u6539\uFF08\u4F8B\u5982\uFF0C\u5411\u6570\u7EC4\u4E2D\u6DFB\u52A0\u3001\u79FB\u9664\u4E00\u4E2A\u5143\u7D20\u6216\u662F\u505A splice \u64CD\u4F5C\uFF09\u90FD\u9700\u8981\u4F60\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u96C6\u5408\u3002\u56E0\u6B64\uFF0C$patch \u65B9\u6CD5\u4E5F\u63A5\u53D7\u4E00\u4E2A\u51FD\u6570\u6765\u7EC4\u5408\u8FD9\u79CD\u96BE\u4EE5\u7528\u8865\u4E01\u5BF9\u8C61\u5B9E\u73B0\u7684\u53D8\u66F4\u3002",-1),D=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
`)],-1),M=t("p",null,"\u4E24\u79CD\u53D8\u66F4 store \u65B9\u6CD5\u7684\u4E3B\u8981\u533A\u522B\u662F\uFF0C$patch() \u5141\u8BB8\u4F60\u5C06\u591A\u4E2A\u53D8\u66F4\u5F52\u5165 devtools \u7684\u540C\u4E00\u4E2A\u6761\u76EE\u4E2D\u3002\u540C\u65F6\u8BF7\u6CE8\u610F\uFF0C\u76F4\u63A5\u4FEE\u6539 state\uFF0C$patch() \u4E5F\u4F1A\u51FA\u73B0\u5728 devtools \u4E2D\uFF0C\u800C\u4E14\u53EF\u4EE5\u8FDB\u884C time travel(\u5728 Vue 3 \u4E2D\u8FD8\u6CA1\u6709)\u3002",-1),N=t("h4",null,"\u66FF\u6362state",-1),P=t("p",null,"\u4F60\u4E0D\u80FD\u5B8C\u5168\u66FF\u6362\u6389store\u7684state\uFF0C\u56E0\u4E3A\u90A3\u6837\u4E3A\u7834\u574F\u8D77\u54CD\u5E94\u6027\u3002\u4F46\u662F\u4F60\u53EF\u4EE5patch\u5B83",-1),T=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},"// \u8FD9\u5B9E\u9645\u4E0A\u5E76\u6CA1\u6709\u66FF\u6362`$state`\nstore.$state = { count: 24 }\n// \u5728\u5B83\u5185\u90E8\u8C03\u7528 `$patch()`\uFF1A\nstore.$patch({ count: 24 })\n")],-1),B=t("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u53D8\u66F4 pinia \u5B9E\u4F8B\u7684 state \u6765\u8BBE\u7F6E\u6574\u4E2A\u5E94\u7528\u7684\u521D\u59CB state\u3002\u8FD9\u5E38\u7528\u4E8E SSR \u4E2D\u7684\u6FC0\u6D3B\u8FC7\u7A0B\u3002",-1),E=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`pinia.state.value = {}
`)],-1),F=t("h4",null,"\u8BA2\u9605state",-1),L=t("p",null,"\u7C7B\u4F3C\u4E8E Vuex \u7684 subscribe \u65B9\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 store \u7684 $subscribe() \u65B9\u6CD5\u4FA6\u542C state \u53CA\u5176\u53D8\u5316\u3002\u6BD4\u8D77\u666E\u901A\u7684 watch()\uFF0C\u4F7F\u7528 $subscribe() \u7684\u597D\u5904\u662F subscriptions \u5728 patch \u540E\u53EA\u89E6\u53D1\u4E00\u6B21(\u4F8B\u5982\uFF0C\u5F53\u4F7F\u7528\u4E0A\u9762\u7684\u51FD\u6570\u7248\u672C\u65F6)\u3002",-1),O=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // \u548C cartStore.$id \u4E00\u6837
  mutation.storeId // 'cart'
  // \u53EA\u6709 mutation.type === 'patch object'\u7684\u60C5\u51B5\u4E0B\u624D\u53EF\u7528
  mutation.payload // \u4F20\u9012\u7ED9 cartStore.$patch() \u7684\u8865\u4E01\u5BF9\u8C61\u3002

  // \u6BCF\u5F53\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u6574\u4E2A state \u6301\u4E45\u5316\u5230\u672C\u5730\u5B58\u50A8\u3002
  localStorage.setItem('cart', JSON.stringify(state))
})
`)],-1),A=t("p",null,"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cstate subscription \u4F1A\u88AB\u7ED1\u5B9A\u5230\u6DFB\u52A0\u5B83\u4EEC\u7684\u7EC4\u4EF6\u4E0A(\u5982\u679C store \u5728\u7EC4\u4EF6\u7684 setup() \u91CC\u9762)\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5F53\u8BE5\u7EC4\u4EF6\u88AB\u5378\u8F7D\u65F6\uFF0C\u5B83\u4EEC\u5C06\u88AB\u81EA\u52A8\u5220\u9664\u3002\u5982\u679C\u4F60\u60F3\u5728\u7EC4\u4EF6\u5378\u8F7D\u540E\u4F9D\u65E7\u4FDD\u7559\u5B83\u4EEC\uFF0C\u8BF7\u5C06 { detached: true } \u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u4EE5\u5C06 state subscription \u4ECE\u5F53\u524D\u7EC4\u4EF6\u4E2D\u5206\u79BB\uFF1A",-1),J=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`export default {
  setup() {
    const someStore = useSomeStore()

    // \u5728\u7EC4\u4EF6\u88AB\u5378\u8F7D\u540E\uFF0C\u8BE5\u8BA2\u9605\u4F9D\u65E7\u4F1A\u88AB\u4FDD\u7559\u3002
    someStore.$subscribe(callback, { detached: true })

    // ...
  },
}
`)],-1),R=t("p",null,"TIP",-1),q=t("p",null,"\u4F60\u53EF\u4EE5\u5728 pinia \u5B9E\u4F8B\u4E0A\u4FA6\u542C\u6574\u4E2A state\u3002",-1),z=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`watch(
  pinia.state,
  (state) => {
    // \u6BCF\u5F53\u72B6\u6001\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u6574\u4E2A state \u6301\u4E45\u5316\u5230\u672C\u5730\u5B58\u50A8\u3002
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
`)],-1);function Z(o,a){return e(),n(c,null,[p,d,_,h,m,g,S,f,$,v,b,j,I,y,V,x,k,C,w,U,D,M,N,P,T,B,E,F,L,O,A,J,R,q,z],64)}const s={render:Z};s.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/vue3/Pinia/state.md";const G={components:{MarkDownComponent:s},setup(){}};function H(o,a,K,Q,W,X){const r=l("MarkDownComponent");return e(),n("article",null,[i(r)])}const tt=u(G,[["render",H]]);export{tt as default};
