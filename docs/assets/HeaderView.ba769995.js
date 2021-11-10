import{o as l,c as d,a as s,d as k,l as T,b as z,s as m,n as r,q as g,e as i,f as b,r as c,w as h,m as S,v as $,j as H}from"./vendor.36fa6795.js";import{C as P}from"./CodeBlock.30bd7eb2.js";import{P as R}from"./PropsTable.35d41402.js";import{E as q}from"./EventsTable.de4087bc.js";import{N}from"./NextBar.1d2e5131.js";import{C as E}from"./CodeButton.febb167b.js";import{_ as w,u as Y}from"./index.2876ec33.js";const I={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},L=s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M244 400L100 256l144-144"},null,-1),F=s("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M120 256h292"},null,-1),G=[L,F];function J(e,o){return l(),d("svg",I,G)}var K={name:"ion-arrow-back-outline",render:J};const O={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},Q=s("path",{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792c7.068-8.708-.639-21.43-11.562-19.35c-124.203 23.654-238.262-71.576-238.262-196.954c0-72.222 38.662-138.635 101.498-174.394c9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256c0 141.309 114.511 256 256 256z",fill:"currentColor"},null,-1),U=[Q];function W(e,o){return l(),d("svg",O,U)}var X={name:"fa-solid-moon",render:W};const Z={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},ee=s("path",{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96s96-43.1 96-96s-43.1-96-96-96zm246.4 80.5l-94.7-47.3l33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5l-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4l-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3l-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5l47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7l100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4l94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0c-49.9-49.9-49.9-131.1 0-181c49.9-49.9 131.1-49.9 181 0c49.9 49.9 49.9 131.1 0 181z",fill:"currentColor"},null,-1),oe=[ee];function se(e,o){return l(),d("svg",Z,oe)}var te={name:"fa-solid-sun",render:se},M=(e,o)=>{for(const[t,n]of o)e[t]=n;return e};const ne=k({props:{breakpoint:{type:String,default:()=>"sm"}},emits:["togglemenu"],setup(e,{emit:o}){function t(){o("togglemenu")}function n(){history.length>0&&history.back()}return{onClick:t,back:n}}}),le={class:"flex flex-row items-center"},ie=s("svg",{class:"fill-current",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[s("g",null,[s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2z"})])],-1),ae=[ie];function re(e,o,t,n,a,v){return l(),d("div",le,[s("div",{class:r(["flex-none hidden",e.breakpoint+":block"])},[m(e.$slots,"branding")],2),s("div",{class:r(["inline-flex flex-row items-center h-full",e.breakpoint+":hidden"])},[s("div",{onClick:o[0]||(o[0]=u=>e.back())},[m(e.$slots,"mobile-back")]),m(e.$slots,"mobile-branding")],2),s("div",{class:r(["flex-grow hidden h-full",e.breakpoint+":block"])},[m(e.$slots,"menu")],2),s("div",{class:r(["flex items-center justify-end flex-grow h-full cursor-pointer",e.breakpoint+":hidden"])},[s("div",{class:"border-none btn",onClick:o[1]||(o[1]=u=>e.onClick())},[m(e.$slots,"menuicon",{},()=>[s("div",{class:r(["mr-5 text-3xl",e.breakpoint+":hidden"])},ae,2)])])],2)])}var de=M(ne,[["render",re]]);const ce=k({props:{isVisible:{type:Boolean,required:!0},breakpoint:{type:String,default:()=>"sm"}},setup(e){const{isVisible:o,breakpoint:t}=T(e);return{css:z(()=>{const a={"slide-y":!0,slideup:o.value===!1,slidedown:o.value===!0};return a[`${t.value}:hidden`]=!0,a})}}});function ue(e,o,t,n,a,v){return l(),d("div",{class:r([e.css,"w-full"])},[m(e.$slots,"default")],2)}var pe=M(ce,[["render",ue]]);const me={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 280 480"},be=s("path",{d:"M224 5q22 0 37.5 16T277 59v362q0 22-15.5 38T224 475H53q-22 0-37.5-16T0 421V59q0-22 15.5-38T53 5h171zm-85.5 448q13.5 0 23-9t9.5-22.5t-9.5-23t-23-9.5t-22.5 9.5t-9 23t9 22.5t22.5 9zm96.5-85V69H43v299h192z",fill:"currentColor"},null,-1),ve=[be];function fe(e,o){return l(),d("svg",me,ve)}var _e={name:"zmdi-smartphone-iphone",render:fe};const he={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 576 512"},ke=s("path",{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z",fill:"currentColor"},null,-1),ge=[ke];function xe(e,o){return l(),d("svg",he,ge)}var $e={name:"fa-solid-desktop",render:xe};const we=k({props:{breakpoint:{type:String,default:"sm"}},emits:["desktop","mobile"],setup(e,{emit:o}){const t=g(!1);function n(){t.value=!1,o("desktop")}function a(){t.value=!0,o("mobile")}return{isMobile:t,toMobile:a,toDesktop:n}}}),Me={class:"flex flex-row justify-end space-x-3 cursor-pointer"},ye=b("\xA0Mobile "),Ce=b("\xA0Desktop ");function Ve(e,o,t,n,a,v){const u=_e,f=$e;return l(),d("div",Me,[s("div",{onClick:o[0]||(o[0]=_=>e.toMobile()),class:r({"text-neutral":!e.isMobile})},[i(u),ye],2),s("div",{onClick:o[1]||(o[1]=_=>e.toDesktop()),class:r({"text-neutral":e.isMobile})},[i(f),Ce],2)])}var Be=w(we,[["render",Ve]]);const je=k({components:{CodeBlock:P,PropsTable:R,EventsTable:q,SwHeader:de,SwMobileMenu:pe,NextBar:N,CodeButton:E,ResponsiveBlock:Be},setup(){const e=g(!1),o=g(!1),t=g(!0),n=[{prop:"breakpoint",description:"A Tailwind breakpoint from where to trigger the mobile layout",type:"string",values:'"sm" | "md" | "lg" | "xl" | "2xl"',default:"sm",required:!1}],a=[{name:"togglemenu",description:"Event emitted when the menu button is clicked",returnType:"null"}],v=`
      <div>
        <sw-header
          class="h-12 bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-r-dark"
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
          class="bg-neutral text-neutral-r dark:bg-neutral-dark dark:text-neutral-r-dark">
          <div class="flex flex-col p-3 space-y-5">
            <button class="border-none btn">Page 1</button>
            <button class="border-none btn">Page 2</button>
          </div>
        </sw-mobile-menu>
      </div>
    `,u=`
      import { SwHeader, SwMobileMenu } from "@snowind/header";
    
      export default defineComponent({
        components: {
          SwHeader,
          SwMobileMenu,
        },
        setup() {
          const isMenuVisible = ref(false);

          function closeMenu() {
            isMenuVisible.value = false;
          }

          return {
              isMenuVisible,
              closeMenu,
          }
        }
      });
    `,f=`  
    purge: {
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      options: {
        safelist: ['sm:block', 'sm:hidden'],
      }
    },`;function _(){o.value=!1}return{isMobile1:e,user:Y,isMenu1Visible:o,closeMenu1:_,code1:v,code2:u,code3:f,collapse1:t,propsData:n,eventsData:a}}}),Ae=s("div",{class:"mb-8 text-2xl"},"Responsive header with menu",-1),De=s("div",{class:"ml-5 text-lg"},"Branding",-1),Te=s("div",{class:"ml-5 text-lg"},"Mobile branding",-1),ze={class:"flex flex-row items-center justify-end h-full space-x-1"},Se=s("div",{class:"flex flex-col p-3 space-y-5"},[s("button",{class:"border-none btn"},"Page 1"),s("button",{class:"border-none btn"},"Page 2")],-1),He=s("div",{class:"p-3"},"Main",-1),Pe=b(" Template: "),Re=b("Script: "),qe=S('<div class="mt-12 mb-8 text-xl">Slots</div><div class="mt-3">Template slots are available for the mobile layout and the desktop layout.</div><div class="mt-3"> Available template slots for the desktop layout: <div class="mt-3 bg-gray-100 rounded-lg shadow dark:bg-gray-700"><ul class="divide-y-2 divide-gray-100 dark:divide-gray-800"><li class="p-3"><div class="inline-block font-bold">#branding</div>:\xA0the site branding for desktop, usualy a logo </li><li class="p-3"><div class="inline-block font-bold">#menu</div>:\xA0the links to display at the top right of the header for desktop </li></ul></div></div><div class="mt-5"> Available template slots for the mobile layout: <div class="mt-3 bg-gray-100 rounded-lg shadow dark:bg-gray-700"><ul class="divide-y-2 divide-gray-100 dark:divide-gray-800"><li class="p-3"><div class="inline-block font-bold">#mobile-branding</div>:\xA0the site branding for mobile </li><li class="p-3"><div class="inline-block font-bold">#mobile-back</div>:\xA0the back arrow icon on mobile </li><li class="p-3"><div class="inline-block font-bold">#menuicon</div>:\xA0a slot to provide a custom menu icon. If not provided it will use by default a svg icon </li></ul></div></div><div class="mt-12 mb-8 text-xl">Install</div><div class="mt-3"><code lang="bash">npm install @snowind/header</code><br><code class="mt-3 text-neutral"># or</code><br><code class="mt-3">yarn add @snowind/header</code></div><div class="mt-12 mb-8 text-xl">Configuration</div>',7),Ne={class:"mt-3"},Ee=s("div",{class:"inline-block font-bold"},"Important:",-1),Ye=b("\xA0configure Tailwind to whitelist your breakpoint, to avoid purging the necessary classes at build time: in "),Ie=s("i",null,"tailwind.config.js",-1),Le=b(": "),Fe=s("div",{class:"mt-12 mb-8 text-xl"},"Props",-1),Ge=s("div",{class:"mt-12 mb-8 text-xl"},"Events",-1);function Je(e,o,t,n,a,v){const u=c("responsive-block"),f=K,_=X,y=te,C=c("sw-header"),V=c("sw-mobile-menu"),x=c("code-block"),B=c("code-button"),j=c("props-table"),A=c("events-table"),D=c("next-bar");return l(),d("div",null,[Ae,i(u,{class:"mt-5",onDesktop:o[0]||(o[0]=p=>{e.isMobile1=!1,e.closeMenu1()}),onMobile:o[1]||(o[1]=p=>e.isMobile1=!0)}),s("div",{class:r(["mt-3 border h-96",{"w-96":e.isMobile1,"w-full":!e.isMobile1,"mx-auto":e.isMobile1}])},[i(C,{class:"h-12 bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-r-dark",onTogglemenu:o[5]||(o[5]=p=>e.isMenu1Visible=!e.isMenu1Visible),breakpoint:e.isMobile1?"2xl":"sm"},{branding:h(()=>[De]),"mobile-branding":h(()=>[Te]),"mobile-back":h(()=>[e.$router.currentRoute.value.path!=""?(l(),$(f,{key:0,class:"inline-flex ml-2 text-3xl"})):H("",!0)]),menu:h(()=>[s("div",ze,[s("button",{class:"border-none btn",onClick:o[2]||(o[2]=p=>e.closeMenu1())},"Page 1"),s("button",{class:"border-none btn",onClick:o[3]||(o[3]=p=>e.closeMenu1())},"Page 2"),s("div",{class:"px-5 text-lg cursor-pointer",onClick:o[4]||(o[4]=p=>e.user.toggleDarkMode())},[e.user.isDarkMode.value==!1?(l(),$(_,{key:0})):(l(),$(y,{key:1}))])])]),_:1},8,["breakpoint"]),i(V,{"is-visible":e.isMenu1Visible,class:"bg-neutral text-neutral-r dark:bg-neutral-dark dark:text-neutral-r-dark",breakpoint:"2xl"},{default:h(()=>[Se]),_:1},8,["is-visible"]),He],2),s("div",{id:"collapse1",class:r([{"slide-y":!0,slideup:e.collapse1===!0,slidedown:e.collapse1===!1},"mt-4"])},[Pe,i(x,{code:e.code1,class:"my-3"},null,8,["code"]),Re,i(x,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),i(B,{class:"mt-3",collapse:e.collapse1,onToggle:o[6]||(o[6]=p=>e.collapse1=!e.collapse1)},null,8,["collapse"]),qe,s("div",Ne,[Ee,Ye,Ie,Le,i(x,{code:e.code3,lang:"javascript",class:"my-3"},null,8,["code"])]),Fe,i(j,{tableData:e.propsData},null,8,["tableData"]),Ge,i(A,{tableData:e.eventsData},null,8,["tableData"]),i(D,{class:"mt-24",prev:{link:"/collapse",text:"Collapse"},next:{link:"/input",text:"Input"}})])}var eo=w(je,[["render",Je]]);export{eo as default};
