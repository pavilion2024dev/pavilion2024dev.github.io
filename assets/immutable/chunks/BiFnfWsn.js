import{Z as x,ac as Y,ad as j,G as m,ae as G,i as c,af as d,ag as b,ah as A,D as Z,ai as C,a6 as K,J as $,aj as z,ak as F,k as q,o as J,al as V,am as H,g as B,an as Q,ao as W,ap as X,aq as k,F as p,ar as ee}from"./B0AdQyPJ.js";import{b as re}from"./CaWsOuxX.js";import{l as ae}from"./DIeogL5L.js";function O(t,v=null,R){if(typeof t!="object"||t===null||x in t)return t;const y=K(t);if(y!==Y&&y!==j)return t;var f=new Map,g=$(t),P=m(0);g&&f.set("length",m(t.length));var I;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&C();var n=f.get(e);return n===void 0?(n=m(r.value),f.set(e,n)):b(n,O(r.value,I)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,m(d));else{if(g&&typeof e=="string"){var n=f.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&b(n,a)}b(r,d),M(P)}return!0},get(i,e,r){var l;if(e===x)return t;var n=f.get(e),a=e in i;if(n===void 0&&(!a||(l=A(i,e))!=null&&l.writable)&&(n=m(O(a?i[e]:d,I)),f.set(e,n)),n!==void 0){var u=c(n);return u===d?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var n=f.get(e);n&&(r.value=c(n))}else if(r===void 0){var a=f.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==d)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===x)return!0;var r=f.get(e),n=r!==void 0&&r.v!==d||Reflect.has(i,e);if(r!==void 0||Z!==null&&(!n||(u=A(i,e))!=null&&u.writable)){r===void 0&&(r=m(n?O(i[e],I):d),f.set(e,r));var a=c(r);if(a===d)return!1}return n},set(i,e,r,n){var S;var a=f.get(e),u=e in i;if(g&&e==="length")for(var l=r;l<a.v;l+=1){var w=f.get(l+"");w!==void 0?b(w,d):l in i&&(w=m(d),f.set(l+"",w))}a===void 0?(!u||(S=A(i,e))!=null&&S.writable)&&(a=m(void 0),b(a,O(r,I)),f.set(e,a)):(u=a.v!==d,b(a,O(r,I)));var _=Reflect.getOwnPropertyDescriptor(i,e);if(_!=null&&_.set&&_.set.call(n,r),!u){if(g&&typeof e=="string"){var D=f.get("length"),E=Number(e);Number.isInteger(E)&&E>=D.v&&b(D,E+1)}M(P)}return!0},ownKeys(i){c(P);var e=Reflect.ownKeys(i).filter(a=>{var u=f.get(a);return u===void 0||u.v!==d});for(var[r,n]of f)n.v!==d&&!(r in i)&&e.push(r);return e},setPrototypeOf(){G()}})}function M(t,v=1){b(t,t.v+v)}function U(t){var v;return((v=t.ctx)==null?void 0:v.d)??!1}function fe(t,v,R,y){var T;var f=(R&k)!==0,g=!ae||(R&X)!==0,P=(R&Q)!==0,I=(R&ee)!==0,i=!1,e;P?[e,i]=re(()=>t[v]):e=t[v];var r=x in t||W in t,n=P&&(((T=A(t,v))==null?void 0:T.set)??(r&&v in t&&(s=>t[v]=s)))||void 0,a=y,u=!0,l=!1,w=()=>(l=!0,u&&(u=!1,I?a=B(y):a=y),a);e===void 0&&y!==void 0&&(n&&g&&z(),e=w(),n&&n(e));var _;if(g)_=()=>{var s=t[v];return s===void 0?w():(u=!0,l=!1,s)};else{var D=(f?q:J)(()=>t[v]);D.f|=F,_=()=>{var s=c(D);return s!==void 0&&(a=void 0),s===void 0?a:s}}if((R&V)===0)return _;if(n){var E=t.$$legacy;return function(s,h){return arguments.length>0?((!g||!h||E||i)&&n(h?_():s),s):_()}}var S=!1,N=p(e),o=q(()=>{var s=_(),h=c(N);return S?(S=!1,h):N.v=s});return P&&c(o),f||(o.equals=H),function(s,h){if(arguments.length>0){const L=h?c(o):g&&P?O(s):s;if(!o.equals(L)){if(S=!0,b(N,L),l&&a!==void 0&&(a=L),U(o))return s;B(()=>c(o))}return s}return U(o)?o.v:c(o)}}export{O as a,fe as p};
