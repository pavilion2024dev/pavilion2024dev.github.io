import{aa as Y,ab as O,ac as A,Y as j,ad as H,W as I,ae as b,M as P,G as C,I as W,af as T,m as y,l as D,j as $,w as g,ag as q,ah as B,ai as G,aj as J,ak as z,al as F,J as K,o as Q,h as E,p as U,x as X,a as Z}from"./CKDTCF4q.js";import{r as x}from"./CErJvrKd.js";import{c as rr}from"./WJGEsOzo.js";const ar=["touchstart","touchmove"];function er(r){return ar.includes(r)}const k=new Set,S=new Set;function ir(r){for(var a=0;a<r.length;a++)k.add(r[a]);for(var t of S)t(r)}function m(r){var R;var a=this,t=a.ownerDocument,c=r.type,i=((R=r.composedPath)==null?void 0:R.call(r))||[],e=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;u<=h&&(d=u)}if(e=i[d]||r.target,e!==a){Y(r,"currentTarget",{configurable:!0,get(){return e||t}});var w=H,o=I;O(null),A(null);try{for(var s,n=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&(!e.disabled||r.target===e))if(j(l)){var[M,...V]=l;M.apply(e,[r,...V])}else l.call(e,r)}catch(v){s?n.push(v):s=v}if(r.cancelBubble||f===a||f===null)break;e=f}if(s){for(let v of n)queueMicrotask(()=>{throw v});throw s}}finally{r.__root=a,delete r.currentTarget,O(w),A(o)}}}function fr(r,a){var t=a==null?"":typeof a=="object"?a+"":a;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t+"")}function tr(r,a){return L(r,a)}function dr(r,a){b(),a.intro=a.intro??!1;const t=a.target,c=E,i=g;try{for(var e=P(t);e&&(e.nodeType!==8||e.data!==C);)e=W(e);if(!e)throw T;y(!0),D(e),$();const d=L(r,{...a,anchor:e});if(g===null||g.nodeType!==8||g.data!==q)throw B(),T;return y(!1),d}catch(d){if(d===T)return a.recover===!1&&G(),b(),J(t),y(!1),tr(r,a);throw d}finally{y(c),D(i),x()}}const p=new Map;function L(r,{target:a,anchor:t,props:c={},events:i,context:e,intro:d=!0}){b();var _=new Set,u=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!_.has(n)){_.add(n);var f=er(n);a.addEventListener(n,m,{passive:f});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,l+1)}}};u(z(k)),S.add(u);var h=void 0,w=F(()=>{var o=t??a.appendChild(K());return Q(()=>{if(e){U({});var s=X;s.c=e}i&&(c.$$events=i),E&&rr(o,null),h=r(o,c)||{},E&&(I.nodes_end=g),e&&Z()}),()=>{var f;for(var s of _){a.removeEventListener(s,m);var n=p.get(s);--n===0?(document.removeEventListener(s,m),p.delete(s)):p.set(s,n)}S.delete(u),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return N.set(h,w),h}let N=new WeakMap;function ur(r,a){const t=N.get(r);return t?(N.delete(r),t(a)):Promise.resolve()}export{ir as d,dr as h,tr as m,fr as s,ur as u};
