import{a8 as S,a9 as g,aa as I,a1 as y,l as a,z as s,q as r,A as _,n,F as c,ab as m,m as u,ad as d,M as p,ac as h}from"./index.19214576.js";import{E as L,b as E,a as B}from"./el-menu-item.15ec1792.js";import"./el-popper.009e8e46.js";import"./el-sub-menu.18b29ac4.js";const M={data(){return{username:sessionStorage.username,dataList:[],activeIndex:"/webpack"}},created(){this.getDataList(),this.activeIndex=sessionStorage.getItem("keyPathTwo")||"/webpack"},watch:{activeIndex(e){e!==this.$route.path&&this.$route.path=="/buildtools"&&(this.activeIndex="/webpack")}},methods:{handleSelect(e){sessionStorage.setItem("keyPathTwo",e)},getDataList(){g({url:"/buildtools",method:"get",data:{username:I(this.username)}}).then(e=>{e.data.code==200&&(this.dataList=e.data.obj)})}}},N={class:"temApp"},V={class:"temSidebar"},q={class:"temContent"};function D(e,T,$,A,i,f){const l=L,x=E,v=B,k=y("router-view");return a(),s("div",N,[r("div",V,[_(v,{class:"menu",router:"true","unique-opened":"true","default-active":i.activeIndex,onSelect:f.handleSelect},{default:n(()=>[(a(!0),s(c,null,m(i.dataList,(t,b)=>(a(),s(c,{key:b},[t.children?p("",!0):(a(),u(l,{key:0,index:t.path,route:t.path},{default:n(()=>[r("span",null,d(t.name),1)]),_:2},1032,["index","route"])),t.children?(a(),u(x,{key:1,index:"item.name"},{title:n(()=>[h(d(t.name),1)]),default:n(()=>[(a(!0),s(c,null,m(t.children,(o,w)=>(a(),u(l,{key:w,route:o.path,index:o.path},{default:n(()=>[h(d(o.name),1)]),_:2},1032,["route","index"]))),128))]),_:2},1024)):p("",!0)],64))),128))]),_:1},8,["default-active","onSelect"])]),r("div",q,[_(k)])])}const z=S(M,[["render",D]]);export{z as default};
