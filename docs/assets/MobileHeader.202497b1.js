import{u,_ as p,a as f}from"./index.da3d936a.js";import{S as g,a as v,_ as x}from"./header.es.482573fe.js";import{d as k,q as M,o as t,c as w,b as c,u as a,w as s,F as y,e as i,j as C,a as e}from"./vendor.48cc1c7c.js";const j=e("div",{class:"ml-5 text-lg"},"Branding2",-1),B=e("div",{class:"ml-5 text-lg"},"Mobile branding",-1),$={class:"flex flex-row items-center justify-end h-full space-x-1"},P=e("div",{class:"flex flex-col p-3 space-y-5"},[e("button",{class:"border-none btn"},"Page 1"),e("button",{class:"border-none btn"},"Page 2")],-1),D=k({setup(V){const o=M(!1);function r(){o.value=!1}return(_,n)=>{const d=x,m=p,b=f;return t(),w(y,null,[c(a(g),{class:"h-12 primary",onTogglemenu:n[3]||(n[3]=l=>o.value=!o.value)},{branding:s(()=>[j]),"mobile-branding":s(()=>[B]),"mobile-back":s(()=>[_.$router.currentRoute.value.path!=""?(t(),i(d,{key:0,class:"inline-flex ml-2 text-3xl"})):C("",!0)]),menu:s(()=>[e("div",$,[e("button",{class:"border-none btn",onClick:n[0]||(n[0]=l=>r())},"Page 1"),e("button",{class:"border-none btn",onClick:n[1]||(n[1]=l=>r())},"Page 2"),e("div",{class:"px-5 text-lg cursor-pointer",onClick:n[2]||(n[2]=l=>a(u).toggleDarkMode())},[a(u).isDarkMode.value==!1?(t(),i(m,{key:0})):(t(),i(b,{key:1}))])])]),_:1}),c(a(v),{"is-visible":o.value,class:"light",breakpoint:"2xl"},{default:s(()=>[P]),_:1},8,["is-visible"])],64)}}});export{D as default};
