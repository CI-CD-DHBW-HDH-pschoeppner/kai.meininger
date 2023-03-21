(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function b(){}function V(e){return e()}function I(){return Object.create(null)}function O(e){e.forEach(V)}function G(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function te(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function J(e){return document.createTextNode(e)}function v(){return J(" ")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function re(e){return function(t){return t.preventDefault(),e.call(this,t)}}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function oe(e){return Array.from(e.childNodes)}function se(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function z(e,t){e.value=t??""}function A(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let D;function E(e){D=e}const L=[],B=[];let x=[];const F=[],le=Promise.resolve();let N=!1;function ie(){N||(N=!0,le.then(Q))}function P(e){x.push(e)}const j=new Set;let $=0;function Q(){if($!==0)return;const e=D;do{try{for(;$<L.length;){const t=L[$];$++,E(t),ue(t.$$)}}catch(t){throw L.length=0,$=0,t}for(E(null),L.length=0,$=0;B.length;)B.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];j.has(n)||(j.add(n),n())}x.length=0}while(L.length);for(;F.length;)F.pop()();N=!1,j.clear(),E(e)}function ue(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(P)}}function ce(e){const t=[],n=[];x.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),x=t}const S=new Set;let fe;function W(e,t){e&&e.i&&(S.delete(e),e.i(t))}function ae(e,t,n,r){if(e&&e.o){if(S.has(e))return;S.add(e),fe.c.push(()=>{S.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function de(e){e&&e.c()}function X(e,t,n,r){const{fragment:o,after_update:c}=e.$$;o&&o.m(t,n),r||P(()=>{const i=e.$$.on_mount.map(V).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...i):O(i),e.$$.on_mount=[]}),c.forEach(P)}function Y(e,t){const n=e.$$;n.fragment!==null&&(ce(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&(L.push(e),ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,r,o,c,i,u=[-1]){const s=D;E(e);const l=e.$$={fragment:null,ctx:[],props:c,update:b,not_equal:o,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:I(),dirty:u,skip_bound:!1,root:t.target||s.$$.root};i&&i(l.root);let a=!1;if(l.ctx=n?n(e,t.props||{},(f,p,...g)=>{const d=g.length?g[0]:p;return l.ctx&&o(l.ctx[f],l.ctx[f]=d)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](d),a&&pe(e,f)),p}):[],l.update(),a=!0,O(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const f=oe(t.target);l.fragment&&l.fragment.l(f),f.forEach(q)}else l.fragment&&l.fragment.c();t.intro&&W(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),Q()}E(s)}class ee{$destroy(){Y(this,1),this.$destroy=b}$on(t,n){if(!G(n))return b;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const w=[];function he(e,t=b){let n;const r=new Set;function o(u){if(M(e,u)&&(e=u,n)){const s=!w.length;for(const l of r)l[1](),w.push(l,e);if(s){for(let l=0;l<w.length;l+=2)w[l][0](w[l+1]);w.length=0}}}function c(u){o(u(e))}function i(u,s=b){const l=[u,s];return r.add(l),r.size===1&&(n=t(o)||b),u(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:i}}function _e(){return Math.random().toString(36).substr(2,6)}function ge(e,t){const n=e.value.trim(),r=t.some(o=>o.value.toLowerCase()===n.toLowerCase());return n.length>0&&n.length<=255&&!r}function me(e){const t=e.value.charAt(0).toUpperCase()+e.value.slice(1);return{id:e.id,value:t,done:e.done}}function ye(){const e=(o,c)=>Math.floor(Math.random()*(c-o+1)+o),t=e(50,150),n=e(50,150),r=e(50,150);return`rgb(${t}, ${n}, ${r})`}const k=he([]);function K(e,t,n){const r=e.slice();return r[8]=t[n],r}function R(e){let t,n,r,o,c=e[8].value+"",i,u,s,l,a,f;function p(){return e[6](e[8])}function g(){return e[7](e[8])}return{c(){t=y("div"),n=y("button"),n.textContent="✔️",r=v(),o=y("span"),i=J(c),u=v(),s=y("button"),s.textContent="🗑️",l=v(),h(n,"type","button"),h(n,"class","svelte-q8s35p"),A(o,"text-decoration",e[8].done?"line-through":""),h(o,"class","svelte-q8s35p"),h(s,"type","button"),h(s,"class","svelte-q8s35p"),A(t,"background-color",ye()),h(t,"class","item svelte-q8s35p")},m(d,m){C(d,t,m),_(t,n),_(t,r),_(t,o),_(o,i),_(t,u),_(t,s),_(t,l),a||(f=[T(n,"click",p),T(s,"click",g)],a=!0)},p(d,m){e=d,m&2&&c!==(c=e[8].value+"")&&se(i,c),m&2&&A(o,"text-decoration",e[8].done?"line-through":"")},d(d){d&&q(t),a=!1,O(f)}}}function be(e){let t,n,r,o,c,i=e[1],u=[];for(let s=0;s<i.length;s+=1)u[s]=R(K(e,i,s));return{c(){t=y("input"),n=v(),r=y("div");for(let s=0;s<u.length;s+=1)u[s].c();h(t,"type","text"),h(t,"placeholder","🔍"),h(t,"class","svelte-q8s35p"),h(r,"class","list svelte-q8s35p")},m(s,l){C(s,t,l),z(t,e[0]),C(s,n,l),C(s,r,l);for(let a=0;a<u.length;a+=1)u[a]&&u[a].m(r,null);o||(c=T(t,"input",e[5]),o=!0)},p(s,[l]){if(l&1&&t.value!==s[0]&&z(t,s[0]),l&14){i=s[1];let a;for(a=0;a<i.length;a+=1){const f=K(s,i,a);u[a]?u[a].p(f,l):(u[a]=R(f),u[a].c(),u[a].m(r,null))}for(;a<u.length;a+=1)u[a].d(1);u.length=i.length}},i:b,o:b,d(s){s&&q(t),s&&q(n),s&&q(r),ne(u,s),o=!1,c()}}}function ve(e,t,n){let{todos:r}=t,o,c="";function i(f){k.update(p=>p.filter(g=>g.id!==f))}function u(f){k.update(p=>{for(let g of p)g.id===f&&(g.done=!0);return p})}function s(){c=this.value,n(0,c)}const l=f=>u(f.id),a=f=>i(f.id);return e.$$set=f=>{"todos"in f&&n(4,r=f.todos)},e.$$.update=()=>{e.$$.dirty&17&&n(1,o=r.filter(f=>{const p=c.toLowerCase();return f.value.toLowerCase().includes(p)}))},[c,o,i,u,r,s,l,a]}class $e extends ee{constructor(t){super(),Z(this,t,ve,be,M,{todos:4})}}function we(e){let t,n,r,o,c,i,u,s,l,a,f,p,g;return o=new $e({props:{todos:e[0]}}),{c(){t=y("main"),n=y("h1"),n.textContent="Todos:",r=v(),de(o.$$.fragment),c=v(),i=y("progress"),l=v(),a=y("form"),a.innerHTML='<input type="text" placeholder="Add new todo" name="todo" id="todo" class="svelte-j63d8q"/>',h(i,"max",u=e[0].length),i.value=s=e[0].filter(U).length,h(i,"class","svelte-j63d8q"),h(a,"class","svelte-j63d8q"),h(t,"class","svelte-j63d8q")},m(d,m){C(d,t,m),_(t,n),_(t,r),X(o,t,null),_(t,c),_(t,i),_(t,l),_(t,a),f=!0,p||(g=T(a,"submit",re(e[1])),p=!0)},p(d,[m]){const H={};m&1&&(H.todos=d[0]),o.$set(H),(!f||m&1&&u!==(u=d[0].length))&&h(i,"max",u),(!f||m&1&&s!==(s=d[0].filter(U).length))&&(i.value=s)},i(d){f||(W(o.$$.fragment,d),f=!0)},o(d){ae(o.$$.fragment,d),f=!1},d(d){d&&q(t),Y(o),p=!1,g()}}}const U=e=>e.done===!0;function Le(e,t,n){let r;k.subscribe(i=>{n(0,r=i)});function o(i){const u=new FormData(i.target);for(let s of u){const[,l]=s;c({id:_e(),value:l.toString(),done:!1}),i.target[0].value="";return}}function c(i){ge(i,r)&&(r.push(me(i)),n(0,r))}return[r,o]}class qe extends ee{constructor(t){super(),Z(this,t,Le,we,M,{})}}new qe({target:document.getElementById("app")});
