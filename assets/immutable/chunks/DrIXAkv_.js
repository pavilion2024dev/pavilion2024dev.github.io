import{G as v,J as u,aj as p,R as c,ak as h,al as E,o as f,C as o,v as g,x as T}from"./DUxzOUFU.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=c;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&h)!==0,_=(t&E)!==0,n,d=!r.startsWith("<!>");return()=>{if(f)return a(o,null),o;n===void 0&&(n=m(d?r:"<!>"+r),e||(n=u(n)));var s=_||p?document.importNode(n,!0):n.cloneNode(!0);if(e){var l=u(s),i=s.lastChild;a(l,i)}else a(s,s);return s}}function N(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(f)return a(o,null),o;if(!d){var s=m(n),l=u(s);d=u(l)}var i=d.cloneNode(!0);return a(i,i),i}}function M(r=""){if(!f){var t=v(r+"");return a(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=v()),T(e)),a(e,e),e}function C(){if(f)return a(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=v();return r.append(t,e),a(t,e),r}function L(r,t){if(f){c.nodes_end=o,g();return}r!==null&&r.before(t)}const w="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(w);export{L as a,M as b,a as c,C as d,N as n,y as t};
