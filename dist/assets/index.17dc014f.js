import{a8 as h,a9 as _,aa as p,a1 as f,l as a,z as o,q as s,A as r,n as i,F as v,ab as x,m as g,ad as k}from"./index.68ccfba4.js";import{E as S,a as w}from"./el-menu-item.a83dad39.js";import"./el-popper.7a526364.js";const I={data(){return{username:sessionStorage.username,dataList:[],activeIndex:"/markdown"}},created(){this.getDataList(),this.activeIndex=sessionStorage.getItem("keyPath")||"/markdown"},watch:{activeIndex(e){e!=this.$route.path&&(this.$route.path=="/technology"||this.$route.path=="/home")&&(this.activeIndex="/markdown")}},methods:{handleSelect(e){sessionStorage.setItem("keyPath",e)},getDataList(){_({url:"/technology",method:"get",data:{username:p(this.username)}}).then(e=>{e.data.code==200&&(this.dataList=e.data.list)})}}},y={class:"temApp"},L={class:"temSidebar"},B={class:"temContent"};function E(e,$,C,D,n,c){const d=S,l=w,u=f("router-view");return a(),o("div",y,[s("div",L,[r(l,{class:"menu",router:"true","default-active":n.activeIndex,onSelect:c.handleSelect},{default:i(()=>[(a(!0),o(v,null,x(n.dataList,(t,m)=>(a(),g(d,{key:m,index:t.path,route:t.path},{default:i(()=>[s("span",null,k(t.name),1)]),_:2},1032,["index","route"]))),128))]),_:1},8,["default-active","onSelect"])]),s("div",B,[r(u)])])}const F=h(I,[["render",E]]);export{F as default};
