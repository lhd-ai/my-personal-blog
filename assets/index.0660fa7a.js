import{a8 as S,a9 as g,aI as I,a1 as y,l as a,z as s,q as r,A as _,n,F as c,aa as m,m as u,ac as d,M as p,ab as h}from"./index.dbdcc64b.js";import{E as L,b as E,a as B}from"./el-menu-item.20cb16bc.js";import"./el-popper.dbae8b14.js";import"./el-sub-menu.18b29ac4.js";const M={data(){return{username:sessionStorage.username,dataList:[],activeIndex:"/webpack"}},created(){this.getDataList(),this.activeIndex=sessionStorage.getItem("keyPathTwo")||"/webpack"},watch:{activeIndex(t){t!==this.$route.path&&this.$route.path=="/buildtools"&&(this.activeIndex="/webpack")}},methods:{handleSelect(t){sessionStorage.setItem("keyPathTwo",t)},getDataList(){g({url:"/buildtools",method:"get",data:{username:I(this.username)}}).then(t=>{t.data.code==200&&(this.dataList=t.data.obj)})}}},N={class:"temApp"},V={class:"temSidebar"},q={class:"temContent"};function D(t,T,$,A,i,x){const l=L,f=E,v=B,k=y("router-view");return a(),s("div",N,[r("div",V,[_(v,{class:"menu",router:"true","unique-opened":"true","default-active":i.activeIndex,onSelect:x.handleSelect},{default:n(()=>[(a(!0),s(c,null,m(i.dataList,(e,b)=>(a(),s(c,{key:b},[e.children?p("",!0):(a(),u(l,{key:0,index:e.path,route:e.path},{default:n(()=>[r("span",null,d(e.name),1)]),_:2},1032,["index","route"])),e.children?(a(),u(f,{key:1,index:e.name},{title:n(()=>[h(d(e.name),1)]),default:n(()=>[(a(!0),s(c,null,m(e.children,(o,w)=>(a(),u(l,{key:w,route:o.path,index:o.path},{default:n(()=>[h(d(o.name),1)]),_:2},1032,["route","index"]))),128))]),_:2},1032,["index"])):p("",!0)],64))),128))]),_:1},8,["default-active","onSelect"])]),r("div",q,[_(k)])])}const z=S(M,[["render",D]]);export{z as default};