import{C as i}from"./CodeBlock.75e3803d.js";import{_ as m,N as u}from"./NextBar.999c92da.js";import{d as p,r,o as f,c as _,e as t,F as v,a as e,f as s,m as b}from"./vendor.6a66068f.js";const h=p({components:{CodeBlock:i,NextBar:u},setup(){return{code1:`
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
    `,code4:`
    import { user } from "@/state";

    user.toggleDarkMode();
    `}}}),g=e("div",{class:"mb-8 text-2xl"},"User",-1),k=e("div",null,[s(" A "),e("code",{class:"variable"},"User"),s(" class is available to manage the user preferences. Exemple: create a "),e("code",{class:"variable"},"state.ts"),s(" file in your project to initialize a user: ")],-1),x=e("div",{class:"mt-12 mb-8 text-xl"},"Persistent properties",-1),y=e("div",null,"Some properties are stored in localstorage to be available across sessions:",-1),w=b('<div class="mt-5">Available refs:</div><ul class="mx-3 mt-5 space-y-2"><li><div class="inline-block font-bold">name</div>: the user name, default is <code class="variable">anonymous</code></li><li><div class="inline-block font-bold">isDarkMode</div>: the user dark mode preference, default is <code class="variable">false</code></li></ul><div class="mt-8">Toggle dark mode for the user:</div>',3),B=e("div",{class:"mt-5"},[s(" This will add the "),e("code",{class:"variable"},"bg-background-dark"),s(" and "),e("code",{class:"variable"},"text-foreground-dark"),s(" css classes to the html body tag when the dark mode is activated and remove them for the light mode ")],-1),N=e("div",{class:"mt-12 mb-8 text-xl"},"Ephemeral properties",-1),R=e("div",null,"Some user properties are not persistent across sessions:",-1),D=e("div",{class:"mt-12 mb-8 text-xl"},"Install",-1),M=e("code",{lang:"bash"},"npm install @snowind/state",-1),U=e("br",null,null,-1),C=e("code",{class:"mt-3 text-neutral"},"# or",-1),I=e("br",null,null,-1),S=e("code",{class:"mt-3"},"yarn add @snowind/state",-1);function V(o,n,c,l,j,E){const a=r("code-block"),d=r("next-bar");return f(),_(v,null,[g,k,t(a,{code:o.code1,lang:"typescript",class:"mt-5"},null,8,["code"]),x,y,t(a,{code:o.code2,lang:"typescript",class:"mt-5"},null,8,["code"]),w,t(a,{code:o.code4,lang:"typescript",class:"mt-5"},null,8,["code"]),B,N,R,t(a,{code:o.code3,lang:"typescript",class:"mt-5"},null,8,["code"]),D,M,U,C,I,S,t(d,{class:"mt-24",prev:{link:"/state/screen",text:"Screen"},next:{link:"/examples/form",text:"Example form"}})],64)}var A=m(h,[["render",V]]);export{A as default};
