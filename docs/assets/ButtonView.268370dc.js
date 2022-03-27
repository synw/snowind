import{C as o}from"./CodeBlock.d68e9033.js";import{N as l}from"./NextBar.40b4edc2.js";import{d as u,o as b,c as r,b as t,F as d,l as i,a as n}from"./vendor.48cc1c7c.js";const m=i('<div class="mb-8 text-2xl">Button</div><div class="flex flex-row space-x-3"><button class="btn">Button</button><button class="btn primary">Button</button><button class="btn secondary">Button</button><button class="btn light">Button</button><button class="btn lighter">Button</button><button class="btn success">Button</button><button class="btn warning">Button</button><button class="btn danger">Button</button></div>',2),B=n("div",{class:"my-8 text-xl"},"Style",-1),g=n("div",{class:"mt-3"},"Customize with utility classes",-1),_=n("button",{class:"mt-5 rounded-none txt-warning block-lighter dark:txt-danger btn hover:bord-danger"},"Button",-1),x=n("div",{class:"mt-8"},"Customize with sass",-1),h=n("button",{class:"mt-5 btn small"},"Button",-1),C=u({setup(p){const s=`
        <button class="btn">Button</button>
        <button class="btn primary">Button</button>
        <button class="btn secondary">Button</button>
        <button class="btn light">Button</button>
        <button class="btn lighter">Button</button>
        <button class="btn success">Button</button>
        <button class="btn warning">Button</button>
        <button class="btn danger">Button</button>
    `,e=`
    <button class="rounded-none txt-warning block-lighter dark:txt-danger btn hover:bord-danger">Button</button>
      `,a=`
    <button class="btn small">Button</button>
    `,c=`
    <style lang="sass">
    .btn.small
      @apply text-xs block-lighter bord-warning hover:bord-danger txt-danger
    </style>
    `;return(v,y)=>(b(),r(d,null,[m,t(o,{code:s,class:"mt-8"}),B,g,_,t(o,{code:e,class:"mt-8"}),x,h,t(o,{code:a,lang:"html",class:"mt-8"}),t(o,{code:c,lang:"html",class:"mt-5"}),t(l,{class:"mt-24",prev:{link:"/colors",text:"Colors"},next:{link:"/collapse",text:"Collapse"}})],64))}});export{C as default};
