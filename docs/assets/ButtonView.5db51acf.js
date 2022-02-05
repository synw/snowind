import{C as u}from"./CodeBlock.75e3803d.js";import{_ as b,N as d}from"./NextBar.999c92da.js";import{d as i,r as e,o as m,c as B,e as o,F as _,m as g,a as n}from"./vendor.6a66068f.js";const p=i({components:{CodeBlock:u,NextBar:d},setup(){return{code1:`
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
    `}}}),k=g('<div class="mb-8 text-2xl">Button</div><div class="flex flex-row space-x-3"><button class="btn">Button</button><button class="btn primary">Button</button><button class="btn secondary">Button</button><button class="btn neutral">Button</button><button class="btn light">Button</button><button class="btn success">Button</button><button class="btn warning">Button</button><button class="btn danger">Button</button></div>',2),x=n("div",{class:"my-8 text-xl"},"Style",-1),h=n("div",{class:"mt-3"},"Customize with utility classes",-1),v=n("button",{class:"mt-5 text-yellow-800 bg-gray-200 rounded-none dark:text-black btn hover:border-danger dark:bg-yellow-300"},"Button",-1),y=n("div",{class:"mt-8"},"Customize with sass",-1),w=n("button",{class:"mt-5 btn small"},"Button",-1);function f(t,a,c,l,C,N){const s=e("code-block"),r=e("next-bar");return m(),B(_,null,[k,o(s,{code:t.code1,class:"mt-8"},null,8,["code"]),x,h,v,o(s,{code:t.code2,class:"mt-8"},null,8,["code"]),y,w,o(s,{code:t.code3,lang:"html",class:"mt-8"},null,8,["code"]),o(s,{code:t.code4,lang:"html",class:"mt-5"},null,8,["code"]),o(r,{class:"mt-24",prev:{link:"/colors",text:"Colors"},next:{link:"/collapse",text:"Collapse"}})],64)}var z=b(p,[["render",f]]);export{z as default};
