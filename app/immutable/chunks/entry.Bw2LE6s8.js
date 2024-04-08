import{n as le,s as lt,E as ft}from"./scheduler.SZubZLqs.js";new URL("sveltekit-internal://");function ut(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function dt(e){return e.split("%25").map(decodeURI).join("%25")}function ht(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function fe({href:e}){return e.split("#")[0]}const pt=["href","pathname","search","toString","toJSON"];function gt(e,n,t){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return s=>(t(s),r[o](s));n();const i=Reflect.get(r,o);return typeof i=="function"?i.bind(r):i}}),enumerable:!0,configurable:!0});for(const r of pt)Object.defineProperty(a,r,{get(){return n(),e[r]},enumerable:!0,configurable:!0});return a}const mt="/__data.json",_t=".html__data.json";function yt(e){return e.endsWith(".html")?e.replace(/\.html$/,_t):e.replace(/\/$/,"")+mt}function wt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function vt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const Ve=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(me(e)),Ve(e,n));const G=new Map;function bt(e,n){const t=me(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&G.set(t,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=vt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function Et(e,n,t){if(G.size>0){const a=me(e,t),r=G.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);G.delete(a)}}return window.fetch(n,t)}function me(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${wt(...r)}"]`}return a}const kt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Rt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return ue(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ue(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=kt.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?l===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ue(c)}).join("")}).join("")}/?$`),params:n}}function At(e){return!/^\([^)]+\)$/.test(e)}function Rt(e){return e.slice(1).split("/").filter(At)}function It(e,n,t){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=r[s-i];if(c.chained&&c.rest&&i&&(l=r.slice(s-i,s+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](l)){a[c.name]=l;const u=n[s+1],h=r[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function ue(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Lt({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([s,[c,l,u]])=>{const{pattern:h,params:g}=St(s),d={id:s,exec:_=>{const f=h.exec(_);if(f)return It(f,g,a)},errors:[1,...u||[]].map(_=>e[_]),layouts:[0,...l||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function Fe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Pe(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}const O=[];function _e(e,n=le){let t;const a=new Set;function r(s){if(lt(e,s)&&(e=s,t)){const c=!O.length;for(const l of a)l[1](),O.push(l,e);if(c){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function o(s){r(s(e))}function i(s,c=le){const l=[s,c];return a.add(l),a.size===1&&(t=n(r,o)||le),s(e),()=>{a.delete(l),a.size===0&&t&&(t(),t=null)}}return{set:r,update:o,subscribe:i}}var De;const P=((De=globalThis.__sveltekit_14a2eeo)==null?void 0:De.base)??"";var Ce;const Pt=((Ce=globalThis.__sveltekit_14a2eeo)==null?void 0:Ce.assets)??P,Tt="1712555652730",qe="sveltekit:snapshot",Ge="sveltekit:scroll",Me="sveltekit:states",Ut="sveltekit:pageurl",D="sveltekit:history",H="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function He(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ye(){return{x:pageXOffset,y:pageYOffset}}function j(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Te={...J,"":J.hover};function Be(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ke(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Be(e)}}function he(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!a||ae(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===z&&e.hasAttribute("download");return{url:t,external:r,target:a,download:o}}function W(e){let n=null,t=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=j(s,"preload-code")),r===null&&(r=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),t===null&&(t=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Be(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Te[a??"off"],preload_data:Te[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Ue(e){const n=_e(e);let t=!0;function a(){t=!0,n.update(i=>i)}function r(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}function xt(){const{set:e,subscribe:n}=_e(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${Pt}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Tt;return i&&(e(!0),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:a}}function ae(e,n){return e.origin!==z||!e.pathname.startsWith(n)}const Nt=-1,Ot=-2,jt=-3,$t=-4,Dt=-5,Ct=-6;function Vt(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,i=!1){if(o===Nt)return;if(o===jt)return NaN;if(o===$t)return 1/0;if(o===Dt)return-1/0;if(o===Ct)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=t[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return a[o]=l(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const u=new Set;a[o]=u;for(let d=1;d<s.length;d+=1)u.add(r(s[d]));break;case"Map":const h=new Map;a[o]=h;for(let d=1;d<s.length;d+=2)h.set(r(s[d]),r(s[d+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);a[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=r(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let l=0;l<s.length;l+=1){const u=s[l];u!==Ot&&(c[l]=r(u))}}else{const c={};a[o]=c;for(const l in s){const u=s[l];c[l]=r(u)}}return a[o]}return r(0)}const ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ze];const Ft=new Set([...ze]);[...Ft];function qt(e){return e.filter(n=>n!=null)}class re{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(n,t){this.status=n,this.location=t}}class we extends Error{constructor(n,t,a){super(a),this.status=n,this.text=t}}const Gt="x-sveltekit-invalidated",Mt="x-sveltekit-trailing-slash";function X(e){return e instanceof re||e instanceof we?e.status:500}function Ht(e){return e instanceof we?e.text:"Internal Error"}const N=Fe(Ge)??{},B=Fe(qe)??{},U={url:Ue({}),page:Ue({}),navigating:_e(null),updated:xt()};function ve(e){N[e]=ye()}function Bt(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;B[t];)delete B[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}function xe(){}let oe,pe,Z,T,ge,F;const Je=[],Q=[];let R=null;const We=[],Kt=[];let $=[],y={branch:[],error:null,url:null},be=!1,ee=!1,Ne=!0,K=!1,q=!1,Xe=!1,Ee=!1,ke,S,L,I,te;const M=new Set;async function an(e,n,t){var r,o;document.URL!==location.href&&(location.href=location.href),F=e,oe=Lt(e),T=document.documentElement,ge=n,pe=e.nodes[0],Z=e.nodes[1],pe(),Z(),S=(r=history.state)==null?void 0:r[D],L=(o=history.state)==null?void 0:o[H],S||(S=L=Date.now(),history.replaceState({...history.state,[D]:S,[H]:L},""));const a=N[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await en(ge,t):Zt(location.href,{replaceState:!0}),Qt()}function zt(){Je.length=0,Ee=!1}function Ze(e){Q.some(n=>n==null?void 0:n.snapshot)&&(B[e]=Q.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Qe(e){var n;(n=B[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=Q[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function Oe(){ve(S),Pe(Ge,N),Ze(L),Pe(qe,B)}async function et(e,n,t,a){return Y({type:"goto",url:He(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(Ee=!0)}})}async function Yt(e){if(e.id!==(R==null?void 0:R.id)){const n={};M.add(n),R={id:e.id,token:n,promise:nt({...e,preload:n}).then(t=>(M.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function de(e){const n=oe.find(t=>t.exec(at(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function tt(e,n,t){var o;y=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),I=e.props.page,ke=new F.root({target:n,props:{...e.props,stores:U,components:Q},hydrate:t}),Qe(L);const r={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};$.forEach(i=>i(r)),ee=!0}async function ne({url:e,params:n,branch:t,status:a,error:r,route:o,form:i}){let s="never";if(P&&(e.pathname===P||e.pathname===P+"/"))s="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);e.pathname=ut(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:qt(t).map(d=>d.node.component),page:I}};i!==void 0&&(c.props.form=i);let l={},u=!I,h=0;for(let d=0;d<Math.max(t.length,y.branch.length);d+=1){const _=t[d],f=y.branch[d];(_==null?void 0:_.data)!==(f==null?void 0:f.data)&&(u=!0),_&&(l={...l,..._.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==r||i!==void 0&&i!==I.form||u)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:u?l:I.data}),c}async function Se({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const m of f){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const _={route:new Proxy(r,{get:(f,m)=>(s&&(c.route=!0),f[m])}),params:new Proxy(a,{get:(f,m)=>(s&&c.params.add(m),f[m])}),data:(o==null?void 0:o.data)??null,url:gt(t,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)}),async fetch(f,m){let b;f instanceof Request?(b=f.url,m={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...m}):b=f;const A=new URL(b,t);return s&&d(A.href),A.origin===t.origin&&(b=A.href.slice(t.origin.length)),ee?Et(b,A.href,m):bt(b,m)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,_)??null}return{node:l,loader:e,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function je(e,n,t,a,r,o){if(Ee)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==y.params[i])return!0;for(const i of r.dependencies)if(Je.some(s=>s(new URL(i))))return!0;return!1}function Ae(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Jt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&t.delete(a)}return t}function $e({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:I,constructors:[]}}}async function nt({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((R==null?void 0:R.id)===e)return M.delete(R.token),R.promise;const{errors:i,layouts:s,leaf:c}=r,l=[...s,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),l.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?e!==y.url.pathname+y.url.search:!1,g=y.route?r.id!==y.route.id:!1,d=Jt(y.url,t);let _=!1;const f=l.map((p,v)=>{var x;const E=y.branch[v],k=!!(p!=null&&p[0])&&((E==null?void 0:E.loader)!==p[1]||je(_,g,h,d,(x=E.server)==null?void 0:x.uses,a));return k&&(_=!0),k});if(f.some(Boolean)){try{u=await st(t,f)}catch(p){const v=await C(p,{url:t,params:a,route:{id:e}});return M.has(o)?$e({error:v,url:t,params:a,route:r}):se({status:X(p),error:v,url:t,route:r})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const A=l.map(async(p,v)=>{var ie;if(!p)return;const E=y.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&p[1]===(E==null?void 0:E.loader)&&!je(b,g,h,d,(ie=E.universal)==null?void 0:ie.uses,a))return E;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Se({loader:p[1],url:t,params:a,route:r,parent:async()=>{var Le;const Ie={};for(let ce=0;ce<v;ce+=1)Object.assign(Ie,(Le=await A[ce])==null?void 0:Le.data);return Ie},server_data_node:Ae(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?E==null?void 0:E.server:void 0)})});for(const p of A)p.catch(()=>{});const w=[];for(let p=0;p<l.length;p+=1)if(l[p])try{w.push(await A[p])}catch(v){if(v instanceof Ye)return{type:"redirect",location:v.location};if(M.has(o))return $e({error:await C(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let E=X(v),k;if(m!=null&&m.includes(v))E=v.status??E,k=v.error;else if(v instanceof re)k=v.body;else{if(await U.updated.check())return await V(t);k=await C(v,{params:a,url:t,route:{id:r.id}})}const x=await Wt(p,w,i);return x?await ne({url:t,params:a,branch:w.slice(0,x.idx).concat(x.node),status:E,error:k,route:r}):await ot(t,{id:r.id},k,E)}else w.push(void 0);return await ne({url:t,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function Wt(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:e,error:n,url:t,route:a}){const r={};let o=null;if(F.server_loads[0]===0)try{const l=await st(t,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(t.origin!==z||t.pathname!==location.pathname||be)&&await V(t)}const s=await Se({loader:pe,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Ae(o)}),c={node:await Z(),loader:Z,universal:null,server:null,data:null};return await ne({url:t,params:r,branch:[s,c],status:e,error:n,route:null})}function Re(e,n){if(!e||ae(e,P))return;let t;try{t=F.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const a=at(t);for(const r of oe){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:n,route:r,params:ht(o),url:e}}}function at(e){return dt(e.slice(P.length)||"/")}function rt({url:e,type:n,intent:t,delta:a}){let r=!1;const o=ct(y,t,e,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return K||We.forEach(s=>s(i)),r?null:o}async function Y({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=xe,block:u=xe}){const h=Re(n,!1),g=rt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){u();return}const d=S,_=L;l(),K=!0,ee&&U.navigating.set(g.navigation),te=c;let f=h&&await nt(h);if(!f){if(ae(n,P))return await V(n);f=await ot(n,{id:null},await C(new we(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,te!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await se({status:500,error:await C(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return et(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await U.updated.check()&&await V(n);if(zt(),ve(d),Ze(_),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=t?t.state:i,!t){const w=o?0:1,p={[D]:S+=w,[H]:L+=w,[Me]:i};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Bt(S,L)}if(R=null,f.props.page.state=i,ee){y=f.state,f.props.page&&(f.props.page.url=n);const w=(await Promise.all(Kt.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){$=$.filter(v=>!w.includes(v))};w.push(p),$.push(...w)}ke.$set(f.props),Xe=!0}else tt(f,ge,!1);const{activeElement:m}=document;await ft();const b=t?t.scroll:r?ye():null;if(Ne){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==m&&document.activeElement!==document.body;!a&&!A&&tn(),Ne=!0,f.props.page&&(I=f.props.page),K=!1,e==="popstate"&&Qe(L),g.fulfil(void 0),$.forEach(w=>w(g.navigation)),U.navigating.set(null)}async function ot(e,n,t,a){return e.origin===z&&e.pathname===location.pathname&&!be?await se({status:a,error:t,url:e,route:n}):await V(e)}function Xt(){let e;T.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function n(o){a(o.composedPath()[0],1)}T.addEventListener("mousedown",n),T.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(de(i.target.href),t.unobserve(i.target))},{threshold:0});function a(o,i){const s=Ke(o,T);if(!s)return;const{url:c,external:l,download:u}=he(s,P);if(l||u)return;const h=W(s);if(!h.reload)if(i<=h.preload_data){const g=Re(c,!1);g&&Yt(g)}else i<=h.preload_code&&de(c.pathname)}function r(){t.disconnect();for(const o of T.querySelectorAll("a")){const{url:i,external:s,download:c}=he(o,P);if(s||c)continue;const l=W(o);l.reload||(l.preload_code===J.viewport&&t.observe(o),l.preload_code===J.eager&&de(i.pathname))}}$.push(r),r()}function C(e,n){if(e instanceof re)return e.body;const t=X(e),a=Ht(e);return F.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function Zt(e,n={}){return e=He(e),e.origin!==z?Promise.reject(new Error("goto: invalid URL")):et(e,n,0)}function Qt(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(Oe(),!K){const r=ct(y,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};We.forEach(i=>i(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(n=navigator.connection)!=null&&n.saveData||Xt(),T.addEventListener("click",t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=Ke(t.composedPath()[0],T);if(!a)return;const{url:r,external:o,target:i,download:s}=he(a,P);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=W(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;if(o||c.reload){rt({url:r,type:"link"})?K=!0:t.preventDefault();return}const[u,h]=r.href.split("#");if(h!==void 0&&u===fe(location)){const[,d]=y.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=a.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(q=!0,ve(S),e(r),!c.replace_state)return;q=!1}t.preventDefault(),Y({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),T.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formMethod)||a.method)!=="get")return;const i=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(ae(i,P))return;const s=t.target,c=W(s);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(s),u=r==null?void 0:r.getAttribute("name");u&&l.append(u,(r==null?void 0:r.getAttribute("value"))??""),i.search=new URLSearchParams(l).toString(),Y({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[D]){const r=t.state[D];if(te={},r===S)return;const o=N[r],i=t.state[Me]??{},s=new URL(t.state[Ut]??location.href),c=t.state[H],l=fe(location)===fe(y.url);if(c===L&&(Xe||l)){e(s),N[S]=ye(),o&&scrollTo(o.x,o.y),i!==I.state&&(I={...I,state:i},ke.$set({page:I})),S=r;return}const h=r-S;await Y({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{S=r,L=c},block:()=>{history.go(-h)},nav_token:te})}else if(!q){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[D]:++S,[H]:L},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&U.navigating.set(null)});function e(t){y.url=t,U.page.set({...I,url:t}),U.page.notify()}}async function en(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:i,form:s}){be=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Re(c,!1)||{});let l;try{const u=a.map(async(d,_)=>{const f=i[_];return f!=null&&f.uses&&(f.uses=it(f.uses)),Se({loader:F.nodes[d],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:Ae(f)})}),h=await Promise.all(u),g=oe.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}l=await ne({url:c,params:r,branch:h,status:n,error:t,form:s,route:g??null})}catch(u){if(u instanceof Ye){await V(new URL(u.location,location.href));return}l=await se({status:X(u),error:await C(u,{url:c,params:r,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),tt(l,e,!0)}async function st(e,n){var r;const t=new URL(e);t.pathname=yt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Mt,"1"),t.searchParams.append(Gt,n.map(o=>o?"1":"0").join(""));const a=await Ve(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new re(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function l(g){return Vt(g,{Promise:d=>new Promise((_,f)=>{i.set(d,{fulfil:_,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const f=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=it(m.uses),m.data=l(m.data))}),o(f);else if(f.type==="chunk"){const{id:m,data:b,error:A}=f,w=i.get(m);i.delete(m),A?w.reject(l(A)):w.fulfil(l(b))}}}})}function it(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function tn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function ct(e,n,t,a){var c,l;let r,o;const i=new Promise((u,h)=>{r=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:t},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}export{an as a,U as s};
