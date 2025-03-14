var tt=e=>{throw TypeError(e)};var Mt=(e,t,n)=>t.has(e)||tt("Cannot "+n);var k=(e,t,n)=>(Mt(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?tt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{a1 as G,R as yt,aH as Gt,Y as Ht,aM as Kt,X as Yt,V as xe,aD as C,g as O,ag as N,aE as Wt}from"./COr17J6F.js";import{l as zt}from"./DIeogL5L.js";function _t(e,t,n){if(e==null)return t(void 0),n&&n(void 0),G;const r=yt(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const F=[];function Jt(e,t){return{subscribe:Ee(e,t).subscribe}}function Ee(e,t=G){let n=null;const r=new Set;function a(o){if(Gt(e,o)&&(e=o,n)){const c=!F.length;for(const l of r)l[1](),F.push(l,e);if(c){for(let l=0;l<F.length;l+=2)F[l][0](F[l+1]);F.length=0}}}function s(o){a(o(e))}function i(o,c=G){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||G),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function er(e,t,n){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=t.length<2;return Jt(n,(i,o)=>{let c=!1;const l=[];let d=0,u=G;const y=()=>{if(d)return;u();const m=t(r?l[0]:l,i,o);s?i(m):u=typeof m=="function"?m:G},f=a.map((m,h)=>_t(m,p=>{l[h]=p,d&=~(1<<h),c&&y()},()=>{d|=1<<h}));return c=!0,y(),function(){Ht(f),u(),c=!1}})}function tr(e){let t;return _t(e,n=>t=n)(),t}function nt(e){xe===null&&Kt(),zt&&xe.l!==null?Xt(xe).m.push(e):Yt(()=>{const t=yt(e);if(typeof t=="function")return t})}function Xt(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}new URL("sveltekit-internal://");function Zt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Qt(e){return e.split("%25").map(decodeURI).join("%25")}function en(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Pe({href:e}){return e.split("#")[0]}function tn(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function nn(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function rn(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const an=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&z.delete(qe(e)),an(e,t));const z=new Map;function on(e,t){const n=qe(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&z.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=rn(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function sn(e,t,n){if(z.size>0){const r=qe(e,n),a=z.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);z.delete(r)}}return window.fetch(t,n)}function qe(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${nn(...a)}"]`}return r}const cn=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ln(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${un(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Ce(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ce(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const d=cn.exec(c),[,u,y,f,m]=d;return t.push({name:f,matcher:m,optional:!!u,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Ce(c)}).join("")}).join("")}/?$`),params:t}}function fn(e){return!/^\([^)]+\)$/.test(e)}function un(e){return e.slice(1).split("/").filter(fn)}function dn(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[o+1],u=a[o+1];d&&!d.rest&&d.optional&&u&&c.chained&&(i=0),!d&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Ce(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function hn({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:u,params:y}=ln(o),f={id:o,exec:m=>{const h=u.exec(m);if(h)return dn(h,y,r)},errors:[1,...d||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function wt(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function rt(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var dt;const x=((dt=globalThis.__sveltekit_jariuq)==null?void 0:dt.base)??"";var ht;const pn=((ht=globalThis.__sveltekit_jariuq)==null?void 0:ht.assets)??x,gn="1741920797053",vt="sveltekit:snapshot",bt="sveltekit:scroll",kt="sveltekit:states",mn="sveltekit:pageurl",H="sveltekit:history",Z="sveltekit:navigation",q={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},de=location.origin;function At(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Be(){return{x:pageXOffset,y:pageYOffset}}function M(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const at={...q,"":q.hover};function Et(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function St(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Et(e)}}function $e(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||Se(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===de&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function me(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=M(o,"preload-code")),a===null&&(a=M(o,"preload-data")),t===null&&(t=M(o,"keepfocus")),n===null&&(n=M(o,"noscroll")),s===null&&(s=M(o,"reload")),i===null&&(i=M(o,"replacestate")),o=Et(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:at[r??"off"],preload_data:at[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function ot(e){const t=Ee(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const Rt={v:()=>{}};function yn(){const{set:e,subscribe:t}=Ee(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${pn}/assets/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==gn;return i&&(e(!0),Rt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function Se(e,t,n){return e.origin!==de||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function nr(e){}function st(e){const t=wn(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const _n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function wn(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=_n.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const vn=-1,bn=-2,kn=-3,An=-4,En=-5,Sn=-6;function Rn(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===vn)return;if(s===kn)return NaN;if(s===An)return 1/0;if(s===En)return-1/0;if(s===Sn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t==null?void 0:t[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let f=1;f<o.length;f+=1)d.add(a(o[f]));break;case"Map":const u=new Map;r[s]=u;for(let f=1;f<o.length;f+=2)u.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let f=1;f<o.length;f+=2)y[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],h=st(m),p=new f(h);r[s]=p;break}case"ArrayBuffer":{const f=o[1],m=st(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==bn&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const It=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...It];const In=new Set([...It]);[...In];function Un(e){return e.filter(t=>t!=null)}class Re{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Fe{constructor(t,n){this.status=t,this.location=n}}class Me extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Ln="x-sveltekit-invalidated",Tn="x-sveltekit-trailing-slash";function ye(e){return e instanceof Re||e instanceof Me?e.status:500}function xn(e){return e instanceof Me?e.text:"Internal Error"}let R,Q,Oe;const Pn=nt.toString().includes("$$")||/function \w+\(\) \{\}/.test(nt.toString());var ne,re,ae,oe,se,ie,ce,le,pt,fe,gt,ue,mt;Pn?(R={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Q={current:null},Oe={current:!1}):(R=new(pt=class{constructor(){P(this,ne,C({}));P(this,re,C(null));P(this,ae,C(null));P(this,oe,C({}));P(this,se,C({id:null}));P(this,ie,C({}));P(this,ce,C(-1));P(this,le,C(new URL("https://example.com")))}get data(){return O(k(this,ne))}set data(t){N(k(this,ne),t)}get form(){return O(k(this,re))}set form(t){N(k(this,re),t)}get error(){return O(k(this,ae))}set error(t){N(k(this,ae),t)}get params(){return O(k(this,oe))}set params(t){N(k(this,oe),t)}get route(){return O(k(this,se))}set route(t){N(k(this,se),t)}get state(){return O(k(this,ie))}set state(t){N(k(this,ie),t)}get status(){return O(k(this,ce))}set status(t){N(k(this,ce),t)}get url(){return O(k(this,le))}set url(t){N(k(this,le),t)}},ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,ce=new WeakMap,le=new WeakMap,pt),Q=new(gt=class{constructor(){P(this,fe,C(null))}get current(){return O(k(this,fe))}set current(t){N(k(this,fe),t)}},fe=new WeakMap,gt),Oe=new(mt=class{constructor(){P(this,ue,C(!1))}get current(){return O(k(this,ue))}set current(t){N(k(this,ue),t)}},ue=new WeakMap,mt),Rt.v=()=>Oe.current=!0);function Ut(e){Object.assign(R,e)}const Cn="/__data.json",On=".html__data.json";function Nn(e){return e.endsWith(".html")?e.replace(/\.html$/,On):e.replace(/\/$/,"")+Cn}const jn=new Set(["icon","shortcut icon","apple-touch-icon"]),B=wt(bt)??{},ee=wt(vt)??{},D={url:ot({}),page:ot({}),navigating:Ee(null),updated:yn()};function Ge(e){B[e]=Be()}function $n(e,t){let n=e+1;for(;B[n];)delete B[n],n+=1;for(n=t+1;ee[n];)delete ee[n],n+=1}function Y(e){return location.href=e.href,new Promise(()=>{})}async function Lt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function it(){}let He,De,_e,j,Ve,A;const we=[],ve=[];let L=null;const pe=new Map,Tt=new Set,Dn=new Set,J=new Set;let w={branch:[],error:null,url:null},Ke=!1,be=!1,ct=!0,te=!1,W=!1,xt=!1,Ye=!1,We,S,T,$;const X=new Set;let Ne;async function sr(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),He=hn(e),j=document.documentElement,Ve=t,De=e.nodes[0],_e=e.nodes[1],De(),_e(),S=(i=history.state)==null?void 0:i[H],T=(o=history.state)==null?void 0:o[Z],S||(S=T=Date.now(),history.replaceState({...history.state,[H]:S,[Z]:T},""));const r=B[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Wn(Ve,n):await Kn(A.hash?Jn(new URL(location.href)):location.href,{replaceState:!0}),Yn()}async function Vn(){if(await(Ne||(Ne=Promise.resolve())),!Ne)return;Ne=null;const e=$={},t=await he(w.url,!0);L=null;const n=t&&await Xe(t);if(!(!n||e!==$)){if(n.type==="redirect")return Ie(new URL(n.location,w.url).href,{},1,e);n.props.page&&Object.assign(R,n.props.page),w=n.state,Pt(),We.$set(n.props),Ut(n.props.page)}}function Pt(){we.length=0,Ye=!1}function Ct(e){ve.some(t=>t==null?void 0:t.snapshot)&&(ee[e]=ve.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function Ot(e){var t;(t=ee[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=ve[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function lt(){Ge(S),rt(bt,B),Ct(T),rt(vt,ee)}async function Ie(e,t,n,r){return ge({type:"goto",url:At(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ye=!0),t.invalidate&&t.invalidate.forEach(Vt)}})}async function qn(e){if(e.id!==(L==null?void 0:L.id)){const t={};X.add(t),L={id:e.id,token:t,promise:Xe({...e,preload:t}).then(n=>(X.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function je(e){var n;const t=(n=await he(e,!1))==null?void 0:n.route;t&&await Promise.all([...t.layouts,t.leaf].map(r=>r==null?void 0:r[1]()))}function Nt(e,t,n){var s;w=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(R,e.props.page),We=new A.root({target:t,props:{...e.props,stores:D,components:ve},hydrate:n,sync:!1}),Ot(T);const a={from:null,to:{params:w.params,route:{id:((s=w.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};J.forEach(i=>i(a)),be=!0}function ke({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(e.pathname===x||e.pathname===x+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);e.pathname=Zt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Un(n).map(f=>f.node.component),page:Ze(R)}};i!==void 0&&(c.props.form=i);let l={},d=!R,u=0;for(let f=0;f<Math.max(n.length,w.branch.length);f+=1){const m=n[f],h=w.branch[f];(m==null?void 0:m.data)!==(h==null?void 0:h.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${u}`]=l),u+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==R.form||d)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:R.data}),c}async function ze({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var d,u,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((d=l.universal)!=null&&d.load){let f=function(...h){for(const p of h){const{href:v}=new URL(p,n);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(h,p)=>(o&&(c.route=!0),h[p])}),params:new Proxy(r,{get:(h,p)=>(o&&c.params.add(p),h[p])}),data:(s==null?void 0:s.data)??null,url:tn(n,()=>{o&&(c.url=!0)},h=>{o&&c.search_params.add(h)},A.hash),async fetch(h,p){h instanceof Request&&(p={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:[...h.headers].length?h.headers:void 0,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...p});const{resolved:v,promise:I}=jt(h,p,n);return o&&f(v.href),I},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),t()},untrack(h){o=!1;try{return h()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function jt(e,t,n){let r=e instanceof Request?e.url:e;const a=new URL(r,n);a.origin===n.origin&&(r=a.href.slice(n.origin.length));const s=be?sn(r,a.href,t):on(r,t);return{resolved:a,promise:s}}function ft(e,t,n,r,a,s){if(Ye)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==w.params[i])return!0;for(const i of a.dependencies)if(we.some(o=>o(new URL(i))))return!0;return!1}function Je(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Bn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function ut({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Ze(R),constructors:[]}}}async function Xe({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===e)return X.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let d=null;const u=w.url?e!==Ae(w.url):!1,y=w.route?a.id!==w.route.id:!1,f=Bn(w.url,n);let m=!1;const h=l.map((g,_)=>{var V;const b=w.branch[_],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||ft(m,y,u,f,(V=b.server)==null?void 0:V.uses,r));return E&&(m=!0),E});if(h.some(Boolean)){try{d=await qt(n,h)}catch(g){const _=await K(g,{url:n,params:r,route:{id:e}});return X.has(s)?ut({error:_,url:n,params:r,route:a}):Ue({status:ye(g),error:_,url:n,route:a})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let v=!1;const I=l.map(async(g,_)=>{var Le;if(!g)return;const b=w.branch[_],E=p==null?void 0:p[_];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!ft(v,y,u,f,(Le=b.universal)==null?void 0:Le.uses,r))return b;if(v=!0,(E==null?void 0:E.type)==="error")throw E;return ze({loader:g[1],url:n,params:r,route:a,parent:async()=>{var et;const Qe={};for(let Te=0;Te<_;Te+=1)Object.assign(Qe,(et=await I[Te])==null?void 0:et.data);return Qe},server_data_node:Je(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of I)g.catch(()=>{});const U=[];for(let g=0;g<l.length;g+=1)if(l[g])try{U.push(await I[g])}catch(_){if(_ instanceof Fe)return{type:"redirect",location:_.location};if(X.has(s))return ut({error:await K(_,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=ye(_),E;if(p!=null&&p.includes(_))b=_.status??b,E=_.error;else if(_ instanceof Re)E=_.body;else{if(await D.updated.check())return await Lt(),await Y(n);E=await K(_,{params:r,url:n,route:{id:a.id}})}const V=await Fn(g,U,i);return V?ke({url:n,params:r,branch:U.slice(0,V.idx).concat(V.node),status:b,error:E,route:a}):await Dt(n,{id:a.id},E,b)}else U.push(void 0);return ke({url:n,params:r,branch:U,status:200,error:null,route:a,form:t?void 0:null})}async function Fn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Ue({status:e,error:t,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await qt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==de||n.pathname!==location.pathname||Ke)&&await Y(n)}try{const o=await ze({loader:De,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Je(s)}),c={node:await _e(),loader:_e,universal:null,server:null,data:null};return ke({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof Fe)return Ie(new URL(o.location,location.href),{},0);throw o}}async function Mn(e){const t=e.href;if(pe.has(t))return pe.get(t);let n;try{const r=(async()=>{let a=await A.hooks.reroute({url:new URL(e),fetch:async(s,i)=>jt(s,i,e).promise})??e;if(typeof a=="string"){const s=new URL(e);A.hash?s.hash=a:s.pathname=a,a=s}return a})();pe.set(t,r),n=await r}catch{pe.delete(t);return}return n}async function he(e,t){if(e&&!Se(e,x,A.hash)){const n=await Mn(e);if(!n)return;const r=Gn(n);for(const a of He){const s=a.exec(r);if(s)return{id:Ae(e),invalidating:t,route:a,params:en(s),url:e}}}}function Gn(e){return Qt(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(x.length))||"/"}function Ae(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function $t({url:e,type:t,intent:n,delta:r}){let a=!1;const s=Ft(w,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return te||Tt.forEach(o=>o(i)),a?null:s}async function ge({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=it,block:d=it}){const u=$;$=c;const y=await he(t,!1),f=$t({url:t,type:e,delta:n==null?void 0:n.delta,intent:y});if(!f){d(),$===c&&($=u);return}const m=S,h=T;l(),te=!0,be&&D.navigating.set(Q.current=f.navigation);let p=y&&await Xe(y);if(!p){if(Se(t,x,A.hash))return await Y(t);p=await Dt(t,{id:null},await K(new Me(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(y==null?void 0:y.url)||t,$!==c)return f.reject(new Error("navigation aborted")),!1;if(p.type==="redirect")if(o>=20)p=await Ue({status:500,error:await K(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await Ie(new URL(p.location,t).href,{},o+1,c),!1;else p.props.page.status>=400&&await D.updated.check()&&(await Lt(),await Y(t));if(Pt(),Ge(m),Ct(h),p.props.page.url.pathname!==t.pathname&&(t.pathname=p.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[H]:S+=g,[Z]:T+=g,[kt]:i};(s?history.replaceState:history.pushState).call(history,_,"",t),s||$n(S,T)}if(L=null,p.props.page.state=i,be){w=p.state,p.props.page&&(p.props.page.url=t);const g=(await Promise.all(Array.from(Dn,_=>_(f.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{J.delete(b)})};g.push(_),g.forEach(b=>{J.add(b)})}We.$set(p.props),Ut(p.props.page),xt=!0}else Nt(p,Ve,!1);const{activeElement:v}=document;await Wt();const I=n?n.scroll:a?Be():null;if(ct){const g=t.hash&&document.getElementById(decodeURIComponent(A.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));I?scrollTo(I.x,I.y):g?g.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==v&&document.activeElement!==document.body;!r&&!U&&zn(),ct=!0,p.props.page&&Object.assign(R,p.props.page),te=!1,e==="popstate"&&Ot(T),f.fulfil(void 0),J.forEach(g=>g(f.navigation)),D.navigating.set(Q.current=null)}async function Dt(e,t,n,r){return e.origin===de&&e.pathname===location.pathname&&!Ke?await Ue({status:r,error:n,url:e,route:t}):await Y(e)}function Hn(){let e,t,n;j.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(e),e=setTimeout(()=>{s(c,q.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],q.tap)}j.addEventListener("mousedown",r),j.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(je(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const l=St(o,j),d=l===t&&c>=n;if(!l||d)return;const{url:u,external:y,download:f}=$e(l,x,A.hash);if(y||f)return;const m=me(l),h=u&&Ae(w.url)===Ae(u);if(!(m.reload||h))if(c<=m.preload_data){t=l,n=q.tap;const p=await he(u,!1);if(!p)return;qn(p)}else c<=m.preload_code&&(t=l,n=c,je(u))}function i(){a.disconnect();for(const o of j.querySelectorAll("a")){const{url:c,external:l,download:d}=$e(o,x,A.hash);if(l||d)continue;const u=me(o);u.reload||(u.preload_code===q.viewport&&a.observe(o),u.preload_code===q.eager&&je(c))}}J.add(i),i()}function K(e,t){if(e instanceof Re)return e.body;const n=ye(e),r=xn(e);return A.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Kn(e,t={}){return e=new URL(At(e)),e.origin!==de?Promise.reject(new Error("goto: invalid URL")):Ie(e,t,0)}function ir(e){return Vt(e),Vn()}function Vt(e){if(typeof e=="function")we.push(e);else{const{href:t}=new URL(e,location.href);we.push(n=>n.href===t)}}function Yn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(lt(),!te){const a=Ft(w,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Tt.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&lt()}),(t=navigator.connection)!=null&&t.saveData||Hn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=St(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=$e(r,x,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=me(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[d,u]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=d===Pe(location);if(s||c.reload&&(!y||!u)){$t({url:a,type:"link"})?te=!0:n.preventDefault();return}if(u!==void 0&&y){const[,f]=w.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(W=!0,Ge(S),e(a),!c.replace_state)return;W=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await ge({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(Se(o,x,!1))return;const c=n.target,l=me(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&d.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),ge({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[H]){const a=n.state[H];if($={},a===S)return;const s=B[a],i=n.state[kt]??{},o=new URL(n.state[mn]??location.href),c=n.state[Z],l=w.url?Pe(location)===Pe(w.url):!1;if(c===T&&(xt||l)){i!==R.state&&(R.state=i),e(o),B[S]=Be(),s&&scrollTo(s.x,s.y),S=a;return}const u=a-S;await ge({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{S=a,T=c},block:()=>{history.go(-u)},nav_token:$})}else if(!W){const a=new URL(location.href);e(a),A.hash&&location.reload()}}),addEventListener("hashchange",()=>{W&&(W=!1,history.replaceState({...history.state,[H]:++S,[Z]:T},"",location.href))});for(const n of document.querySelectorAll("link"))jn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&D.navigating.set(Q.current=null)});function e(n){w.url=R.url=n,D.page.set(Ze(R)),D.page.notify()}}async function Wn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Ke=!0;const l=new URL(location.href);let d;({params:a={},route:s={id:null}}=await he(l,!1)||{}),d=He.find(({id:f})=>f===s.id);let u,y=!0;try{const f=r.map(async(h,p)=>{const v=o[p];return v!=null&&v.uses&&(v.uses=Bt(v.uses)),ze({loader:A.nodes[h],url:l,params:a,route:s,parent:async()=>{const I={};for(let U=0;U<p;U+=1)Object.assign(I,(await f[U]).data);return I},server_data_node:Je(v)})}),m=await Promise.all(f);if(d){const h=d.layouts;for(let p=0;p<h.length;p++)h[p]||m.splice(p,0,void 0)}u=ke({url:l,params:a,branch:m,status:t,error:n,form:c,route:d??null})}catch(f){if(f instanceof Fe){await Y(new URL(f.location,location.href));return}u=await Ue({status:ye(f),error:await K(f,{url:l,params:a,route:s}),url:l,route:s}),e.textContent="",y=!1}u.props.page&&(u.props.page.state={}),Nt(u,e,y)}async function qt(e,t){var s;const n=new URL(e);n.pathname=Nn(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Tn,"1"),n.searchParams.append(Ln,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new Re(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function d(f){return Rn(f,{...A.decoders,Promise:m=>new Promise((h,p)=>{o.set(m,{fulfil:h,reject:p})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const h=u.indexOf(`
`);if(h===-1)break;const p=JSON.parse(u.slice(0,h));if(u=u.slice(h+1),p.type==="redirect")return i(p);if(p.type==="data")(y=p.nodes)==null||y.forEach(v=>{(v==null?void 0:v.type)==="data"&&(v.uses=Bt(v.uses),v.data=d(v.data))}),i(p);else if(p.type==="chunk"){const{id:v,data:I,error:U}=p,g=o.get(v);o.delete(v),U?g.reject(d(U)):g.fulfil(d(I))}}}})}function Bt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function zn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function Ft(e,t,n,r){var c,l;let a,s;const i=new Promise((d,u)=>{a=d,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function Ze(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function Jn(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{_t as a,x as b,sr as c,er as d,tr as g,ir as i,nr as l,nt as o,R as p,Jt as r,D as s,Ee as w};
