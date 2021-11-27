import{C as f}from"./CodeBlock.ffc5ebb7.js";import{N as w}from"./NextBar.97f99761.js";import{o as c,c as i,a as e,d as v,q as T,s as p,e as t,n as D,m as $,l as A,f as s,r as u,j as n,w as m,F as L,p as F,k as C}from"./vendor.ba3950ab.js";import{_ as g,u as U}from"./index.59f06184.js";const M={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},E=e("g",{fill:"none"},[e("path",{d:"M13.544 10.456a4.368 4.368 0 0 0-6.176 0l-3.089 3.088a4.367 4.367 0 1 0 6.177 6.177L12 18.177",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M10.456 13.544a4.368 4.368 0 0 0 6.176 0l3.089-3.088a4.367 4.367 0 1 0-6.177-6.177L12 5.823",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),S=[E];function B(o,l){return c(),i("svg",M,S)}var H={name:"akar-icons-link-chain",render:B};const j=v({props:{name:{type:String,required:!0}},setup(){return{isHovered:T(!1)}}}),N=["name"],z={key:0},V=["href"],I={key:1};function q(o,l,h,k,b,y){const d=H;return c(),i("div",{class:D(["w-max",{"cursor-pointer":o.isHovered}]),onMouseenter:l[0]||(l[0]=a=>o.isHovered=!0),onMouseleave:l[1]||(l[1]=a=>o.isHovered=!1)},[e("a",{name:o.name},null,8,N),o.isHovered?(c(),i("div",z,[e("a",{href:"#"+o.name},[p(o.$slots,"default"),t(d,{class:"ml-2"})],8,V)])):(c(),i("div",I,[p(o.$slots,"default")]))],34)}var R=g(j,[["render",q]]);const G={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36"},Y=$('<path fill="#31373D" d="M32 21v1h-2v-1c0-.446-.09-.867-.225-1.268a6 6 0 0 0-1.776-11.733a5.972 5.972 0 0 0-4.131 1.656A7 7 0 0 0 10 11a6.987 6.987 0 0 0 3.409 6H13a4 4 0 0 0-4 4H8l-6-4H1v14h1l6-4h1v2a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4v-3h2v1h3v-6h-3z"></path><path fill="#66757F" d="M22 11a5 5 0 1 1-10.001-.001A5 5 0 0 1 22 11z"></path><circle fill="#CCD6DD" cx="17" cy="11" r="2"></circle><circle fill="#66757F" cx="27.999" cy="14" r="4"></circle><circle fill="#CCD6DD" cx="27.999" cy="14" r="2"></circle><path fill="#8899A6" d="M17 20h10v10H17z"></path><path fill="#31373D" d="M19 22h6v6h-6z"></path><circle fill="#8899A6" cx="12.999" cy="28" r="2"></circle>',8),P=[Y];function W(o,l){return c(),i("svg",G,P)}var J={name:"twemoji-movie-camera",render:W},K=v({props:{link:{type:String,required:!0}},setup(o){const{link:l}=A(o),h="https://synw.github.io/snowind-stories/?path=/";function k(){window.open(h+l.value,"_blank").focus()}return{base:h,onClick:k}}});const O=s("Storybook");function Q(o,l){const h=J;return c(),i("button",{class:"text-sm group btn border-light dark:border-light-dark hover:secondary dark:hover:secondary-dark txt-neutral",onClick:l[0]||(l[0]=k=>o.onClick())},[t(h,{class:"mb-1 mr-2 text-xl opacity-50 group-hover:opacity-100"}),p(o.$slots,"default",{},()=>[O])])}var X=g(K,[["render",Q]]);const Z=v({components:{AnchorTitle:R,StorybookButton:X,CodeBlock:f,NextBar:w},setup(){return{code1:`
    const colors = require('tailwindcss/colors');

    module.exports = {
      // ...
      theme: {
        extend: {
          colors: {
            // the primary background color
            'primary': {
              DEFAULT: "#somecolor",
              dark: colors.gray[700],
            },
            // the primary text color
            'primary-r': {
              DEFAULT: "#somecolor",
              dark: colors.white,
            },
          }
        },
      }
    }
    `,code2:`
    const colors = require('tailwindcss/colors');

    colors: {
      'primary': {
        DEFAULT: colors.cyan[700],
        dark: colors.gray[800],
      },
      'primary-r': {
        DEFAULT: colors.white,
        dark: colors.white,
      },
      'secondary': {
        DEFAULT: colors.cyan[500],
        dark: colors.gray[700],
      },
      'secondary-r': {
        DEFAULT: colors.white,
        dark: colors.white
      },
      'success': {
        DEFAULT: colors.green[600],
        dark: colors.green[600]
      },
      'success-r': {
        DEFAULT: colors.white,
        dark: colors.white
      },
      'warning': {
        DEFAULT: colors.amber[500],
        dark: colors.amber[500]
      },
      'warning-r': {
        DEFAULT: colors.white,
        dark: colors.white
      },
      'danger': {
        DEFAULT: colors.red[500],
        dark: colors.red[400]
      },
      'danger-r': {
        DEFAULT: colors.white,
        dark: colors.white
      },
      'neutral': {
        DEFAULT: colors.gray[500],
        dark: colors.coolGray[300]
      },
      'neutral-r': {
        DEFAULT: colors.white,
        dark: colors.gray[800]
      },
      'light': {
        DEFAULT: colors.warmGray[100],
        dark: colors.gray[500]
      },
      'light-r': {
        DEFAULT: colors.gray[800],
        dark: colors.white
      },
      'background': {
        DEFAULT: colors.white,
        dark: colors.coolGray[600]
      },
      'foreground': {
        DEFAULT: colors.gray[800],
        dark: colors.white
      }
    }
    `,code3:`
    <div class="text-primary">Text primary</div>
    <div class="bg-primary">Background primary</div>
    `,code4:`
    <div class="light">Light block</div>
    `,code5:`
    <div class="bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark">Light block</div>
    `,code6:`
    <div class="p-3 light hover:success dark:hover:secondary-dark">Block</div>
    `,code7:`
    <div class="txt-primary">txt-primary</div>
    `,code8:`
    <div class="text-primary dark:text-primary-dark">txt-primary</div>
    `,code9:`
    <div class="block-primary">block-primary</div>
    `,code10:`
    <div class="bg-primary dark:bg-primary-dark">txt-primary</div>
    `,code11:`
    <div class="sm:background sm:dark:background-dark primary">primary mobile only</div>
    `,code12:`
    <div class="bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-dark
		sm:bg-background sm:text-foreground sm:dark:bg-background-dark sm:dark:text-foreground-dark">
      primary mobile only</div>
    `,user:U}}}),r=o=>(F("data-v-2c828e5a"),o=o(),C(),o),ee=r(()=>e("div",{class:"mb-8 text-2xl"},"Colors",-1)),oe=r(()=>e("div",null,"The Snowind default palette is customizable in the Tailwind configuration file",-1)),se={class:"grid grid-flow-col gap-8 mt-5 auto-cols-max"},te={class:"inline-block"},re=r(()=>e("div",{class:"color-block bg-primary dark:bg-primary-dark text-primary-r dark:text-primary-r-dark"},"Text",-1)),ae={class:"mt-2 text-center"},ce=s(" Primary "),ie={key:0,class:"text-center"},le={class:"inline-block"},de=r(()=>e("div",{class:"color-block bg-secondary dark:bg-secondary-dark text-secondary-r dark:text-secondary-r-dark"},"Text",-1)),ne=r(()=>e("div",{class:"mt-2 text-center"},"Secondary",-1)),he={key:0,class:"text-center"},_e={class:"inline-block"},me=r(()=>e("div",{class:"color-block bg-neutral dark:bg-neutral-dark text-neutral-r dark:text-neutral-r-dark"},"Text",-1)),ke=r(()=>e("div",{class:"mt-2 text-center"},"Neutral",-1)),ue={key:0,class:"text-center"},ve={class:"inline-block"},pe=r(()=>e("div",{class:"color-block bg-light dark:bg-light-dark text-light-r dark:text-light-r-dark"},"Text",-1)),ge=r(()=>e("div",{class:"mt-2 text-center"},"Light",-1)),be={key:0,class:"text-center"},ye={class:"inline-block"},xe=r(()=>e("div",{class:"color-block bg-success dark:bg-success-dark text-success-r dark:text-success-r-dark"},"Text",-1)),fe=r(()=>e("div",{class:"mt-2 text-center"},"Success",-1)),we={key:0,class:"text-center"},Te={class:"inline-block"},De=r(()=>e("div",{class:"color-block bg-warning dark:bg-warning-dark text-warning-r dark:text-warning-r-dark"},"Text",-1)),$e=r(()=>e("div",{class:"mt-2 text-center"},"Warning",-1)),Ae={key:0,class:"text-center"},Le={class:"inline-block"},Fe=r(()=>e("div",{class:"color-block bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark"},"Text",-1)),Ce=r(()=>e("div",{class:"mt-2 text-center"},"Danger",-1)),Ue={key:0,class:"text-center"},Me=r(()=>e("div",{class:"mt-12 mb-3 text-xl"},"Available classes",-1)),Ee=s("Tailwind utilities"),Se={class:"mt-5"},Be=s(" The Tailwind utilities will be available for each color: "),He=s("Semantic color as utilities"),je={class:"mt-5"},Ne=s(" The Snowind color classes can be used directly: "),ze=s("will do the same as: "),Ve=s("Text utilities"),Ie={class:"mt-5"},qe=s(" Semantic colors as text utilities: "),Re=s("will do the same as: "),Ge=s("Background utilities"),Ye={class:"mt-5"},Pe=s(" Semantic colors as background utilities: "),We=s("will do the same as: "),Je=s("Hover variants"),Ke={class:"mt-5 mb-3"},Oe=s(" To apply an hover variant for light and dark mode: "),Qe=s("Renders: "),Xe={class:"p-3 mt-3 light hover:success dark:hover:secondary-dark"},Ze=s(" Block "),eo={key:0,class:"inline-block"},oo=r(()=>e("div",{class:"mt-3"},[s(" Use a "),e("code",{class:"variable"},"-dark"),s(" suffix to apply the dark color with the hover variant ")],-1)),so=s("Responsive variants"),to={class:"mt-5 mb-3"},ro=s(" To apply a responsive variant for light and dark mode for the "),ao=r(()=>e("code",{class:"variable"},"sm",-1)),co=s(" breakpoint "),io=s("will display a primary block only for mobile, same as: "),lo=r(()=>e("div",{class:"mt-3"},[s(" Use a "),e("code",{class:"variable"},"-dark"),s(" suffix to apply the dark color with the hover variant ")],-1)),no=s("Configure the colors"),ho=r(()=>e("div",{class:"mt-3"},[s(" Use the "),e("i",null,"tailwind.config.js"),s(" file to customize the Snowind color palette and override the default colors: ")],-1)),_o=r(()=>e("div",{class:"mt-3"},[s(" In this example the "),e("code",{class:"variable"},"primary"),s(" color will be overrided. The "),e("code",{class:"variable"},"primary-r"),s(" class is the primary reversed color, example for text if primary is the background. The dark variants has to be set as well ")],-1)),mo=r(()=>e("div",{class:"mt-12 mb-8 text-xl"},"Default Snowind colors",-1));function ko(o,l,h,k,b,y){const d=u("anchor-title"),a=u("code-block"),_=u("storybook-button"),x=u("next-bar");return c(),i(L,null,[ee,oe,e("div",se,[e("div",te,[re,e("div",ae,[ce,o.user.isDarkMode.value===!0?(c(),i("div",ie,"dark")):n("",!0)])]),e("div",le,[de,ne,o.user.isDarkMode.value===!0?(c(),i("div",he,"dark")):n("",!0)]),e("div",_e,[me,ke,o.user.isDarkMode.value===!0?(c(),i("div",ue,"dark")):n("",!0)]),e("div",ve,[pe,ge,o.user.isDarkMode.value===!0?(c(),i("div",be,"dark")):n("",!0)]),e("div",ye,[xe,fe,o.user.isDarkMode.value===!0?(c(),i("div",we,"dark")):n("",!0)]),e("div",Te,[De,$e,o.user.isDarkMode.value===!0?(c(),i("div",Ae,"dark")):n("",!0)]),e("div",Le,[Fe,Ce,o.user.isDarkMode.value===!0?(c(),i("div",Ue,"dark")):n("",!0)])]),Me,t(d,{name:"twutils",class:"mt-5 text-lg"},{default:m(()=>[Ee]),_:1}),e("div",Se,[Be,t(a,{class:"mt-3",lang:"html",code:o.code3},null,8,["code"])]),t(d,{name:"swutils",class:"mt-8 text-lg"},{default:m(()=>[He]),_:1}),e("div",je,[Ne,t(a,{class:"mt-3",lang:"html",code:o.code4},null,8,["code"]),ze,t(a,{class:"mt-3",lang:"html",code:o.code5},null,8,["code"])]),t(_,{class:"mt-5",link:"story/colors--basic-utilities"}),t(d,{name:"textutils",class:"mt-8 text-lg"},{default:m(()=>[Ve]),_:1}),e("div",Ie,[qe,t(a,{class:"mt-3",lang:"html",code:o.code7},null,8,["code"]),Re,t(a,{class:"mt-3",lang:"html",code:o.code8},null,8,["code"])]),t(_,{class:"mt-5",link:"story/colors--text-utilities"}),t(d,{name:"blockutils",class:"mt-8 text-lg"},{default:m(()=>[Ge]),_:1}),e("div",Ye,[Pe,t(a,{class:"mt-3",lang:"html",code:o.code9},null,8,["code"]),We,t(a,{class:"mt-3",lang:"html",code:o.code10},null,8,["code"])]),t(_,{class:"mt-5",link:"story/colors--background-utilities"}),t(d,{name:"hovervariants",class:"mt-8 text-lg"},{default:m(()=>[Je]),_:1}),e("div",Ke,[Oe,t(a,{class:"mt-3",lang:"html",code:o.code6},null,8,["code"])]),Qe,e("div",Xe,[Ze,o.user.isDarkMode.value===!0?(c(),i("div",eo,"in dark mode")):n("",!0)]),oo,t(_,{class:"mt-5",link:"story/colors--hover-variants"}),t(d,{name:"responsivevariants",class:"mt-8 text-lg"},{default:m(()=>[so]),_:1}),e("div",to,[ro,ao,co,t(a,{class:"mt-3",lang:"html",code:o.code11},null,8,["code"]),io,t(a,{class:"mt-3",lang:"html",code:o.code12},null,8,["code"])]),lo,t(_,{class:"mt-5",link:"story/colors--responsive-variants"}),t(d,{name:"configure",class:"mt-12 mb-8 text-xl"},{default:m(()=>[no]),_:1}),ho,t(a,{class:"mt-3",lang:"typescript",code:o.code1},null,8,["code"]),_o,t(_,{class:"mt-8",link:"story/colors--basic-utilities"}),mo,t(a,{class:"mt-3",lang:"typescript",code:o.code2},null,8,["code"]),t(x,{class:"mt-24",prev:{link:"/install",text:"Install"},next:{link:"/storybook",text:"Storybook"}})],64)}var xo=g(Z,[["render",ko],["__scopeId","data-v-2c828e5a"]]);export{xo as default};
