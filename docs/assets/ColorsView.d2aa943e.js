import{C as x}from"./CodeBlock.c5949998.js";import{N as f}from"./NextBar.bfefa88f.js";import{A as w}from"./AnchorTitle.3ffecee6.js";import{o as c,c as i,m as T,d as p,l as D,e as s,q as A,f as t,r as u,a as e,j as d,w as m,F,p as L,k as U}from"./vendor.d513a3f4.js";import{_ as g,u as E}from"./index.fc971e03.js";const C={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36"},S=T('<path fill="#31373D" d="M32 21v1h-2v-1c0-.446-.09-.867-.225-1.268a6 6 0 0 0-1.776-11.733a5.972 5.972 0 0 0-4.131 1.656A7 7 0 0 0 10 11a6.987 6.987 0 0 0 3.409 6H13a4 4 0 0 0-4 4H8l-6-4H1v14h1l6-4h1v2a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4v-3h2v1h3v-6h-3z"></path><path fill="#66757F" d="M22 11a5 5 0 1 1-10.001-.001A5 5 0 0 1 22 11z"></path><circle fill="#CCD6DD" cx="17" cy="11" r="2"></circle><circle fill="#66757F" cx="27.999" cy="14" r="4"></circle><circle fill="#CCD6DD" cx="27.999" cy="14" r="2"></circle><path fill="#8899A6" d="M17 20h10v10H17z"></path><path fill="#31373D" d="M19 22h6v6h-6z"></path><circle fill="#8899A6" cx="12.999" cy="28" r="2"></circle>',8),M=[S];function B(o,n){return c(),i("svg",C,M)}var $={name:"twemoji-movie-camera",render:B},j=p({props:{link:{type:String,required:!0}},setup(o){const{link:n}=D(o),_="https://synw.github.io/snowind-stories/?path=/";function k(){window.open(_+n.value,"_blank").focus()}return{base:_,onClick:k}}});const N=t("Storybook");function V(o,n){const _=$;return c(),i("button",{class:"text-sm group btn border-light dark:border-light-dark hover:secondary dark:hover:secondary-dark txt-neutral",onClick:n[0]||(n[0]=k=>o.onClick())},[s(_,{class:"mb-1 mr-2 text-xl opacity-50 group-hover:opacity-100"}),A(o.$slots,"default",{},()=>[N])])}var z=g(j,[["render",V]]);const I=p({components:{AnchorTitle:w,StorybookButton:z,CodeBlock:x,NextBar:f},setup(){return{code1:`
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
    `,user:E}}}),r=o=>(L("data-v-2c828e5a"),o=o(),U(),o),H=r(()=>e("div",{class:"mb-8 text-2xl"},"Colors",-1)),q=r(()=>e("div",null,"The Snowind default palette is customizable in the Tailwind configuration file",-1)),R={class:"grid grid-flow-col gap-8 mt-5 auto-cols-max"},G={class:"inline-block"},P=r(()=>e("div",{class:"color-block bg-primary dark:bg-primary-dark text-primary-r dark:text-primary-r-dark"},"Text",-1)),W={class:"mt-2 text-center"},Y=t(" Primary "),J={key:0,class:"text-center"},K={class:"inline-block"},O=r(()=>e("div",{class:"color-block bg-secondary dark:bg-secondary-dark text-secondary-r dark:text-secondary-r-dark"},"Text",-1)),Q=r(()=>e("div",{class:"mt-2 text-center"},"Secondary",-1)),X={key:0,class:"text-center"},Z={class:"inline-block"},ee=r(()=>e("div",{class:"color-block bg-neutral dark:bg-neutral-dark text-neutral-r dark:text-neutral-r-dark"},"Text",-1)),oe=r(()=>e("div",{class:"mt-2 text-center"},"Neutral",-1)),te={key:0,class:"text-center"},se={class:"inline-block"},re=r(()=>e("div",{class:"color-block bg-light dark:bg-light-dark text-light-r dark:text-light-r-dark"},"Text",-1)),ae=r(()=>e("div",{class:"mt-2 text-center"},"Light",-1)),ce={key:0,class:"text-center"},ie={class:"inline-block"},le=r(()=>e("div",{class:"color-block bg-success dark:bg-success-dark text-success-r dark:text-success-r-dark"},"Text",-1)),de=r(()=>e("div",{class:"mt-2 text-center"},"Success",-1)),ne={key:0,class:"text-center"},he={class:"inline-block"},me=r(()=>e("div",{class:"color-block bg-warning dark:bg-warning-dark text-warning-r dark:text-warning-r-dark"},"Text",-1)),_e=r(()=>e("div",{class:"mt-2 text-center"},"Warning",-1)),ke={key:0,class:"text-center"},ue={class:"inline-block"},ve=r(()=>e("div",{class:"color-block bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark"},"Text",-1)),pe=r(()=>e("div",{class:"mt-2 text-center"},"Danger",-1)),ge={key:0,class:"text-center"},ye=r(()=>e("div",{class:"mt-12 mb-3 text-xl"},"Available classes",-1)),be=t("Tailwind utilities"),xe={class:"mt-5"},fe=t(" The Tailwind utilities will be available for each color: "),we=t("Semantic color as utilities"),Te={class:"mt-5"},De=t(" The Snowind color classes can be used directly: "),Ae=t("will do the same as: "),Fe=t("Text utilities"),Le={class:"mt-5"},Ue=t(" Semantic colors as text utilities: "),Ee=t("will do the same as: "),Ce=t("Background utilities"),Se={class:"mt-5"},Me=t(" Semantic colors as background utilities: "),Be=t("will do the same as: "),$e=t("Hover variants"),je={class:"mt-5 mb-3"},Ne=t(" To apply an hover variant for light and dark mode: "),Ve=t("Renders: "),ze={class:"p-3 mt-3 light hover:success dark:hover:secondary-dark"},Ie=t(" Block "),He={key:0,class:"inline-block"},qe=r(()=>e("div",{class:"mt-3"},[t(" Use a "),e("code",{class:"variable"},"-dark"),t(" suffix to apply the dark color with the hover variant ")],-1)),Re=t("Responsive variants"),Ge={class:"mt-5 mb-3"},Pe=t(" To apply a responsive variant for light and dark mode for the "),We=r(()=>e("code",{class:"variable"},"sm",-1)),Ye=t(" breakpoint "),Je=t("will display a primary block only for mobile, same as: "),Ke=r(()=>e("div",{class:"mt-3"},[t(" Use a "),e("code",{class:"variable"},"-dark"),t(" suffix to apply the dark color with the hover variant ")],-1)),Oe=t("Configure the colors"),Qe=r(()=>e("div",{class:"mt-3"},[t(" Use the "),e("i",null,"tailwind.config.js"),t(" file to customize the Snowind color palette and override the default colors: ")],-1)),Xe=r(()=>e("div",{class:"mt-3"},[t(" In this example the "),e("code",{class:"variable"},"primary"),t(" color will be overrided. The "),e("code",{class:"variable"},"primary-r"),t(" class is the primary reversed color, example for text if primary is the background. The dark variants has to be set as well ")],-1)),Ze=r(()=>e("div",{class:"mt-12 mb-8 text-xl"},"Default Snowind colors",-1));function eo(o,n,_,k,y,b){const l=u("anchor-title"),a=u("code-block"),h=u("storybook-button"),v=u("next-bar");return c(),i(F,null,[H,q,e("div",R,[e("div",G,[P,e("div",W,[Y,o.user.isDarkMode.value===!0?(c(),i("div",J,"dark")):d("",!0)])]),e("div",K,[O,Q,o.user.isDarkMode.value===!0?(c(),i("div",X,"dark")):d("",!0)]),e("div",Z,[ee,oe,o.user.isDarkMode.value===!0?(c(),i("div",te,"dark")):d("",!0)]),e("div",se,[re,ae,o.user.isDarkMode.value===!0?(c(),i("div",ce,"dark")):d("",!0)]),e("div",ie,[le,de,o.user.isDarkMode.value===!0?(c(),i("div",ne,"dark")):d("",!0)]),e("div",he,[me,_e,o.user.isDarkMode.value===!0?(c(),i("div",ke,"dark")):d("",!0)]),e("div",ue,[ve,pe,o.user.isDarkMode.value===!0?(c(),i("div",ge,"dark")):d("",!0)])]),ye,s(l,{name:"twutils",class:"mt-5 text-lg"},{default:m(()=>[be]),_:1}),e("div",xe,[fe,s(a,{class:"mt-3",lang:"html",code:o.code3},null,8,["code"])]),s(l,{name:"swutils",class:"mt-8 text-lg"},{default:m(()=>[we]),_:1}),e("div",Te,[De,s(a,{class:"mt-3",lang:"html",code:o.code4},null,8,["code"]),Ae,s(a,{class:"mt-3",lang:"html",code:o.code5},null,8,["code"])]),s(h,{class:"mt-5",link:"story/colors--basic-utilities"}),s(l,{name:"textutils",class:"mt-8 text-lg"},{default:m(()=>[Fe]),_:1}),e("div",Le,[Ue,s(a,{class:"mt-3",lang:"html",code:o.code7},null,8,["code"]),Ee,s(a,{class:"mt-3",lang:"html",code:o.code8},null,8,["code"])]),s(h,{class:"mt-5",link:"story/colors--text-utilities"}),s(l,{name:"blockutils",class:"mt-8 text-lg"},{default:m(()=>[Ce]),_:1}),e("div",Se,[Me,s(a,{class:"mt-3",lang:"html",code:o.code9},null,8,["code"]),Be,s(a,{class:"mt-3",lang:"html",code:o.code10},null,8,["code"])]),s(h,{class:"mt-5",link:"story/colors--background-utilities"}),s(l,{name:"hovervariants",class:"mt-8 text-lg"},{default:m(()=>[$e]),_:1}),e("div",je,[Ne,s(a,{class:"mt-3",lang:"html",code:o.code6},null,8,["code"])]),Ve,e("div",ze,[Ie,o.user.isDarkMode.value===!0?(c(),i("div",He,"in dark mode")):d("",!0)]),qe,s(h,{class:"mt-5",link:"story/colors--hover-variants"}),s(l,{name:"responsivevariants",class:"mt-8 text-lg"},{default:m(()=>[Re]),_:1}),e("div",Ge,[Pe,We,Ye,s(a,{class:"mt-3",lang:"html",code:o.code11},null,8,["code"]),Je,s(a,{class:"mt-3",lang:"html",code:o.code12},null,8,["code"])]),Ke,s(h,{class:"mt-5",link:"story/colors--responsive-variants"}),s(l,{name:"configure",class:"mt-12 mb-8 text-xl"},{default:m(()=>[Oe]),_:1}),Qe,s(a,{class:"mt-3",lang:"typescript",code:o.code1},null,8,["code"]),Xe,s(h,{class:"mt-8",link:"story/colors--basic-utilities"}),Ze,s(a,{class:"mt-3",lang:"typescript",code:o.code2},null,8,["code"]),s(v,{class:"mt-24",prev:{link:"/install",text:"Install"},next:{link:"/storybook",text:"Storybook"}})],64)}var lo=g(I,[["render",eo],["__scopeId","data-v-2c828e5a"]]);export{lo as default};
