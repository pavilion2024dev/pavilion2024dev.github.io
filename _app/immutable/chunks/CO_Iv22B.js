import{R as le,T as Z,G as O,h as C,C as ue,I as oe,m as V,d as ce,U as ve,V as B,F as S,J as x,K as de,W as z,S as H,X as _e,Y as w,P as Q,A as X,Z as q,_ as he,a0 as J,y as pe,a1 as y,a2 as Ee,O as Ae,a3 as Te,a4 as $,a5 as M,a6 as ge,D as Ie,a7 as j,a8 as Ce,a9 as Ne,aa as me,ab as xe,ac as be,ad as Re,ae as P,af as De}from"./CDDViuPw.js";import{l as ee}from"./D6rjMAse.js";import{c as ae}from"./BtaWbt3H.js";function Fe(a,e){return e}function Le(a,e,n,r){for(var f=[],l=e.length,o=0;o<l;o++)Ee(e[o].e,f,!0);var d=l>0&&f.length===0&&n!==null;if(d){var _=n.parentNode;Ae(_),_.append(n),r.clear(),N(a,e[0].prev,e[l-1].next)}Te(f,()=>{for(var p=0;p<l;p++){var v=e[p];d||(r.delete(v.k),N(a,v.prev,v.next)),$(v.e,!d)}})}function Ke(a,e,n,r,f,l=null){var o=a,d={flags:e,items:new Map,first:null},_=(e&j)!==0;if(_){var p=a;o=C?O(ue(p)):p.appendChild(le())}C&&oe();var v=null,m=!1,s=ce(()=>{var c=n();return pe(c)?c:c==null?[]:Q(c)});Z(()=>{var c=V(s),t=c.length;if(m&&t===0)return;m=t===0;let g=!1;if(C){var E=o.data===ve;E!==(t===0)&&(o=B(),O(o),S(!1),g=!0)}if(C){for(var A=null,T,h=0;h<t;h++){if(x.nodeType===8&&x.data===de){o=x,g=!0,S(!1);break}var i=c[h],u=r(i,h);T=ne(x,d,A,null,i,u,h,f,e,n),d.items.set(u,T),A=T}t>0&&O(B())}C||Oe(c,d,o,f,e,r,n),l!==null&&(t===0?v?z(v):v=H(()=>l(o)):v!==null&&_e(v,()=>{v=null})),g&&S(!0),V(s)}),C&&(o=x)}function Oe(a,e,n,r,f,l,o){var G,Y,F,K;var d=(f&Ne)!==0,_=(f&(M|y))!==0,p=a.length,v=e.items,m=e.first,s=m,c,t=null,g,E=[],A=[],T,h,i,u;if(d)for(u=0;u<p;u+=1)T=a[u],h=l(T,u),i=v.get(h),i!==void 0&&((G=i.a)==null||G.measure(),(g??(g=new Set)).add(i));for(u=0;u<p;u+=1){if(T=a[u],h=l(T,u),i=v.get(h),i===void 0){var se=s?s.e.nodes_start:n;t=ne(se,e,t,t===null?e.first:t.next,T,h,u,r,f,o),v.set(h,t),E=[],A=[],s=t.next;continue}if(_&&Se(i,T,u,f),(i.e.f&w)!==0&&(z(i.e),d&&((Y=i.a)==null||Y.unfix(),(g??(g=new Set)).delete(i))),i!==s){if(c!==void 0&&c.has(i)){if(E.length<A.length){var R=A[0],I;t=R.prev;var k=E[0],D=E[E.length-1];for(I=0;I<E.length;I+=1)W(E[I],R,n);for(I=0;I<A.length;I+=1)c.delete(A[I]);N(e,k.prev,D.next),N(e,t,k),N(e,D,R),s=R,t=D,u-=1,E=[],A=[]}else c.delete(i),W(i,s,n),N(e,i.prev,i.next),N(e,i,t===null?e.first:t.next),N(e,t,i),t=i;continue}for(E=[],A=[];s!==null&&s.k!==h;)(s.e.f&w)===0&&(c??(c=new Set)).add(s),A.push(s),s=s.next;if(s===null)continue;i=s}E.push(i),t=i,s=i.next}if(s!==null||c!==void 0){for(var b=c===void 0?[]:Q(c);s!==null;)(s.e.f&w)===0&&b.push(s),s=s.next;var L=b.length;if(L>0){var fe=(f&j)!==0&&p===0?n:null;if(d){for(u=0;u<L;u+=1)(F=b[u].a)==null||F.measure();for(u=0;u<L;u+=1)(K=b[u].a)==null||K.fix()}Le(e,b,fe,v)}}d&&Ce(()=>{var U;if(g!==void 0)for(i of g)(U=i.a)==null||U.apply()}),X.first=e.first&&e.first.e,X.last=t&&t.e}function Se(a,e,n,r){(r&M)!==0&&q(a.v,e),(r&y)!==0?q(a.i,n):a.i=n}function ne(a,e,n,r,f,l,o,d,_,p){var v=(_&M)!==0,m=(_&ge)===0,s=v?m?he(f):J(f):f,c=(_&y)===0?o:J(o),t={i:c,v:s,k:l,a:null,e:null,prev:n,next:r};try{return t.e=H(()=>d(a,s,c,p),C),t.e.prev=n&&n.e,t.e.next=r&&r.e,n===null?e.first=t:(n.next=t,n.e.next=t.e),r!==null&&(r.prev=t,r.e.prev=t.e),t}finally{}}function W(a,e,n){for(var r=a.next?a.next.e.nodes_start:n,f=e?e.e.nodes_start:n,l=a.e.nodes_start;l!==r;){var o=Ie(l);f.before(l),l=o}}function N(a,e,n){e===null?a.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Ue(a,e,...n){var r=a,f=xe,l;Z(()=>{f!==(f=e())&&(l&&($(l),l=null),l=H(()=>f(r,...n)))},me),C&&(r=x)}const we="data-no-translate",Ve="paraglide:lang",Be="paraglide_lang",re={},He=()=>be(re),Xe=a=>{Re(re,a)};function qe(){const a=He();function e(r,f){return typeof r!="string"||!a?r:a.translateHref(r,f)}function n(r,f){if(r[we])return r;for(const{attribute_name:l,lang_attribute_name:o}of f)if(l in r){const d=r[l],_=o?r[o]:void 0;r[l]=e(d,typeof _=="string"?_:void 0)}return r}return[e,n]}const te=De(""),ye=P([ee,te],([a,e])=>(ae.i18n.default===a?"":"../")+e),Me=P([ee],([a])=>ae.i18n.default===a?"":"/"+a),Je=P([ye,Me],([a,e])=>n=>a+e+(n==="/"?"/":n+"/")),ie=a=>a?a.replace(/\/\(([^)]+)\)/g,""):"/",We=(a,e)=>ie(a)===e,Ze=a=>{const e=ie(a).replace(/^\//,"").split("/");te.set(Pe(e))},Pe=a=>{const e=a.length;if(e<=1)return a[0]===""?".":"..";let n="../";for(let r=0;r<e-1;r++)n+="../";return n.replace(/\/$/,"")};export{Be as L,We as a,Xe as b,Ve as c,Ze as d,Ke as e,qe as g,Je as h,Fe as i,Ue as s};
