import{l as n,z as r,F as c,q as e,a8 as l,a1 as i,A as u}from"./index.dbdcc64b.js";const p=e("h3",null,"\u58F0\u660E\u5408\u5E76",-1),m=e("p",null,[e("a",{href:"http://ts.xcatliu.com/advanced/declaration-merging.html"},"\u58F0\u660E\u5408\u5E76")],-1),_=e("p",null,"\u5982\u679C\u5B9A\u4E49\u4E86\u4E24\u4E2A\u76F8\u540C\u540D\u5B57\u7684\u51FD\u6570\u3001\u63A5\u53E3\u6216\u7C7B\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4F1A\u5408\u5E76\u6210\u4E00\u4E2A\u7C7B\u578B",-1),d=e("h4",null,"\u51FD\u6570\u7684\u5408\u5E76",-1),g=e("p",null,"\u4E4B\u524D1\u5B66\u4E60\u8FC7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u91CD\u8F7D\u5B9A\u4E49\u591A\u4E2A\u51FD\u6570\u7C7B\u578B",-1),h=e("pre",null,[e("code",{class:"language-javascript","v-pre":"true"},`function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
`)],-1),b=e("h4",null,"\u63A5\u53E3\u7684\u5408\u5E76",-1),f=e("p",null,"\u63A5\u53E3\u4E2D\u7684\u5C5E\u6027\u5728\u5408\u5E76\u65F6\u4F1A\u7B80\u5355\u7684\u5408\u5E76\u5230\u4E00\u4E2A\u63A5\u53E3\u4E2D",-1),v=e("pre",null,[e("code",{class:"language-javascript","v-pre":"true"},`interface Alarm{
  price: number
}
interface Alarm{
  weight: number
}
`)],-1),x=e("p",null,"\u76F8\u5BF9\u4E8E",-1),A=e("pre",null,[e("code",{class:"language-javascript","v-pre":"true"},`interface Alarm{
  price: number
  weight: number
}
`)],-1),w=e("p",null,"\u6CE8\u610F\uFF0C\u5408\u5E76\u7684\u5C5E\u6027\u7684\u7C7B\u578B\u5FC5\u987B\u662F\u552F\u4E00\u7684",-1),j=e("pre",null,[e("code",{class:"language-javascript","v-pre":"true"},`interface Alarm{
  price:number
}
interface Alarm{
  price: number
  weight: number//\u867D\u7136\u91CD\u590D\u4E86\uFF0C\u4F46\u662F\u7C7B\u578B\u90FD\u662Fnumber\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u62A5\u9519
}
`)],-1),k=e("pre",null,[e("code",{class:"language-javascript","v-pre":"true"},`interface Alarm {
    price: number;
}
interface Alarm {
    price: string;  // \u7C7B\u578B\u4E0D\u4E00\u81F4\uFF0C\u4F1A\u62A5\u9519
    weight: number;
}

// index.ts(5,3): error TS2403: Subsequent variable declarations must have the same type.  Variable 'price' must be of type 'number', but here has type 'string'.
`)],-1),y=e("p",null,"\u63A5\u53E3\u4E2D\u65B9\u6CD5\u7684\u5408\u5E76\uFF0C\u4E0E\u51FD\u6570\u7684\u5408\u5E76\u4E0D\u4E00\u6837",-1),C=e("pre",null,[e("code",{class:"language-javascript","v-pre":"true"},`interface Alarm{
  price: number
  alert(s: string): string
}
interface Alarm{
  weight: number
  alert(s: string. n: number):string
}
`)],-1),M=e("p",null,"\u76F8\u5F53\u4E8E",-1),V=e("pre",null,[e("code",{class:"language-javascript","v-pre":"true"},`interface Alarm{
  price: number
  weight: number
  alert(s: sting): string
  alert(s: string,n: number): string
}
`)],-1),$=e("h4",null,"\u7C7B\u7684\u5408\u5E76",-1),B=e("p",null,"\u7C7B\u7684\u5408\u5E76\u4E0E\u63A5\u53E3\u7684\u5408\u5E76\u89C4\u5219\u4E00\u81F4",-1);function F(s,a){return n(),r(c,null,[p,m,_,d,g,h,b,f,v,x,A,w,j,k,y,C,M,V,$,B],64)}const t={render:F};t.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/Ts/declarationMerge.md";const N={components:{MarkdownComponent:t},setup(){}};function S(s,a,q,E,T,z){const o=i("MarkdownComponent");return n(),r("article",null,[u(o)])}const I=l(N,[["render",S]]);export{I as default};
