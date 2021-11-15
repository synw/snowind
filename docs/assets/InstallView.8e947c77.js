import{C as m}from"./CodeBlock.ecfbc756.js";import{N as _}from"./NextBar.496b1c9d.js";import{_ as v}from"./index.7691d424.js";import{d as f,r as n,c as h,e as o,a as e,w as g,F as w,f as s,o as b}from"./vendor.ba3950ab.js";const x=f({components:{CodeBlock:m,NextBar:_},setup(){return{code1:`
      npm install -D @snowind/plugin
      # or
      yarn add -D @snowind/plugin
    `,code2:`
    const snowindPlugin = require('@snowind/plugin');

    module.exports = {
      // ...
      purge: [
        './public/**/*.html',
        './src/**/*.vue',
      ],
      darkMode: 'class',
      plugins: [
        require('@tailwindcss/forms'),
        snowindPlugin
      ],
    };
    `,code3:`
    yarn create @vitejs/app
    `,code4:`
    cd myproject
    yarn add -D tailwindcss autoprefixer sass postcss tslib @tailwindcss/forms @snowind/plugin
    `,code5:`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    `,code6:`
    import { createApp } from 'vue';
    import App from './App.vue';
    import './assets/index.css';

    createApp(App).mount('#app');
    `,code7:`
    module.exports = {
      purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      darkMode: 'class',
      jit: true,
      plugins: [
        require('@tailwindcss/forms'),
        require('@snowind/plugin')
      ],
    }
    `,code8:`
    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
    `,code9:`
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import typescript2 from "rollup-plugin-typescript2"
    const path = require('path')

    export default defineConfig({
      plugins: [
        typescript2({
          check: false,
          tsconfig: path.resolve(__dirname, 'tsconfig.json'),
          clean: true
        }),
        vue(),
      ],
      resolve: {
        alias: [
          { find: '@/', replacement: '/src/' }
        ]
      }
    })
    `,code10:`
    yarn dev
    `}}}),j=e("div",{class:"mb-8 text-2xl"},"Install",-1),C=e("div",{class:"my-8 text-xl"},"Enable the plugin",-1),k=e("div",null,[s(" Enable the Snowind plugin in "),e("i",null,"tailwind.config.js"),s(": ")],-1),y=e("div",{class:"mt-8"},"All the css is available. The components must be installed independently",-1),A=e("a",{name:"newproject"},null,-1),B=e("div",{class:"mt-12 text-xl"},"Create a new Snowind project",-1),T=e("div",{class:"mt-8"}," This guide show how to create a Snowind project using Yarn, Vite and Typescript. Create the base Vue project: ",-1),N=e("div",{class:"mt-3"},[s(" Select the "),e("code",{class:"variable"},"vue"),s(" and "),e("code",{class:"variable"},"vue-ts"),s(" options ")],-1),V=e("div",{class:"mt-8 text-lg"},"1. Install the base dependencies",-1),q=e("div",{class:"mt-8 text-lg"},"2. Configure Tailwind",-1),I=e("div",{class:"mt-8"},[s(" Create a "),e("code",{class:"variable"},"src/assets/index.css"),s(" file: ")],-1),S=e("div",{class:"mt-8"},[s(" Import this file in "),e("code",{class:"variable"},"src/main.ts"),s(": ")],-1),$=e("div",{class:"mt-8"},[s(" Create a "),e("code",{class:"variable"},"tailwind.config.js"),s(" file: ")],-1),D=e("div",{class:"mt-8"},[s(" Create a "),e("code",{class:"variable"},"postcss.config.js"),s(" file: ")],-1),E=e("div",{class:"mt-8"},[s(" The "),e("code",{class:"variable"},"vite.config.ts"),s(" file: ")],-1),F=e("div",{class:"mt-8 text-lg"},"3. Run",-1),M={class:"mt-8"},P=s(" To "),R=s("configure the colors"),Y=s("\xA0see next section ");function z(t,a,d,r,p,u){const c=n("code-block"),i=n("router-link"),l=n("next-bar");return b(),h(w,null,[j,o(c,{code:t.code1,class:"mt-8"},null,8,["code"]),C,k,o(c,{code:t.code2,lang:"typescript",class:"mt-8"},null,8,["code"]),y,A,B,T,o(c,{code:t.code3,class:"mt-8"},null,8,["code"]),N,V,o(c,{code:t.code4,class:"mt-8"},null,8,["code"]),q,I,o(c,{code:t.code5,class:"mt-8"},null,8,["code"]),S,o(c,{code:t.code6,lang:"typescript",class:"mt-8"},null,8,["code"]),$,o(c,{code:t.code7,lang:"javascript",class:"mt-8"},null,8,["code"]),D,o(c,{code:t.code8,lang:"javascript",class:"mt-8"},null,8,["code"]),E,o(c,{code:t.code9,lang:"javascript",class:"mt-8"},null,8,["code"]),F,o(c,{code:t.code10,class:"mt-8"},null,8,["code"]),e("div",M,[P,o(i,{to:"/colors",class:"underline"},{default:g(()=>[R]),_:1}),Y]),o(l,{class:"mt-24",next:{link:"/colors",text:"Colors"},prev:{link:"/",text:"Introduction"}})],64)}var O=v(x,[["render",z]]);export{O as default};
