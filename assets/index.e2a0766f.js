import{e as F,r as l,aI as M,a8 as j,B as q,Z as D,j as e,s as o,m,x as w,w as n,F as r,a9 as f,b as y,k as u,ab as d,L as c,aa as i}from"./index.6a6c2c3a.js";import{a as z,E as A,b as P}from"./el-menu-item.922df84f.js";import"./el-popper.8cf46d30.js";import"./el-sub-menu.18b29ac4.js";import"./index.3d9b98d8.js";import"./vnode.36296d9f.js";const R={class:"temApp"},T={class:"temSidebar"},Z={class:"temContent"},X=F({__name:"index",setup(G){let x=l(sessionStorage.username),b=l(sessionStorage.password),h=l("/hxfgzh"),v=l([]);const k=M();S();function S(){j({url:"/item",method:"get",data:{username:x.value,password:b.value}}).then(s=>{s.data.code==200&&(v.value=s.data.obj)})}q(x,s=>{s!==k.path&&k.path=="/interview"&&(h.value="/interview-permissions")});function B(s){sessionStorage.setItem("keyPathFive",s)}return(s,H)=>{const p=A,g=P,E=z,I=D("router-view");return e(),o("div",R,[m("div",T,[w(E,{class:"menu",router:"","unique-opened":"","default-active":y(h),onSelect:B},{default:n(()=>[(e(!0),o(r,null,f(y(v),(t,L)=>(e(),o(r,{key:L},[t.children?c("",!0):(e(),u(p,{key:0,index:t.path,route:t.path},{default:n(()=>[m("span",null,d(t.name),1)]),_:2},1032,["index","route"])),t.children?(e(),u(g,{key:1,index:t.name},{title:n(()=>[i(d(t.name),1)]),default:n(()=>[(e(!0),o(r,null,f(t.children,(a,N)=>(e(),o(r,{key:N},[a.grandson?c("",!0):(e(),u(p,{key:0,route:a.path,index:a.path},{default:n(()=>[i(d(a.name),1)]),_:2},1032,["route","index"])),a.grandson?(e(),u(g,{key:1,index:a.name},{title:n(()=>[i(d(a.name),1)]),default:n(()=>[(e(!0),o(r,null,f(a.grandson,(_,V)=>(e(),u(p,{key:V,index:_.path,route:_.path},{default:n(()=>[i(d(_.name),1)]),_:2},1032,["index","route"]))),128))]),_:2},1032,["index"])):c("",!0)],64))),128))]),_:2},1032,["index"])):c("",!0)],64))),128))]),_:1},8,["default-active"])]),m("div",Z,[w(I)])])}}});export{X as default};