import{d as $,l as D,q as g,G as W,H as A,I as C,J as j,o as l,c as i,s as R,n as O,v as z,x as H,r as x,a as o,e as v,w as E,t as F,F as L,p as U,k as q,f as m,m as G,j as w}from"./vendor.ba3950ab.js";import{C as J}from"./CodeBlock.8e63f17f.js";import{N as M}from"./NextBar.2221aae1.js";import{P as K}from"./PropsTable.17bf438c.js";import{_ as Q}from"./index.9c82c8e6.js";var X=Object.defineProperty,Y=(e,s,t)=>s in e?X(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,Z=(e,s,t)=>(Y(e,typeof s!="symbol"?s+"":s,t),t);function ee(e){return z()?(H(e),!0):!1}const se=typeof window!="undefined",te=e=>typeof e=="string",N=()=>{};function ae(e,s){function t(...a){e(()=>s.apply(this,a),{fn:s,thisArg:this,args:a})}return t}const oe=e=>e();var T=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,ie=(e,s)=>{var t={};for(var a in e)re.call(e,a)&&s.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&T)for(var a of T(e))s.indexOf(a)<0&&le.call(e,a)&&(t[a]=e[a]);return t};function ne(e,s,t={}){const a=t,{eventFilter:r=oe}=a,d=ie(a,["eventFilter"]);return j(e,ae(r,s),d)}const P=se?window:void 0;function de(...e){let s,t,a,r;if(te(e[0])?([t,a,r]=e,s=P):[s,t,a,r]=e,!s)return N;let d=N;const h=j(()=>C(s),u=>{d(),!!u&&(u.addEventListener(t,a,r),d=()=>{u.removeEventListener(t,a,r),d=N})},{immediate:!0,flush:"post"}),c=()=>{h(),d()};return ee(c),c}const ce={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)}};function pe(e,s,t=(r=>(r=P)==null?void 0:r.localStorage)(),a={}){var r;const{flush:d="pre",deep:h=!0,listenToStorageChanges:c=!0,window:u=P,eventFilter:k,onError:p=b=>{console.error(b)}}=a,f=C(s),V=f==null?"any":typeof f=="boolean"?"boolean":typeof f=="string"?"string":typeof f=="object"||Array.isArray(f)?"object":Number.isNaN(f)?"any":"number",_=g(s),S=(r=a.serializer)!=null?r:ce[V];function I(b){if(!(!t||b&&b.key!==e))try{const y=b?b.newValue:t.getItem(e);y==null?(_.value=f,f!==null&&t.setItem(e,S.write(f))):_.value=S.read(y)}catch(y){p(y)}}return I(),u&&c&&de(u,"storage",I),t&&ne(_,()=>{try{_.value==null?t.removeItem(e):t.setItem(e,S.write(_.value))}catch(b){p(b)}},{flush:d,deep:h,eventFilter:k}),_}var B;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(B||(B={}));class ue{constructor(s=!1){Z(this,"isOpened",pe("isOpened",!0)),this.isOpened.value=s}}var fe=(e,s)=>{for(const[t,a]of s)e[t]=a;return e};const be=$({props:{opened:{type:Boolean,required:!0}},emits:["update:opened"],setup(e,{emit:s}){const{opened:t}=D(e),a=new ue;let r=g(!1);return W(()=>{r.value===!0&&(t.value===!0?a.isOpened.value=!0:t.value===!1&&(a.isOpened.value=!1))}),A(()=>{s("update:opened",a.isOpened.value),r.value=!0}),{model:a}}});function ve(e,s,t,a,r,d){return l(),i("div",{class:O([{opened:e.model.isOpened.value===!0},"sw-sidebar slide-x"])},[R(e.$slots,"default")],2)}var me=fe(be,[["render",ve]]);const he=$({components:{SwSidebar:me,CodeBlock:J,NextBar:M,PropsTable:K},setup(){const e=g(!0),s=g(!0),t=g(!0),a=g(!0);return{sidebar:e,sidebar2:s,collapse1:t,collapse2:a,code1:`
    <div class="flex flex-row mt-5 h-96">
      <sw-sidebar
        v-model:opened="sidebar"
        name="sidebar1"
        class="flex flex-col h-full bg-secondary text-secondary-r"
      >
        <div class="flex-grow mt-5 ml-6 space-y-6">
          <div>
            <i class="far fa-file fa-2x"></i>
            <span v-if="sidebar === true" class="ml-3">Page 1</span>
          </div>
          <div>
            <i class="far fa-file-image fa-2x"></i>
            <span v-if="sidebar === true" class="ml-3">Page 2</span>
          </div>
          <div>
            <i class="fas fa-file-alt fa-2x"></i>
            <span v-if="sidebar === true" class="ml-3">Page 3</span>
          </div>
        </div>
        <div
          class="flex-none h-12 mb-3 text-2xl text-center cursor-pointer"
          @click="sidebar = !sidebar"
        >
          <i class="fas fa-angle-double-left" v-if="sidebar === true"></i>
          <i class="fas fa-angle-double-right" v-else></i>
        </div>
      </sw-sidebar>
      <div class="w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark">
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
    `,propsData:[{prop:"v-model:opened",description:"The reactive variable that controls the sidebar widget",type:"Ref",values:"A <code>Ref</code> instance",default:"",required:!0}]}}}),n=e=>(U("data-v-5c8a10e6"),e=e(),q(),e),_e=n(()=>o("div",{class:"mb-8 text-2xl"},"Sidebar",-1)),ge=n(()=>o("div",null," Note: the sidebar state is preserved in localstorage. If you reload the page the sidebar will be in the same state ",-1)),we={class:"flex flex-row mt-5 h-96"},ye={class:"flex-grow mt-5 ml-6 space-y-6"},xe=n(()=>o("i",{class:"far fa-file fa-2x"},null,-1)),ke={key:0,class:"ml-3"},Se=n(()=>o("i",{class:"far fa-file-image fa-2x"},null,-1)),Oe={key:0,class:"ml-3"},Ne=n(()=>o("i",{class:"fas fa-file-alt fa-2x"},null,-1)),Pe={key:0,class:"ml-3"},Ie={key:0,class:"fas fa-angle-double-left"},$e={key:1,class:"fas fa-angle-double-right"},Ce={class:"w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark"},je={class:"m-5"},Ee=m(" Is the sidebar opened? "),Fe=m(" Template: "),Te=m("Script: "),Be=n(()=>o("i",{class:"fas fa-code"},null,-1)),Ve=m("\xA0 "),De={key:0},We={key:1},Ae=n(()=>o("div",{class:"my-8 text-xl"},"Width",-1)),Re=n(()=>o("div",{class:"mt-3"},"Configure the sidebar width using utility classes and sass",-1)),ze={class:"flex flex-row mt-5 h-96"},He={class:"flex-grow mt-5 ml-6 space-y-6"},Le=n(()=>o("i",{class:"far fa-file fa-2x"},null,-1)),Ue={key:0,class:"ml-3"},qe=n(()=>o("i",{class:"far fa-file-image fa-2x"},null,-1)),Ge={key:0,class:"ml-3"},Je=n(()=>o("i",{class:"fas fa-file-alt fa-2x"},null,-1)),Me={key:0,class:"ml-3"},Ke={key:0,class:"fas fa-angle-double-left"},Qe={key:1,class:"fas fa-angle-double-right"},Xe={class:"w-full bg-light text-light-r dark:bg-light-dark dark:text-light-r-dark"},Ye={class:"m-5"},Ze=m(" Is the sidebar opened? "),es=m(" Template: "),ss=m("Sass: "),ts=n(()=>o("i",{class:"fas fa-code"},null,-1)),as=m("\xA0 "),os={key:0},rs={key:1},ls=G('<div class="mt-12 mb-8 text-xl" data-v-5c8a10e6>Install</div><code lang="bash" data-v-5c8a10e6>npm install @snowind/sidebar</code><br data-v-5c8a10e6><code class="mt-3 text-neutral" data-v-5c8a10e6># or</code><br data-v-5c8a10e6><code class="mt-3" data-v-5c8a10e6>yarn add @snowind/sidebar</code><div class="mt-12 mb-8 text-xl" data-v-5c8a10e6>Props</div>',7);function is(e,s,t,a,r,d){const h=x("sw-sidebar"),c=x("code-block"),u=x("props-table"),k=x("next-bar");return l(),i(L,null,[_e,ge,o("div",we,[v(h,{opened:e.sidebar,"onUpdate:opened":s[1]||(s[1]=p=>e.sidebar=p),name:"sidebar1",class:"flex flex-col h-full bg-secondary text-secondary-r"},{default:E(()=>[o("div",ye,[o("div",null,[xe,e.sidebar===!0?(l(),i("span",ke,"Page 1")):w("",!0)]),o("div",null,[Se,e.sidebar===!0?(l(),i("span",Oe,"Page 2")):w("",!0)]),o("div",null,[Ne,e.sidebar===!0?(l(),i("span",Pe,"Page 3")):w("",!0)])]),o("div",{class:"flex-none h-12 mb-3 text-2xl text-center cursor-pointer",onClick:s[0]||(s[0]=p=>e.sidebar=!e.sidebar)},[e.sidebar===!0?(l(),i("i",Ie)):(l(),i("i",$e))])]),_:1},8,["opened"]),o("div",Ce,[o("div",je,[Ee,o("b",null,F(e.sidebar),1)])])]),o("div",{class:O([{"slide-y":!0,slideup:e.collapse1===!0,slidedown:e.collapse1===!1},"mt-4"])},[Fe,v(c,{code:e.code1,class:"my-3"},null,8,["code"]),Te,v(c,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),o("button",{onClick:s[2]||(s[2]=p=>e.collapse1=!e.collapse1),class:"my-5 text-gray-500 border-none btn dark:text-white"},[Be,Ve,e.collapse1===!0?(l(),i("span",De,"Show code")):(l(),i("span",We,"Hide code"))]),Ae,Re,o("div",ze,[v(h,{id:"sidebar2",name:"sidebar2",opened:e.sidebar2,"onUpdate:opened":s[4]||(s[4]=p=>e.sidebar2=p),class:"flex flex-col w-40 h-full bg-secondary text-secondary-r"},{default:E(()=>[o("div",He,[o("div",null,[Le,e.sidebar2===!0?(l(),i("span",Ue,"Page 1")):w("",!0)]),o("div",null,[qe,e.sidebar2===!0?(l(),i("span",Ge,"Page 2")):w("",!0)]),o("div",null,[Je,e.sidebar2===!0?(l(),i("span",Me,"Page 3")):w("",!0)])]),o("div",{class:"flex-none h-12 mb-3 text-2xl text-center cursor-pointer",onClick:s[3]||(s[3]=p=>e.sidebar2=!e.sidebar2)},[e.sidebar2===!0?(l(),i("i",Ke)):(l(),i("i",Qe))])]),_:1},8,["opened"]),o("div",Xe,[o("div",Ye,[Ze,o("b",null,F(e.sidebar2),1)])])]),o("div",{class:O([{"slide-y":!0,slideup:e.collapse2===!0,slidedown:e.collapse2===!1},"mt-4"])},[es,v(c,{code:e.code3,class:"my-3"},null,8,["code"]),ss,v(c,{code:e.code4,lang:"html",class:"mt-3"},null,8,["code"])],2),o("button",{onClick:s[5]||(s[5]=p=>e.collapse2=!e.collapse2),class:"my-5 text-gray-500 border-none btn dark:text-white"},[ts,as,e.collapse2===!0?(l(),i("span",os,"Show code")):(l(),i("span",rs,"Hide code"))]),ls,v(u,{tableData:e.propsData},null,8,["tableData"]),v(k,{class:"mt-24",prev:{link:"/input",text:"Input"},next:{link:"/switch",text:"Switch"}})],64)}var fs=Q(he,[["render",is],["__scopeId","data-v-5c8a10e6"]]);export{fs as default};
