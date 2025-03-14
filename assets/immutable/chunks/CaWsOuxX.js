import{l as te,m as R,n as ne,_ as re,a0 as ae,H as se,q as ie,v as ce,w as W,z as k,A as z,B as U,af as ue,x as oe,$ as M,F as fe,ag as le,i as ge,av as he,aw as de}from"./B0AdQyPJ.js";import{a as me,g as K,s as _e,b as L,r as pe}from"./30vsrmnq.js";import"./CWj6FrbW.js";function et(e,t,[n,r]=[0,0]){R&&n===0&&ne();var i=e,s=null,c=null,u=ue,a=n>0?re:0,o=!1;const f=(g,h=!0)=>{o=!0,l(h,g)},l=(g,h)=>{if(u===(u=g))return;let m=!1;if(R&&r!==-1){if(n===0){const d=i.data;d===ae?r=0:d===se?r=1/0:(r=parseInt(d.substring(1)),r!==r&&(r=u?1/0:-1))}const p=r>n;!!u===p&&(i=ie(),ce(i),W(!1),m=!0,r=-1)}u?(s?k(s):h&&(s=z(()=>h(i))),c&&U(c,()=>{c=null})):(c?k(c):h&&(c=z(()=>h(i,[n+1,r]))),s&&U(s,()=>{s=null})),m&&W(!0)};te(()=>{o=!1,t(f),o||l(null,null)},a),R&&(i=oe)}let w=!1,A=Symbol();function tt(e,t,n){const r=n[t]??(n[t]={store:null,source:fe(void 0),unsubscribe:M});if(r.store!==e&&!(A in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=M;else{var i=!0;r.unsubscribe=me(e,s=>{i?r.source.v=s:le(r.source,s)}),i=!1}return e&&A in n?K(e):ge(r.source)}function nt(e,t){return e.set(t),t}function rt(){const e={};function t(){he(()=>{for(var n in e)e[n].unsubscribe();de(e,A,{enumerable:!1,value:!0})})}return[e,t]}function at(e){var t=w;try{return w=!1,[e(),w]}finally{w=t}}const be={i18n:{default:"en"}},ve=()=>{const e=_e;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},Te={subscribe(e){return ve().page.subscribe(e)}};function Le(e,t){if(e==="")return"";const n=new URL(e,t).pathname;return n.endsWith("/")?n.slice(0,-1):n}function x(e,t){const n=xe(e),r=we(n,t),[i,s]=Se(r);return[i,s]}const D=(e,t,n)=>[t,e,n??""].filter(r=>r!=="/").join("")||"/";function we(e,t){const n=e.replace(t,"");return n.startsWith("/")?n:`/${n}`}function Se(e){const n=["/.html__data.json","/__data.json"].find(r=>e.endsWith(r));return n?[e.slice(0,-n.length)||"/",n]:[e,void 0]}function xe(e){try{return decodeURI(e)}catch{return e}}const Ie=e=>({url:t})=>{try{const[n,r]=x(t.pathname,L),i=e.getLanguageFromLocalisedPath(n);if(!i)return t.pathname;const s=e.getCanonicalPath(n,i);return D(s,L,r)}catch{return t.pathname}};function Ee(e){return`/${e.split("/").filter(Boolean).join("/")}`}function $e(e){const t=e.map(n=>typeof n=="string"?r=>r===n:r=>n.test(r));return n=>t.some(r=>r(Ee(n)))}const S="rtl",y="ltr";function Re(e){try{const t=new Intl.Locale(e);return"textInfo"in t?t.textInfo.direction===S?S:y:t.getTextInfo().direction===S?S:y}catch{return y}}function ye(e){const t=e.map(n=>[n,Re(n)]);return Object.fromEntries(t)}const je=0,H=1,I=2,Oe=4,b=0,v=1,j=2;function Pe(e){const t=Ae(De);return e.sort((n,r)=>{var i,s,c,u,a,o;const f=Y(n).map(t),l=Y(r).map(t);for(let g=0;g<Math.max(f.length,l.length);g+=1){const h=f[g],m=l[g];if(!h)return-1;if(!m)return 1;for(let p=0;p<Math.max(h.length,m.length);p+=1){const d=h[p],_=m[p];if((d==null?void 0:d[b])||(_==null?void 0:_[b])){if(!d)return-1;if(!_)return 1;const E=((i=h[p+1])==null?void 0:i[v])||((c=(s=f[g+1])==null?void 0:s[0])==null?void 0:c[v]),$=((u=m[p+1])==null?void 0:u[v])||((o=(a=l[g+1])==null?void 0:a[0])==null?void 0:o[v]),ee=E&&$,N=E&&!$,C=!E&&$;if((d[b]&&_[b])===I){if(ee)continue;if(N)return-1;if(C)return 1}if(d[b]===I)return N?-1:1;if(_[b]===I)return C?1:-1;if(d[j]!==_[j])return(-1)**+d[j];if(d[b]!==_[b])return(-1)**+(d[b]>_[b])}else if((d==null?void 0:d[v])!==(_==null?void 0:_[v]))return Be(d[v],_[v])}}return n<r?1:-1})}function Ae(e){const t=new Map;return n=>(t.has(n)||t.set(n,e(n)),t.get(n))}function De(e){const t=[];let n=0;for(;n<=e.length;){const r=e.indexOf("[",n),i=r===-1;if(t.push([je,e.slice(n,i?void 0:r),!1]),i)break;const s=e[r+1]==="["?H:e[r+1]==="."?I:Oe,c=s===H?"]]":"]",u=e.indexOf(c,r);if(u===-1)throw new Error(`Invalid route definition ${e}`);const a=e.slice(r,n=u+c.length);t.push([s,a,a.includes("=")])}return t}const Y=e=>e.replace(/\[\[[^\]]+\]\](?!$)/g,"").split("/").filter(Boolean);function Be(e,t){if(e===t)return 0;let n=0;for(;e[n]===t[n];)n++;return e[n]?t[n]?e[n]<t[n]?-1:1:-1:1}const Fe=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ne(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Z(e).map(r=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(i)return t.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const c=r.split(/\[(.+?)\](?!\])/);return"/"+c.map((a,o)=>{if(o%2){if(a.startsWith("x+"))return O(String.fromCharCode(parseInt(a.slice(2),16)));if(a.startsWith("u+"))return O(String.fromCharCode(...a.slice(2).split("-").map(p=>parseInt(p,16))));const f=Fe.exec(a);if(!f)throw new Error(`Invalid param: ${a}`);const[,l,g,h,m]=f;return t.push({name:h,matcher:m,optional:!!l,rest:!!g,chained:g?o===1&&c[0]==="":!1}),g?"(.*?)":l?"([^/]*)?":"([^/]+?)"}return O(a)}).join("")}).join("")}/?$`),params:t}}function Ce(e,t,n){const r={},i=e.slice(1),s=i.filter(u=>u!==void 0);let c=0;for(const[u,a]of t.entries()){let o=i[u-c];if(a.chained&&a.rest&&c&&(o=i.slice(u-c,u+1).filter(l=>l).join("/"),c=0),o===void 0){a.rest&&(r[a.name]="");continue}if(a.matcher&&!n[a.matcher])return;if((n[a.matcher]??(()=>!0))(o)){r[a.name]=o;const l=t[u+1],g=i[u+1];l&&!l.rest&&l.optional&&g&&a.chained&&(c=0),!l&&!g&&Object.keys(r).length===s.length&&(c=0);continue}if(a.optional&&a.chained){c++;continue}return}if(!c)return r}function O(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}const We=/\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;function X(e,t){return"/"+Z(e).map(n=>n.replace(We,(r,i,s,c)=>{const u=t[c];if(!u){if(i||s&&u!==void 0)return"";throw new Error(`Missing parameter '${c}' in route ${e}`)}if(u[0]=="/"||u.endsWith("/"))throw new Error(`Parameter '${c}' in route ${e} cannot start or end with a slash`);return u})).filter(Boolean).join("/")}function Q(e,t,n){const r=Pe(t);for(const i of r){const s=Ne(i),c=s.pattern.exec(ke(e));if(!c)continue;const u=Ce(c,s.params,n);if(u)return{params:u,id:i}}}const ke=e=>e.endsWith("/")?e.slice(0,-1):e,Z=e=>e.slice(1).split("/"),ze=(e,t)=>Object.fromEntries(Object.entries(e).map(([n,r])=>[n,typeof r=="object"?r:Ue(r,t)])),Ue=(e,t)=>Object.fromEntries(t.map(n=>[n,e({},{languageTag:n})]));function Me(e,t,n,r,i){function s(a){const f=a.split("/")[1];if(e.includes(f)&&(i==="always"||f!==t))return f;if(i==="never")return t}function c(a,o){const f=a.endsWith("/")&&a!=="/";a=f?a.slice(0,-1):a;let l=Ye(a,o,n,r);return f&&(l+="/"),(i==="always"||o!==t)&&(l=`/${o}${l}`),l}function u(a,o){const f=a.endsWith("/")&&a!=="/";(i==="always"||o!==t)&&(a=a.replace(`/${o}`,"")||"/");const l=f;a=l?a.slice(0,-1):a;let g=He(a,o,n,r);return l&&(g+="/"),g}return{getLanguageFromLocalisedPath:s,getLocalisedPath:c,getCanonicalPath:u}}function He(e,t,n,r){for(const[i,s]of Object.entries(n)){if(!(t in s))continue;const c=s[t];if(!c)continue;const u=Q(e,[c],r);if(u)return X(i,u.params)}return e}function Ye(e,t,n,r){const i=Q(e,Object.keys(n),r);if(!i)return e;const s=n[i.id];if(!s)return e;const c=s[t];return c?X(c,i.params):e}function qe(e,t){var u;const n=t!=null&&t.pathnames?ze(t.pathnames,e.availableLanguageTags):{},r=(t==null?void 0:t.exclude)??[],i=(t==null?void 0:t.defaultLanguageTag)??e.sourceLanguageTag,s={defaultLanguageTag:i,runtime:e,translations:n,matchers:(t==null?void 0:t.matchers)??{},exclude:$e(r),prefixDefaultLanguage:(t==null?void 0:t.prefixDefaultLanguage)??"never",textDirection:(t==null?void 0:t.textDirection)??ye(e.availableLanguageTags),seo:{noAlternateLinks:((u=t==null?void 0:t.seo)==null?void 0:u.noAlternateLinks)??!1}},c=Me(e.availableLanguageTags,i,s.translations,s.matchers,s.prefixDefaultLanguage);return Object.freeze(n),Object.freeze(s),{config:s,strategy:c,reroute:()=>Ie(c),handle:()=>{throw new Error("")},getLanguageFromUrl(a){const o=P(L),[f]=x(a.pathname,o);return s.exclude(f)?s.defaultLanguageTag:c.getLanguageFromLocalisedPath(f)||s.defaultLanguageTag},resolveRoute(a,o=void 0){if(s.exclude(a))return a;const f=P(L),[l,g]=x(a,f);if(o=o??e.languageTag(),!a.startsWith(f))return a;const h=c.getLocalisedPath(l,o);return D(h,f,g)},route(a){const o=P(L),[f,l]=x(a,o),h=c.getLanguageFromLocalisedPath(f)||s.defaultLanguageTag,m=c.getCanonicalPath(f,h);return D(m,o,l)}}}function P(e){return e===""?"":e.startsWith("/")?e:Le(e,new URL(K(Te).url))}let B;const G="en",J=["en","ko"];let T=()=>G;const Ke=e=>{typeof e=="function"?T=q(e):T=q(()=>e),B!==void 0&&B(T())};function q(e){return()=>{const t=e();if(!F(t))throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");return t}}const V=e=>{B=e};function F(e){return J.includes(e)}const Xe=Object.freeze(Object.defineProperty({__proto__:null,availableLanguageTags:J,isAvailableLanguageTag:F,get languageTag(){return T},onSetLanguageTag:V,setLanguageTag:Ke,sourceLanguageTag:G},Symbol.toStringTag,{value:"Module"}));new TextEncoder;const Qe=e=>F(e)?e:"en",st=qe(Xe,{defaultLanguageTag:Qe(be.i18n.default)}),it=pe(T(),e=>{e(T()),V(()=>{e(T())})});export{tt as a,at as b,be as c,st as d,D as e,x as f,T as g,J as h,et as i,nt as j,it as l,Le as n,Te as p,rt as s};
