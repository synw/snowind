import{A as g}from"./AnchorTitle.7570407b.js";import{C}from"./CodeBlock.d68e9033.js";import{P as V}from"./PropsTable.3a7f4565.js";import{_ as k,N as y}from"./NextBar.40b4edc2.js";import{C as $}from"./CodeButton.5d388d15.js";import{S as B,u as _}from"./toast.es.e34e88b8.js";import{d as j,q as b,r as n,o as N,c as S,a as t,b as a,n as w,w as f,F as P,f as c,l as x}from"./vendor.48cc1c7c.js";const A=j({components:{CodeBlock:C,PropsTable:V,NextBar:y,CodeButton:$,SwToast:B,AnchorTitle:g},setup(){const s=[{prop:"show",description:"The isToastVisible ref from useToast",type:"boolean",values:"true, false",required:!0},{prop:"delay",description:"The number of milliseconds the message will stay visible",type:"number",default:"1500"},{prop:"transition-delay",description:"The duration in milleseconds of the animations",type:"number",default:"300"}],{popToast:o,isToastVisible:p}=_(),d=b(!0),i=b("success");function T(r){i.value=r,o()}return{code1:`
    <button class="btn border-neutral" @click="popToast()">Pop toast</button>
    <sw-toast class="success" :show="isToastVisible">Toast message</sw-toast>
    `,code2:`
    import { SwToast, useToast } from "@snowind/toast";

    export default defineComponent({
      components: {
        SwToast,
      },
      setup() {
        const { popToast, isToastVisible } = useToast();

        return  {
          isToastVisible,
          popToast,
        }
      }
    });
    `,code3:`
    <sw-toast class="primary" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="secondary" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="light" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="neutral" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="success" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="warning" :show="isToastVisible">Toast</sw-toast>
    <sw-toast class="danger" :show="isToastVisible">Toast</sw-toast>
    `,isToastVisible:p,popTheToast:T,collapse1:d,toastType:i,propsData:s}}}),D=t("div",{class:"mb-8 text-2xl"},"Toast message",-1),q=t("div",{class:"mb-5"},"An animated toast message",-1),z=c("Toast message"),F=c(" Template: "),E=t("div",{class:"mt-3"},"Script:",-1),H=c("Colors"),I={class:"flex flex-row mt-5 space-x-3"},G=x('<div class="mt-12 mb-8 text-xl">Install</div><code lang="bash">npm install @snowind/toast</code><br><code class="mt-3 text-neutral"># or</code><br><code class="mt-3">yarn add @snowind/toast</code><div class="mt-12 mb-8 text-xl">Props</div>',7);function J(s,o,p,d,i,T){const m=n("sw-toast"),l=n("code-block"),u=n("code-button"),r=n("anchor-title"),h=n("props-table"),v=n("next-bar");return N(),S(P,null,[D,q,t("button",{class:"border-neutral btn",onClick:o[0]||(o[0]=e=>s.popTheToast("success"))},"Pop toast"),a(m,{class:w(s.toastType),show:s.isToastVisible},{default:f(()=>[z]),_:1},8,["class","show"]),t("div",{class:w([{"slide-y":!0,slideup:s.collapse1===!0,slidedown:s.collapse1===!1},"mt-4"])},[F,a(l,{class:"mt-3",lang:"html",code:s.code1},null,8,["code"]),E,a(l,{class:"mt-3",lang:"typescript",code:s.code2},null,8,["code"])],2),a(u,{class:"mt-3",collapse:s.collapse1,onToggle:o[1]||(o[1]=e=>s.collapse1=!s.collapse1)},null,8,["collapse"]),a(r,{name:"colors",class:"mt-8 text-lg"},{default:f(()=>[H]),_:1}),t("div",I,[t("button",{class:"btn primary",onClick:o[2]||(o[2]=e=>s.popTheToast("primary"))},"Toast"),t("button",{class:"btn secondary",onClick:o[3]||(o[3]=e=>s.popTheToast("secondary"))},"Toast"),t("button",{class:"btn light",onClick:o[4]||(o[4]=e=>s.popTheToast("light"))},"Toast"),t("button",{class:"btn neutral",onClick:o[5]||(o[5]=e=>s.popTheToast("neutral"))},"Toast"),t("button",{class:"btn success",onClick:o[6]||(o[6]=e=>s.popTheToast("success"))},"Toast"),t("button",{class:"btn warning",onClick:o[7]||(o[7]=e=>s.popTheToast("warning"))},"Toast"),t("button",{class:"btn danger",onClick:o[8]||(o[8]=e=>s.popTheToast("danger"))},"Toast")]),a(l,{class:"mt-8",lang:"html",code:s.code3},null,8,["code"]),G,a(h,{tableData:s.propsData},null,8,["tableData"]),a(v,{class:"mt-24",prev:{link:"/header",text:"Header"},next:{link:"/state/screen",text:"Screen size"}})],64)}var W=k(A,[["render",J]]);export{W as default};
