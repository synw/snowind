import{C as p}from"./CodeBlock.cfd1c453.js";import{_ as u,N as k}from"./NextBar.999c92da.js";import{A as x}from"./AnchorTitle.f2673a4d.js";import{o as c,c as r,m as b,d as m,l as f,e as n,q as y,f as s,r as h,a as t,j as i,w,F as C,p as D,k as M}from"./vendor.6a66068f.js";import{u as S}from"./index.1b57f456.js";const T={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36"},$=b('<path fill="#31373D" d="M32 21v1h-2v-1c0-.446-.09-.867-.225-1.268a6 6 0 0 0-1.776-11.733a5.972 5.972 0 0 0-4.131 1.656A7 7 0 0 0 10 11a6.987 6.987 0 0 0 3.409 6H13a4 4 0 0 0-4 4H8l-6-4H1v14h1l6-4h1v2a4 4 0 0 0 4 4h13a4 4 0 0 0 4-4v-3h2v1h3v-6h-3z"></path><path fill="#66757F" d="M22 11a5 5 0 1 1-10.001-.001A5 5 0 0 1 22 11z"></path><circle fill="#CCD6DD" cx="17" cy="11" r="2"></circle><circle fill="#66757F" cx="27.999" cy="14" r="4"></circle><circle fill="#CCD6DD" cx="27.999" cy="14" r="2"></circle><path fill="#8899A6" d="M17 20h10v10H17z"></path><path fill="#31373D" d="M19 22h6v6h-6z"></path><circle fill="#8899A6" cx="12.999" cy="28" r="2"></circle>',8),j=[$];function B(e,l){return c(),r("svg",T,j)}var A={name:"twemoji-movie-camera",render:B},N=m({props:{link:{type:String,required:!0}},setup(e){const{link:l}=f(e),a="https://synw.github.io/snowind-stories/?path=/";function d(){window.open(a+l.value,"_blank").focus()}return{base:a,onClick:d}}});const V=s("Storybook");function z(e,l){const a=A;return c(),r("button",{class:"text-sm group btn border-light dark:border-light-dark hover:secondary dark:hover:secondary-dark txt-neutral",onClick:l[0]||(l[0]=d=>e.onClick())},[n(a,{class:"mb-1 mr-2 text-xl opacity-50 group-hover:opacity-100"}),y(e.$slots,"default",{},()=>[V])])}var I=u(N,[["render",z]]);const q=m({components:{AnchorTitle:x,StorybookButton:I,CodeBlock:p,NextBar:k},setup(){return{code1:`
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
    `,code2:`
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
    `,user:S}}}),o=e=>(D("data-v-4952542c"),e=e(),M(),e),F=o(()=>t("div",{class:"mb-8 text-2xl"},"Colors",-1)),H=o(()=>t("div",null,[s(" The Snowind default palette is a set of semantic colors created with the "),t("a",{href:"https://github.com/synw/tailwindcss-semantic-colors"},"tailwindcss-semantic-colors plugin"),s(". They can be customized in the Tailwind configuration file ")],-1)),R={class:"grid grid-flow-col gap-8 mt-5 auto-cols-max"},L={class:"inline-block"},E=o(()=>t("div",{class:"color-block primary"},"Text",-1)),P={class:"mt-2 text-center"},U=s(" Primary "),W={key:0,class:"text-center"},Y={class:"inline-block"},G=o(()=>t("div",{class:"color-block secondary"},"Text",-1)),J=o(()=>t("div",{class:"mt-2 text-center"},"Secondary",-1)),K={key:0,class:"text-center"},O={class:"inline-block"},Q=o(()=>t("div",{class:"color-block light"},"Text",-1)),X=o(()=>t("div",{class:"mt-2 text-center"},"Light",-1)),Z={key:0,class:"text-center"},tt={class:"inline-block"},et=o(()=>t("div",{class:"color-block lighter"},"Text",-1)),ot=o(()=>t("div",{class:"mt-2 text-center"},"Lighter",-1)),st={key:0,class:"text-center"},ct={class:"inline-block"},rt=o(()=>t("div",{class:"color-block success"},"Text",-1)),lt=o(()=>t("div",{class:"mt-2 text-center"},"Success",-1)),it={key:0,class:"text-center"},at={class:"inline-block"},nt=o(()=>t("div",{class:"color-block warning"},"Text",-1)),dt=o(()=>t("div",{class:"mt-2 text-center"},"Warning",-1)),ht={key:0,class:"text-center"},_t={class:"inline-block"},ut=o(()=>t("div",{class:"color-block danger"},"Text",-1)),mt=o(()=>t("div",{class:"mt-2 text-center"},"Danger",-1)),vt={key:0,class:"text-center"},gt=o(()=>t("div",{class:"mt-8"},[s(" Check the "),t("a",{href:"https://github.com/synw/tailwindcss-semantic-colors#usage"},"semantic colors plugin doc"),s(" for examples of semantic color utilities usage ")],-1)),pt=s("Configure the colors"),kt=o(()=>t("div",{class:"mt-3"},[s(" Use the "),t("i",null,"tailwind.config.js"),s(" file to customize the Snowind color palette and override the default colors: ")],-1)),xt=o(()=>t("div",{class:"mt-3"},[s(" In this example the "),t("code",{class:"variable"},"primary"),s(" color will be overrided ")],-1)),bt=o(()=>t("div",{class:"mt-12 mb-8 text-xl"},"Default Snowind semantic colors",-1));function ft(e,l,a,d,yt,wt){const v=h("anchor-title"),_=h("code-block"),g=h("next-bar");return c(),r(C,null,[F,H,t("div",R,[t("div",L,[E,t("div",P,[U,e.user.isDarkMode.value===!0?(c(),r("div",W,"dark")):i("",!0)])]),t("div",Y,[G,J,e.user.isDarkMode.value===!0?(c(),r("div",K,"dark")):i("",!0)]),t("div",O,[Q,X,e.user.isDarkMode.value===!0?(c(),r("div",Z,"dark")):i("",!0)]),t("div",tt,[et,ot,e.user.isDarkMode.value===!0?(c(),r("div",st,"dark")):i("",!0)]),t("div",ct,[rt,lt,e.user.isDarkMode.value===!0?(c(),r("div",it,"dark")):i("",!0)]),t("div",at,[nt,dt,e.user.isDarkMode.value===!0?(c(),r("div",ht,"dark")):i("",!0)]),t("div",_t,[ut,mt,e.user.isDarkMode.value===!0?(c(),r("div",vt,"dark")):i("",!0)])]),gt,n(v,{name:"configure",class:"mt-12 mb-8 text-xl"},{default:w(()=>[pt]),_:1}),kt,n(_,{class:"mt-3",lang:"typescript",code:e.code1},null,8,["code"]),xt,bt,n(_,{class:"mt-3",lang:"typescript",code:e.code2},null,8,["code"]),n(g,{class:"mt-24",prev:{link:"/install",text:"Install"},next:{link:"/ressources",text:"Ressources"}})],64)}var $t=u(q,[["render",ft],["__scopeId","data-v-4952542c"]]);export{$t as default};
