const qn=!1;var Yn=Array.isArray,Zt=Array.prototype.indexOf,Hn=Array.from,jn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Bn=Object.prototype,Un=Array.prototype,Jt=Object.getPrototypeOf;const Vn=()=>{};function Gn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,X=8,ot=16,D=32,P=64,V=128,E=256,G=512,d=1024,I=2048,b=4096,N=8192,Q=16384,Wt=32768,gt=65536,Kn=1<<17,Xt=1<<19,mt=1<<20,vt=Symbol("$state"),$n=Symbol("legacy props"),Zn=Symbol("");function Tt(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function zn(t,n){return t!==n}function At(t){return!Qt(t,this.v)}function tn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function en(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Wn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Xn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Qn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function tr(){tt=!0}const nr=1,rr=2,er=4,ar=8,lr=16,sr=1,ur=2,or=4,fr=8,ir=16,_r=1,cr=2,sn="[",un="[!",on="]",xt={},vr=Symbol(),pr="http://www.w3.org/1999/xhtml";function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function fn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let o=null;function pt(t){o=t}function hr(t){return Rt().get(t)}function dr(t,n){return Rt().set(t,n),n}function Er(t,n=!1,r){var e=o={p:o,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};tt&&!n&&(o.l={s:null,u:null,r1:[],r2:ft(!1)}),gn(()=>{e.d=!0})}function wr(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];z(a.effect),Z(a.reaction),Ft(a.fn)}}finally{z(r),Z(e)}}o=n.p,n.m=!0}return{}}function nt(){return!tt||o!==null&&o.l===null}function Rt(t){return o===null&&fn(),o.c??(o.c=new Map(_n(o)||void 0))}function _n(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}const L=new Map;function ft(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function yr(t){return It(ft(t))}function cn(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),tt&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function gr(t,n=!1){return It(cn(t,n))}function It(t){return u!==null&&!w&&(u.f&y)!==0&&(T===null?In([t]):T.push(t)),t}function mr(t,n){return vn(t,Mn(()=>$t(t))),n}function vn(t,n){return u!==null&&!w&&nt()&&(u.f&(y|ot))!==0&&(T===null||!T.includes(t))&&ln(),pn(t,n)}function pn(t,n){if(!t.equals(n)){var r=t.v;H?L.set(t,n):L.set(t,r),t.v=n,t.wv=Ut(),Ot(t,I),nt()&&f!==null&&(f.f&d)!==0&&(f.f&(D|P))===0&&(x===null?On([t]):x.push(t))}return n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&I)===0&&(!e&&s===f||(A(s,n),(i&(d|E))!==0&&((i&y)!==0?Ot(s,b):et(s))))}}let S=!1;function Tr(t){S=t}let g;function q(t){if(t===null)throw Dt(),xt;return g=t}function Ar(){return q(C(g))}function xr(t){if(S){if(C(g)!==null)throw Dt(),xt;g=t}}function Dr(t=1){if(S){for(var n=t,r=g;n--;)r=C(r);g=r}}function Rr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===sn||r===un)&&(t+=1)}var e=C(n);n.remove(),n=e}}var ht,hn,dn,St,kt;function Ir(){if(ht===void 0){ht=window,hn=document,dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;St=ct(n,"firstChild").get,kt=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function at(t=""){return document.createTextNode(t)}function lt(t){return St.call(t)}function C(t){return kt.call(t)}function Or(t,n){if(!S)return lt(t);var r=lt(g);if(r===null)r=g.appendChild(at());else if(n&&r.nodeType!==3){var e=at();return r==null||r.before(e),q(e),e}return q(r),r}function Sr(t,n){if(!S){var r=lt(t);return r instanceof Comment&&r.data===""?C(r):r}return g}function kr(t,n=1,r=!1){let e=S?g:t;for(var l;n--;)l=e,e=C(e);if(!S)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=at();return e===null?l==null||l.after(s):e.before(s),q(s),s}return q(e),e}function Cr(t){t.textContent=""}function Ct(t){var n=y|I,r=u!==null&&(u.f&y)!==0?u:null;return f===null||r!==null&&(r.f&E)!==0?n|=E:f.f|=mt,{ctx:o,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function Nr(t){const n=Ct(t);return n.equals=At,n}function Nt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)k(n[r])}}function En(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function wn(t){var n,r=f;z(En(t));try{Nt(t),n=Gt(t)}finally{z(r)}return n}function Pt(t){var n=wn(t),r=(R||(t.f&E)!==0)&&t.deps!==null?b:d;A(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function bt(t){f===null&&u===null&&rn(),u!==null&&(u.f&E)!==0&&f===null&&nn(),H&&tn()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=f,a={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{it(a),a.f|=Wt}catch(_){throw k(a),_}else n!==null&&et(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(mt|V))===0;if(!s&&e&&(l!==null&&yn(a,l),u!==null&&(u.f&y)!==0)){var i=u;(i.effects??(i.effects=[])).push(a)}return a}function gn(t){const n=F(X,null,!1);return A(n,d),n.teardown=t,n}function Pr(t){bt();var n=f!==null&&(f.f&D)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Ft(t);return e}}function br(t){return bt(),mn(t)}function Fr(t){const n=F(P,t,!0);return(r={})=>new Promise(e=>{r.outro?xn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function Ft(t){return F(yt,t,!1)}function mn(t){return F(X,t,!0)}function Mr(t,n=[],r=Ct){const e=n.map(r);return Tn(()=>t(...e.map($t)))}function Tn(t,n=0){return F(X|ot|n,t,!0)}function Lr(t,n=!0){return F(X|D,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=H,e=u;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&P)!==0?r.parent=null:k(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&D)===0&&k(n),n=r}}function k(t,n=!0){var r=!1;if((n||(t.f&Xt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:C(e);e.remove(),e=a}r=!0}Lt(t,n&&!r),W(t,0),A(t,Q);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Mt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function xn(t,n){var r=[];Yt(t,r,!0),Dn(r,()=>{k(t),n&&n()})}function Dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Yt(t,n,r){if((t.f&N)===0){if(t.f^=N,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&gt)!==0||(e.f&D)!==0;Yt(e,n,a?r:!1),e=l}}}function qr(t){Ht(t,!0)}function Ht(t,n){if((t.f&N)!==0){t.f^=N,(t.f&d)===0&&(t.f^=d),j(t)&&(A(t,I),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&gt)!==0||(r.f&D)!==0;Ht(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let Y=[],st=[];function jt(){var t=Y;Y=[],wt(t)}function Rn(){var t=st;st=[],wt(t)}function Yr(t){Y.length===0&&queueMicrotask(jt),Y.push(t)}function dt(){Y.length>0&&jt(),st.length>0&&Rn()}let U=!1,K=!1,$=null,O=!1,H=!1;function Et(t){H=t}let M=[];let u=null,w=!1;function Z(t){u=t}let f=null;function z(t){f=t}let T=null;function In(t){T=t}let c=null,h=0,x=null;function On(t){x=t}let Bt=1,J=0,R=!1;function Ut(){return++Bt}function j(t){var v;var n=t.f;if((n&I)!==0)return!0;if((n&b)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var l,a,s=(n&G)!==0,i=e&&f!==null&&!R,_=r.length;if(s||i){var m=t,B=m.parent;for(l=0;l<_;l++)a=r[l],(s||!((v=a==null?void 0:a.reactions)!=null&&v.includes(m)))&&(a.reactions??(a.reactions=[])).push(m);s&&(m.f^=G),i&&B!==null&&(B.f&E)===0&&(m.f^=E)}for(l=0;l<_;l++)if(a=r[l],j(a)&&Pt(a),a.wv>t.wv)return!0}(!e||f!==null&&!R)&&A(t,d)}return!1}function Sn(t,n){for(var r=n;r!==null;){if((r.f&V)!==0)try{r.fn(t);return}catch{r.f^=V}r=r.parent}throw U=!1,t}function kn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&V)===0)}function rt(t,n,r,e){if(U){if(r===null&&(U=!1),kn(n))throw t;return}r!==null&&(U=!0);{Sn(t,n);return}}function Vt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&y)!==0?Vt(a,n,!1):n===a&&(r?A(a,I):(a.f&d)!==0&&A(a,b),et(a))}}function Gt(t){var _t;var n=c,r=h,e=x,l=u,a=R,s=T,i=o,_=w,m=t.f;c=null,h=0,x=null,R=(m&E)!==0&&(w||!O||u===null),u=(m&(D|P))===0?t:null,T=null,pt(t.ctx),w=!1,J++;try{var B=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(W(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!R)for(p=h;p<v.length;p++)((_t=v[p]).reactions??(_t.reactions=[])).push(t)}else v!==null&&h<v.length&&(W(t,h),v.length=h);if(nt()&&x!==null&&!w&&v!==null&&(t.f&(y|b|I))===0)for(p=0;p<x.length;p++)Vt(x[p],t);return l!==null&&J++,B}finally{c=n,h=r,x=e,u=l,R=a,T=s,pt(i),w=_}}function Cn(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&y)!==0&&(c===null||!c.includes(n))&&(A(n,b),(n.f&(E|G))===0&&(n.f^=G),Nt(n),W(n,0))}function W(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Cn(t,r[e])}function it(t){var n=t.f;if((n&Q)===0){A(t,d);var r=f,e=o,l=O;f=t,O=!0;try{(n&ot)!==0?An(t):Lt(t),Mt(t);var a=Gt(t);t.teardown=typeof a=="function"?a:null,t.wv=Bt;var s=t.deps,i}catch(_){rt(_,t,r,e||t.ctx)}finally{O=l,f=r}}}function Nn(){try{en()}catch(t){if($!==null)rt(t,$,null);else throw t}}function Kt(){var t=O;try{var n=0;for(O=!0;M.length>0;){n++>1e3&&Nn();var r=M,e=r.length;M=[];for(var l=0;l<e;l++){var a=bn(r[l]);Pn(a)}}}finally{K=!1,O=t,$=null,L.clear()}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(Q|N))===0)try{j(e)&&(it(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}catch(l){rt(l,e,null,e.ctx)}}}function et(t){K||(K=!0,queueMicrotask(Kt));for(var n=$=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(P|D))!==0){if((r&d)===0)return;n.f^=d}}M.push(n)}function bn(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(D|P))!==0,a=l&&(e&d)!==0;if(!a&&(e&N)===0){if((e&yt)!==0)n.push(r);else if(l)r.f^=d;else{var s=u;try{u=r,j(r)&&it(r)}catch(m){rt(m,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Fn(t){var n;for(dt();M.length>0;)K=!0,Kt(),dt();return n}async function Hr(){await Promise.resolve(),Fn()}function $t(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!w){T!==null&&T.includes(t)&&an();var e=u.deps;t.rv<J&&(t.rv=J,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&E)===0&&(l.f^=E)}return r&&(l=t,j(l)&&Pt(l)),H&&L.has(t)?L.get(t):t.v}function Mn(t){var n=w;try{return w=!0,t()}finally{w=n}}const Ln=-7169;function A(t,n){t.f=t.f&Ln|n}function jr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=Jt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{Vn as $,Lr as A,xn as B,Hn as C,f as D,pn as E,cn as F,ft as G,un as H,N as I,Yn as J,rr as K,Yt as L,Cr as M,Dn as N,k as O,nr as P,lr as Q,C as R,lt as S,at as T,Yr as U,er as V,ar as W,Ft as X,mn as Y,vt as Z,gt as _,wr as a,sn as a0,Xt as a1,vr as a2,Z as a3,z as a4,u as a5,Zn as a6,Jt as a7,pr as a8,zt as a9,Fr as aA,dn as aB,_r as aC,cr as aD,yr as aE,ht as aF,Fn as aG,Hr as aH,nt as aI,zn as aJ,Qt as aK,qn as aL,hn as aM,gr as aN,mr as aO,fn as aP,tr as aa,Dr as ab,hr as ac,dr as ad,Bn as ae,Un as af,Qn as ag,vn as ah,ct as ai,Xn as aj,Wn as ak,Kn as al,or as am,At as an,fr as ao,$n as ap,tt as aq,ur as ar,sr as as,ir as at,gn as au,jn as av,Ir as aw,xt as ax,Dt as ay,Jn as az,o as b,Or as c,Pr as d,wt as e,Sr as f,Mn as g,Gn as h,$t as i,jr as j,Ct as k,Tn as l,S as m,Ar as n,Nr as o,Er as p,Rr as q,xr as r,kr as s,Mr as t,br as u,q as v,Tr as w,g as x,on as y,qr as z};
