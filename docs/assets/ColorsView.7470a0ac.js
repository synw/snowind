import{C as x}from"./CodeBlock.75e3803d.js";import{_ as p,N as f}from"./NextBar.999c92da.js";import{A as w}from"./AnchorTitle.f2673a4d.js";import{o as c,c as l,m as T,d as g,l as D,e as s,q as A,f as o,r as u,a as e,j as d,w as m,F,p as L,k as U}from"./vendor.6a66068f.js";import{u as E}from"./index.43eb35fe.js";const C={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36"},S=T('<path fill="#31373D" d="M32 21v1h-2v-1c0-.446-.09-.867-.225-1.268a6 6 0 0 0-1.776-11.733a5.972 5.972 0 0 0-4.131 1.656A7 7 0 0 0 10 11a6.987 6.987 0 0 0 3.409 6H13a4 4 0 0 0-4 4H8l-6-4H1v14h1l6-4h1v2a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4v-3h2v1h3v-6h-3z"></path><path fill="#66757F" d="M22 11a5 5 0 1 1-10.001-.001A5 5 0 0 1 22 11z"></path><circle fill="#CCD6DD" cx="17" cy="11" r="2"></circle><circle fill="#66757F" cx="27.999" cy="14" r="4"></circle><circle fill="#CCD6DD" cx="27.999" cy="14" r="2"></circle><path fill="#8899A6" d="M17 20h10v10H17z"></path><path fill="#31373D" d="M19 22h6v6h-6z"></path><circle fill="#8899A6" cx="12.999" cy="28" r="2"></circle>',8),M=[S];function B(t,n){return c(),l("svg",C,M)}var $={name:"twemoji-movie-camera",render:B},j=g({props:{link:{type:String,required:!0}},setup(t){const{link:n}=D(t),_="https://synw.github.io/snowind-stories/?path=/";function k(){window.open(_+n.value,"_blank").focus()}return{base:_,onClick:k}}});const N=o("Storybook");function V(t,n){const _=$;return c(),l("button",{class:"text-sm group btn border-light dark:border-light-dark hover:secondary dark:hover:secondary-dark txt-neutral",onClick:n[0]||(n[0]=k=>t.onClick())},[s(_,{class:"mb-1 mr-2 text-xl opacity-50 group-hover:opacity-100"}),A(t.$slots,"default",{},()=>[N])])}var z=p(j,[["render",V]]);const I=g({components:{AnchorTitle:w,StorybookButton:z,CodeBlock:x,NextBar:f},setup(){return{code1:`
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
        dark: colors.cyan[800],
      },
      'primary-r': {
        DEFAULT: colors.white,
        dark: colors.white,
      },
      'secondary': {
        DEFAULT: colors.cyan[500],
        dark: colors.slate[600],
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
        dark: colors.gray[300]
      },
      'neutral-r': {
        DEFAULT: colors.white,
        dark: colors.gray[800]
      },
      'light': {
        DEFAULT: colors.slate[200],
        dark: colors.neutral[700]
      },
      'light-r': {
        DEFAULT: colors.gray[800],
        dark: colors.white
      },
      'background': {
        DEFAULT: colors.white,
        dark: colors.neutral[900]
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
    `,user:E}}}),r=t=>(L("data-v-77f9e278"),t=t(),U(),t),H=r(()=>e("div",{class:"mb-8 text-2xl"},"Colors",-1)),R=r(()=>e("div",null,"The Snowind default palette is customizable in the Tailwind configuration file",-1)),q={class:"grid grid-flow-col gap-8 mt-5 auto-cols-max"},P={class:"inline-block"},W=r(()=>e("div",{class:"color-block bg-primary dark:bg-primary-dark text-primary-r dark:text-primary-r-dark"},"Text",-1)),Y={class:"mt-2 text-center"},G=o(" Primary "),J={key:0,class:"text-center"},K={class:"inline-block"},O=r(()=>e("div",{class:"color-block bg-secondary dark:bg-secondary-dark text-secondary-r dark:text-secondary-r-dark"},"Text",-1)),Q=r(()=>e("div",{class:"mt-2 text-center"},"Secondary",-1)),X={key:0,class:"text-center"},Z={class:"inline-block"},ee=r(()=>e("div",{class:"color-block bg-neutral dark:bg-neutral-dark text-neutral-r dark:text-neutral-r-dark"},"Text",-1)),te=r(()=>e("div",{class:"mt-2 text-center"},"Neutral",-1)),oe={key:0,class:"text-center"},se={class:"inline-block"},re=r(()=>e("div",{class:"color-block bg-light dark:bg-light-dark text-light-r dark:text-light-r-dark"},"Text",-1)),ae=r(()=>e("div",{class:"mt-2 text-center"},"Light",-1)),ce={key:0,class:"text-center"},le={class:"inline-block"},ie=r(()=>e("div",{class:"color-block bg-success dark:bg-success-dark text-success-r dark:text-success-r-dark"},"Text",-1)),de=r(()=>e("div",{class:"mt-2 text-center"},"Success",-1)),ne={key:0,class:"text-center"},he={class:"inline-block"},me=r(()=>e("div",{class:"color-block bg-warning dark:bg-warning-dark text-warning-r dark:text-warning-r-dark"},"Text",-1)),_e=r(()=>e("div",{class:"mt-2 text-center"},"Warning",-1)),ke={key:0,class:"text-center"},ue={class:"inline-block"},ve=r(()=>e("div",{class:"color-block bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark"},"Text",-1)),pe=r(()=>e("div",{class:"mt-2 text-center"},"Danger",-1)),ge={key:0,class:"text-center"},be=r(()=>e("div",{class:"mt-12 mb-3 text-xl"},"Available classes",-1)),ye=o("Tailwind utilities"),xe={class:"mt-5"},fe=o(" The Tailwind utilities will be available for each color: "),we=o("Semantic color as utilities"),Te={class:"mt-5"},De=o(" The Snowind color classes can be used directly: "),Ae=o("will do the same as: "),Fe=o("Text utilities"),Le={class:"mt-5"},Ue=o(" Semantic colors as text utilities: "),Ee=o("will do the same as: "),Ce=o("Background utilities"),Se={class:"mt-5"},Me=o(" Semantic colors as background utilities: "),Be=o("will do the same as: "),$e=o("Hover variants"),je={class:"mt-5 mb-3"},Ne=o(" To apply an hover variant for light and dark mode: "),Ve=o("Renders: "),ze={class:"p-3 mt-3 light hover:success dark:hover:secondary-dark"},Ie=o(" Block "),He={key:0,class:"inline-block"},Re=r(()=>e("div",{class:"mt-3"},[o(" Use a "),e("code",{class:"variable"},"-dark"),o(" suffix to apply the dark color with the hover variant ")],-1)),qe=o("Responsive variants"),Pe={class:"mt-5 mb-3"},We=o(" To apply a responsive variant for light and dark mode for the "),Ye=r(()=>e("code",{class:"variable"},"sm",-1)),Ge=o(" breakpoint "),Je=o("will display a primary block only for mobile, same as: "),Ke=r(()=>e("div",{class:"mt-3"},[o(" Use a "),e("code",{class:"variable"},"-dark"),o(" suffix to apply the dark color with the hover variant ")],-1)),Oe=o("Configure the colors"),Qe=r(()=>e("div",{class:"mt-3"},[o(" Use the "),e("i",null,"tailwind.config.js"),o(" file to customize the Snowind color palette and override the default colors: ")],-1)),Xe=r(()=>e("div",{class:"mt-3"},[o(" In this example the "),e("code",{class:"variable"},"primary"),o(" color will be overrided. The "),e("code",{class:"variable"},"primary-r"),o(" class is the primary reversed color, example for text if primary is the background. The dark variants has to be set as well ")],-1)),Ze=r(()=>e("div",{class:"mt-12 mb-8 text-xl"},"Default Snowind colors",-1));function et(t,n,_,k,b,y){const i=u("anchor-title"),a=u("code-block"),h=u("storybook-button"),v=u("next-bar");return c(),l(F,null,[H,R,e("div",q,[e("div",P,[W,e("div",Y,[G,t.user.isDarkMode.value===!0?(c(),l("div",J,"dark")):d("",!0)])]),e("div",K,[O,Q,t.user.isDarkMode.value===!0?(c(),l("div",X,"dark")):d("",!0)]),e("div",Z,[ee,te,t.user.isDarkMode.value===!0?(c(),l("div",oe,"dark")):d("",!0)]),e("div",se,[re,ae,t.user.isDarkMode.value===!0?(c(),l("div",ce,"dark")):d("",!0)]),e("div",le,[ie,de,t.user.isDarkMode.value===!0?(c(),l("div",ne,"dark")):d("",!0)]),e("div",he,[me,_e,t.user.isDarkMode.value===!0?(c(),l("div",ke,"dark")):d("",!0)]),e("div",ue,[ve,pe,t.user.isDarkMode.value===!0?(c(),l("div",ge,"dark")):d("",!0)])]),be,s(i,{name:"twutils",class:"mt-5 text-lg"},{default:m(()=>[ye]),_:1}),e("div",xe,[fe,s(a,{class:"mt-3",lang:"html",code:t.code3},null,8,["code"])]),s(i,{name:"swutils",class:"mt-8 text-lg"},{default:m(()=>[we]),_:1}),e("div",Te,[De,s(a,{class:"mt-3",lang:"html",code:t.code4},null,8,["code"]),Ae,s(a,{class:"mt-3",lang:"html",code:t.code5},null,8,["code"])]),s(h,{class:"mt-5",link:"story/colors--basic-utilities"}),s(i,{name:"textutils",class:"mt-8 text-lg"},{default:m(()=>[Fe]),_:1}),e("div",Le,[Ue,s(a,{class:"mt-3",lang:"html",code:t.code7},null,8,["code"]),Ee,s(a,{class:"mt-3",lang:"html",code:t.code8},null,8,["code"])]),s(h,{class:"mt-5",link:"story/colors--text-utilities"}),s(i,{name:"blockutils",class:"mt-8 text-lg"},{default:m(()=>[Ce]),_:1}),e("div",Se,[Me,s(a,{class:"mt-3",lang:"html",code:t.code9},null,8,["code"]),Be,s(a,{class:"mt-3",lang:"html",code:t.code10},null,8,["code"])]),s(h,{class:"mt-5",link:"story/colors--background-utilities"}),s(i,{name:"hovervariants",class:"mt-8 text-lg"},{default:m(()=>[$e]),_:1}),e("div",je,[Ne,s(a,{class:"mt-3",lang:"html",code:t.code6},null,8,["code"])]),Ve,e("div",ze,[Ie,t.user.isDarkMode.value===!0?(c(),l("div",He,"in dark mode")):d("",!0)]),Re,s(h,{class:"mt-5",link:"story/colors--hover-variants"}),s(i,{name:"responsivevariants",class:"mt-8 text-lg"},{default:m(()=>[qe]),_:1}),e("div",Pe,[We,Ye,Ge,s(a,{class:"mt-3",lang:"html",code:t.code11},null,8,["code"]),Je,s(a,{class:"mt-3",lang:"html",code:t.code12},null,8,["code"])]),Ke,s(h,{class:"mt-5",link:"story/colors--responsive-variants"}),s(i,{name:"configure",class:"mt-12 mb-8 text-xl"},{default:m(()=>[Oe]),_:1}),Qe,s(a,{class:"mt-3",lang:"typescript",code:t.code1},null,8,["code"]),Xe,s(h,{class:"mt-8",link:"story/colors--basic-utilities"}),Ze,s(a,{class:"mt-3",lang:"typescript",code:t.code2},null,8,["code"]),s(v,{class:"mt-24",prev:{link:"/install",text:"Install"},next:{link:"/ressources",text:"Ressources"}})],64)}var it=p(I,[["render",et],["__scopeId","data-v-77f9e278"]]);export{it as default};
