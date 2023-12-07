import{_ as x}from"./ShoppingFlowChart-89cdc479.js";import{o as a,c as r,e as t,g as b,r as d,ai as v,a as g,i as n,w as _,t as o,u as e,F as w,b as y,H as u}from"./index-d72dc9d6.js";const k={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},S=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"},null,-1),M=[S];function j(m,s){return a(),r("svg",k,M)}const B={name:"heroicons-outline-exclamation-circle",render:j},D={class:"mb-10"},E={class:"flex flex-col w-full gap-5 mt-5 sm:flex-row min-h-[calc(100vh-5rem)]"},F={class:"w-full space-y-5 pb-9"},I={class:"w-full border border-[#DDBEA9]"},C={class:"bg-[#FFE8D6] px-2 py-1 text-center"},L=t("h3",{class:"text-xl titleText"},"感謝您的訂購!",-1),T={class:"flex flex-col gap-3 px-4 py-2"},$={class:"flex items-center justify-between"},A=t("span",{class:"font-medium text"},"取件人姓名：",-1),N={class:"text"},V={class:"flex items-center justify-between"},R=t("span",{class:"font-medium text"},"取件人電話：",-1),H={class:"text"},Z={class:"flex items-center justify-between"},q=t("span",{class:"font-medium text"},"取貨方式：",-1),z={class:"text"},G={class:"flex items-center justify-between"},J=t("span",{class:"font-medium text"},"付款方式：",-1),K={class:"text"},O={class:"flex items-center justify-between"},P=t("span",{class:"font-medium text"},"收件地址：",-1),Q={class:"text"},U={class:"flex items-center pt-3 justify-between relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:border before:border-[#DDBEA9]"},W=t("span",{class:"font-medium text"},"合計：",-1),X={class:"text"},Y={class:"flex flex-col items-center justify-center gap-1 px-2 py-5"},tt=t("span",{class:"text-sm text-red-500 text"},"請在時間內至指定門市取貨。若逾期未取將列為黑名單，影響您在本商店訂購的權利！",-1),et={class:"w-full border border-[#DDBEA9]"},st={class:"w-full p-3"},rt={__name:"finish",setup(m){const s=b(),c=d({recipient:s.getters["cartModules/cartStatus"].recipient,phone:s.getters["cartModules/cartStatus"].phone,addr:s.getters["cartModules/cartStatus"].addr,payment:s.getters["cartModules/cartStatus"].payment,delivery:s.getters["cartModules/cartStatus"].delivery,total:s.getters["cartModules/cartTotal"]}),p=d([{to:"/products",text:"繼續購物"},{to:"/",text:"聯絡客服"},{to:"/user/order",text:"查詢訂單"}]);return v(()=>{localStorage.removeItem("cartInfo"),localStorage.removeItem("cartTotal")}),(ot,ct)=>{const f=x,i=g("RouterLink");return a(),r("main",D,[n(f),t("div",E,[t("div",F,[t("div",I,[t("div",C,[L,n(i,{to:"/user/order",class:"inline-block mt-1 link"},{default:_(()=>[u("查看明細")]),_:1})]),t("div",T,[t("div",$,[A,t("p",N,o(e(c).recipient),1)]),t("div",V,[R,t("p",H,o(e(c).phone),1)]),t("div",Z,[q,t("p",z,o(e(c).delivery),1)]),t("div",G,[J,t("p",K,o(e(c).payment),1)]),t("div",O,[P,t("p",Q,o(e(c).addr),1)]),t("div",U,[W,t("p",X,o(e(c).total),1)])]),t("div",Y,[n(e(B),{class:"w-6 h-6 text-red-500"}),tt])]),t("div",et,[t("ul",st,[(a(!0),r(w,null,y(e(p),(l,h)=>(a(),r("li",{key:h,class:"p-3 pb-2 before:border-b-0 menuLink"},[n(i,{to:l.to,class:"block"},{default:_(()=>[u(o(l.text),1)]),_:2},1032,["to"])]))),128))])])])])])}}};export{rt as default};