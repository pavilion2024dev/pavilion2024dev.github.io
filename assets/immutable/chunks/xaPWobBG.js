import{t as q,a as h,c as R}from"./DJAbd26x.js";import{s as E,c as o,r as i,p as U,t as A,a as H,d as se,i as d,aE as B,ah as M,aF as Z,f as p,$ as ie}from"./se-oR36g.js";import{s as I}from"./BmQtjKjD.js";import{e as z,i as G}from"./DtaDbwtD.js";import{s as D}from"./D65Uo4x_.js";import{s as W}from"./R3jvLEeQ.js";import{p as L,a as J}from"./Kh5y7NCw.js";import{a as X,s as Y}from"./CBgdHJqr.js";import{d as O,e as T}from"./D9SvHh_d.js";import{s as $}from"./CZnVavEA.js";import{i as Q}from"./CCm-Zyld.js";import{a as oe,S as re}from"./DfIHXmdG.js";import{b as ne}from"./D9CHzgOE.js";var ce=q('<main class="row -border-bottom -inner-padding"><div class="container"><main class="work-view"><section><div class="work-info"><!></div> <div class="work-credits for-pc"><!></div></section> <section><!> <div class="work-credits for-phone"><!></div></section></main></div></main>');function Ne(v,e){var s=ce(),k=o(s),b=o(k),u=o(b),c=o(u),l=o(c);I(l,()=>e.info),i(c);var r=E(c,2),y=o(r);I(y,()=>e.credits),i(r),i(u);var n=E(u,2),_=o(n);I(_,()=>e.images);var m=E(_,2),j=o(m);I(j,()=>e.credits),i(m),i(n),i(b),i(k),i(s),h(v,s)}var le=(v,e)=>{var s;(s=e.onclick)==null||s.call(e,e.id)},de=q('<figure class="svelte-1sqs3pv"><button class="svelte-1sqs3pv">Zoom in</button> <img class="svelte-1sqs3pv"></figure>');function ve(v,e){U(e,!0);const[s,k]=Y(),b=()=>X($,"$path",s);let u=L(e,"alt",3,"");var c=de(),l=o(c);l.__click=[le,e];var r=E(l,2);i(c),A(y=>{D(r,"src",y),D(r,"alt",u())},[()=>b()(e.src)]),h(v,c),H(),k()}O(["click"]);function V(v){function e(s){v.contains(s.target)||v.dispatchEvent(new CustomEvent("clickoutside"))}return document.addEventListener("mouseup",e,{passive:!0}),{destroy(){document.removeEventListener("mouseup",e)}}}var ue=q('<button type="button" aria-label="Close">Close</button>'),me=q('<div><div class="outer"><div class="inner"><div aria-modal="true"><!></div></div></div> <!></div>');function fe(v,e){U(e,!0);let s=L(e,"showModal",15),k=L(e,"closeButton",3,!1),b=L(e,"className",3,""),u=L(e,"disabled",11,!1);const c=255;let l=B(void 0),r=B(!1);function y(){var a,f,g;if(!s())return;const t=(a=d(l))==null?void 0:a.querySelector(".ck-body-wrapper");t&&((f=document.querySelector("body"))==null||f.append(t)),s(!1),(g=e.oncloseend)==null||g.call(e)}const n=()=>new Promise(t=>{var a;u()||((a=e.onclosestart)==null||a.call(e),M(r,!1),setTimeout(()=>{y(),t()},c*2))});async function _(){const t=document.querySelectorAll(".dialog-wrap.-opened");t.length>0&&t[t.length-1]===d(l)&&await(n==null?void 0:n())}async function m(t){t.target.querySelector(".ck-focused")||await _()}async function j(t){if(!d(r))return;const a=t.target;!a.closest(".dialog-root")&&(a.tagName==="DIV"&&a.classList.contains("objet-root")||a.tagName==="UL"&&a.classList.contains("sortable-root"))&&await _()}async function S(t){d(r)&&t.key==="Escape"&&(t.preventDefault(),await _())}se(()=>{var t;d(l)&&s()&&(setTimeout(()=>{M(r,!0)},10),(t=e.onopen)==null||t.call(e,{close:n}))});var F=R();T("keyup",Z,S),T("click",Z,j);var x=p(F);{var P=t=>{var a=me();let f;var g=o(a),N=o(g),C=o(N),ee=o(C);I(ee,()=>e.children??ie,()=>({close:n})),i(C),oe(C,w=>V==null?void 0:V(w)),i(N),i(g);var te=E(g,2);{var ae=w=>{var K=ue();K.__click=n,h(w,K)};Q(te,w=>{k()&&w(ae)})}i(a),ne(a,w=>M(l,w),()=>d(l)),A(w=>f=W(a,1,`dialog-wrap ${b()??""}`,null,f,w),[()=>({"-opened":d(r)})]),T("clickoutside",C,m),h(t,a)};Q(x,t=>{s()&&t(P)})}h(v,F),H()}O(["click"]);var _e=q('<swiper-slide><div class="svelte-1jmlivj"><img alt="" class="svelte-1jmlivj"></div></swiper-slide>',2),ge=q('<div class="swiper-root svelte-1jmlivj"><!></div>'),we=q('<div class="images"></div> <!>',1);function Be(v,e){U(e,!0);const[s,k]=Y(),b=()=>X($,"$path",s);let u=B(!1),c=B(0);var l=we(),r=p(l);z(r,21,()=>e.srcs,G,(n,_,m)=>{ve(n,{id:m,get src(){return d(_)},onclick:j=>{M(c,J(j)),M(u,!0)}})}),i(r);var y=E(r,2);fe(y,{get showModal(){return d(u)},set showModal(n){M(u,J(n))},children:(n,_)=>{var m=ge(),j=o(m);re(j,{autoHeight:!1,onload:({swiper:S})=>{d(c)&&S.slideTo(d(c),0)},children:(S,F)=>{var x=R(),P=p(x);z(P,17,()=>e.srcs,G,(t,a)=>{var f=_e();W(f,1,"svelte-1jmlivj");var g=o(f),N=o(g);i(g),i(f),A(C=>D(N,"src",C),[()=>b()(d(a))]),h(t,f)}),h(S,x)},$$slots:{default:!0}}),i(m),h(n,m)},$$slots:{default:!0}}),h(v,l),H(),k()}export{Be as I,Ne as V};
