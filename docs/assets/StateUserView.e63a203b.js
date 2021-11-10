import{C as i}from"./CodeBlock.9cd87e28.js";import{N as d}from"./NextBar.ab9c44a2.js";import{_ as m}from"./index.2e2cec19.js";import{d as p,r,c as u,e as t,F as _,a as e,f as a,m as v,o as f}from"./vendor.36fa6795.js";const b=p({components:{CodeBlock:i,NextBar:d},setup(){return{code1:`
    import { User } from "@snowind/state";

    const user = new User();

    export { User };
    `,code2:`
    import { user } from "@/state";

    // user name persistent reference
    const username = user.name.value;

    // dark mode persistent reference
    const isDarkModeOn = user.isDarkMode.value;
    `,code3:`
    import { user } from "@/state";

    // the user connection state
    const isLoggedIn = user.isLoggedIn.value;
    `}}}),x=e("div",{class:"mb-8 text-2xl"},"User",-1),h=e("div",null,[a(" A "),e("code",{class:"variable"},"User"),a(" class is available to manage the user preferences. Exemple: create a "),e("code",{class:"variable"},"state.ts"),a(" file in your project to initialize a user: ")],-1),k=e("div",{class:"mt-12 mb-8 text-xl"},"Persistent properties",-1),g=e("div",null,"Some properties are stored in localstorage to be available across sessions:",-1),y=v('<div class="mt-5">Available refs:</div><ul class="mx-3 mt-5 space-y-2"><li><div class="inline-block font-bold">name</div>: the user name, default is <code class="variable">anonymous</code></li><li><div class="inline-block font-bold">isDarkMode</div>: the user dark mode preference, default is <code class="variable">false</code></li></ul><div class="mt-12 mb-8 text-xl">Ephemeral properties</div><div>Some user properties are not persistent across sessions:</div>',4),B=e("div",{class:"mt-12 mb-8 text-xl"},"Install",-1),N=e("code",{lang:"bash"},"npm install @snowind/state",-1),U=e("br",null,null,-1),j=e("code",{class:"mt-3 text-neutral"},"# or",-1),w=e("br",null,null,-1),C=e("code",{class:"mt-3"},"yarn add @snowind/state",-1);function S(s,n,c,V,E,$){const o=r("code-block"),l=r("next-bar");return f(),u(_,null,[x,h,t(o,{code:s.code1,lang:"typescript",class:"mt-5"},null,8,["code"]),k,g,t(o,{code:s.code2,lang:"typescript",class:"mt-5"},null,8,["code"]),y,t(o,{code:s.code3,lang:"typescript",class:"mt-5"},null,8,["code"]),B,N,U,j,w,C,t(l,{class:"mt-24",prev:{link:"/state/screen",text:"Screen"},next:{link:"/examples/form",text:"Example form"}})],64)}var F=m(b,[["render",S]]);export{F as default};
