import{A as k}from"./AnchorTitle.3ffecee6.js";import{C as x}from"./CodeBlock.c5949998.js";import{P as V}from"./PropsTable.a5a2a46c.js";import{N as _}from"./NextBar.bfefa88f.js";import{C as B}from"./CodeButton.41343d29.js";import{d as v,l as N,s as m,G as j,o as y,c as h,a as o,q as P,n as b,r as d,e as i,w as g,F as S,f,m as D}from"./vendor.d513a3f4.js";import{_ as A}from"./index.fc971e03.js";function w(s,t=!1,e="Timeout"){return new Promise((a,n)=>{setTimeout(t?()=>n(e):a,s)})}var q=(s,t)=>{const e=s.__vccOpts||s;for(const[a,n]of t)e[a]=n;return e};const I=v({props:{show:{type:Boolean,required:!0},delay:{type:Number,default:1500},transitionDelay:{type:Number,default:300}},setup(s){const{show:t,delay:e,transitionDelay:a}=N(s),n=m(t.value),c=["translate-y-24","transform-gpu","opacity-100","transition-none"],r=m(c);function p(){r.value=["transition-opacity","opacity-0"]}function T(){r.value=["ease-in","transform-gpu","translate-y-0"]}async function u(){n.value=!0,T(),await w(a.value),await w(e.value),p(),await w(a.value),r.value=c,n.value=!1}return j(async()=>{t.value===!0&&await u()}),{showToast:n,transitionClass:r}}}),z={class:"toast-content"};function E(s,t,e,a,n,c){return y(),h("div",{class:b(["fixed inset-x-0 px-5 py-2 mx-auto text-sm duration-300 rounded-xl bottom-12 w-max",s.transitionClass.join(" ")])},[o("div",z,[P(s.$slots,"default")])],2)}var F=q(I,[["render",E]]);const O=()=>{const s=m(!1);return{isToastVisible:s,popToast:async(e=1e3)=>{s.value=!0,await new Promise(a=>setTimeout(a,e)),s.value=!1}}},G=v({components:{CodeBlock:x,PropsTable:V,NextBar:_,CodeButton:B,SwToast:F,AnchorTitle:k},setup(){const s=[{prop:"show",description:"The isToastVisible ref from useToast",type:"boolean",values:"true, false",required:!0},{prop:"delay",description:"The number of milliseconds the message will stay visible",type:"number",default:"1500"},{prop:"transition-delay",description:"The duration in milleseconds of the animations",type:"number",default:"300"}],{popToast:t,isToastVisible:e}=O(),a=m(!0),n=m("success");function c(u){n.value=u,t()}return{code1:`
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
    `,isToastVisible:e,popTheToast:c,collapse1:a,toastType:n,propsData:s}}}),H=o("div",{class:"mb-8 text-2xl"},"Toast message",-1),R=o("div",{class:"mb-5"},"An animated toast message",-1),J=f("Toast message"),K=f(" Template: "),L=o("div",{class:"mt-3"},"Script:",-1),M=f("Colors"),Q={class:"flex flex-row mt-5 space-x-3"},U=D('<div class="mt-12 mb-8 text-xl">Install</div><code lang="bash">npm install @snowind/toast</code><br><code class="mt-3 text-neutral"># or</code><br><code class="mt-3">yarn add @snowind/toast</code><div class="mt-12 mb-8 text-xl">Props</div>',7);function W(s,t,e,a,n,c){const r=d("sw-toast"),p=d("code-block"),T=d("code-button"),u=d("anchor-title"),C=d("props-table"),$=d("next-bar");return y(),h(S,null,[H,R,o("button",{class:"border-neutral btn",onClick:t[0]||(t[0]=l=>s.popTheToast("success"))},"Pop toast"),i(r,{class:b(["fixed inset-x-0 px-5 py-2 mx-auto text-sm duration-300 rounded-xl bottom-12 w-max",s.toastType]),show:s.isToastVisible},{default:g(()=>[J]),_:1},8,["class","show"]),o("div",{class:b([{"slide-y":!0,slideup:s.collapse1===!0,slidedown:s.collapse1===!1},"mt-4"])},[K,i(p,{class:"mt-3",lang:"html",code:s.code1},null,8,["code"]),L,i(p,{class:"mt-3",lang:"typescript",code:s.code2},null,8,["code"])],2),i(T,{class:"mt-3",collapse:s.collapse1,onToggle:t[1]||(t[1]=l=>s.collapse1=!s.collapse1)},null,8,["collapse"]),i(u,{name:"colors",class:"mt-8 text-lg"},{default:g(()=>[M]),_:1}),o("div",Q,[o("button",{class:"btn primary",onClick:t[2]||(t[2]=l=>s.popTheToast("primary"))},"Toast"),o("button",{class:"btn secondary",onClick:t[3]||(t[3]=l=>s.popTheToast("secondary"))},"Toast"),o("button",{class:"btn light",onClick:t[4]||(t[4]=l=>s.popTheToast("light"))},"Toast"),o("button",{class:"btn neutral",onClick:t[5]||(t[5]=l=>s.popTheToast("neutral"))},"Toast"),o("button",{class:"btn success",onClick:t[6]||(t[6]=l=>s.popTheToast("success"))},"Toast"),o("button",{class:"btn warning",onClick:t[7]||(t[7]=l=>s.popTheToast("warning"))},"Toast"),o("button",{class:"btn danger",onClick:t[8]||(t[8]=l=>s.popTheToast("danger"))},"Toast")]),i(p,{class:"mt-8",lang:"html",code:s.code3},null,8,["code"]),U,i(C,{tableData:s.propsData},null,8,["tableData"]),i($,{class:"mt-24",prev:{link:"/header",text:"Header"},next:{link:"/state/screen",text:"Screen size"}})],64)}var as=A(G,[["render",W]]);export{as as default};
