import{m as A}from"./mitt.ec03f52f.js";import{e as c,r as E,a as d,j as a,s as m,m as u,ab as t,b as l,F as _,H as h,a7 as g,x as D,E as x}from"./index.5cd7bac4.js";const y=c({__name:"commChild",props:{name:String,age:{type:Number,default:18}},emits:["childone"],setup(B,{expose:n,emit:e}){let F=E("\u6211\u662F\u5B50\u7EC4\u4EF61");e("childone",F),n({text:F});let o=E(d("parent"));function C(){A.emit("handleChange","\u6211\u662F\u5144\u5F1F\u7EC4\u4EF61")}return(s,r)=>(a(),m(_,null,[u("h1",null,"\u6211\u662F"+t(B.name)+t(B.age)+" (props)\u7684\u5B50\u7EC4\u4EF6",1),u("p",null,t(l(o))+"(provide/inject)",1),u("button",{onClick:C},"\u53D1\u9001\u7ED9\u5144\u5F1F\u7EC4\u4EF6(mitt)")],64))}}),k={props:{name:String},setup(B,{emit:n,expose:e}){let F="\u6211\u662F\u5B50\u7EC4\u4EF62";n("childtwo",F),e({text:F});let o=E(d("parent")),C=E("");return console.log(C.value),h(()=>{A.on("handleChange",s=>{C.value=s})}),{father:o,brother:C}}};function b(B,n,e,F,o,C){return a(),m("div",null,[u("h1",null,"\u6211\u662F"+t(e.name)+"\u7684\u5B50\u7EC4\u4EF6",1),u("p",null,t(F.father),1),u("p",null,t(F.brother),1)])}const w=g(k,[["render",b]]),T=u("h1",null,"\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F",-1),$=u("p",{style:{"margin-top":"50px"}}," \u65B9\u5F0F\u4E00\uFF1A\u901A\u8FC7props\u53EF\u4EE5\u7236\u4F20\u5B50\uFF0C\u7236\u7EC4\u4EF6\u901A\u8FC7\u5B57\u9762\u91CF\u8FDB\u884C\u4F20\u503C,\u5B50\u7EC4\u4EF6\u901A\u8FC7props\u63A5\u6536\u3002vue2\u65B9\u5F0F\u201Cprops:{name:String}\u201D.vue3\u53EF\u4EE5\u91C7\u7528\u6DF7\u5408\u6A21\u5F0F\uFF0C\u4E5F\u5C31\u662F\u548Cvue2\u4E00\u6837\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528vue3\u7684\u8BED\u6CD5\u7CD6\uFF0C\u5BFC\u5165defineProps\u4EE3\u66FFprops,\u5199\u6CD5\u548Cprops\u5199\u6CD5\u4E00\u6837 ",-1),j=u("p",{style:{"margin-top":"50px"}},' \u65B9\u5F0F\u4E8C\uFF1Avue2\u4E2D\u662F\u901A\u8FC7\u5728\u5B50\u7EC4\u4EF6\u4E2Dthis.$emit\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D\u79F0\uFF0C\u540E\u9762\u53C2\u6570\u4F20\u53C2\uFF0C\u5728\u7236\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684\u5B50\u7EC4\u4EF6\u6807\u7B7E\u91CC@\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D="\u7236\u7EC4\u4EF6"\u3002\u5728\u7236\u7EC4\u4EF6\u4E8B\u4EF6\u91CC\u53EF\u4EE5\u63A5\u6536\u5B50\u7EC4\u4EF6\u4F20\u8FC7\u6765\u7684\u53C2\u6570',-1),S=u("p",null,"vue3\u4E2D\uFF0C\u65B9\u6CD5\u57FA\u672C\u7C7B\u4F3C\uFF0C\u5B50\u7EC4\u4EF6\u4E2D\u76F4\u63A5\u901A\u8FC7setup\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u91CC\u5305\u542B\u7684emit\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u4E24\u79CD\u65B9\u5F0F\uFF0C\u4E0D\u4F7F\u7528setup\u8BED\u6CD5\u7CD6\u5219\u76F4\u63A5\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u53C2{emit}\uFF0Cemit\u7528\u6CD5\u548Cthis.$emit\u4E00\u6837\uFF0C\u5982\u679C\u4F7F\u7528\u8BED\u6CD5\u7CD6\uFF0C\u9700\u8981\u5BFC\u5165defineEmits,\u7136\u540E\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u521B\u5EFA\u5B9E\u4F8B\u65F6\uFF0CdefineEmits\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\u91CC\u9762\u5305\u542B\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u540D\u79F0\uFF0C\u521B\u5EFA\u5B9E\u4F8B\u4E4B\u540E\u7528\u6CD5\u548Cemit\u4E00\u6837\uFF0C\u533A\u522B\u662F\u8FD9\u79CD\u65B9\u6CD5\u5E26\u7684\u53C2\u6570\u5728\u7236\u7EC4\u4EF6\u4E2D\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528\u9700\u8981\u901A\u8FC7.value\u62FF\u5230\u4F20\u7684\u503C ",-1),N=u("p",{style:{"margin-top":"50px"}},"\u65B9\u5F0F\u4E09\uFF0C\u7236\u7EC4\u4EF6\u5728\u8C03\u7528\u5B50\u7EC4\u4EF6\u65F6\u7ED9\u5B50\u7EC4\u4EF6\u7ED1\u5B9Aref\uFF0C\u5B50\u7EC4\u4EF6\u901A\u8FC7expose\u66B4\u9732\u7684\u516C\u5171\u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u65B9\u6CD5\u5728\u7236\u7EC4\u4EF6\u83B7\u53D6\u5230\u3002\u9700\u8981\u6CE8\u610F\uFF0Cref\u4F20\u503C\u9700\u8981\u7B49\u5230dom\u6302\u8F7D\u5B8C\u6210\u4E4B\u540E\u624D\u53EF\u4EE5\u83B7\u53D6\u5230",-1),O=u("p",{style:{"margin-top":"50px"}},"\u65B9\u5F0F\u56DB\uFF1A\u7956\u5148\u7EC4\u4EF6\u901A\u8FC7provide\u8BBE\u7F6E\u4F20\u51FA\u7684\u53C2\u6570\u540D\u79F0\u548C\u53C2\u6570\u503C\uFF0C\u5B50\u7EC4\u4EF6\u901A\u8FC7inject\u63A5\u6536",-1),M=u("p",{style:{"margin-top":"50px"}},"\u65B9\u5F0F\u4E94\uFF0Cvue2\u53EF\u4EE5\u901A\u8FC7EventBus\u7528\u4E8E\u5144\u5F1F\u4E4B\u95F4\u4F20\u503C\uFF0Cvue3\u53D6\u6D88\u4E86\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6539\u7528mitt\uFF0C\u539F\u7406\u548CEventBus\u7C7B\u4F3C\uFF0C\u9996\u5148\u5B89\u88C5mitt,\u7136\u540E\u81EA\u5DF1\u7B80\u5355\u5C01\u88C5\u4E00\u4E0B\uFF0C\u5728\u9700\u8981\u4F20\u503C\u7684\u5144\u5F1F\u7EC4\u4EF6\u4E2D\u5BFC\u5165\u5C01\u88C5\u597D\u7684mitt\u65B9\u6CD5\u3002\u5176\u4E2D\u4E00\u4E2A\u5144\u5F1F\u7EC4\u4EF6\u901A\u8FC7mitt.emit\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u5E76\u4F20\u503C\uFF0C\u53E6\u4E00\u4E2A\u5144\u5F1F\u7EC4\u4EF6\u901A\u8FC7mitt.on\u76D1\u542C\u4E8B\u4EF6\u7684\u89E6\u53D1\u5E76\u63A5\u6536\u503C",-1),q=c({__name:"comm",setup(B){let n=E("\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F1"),e=E("");const F=i=>{e.value=i.value};let o=E("\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F2"),C=E("");const s=i=>{C.value=i},r=E();let p=E();h(()=>{console.log("production")});function f(){console.log(p.value.text)}function v(){console.log(r.value.text)}return x("parent","\u6211\u662F\u7236\u7EC4\u4EF61"),(i,V)=>(a(),m(_,null,[T,$,D(y,{name:l(n),onChildone:F,ref_key:"myOne",ref:r},null,8,["name"]),u("button",{onClick:v},"\u70B9\u51FB1(ref)"),u("p",null,t(l(e))+"(emit)",1),D(w,{name:l(o),onChildtwo:s,ref_key:"myTwo",ref:p},null,8,["name"]),u("button",{onClick:f},"\u70B9\u51FB2(ref)"),u("p",null,t(l(C))+"(emit)",1),j,S,N,O,M],64))}});export{q as default};
