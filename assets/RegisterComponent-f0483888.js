import{o as f,c as V,e as s,f as A,h as g,r as D,s as n,i,u as t,v as c,x as u,t as d,d as w,j as m,A as T,B as $,n as j,al as F}from"./index-9c676bbc.js";import{a as l,v as _,M as k,b as y,I as M,c as P,d as C}from"./login-6f53ff23.js";import{I as z}from"./envelope-ba3e9834.js";import{s as L,e as O}from"./useNotification-934e71fd.js";import"./index-ee49f139.js";import"./user-20-solid-0505617e.js";import"./trash-f00d09e4.js";import"./useUser-6d513915.js";const W={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Z=s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z"},null,-1),q=[Z];function G(S,v){return f(),V("svg",W,q)}const H={name:"heroicons-outline-phone",render:G},J=s("legend",{class:"text-center titleText"},"申請帳號",-1),K={class:"flex flex-col mb-3 tracking-wider"},Q={class:"relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"},X=s("label",{for:"userName",class:"whitespace-nowrap"},"姓名",-1),Y={class:"w-full h-6 px-3 pt-1"},ee={class:"text-sm tracking-wide text-[#dc2626]"},se={class:"flex flex-col mb-3 tracking-wider"},te={class:"relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"},oe=s("label",{for:"email",class:"whitespace-nowrap"},"電子信箱",-1),ae={class:"w-full h-6 px-3 pt-1"},re={class:"text-sm tracking-wide text-[#dc2626]"},le={class:"flex flex-col mb-3 tracking-wider"},ne={class:"relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"},ie=s("label",{for:"account",class:"whitespace-nowrap"},"帳號",-1),ce={class:"w-full h-6 px-3 pt-1"},ue={class:"text-sm tracking-wide text-[#dc2626]"},de={class:"flex flex-col mb-3 tracking-wider"},fe={class:"relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"},pe=s("label",{for:"password",class:"whitespace-nowrap"},"密碼",-1),me={class:"w-full h-6 px-3 pt-1"},be={class:"text-sm tracking-wide text-[#dc2626]"},we={class:"flex flex-col mb-3 tracking-wider"},he={class:"relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"},xe=s("label",{for:"checkPassword",class:"whitespace-nowrap"},"再輸入一次密碼",-1),ge={class:"w-full h-6 px-3 pt-1"},ve={class:"text-sm tracking-wide text-[#dc2626]"},_e={class:"flex flex-col mb-3 tracking-wider"},ke={class:"relative flex items-center gap-2 py-2 before:absolute before:content before:w-full before:bottom-0 before:left-0 before:h-[2px] before:bg-[#323232]"},ye=s("label",{for:"phone",class:"whitespace-nowrap"},"連絡電話",-1),Me={class:"w-full h-6 px-3 pt-1"},Pe={class:"text-sm tracking-wide text-[#dc2626]"},Ce={class:"submit_box"},Ve=["disabled"],De={__name:"RegisterComponent",setup(S){const v=A(),p=g(!1),h=g(null),x=g(null),e=D({name:{value:"",errorMessage:""},email:{value:"",errorMessage:""},account:{value:"",errorMessage:""},password:{value:"",errorMessage:""},checkPassword:{value:"",errorMessage:""},phone:{value:"",errorMessage:""},isSubmit:!1}),b=()=>{p.value=!p.value,p.value?(h.value.type="text",x.value.type="text"):(h.value.type="password",x.value.type="password")},E=()=>{const o=l(e.name.value),a=_(e.email.value),r=l(e.account.value),U=l(e.password.value),B=l(e.checkPassword.value),R=k(e.phone.value);return o?a?r?U?B?R?!0:(e.phone.errorMessage="請輸入手機電話",!1):(e.checkPassword.errorMessage="欄位不能為空白",!1):(e.password.errorMessage="欄位不能為空白",!1):(e.account.errorMessage="欄位不能為空白",!1):(e.email.errorMessage="請輸入有效的email格式",!1):(e.name.errorMessage="欄位不能為空白",!1)},N=async()=>{e.isSubmit=!0,await $(1e3),E()?I():e.isSubmit=!1},I=async()=>{const o={Account:e.account.value,Password:e.password.value,Name:e.name.value,Email:e.email.value,Phone:e.phone.value,Admin:!0};try{await j(F,o,async()=>{L("會員註冊成功"),await v.push("/user/login")})}catch(a){O("會員註冊失敗",a)}finally{e.isSubmit=!1}};return n(()=>e.name.value,o=>{l(o)?e.name.errorMessage="":e.name.errorMessage="欄位不能為空白"}),n(()=>e.email.value,o=>{_(o)?e.email.errorMessage="":e.email.errorMessage="請輸入有效的email格式"}),n(()=>e.account.value,o=>{l(o)?e.account.errorMessage="":e.account.errorMessage="欄位不能為空白"}),n(()=>e.phone.value,o=>{k(o)?e.phone.errorMessage="":e.phone.errorMessage="請輸入手機電話"}),n(()=>e.password.value,o=>{l(o)?e.password.errorMessage="":e.password.errorMessage="密碼不能為空白"}),n(()=>e.checkPassword.value,o=>{l(o)?e.checkPassword.value!==e.password.value?e.checkPassword.errorMessage="密碼輸入不相同":e.checkPassword.errorMessage="":e.checkPassword.errorMessage="密碼不能為空白"}),(o,a)=>(f(),V("form",{class:"px-6 py-3 form",onSubmit:a[6]||(a[6]=m((...r)=>o.submit&&o.submit(...r),["prevent"])),autocomplete:"on"},[s("fieldset",null,[J,s("div",K,[s("div",Q,[i(t(y),{class:"text-3xl"}),X,c(s("input",{type:"text",name:"userName",id:"userName",class:"w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none","onUpdate:modelValue":a[0]||(a[0]=r=>t(e).name.value=r)},null,512),[[u,t(e).name.value]])]),s("div",Y,[s("p",ee,d(t(e).name.errorMessage),1)])]),s("div",se,[s("div",te,[i(t(z),{class:"text-3xl"}),oe,c(s("input",{type:"email",name:"email",id:"email",class:"w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none","onUpdate:modelValue":a[1]||(a[1]=r=>t(e).email.value=r)},null,512),[[u,t(e).email.value]])]),s("div",ae,[s("p",re,d(t(e).email.errorMessage),1)])]),s("div",le,[s("div",ne,[i(t(y),{class:"text-3xl"}),ie,c(s("input",{type:"text",name:"account",id:"account",class:"w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none","onUpdate:modelValue":a[2]||(a[2]=r=>t(e).account.value=r)},null,512),[[u,t(e).account.value]])]),s("div",ce,[s("p",ue,d(t(e).account.errorMessage),1)])]),s("div",de,[s("div",fe,[i(t(M),{class:"text-3xl"}),pe,c(s("input",{ref_key:"inputPwdRef",ref:h,type:"password",name:"password",id:"password",class:"w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none","onUpdate:modelValue":a[3]||(a[3]=r=>t(e).password.value=r)},null,512),[[u,t(e).password.value]]),t(p)?(f(),w(t(C),{key:1,class:"text-3xl cursor-pointer",onClick:m(b,["prevent"])},null,8,["onClick"])):(f(),w(t(P),{key:0,class:"text-3xl cursor-pointer",onClick:m(b,["prevent"])},null,8,["onClick"]))]),s("div",me,[s("p",be,d(t(e).password.errorMessage),1)])]),s("div",we,[s("div",he,[i(t(M),{class:"text-3xl"}),xe,c(s("input",{ref_key:"inputCheckPwdRef",ref:x,type:"password",name:"password",id:"checkPassword",class:"w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none","onUpdate:modelValue":a[4]||(a[4]=r=>t(e).checkPassword.value=r)},null,512),[[u,t(e).checkPassword.value]]),t(p)?(f(),w(t(C),{key:1,class:"text-3xl cursor-pointer",onClick:m(b,["prevent"])},null,8,["onClick"])):(f(),w(t(P),{key:0,class:"text-3xl cursor-pointer",onClick:m(b,["prevent"])},null,8,["onClick"]))]),s("div",ge,[s("p",ve,d(t(e).checkPassword.errorMessage),1)])]),s("div",_e,[s("div",ke,[i(t(H),{class:"text-3xl"}),ye,c(s("input",{type:"text",name:"phone",id:"phone",class:"w-full bg-transparent border-none text-base tracking-wide text-[#323232] focus:ring-0 focus:outline-none","onUpdate:modelValue":a[5]||(a[5]=r=>t(e).phone.value=r)},null,512),[[u,t(e).phone.value]])]),s("div",Me,[s("p",Pe,d(t(e).phone.errorMessage),1)])]),s("div",Ce,[s("input",{type:"submit",value:"送出",onClick:N,class:T(["w-full p-3 rounded-md shadow-md bg-[#FFE8D6] hover:bg-[#DDBEA9] transition-colors duration-150 text-[#252422] hover:text-white",[t(e).isSubmit?"bg-gray-300 text-gray-400 hover:bg-gray-300 hover:text-gray-400":""]]),disabled:t(e).isSubmit},null,10,Ve)])])],32))}};export{De as default};
