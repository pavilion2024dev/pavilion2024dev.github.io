import{L as c,K as f,as as p,v as m,at as h,au as g,h as d,l as s,d as E,j as T}from"./BhoE-Qwl.js";function v(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=m;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&h)!==0,_=(t&g)!==0,n,u=!r.startsWith("<!>");return()=>{if(d)return a(s,null),s;n===void 0&&(n=v(u?r:"<!>"+r),e||(n=f(n)));var o=_||p?document.importNode(n,!0):n.cloneNode(!0);if(e){var l=f(o),i=o.lastChild;a(l,i)}else a(o,o);return o}}function M(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,u;return()=>{if(d)return a(s,null),s;if(!u){var o=v(n),l=f(o);u=f(l)}var i=u.cloneNode(!0);return a(i,i),i}}function N(r=""){if(!d){var t=c(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=c()),T(e)),a(e,e),e}function L(){if(d)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=c();return r.append(t,e),a(t,e),r}function b(r,t){if(d){m.nodes_end=s,E();return}r!==null&&r.before(t)}export{b as a,N as b,L as c,a as d,M as n,y as t};
