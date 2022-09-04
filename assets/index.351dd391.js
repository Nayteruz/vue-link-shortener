const zh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};zh();function ao(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Kh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gh=ao(Kh);function rc(t){return!!t||t===""}function co(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ae(s)?Xh(s):co(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ae(t))return t;if(Se(t))return t}}const Yh=/;(?![^(]*\))/g,Qh=/:(.+)/;function Xh(t){const e={};return t.split(Yh).forEach(n=>{if(n){const s=n.split(Qh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function wi(t){let e="";if(Ae(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=wi(t[n]);s&&(e+=s+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zs=t=>Ae(t)?t:t==null?"":H(t)||Se(t)&&(t.toString===cc||!U(t.toString))?JSON.stringify(t,oc,2):String(t),oc=(t,e)=>e&&e.__v_isRef?oc(t,e.value):Rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:lc(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!H(e)&&!uc(e)?String(e):e,ce={},Tn=[],lt=()=>{},Jh=()=>!1,Zh=/^on[^a-z]/,Ii=t=>Zh.test(t),uo=t=>t.startsWith("onUpdate:"),ke=Object.assign,ho=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ef=Object.prototype.hasOwnProperty,X=(t,e)=>ef.call(t,e),H=Array.isArray,Rn=t=>Si(t)==="[object Map]",lc=t=>Si(t)==="[object Set]",U=t=>typeof t=="function",Ae=t=>typeof t=="string",fo=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",ac=t=>Se(t)&&U(t.then)&&U(t.catch),cc=Object.prototype.toString,Si=t=>cc.call(t),tf=t=>Si(t).slice(8,-1),uc=t=>Si(t)==="[object Object]",po=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=ao(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ti=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nf=/-(\w)/g,mt=Ti(t=>t.replace(nf,(e,n)=>n?n.toUpperCase():"")),sf=/\B([A-Z])/g,fn=Ti(t=>t.replace(sf,"-$1").toLowerCase()),Ri=Ti(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xi=Ti(t=>t?`on${Ri(t)}`:""),gs=(t,e)=>!Object.is(t,e),Ys=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ei=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},mr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wl;const rf=()=>wl||(wl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _t;class hc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&_t&&(this.parent=_t,this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}run(e){if(this.active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function fc(t){return new hc(t)}function of(t,e=_t){e&&e.active&&e.effects.push(t)}const _o=t=>{const e=new Set(t);return e.w=0,e.n=0,e},dc=t=>(t.w&Ut)>0,pc=t=>(t.n&Ut)>0,lf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ut},af=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];dc(i)&&!pc(i)?i.delete(t):e[n++]=i,i.w&=~Ut,i.n&=~Ut}e.length=n}},yr=new WeakMap;let rs=0,Ut=1;const vr=30;let nt;const nn=Symbol(""),Er=Symbol("");class go{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,of(this,s)}run(){if(!this.active)return this.fn();let e=nt,n=Mt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nt,nt=this,Mt=!0,Ut=1<<++rs,rs<=vr?lf(this):Il(this),this.fn()}finally{rs<=vr&&af(this),Ut=1<<--rs,nt=this.parent,Mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nt===this?this.deferStop=!0:this.active&&(Il(this),this.onStop&&this.onStop(),this.active=!1)}}function Il(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Mt=!0;const _c=[];function jn(){_c.push(Mt),Mt=!1}function Vn(){const t=_c.pop();Mt=t===void 0?!0:t}function Ge(t,e,n){if(Mt&&nt){let s=yr.get(t);s||yr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=_o()),gc(i)}}function gc(t,e){let n=!1;rs<=vr?pc(t)||(t.n|=Ut,n=!dc(t)):n=!t.has(nt),n&&(t.add(nt),nt.deps.push(t))}function Tt(t,e,n,s,i,r){const o=yr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&H(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":H(t)?po(n)&&l.push(o.get("length")):(l.push(o.get(nn)),Rn(t)&&l.push(o.get(Er)));break;case"delete":H(t)||(l.push(o.get(nn)),Rn(t)&&l.push(o.get(Er)));break;case"set":Rn(t)&&l.push(o.get(nn));break}if(l.length===1)l[0]&&Cr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Cr(_o(a))}}function Cr(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&Sl(s);for(const s of n)s.computed||Sl(s)}function Sl(t,e){(t!==nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const cf=ao("__proto__,__v_isRef,__isVue"),mc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fo)),uf=mo(),hf=mo(!1,!0),ff=mo(!0),Tl=df();function df(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let r=0,o=this.length;r<o;r++)Ge(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(te)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jn();const s=te(this)[e].apply(this,n);return Vn(),s}}),t}function mo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Nf:bc:e?Cc:Ec).get(s))return s;const o=H(s);if(!t&&o&&X(Tl,i))return Reflect.get(Tl,i,r);const l=Reflect.get(s,i,r);return(fo(i)?mc.has(i):cf(i))||(t||Ge(s,"get",i),e)?l:Ee(l)?o&&po(i)?l:l.value:Se(l)?t?wc(l):qn(l):l}}const pf=yc(),_f=yc(!0);function yc(t=!1){return function(n,s,i,r){let o=n[s];if(ms(o)&&Ee(o)&&!Ee(i))return!1;if(!t&&!ms(i)&&(br(i)||(i=te(i),o=te(o)),!H(n)&&Ee(o)&&!Ee(i)))return o.value=i,!0;const l=H(n)&&po(s)?Number(s)<n.length:X(n,s),a=Reflect.set(n,s,i,r);return n===te(r)&&(l?gs(i,o)&&Tt(n,"set",s,i):Tt(n,"add",s,i)),a}}function gf(t,e){const n=X(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Tt(t,"delete",e,void 0),s}function mf(t,e){const n=Reflect.has(t,e);return(!fo(e)||!mc.has(e))&&Ge(t,"has",e),n}function yf(t){return Ge(t,"iterate",H(t)?"length":nn),Reflect.ownKeys(t)}const vc={get:uf,set:pf,deleteProperty:gf,has:mf,ownKeys:yf},vf={get:ff,set(t,e){return!0},deleteProperty(t,e){return!0}},Ef=ke({},vc,{get:hf,set:_f}),yo=t=>t,xi=t=>Reflect.getPrototypeOf(t);function Us(t,e,n=!1,s=!1){t=t.__v_raw;const i=te(t),r=te(e);n||(e!==r&&Ge(i,"get",e),Ge(i,"get",r));const{has:o}=xi(i),l=s?yo:n?Co:ys;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function $s(t,e=!1){const n=this.__v_raw,s=te(n),i=te(t);return e||(t!==i&&Ge(s,"has",t),Ge(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function js(t,e=!1){return t=t.__v_raw,!e&&Ge(te(t),"iterate",nn),Reflect.get(t,"size",t)}function Rl(t){t=te(t);const e=te(this);return xi(e).has.call(e,t)||(e.add(t),Tt(e,"add",t,t)),this}function xl(t,e){e=te(e);const n=te(this),{has:s,get:i}=xi(n);let r=s.call(n,t);r||(t=te(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?gs(e,o)&&Tt(n,"set",t,e):Tt(n,"add",t,e),this}function Nl(t){const e=te(this),{has:n,get:s}=xi(e);let i=n.call(e,t);i||(t=te(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Tt(e,"delete",t,void 0),r}function Al(){const t=te(this),e=t.size!==0,n=t.clear();return e&&Tt(t,"clear",void 0,void 0),n}function Vs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=te(o),a=e?yo:t?Co:ys;return!t&&Ge(l,"iterate",nn),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function qs(t,e,n){return function(...s){const i=this.__v_raw,r=te(i),o=Rn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?yo:e?Co:ys;return!e&&Ge(r,"iterate",a?Er:nn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function xt(t){return function(...e){return t==="delete"?!1:this}}function Cf(){const t={get(r){return Us(this,r)},get size(){return js(this)},has:$s,add:Rl,set:xl,delete:Nl,clear:Al,forEach:Vs(!1,!1)},e={get(r){return Us(this,r,!1,!0)},get size(){return js(this)},has:$s,add:Rl,set:xl,delete:Nl,clear:Al,forEach:Vs(!1,!0)},n={get(r){return Us(this,r,!0)},get size(){return js(this,!0)},has(r){return $s.call(this,r,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:Vs(!0,!1)},s={get(r){return Us(this,r,!0,!0)},get size(){return js(this,!0)},has(r){return $s.call(this,r,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:Vs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qs(r,!1,!1),n[r]=qs(r,!0,!1),e[r]=qs(r,!1,!0),s[r]=qs(r,!0,!0)}),[t,n,e,s]}const[bf,wf,If,Sf]=Cf();function vo(t,e){const n=e?t?Sf:If:t?wf:bf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const Tf={get:vo(!1,!1)},Rf={get:vo(!1,!0)},xf={get:vo(!0,!1)},Ec=new WeakMap,Cc=new WeakMap,bc=new WeakMap,Nf=new WeakMap;function Af(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pf(t){return t.__v_skip||!Object.isExtensible(t)?0:Af(tf(t))}function qn(t){return ms(t)?t:Eo(t,!1,vc,Tf,Ec)}function Of(t){return Eo(t,!1,Ef,Rf,Cc)}function wc(t){return Eo(t,!0,vf,xf,bc)}function Eo(t,e,n,s,i){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Pf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Dt(t){return ms(t)?Dt(t.__v_raw):!!(t&&t.__v_isReactive)}function ms(t){return!!(t&&t.__v_isReadonly)}function br(t){return!!(t&&t.__v_isShallow)}function Ic(t){return Dt(t)||ms(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function On(t){return ei(t,"__v_skip",!0),t}const ys=t=>Se(t)?qn(t):t,Co=t=>Se(t)?wc(t):t;function Sc(t){Mt&&nt&&(t=te(t),gc(t.dep||(t.dep=_o())))}function Tc(t,e){t=te(t),t.dep&&Cr(t.dep)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function xn(t){return Rc(t,!1)}function kf(t){return Rc(t,!0)}function Rc(t,e){return Ee(t)?t:new Mf(t,e)}class Mf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:ys(e)}get value(){return Sc(this),this._value}set value(e){e=this.__v_isShallow?e:te(e),gs(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ys(e),Tc(this))}}function Lt(t){return Ee(t)?t.value:t}const Df={get:(t,e,n)=>Lt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function xc(t){return Dt(t)?t:new Proxy(t,Df)}function Lf(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=Bf(t,n);return e}class Ff{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Bf(t,e,n){const s=t[e];return Ee(s)?s:new Ff(t,e,n)}class Hf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new go(e,()=>{this._dirty||(this._dirty=!0,Tc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=te(this);return Sc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Wf(t,e,n=!1){let s,i;const r=U(t);return r?(s=t,i=lt):(s=t.get,i=t.set),new Hf(s,i,r||!i,n)}function Ft(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Ni(r,e,n)}return i}function Ze(t,e,n,s){if(U(t)){const r=Ft(t,e,n,s);return r&&ac(r)&&r.catch(o=>{Ni(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ze(t[r],e,n,s));return i}function Ni(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Ft(a,null,10,[t,o,l]);return}}Uf(t,n,i,s)}function Uf(t,e,n,s=!0){console.error(t)}let ti=!1,wr=!1;const Ke=[];let bt=0;const ls=[];let os=null,Cn=0;const as=[];let At=null,bn=0;const Nc=Promise.resolve();let bo=null,Ir=null;function wo(t){const e=bo||Nc;return t?e.then(this?t.bind(this):t):e}function $f(t){let e=bt+1,n=Ke.length;for(;e<n;){const s=e+n>>>1;vs(Ke[s])<t?e=s+1:n=s}return e}function Ac(t){(!Ke.length||!Ke.includes(t,ti&&t.allowRecurse?bt+1:bt))&&t!==Ir&&(t.id==null?Ke.push(t):Ke.splice($f(t.id),0,t),Pc())}function Pc(){!ti&&!wr&&(wr=!0,bo=Nc.then(Mc))}function jf(t){const e=Ke.indexOf(t);e>bt&&Ke.splice(e,1)}function Oc(t,e,n,s){H(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Pc()}function Vf(t){Oc(t,os,ls,Cn)}function qf(t){Oc(t,At,as,bn)}function Ai(t,e=null){if(ls.length){for(Ir=e,os=[...new Set(ls)],ls.length=0,Cn=0;Cn<os.length;Cn++)os[Cn]();os=null,Cn=0,Ir=null,Ai(t,e)}}function kc(t){if(Ai(),as.length){const e=[...new Set(as)];if(as.length=0,At){At.push(...e);return}for(At=e,At.sort((n,s)=>vs(n)-vs(s)),bn=0;bn<At.length;bn++)At[bn]();At=null,bn=0}}const vs=t=>t.id==null?1/0:t.id;function Mc(t){wr=!1,ti=!0,Ai(t),Ke.sort((n,s)=>vs(n)-vs(s));const e=lt;try{for(bt=0;bt<Ke.length;bt++){const n=Ke[bt];n&&n.active!==!1&&Ft(n,null,14)}}finally{bt=0,Ke.length=0,kc(),ti=!1,bo=null,(Ke.length||ls.length||as.length)&&Mc(t)}}function zf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ce;f&&(i=n.map(_=>_.trim())),h&&(i=n.map(mr))}let l,a=s[l=Xi(e)]||s[l=Xi(mt(e))];!a&&r&&(a=s[l=Xi(fn(e))]),a&&Ze(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ze(c,t,6,i)}}function Dc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const a=c=>{const u=Dc(c,e,!0);u&&(l=!0,ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(s.set(t,null),null):(H(r)?r.forEach(a=>o[a]=null):ke(o,r),s.set(t,o),o)}function Pi(t,e){return!t||!Ii(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,fn(e))||X(t,e))}let Xe=null,Lc=null;function ni(t){const e=Xe;return Xe=t,Lc=t&&t.type.__scopeId||null,e}function Kf(t,e=Xe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ul(-1);const r=ni(e),o=t(...i);return ni(r),s._d&&Ul(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Ji(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:I}=t;let T,N;const F=ni(t);try{if(n.shapeFlag&4){const K=i||s;T=gt(u.call(K,K,h,r,_,f,m)),N=a}else{const K=e;T=gt(K.length>1?K(r,{attrs:a,slots:l,emit:c}):K(r,null)),N=e.props?a:Gf(a)}}catch(K){cs.length=0,Ni(K,t,1),T=Oe(at)}let $=T;if(N&&I!==!1){const K=Object.keys(N),{shapeFlag:J}=$;K.length&&J&7&&(o&&K.some(uo)&&(N=Yf(N,o)),$=$t($,N))}return n.dirs&&($=$t($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),T=$,ni(F),T}const Gf=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ii(n))&&((e||(e={}))[n]=t[n]);return e},Yf=(t,e)=>{const n={};for(const s in t)(!uo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Qf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Pl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Pi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Pl(s,o,c):!0:!!o;return!1}function Pl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Pi(n,r))return!0}return!1}function Xf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Jf=t=>t.__isSuspense;function Zf(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):qf(t)}function Qs(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function et(t,e,n=!1){const s=xe||Xe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s.proxy):e}}const Ol={};function Nn(t,e,n){return Fc(t,e,n)}function Fc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ce){const l=xe;let a,c=!1,u=!1;if(Ee(t)?(a=()=>t.value,c=br(t)):Dt(t)?(a=()=>t,s=!0):H(t)?(u=!0,c=t.some(N=>Dt(N)||br(N)),a=()=>t.map(N=>{if(Ee(N))return N.value;if(Dt(N))return en(N);if(U(N))return Ft(N,l,2)})):U(t)?e?a=()=>Ft(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ze(t,l,3,[f])}:a=lt,e&&s){const N=a;a=()=>en(N())}let h,f=N=>{h=T.onStop=()=>{Ft(N,l,4)}};if(Cs)return f=lt,e?n&&Ze(e,l,3,[a(),u?[]:void 0,f]):a(),lt;let _=u?[]:Ol;const m=()=>{if(!!T.active)if(e){const N=T.run();(s||c||(u?N.some((F,$)=>gs(F,_[$])):gs(N,_)))&&(h&&h(),Ze(e,l,3,[N,_===Ol?void 0:_,f]),_=N)}else T.run()};m.allowRecurse=!!e;let I;i==="sync"?I=m:i==="post"?I=()=>He(m,l&&l.suspense):I=()=>Vf(m);const T=new go(a,I);return e?n?m():_=T.run():i==="post"?He(T.run.bind(T),l&&l.suspense):T.run(),()=>{T.stop(),l&&l.scope&&ho(l.scope.effects,T)}}function ed(t,e,n){const s=this.proxy,i=Ae(t)?t.includes(".")?Bc(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=xe;kn(this);const l=Fc(i,r.bind(s),n);return o?kn(o):sn(),l}function Bc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function en(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ee(t))en(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)en(t[n],e);else if(lc(t)||Rn(t))t.forEach(n=>{en(n,e)});else if(uc(t))for(const n in t)en(t[n],e);return t}function td(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $c(()=>{t.isMounted=!0}),jc(()=>{t.isUnmounting=!0}),t}const Qe=[Function,Array],nd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qe,onEnter:Qe,onAfterEnter:Qe,onEnterCancelled:Qe,onBeforeLeave:Qe,onLeave:Qe,onAfterLeave:Qe,onLeaveCancelled:Qe,onBeforeAppear:Qe,onAppear:Qe,onAfterAppear:Qe,onAppearCancelled:Qe},setup(t,{slots:e}){const n=xo(),s=td();let i;return()=>{const r=e.default&&Wc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const I of r)if(I.type!==at){o=I;break}}const l=te(t),{mode:a}=l;if(s.isLeaving)return Zi(o);const c=kl(o);if(!c)return Zi(o);const u=Sr(c,l,s,n);Tr(c,u);const h=n.subTree,f=h&&kl(h);let _=!1;const{getTransitionKey:m}=c.type;if(m){const I=m();i===void 0?i=I:I!==i&&(i=I,_=!0)}if(f&&f.type!==at&&(!Jt(c,f)||_)){const I=Sr(f,l,s,n);if(Tr(f,I),a==="out-in")return s.isLeaving=!0,I.afterLeave=()=>{s.isLeaving=!1,n.update()},Zi(o);a==="in-out"&&c.type!==at&&(I.delayLeave=(T,N,F)=>{const $=Hc(s,f);$[String(f.key)]=f,T._leaveCb=()=>{N(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return o}}},sd=nd;function Hc(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Sr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:I,onAppear:T,onAfterAppear:N,onAppearCancelled:F}=e,$=String(t.key),K=Hc(n,t),J=(O,Q)=>{O&&Ze(O,s,9,Q)},me=(O,Q)=>{const ne=Q[1];J(O,Q),H(O)?O.every(ge=>ge.length<=1)&&ne():O.length<=1&&ne()},Y={mode:r,persisted:o,beforeEnter(O){let Q=l;if(!n.isMounted)if(i)Q=I||l;else return;O._leaveCb&&O._leaveCb(!0);const ne=K[$];ne&&Jt(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),J(Q,[O])},enter(O){let Q=a,ne=c,ge=u;if(!n.isMounted)if(i)Q=T||a,ne=N||c,ge=F||u;else return;let Ce=!1;const $e=O._enterCb=Be=>{Ce||(Ce=!0,Be?J(ge,[O]):J(ne,[O]),Y.delayedLeave&&Y.delayedLeave(),O._enterCb=void 0)};Q?me(Q,[O,$e]):$e()},leave(O,Q){const ne=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return Q();J(h,[O]);let ge=!1;const Ce=O._leaveCb=$e=>{ge||(ge=!0,Q(),$e?J(m,[O]):J(_,[O]),O._leaveCb=void 0,K[ne]===t&&delete K[ne])};K[ne]=t,f?me(f,[O,Ce]):Ce()},clone(O){return Sr(O,e,n,s)}};return Y}function Zi(t){if(Oi(t))return t=$t(t),t.children=null,t}function kl(t){return Oi(t)?t.children?t.children[0]:void 0:t}function Tr(t,e){t.shapeFlag&6&&t.component?Tr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===qe?(o.patchFlag&128&&i++,s=s.concat(Wc(o.children,e,l))):(e||o.type!==at)&&s.push(l!=null?$t(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function zn(t){return U(t)?{setup:t,name:t.name}:t}const Xs=t=>!!t.type.__asyncLoader,Oi=t=>t.type.__isKeepAlive;function id(t,e){Uc(t,"a",e)}function rd(t,e){Uc(t,"da",e)}function Uc(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ki(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Oi(i.parent.vnode)&&od(s,e,n,i),i=i.parent}}function od(t,e,n,s){const i=ki(e,t,s,!0);Io(()=>{ho(s[e],i)},n)}function ki(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;jn(),kn(n);const l=Ze(e,n,t,o);return sn(),Vn(),l});return s?i.unshift(r):i.push(r),r}}const Rt=t=>(e,n=xe)=>(!Cs||t==="sp")&&ki(t,e,n),ld=Rt("bm"),$c=Rt("m"),ad=Rt("bu"),cd=Rt("u"),jc=Rt("bum"),Io=Rt("um"),ud=Rt("sp"),hd=Rt("rtg"),fd=Rt("rtc");function dd(t,e=xe){ki("ec",t,e)}function pd(t,e){const n=Xe;if(n===null)return t;const s=Di(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=ce]=e[r];U(o)&&(o={mounted:o,updated:o}),o.deep&&en(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function Kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(jn(),Ze(a,n,8,[t.el,l,t,e]),Vn())}}const Vc="components";function _d(t,e){return md(Vc,t,!0,e)||t}const gd=Symbol();function md(t,e,n=!0,s=!1){const i=Xe||xe;if(i){const r=i.type;if(t===Vc){const l=Kd(r,!1);if(l&&(l===e||l===mt(e)||l===Ri(mt(e))))return r}const o=Ml(i[t]||r[t],e)||Ml(i.appContext[t],e);return!o&&s?r:o}}function Ml(t,e){return t&&(t[e]||t[mt(e)]||t[Ri(mt(e))])}function qc(t,e,n,s){let i;const r=n&&n[s];if(H(t)||Ae(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Se(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Rr=t=>t?ru(t)?Di(t)||t.proxy:Rr(t.parent):null,si=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rr(t.parent),$root:t=>Rr(t.root),$emit:t=>t.emit,$options:t=>Kc(t),$forceUpdate:t=>t.f||(t.f=()=>Ac(t.update)),$nextTick:t=>t.n||(t.n=wo.bind(t.proxy)),$watch:t=>ed.bind(t)}),yd={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ce&&X(s,e))return o[e]=1,s[e];if(i!==ce&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==ce&&X(n,e))return o[e]=4,n[e];xr&&(o[e]=0)}}const u=si[e];let h,f;if(u)return e==="$attrs"&&Ge(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ce&&X(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,X(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ce&&X(i,e)?(i[e]=n,!0):s!==ce&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ce&&X(t,o)||e!==ce&&X(e,o)||(l=r[0])&&X(l,o)||X(s,o)||X(si,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let xr=!0;function vd(t){const e=Kc(t),n=t.proxy,s=t.ctx;xr=!1,e.beforeCreate&&Dl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:I,deactivated:T,beforeDestroy:N,beforeUnmount:F,destroyed:$,unmounted:K,render:J,renderTracked:me,renderTriggered:Y,errorCaptured:O,serverPrefetch:Q,expose:ne,inheritAttrs:ge,components:Ce,directives:$e,filters:Be}=e;if(c&&Ed(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const ie=o[ue];U(ie)&&(s[ue]=ie.bind(n))}if(i){const ue=i.call(n,n);Se(ue)&&(t.data=qn(ue))}if(xr=!0,r)for(const ue in r){const ie=r[ue],je=U(ie)?ie.bind(n,n):U(ie.get)?ie.get.bind(n,n):lt,gn=!U(ie)&&U(ie.set)?ie.set.bind(n):lt,vt=We({get:je,set:gn});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>vt.value,set:ft=>vt.value=ft})}if(l)for(const ue in l)zc(l[ue],s,n,ue);if(a){const ue=U(a)?a.call(n):a;Reflect.ownKeys(ue).forEach(ie=>{Qs(ie,ue[ie])})}u&&Dl(u,t,"c");function we(ue,ie){H(ie)?ie.forEach(je=>ue(je.bind(n))):ie&&ue(ie.bind(n))}if(we(ld,h),we($c,f),we(ad,_),we(cd,m),we(id,I),we(rd,T),we(dd,O),we(fd,me),we(hd,Y),we(jc,F),we(Io,K),we(ud,Q),H(ne))if(ne.length){const ue=t.exposed||(t.exposed={});ne.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:je=>n[ie]=je})})}else t.exposed||(t.exposed={});J&&t.render===lt&&(t.render=J),ge!=null&&(t.inheritAttrs=ge),Ce&&(t.components=Ce),$e&&(t.directives=$e)}function Ed(t,e,n=lt,s=!1){H(t)&&(t=Nr(t));for(const i in t){const r=t[i];let o;Se(r)?"default"in r?o=et(r.from||i,r.default,!0):o=et(r.from||i):o=et(r),Ee(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Dl(t,e,n){Ze(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function zc(t,e,n,s){const i=s.includes(".")?Bc(n,s):()=>n[s];if(Ae(t)){const r=e[t];U(r)&&Nn(i,r)}else if(U(t))Nn(i,t.bind(n));else if(Se(t))if(H(t))t.forEach(r=>zc(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&Nn(i,r,t)}}function Kc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>ii(a,c,o,!0)),ii(a,e,o)),r.set(e,a),a}function ii(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ii(t,r,n,!0),i&&i.forEach(o=>ii(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Cd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Cd={data:Ll,props:Yt,emits:Yt,methods:Yt,computed:Yt,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Yt,directives:Yt,watch:wd,provide:Ll,inject:bd};function Ll(t,e){return e?t?function(){return ke(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function bd(t,e){return Yt(Nr(t),Nr(e))}function Nr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function De(t,e){return t?[...new Set([].concat(t,e))]:e}function Yt(t,e){return t?ke(ke(Object.create(null),t),e):e}function wd(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const s in e)n[s]=De(t[s],e[s]);return n}function Id(t,e,n,s=!1){const i={},r={};ei(r,Mi,1),t.propsDefaults=Object.create(null),Gc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Of(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Sd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=te(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Pi(t.emitsOptions,f))continue;const _=e[f];if(a)if(X(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const m=mt(f);i[m]=Ar(a,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Gc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!X(e,h)&&((u=fn(h))===h||!X(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ar(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!X(e,h)&&!0)&&(delete r[h],c=!0)}c&&Tt(t,"set","$attrs")}function Gc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Gs(a))continue;const c=e[a];let u;i&&X(i,u=mt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Pi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=te(n),c=l||ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ar(i,a,h,c[h],t,!X(c,h))}}return o}function Ar(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=X(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&U(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(kn(i),s=c[n]=a.call(null,e),sn())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===fn(n))&&(s=!0))}return s}function Yc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!U(t)){const u=h=>{a=!0;const[f,_]=Yc(h,e,!0);ke(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return s.set(t,Tn),Tn;if(H(r))for(let u=0;u<r.length;u++){const h=mt(r[u]);Fl(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=mt(u);if(Fl(h)){const f=r[u],_=o[h]=H(f)||U(f)?{type:f}:f;if(_){const m=Wl(Boolean,_.type),I=Wl(String,_.type);_[0]=m>-1,_[1]=I<0||m<I,(m>-1||X(_,"default"))&&l.push(h)}}}const c=[o,l];return s.set(t,c),c}function Fl(t){return t[0]!=="$"}function Bl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Hl(t,e){return Bl(t)===Bl(e)}function Wl(t,e){return H(e)?e.findIndex(n=>Hl(n,t)):U(e)&&Hl(e,t)?0:-1}const Qc=t=>t[0]==="_"||t==="$stable",So=t=>H(t)?t.map(gt):[gt(t)],Td=(t,e,n)=>{if(e._n)return e;const s=Kf((...i)=>So(e(...i)),n);return s._c=!1,s},Xc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Qc(i))continue;const r=t[i];if(U(r))e[i]=Td(i,r,s);else if(r!=null){const o=So(r);e[i]=()=>o}}},Jc=(t,e)=>{const n=So(e);t.slots.default=()=>n},Rd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),ei(e,"_",n)):Xc(e,t.slots={})}else t.slots={},e&&Jc(t,e);ei(t.slots,Mi,1)},xd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ce;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ke(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Xc(e,i)),o=e}else e&&(Jc(t,e),o={default:1});if(r)for(const l in i)!Qc(l)&&!(l in o)&&delete i[l]};function Zc(){return{app:null,config:{isNativeTag:Jh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nd=0;function Ad(t,e){return function(s,i=null){U(s)||(s=Object.assign({},s)),i!=null&&!Se(i)&&(i=null);const r=Zc(),o=new Set;let l=!1;const a=r.app={_uid:Nd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Yd,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(a,...u)):U(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=Oe(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Di(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Pr(t,e,n,s,i=!1){if(H(t)){t.forEach((f,_)=>Pr(f,e&&(H(e)?e[_]:e),n,s,i));return}if(Xs(s)&&!i)return;const r=s.shapeFlag&4?Di(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ce?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Ae(c)?(u[c]=null,X(h,c)&&(h[c]=null)):Ee(c)&&(c.value=null)),U(a))Ft(a,l,12,[o,u]);else{const f=Ae(a),_=Ee(a);if(f||_){const m=()=>{if(t.f){const I=f?u[a]:a.value;i?H(I)&&ho(I,r):H(I)?I.includes(r)||I.push(r):f?(u[a]=[r],X(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,X(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,He(m,n)):m()}}}const He=Zf;function Pd(t){return Od(t)}function Od(t,e){const n=rf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=lt,cloneNode:m,insertStaticContent:I}=t,T=(d,p,g,E=null,v=null,S=null,A=!1,w=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Jt(d,p)&&(E=M(d),Ye(d,v,S,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:C,ref:D,shapeFlag:P}=p;switch(C){case To:N(d,p,g,E);break;case at:F(d,p,g,E);break;case er:d==null&&$(p,g,E,A);break;case qe:$e(d,p,g,E,v,S,A,w,R);break;default:P&1?me(d,p,g,E,v,S,A,w,R):P&6?Be(d,p,g,E,v,S,A,w,R):(P&64||P&128)&&C.process(d,p,g,E,v,S,A,w,R,he)}D!=null&&v&&Pr(D,d&&d.ref,S,p||d,!p)},N=(d,p,g,E)=>{if(d==null)s(p.el=l(p.children),g,E);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},F=(d,p,g,E)=>{d==null?s(p.el=a(p.children||""),g,E):p.el=d.el},$=(d,p,g,E)=>{[d.el,d.anchor]=I(d.children,p,g,E,d.el,d.anchor)},K=({el:d,anchor:p},g,E)=>{let v;for(;d&&d!==p;)v=f(d),s(d,g,E),d=v;s(p,g,E)},J=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},me=(d,p,g,E,v,S,A,w,R)=>{A=A||p.type==="svg",d==null?Y(p,g,E,v,S,A,w,R):ne(d,p,v,S,A,w,R)},Y=(d,p,g,E,v,S,A,w)=>{let R,C;const{type:D,props:P,shapeFlag:L,transition:W,patchFlag:Z,dirs:oe}=d;if(d.el&&m!==void 0&&Z===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,S,P&&P.is,P),L&8?u(R,d.children):L&16&&Q(d.children,R,null,E,v,S&&D!=="foreignObject",A,w),oe&&Kt(d,null,E,"created"),P){for(const _e in P)_e!=="value"&&!Gs(_e)&&r(R,_e,null,P[_e],S,d.children,E,v,x);"value"in P&&r(R,"value",null,P.value),(C=P.onVnodeBeforeMount)&&pt(C,E,d)}O(R,d,d.scopeId,A,E)}oe&&Kt(d,null,E,"beforeMount");const le=(!v||v&&!v.pendingBranch)&&W&&!W.persisted;le&&W.beforeEnter(R),s(R,p,g),((C=P&&P.onVnodeMounted)||le||oe)&&He(()=>{C&&pt(C,E,d),le&&W.enter(R),oe&&Kt(d,null,E,"mounted")},v)},O=(d,p,g,E,v)=>{if(g&&_(d,g),E)for(let S=0;S<E.length;S++)_(d,E[S]);if(v){let S=v.subTree;if(p===S){const A=v.vnode;O(d,A,A.scopeId,A.slotScopeIds,v.parent)}}},Q=(d,p,g,E,v,S,A,w,R=0)=>{for(let C=R;C<d.length;C++){const D=d[C]=w?Pt(d[C]):gt(d[C]);T(null,D,p,g,E,v,S,A,w)}},ne=(d,p,g,E,v,S,A)=>{const w=p.el=d.el;let{patchFlag:R,dynamicChildren:C,dirs:D}=p;R|=d.patchFlag&16;const P=d.props||ce,L=p.props||ce;let W;g&&Gt(g,!1),(W=L.onVnodeBeforeUpdate)&&pt(W,g,p,d),D&&Kt(p,d,g,"beforeUpdate"),g&&Gt(g,!0);const Z=v&&p.type!=="foreignObject";if(C?ge(d.dynamicChildren,C,w,g,E,Z,S):A||je(d,p,w,null,g,E,Z,S,!1),R>0){if(R&16)Ce(w,p,P,L,g,E,v);else if(R&2&&P.class!==L.class&&r(w,"class",null,L.class,v),R&4&&r(w,"style",P.style,L.style,v),R&8){const oe=p.dynamicProps;for(let le=0;le<oe.length;le++){const _e=oe[le],tt=P[_e],mn=L[_e];(mn!==tt||_e==="value")&&r(w,_e,tt,mn,v,d.children,g,E,x)}}R&1&&d.children!==p.children&&u(w,p.children)}else!A&&C==null&&Ce(w,p,P,L,g,E,v);((W=L.onVnodeUpdated)||D)&&He(()=>{W&&pt(W,g,p,d),D&&Kt(p,d,g,"updated")},E)},ge=(d,p,g,E,v,S,A)=>{for(let w=0;w<p.length;w++){const R=d[w],C=p[w],D=R.el&&(R.type===qe||!Jt(R,C)||R.shapeFlag&70)?h(R.el):g;T(R,C,D,null,E,v,S,A,!0)}},Ce=(d,p,g,E,v,S,A)=>{if(g!==E){for(const w in E){if(Gs(w))continue;const R=E[w],C=g[w];R!==C&&w!=="value"&&r(d,w,C,R,A,p.children,v,S,x)}if(g!==ce)for(const w in g)!Gs(w)&&!(w in E)&&r(d,w,g[w],null,A,p.children,v,S,x);"value"in E&&r(d,"value",g.value,E.value)}},$e=(d,p,g,E,v,S,A,w,R)=>{const C=p.el=d?d.el:l(""),D=p.anchor=d?d.anchor:l("");let{patchFlag:P,dynamicChildren:L,slotScopeIds:W}=p;W&&(w=w?w.concat(W):W),d==null?(s(C,g,E),s(D,g,E),Q(p.children,g,D,v,S,A,w,R)):P>0&&P&64&&L&&d.dynamicChildren?(ge(d.dynamicChildren,L,g,v,S,A,w),(p.key!=null||v&&p===v.subTree)&&eu(d,p,!0)):je(d,p,g,D,v,S,A,w,R)},Be=(d,p,g,E,v,S,A,w,R)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?v.ctx.activate(p,g,E,A,R):be(p,g,E,v,S,A,R):we(d,p,R)},be=(d,p,g,E,v,S,A)=>{const w=d.component=$d(d,E,v);if(Oi(d)&&(w.ctx.renderer=he),jd(w),w.asyncDep){if(v&&v.registerDep(w,ue),!d.el){const R=w.subTree=Oe(at);F(null,R,p,g)}return}ue(w,d,p,g,v,S,A)},we=(d,p,g)=>{const E=p.component=d.component;if(Qf(d,p,g))if(E.asyncDep&&!E.asyncResolved){ie(E,p,g);return}else E.next=p,jf(E.update),E.update();else p.el=d.el,E.vnode=p},ue=(d,p,g,E,v,S,A)=>{const w=()=>{if(d.isMounted){let{next:D,bu:P,u:L,parent:W,vnode:Z}=d,oe=D,le;Gt(d,!1),D?(D.el=Z.el,ie(d,D,A)):D=Z,P&&Ys(P),(le=D.props&&D.props.onVnodeBeforeUpdate)&&pt(le,W,D,Z),Gt(d,!0);const _e=Ji(d),tt=d.subTree;d.subTree=_e,T(tt,_e,h(tt.el),M(tt),d,v,S),D.el=_e.el,oe===null&&Xf(d,_e.el),L&&He(L,v),(le=D.props&&D.props.onVnodeUpdated)&&He(()=>pt(le,W,D,Z),v)}else{let D;const{el:P,props:L}=p,{bm:W,m:Z,parent:oe}=d,le=Xs(p);if(Gt(d,!1),W&&Ys(W),!le&&(D=L&&L.onVnodeBeforeMount)&&pt(D,oe,p),Gt(d,!0),P&&j){const _e=()=>{d.subTree=Ji(d),j(P,d.subTree,d,v,null)};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=Ji(d);T(null,_e,g,E,d,v,S),p.el=_e.el}if(Z&&He(Z,v),!le&&(D=L&&L.onVnodeMounted)){const _e=p;He(()=>pt(D,oe,_e),v)}(p.shapeFlag&256||oe&&Xs(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&He(d.a,v),d.isMounted=!0,p=g=E=null}},R=d.effect=new go(w,()=>Ac(C),d.scope),C=d.update=()=>R.run();C.id=d.uid,Gt(d,!0),C()},ie=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,Sd(d,p.props,E,g),xd(d,p.children,g),jn(),Ai(void 0,d.update),Vn()},je=(d,p,g,E,v,S,A,w,R=!1)=>{const C=d&&d.children,D=d?d.shapeFlag:0,P=p.children,{patchFlag:L,shapeFlag:W}=p;if(L>0){if(L&128){vt(C,P,g,E,v,S,A,w,R);return}else if(L&256){gn(C,P,g,E,v,S,A,w,R);return}}W&8?(D&16&&x(C,v,S),P!==C&&u(g,P)):D&16?W&16?vt(C,P,g,E,v,S,A,w,R):x(C,v,S,!0):(D&8&&u(g,""),W&16&&Q(P,g,E,v,S,A,w,R))},gn=(d,p,g,E,v,S,A,w,R)=>{d=d||Tn,p=p||Tn;const C=d.length,D=p.length,P=Math.min(C,D);let L;for(L=0;L<P;L++){const W=p[L]=R?Pt(p[L]):gt(p[L]);T(d[L],W,g,null,v,S,A,w,R)}C>D?x(d,v,S,!0,!1,P):Q(p,g,E,v,S,A,w,R,P)},vt=(d,p,g,E,v,S,A,w,R)=>{let C=0;const D=p.length;let P=d.length-1,L=D-1;for(;C<=P&&C<=L;){const W=d[C],Z=p[C]=R?Pt(p[C]):gt(p[C]);if(Jt(W,Z))T(W,Z,g,null,v,S,A,w,R);else break;C++}for(;C<=P&&C<=L;){const W=d[P],Z=p[L]=R?Pt(p[L]):gt(p[L]);if(Jt(W,Z))T(W,Z,g,null,v,S,A,w,R);else break;P--,L--}if(C>P){if(C<=L){const W=L+1,Z=W<D?p[W].el:E;for(;C<=L;)T(null,p[C]=R?Pt(p[C]):gt(p[C]),g,Z,v,S,A,w,R),C++}}else if(C>L)for(;C<=P;)Ye(d[C],v,S,!0),C++;else{const W=C,Z=C,oe=new Map;for(C=Z;C<=L;C++){const Ve=p[C]=R?Pt(p[C]):gt(p[C]);Ve.key!=null&&oe.set(Ve.key,C)}let le,_e=0;const tt=L-Z+1;let mn=!1,El=0;const Zn=new Array(tt);for(C=0;C<tt;C++)Zn[C]=0;for(C=W;C<=P;C++){const Ve=d[C];if(_e>=tt){Ye(Ve,v,S,!0);continue}let dt;if(Ve.key!=null)dt=oe.get(Ve.key);else for(le=Z;le<=L;le++)if(Zn[le-Z]===0&&Jt(Ve,p[le])){dt=le;break}dt===void 0?Ye(Ve,v,S,!0):(Zn[dt-Z]=C+1,dt>=El?El=dt:mn=!0,T(Ve,p[dt],g,null,v,S,A,w,R),_e++)}const Cl=mn?kd(Zn):Tn;for(le=Cl.length-1,C=tt-1;C>=0;C--){const Ve=Z+C,dt=p[Ve],bl=Ve+1<D?p[Ve+1].el:E;Zn[C]===0?T(null,dt,g,bl,v,S,A,w,R):mn&&(le<0||C!==Cl[le]?ft(dt,g,bl,2):le--)}}},ft=(d,p,g,E,v=null)=>{const{el:S,type:A,transition:w,children:R,shapeFlag:C}=d;if(C&6){ft(d.component.subTree,p,g,E);return}if(C&128){d.suspense.move(p,g,E);return}if(C&64){A.move(d,p,g,he);return}if(A===qe){s(S,p,g);for(let P=0;P<R.length;P++)ft(R[P],p,g,E);s(d.anchor,p,g);return}if(A===er){K(d,p,g);return}if(E!==2&&C&1&&w)if(E===0)w.beforeEnter(S),s(S,p,g),He(()=>w.enter(S),v);else{const{leave:P,delayLeave:L,afterLeave:W}=w,Z=()=>s(S,p,g),oe=()=>{P(S,()=>{Z(),W&&W()})};L?L(S,Z,oe):oe()}else s(S,p,g)},Ye=(d,p,g,E=!1,v=!1)=>{const{type:S,props:A,ref:w,children:R,dynamicChildren:C,shapeFlag:D,patchFlag:P,dirs:L}=d;if(w!=null&&Pr(w,null,g,d,!0),D&256){p.ctx.deactivate(d);return}const W=D&1&&L,Z=!Xs(d);let oe;if(Z&&(oe=A&&A.onVnodeBeforeUnmount)&&pt(oe,p,d),D&6)k(d.component,g,E);else{if(D&128){d.suspense.unmount(g,E);return}W&&Kt(d,null,p,"beforeUnmount"),D&64?d.type.remove(d,p,g,v,he,E):C&&(S!==qe||P>0&&P&64)?x(C,p,g,!1,!0):(S===qe&&P&384||!v&&D&16)&&x(R,p,g),E&&Jn(d)}(Z&&(oe=A&&A.onVnodeUnmounted)||W)&&He(()=>{oe&&pt(oe,p,d),W&&Kt(d,null,p,"unmounted")},g)},Jn=d=>{const{type:p,el:g,anchor:E,transition:v}=d;if(p===qe){y(g,E);return}if(p===er){J(d);return}const S=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:w}=v,R=()=>A(g,S);w?w(d.el,S,R):R()}else S()},y=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},k=(d,p,g)=>{const{bum:E,scope:v,update:S,subTree:A,um:w}=d;E&&Ys(E),v.stop(),S&&(S.active=!1,Ye(A,d,p,g)),w&&He(w,p),He(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(d,p,g,E=!1,v=!1,S=0)=>{for(let A=S;A<d.length;A++)Ye(d[A],p,g,E,v)},M=d=>d.shapeFlag&6?M(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),re=(d,p,g)=>{d==null?p._vnode&&Ye(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,g),kc(),p._vnode=d},he={p:T,um:Ye,m:ft,r:Jn,mt:be,mc:Q,pc:je,pbc:ge,n:M,o:t};let V,j;return e&&([V,j]=e(he)),{render:re,hydrate:V,createApp:Ad(re,V)}}function Gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function eu(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Pt(i[r]),l.el=o.el),n||eu(o,l))}}function kd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Md=t=>t.__isTeleport,qe=Symbol(void 0),To=Symbol(void 0),at=Symbol(void 0),er=Symbol(void 0),cs=[];let it=null;function rt(t=!1){cs.push(it=t?null:[])}function Dd(){cs.pop(),it=cs[cs.length-1]||null}let Es=1;function Ul(t){Es+=t}function tu(t){return t.dynamicChildren=Es>0?it||Tn:null,Dd(),Es>0&&it&&it.push(t),t}function wt(t,e,n,s,i,r){return tu(ze(t,e,n,s,i,r,!0))}function nu(t,e,n,s,i){return tu(Oe(t,e,n,s,i,!0))}function Or(t){return t?t.__v_isVNode===!0:!1}function Jt(t,e){return t.type===e.type&&t.key===e.key}const Mi="__vInternal",su=({key:t})=>t!=null?t:null,Js=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ae(t)||Ee(t)||U(t)?{i:Xe,r:t,k:e,f:!!n}:t:null;function ze(t,e=null,n=null,s=0,i=null,r=t===qe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&su(e),ref:e&&Js(e),scopeId:Lc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Ro(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Ae(n)?8:16),Es>0&&!o&&it&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&it.push(a),a}const Oe=Ld;function Ld(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===gd)&&(t=at),Or(t)){const l=$t(t,e,!0);return n&&Ro(l,n),Es>0&&!r&&it&&(l.shapeFlag&6?it[it.indexOf(t)]=l:it.push(l)),l.patchFlag|=-2,l}if(Gd(t)&&(t=t.__vccOpts),e){e=Fd(e);let{class:l,style:a}=e;l&&!Ae(l)&&(e.class=wi(l)),Se(a)&&(Ic(a)&&!H(a)&&(a=ke({},a)),e.style=co(a))}const o=Ae(t)?1:Jf(t)?128:Md(t)?64:Se(t)?4:U(t)?2:0;return ze(t,e,n,s,i,o,r,!0)}function Fd(t){return t?Ic(t)||Mi in t?ke({},t):t:null}function $t(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Hd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&su(l),ref:e&&e.ref?n&&i?H(i)?i.concat(Js(e)):[i,Js(e)]:Js(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$t(t.ssContent),ssFallback:t.ssFallback&&$t(t.ssFallback),el:t.el,anchor:t.anchor}}function Bd(t=" ",e=0){return Oe(To,null,t,e)}function iu(t="",e=!1){return e?(rt(),nu(at,null,t)):Oe(at,null,t)}function gt(t){return t==null||typeof t=="boolean"?Oe(at):H(t)?Oe(qe,null,t.slice()):typeof t=="object"?Pt(t):Oe(To,null,String(t))}function Pt(t){return t.el===null||t.memo?t:$t(t)}function Ro(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ro(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Mi in e)?e._ctx=Xe:i===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),s&64?(n=16,e=[Bd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=wi([e.class,s.class]));else if(i==="style")e.style=co([e.style,s.style]);else if(Ii(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function pt(t,e,n,s=null){Ze(t,e,7,[n,s])}const Wd=Zc();let Ud=0;function $d(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Wd,r={uid:Ud++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new hc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yc(s,i),emitsOptions:Dc(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zf.bind(null,r),t.ce&&t.ce(r),r}let xe=null;const xo=()=>xe||Xe,kn=t=>{xe=t,t.scope.on()},sn=()=>{xe&&xe.scope.off(),xe=null};function ru(t){return t.vnode.shapeFlag&4}let Cs=!1;function jd(t,e=!1){Cs=e;const{props:n,children:s}=t.vnode,i=ru(t);Id(t,n,i,e),Rd(t,s);const r=i?Vd(t,e):void 0;return Cs=!1,r}function Vd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=On(new Proxy(t.ctx,yd));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?zd(t):null;kn(t),jn();const r=Ft(s,t,0,[t.props,i]);if(Vn(),sn(),ac(r)){if(r.then(sn,sn),e)return r.then(o=>{$l(t,o,e)}).catch(o=>{Ni(o,t,0)});t.asyncDep=r}else $l(t,r,e)}else ou(t,e)}function $l(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=xc(e)),ou(t,n)}let jl;function ou(t,e,n){const s=t.type;if(!t.render){if(!e&&jl&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ke(ke({isCustomElement:r,delimiters:l},o),a);s.render=jl(i,c)}}t.render=s.render||lt}kn(t),jn(),vd(t),Vn(),sn()}function qd(t){return new Proxy(t.attrs,{get(e,n){return Ge(t,"get","$attrs"),e[n]}})}function zd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=qd(t))},slots:t.slots,emit:t.emit,expose:e}}function Di(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(xc(On(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)}}))}function Kd(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function Gd(t){return U(t)&&"__vccOpts"in t}const We=(t,e)=>Wf(t,e,Cs);function lu(t,e,n){const s=arguments.length;return s===2?Se(e)&&!H(e)?Or(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Or(n)&&(n=[n]),Oe(t,e,n))}const Yd="3.2.37",Qd="http://www.w3.org/2000/svg",Zt=typeof document<"u"?document:null,Vl=Zt&&Zt.createElement("template"),Xd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Zt.createElementNS(Qd,t):Zt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zt.createTextNode(t),createComment:t=>Zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Vl.innerHTML=s?`<svg>${t}</svg>`:t;const l=Vl.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zd(t,e,n){const s=t.style,i=Ae(n);if(n&&!i){for(const r in n)kr(s,r,n[r]);if(e&&!Ae(e))for(const r in e)n[r]==null&&kr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ql=/\s*!important$/;function kr(t,e,n){if(H(n))n.forEach(s=>kr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ep(t,e);ql.test(n)?t.setProperty(fn(s),n.replace(ql,""),"important"):t[s]=n}}const zl=["Webkit","Moz","ms"],tr={};function ep(t,e){const n=tr[e];if(n)return n;let s=mt(e);if(s!=="filter"&&s in t)return tr[e]=s;s=Ri(s);for(let i=0;i<zl.length;i++){const r=zl[i]+s;if(r in t)return tr[e]=r}return e}const Kl="http://www.w3.org/1999/xlink";function tp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Kl,e.slice(6,e.length)):t.setAttributeNS(Kl,e,n);else{const r=Gh(e);n==null||r&&!rc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function np(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=rc(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[au,sp]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Mr=0;const ip=Promise.resolve(),rp=()=>{Mr=0},op=()=>Mr||(ip.then(rp),Mr=au());function wn(t,e,n,s){t.addEventListener(e,n,s)}function lp(t,e,n,s){t.removeEventListener(e,n,s)}function ap(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=cp(e);if(s){const c=r[e]=up(s,i);wn(t,l,c,a)}else o&&(lp(t,l,o,a),r[e]=void 0)}}const Gl=/(?:Once|Passive|Capture)$/;function cp(t){let e;if(Gl.test(t)){e={};let n;for(;n=t.match(Gl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[fn(t.slice(2)),e]}function up(t,e){const n=s=>{const i=s.timeStamp||au();(sp||i>=n.attached-1)&&Ze(hp(s,n.value),e,5,[s])};return n.value=t,n.attached=op(),n}function hp(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Yl=/^on[a-z]/,fp=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Jd(t,s,i):e==="style"?Zd(t,n,s):Ii(e)?uo(e)||ap(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dp(t,e,s,i))?np(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),tp(t,e,s,i))};function dp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Yl.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Yl.test(e)&&Ae(n)?!1:e in t}const pp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};sd.props;const Ql=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Ys(e,n):e};function _p(t){t.target.composing=!0}function Xl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gp={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ql(i);const r=s||i.props&&i.props.type==="number";wn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=mr(l)),t._assign(l)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",_p),wn(t,"compositionend",Xl),wn(t,"change",Xl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ql(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&mr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},mp=["ctrl","shift","alt","meta"],yp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>mp.some(n=>t[`${n}Key`]&&!e.includes(n))},ri=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=yp[e[i]];if(r&&r(n,e))return}return t(n,...s)},vp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ep=(t,e)=>n=>{if(!("key"in n))return;const s=fn(n.key);if(e.some(i=>i===s||vp[i]===s))return t(n)},Cp=ke({patchProp:fp},Xd);let Jl;function bp(){return Jl||(Jl=Pd(Cp))}const wp=(...t)=>{const e=bp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ip(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ip(t){return Ae(t)?document.querySelector(t):t}var Sp=!1;/*!
  * pinia v2.0.17
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let cu;const Li=t=>cu=t,uu=Symbol();function Dr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var us;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(us||(us={}));function Tp(){const t=fc(!0),e=t.run(()=>xn({}));let n=[],s=[];const i=On({install(r){Li(i),i._a=r,r.provide(uu,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Sp?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const hu=()=>{};function Zl(t,e,n,s=hu){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&xo()&&Io(i),i}function yn(t,...e){t.slice().forEach(n=>{n(...e)})}function Lr(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Dr(i)&&Dr(s)&&t.hasOwnProperty(n)&&!Ee(s)&&!Dt(s)?t[n]=Lr(i,s):t[n]=s}return t}const Rp=Symbol();function xp(t){return!Dr(t)||!t.hasOwnProperty(Rp)}const{assign:Ct}=Object;function Np(t){return!!(Ee(t)&&t.effect)}function Ap(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Lf(n.state.value[t]);return Ct(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=On(We(()=>{Li(n);const _=n._s.get(t);return o[f].call(_,_)})),h),{}))}return a=fu(t,c,e,n,s,!0),a.$reset=function(){const h=i?i():{};this.$patch(f=>{Ct(f,h)})},a}function fu(t,e,n={},s,i,r){let o;const l=Ct({actions:{}},n),a={deep:!0};let c,u,h=On([]),f=On([]),_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),xn({});let I;function T(Y){let O;c=u=!1,typeof Y=="function"?(Y(s.state.value[t]),O={type:us.patchFunction,storeId:t,events:_}):(Lr(s.state.value[t],Y),O={type:us.patchObject,payload:Y,storeId:t,events:_});const Q=I=Symbol();wo().then(()=>{I===Q&&(c=!0)}),u=!0,yn(h,O,s.state.value[t])}const N=hu;function F(){o.stop(),h=[],f=[],s._s.delete(t)}function $(Y,O){return function(){Li(s);const Q=Array.from(arguments),ne=[],ge=[];function Ce(be){ne.push(be)}function $e(be){ge.push(be)}yn(f,{args:Q,name:Y,store:J,after:Ce,onError:$e});let Be;try{Be=O.apply(this&&this.$id===t?this:J,Q)}catch(be){throw yn(ge,be),be}return Be instanceof Promise?Be.then(be=>(yn(ne,be),be)).catch(be=>(yn(ge,be),Promise.reject(be))):(yn(ne,Be),Be)}}const K={_p:s,$id:t,$onAction:Zl.bind(null,f),$patch:T,$reset:N,$subscribe(Y,O={}){const Q=Zl(h,Y,O.detached,()=>ne()),ne=o.run(()=>Nn(()=>s.state.value[t],ge=>{(O.flush==="sync"?u:c)&&Y({storeId:t,type:us.direct,events:_},ge)},Ct({},a,O)));return Q},$dispose:F},J=qn(Ct({},K));s._s.set(t,J);const me=s._e.run(()=>(o=fc(),o.run(()=>e())));for(const Y in me){const O=me[Y];if(Ee(O)&&!Np(O)||Dt(O))r||(m&&xp(O)&&(Ee(O)?O.value=m[Y]:Lr(O,m[Y])),s.state.value[t][Y]=O);else if(typeof O=="function"){const Q=$(Y,O);me[Y]=Q,l.actions[Y]=O}}return Ct(J,me),Ct(te(J),me),Object.defineProperty(J,"$state",{get:()=>s.state.value[t],set:Y=>{T(O=>{Ct(O,Y)})}}),s._p.forEach(Y=>{Ct(J,o.run(()=>Y({store:J,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(J.$state,m),c=!0,u=!0,J}function Pp(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,a){const c=xo();return l=l||c&&et(uu),l&&Li(l),l=cu,l._s.has(s)||(r?fu(s,e,i,l):Ap(s,i,l)),l._s.get(s)}return o.$id=s,o}const Op="modulepreload",kp=function(t){return"/vue-link-shortener/"+t},ea={},Mp=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=kp(i),i in ea)return;ea[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":Op,r||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),r)return new Promise((a,c)=>{l.addEventListener("load",a),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const In=typeof window<"u";function Dp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function nr(t,e){const n={};for(const s in e){const i=e[s];n[s]=ut(i)?i.map(t):t(i)}return n}const hs=()=>{},ut=Array.isArray,Lp=/\/$/,Fp=t=>t.replace(Lp,"");function sr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Up(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Bp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ta(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Mn(e.matched[s],n.matched[i])&&du(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Mn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function du(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Wp(t[n],e[n]))return!1;return!0}function Wp(t,e){return ut(t)?na(t,e):ut(e)?na(e,t):t===e}function na(t,e){return ut(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Up(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var bs;(function(t){t.pop="pop",t.push="push"})(bs||(bs={}));var fs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(fs||(fs={}));function $p(t){if(!t)if(In){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fp(t)}const jp=/^[^#]+#/;function Vp(t,e){return t.replace(jp,"#")+e}function qp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Fi=()=>({left:window.pageXOffset,top:window.pageYOffset});function zp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=qp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function sa(t,e){return(history.state?history.state.position-e:-1)+t}const Fr=new Map;function Kp(t,e){Fr.set(t,e)}function Gp(t){const e=Fr.get(t);return Fr.delete(t),e}let Yp=()=>location.protocol+"//"+location.host;function pu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),ta(a,"")}return ta(n,t)+s+i}function Qp(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=pu(t,location),m=n.value,I=e.value;let T=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}T=I?f.position-I.position:0}else s(_);i.forEach(N=>{N(n.value,m,{delta:T,type:bs.pop,direction:T?T>0?fs.forward:fs.back:fs.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;!f.state||f.replaceState(ae({},f.state,{scroll:Fi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:h}}function ia(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Fi():null}}function Xp(t){const{history:e,location:n}=window,s={value:pu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Yp()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=ae({},e.state,ia(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=ae({},i.value,e.state,{forward:a,scroll:Fi()});r(u.current,u,!0);const h=ae({},ia(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function Jp(t){t=$p(t);const e=Xp(t),n=Qp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ae({location:"",base:t,go:s,createHref:Vp.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Zp(t){return typeof t=="string"||t&&typeof t=="object"}function _u(t){return typeof t=="string"||typeof t=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gu=Symbol("");var ra;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ra||(ra={}));function Dn(t,e){return ae(new Error,{type:t,[gu]:!0},e)}function Et(t,e){return t instanceof Error&&gu in t&&(e==null||!!(t.type&e))}const oa="[^/]+?",e_={sensitive:!1,strict:!1,start:!0,end:!0},t_=/[.+*?^${}()[\]/\\]/g;function n_(t,e){const n=ae({},e_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(t_,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:I,optional:T,regexp:N}=f;r.push({name:m,repeatable:I,optional:T});const F=N||oa;if(F!==oa){_+=10;try{new RegExp(`(${F})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${m}" (${F}): `+K.message)}}let $=I?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||($=T&&c.length<2?`(?:/${$})`:"/"+$),T&&($+="?"),i+=$,_+=20,T&&(_+=-8),I&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:I,optional:T}=_,N=m in c?c[m]:"";if(ut(N)&&!I)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const F=ut(N)?N.join("/"):N;if(!F)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=F}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function s_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function i_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=s_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(la(s))return 1;if(la(i))return-1}return i.length-s.length}function la(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const r_={type:0,value:""},o_=/[a-zA-Z0-9_]/;function l_(t){if(!t)return[[]];if(t==="/")return[[r_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:o_.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function a_(t,e,n){const s=n_(l_(t.path),n),i=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function c_(t,e){const n=[],s=new Map;e=ca({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=h_(u);m.aliasOf=f&&f.record;const I=ca(e,u),T=[m];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of $)T.push(ae({},m,{components:f?f.record.components:m.components,path:K,aliasOf:f?f.record:m}))}let N,F;for(const $ of T){const{path:K}=$;if(h&&K[0]!=="/"){const J=h.record.path,me=J[J.length-1]==="/"?"":"/";$.path=h.record.path+(K&&me+K)}if(N=a_($,h,I),f?f.alias.push(N):(F=F||N,F!==N&&F.alias.push(N),_&&u.name&&!aa(N)&&o(u.name)),m.children){const J=m.children;for(let me=0;me<J.length;me++)r(J[me],N,f&&f.children[me])}f=f||N,a(N)}return F?()=>{o(F)}:hs}function o(u){if(_u(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&i_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!mu(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!aa(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},m,I;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Dn(1,{location:u});I=f.record.name,_=ae(u_(h.params,f.keys.filter(F=>!F.optional).map(F=>F.name)),u.params),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(F=>F.re.test(m)),f&&(_=f.parse(m),I=f.record.name);else{if(f=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!f)throw Dn(1,{location:u,currentLocation:h});I=f.record.name,_=ae({},h.params,u.params),m=f.stringify(_)}const T=[];let N=f;for(;N;)T.unshift(N.record),N=N.parent;return{name:I,path:m,params:_,matched:T,meta:d_(T)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function u_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function h_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:f_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function f_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function aa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function d_(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function ca(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function mu(t,e){return e.children.some(n=>n===t||mu(t,n))}const yu=/#/g,p_=/&/g,__=/\//g,g_=/=/g,m_=/\?/g,vu=/\+/g,y_=/%5B/g,v_=/%5D/g,Eu=/%5E/g,E_=/%60/g,Cu=/%7B/g,C_=/%7C/g,bu=/%7D/g,b_=/%20/g;function No(t){return encodeURI(""+t).replace(C_,"|").replace(y_,"[").replace(v_,"]")}function w_(t){return No(t).replace(Cu,"{").replace(bu,"}").replace(Eu,"^")}function Br(t){return No(t).replace(vu,"%2B").replace(b_,"+").replace(yu,"%23").replace(p_,"%26").replace(E_,"`").replace(Cu,"{").replace(bu,"}").replace(Eu,"^")}function I_(t){return Br(t).replace(g_,"%3D")}function S_(t){return No(t).replace(yu,"%23").replace(m_,"%3F")}function T_(t){return t==null?"":S_(t).replace(__,"%2F")}function oi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function R_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(vu," "),o=r.indexOf("="),l=oi(o<0?r:r.slice(0,o)),a=o<0?null:oi(r.slice(o+1));if(l in e){let c=e[l];ut(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function ua(t){let e="";for(let n in t){const s=t[n];if(n=I_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ut(s)?s.map(r=>r&&Br(r)):[s&&Br(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function x_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ut(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const N_=Symbol(""),ha=Symbol(""),Ao=Symbol(""),Po=Symbol(""),Hr=Symbol("");function es(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Ot(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(Dn(4,{from:n,to:e})):h instanceof Error?l(h):Zp(h)?l(Dn(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function ir(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(A_(l)){const c=(l.__vccOpts||l)[e];c&&i.push(Ot(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Dp(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Ot(f,n,s,r,o)()}))}}return i}function A_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fa(t){const e=et(Ao),n=et(Po),s=We(()=>e.resolve(Lt(t.to))),i=We(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Mn.bind(null,u));if(f>-1)return f;const _=da(a[c-2]);return c>1&&da(u)===_&&h[h.length-1].path!==_?h.findIndex(Mn.bind(null,a[c-2])):f}),r=We(()=>i.value>-1&&M_(n.params,s.value.params)),o=We(()=>i.value>-1&&i.value===n.matched.length-1&&du(n.params,s.value.params));function l(a={}){return k_(a)?e[Lt(t.replace)?"replace":"push"](Lt(t.to)).catch(hs):Promise.resolve()}return{route:s,href:We(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const P_=zn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fa,setup(t,{slots:e}){const n=qn(fa(t)),{options:s}=et(Ao),i=We(()=>({[pa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[pa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:lu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),O_=P_;function k_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function M_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ut(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function da(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pa=(t,e,n)=>t!=null?t:e!=null?e:n,D_=zn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=et(Hr),i=We(()=>t.route||s.value),r=et(ha,0),o=We(()=>{let c=Lt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=We(()=>i.value.matched[o.value]);Qs(ha,We(()=>o.value+1)),Qs(N_,l),Qs(Hr,i);const a=xn();return Nn(()=>[a.value,l.value,t.name],([c,u,h],[f,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Mn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(I=>I(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return _a(n.default,{Component:f,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,T=lu(f,ae({},m,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return _a(n.default,{Component:T,route:c})||T}}});function _a(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const L_=D_;function F_(t){const e=c_(t.routes,t),n=t.parseQuery||R_,s=t.stringifyQuery||ua,i=t.history,r=es(),o=es(),l=es(),a=kf(Nt);let c=Nt;In&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=nr.bind(null,y=>""+y),h=nr.bind(null,T_),f=nr.bind(null,oi);function _(y,k){let x,M;return _u(y)?(x=e.getRecordMatcher(y),M=k):M=y,e.addRoute(M,x)}function m(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function I(){return e.getRoutes().map(y=>y.record)}function T(y){return!!e.getRecordMatcher(y)}function N(y,k){if(k=ae({},k||a.value),typeof y=="string"){const j=sr(n,y,k.path),d=e.resolve({path:j.path},k),p=i.createHref(j.fullPath);return ae(j,d,{params:f(d.params),hash:oi(j.hash),redirectedFrom:void 0,href:p})}let x;if("path"in y)x=ae({},y,{path:sr(n,y.path,k.path).path});else{const j=ae({},y.params);for(const d in j)j[d]==null&&delete j[d];x=ae({},y,{params:h(y.params)}),k.params=h(k.params)}const M=e.resolve(x,k),re=y.hash||"";M.params=u(f(M.params));const he=Bp(s,ae({},y,{hash:w_(re),path:M.path})),V=i.createHref(he);return ae({fullPath:he,hash:re,query:s===ua?x_(y.query):y.query||{}},M,{redirectedFrom:void 0,href:V})}function F(y){return typeof y=="string"?sr(n,y,a.value.path):ae({},y)}function $(y,k){if(c!==y)return Dn(8,{from:k,to:y})}function K(y){return Y(y)}function J(y){return K(ae(F(y),{replace:!0}))}function me(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:x}=k;let M=typeof x=="function"?x(y):x;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=F(M):{path:M},M.params={}),ae({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function Y(y,k){const x=c=N(y),M=a.value,re=y.state,he=y.force,V=y.replace===!0,j=me(x);if(j)return Y(ae(F(j),{state:re,force:he,replace:V}),k||x);const d=x;d.redirectedFrom=k;let p;return!he&&Hp(s,M,x)&&(p=Dn(16,{to:d,from:M}),gn(M,M,!0,!1)),(p?Promise.resolve(p):Q(d,M)).catch(g=>Et(g)?Et(g,2)?g:je(g):ue(g,d,M)).then(g=>{if(g){if(Et(g,2))return Y(ae({replace:V},F(g.to),{state:re,force:he}),k||d)}else g=ge(d,M,!0,V,re);return ne(d,M,g),g})}function O(y,k){const x=$(y,k);return x?Promise.reject(x):Promise.resolve()}function Q(y,k){let x;const[M,re,he]=B_(y,k);x=ir(M.reverse(),"beforeRouteLeave",y,k);for(const j of M)j.leaveGuards.forEach(d=>{x.push(Ot(d,y,k))});const V=O.bind(null,y,k);return x.push(V),vn(x).then(()=>{x=[];for(const j of r.list())x.push(Ot(j,y,k));return x.push(V),vn(x)}).then(()=>{x=ir(re,"beforeRouteUpdate",y,k);for(const j of re)j.updateGuards.forEach(d=>{x.push(Ot(d,y,k))});return x.push(V),vn(x)}).then(()=>{x=[];for(const j of y.matched)if(j.beforeEnter&&!k.matched.includes(j))if(ut(j.beforeEnter))for(const d of j.beforeEnter)x.push(Ot(d,y,k));else x.push(Ot(j.beforeEnter,y,k));return x.push(V),vn(x)}).then(()=>(y.matched.forEach(j=>j.enterCallbacks={}),x=ir(he,"beforeRouteEnter",y,k),x.push(V),vn(x))).then(()=>{x=[];for(const j of o.list())x.push(Ot(j,y,k));return x.push(V),vn(x)}).catch(j=>Et(j,8)?j:Promise.reject(j))}function ne(y,k,x){for(const M of l.list())M(y,k,x)}function ge(y,k,x,M,re){const he=$(y,k);if(he)return he;const V=k===Nt,j=In?history.state:{};x&&(M||V?i.replace(y.fullPath,ae({scroll:V&&j&&j.scroll},re)):i.push(y.fullPath,re)),a.value=y,gn(y,k,x,V),je()}let Ce;function $e(){Ce||(Ce=i.listen((y,k,x)=>{if(!Jn.listening)return;const M=N(y),re=me(M);if(re){Y(ae(re,{replace:!0}),M).catch(hs);return}c=M;const he=a.value;In&&Kp(sa(he.fullPath,x.delta),Fi()),Q(M,he).catch(V=>Et(V,12)?V:Et(V,2)?(Y(V.to,M).then(j=>{Et(j,20)&&!x.delta&&x.type===bs.pop&&i.go(-1,!1)}).catch(hs),Promise.reject()):(x.delta&&i.go(-x.delta,!1),ue(V,M,he))).then(V=>{V=V||ge(M,he,!1),V&&(x.delta&&!Et(V,8)?i.go(-x.delta,!1):x.type===bs.pop&&Et(V,20)&&i.go(-1,!1)),ne(M,he,V)}).catch(hs)}))}let Be=es(),be=es(),we;function ue(y,k,x){je(y);const M=be.list();return M.length?M.forEach(re=>re(y,k,x)):console.error(y),Promise.reject(y)}function ie(){return we&&a.value!==Nt?Promise.resolve():new Promise((y,k)=>{Be.add([y,k])})}function je(y){return we||(we=!y,$e(),Be.list().forEach(([k,x])=>y?x(y):k()),Be.reset()),y}function gn(y,k,x,M){const{scrollBehavior:re}=t;if(!In||!re)return Promise.resolve();const he=!x&&Gp(sa(y.fullPath,0))||(M||!x)&&history.state&&history.state.scroll||null;return wo().then(()=>re(y,k,he)).then(V=>V&&zp(V)).catch(V=>ue(V,y,k))}const vt=y=>i.go(y);let ft;const Ye=new Set,Jn={currentRoute:a,listening:!0,addRoute:_,removeRoute:m,hasRoute:T,getRoutes:I,resolve:N,options:t,push:K,replace:J,go:vt,back:()=>vt(-1),forward:()=>vt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:be.add,isReady:ie,install(y){const k=this;y.component("RouterLink",O_),y.component("RouterView",L_),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Lt(a)}),In&&!ft&&a.value===Nt&&(ft=!0,K(i.location).catch(re=>{}));const x={};for(const re in Nt)x[re]=We(()=>a.value[re]);y.provide(Ao,k),y.provide(Po,qn(x)),y.provide(Hr,a);const M=y.unmount;Ye.add(y),y.unmount=function(){Ye.delete(y),Ye.size<1&&(c=Nt,Ce&&Ce(),Ce=null,a.value=Nt,ft=!1,we=!1),M()}}};return Jn}function vn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function B_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Mn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Mn(c,a))||i.push(a))}return[n,s,i]}function _C(){return et(Po)}const Bi=Pp({id:"shortStore",state:()=>({links:[],isLoading:!1}),getters:{getLinks:t=>(localStorage.getItem("short_links")&&(t.links=JSON.parse(localStorage.getItem("short_links"))),t.links)},actions:{setLinks(t){t._id=Date.now(),t.copied=!1,this.links.push(t),localStorage.setItem("short_links",JSON.stringify(this.links))},deleteLink(t){this.links=this.links.filter(e=>e!==t),localStorage.setItem("short_links",JSON.stringify(this.links))},setLableCopy(t=null){this.links.forEach(e=>{e.copied=e===t})}}});let H_=t=>crypto.getRandomValues(new Uint8Array(t)),W_=(t,e,n)=>{let s=(2<<Math.log(t.length-1)/Math.LN2)-1,i=-~(1.6*s*e/t.length);return(r=e)=>{let o="";for(;;){let l=n(i),a=i;for(;a--;)if(o+=t[l[a]&s]||"",o.length===r)return o}}},U_=(t,e=21)=>W_(t,e,H_);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=function(t,e){if(!t)throw Kn(e)},Kn=function(t){return new Error("Firebase Database ("+wu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Iu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Su=function(t){const e=Iu(t);return Oo.encodeByteArray(e,!0)},Tu=function(t){return Su(t).replace(/\./g,"")},ga=function(t){try{return Oo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){return Ru(void 0,t)}function Ru(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!V_(n)||(t[n]=Ru(t[n],e[n]));return t}function V_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q_())}function z_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nu(){return wu.NODE_ADMIN===!0}function K_(){return typeof indexedDB=="object"}function G_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="FirebaseError";class ko extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Y_,Object.setPrototypeOf(this,ko.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Au.prototype.create)}}class Au{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Q_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ko(i,l,s)}}function Q_(t,e){return t.replace(X_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const X_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){return JSON.parse(t)}function Ne(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ws(ga(r[0])||""),n=ws(ga(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},J_=function(t){const e=Pu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Z_=function(t){const e=Pu(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ln(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ma(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function li(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ya(r)&&ya(o)){if(!Wr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ya(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ms(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){return t&&t._delegate?t._delegate:t}class Is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ks;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rg(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ig(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ig(t){return t===Qt?void 0:t}function rg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const lg={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},ag=de.INFO,cg={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},ug=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=cg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ou{constructor(e){this.name=e,this._logLevel=ag,this._logHandler=ug,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const hg=(t,e)=>e.some(n=>t instanceof n);let va,Ea;function fg(){return va||(va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dg(){return Ea||(Ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ku=new WeakMap,Ur=new WeakMap,Mu=new WeakMap,rr=new WeakMap,Mo=new WeakMap;function pg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Bt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ku.set(n,t)}).catch(()=>{}),Mo.set(e,t),e}function _g(t){if(Ur.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ur.set(t,e)}let $r={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ur.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gg(t){$r=t($r)}function mg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(or(this),e,...n);return Mu.set(s,e.sort?e.sort():[e]),Bt(s)}:dg().includes(t)?function(...e){return t.apply(or(this),e),Bt(ku.get(this))}:function(...e){return Bt(t.apply(or(this),e))}}function yg(t){return typeof t=="function"?mg(t):(t instanceof IDBTransaction&&_g(t),hg(t,fg())?new Proxy(t,$r):t)}function Bt(t){if(t instanceof IDBRequest)return pg(t);if(rr.has(t))return rr.get(t);const e=yg(t);return e!==t&&(rr.set(t,e),Mo.set(e,t)),e}const or=t=>Mo.get(t);function vg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Bt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Bt(o.result),a.oldVersion,a.newVersion,Bt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Eg=["get","getKey","getAll","getAllKeys","count"],Cg=["put","add","delete","clear"],lr=new Map;function Ca(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lr.get(e))return lr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Cg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Eg.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return lr.set(e,r),r}gg(t=>({...t,get:(e,n,s)=>Ca(e,n)||t.get(e,n,s),has:(e,n)=>!!Ca(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jr="@firebase/app",ba="0.7.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Ou("@firebase/app"),Ig="@firebase/app-compat",Sg="@firebase/analytics-compat",Tg="@firebase/analytics",Rg="@firebase/app-check-compat",xg="@firebase/app-check",Ng="@firebase/auth",Ag="@firebase/auth-compat",Pg="@firebase/database",Og="@firebase/database-compat",kg="@firebase/functions",Mg="@firebase/functions-compat",Dg="@firebase/installations",Lg="@firebase/installations-compat",Fg="@firebase/messaging",Bg="@firebase/messaging-compat",Hg="@firebase/performance",Wg="@firebase/performance-compat",Ug="@firebase/remote-config",$g="@firebase/remote-config-compat",jg="@firebase/storage",Vg="@firebase/storage-compat",qg="@firebase/firestore",zg="@firebase/firestore-compat",Kg="firebase",Gg="9.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="[DEFAULT]",Yg={[jr]:"fire-core",[Ig]:"fire-core-compat",[Tg]:"fire-analytics",[Sg]:"fire-analytics-compat",[xg]:"fire-app-check",[Rg]:"fire-app-check-compat",[Ng]:"fire-auth",[Ag]:"fire-auth-compat",[Pg]:"fire-rtdb",[Og]:"fire-rtdb-compat",[kg]:"fire-fn",[Mg]:"fire-fn-compat",[Dg]:"fire-iid",[Lg]:"fire-iid-compat",[Fg]:"fire-fcm",[Bg]:"fire-fcm-compat",[Hg]:"fire-perf",[Wg]:"fire-perf-compat",[Ug]:"fire-rc",[$g]:"fire-rc-compat",[jg]:"fire-gcs",[Vg]:"fire-gcs-compat",[qg]:"fire-fst",[zg]:"fire-fst-compat","fire-js":"fire-js",[Kg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Map,Vr=new Map;function Qg(t,e){try{t.container.addComponent(e)}catch(n){Do.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(Vr.has(e))return Do.debug(`There were multiple attempts to register component ${e}.`),!1;Vr.set(e,t);for(const n of ai.values())Qg(n,t);return!0}function Xg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ln=new Au("app","Firebase",Jg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=Gg;function tm(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Du,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw ln.create("bad-app-name",{appName:String(s)});const i=ai.get(s);if(i){if(Wr(t,i.options)&&Wr(n,i.config))return i;throw ln.create("duplicate-app",{appName:s})}const r=new og(s);for(const l of Vr.values())r.addComponent(l);const o=new Zg(t,n,r);return ai.set(s,o),o}function nm(t=Du){const e=ai.get(t);if(!e)throw ln.create("no-app",{appName:t});return e}function An(t,e,n){var s;let i=(s=Yg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Do.warn(l.join(" "));return}ci(new Is(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="firebase-heartbeat-database",im=1,Ss="firebase-heartbeat-store";let ar=null;function Lu(){return ar||(ar=vg(sm,im,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ss)}}}).catch(t=>{throw ln.create("storage-open",{originalErrorMessage:t.message})})),ar}async function rm(t){var e;try{return(await Lu()).transaction(Ss).objectStore(Ss).get(Fu(t))}catch(n){throw ln.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function wa(t,e){var n;try{const i=(await Lu()).transaction(Ss,"readwrite");return await i.objectStore(Ss).put(e,Fu(t)),i.done}catch(s){throw ln.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Fu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=1024,lm=30*24*60*60*1e3;class am{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new um(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ia();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=lm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ia(),{heartbeatsToSend:n,unsentEntries:s}=cm(this._heartbeatsCache.heartbeats),i=Tu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ia(){return new Date().toISOString().substring(0,10)}function cm(t,e=om){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sa(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class um{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K_()?G_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sa(t){return Tu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t){ci(new Is("platform-logger",e=>new bg(e),"PRIVATE")),ci(new Is("heartbeat",e=>new am(e),"PRIVATE")),An(jr,ba,t),An(jr,ba,"esm2017"),An("fire-js","")}hm("");var fm="firebase",dm="9.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(fm,dm,"app");const Ta="@firebase/database",Ra="0.13.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu="";function pm(t){Bu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _m(e)}}catch{}return new gm},tn=Hu("localStorage"),qr=Hu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Ou("@firebase/database"),mm=function(){let t=1;return function(){return t++}}(),Wu=function(t){const e=ng(t),n=new tg;n.update(e);const s=n.digest();return Oo.encodeByteArray(s)},Ds=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ds.apply(null,s):typeof s=="object"?e+=Ne(s):e+=s,e+=" "}return e};let rn=null,xa=!0;const ym=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Pn.logLevel=de.VERBOSE,rn=Pn.log.bind(Pn),e&&qr.set("logging_enabled",!0)):typeof t=="function"?rn=t:(rn=null,qr.remove("logging_enabled"))},Pe=function(...t){if(xa===!0&&(xa=!1,rn===null&&qr.get("logging_enabled")===!0&&ym(!0)),rn){const e=Ds.apply(null,t);rn(e)}},Ls=function(t){return function(...e){Pe(t,...e)}},zr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ds(...t);Pn.error(e)},an=function(...t){const e=`FIREBASE FATAL ERROR: ${Ds(...t)}`;throw Pn.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Ds(...t);Pn.warn(e)},vm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Em=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},cn="[MIN_NAME]",jt="[MAX_NAME]",pn=function(t,e){if(t===e)return 0;if(t===cn||e===jt)return-1;if(e===cn||t===jt)return 1;{const n=Na(t),s=Na(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Cm=function(t,e){return t===e?0:t<e?-1:1},ts=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ne(e))},Fo=function(t){if(typeof t!="object"||t===null)return Ne(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ne(e[s]),n+=":",n+=Fo(t[e[s]]);return n+="}",n},Uu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $u=function(t){b(!Lo(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},bm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Im(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Sm=new RegExp("^-?(0*)\\d{1,10}$"),Tm=-2147483648,Rm=2147483647,Na=function(t){if(Sm.test(t)){const e=Number(t);if(e>=Tm&&e<=Rm)return e}return null},Gn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},xm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ds=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class Kr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="5",ju="v",Vu="s",qu="r",zu="f",Ku=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gu="ls",Yu="p",Gr="ac",Qu="websocket",Xu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Om(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ju(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Qu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Om(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(){this.counters_={}}incrementCounter(e,n=1){yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return j_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr={},ur={};function Ho(t){const e=t.toString();return cr[e]||(cr[e]=new km),cr[e]}function Mm(t,e){const n=t.toString();return ur[n]||(ur[n]=e()),ur[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Gn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="start",Lm="close",Fm="pLPCommand",Bm="pRTLPCB",Zu="id",eh="pw",th="ser",Hm="cb",Wm="seg",Um="ts",$m="d",jm="dframe",nh=1870,sh=30,Vm=nh-sh,qm=25e3,zm=3e4;class Sn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ls(e),this.stats_=Ho(n),this.urlFn=a=>(this.appCheckToken&&(a[Gr]=this.appCheckToken),Ju(n,Xu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Dm(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zm)),Em(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Aa)this.id=l,this.password=a;else if(o===Lm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Aa]="t",s[th]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Hm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ju]=Bo,this.transportSessionId&&(s[Vu]=this.transportSessionId),this.lastSessionId&&(s[Gu]=this.lastSessionId),this.applicationId&&(s[Yu]=this.applicationId),this.appCheckToken&&(s[Gr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ku.test(location.hostname)&&(s[qu]=zu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Sn.forceAllow_=!0}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){return Sn.forceAllow_?!0:!Sn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bm()&&!wm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Su(n),i=Uu(s,Vm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[jm]="t",s[Zu]=e,s[eh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mm(),window[Fm+this.uniqueCallbackIdentifier]=e,window[Bm+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wo.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Pe("frame writing exception"),l.stack&&Pe(l.stack),Pe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zu]=this.myID,e[eh]=this.myPW,e[th]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sh+s.length<=nh;){const o=this.pendingSegs.shift();s=s+"&"+Wm+i+"="+o.seg+"&"+Um+i+"="+o.ts+"&"+$m+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(qm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=16384,Gm=45e3;let ui=null;typeof MozWebSocket<"u"?ui=MozWebSocket:typeof WebSocket<"u"&&(ui=WebSocket);class st{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ls(this.connId),this.stats_=Ho(n),this.connURL=st.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ju]=Bo,typeof location<"u"&&location.hostname&&Ku.test(location.hostname)&&(o[qu]=zu),n&&(o[Vu]=n),s&&(o[Gu]=s),i&&(o[Gr]=i),r&&(o[Yu]=r),Ju(e,Qu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tn.set("previous_websocket_failure",!0);try{let s;Nu(),this.mySock=new ui(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ui!==null&&!st.forceDisallow_}static previouslyFailed(){return tn.isInMemoryStorage||tn.get("previous_websocket_failure")===!0}markConnectionHealthy(){tn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ws(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Uu(n,Km);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Gm))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Sn,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=st&&st.isAvailable();let s=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[st];else{const i=this.transports_=[];for(const r of Ts.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ts.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=6e4,Qm=5e3,Xm=10*1024,Jm=100*1024,hr="t",Pa="d",Zm="s",Oa="r",ey="e",ka="o",Ma="a",Da="n",La="p",ty="h";class ny{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ls("c:"+this.id+":"),this.transportManager_=new Ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ds(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xm?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hr in e){const n=e[hr];n===Ma?this.upgradeIfSecondaryHealthy_():n===Oa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ka&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ts("t",e),s=ts("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:La,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ma,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Da,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ts("t",e),s=ts("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ts(hr,e);if(Pa in e){const s=e[Pa];if(n===ty)this.onHandshake_(s);else if(n===Da){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zm?this.onConnectionShutdown_(s):n===Oa?this.onReset_(s):n===ey?zr("Server Error: "+s):n===ka?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bo!==s&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ds(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ym))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ds(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Qm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:La,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends rh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hi}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=32,Ba=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new se("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vt(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function Uo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Rs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function oh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return Le(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iy(t,e){const n=Rs(t,0),s=Rs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=pn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function lh(t,e){if(Vt(t)!==Vt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Vt(t)>Vt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ry{constructor(e,n){this.errorPrefix_=n,this.parts_=Rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Hi(this.parts_[s]);ah(this)}}function oy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Hi(e),ah(t)}function ly(t){const e=t.parts_.pop();t.byteLength_-=Hi(e),t.parts_.length>0&&(t.byteLength_-=1)}function ah(t){if(t.byteLength_>Ba)throw new Error(t.errorPrefix_+"has a key path longer than "+Ba+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fa)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fa+") or object contains a cycle "+Xt(t))}function Xt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends rh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new $o}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=1e3,ay=60*5*1e3,Ha=30*1e3,cy=1.3,uy=3e4,hy="server_kill",Wa=3;class St extends ih{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=St.nextPersistentConnectionId_++,this.log_=Ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ns,this.maxReconnectDelay_=ay,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Nu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$o.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ne(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ks,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;St.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yt(e,"w")){const s=Ln(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Z_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ha)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=J_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zr("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uy&&(this.reconnectDelay_=ns),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+St.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new ny(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(hy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Fe(h),a())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ma(this.interruptReasons_)&&(this.reconnectDelay_=ns,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Fo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wa&&(this.reconnectDelay_=Ha,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Bu.replace(/\./g,"-")]=1,xu()?e["framework.cordova"]=1:z_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hi.getInstance().currentlyOnline();return ma(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(cn,e),i=new q(cn,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs;class ch extends Wi{static get __EMPTY_NODE(){return zs}static set __EMPTY_NODE(e){zs=e}compare(e,n){return pn(e.name,n.name)}isDefinedOn(e){throw Kn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(jt,zs)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,zs)}toString(){return".key"}}const on=new ch;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Re.RED,this.left=i!=null?i:Ue.EMPTY_NODE,this.right=r!=null?r:Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Re(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class fy{copy(e,n,s,i,r){return this}insert(e,n,s){return new Re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ks(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ks(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ks(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new fy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t,e){return pn(t.name,e.name)}function jo(t,e){return pn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yr;function py(t){Yr=t}const uh=function(t){return typeof t=="number"?"number:"+$u(t):"string:"+t},hh=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yt(e,".sv"),"Priority must be a string or number.")}else b(t===Yr||t.isEmpty(),"priority of unexpected type.");b(t===Yr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hh(this.priorityNode_)}static set __childrenNodeConstructor(e){Ua=e}static get __childrenNodeConstructor(){return Ua}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:G(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Vt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$u(this.value_):e+=this.value_,this.lazyHash_=Wu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Te.VALUE_TYPE_ORDER.indexOf(n),r=Te.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh,dh;function _y(t){fh=t}function gy(t){dh=t}class my extends Wi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?pn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(jt,new Te("[PRIORITY-POST]",dh))}makePost(e,n){const s=fh(e);return new q(n,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const ve=new my;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=Math.log(2);class vy{constructor(e){const n=r=>parseInt(Math.log(r)/yy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fi=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Re(f,h.node,Re.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),I=i(_+1,c);return h=t[_],f=n?n(h):h,new Re(f,h.node,Re.BLACK,m,I)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,I){const T=h-m,N=h;h-=m;const F=i(T+1,N),$=t[T],K=n?n($):$;_(new Re(K,$.node,I,null,F))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const I=a.nextBitIsOne(),T=Math.pow(2,a.count-(m+1));I?f(T,Re.BLACK):(f(T,Re.BLACK),f(T,Re.RED))}return u},o=new vy(t.length),l=r(o);return new Ue(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;const En={};class It{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(En&&ve,"ChildrenNode.ts has not been loaded"),fr=fr||new It({".priority":En},{".priority":ve}),fr}get(e){const n=Ln(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return yt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==on,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=fi(s,e.getCompare()):l=En;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new It(u,c)}addToIndexes(e,n){const s=li(this.indexes_,(i,r)=>{const o=Ln(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===En)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(q.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),fi(l,o.getCompare())}else return En;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new q(e.name,l))),a.insert(e,e.node)}});return new It(s,this.indexSet_)}removeFromIndexes(e,n){const s=li(this.indexes_,i=>{if(i===En)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new It(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&hh(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ss||(ss=new B(new Ue(jo),null,It.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ss}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ss:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ss:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{b(G(e)!==".priority"||Vt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(pe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ve,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uh(this.getPriority().val())+":"),this.forEachChild(ve,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fs?-1:0}withIndex(e){if(e===on||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===on||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ve),i=n.getIterator(ve);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===on?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ey extends B{constructor(){super(new Ue(jo),B.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Fs=new Ey;Object.defineProperties(q,{MIN:{value:new q(cn,B.EMPTY_NODE)},MAX:{value:new q(jt,Fs)}});ch.__EMPTY_NODE=B.EMPTY_NODE;Te.__childrenNodeConstructor=B;py(Fs);gy(Fs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=!0;function Ie(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,Ie(e))}if(!(t instanceof Array)&&Cy){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ie(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new q(o,a)))}}),n.length===0)return B.EMPTY_NODE;const r=fi(n,dy,o=>o.name,jo);if(s){const o=fi(n,ve.getCompare());return new B(r,Ie(e),new It({".priority":o},{".priority":ve}))}else return new B(r,Ie(e),It.Default)}else{let n=B.EMPTY_NODE;return Me(t,(s,i)=>{if(yt(t,s)&&s.substring(0,1)!=="."){const r=Ie(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ie(e))}}_y(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo extends Wi{constructor(e){super(),this.indexPath_=e,b(!z(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?pn(e.name,n.name):r}makePost(e,n){const s=Ie(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Fs);return new q(jt,e)}toString(){return Rs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by extends Wi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?pn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=Ie(e);return new q(n,s)}toString(){return".value"}}const ph=new by;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wy=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=$a.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$a.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t){return{type:"value",snapshotNode:t}}function xs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function As(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ns(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(xs(n,s)):o.trackChildChange(As(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ns(i,r))}),n.isLeafNode()||n.forEachChild(ve,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(As(i,r,o))}else s.trackChildChange(xs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.indexedFilter_=new qo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ps.getStartPost_(e),this.endPost_=Ps.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,s,i,r,o){return this.matches(new q(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(ve,(o,l)=>{r.matches(new q(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){this.rangedFilter_=new Ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new q(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(As(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ns(n,h));const I=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(xs(f.name,f.node)),I.updateImmediateChild(f.name,f.node)):I}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Ns(c.name,c.node)),r.trackChildChange(xs(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:cn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:jt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new zo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ry(t){return t.loadsAllData()?new qo(t.getIndex()):t.hasLimit()?new Ty(t):new Ps(t)}function xy(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function Ny(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function Ay(t,e){const n=t.copy();return n.index_=e,n}function ja(t){const e={};if(t.isDefault())return e;let n;return t.index_===ve?n="$priority":t.index_===ph?n="$value":t.index_===on?n="$key":(b(t.index_ instanceof Vo,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ne(n),t.startSet_&&(e.startAt=Ne(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ne(t.indexStartName_))),t.endSet_&&(e.endAt=Ne(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ne(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Va(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ih{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ls("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=di.getListenId_(e,s),l={};this.listens_[o]=l;const a=ja(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ln(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=di.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ja(e._queryParams),s=e._path.toString(),i=new ks;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+eg(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ws(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(){return{value:null,children:new Map}}function _h(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,pi());const i=t.children.get(s);e=pe(e),_h(i,e,n)}}function Qr(t,e,n){t.value!==null?n(e,t.value):Oy(t,(s,i)=>{const r=new se(e.toString()+"/"+s);Qr(i,r,n)})}function Oy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=10*1e3,My=30*1e3,Dy=5*60*1e3;class Ly{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ky(e);const s=qa+(My-qa)*Math.random();ds(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&yt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ds(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function Ko(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Go(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ot.ACK_USER_WRITE,this.source=Ko()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new _i(ee(),n,this.revert)}}else return b(G(this.path)===e,"operationForChild called for unrelated child."),new _i(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.source=e,this.path=n,this.type=ot.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Os(this.source,ee()):new Os(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ot.OVERWRITE}operationForChild(e){return z(this.path)?new un(this.source,ee(),this.snap.getImmediateChild(e)):new un(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ot.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new un(this.source,ee(),n.value):new Fn(this.source,ee(),n)}else return b(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fn(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function By(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Sy(o.childName,o.snapshotNode))}),is(t,i,"child_removed",e,s,n),is(t,i,"child_added",e,s,n),is(t,i,"child_moved",r,s,n),is(t,i,"child_changed",e,s,n),is(t,i,"value",e,s,n),i}function is(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Wy(t,l,a)),o.forEach(l=>{const a=Hy(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Hy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Wy(t,e,n){if(e.childName==null||n.childName==null)throw Kn("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(t,e){return{eventCache:t,serverCache:e}}function ps(t,e,n,s){return Ui(new qt(e,n,s),t.serverCache)}function gh(t,e,n,s){return Ui(t.eventCache,new qt(e,n,s))}function gi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const Uy=()=>(dr||(dr=new Ue(Cm)),dr);class fe{constructor(e,n=Uy()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return Me(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(z(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(pe(e),n);return r!=null?{path:ye(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(pe(e)):new fe(null)}}set(e,n){if(z(e))return new fe(n,this.children);{const s=G(e),r=(this.children.get(s)||new fe(null)).set(pe(e),n),o=this.children.insert(s,r);return new fe(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(pe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new fe(null):new fe(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(pe(e)):null}}setTree(e,n){if(z(e))return n;{const s=G(e),r=(this.children.get(s)||new fe(null)).setTree(pe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new fe(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(pe(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(pe(e),ye(n,i),s):new fe(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new fe(null))}}function _s(t,e,n){if(z(e))return new ct(new fe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Le(i,e);return r=r.updateChild(o,n),new ct(t.writeTree_.set(i,r))}else{const i=new fe(n),r=t.writeTree_.setTree(e,i);return new ct(r)}}}function Xr(t,e,n){let s=t;return Me(n,(i,r)=>{s=_s(s,ye(e,i),r)}),s}function za(t,e){if(z(e))return ct.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new ct(n)}}function Jr(t,e){return _n(t,e)!=null}function _n(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function Ka(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function Ht(t,e){if(z(e))return t;{const n=_n(t,e);return n!=null?new ct(new fe(n)):new ct(t.writeTree_.subtree(e))}}function Zr(t){return t.writeTree_.isEmpty()}function Bn(t,e){return mh(ee(),t.writeTree_,e)}function mh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=mh(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t,e){return Ch(e,t)}function $y(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=_s(t.visibleWrites,e,n)),t.lastWriteId=s}function jy(t,e,n,s){b(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Xr(t.visibleWrites,e,n),t.lastWriteId=s}function Vy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function qy(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&zy(l,s.path)?i=!1:Je(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Ky(t),!0;if(s.snap)t.visibleWrites=za(t.visibleWrites,s.path);else{const l=s.children;Me(l,a=>{t.visibleWrites=za(t.visibleWrites,ye(s.path,a))})}return!0}else return!1}function zy(t,e){if(t.snap)return Je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Je(ye(t.path,n),e))return!0;return!1}function Ky(t){t.visibleWrites=yh(t.allWrites,Gy,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Gy(t){return t.visible}function yh(t,e,n){let s=ct.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Je(n,o)?(l=Le(n,o),s=_s(s,l,r.snap)):Je(o,n)&&(l=Le(o,n),s=_s(s,ee(),r.snap.getChild(l)));else if(r.children){if(Je(n,o))l=Le(n,o),s=Xr(s,l,r.children);else if(Je(o,n))if(l=Le(o,n),z(l))s=Xr(s,ee(),r.children);else{const a=Ln(r.children,G(l));if(a){const c=a.getChild(pe(l));s=_s(s,ee(),c)}}}else throw Kn("WriteRecord should have .snap or .children")}}return s}function vh(t,e,n,s,i){if(!s&&!i){const r=_n(t.visibleWrites,e);if(r!=null)return r;{const o=Ht(t.visibleWrites,e);if(Zr(o))return n;if(n==null&&!Jr(o,ee()))return null;{const l=n||B.EMPTY_NODE;return Bn(o,l)}}}else{const r=Ht(t.visibleWrites,e);if(!i&&Zr(r))return n;if(!i&&n==null&&!Jr(r,ee()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Je(c.path,e)||Je(e,c.path))},l=yh(t.allWrites,o,e),a=n||B.EMPTY_NODE;return Bn(l,a)}}}function Yy(t,e,n){let s=B.EMPTY_NODE;const i=_n(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ht(t.visibleWrites,e);return n.forEachChild(ve,(o,l)=>{const a=Bn(Ht(r,new se(o)),l);s=s.updateImmediateChild(o,a)}),Ka(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ht(t.visibleWrites,e);return Ka(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Qy(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(Jr(t.visibleWrites,r))return null;{const o=Ht(t.visibleWrites,r);return Zr(o)?i.getChild(n):Bn(o,i.getChild(n))}}function Xy(t,e,n,s){const i=ye(e,n),r=_n(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ht(t.visibleWrites,i);return Bn(o,s.getNode().getImmediateChild(n))}else return null}function Jy(t,e){return _n(t.visibleWrites,e)}function Zy(t,e,n,s,i,r,o){let l;const a=Ht(t.visibleWrites,e),c=_n(a,ee());if(c!=null)l=c;else if(n!=null)l=Bn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function ev(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function mi(t,e,n,s){return vh(t.writeTree,t.treePath,e,n,s)}function Qo(t,e){return Yy(t.writeTree,t.treePath,e)}function Ga(t,e,n,s){return Qy(t.writeTree,t.treePath,e,n,s)}function yi(t,e){return Jy(t.writeTree,ye(t.treePath,e))}function tv(t,e,n,s,i,r){return Zy(t.writeTree,t.treePath,e,n,s,i,r)}function Xo(t,e,n){return Xy(t.writeTree,t.treePath,e,n)}function Eh(t,e){return Ch(ye(t.treePath,e),t.writeTree)}function Ch(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,As(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ns(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,xs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,As(s,e.snapshotNode,i.oldSnap));else throw Kn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const bh=new sv;class Jo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new qt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hn(this.viewCache_),r=tv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t){return{filter:t}}function rv(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ov(t,e,n,s,i){const r=new nv;let o,l;if(n.type===ot.OVERWRITE){const c=n;c.source.fromUser?o=eo(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=vi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===ot.MERGE){const c=n;c.source.fromUser?o=av(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=to(t,e,c.path,c.children,s,i,l,r))}else if(n.type===ot.ACK_USER_WRITE){const c=n;c.revert?o=hv(t,e,c.path,s,i,r):o=cv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ot.LISTEN_COMPLETE)o=uv(t,e,n.path,s,r);else throw Kn("Unknown operation type: "+n.type);const a=r.getChanges();return lv(e,o,a),{viewCache:o,changes:a}}function lv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=gi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Iy(gi(e)))}}function wh(t,e,n,s,i,r){const o=e.eventCache;if(yi(s,n)!=null)return e;{let l,a;if(z(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hn(e),u=c instanceof B?c:B.EMPTY_NODE,h=Qo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=mi(s,hn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=G(n);if(c===".priority"){b(Vt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ga(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=pe(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Ga(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Xo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return ps(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function vi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=G(n);if(!a.isCompleteForPath(n)&&Vt(n)>1)return e;const m=pe(n),T=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),T):c=u.updateChild(a.getNode(),_,T,m,bh,null)}const h=gh(e,c,a.isFullyInitialized()||z(n),u.filtersNodes()),f=new Jo(i,h,r);return wh(t,h,n,i,f,l)}function eo(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Jo(i,e,r);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=ps(e,c,!0,t.filter.filtersNodes());else{const h=G(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=ps(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=pe(n),_=l.getNode().getImmediateChild(h);let m;if(z(f))m=s;else{const I=u.getCompleteChild(h);I!=null?Uo(f)===".priority"&&I.getChild(oh(f)).isEmpty()?m=I:m=I.updateChild(f,s):m=B.EMPTY_NODE}if(_.equals(m))a=e;else{const I=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=ps(e,I,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ya(t,e){return t.eventCache.isCompleteForChild(e)}function av(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ye(n,a);Ya(e,G(u))&&(l=eo(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ye(n,a);Ya(e,G(u))||(l=eo(t,l,u,c,i,r,o))}),l}function Qa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function to(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;z(n)?c=s:c=new fe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Qa(t,_,f);a=vi(t,a,new se(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),I=Qa(t,m,f);a=vi(t,a,new se(h),I,i,r,o,l)}}),a}function cv(t,e,n,s,i,r,o){if(yi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return vi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(z(n)){let c=new fe(null);return a.getNode().forEachChild(on,(u,h)=>{c=c.set(new se(u),h)}),to(t,e,n,c,i,r,l,o)}else return e}else{let c=new fe(null);return s.foreach((u,h)=>{const f=ye(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),to(t,e,n,c,i,r,l,o)}}function uv(t,e,n,s,i){const r=e.serverCache,o=gh(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return wh(t,o,n,s,bh,i)}function hv(t,e,n,s,i,r){let o;if(yi(s,n)!=null)return e;{const l=new Jo(s,e,i),a=e.eventCache.getNode();let c;if(z(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=mi(s,hn(e));else{const h=e.serverCache.getNode();b(h instanceof B,"serverChildren would be complete if leaf node"),u=Qo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=G(n);let h=Xo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,pe(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,B.EMPTY_NODE,pe(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=mi(s,hn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||yi(s,ee())!=null,ps(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new qo(s.getIndex()),r=Ry(s);this.processor_=iv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new qt(a,o.isFullyInitialized(),i.filtersNodes()),h=new qt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ui(h,u),this.eventGenerator_=new Fy(this.query_)}get query(){return this.query_}}function dv(t){return t.viewCache_.serverCache.getNode()}function pv(t){return gi(t.viewCache_)}function _v(t,e){const n=hn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function Xa(t){return t.eventRegistrations_.length===0}function Ja(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Za(t,e,n,s){e.type===ot.MERGE&&e.source.queryId!==null&&(b(hn(t.viewCache_),"We should always have a full cache before handling merges"),b(gi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=ov(t.processor_,i,e,n,s);return rv(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,gv(t,r.changes,r.viewCache.eventCache.getNode(),null)}function gv(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return By(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;class Ih{constructor(){this.views=new Map}}function mv(t){b(!Ei,"__referenceConstructor has already been defined"),Ei=t}function yv(){return b(Ei,"Reference.ts has not been loaded"),Ei}function vv(t){return t.views.size===0}function Zo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Za(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Za(o,e,n,s));return r}}function Sh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=mi(n,i?s:null),a=!1;l?a=!0:s instanceof B?(l=Qo(n,s),a=!1):(l=B.EMPTY_NODE,a=!1);const c=Ui(new qt(l,a,!1),new qt(s,i,!1));return new fv(e,c)}return o}function Ev(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Hn(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ja(c,n,s)),Xa(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ja(a,n,s)),Xa(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Hn(t)&&r.push(new(yv())(e._repo,e._path)),{removed:r,events:o}}function Cv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Wt(t,e){let n=null;for(const s of t.views.values())n=n||_v(s,e);return n}function bv(t,e){if(e._queryParams.loadsAllData())return el(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Th(t,e){return bv(t,e)!=null}function Hn(t){return el(t)!=null}function el(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci;function wv(t){b(!Ci,"__referenceConstructor has already been defined"),Ci=t}function Iv(){return b(Ci,"Reference.ts has not been loaded"),Ci}let Sv=1;class ec{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=ev(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rh(t,e,n,s,i){return $y(t.pendingWriteTree_,e,n,s,i),i?Yn(t,new un(Ko(),e,n)):[]}function Tv(t,e,n,s){jy(t.pendingWriteTree_,e,n,s);const i=fe.fromObject(n);return Yn(t,new Fn(Ko(),e,i))}function kt(t,e,n=!1){const s=Vy(t.pendingWriteTree_,e);if(qy(t.pendingWriteTree_,e)){let r=new fe(null);return s.snap!=null?r=r.set(ee(),!0):Me(s.children,o=>{r=r.set(new se(o),!0)}),Yn(t,new _i(s.path,r,n))}else return[]}function Bs(t,e,n){return Yn(t,new un(Go(),e,n))}function Rv(t,e,n){const s=fe.fromObject(n);return Yn(t,new Fn(Go(),e,s))}function xv(t,e){return Yn(t,new Os(Go(),e))}function Nv(t,e,n){const s=sl(t,n);if(s){const i=il(s),r=i.path,o=i.queryId,l=Le(r,e),a=new Os(Yo(o),l);return rl(t,r,a)}else return[]}function xh(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||Th(r,e))){const l=Ev(r,e,n,s);vv(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const a=l.removed;o=l.events;const c=a.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>Hn(f));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=Dv(h);for(let _=0;_<f.length;++_){const m=f[_],I=m.query,T=Mv(t,m);t.listenProvider_.startListening(pr(I),nl(t,I),T.hashFn,T.onComplete)}}}!u&&a.length>0&&!s&&(c?t.listenProvider_.stopListening(pr(e),null):a.forEach(h=>{const f=t.queryToTagMap.get(ji(h));t.listenProvider_.stopListening(pr(h),f)})),Lv(t,a)}return o}function Av(t,e){const{syncPoint:n,serverCache:s,writesCache:i,serverCacheComplete:r}=Ov(e,t),o=Sh(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),e._queryParams.loadsAllData()?null:nl(t,e)}function Nh(t,e,n,s){const i=sl(t,s);if(i!=null){const r=il(i),o=r.path,l=r.queryId,a=Le(o,e),c=new un(Yo(l),a,n);return rl(t,o,c)}else return[]}function Pv(t,e,n,s){const i=sl(t,s);if(i){const r=il(i),o=r.path,l=r.queryId,a=Le(o,e),c=fe.fromObject(n),u=new Fn(Yo(l),a,c);return rl(t,o,u)}else return[]}function Ov(t,e){const n=t._path;let s=null,i=!1;e.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Le(c,n);s=s||Wt(u,h),i=i||Hn(u)});let r=e.syncPointTree_.get(n);r?(i=i||Hn(r),s=s||Wt(r,ee())):(r=new Ih,e.syncPointTree_=e.syncPointTree_.set(n,r));let o;s!=null?o=!0:(o=!1,s=B.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,h)=>{const f=Wt(h,ee());f&&(s=s.updateImmediateChild(u,f))}));const l=Th(r,t);if(!l&&!t._queryParams.loadsAllData()){const c=ji(t);b(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const u=Fv();e.queryToTagMap.set(c,u),e.tagToQueryMap.set(u,c)}const a=$i(e.pendingWriteTree_,n);return{syncPoint:r,writesCache:a,serverCache:s,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:l}}function tl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Le(o,e),c=Wt(l,a);if(c)return c});return vh(i,e,r,n,!0)}function kv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Le(c,n);s=s||Wt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Wt(i,ee()):(i=new Ih,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new qt(s,!0,!1):null,l=$i(t.pendingWriteTree_,e._path),a=Sh(i,e,l,r?o.getNode():B.EMPTY_NODE,r);return pv(a)}function Yn(t,e){return Ah(e,t.syncPointTree_,null,$i(t.pendingWriteTree_,ee()))}function Ah(t,e,n,s){if(z(t.path))return Ph(t,e,n,s);{const i=e.get(ee());n==null&&i!=null&&(n=Wt(i,ee()));let r=[];const o=G(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Eh(s,o);r=r.concat(Ah(l,a,c,u))}return i&&(r=r.concat(Zo(i,t,s,n))),r}}function Ph(t,e,n,s){const i=e.get(ee());n==null&&i!=null&&(n=Wt(i,ee()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Eh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ph(u,l,a,c)))}),i&&(r=r.concat(Zo(i,t,s,n))),r}function Mv(t,e){const n=e.query,s=nl(t,n);return{hashFn:()=>(dv(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Nv(t,n._path,s):xv(t,n._path);{const r=Im(i,n);return xh(t,n,null,r)}}}}function nl(t,e){const n=ji(e);return t.queryToTagMap.get(n)}function ji(t){return t._path.toString()+"$"+t._queryIdentifier}function sl(t,e){return t.tagToQueryMap.get(e)}function il(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function rl(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=$i(t.pendingWriteTree_,e);return Zo(s,n,i,null)}function Dv(t){return t.fold((e,n,s)=>{if(n&&Hn(n))return[el(n)];{let i=[];return n&&(i=Cv(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function pr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Iv())(t._repo,t._path):t}function Lv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ji(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Fv(){return Sv++}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ol(n)}node(){return this.node_}}class ll{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new ll(this.syncTree_,n)}node(){return tl(this.syncTree_,this.path_)}}const Bv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},tc=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Hv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Wv(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Hv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Wv=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Oh=function(t,e,n,s){return al(e,new ll(n,t),s)},kh=function(t,e,n){return al(t,new ol(e),n)};function al(t,e,n){const s=t.getPriority().val(),i=tc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=tc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Te(l,Ie(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Te(i))),o.forEachChild(ve,(l,a)=>{const c=al(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ul(t,e){let n=e instanceof se?e:new se(e),s=t,i=G(n);for(;i!==null;){const r=Ln(s.node.children,i)||{children:{},childCount:0};s=new cl(i,s,r),n=pe(n),i=G(n)}return s}function Qn(t){return t.node.value}function Mh(t,e){t.node.value=e,no(t)}function Dh(t){return t.node.childCount>0}function Uv(t){return Qn(t)===void 0&&!Dh(t)}function Vi(t,e){Me(t.node.children,(n,s)=>{e(new cl(n,t,s))})}function Lh(t,e,n,s){n&&!s&&e(t),Vi(t,i=>{Lh(i,e,!0,s)}),n&&s&&e(t)}function $v(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Hs(t){return new se(t.parent===null?t.name:Hs(t.parent)+"/"+t.name)}function no(t){t.parent!==null&&jv(t.parent,t.name,t)}function jv(t,e,n){const s=Uv(n),i=yt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,no(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,no(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=/[\[\].#$\/\u0000-\u001F\u007F]/,qv=/[\[\].#$\u0000-\u001F\u007F]/,_r=10*1024*1024,qi=function(t){return typeof t=="string"&&t.length!==0&&!Vv.test(t)},Fh=function(t){return typeof t=="string"&&t.length!==0&&!qv.test(t)},zv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fh(t)},so=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Lo(t)||t&&typeof t=="object"&&yt(t,".sv")},Ws=function(t,e,n,s){s&&e===void 0||zi(Ms(t,"value"),e,n)},zi=function(t,e,n){const s=n instanceof se?new ry(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Xt(s)+" with contents = "+e.toString());if(Lo(e))throw new Error(t+"contains "+e.toString()+" "+Xt(s));if(typeof e=="string"&&e.length>_r/3&&Hi(e)>_r)throw new Error(t+"contains a string greater than "+_r+" utf8 bytes "+Xt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!qi(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oy(s,o),zi(t,l,s),ly(s)}),i&&r)throw new Error(t+' contains ".value" child '+Xt(s)+" in addition to actual children.")}},Kv=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Rs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!qi(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(iy);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Je(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Gv=function(t,e,n,s){if(s&&e===void 0)return;const i=Ms(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Me(e,(o,l)=>{const a=new se(o);if(zi(i,l,ye(n,a)),Uo(a)===".priority"&&!so(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Kv(i,r)},Yv=function(t,e,n,s){if(!(s&&n===void 0)&&!qi(n))throw new Error(Ms(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},hl=function(t,e,n,s){if(!(s&&n===void 0)&&!Fh(n))throw new Error(Ms(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hl(t,e,n,s)},fl=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Xv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qi(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zv(n))throw new Error(Ms(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function dl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!lh(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ht(t,e,n){dl(t,n),Zv(t,s=>Je(s,e)||Je(e,s))}function Zv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(eE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function eE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();rn&&Pe("event: "+n.toString()),Gn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="repo_interrupt",nE=25;class sE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pi(),this.transactionQueueTree_=new cl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iE(t,e,n){if(t.stats_=Ho(t.repoInfo_),t.forceRestClient_||xm())t.server_=new di(t.repoInfo_,(s,i,r,o)=>{nc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new St(t.repoInfo_,e,(s,i,r,o)=>{nc(t,s,i,r,o)},s=>{sc(t,s)},s=>{rE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Mm(t.repoInfo_,()=>new Ly(t.stats_,t.server_)),t.infoData_=new Py,t.infoSyncTree_=new ec({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Bs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),pl(t,"connected",!1),t.serverSyncTree_=new ec({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ht(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Bh(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ki(t){return Bv({timestamp:Bh(t)})}function nc(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=li(n,c=>Ie(c));o=Pv(t.serverSyncTree_,r,a,i)}else{const a=Ie(n);o=Nh(t.serverSyncTree_,r,a,i)}else if(s){const a=li(n,c=>Ie(c));o=Rv(t.serverSyncTree_,r,a)}else{const a=Ie(n);o=Bs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Un(t,r)),ht(t.eventQueue_,l,o)}function sc(t,e){pl(t,"connected",e),e===!1&&cE(t)}function rE(t,e){Me(e,(n,s)=>{pl(t,n,s)})}function pl(t,e,n){const s=new se("/.info/"+e),i=Ie(n);t.infoData_.updateSnapshot(s,i);const r=Bs(t.infoSyncTree_,s,i);ht(t.eventQueue_,s,r)}function _l(t){return t.nextWriteId_++}function oE(t,e){const n=kv(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=Ie(s).withIndex(e._queryParams.getIndex());if(e._queryParams.loadsAllData())Bs(t.serverSyncTree_,e._path,i);else{const o=Av(t.serverSyncTree_,e);Nh(t.serverSyncTree_,e._path,i,o)}return xh(t.serverSyncTree_,e,null).length>0&&Wn(t,"unexpected cancel events in repoGetValue"),i},s=>(Wn(t,"get for query "+Ne(e)+" failed: "+s),Promise.reject(new Error(s))))}function lE(t,e,n,s,i){Wn(t,"set",{path:e.toString(),value:n,priority:s});const r=Ki(t),o=Ie(n,s),l=tl(t.serverSyncTree_,e),a=kh(o,l,r),c=_l(t),u=Rh(t.serverSyncTree_,e,a,c,!0);dl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||Fe("set at "+e+" failed: "+f);const I=kt(t.serverSyncTree_,c,!m);ht(t.eventQueue_,e,I),io(t,i,f,_)});const h=ml(t,e);Un(t,h),ht(t.eventQueue_,h,[])}function aE(t,e,n,s){Wn(t,"update",{path:e.toString(),value:n});let i=!0;const r=Ki(t),o={};if(Me(n,(l,a)=>{i=!1,o[l]=Oh(ye(e,l),Ie(a),t.serverSyncTree_,r)}),i)Pe("update() called with empty data.  Don't do anything."),io(t,s,"ok",void 0);else{const l=_l(t),a=Tv(t.serverSyncTree_,e,o,l);dl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||Fe("update at "+e+" failed: "+c);const f=kt(t.serverSyncTree_,l,!h),_=f.length>0?Un(t,e):e;ht(t.eventQueue_,_,f),io(t,s,c,u)}),Me(n,c=>{const u=ml(t,ye(e,c));Un(t,u)}),ht(t.eventQueue_,e,[])}}function cE(t){Wn(t,"onDisconnectEvents");const e=Ki(t),n=pi();Qr(t.onDisconnect_,ee(),(i,r)=>{const o=Oh(i,r,t.serverSyncTree_,e);_h(n,i,o)});let s=[];Qr(n,ee(),(i,r)=>{s=s.concat(Bs(t.serverSyncTree_,i,r));const o=ml(t,i);Un(t,o)}),t.onDisconnect_=pi(),ht(t.eventQueue_,ee(),s)}function uE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(tE)}function Wn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pe(n,...e)}function io(t,e,n,s){e&&Gn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Hh(t,e,n){return tl(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function gl(t,e=t.transactionQueueTree_){if(e||Gi(t,e),Qn(e)){const n=Uh(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hE(t,Hs(e),n)}else Dh(e)&&Vi(e,n=>{gl(t,n)})}function hE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Hh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Le(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Wn(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(kt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Gi(t,ul(t.transactionQueueTree_,e)),gl(t,t.transactionQueueTree_),ht(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Gn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Fe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Un(t,e)}},o)}function Un(t,e){const n=Wh(t,e),s=Hs(n),i=Uh(t,n);return fE(t,i,s),s}function fE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Le(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(kt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=nE)u=!0,h="maxretry",i=i.concat(kt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Hh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){zi("transaction failed: Data returned ",_,a.path);let m=Ie(_);typeof _=="object"&&_!=null&&yt(_,".priority")||(m=m.updatePriority(f.getPriority()));const T=a.currentWriteId,N=Ki(t),F=kh(m,f,N);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=F,a.currentWriteId=_l(t),o.splice(o.indexOf(T),1),i=i.concat(Rh(t.serverSyncTree_,a.path,F,a.currentWriteId,a.applyLocally)),i=i.concat(kt(t.serverSyncTree_,T,!0))}else u=!0,h="nodata",i=i.concat(kt(t.serverSyncTree_,a.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Gi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Gn(s[l]);gl(t,t.transactionQueueTree_)}function Wh(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&Qn(s)===void 0;)s=ul(s,n),e=pe(e),n=G(e);return s}function Uh(t,e){const n=[];return $h(t,e,n),n.sort((s,i)=>s.order-i.order),n}function $h(t,e,n){const s=Qn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Vi(e,i=>{$h(t,i,n)})}function Gi(t,e){const n=Qn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Mh(e,n.length>0?n:void 0)}Vi(e,s=>{Gi(t,s)})}function ml(t,e){const n=Hs(Wh(t,e)),s=ul(t.transactionQueueTree_,e);return $v(s,i=>{gr(t,i)}),gr(t,s),Lh(s,i=>{gr(t,i)}),n}function gr(t,e){const n=Qn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(kt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Mh(e,void 0):n.length=r+1,ht(t.eventQueue_,Hs(e),i);for(let o=0;o<s.length;o++)Gn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function pE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const ic=function(t,e){const n=_E(t),s=n.namespace;n.domain==="firebase.com"&&an(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&an("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Pm(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},_E=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=dE(t.substring(u,h)));const f=pE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:Uo(this._path)}get ref(){return new zt(this._repo,this._path)}get _queryIdentifier(){const e=Va(this._queryParams),n=Fo(e);return n==="{}"?"default":n}get _queryObject(){return Va(this._queryParams)}isEqual(e){if(e=dn(e),!(e instanceof Xn))return!1;const n=this._repo===e._repo,s=lh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+sy(this._path)}}function gE(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function yl(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===on){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==cn)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==jt)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===ve){if(e!=null&&!so(e)||n!=null&&!so(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(b(t.getIndex()instanceof Vo||t.getIndex()===ph,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function jh(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class zt extends Xn{constructor(e,n){super(e,n,new zo,!1)}get parent(){const e=oh(this._path);return e===null?null:new zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=$n(this.ref,e);return new bi(this._node.getChild(n),s,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new bi(i,$n(this.ref,s),ve)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function mE(t,e){return t=dn(t),t._checkNotDeleted("ref"),e!==void 0?$n(t._root,e):t._root}function $n(t,e){return t=dn(t),G(t._path)===null?Qv("child","path",e,!1):hl("child","path",e,!1),new zt(t._repo,ye(t._path,e))}function yE(t,e){t=dn(t),fl("push",t._path),Ws("push",e,t._path,!0);const n=Bh(t._repo),s=wy(n),i=$n(t,s),r=$n(t,s);let o;return e!=null?o=Vh(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function vE(t){return fl("remove",t._path),Vh(t,null)}function Vh(t,e){t=dn(t),fl("set",t._path),Ws("set",e,t._path,!1);const n=new ks;return lE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function EE(t,e){Gv("update",e,t._path,!1);const n=new ks;return aE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function CE(t){return t=dn(t),oE(t._repo,t).then(e=>new bi(e,new zt(t._repo,t._path),t._queryParams.getIndex()))}class Yi{}class bE extends Yi{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Ws("endAt",this._value,e._path,!0);const n=Ny(e._queryParams,this._value,this._key);if(jh(n),yl(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Xn(e._repo,e._path,n,e._orderByCalled)}}class wE extends Yi{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Ws("startAt",this._value,e._path,!0);const n=xy(e._queryParams,this._value,this._key);if(jh(n),yl(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Xn(e._repo,e._path,n,e._orderByCalled)}}class IE extends Yi{constructor(e){super(),this._path=e}_apply(e){gE(e,"orderByChild");const n=new se(this._path);if(z(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Vo(n),i=Ay(e._queryParams,s);return yl(i),new Xn(e._repo,e._path,i,!0)}}function SE(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return hl("orderByChild","path",t,!1),new IE(t)}class TE extends Yi{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(Ws("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new bE(this._value,this._key)._apply(new wE(this._value,this._key)._apply(e))}}function RE(t,e){return Yv("equalTo","key",e,!0),new TE(t,e)}function xE(t,...e){let n=dn(t);for(const s of e)n=s._apply(n);return n}mv(zt);wv(zt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="FIREBASE_DATABASE_EMULATOR_HOST",ro={};let AE=!1;function PE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||an("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ic(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[NE]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=ic(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Kr(Kr.OWNER):new Am(t.name,t.options,e);Xv("Invalid Firebase Database URL",o),z(o.path)||an("Database URL must point to the root of a Firebase Database (not including a child path).");const h=kE(l,t,u,new Nm(t.name,n));return new ME(h,t)}function OE(t,e){const n=ro[e];(!n||n[t.key]!==t)&&an(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uE(t),delete n[t.key]}function kE(t,e,n,s){let i=ro[e.name];i||(i={},ro[e.name]=i);let r=i[t.toURLString()];return r&&an("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sE(t,AE,n,s),i[t.toURLString()]=r,r}class ME{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zt(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(OE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&an("Cannot call "+e+" on a deleted database.")}}function DE(t=nm(),e){return Xg(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){pm(em),ci(new Is("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return PE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),An(Ta,Ra,t),An(Ta,Ra,"esm2017")}St.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};St.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};LE();const FE={apiKey:"AIzaSyC5RpSCtGtGiZwcy4RDbSMrSTelXFr4oO8",authDomain:"short-links-78fa0.firebaseapp.com",projectId:"short-links-78fa0",storageBucket:"short-links-78fa0.appspot.com",messagingSenderId:"301674154227",appId:"1:301674154227:web:3350cef1d31a7df96f8f86"},BE=tm(FE),oo=DE(BE),lo=mE,HE=yE,WE=$n,gC=xE,UE=EE,$E=vE,mC=SE,yC=RE,vC=CE,jE=["onSubmit"],VE={class:"flex gap-3 items-center"},qE=["onKeydown"],zE={key:0,class:"error text-xl bg-red-200 rounded-xl my-4 py-2 px-5"},KE={class:"list-added mt-4 flex flex-col gap-3"},GE={class:"bg-white whitespace-nowrap truncate text-ellipsis w-full text-xm text-gray-800 p-1 px-4 rounded-xl h-8"},YE=["onClick"],QE=ze("button",{type:"submit",class:"p-1 ml-auto mt-4 px-5 text-xl rounded-xl text-white bg-emerald-800 h-12 hover:bg-emerald-700 active:bg-emerald-900"}," \u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C ",-1),XE=zn({__name:"FormItem",setup(t){const e=Bi(),n=xn(""),s=xn([]),i=xn(""),r=et("emitter");Nn(()=>n.value,(h,f)=>{h.length&&!u(h)?i.value="\u0422\u0435\u043A\u0441\u0442 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0441\u044B\u043B\u043A\u043E\u0439":i.value=""});const o=()=>{if(!u(n.value)){i.value="\u0422\u0435\u043A\u0441\u0442 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0441\u044B\u043B\u043A\u043E\u0439";return}let h={link:n.value,id:Date.now()};s.value.push(h),n.value=""},l=h=>{s.value=s.value.filter(f=>f.id!==h)},a=async()=>{if(!s.value.length){i.value="\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0441\u044B\u043B\u043E\u043A \u043F\u0443\u0441\u0442";return}e.isLoading=!0;const h=HE(WE(lo(oo),"links")).key,f=c(h),_={},m={original_links:s.value,timestamp:Date.now(),short_link:document.location.origin+"/vue-link-shortener/"+f,short_code:f,code:h};s.value=[],_["/links/"+h]=m,UE(lo(oo),_).then(()=>{n.value="",e.setLinks(m),r.emit("sendData"),e.isLoading=!1}).catch(I=>{i.value="\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 "+I,e.isLoading=!1})},c=h=>U_(h,5)(),u=h=>!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(h);return(h,f)=>(rt(),wt("form",{action:"#",class:"p-5 mx-auto w-full bg-white flex flex-col rounded-xl shadow border-2 bg-stone-100",onSubmit:ri(a,["prevent"])},[ze("div",VE,[pd(ze("input",{type:"text",class:"w-full text-xl text-gray-800 p-1 px-4 rounded-xl h-12",placeholder:"https://www.google.com/search?q=smile","onUpdate:modelValue":f[0]||(f[0]=_=>n.value=_),onKeydown:Ep(ri(o,["prevent"]),["enter"])},null,40,qE),[[gp,n.value]]),ze("button",{type:"button",class:"p-1 px-5 text-2xl rounded-xl text-white bg-green-700 h-12 hover:bg-green-600 active:bg-green-900",onClick:o}," + ")]),i.value?(rt(),wt("div",zE,Zs(i.value),1)):iu("",!0),ze("ul",KE,[(rt(!0),wt(qe,null,qc(s.value,_=>(rt(),wt("li",{key:_.id,class:"flex gap-3 w-full items-center"},[ze("span",GE,Zs(_.link),1),ze("button",{type:"button",class:"px-1 text-xl rounded-xl text-white bg-red-700 h-8 w-8 hover:bg-red-600 active:bg-red-900",onClick:m=>l(_.id),style:{flex:"0 0 auto"}}," - ",8,YE)]))),128))]),QE],40,jE))}}),JE={key:0,class:"loading absolute left-2/4 top-5 -mx-12 block w-24 h-24 rounded-full border-8 border-indigo-800"},ZE=zn({__name:"LoadingRound",setup(t){const e=Bi();return(n,s)=>Lt(e).isLoading?(rt(),wt("span",JE)):iu("",!0)}});const vl=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},eC=vl(ZE,[["__scopeId","data-v-87a85753"]]),tC={class:"list-links relative"},nC={class:"m-0 mt-5 p-0 list-none flex flex-col gap-2"},sC={class:"mr-auto whitespace-nowrap"},iC=["onClick"],rC=["onClick"],oC=zn({__name:"LinksItem",setup(t){const e=Bi(),n=We(()=>{function o(l,a){return l.timestamp>a.timestamp?-1:l.name<a.name?1:0}return e.getLinks.sort(o)}),s=et("emitter"),i=o=>{navigator.clipboard.writeText(o==null?void 0:o.short_link),e.setLableCopy(o),setTimeout(()=>{e.setLableCopy()},5e3)},r=o=>{e.isLoading=!0,$E(lo(oo,"links/"+o.code)).then(async()=>{e.deleteLink(o),await e.getLinks,e.isLoading=!1}).catch(l=>{alert("\u041E\u0448\u0438\u0431\u043A\u0430 "+l),e.isLoading=!1})};return s.on("sendData",async()=>{await e.getLinks}),(o,l)=>(rt(),wt("div",tC,[ze("ul",nC,[(rt(!0),wt(qe,null,qc(Lt(n),a=>(rt(),wt("li",{key:a==null?void 0:a.short_code,class:"flex items-center justify-between gap-4 bg-blue-200 rounded-lg px-4 py-3"},[ze("span",sC,Zs(a==null?void 0:a.short_link),1),ze("button",{onClick:ri(c=>i(a),["prevent"]),class:wi(["copy w-24 px-3 py-1 text-white rounded-lg cursor-pointer select-none",{"bg-purple-700":(a==null?void 0:a.copied)===!0,"bg-blue-500 hover:bg-blue-400 active:bg-blue-600":!(a!=null&&a.copied)}])},Zs(a!=null&&a.copied?"Copied":"Copy"),11,iC),ze("button",{onClick:ri(c=>r(a),["prevent"]),class:"text-lg px-2 py-0 text-white rounded-lg cursor-pointer bg-red-500 hover:bg-red-400 active:bg-red-600 select-none"}," \xD7 ",8,rC)]))),128))]),Oe(eC)]))}});const lC=vl(oC,[["__scopeId","data-v-48eb0f75"]]),aC=zn({__name:"HomeView",setup(t){return(e,n)=>(rt(),wt(qe,null,[Oe(XE),Oe(lC)],64))}}),cC=[{path:"/",name:"home",component:aC},{path:"/:slug",name:"redirectLink",component:()=>Mp(()=>import("./RedirectView.3fe91166.js"),[])}],qh=F_({history:Jp("/vue-link-shortener/"),routes:cC});qh.beforeEach(()=>{const t=Bi();t.isLoading=!1});const uC={};function hC(t,e){const n=_d("router-view");return rt(),nu(n)}const fC=vl(uC,[["render",hC]]);function dC(t){return{all:t=t||new Map,on:function(e,n){var s=t.get(e);s?s.push(n):t.set(e,[n])},off:function(e,n){var s=t.get(e);s&&(n?s.splice(s.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var s=t.get(e);s&&s.slice().map(function(i){i(n)}),(s=t.get("*"))&&s.slice().map(function(i){i(e,n)})}}}const pC=dC(),Qi=wp(fC);Qi.use(qh);Qi.use(Tp());Qi.provide("emitter",pC);Qi.mount("#app");export{eC as L,wt as a,nu as b,We as c,zn as d,iu as e,Oe as f,Bd as g,ze as h,lo as i,yC as j,vC as k,_d as l,rt as m,_C as n,mC as o,oo as p,gC as q,xn as r,Bi as u,Kf as w};
