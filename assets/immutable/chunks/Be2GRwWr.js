import{X as q,Y as x,Z as B,k as b,o as M,_ as N,i as _,$ as U,a0 as $,g as L,a1 as C,a2 as G,a3 as Z,a4 as p,a5 as w,a6 as y,F as z,a7 as F}from"./iEkV_uLT.js";import{p as V}from"./BfXjbeWM.js";import{c as X}from"./Y1fAqbw3.js";function h(r){var a;return((a=r.ctx)==null?void 0:a.d)??!1}function K(r,a,s,l){var O;var E=(s&y)!==0,d=!p||(s&w)!==0,c=(s&C)!==0,D=(s&F)!==0,R=!1,i;c?[i,R]=X(()=>r[a]):i=r[a];var T=G in r||Z in r,v=c&&(((O=q(r,a))==null?void 0:O.set)??(T&&a in r&&(e=>r[a]=e)))||void 0,t=l,o=!0,P=!1,g=()=>(P=!0,o&&(o=!1,D?t=L(l):t=l),t);i===void 0&&l!==void 0&&(v&&d&&x(),i=g(),v&&v(i));var u;if(d)u=()=>{var e=r[a];return e===void 0?g():(o=!0,P=!1,e)};else{var A=(E?b:M)(()=>r[a]);A.f|=B,u=()=>{var e=_(A);return e!==void 0&&(t=void 0),e===void 0?t:e}}if((s&N)===0)return u;if(v){var Y=r.$$legacy;return function(e,f){return arguments.length>0?((!d||!f||Y||R)&&v(f?u():e),e):u()}}var S=!1,m=z(i),n=b(()=>{var e=u(),f=_(m);return S?(S=!1,f):m.v=e});return c&&_(n),E||(n.equals=U),function(e,f){if(arguments.length>0){const I=f?_(n):d&&c?V(e):e;if(!n.equals(I)){if(S=!0,$(m,I),P&&t!==void 0&&(t=I),h(n))return e;L(()=>_(n))}return e}return h(n)?n.v:_(n)}}export{K as p};
