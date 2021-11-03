import{o as l,a as d,b as t,d as f,l as T,c as H,s as m,n as a,q as k,e as i,f as h,r as c,w as _,v as $,j as P}from"./vendor.2a37f64c.js";import{C as R}from"./CodeBlock.e2b443a9.js";import{P as S}from"./PropsTable.c040cb4e.js";import{E as A}from"./EventsTable.046e9a0b.js";import{N as q}from"./NextBar.53a2d3cb.js";import{C as N}from"./CodeButton.ec198959.js";import{_ as w,u as E}from"./index.aab83dc6.js";const Y={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},L=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M244 400L100 256l144-144"},null,-1),I=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M120 256h292"},null,-1),F=[L,I];function G(e,o){return l(),d("svg",Y,F)}var J={name:"ion-arrow-back-outline",render:G};const K={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},O=t("path",{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792c7.068-8.708-.639-21.43-11.562-19.35c-124.203 23.654-238.262-71.576-238.262-196.954c0-72.222 38.662-138.635 101.498-174.394c9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256c0 141.309 114.511 256 256 256z",fill:"currentColor"},null,-1),Q=[O];function U(e,o){return l(),d("svg",K,Q)}var W={name:"fa-solid-moon",render:U};const X={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 512 512"},Z=t("path",{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96s96-43.1 96-96s-43.1-96-96-96zm246.4 80.5l-94.7-47.3l33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5l-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4l-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3l-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5l47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7l100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4l94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0c-49.9-49.9-49.9-131.1 0-181c49.9-49.9 131.1-49.9 181 0c49.9 49.9 49.9 131.1 0 181z",fill:"currentColor"},null,-1),ee=[Z];function oe(e,o){return l(),d("svg",X,ee)}var te={name:"fa-solid-sun",render:oe},x=(e,o)=>{for(const[s,n]of o)e[s]=n;return e};const se=f({props:{breakpoint:{type:String,default:()=>"sm"}},emits:["togglemenu"],setup(e,{emit:o}){function s(){o("togglemenu")}function n(){history.length>0&&history.back()}return{onClick:s,back:n}}}),ne={class:"flex flex-row items-center"},le=t("svg",{class:"fill-current",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[t("g",null,[t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2zm0 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2z"})])],-1),ie=[le];function re(e,o,s,n,r,b){return l(),d("div",ne,[t("div",{class:a(["flex-none hidden",e.breakpoint+":block"])},[m(e.$slots,"branding")],2),t("div",{class:a(["inline-flex flex-row items-center h-full",e.breakpoint+":hidden"])},[t("div",{onClick:o[0]||(o[0]=u=>e.back())},[m(e.$slots,"mobile-back")]),m(e.$slots,"mobile-branding")],2),t("div",{class:a(["flex-grow hidden h-full",e.breakpoint+":block"])},[m(e.$slots,"menu")],2),t("div",{class:a(["flex items-center justify-end flex-grow h-full cursor-pointer",e.breakpoint+":hidden"])},[t("div",{class:"border-none btn",onClick:o[1]||(o[1]=u=>e.onClick())},[m(e.$slots,"menuicon",{},()=>[t("div",{class:a(["mr-5 text-3xl",e.breakpoint+":hidden"])},ie,2)])])],2)])}var ae=x(se,[["render",re]]);const de=f({props:{isVisible:{type:Boolean,required:!0},breakpoint:{type:String,default:()=>"sm"}},setup(e){const{isVisible:o,breakpoint:s}=T(e);return{css:H(()=>{const r={"slide-y":!0,slideup:o.value===!1,slidedown:o.value===!0};return r[`${s.value}:hidden`]=!0,r})}}});function ce(e,o,s,n,r,b){return l(),d("div",{class:a([e.css,"w-full"])},[m(e.$slots,"default")],2)}var ue=x(de,[["render",ce]]);const pe={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 280 480"},me=t("path",{d:"M224 5q22 0 37.5 16T277 59v362q0 22-15.5 38T224 475H53q-22 0-37.5-16T0 421V59q0-22 15.5-38T53 5h171zm-85.5 448q13.5 0 23-9t9.5-22.5t-9.5-23t-23-9.5t-22.5 9.5t-9 23t9 22.5t22.5 9zm96.5-85V69H43v299h192z",fill:"currentColor"},null,-1),be=[me];function ve(e,o){return l(),d("svg",pe,be)}var _e={name:"zmdi-smartphone-iphone",render:ve};const fe={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 576 512"},ke=t("path",{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z",fill:"currentColor"},null,-1),he=[ke];function ge(e,o){return l(),d("svg",fe,he)}var $e={name:"fa-solid-desktop",render:ge};const Me=f({props:{breakpoint:{type:String,default:"sm"}},emits:["desktop","mobile"],setup(e,{emit:o}){const s=k(!1);function n(){s.value=!1,o("desktop")}function r(){s.value=!0,o("mobile")}return{isMobile:s,toMobile:r,toDesktop:n}}}),we={class:"flex flex-row justify-end space-x-3 cursor-pointer"},xe=h("\xA0Mobile "),ye=h("\xA0Desktop ");function Ce(e,o,s,n,r,b){const u=_e,v=$e;return l(),d("div",we,[t("div",{onClick:o[0]||(o[0]=g=>e.toMobile()),class:a({"text-neutral":!e.isMobile})},[i(u),xe],2),t("div",{onClick:o[1]||(o[1]=g=>e.toDesktop()),class:a({"text-neutral":e.isMobile})},[i(v),ye],2)])}var Ve=w(Me,[["render",Ce]]);const Be=f({components:{CodeBlock:R,PropsTable:S,EventsTable:A,SwHeader:ae,SwMobileMenu:ue,NextBar:q,CodeButton:N,ResponsiveBlock:Ve},setup(){const e=k(!1),o=k(!1),s=k(!0),n=[{prop:"breakpoint",description:"A Tailwind breakpoint from where to trigger the mobile layout",type:"string",values:'"sm" | "md" | "lg" | "xl" | "2xl"',default:"sm",required:!1}],r=[{name:"togglemenu",description:"Event emitted when the menu button is clicked",returnType:"null"}],b=`
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
    `;function v(){o.value=!1}return{isMobile1:e,user:E,isMenu1Visible:o,closeMenu1:v,code1:b,code2:u,collapse1:s,propsData:n,eventsData:r}}}),De=t("div",{class:"mb-8 text-2xl"},"Responsive header with menu",-1),ze=t("div",{class:"ml-5 text-lg"},"Branding",-1),je=t("div",{class:"ml-5 text-lg"},"Mobile branding",-1),Te={class:"flex flex-row items-center justify-end h-full space-x-1"},He=t("div",{class:"flex flex-col p-3 space-y-5"},[t("button",{class:"border-none btn"},"Page 1"),t("button",{class:"border-none btn"},"Page 2")],-1),Pe=t("div",{class:"p-3"},"Main",-1),Re=h(" Template: "),Se=h("Script: "),Ae=t("div",{class:"mt-12 mb-8 text-xl"},"Props",-1),qe=t("div",{class:"mt-12 mb-8 text-xl"},"Events",-1);function Ne(e,o,s,n,r,b){const u=c("responsive-block"),v=J,g=W,y=te,C=c("sw-header"),V=c("sw-mobile-menu"),M=c("code-block"),B=c("code-button"),D=c("props-table"),z=c("events-table"),j=c("next-bar");return l(),d("div",null,[De,i(u,{class:"mt-5",onDesktop:o[0]||(o[0]=p=>{e.isMobile1=!1,e.closeMenu1()}),onMobile:o[1]||(o[1]=p=>e.isMobile1=!0)}),t("div",{class:a(["mt-3 border h-96",{"w-96":e.isMobile1,"w-full":!e.isMobile1,"mx-auto":e.isMobile1}])},[i(C,{class:"h-12 bg-primary text-primary-r dark:bg-primary-dark dark:text-primary-r-dark",onTogglemenu:o[5]||(o[5]=p=>e.isMenu1Visible=!e.isMenu1Visible),breakpoint:e.isMobile1?"2xl":"sm"},{branding:_(()=>[ze]),"mobile-branding":_(()=>[je]),"mobile-back":_(()=>[e.$router.currentRoute.value.path!=""?(l(),$(v,{key:0,class:"inline-flex ml-2 text-3xl"})):P("",!0)]),menu:_(()=>[t("div",Te,[t("button",{class:"border-none btn",onClick:o[2]||(o[2]=p=>e.closeMenu1())},"Page 1"),t("button",{class:"border-none btn",onClick:o[3]||(o[3]=p=>e.closeMenu1())},"Page 2"),t("div",{class:"px-5 text-lg cursor-pointer",onClick:o[4]||(o[4]=p=>e.user.toggleDarkMode())},[e.user.isDarkMode.value==!1?(l(),$(g,{key:0})):(l(),$(y,{key:1}))])])]),_:1},8,["breakpoint"]),i(V,{"is-visible":e.isMenu1Visible,class:"bg-neutral text-neutral-r dark:bg-neutral-dark dark:text-neutral-r-dark",breakpoint:"2xl"},{default:_(()=>[He]),_:1},8,["is-visible"]),Pe],2),t("div",{id:"collapse1",class:a([{"slide-y":!0,slideup:e.collapse1===!0,slidedown:e.collapse1===!1},"mt-4"])},[Re,i(M,{code:e.code1,class:"my-3"},null,8,["code"]),Se,i(M,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),i(B,{class:"mt-3",collapse:e.collapse1,onToggle:o[6]||(o[6]=p=>e.collapse1=!e.collapse1)},null,8,["collapse"]),Ae,i(D,{tableData:e.propsData},null,8,["tableData"]),qe,i(z,{tableData:e.eventsData},null,8,["tableData"]),i(j,{class:"mt-24",prev:{link:"/collapse",text:"Collapse"},next:{link:"/input",text:"Input"}})])}var Ke=w(Be,[["render",Ne]]);export{Ke as default};
