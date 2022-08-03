const qh=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};qh();function ao(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Kh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zh=ao(Kh);function rc(t){return!!t||t===""}function co(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ae(s)?Qh(s):co(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ae(t))return t;if(Se(t))return t}}const Gh=/;(?![^(]*\))/g,Yh=/:(.+)/;function Qh(t){const e={};return t.split(Gh).forEach(n=>{if(n){const s=n.split(Yh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bi(t){let e="";if(Ae(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=bi(t[n]);s&&(e+=s+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Gs=t=>Ae(t)?t:t==null?"":H(t)||Se(t)&&(t.toString===cc||!U(t.toString))?JSON.stringify(t,oc,2):String(t),oc=(t,e)=>e&&e.__v_isRef?oc(t,e.value):Tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:lc(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!H(e)&&!uc(e)?String(e):e,ce={},Sn=[],rt=()=>{},Xh=()=>!1,Jh=/^on[^a-z]/,wi=t=>Jh.test(t),uo=t=>t.startsWith("onUpdate:"),ke=Object.assign,ho=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zh=Object.prototype.hasOwnProperty,X=(t,e)=>Zh.call(t,e),H=Array.isArray,Tn=t=>Ii(t)==="[object Map]",lc=t=>Ii(t)==="[object Set]",U=t=>typeof t=="function",Ae=t=>typeof t=="string",fo=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",ac=t=>Se(t)&&U(t.then)&&U(t.catch),cc=Object.prototype.toString,Ii=t=>cc.call(t),ef=t=>Ii(t).slice(8,-1),uc=t=>Ii(t)==="[object Object]",po=t=>Ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ys=ao(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Si=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tf=/-(\w)/g,gt=Si(t=>t.replace(tf,(e,n)=>n?n.toUpperCase():"")),nf=/\B([A-Z])/g,Wn=Si(t=>t.replace(nf,"-$1").toLowerCase()),Ti=Si(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qi=Si(t=>t?`on${Ti(t)}`:""),_s=(t,e)=>!Object.is(t,e),Qs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ei=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wl;const sf=()=>wl||(wl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let dt;class hc{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&dt&&(this.parent=dt,this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function fc(t){return new hc(t)}function rf(t,e=dt){e&&e.active&&e.effects.push(t)}const _o=t=>{const e=new Set(t);return e.w=0,e.n=0,e},dc=t=>(t.w&Wt)>0,pc=t=>(t.n&Wt)>0,of=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wt},lf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];dc(i)&&!pc(i)?i.delete(t):e[n++]=i,i.w&=~Wt,i.n&=~Wt}e.length=n}},mr=new WeakMap;let ss=0,Wt=1;const yr=30;let tt;const tn=Symbol(""),vr=Symbol("");class go{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rf(this,s)}run(){if(!this.active)return this.fn();let e=tt,n=kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=tt,tt=this,kt=!0,Wt=1<<++ss,ss<=yr?of(this):Il(this),this.fn()}finally{ss<=yr&&lf(this),Wt=1<<--ss,tt=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){tt===this?this.deferStop=!0:this.active&&(Il(this),this.onStop&&this.onStop(),this.active=!1)}}function Il(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let kt=!0;const _c=[];function Un(){_c.push(kt),kt=!1}function $n(){const t=_c.pop();kt=t===void 0?!0:t}function ze(t,e,n){if(kt&&tt){let s=mr.get(t);s||mr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=_o()),gc(i)}}function gc(t,e){let n=!1;ss<=yr?pc(t)||(t.n|=Wt,n=!dc(t)):n=!t.has(tt),n&&(t.add(tt),tt.deps.push(t))}function St(t,e,n,s,i,r){const o=mr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&H(t))o.forEach((a,c)=>{(c==="length"||c>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":H(t)?po(n)&&l.push(o.get("length")):(l.push(o.get(tn)),Tn(t)&&l.push(o.get(vr)));break;case"delete":H(t)||(l.push(o.get(tn)),Tn(t)&&l.push(o.get(vr)));break;case"set":Tn(t)&&l.push(o.get(tn));break}if(l.length===1)l[0]&&Er(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Er(_o(a))}}function Er(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&Sl(s);for(const s of n)s.computed||Sl(s)}function Sl(t,e){(t!==tt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const af=ao("__proto__,__v_isRef,__isVue"),mc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fo)),cf=mo(),uf=mo(!1,!0),hf=mo(!0),Tl=ff();function ff(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=te(this);for(let r=0,o=this.length;r<o;r++)ze(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(te)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Un();const s=te(this)[e].apply(this,n);return $n(),s}}),t}function mo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?xf:bc:e?Cc:Ec).get(s))return s;const o=H(s);if(!t&&o&&X(Tl,i))return Reflect.get(Tl,i,r);const l=Reflect.get(s,i,r);return(fo(i)?mc.has(i):af(i))||(t||ze(s,"get",i),e)?l:Ee(l)?o&&po(i)?l:l.value:Se(l)?t?wc(l):jn(l):l}}const df=yc(),pf=yc(!0);function yc(t=!1){return function(n,s,i,r){let o=n[s];if(gs(o)&&Ee(o)&&!Ee(i))return!1;if(!t&&!gs(i)&&(Cr(i)||(i=te(i),o=te(o)),!H(n)&&Ee(o)&&!Ee(i)))return o.value=i,!0;const l=H(n)&&po(s)?Number(s)<n.length:X(n,s),a=Reflect.set(n,s,i,r);return n===te(r)&&(l?_s(i,o)&&St(n,"set",s,i):St(n,"add",s,i)),a}}function _f(t,e){const n=X(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&St(t,"delete",e,void 0),s}function gf(t,e){const n=Reflect.has(t,e);return(!fo(e)||!mc.has(e))&&ze(t,"has",e),n}function mf(t){return ze(t,"iterate",H(t)?"length":tn),Reflect.ownKeys(t)}const vc={get:cf,set:df,deleteProperty:_f,has:gf,ownKeys:mf},yf={get:hf,set(t,e){return!0},deleteProperty(t,e){return!0}},vf=ke({},vc,{get:uf,set:pf}),yo=t=>t,Ri=t=>Reflect.getPrototypeOf(t);function Us(t,e,n=!1,s=!1){t=t.__v_raw;const i=te(t),r=te(e);n||(e!==r&&ze(i,"get",e),ze(i,"get",r));const{has:o}=Ri(i),l=s?yo:n?Co:ms;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function $s(t,e=!1){const n=this.__v_raw,s=te(n),i=te(t);return e||(t!==i&&ze(s,"has",t),ze(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function js(t,e=!1){return t=t.__v_raw,!e&&ze(te(t),"iterate",tn),Reflect.get(t,"size",t)}function Rl(t){t=te(t);const e=te(this);return Ri(e).has.call(e,t)||(e.add(t),St(e,"add",t,t)),this}function xl(t,e){e=te(e);const n=te(this),{has:s,get:i}=Ri(n);let r=s.call(n,t);r||(t=te(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?_s(e,o)&&St(n,"set",t,e):St(n,"add",t,e),this}function Nl(t){const e=te(this),{has:n,get:s}=Ri(e);let i=n.call(e,t);i||(t=te(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&St(e,"delete",t,void 0),r}function Al(){const t=te(this),e=t.size!==0,n=t.clear();return e&&St(t,"clear",void 0,void 0),n}function Vs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=te(o),a=e?yo:t?Co:ms;return!t&&ze(l,"iterate",tn),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function qs(t,e,n){return function(...s){const i=this.__v_raw,r=te(i),o=Tn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?yo:e?Co:ms;return!e&&ze(r,"iterate",a?vr:tn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Rt(t){return function(...e){return t==="delete"?!1:this}}function Ef(){const t={get(r){return Us(this,r)},get size(){return js(this)},has:$s,add:Rl,set:xl,delete:Nl,clear:Al,forEach:Vs(!1,!1)},e={get(r){return Us(this,r,!1,!0)},get size(){return js(this)},has:$s,add:Rl,set:xl,delete:Nl,clear:Al,forEach:Vs(!1,!0)},n={get(r){return Us(this,r,!0)},get size(){return js(this,!0)},has(r){return $s.call(this,r,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Vs(!0,!1)},s={get(r){return Us(this,r,!0,!0)},get size(){return js(this,!0)},has(r){return $s.call(this,r,!0)},add:Rt("add"),set:Rt("set"),delete:Rt("delete"),clear:Rt("clear"),forEach:Vs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qs(r,!1,!1),n[r]=qs(r,!0,!1),e[r]=qs(r,!1,!0),s[r]=qs(r,!0,!0)}),[t,n,e,s]}const[Cf,bf,wf,If]=Ef();function vo(t,e){const n=e?t?If:wf:t?bf:Cf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const Sf={get:vo(!1,!1)},Tf={get:vo(!1,!0)},Rf={get:vo(!0,!1)},Ec=new WeakMap,Cc=new WeakMap,bc=new WeakMap,xf=new WeakMap;function Nf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Af(t){return t.__v_skip||!Object.isExtensible(t)?0:Nf(ef(t))}function jn(t){return gs(t)?t:Eo(t,!1,vc,Sf,Ec)}function Pf(t){return Eo(t,!1,vf,Tf,Cc)}function wc(t){return Eo(t,!0,yf,Rf,bc)}function Eo(t,e,n,s,i){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Af(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function Mt(t){return gs(t)?Mt(t.__v_raw):!!(t&&t.__v_isReactive)}function gs(t){return!!(t&&t.__v_isReadonly)}function Cr(t){return!!(t&&t.__v_isShallow)}function Ic(t){return Mt(t)||gs(t)}function te(t){const e=t&&t.__v_raw;return e?te(e):t}function Nn(t){return ei(t,"__v_skip",!0),t}const ms=t=>Se(t)?jn(t):t,Co=t=>Se(t)?wc(t):t;function Sc(t){kt&&tt&&(t=te(t),gc(t.dep||(t.dep=_o())))}function Tc(t,e){t=te(t),t.dep&&Er(t.dep)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function ys(t){return Rc(t,!1)}function Of(t){return Rc(t,!0)}function Rc(t,e){return Ee(t)?t:new kf(t,e)}class kf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:te(e),this._value=n?e:ms(e)}get value(){return Sc(this),this._value}set value(e){e=this.__v_isShallow?e:te(e),_s(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ms(e),Tc(this))}}function Dt(t){return Ee(t)?t.value:t}const Mf={get:(t,e,n)=>Dt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function xc(t){return Mt(t)?t:new Proxy(t,Mf)}function Df(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=Ff(t,n);return e}class Lf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ff(t,e,n){const s=t[e];return Ee(s)?s:new Lf(t,e,n)}class Bf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new go(e,()=>{this._dirty||(this._dirty=!0,Tc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=te(this);return Sc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Hf(t,e,n=!1){let s,i;const r=U(t);return r?(s=t,i=rt):(s=t.get,i=t.set),new Bf(s,i,r||!i,n)}function Lt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){xi(r,e,n)}return i}function Je(t,e,n,s){if(U(t)){const r=Lt(t,e,n,s);return r&&ac(r)&&r.catch(o=>{xi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Je(t[r],e,n,s));return i}function xi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Lt(a,null,10,[t,o,l]);return}}Wf(t,n,i,s)}function Wf(t,e,n,s=!0){console.error(t)}let ti=!1,br=!1;const Ke=[];let Ct=0;const rs=[];let is=null,En=0;const os=[];let Nt=null,Cn=0;const Nc=Promise.resolve();let bo=null,wr=null;function wo(t){const e=bo||Nc;return t?e.then(this?t.bind(this):t):e}function Uf(t){let e=Ct+1,n=Ke.length;for(;e<n;){const s=e+n>>>1;vs(Ke[s])<t?e=s+1:n=s}return e}function Ac(t){(!Ke.length||!Ke.includes(t,ti&&t.allowRecurse?Ct+1:Ct))&&t!==wr&&(t.id==null?Ke.push(t):Ke.splice(Uf(t.id),0,t),Pc())}function Pc(){!ti&&!br&&(br=!0,bo=Nc.then(Mc))}function $f(t){const e=Ke.indexOf(t);e>Ct&&Ke.splice(e,1)}function Oc(t,e,n,s){H(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Pc()}function jf(t){Oc(t,is,rs,En)}function Vf(t){Oc(t,Nt,os,Cn)}function Ni(t,e=null){if(rs.length){for(wr=e,is=[...new Set(rs)],rs.length=0,En=0;En<is.length;En++)is[En]();is=null,En=0,wr=null,Ni(t,e)}}function kc(t){if(Ni(),os.length){const e=[...new Set(os)];if(os.length=0,Nt){Nt.push(...e);return}for(Nt=e,Nt.sort((n,s)=>vs(n)-vs(s)),Cn=0;Cn<Nt.length;Cn++)Nt[Cn]();Nt=null,Cn=0}}const vs=t=>t.id==null?1/0:t.id;function Mc(t){br=!1,ti=!0,Ni(t),Ke.sort((n,s)=>vs(n)-vs(s));const e=rt;try{for(Ct=0;Ct<Ke.length;Ct++){const n=Ke[Ct];n&&n.active!==!1&&Lt(n,null,14)}}finally{Ct=0,Ke.length=0,kc(),ti=!1,bo=null,(Ke.length||rs.length||os.length)&&Mc(t)}}function qf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ce;f&&(i=n.map(_=>_.trim())),h&&(i=n.map(gr))}let l,a=s[l=Qi(e)]||s[l=Qi(gt(e))];!a&&r&&(a=s[l=Qi(Wn(e))]),a&&Je(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Je(c,t,6,i)}}function Dc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const a=c=>{const u=Dc(c,e,!0);u&&(l=!0,ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(s.set(t,null),null):(H(r)?r.forEach(a=>o[a]=null):ke(o,r),s.set(t,o),o)}function Ai(t,e){return!t||!wi(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,Wn(e))||X(t,e))}let Qe=null,Lc=null;function ni(t){const e=Qe;return Qe=t,Lc=t&&t.type.__scopeId||null,e}function Kf(t,e=Qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Ul(-1);const r=ni(e),o=t(...i);return ni(r),s._d&&Ul(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Xi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:S}=t;let T,N;const F=ni(t);try{if(n.shapeFlag&4){const z=i||s;T=pt(u.call(z,z,h,r,_,f,m)),N=a}else{const z=e;T=pt(z.length>1?z(r,{attrs:a,slots:l,emit:c}):z(r,null)),N=e.props?a:zf(a)}}catch(z){as.length=0,xi(z,t,1),T=Oe(ot)}let $=T;if(N&&S!==!1){const z=Object.keys(N),{shapeFlag:J}=$;z.length&&J&7&&(o&&z.some(uo)&&(N=Gf(N,o)),$=Ut($,N))}return n.dirs&&($=Ut($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),T=$,ni(F),T}const zf=t=>{let e;for(const n in t)(n==="class"||n==="style"||wi(n))&&((e||(e={}))[n]=t[n]);return e},Gf=(t,e)=>{const n={};for(const s in t)(!uo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Yf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Pl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ai(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Pl(s,o,c):!0:!!o;return!1}function Pl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ai(n,r))return!0}return!1}function Qf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Xf=t=>t.__isSuspense;function Jf(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Vf(t)}function Xs(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function Ze(t,e,n=!1){const s=xe||Qe;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s.proxy):e}}const Ol={};function ls(t,e,n){return Fc(t,e,n)}function Fc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ce){const l=xe;let a,c=!1,u=!1;if(Ee(t)?(a=()=>t.value,c=Cr(t)):Mt(t)?(a=()=>t,s=!0):H(t)?(u=!0,c=t.some(N=>Mt(N)||Cr(N)),a=()=>t.map(N=>{if(Ee(N))return N.value;if(Mt(N))return Zt(N);if(U(N))return Lt(N,l,2)})):U(t)?e?a=()=>Lt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),Je(t,l,3,[f])}:a=rt,e&&s){const N=a;a=()=>Zt(N())}let h,f=N=>{h=T.onStop=()=>{Lt(N,l,4)}};if(Cs)return f=rt,e?n&&Je(e,l,3,[a(),u?[]:void 0,f]):a(),rt;let _=u?[]:Ol;const m=()=>{if(!!T.active)if(e){const N=T.run();(s||c||(u?N.some((F,$)=>_s(F,_[$])):_s(N,_)))&&(h&&h(),Je(e,l,3,[N,_===Ol?void 0:_,f]),_=N)}else T.run()};m.allowRecurse=!!e;let S;i==="sync"?S=m:i==="post"?S=()=>He(m,l&&l.suspense):S=()=>jf(m);const T=new go(a,S);return e?n?m():_=T.run():i==="post"?He(T.run.bind(T),l&&l.suspense):T.run(),()=>{T.stop(),l&&l.scope&&ho(l.scope.effects,T)}}function Zf(t,e,n){const s=this.proxy,i=Ae(t)?t.includes(".")?Bc(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=xe;An(this);const l=Fc(i,r.bind(s),n);return o?An(o):sn(),l}function Bc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Zt(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ee(t))Zt(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Zt(t[n],e);else if(lc(t)||Tn(t))t.forEach(n=>{Zt(n,e)});else if(uc(t))for(const n in t)Zt(t[n],e);return t}function ed(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $c(()=>{t.isMounted=!0}),jc(()=>{t.isUnmounting=!0}),t}const Ye=[Function,Array],td={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ye,onEnter:Ye,onAfterEnter:Ye,onEnterCancelled:Ye,onBeforeLeave:Ye,onLeave:Ye,onAfterLeave:Ye,onLeaveCancelled:Ye,onBeforeAppear:Ye,onAppear:Ye,onAfterAppear:Ye,onAppearCancelled:Ye},setup(t,{slots:e}){const n=xo(),s=ed();let i;return()=>{const r=e.default&&Wc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const S of r)if(S.type!==ot){o=S;break}}const l=te(t),{mode:a}=l;if(s.isLeaving)return Ji(o);const c=kl(o);if(!c)return Ji(o);const u=Ir(c,l,s,n);Sr(c,u);const h=n.subTree,f=h&&kl(h);let _=!1;const{getTransitionKey:m}=c.type;if(m){const S=m();i===void 0?i=S:S!==i&&(i=S,_=!0)}if(f&&f.type!==ot&&(!Xt(c,f)||_)){const S=Ir(f,l,s,n);if(Sr(f,S),a==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update()},Ji(o);a==="in-out"&&c.type!==ot&&(S.delayLeave=(T,N,F)=>{const $=Hc(s,f);$[String(f.key)]=f,T._leaveCb=()=>{N(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=F})}return o}}},nd=td;function Hc(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ir(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:S,onAppear:T,onAfterAppear:N,onAppearCancelled:F}=e,$=String(t.key),z=Hc(n,t),J=(O,Q)=>{O&&Je(O,s,9,Q)},me=(O,Q)=>{const ne=Q[1];J(O,Q),H(O)?O.every(ge=>ge.length<=1)&&ne():O.length<=1&&ne()},Y={mode:r,persisted:o,beforeEnter(O){let Q=l;if(!n.isMounted)if(i)Q=S||l;else return;O._leaveCb&&O._leaveCb(!0);const ne=z[$];ne&&Xt(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),J(Q,[O])},enter(O){let Q=a,ne=c,ge=u;if(!n.isMounted)if(i)Q=T||a,ne=N||c,ge=F||u;else return;let Ce=!1;const $e=O._enterCb=Be=>{Ce||(Ce=!0,Be?J(ge,[O]):J(ne,[O]),Y.delayedLeave&&Y.delayedLeave(),O._enterCb=void 0)};Q?me(Q,[O,$e]):$e()},leave(O,Q){const ne=String(t.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return Q();J(h,[O]);let ge=!1;const Ce=O._leaveCb=$e=>{ge||(ge=!0,Q(),$e?J(m,[O]):J(_,[O]),O._leaveCb=void 0,z[ne]===t&&delete z[ne])};z[ne]=t,f?me(f,[O,Ce]):Ce()},clone(O){return Ir(O,e,n,s)}};return Y}function Ji(t){if(Pi(t))return t=Ut(t),t.children=null,t}function kl(t){return Pi(t)?t.children?t.children[0]:void 0:t}function Sr(t,e){t.shapeFlag&6&&t.component?Sr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===qe?(o.patchFlag&128&&i++,s=s.concat(Wc(o.children,e,l))):(e||o.type!==ot)&&s.push(l!=null?Ut(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Vn(t){return U(t)?{setup:t,name:t.name}:t}const Js=t=>!!t.type.__asyncLoader,Pi=t=>t.type.__isKeepAlive;function sd(t,e){Uc(t,"a",e)}function id(t,e){Uc(t,"da",e)}function Uc(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Oi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Pi(i.parent.vnode)&&rd(s,e,n,i),i=i.parent}}function rd(t,e,n,s){const i=Oi(e,t,s,!0);Io(()=>{ho(s[e],i)},n)}function Oi(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Un(),An(n);const l=Je(e,n,t,o);return sn(),$n(),l});return s?i.unshift(r):i.push(r),r}}const Tt=t=>(e,n=xe)=>(!Cs||t==="sp")&&Oi(t,e,n),od=Tt("bm"),$c=Tt("m"),ld=Tt("bu"),ad=Tt("u"),jc=Tt("bum"),Io=Tt("um"),cd=Tt("sp"),ud=Tt("rtg"),hd=Tt("rtc");function fd(t,e=xe){Oi("ec",t,e)}function dd(t,e){const n=Qe;if(n===null)return t;const s=Mi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=ce]=e[r];U(o)&&(o={mounted:o,updated:o}),o.deep&&Zt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c})}return t}function Kt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Un(),Je(a,n,8,[t.el,l,t,e]),$n())}}const Vc="components";function pd(t,e){return gd(Vc,t,!0,e)||t}const _d=Symbol();function gd(t,e,n=!0,s=!1){const i=Qe||xe;if(i){const r=i.type;if(t===Vc){const l=zd(r,!1);if(l&&(l===e||l===gt(e)||l===Ti(gt(e))))return r}const o=Ml(i[t]||r[t],e)||Ml(i.appContext[t],e);return!o&&s?r:o}}function Ml(t,e){return t&&(t[e]||t[gt(e)]||t[Ti(gt(e))])}function md(t,e,n,s){let i;const r=n&&n[s];if(H(t)||Ae(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Se(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const Tr=t=>t?iu(t)?Mi(t)||t.proxy:Tr(t.parent):null,si=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Tr(t.parent),$root:t=>Tr(t.root),$emit:t=>t.emit,$options:t=>Kc(t),$forceUpdate:t=>t.f||(t.f=()=>Ac(t.update)),$nextTick:t=>t.n||(t.n=wo.bind(t.proxy)),$watch:t=>Zf.bind(t)}),yd={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(s!==ce&&X(s,e))return o[e]=1,s[e];if(i!==ce&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==ce&&X(n,e))return o[e]=4,n[e];Rr&&(o[e]=0)}}const u=si[e];let h,f;if(u)return e==="$attrs"&&ze(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ce&&X(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,X(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return i!==ce&&X(i,e)?(i[e]=n,!0):s!==ce&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ce&&X(t,o)||e!==ce&&X(e,o)||(l=r[0])&&X(l,o)||X(s,o)||X(si,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Rr=!0;function vd(t){const e=Kc(t),n=t.proxy,s=t.ctx;Rr=!1,e.beforeCreate&&Dl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:S,deactivated:T,beforeDestroy:N,beforeUnmount:F,destroyed:$,unmounted:z,render:J,renderTracked:me,renderTriggered:Y,errorCaptured:O,serverPrefetch:Q,expose:ne,inheritAttrs:ge,components:Ce,directives:$e,filters:Be}=e;if(c&&Ed(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const ie=o[ue];U(ie)&&(s[ue]=ie.bind(n))}if(i){const ue=i.call(n,n);Se(ue)&&(t.data=jn(ue))}if(Rr=!0,r)for(const ue in r){const ie=r[ue],je=U(ie)?ie.bind(n,n):U(ie.get)?ie.get.bind(n,n):rt,_n=!U(ie)&&U(ie.set)?ie.set.bind(n):rt,yt=We({get:je,set:_n});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>yt.value,set:ut=>yt.value=ut})}if(l)for(const ue in l)qc(l[ue],s,n,ue);if(a){const ue=U(a)?a.call(n):a;Reflect.ownKeys(ue).forEach(ie=>{Xs(ie,ue[ie])})}u&&Dl(u,t,"c");function we(ue,ie){H(ie)?ie.forEach(je=>ue(je.bind(n))):ie&&ue(ie.bind(n))}if(we(od,h),we($c,f),we(ld,_),we(ad,m),we(sd,S),we(id,T),we(fd,O),we(hd,me),we(ud,Y),we(jc,F),we(Io,z),we(cd,Q),H(ne))if(ne.length){const ue=t.exposed||(t.exposed={});ne.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:je=>n[ie]=je})})}else t.exposed||(t.exposed={});J&&t.render===rt&&(t.render=J),ge!=null&&(t.inheritAttrs=ge),Ce&&(t.components=Ce),$e&&(t.directives=$e)}function Ed(t,e,n=rt,s=!1){H(t)&&(t=xr(t));for(const i in t){const r=t[i];let o;Se(r)?"default"in r?o=Ze(r.from||i,r.default,!0):o=Ze(r.from||i):o=Ze(r),Ee(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Dl(t,e,n){Je(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function qc(t,e,n,s){const i=s.includes(".")?Bc(n,s):()=>n[s];if(Ae(t)){const r=e[t];U(r)&&ls(i,r)}else if(U(t))ls(i,t.bind(n));else if(Se(t))if(H(t))t.forEach(r=>qc(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&ls(i,r,t)}}function Kc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>ii(a,c,o,!0)),ii(a,e,o)),r.set(e,a),a}function ii(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ii(t,r,n,!0),i&&i.forEach(o=>ii(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Cd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Cd={data:Ll,props:Gt,emits:Gt,methods:Gt,computed:Gt,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Gt,directives:Gt,watch:wd,provide:Ll,inject:bd};function Ll(t,e){return e?t?function(){return ke(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function bd(t,e){return Gt(xr(t),xr(e))}function xr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function De(t,e){return t?[...new Set([].concat(t,e))]:e}function Gt(t,e){return t?ke(ke(Object.create(null),t),e):e}function wd(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const s in e)n[s]=De(t[s],e[s]);return n}function Id(t,e,n,s=!1){const i={},r={};ei(r,ki,1),t.propsDefaults=Object.create(null),zc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Pf(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Sd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=te(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ai(t.emitsOptions,f))continue;const _=e[f];if(a)if(X(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const m=gt(f);i[m]=Nr(a,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{zc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!X(e,h)&&((u=Wn(h))===h||!X(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Nr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!X(e,h)&&!0)&&(delete r[h],c=!0)}c&&St(t,"set","$attrs")}function zc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Ys(a))continue;const c=e[a];let u;i&&X(i,u=gt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:Ai(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=te(n),c=l||ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Nr(i,a,h,c[h],t,!X(c,h))}}return o}function Nr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=X(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&U(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(An(i),s=c[n]=a.call(null,e),sn())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Wn(n))&&(s=!0))}return s}function Gc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!U(t)){const u=h=>{a=!0;const[f,_]=Gc(h,e,!0);ke(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return s.set(t,Sn),Sn;if(H(r))for(let u=0;u<r.length;u++){const h=gt(r[u]);Fl(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=gt(u);if(Fl(h)){const f=r[u],_=o[h]=H(f)||U(f)?{type:f}:f;if(_){const m=Wl(Boolean,_.type),S=Wl(String,_.type);_[0]=m>-1,_[1]=S<0||m<S,(m>-1||X(_,"default"))&&l.push(h)}}}const c=[o,l];return s.set(t,c),c}function Fl(t){return t[0]!=="$"}function Bl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Hl(t,e){return Bl(t)===Bl(e)}function Wl(t,e){return H(e)?e.findIndex(n=>Hl(n,t)):U(e)&&Hl(e,t)?0:-1}const Yc=t=>t[0]==="_"||t==="$stable",So=t=>H(t)?t.map(pt):[pt(t)],Td=(t,e,n)=>{if(e._n)return e;const s=Kf((...i)=>So(e(...i)),n);return s._c=!1,s},Qc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Yc(i))continue;const r=t[i];if(U(r))e[i]=Td(i,r,s);else if(r!=null){const o=So(r);e[i]=()=>o}}},Xc=(t,e)=>{const n=So(e);t.slots.default=()=>n},Rd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=te(e),ei(e,"_",n)):Qc(e,t.slots={})}else t.slots={},e&&Xc(t,e);ei(t.slots,ki,1)},xd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ce;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ke(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Qc(e,i)),o=e}else e&&(Xc(t,e),o={default:1});if(r)for(const l in i)!Yc(l)&&!(l in o)&&delete i[l]};function Jc(){return{app:null,config:{isNativeTag:Xh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nd=0;function Ad(t,e){return function(s,i=null){U(s)||(s=Object.assign({},s)),i!=null&&!Se(i)&&(i=null);const r=Jc(),o=new Set;let l=!1;const a=r.app={_uid:Nd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Yd,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(a,...u)):U(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=Oe(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,Mi(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Ar(t,e,n,s,i=!1){if(H(t)){t.forEach((f,_)=>Ar(f,e&&(H(e)?e[_]:e),n,s,i));return}if(Js(s)&&!i)return;const r=s.shapeFlag&4?Mi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ce?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(Ae(c)?(u[c]=null,X(h,c)&&(h[c]=null)):Ee(c)&&(c.value=null)),U(a))Lt(a,l,12,[o,u]);else{const f=Ae(a),_=Ee(a);if(f||_){const m=()=>{if(t.f){const S=f?u[a]:a.value;i?H(S)&&ho(S,r):H(S)?S.includes(r)||S.push(r):f?(u[a]=[r],X(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,X(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,He(m,n)):m()}}}const He=Jf;function Pd(t){return Od(t)}function Od(t,e){const n=sf();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=rt,cloneNode:m,insertStaticContent:S}=t,T=(d,p,g,E=null,v=null,I=null,A=!1,w=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Xt(d,p)&&(E=M(d),Ge(d,v,I,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:C,ref:D,shapeFlag:P}=p;switch(C){case To:N(d,p,g,E);break;case ot:F(d,p,g,E);break;case Zi:d==null&&$(p,g,E,A);break;case qe:$e(d,p,g,E,v,I,A,w,R);break;default:P&1?me(d,p,g,E,v,I,A,w,R):P&6?Be(d,p,g,E,v,I,A,w,R):(P&64||P&128)&&C.process(d,p,g,E,v,I,A,w,R,he)}D!=null&&v&&Ar(D,d&&d.ref,I,p||d,!p)},N=(d,p,g,E)=>{if(d==null)s(p.el=l(p.children),g,E);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},F=(d,p,g,E)=>{d==null?s(p.el=a(p.children||""),g,E):p.el=d.el},$=(d,p,g,E)=>{[d.el,d.anchor]=S(d.children,p,g,E,d.el,d.anchor)},z=({el:d,anchor:p},g,E)=>{let v;for(;d&&d!==p;)v=f(d),s(d,g,E),d=v;s(p,g,E)},J=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},me=(d,p,g,E,v,I,A,w,R)=>{A=A||p.type==="svg",d==null?Y(p,g,E,v,I,A,w,R):ne(d,p,v,I,A,w,R)},Y=(d,p,g,E,v,I,A,w)=>{let R,C;const{type:D,props:P,shapeFlag:L,transition:W,patchFlag:Z,dirs:oe}=d;if(d.el&&m!==void 0&&Z===-1)R=d.el=m(d.el);else{if(R=d.el=o(d.type,I,P&&P.is,P),L&8?u(R,d.children):L&16&&Q(d.children,R,null,E,v,I&&D!=="foreignObject",A,w),oe&&Kt(d,null,E,"created"),P){for(const _e in P)_e!=="value"&&!Ys(_e)&&r(R,_e,null,P[_e],I,d.children,E,v,x);"value"in P&&r(R,"value",null,P.value),(C=P.onVnodeBeforeMount)&&ft(C,E,d)}O(R,d,d.scopeId,A,E)}oe&&Kt(d,null,E,"beforeMount");const le=(!v||v&&!v.pendingBranch)&&W&&!W.persisted;le&&W.beforeEnter(R),s(R,p,g),((C=P&&P.onVnodeMounted)||le||oe)&&He(()=>{C&&ft(C,E,d),le&&W.enter(R),oe&&Kt(d,null,E,"mounted")},v)},O=(d,p,g,E,v)=>{if(g&&_(d,g),E)for(let I=0;I<E.length;I++)_(d,E[I]);if(v){let I=v.subTree;if(p===I){const A=v.vnode;O(d,A,A.scopeId,A.slotScopeIds,v.parent)}}},Q=(d,p,g,E,v,I,A,w,R=0)=>{for(let C=R;C<d.length;C++){const D=d[C]=w?At(d[C]):pt(d[C]);T(null,D,p,g,E,v,I,A,w)}},ne=(d,p,g,E,v,I,A)=>{const w=p.el=d.el;let{patchFlag:R,dynamicChildren:C,dirs:D}=p;R|=d.patchFlag&16;const P=d.props||ce,L=p.props||ce;let W;g&&zt(g,!1),(W=L.onVnodeBeforeUpdate)&&ft(W,g,p,d),D&&Kt(p,d,g,"beforeUpdate"),g&&zt(g,!0);const Z=v&&p.type!=="foreignObject";if(C?ge(d.dynamicChildren,C,w,g,E,Z,I):A||je(d,p,w,null,g,E,Z,I,!1),R>0){if(R&16)Ce(w,p,P,L,g,E,v);else if(R&2&&P.class!==L.class&&r(w,"class",null,L.class,v),R&4&&r(w,"style",P.style,L.style,v),R&8){const oe=p.dynamicProps;for(let le=0;le<oe.length;le++){const _e=oe[le],et=P[_e],gn=L[_e];(gn!==et||_e==="value")&&r(w,_e,et,gn,v,d.children,g,E,x)}}R&1&&d.children!==p.children&&u(w,p.children)}else!A&&C==null&&Ce(w,p,P,L,g,E,v);((W=L.onVnodeUpdated)||D)&&He(()=>{W&&ft(W,g,p,d),D&&Kt(p,d,g,"updated")},E)},ge=(d,p,g,E,v,I,A)=>{for(let w=0;w<p.length;w++){const R=d[w],C=p[w],D=R.el&&(R.type===qe||!Xt(R,C)||R.shapeFlag&70)?h(R.el):g;T(R,C,D,null,E,v,I,A,!0)}},Ce=(d,p,g,E,v,I,A)=>{if(g!==E){for(const w in E){if(Ys(w))continue;const R=E[w],C=g[w];R!==C&&w!=="value"&&r(d,w,C,R,A,p.children,v,I,x)}if(g!==ce)for(const w in g)!Ys(w)&&!(w in E)&&r(d,w,g[w],null,A,p.children,v,I,x);"value"in E&&r(d,"value",g.value,E.value)}},$e=(d,p,g,E,v,I,A,w,R)=>{const C=p.el=d?d.el:l(""),D=p.anchor=d?d.anchor:l("");let{patchFlag:P,dynamicChildren:L,slotScopeIds:W}=p;W&&(w=w?w.concat(W):W),d==null?(s(C,g,E),s(D,g,E),Q(p.children,g,D,v,I,A,w,R)):P>0&&P&64&&L&&d.dynamicChildren?(ge(d.dynamicChildren,L,g,v,I,A,w),(p.key!=null||v&&p===v.subTree)&&Zc(d,p,!0)):je(d,p,g,D,v,I,A,w,R)},Be=(d,p,g,E,v,I,A,w,R)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?v.ctx.activate(p,g,E,A,R):be(p,g,E,v,I,A,R):we(d,p,R)},be=(d,p,g,E,v,I,A)=>{const w=d.component=$d(d,E,v);if(Pi(d)&&(w.ctx.renderer=he),jd(w),w.asyncDep){if(v&&v.registerDep(w,ue),!d.el){const R=w.subTree=Oe(ot);F(null,R,p,g)}return}ue(w,d,p,g,v,I,A)},we=(d,p,g)=>{const E=p.component=d.component;if(Yf(d,p,g))if(E.asyncDep&&!E.asyncResolved){ie(E,p,g);return}else E.next=p,$f(E.update),E.update();else p.el=d.el,E.vnode=p},ue=(d,p,g,E,v,I,A)=>{const w=()=>{if(d.isMounted){let{next:D,bu:P,u:L,parent:W,vnode:Z}=d,oe=D,le;zt(d,!1),D?(D.el=Z.el,ie(d,D,A)):D=Z,P&&Qs(P),(le=D.props&&D.props.onVnodeBeforeUpdate)&&ft(le,W,D,Z),zt(d,!0);const _e=Xi(d),et=d.subTree;d.subTree=_e,T(et,_e,h(et.el),M(et),d,v,I),D.el=_e.el,oe===null&&Qf(d,_e.el),L&&He(L,v),(le=D.props&&D.props.onVnodeUpdated)&&He(()=>ft(le,W,D,Z),v)}else{let D;const{el:P,props:L}=p,{bm:W,m:Z,parent:oe}=d,le=Js(p);if(zt(d,!1),W&&Qs(W),!le&&(D=L&&L.onVnodeBeforeMount)&&ft(D,oe,p),zt(d,!0),P&&j){const _e=()=>{d.subTree=Xi(d),j(P,d.subTree,d,v,null)};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=Xi(d);T(null,_e,g,E,d,v,I),p.el=_e.el}if(Z&&He(Z,v),!le&&(D=L&&L.onVnodeMounted)){const _e=p;He(()=>ft(D,oe,_e),v)}(p.shapeFlag&256||oe&&Js(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&He(d.a,v),d.isMounted=!0,p=g=E=null}},R=d.effect=new go(w,()=>Ac(C),d.scope),C=d.update=()=>R.run();C.id=d.uid,zt(d,!0),C()},ie=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,Sd(d,p.props,E,g),xd(d,p.children,g),Un(),Ni(void 0,d.update),$n()},je=(d,p,g,E,v,I,A,w,R=!1)=>{const C=d&&d.children,D=d?d.shapeFlag:0,P=p.children,{patchFlag:L,shapeFlag:W}=p;if(L>0){if(L&128){yt(C,P,g,E,v,I,A,w,R);return}else if(L&256){_n(C,P,g,E,v,I,A,w,R);return}}W&8?(D&16&&x(C,v,I),P!==C&&u(g,P)):D&16?W&16?yt(C,P,g,E,v,I,A,w,R):x(C,v,I,!0):(D&8&&u(g,""),W&16&&Q(P,g,E,v,I,A,w,R))},_n=(d,p,g,E,v,I,A,w,R)=>{d=d||Sn,p=p||Sn;const C=d.length,D=p.length,P=Math.min(C,D);let L;for(L=0;L<P;L++){const W=p[L]=R?At(p[L]):pt(p[L]);T(d[L],W,g,null,v,I,A,w,R)}C>D?x(d,v,I,!0,!1,P):Q(p,g,E,v,I,A,w,R,P)},yt=(d,p,g,E,v,I,A,w,R)=>{let C=0;const D=p.length;let P=d.length-1,L=D-1;for(;C<=P&&C<=L;){const W=d[C],Z=p[C]=R?At(p[C]):pt(p[C]);if(Xt(W,Z))T(W,Z,g,null,v,I,A,w,R);else break;C++}for(;C<=P&&C<=L;){const W=d[P],Z=p[L]=R?At(p[L]):pt(p[L]);if(Xt(W,Z))T(W,Z,g,null,v,I,A,w,R);else break;P--,L--}if(C>P){if(C<=L){const W=L+1,Z=W<D?p[W].el:E;for(;C<=L;)T(null,p[C]=R?At(p[C]):pt(p[C]),g,Z,v,I,A,w,R),C++}}else if(C>L)for(;C<=P;)Ge(d[C],v,I,!0),C++;else{const W=C,Z=C,oe=new Map;for(C=Z;C<=L;C++){const Ve=p[C]=R?At(p[C]):pt(p[C]);Ve.key!=null&&oe.set(Ve.key,C)}let le,_e=0;const et=L-Z+1;let gn=!1,El=0;const Xn=new Array(et);for(C=0;C<et;C++)Xn[C]=0;for(C=W;C<=P;C++){const Ve=d[C];if(_e>=et){Ge(Ve,v,I,!0);continue}let ht;if(Ve.key!=null)ht=oe.get(Ve.key);else for(le=Z;le<=L;le++)if(Xn[le-Z]===0&&Xt(Ve,p[le])){ht=le;break}ht===void 0?Ge(Ve,v,I,!0):(Xn[ht-Z]=C+1,ht>=El?El=ht:gn=!0,T(Ve,p[ht],g,null,v,I,A,w,R),_e++)}const Cl=gn?kd(Xn):Sn;for(le=Cl.length-1,C=et-1;C>=0;C--){const Ve=Z+C,ht=p[Ve],bl=Ve+1<D?p[Ve+1].el:E;Xn[C]===0?T(null,ht,g,bl,v,I,A,w,R):gn&&(le<0||C!==Cl[le]?ut(ht,g,bl,2):le--)}}},ut=(d,p,g,E,v=null)=>{const{el:I,type:A,transition:w,children:R,shapeFlag:C}=d;if(C&6){ut(d.component.subTree,p,g,E);return}if(C&128){d.suspense.move(p,g,E);return}if(C&64){A.move(d,p,g,he);return}if(A===qe){s(I,p,g);for(let P=0;P<R.length;P++)ut(R[P],p,g,E);s(d.anchor,p,g);return}if(A===Zi){z(d,p,g);return}if(E!==2&&C&1&&w)if(E===0)w.beforeEnter(I),s(I,p,g),He(()=>w.enter(I),v);else{const{leave:P,delayLeave:L,afterLeave:W}=w,Z=()=>s(I,p,g),oe=()=>{P(I,()=>{Z(),W&&W()})};L?L(I,Z,oe):oe()}else s(I,p,g)},Ge=(d,p,g,E=!1,v=!1)=>{const{type:I,props:A,ref:w,children:R,dynamicChildren:C,shapeFlag:D,patchFlag:P,dirs:L}=d;if(w!=null&&Ar(w,null,g,d,!0),D&256){p.ctx.deactivate(d);return}const W=D&1&&L,Z=!Js(d);let oe;if(Z&&(oe=A&&A.onVnodeBeforeUnmount)&&ft(oe,p,d),D&6)k(d.component,g,E);else{if(D&128){d.suspense.unmount(g,E);return}W&&Kt(d,null,p,"beforeUnmount"),D&64?d.type.remove(d,p,g,v,he,E):C&&(I!==qe||P>0&&P&64)?x(C,p,g,!1,!0):(I===qe&&P&384||!v&&D&16)&&x(R,p,g),E&&Qn(d)}(Z&&(oe=A&&A.onVnodeUnmounted)||W)&&He(()=>{oe&&ft(oe,p,d),W&&Kt(d,null,p,"unmounted")},g)},Qn=d=>{const{type:p,el:g,anchor:E,transition:v}=d;if(p===qe){y(g,E);return}if(p===Zi){J(d);return}const I=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:w}=v,R=()=>A(g,I);w?w(d.el,I,R):R()}else I()},y=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},k=(d,p,g)=>{const{bum:E,scope:v,update:I,subTree:A,um:w}=d;E&&Qs(E),v.stop(),I&&(I.active=!1,Ge(A,d,p,g)),w&&He(w,p),He(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},x=(d,p,g,E=!1,v=!1,I=0)=>{for(let A=I;A<d.length;A++)Ge(d[A],p,g,E,v)},M=d=>d.shapeFlag&6?M(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),re=(d,p,g)=>{d==null?p._vnode&&Ge(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,g),kc(),p._vnode=d},he={p:T,um:Ge,m:ut,r:Qn,mt:be,mc:Q,pc:je,pbc:ge,n:M,o:t};let V,j;return e&&([V,j]=e(he)),{render:re,hydrate:V,createApp:Ad(re,V)}}function zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zc(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=At(i[r]),l.el=o.el),n||Zc(o,l))}}function kd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Md=t=>t.__isTeleport,qe=Symbol(void 0),To=Symbol(void 0),ot=Symbol(void 0),Zi=Symbol(void 0),as=[];let st=null;function wt(t=!1){as.push(st=t?null:[])}function Dd(){as.pop(),st=as[as.length-1]||null}let Es=1;function Ul(t){Es+=t}function eu(t){return t.dynamicChildren=Es>0?st||Sn:null,Dd(),Es>0&&st&&st.push(t),t}function nn(t,e,n,s,i,r){return eu(_t(t,e,n,s,i,r,!0))}function tu(t,e,n,s,i){return eu(Oe(t,e,n,s,i,!0))}function Pr(t){return t?t.__v_isVNode===!0:!1}function Xt(t,e){return t.type===e.type&&t.key===e.key}const ki="__vInternal",nu=({key:t})=>t!=null?t:null,Zs=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ae(t)||Ee(t)||U(t)?{i:Qe,r:t,k:e,f:!!n}:t:null;function _t(t,e=null,n=null,s=0,i=null,r=t===qe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nu(e),ref:e&&Zs(e),scopeId:Lc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Ro(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Ae(n)?8:16),Es>0&&!o&&st&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&st.push(a),a}const Oe=Ld;function Ld(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===_d)&&(t=ot),Pr(t)){const l=Ut(t,e,!0);return n&&Ro(l,n),Es>0&&!r&&st&&(l.shapeFlag&6?st[st.indexOf(t)]=l:st.push(l)),l.patchFlag|=-2,l}if(Gd(t)&&(t=t.__vccOpts),e){e=Fd(e);let{class:l,style:a}=e;l&&!Ae(l)&&(e.class=bi(l)),Se(a)&&(Ic(a)&&!H(a)&&(a=ke({},a)),e.style=co(a))}const o=Ae(t)?1:Xf(t)?128:Md(t)?64:Se(t)?4:U(t)?2:0;return _t(t,e,n,s,i,o,r,!0)}function Fd(t){return t?Ic(t)||ki in t?ke({},t):t:null}function Ut(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Hd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&nu(l),ref:e&&e.ref?n&&i?H(i)?i.concat(Zs(e)):[i,Zs(e)]:Zs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ut(t.ssContent),ssFallback:t.ssFallback&&Ut(t.ssFallback),el:t.el,anchor:t.anchor}}function Bd(t=" ",e=0){return Oe(To,null,t,e)}function su(t="",e=!1){return e?(wt(),tu(ot,null,t)):Oe(ot,null,t)}function pt(t){return t==null||typeof t=="boolean"?Oe(ot):H(t)?Oe(qe,null,t.slice()):typeof t=="object"?At(t):Oe(To,null,String(t))}function At(t){return t.el===null||t.memo?t:Ut(t)}function Ro(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ro(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ki in e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),s&64?(n=16,e=[Bd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=bi([e.class,s.class]));else if(i==="style")e.style=co([e.style,s.style]);else if(wi(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ft(t,e,n,s=null){Je(t,e,7,[n,s])}const Wd=Jc();let Ud=0;function $d(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Wd,r={uid:Ud++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new hc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gc(s,i),emitsOptions:Dc(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=qf.bind(null,r),t.ce&&t.ce(r),r}let xe=null;const xo=()=>xe||Qe,An=t=>{xe=t,t.scope.on()},sn=()=>{xe&&xe.scope.off(),xe=null};function iu(t){return t.vnode.shapeFlag&4}let Cs=!1;function jd(t,e=!1){Cs=e;const{props:n,children:s}=t.vnode,i=iu(t);Id(t,n,i,e),Rd(t,s);const r=i?Vd(t,e):void 0;return Cs=!1,r}function Vd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Nn(new Proxy(t.ctx,yd));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Kd(t):null;An(t),Un();const r=Lt(s,t,0,[t.props,i]);if($n(),sn(),ac(r)){if(r.then(sn,sn),e)return r.then(o=>{$l(t,o,e)}).catch(o=>{xi(o,t,0)});t.asyncDep=r}else $l(t,r,e)}else ru(t,e)}function $l(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=xc(e)),ru(t,n)}let jl;function ru(t,e,n){const s=t.type;if(!t.render){if(!e&&jl&&!s.render){const i=s.template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ke(ke({isCustomElement:r,delimiters:l},o),a);s.render=jl(i,c)}}t.render=s.render||rt}An(t),Un(),vd(t),$n(),sn()}function qd(t){return new Proxy(t.attrs,{get(e,n){return ze(t,"get","$attrs"),e[n]}})}function Kd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=qd(t))},slots:t.slots,emit:t.emit,expose:e}}function Mi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(xc(Nn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)}}))}function zd(t,e=!0){return U(t)?t.displayName||t.name:t.name||e&&t.__name}function Gd(t){return U(t)&&"__vccOpts"in t}const We=(t,e)=>Hf(t,e,Cs);function ou(t,e,n){const s=arguments.length;return s===2?Se(e)&&!H(e)?Pr(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Pr(n)&&(n=[n]),Oe(t,e,n))}const Yd="3.2.37",Qd="http://www.w3.org/2000/svg",Jt=typeof document<"u"?document:null,Vl=Jt&&Jt.createElement("template"),Xd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Jt.createElementNS(Qd,t):Jt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Vl.innerHTML=s?`<svg>${t}</svg>`:t;const l=Vl.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Zd(t,e,n){const s=t.style,i=Ae(n);if(n&&!i){for(const r in n)Or(s,r,n[r]);if(e&&!Ae(e))for(const r in e)n[r]==null&&Or(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ql=/\s*!important$/;function Or(t,e,n){if(H(n))n.forEach(s=>Or(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ep(t,e);ql.test(n)?t.setProperty(Wn(s),n.replace(ql,""),"important"):t[s]=n}}const Kl=["Webkit","Moz","ms"],er={};function ep(t,e){const n=er[e];if(n)return n;let s=gt(e);if(s!=="filter"&&s in t)return er[e]=s;s=Ti(s);for(let i=0;i<Kl.length;i++){const r=Kl[i]+s;if(r in t)return er[e]=r}return e}const zl="http://www.w3.org/1999/xlink";function tp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zl,e.slice(6,e.length)):t.setAttributeNS(zl,e,n);else{const r=zh(e);n==null||r&&!rc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function np(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n==null?"":n;(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=rc(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}const[lu,sp]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let kr=0;const ip=Promise.resolve(),rp=()=>{kr=0},op=()=>kr||(ip.then(rp),kr=lu());function bn(t,e,n,s){t.addEventListener(e,n,s)}function lp(t,e,n,s){t.removeEventListener(e,n,s)}function ap(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=cp(e);if(s){const c=r[e]=up(s,i);bn(t,l,c,a)}else o&&(lp(t,l,o,a),r[e]=void 0)}}const Gl=/(?:Once|Passive|Capture)$/;function cp(t){let e;if(Gl.test(t)){e={};let n;for(;n=t.match(Gl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Wn(t.slice(2)),e]}function up(t,e){const n=s=>{const i=s.timeStamp||lu();(sp||i>=n.attached-1)&&Je(hp(s,n.value),e,5,[s])};return n.value=t,n.attached=op(),n}function hp(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Yl=/^on[a-z]/,fp=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?Jd(t,s,i):e==="style"?Zd(t,n,s):wi(e)?uo(e)||ap(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dp(t,e,s,i))?np(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),tp(t,e,s,i))};function dp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Yl.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Yl.test(e)&&Ae(n)?!1:e in t}const pp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};nd.props;const Ql=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Qs(e,n):e};function _p(t){t.target.composing=!0}function Xl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gp={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ql(i);const r=s||i.props&&i.props.type==="number";bn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=gr(l)),t._assign(l)}),n&&bn(t,"change",()=>{t.value=t.value.trim()}),e||(bn(t,"compositionstart",_p),bn(t,"compositionend",Xl),bn(t,"change",Xl))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ql(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&gr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},mp=["ctrl","shift","alt","meta"],yp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>mp.some(n=>t[`${n}Key`]&&!e.includes(n))},Mr=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=yp[e[i]];if(r&&r(n,e))return}return t(n,...s)},vp=ke({patchProp:fp},Xd);let Jl;function Ep(){return Jl||(Jl=Pd(vp))}const Cp=(...t)=>{const e=Ep().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=bp(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function bp(t){return Ae(t)?document.querySelector(t):t}var wp=!1;/*!
  * pinia v2.0.17
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let au;const Di=t=>au=t,cu=Symbol();function Dr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var cs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(cs||(cs={}));function Ip(){const t=fc(!0),e=t.run(()=>ys({}));let n=[],s=[];const i=Nn({install(r){Di(i),i._a=r,r.provide(cu,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!wp?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const uu=()=>{};function Zl(t,e,n,s=uu){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&xo()&&Io(i),i}function mn(t,...e){t.slice().forEach(n=>{n(...e)})}function Lr(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Dr(i)&&Dr(s)&&t.hasOwnProperty(n)&&!Ee(s)&&!Mt(s)?t[n]=Lr(i,s):t[n]=s}return t}const Sp=Symbol();function Tp(t){return!Dr(t)||!t.hasOwnProperty(Sp)}const{assign:Et}=Object;function Rp(t){return!!(Ee(t)&&t.effect)}function xp(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let a;function c(){l||(n.state.value[t]=i?i():{});const u=Df(n.state.value[t]);return Et(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Nn(We(()=>{Di(n);const _=n._s.get(t);return o[f].call(_,_)})),h),{}))}return a=hu(t,c,e,n,s,!0),a.$reset=function(){const h=i?i():{};this.$patch(f=>{Et(f,h)})},a}function hu(t,e,n={},s,i,r){let o;const l=Et({actions:{}},n),a={deep:!0};let c,u,h=Nn([]),f=Nn([]),_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),ys({});let S;function T(Y){let O;c=u=!1,typeof Y=="function"?(Y(s.state.value[t]),O={type:cs.patchFunction,storeId:t,events:_}):(Lr(s.state.value[t],Y),O={type:cs.patchObject,payload:Y,storeId:t,events:_});const Q=S=Symbol();wo().then(()=>{S===Q&&(c=!0)}),u=!0,mn(h,O,s.state.value[t])}const N=uu;function F(){o.stop(),h=[],f=[],s._s.delete(t)}function $(Y,O){return function(){Di(s);const Q=Array.from(arguments),ne=[],ge=[];function Ce(be){ne.push(be)}function $e(be){ge.push(be)}mn(f,{args:Q,name:Y,store:J,after:Ce,onError:$e});let Be;try{Be=O.apply(this&&this.$id===t?this:J,Q)}catch(be){throw mn(ge,be),be}return Be instanceof Promise?Be.then(be=>(mn(ne,be),be)).catch(be=>(mn(ge,be),Promise.reject(be))):(mn(ne,Be),Be)}}const z={_p:s,$id:t,$onAction:Zl.bind(null,f),$patch:T,$reset:N,$subscribe(Y,O={}){const Q=Zl(h,Y,O.detached,()=>ne()),ne=o.run(()=>ls(()=>s.state.value[t],ge=>{(O.flush==="sync"?u:c)&&Y({storeId:t,type:cs.direct,events:_},ge)},Et({},a,O)));return Q},$dispose:F},J=jn(Et({},z));s._s.set(t,J);const me=s._e.run(()=>(o=fc(),o.run(()=>e())));for(const Y in me){const O=me[Y];if(Ee(O)&&!Rp(O)||Mt(O))r||(m&&Tp(O)&&(Ee(O)?O.value=m[Y]:Lr(O,m[Y])),s.state.value[t][Y]=O);else if(typeof O=="function"){const Q=$(Y,O);me[Y]=Q,l.actions[Y]=O}}return Et(J,me),Et(te(J),me),Object.defineProperty(J,"$state",{get:()=>s.state.value[t],set:Y=>{T(O=>{Et(O,Y)})}}),s._p.forEach(Y=>{Et(J,o.run(()=>Y({store:J,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(J.$state,m),c=!0,u=!0,J}function Np(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,a){const c=xo();return l=l||c&&Ze(cu),l&&Di(l),l=au,l._s.has(s)||(r?hu(s,e,i,l):xp(s,i,l)),l._s.get(s)}return o.$id=s,o}const Ap="modulepreload",Pp=function(t){return"/vue-link-shortener/"+t},ea={},Op=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=Pp(i),i in ea)return;ea[i]=!0;const r=i.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":Ap,r||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),r)return new Promise((a,c)=>{l.addEventListener("load",a),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const wn=typeof window<"u";function kp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function tr(t,e){const n={};for(const s in e){const i=e[s];n[s]=at(i)?i.map(t):t(i)}return n}const us=()=>{},at=Array.isArray,Mp=/\/$/,Dp=t=>t.replace(Mp,"");function nr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=Hp(s!=null?s:e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Lp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ta(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Fp(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Pn(e.matched[s],n.matched[i])&&fu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bp(t[n],e[n]))return!1;return!0}function Bp(t,e){return at(t)?na(t,e):at(e)?na(e,t):t===e}function na(t,e){return at(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Hp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var bs;(function(t){t.pop="pop",t.push="push"})(bs||(bs={}));var hs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hs||(hs={}));function Wp(t){if(!t)if(wn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Dp(t)}const Up=/^[^#]+#/;function $p(t,e){return t.replace(Up,"#")+e}function jp(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Li=()=>({left:window.pageXOffset,top:window.pageYOffset});function Vp(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=jp(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function sa(t,e){return(history.state?history.state.position-e:-1)+t}const Fr=new Map;function qp(t,e){Fr.set(t,e)}function Kp(t){const e=Fr.get(t);return Fr.delete(t),e}let zp=()=>location.protocol+"//"+location.host;function du(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),ta(a,"")}return ta(n,t)+s+i}function Gp(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=du(t,location),m=n.value,S=e.value;let T=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}T=S?f.position-S.position:0}else s(_);i.forEach(N=>{N(n.value,m,{delta:T,type:bs.pop,direction:T?T>0?hs.forward:hs.back:hs.unknown})})};function a(){o=n.value}function c(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;!f.state||f.replaceState(ae({},f.state,{scroll:Li()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:h}}function ia(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Li():null}}function Yp(t){const{history:e,location:n}=window,s={value:du(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:zp()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(a,c){const u=ae({},e.state,ia(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=ae({},i.value,e.state,{forward:a,scroll:Li()});r(u.current,u,!0);const h=ae({},ia(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function Qp(t){t=Wp(t);const e=Yp(t),n=Gp(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ae({location:"",base:t,go:s,createHref:$p.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Xp(t){return typeof t=="string"||t&&typeof t=="object"}function pu(t){return typeof t=="string"||typeof t=="symbol"}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_u=Symbol("");var ra;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ra||(ra={}));function On(t,e){return ae(new Error,{type:t,[_u]:!0},e)}function vt(t,e){return t instanceof Error&&_u in t&&(e==null||!!(t.type&e))}const oa="[^/]+?",Jp={sensitive:!1,strict:!1,start:!0,end:!0},Zp=/[.+*?^${}()[\]/\\]/g;function e_(t,e){const n=ae({},Jp,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(Zp,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:S,optional:T,regexp:N}=f;r.push({name:m,repeatable:S,optional:T});const F=N||oa;if(F!==oa){_+=10;try{new RegExp(`(${F})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${m}" (${F}): `+z.message)}}let $=S?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||($=T&&c.length<2?`(?:/${$})`:"/"+$),T&&($+="?"),i+=$,_+=20,T&&(_+=-8),S&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:S,optional:T}=_,N=m in c?c[m]:"";if(at(N)&&!S)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const F=at(N)?N.join("/"):N;if(!F)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=F}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function t_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function n_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=t_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(la(s))return 1;if(la(i))return-1}return i.length-s.length}function la(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const s_={type:0,value:""},i_=/[a-zA-Z0-9_]/;function r_(t){if(!t)return[[]];if(t==="/")return[[s_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:i_.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function o_(t,e,n){const s=e_(r_(t.path),n),i=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function l_(t,e){const n=[],s=new Map;e=ca({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=c_(u);m.aliasOf=f&&f.record;const S=ca(e,u),T=[m];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of $)T.push(ae({},m,{components:f?f.record.components:m.components,path:z,aliasOf:f?f.record:m}))}let N,F;for(const $ of T){const{path:z}=$;if(h&&z[0]!=="/"){const J=h.record.path,me=J[J.length-1]==="/"?"":"/";$.path=h.record.path+(z&&me+z)}if(N=o_($,h,S),f?f.alias.push(N):(F=F||N,F!==N&&F.alias.push(N),_&&u.name&&!aa(N)&&o(u.name)),m.children){const J=m.children;for(let me=0;me<J.length;me++)r(J[me],N,f&&f.children[me])}f=f||N,a(N)}return F?()=>{o(F)}:us}function o(u){if(pu(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&n_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!gu(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!aa(u)&&s.set(u.record.name,u)}function c(u,h){let f,_={},m,S;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw On(1,{location:u});S=f.record.name,_=ae(a_(h.params,f.keys.filter(F=>!F.optional).map(F=>F.name)),u.params),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(F=>F.re.test(m)),f&&(_=f.parse(m),S=f.record.name);else{if(f=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!f)throw On(1,{location:u,currentLocation:h});S=f.record.name,_=ae({},h.params,u.params),m=f.stringify(_)}const T=[];let N=f;for(;N;)T.unshift(N.record),N=N.parent;return{name:S,path:m,params:_,matched:T,meta:h_(T)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function a_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function c_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:u_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function u_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function aa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function h_(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function ca(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function gu(t,e){return e.children.some(n=>n===t||gu(t,n))}const mu=/#/g,f_=/&/g,d_=/\//g,p_=/=/g,__=/\?/g,yu=/\+/g,g_=/%5B/g,m_=/%5D/g,vu=/%5E/g,y_=/%60/g,Eu=/%7B/g,v_=/%7C/g,Cu=/%7D/g,E_=/%20/g;function No(t){return encodeURI(""+t).replace(v_,"|").replace(g_,"[").replace(m_,"]")}function C_(t){return No(t).replace(Eu,"{").replace(Cu,"}").replace(vu,"^")}function Br(t){return No(t).replace(yu,"%2B").replace(E_,"+").replace(mu,"%23").replace(f_,"%26").replace(y_,"`").replace(Eu,"{").replace(Cu,"}").replace(vu,"^")}function b_(t){return Br(t).replace(p_,"%3D")}function w_(t){return No(t).replace(mu,"%23").replace(__,"%3F")}function I_(t){return t==null?"":w_(t).replace(d_,"%2F")}function ri(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function S_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(yu," "),o=r.indexOf("="),l=ri(o<0?r:r.slice(0,o)),a=o<0?null:ri(r.slice(o+1));if(l in e){let c=e[l];at(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function ua(t){let e="";for(let n in t){const s=t[n];if(n=b_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(at(s)?s.map(r=>r&&Br(r)):[s&&Br(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function T_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=at(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const R_=Symbol(""),ha=Symbol(""),Ao=Symbol(""),Po=Symbol(""),Hr=Symbol("");function Jn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Pt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(On(4,{from:n,to:e})):h instanceof Error?l(h):Xp(h)?l(On(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function sr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(x_(l)){const c=(l.__vccOpts||l)[e];c&&i.push(Pt(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=kp(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Pt(f,n,s,r,o)()}))}}return i}function x_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fa(t){const e=Ze(Ao),n=Ze(Po),s=We(()=>e.resolve(Dt(t.to))),i=We(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Pn.bind(null,u));if(f>-1)return f;const _=da(a[c-2]);return c>1&&da(u)===_&&h[h.length-1].path!==_?h.findIndex(Pn.bind(null,a[c-2])):f}),r=We(()=>i.value>-1&&O_(n.params,s.value.params)),o=We(()=>i.value>-1&&i.value===n.matched.length-1&&fu(n.params,s.value.params));function l(a={}){return P_(a)?e[Dt(t.replace)?"replace":"push"](Dt(t.to)).catch(us):Promise.resolve()}return{route:s,href:We(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const N_=Vn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fa,setup(t,{slots:e}){const n=jn(fa(t)),{options:s}=Ze(Ao),i=We(()=>({[pa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[pa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ou("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),A_=N_;function P_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function O_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!at(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function da(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pa=(t,e,n)=>t!=null?t:e!=null?e:n,k_=Vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ze(Hr),i=We(()=>t.route||s.value),r=Ze(ha,0),o=We(()=>{let c=Dt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=We(()=>i.value.matched[o.value]);Xs(ha,We(()=>o.value+1)),Xs(R_,l),Xs(Hr,i);const a=ys();return ls(()=>[a.value,l.value,t.name],([c,u,h],[f,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!Pn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return _a(n.default,{Component:f,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,T=ou(f,ae({},m,e,{onVnodeUnmounted:N=>{N.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return _a(n.default,{Component:T,route:c})||T}}});function _a(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const M_=k_;function D_(t){const e=l_(t.routes,t),n=t.parseQuery||S_,s=t.stringifyQuery||ua,i=t.history,r=Jn(),o=Jn(),l=Jn(),a=Of(xt);let c=xt;wn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tr.bind(null,y=>""+y),h=tr.bind(null,I_),f=tr.bind(null,ri);function _(y,k){let x,M;return pu(y)?(x=e.getRecordMatcher(y),M=k):M=y,e.addRoute(M,x)}function m(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function S(){return e.getRoutes().map(y=>y.record)}function T(y){return!!e.getRecordMatcher(y)}function N(y,k){if(k=ae({},k||a.value),typeof y=="string"){const j=nr(n,y,k.path),d=e.resolve({path:j.path},k),p=i.createHref(j.fullPath);return ae(j,d,{params:f(d.params),hash:ri(j.hash),redirectedFrom:void 0,href:p})}let x;if("path"in y)x=ae({},y,{path:nr(n,y.path,k.path).path});else{const j=ae({},y.params);for(const d in j)j[d]==null&&delete j[d];x=ae({},y,{params:h(y.params)}),k.params=h(k.params)}const M=e.resolve(x,k),re=y.hash||"";M.params=u(f(M.params));const he=Lp(s,ae({},y,{hash:C_(re),path:M.path})),V=i.createHref(he);return ae({fullPath:he,hash:re,query:s===ua?T_(y.query):y.query||{}},M,{redirectedFrom:void 0,href:V})}function F(y){return typeof y=="string"?nr(n,y,a.value.path):ae({},y)}function $(y,k){if(c!==y)return On(8,{from:k,to:y})}function z(y){return Y(y)}function J(y){return z(ae(F(y),{replace:!0}))}function me(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:x}=k;let M=typeof x=="function"?x(y):x;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=F(M):{path:M},M.params={}),ae({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function Y(y,k){const x=c=N(y),M=a.value,re=y.state,he=y.force,V=y.replace===!0,j=me(x);if(j)return Y(ae(F(j),{state:re,force:he,replace:V}),k||x);const d=x;d.redirectedFrom=k;let p;return!he&&Fp(s,M,x)&&(p=On(16,{to:d,from:M}),_n(M,M,!0,!1)),(p?Promise.resolve(p):Q(d,M)).catch(g=>vt(g)?vt(g,2)?g:je(g):ue(g,d,M)).then(g=>{if(g){if(vt(g,2))return Y(ae({replace:V},F(g.to),{state:re,force:he}),k||d)}else g=ge(d,M,!0,V,re);return ne(d,M,g),g})}function O(y,k){const x=$(y,k);return x?Promise.reject(x):Promise.resolve()}function Q(y,k){let x;const[M,re,he]=L_(y,k);x=sr(M.reverse(),"beforeRouteLeave",y,k);for(const j of M)j.leaveGuards.forEach(d=>{x.push(Pt(d,y,k))});const V=O.bind(null,y,k);return x.push(V),yn(x).then(()=>{x=[];for(const j of r.list())x.push(Pt(j,y,k));return x.push(V),yn(x)}).then(()=>{x=sr(re,"beforeRouteUpdate",y,k);for(const j of re)j.updateGuards.forEach(d=>{x.push(Pt(d,y,k))});return x.push(V),yn(x)}).then(()=>{x=[];for(const j of y.matched)if(j.beforeEnter&&!k.matched.includes(j))if(at(j.beforeEnter))for(const d of j.beforeEnter)x.push(Pt(d,y,k));else x.push(Pt(j.beforeEnter,y,k));return x.push(V),yn(x)}).then(()=>(y.matched.forEach(j=>j.enterCallbacks={}),x=sr(he,"beforeRouteEnter",y,k),x.push(V),yn(x))).then(()=>{x=[];for(const j of o.list())x.push(Pt(j,y,k));return x.push(V),yn(x)}).catch(j=>vt(j,8)?j:Promise.reject(j))}function ne(y,k,x){for(const M of l.list())M(y,k,x)}function ge(y,k,x,M,re){const he=$(y,k);if(he)return he;const V=k===xt,j=wn?history.state:{};x&&(M||V?i.replace(y.fullPath,ae({scroll:V&&j&&j.scroll},re)):i.push(y.fullPath,re)),a.value=y,_n(y,k,x,V),je()}let Ce;function $e(){Ce||(Ce=i.listen((y,k,x)=>{if(!Qn.listening)return;const M=N(y),re=me(M);if(re){Y(ae(re,{replace:!0}),M).catch(us);return}c=M;const he=a.value;wn&&qp(sa(he.fullPath,x.delta),Li()),Q(M,he).catch(V=>vt(V,12)?V:vt(V,2)?(Y(V.to,M).then(j=>{vt(j,20)&&!x.delta&&x.type===bs.pop&&i.go(-1,!1)}).catch(us),Promise.reject()):(x.delta&&i.go(-x.delta,!1),ue(V,M,he))).then(V=>{V=V||ge(M,he,!1),V&&(x.delta&&!vt(V,8)?i.go(-x.delta,!1):x.type===bs.pop&&vt(V,20)&&i.go(-1,!1)),ne(M,he,V)}).catch(us)}))}let Be=Jn(),be=Jn(),we;function ue(y,k,x){je(y);const M=be.list();return M.length?M.forEach(re=>re(y,k,x)):console.error(y),Promise.reject(y)}function ie(){return we&&a.value!==xt?Promise.resolve():new Promise((y,k)=>{Be.add([y,k])})}function je(y){return we||(we=!y,$e(),Be.list().forEach(([k,x])=>y?x(y):k()),Be.reset()),y}function _n(y,k,x,M){const{scrollBehavior:re}=t;if(!wn||!re)return Promise.resolve();const he=!x&&Kp(sa(y.fullPath,0))||(M||!x)&&history.state&&history.state.scroll||null;return wo().then(()=>re(y,k,he)).then(V=>V&&Vp(V)).catch(V=>ue(V,y,k))}const yt=y=>i.go(y);let ut;const Ge=new Set,Qn={currentRoute:a,listening:!0,addRoute:_,removeRoute:m,hasRoute:T,getRoutes:S,resolve:N,options:t,push:z,replace:J,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:be.add,isReady:ie,install(y){const k=this;y.component("RouterLink",A_),y.component("RouterView",M_),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(a)}),wn&&!ut&&a.value===xt&&(ut=!0,z(i.location).catch(re=>{}));const x={};for(const re in xt)x[re]=We(()=>a.value[re]);y.provide(Ao,k),y.provide(Po,jn(x)),y.provide(Hr,a);const M=y.unmount;Ge.add(y),y.unmount=function(){Ge.delete(y),Ge.size<1&&(c=xt,Ce&&Ce(),Ce=null,a.value=xt,ut=!1,we=!1),M()}}};return Qn}function yn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function L_(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Pn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Pn(c,a))||i.push(a))}return[n,s,i]}function cC(){return Ze(Po)}const Fi=Np({id:"shortStore",state:()=>({links:[],isLoading:!1}),getters:{getLinks:t=>(localStorage.getItem("short_links")&&(t.links=JSON.parse(localStorage.getItem("short_links"))),t.links)},actions:{setLinks(t){t._id=Date.now(),t.copied=!1,this.links.push(t),localStorage.setItem("short_links",JSON.stringify(this.links))},deleteLink(t){this.links=this.links.filter(e=>e!==t),localStorage.setItem("short_links",JSON.stringify(this.links))},setLableCopy(t=null){this.links.forEach(e=>{e.copied=e===t})}}});let F_=t=>crypto.getRandomValues(new Uint8Array(t)),B_=(t,e,n)=>{let s=(2<<Math.log(t.length-1)/Math.LN2)-1,i=-~(1.6*s*e/t.length);return(r=e)=>{let o="";for(;;){let l=n(i),a=i;for(;a--;)if(o+=t[l[a]&s]||"",o.length===r)return o}}},H_=(t,e=21)=>B_(t,e,F_);/**
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
 */const bu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw qn(e)},qn=function(t){return new Error("Firebase Database ("+bu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const wu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},W_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):W_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const _=l<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Iu=function(t){const e=wu(t);return Oo.encodeByteArray(e,!0)},Su=function(t){return Iu(t).replace(/\./g,"")},ga=function(t){try{return Oo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function U_(t){return Tu(void 0,t)}function Tu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$_(n)||(t[n]=Tu(t[n],e[n]));return t}function $_(t){return t!=="__proto__"}/**
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
 */function j_(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ru(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(j_())}function V_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xu(){return bu.NODE_ADMIN===!0}function q_(){return typeof indexedDB=="object"}function K_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const z_="FirebaseError";class ko extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=z_,Object.setPrototypeOf(this,ko.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nu.prototype.create)}}class Nu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?G_(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ko(i,l,s)}}function G_(t,e){return t.replace(Y_,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Y_=/\{\$([^}]+)}/g;/**
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
 */const Au=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ws(ga(r[0])||""),n=ws(ga(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Q_=function(t){const e=Au(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},X_=function(t){const e=Au(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function kn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ma(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ya(r)&&ya(o)){if(!Wr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ya(t){return t!==null&&typeof t=="object"}/**
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
 */function J_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Z_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ms(t,e){return`${t} failed: ${e} argument `}/**
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
 */const eg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function fn(t){return t&&t._delegate?t._delegate:t}class Is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class tg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ks;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sg(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ng(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ng(t){return t===Yt?void 0:t}function sg(t){return t.instantiationMode==="EAGER"}/**
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
 */class ig{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const rg={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},og=de.INFO,lg={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},ag=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=lg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pu{constructor(e){this.name=e,this._logLevel=og,this._logHandler=ag,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const cg=(t,e)=>e.some(n=>t instanceof n);let va,Ea;function ug(){return va||(va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hg(){return Ea||(Ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ou=new WeakMap,Ur=new WeakMap,ku=new WeakMap,ir=new WeakMap,Mo=new WeakMap;function fg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ft(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ou.set(n,t)}).catch(()=>{}),Mo.set(e,t),e}function dg(t){if(Ur.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ur.set(t,e)}let $r={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ur.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ku.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pg(t){$r=t($r)}function _g(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(rr(this),e,...n);return ku.set(s,e.sort?e.sort():[e]),Ft(s)}:hg().includes(t)?function(...e){return t.apply(rr(this),e),Ft(Ou.get(this))}:function(...e){return Ft(t.apply(rr(this),e))}}function gg(t){return typeof t=="function"?_g(t):(t instanceof IDBTransaction&&dg(t),cg(t,ug())?new Proxy(t,$r):t)}function Ft(t){if(t instanceof IDBRequest)return fg(t);if(ir.has(t))return ir.get(t);const e=gg(t);return e!==t&&(ir.set(t,e),Mo.set(e,t)),e}const rr=t=>Mo.get(t);function mg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Ft(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Ft(o.result),a.oldVersion,a.newVersion,Ft(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const yg=["get","getKey","getAll","getAllKeys","count"],vg=["put","add","delete","clear"],or=new Map;function Ca(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(or.get(e))return or.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=vg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||yg.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return or.set(e,r),r}pg(t=>({...t,get:(e,n,s)=>Ca(e,n)||t.get(e,n,s),has:(e,n)=>!!Ca(e,n)||t.has(e,n)}));/**
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
 */class Eg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Cg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jr="@firebase/app",ba="0.7.29";/**
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
 */const Do=new Pu("@firebase/app"),bg="@firebase/app-compat",wg="@firebase/analytics-compat",Ig="@firebase/analytics",Sg="@firebase/app-check-compat",Tg="@firebase/app-check",Rg="@firebase/auth",xg="@firebase/auth-compat",Ng="@firebase/database",Ag="@firebase/database-compat",Pg="@firebase/functions",Og="@firebase/functions-compat",kg="@firebase/installations",Mg="@firebase/installations-compat",Dg="@firebase/messaging",Lg="@firebase/messaging-compat",Fg="@firebase/performance",Bg="@firebase/performance-compat",Hg="@firebase/remote-config",Wg="@firebase/remote-config-compat",Ug="@firebase/storage",$g="@firebase/storage-compat",jg="@firebase/firestore",Vg="@firebase/firestore-compat",qg="firebase",Kg="9.9.1";/**
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
 */const Mu="[DEFAULT]",zg={[jr]:"fire-core",[bg]:"fire-core-compat",[Ig]:"fire-analytics",[wg]:"fire-analytics-compat",[Tg]:"fire-app-check",[Sg]:"fire-app-check-compat",[Rg]:"fire-auth",[xg]:"fire-auth-compat",[Ng]:"fire-rtdb",[Ag]:"fire-rtdb-compat",[Pg]:"fire-fn",[Og]:"fire-fn-compat",[kg]:"fire-iid",[Mg]:"fire-iid-compat",[Dg]:"fire-fcm",[Lg]:"fire-fcm-compat",[Fg]:"fire-perf",[Bg]:"fire-perf-compat",[Hg]:"fire-rc",[Wg]:"fire-rc-compat",[Ug]:"fire-gcs",[$g]:"fire-gcs-compat",[jg]:"fire-fst",[Vg]:"fire-fst-compat","fire-js":"fire-js",[qg]:"fire-js-all"};/**
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
 */const li=new Map,Vr=new Map;function Gg(t,e){try{t.container.addComponent(e)}catch(n){Do.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ai(t){const e=t.name;if(Vr.has(e))return Do.debug(`There were multiple attempts to register component ${e}.`),!1;Vr.set(e,t);for(const n of li.values())Gg(n,t);return!0}function Yg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qg={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ln=new Nu("app","Firebase",Qg);/**
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
 */class Xg{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Jg=Kg;function Zg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Mu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw ln.create("bad-app-name",{appName:String(s)});const i=li.get(s);if(i){if(Wr(t,i.options)&&Wr(n,i.config))return i;throw ln.create("duplicate-app",{appName:s})}const r=new ig(s);for(const l of Vr.values())r.addComponent(l);const o=new Xg(t,n,r);return li.set(s,o),o}function em(t=Mu){const e=li.get(t);if(!e)throw ln.create("no-app",{appName:t});return e}function Rn(t,e,n){var s;let i=(s=zg[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Do.warn(l.join(" "));return}ai(new Is(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const tm="firebase-heartbeat-database",nm=1,Ss="firebase-heartbeat-store";let lr=null;function Du(){return lr||(lr=mg(tm,nm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ss)}}}).catch(t=>{throw ln.create("storage-open",{originalErrorMessage:t.message})})),lr}async function sm(t){var e;try{return(await Du()).transaction(Ss).objectStore(Ss).get(Lu(t))}catch(n){throw ln.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function wa(t,e){var n;try{const i=(await Du()).transaction(Ss,"readwrite");return await i.objectStore(Ss).put(e,Lu(t)),i.done}catch(s){throw ln.create("storage-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message})}}function Lu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const im=1024,rm=30*24*60*60*1e3;class om{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new am(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ia();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=rm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ia(),{heartbeatsToSend:n,unsentEntries:s}=lm(this._heartbeatsCache.heartbeats),i=Su(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ia(){return new Date().toISOString().substring(0,10)}function lm(t,e=im){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sa(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sa(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class am{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return q_()?K_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sa(t){return Su(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cm(t){ai(new Is("platform-logger",e=>new Eg(e),"PRIVATE")),ai(new Is("heartbeat",e=>new om(e),"PRIVATE")),Rn(jr,ba,t),Rn(jr,ba,"esm2017"),Rn("fire-js","")}cm("");var um="firebase",hm="9.9.1";/**
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
 */Rn(um,hm,"app");const Ta="@firebase/database",Ra="0.13.3";/**
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
 */let Fu="";function fm(t){Fu=t}/**
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
 */class dm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class pm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Bu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dm(e)}}catch{}return new pm},en=Bu("localStorage"),qr=Bu("sessionStorage");/**
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
 */const xn=new Pu("@firebase/database"),_m=function(){let t=1;return function(){return t++}}(),Hu=function(t){const e=eg(t),n=new Z_;n.update(e);const s=n.digest();return Oo.encodeByteArray(s)},Ds=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ds.apply(null,s):typeof s=="object"?e+=Ne(s):e+=s,e+=" "}return e};let rn=null,xa=!0;const gm=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(xn.logLevel=de.VERBOSE,rn=xn.log.bind(xn),e&&qr.set("logging_enabled",!0)):typeof t=="function"?rn=t:(rn=null,qr.remove("logging_enabled"))},Pe=function(...t){if(xa===!0&&(xa=!1,rn===null&&qr.get("logging_enabled")===!0&&gm(!0)),rn){const e=Ds.apply(null,t);rn(e)}},Ls=function(t){return function(...e){Pe(t,...e)}},Kr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ds(...t);xn.error(e)},an=function(...t){const e=`FIREBASE FATAL ERROR: ${Ds(...t)}`;throw xn.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Ds(...t);xn.warn(e)},mm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ym=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},cn="[MIN_NAME]",$t="[MAX_NAME]",dn=function(t,e){if(t===e)return 0;if(t===cn||e===$t)return-1;if(e===cn||t===$t)return 1;{const n=Na(t),s=Na(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},vm=function(t,e){return t===e?0:t<e?-1:1},Zn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ne(e))},Fo=function(t){if(typeof t!="object"||t===null)return Ne(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ne(e[s]),n+=":",n+=Fo(t[e[s]]);return n+="}",n},Wu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Uu=function(t){b(!Lo(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Em=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Cm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bm(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const wm=new RegExp("^-?(0*)\\d{1,10}$"),Im=-2147483648,Sm=2147483647,Na=function(t){if(wm.test(t)){const e=Number(t);if(e>=Im&&e<=Sm)return e}return null},Kn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Tm=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fs=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Rm{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xm{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class zr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zr.OWNER="owner";/**
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
 */const Bo="5",$u="v",ju="s",Vu="r",qu="f",Ku=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zu="ls",Gu="p",Gr="ac",Yu="websocket",Qu="long_polling";/**
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
 */class Nm{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=en.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&en.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Am(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xu(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Yu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Qu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Am(t)&&(n.ns=t.namespace);const i=[];return Me(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Pm{constructor(){this.counters_={}}incrementCounter(e,n=1){mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return U_(this.counters_)}}/**
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
 */const ar={},cr={};function Ho(t){const e=t.toString();return ar[e]||(ar[e]=new Pm),ar[e]}function Om(t,e){const n=t.toString();return cr[n]||(cr[n]=e()),cr[n]}/**
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
 */class km{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Kn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Aa="start",Mm="close",Dm="pLPCommand",Lm="pRTLPCB",Ju="id",Zu="pw",eh="ser",Fm="cb",Bm="seg",Hm="ts",Wm="d",Um="dframe",th=1870,nh=30,$m=th-nh,jm=25e3,Vm=3e4;class In{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ls(e),this.stats_=Ho(n),this.urlFn=a=>(this.appCheckToken&&(a[Gr]=this.appCheckToken),Xu(n,Qu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new km(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Vm)),ym(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Aa)this.id=l,this.password=a;else if(o===Mm)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Aa]="t",s[eh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Fm]=this.scriptTagHolder.uniqueCallbackIdentifier),s[$u]=Bo,this.transportSessionId&&(s[ju]=this.transportSessionId),this.lastSessionId&&(s[zu]=this.lastSessionId),this.applicationId&&(s[Gu]=this.applicationId),this.appCheckToken&&(s[Gr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ku.test(location.hostname)&&(s[Vu]=qu);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){In.forceAllow_=!0}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){return In.forceAllow_?!0:!In.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Em()&&!Cm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Iu(n),i=Wu(s,$m);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Um]="t",s[Ju]=e,s[Zu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_m(),window[Dm+this.uniqueCallbackIdentifier]=e,window[Lm+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wo.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Pe("frame writing exception"),l.stack&&Pe(l.stack),Pe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ju]=this.myID,e[Zu]=this.myPW,e[eh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nh+s.length<=th;){const o=this.pendingSegs.shift();s=s+"&"+Bm+i+"="+o.seg+"&"+Hm+i+"="+o.ts+"&"+Wm+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(jm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const qm=16384,Km=45e3;let ci=null;typeof MozWebSocket<"u"?ci=MozWebSocket:typeof WebSocket<"u"&&(ci=WebSocket);class nt{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ls(this.connId),this.stats_=Ho(n),this.connURL=nt.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[$u]=Bo,typeof location<"u"&&location.hostname&&Ku.test(location.hostname)&&(o[Vu]=qu),n&&(o[ju]=n),s&&(o[zu]=s),i&&(o[Gr]=i),r&&(o[Gu]=r),Xu(e,Yu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,en.set("previous_websocket_failure",!0);try{let s;xu(),this.mySock=new ci(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ci!==null&&!nt.forceDisallow_}static previouslyFailed(){return en.isInMemoryStorage||en.get("previous_websocket_failure")===!0}markConnectionHealthy(){en.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ws(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wu(n,qm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Km))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2;nt.healthyTimeout=3e4;/**
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
 */class Ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[In,nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nt&&nt.isAvailable();let s=n&&!nt.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[nt];else{const i=this.transports_=[];for(const r of Ts.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ts.globalTransportInitialized_=!1;/**
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
 */const zm=6e4,Gm=5e3,Ym=10*1024,Qm=100*1024,ur="t",Pa="d",Xm="s",Oa="r",Jm="e",ka="o",Ma="a",Da="n",La="p",Zm="h";class ey{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ls("c:"+this.id+":"),this.transportManager_=new Ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ym?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ur in e){const n=e[ur];n===Ma?this.upgradeIfSecondaryHealthy_():n===Oa?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ka&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zn("t",e),s=Zn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:La,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ma,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Da,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zn("t",e),s=Zn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zn(ur,e);if(Pa in e){const s=e[Pa];if(n===Zm)this.onHandshake_(s);else if(n===Da){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Xm?this.onConnectionShutdown_(s):n===Oa?this.onReset_(s):n===Jm?Kr("Server Error: "+s):n===ka?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bo!==s&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),fs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:La,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(en.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ih{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ui extends ih{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ru()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ui}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Fa=32,Ba=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new se("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jt(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function Uo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ty(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Rs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new se(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return Le(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ny(t,e){const n=Rs(t,0),s=Rs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=dn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function oh(t,e){if(jt(t)!==jt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(jt(t)>jt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class sy{constructor(e,n){this.errorPrefix_=n,this.parts_=Rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bi(this.parts_[s]);lh(this)}}function iy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bi(e),lh(t)}function ry(t){const e=t.parts_.pop();t.byteLength_-=Bi(e),t.parts_.length>0&&(t.byteLength_-=1)}function lh(t){if(t.byteLength_>Ba)throw new Error(t.errorPrefix_+"has a key path longer than "+Ba+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fa)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fa+") or object contains a cycle "+Qt(t))}function Qt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $o extends ih{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new $o}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const es=1e3,oy=60*5*1e3,Ha=30*1e3,ly=1.3,ay=3e4,cy="server_kill",Wa=3;class It extends sh{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=It.nextPersistentConnectionId_++,this.log_=Ls("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=es,this.maxReconnectDelay_=oy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!xu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$o.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ui.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ne(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ks,s={p:e._path.toString(),q:e._queryObject},i={action:"g",request:s,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;It.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mt(e,"w")){const s=kn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||X_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ha)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Q_(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kr("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ay&&(this.reconnectDelay_=es),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ly)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+It.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new ey(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(cy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Fe(h),a())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ma(this.interruptReasons_)&&(this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Fo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wa&&(this.reconnectDelay_=Ha,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fu.replace(/\./g,"-")]=1,Ru()?e["framework.cordova"]=1:V_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ui.getInstance().currentlyOnline();return ma(this.interruptReasons_)&&e}}It.nextPersistentConnectionId_=0;It.nextConnectionId_=0;/**
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
 */class Hi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(cn,e),i=new q(cn,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
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
 */let Ks;class ah extends Hi{static get __EMPTY_NODE(){return Ks}static set __EMPTY_NODE(e){Ks=e}compare(e,n){return dn(e.name,n.name)}isDefinedOn(e){throw qn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q($t,Ks)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,Ks)}toString(){return".key"}}const on=new ah;/**
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
 */class zs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:Re.RED,this.left=i!=null?i:Ue.EMPTY_NODE,this.right=r!=null?r:Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Re(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class uy{copy(e,n,s,i,r){return this}insert(e,n,s){return new Re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new zs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new zs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new zs(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new uy;/**
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
 */function hy(t,e){return dn(t.name,e.name)}function jo(t,e){return dn(t,e)}/**
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
 */let Yr;function fy(t){Yr=t}const ch=function(t){return typeof t=="number"?"number:"+Uu(t):"string:"+t},uh=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mt(e,".sv"),"Priority must be a string or number.")}else b(t===Yr||t.isEmpty(),"priority of unexpected type.");b(t===Yr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ua;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uh(this.priorityNode_)}static set __childrenNodeConstructor(e){Ua=e}static get __childrenNodeConstructor(){return Ua}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:G(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ch(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Uu(this.value_):e+=this.value_,this.lazyHash_=Hu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Te.VALUE_TYPE_ORDER.indexOf(n),r=Te.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let hh,fh;function dy(t){hh=t}function py(t){fh=t}class _y extends Hi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?dn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q($t,new Te("[PRIORITY-POST]",fh))}makePost(e,n){const s=hh(e);return new q(n,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const ve=new _y;/**
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
 */const gy=Math.log(2);class my{constructor(e){const n=r=>parseInt(Math.log(r)/gy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hi=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Re(f,h.node,Re.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=i(a,_),S=i(_+1,c);return h=t[_],f=n?n(h):h,new Re(f,h.node,Re.BLACK,m,S)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,S){const T=h-m,N=h;h-=m;const F=i(T+1,N),$=t[T],z=n?n($):$;_(new Re(z,$.node,S,null,F))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const S=a.nextBitIsOne(),T=Math.pow(2,a.count-(m+1));S?f(T,Re.BLACK):(f(T,Re.BLACK),f(T,Re.RED))}return u},o=new my(t.length),l=r(o);return new Ue(s||e,l)};/**
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
 */let hr;const vn={};class bt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(vn&&ve,"ChildrenNode.ts has not been loaded"),hr=hr||new bt({".priority":vn},{".priority":ve}),hr}get(e){const n=kn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return mt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==on,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=hi(s,e.getCompare()):l=vn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new bt(u,c)}addToIndexes(e,n){const s=oi(this.indexes_,(i,r)=>{const o=kn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===vn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(q.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),hi(l,o.getCompare())}else return vn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new q(e.name,l))),a.insert(e,e.node)}});return new bt(s,this.indexSet_)}removeFromIndexes(e,n){const s=oi(this.indexes_,i=>{if(i===vn)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new bt(s,this.indexSet_)}}/**
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
 */let ts;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&uh(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ts||(ts=new B(new Ue(jo),null,bt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ts}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ts:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ts:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{b(G(e)!==".priority"||jt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(pe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ve,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ch(this.getPriority().val())+":"),this.forEachChild(ve,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Hu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fs?-1:0}withIndex(e){if(e===on||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===on||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ve),i=n.getIterator(ve);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===on?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yy extends B{constructor(){super(new Ue(jo),B.EMPTY_NODE,bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Fs=new yy;Object.defineProperties(q,{MIN:{value:new q(cn,B.EMPTY_NODE)},MAX:{value:new q($t,Fs)}});ah.__EMPTY_NODE=B.EMPTY_NODE;Te.__childrenNodeConstructor=B;fy(Fs);py(Fs);/**
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
 */const vy=!0;function Ie(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,Ie(e))}if(!(t instanceof Array)&&vy){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ie(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new q(o,a)))}}),n.length===0)return B.EMPTY_NODE;const r=hi(n,hy,o=>o.name,jo);if(s){const o=hi(n,ve.getCompare());return new B(r,Ie(e),new bt({".priority":o},{".priority":ve}))}else return new B(r,Ie(e),bt.Default)}else{let n=B.EMPTY_NODE;return Me(t,(s,i)=>{if(mt(t,s)&&s.substring(0,1)!=="."){const r=Ie(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ie(e))}}dy(Ie);/**
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
 */class Vo extends Hi{constructor(e){super(),this.indexPath_=e,b(!K(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?dn(e.name,n.name):r}makePost(e,n){const s=Ie(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Fs);return new q($t,e)}toString(){return Rs(this.indexPath_,0).join("/")}}/**
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
 */class Ey extends Hi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?dn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=Ie(e);return new q(n,s)}toString(){return".value"}}const dh=new Ey;/**
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
 */const $a="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Cy=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=$a.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=$a.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */function by(t){return{type:"value",snapshotNode:t}}function xs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function As(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Iy{constructor(e){this.rangedFilter_=new Ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(f,_)=>h(_,f)}else a=i.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const h=a.getNext();!u&&l(r,h)<=0&&(u=!0),u&&c<this.limit_&&l(h,o)<=0?c++:i=i.updateImmediateChild(h.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new q(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(As(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ns(n,h));const S=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(xs(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Ns(c.name,c.node)),r.trackChildChange(xs(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
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
 */class Ko{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:cn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$t}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new Ko;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sy(t){return t.loadsAllData()?new qo(t.getIndex()):t.hasLimit()?new Iy(t):new Ps(t)}function Ty(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function Ry(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function xy(t,e){const n=t.copy();return n.index_=e,n}function ja(t){const e={};if(t.isDefault())return e;let n;return t.index_===ve?n="$priority":t.index_===dh?n="$value":t.index_===on?n="$key":(b(t.index_ instanceof Vo,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ne(n),t.startSet_&&(e.startAt=Ne(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+Ne(t.indexStartName_))),t.endSet_&&(e.endAt=Ne(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+Ne(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Va(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
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
 */class fi extends sh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ls("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fi.getListenId_(e,s),l={};this.listens_[o]=l;const a=ja(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),kn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=fi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ja(e._queryParams),s=e._path.toString(),i=new ks;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+J_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ws(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Ny{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function di(){return{value:null,children:new Map}}function ph(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,di());const i=t.children.get(s);e=pe(e),ph(i,e,n)}}function Qr(t,e,n){t.value!==null?n(e,t.value):Ay(t,(s,i)=>{const r=new se(e.toString()+"/"+s);Qr(i,r,n)})}function Ay(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Py{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const qa=10*1e3,Oy=30*1e3,ky=5*60*1e3;class My{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Py(e);const s=qa+(Oy-qa)*Math.random();fs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(i,r)=>{r>0&&mt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),fs(this.reportStats_.bind(this),Math.floor(Math.random()*2*ky))}}/**
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
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function zo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Go(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class pi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=it.ACK_USER_WRITE,this.source=zo()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new pi(ee(),n,this.revert)}}else return b(G(this.path)===e,"operationForChild called for unrelated child."),new pi(pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Os{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new Os(this.source,ee()):new Os(this.source,pe(this.path))}}/**
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
 */class un{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=it.OVERWRITE}operationForChild(e){return K(this.path)?new un(this.source,ee(),this.snap.getImmediateChild(e)):new un(this.source,pe(this.path),this.snap)}}/**
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
 */class Mn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=it.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new un(this.source,ee(),n.value):new Mn(this.source,ee(),n)}else return b(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mn(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Vt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Dy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ly(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(wy(o.childName,o.snapshotNode))}),ns(t,i,"child_removed",e,s,n),ns(t,i,"child_added",e,s,n),ns(t,i,"child_moved",r,s,n),ns(t,i,"child_changed",e,s,n),ns(t,i,"value",e,s,n),i}function ns(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>By(t,l,a)),o.forEach(l=>{const a=Fy(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Fy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function By(t,e,n){if(e.childName==null||n.childName==null)throw qn("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Wi(t,e){return{eventCache:t,serverCache:e}}function ds(t,e,n,s){return Wi(new Vt(e,n,s),t.serverCache)}function _h(t,e,n,s){return Wi(t.eventCache,new Vt(e,n,s))}function _i(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let fr;const Hy=()=>(fr||(fr=new Ue(vm)),fr);class fe{constructor(e,n=Hy()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return Me(e,(s,i)=>{n=n.set(new se(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(K(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(pe(e),n);return r!=null?{path:ye(new se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(pe(e)):new fe(null)}}set(e,n){if(K(e))return new fe(n,this.children);{const s=G(e),r=(this.children.get(s)||new fe(null)).set(pe(e),n),o=this.children.insert(s,r);return new fe(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(pe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new fe(null):new fe(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(pe(e)):null}}setTree(e,n){if(K(e))return n;{const s=G(e),r=(this.children.get(s)||new fe(null)).setTree(pe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new fe(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(pe(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(pe(e),ye(n,i),s):new fe(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class lt{constructor(e){this.writeTree_=e}static empty(){return new lt(new fe(null))}}function ps(t,e,n){if(K(e))return new lt(new fe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Le(i,e);return r=r.updateChild(o,n),new lt(t.writeTree_.set(i,r))}else{const i=new fe(n),r=t.writeTree_.setTree(e,i);return new lt(r)}}}function Xr(t,e,n){let s=t;return Me(n,(i,r)=>{s=ps(s,ye(e,i),r)}),s}function Ka(t,e){if(K(e))return lt.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new lt(n)}}function Jr(t,e){return pn(t,e)!=null}function pn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function za(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function Bt(t,e){if(K(e))return t;{const n=pn(t,e);return n!=null?new lt(new fe(n)):new lt(t.writeTree_.subtree(e))}}function Zr(t){return t.writeTree_.isEmpty()}function Dn(t,e){return gh(ee(),t.writeTree_,e)}function gh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=gh(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
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
 */function Ui(t,e){return Eh(e,t)}function Wy(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ps(t.visibleWrites,e,n)),t.lastWriteId=s}function Uy(t,e,n,s){b(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Xr(t.visibleWrites,e,n),t.lastWriteId=s}function $y(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function jy(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Vy(l,s.path)?i=!1:Xe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return qy(t),!0;if(s.snap)t.visibleWrites=Ka(t.visibleWrites,s.path);else{const l=s.children;Me(l,a=>{t.visibleWrites=Ka(t.visibleWrites,ye(s.path,a))})}return!0}else return!1}function Vy(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(ye(t.path,n),e))return!0;return!1}function qy(t){t.visibleWrites=mh(t.allWrites,Ky,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ky(t){return t.visible}function mh(t,e,n){let s=lt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Xe(n,o)?(l=Le(n,o),s=ps(s,l,r.snap)):Xe(o,n)&&(l=Le(o,n),s=ps(s,ee(),r.snap.getChild(l)));else if(r.children){if(Xe(n,o))l=Le(n,o),s=Xr(s,l,r.children);else if(Xe(o,n))if(l=Le(o,n),K(l))s=Xr(s,ee(),r.children);else{const a=kn(r.children,G(l));if(a){const c=a.getChild(pe(l));s=ps(s,ee(),c)}}}else throw qn("WriteRecord should have .snap or .children")}}return s}function yh(t,e,n,s,i){if(!s&&!i){const r=pn(t.visibleWrites,e);if(r!=null)return r;{const o=Bt(t.visibleWrites,e);if(Zr(o))return n;if(n==null&&!Jr(o,ee()))return null;{const l=n||B.EMPTY_NODE;return Dn(o,l)}}}else{const r=Bt(t.visibleWrites,e);if(!i&&Zr(r))return n;if(!i&&n==null&&!Jr(r,ee()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Xe(c.path,e)||Xe(e,c.path))},l=mh(t.allWrites,o,e),a=n||B.EMPTY_NODE;return Dn(l,a)}}}function zy(t,e,n){let s=B.EMPTY_NODE;const i=pn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Bt(t.visibleWrites,e);return n.forEachChild(ve,(o,l)=>{const a=Dn(Bt(r,new se(o)),l);s=s.updateImmediateChild(o,a)}),za(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Bt(t.visibleWrites,e);return za(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Gy(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(Jr(t.visibleWrites,r))return null;{const o=Bt(t.visibleWrites,r);return Zr(o)?i.getChild(n):Dn(o,i.getChild(n))}}function Yy(t,e,n,s){const i=ye(e,n),r=pn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Bt(t.visibleWrites,i);return Dn(o,s.getNode().getImmediateChild(n))}else return null}function Qy(t,e){return pn(t.visibleWrites,e)}function Xy(t,e,n,s,i,r,o){let l;const a=Bt(t.visibleWrites,e),c=pn(a,ee());if(c!=null)l=c;else if(n!=null)l=Dn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Jy(){return{visibleWrites:lt.empty(),allWrites:[],lastWriteId:-1}}function gi(t,e,n,s){return yh(t.writeTree,t.treePath,e,n,s)}function Qo(t,e){return zy(t.writeTree,t.treePath,e)}function Ga(t,e,n,s){return Gy(t.writeTree,t.treePath,e,n,s)}function mi(t,e){return Qy(t.writeTree,ye(t.treePath,e))}function Zy(t,e,n,s,i,r){return Xy(t.writeTree,t.treePath,e,n,s,i,r)}function Xo(t,e,n){return Yy(t.writeTree,t.treePath,e,n)}function vh(t,e){return Eh(ye(t.treePath,e),t.writeTree)}function Eh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ev{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,As(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ns(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,xs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,As(s,e.snapshotNode,i.oldSnap));else throw qn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class tv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ch=new tv;class Jo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Vt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hn(this.viewCache_),r=Zy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function nv(t){return{filter:t}}function sv(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function iv(t,e,n,s,i){const r=new ev;let o,l;if(n.type===it.OVERWRITE){const c=n;c.source.fromUser?o=eo(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=yi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===it.MERGE){const c=n;c.source.fromUser?o=ov(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=to(t,e,c.path,c.children,s,i,l,r))}else if(n.type===it.ACK_USER_WRITE){const c=n;c.revert?o=cv(t,e,c.path,s,i,r):o=lv(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===it.LISTEN_COMPLETE)o=av(t,e,n.path,s,r);else throw qn("Unknown operation type: "+n.type);const a=r.getChanges();return rv(e,o,a),{viewCache:o,changes:a}}function rv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=_i(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(by(_i(e)))}}function bh(t,e,n,s,i,r){const o=e.eventCache;if(mi(s,n)!=null)return e;{let l,a;if(K(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hn(e),u=c instanceof B?c:B.EMPTY_NODE,h=Qo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=gi(s,hn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=G(n);if(c===".priority"){b(jt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=Ga(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=pe(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=Ga(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Xo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return ds(e,l,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function yi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),_,null)}else{const _=G(n);if(!a.isCompleteForPath(n)&&jt(n)>1)return e;const m=pe(n),T=a.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(a.getNode(),T):c=u.updateChild(a.getNode(),_,T,m,Ch,null)}const h=_h(e,c,a.isFullyInitialized()||K(n),u.filtersNodes()),f=new Jo(i,h,r);return bh(t,h,n,i,f,l)}function eo(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Jo(i,e,r);if(K(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=ds(e,c,!0,t.filter.filtersNodes());else{const h=G(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=ds(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=pe(n),_=l.getNode().getImmediateChild(h);let m;if(K(f))m=s;else{const S=u.getCompleteChild(h);S!=null?Uo(f)===".priority"&&S.getChild(rh(f)).isEmpty()?m=S:m=S.updateChild(f,s):m=B.EMPTY_NODE}if(_.equals(m))a=e;else{const S=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=ds(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ya(t,e){return t.eventCache.isCompleteForChild(e)}function ov(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=ye(n,a);Ya(e,G(u))&&(l=eo(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=ye(n,a);Ya(e,G(u))||(l=eo(t,l,u,c,i,r,o))}),l}function Qa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function to(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;K(n)?c=s:c=new fe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Qa(t,_,f);a=yi(t,a,new se(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===void 0;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),S=Qa(t,m,f);a=yi(t,a,new se(h),S,i,r,o,l)}}),a}function lv(t,e,n,s,i,r,o){if(mi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(K(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return yi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(K(n)){let c=new fe(null);return a.getNode().forEachChild(on,(u,h)=>{c=c.set(new se(u),h)}),to(t,e,n,c,i,r,l,o)}else return e}else{let c=new fe(null);return s.foreach((u,h)=>{const f=ye(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),to(t,e,n,c,i,r,l,o)}}function av(t,e,n,s,i){const r=e.serverCache,o=_h(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return bh(t,o,n,s,Ch,i)}function cv(t,e,n,s,i,r){let o;if(mi(s,n)!=null)return e;{const l=new Jo(s,e,i),a=e.eventCache.getNode();let c;if(K(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=gi(s,hn(e));else{const h=e.serverCache.getNode();b(h instanceof B,"serverChildren would be complete if leaf node"),u=Qo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=G(n);let h=Xo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,pe(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,B.EMPTY_NODE,pe(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gi(s,hn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||mi(s,ee())!=null,ds(e,c,o,t.filter.filtersNodes())}}/**
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
 */class uv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new qo(s.getIndex()),r=Sy(s);this.processor_=nv(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new Vt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Vt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Wi(h,u),this.eventGenerator_=new Dy(this.query_)}get query(){return this.query_}}function hv(t){return t.viewCache_.serverCache.getNode()}function fv(t){return _i(t.viewCache_)}function dv(t,e){const n=hn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function Xa(t){return t.eventRegistrations_.length===0}function Ja(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Za(t,e,n,s){e.type===it.MERGE&&e.source.queryId!==null&&(b(hn(t.viewCache_),"We should always have a full cache before handling merges"),b(_i(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=iv(t.processor_,i,e,n,s);return sv(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,pv(t,r.changes,r.viewCache.eventCache.getNode(),null)}function pv(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ly(t.eventGenerator_,e,n,i)}/**
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
 */let vi;class wh{constructor(){this.views=new Map}}function _v(t){b(!vi,"__referenceConstructor has already been defined"),vi=t}function gv(){return b(vi,"Reference.ts has not been loaded"),vi}function mv(t){return t.views.size===0}function Zo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Za(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Za(o,e,n,s));return r}}function Ih(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=gi(n,i?s:null),a=!1;l?a=!0:s instanceof B?(l=Qo(n,s),a=!1):(l=B.EMPTY_NODE,a=!1);const c=Wi(new Vt(l,a,!1),new Vt(s,i,!1));return new uv(e,c)}return o}function yv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ln(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Ja(c,n,s)),Xa(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Ja(a,n,s)),Xa(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ln(t)&&r.push(new(gv())(e._repo,e._path)),{removed:r,events:o}}function vv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ht(t,e){let n=null;for(const s of t.views.values())n=n||dv(s,e);return n}function Ev(t,e){if(e._queryParams.loadsAllData())return el(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Sh(t,e){return Ev(t,e)!=null}function Ln(t){return el(t)!=null}function el(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ei;function Cv(t){b(!Ei,"__referenceConstructor has already been defined"),Ei=t}function bv(){return b(Ei,"Reference.ts has not been loaded"),Ei}let wv=1;class ec{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=Jy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Th(t,e,n,s,i){return Wy(t.pendingWriteTree_,e,n,s,i),i?zn(t,new un(zo(),e,n)):[]}function Iv(t,e,n,s){Uy(t.pendingWriteTree_,e,n,s);const i=fe.fromObject(n);return zn(t,new Mn(zo(),e,i))}function Ot(t,e,n=!1){const s=$y(t.pendingWriteTree_,e);if(jy(t.pendingWriteTree_,e)){let r=new fe(null);return s.snap!=null?r=r.set(ee(),!0):Me(s.children,o=>{r=r.set(new se(o),!0)}),zn(t,new pi(s.path,r,n))}else return[]}function Bs(t,e,n){return zn(t,new un(Go(),e,n))}function Sv(t,e,n){const s=fe.fromObject(n);return zn(t,new Mn(Go(),e,s))}function Tv(t,e){return zn(t,new Os(Go(),e))}function Rv(t,e,n){const s=sl(t,n);if(s){const i=il(s),r=i.path,o=i.queryId,l=Le(r,e),a=new Os(Yo(o),l);return rl(t,r,a)}else return[]}function Rh(t,e,n,s){const i=e._path,r=t.syncPointTree_.get(i);let o=[];if(r&&(e._queryIdentifier==="default"||Sh(r,e))){const l=yv(r,e,n,s);mv(r)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const a=l.removed;o=l.events;const c=a.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,f)=>Ln(f));if(c&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const f=kv(h);for(let _=0;_<f.length;++_){const m=f[_],S=m.query,T=Ov(t,m);t.listenProvider_.startListening(dr(S),nl(t,S),T.hashFn,T.onComplete)}}}!u&&a.length>0&&!s&&(c?t.listenProvider_.stopListening(dr(e),null):a.forEach(h=>{const f=t.queryToTagMap.get($i(h));t.listenProvider_.stopListening(dr(h),f)})),Mv(t,a)}return o}function xv(t,e){const{syncPoint:n,serverCache:s,writesCache:i,serverCacheComplete:r}=Av(e,t),o=Ih(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),e._queryParams.loadsAllData()?null:nl(t,e)}function xh(t,e,n,s){const i=sl(t,s);if(i!=null){const r=il(i),o=r.path,l=r.queryId,a=Le(o,e),c=new un(Yo(l),a,n);return rl(t,o,c)}else return[]}function Nv(t,e,n,s){const i=sl(t,s);if(i){const r=il(i),o=r.path,l=r.queryId,a=Le(o,e),c=fe.fromObject(n),u=new Mn(Yo(l),a,c);return rl(t,o,u)}else return[]}function Av(t,e){const n=t._path;let s=null,i=!1;e.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Le(c,n);s=s||Ht(u,h),i=i||Ln(u)});let r=e.syncPointTree_.get(n);r?(i=i||Ln(r),s=s||Ht(r,ee())):(r=new wh,e.syncPointTree_=e.syncPointTree_.set(n,r));let o;s!=null?o=!0:(o=!1,s=B.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((u,h)=>{const f=Ht(h,ee());f&&(s=s.updateImmediateChild(u,f))}));const l=Sh(r,t);if(!l&&!t._queryParams.loadsAllData()){const c=$i(t);b(!e.queryToTagMap.has(c),"View does not exist, but we have a tag");const u=Dv();e.queryToTagMap.set(c,u),e.tagToQueryMap.set(u,c)}const a=Ui(e.pendingWriteTree_,n);return{syncPoint:r,writesCache:a,serverCache:s,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:l}}function tl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Le(o,e),c=Ht(l,a);if(c)return c});return yh(i,e,r,n,!0)}function Pv(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Le(c,n);s=s||Ht(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Ht(i,ee()):(i=new wh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Vt(s,!0,!1):null,l=Ui(t.pendingWriteTree_,e._path),a=Ih(i,e,l,r?o.getNode():B.EMPTY_NODE,r);return fv(a)}function zn(t,e){return Nh(e,t.syncPointTree_,null,Ui(t.pendingWriteTree_,ee()))}function Nh(t,e,n,s){if(K(t.path))return Ah(t,e,n,s);{const i=e.get(ee());n==null&&i!=null&&(n=Ht(i,ee()));let r=[];const o=G(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=vh(s,o);r=r.concat(Nh(l,a,c,u))}return i&&(r=r.concat(Zo(i,t,s,n))),r}}function Ah(t,e,n,s){const i=e.get(ee());n==null&&i!=null&&(n=Ht(i,ee()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=vh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ah(u,l,a,c)))}),i&&(r=r.concat(Zo(i,t,s,n))),r}function Ov(t,e){const n=e.query,s=nl(t,n);return{hashFn:()=>(hv(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Rv(t,n._path,s):Tv(t,n._path);{const r=bm(i,n);return Rh(t,n,null,r)}}}}function nl(t,e){const n=$i(e);return t.queryToTagMap.get(n)}function $i(t){return t._path.toString()+"$"+t._queryIdentifier}function sl(t,e){return t.tagToQueryMap.get(e)}function il(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function rl(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=Ui(t.pendingWriteTree_,e);return Zo(s,n,i,null)}function kv(t){return t.fold((e,n,s)=>{if(n&&Ln(n))return[el(n)];{let i=[];return n&&(i=vv(n)),Me(s,(r,o)=>{i=i.concat(o)}),i}})}function dr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bv())(t._repo,t._path):t}function Mv(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=$i(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Dv(){return wv++}/**
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
 */class ol{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ol(n)}node(){return this.node_}}class ll{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new ll(this.syncTree_,n)}node(){return tl(this.syncTree_,this.path_)}}const Lv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},tc=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Fv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Bv(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Fv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Bv=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ph=function(t,e,n,s){return al(e,new ll(n,t),s)},Oh=function(t,e,n){return al(t,new ol(e),n)};function al(t,e,n){const s=t.getPriority().val(),i=tc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=tc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Te(l,Ie(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Te(i))),o.forEachChild(ve,(l,a)=>{const c=al(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class cl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ul(t,e){let n=e instanceof se?e:new se(e),s=t,i=G(n);for(;i!==null;){const r=kn(s.node.children,i)||{children:{},childCount:0};s=new cl(i,s,r),n=pe(n),i=G(n)}return s}function Gn(t){return t.node.value}function kh(t,e){t.node.value=e,no(t)}function Mh(t){return t.node.childCount>0}function Hv(t){return Gn(t)===void 0&&!Mh(t)}function ji(t,e){Me(t.node.children,(n,s)=>{e(new cl(n,t,s))})}function Dh(t,e,n,s){n&&!s&&e(t),ji(t,i=>{Dh(i,e,!0,s)}),n&&s&&e(t)}function Wv(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Hs(t){return new se(t.parent===null?t.name:Hs(t.parent)+"/"+t.name)}function no(t){t.parent!==null&&Uv(t.parent,t.name,t)}function Uv(t,e,n){const s=Hv(n),i=mt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,no(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,no(t))}/**
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
 */const $v=/[\[\].#$\/\u0000-\u001F\u007F]/,jv=/[\[\].#$\u0000-\u001F\u007F]/,pr=10*1024*1024,Vi=function(t){return typeof t=="string"&&t.length!==0&&!$v.test(t)},Lh=function(t){return typeof t=="string"&&t.length!==0&&!jv.test(t)},Vv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Lh(t)},so=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Lo(t)||t&&typeof t=="object"&&mt(t,".sv")},Ws=function(t,e,n,s){s&&e===void 0||qi(Ms(t,"value"),e,n)},qi=function(t,e,n){const s=n instanceof se?new sy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qt(s)+" with contents = "+e.toString());if(Lo(e))throw new Error(t+"contains "+e.toString()+" "+Qt(s));if(typeof e=="string"&&e.length>pr/3&&Bi(e)>pr)throw new Error(t+"contains a string greater than "+pr+" utf8 bytes "+Qt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Vi(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);iy(s,o),qi(t,l,s),ry(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qt(s)+" in addition to actual children.")}},qv=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Rs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Vi(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ny);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Xe(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Kv=function(t,e,n,s){if(s&&e===void 0)return;const i=Ms(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Me(e,(o,l)=>{const a=new se(o);if(qi(i,l,ye(n,a)),Uo(a)===".priority"&&!so(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),qv(i,r)},zv=function(t,e,n,s){if(!(s&&n===void 0)&&!Vi(n))throw new Error(Ms(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},hl=function(t,e,n,s){if(!(s&&n===void 0)&&!Lh(n))throw new Error(Ms(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Gv=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hl(t,e,n,s)},fl=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Yv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vi(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Vv(n))throw new Error(Ms(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Qv{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function dl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!oh(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ct(t,e,n){dl(t,n),Xv(t,s=>Xe(s,e)||Xe(e,s))}function Xv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Jv(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Jv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();rn&&Pe("event: "+n.toString()),Kn(s)}}}/**
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
 */const Zv="repo_interrupt",eE=25;class tE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qv,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=di(),this.transactionQueueTree_=new cl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nE(t,e,n){if(t.stats_=Ho(t.repoInfo_),t.forceRestClient_||Tm())t.server_=new fi(t.repoInfo_,(s,i,r,o)=>{nc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new It(t.repoInfo_,e,(s,i,r,o)=>{nc(t,s,i,r,o)},s=>{sc(t,s)},s=>{sE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Om(t.repoInfo_,()=>new My(t.stats_,t.server_)),t.infoData_=new Ny,t.infoSyncTree_=new ec({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Bs(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),pl(t,"connected",!1),t.serverSyncTree_=new ec({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);ct(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Fh(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ki(t){return Lv({timestamp:Fh(t)})}function nc(t,e,n,s,i){t.dataUpdateCount++;const r=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=oi(n,c=>Ie(c));o=Nv(t.serverSyncTree_,r,a,i)}else{const a=Ie(n);o=xh(t.serverSyncTree_,r,a,i)}else if(s){const a=oi(n,c=>Ie(c));o=Sv(t.serverSyncTree_,r,a)}else{const a=Ie(n);o=Bs(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Bn(t,r)),ct(t.eventQueue_,l,o)}function sc(t,e){pl(t,"connected",e),e===!1&&lE(t)}function sE(t,e){Me(e,(n,s)=>{pl(t,n,s)})}function pl(t,e,n){const s=new se("/.info/"+e),i=Ie(n);t.infoData_.updateSnapshot(s,i);const r=Bs(t.infoSyncTree_,s,i);ct(t.eventQueue_,s,r)}function _l(t){return t.nextWriteId_++}function iE(t,e){const n=Pv(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(s=>{const i=Ie(s).withIndex(e._queryParams.getIndex());if(e._queryParams.loadsAllData())Bs(t.serverSyncTree_,e._path,i);else{const o=xv(t.serverSyncTree_,e);xh(t.serverSyncTree_,e._path,i,o)}return Rh(t.serverSyncTree_,e,null).length>0&&Fn(t,"unexpected cancel events in repoGetValue"),i},s=>(Fn(t,"get for query "+Ne(e)+" failed: "+s),Promise.reject(new Error(s))))}function rE(t,e,n,s,i){Fn(t,"set",{path:e.toString(),value:n,priority:s});const r=Ki(t),o=Ie(n,s),l=tl(t.serverSyncTree_,e),a=Oh(o,l,r),c=_l(t),u=Th(t.serverSyncTree_,e,a,c,!0);dl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const m=f==="ok";m||Fe("set at "+e+" failed: "+f);const S=Ot(t.serverSyncTree_,c,!m);ct(t.eventQueue_,e,S),io(t,i,f,_)});const h=ml(t,e);Bn(t,h),ct(t.eventQueue_,h,[])}function oE(t,e,n,s){Fn(t,"update",{path:e.toString(),value:n});let i=!0;const r=Ki(t),o={};if(Me(n,(l,a)=>{i=!1,o[l]=Ph(ye(e,l),Ie(a),t.serverSyncTree_,r)}),i)Pe("update() called with empty data.  Don't do anything."),io(t,s,"ok",void 0);else{const l=_l(t),a=Iv(t.serverSyncTree_,e,o,l);dl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||Fe("update at "+e+" failed: "+c);const f=Ot(t.serverSyncTree_,l,!h),_=f.length>0?Bn(t,e):e;ct(t.eventQueue_,_,f),io(t,s,c,u)}),Me(n,c=>{const u=ml(t,ye(e,c));Bn(t,u)}),ct(t.eventQueue_,e,[])}}function lE(t){Fn(t,"onDisconnectEvents");const e=Ki(t),n=di();Qr(t.onDisconnect_,ee(),(i,r)=>{const o=Ph(i,r,t.serverSyncTree_,e);ph(n,i,o)});let s=[];Qr(n,ee(),(i,r)=>{s=s.concat(Bs(t.serverSyncTree_,i,r));const o=ml(t,i);Bn(t,o)}),t.onDisconnect_=di(),ct(t.eventQueue_,ee(),s)}function aE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Zv)}function Fn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pe(n,...e)}function io(t,e,n,s){e&&Kn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Bh(t,e,n){return tl(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function gl(t,e=t.transactionQueueTree_){if(e||zi(t,e),Gn(e)){const n=Wh(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&cE(t,Hs(e),n)}else Mh(e)&&ji(e,n=>{gl(t,n)})}function cE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Bh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Le(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Fn(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ot(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();zi(t,ul(t.transactionQueueTree_,e)),gl(t,t.transactionQueueTree_),ct(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Kn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Fe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Bn(t,e)}},o)}function Bn(t,e){const n=Hh(t,e),s=Hs(n),i=Wh(t,n);return uE(t,i,s),s}function uE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Le(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=eE)u=!0,h="maxretry",i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Bh(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){qi("transaction failed: Data returned ",_,a.path);let m=Ie(_);typeof _=="object"&&_!=null&&mt(_,".priority")||(m=m.updatePriority(f.getPriority()));const T=a.currentWriteId,N=Ki(t),F=Oh(m,f,N);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=F,a.currentWriteId=_l(t),o.splice(o.indexOf(T),1),i=i.concat(Th(t.serverSyncTree_,a.path,F,a.currentWriteId,a.applyLocally)),i=i.concat(Ot(t.serverSyncTree_,T,!0))}else u=!0,h="nodata",i=i.concat(Ot(t.serverSyncTree_,a.currentWriteId,!0))}ct(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}zi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Kn(s[l]);gl(t,t.transactionQueueTree_)}function Hh(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&Gn(s)===void 0;)s=ul(s,n),e=pe(e),n=G(e);return s}function Wh(t,e){const n=[];return Uh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Uh(t,e,n){const s=Gn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ji(e,i=>{Uh(t,i,n)})}function zi(t,e){const n=Gn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,kh(e,n.length>0?n:void 0)}ji(e,s=>{zi(t,s)})}function ml(t,e){const n=Hs(Hh(t,e)),s=ul(t.transactionQueueTree_,e);return Wv(s,i=>{_r(t,i)}),_r(t,s),Dh(s,i=>{_r(t,i)}),n}function _r(t,e){const n=Gn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ot(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?kh(e,void 0):n.length=r+1,ct(t.eventQueue_,Hs(e),i);for(let o=0;o<s.length;o++)Kn(s[o])}}/**
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
 */function hE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function fE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const ic=function(t,e){const n=dE(t),s=n.namespace;n.domain==="firebase.com"&&an(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&an("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Nm(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new se(n.pathString)}},dE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=hE(t.substring(u,h)));const f=fE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class Yn{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:Uo(this._path)}get ref(){return new qt(this._repo,this._path)}get _queryIdentifier(){const e=Va(this._queryParams),n=Fo(e);return n==="{}"?"default":n}get _queryObject(){return Va(this._queryParams)}isEqual(e){if(e=fn(e),!(e instanceof Yn))return!1;const n=this._repo===e._repo,s=oh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ty(this._path)}}function pE(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function yl(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===on){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==cn)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==$t)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===ve){if(e!=null&&!so(e)||n!=null&&!so(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(b(t.getIndex()instanceof Vo||t.getIndex()===dh,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function $h(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class qt extends Yn{constructor(e,n){super(e,n,new Ko,!1)}get parent(){const e=rh(this._path);return e===null?null:new qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ci{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),s=Hn(this.ref,e);return new Ci(this._node.getChild(n),s,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ci(i,Hn(this.ref,s),ve)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _E(t,e){return t=fn(t),t._checkNotDeleted("ref"),e!==void 0?Hn(t._root,e):t._root}function Hn(t,e){return t=fn(t),G(t._path)===null?Gv("child","path",e,!1):hl("child","path",e,!1),new qt(t._repo,ye(t._path,e))}function gE(t,e){t=fn(t),fl("push",t._path),Ws("push",e,t._path,!0);const n=Fh(t._repo),s=Cy(n),i=Hn(t,s),r=Hn(t,s);let o;return e!=null?o=jh(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function mE(t){return fl("remove",t._path),jh(t,null)}function jh(t,e){t=fn(t),fl("set",t._path),Ws("set",e,t._path,!1);const n=new ks;return rE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function yE(t,e){Kv("update",e,t._path,!1);const n=new ks;return oE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function vE(t){return t=fn(t),iE(t._repo,t).then(e=>new Ci(e,new qt(t._repo,t._path),t._queryParams.getIndex()))}class Gi{}class EE extends Gi{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Ws("endAt",this._value,e._path,!0);const n=Ry(e._queryParams,this._value,this._key);if($h(n),yl(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Yn(e._repo,e._path,n,e._orderByCalled)}}class CE extends Gi{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){Ws("startAt",this._value,e._path,!0);const n=Ty(e._queryParams,this._value,this._key);if($h(n),yl(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Yn(e._repo,e._path,n,e._orderByCalled)}}class bE extends Gi{constructor(e){super(),this._path=e}_apply(e){pE(e,"orderByChild");const n=new se(this._path);if(K(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Vo(n),i=xy(e._queryParams,s);return yl(i),new Yn(e._repo,e._path,i,!0)}}function wE(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return hl("orderByChild","path",t,!1),new bE(t)}class IE extends Gi{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(Ws("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new EE(this._value,this._key)._apply(new CE(this._value,this._key)._apply(e))}}function SE(t,e){return zv("equalTo","key",e,!0),new IE(t,e)}function TE(t,...e){let n=fn(t);for(const s of e)n=s._apply(n);return n}_v(qt);Cv(qt);/**
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
 */const RE="FIREBASE_DATABASE_EMULATOR_HOST",ro={};let xE=!1;function NE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||an("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ic(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[RE]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=ic(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new zr(zr.OWNER):new xm(t.name,t.options,e);Yv("Invalid Firebase Database URL",o),K(o.path)||an("Database URL must point to the root of a Firebase Database (not including a child path).");const h=PE(l,t,u,new Rm(t.name,n));return new OE(h,t)}function AE(t,e){const n=ro[e];(!n||n[t.key]!==t)&&an(`Database ${e}(${t.repoInfo_}) has already been deleted.`),aE(t),delete n[t.key]}function PE(t,e,n,s){let i=ro[e.name];i||(i={},ro[e.name]=i);let r=i[t.toURLString()];return r&&an("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new tE(t,xE,n,s),i[t.toURLString()]=r,r}class OE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qt(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&an("Cannot call "+e+" on a deleted database.")}}function kE(t=em(),e){return Yg(t,"database").getImmediate({identifier:e})}/**
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
 */function ME(t){fm(Jg),ai(new Is("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return NE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Rn(Ta,Ra,t),Rn(Ta,Ra,"esm2017")}It.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};It.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ME();const DE={apiKey:"AIzaSyC5RpSCtGtGiZwcy4RDbSMrSTelXFr4oO8",authDomain:"short-links-78fa0.firebaseapp.com",projectId:"short-links-78fa0",storageBucket:"short-links-78fa0.appspot.com",messagingSenderId:"301674154227",appId:"1:301674154227:web:3350cef1d31a7df96f8f86"},LE=Zg(DE),oo=kE(LE),lo=_E,FE=gE,BE=Hn,uC=TE,HE=yE,WE=mE,hC=wE,fC=SE,dC=vE,UE=["onSubmit"],$E=_t("button",{type:"submit",class:"p-1 px-5 text-xl rounded-xl text-white bg-indigo-800 h-12 hover:bg-indigo-700 active:bg-indigo-900"}," \u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C ",-1),jE={key:0,class:"error text-xl bg-red-200 rounded-xl mt-4 py-2 px-5"},VE=Vn({__name:"FormItem",setup(t){const e=Fi(),n=ys(""),s=ys(""),i=Ze("emitter"),r=async()=>{e.isLoading=!0;const l=FE(BE(lo(oo),"links")).key,a=o(l),c={},u={original_link:n.value,timestamp:Date.now(),short_link:document.location.origin+"/vue-link-shortener/"+a,short_code:a,code:l};c["/links/"+l]=u,HE(lo(oo),c).then(()=>{n.value="",e.setLinks(u),i.emit("sendData"),e.isLoading=!1}).catch(h=>{s.value="\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 "+h,e.isLoading=!1})},o=l=>H_(l,5)();return(l,a)=>(wt(),nn(qe,null,[_t("form",{action:"#",class:"p-5 mx-auto w-full bg-white flex items-center gap-3 rounded-xl shadow border-2 bg-blue-400",onSubmit:Mr(r,["prevent"])},[dd(_t("input",{type:"text",class:"w-full text-xl text-gray-800 p-1 px-4 rounded-xl h-12",placeholder:"https://www.google.com/search?q=smile","onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c)},null,512),[[gp,n.value]]),$E],40,UE),s.value?(wt(),nn("div",jE,Gs(s.value),1)):su("",!0)],64))}}),qE={key:0,class:"loading absolute left-2/4 top-5 -mx-12 block w-24 h-24 rounded-full border-8 border-indigo-800"},KE=Vn({__name:"LoadingRound",setup(t){const e=Fi();return(n,s)=>Dt(e).isLoading?(wt(),nn("span",qE)):su("",!0)}});const vl=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},zE=vl(KE,[["__scopeId","data-v-87a85753"]]),GE={class:"list-links relative"},YE={class:"m-0 mt-5 p-0 list-none flex flex-col gap-2"},QE={class:"overflow-hidden whitespace-nowrap text-ellipsis h-6"},XE={class:"ml-auto whitespace-nowrap"},JE=["onClick"],ZE=["onClick"],eC=Vn({__name:"LinksItem",setup(t){const e=Fi(),n=We(()=>e.getLinks.reverse()),s=Ze("emitter"),i=o=>{navigator.clipboard.writeText(o==null?void 0:o.short_link),e.setLableCopy(o),setTimeout(()=>{e.setLableCopy()},5e3)},r=o=>{e.isLoading=!0,WE(lo(oo,"links/"+o.code)).then(async()=>{e.deleteLink(o),await e.getLinks,e.isLoading=!1}).catch(l=>{alert("\u041E\u0448\u0438\u0431\u043A\u0430 "+l),e.isLoading=!1})};return s.on("sendData",async()=>{await e.getLinks}),(o,l)=>(wt(),nn("div",GE,[_t("ul",YE,[(wt(!0),nn(qe,null,md(Dt(n),a=>(wt(),nn("li",{key:a==null?void 0:a.short_code,class:"flex items-center justify-between gap-4 bg-blue-200 rounded-lg px-4 py-3"},[_t("span",QE,Gs(a==null?void 0:a.original_link),1),_t("span",XE,Gs(a==null?void 0:a.short_link),1),_t("button",{onClick:Mr(c=>i(a),["prevent"]),class:bi(["copy w-24 px-3 py-1 text-white rounded-lg cursor-pointer select-none",{"bg-purple-700":(a==null?void 0:a.copied)===!0,"bg-blue-500 hover:bg-blue-400 active:bg-blue-600":!(a!=null&&a.copied)}])},Gs(a!=null&&a.copied?"Copied":"Copy"),11,JE),_t("button",{onClick:Mr(c=>r(a),["prevent"]),class:"text-lg px-2 py-0 text-white rounded-lg cursor-pointer bg-red-500 hover:bg-red-400 active:bg-red-600 select-none"}," \xD7 ",8,ZE)]))),128))]),Oe(zE)]))}});const tC=vl(eC,[["__scopeId","data-v-86e91e14"]]),nC=Vn({__name:"HomeView",setup(t){return(e,n)=>(wt(),nn(qe,null,[Oe(VE),Oe(tC)],64))}}),sC=[{path:"/",name:"home",component:nC},{path:"/:slug",name:"redirectLink",component:()=>Op(()=>import("./RedirectView.7fa1cd60.js"),[])}],Vh=D_({history:Qp("/vue-link-shortener/"),routes:sC});Vh.beforeEach(()=>{const t=Fi();t.isLoading=!1});const iC={};function rC(t,e){const n=pd("router-view");return wt(),tu(n)}const oC=vl(iC,[["render",rC]]);function lC(t){return{all:t=t||new Map,on:function(e,n){var s=t.get(e);s?s.push(n):t.set(e,[n])},off:function(e,n){var s=t.get(e);s&&(n?s.splice(s.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var s=t.get(e);s&&s.slice().map(function(i){i(n)}),(s=t.get("*"))&&s.slice().map(function(i){i(e,n)})}}}const aC=lC(),Yi=Cp(oC);Yi.use(Vh);Yi.use(Ip());Yi.provide("emitter",aC);Yi.mount("#app");export{zE as L,nn as a,tu as b,We as c,Vn as d,su as e,Oe as f,Bd as g,_t as h,lo as i,fC as j,dC as k,pd as l,wt as m,cC as n,hC as o,oo as p,uC as q,ys as r,Fi as u,Kf as w};
