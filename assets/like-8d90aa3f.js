import{h as u,m as b,a as y,o as s,c as o,u as l,H as i,i as f,w as v,e as t,F as w,b as k,n as m,Y as D,t as x,Z as L,$ as g}from"./index-fd57ddf8.js";import{I as N}from"./trash-035f5d7d.js";import{e as p,s as G}from"./useNotification-d5b03d5c.js";import{d as B}from"./macaron-40da6c3c.js";const C={class:"p-0 overflow-hidden md:p-8 lg:p-12"},I=t("h2",{class:"titleText text-2xl relative pl-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:top-0 after:border-2 after:border-[#DDBEA9]"}," 收藏清單 ",-1),T={key:0,class:"mt-5 flex flex-col gap-3 items-center justify-center w-full h-full min-h-[200px] text text text-xl"},A={key:1,class:"relative h-[calc(100vh-5rem)] mt-5"},j={class:"absolute top-0 bottom-0 w-full space-y-6 overflow-y-auto"},E=["src"],F={class:"flex flex-col items-center justify-center flex-1 px-5 md:justify-end md:flex-row"},$={class:"mb-3 md:mr-5 md:mb-0"},V={class:"mb-1 text-xl titleText"},P={class:"titleText text-xl text-red-500 before:content-['NT$'] before:mr-1 before:text-[#252422]"},R=["onClick"],Z={__name:"like",setup(U){const c=u([]),d=async()=>{try{await m(D,"",e=>{c.value=[...e.Data]})}catch(e){p("收藏商品取得失敗",e)}},h=async e=>{const a={GoodsID:e};try{await m(g,a,async()=>{G("收藏商品刪除成功"),await d()})}catch(n){p("收藏商品刪除失敗",n)}},_=e=>{L(`確定要刪除${e.Goods.Name}嗎?`).then(a=>{a&&h(e.GoodsID)})};return b(async()=>{await d()}),(e,a)=>{const n=y("RouterLink");return s(),o("div",C,[I,l(c).length===0?(s(),o("div",T,[i(" 還沒有收藏的商品，趕快去選購吧 "),f(n,{to:"/products",class:"px-3 py-1 rounded-md link bg-[#FFE8D6]"},{default:v(()=>[i(" GO ")]),_:1})])):(s(),o("div",A,[t("div",j,[(s(!0),o(w,null,k(l(c),r=>(s(),o("div",{key:r.ID,class:"flex border border-[#DDBEA9] p-3 rounded"},[t("img",{src:l(B),alt:"",class:"h-[150px] max-w-[250px] object-cover flex-1"},null,8,E),t("div",F,[t("div",$,[t("h4",V,x(r.Goods.Name),1),t("p",P,x(r.Goods.UnitPrice),1)]),t("button",{class:"text px-3 py-1 hover:text-red-500 border border-[#6B705C] rounded-md hover:border-red-500 flex flex-row md:flex-col items-center whitespace-nowrap",onClick:H=>_(r)},[f(l(N),{class:"w-5 h-5 md:w-8 md:h-8"}),i(" 刪除 ")],8,R)])]))),128))])]))])}}};export{Z as default};