import{F as $,n as _,G as y,f as S,i as b,I as E,J as w,K as I,L as x,M as O,N as C,O as p,P as L,Q as M,R as N,S as P,T as R}from"./scheduler.NTgy0pKE.js";const o=new Set;let f;function Q(){f={r:0,c:[],p:f}}function T(){f.r||$(f.c),f=f.p}function j(t,e){t&&t.i&&(o.delete(t),t.i(e))}function U(t,e,n,s){if(t&&t.o){if(o.has(t))return;o.add(t),f.c.push(()=>{o.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function V(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function z(t){t&&t.c()}function A(t,e){t&&t.l(e)}function B(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),x(()=>{const d=t.$$.on_mount.map(L).filter(w);t.$$.on_destroy?t.$$.on_destroy.push(...d):$(d),t.$$.on_mount=[]}),i.forEach(x)}function F(t,e){const n=t.$$;n.fragment!==null&&(O(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){t.$$.dirty[0]===-1&&(M.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,s,i,d,c=null,v=[-1]){const u=C;p(t);const a=t.$$={fragment:null,ctx:[],props:d,update:_,not_equal:i,bound:y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:y(),dirty:v,skip_bound:!1,root:e.target||u.$$.root};c&&c(a.root);let h=!1;if(a.ctx=n?n(t,e.props||{},(r,l,...g)=>{const m=g.length?g[0]:l;return a.ctx&&i(a.ctx[r],a.ctx[r]=m)&&(!a.skip_bound&&a.bound[r]&&a.bound[r](m),h&&G(t,r)),l}):[],a.update(),h=!0,$(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){P();const r=S(e.target);a.fragment&&a.fragment.l(r),r.forEach(b)}else a.fragment&&a.fragment.c();e.intro&&j(t.$$.fragment),B(t,e.target,e.anchor),R(),E()}p(u)}class H{$$=void 0;$$set=void 0;$destroy(){F(this,1),this.$destroy=_}$on(e,n){if(!w(n))return _;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(J);export{H as S,U as a,z as b,T as c,A as d,F as e,V as f,Q as g,D as i,B as m,j as t};
