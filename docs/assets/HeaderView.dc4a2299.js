import{u as y,_ as V,a as j}from"./index.18986873.js";import{S as A,_ as D}from"./header.es.482573fe.js";import{C as w}from"./CodeBlock.d68e9033.js";import{P as z}from"./PropsTable.3a7f4565.js";import{E as P}from"./EventsTable.e41a87ea.js";import{_ as N,N as S}from"./NextBar.40b4edc2.js";import{C as q}from"./CodeButton.5d388d15.js";import{o,c as r,a as t,d as M,q as u,b as l,n as m,f as v,u as p,e as b,w as _,l as H,j as R}from"./vendor.48cc1c7c.js";const E={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 576 512"},I=t("path",{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z",fill:"currentColor"},null,-1),Y=[I];function U(i,e){return o(),r("svg",E,Y)}var F={name:"fa-solid-desktop",render:U};const G={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 280 480"},J=t("path",{d:"M224 5q22 0 37.5 16T277 59v362q0 22-15.5 38T224 475H53q-22 0-37.5-16T0 421V59q0-22 15.5-38T53 5h171zm-85.5 448q13.5 0 23-9t9.5-22.5t-9.5-23t-23-9.5t-22.5 9.5t-9 23t9 22.5t22.5 9zm96.5-85V69H43v299h192z",fill:"currentColor"},null,-1),K=[J];function L(i,e){return o(),r("svg",G,K)}var O={name:"zmdi-smartphone-iphone",render:L};const Q=M({emits:["desktop","mobile"],setup(i,{emit:e}){const n=u(!1);function a(){n.value=!1,e("desktop")}function c(){n.value=!0,e("mobile")}return{isMobile:n,toMobile:c,toDesktop:a}}}),W={class:"flex flex-row justify-end cursor-pointer"},X=v("\xA0Mobile "),Z=v("\xA0Desktop ");function ee(i,e,n,a,c,x){const f=O,g=F;return o(),r("div",W,[t("button",{id:"btn-left",class:m(["btn",{active:i.isMobile}]),onClick:e[0]||(e[0]=h=>i.toMobile())},[l(f),X],2),t("button",{id:"btn-right",class:m(["btn",{active:!i.isMobile}]),onClick:e[1]||(e[1]=h=>i.toDesktop())},[l(g),Z],2)])}var te=N(Q,[["render",ee],["__scopeId","data-v-7a4b6a0e"]]);const se=t("div",{class:"mb-8 text-2xl"},"Responsive header with menu",-1),oe={key:0,class:"resizer"},le=["src"],ie=t("div",{class:"ml-5 text-lg"},"Branding",-1),ne=t("div",{class:"ml-5 text-lg"},"Mobile branding",-1),ae={class:"flex flex-row items-center justify-end h-full space-x-1"},de=v(" Template: "),re=v("Script: "),ce=H('<div class="mt-12 mb-8 text-xl">Slots</div><div class="mt-3">Template slots are available for the mobile layout and the desktop layout.</div><div class="mt-3"> Available template slots for the desktop layout: <div class="mt-3 bg-gray-100 rounded-lg shadow dark:bg-gray-700"><ul class="divide-y-2 divide-gray-100 dark:divide-gray-800"><li class="p-3"><div class="inline-block font-bold">#branding</div>:\xA0the site branding for desktop, usualy a logo </li><li class="p-3"><div class="inline-block font-bold">#menu</div>:\xA0the links to display at the top right of the header for desktop </li></ul></div></div><div class="mt-5"> Available template slots for the mobile layout: <div class="mt-3 bg-gray-100 rounded-lg shadow dark:bg-gray-700"><ul class="divide-y-2 divide-gray-100 dark:divide-gray-800"><li class="p-3"><div class="inline-block font-bold">#mobile-branding</div>:\xA0the site branding for mobile </li><li class="p-3"><div class="inline-block font-bold">#mobile-back</div>:\xA0the back arrow icon on mobile </li><li class="p-3"><div class="inline-block font-bold">#menuicon</div>:\xA0a slot to provide a custom menu icon. If not provided it will use by default a svg icon </li></ul></div></div><div class="mt-12 mb-8 text-xl">Install</div><div class="mt-3"><code lang="bash">npm install @snowind/header</code><br><code class="mt-3 text-neutral"># or</code><br><code class="mt-3">yarn add @snowind/header</code></div><div class="mt-12 mb-8 text-xl">Props</div>',7),ue=t("div",{class:"mt-12 mb-8 text-xl"},"Events",-1),ke=M({setup(i){const e=u(!1),n=u(!1),a=u(!0),c="/snowind/",x=[{prop:"breakpoint",description:"A Tailwind breakpoint from where to trigger the mobile layout",type:"string",values:'"sm" | "md" | "lg" | "xl" | "2xl"',default:"sm",required:!1}],f=[{name:"togglemenu",description:"Event emitted when the menu button is clicked",returnType:"null"}],g=`
      <div>
        <sw-header
          class="h-12 primary"
          @togglemenu="isMenuVisible = !isMenuVisible"
        >
          <template #branding>
            <div class="ml-5 text-lg">Branding</div>
          </template>
          <template #mobile-branding>
            <div class="ml-5 text-lg">Mobile branding</div>
          </template>
          <template #mobile-back>
            <i-ion-arrow-back-outline
              class="inline-flex ml-2 text-3xl"
              v-if="$router.currentRoute.value.path != ''"
            ></i-ion-arrow-back-outline>
          </template>
          <template #menu>
            <div class="flex flex-row items-center justify-end h-full space-x-1">
              <button class="border-none btn" @click="closeMenu()">Page 1</button>
              <button class="border-none btn" @click="closeMenu()">Page 2</button>
              <div class="px-5 text-lg cursor-pointer" @click="user.toggleDarkMode()">
                <i-fa-solid-moon v-if="user.isDarkMode.value == false"></i-fa-solid-moon>
                <i-fa-solid-sun v-else></i-fa-solid-sun>
              </div>
            </div>
          </template>
        </sw-header>
        <sw-mobile-menu
          :is-visible="isMenuVisible"
          class="light">
          <div class="flex flex-col p-3 space-y-5">
            <button class="border-none btn">Page 1</button>
            <button class="border-none btn">Page 2</button>
          </div>
        </sw-mobile-menu>
      </div>
    `,h=`
      import { SwHeader, SwMobileMenu } from "@snowind/header";
    
      const isMenuVisible = ref(false);

      function closeMenu() {
        isMenuVisible.value = false;
      }
    `;function k(){n.value=!1}return($,s)=>{const C=D,B=V,T=j;return o(),r("div",null,[se,l(te,{class:"mt-5",onDesktop:s[0]||(s[0]=d=>{e.value=!1,k()}),onMobile:s[1]||(s[1]=d=>e.value=!0)}),t("div",{class:m(["mt-3 h-96",{"w-96":e.value,"w-full":!e.value,"mx-auto":e.value}])},[e.value?(o(),r("div",oe,[t("iframe",{src:p(c)+"/header/mobile?partial=true",width:"380",height:"420",class:"resized"},null,8,le)])):(o(),b(p(A),{key:1,class:"h-12 primary",onTogglemenu:s[5]||(s[5]=d=>n.value=!n.value)},{branding:_(()=>[ie]),"mobile-branding":_(()=>[ne]),"mobile-back":_(()=>[$.$router.currentRoute.value.path!=""?(o(),b(C,{key:0,class:"inline-flex ml-2 text-3xl"})):R("",!0)]),menu:_(()=>[t("div",ae,[t("button",{class:"border-none btn",onClick:s[2]||(s[2]=d=>k())},"Page 1"),t("button",{class:"border-none btn",onClick:s[3]||(s[3]=d=>k())},"Page 2"),t("div",{class:"px-5 text-lg cursor-pointer",onClick:s[4]||(s[4]=d=>p(y).toggleDarkMode())},[p(y).isDarkMode.value==!1?(o(),b(B,{key:0})):(o(),b(T,{key:1}))])])]),_:1}))],2),t("div",{id:"collapse1",class:m([{"slide-y":!0,slideup:a.value===!0,slidedown:a.value===!1},"mt-4"])},[de,l(w,{code:g,class:"my-3"}),re,l(w,{code:h,lang:"typescript",class:"mt-3"})],2),l(q,{class:"mt-3",collapse:a.value,onToggle:s[6]||(s[6]=d=>a.value=!a.value)},null,8,["collapse"]),ce,l(z,{tableData:x}),ue,l(P,{tableData:f}),l(S,{class:"mt-24",prev:{link:"/switch",text:"Switch"},next:{link:"/toast",text:"Toast message"}})])}}});export{ke as default};
