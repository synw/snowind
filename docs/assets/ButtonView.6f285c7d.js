import{C as b}from"./CodeBlock.cfd1c453.js";import{_ as d,N as r}from"./NextBar.999c92da.js";import{d as i,r as e,o as m,c as B,e as o,F as _,m as g,a as n}from"./vendor.6a66068f.js";const p=i({components:{CodeBlock:b,NextBar:r},setup(){return{code1:`
        <button class="btn">Button</button>
        <button class="btn primary">Button</button>
        <button class="btn secondary">Button</button>
        <button class="btn light">Button</button>
        <button class="btn lighter">Button</button>
        <button class="btn success">Button</button>
        <button class="btn warning">Button</button>
        <button class="btn danger">Button</button>
    `,code2:`
    <button class="rounded-none txt-warning block-lighter dark:txt-danger btn hover:bord-danger">Button</button>
      `,code3:`
    <button class="btn small">Button</button>
    `,code4:`
    <style lang="sass">
    .btn.small
      @apply text-xs block-lighter bord-warning hover:bord-danger txt-danger
    </style>
    `}}}),h=g('<div class="mb-8 text-2xl">Button</div><div class="flex flex-row space-x-3"><button class="btn">Button</button><button class="btn primary">Button</button><button class="btn secondary">Button</button><button class="btn light">Button</button><button class="btn lighter">Button</button><button class="btn success">Button</button><button class="btn warning">Button</button><button class="btn danger">Button</button></div>',2),x=n("div",{class:"my-8 text-xl"},"Style",-1),v=n("div",{class:"mt-3"},"Customize with utility classes",-1),f=n("button",{class:"mt-5 rounded-none txt-warning block-lighter dark:txt-danger btn hover:bord-danger"},"Button",-1),k=n("div",{class:"mt-8"},"Customize with sass",-1),y=n("button",{class:"mt-5 btn small"},"Button",-1);function w(t,c,a,l,C,N){const s=e("code-block"),u=e("next-bar");return m(),B(_,null,[h,o(s,{code:t.code1,class:"mt-8"},null,8,["code"]),x,v,f,o(s,{code:t.code2,class:"mt-8"},null,8,["code"]),k,y,o(s,{code:t.code3,lang:"html",class:"mt-8"},null,8,["code"]),o(s,{code:t.code4,lang:"html",class:"mt-5"},null,8,["code"]),o(u,{class:"mt-24",prev:{link:"/colors",text:"Colors"},next:{link:"/collapse",text:"Collapse"}})],64)}var z=d(p,[["render",w]]);export{z as default};
