import{d as f,u as h,r as m,c as p,a as u,b,e as r,f as k,w as v,g as l,h as x,i as g,q as y,j as B,o as w,k as C,l as D,m as s,n as L,L as R,p as V}from"./index.716937c2.js";const q={class:"fixed left-0 top-0 flex items-center justify-center w-screen h-screen"},N={key:1,class:"block text-center text-3xl"},E=l(" \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"),S=x("br",null,null,-1),j=l("\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"),z=f({__name:"RedirectView",setup(I){const o=h(),c=L(),e=m(null),d=p(()=>c.path.replace("/",""));return(async()=>{o.isLoading=!0;const a=g(V,"/links"),n=y(a,w("short_code"),B(d.value)),t=await C(n);t.size===0?e.value=!1:(e.value=!0,t.forEach(i=>{let _=i.val();document.location.href=_.original_link,o.isLoading=!1}))})(),(a,n)=>{const t=D("router-link");return s(),u("div",q,[e.value!==!1?(s(),b(R,{key:0,class:"relative top-0 left-0"})):r("",!0),e.value===!1?(s(),u("div",N,[E,S,k(t,{to:{name:"home"},class:"text-base text-blue-300 font-normal"},{default:v(()=>[j]),_:1})])):r("",!0)])}}});export{z as default};
