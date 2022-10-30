var Ft=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var In=Ft((An,$e)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function W(){}const Ne=t=>t;function It(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return t()}function Ve(){return Object.create(null)}function ce(t){t.forEach(ct)}function xe(t){return typeof t=="function"}function ie(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function St(t){return Object.keys(t).length===0}function At(t,e,n,r){if(t){const a=ft(t,e,n,r);return t[0](a)}}function ft(t,e,n,r){return t[1]&&r?It(n.ctx.slice(),t[1](r(e))):n.ctx}function Tt(t,e,n,r){if(t[2]&&r){const a=t[2](r(n));if(e.dirty===void 0)return a;if(typeof a=="object"){const o=[],l=Math.max(e.dirty.length,a.length);for(let s=0;s<l;s+=1)o[s]=e.dirty[s]|a[s];return o}return e.dirty|a}return e.dirty}function Et(t,e,n,r,a,o){if(a){const l=ft(e,n,r,o);t.p(l,a)}}function Mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Le(t){return t==null?"":t}const dt=typeof window<"u";let De=dt?()=>window.performance.now():()=>Date.now(),Ue=dt?t=>requestAnimationFrame(t):W;const me=new Set;function gt(t){me.forEach(e=>{e.c(t)||(me.delete(e),e.f())}),me.size!==0&&Ue(gt)}function He(t){let e;return me.size===0&&Ue(gt),{promise:new Promise(n=>{me.add(e={c:t,f:n})}),abort(){me.delete(e)}}}function A(t,e){t.appendChild(e)}function ht(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=j("style");return jt(ht(t),e),e.sheet}function jt(t,e){return A(t.head||t,e),e.sheet}function U(t,e,n){t.insertBefore(e,n||null)}function D(t){t.parentNode.removeChild(t)}function Ke(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function ee(t){return document.createTextNode(t)}function B(){return ee(" ")}function Lt(){return ee("")}function ve(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function H(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Rt(t){return Array.from(t.childNodes)}function Re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Pt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const a=document.createEvent("CustomEvent");return a.initCustomEvent(t,n,r,e),a}const Ae=new Map;let Te=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:Ct(e),rules:{}};return Ae.set(t,n),n}function Ee(t,e,n,r,a,o,l,s=0){const g=16.666/r;let b=`{
`;for(let m=0;m<=1;m+=g){const k=e+(n-e)*o(m);b+=m*100+`%{${l(k,1-k)}}
`}const w=b+`100% {${l(n,1-n)}}
}`,v=`__svelte_${Ot(w)}_${s}`,f=ht(t),{stylesheet:y,rules:$}=Ae.get(f)||Nt(f,t);$[v]||($[v]=!0,y.insertRule(`@keyframes ${v} ${w}`,y.cssRules.length));const F=t.style.animation||"";return t.style.animation=`${F?`${F}, `:""}${v} ${r}ms linear ${a}ms 1 both`,Te+=1,v}function Me(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),a=n.length-r.length;a&&(t.style.animation=r.join(", "),Te-=a,Te||Dt())}function Dt(){Ue(()=>{Te||(Ae.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&D(e)}),Ae.clear())})}let We;function ke(t){We=t}const we=[],ye=[],Ie=[],Pe=[],Ut=Promise.resolve();let Oe=!1;function Ht(){Oe||(Oe=!0,Ut.then(pt))}function fe(t){Ie.push(t)}function Wt(t){Pe.push(t)}const je=new Set;let Fe=0;function pt(){const t=We;do{for(;Fe<we.length;){const e=we[Fe];Fe++,ke(e),zt(e.$$)}for(ke(null),we.length=0,Fe=0;ye.length;)ye.pop()();for(let e=0;e<Ie.length;e+=1){const n=Ie[e];je.has(n)||(je.add(n),n())}Ie.length=0}while(we.length);for(;Pe.length;)Pe.pop()();Oe=!1,je.clear(),ke(t)}function zt(t){if(t.fragment!==null){t.update(),ce(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}let _e;function ze(){return _e||(_e=Promise.resolve(),_e.then(()=>{_e=null})),_e}function ge(t,e,n){t.dispatchEvent(Pt(`${e?"intro":"outro"}${n}`))}const Se=new Set;let ae;function Ge(){ae={r:0,c:[],p:ae}}function qe(){ae.r||ce(ae.c),ae=ae.p}function G(t,e){t&&t.i&&(Se.delete(t),t.i(e))}function X(t,e,n,r){if(t&&t.o){if(Se.has(t))return;Se.add(t),ae.c.push(()=>{Se.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Be={duration:0};function Gt(t,e,n){let r=e(t,n),a=!1,o,l,s=0;function g(){o&&Me(t,o)}function b(){const{delay:v=0,duration:f=300,easing:y=Ne,tick:$=W,css:F}=r||Be;F&&(o=Ee(t,0,1,f,v,y,F,s++)),$(0,1);const m=De()+v,k=m+f;l&&l.abort(),a=!0,fe(()=>ge(t,!0,"start")),l=He(u=>{if(a){if(u>=k)return $(1,0),ge(t,!0,"end"),g(),a=!1;if(u>=m){const i=y((u-m)/f);$(i,1-i)}}return a})}let w=!1;return{start(){w||(w=!0,Me(t),xe(r)?(r=r(),ze().then(b)):b())},invalidate(){w=!1},end(){a&&(g(),a=!1)}}}function qt(t,e,n){let r=e(t,n),a=!0,o;const l=ae;l.r+=1;function s(){const{delay:g=0,duration:b=300,easing:w=Ne,tick:v=W,css:f}=r||Be;f&&(o=Ee(t,1,0,b,g,w,f));const y=De()+g,$=y+b;fe(()=>ge(t,!1,"start")),He(F=>{if(a){if(F>=$)return v(0,1),ge(t,!1,"end"),--l.r||ce(l.c),!1;if(F>=y){const m=w((F-y)/b);v(1-m,m)}}return a})}return xe(r)?ze().then(()=>{r=r(),s()}):s(),{end(g){g&&r.tick&&r.tick(1,0),a&&(o&&Me(t,o),a=!1)}}}function Qe(t,e,n,r){let a=e(t,n),o=r?0:1,l=null,s=null,g=null;function b(){g&&Me(t,g)}function w(f,y){const $=f.b-o;return y*=Math.abs($),{a:o,b:f.b,d:$,duration:y,start:f.start,end:f.start+y,group:f.group}}function v(f){const{delay:y=0,duration:$=300,easing:F=Ne,tick:m=W,css:k}=a||Be,u={start:De()+y,b:f};f||(u.group=ae,ae.r+=1),l||s?s=u:(k&&(b(),g=Ee(t,o,f,$,y,F,k)),f&&m(0,1),l=w(u,$),fe(()=>ge(t,f,"start")),He(i=>{if(s&&i>s.start&&(l=w(s,$),s=null,ge(t,l.b,"start"),k&&(b(),g=Ee(t,o,l.b,l.duration,0,F,a.css))),l){if(i>=l.end)m(o=l.b,1-o),ge(t,l.b,"end"),s||(l.b?b():--l.group.r||ce(l.group.c)),l=null;else if(i>=l.start){const p=i-l.start;o=l.a+l.d*F(p/l.duration),m(o,1-o)}}return!!(l||s)}))}return{run(f){xe(a)?ze().then(()=>{a=a(),v(f)}):v(f)},end(){b(),l=s=null}}}function Bt(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function ue(t){t&&t.c()}function ne(t,e,n,r){const{fragment:a,after_update:o}=t.$$;a&&a.m(e,n),r||fe(()=>{const l=t.$$.on_mount.map(ct).filter(xe);t.$$.on_destroy?t.$$.on_destroy.push(...l):ce(l),t.$$.on_mount=[]}),o.forEach(fe)}function re(t,e){const n=t.$$;n.fragment!==null&&(ce(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(we.push(t),Ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,n,r,a,o,l,s=[-1]){const g=We;ke(t);const b=t.$$={fragment:null,ctx:[],props:o,update:W,not_equal:a,bound:Ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(g?g.$$.context:[])),callbacks:Ve(),dirty:s,skip_bound:!1,root:e.target||g.$$.root};l&&l(b.root);let w=!1;if(b.ctx=n?n(t,e.props||{},(v,f,...y)=>{const $=y.length?y[0]:f;return b.ctx&&a(b.ctx[v],b.ctx[v]=$)&&(!b.skip_bound&&b.bound[v]&&b.bound[v]($),w&&Jt(t,v)),f}):[],b.update(),w=!0,ce(b.before_update),b.fragment=r?r(b.ctx):!1,e.target){if(e.hydrate){const v=Rt(e.target);b.fragment&&b.fragment.l(v),v.forEach(D)}else b.fragment&&b.fragment.c();e.intro&&G(t.$$.fragment),ne(t,e.target,e.anchor,e.customElement),pt()}ke(g)}class oe{$destroy(){re(this,1),this.$destroy=W}$on(e,n){if(!xe(n))return W;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}$set(e){this.$$set&&!St(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Yt(t){let e;return{c(){e=j("section"),e.innerHTML=`<p>Hello Vancouver! <span role="img" aria-hidden="true">\u{1F1E8}\u{1F1E6} \u{1F44B}</span></p> 
  <img src="images/doug.webp" alt="Handsome man standing by lost lagoon in vancouver, he looks very employable" class="svelte-j8elqt"/> 
  <p>I am looking for full time front end and full stack work in the Greater
    Vancouver area</p>`},m(n,r){U(n,e,r)},p:W,i:W,o:W,d(n){n&&D(e)}}}class Zt extends oe{constructor(e){super(),se(this,e,null,Yt,ie,{})}}function Xt(t){let e,n,r;return{c(){e=j("button"),e.innerHTML='<p class="svelte-1e5vrmq">Click here or scroll to &quot;Tech&quot; to learn something new!</p>',H(e,"class","svelte-1e5vrmq")},m(a,o){U(a,e,o),n||(r=[ve(e,"click",t[0]),ve(e,"keydown",t[0])],n=!0)},p:W,i:W,o:W,d(a){a&&D(e),n=!1,ce(r)}}}function Vt(t,e,n){let{techRef:r}=e;function a(){console.log(r),window.scrollTo({top:r.offsetTop-20,behavior:"smooth"})}return t.$$set=o=>{"techRef"in o&&n(1,r=o.techRef)},[a,r]}class Kt extends oe{constructor(e){super(),se(this,e,Vt,Xt,ie,{techRef:1})}}function Qt(t){let e;return{c(){e=j("header"),e.innerHTML=`<h1 class="svelte-2a825e">Douglas Hellowell</h1> 

  <div class="socials"><ul class="svelte-2a825e"><li><a href="https://github.com/douglashellowell" target="_blank" rel="noreferrer" title="github" class="svelte-2a825e"><i class="fa-brands fa-github fa-2x" aria-label="github"></i></a></li> 
      <li><a href="https://github.com/douglashellowell" target="_blank" rel="noreferrer" title="linkedin" class="svelte-2a825e"><i class="fa-brands fa-linkedin fa-2x" aria-label="linkedin"></i></a></li> 
      <li><a href="https://www.instagram.com/dddoug/" target="_blank" rel="noreferrer" title="instagram" class="svelte-2a825e"><i class="fa-brands fa-instagram fa-2x" aria-label="instagram"></i></a></li> 
      <li><a href="mailto: doog99@gmail.com" target="_blank" rel="noreferrer" title="email" class="svelte-2a825e"><i class="fa-solid fa-envelope fa-2x" aria-label="email"></i></a></li></ul></div>`},m(n,r){U(n,e,r)},p:W,i:W,o:W,d(n){n&&D(e)}}}class en extends oe{constructor(e){super(),se(this,e,null,Qt,ie,{})}}function mt(t){const e=t-1;return e*e*e+1}function et(t){return--t*t*t*t*t+1}function tt(t,{delay:e=0,duration:n=400,easing:r=mt,x:a=0,y:o=0,opacity:l=0}={}){const s=getComputedStyle(t),g=+s.opacity,b=s.transform==="none"?"":s.transform,w=g*(1-l);return{delay:e,duration:n,easing:r,css:(v,f)=>`
			transform: ${b} translate(${(1-v)*a}px, ${(1-v)*o}px);
			opacity: ${g-w*f}`}}function nt(t,{delay:e=0,duration:n=400,easing:r=mt}={}){const a=getComputedStyle(t),o=+a.opacity,l=parseFloat(a.height),s=parseFloat(a.paddingTop),g=parseFloat(a.paddingBottom),b=parseFloat(a.marginTop),w=parseFloat(a.marginBottom),v=parseFloat(a.borderTopWidth),f=parseFloat(a.borderBottomWidth);return{delay:e,duration:n,easing:r,css:y=>`overflow: hidden;opacity: ${Math.min(y*20,1)*o};height: ${y*l}px;padding-top: ${y*s}px;padding-bottom: ${y*g}px;margin-top: ${y*b}px;margin-bottom: ${y*w}px;border-top-width: ${y*v}px;border-bottom-width: ${y*f}px;`}}function rt(t){let e,n,r=t[2].title+"",a,o,l,s=t[2].description+"",g,b,w;return{c(){e=j("div"),n=j("h3"),a=ee(r),o=B(),l=j("p"),H(e,"id","feature"),H(e,"class","svelte-12j14m3")},m(v,f){U(v,e,f),A(e,n),A(n,a),A(e,o),A(e,l),l.innerHTML=s,w=!0},p(v,f){t=v,(!w||f&4)&&r!==(r=t[2].title+"")&&Re(a,r),(!w||f&4)&&s!==(s=t[2].description+"")&&(l.innerHTML=s)},i(v){w||(fe(()=>{b&&b.end(1),g=Gt(e,tt,{x:300*t[1],duration:300}),g.start()}),w=!0)},o(v){g&&g.invalidate(),b=qt(e,tt,{x:-300*t[1],duration:300}),w=!1},d(v){v&&D(e),v&&b&&b.end()}}}function tn(t){let e,n,r,a,o,l,s,g,b,w,v=t[0]&&rt(t);return{c(){e=j("section"),n=j("h2"),n.textContent="Doug in a nutshell",r=B(),a=j("div"),o=j("button"),o.textContent=">",l=B(),s=j("div"),v&&v.c(),H(n,"title","help i'm in a nutshell!"),H(o,"id","feature-next"),H(o,"aria-label","previous"),H(s,"class","features-container svelte-12j14m3"),H(a,"id","flex-wrapper"),H(a,"class","svelte-12j14m3"),H(e,"class","svelte-12j14m3")},m(f,y){U(f,e,y),A(e,n),A(e,r),A(e,a),A(a,o),A(a,l),A(a,s),v&&v.m(s,null),g=!0,b||(w=ve(o,"click",t[5]),b=!0)},p(f,[y]){f[0]?v?(v.p(f,y),y&1&&G(v,1)):(v=rt(f),v.c(),G(v,1),v.m(s,null)):v&&(Ge(),X(v,1,1,()=>{v=null}),qe())},i(f){g||(G(v),g=!0)},o(f){X(v),g=!1},d(f){f&&D(e),v&&v.d(),b=!1,w()}}}function nn(t,e,n){let r,a=!0,o=0,l=1;const s=[{title:"I love to code",description:"I have always had a passion for technology <i>(I've installed linux on almost every device i've owned - Wii, DS)</i>. I love to talk about code - let's have a chat!"},{title:"I think about the user",description:"I love making experiences that <i>feel</i> good, with a keen focus on design heuristics, uncluttered interfaces and understandable UX"},{title:"I have my finger on the pulse",description:"I love using new tech! I keep myself up to date with the latest"},{title:"I am an A11Y",description:"I believe equal access to technology should be given to people of all backgrounds and abilities and it is our responsibilities as devs to champion this"},{title:"I am a developing developer",description:"I thrive in environments where I can learn and teach"}];function g(w){w===-1&&o===0&&n(4,o=s.length),n(4,o+=w),n(0,a=!1),n(1,l=w),setTimeout(()=>{n(0,a=!0)},500)}const b=()=>g(1);return t.$$.update=()=>{t.$$.dirty&16&&n(2,r=s[o%s.length])},[a,l,r,g,o,b]}class rn extends oe{constructor(e){super(),se(this,e,nn,tn,ie,{})}}var at=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vt={exports:{}};(function(t){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,l={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function u(i){return i instanceof g?new g(i.type,u(i.content),i.alias):Array.isArray(i)?i.map(u):i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++o}),u.__id},clone:function u(i,p){p=p||{};var _,h;switch(s.util.type(i)){case"Object":if(h=s.util.objId(i),p[h])return p[h];_={},p[h]=_;for(var x in i)i.hasOwnProperty(x)&&(_[x]=u(i[x],p));return _;case"Array":return h=s.util.objId(i),p[h]?p[h]:(_=[],p[h]=_,i.forEach(function(T,I){_[I]=u(T,p)}),_);default:return i}},getLanguage:function(u){for(;u;){var i=a.exec(u.className);if(i)return i[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,i){u.className=u.className.replace(RegExp(a,"gi"),""),u.classList.add("language-"+i)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(_){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(_.stack)||[])[1];if(u){var i=document.getElementsByTagName("script");for(var p in i)if(i[p].src==u)return i[p]}return null}},isActive:function(u,i,p){for(var _="no-"+i;u;){var h=u.classList;if(h.contains(i))return!0;if(h.contains(_))return!1;u=u.parentElement}return!!p}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(u,i){var p=s.util.clone(s.languages[u]);for(var _ in i)p[_]=i[_];return p},insertBefore:function(u,i,p,_){_=_||s.languages;var h=_[u],x={};for(var T in h)if(h.hasOwnProperty(T)){if(T==i)for(var I in p)p.hasOwnProperty(I)&&(x[I]=p[I]);p.hasOwnProperty(T)||(x[T]=h[T])}var z=_[u];return _[u]=x,s.languages.DFS(s.languages,function(J,V){V===z&&J!=u&&(this[J]=x)}),x},DFS:function u(i,p,_,h){h=h||{};var x=s.util.objId;for(var T in i)if(i.hasOwnProperty(T)){p.call(i,T,i[T],_||T);var I=i[T],z=s.util.type(I);z==="Object"&&!h[x(I)]?(h[x(I)]=!0,u(I,p,null,h)):z==="Array"&&!h[x(I)]&&(h[x(I)]=!0,u(I,p,T,h))}}},plugins:{},highlightAll:function(u,i){s.highlightAllUnder(document,u,i)},highlightAllUnder:function(u,i,p){var _={callback:p,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",_),_.elements=Array.prototype.slice.apply(_.container.querySelectorAll(_.selector)),s.hooks.run("before-all-elements-highlight",_);for(var h=0,x;x=_.elements[h++];)s.highlightElement(x,i===!0,_.callback)},highlightElement:function(u,i,p){var _=s.util.getLanguage(u),h=s.languages[_];s.util.setLanguage(u,_);var x=u.parentElement;x&&x.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(x,_);var T=u.textContent,I={element:u,language:_,grammar:h,code:T};function z(V){I.highlightedCode=V,s.hooks.run("before-insert",I),I.element.innerHTML=I.highlightedCode,s.hooks.run("after-highlight",I),s.hooks.run("complete",I),p&&p.call(I.element)}if(s.hooks.run("before-sanity-check",I),x=I.element.parentElement,x&&x.nodeName.toLowerCase()==="pre"&&!x.hasAttribute("tabindex")&&x.setAttribute("tabindex","0"),!I.code){s.hooks.run("complete",I),p&&p.call(I.element);return}if(s.hooks.run("before-highlight",I),!I.grammar){z(s.util.encode(I.code));return}if(i&&r.Worker){var J=new Worker(s.filename);J.onmessage=function(V){z(V.data)},J.postMessage(JSON.stringify({language:I.language,code:I.code,immediateClose:!0}))}else z(s.highlight(I.code,I.grammar,I.language))},highlight:function(u,i,p){var _={code:u,grammar:i,language:p};if(s.hooks.run("before-tokenize",_),!_.grammar)throw new Error('The language "'+_.language+'" has no grammar.');return _.tokens=s.tokenize(_.code,_.grammar),s.hooks.run("after-tokenize",_),g.stringify(s.util.encode(_.tokens),_.language)},tokenize:function(u,i){var p=i.rest;if(p){for(var _ in p)i[_]=p[_];delete i.rest}var h=new v;return f(h,h.head,u),w(u,h,i,h.head,0),$(h)},hooks:{all:{},add:function(u,i){var p=s.hooks.all;p[u]=p[u]||[],p[u].push(i)},run:function(u,i){var p=s.hooks.all[u];if(!(!p||!p.length))for(var _=0,h;h=p[_++];)h(i)}},Token:g};r.Prism=s;function g(u,i,p,_){this.type=u,this.content=i,this.alias=p,this.length=(_||"").length|0}g.stringify=function u(i,p){if(typeof i=="string")return i;if(Array.isArray(i)){var _="";return i.forEach(function(z){_+=u(z,p)}),_}var h={type:i.type,content:u(i.content,p),tag:"span",classes:["token",i.type],attributes:{},language:p},x=i.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(h.classes,x):h.classes.push(x)),s.hooks.run("wrap",h);var T="";for(var I in h.attributes)T+=" "+I+'="'+(h.attributes[I]||"").replace(/"/g,"&quot;")+'"';return"<"+h.tag+' class="'+h.classes.join(" ")+'"'+T+">"+h.content+"</"+h.tag+">"};function b(u,i,p,_){u.lastIndex=i;var h=u.exec(p);if(h&&_&&h[1]){var x=h[1].length;h.index+=x,h[0]=h[0].slice(x)}return h}function w(u,i,p,_,h,x){for(var T in p)if(!(!p.hasOwnProperty(T)||!p[T])){var I=p[T];I=Array.isArray(I)?I:[I];for(var z=0;z<I.length;++z){if(x&&x.cause==T+","+z)return;var J=I[z],V=J.inside,be=!!J.lookbehind,d=!!J.greedy,c=J.alias;if(d&&!J.pattern.global){var O=J.pattern.toString().match(/[imsuy]*$/)[0];J.pattern=RegExp(J.pattern.source,O+"g")}for(var R=J.pattern||J,S=_.next,E=h;S!==i.tail&&!(x&&E>=x.reach);E+=S.value.length,S=S.next){var M=S.value;if(i.length>u.length)return;if(!(M instanceof g)){var C=1,L;if(d){if(L=b(R,E,u,be),!L||L.index>=u.length)break;var Z=L.index,K=L.index+L[0].length,P=E;for(P+=S.value.length;Z>=P;)S=S.next,P+=S.value.length;if(P-=S.value.length,E=P,S.value instanceof g)continue;for(var Y=S;Y!==i.tail&&(P<K||typeof Y.value=="string");Y=Y.next)C++,P+=Y.value.length;C--,M=u.slice(E,P),L.index-=E}else if(L=b(R,0,M,be),!L)continue;var Z=L.index,N=L[0],de=M.slice(0,Z),he=M.slice(Z+N.length),te=E+M.length;x&&te>x.reach&&(x.reach=te);var le=S.prev;de&&(le=f(i,le,de),E+=de.length),y(i,le,C);var pe=new g(T,V?s.tokenize(N,V):N,c,N);if(S=f(i,le,pe),he&&f(i,S,he),C>1){var Q={cause:T+","+z,reach:te};w(u,i,p,S.prev,E,Q),x&&Q.reach>x.reach&&(x.reach=Q.reach)}}}}}}function v(){var u={value:null,prev:null,next:null},i={value:null,prev:u,next:null};u.next=i,this.head=u,this.tail=i,this.length=0}function f(u,i,p){var _=i.next,h={value:p,prev:i,next:_};return i.next=h,_.prev=h,u.length++,h}function y(u,i,p){for(var _=i.next,h=0;h<p&&_!==u.tail;h++)_=_.next;i.next=_,_.prev=i,u.length-=h}function $(u){for(var i=[],p=u.head.next;p!==u.tail;)i.push(p.value),p=p.next;return i}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(u){var i=JSON.parse(u.data),p=i.language,_=i.code,h=i.immediateClose;r.postMessage(s.highlight(_,s.languages[p],p)),h&&r.close()},!1)),s;var F=s.util.currentScript();F&&(s.filename=F.src,F.hasAttribute("data-manual")&&(s.manual=!0));function m(){s.manual||s.highlightAll()}if(!s.manual){var k=document.readyState;k==="loading"||k==="interactive"&&F&&F.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return s}(e);t.exports&&(t.exports=n),typeof at<"u"&&(at.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(a,o){var l={};l["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[o]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};s["language-"+o]={pattern:/[\s\S]+/,inside:n.languages[o]};var g={};g[a]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",g)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,a){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"language-"+a],inside:n.languages[a]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var a=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+a.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+a.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+a.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+a.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:a,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var o=r.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading\u2026",a=function(F,m){return"\u2716 Error "+F+" while fetching file: "+m},o="\u2716 Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",g="loading",b="loaded",w="failed",v="pre[data-src]:not(["+s+'="'+b+'"]):not(['+s+'="'+g+'"])';function f(F,m,k){var u=new XMLHttpRequest;u.open("GET",F,!0),u.onreadystatechange=function(){u.readyState==4&&(u.status<400&&u.responseText?m(u.responseText):u.status>=400?k(a(u.status,u.statusText)):k(o))},u.send(null)}function y(F){var m=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(F||"");if(m){var k=Number(m[1]),u=m[2],i=m[3];return u?i?[k,Number(i)]:[k,void 0]:[k,k]}}n.hooks.add("before-highlightall",function(F){F.selector+=", "+v}),n.hooks.add("before-sanity-check",function(F){var m=F.element;if(m.matches(v)){F.code="",m.setAttribute(s,g);var k=m.appendChild(document.createElement("CODE"));k.textContent=r;var u=m.getAttribute("data-src"),i=F.language;if(i==="none"){var p=(/\.(\w+)$/.exec(u)||[,"none"])[1];i=l[p]||p}n.util.setLanguage(k,i),n.util.setLanguage(m,i);var _=n.plugins.autoloader;_&&_.loadLanguages(i),f(u,function(h){m.setAttribute(s,b);var x=y(m.getAttribute("data-range"));if(x){var T=h.split(/\r\n?|\n/g),I=x[0],z=x[1]==null?T.length:x[1];I<0&&(I+=T.length),I=Math.max(0,Math.min(I-1,T.length)),z<0&&(z+=T.length),z=Math.max(0,Math.min(z,T.length)),h=T.slice(I,z).join(`
`),m.hasAttribute("data-start")||m.setAttribute("data-start",String(I+1))}k.textContent=h,n.highlightElement(k)},function(h){m.setAttribute(s,w),k.textContent=h})}}),n.plugins.fileHighlight={highlight:function(m){for(var k=(m||document).querySelectorAll(v),u=0,i;i=k[u++];)n.highlightElement(i)}};var $=!1;n.fileHighlight=function(){$||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),$=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(vt);const q=vt.exports;var $e={};(function t(e,n,r,a){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL);function l(){}function s(d){var c=n.exports.Promise,O=c!==void 0?c:e.Promise;return typeof O=="function"?new O(d):(d(l,l),null)}var g=function(){var d=Math.floor(16.666666666666668),c,O,R={},S=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(c=function(E){var M=Math.random();return R[M]=requestAnimationFrame(function C(L){S===L||S+d-1<L?(S=L,delete R[M],E()):R[M]=requestAnimationFrame(C)}),M},O=function(E){R[E]&&cancelAnimationFrame(R[E])}):(c=function(E){return setTimeout(E,d)},O=function(E){return clearTimeout(E)}),{frame:c,cancel:O}}(),b=function(){var d,c,O={};function R(S){function E(M,C){S.postMessage({options:M||{},callback:C})}S.init=function(C){var L=C.transferControlToOffscreen();S.postMessage({canvas:L},[L])},S.fire=function(C,L,K){if(c)return E(C,null),c;var P=Math.random().toString(36).slice(2);return c=s(function(Y){function Z(N){N.data.callback===P&&(delete O[P],S.removeEventListener("message",Z),c=null,K(),Y())}S.addEventListener("message",Z),E(C,P),O[P]=Z.bind(null,{data:{callback:P}})}),c},S.reset=function(){S.postMessage({reset:!0});for(var C in O)O[C](),delete O[C]}}return function(){if(d)return d;if(!r&&o){var S=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{d=new Worker(URL.createObjectURL(new Blob([S])))}catch(E){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",E),null}R(d)}return d}}(),w={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(d,c){return c?c(d):d}function f(d){return d!=null}function y(d,c,O){return v(d&&f(d[c])?d[c]:w[c],O)}function $(d){return d<0?0:Math.floor(d)}function F(d,c){return Math.floor(Math.random()*(c-d))+d}function m(d){return parseInt(d,16)}function k(d){return d.map(u)}function u(d){var c=String(d).replace(/[^0-9a-f]/gi,"");return c.length<6&&(c=c[0]+c[0]+c[1]+c[1]+c[2]+c[2]),{r:m(c.substring(0,2)),g:m(c.substring(2,4)),b:m(c.substring(4,6))}}function i(d){var c=y(d,"origin",Object);return c.x=y(c,"x",Number),c.y=y(c,"y",Number),c}function p(d){d.width=document.documentElement.clientWidth,d.height=document.documentElement.clientHeight}function _(d){var c=d.getBoundingClientRect();d.width=c.width,d.height=c.height}function h(d){var c=document.createElement("canvas");return c.style.position="fixed",c.style.top="0px",c.style.left="0px",c.style.pointerEvents="none",c.style.zIndex=d,c}function x(d,c,O,R,S,E,M,C,L){d.save(),d.translate(c,O),d.rotate(E),d.scale(R,S),d.arc(0,0,1,M,C,L),d.restore()}function T(d){var c=d.angle*(Math.PI/180),O=d.spread*(Math.PI/180);return{x:d.x,y:d.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:d.startVelocity*.5+Math.random()*d.startVelocity,angle2D:-c+(.5*O-Math.random()*O),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:d.color,shape:d.shape,tick:0,totalTicks:d.ticks,decay:d.decay,drift:d.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:d.gravity*3,ovalScalar:.6,scalar:d.scalar}}function I(d,c){c.x+=Math.cos(c.angle2D)*c.velocity+c.drift,c.y+=Math.sin(c.angle2D)*c.velocity+c.gravity,c.wobble+=c.wobbleSpeed,c.velocity*=c.decay,c.tiltAngle+=.1,c.tiltSin=Math.sin(c.tiltAngle),c.tiltCos=Math.cos(c.tiltAngle),c.random=Math.random()+2,c.wobbleX=c.x+10*c.scalar*Math.cos(c.wobble),c.wobbleY=c.y+10*c.scalar*Math.sin(c.wobble);var O=c.tick++/c.totalTicks,R=c.x+c.random*c.tiltCos,S=c.y+c.random*c.tiltSin,E=c.wobbleX+c.random*c.tiltCos,M=c.wobbleY+c.random*c.tiltSin;if(d.fillStyle="rgba("+c.color.r+", "+c.color.g+", "+c.color.b+", "+(1-O)+")",d.beginPath(),c.shape==="circle")d.ellipse?d.ellipse(c.x,c.y,Math.abs(E-R)*c.ovalScalar,Math.abs(M-S)*c.ovalScalar,Math.PI/10*c.wobble,0,2*Math.PI):x(d,c.x,c.y,Math.abs(E-R)*c.ovalScalar,Math.abs(M-S)*c.ovalScalar,Math.PI/10*c.wobble,0,2*Math.PI);else if(c.shape==="star")for(var C=Math.PI/2*3,L=4*c.scalar,K=8*c.scalar,P=c.x,Y=c.y,Z=5,N=Math.PI/Z;Z--;)P=c.x+Math.cos(C)*K,Y=c.y+Math.sin(C)*K,d.lineTo(P,Y),C+=N,P=c.x+Math.cos(C)*L,Y=c.y+Math.sin(C)*L,d.lineTo(P,Y),C+=N;else d.moveTo(Math.floor(c.x),Math.floor(c.y)),d.lineTo(Math.floor(c.wobbleX),Math.floor(S)),d.lineTo(Math.floor(E),Math.floor(M)),d.lineTo(Math.floor(R),Math.floor(c.wobbleY));return d.closePath(),d.fill(),c.tick<c.totalTicks}function z(d,c,O,R,S){var E=c.slice(),M=d.getContext("2d"),C,L,K=s(function(P){function Y(){C=L=null,M.clearRect(0,0,R.width,R.height),S(),P()}function Z(){r&&!(R.width===a.width&&R.height===a.height)&&(R.width=d.width=a.width,R.height=d.height=a.height),!R.width&&!R.height&&(O(d),R.width=d.width,R.height=d.height),M.clearRect(0,0,R.width,R.height),E=E.filter(function(N){return I(M,N)}),E.length?C=g.frame(Z):Y()}C=g.frame(Z),L=Y});return{addFettis:function(P){return E=E.concat(P),K},canvas:d,promise:K,reset:function(){C&&g.cancel(C),L&&L()}}}function J(d,c){var O=!d,R=!!y(c||{},"resize"),S=y(c,"disableForReducedMotion",Boolean),E=o&&!!y(c||{},"useWorker"),M=E?b():null,C=O?p:_,L=d&&M?!!d.__confetti_initialized:!1,K=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,P;function Y(N,de,he){for(var te=y(N,"particleCount",$),le=y(N,"angle",Number),pe=y(N,"spread",Number),Q=y(N,"startVelocity",Number),yt=y(N,"decay",Number),bt=y(N,"gravity",Number),_t=y(N,"drift",Number),Je=y(N,"colors",k),wt=y(N,"ticks",Number),Ye=y(N,"shapes"),kt=y(N,"scalar"),Ze=i(N),Xe=te,Ce=[],xt=d.width*Ze.x,$t=d.height*Ze.y;Xe--;)Ce.push(T({x:xt,y:$t,angle:le,spread:pe,startVelocity:Q,color:Je[Xe%Je.length],shape:Ye[F(0,Ye.length)],ticks:wt,decay:yt,gravity:bt,drift:_t,scalar:kt}));return P?P.addFettis(Ce):(P=z(d,Ce,C,de,he),P.promise)}function Z(N){var de=S||y(N,"disableForReducedMotion",Boolean),he=y(N,"zIndex",Number);if(de&&K)return s(function(Q){Q()});O&&P?d=P.canvas:O&&!d&&(d=h(he),document.body.appendChild(d)),R&&!L&&C(d);var te={width:d.width,height:d.height};M&&!L&&M.init(d),L=!0,M&&(d.__confetti_initialized=!0);function le(){if(M){var Q={getBoundingClientRect:function(){if(!O)return d.getBoundingClientRect()}};C(Q),M.postMessage({resize:{width:Q.width,height:Q.height}});return}te.width=te.height=null}function pe(){P=null,R&&e.removeEventListener("resize",le),O&&d&&(document.body.removeChild(d),d=null,L=!1)}return R&&e.addEventListener("resize",le,!1),M?M.fire(N,te,pe):Y(N,te,pe)}return Z.reset=function(){M&&M.reset(),P&&P.reset()},Z}var V;function be(){return V||(V=J(null,{useWorker:!0,resize:!0})),V}n.exports=function(){return be().apply(this,arguments)},n.exports.reset=function(){be().reset()},n.exports.create=J})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),$e,!1);const an=$e.exports;$e.exports.create;function sn(t){let e,n,r=q.highlight(t[0],q.languages.javascript,"javascript")+"",a;return{c(){e=j("pre"),n=j("code"),a=ee(`
`),H(n,"class",Le(t[1])+" svelte-166vgh"),H(e,"class",t[1])},m(o,l){U(o,e,l),A(e,n),n.innerHTML=r,A(e,a)},p(o,[l]){l&1&&r!==(r=q.highlight(o[0],q.languages.javascript,"javascript")+"")&&(n.innerHTML=r)},i:W,o:W,d(o){o&&D(e)}}}function on(t,e,n){let r,{language:a}=e,{snippet:o}=e;const l=`language-${a}`;return t.$$set=s=>{"language"in s&&n(2,a=s.language),"snippet"in s&&n(3,o=s.snippet)},t.$$.update=()=>{t.$$.dirty&8&&n(0,r=o.trim())},[r,l,a,o]}class ln extends oe{constructor(e){super(),se(this,e,on,sn,ie,{language:2,snippet:3})}}function un(t){let e,n=t[0].title+"",r,a,o,l,s,g,b=t[0].description+"",w,v,f,y,$,F=t[3]===0?"I learnt something!":t[3]<5?"\u{1F389} Hooray! \u{1F603}":t[3]<10?"Fun isn't it? \u{1F605}":"hire me and i'll put this on all your apps \u{1F440}",m,k,u,i,p,_;return l=new ln({props:{language:"javascript",snippet:t[0].snippet}}),{c(){e=j("h3"),r=ee(n),a=B(),o=j("div"),ue(l.$$.fragment),s=B(),g=j("p"),w=B(),v=j("canvas"),f=B(),y=j("div"),$=j("button"),m=ee(F),k=B(),u=j("button"),u.textContent="Show me another!",H(e,"class","svelte-1unbu9a"),H(o,"class","fact svelte-1unbu9a"),H(v,"class","svelte-1unbu9a"),H($,"class","learnt-something svelte-1unbu9a"),H(u,"class","next-fact svelte-1unbu9a"),H(y,"class","sticky-btns svelte-1unbu9a")},m(h,x){U(h,e,x),A(e,r),U(h,a,x),U(h,o,x),ne(l,o,null),A(o,s),A(o,g),g.innerHTML=b,t[8](o),U(h,w,x),U(h,v,x),t[9](v),U(h,f,x),U(h,y,x),A(y,$),A($,m),A(y,k),A(y,u),i=!0,p||(_=[ve($,"click",t[5]),ve(u,"click",t[4])],p=!0)},p(h,[x]){(!i||x&1)&&n!==(n=h[0].title+"")&&Re(r,n);const T={};x&1&&(T.snippet=h[0].snippet),l.$set(T),(!i||x&1)&&b!==(b=h[0].description+"")&&(g.innerHTML=b),(!i||x&8)&&F!==(F=h[3]===0?"I learnt something!":h[3]<5?"\u{1F389} Hooray! \u{1F603}":h[3]<10?"Fun isn't it? \u{1F605}":"hire me and i'll put this on all your apps \u{1F440}")&&Re(m,F)},i(h){i||(G(l.$$.fragment,h),i=!0)},o(h){X(l.$$.fragment,h),i=!1},d(h){h&&D(e),h&&D(a),h&&D(o),re(l),t[8](null),h&&D(w),h&&D(v),t[9](null),h&&D(f),h&&D(y),p=!1,ce(_)}}}function cn(t,e,n){let r,{facts:a}=e,o=0,l;function s(){n(7,o++,o),l.scrollTo({top:0})}let g,b=an.create(g,{resize:!0,useWorker:!0,disableForReducedMotion:!0}),w=0;function v(){n(3,w++,w),b({particleCount:100,spread:100})}function f($){ye[$?"unshift":"push"](()=>{l=$,n(1,l)})}function y($){ye[$?"unshift":"push"](()=>{g=$,n(2,g)})}return t.$$set=$=>{"facts"in $&&n(6,a=$.facts)},t.$$.update=()=>{t.$$.dirty&192&&n(0,r=a[o%a.length]),t.$$.dirty&1&&console.log(r)},[r,l,g,w,s,v,a,o,f,y]}class fn extends oe{constructor(e){super(),se(this,e,cn,un,ie,{facts:6})}}function dn(t){let e,n,r,a;const o=t[1].default,l=At(o,t,t[0],null);return{c(){e=j("h2"),l&&l.c(),n=B(),r=j("hr")},m(s,g){U(s,e,g),l&&l.m(e,null),U(s,n,g),U(s,r,g),a=!0},p(s,[g]){l&&l.p&&(!a||g&1)&&Et(l,o,s,s[0],a?Tt(o,s[0],g,null):Mt(s[0]),null)},i(s){a||(G(l,s),a=!0)},o(s){X(l,s),a=!1},d(s){s&&D(e),l&&l.d(s),s&&D(n),s&&D(r)}}}function gn(t,e,n){let{$$slots:r={},$$scope:a}=e;return t.$$set=o=>{"$$scope"in o&&n(0,a=o.$$scope)},[a,r]}class hn extends oe{constructor(e){super(),se(this,e,gn,dn,ie,{})}}function it(t,e,n){const r=t.slice();return r[7]=e[n],r}function st(t,e,n){const r=t.slice();return r[7]=e[n],r[11]=n,r}function pn(t){let e;return{c(){e=ee("Tech")},m(n,r){U(n,e,r)},d(n){n&&D(e)}}}function mn(t){let e,n,r=t[7].tech+"",a,o;return{c(){e=j("li"),n=j("p"),a=ee(r),o=B(),H(e,"class","svelte-fkvib0")},m(l,s){U(l,e,s),A(e,n),A(n,a),A(e,o)},p:W,i:W,o:W,d(l){l&&D(e)}}}function vn(t){let e,n,r=t[7].tech+"",a,o,l,s,g,b,w;function v(){return t[5](t[11])}let f=t[1]===t[11]&&ot(t);return{c(){e=j("li"),n=j("button"),a=ee(r),l=B(),f&&f.c(),s=B(),H(n,"class",o=Le(`has-facts ${t[1]===t[11]&&"open-fact"}`)+" svelte-fkvib0"),H(e,"class","svelte-fkvib0")},m(y,$){U(y,e,$),A(e,n),A(n,a),A(e,l),f&&f.m(e,null),A(e,s),g=!0,b||(w=ve(n,"click",v),b=!0)},p(y,$){t=y,(!g||$&2&&o!==(o=Le(`has-facts ${t[1]===t[11]&&"open-fact"}`)+" svelte-fkvib0"))&&H(n,"class",o),t[1]===t[11]?f?(f.p(t,$),$&2&&G(f,1)):(f=ot(t),f.c(),G(f,1),f.m(e,s)):f&&(Ge(),X(f,1,1,()=>{f=null}),qe())},i(y){g||(G(f),g=!0)},o(y){X(f),g=!1},d(y){y&&D(e),f&&f.d(),b=!1,w()}}}function ot(t){let e,n,r,a;return n=new fn({props:{facts:t[7].facts}}),{c(){e=j("div"),ue(n.$$.fragment)},m(o,l){U(o,e,l),ne(n,e,null),a=!0},p(o,l){t=o},i(o){a||(G(n.$$.fragment,o),fe(()=>{r||(r=Qe(e,nt,{duration:300,easing:et},!0)),r.run(1)}),a=!0)},o(o){X(n.$$.fragment,o),r||(r=Qe(e,nt,{duration:300,easing:et},!1)),r.run(0),a=!1},d(o){o&&D(e),re(n),o&&r&&r.end()}}}function lt(t){let e,n,r,a;const o=[vn,mn],l=[];function s(g,b){return g[7].facts.length>0?0:1}return e=s(t),n=l[e]=o[e](t),{c(){n.c(),r=Lt()},m(g,b){l[e].m(g,b),U(g,r,b),a=!0},p(g,b){n.p(g,b)},i(g){a||(G(n),a=!0)},o(g){X(n),a=!1},d(g){l[e].d(g),g&&D(r)}}}function ut(t){let e,n=t[7]+"",r;return{c(){e=j("p"),r=ee(n)},m(a,o){U(a,e,o),A(e,r)},p:W,d(a){a&&D(e)}}}function yn(t){let e,n,r,a,o,l,s,g,b,w;n=new hn({props:{$$slots:{default:[pn]},$$scope:{ctx:t}}});let v=t[2],f=[];for(let m=0;m<v.length;m+=1)f[m]=lt(st(t,v,m));const y=m=>X(f[m],1,1,()=>{f[m]=null});let $=t[3],F=[];for(let m=0;m<$.length;m+=1)F[m]=ut(it(t,$,m));return{c(){e=j("section"),ue(n.$$.fragment),r=B(),a=j("p"),a.textContent="Click to learn something new!",o=B(),l=j("ul");for(let m=0;m<f.length;m+=1)f[m].c();s=B(),g=j("p"),b=ee(`I have also dabbled in
    `);for(let m=0;m<F.length;m+=1)F[m].c();H(l,"class","tech-list svelte-fkvib0"),H(e,"id","tech")},m(m,k){U(m,e,k),ne(n,e,null),A(e,r),A(e,a),A(e,o),A(e,l);for(let u=0;u<f.length;u+=1)f[u].m(l,null);A(e,s),A(e,g),A(g,b);for(let u=0;u<F.length;u+=1)F[u].m(g,null);t[6](e),w=!0},p(m,[k]){const u={};if(k&4096&&(u.$$scope={dirty:k,ctx:m}),n.$set(u),k&22){v=m[2];let i;for(i=0;i<v.length;i+=1){const p=st(m,v,i);f[i]?(f[i].p(p,k),G(f[i],1)):(f[i]=lt(p),f[i].c(),G(f[i],1),f[i].m(l,null))}for(Ge(),i=v.length;i<f.length;i+=1)y(i);qe()}if(k&8){$=m[3];let i;for(i=0;i<$.length;i+=1){const p=it(m,$,i);F[i]?F[i].p(p,k):(F[i]=ut(p),F[i].c(),F[i].m(g,null))}for(;i<F.length;i+=1)F[i].d(1);F.length=$.length}},i(m){if(!w){G(n.$$.fragment,m);for(let k=0;k<v.length;k+=1)G(f[k]);w=!0}},o(m){X(n.$$.fragment,m),f=f.filter(Boolean);for(let k=0;k<f.length;k+=1)X(f[k]);w=!1},d(m){m&&D(e),re(n),Ke(f,m),Ke(F,m),t[6](null)}}}function bn(t,e,n){let{techRef:r}=e;const a=[{tech:"JavaScript",facts:[{title:"Iterable/Iterator protocol",snippet:`const tutor = 'doug';

const tutorIterator = tutor[Symbol.iterator](); // invoke it!

console.log(tutorIterator); // Object [String Iterator] {}

console.log(tutorIterator.next()); // { value: 'd', done: false }
console.log(tutorIterator.next()); // { value: 'o', done: false }
console.log(tutorIterator.next()); // { value: 'u', done: false }
console.log(tutorIterator.next()); // { value: 'g', done: false }
console.log(tutorIterator.next()); // { value: undefined, done: true }`,description:`
Some data types in JavaScript are iterable by nature - e.g <code class='inline-code'>Array</code>, <code class='inline-code'>TypedArray</code>, <code class='inline-code'>Map</code>, <code class='inline-code'>Set</code>, <code class='inline-code'>NodeList</code> among some others . In order to be iterable an object must adhere to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol" target="_blank" rel="noreferrer">
iterator protocol
</a> <i>(meaning they must implement the <code class='inline-code'>@@iterator</code> method)</i>. 
<br/>
In the above example we're creating a "String Iterator" which has <code class='inline-code'>.next()</code>, <code class='inline-code'>.return()</code> and <code class='inline-code'>.throw()</code> methods. These methods are used under the hood by language features like the <code class='inline-code'>for...of</code> loop and the spread operator! 
`},{title:"Generators",snippet:`function* createNumGenerator(start, end) {
	while (start <= end) {
		yield start;
		start++;
	}
}

console.log(createNumGenerator); // [GeneratorFunction: createNumGenerator]

const oneToFiveGenerator = createNumGenerator(1, 5);

console.log(oneToFiveGenerator); // Object [Generator] {}`,description:`Notice how i'm using function* right at the start there? This is a <code class='inline-code'>GeneratorFunction</code>. Calling this function returns a Generator Object!

This object can be iterated over and will call the function on each iteration.

We can call the next value in the iteration manually by using the <code class='inline-code'>.next()</code> method

<pre class='language-javascript'><code class='language-javascript'
    >${q.highlight(`const firstResult = oneToFiveGenerator.next();

console.log(firstResult); // { value: 1, done: false }`,q.languages.javascript,"javascript")}</code
  >
</pre>

The strange difference between the way this generator executes and the way normal functions run is that it will execute line-by-line until it reaches a <code class='inline-code'>yield</code> keyword. At this point it will pause the execution and yield (give back) a results object to wherever it was called. When we iterate again the code will resume from the yield keyword and execute until it reaches the next one.`},{title:"Optional properties",snippet:`const dougsObj = {
  ...(true && { addMe: 'hello!' }),
  ...(false && { ignoreMe: 'shh!' }),
};`,description:"While it's arguably not the <i>most</i> readable syntax you can optionally add properties to an object using the above syntax!"}]},{tech:"TypeScript",facts:[{title:"Template literal types",snippet:"type Colour = 'red' | 'blue' | 'green' | 'neutral';\ntype Character = 'fox' | 'falco' | 'ness' | 'peach' | 'cpt.falcon';\n\ntype SelectableCharacter = `${Character}_${Colour}`;\n",description:`You can create an exponential amount of types by
using a syntax identical to string template literals! <br/><br/>
The above code generates <b>twenty types</b>!
<pre class='language-javascript'> <code class='language-javascript'>${q.highlight('type SelectableCharacter = "fox_red" | "fox_blue" | "fox_green" | "fox_neutral" | "falco_red" | "falco_blue" | "falco_green" | "falco_neutral" | "ness_red" | "ness_blue" | "ness_green" | "ness_neutral" | ... 7 more ... | "cpt.falcon_neutral"',q.languages.javascript,"javascript")}</code></pre>`}]},{tech:"React",facts:[{title:"Cancelling fetch requests",snippet:`
const Example = () => {
  useEffect(() => {
    const cancellationToken = new AbortController();
    const signal = cancellationToken.signal;
    fetch('api.hellowell.example', { signal: signal })
      .then((res) => res.json())
      .then((apiData) => {
        // do stuff with data here...
      });

    return () => cancellationToken.abort();
  }, []);

  return <div>{/* markup here... */}</div>;
};
`,description:`When we make api calls in a <code class="inline-code">useEffect</code> the promise might resolve after the component has unmounted / we've left the page (more likely with slow connections).<br/>
Or perhaps we're fetching with a parameter and making lots of different requests rapid fire - this would trigger multiple setStates and the content rendered might look like it's desperately trying to catch up \u{1F629}.<br/><br/>
We can use an <code class="inline-code">AbortController</code> to pass a <code class="inline-code">signal</code> to our <code class="inline-code">fetch</code> and cancel the request on unmount!
A returned function from a useEffect is triggered when the component is unmounted (removed from the page). This is useful for running \u201Ccleanup operations like we have here!`},{title:"Custom Hooks",snippet:"const { facts } = useFacts()",description:`I first learnt React using classes and the this.<code class="inline-code">setState()</code> pattern that was in use up until React 16.

For me Hooks made it far easier to handle multiple states in a single component and simplified the <code class="inline-code">componentDidUpdate</code> lifecycle with useEffect.

Creating custom hooks felt like something that would be difficult to grasp but it\u2019s more straight forwards than you might think!

Lets start with a straight forward component that is making an API request on mount using a user_id that has been passed in as a prop.

<pre class='language-javascript'><code class='language-javascript'>${q.highlight(`import { useState, useEffect } from 'React';
import * as api from '../api.js';

const UserCard = ({ user_id }) => {
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    api.getUserInfo(user_id).then((user) => {
      setUserInfo(user);
    });
  }, [user_id]);
  
  return (
    // UI...
    )
};`,q.languages.javascript,"javascript")}</code></pre>


Cool! So this:

    <ul>
      <li>
        Fetches user data on mount and whenever the <code class="inline-code">user_id</code> changes
        </li>
        <li>Uses <code class="inline-code">userInfo</code> to store that data</li>
        <li>Uses <code class="inline-code">setUserInfo</code> to handle state updates and trigger a re-render </li>
        <li>when new user data is put into state.</li>
    </ul>

Now imagine we are wanting to repeat this behaviour elsewhere in our code

<pre class='language-javascript'><code class='language-javascript'>${q.highlight(`import { useState, useEffect } from 'React';
import * as api from '../api.js';

const ProfileDropdown = ({ user_id }) => {
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    api.getUserInfo(user_id).then((user) => {
      setUserInfo(user);
    });
  }, [user_id]);
  
  return (
    // different UI...
    )
};`,q.languages.javascript,"javascript")}</code></pre>

Yes I did just copy-paste that in. Yes it\u2019s not DRY!

If any changes are made to our backend that impacts how we\u2019d fetch the data from the frontend we\u2019d have to change our code in two places \u{1F629}

Lets extract this logic into a custom hook.
<ol>
      <li>Make a function</li>
      <li>Put all state and lifecycle logic you want to use</li>
      <li>return only what you need!</li>
      <li>export the function so it can be reused wherever!</li>
</ol>

<pre class='language-javascript'><code class='language-javascript'>${q.highlight(`// src/hooks/useUserInfo.js
import { useState, useEffect } from 'React';
import * as api from '../api.js';

const useUserInfo = (user_id) => {
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    api.getUserInfo(user_id).then((user) => {
      setUserInfo(user);
    });
  }, [user_id]);
  
  return userInfo;
};

export default useUserInfo;`,q.languages.javascript,"javascript")}</code></pre>
  
Notice how we are only exposing the userInfo out of this custom hook? Put in user_id, get out userInfo - that\u2019s simple!

We can now use it anywhere we want and don\u2019t have to double check how we\u2019ve implemented it elsewhere.

<pre class='language-javascript'><code class='language-javascript'>${q.highlight(`import useUserInfo from '../hooks/useUserInfo';

const UserCard = ({ user_id }) => {
  const userInfo = useUserInfo(user_id);
  
  return (
    // UI...
    )
  };
  
  // elsewhere...
import useUserInfo from '../hooks/useUserInfo';

const ProfileDropdown = ({ user_id }) => {
  const userInfo = useUserInfo(user_id);
  
  return (
    // different UI...
    )
};`,q.languages.javascript,"javascript")}</code></pre>
      
I\u2019m a big fan though there are some potential downsides to be considered before you start extracting and abstracting your hooks.

Pros:

    Less code in components
    Can reuse common patterns across an application

Cons

    Abstractions obstruct the implementation and \u201DuseUserInfo\u201D doesn\u2019t give a good indication on how it works behind the scenes
    Could be difficult to allow variations on the behaviour

Here\u2019s one slightly more complex example

We\u2019re building a marketplace and want to create a custom hook to handle fetching of items, filtering by category as well as provide loading and error patterns

<pre class='language-javascript'><code class='language-javascript'>${q.highlight(`import { useEffect, useState } from 'react';
import * as api from '../utils/api';

const useMarketplaceItems = (selectedCategory) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    api
    .getItems(selectedCategory)
    .then((items) => {
      setItems(items);
      setIsLoading(false);
      setIsErrored(null);
    })
    .catch((err) => {
      setIsLoading(false);
      setIsErrored(err);
    });
  }, [selectedCategory]);
  
  return { items, isLoading, isErrored };
};
  
export default useMarketplaceItems;`,q.languages.javascript,"javascript")}</code></pre>

Here we\u2019re returning an object with the items as well as isLoading and isErrored

Everything is handled in our custom hook and all we need to do is consume it wherever we want!

<pre class='language-javascript'><code class='language-javascript'>${q.highlight(`import useMarketplaceItems from '../hooks/useMarketplaceItems';

const ItemsList = () => {
const [selectedCategory, setSelectedCategory] = useState('seasonal');
const { items, isLoading, isErrored } = useMarketplaceItems(selectedCategory);

return (
  // UI here...
  )
};`,q.languages.javascript,"javascript")}</code></pre>
`}]},{tech:"NextJS",facts:[]},{tech:"NodeJs",facts:[]},{tech:"Express",facts:[]},{tech:"PSQL",facts:[]},{tech:"HTML5",facts:[]},{tech:"CSS",facts:[{title:"HSL",description:`Here is why you should be using hsl() for all your css colour needs :point_right: :sunglasses: :point_right:
When styling a page it's very likely that you want to use colours that complement each other
with hsl() it's super easy to create nice gradients and colours that match your \u201Ctheme\u201D
Just pick a hue (using the 360\xBA colour wheel) and just change the lightness% and saturation%!
nice colours for freeeeeee`,snippet:""}]},{tech:"SASS",facts:[]},{tech:"Svelte",facts:[]},{tech:"Jest",facts:[]},{tech:"Testing Library",facts:[]},{tech:"Mocha / Chai",facts:[]}],o=["C#","ASP.NET","MongoDB","Terraform"];let l=null;function s(w){w===l?n(1,l=null):n(1,l=w)}const g=w=>s(w);function b(w){ye[w?"unshift":"push"](()=>{r=w,n(0,r)})}return t.$$set=w=>{"techRef"in w&&n(0,r=w.techRef)},[r,l,a,o,s,g,b]}class _n extends oe{constructor(e){super(),se(this,e,bn,yn,ie,{techRef:0})}}function wn(t){let e;return{c(){e=j("section"),e.innerHTML=`<h2>Previous Employment</h2> 

  <h3>Northcoders</h3> 
  <a id="northcoders-link" href="https://northcoders.com/" target="_blank" rel="noreferrer" class="svelte-7imagu">northcoders.com</a> 
  <p>A tech training organisation that offers a 13-week Developer Pathway
    designed to take students from knowing the basic concepts surrounding
    programming to being ready for their first job as a junior developer in 13
    weeks. Other products include focused &#39;language tracks&#39; that introduce
    graduates into alternative in-demand technologies like DevOps/Cloud, Go, C#,
    TypeScript</p> 

  <details class="svelte-7imagu"><summary class="svelte-7imagu">Main duties</summary> 
    <div class="details-content svelte-7imagu"><h4>Classroom</h4> 
      <ul><li>Delivering lectures and seminars</li> 
        <li>Maintaining the curriculum</li> 
        <li>Student and staff management</li></ul> 
      <h4>Internal Dev Team</h4> 
      <ul><li>Developing to a brief</li> 
        <li>Maintaining a live codebase</li> 
        <li>Adhering to enforced style guidelines</li> 
        <li>Onboarding new devs</li></ul></div></details> 

  <details class="svelte-7imagu"><summary class="svelte-7imagu">Tech Stack</summary> 
    <div class="details-content svelte-7imagu"><h4>Taught content</h4> 
      <ul><li>Git</li> 
        <li>JavaScript</li> 
        <li>PostgresQL</li> 
        <li>NodeJS</li> 
        <li>Express</li> 
        <li>Jest</li> 
        <li>Mocha/Chai</li> 
        <li>React</li> 
        <li>NextJS</li> 
        <li>Heroku / Netlify</li> 
        <li>HTML / CSS</li></ul> 
      <h4>Internal Dev Team</h4> 
      <ul><li>Git</li> 
        <li>TypeScript</li> 
        <li>NextJS</li> 
        <li>React Testing Library</li> 
        <li>AWS</li> 
        <li>Tailwind</li> 
        <li>Sass</li> 
        <li>Prisma</li> 
        <li>Jira</li></ul></div></details> 

  <p>I joined the Northcoders classroom team as a Junior Software Engineer and
    Tutor after completing the Northcoders Developer Pathway course in February
    2020, and was promoted to Software Engineer and Seminar Lead in early 2022
    <span role="img" aria-hidden="true">\u{1F680}</span></p> 
  <p>I helped keep the curriculum up to date and relevant alongside the current
    tech trends
    <i class="svelte-7imagu">(the release of the
      <a href="https://stateofjs.com/en-us/" target="_blank" rel="noreferrer">StateOfJS</a>
      /
      <a href="https://stateofcss.com/en-us/" target="_blank" rel="noreferrer">StateOfCSS</a>
      survey results is always a very exciting time for me).</i> 
    <br/>
    In the classroom team I planned and delivered lectures and seminars to groups
    of students introducing and exploring concepts before introducing the days &#39;Sprint&#39;
    (daily task) for which we would provide on-demand support
    <br/>
    Outside of my regular duties I took great pride in facilitating internal upskilling
    and development through lunch-and-learns, show-and-tells, open knowledge-sharing
    channels and providing mentoring and support to junior members of staff in my
    department.</p> 

  <div class="nc-images svelte-7imagu"><a class="nc-feature svelte-7imagu" href="https://youtu.be/ExtnyNz743k?t=2521" target="_blank" rel="noreferrer" title="Kev showing off the Web Audio API"><figure><img src="images/lightningTalk1.jpg" alt="A Youtube screenshot of a lightning talk presentation on the web audio API, the presenter looks very excited" class="svelte-7imagu"/> 
        <figcaption>Kev showing off the Web Audio API</figcaption></figure></a> 
    <a class="nc-feature svelte-7imagu" href="https://www.youtube.com/watch?v=kIdd50GOFME" target="_blank" rel="noreferrer" title="Northcoders 5th Birthday celebratory Lightning Talks"><figure><img src="images/lightningTalk2.jpg" alt="A Youtube screenshot of a lightning talk presentation, the presenter is buzzing with anticipation" class="svelte-7imagu"/> 
        <figcaption>Northcoders 5th Birthday celebratory Lightning Talks</figcaption></figure></a> 
    <a class="nc-feature svelte-7imagu" href="https://www.youtube.com/watch?v=Yj_rlbTgJRA" target="_blank" rel="noreferrer" title="_anonym_ask - My NC Project!"><figure><img src="images/anonymask.jpg" alt="A Youtube screenshot of my graduation project" class="svelte-7imagu"/> 
        <figcaption>Graduation project: _anonym_ask - a group engagement web app</figcaption></figure></a> 

    <div class="nc-feature svelte-7imagu"><figure><img src="images/passport.jpg" alt="Screenshot of a log in page" class="svelte-7imagu"/> 
        <figcaption>NC Passport - Internal Dev Project</figcaption></figure></div></div>`,H(e,"class","svelte-7imagu")},m(n,r){U(n,e,r)},p:W,i:W,o:W,d(n){n&&D(e)}}}class kn extends oe{constructor(e){super(),se(this,e,null,wn,ie,{})}}function xn(t){let e,n,r,a,o,l,s,g,b,w,v,f,y,$;n=new en({}),a=new Zt({}),l=new rn({}),g=new Kt({props:{techRef:t[0]}}),w=new kn({});function F(k){t[1](k)}let m={};return t[0]!==void 0&&(m.techRef=t[0]),f=new _n({props:m}),ye.push(()=>Bt(f,"techRef",F)),{c(){e=j("main"),ue(n.$$.fragment),r=B(),ue(a.$$.fragment),o=B(),ue(l.$$.fragment),s=B(),ue(g.$$.fragment),b=B(),ue(w.$$.fragment),v=B(),ue(f.$$.fragment)},m(k,u){U(k,e,u),ne(n,e,null),A(e,r),ne(a,e,null),A(e,o),ne(l,e,null),A(e,s),ne(g,e,null),A(e,b),ne(w,e,null),A(e,v),ne(f,e,null),$=!0},p(k,[u]){const i={};u&1&&(i.techRef=k[0]),g.$set(i);const p={};!y&&u&1&&(y=!0,p.techRef=k[0],Wt(()=>y=!1)),f.$set(p)},i(k){$||(G(n.$$.fragment,k),G(a.$$.fragment,k),G(l.$$.fragment,k),G(g.$$.fragment,k),G(w.$$.fragment,k),G(f.$$.fragment,k),$=!0)},o(k){X(n.$$.fragment,k),X(a.$$.fragment,k),X(l.$$.fragment,k),X(g.$$.fragment,k),X(w.$$.fragment,k),X(f.$$.fragment,k),$=!1},d(k){k&&D(e),re(n),re(a),re(l),re(g),re(w),re(f)}}}function $n(t,e,n){let r;function a(o){r=o,n(0,r)}return[r,a]}class Fn extends oe{constructor(e){super(),se(this,e,$n,xn,ie,{})}}new Fn({target:document.getElementById("app")})});export default In();
