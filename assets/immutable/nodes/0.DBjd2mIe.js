import{d as T,a as h,t as B}from"../chunks/DrIXAkv_.js";import{o as H,v as Y,aE as Z,aF as Q,aG as X,n as $,B as aa,A as ea,C as ta,U as na,aH as ra,p as U,f as p,a as w,t as C,k as e,m as P,g as j,h as x,aw as M,aI as sa,s as ia}from"../chunks/DUxzOUFU.js";import{i as A}from"../chunks/-_43-pS-.js";import{e as oa,s as R,i as la,L as ca,a as ga,b as ua,c as q}from"../chunks/D_sdW8LJ.js";import{s as S,d as E,a as O,n as z,p as I,e as N,f as fa,i as ma}from"../chunks/v8bL284F.js";import{h as F}from"../chunks/DcxG5nla.js";import{p as D}from"../chunks/Ccgs3VLu.js";import{b as K,i as ha,g as da}from"../chunks/CmPGAOzg.js";import{p as va}from"../chunks/B1inrFLL.js";import{h as _a,p as La}from"../chunks/Bcd2Tqaj.js";function pa(r,a,o){H&&Y();var l=r,i=na,n,t=Z()?Q:X;$(()=>{t(i,i=a())&&(n&&aa(n),n=ea(()=>o(l)))}),H&&(l=ta)}const ba=ra;function Ta(r,a){return r.protocol!==a.protocol?a.href:a.password||a.username?"//"+[a.username,a.password].filter(Boolean).join(":")+"@"+a.host+a.pathname+a.search+a.hash:r.host!==a.host?"//"+a.host+a.pathname+a.search+a.hash:a.pathname+a.search+a.hash}function ka(r,a,o){const l=new URL(o??"/",a).pathname;return r.origin!==a.origin||!r.pathname.startsWith(l)}var Pa=B('<link rel="alternate">');function ya(r,a){U(a,!0);const[o,l]=S(),i=()=>O(I,"$page",o),n=P(()=>z(K,new URL(i().url))||"/"),t=(s,_)=>{const m=[];for(const y of a.availableLanguageTags){const k=_.getLocalisedPath(s,y),L=E(k,e(n),void 0),b=new URL(L,new URL(i().url)).href;m.push(b)}return m},v=P(()=>N(i().url.pathname,e(n))[0]),u=P(()=>a.strategy.getCanonicalPath(e(v),a.currentLang)),c=P(()=>t(e(u),a.strategy));var d=T(),g=p(d);{var f=s=>{var _=T(),m=p(_);oa(m,17,()=>e(c),la,(y,k,L)=>{var b=Pa();C(()=>{R(b,"hreflang",a.availableLanguageTags[L]),R(b,"href",e(k))}),h(y,b)}),h(s,_)};A(g,s=>{a.availableLanguageTags.length>=1&&s(f)})}h(r,d),w(),l()}const Ua=(r,a)=>`${ca}=${r};Path=${a};SameSite=lax;Max-Age=31557600`;function wa(r,a){U(a,!0);const[o,l]=S(),i=()=>O(I,"$page",o),n=P(()=>z(K,new URL(i().url))||"/"),t=P(()=>a.languageTag??a.i18n.getLanguageFromUrl(i().url));j(()=>{a.i18n.config.runtime.setLanguageTag(e(t)),document.documentElement.lang=e(t),document.documentElement.dir=a.i18n.config.textDirection[e(t)]??"ltr"});let v=0;x(()=>{e(t)&&(v+=1)}),x(()=>{e(t)&&(v>1||ba)&&ha(ua)});function u(g,f){try{const s=new URL(da(I).url),[_,m]=N(s.pathname,e(n)),y=a.i18n.strategy.getCanonicalPath(_,e(t)),k=new URL(s);k.pathname=E(y,e(n),m);const L=new URL(g,new URL(k));if(ka(L,s,e(n))||a.i18n.config.exclude(L.pathname))return g;const b=f??e(t),[V,J]=N(L.pathname,e(n)),W=a.i18n.strategy.getLocalisedPath(V,b),G=new URL(L);return G.pathname=E(W,e(n),J),Ta(s,G)}catch{return g}}ga({translateHref:u}),x(()=>{document.cookie=Ua(e(t),e(n))});var c=T();F(g=>{var f=T(),s=p(f);{var _=m=>{ya(m,{get availableLanguageTags(){return a.i18n.config.runtime.availableLanguageTags},get strategy(){return a.i18n.strategy},get currentLang(){return e(t)}})};A(s,m=>{a.i18n.config.seo.noAlternateLinks!==!0&&!a.i18n.config.exclude(i().url.pathname)&&m(_)})}h(g,f)});var d=p(c);pa(d,()=>e(t),g=>{var f=T(),s=p(f);q(s,()=>a.children??M),h(g,f)}),h(r,c),w(),l()}const Aa=!0,xa=!0,Ca="always",Va=Object.freeze(Object.defineProperty({__proto__:null,prerender:Aa,ssr:xa,trailingSlash:Ca},Symbol.toStringTag,{value:"Module"})),Ra=()=>"Little Toad, Little Toad: Unbuilding Pavilion",Ea=()=>"두껍아 두껍아: 집의 시간",Ia=(r={},a={})=>({en:Ra,ko:Ea})[a.languageTag??fa()]();var Na=B('<meta name="description">');function Ba(r,a){U(a,!0);let o=D(a,"title",3,""),l=D(a,"description",3,"");F(i=>{var n=T(),t=p(n);{var v=u=>{var c=Na();C(()=>R(c,"content",l())),h(u,c)};A(t,u=>{l()&&u(v)})}C(u=>sa.title=`${(o()?o()+" | ":"")??""}${u??""}`,[()=>Ia()]),h(i,n)}),w()}var Sa=B("<!> <!>",1);function Ja(r,a){U(a,!0);const[o,l]=S(),i=()=>O(La,"$pageTitle",o),n=c=>{var d=Sa(),g=p(d);Ba(g,{get title(){return i()}});var f=ia(g,2);q(f,()=>a.children??M),h(c,d)};j(()=>{_a(va.route.id??"")});var t=T(),v=p(t);{var u=c=>{wa(c,{i18n:ma,children:(d,g)=>{n(d)},$$slots:{default:!0}})};A(v,c=>{c(u)})}h(r,t),w(),l()}export{Ja as component,Va as universal};
