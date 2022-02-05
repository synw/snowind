import{o as l,c as i,a as n,d as j,l as R,s as h,G as V,H as D,u as M,I as F,q as W,n as C,x as H,y as U,m as B,r as y,e as d,w as E,t as T,F as q,p as G,k as Y,f as m,j as w,b as S}from"./vendor.6a66068f.js";import{C as J}from"./CodeBlock.75e3803d.js";import{_ as z,N as K}from"./NextBar.999c92da.js";import{P as Q}from"./PropsTable.bb7bb3aa.js";const X={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 448 512"},Z=n("path",{d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4l-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z",fill:"currentColor"},null,-1),ee=[Z];function te(e,t){return l(),i("svg",X,ee)}var se={name:"fa-solid-angle-double-right",render:te};const oe={class:"inline-block align-middle",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 448 512"},ne=n("path",{d:"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z",fill:"currentColor"},null,-1),le=[ne];function ae(e,t){return l(),i("svg",oe,le)}var ie={name:"fa-solid-angle-double-left",render:ae},re=Object.defineProperty,de=(e,t,s)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ce=(e,t,s)=>(de(e,typeof t!="symbol"?t+"":t,s),s);function pe(e){return H()?(U(e),!0):!1}const ue=typeof window!="undefined",fe=e=>typeof e=="string",N=()=>{};function be(e,t){function s(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return s}const _e=e=>e();var A=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,he=(e,t)=>{var s={};for(var o in e)me.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&A)for(var o of A(e))t.indexOf(o)<0&&ve.call(e,o)&&(s[o]=e[o]);return s};function we(e,t,s={}){const o=s,{eventFilter:a=_e}=o,c=he(o,["eventFilter"]);return F(e,be(a,t),c)}const P=ue?window:void 0;function ge(...e){let t,s,o,a;if(fe(e[0])?([s,o,a]=e,t=P):[t,s,o,a]=e,!t)return N;let c=N;const p=F(()=>M(t),f=>{c(),!!f&&(f.addEventListener(s,o,a),c=()=>{f.removeEventListener(s,o,a),c=N})},{immediate:!0,flush:"post"}),b=()=>{p(),c()};return pe(b),b}const ye={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)}};function xe(e,t,s=(a=>(a=P)==null?void 0:a.localStorage)(),o={}){var a;const{flush:c="pre",deep:p=!0,listenToStorageChanges:b=!0,window:f=P,eventFilter:x,onError:v=_=>{console.error(_)}}=o,u=M(t),$=u==null?"any":typeof u=="boolean"?"boolean":typeof u=="string"?"string":typeof u=="object"||Array.isArray(u)?"object":Number.isNaN(u)?"any":"number",r=h(t),O=(a=o.serializer)!=null?a:ye[$];function I(_){if(!(!s||_&&_.key!==e))try{const k=_?_.newValue:s.getItem(e);k==null?(r.value=u,u!==null&&s.setItem(e,O.write(u))):r.value=O.read(k)}catch(k){v(k)}}return I(),f&&b&&ge(f,"storage",I),s&&we(r,()=>{try{r.value==null?s.removeItem(e):s.setItem(e,O.write(r.value))}catch(_){v(_)}},{flush:c,deep:p,eventFilter:x}),r}var L;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(L||(L={}));class ke{constructor(t=!1){ce(this,"isOpened",xe("isOpened",!0)),this.isOpened.value=t}}var Se=(e,t)=>{for(const[s,o]of t)e[s]=o;return e};const $e=j({props:{opened:{type:Boolean,required:!0}},emits:["update:opened"],setup(e,{emit:t}){const{opened:s}=R(e),o=new ke;let a=h(!1);return V(()=>{a.value===!0&&(s.value===!0?o.isOpened.value=!0:s.value===!1&&(o.isOpened.value=!1))}),D(()=>{t("update:opened",o.isOpened.value),a.value=!0}),{model:o}}});function Oe(e,t,s,o,a,c){return l(),i("div",{class:C([{opened:e.model.isOpened.value===!0},"sw-sidebar slide-x"])},[W(e.$slots,"default")],2)}var Ce=Se($e,[["render",Oe]]);const Ne={},Pe={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ie=B('<g fill="none"><path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 13h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 17h3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 2v4a2 2 0 0 0 2 2h4" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path></g>',1),je=[Ie];function Me(e,t){return l(),i("svg",Pe,je)}var Fe=z(Ne,[["render",Me]]);const Be=j({components:{SwSidebar:Ce,CodeBlock:J,NextBar:K,PropsTable:Q,FileIcon:Fe},setup(){const e=h(!0),t=h(!0),s=h(!0),o=h(!0);return{sidebar:e,sidebar2:t,collapse1:s,collapse2:o,code1:`
    <div class="flex flex-row mt-5 h-96">
      <sw-sidebar
        v-model:opened="sidebar"
        name="sidebar1"
        class="flex flex-col h-full secondary"
      >
        <div class="flex-grow mt-5 ml-6 space-y-6">
          <div>
            <file-icon class="inline-block text-2xl"></file-icon>
            <span v-if="sidebar === true" class="ml-3">Page 1</span>
          </div>
          <div>
            <file-icon class="inline-block text-2xl"></file-icon>
            <span v-if="sidebar === true" class="ml-3">Page 2</span>
          </div>
          <div>
            <file-icon class="inline-block text-2xl"></file-icon>
            <span v-if="sidebar === true" class="ml-3">Page 3</span>
          </div>
        </div>
        <div
          class="flex-none h-12 mb-3 text-2xl text-center cursor-pointer"
          @click="sidebar = !sidebar"
        >
          <i-fa-solid:angle-double-left v-if="sidebar === true"></i-fa-solid:angle-double-left>
          <i-fa-solid:angle-double-right v-else></i-fa-solid:angle-double-right>
        </div>
      </sw-sidebar>
      <div class="w-full light">
        <div class="m-5">
          Is the sidebar opened?
          <b>{{ sidebar }}</b>
        </div>
      </div>
    </div>
    `,code2:`
    import SwSidebar from "@snowind/sidebar";

    export default defineComponent({
      components: {
        SwSidebar
      },
      setup() {
        const sidebar = ref(true);
        
        return {
          sidebar
        }
      }
    });
    `,code3:`
    <sw-sidebar :model="sidebar2" class="w-40 ...">
    </sw-sidebar>
    `,code4:`
    <style lang="sass" scoped>
    #sidebar2
      &.opened
        @apply w-96
    </style>
    `,propsData:[{prop:"v-model:opened",description:"The reactive variable that controls the sidebar widget",type:"Ref",values:"A <code>Ref</code> instance",default:"",required:!0}]}}}),g=e=>(G("data-v-8443223e"),e=e(),Y(),e),Ee=g(()=>n("div",{class:"mb-8 text-2xl"},"Sidebar",-1)),Te=g(()=>n("div",null," Note: the sidebar state is preserved in localstorage. If you reload the page the sidebar will be in the same state ",-1)),ze={class:"flex flex-row mt-5 h-96"},Ae={class:"flex-grow mt-5 ml-6 space-y-6"},Le={key:0,class:"ml-3"},Re={key:0,class:"ml-3"},Ve={key:0,class:"ml-3"},De={class:"w-full light"},We={class:"m-5"},He=m(" Is the sidebar opened? "),Ue=m(" Template: "),qe=m("Script: "),Ge=g(()=>n("i",{class:"fas fa-code"},null,-1)),Ye=m("\xA0 "),Je={key:0},Ke={key:1},Qe=g(()=>n("div",{class:"my-8 text-xl"},"Width",-1)),Xe=g(()=>n("div",{class:"mt-3"},"Configure the sidebar width using utility classes and sass",-1)),Ze={class:"flex flex-row mt-5 h-96"},et={class:"flex-grow mt-5 ml-6 space-y-6"},tt={key:0,class:"ml-3"},st={key:0,class:"ml-3"},ot={key:0,class:"ml-3"},nt={class:"w-full light"},lt={class:"m-5"},at=m(" Is the sidebar opened? "),it=m(" Template: "),rt=m("Sass: "),dt=g(()=>n("i",{class:"fas fa-code"},null,-1)),ct=m("\xA0 "),pt={key:0},ut={key:1},ft=B('<div class="mt-12 mb-8 text-xl" data-v-8443223e>Install</div><code lang="bash" data-v-8443223e>npm install @snowind/sidebar</code><br data-v-8443223e><code class="mt-3 text-neutral" data-v-8443223e># or</code><br data-v-8443223e><code class="mt-3" data-v-8443223e>yarn add @snowind/sidebar</code><div class="mt-12 mb-8 text-xl" data-v-8443223e>Props</div>',7);function bt(e,t,s,o,a,c){const p=y("file-icon"),b=ie,f=se,x=y("sw-sidebar"),v=y("code-block"),u=y("props-table"),$=y("next-bar");return l(),i(q,null,[Ee,Te,n("div",ze,[d(x,{opened:e.sidebar,"onUpdate:opened":t[1]||(t[1]=r=>e.sidebar=r),name:"sidebar1",class:"flex flex-col h-full secondary"},{default:E(()=>[n("div",Ae,[n("div",null,[d(p,{class:"inline-block text-2xl"}),e.sidebar===!0?(l(),i("span",Le,"Page 1")):w("",!0)]),n("div",null,[d(p,{class:"inline-block text-2xl"}),e.sidebar===!0?(l(),i("span",Re,"Page 2")):w("",!0)]),n("div",null,[d(p,{class:"inline-block text-2xl"}),e.sidebar===!0?(l(),i("span",Ve,"Page 3")):w("",!0)])]),n("div",{class:"flex-none h-12 mb-3 text-2xl text-center cursor-pointer",onClick:t[0]||(t[0]=r=>e.sidebar=!e.sidebar)},[e.sidebar===!0?(l(),S(b,{key:0})):(l(),S(f,{key:1}))])]),_:1},8,["opened"]),n("div",De,[n("div",We,[He,n("b",null,T(e.sidebar),1)])])]),n("div",{class:C([{"slide-y":!0,slideup:e.collapse1===!0,slidedown:e.collapse1===!1},"mt-4"])},[Ue,d(v,{code:e.code1,class:"my-3"},null,8,["code"]),qe,d(v,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),n("button",{onClick:t[2]||(t[2]=r=>e.collapse1=!e.collapse1),class:"my-5 text-gray-500 border-none btn dark:text-white"},[Ge,Ye,e.collapse1===!0?(l(),i("span",Je,"Show code")):(l(),i("span",Ke,"Hide code"))]),Qe,Xe,n("div",Ze,[d(x,{id:"sidebar2",name:"sidebar2",opened:e.sidebar2,"onUpdate:opened":t[4]||(t[4]=r=>e.sidebar2=r),class:"flex flex-col w-40 h-full secondary"},{default:E(()=>[n("div",et,[n("div",null,[d(p,{class:"inline-block text-2xl"}),e.sidebar2===!0?(l(),i("span",tt,"Page 1")):w("",!0)]),n("div",null,[d(p,{class:"inline-block text-2xl"}),e.sidebar2===!0?(l(),i("span",st,"Page 2")):w("",!0)]),n("div",null,[d(p,{class:"inline-block text-2xl"}),e.sidebar2===!0?(l(),i("span",ot,"Page 3")):w("",!0)])]),n("div",{class:"flex-none h-12 mb-3 text-2xl text-center cursor-pointer",onClick:t[3]||(t[3]=r=>e.sidebar2=!e.sidebar2)},[e.sidebar===!0?(l(),S(b,{key:0})):(l(),S(f,{key:1}))])]),_:1},8,["opened"]),n("div",nt,[n("div",lt,[at,n("b",null,T(e.sidebar2),1)])])]),n("div",{class:C([{"slide-y":!0,slideup:e.collapse2===!0,slidedown:e.collapse2===!1},"mt-4"])},[it,d(v,{code:e.code3,class:"my-3"},null,8,["code"]),rt,d(v,{code:e.code4,lang:"html",class:"mt-3"},null,8,["code"])],2),n("button",{onClick:t[5]||(t[5]=r=>e.collapse2=!e.collapse2),class:"my-5 text-gray-500 border-none btn dark:text-white"},[dt,ct,e.collapse2===!0?(l(),i("span",pt,"Show code")):(l(),i("span",ut,"Hide code"))]),ft,d(u,{tableData:e.propsData},null,8,["tableData"]),d($,{class:"mt-24",prev:{link:"/input",text:"Input"},next:{link:"/switch",text:"Switch"}})],64)}var wt=z(Be,[["render",bt],["__scopeId","data-v-8443223e"]]);export{wt as default};
