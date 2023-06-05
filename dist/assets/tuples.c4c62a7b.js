import{j as n,s as e,F as c,m as t,a7 as a,Z as u,x as m}from"./index.647868c6.js";const p="/my-personal-blog/assets/yuanzu.74f5f2dc.png",i=t("h3",null,"\u5143\u7EC4",-1),_=t("p",null,[t("a",{href:"http://ts.xcatliu.com/advanced/tuple.html"},"\u5143\u7EC4")],-1),d=t("p",null,"\u6570\u7EC4\u5408\u5E76\u4E86\u76F8\u540C\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u800C\u5143\u7EC4\u5408\u5E76\u4E86\u4E0D\u540C\u7C7B\u578B\u7684\u5BF9\u8C61",-1),h=t("p",null,"\u5143\u7EC4\u8D77\u6E90\u4E8E\u51FD\u6570\u7F16\u7A0B\u8BED\u8A00\uFF0C\u8FD9\u4E9B\u8BED\u8A00\u4E2D\u4F1A\u9891\u7E41\u4F7F\u7528\u5143\u7EC4",-1),g=t("h4",null,"\u7B80\u5355\u7684\u4F8B\u5B50",-1),b=t("p",null,"\u5B9A\u4E49\u4E00\u5BF9\u503C\u5206\u522B\u4E3Astring\u548Cnumber\u7684\u5143\u7EC4",-1),f=t("img",{src:p},null,-1),v=t("p",null,"\u5F53\u8D4B\u503C\u6216\u8BBF\u95EE\u4E00\u4E2A\u5DF2\u77E5\u7D22\u5F15\u7684\u5143\u7D20\u65F6\uFF0C\u4F1A\u5F97\u5230\u6B63\u786E\u7684\u7C7B\u578B",-1),x=t("pre",null,[t("code",{class:"language-JavaScript","v-pre":"true"},`let tom: [string,number]
tom[0] = 'Tom'
tom[1] = 25

tom[0].slice(1)
tom[1].toFixed(2)
`)],-1),y=t("p",null,"\u4E5F\u53EF\u4EE5\u53EA\u8D4B\u503C\u5176\u4E2D\u4E00\u9879",-1),k=t("pre",null,[t("code",{class:"language-JavaScript","v-pre":"true"},`let tom: [string,number]
tom[0] = 'tom'
`)],-1),w=t("p",null,"\u4F46\u662F\u5F53\u76F4\u63A5\u5BF9\u5143\u7EC4\u7C7B\u578B\u7684\u53D8\u91CF\u8FDB\u884C\u521D\u59CB\u5316\u6216\u8005\u8D4B\u503C\u7684\u65F6\u5019\uFF0C\u9700\u8981\u63D0\u4F9B\u6240\u6709\u5143\u7EC4\u7C7B\u578B\u4E2D\u6307\u5B9A\u7684\u9879",-1),C=t("pre",null,[t("code",{class:"language-JavaScript","v-pre":"true"},`let tom: [string,number]
tom = ['tom',25]

let tomTwo: [string,number]
tom = ['tom']
// Property '1' is missing in type '[string]' but required in type '[string, number]'.
`)],-1),D=t("h4",null,"\u8D8A\u754C\u7684\u5143\u7D20",-1),F=t("p",null,"\u5F53\u6DFB\u52A0\u8D8A\u754C\u7684\u5143\u7D20\u65F6\uFF0C\u5B83\u7684\u7C7B\u578B\u4F1A\u88AB\u9650\u5236\u4E3A\u5143\u7EC4\u4E2D\u6BCF\u4E2A\u7C7B\u578B\u7684\u8054\u5408\u7C7B\u578B\uFF1A",-1),J=t("pre",null,[t("code",{class:"language-JavaScript","v-pre":"true"},`let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
tom.push(true);

// Argument of type 'true' is not assignable to parameter of type 'string | number'.
`)],-1);function S(s,r){return n(),e(c,null,[i,_,d,h,g,b,f,v,x,y,k,w,C,D,F,J],64)}const o={render:S};o.__hmrId="D:/lhdtext/vue3/my-personal-blog/src/markdown/FontEnd/Ts/tuples.md";const T={components:{MarkDownComponent:o},setup(){}};function $(s,r,B,M,V,E){const l=u("MarkDownComponent");return n(),e("article",null,[m(l)])}const j=a(T,[["render",$]]);export{j as default};
