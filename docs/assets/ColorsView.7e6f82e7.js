import{C as u}from"./CodeBlock.8e63f17f.js";import{N as g}from"./NextBar.2221aae1.js";import{_ as b,u as p}from"./index.9c82c8e6.js";import{d as y,r as i,c as r,a as e,j as a,e as d,F as x,p as w,k as T,f as t,o as c}from"./vendor.ba3950ab.js";const f=y({components:{CodeBlock:u,NextBar:g},setup(){return{code1:`
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
        dark: colors.gray[700],
      },
      'primary-r': {
        DEFAULT: colors.white,
        dark: colors.white,
      },
      'secondary': {
        DEFAULT: colors.cyan[500],
        dark: colors.gray[800],
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
        DEFAULT: colors.warmGray[200],
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
    `,user:p}}}),o=s=>(w("data-v-9b6c416c"),s=s(),T(),s),D=o(()=>e("div",{class:"mb-8 text-2xl"},"Colors",-1)),L=o(()=>e("div",null,"The Snowind default palette is customizable in the Tailwind configuration file",-1)),F={class:"grid grid-flow-col gap-8 mt-5 auto-cols-max"},U={class:"inline-block"},A=o(()=>e("div",{class:"color-block bg-primary dark:bg-primary-dark text-primary-r dark:text-primary-r-dark"},"Text",-1)),E={class:"mt-2 text-center"},S=t(" Primary "),B={key:0,class:"text-center"},C={class:"inline-block"},M=o(()=>e("div",{class:"color-block bg-secondary dark:bg-secondary-dark text-secondary-r dark:text-secondary-r-dark"},"Text",-1)),N=o(()=>e("div",{class:"mt-2 text-center"},"Secondary",-1)),j={key:0,class:"text-center"},I={class:"inline-block"},V=o(()=>e("div",{class:"color-block bg-neutral dark:bg-neutral-dark text-neutral-r dark:text-neutral-r-dark"},"Text",-1)),$=o(()=>e("div",{class:"mt-2 text-center"},"Neutral",-1)),G={key:0,class:"text-center"},q={class:"inline-block"},z=o(()=>e("div",{class:"color-block bg-light dark:bg-light-dark text-light-r dark:text-light-r-dark"},"Text",-1)),H=o(()=>e("div",{class:"mt-2 text-center"},"Light",-1)),P={key:0,class:"text-center"},R={class:"inline-block"},W=o(()=>e("div",{class:"color-block bg-success dark:bg-success-dark text-success-r dark:text-success-r-dark"},"Text",-1)),J=o(()=>e("div",{class:"mt-2 text-center"},"Success",-1)),K={key:0,class:"text-center"},O={class:"inline-block"},Q=o(()=>e("div",{class:"color-block bg-warning dark:bg-warning-dark text-warning-r dark:text-warning-r-dark"},"Text",-1)),X=o(()=>e("div",{class:"mt-2 text-center"},"Warning",-1)),Y={key:0,class:"text-center"},Z={class:"inline-block"},ee=o(()=>e("div",{class:"color-block bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark"},"Text",-1)),oe=o(()=>e("div",{class:"mt-2 text-center"},"Danger",-1)),se={key:0,class:"text-center"},te=o(()=>e("div",{class:"mt-12 mb-3 text-xl"},"Available classes",-1)),re=o(()=>e("div",{class:"mt-5 text-lg"},"Tailwind utilities",-1)),ce={class:"mt-5"},ae=t(" The Tailwind utilities will be available for each color: "),de=o(()=>e("div",{class:"mt-5 text-lg"},"Semantic color as utilities",-1)),le={class:"mt-5"},ie=t(" The Snowind color classes can be used directly: "),ne=t("will do the same as: "),he=o(()=>e("div",{class:"mt-5 text-lg"},"Hover variants",-1)),_e={class:"mt-5 mb-3"},ke=t(" To apply an hover variant for light and dark mode: "),ve=t("Renders: "),me={class:"p-3 mt-3 light hover:success dark:hover:secondary-dark"},ue=t(" Block "),ge={key:0,class:"inline-block"},be=o(()=>e("div",{class:"mt-3"},[t(" Use a "),e("code",{class:"variable"},"-dark"),t(" suffix to apply the dark color with the hover variant ")],-1)),pe=o(()=>e("div",{class:"mt-12 mb-8 text-xl"},"Configure the colors",-1)),ye=o(()=>e("div",{class:"mt-3"},[t(" Use the "),e("i",null,"tailwind.config.js"),t(" file to customize the Snowind color palette and override the default colors: ")],-1)),xe=o(()=>e("div",{class:"mt-3"},[t(" In this example the "),e("code",{class:"variable"},"primary"),t(" color will be overrided. The "),e("code",{class:"variable"},"primary-r"),t(" class is the primary reversed color, example for text if primary is the background. The dark variants has to be set as well ")],-1)),we=o(()=>e("div",{class:"mt-12 mb-8 text-xl"},"Default Snowind colors",-1));function Te(s,n,h,_,k,v){const l=i("code-block"),m=i("next-bar");return c(),r(x,null,[D,L,e("div",F,[e("div",U,[A,e("div",E,[S,s.user.isDarkMode.value===!0?(c(),r("div",B,"dark")):a("",!0)])]),e("div",C,[M,N,s.user.isDarkMode.value===!0?(c(),r("div",j,"dark")):a("",!0)]),e("div",I,[V,$,s.user.isDarkMode.value===!0?(c(),r("div",G,"dark")):a("",!0)]),e("div",q,[z,H,s.user.isDarkMode.value===!0?(c(),r("div",P,"dark")):a("",!0)]),e("div",R,[W,J,s.user.isDarkMode.value===!0?(c(),r("div",K,"dark")):a("",!0)]),e("div",O,[Q,X,s.user.isDarkMode.value===!0?(c(),r("div",Y,"dark")):a("",!0)]),e("div",Z,[ee,oe,s.user.isDarkMode.value===!0?(c(),r("div",se,"dark")):a("",!0)])]),te,re,e("div",ce,[ae,d(l,{class:"mt-3",lang:"html",code:s.code3},null,8,["code"])]),de,e("div",le,[ie,d(l,{class:"mt-3",lang:"html",code:s.code4},null,8,["code"]),ne,d(l,{class:"mt-3",lang:"html",code:s.code5},null,8,["code"])]),he,e("div",_e,[ke,d(l,{class:"mt-3",lang:"html",code:s.code6},null,8,["code"])]),ve,e("div",me,[ue,s.user.isDarkMode.value===!0?(c(),r("div",ge,"in dark mode")):a("",!0)]),be,pe,ye,d(l,{class:"mt-3",lang:"typescript",code:s.code1},null,8,["code"]),xe,we,d(l,{class:"mt-3",lang:"typescript",code:s.code2},null,8,["code"]),d(m,{class:"mt-24",prev:{link:"/install",text:"Install"},next:{link:"/storybook",text:"Storybook"}})],64)}var Ue=b(f,[["render",Te],["__scopeId","data-v-9b6c416c"]]);export{Ue as default};
