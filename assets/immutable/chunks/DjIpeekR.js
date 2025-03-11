var te=t=>{throw TypeError(t)};var qe=(t,e,n)=>e.has(t)||te("Cannot "+n);var A=(t,e,n)=>(qe(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?te("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{a5 as G,u as me,aF as Ge,A as Me,aL as He,z as Ke,x as Tt,aB as C,C as O,a9 as N,aC as ze}from"./BrbKiInh.js";import{l as We}from"./DIeogL5L.js";function ye(t,e,n){if(t==null)return e(void 0),n&&n(void 0),G;const r=me(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const V=[];function Ye(t,e){return{subscribe:kt(t,e).subscribe}}function kt(t,e=G){let n=null;const r=new Set;function a(o){if(Ge(t,o)&&(t=o,n)){const c=!V.length;for(const l of r)l[1](),V.push(l,t);if(c){for(let l=0;l<V.length;l+=2)V[l][0](V[l+1]);V.length=0}}}function s(o){a(o(t))}function i(o,c=G){const l=[o,c];return r.add(l),r.size===1&&(n=e(a,s)||G),o(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function Zn(t,e,n){const r=!Array.isArray(t),a=r?[t]:t;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return Ye(n,(i,o)=>{let c=!1;const l=[];let u=0,p=G;const y=()=>{if(u)return;p();const m=e(r?l[0]:l,i,o);s?i(m):p=typeof m=="function"?m:G},f=a.map((m,d)=>ye(m,h=>{l[d]=h,u&=~(1<<d),c&&y()},()=>{u|=1<<d}));return c=!0,y(),function(){Me(f),p(),c=!1}})}function Qn(t){let e;return ye(t,n=>e=n)(),e}function ee(t){Tt===null&&He(),We&&Tt.l!==null?Je(Tt).m.push(t):Ke(()=>{const e=me(t);if(typeof e=="function")return e})}function Je(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}new URL("sveltekit-internal://");function Xe(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Ze(t){return t.split("%25").map(decodeURI).join("%25")}function Qe(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function xt({href:t}){return t.split("#")[0]}function tn(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}function en(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function nn(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const rn=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&Y.delete(Bt(t)),rn(t,e));const Y=new Map;function an(t,e){const n=Bt(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=nn(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function on(t,e,n){if(Y.size>0){const r=Bt(t,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(e,n)}function Bt(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${en(...a)}"]`}return r}const sn=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function cn(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${fn(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Pt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Pt(String.fromCharCode(...c.slice(2).split("-").map(d=>parseInt(d,16))));const u=sn.exec(c),[,p,y,f,m]=u;return e.push({name:f,matcher:m,optional:!!p,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return Pt(c)}).join("")}).join("")}/?$`),params:e}}function ln(t){return!/^\([^)]+\)$/.test(t)}function fn(t){return t.slice(1).split("/").filter(ln)}function un(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const u=e[o+1],p=a[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Pt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function dn({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,l,u]])=>{const{pattern:p,params:y}=cn(o),f={id:o,exec:m=>{const d=p.exec(m);if(d)return un(d,y,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function _e(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function ne(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var ue;const x=((ue=globalThis.__sveltekit_1m6b0ts)==null?void 0:ue.base)??"";var de;const hn=((de=globalThis.__sveltekit_1m6b0ts)==null?void 0:de.assets)??x,pn="1741715561700",we="sveltekit:snapshot",ve="sveltekit:scroll",be="sveltekit:states",gn="sveltekit:pageurl",M="sveltekit:history",Z="sveltekit:navigation",pt={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},dt=location.origin;function Ae(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Ft(){return{x:pageXOffset,y:pageYOffset}}function q(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const re={...pt,"":pt.hover};function ke(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function Se(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ke(t)}}function jt(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||St(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===dt&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function gt(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=q(o,"preload-code")),a===null&&(a=q(o,"preload-data")),e===null&&(e=q(o,"keepfocus")),n===null&&(n=q(o,"noscroll")),s===null&&(s=q(o,"reload")),i===null&&(i=q(o,"replacestate")),o=ke(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:re[r??"off"],preload_data:re[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function ae(t){const e=kt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const Ee={v:()=>{}};function mn(){const{set:t,subscribe:e}=kt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${hn}/assets/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==pn;return i&&(t(!0),Ee.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function St(t,e,n){return t.origin!==dt||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function tr(t){}function oe(t){const e=_n(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const yn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function _n(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=yn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const wn=-1,vn=-2,bn=-3,An=-4,kn=-5,Sn=-6;function En(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===wn)return;if(s===bn)return NaN;if(s===An)return 1/0;if(s===kn)return-1/0;if(s===Sn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const u=new Set;r[s]=u;for(let f=1;f<o.length;f+=1)u.add(a(o[f]));break;case"Map":const p=new Map;r[s]=p;for(let f=1;f<o.length;f+=2)p.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let f=1;f<o.length;f+=2)y[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],d=oe(m),h=new f(d);r[s]=h;break}case"ArrayBuffer":{const f=o[1],m=oe(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const u=o[l];u!==vn&&(c[l]=a(u))}}else{const c={};r[s]=c;for(const l in o){const u=o[l];c[l]=a(u)}}return r[s]}return a(0)}const Re=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Re];const Rn=new Set([...Re]);[...Rn];function In(t){return t.filter(e=>e!=null)}class Et{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Vt{constructor(e,n){this.status=e,this.location=n}}class qt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const Un="x-sveltekit-invalidated",Ln="x-sveltekit-trailing-slash";function mt(t){return t instanceof Et||t instanceof qt?t.status:500}function Tn(t){return t instanceof qt?t.text:"Internal Error"}let I,Q,Ct;const xn=ee.toString().includes("$$")||/function \w+\(\) \{\}/.test(ee.toString());var nt,rt,at,ot,st,it,ct,lt,he,ft,pe,ut,ge;xn?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Q={current:null},Ct={current:!1}):(I=new(he=class{constructor(){P(this,nt,C({}));P(this,rt,C(null));P(this,at,C(null));P(this,ot,C({}));P(this,st,C({id:null}));P(this,it,C({}));P(this,ct,C(-1));P(this,lt,C(new URL("https://example.com")))}get data(){return O(A(this,nt))}set data(e){N(A(this,nt),e)}get form(){return O(A(this,rt))}set form(e){N(A(this,rt),e)}get error(){return O(A(this,at))}set error(e){N(A(this,at),e)}get params(){return O(A(this,ot))}set params(e){N(A(this,ot),e)}get route(){return O(A(this,st))}set route(e){N(A(this,st),e)}get state(){return O(A(this,it))}set state(e){N(A(this,it),e)}get status(){return O(A(this,ct))}set status(e){N(A(this,ct),e)}get url(){return O(A(this,lt))}set url(e){N(A(this,lt),e)}},nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,lt=new WeakMap,he),Q=new(pe=class{constructor(){P(this,ft,C(null))}get current(){return O(A(this,ft))}set current(e){N(A(this,ft),e)}},ft=new WeakMap,pe),Ct=new(ge=class{constructor(){P(this,ut,C(!1))}get current(){return O(A(this,ut))}set current(e){N(A(this,ut),e)}},ut=new WeakMap,ge),Ee.v=()=>Ct.current=!0);function Ie(t){Object.assign(I,t)}const Pn="/__data.json",Cn=".html__data.json";function On(t){return t.endsWith(".html")?t.replace(/\.html$/,Cn):t.replace(/\/$/,"")+Pn}const Nn=new Set(["icon","shortcut icon","apple-touch-icon"]),F=_e(ve)??{},tt=_e(we)??{},D={url:ae({}),page:ae({}),navigating:kt(null),updated:mn()};function Gt(t){F[t]=Ft()}function jn(t,e){let n=t+1;for(;F[n];)delete F[n],n+=1;for(n=e+1;tt[n];)delete tt[n],n+=1}function K(t){return location.href=t.href,new Promise(()=>{})}async function Ue(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function se(){}let Mt,$t,yt,j,Dt,k;const _t=[],wt=[];let L=null;const Le=new Set,$n=new Set,J=new Set;let w={branch:[],error:null,url:null},Ht=!1,vt=!1,ie=!0,et=!1,z=!1,Te=!1,Kt=!1,zt,R,T,$;const X=new Set;let Ot;async function ar(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),k=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),Mt=dn(t),j=document.documentElement,Dt=e,$t=t.nodes[0],yt=t.nodes[1],$t(),yt(),R=(i=history.state)==null?void 0:i[M],T=(o=history.state)==null?void 0:o[Z],R||(R=T=Date.now(),history.replaceState({...history.state,[M]:R,[Z]:T},""));const r=F[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await zn(Dt,n):await Hn(k.hash?Ve(new URL(location.href)):location.href,{replaceState:!0}),Kn()}async function Dn(){if(await(Ot||(Ot=Promise.resolve())),!Ot)return;Ot=null;const t=$={},e=await ht(w.url,!0);L=null;const n=e&&await Jt(e);if(!(!n||t!==$)){if(n.type==="redirect")return Rt(new URL(n.location,w.url).href,{},1,t);n.props.page&&Object.assign(I,n.props.page),w=n.state,xe(),zt.$set(n.props),Ie(n.props.page)}}function xe(){_t.length=0,Kt=!1}function Pe(t){wt.some(e=>e==null?void 0:e.snapshot)&&(tt[t]=wt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Ce(t){var e;(e=tt[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=wt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function ce(){Gt(R),ne(ve,F),Pe(T),ne(we,tt)}async function Rt(t,e,n,r){return W({type:"goto",url:Ae(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Kt=!0),e.invalidate&&e.invalidate.forEach($e)}})}async function Bn(t){if(t.id!==(L==null?void 0:L.id)){const e={};X.add(e),L={id:t.id,token:e,promise:Jt({...t,preload:e}).then(n=>(X.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Nt(t){var n;const e=(n=await ht(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(r=>r==null?void 0:r[1]()))}function Oe(t,e,n){var s;w=t.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(I,t.props.page),zt=new k.root({target:e,props:{...t.props,stores:D,components:wt},hydrate:n,sync:!1}),Ce(T);const a={from:null,to:{params:w.params,route:{id:((s=w.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};J.forEach(i=>i(a)),vt=!0}function bt({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);t.pathname=Xe(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:In(n).map(f=>f.node.component),page:Xt(I)}};i!==void 0&&(c.props.form=i);let l={},u=!I,p=0;for(let f=0;f<Math.max(n.length,w.branch.length);f+=1){const m=n[f],d=w.branch[f];(m==null?void 0:m.data)!==(d==null?void 0:d.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${p}`]=l),p+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==I.form||u)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?l:I.data}),c}async function Wt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var u,p,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let f=function(...d){for(const h of d){const{href:_}=new URL(h,n);c.dependencies.add(_)}};const m={route:new Proxy(a,{get:(d,h)=>(o&&(c.route=!0),d[h])}),params:new Proxy(r,{get:(d,h)=>(o&&c.params.add(h),d[h])}),data:(s==null?void 0:s.data)??null,url:tn(n,()=>{o&&(c.url=!0)},d=>{o&&c.search_params.add(d)},k.hash),async fetch(d,h){let _;d instanceof Request?(_=d.url,h={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:[...d.headers].length?d.headers:void 0,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...h}):_=d;const S=new URL(_,n);return o&&f(S.href),S.origin===n.origin&&(_=S.href.slice(n.origin.length)),vt?on(_,S.href,h):an(_,h)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),e()},untrack(d){o=!1;try{return d()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(p=l.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function le(t,e,n,r,a,s){if(Kt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==w.params[i])return!0;for(const i of a.dependencies)if(_t.some(o=>o(new URL(i))))return!0;return!1}function Yt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function Fn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function fe({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Xt(I),constructors:[]}}}async function Jt({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===t)return X.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=w.url?t!==At(w.url):!1,y=w.route?a.id!==w.route.id:!1,f=Fn(w.url,n);let m=!1;const d=l.map((g,v)=>{var B;const b=w.branch[v],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||le(m,y,p,f,(B=b.server)==null?void 0:B.uses,r));return E&&(m=!0),E});if(d.some(Boolean)){try{u=await De(n,d)}catch(g){const v=await H(g,{url:n,params:r,route:{id:t}});return X.has(s)?fe({error:v,url:n,params:r,route:a}):It({status:mt(g),error:v,url:n,route:a})}if(u.type==="redirect")return u}const h=u==null?void 0:u.nodes;let _=!1;const S=l.map(async(g,v)=>{var Ut;if(!g)return;const b=w.branch[v],E=h==null?void 0:h[v];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!le(_,y,p,f,(Ut=b.universal)==null?void 0:Ut.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Wt({loader:g[1],url:n,params:r,route:a,parent:async()=>{var Qt;const Zt={};for(let Lt=0;Lt<v;Lt+=1)Object.assign(Zt,(Qt=await S[Lt])==null?void 0:Qt.data);return Zt},server_data_node:Yt(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of S)g.catch(()=>{});const U=[];for(let g=0;g<l.length;g+=1)if(l[g])try{U.push(await S[g])}catch(v){if(v instanceof Vt)return{type:"redirect",location:v.location};if(X.has(s))return fe({error:await H(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=mt(v),E;if(h!=null&&h.includes(v))b=v.status??b,E=v.error;else if(v instanceof Et)E=v.body;else{if(await D.updated.check())return await Ue(),await K(n);E=await H(v,{params:r,url:n,route:{id:a.id}})}const B=await Vn(g,U,i);return B?bt({url:n,params:r,branch:U.slice(0,B.idx).concat(B.node),status:b,error:E,route:a}):await je(n,{id:a.id},E,b)}else U.push(void 0);return bt({url:n,params:r,branch:U,status:200,error:null,route:a,form:e?void 0:null})}async function Vn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function It({status:t,error:e,url:n,route:r}){const a={};let s=null;if(k.server_loads[0]===0)try{const o=await De(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==dt||n.pathname!==location.pathname||Ht)&&await K(n)}try{const o=await Wt({loader:$t,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Yt(s)}),c={node:await yt(),loader:yt,universal:null,server:null,data:null};return bt({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof Vt)return Rt(new URL(o.location,location.href),{},0);throw o}}function qn(t){let e;try{if(e=k.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const n=new URL(t);k.hash?n.hash=e:n.pathname=e,e=n}}catch{return}return e}async function ht(t,e){if(t&&!St(t,x,k.hash)){const n=qn(t);if(!n)return;const r=Gn(n);for(const a of Mt){const s=a.exec(r);if(s)return{id:At(t),invalidating:e,route:a,params:Qe(s),url:t}}}}function Gn(t){return Ze(k.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function At(t){return(k.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Ne({url:t,type:e,intent:n,delta:r}){let a=!1;const s=Fe(w,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return et||Le.forEach(o=>o(i)),a?null:s}async function W({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=se,block:u=se}){const p=$;$=c;const y=await ht(e,!1),f=Ne({url:e,type:t,delta:n==null?void 0:n.delta,intent:y});if(!f){u(),$===c&&($=p);return}const m=R,d=T;l(),et=!0,vt&&D.navigating.set(Q.current=f.navigation);let h=y&&await Jt(y);if(!h){if(St(e,x,k.hash))return await K(e);h=await je(e,{id:null},await H(new qt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(y==null?void 0:y.url)||e,$!==c)return f.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await It({status:500,error:await H(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await Rt(new URL(h.location,e).href,{},o+1,c),!1;else h.props.page.status>=400&&await D.updated.check()&&(await Ue(),await K(e));if(xe(),Gt(m),Pe(d),h.props.page.url.pathname!==e.pathname&&(e.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,v={[M]:R+=g,[Z]:T+=g,[be]:i};(s?history.replaceState:history.pushState).call(history,v,"",e),s||jn(R,T)}if(L=null,h.props.page.state=i,vt){w=h.state,h.props.page&&(h.props.page.url=e);const g=(await Promise.all(Array.from($n,v=>v(f.navigation)))).filter(v=>typeof v=="function");if(g.length>0){let v=function(){g.forEach(b=>{J.delete(b)})};g.push(v),g.forEach(b=>{J.add(b)})}zt.$set(h.props),Ie(h.props.page),Te=!0}else Oe(h,Dt,!1);const{activeElement:_}=document;await ze();const S=n?n.scroll:a?Ft():null;if(ie){const g=e.hash&&document.getElementById(decodeURIComponent(k.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));S?scrollTo(S.x,S.y):g?g.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==_&&document.activeElement!==document.body;!r&&!U&&Wn(),ie=!0,h.props.page&&Object.assign(I,h.props.page),et=!1,t==="popstate"&&Ce(T),f.fulfil(void 0),J.forEach(g=>g(f.navigation)),D.navigating.set(Q.current=null)}async function je(t,e,n,r){return t.origin===dt&&t.pathname===location.pathname&&!Ht?await It({status:r,error:n,url:t,route:e}):await K(t)}function Mn(){let t,e;j.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(t),t=setTimeout(()=>{a(o,2)},20)});function n(i){i.defaultPrevented||a(i.composedPath()[0],1)}j.addEventListener("mousedown",n),j.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(Nt(new URL(o.target.href)),r.unobserve(o.target))},{threshold:0});async function a(i,o){const c=Se(i,j);if(!c||c===e)return;const{url:l,external:u,download:p}=jt(c,x,k.hash);if(u||p)return;const y=gt(c),f=l&&At(w.url)===At(l);if(!y.reload&&!f)if(o<=y.preload_data){e=c;const m=await ht(l,!1);m&&Bn(m)}else o<=y.preload_code&&(e=c,Nt(l))}function s(){r.disconnect();for(const i of j.querySelectorAll("a")){const{url:o,external:c,download:l}=jt(i,x,k.hash);if(c||l)continue;const u=gt(i);u.reload||(u.preload_code===pt.viewport&&r.observe(i),u.preload_code===pt.eager&&Nt(o))}}J.add(s),s()}function H(t,e){if(t instanceof Et)return t.body;const n=mt(t),r=Tn(t);return k.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Hn(t,e={}){return t=new URL(Ae(t)),t.origin!==dt?Promise.reject(new Error("goto: invalid URL")):Rt(t,e,0)}function or(t){return $e(t),Dn()}function $e(t){if(typeof t=="function")_t.push(t);else{const{href:e}=new URL(t,location.href);_t.push(n=>n.href===e)}}function Kn(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ce(),!et){const a=Fe(w,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Le.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ce()}),(e=navigator.connection)!=null&&e.saveData||Mn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Se(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=jt(r,x,k.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=gt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[u,p]=(k.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=u===xt(location);if(s||c.reload&&(!y||!p)){Ne({url:a,type:"link"})?et=!0:n.preventDefault();return}if(p!==void 0&&y){const[,f]=w.url.href.split("#");if(f===p){if(n.preventDefault(),p===""||p==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(p));m&&(m.scrollIntoView(),m.focus())}return}if(z=!0,Gt(R),t(a),!c.replace_state)return;z=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(St(o,x,!1))return;const c=n.target,l=gt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=a==null?void 0:a.getAttribute("name");p&&u.append(p,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),W({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[M]){const a=n.state[M];if($={},a===R)return;const s=F[a],i=n.state[be]??{},o=new URL(n.state[gn]??location.href),c=n.state[Z],l=w.url?xt(location)===xt(w.url):!1;if(c===T&&(Te||l)){i!==I.state&&(I.state=i),t(o),F[R]=Ft(),s&&scrollTo(s.x,s.y),R=a;return}const p=a-R;await W({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{R=a,T=c},block:()=>{history.go(-p)},nav_token:$})}else if(!z){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{z?(z=!1,history.replaceState({...history.state,[M]:++R,[Z]:T},"",location.href)):k.hash&&w.url.hash===location.hash&&W({type:"goto",url:Ve(w.url)})});for(const n of document.querySelectorAll("link"))Nn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&D.navigating.set(Q.current=null)});function t(n){w.url=I.url=n,D.page.set(Xt(I)),D.page.notify()}}async function zn(t,{status:e=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Ht=!0;const l=new URL(location.href);let u;({params:a={},route:s={id:null}}=await ht(l,!1)||{}),u=Mt.find(({id:f})=>f===s.id);let p,y=!0;try{const f=r.map(async(d,h)=>{const _=o[h];return _!=null&&_.uses&&(_.uses=Be(_.uses)),Wt({loader:k.nodes[d],url:l,params:a,route:s,parent:async()=>{const S={};for(let U=0;U<h;U+=1)Object.assign(S,(await f[U]).data);return S},server_data_node:Yt(_)})}),m=await Promise.all(f);if(u){const d=u.layouts;for(let h=0;h<d.length;h++)d[h]||m.splice(h,0,void 0)}p=bt({url:l,params:a,branch:m,status:e,error:n,form:c,route:u??null})}catch(f){if(f instanceof Vt){await K(new URL(f.location,location.href));return}p=await It({status:mt(f),error:await H(f,{url:l,params:a,route:s}),url:l,route:s}),t.textContent="",y=!1}p.props.page&&(p.props.page.state={}),Oe(p,t,y)}async function De(t,e){var s;const n=new URL(t);n.pathname=On(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(Ln,"1"),n.searchParams.append(Un,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new Et(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function u(f){return En(f,{...k.decoders,Promise:m=>new Promise((d,h)=>{o.set(m,{fulfil:d,reject:h})})})}let p="";for(;;){const{done:f,value:m}=await c.read();if(f&&!p)break;for(p+=!m&&p?`
`:l.decode(m,{stream:!0});;){const d=p.indexOf(`
`);if(d===-1)break;const h=JSON.parse(p.slice(0,d));if(p=p.slice(d+1),h.type==="redirect")return i(h);if(h.type==="data")(y=h.nodes)==null||y.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=Be(_.uses),_.data=u(_.data))}),i(h);else if(h.type==="chunk"){const{id:_,data:S,error:U}=h,g=o.get(_);o.delete(_),U?g.reject(u(U)):g.fulfil(u(S))}}}})}function Be(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Wn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Fe(t,e,n,r){var c,l;let a,s;const i=new Promise((u,p)=>{a=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Xt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function Ve(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{ye as a,x as b,ar as c,Zn as d,Qn as g,or as i,tr as l,ee as o,I as p,Ye as r,D as s,kt as w};
