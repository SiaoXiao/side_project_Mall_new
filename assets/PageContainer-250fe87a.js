import{o,c as r,e as i,L as p,h,s as d,m as f,a as v,i as l,w as b,u as n,t as u,k as m,R as k}from"./index-9c676bbc.js";const x={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},w=i("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"m2.25 12l8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"},null,-1),P=[w];function g(c,a){return o(),r("svg",x,P)}const y={name:"heroicons-home",render:g},B={class:"flex items-center gap-2"},$=i("span",{class:"w-2 h-2 rotate-45 border-2 border-b-0 border-l-0 select-none border-slate-400"},null,-1),C={class:"select-none text"},V={key:0,class:"w-2 h-2 rotate-45 border-2 border-b-0 border-l-0 select-none border-slate-400"},L={key:1,class:"select-none text"},R={__name:"Breadcrumbs",props:{childrenPath:{type:String}},setup(c){const a=c,e=p(),t=h(!1),s=h({name:"",children:""});return d(()=>e.fullPath,()=>{e.path.startsWith("/user")?(t.value=!0,s.value={name:"會員專區",children:e.meta.title}):e.path.startsWith("/products")?(t.value=!0,s.value={name:"商品分類",children:e.meta.title}):(t.value=!1,s.value={name:e.meta.title,children:""})},{immediate:!0}),d(()=>a.childrenPath,()=>{s.value.name=a.childrenPath},{immediate:!0}),f(()=>{s.value.name=e.meta.title}),(M,N)=>{const _=v("RouterLink");return o(),r("div",B,[l(_,{to:"/",class:"link"},{default:b(()=>[l(n(y),{class:"w-6 h-6"})]),_:1}),$,i("span",C,u(n(s).name),1),n(t)?(o(),r("span",V)):m("",!0),n(t)?(o(),r("span",L,u(n(s).children),1)):m("",!0)])}}},S={class:"max-w-[1280px] m-auto px-3 py-2"},W={__name:"PageContainer",props:{childrenPath:{type:String}},setup(c){return(a,e)=>{const t=R;return o(),r("div",S,[l(t,{childrenPath:c.childrenPath,class:"mb-5"},null,8,["childrenPath"]),k(a.$slots,"default")])}}};export{W as _};