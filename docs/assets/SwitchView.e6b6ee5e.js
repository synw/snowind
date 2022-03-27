import{d as q,m as H,q as c,D as J,E as K,o as A,c as R,a as s,B as L,G as O,u as i,n as v,s as Q,b as e,t as C,w as n,f as a}from"./vendor.48cc1c7c.js";import{C as d}from"./CodeBlock.d68e9033.js";import{P as X}from"./PropsTable.3a7f4565.js";import{E as Y}from"./EventsTable.e41a87ea.js";import{N as Z}from"./NextBar.40b4edc2.js";import{C as y}from"./CodeButton.5d388d15.js";import{u as ss,S as es}from"./toast.es.e34e88b8.js";import{A as k}from"./AnchorTitle.7570407b.js";function ts(){const o=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return o()+o()+"-"+o()+"-"+o()+"-"+o()+"-"+o()+o()+o()}const ls={class:"inline-block sw-switch",style:{"background-color":"transparent",color:"inherit"}},as=["for"],os={class:"relative"},cs=["id","checked"],m=q({props:{big:{type:Boolean,default:!1},value:{type:Boolean,required:!0}},emits:["update:value"],setup(o,{emit:U}){const x=o,{value:B}=H(x),u=c(!1),T=ts();function $(){U("update:value",u.value)}return J(()=>{u.value=B.value}),K(()=>x.value,(w,p)=>{u.value=w}),(w,p)=>(A(),R("div",ls,[s("label",{for:"toggle"+i(T),class:"flex items-center cursor-pointer"},[s("div",os,[L(s("input",{id:"toggle"+i(T),type:"checkbox",class:"sr-only",checked:u.value,"onUpdate:modelValue":p[0]||(p[0]=S=>u.value=S),onChange:p[1]||(p[1]=S=>$())},null,40,cs),[[O,u.value]]),s("div",{class:v(["block rounded-full bg",{big:o.big===!0}])},null,2),s("div",{class:v(["absolute transition rounded-full dot left-1 top-1",{big:o.big===!0}])},null,2)]),Q(w.$slots,"default")],8,as)]))}}),is=s("div",{class:"mb-8 text-2xl"},"Switch",-1),ns={class:"mt-4"},ds=a(" Value: "),us=a(" Template: "),rs=a("Script: "),vs=a("Style"),ms=s("div",{class:"mb-5"},"Big",-1),ps={class:"mt-4"},ws=a(" Value: "),hs=a(" Template: "),fs=a("Script: "),gs=s("div",{class:"my-8"},"Color variants and clickable labels",-1),bs={class:"flex flex-row w-full space-x-3"},_s=s("div",{class:"ml-2"},"Primary",-1),ys=s("div",{class:"ml-2"},"Secondary",-1),xs=s("div",{class:"ml-2"},"Danger",-1),Ts=s("div",{class:"ml-2"},"Warning",-1),Ss=a("Reactivity"),Cs=s("div",{class:"mt-3"},[a(" To manage update events use the "),s("code",{class:"variable"},"update:value"),a(" event. Example with a toast that pops up when a change is made: ")],-1),ks={class:"mt-8"},Us={class:"inline ml-2"},Bs=a(" v-model:value "),$s=a("Script: "),Vs=a("Semantic colors"),js=s("div",{class:"mt-3"},[a(" A css class will be generated for each semantic color defined in the config, in the form of "),s("code",{class:"variable"},[s("span",null,"switch-"),s("i",null,"mycolorname")]),a(". For example if we have an "),s("code",{class:"variable"},"accent"),a(" color defined: ")],-1),Ds=s("div",{class:"mt-5"},[a(" Then a "),s("code",{class:"variable"},"switch-accent"),a(" class will be available: ")],-1),Es=s("div",{class:"ml-2"},"Custom color",-1),Ms=a("Install"),Ps=s("code",{lang:"bash"},"npm install @snowind/switch",-1),Ns=s("br",null,null,-1),qs=s("code",{class:"mt-3 text-neutral"},"# or",-1),As=s("br",null,null,-1),Rs=s("code",{class:"mt-3"},"yarn add @snowind/switch",-1),zs=s("div",{class:"mt-12 mb-8 text-xl"},"Props",-1),Gs=s("div",{class:"mt-12 mb-8 text-xl"},"Events",-1),Qs=q({setup(o){const U=`
      <sw-switch 
        label="Switch" 
        v-model:value="switch1"
        class="switch-primary">
      </sw-switch>
      <div class="mt-4">
        Value:
        <code>{{ switch1 }}</code>
      </div>
    `,x=`
    import SwSwitch from "@snowind/switch";
    
    const switch1 = ref(false);
    `,B=`
      <sw-switch
        label="Switch"
        v-model:value="switch2"
        class="switch-primary" big>
      </sw-switch>
    `,u=`
      const switch2 = ref(false);
    `,T=`
      <sw-switch class="switch-primary" v-model:value="switch3">
        <div class="ml-2">Primary</div>
      </sw-switch>
      <sw-switch class="switch-secondary" v-model:value="switch3">
        <div class="ml-2">Secondary</div>
      </sw-switch>
      <sw-switch class="switch-danger" v-model:value="switch3">
        <div class="ml-2">Danger</div>
      </sw-switch>
      <sw-switch class="switch-warning" v-model:value="switch3">
        <div class="ml-2">Warning</div>
      </sw-switch>
    `,$=`
    <sw-switch
        class="inline-block align-middle switch-secondary"
        v-model:value="switch4"
        @update:value="onUpdate(Boolean($event))"
      ></sw-switch>
      <sw-toast :class="toastClass" :show="isToastVisible">{{ toastMsg }}</sw-toast>
      <div class="inline ml-2">
        v-model:value
        <code>{{ switch4 }}</code>
      </div>
    `,w=`
    import { SwToast, useToast } from "@snowind/toast";

    const switch4 = ref(true);
    const { popToast, isToastVisible } = useToast();
    const toastMsg = ref("");
    const toastClass = ref("success");

    function onUpdate(val: boolean): void {
      switch (val) {
        case true:
          toastClass.value = "success";
          toastMsg.value = \`Update to true\`;
          break;
        default:
          toastClass.value = "danger";
          toastMsg.value = \`Update to false\`;
      }
      popToast();
    }
    `,p=`
    const colors = require('tailwindcss/colors');

    module.exports = {
      // ...
      theme: {
        extend: {
          semanticColors: {
            accent: {
              light: {
                bg: colors.pink[500],
                txt: colors.white
              },
              dark: {
                bg: colors.purple[600],
                txt: colors.neutral[100]
              }
            }
          }
        }
      }
    }
    `,S=`
    <sw-switch class="mt-5 switch-accent" v-model:value="switch5">
      <div class="ml-2">Custom color</div>
    </sw-switch>

`,V=c(!1),j=c(!0),r=c(!0),D=c(!0),N=c(!0),h=c(!0),f=c(!0),g=c(!0),b=c(!0),_=c(!0),{popToast:z,isToastVisible:G}=ss(),E=c(""),M=c("success");function W(P){switch(console.log("Update:",P),P){case!0:M.value="success",E.value="Update to true";break;default:M.value="danger",E.value="Update to false"}z()}const F=[{prop:"v-model:value",description:"The reactive variable to bind with the widget",type:"boolean Ref",values:"true, false",default:"",required:!0},{prop:"big",description:"Size of the switch",type:"boolean",values:"true, false",default:"false",required:!1}],I=[{name:"@update:value",description:"Event emitted when the switch value changes",returnType:"boolean"}];return(P,t)=>(A(),R("div",null,[is,e(i(m),{label:"Switch",value:V.value,"onUpdate:value":t[0]||(t[0]=l=>V.value=l),class:"switch-primary"},null,8,["value"]),s("div",ns,[ds,s("code",null,C(V.value),1)]),s("div",{class:v([{"slide-y":!0,slideup:h.value===!0,slidedown:h.value===!1},"mt-4"])},[us,e(d,{code:U,lang:"html",class:"my-3"}),rs,e(d,{code:x,lang:"typescript",class:"mt-3"})],2),e(y,{class:"mt-3",collapse:h.value,onToggle:t[1]||(t[1]=l=>h.value=!h.value)},null,8,["collapse"]),e(k,{name:"style",class:"mt-12 mb-8 text-lg"},{default:n(()=>[vs]),_:1}),ms,e(i(m),{label:"Switch",value:j.value,"onUpdate:value":t[2]||(t[2]=l=>j.value=l),class:"switch-primary",big:""},null,8,["value"]),s("div",ps,[ws,s("code",null,C(j.value),1)]),s("div",{class:v([{"slide-y":!0,slideup:f.value===!0,slidedown:f.value===!1},"pt-5"])},[hs,e(d,{code:B,class:"my-3"}),fs,e(d,{code:u,lang:"typescript",class:"mt-3"})],2),e(y,{class:"mt-3",collapse:f.value,onToggle:t[3]||(t[3]=l=>f.value=!f.value)},null,8,["collapse"]),gs,s("div",bs,[e(i(m),{class:"switch-primary",value:r.value,"onUpdate:value":t[4]||(t[4]=l=>r.value=l)},{default:n(()=>[_s]),_:1},8,["value"]),e(i(m),{class:"switch-secondary",value:r.value,"onUpdate:value":t[5]||(t[5]=l=>r.value=l)},{default:n(()=>[ys]),_:1},8,["value"]),e(i(m),{class:"switch-danger",value:r.value,"onUpdate:value":t[6]||(t[6]=l=>r.value=l)},{default:n(()=>[xs]),_:1},8,["value"]),e(i(m),{class:"switch-warning",value:r.value,"onUpdate:value":t[7]||(t[7]=l=>r.value=l)},{default:n(()=>[Ts]),_:1},8,["value"])]),s("div",{class:v([{"slide-y":!0,slideup:g.value===!0,slidedown:g.value===!1},"pt-5"])},[e(d,{code:T,class:"my-3"})],2),e(y,{class:"mt-3",collapse:g.value,onToggle:t[8]||(t[8]=l=>g.value=!g.value)},null,8,["collapse"]),e(k,{name:"reactivity",class:"mt-12 mb-8 text-lg"},{default:n(()=>[Ss]),_:1}),Cs,s("div",ks,[e(i(m),{class:"inline-block align-middle switch-secondary",value:D.value,"onUpdate:value":[t[9]||(t[9]=l=>D.value=l),t[10]||(t[10]=l=>W(Boolean(l)))]},null,8,["value"]),e(i(es),{class:v(M.value),show:i(G)},{default:n(()=>[a(C(E.value),1)]),_:1},8,["class","show"]),s("div",Us,[Bs,s("code",null,C(D.value),1)])]),s("div",{class:v([{"slide-y":!0,slideup:b.value===!0,slidedown:b.value===!1},"pt-5"])},[e(d,{code:$,class:"my-3"}),$s,e(d,{code:w,lang:"typescript",class:"mt-3"})],2),e(y,{class:"mt-3",collapse:b.value,onToggle:t[11]||(t[11]=l=>b.value=!b.value)},null,8,["collapse"]),e(k,{name:"semantic-colors",class:"mt-12 mb-8 text-lg"},{default:n(()=>[Vs]),_:1}),js,e(d,{code:p,lang:"javascript",class:"mt-5"}),Ds,e(i(m),{class:"mt-5 switch-accent",value:N.value,"onUpdate:value":t[12]||(t[12]=l=>N.value=l)},{default:n(()=>[Es]),_:1},8,["value"]),s("div",{class:v([{"slide-y":!0,slideup:_.value===!0,slidedown:_.value===!1},"pt-5"])},[e(d,{code:S,class:"mt-3"})],2),e(y,{class:"mt-3",collapse:_.value,onToggle:t[13]||(t[13]=l=>_.value=!_.value)},null,8,["collapse"]),e(k,{name:"install",class:"mt-12 mb-8 text-lg"},{default:n(()=>[Ms]),_:1}),Ps,Ns,qs,As,Rs,zs,e(X,{tableData:F}),Gs,e(Y,{tableData:I}),e(Z,{class:"mt-24",prev:{link:"/sidebar",text:"Sidebar"},next:{link:"/stepper",text:"Progress stepper"}})]))}});export{Qs as default};
