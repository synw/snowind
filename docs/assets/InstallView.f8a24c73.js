import{C as o}from"./CodeBlock.d68e9033.js";import{N as _}from"./NextBar.40b4edc2.js";import{d as h,r as f,o as x,c as g,b as t,a as s,w,F as j,f as e,l as b}from"./vendor.48cc1c7c.js";const y=s("div",{class:"mb-8 text-2xl"},"Install",-1),C=s("div",{class:"my-8 text-xl"},"Enable the plugin",-1),k=s("div",null,[e(" Enable the Snowind plugin in "),s("i",null,"tailwind.config.js"),e(": ")],-1),q=b('<div class="mt-8">All the css is available. The Vue components must be installed independently</div><div class="mt-12 text-xl">Template</div><div class="mt-5"> The <a href="https://github.com/synw/snowind-template">Snowind template</a> repository can be used as a starter template </div><a name="newproject"></a><div class="mt-12 text-xl">Create a new Snowind project</div><div class="mt-8"> This guide show how to create a Snowind project using Yarn, Vite and Typescript. Create the base Vue project: </div>',6),T=s("div",{class:"mt-3"},[e(" Select the "),s("code",{class:"variable"},"vue"),e(" and "),s("code",{class:"variable"},"vue-ts"),e(" options ")],-1),A=s("div",{class:"mt-8 text-lg"},"1. Install the base dependencies",-1),B=s("div",{class:"mt-8 text-lg"},"2. Configure Tailwind",-1),N=s("div",{class:"mt-8"},[e(" Create a "),s("code",{class:"variable"},"src/assets/index.css"),e(" file: ")],-1),V=s("div",{class:"mt-8"},[e(" Import this file in "),s("code",{class:"variable"},"src/main.ts"),e(": ")],-1),S=s("div",{class:"mt-8"},[e(" Create a "),s("code",{class:"variable"},"tailwind.config.js"),e(" file: ")],-1),I=s("div",{class:"mt-8"},[e(" Create a "),s("code",{class:"variable"},"postcss.config.js"),e(" file: ")],-1),D=s("div",{class:"mt-8"},[e(" The "),s("code",{class:"variable"},"vite.config.ts"),e(" file: ")],-1),E=s("div",{class:"mt-8 text-lg"},"3. Run",-1),F={class:"mt-8"},M=e(" To "),R=e("configure the colors"),Y=e("\xA0see next section "),O=h({setup(z){const i=`
      npm install -D @snowind/plugin
      # or
      yarn add -D @snowind/plugin
    `,c=`
    module.exports = {
      // ...
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './node_modules/@snowind/**/*.{vue,js,ts}',
      ],
      darkMode: 'class',
      plugins: [
        require('@tailwindcss/forms'),
        require('@snowind/plugin'),
        require('tailwindcss-semantic-colors'),
      ],
    };
    `,n=`
    yarn create @vitejs/app
    `,a=`
    cd myproject
    yarn add -D tailwindcss autoprefixer sass postcss tslib @tailwindcss/forms @snowind/plugin
    `,l=`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    `,d=`
    import { createApp } from 'vue';
    import App from './App.vue';
    import './assets/index.css';

    createApp(App).mount('#app');
    `,r=`
    module.exports = {
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
        './node_modules/@snowind/**/*.{vue,js,ts}',
      ],
      darkMode: 'class',
      plugins: [
        require('@tailwindcss/forms'),
        require('@snowind/plugin'),
        require('tailwindcss-semantic-colors'),
      ],
    }
    `,p=`
    module.exports = {
      plugins: [
        require("postcss-import"),
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }
    `,m=`
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
    `,u=`
    yarn dev
    `;return(G,H)=>{const v=f("router-link");return x(),g(j,null,[y,t(o,{code:i,class:"mt-8"}),C,k,t(o,{code:c,lang:"typescript",class:"mt-8"}),q,t(o,{code:n,class:"mt-8"}),T,A,t(o,{code:a,class:"mt-8"}),B,N,t(o,{code:l,class:"mt-8"}),V,t(o,{code:d,lang:"typescript",class:"mt-8"}),S,t(o,{code:r,lang:"javascript",class:"mt-8"}),I,t(o,{code:p,lang:"javascript",class:"mt-8"}),D,t(o,{code:m,lang:"javascript",class:"mt-8"}),E,t(o,{code:u,class:"mt-8"}),s("div",F,[M,t(v,{to:"/colors",class:"underline"},{default:w(()=>[R]),_:1}),Y]),t(_,{class:"mt-24",next:{link:"/colors",text:"Colors"},prev:{link:"/",text:"Introduction"}})],64)}}});export{O as default};
