import{_ as q,I as H}from"./index-ee49f139.js";import{_ as X}from"./PageContainer-250fe87a.js";import{_ as Y,h as V,o as x,c as I,i as S,w as M,F as B,b as N,d as O,u as m,e as i,f as Q,m as Z,n as J,q as K,t as D,v as W,y as ee,z as te,H as R,k as se,P as ie,Q as oe}from"./index-9c676bbc.js";import{g as ne,i as ae,j as re,n as $,f as L,S as U,h as F,N as le,_ as ce}from"./navigation-b404b78f.js";import{e as de,w as A}from"./useNotification-934e71fd.js";import{u as ue}from"./useCart-13d9b515.js";import{u as me}from"./useUser-6d513915.js";import"./user-20-solid-0505617e.js";import"./trash-f00d09e4.js";function fe(g){let{swiper:e,extendParams:y,on:_}=g;y({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let l=!1,f=!1;e.thumbs={swiper:null};function h(){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const t=s.clickedIndex,d=s.clickedSlide;if(d&&d.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let r;s.params.loop?r=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10):r=t,e.params.loop?e.slideToLoop(r):e.slideTo(r)}function w(){const{thumbs:s}=e.params;if(l)return!1;l=!0;const t=e.constructor;if(s.swiper instanceof t)e.thumbs.swiper=s.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(ae(s.swiper)){const d=Object.assign({},s.swiper);Object.assign(d,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(d),f=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",h),!0}function c(s){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const d=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let r=1;const n=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(r=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(r=1),r=Math.floor(r),t.slides.forEach(p=>p.classList.remove(n)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let p=0;p<r;p+=1)re(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+p}"]`).forEach(a=>{a.classList.add(n)});else for(let p=0;p<r;p+=1)t.slides[e.realIndex+p]&&t.slides[e.realIndex+p].classList.add(n);const u=e.params.thumbs.autoScrollOffset,k=u&&!t.params.loop;if(e.realIndex!==t.realIndex||k){const p=t.activeIndex;let a,C;if(t.params.loop){const o=t.slides.filter(T=>T.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];a=t.slides.indexOf(o),C=e.activeIndex>e.previousIndex?"next":"prev"}else a=e.realIndex,C=a>e.previousIndex?"next":"prev";k&&(a+=C==="next"?u:-1*u),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(a)<0&&(t.params.centeredSlides?a>p?a=a-Math.floor(d/2)+1:a=a+Math.floor(d/2)-1:a>p&&t.params.slidesPerGroup,t.slideTo(a,s?0:void 0))}}_("beforeInit",()=>{const{thumbs:s}=e.params;if(!(!s||!s.swiper))if(typeof s.swiper=="string"||s.swiper instanceof HTMLElement){const t=ne(),d=()=>{const n=typeof s.swiper=="string"?t.querySelector(s.swiper):s.swiper;if(n&&n.swiper)s.swiper=n.swiper,w(),c(!0);else if(n){const u=k=>{s.swiper=k.detail[0],n.removeEventListener("init",u),w(),c(!0),s.swiper.update(),e.update()};n.addEventListener("init",u)}return n},r=()=>{if(e.destroyed)return;d()||requestAnimationFrame(r)};requestAnimationFrame(r)}else w(),c(!0)}),_("slideChange update resize observerUpdate",()=>{c()}),_("setTransition",(s,t)=>{const d=e.thumbs.swiper;!d||d.destroyed||d.setTransition(t)}),_("beforeDestroy",()=>{const s=e.thumbs.swiper;!s||s.destroyed||f&&s.destroy()}),Object.assign(e.thumbs,{init:w,update:c})}function pe(g){let{swiper:e,extendParams:y,emit:_,once:l}=g;y({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function f(){if(e.params.cssMode)return;const c=e.getTranslate();e.setTranslate(c),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function h(){if(e.params.cssMode)return;const{touchEventsData:c,touches:s}=e;c.velocities.length===0&&c.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:c.touchStartTime}),c.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:$()})}function w(c){let{currentPos:s}=c;if(e.params.cssMode)return;const{params:t,wrapperEl:d,rtlTranslate:r,snapGrid:n,touchEventsData:u}=e,p=$()-u.touchStartTime;if(s<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(s>-e.maxTranslate()){e.slides.length<n.length?e.slideTo(n.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(u.velocities.length>1){const b=u.velocities.pop(),v=u.velocities.pop(),z=b.position-v.position,G=b.time-v.time;e.velocity=z/G,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(G>150||$()-b.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,u.velocities.length=0;let a=1e3*t.freeMode.momentumRatio;const C=e.velocity*a;let o=e.translate+C;r&&(o=-o);let T=!1,P;const E=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let j;if(o<e.maxTranslate())t.freeMode.momentumBounce?(o+e.maxTranslate()<-E&&(o=e.maxTranslate()-E),P=e.maxTranslate(),T=!0,u.allowMomentumBounce=!0):o=e.maxTranslate(),t.loop&&t.centeredSlides&&(j=!0);else if(o>e.minTranslate())t.freeMode.momentumBounce?(o-e.minTranslate()>E&&(o=e.minTranslate()+E),P=e.minTranslate(),T=!0,u.allowMomentumBounce=!0):o=e.minTranslate(),t.loop&&t.centeredSlides&&(j=!0);else if(t.freeMode.sticky){let b;for(let v=0;v<n.length;v+=1)if(n[v]>-o){b=v;break}Math.abs(n[b]-o)<Math.abs(n[b-1]-o)||e.swipeDirection==="next"?o=n[b]:o=n[b-1],o=-o}if(j&&l("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(r?a=Math.abs((-o-e.translate)/e.velocity):a=Math.abs((o-e.translate)/e.velocity),t.freeMode.sticky){const b=Math.abs((r?-o:o)-e.translate),v=e.slidesSizesGrid[e.activeIndex];b<v?a=t.speed:b<2*v?a=t.speed*1.5:a=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&T?(e.updateProgress(P),e.setTransition(a),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating=!0,L(d,()=>{!e||e.destroyed||!u.allowMomentumBounce||(_("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(P),L(d,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(_("_freeModeNoMomentumRelease"),e.updateProgress(o),e.setTransition(a),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,L(d,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(o),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&_("_freeModeNoMomentumRelease");(!t.freeMode.momentum||p>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:f,onTouchMove:h,onTouchEnd:w}})}const he=["src"],_e=["src"],we={__name:"GoodsSlider",props:{images:{type:Array,default:()=>[]}},setup(g){const e=g,y=[pe,le,fe],_=V(null),l=f=>{_.value=f};return console.log(e.images),(f,h)=>(x(),I(B,null,[S(m(F),{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},spaceBetween:10,navigation:!0,thumbs:{swiper:m(_)},modules:y,class:"mySwiper2"},{default:M(()=>[(x(!0),I(B,null,N(g.images,(w,c)=>(x(),O(m(U),{key:c},{default:M(()=>[i("img",{src:w.Url},null,8,he)]),_:2},1024))),128))]),_:1},8,["thumbs"]),S(m(F),{onSwiper:l,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:y,class:"mySwiper"},{default:M(()=>[(x(!0),I(B,null,N(g.images,(w,c)=>(x(),O(m(U),{key:c},{default:M(()=>[i("img",{src:w.Url},null,8,_e)]),_:2},1024))),128))]),_:1})],64))}},be=Y(we,[["__scopeId","data-v-2fc78ee1"]]),ve={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},xe=i("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"},null,-1),ge=[xe];function ye(g,e){return x(),I("svg",ve,ge)}const Te={name:"heroicons-credit-card",render:ye},Se={class:"mb-10"},Me={class:"flex flex-col mb-10 md:flex-row"},ke={class:"w-full md:w-1/2"},Ce={class:"flex flex-col justify-between w-full p-5 md:w-1/2"},Ie={class:"space-y-8"},Pe={class:"flex items-center justify-between"},Ee={class:"titleText text-[#252422]"},De={class:"flex flex-col w-full gap-4"},Be={class:"flex items-center justify-between"},Ae=i("span",{class:"font-medium text"},"選擇商品規格：",-1),Ve={class:"text-sm text"},je={class:"flex flex-wrap gap-3"},$e=["name","value"],Le={class:"flex items-center justify-center border rounded-lg px-3 py-1 text peer-checked:font-semibold peer-checked:bg-[#CB997E] peer-checked:text-white"},Ne={class:"flex flex-col w-full gap-1"},Oe=i("span",{class:"font-medium text"},"購買數量：",-1),Ge={class:"flex items-center"},Re=["value"],Ue={class:"flex flex-col w-full gap-1"},Fe=i("span",{class:"font-medium text"},"建議售價：",-1),ze={class:"titleText text-xl text-[#252422] before:content-['NT$'] before:mr-1 before:text-[#252422]"},qe=i("span",{class:"text-sm font-medium text-red-500 text"},"*若您有其他疑問，歡迎直接與我們聯絡",-1),He=i("textarea",{rows:"5",cols:"30",class:"w-full p-1 border-2 border-[#FFE8D6] rounded-md focus:ring-0 focus:outline-[#CB997E] resize-none",placeholder:"有任何額外需求請打在此處"},null,-1),Xe={class:"flex w-full gap-6"},Ye={class:"flex flex-col items-center justify-center mb-10"},Qe=i("h3",{class:"titleText"},"商品詳細資訊",-1),Ze={class:"p-10 whitespace-pre-line text"},at={__name:"goodsDetail",setup(g){const e=Q(),{addToCart:y}=ue(),{checkLoginStatus:_}=me(),l=V({}),f=V(0),h=V([]),w=()=>{f.value>0&&(f.value-=1)},c=()=>{f.value+=1},s=async()=>{const r={ID:localStorage.getItem("goodsDetailID")*1};try{await J(K,r,n=>{l.value={...n.Data},l.value.ImageUrls.forEach(u=>{u.Url=`https://nocodenolife.net/siaosiao//imgs/${u.Url}`})})}catch(n){de("商品資訊取得失敗",n)}},t=async()=>{if(_()){if(!h.value||!h.value.length){A("請選擇商品規格");return}if(!f.value||f.value<=0){A("請選擇購買數量");return}await y(l.value,f.value,h.value)}},d=async()=>{if(_()){if(!h.value||!h.value.length){A("請選擇商品規格");return}if(!f.value||f.value<=0){A("請選擇購買數量");return}await y(l.value,f.value,h.value),e.push("/cart")}};return Z(async()=>{await s()}),(r,n)=>{const u=be,k=ce,p=ie,a=oe,C=X,o=q;return x(),O(o,null,{default:M(()=>[S(C,{childrenPath:m(l).Name},{default:M(()=>[i("main",Se,[Object.keys(m(l)).length>0?(x(),I(B,{key:0},[i("div",Me,[i("div",ke,[S(u,{images:m(l).ImageUrls},null,8,["images"])]),i("div",Ce,[i("div",Ie,[i("div",Pe,[i("h2",Ee,D(m(l).Name),1),S(k,{item:m(l)},null,8,["item"])]),i("div",De,[i("div",Be,[Ae,i("span",Ve,"可選擇 "+D(m(l).GoodsSpecs.length)+" 種，已選 "+D(m(h).length)+" 種",1)]),i("div",je,[(x(!0),I(B,null,N(m(l).GoodsSpecs,(T,P)=>(x(),I("label",{key:P},[W(i("input",{"onUpdate:modelValue":n[0]||(n[0]=E=>te(h)?h.value=E:null),class:"sr-only peer",name:T.ID,type:"checkbox",value:T.ID},null,8,$e),[[ee,m(h)]]),i("div",Le,D(T.Specs),1)]))),128))])]),i("div",Ne,[Oe,i("div",Ge,[i("button",{onClick:w,class:"px-2 py-1 border border-gray-300 rounded-l-md"}," - "),i("input",{type:"text",readonly:"",value:m(f),class:"w-12 py-1 text-center border-t border-b border-gray-300 focus:ring-0 focus:outline-none"},null,8,Re),i("button",{onClick:c,class:"px-2 py-1 border border-gray-300 rounded-r-md"}," + ")])]),i("div",Ue,[Fe,i("p",ze,D(m(l).UnitPrice),1),qe]),He]),i("div",Xe,[S(p,{class:"w-full py-1.5",onClick:t},{default:M(()=>[S(m(H),{class:"w-5 h-5 mr-1"}),R(" 加入購物車 ")]),_:1}),S(a,{class:"w-full py-1.5",onClick:d},{default:M(()=>[S(m(Te),{class:"w-5 h-5 mr-1"}),R(" 直接購買 ")]),_:1})])])]),i("div",Ye,[Qe,i("p",Ze,D(m(l).Description),1)])],64)):se("",!0)])]),_:1},8,["childrenPath"])]),_:1})}}};export{at as default};
