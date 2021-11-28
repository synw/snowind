import{C as u}from"./CodeBlock.c5949998.js";import{N as b}from"./NextBar.bfefa88f.js";import{_ as d}from"./index.fc971e03.js";import{d as i,r as e,c as m,e as o,F as B,m as _,a as n,o as g}from"./vendor.d513a3f4.js";const p=i({components:{CodeBlock:u,NextBar:b},setup(){return{code1:`
        <button class="btn">Button</button>
        <button class="btn primary">Button</button>
        <button class="btn secondary">Button</button>
        <button class="btn neutral">Button</button>
        <button class="btn light">Button</button>
        <button class="btn success">Button</button>
        <button class="btn warning">Button</button>
        <button class="btn danger">Button</button>
    `,code2:`
    <button class="text-yellow-800 bg-gray-200 rounded-none dark:text-black \\
      btn hover:border-danger dark:bg-yellow-300">Button</button>
      `,code3:`
    <button class="btn small">Button</button>
    `,code4:`
    <style lang="sass">
    .btn.small
      @apply text-xs bg-light border-warning dark:border-warning-dark dark:bg-light-dark \\
        hover:border-danger dark:hover:border-danger-dark
    </style>
    `}}}),x=_('<div class="mb-8 text-2xl">Button</div><div class="flex flex-row space-x-3"><button class="btn">Button</button><button class="btn primary">Button</button><button class="btn secondary">Button</button><button class="btn neutral">Button</button><button class="btn light">Button</button><button class="btn success">Button</button><button class="btn warning">Button</button><button class="btn danger">Button</button></div>',2),k=n("div",{class:"my-8 text-xl"},"Style",-1),h=n("div",{class:"mt-3"},"Customize with utility classes",-1),v=n("button",{class:"mt-5 text-yellow-800 bg-gray-200 rounded-none dark:text-black btn hover:border-danger dark:bg-yellow-300"},"Button",-1),y=n("div",{class:"mt-8"},"Customize with sass",-1),f=n("button",{class:"mt-5 btn small"},"Button",-1);function w(t,a,c,l,C,N){const s=e("code-block"),r=e("next-bar");return g(),m(B,null,[x,o(s,{code:t.code1,class:"mt-8"},null,8,["code"]),k,h,v,o(s,{code:t.code2,class:"mt-8"},null,8,["code"]),y,f,o(s,{code:t.code3,lang:"html",class:"mt-8"},null,8,["code"]),o(s,{code:t.code4,lang:"html",class:"mt-5"},null,8,["code"]),o(r,{class:"mt-24",prev:{link:"/colors",text:"Colors"},next:{link:"/collapse",text:"Collapse"}})],64)}var F=d(p,[["render",w]]);export{F as default};
