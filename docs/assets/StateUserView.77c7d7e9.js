import{C as i}from"./CodeBlock.9ecf39ea.js";import{N as d}from"./NextBar.1435cba3.js";import{_ as m}from"./index.93d97ca4.js";import{d as p,r as n,c as u,e as o,F as f,a as e,f as a,m as _,o as v}from"./vendor.36fa6795.js";const b=p({components:{CodeBlock:i,NextBar:d},setup(){return{code1:`
    import { User } from "@snowind/state";

    const user = new User();

    export { User };
    `,code2:`
    import { Ref } from "vue";
    import { user } from "@/state";

    // user name persistent reference
    const usernameRef: Ref<string> = user.name;
    const username: string = user.name.value;

    // dark mode persistent reference
    const isDarkModeOnRef: Ref<boolean> = user.isDarkMode;
    const isDarkModeOn: boolean = user.isDarkMode.value;
    `,code3:`
    import { user } from "@/state";

    // the user connection state
    const isLoggedInRef: Ref<boolean> = user.isLoggedIn;
    const isLoggedIn: boolean = user.isLoggedIn.value;
    `}}}),x=e("div",{class:"mb-8 text-2xl"},"User",-1),h=e("div",null,[a(" A "),e("code",{class:"variable"},"User"),a(" class is available to manage the user preferences. Exemple: create a "),e("code",{class:"variable"},"state.ts"),a(" file in your project to initialize a user: ")],-1),g=e("div",{class:"mt-12 mb-8 text-xl"},"Persistent properties",-1),k=e("div",null,"Some properties are stored in localstorage to be available across sessions:",-1),y=_('<div class="mt-5">Available refs:</div><ul class="mx-3 mt-5 space-y-2"><li><div class="inline-block font-bold">name</div>: the user name, default is <code class="variable">anonymous</code></li><li><div class="inline-block font-bold">isDarkMode</div>: the user dark mode preference, default is <code class="variable">false</code></li></ul><div class="mt-12 mb-8 text-xl">Ephemeral properties</div><div>Some user properties are not persistent across sessions:</div>',4),B=e("div",{class:"mt-12 mb-8 text-xl"},"Install",-1),N=e("code",{lang:"bash"},"npm install @snowind/state",-1),R=e("br",null,null,-1),U=e("code",{class:"mt-3 text-neutral"},"# or",-1),j=e("br",null,null,-1),w=e("code",{class:"mt-3"},"yarn add @snowind/state",-1);function C(s,r,c,D,I,M){const t=n("code-block"),l=n("next-bar");return v(),u(f,null,[x,h,o(t,{code:s.code1,lang:"typescript",class:"mt-5"},null,8,["code"]),g,k,o(t,{code:s.code2,lang:"typescript",class:"mt-5"},null,8,["code"]),y,o(t,{code:s.code3,lang:"typescript",class:"mt-5"},null,8,["code"]),B,N,R,U,j,w,o(l,{class:"mt-24",prev:{link:"/state/screen",text:"Screen"},next:{link:"/examples/form",text:"Example form"}})],64)}var $=m(b,[["render",C]]);export{$ as default};
