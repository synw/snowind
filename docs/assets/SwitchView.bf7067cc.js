import{d as k,l as N,s as i,D as P,o as S,c as _,a as s,B as U,E as q,n as p,q as M,r as w,e as t,t as y,w as m,f as o,m as z}from"./vendor.6a66068f.js";import{C as A}from"./CodeBlock.cfd1c453.js";import{P as R}from"./PropsTable.bb7bb3aa.js";import{E as W}from"./EventsTable.9c9b35c6.js";import{_ as F,N as G}from"./NextBar.999c92da.js";import{C as H}from"./CodeButton.3bafc646.js";function I(){const e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var J=(e,l)=>{for(const[r,u]of l)e[r]=u;return e};const K=k({props:{checked:{type:Boolean,default:null},big:{type:Boolean,default:!1},value:{type:Boolean,default:null}},emits:["update:value","change"],setup(e,{emit:l}){const{checked:r,value:u}=N(e),d=i(!1),v=I();function a(){l("change",d.value),l("update:value",d.value)}return P(()=>{if(u.value!==null){d.value=u.value;return}r.value!==null&&(d.value=r.value)}),{onChange:a,isChecked:d,sid:v}}}),L={class:"inline-block sw-switch",style:{"background-color":"transparent",color:"inherit"}},O=["for"],Q={class:"relative"},X=["id","checked"];function Y(e,l,r,u,d,v){return S(),_("div",L,[s("label",{for:"toggle"+e.sid,class:"flex items-center cursor-pointer"},[s("div",Q,[U(s("input",{id:"toggle"+e.sid,type:"checkbox",class:"sr-only",checked:e.isChecked,"onUpdate:modelValue":l[0]||(l[0]=a=>e.isChecked=a),onChange:l[1]||(l[1]=a=>e.onChange())},null,40,X),[[q,e.isChecked]]),s("div",{class:p(["block rounded-full bg",{big:e.big===!0}])},null,2),s("div",{class:p(["absolute transition rounded-full dot left-1 top-1",{big:e.big===!0}])},null,2)]),M(e.$slots,"default")],8,O)])}var Z=J(K,[["render",Y]]);const x=k({components:{CodeBlock:A,PropsTable:R,EventsTable:W,SwSwitch:Z,NextBar:G,CodeButton:H},setup(){const e=`
      <sw-switch 
        label="Switch" 
        v-model:value="switch1"
        class="switch-primary">
      </sw-switch>
      <div class="mt-4">
        Value:
        <code>{{ switch1 }}</code>
      </div>
    `,l=`
    import SwSwitch from "@snowind/switch";
    
    export default defineComponent({
      components: {
        SwSwitch,
      },
      setup() {
        const switch1 = ref(false);

        return  {
          switch1
        }
      }
    });
    `,r=`
      <sw-switch
        label="Switch"
        v-model:value="switch2"
        :checked="switch2" 
        class="switch-primary" big>
      </sw-switch>
    `,u=`
      setup() {
        const switch2 = ref(false);

        return  {
          switch2
        }
      }
    `,d=`
      <sw-switch class="switch-primary" :checked="true">
        <div class="ml-2">Primary</div>
      </sw-switch>
      <sw-switch class="switch-secondary" :checked="true">
        <div class="ml-2">Secondary</div>
      </sw-switch>
      <sw-switch class="switch-danger" :checked="true">
        <div class="ml-2">Danger</div>
      </sw-switch>
      <sw-switch class="switch-warning" :checked="true">
        <div class="ml-2">Warning</div>
      </sw-switch>
    `,v=`
    <sw-switch v-model:value="switch3" class="switch-secondary"></sw-switch>
    `,a=`
    <sw-switch @change="onChangeSwitch($event)" class="switch-secondary" :checked="false"></sw-switch>
    `,n=`
    setup() {
      function onChangeSwitch(val: boolean): void {
        console.log("Switch change to", val)
      }

      return {
        onChangeSwitch
      }
    }
    `,h=`
    npm install @snowind/switch
    # or
    yarn add @snowind/switch
    `,f=`
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
    `,b=i(!1),g=i(!0),c=i(!1),C=i(!0),$=i(!0),T=i(!0),B=i(!0),D=i(!0),V=i(!0);function j(E){console.log("Switch change to",E)}return{switch1:b,switch2:g,switch3:c,switch3Checked:C,onChangeSwitch:j,code1:e,code2:l,code3:r,code4:u,code5:d,code6:v,code7:a,code8:n,code9:h,code10:f,collapse:$,collapse2:T,collapse3:B,collapse4:D,collapse5:V,propsData:[{prop:"checked",description:"The initial state of the switch",type:"boolean",values:"true, false",default:"false",required:!1},{prop:"label",description:"A clickable text label",type:"string",values:"any string",default:"",required:!1},{prop:"big",description:"Size of the switch",type:"boolean",values:"true, false",default:"false",required:!1}],eventsData:[{name:"@change",description:"Event emitted when the switch value changes",returnType:"boolean"}]}}}),ee=s("div",{class:"mb-8 text-2xl"},"Switch",-1),se={class:"mt-4"},le=o(" Value: "),te=o(" Template: "),oe=o("Script: "),ae=s("div",{class:"mt-12 mb-8 text-xl"},"Style",-1),ce=s("div",{class:"mb-5"},"Big",-1),ne={class:"mt-4"},ie=o(" Value: "),de=o(" Template: "),re=o("Script: "),ue=s("div",{class:"my-8"},"Color variants and clickable labels",-1),he={class:"flex flex-row w-full space-x-3"},pe=s("div",{class:"ml-2"},"Primary",-1),we=s("div",{class:"ml-2"},"Secondary",-1),ve=s("div",{class:"ml-2"},"Danger",-1),me=s("div",{class:"ml-2"},"Warning",-1),fe=s("div",{class:"mt-12 mb-8 text-xl"},"Reactivity",-1),be=s("div",{class:"mt-3"}," There are two ways of handling the switch selected value: using v-model and using the change event. ",-1),ge=s("div",{class:"mt-3 mb-5"},[o(" Using "),s("code",{class:"variable"},"v-model"),o(" the initial value will be set from the linked variable: ")],-1),ye={class:"inline ml-2"},ke=o(" v-model value: "),Se=s("div",{class:"mt-8 mb-5"},[o(" Using the "),s("code",{class:"variable"},"change"),o(" event to retrieve values and the "),s("code",{class:"variable"},"checked"),o(" attribute to set the initial value: ")],-1),_e=o("Script: "),Ce=s("div",{class:"mt-12 mb-8 text-xl"},"Semantic colors",-1),$e=s("div",{class:"mt-3"},[o(" A css class will be generated for each semantic color defined in the config, in the form of "),s("code",{class:"variable"},[s("span",null,"switch-"),s("i",null,"mycolorname")]),o(". For example if we have an "),s("code",{class:"variable"},"accent"),o(" color defined: ")],-1),Te=s("div",{class:"mt-5"},[o(" Then a "),s("code",{class:"variable"},"switch-accent"),o(" class will be available: ")],-1),Be=s("div",{class:"ml-2"},"Custom color",-1),De=z('<div class="mt-12 mb-8 text-xl">Install</div><code lang="bash">npm install @snowind/switch</code><br><code class="mt-3 text-neutral"># or</code><br><code class="mt-3">yarn add @snowind/switch</code><div class="mt-12 mb-8 text-xl">Props</div>',7),Ve=s("div",{class:"mt-12 mb-8 text-xl"},"Events",-1);function je(e,l,r,u,d,v){const a=w("sw-switch"),n=w("code-block"),h=w("code-button"),f=w("props-table"),b=w("events-table"),g=w("next-bar");return S(),_("div",null,[ee,t(a,{label:"Switch",value:e.switch1,"onUpdate:value":l[0]||(l[0]=c=>e.switch1=c),class:"switch-primary"},null,8,["value"]),s("div",se,[le,s("code",null,y(e.switch1),1)]),s("div",{class:p([{"slide-y":!0,slideup:e.collapse===!0,slidedown:e.collapse===!1},"mt-4"])},[te,t(n,{code:e.code1,lang:"html",class:"my-3"},null,8,["code"]),oe,t(n,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(h,{class:"mt-3",collapse:e.collapse,onToggle:l[1]||(l[1]=c=>e.collapse=!e.collapse)},null,8,["collapse"]),ae,ce,t(a,{label:"Switch",value:e.switch2,"onUpdate:value":l[2]||(l[2]=c=>e.switch2=c),class:"switch-primary",big:""},null,8,["value"]),s("div",ne,[ie,s("code",null,y(e.switch2),1)]),s("div",{class:p([{"slide-y":!0,slideup:e.collapse2===!0,slidedown:e.collapse2===!1},"pt-5"])},[de,t(n,{code:e.code3,class:"my-3"},null,8,["code"]),re,t(n,{code:e.code4,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(h,{class:"mt-3",collapse:e.collapse2,onToggle:l[3]||(l[3]=c=>e.collapse2=!e.collapse2)},null,8,["collapse"]),ue,s("div",he,[t(a,{class:"switch-primary",checked:!0},{default:m(()=>[pe]),_:1}),t(a,{class:"switch-secondary",checked:!0},{default:m(()=>[we]),_:1}),t(a,{class:"switch-danger",checked:!0},{default:m(()=>[ve]),_:1}),t(a,{class:"switch-warning",checked:!0},{default:m(()=>[me]),_:1})]),s("div",{class:p([{"slide-y":!0,slideup:e.collapse3===!0,slidedown:e.collapse3===!1},"pt-5"])},[t(n,{code:e.code5,class:"my-3"},null,8,["code"])],2),t(h,{class:"mt-3",collapse:e.collapse3,onToggle:l[4]||(l[4]=c=>e.collapse3=!e.collapse3)},null,8,["collapse"]),fe,be,ge,t(a,{value:e.switch3,"onUpdate:value":l[5]||(l[5]=c=>e.switch3=c),class:"inline-block align-middle switch-secondary"},null,8,["value"]),s("div",ye,[ke,s("code",null,y(e.switch3),1)]),s("div",{class:p([{"slide-y":!0,slideup:e.collapse4===!0,slidedown:e.collapse4===!1},"pt-5"])},[t(n,{code:e.code6,class:"my-3"},null,8,["code"])],2),t(h,{class:"mt-3",collapse:e.collapse4,onToggle:l[6]||(l[6]=c=>e.collapse4=!e.collapse4)},null,8,["collapse"]),Se,t(a,{onChange:l[7]||(l[7]=c=>e.onChangeSwitch(c)),class:"switch-secondary",checked:!1}),s("div",{class:p([{"slide-y":!0,slideup:e.collapse5===!0,slidedown:e.collapse5===!1},"pt-5"])},[t(n,{code:e.code7,class:"my-3"},null,8,["code"]),_e,t(n,{code:e.code8,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(h,{class:"mt-3",collapse:e.collapse5,onToggle:l[8]||(l[8]=c=>e.collapse5=!e.collapse5)},null,8,["collapse"]),Ce,$e,t(n,{code:e.code10,lang:"javascript",class:"mt-5"},null,8,["code"]),Te,t(a,{class:"mt-5 switch-accent",checked:!0},{default:m(()=>[Be]),_:1}),De,t(f,{tableData:e.propsData},null,8,["tableData"]),Ve,t(b,{tableData:e.eventsData},null,8,["tableData"]),t(g,{class:"mt-24",prev:{link:"/sidebar",text:"Sidebar"},next:{link:"/header",text:"Header"}})])}var Re=F(x,[["render",je]]);export{Re as default};
