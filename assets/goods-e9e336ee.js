import{r as h,g as m,f,m as b,o as c,c as i,e as t,u as a,F as v,b as y,k as x,n as w,q as k,i as d,t as g}from"./index-d72dc9d6.js";import{d as D}from"./image-37011158.js";import{I,_ as C}from"./CartModal-08574c27.js";import{e as F}from"./useNotification-955dd11c.js";import"./useCart-15a81e98.js";import"./useUser-7a11c2b6.js";const L={class:"p-0 overflow-hidden md:p-3"},G=t("h2",{class:"titleText text-2xl relative pl-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:top-0 after:border-2 after:border-[#DDBEA9]"}," 所有商品 ",-1),N={class:"grid w-full grid-cols-2 grid-rows-none gap-2 mt-5 md:grid-rows-4 lg:grid-rows-3 md:grid-cols-3 lg:grid-cols-4"},S={class:"overflow-hidden bg-white border rounded-md shadow-lg"},U={class:"relative pb-[75%] border-b w-full"},P={class:"absolute inset-0 block"},T=["src"],$=["onClick"],j={class:"absolute inset-0 items-center justify-center hidden opacity-0 group-hover:opacity-100 md:flex"},B=["onClick"],E={class:"h-12 font-bold text link"},A={class:"flex items-center justify-between"},M={class:"text text-sm text-[#252422] before:content-['NT$'] before:mr-1 before:text-[#252422]"},K={__name:"goods",setup(V){const s=h({goodsList:[],goodsListSearch:{ID:0,Page:0,PageLimit:0,GoodsName:"",GoodsType:0}}),u=m(),p=f(),_=async()=>{const r=s.goodsListSearch;try{await w(k,r,e=>{s.goodsList=[...e.Data]})}catch(e){F("所有商品列表取得失敗",e)}},n=async r=>{const e=r.ID;u.commit("goodsModules/SET_GOODS_DETAIL_ID",e),p.push({name:"GoodsDetail",params:{id:e}})};return b(async()=>{await _()}),(r,e)=>(c(),i("div",L,[G,t("div",N,[a(s).goodsList.length>0?(c(!0),i(v,{key:0},y(a(s).goodsList,o=>(c(),i("div",{key:o.ID,class:"cursor-pointer group hover:bg-transparent"},[t("div",S,[t("div",U,[t("picture",P,[t("img",{src:o.ImageUrls&&o.ImageUrls.length>0?o.ImageUrls[0].Url:a(D),alt:"Card",loading:"lazy",class:"object-cover object-center w-full h-full"},null,8,T)]),t("div",{class:"absolute inset-0 transition-opacity duration-200 bg-black opacity-0 group-hover:opacity-50",onClick:l=>n(o)},null,8,$),t("div",j,[d(a(I),{class:"w-8 h-8 rounded-md bg-[#FFFCF2] shadow-sm text-[#403D39] p-0.5 cursor-pointer hover:text-[#FFFCF2] hover:bg-[#403D39] transition-colors duration-150",onClick:l=>n(o)},null,8,["onClick"])])]),t("div",{class:"flex flex-col gap-2 px-2 py-3",onClick:l=>n(o)},[t("h3",E,g(o.Name),1),t("div",A,[t("span",M,g(o.UnitPrice),1),d(C,{item:o},null,8,["item"])])],8,B)])]))),128)):x("",!0)])]))}};export{K as default};