import{a7 as h,a8 as _,Z as p,j as a,s as n,m as s,x as r,w as i,F as f,a9 as v,k as x,ab as g}from"./index.647868c6.js";import{E as k,a as S}from"./el-menu-item.15468b62.js";import"./el-popper.056ffd3f.js";import"./index.ec89bb23.js";import"./vnode.7789a7a6.js";const w={data(){return{username:sessionStorage.username,dataList:[],activeIndex:"/markdown"}},created(){this.getDataList(),this.activeIndex=sessionStorage.getItem("keyPath")||"/markdown"},watch:{activeIndex(e){e!=this.$route.path&&(this.$route.path=="/technology"||this.$route.path=="/home")&&(this.activeIndex="/markdown")}},methods:{handleSelect(e){sessionStorage.setItem("keyPath",e)},getDataList(){_({url:"/technology",method:"get",data:{username:this.username}}).then(e=>{e.data.code==200&&(this.dataList=e.data.list)})}}},I={class:"temApp"},y={class:"temSidebar"},L={class:"temContent"};function B(e,E,$,C,o,c){const d=k,m=S,l=p("router-view");return a(),n("div",I,[s("div",y,[r(m,{class:"menu",router:"true","default-active":o.activeIndex,onSelect:c.handleSelect},{default:i(()=>[(a(!0),n(f,null,v(o.dataList,(t,u)=>(a(),x(d,{key:u,index:t.path,route:t.path},{default:i(()=>[s("span",null,g(t.name),1)]),_:2},1032,["index","route"]))),128))]),_:1},8,["default-active","onSelect"])]),s("div",L,[r(l)])])}const P=h(w,[["render",B]]);export{P as default};