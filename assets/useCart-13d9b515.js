import{g as i,r as f,n as u,a8 as d}from"./index-9c676bbc.js";import{e as p,w as m}from"./useNotification-934e71fd.js";import{u as I}from"./useUser-6d513915.js";function N(){const e=i(),o=f({cartForm:{GoodsID:null,Specs:[]}}),{checkLoginStatus:n}=I();return{addToCart:async(s,t=1,a)=>{o.cartForm.GoodsID=s.ID,a?a.forEach(r=>{o.cartForm.Specs.push({SpecID:r,Num:t})}):o.cartForm.Specs.push({SpecID:s.GoodsSpecs[0].ID,Num:t});const c=o.cartForm;try{await u(d,c,r=>{}),await e.dispatch("cartModules/updateCartItems")}catch(r){p("加入購物車失敗",r)}},buyNow:async(s,t=1,a)=>{if(!n())return;if(!a||!a.length){m("請選擇商品規格");return}else a?a.forEach(r=>{o.cartForm.Specs.push({SpecID:r,Num:t})}):o.cartForm.Specs.push({SpecID:s.GoodsSpecs[0].ID,Num:t});if(console.log(a),!t||t<=0){m("請選擇購買數量");return}o.cartForm.GoodsID=s.ID;const c=o.cartForm;try{await u(d,c,r=>{}),await e.dispatch("cartModules/updateCartItems")}catch(r){p("加入購物車失敗",r)}}}}export{N as u};