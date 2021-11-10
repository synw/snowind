import{C as _}from"./CodeBlock.dcc9d3c4.js";import{N as h}from"./NextBar.395fabf9.js";import{_ as u,u as m}from"./index.30def6f8.js";import{d as g,r as i,c as s,a as e,j as c,e as d,F as v,p as x,k as p,f as a,o as t}from"./vendor.36fa6795.js";const b=g({components:{CodeBlock:_,NextBar:h},setup(){return{code1:`
    theme: {
      extend: {
        colors: {
          'primary': {
            DEFAULT: "#somecolor",
            dark: "#somecolor",
          },
          'primary-r': {
            DEFAULT: "#somecolor",
            dark: "#somecolor",
          },
        }
      },
    },
    `,code2:`
    const colors = require('tailwindcss/colors');

    colors: {
      'primary': {
        DEFAULT: colors.cyan[700],
        dark: colors.cyan[700],
      },
      'primary-r': {
        DEFAULT: colors.white,
        dark: colors.white
      },
      'secondary': {
        DEFAULT: colors.cyan[500],
        dark: colors.cyan[500],
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
    `,user:m}}}),o=r=>(x("data-v-0c4c0f60"),r=r(),p(),r),y=o(()=>e("div",{class:"mb-8 text-2xl"},"Colors",-1)),w=o(()=>e("div",null,"The Snowind default palette is customizable in the Tailwind configuration file",-1)),f={class:"grid grid-flow-col gap-8 mt-5 auto-cols-max"},T={class:"inline-block"},D=o(()=>e("div",{class:"color-block bg-primary dark:bg-primary-dark text-primary-r dark:text-primary-r-dark"},"Text",-1)),F={class:"mt-2 text-center"},E=a(" Primary "),L={key:0,class:"text-center"},U={class:"inline-block"},A=o(()=>e("div",{class:"color-block bg-secondary dark:bg-secondary-dark text-secondary-r dark:text-secondary-r-dark"},"Text",-1)),C=o(()=>e("div",{class:"mt-2 text-center"},"Secondary",-1)),S={key:0,class:"text-center"},N={class:"inline-block"},B=o(()=>e("div",{class:"color-block bg-neutral dark:bg-neutral-dark text-neutral-r dark:text-neutral-r-dark"},"Text",-1)),M=o(()=>e("div",{class:"mt-2 text-center"},"Neutral",-1)),j={key:0,class:"text-center"},I={class:"inline-block"},V=o(()=>e("div",{class:"color-block bg-light dark:bg-light-dark text-light-r dark:text-light-r-dark"},"Text",-1)),$=o(()=>e("div",{class:"mt-2 text-center"},"Light",-1)),G={key:0,class:"text-center"},z={class:"inline-block"},q=o(()=>e("div",{class:"color-block bg-success dark:bg-success-dark text-success-r dark:text-success-r-dark"},"Text",-1)),P=o(()=>e("div",{class:"mt-2 text-center"},"Success",-1)),W={key:0,class:"text-center"},H={class:"inline-block"},J=o(()=>e("div",{class:"color-block bg-warning dark:bg-warning-dark text-warning-r dark:text-warning-r-dark"},"Text",-1)),K=o(()=>e("div",{class:"mt-2 text-center"},"Warning",-1)),O={key:0,class:"text-center"},Q={class:"inline-block"},R=o(()=>e("div",{class:"color-block bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark"},"Text",-1)),X=o(()=>e("div",{class:"mt-2 text-center"},"Danger",-1)),Y={key:0,class:"text-center"},Z=o(()=>e("div",{class:"mt-12 mb-8 text-xl"},"Configure the colors",-1)),ee=o(()=>e("div",{class:"mt-3"},[a(" Use the "),e("i",null,"tailwind.config.js"),a(" file to customize the Snowind color palette and override the default colors: ")],-1)),oe=o(()=>e("div",{class:"mt-3"},[a(" In this example the "),e("code",null,"primary"),a(" color will be overrided. The "),e("code",null,"primary-r"),a(" class is the primary reversed color, example for text if primary is the background. The dark variants has to be set as well ")],-1)),re=o(()=>e("div",{class:"mt-12 mb-8 text-xl"},"Default Snowind colors",-1));function se(r,n,te,ce,ae,de){const l=i("code-block"),k=i("next-bar");return t(),s(v,null,[y,w,e("div",f,[e("div",T,[D,e("div",F,[E,r.user.isDarkMode.value===!0?(t(),s("div",L,"dark")):c("",!0)])]),e("div",U,[A,C,r.user.isDarkMode.value===!0?(t(),s("div",S,"dark")):c("",!0)]),e("div",N,[B,M,r.user.isDarkMode.value===!0?(t(),s("div",j,"dark")):c("",!0)]),e("div",I,[V,$,r.user.isDarkMode.value===!0?(t(),s("div",G,"dark")):c("",!0)]),e("div",z,[q,P,r.user.isDarkMode.value===!0?(t(),s("div",W,"dark")):c("",!0)]),e("div",H,[J,K,r.user.isDarkMode.value===!0?(t(),s("div",O,"dark")):c("",!0)]),e("div",Q,[R,X,r.user.isDarkMode.value===!0?(t(),s("div",Y,"dark")):c("",!0)])]),Z,ee,d(l,{class:"mt-3",lang:"typescript",code:r.code1},null,8,["code"]),oe,re,d(l,{class:"mt-3",lang:"typescript",code:r.code2},null,8,["code"]),d(k,{class:"mt-24",prev:{link:"/install",text:"Install"},next:{link:"/storybook",text:"Storybook"}})],64)}var _e=u(b,[["render",se],["__scopeId","data-v-0c4c0f60"]]);export{_e as default};
