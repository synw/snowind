import{C as d}from"./CodeBlock.d68e9033.js";import{_ as u,N as g}from"./NextBar.40b4edc2.js";import{A as m}from"./AnchorTitle.7570407b.js";import{u as r}from"./index.18986873.js";import{d as x,o,c,a as t,u as l,j as i,b as n,w as k,F as v,p as b,k as p,f as s}from"./vendor.48cc1c7c.js";const e=a=>(b("data-v-3c81a26c"),a=a(),p(),a),y=e(()=>t("div",{class:"mb-8 text-2xl"},"Colors",-1)),w=e(()=>t("div",null,[s(" The Snowind default palette is a set of semantic colors created with the "),t("a",{href:"https://github.com/synw/tailwindcss-semantic-colors"},"tailwindcss-semantic-colors plugin"),s(". They can be customized in the Tailwind configuration file ")],-1)),f={class:"grid grid-flow-col gap-8 mt-5 auto-cols-max"},C={class:"inline-block"},T=e(()=>t("div",{class:"color-block primary"},"Text",-1)),D={class:"mt-2 text-center"},S=s(" Primary "),j={key:0,class:"text-center"},B={class:"inline-block"},M=e(()=>t("div",{class:"color-block secondary"},"Text",-1)),N=e(()=>t("div",{class:"mt-2 text-center"},"Secondary",-1)),I={key:0,class:"text-center"},V={class:"inline-block"},A=e(()=>t("div",{class:"color-block light"},"Text",-1)),q=e(()=>t("div",{class:"mt-2 text-center"},"Light",-1)),z={key:0,class:"text-center"},F={class:"inline-block"},L=e(()=>t("div",{class:"color-block lighter"},"Text",-1)),E=e(()=>t("div",{class:"mt-2 text-center"},"Lighter",-1)),P={key:0,class:"text-center"},R={class:"inline-block"},U=e(()=>t("div",{class:"color-block success"},"Text",-1)),W=e(()=>t("div",{class:"mt-2 text-center"},"Success",-1)),G={key:0,class:"text-center"},H={class:"inline-block"},J=e(()=>t("div",{class:"color-block warning"},"Text",-1)),K=e(()=>t("div",{class:"mt-2 text-center"},"Warning",-1)),O={key:0,class:"text-center"},Q={class:"inline-block"},X=e(()=>t("div",{class:"color-block danger"},"Text",-1)),Y=e(()=>t("div",{class:"mt-2 text-center"},"Danger",-1)),Z={key:0,class:"text-center"},$=e(()=>t("div",{class:"mt-8"},[s(" Check the "),t("a",{href:"https://github.com/synw/tailwindcss-semantic-colors#usage"},"semantic colors plugin doc"),s(" for examples of semantic color utilities usage ")],-1)),tt=s("Configure the colors"),et=e(()=>t("div",{class:"mt-3"},[s(" Use the "),t("i",null,"tailwind.config.js"),s(" file to customize the Snowind color palette and override the default colors: ")],-1)),st=e(()=>t("div",{class:"mt-3"},[s(" In this example the "),t("code",{class:"variable"},"primary"),s(" color will be overrided ")],-1)),ot=e(()=>t("div",{class:"mt-12 mb-8 text-xl"},"Default Snowind semantic colors",-1)),ct=x({setup(a){const _=`
    const colors = require('tailwindcss/colors');

    module.exports = {
      // ...
      theme: {
        extend: {
          semanticColors: {
            primary: {
              light: {
                bg: colors.cyan[800],
                txt: colors.white
              },
              dark: {
                bg: colors.cyan[900],
                txt: colors.neutral[100]
              }
            }
          }
        }
      }
    }
    `,h=`
    const colors = require('tailwindcss/colors');

    theme: {
        semanticColors: {
          primary: {
            light: {
              bg: colors.cyan[700],
              txt: colors.white
            },
            dark: {
              bg: colors.cyan[800],
              txt: colors.neutral[100]
            }
          },
          secondary: {
            light: {
              bg: colors.cyan[500],
              txt: colors.white
            },
            dark: {
              bg: colors.slate[600],
              txt: colors.neutral[100]
            }
          },
          success: {
            light: {
              bg: colors.green[600],
              txt: colors.white
            },
            dark: {
              bg: colors.green[600],
              txt: colors.neutral[100]
            }
          },
          warning: {
            light: {
              bg: colors.amber[500],
              txt: colors.white
            },
            dark: {
              bg: colors.amber[500],
              txt: colors.neutral[100]
            }
          },
          danger: {
            light: {
              bg: colors.red[500],
              txt: colors.white
            },
            dark: {
              bg: colors.red[400],
              txt: colors.neutral[100]
            }
          },
          light: {
            light: {
              bg: colors.gray[500],
              txt: colors.white
            },
            dark: {
              bg: colors.gray[300],
              txt: colors.gray[800]
            }
          },
          lighter: {
            light: {
              bg: colors.slate[200],
              txt: colors.gray[800]
            },
            dark: {
              bg: colors.neutral[700],
              txt: colors.white
            }
          },
          background: {
            light: {
              bg: colors.white,
              txt: colors.gray[800]
            },
            dark: {
              bg: "#272822",
              txt: colors.neutral[300]
            }
          },
        }
      }
    }
    `;return(rt,lt)=>(o(),c(v,null,[y,w,t("div",f,[t("div",C,[T,t("div",D,[S,l(r).isDarkMode.value===!0?(o(),c("div",j,"dark")):i("",!0)])]),t("div",B,[M,N,l(r).isDarkMode.value===!0?(o(),c("div",I,"dark")):i("",!0)]),t("div",V,[A,q,l(r).isDarkMode.value===!0?(o(),c("div",z,"dark")):i("",!0)]),t("div",F,[L,E,l(r).isDarkMode.value===!0?(o(),c("div",P,"dark")):i("",!0)]),t("div",R,[U,W,l(r).isDarkMode.value===!0?(o(),c("div",G,"dark")):i("",!0)]),t("div",H,[J,K,l(r).isDarkMode.value===!0?(o(),c("div",O,"dark")):i("",!0)]),t("div",Q,[X,Y,l(r).isDarkMode.value===!0?(o(),c("div",Z,"dark")):i("",!0)])]),$,n(m,{name:"configure",class:"mt-12 mb-8 text-xl"},{default:k(()=>[tt]),_:1}),et,n(d,{class:"mt-3",lang:"typescript",code:_}),st,ot,n(d,{class:"mt-3",lang:"typescript",code:h}),n(g,{class:"mt-24",prev:{link:"/install",text:"Install"},next:{link:"/ressources",text:"Ressources"}})],64))}});var ht=u(ct,[["__scopeId","data-v-3c81a26c"]]);export{ht as default};
