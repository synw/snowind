import{d as S,l as j,q as i,B as N,o as g,c as y,a as l,z as E,C as P,n as h,j as U,r as w,e as t,t as k,f as n,m as M}from"./vendor.36fa6795.js";import{C as q}from"./CodeBlock.30bd7eb2.js";import{P as z}from"./PropsTable.35d41402.js";import{E as H}from"./EventsTable.de4087bc.js";import{N as L}from"./NextBar.1d2e5131.js";import{C as R}from"./CodeButton.febb167b.js";import{_ as W}from"./index.2876ec33.js";function A(){const e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var G=(e,s)=>{for(const[r,u]of s)e[r]=u;return e};const I=S({props:{checked:{type:Boolean,default:null},label:{type:String,default:null},big:{type:Boolean,default:!1},value:{type:Boolean,default:null}},emits:["update:value","change"],setup(e,{emit:s}){const{checked:r,value:u}=j(e),d=i(!1),v=A();function o(){s("change",d.value),s("update:value",d.value)}return N(()=>{if(u.value!==null){d.value=u.value;return}r.value!==null&&(d.value=r.value)}),{onChange:o,isChecked:d,sid:v}}}),F={class:"sw-switch"},J=["for"],K={class:"relative"},O=["id","checked"],Q=["innerHTML"];function X(e,s,r,u,d,v){return g(),y("div",F,[l("label",{for:"toggle"+e.sid,class:"flex items-center cursor-pointer"},[l("div",K,[E(l("input",{id:"toggle"+e.sid,type:"checkbox",class:"sr-only",checked:e.isChecked,"onUpdate:modelValue":s[0]||(s[0]=o=>e.isChecked=o),onChange:s[1]||(s[1]=o=>e.onChange())},null,40,O),[[P,e.isChecked]]),l("div",{class:h(["block rounded-full bg",{big:e.big===!0}])},null,2),l("div",{class:h(["absolute transition rounded-full dot left-1 top-1",{big:e.big===!0}])},null,2)]),e.label!==null?(g(),y("div",{key:0,class:"ml-3 font-medium",innerHTML:e.label},null,8,Q)):U("",!0)],8,J)])}var Y=G(I,[["render",X]]);const Z=S({components:{CodeBlock:q,PropsTable:z,EventsTable:H,SwSwitch:Y,NextBar:L,CodeButton:R},setup(){const e=`
      <sw-switch label="Switch" v-model:value="switch1" class="w-max"></sw-switch>
      <div class="mt-4">
        Value:
        <code>{{ switch1 }}</code>
      </div>
    `,s=`
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
      <sw-switch label="Switch" v-model:value="switch2" :checked="switch2" class="w-max" big></sw-switch>
    `,u=`
      setup() {
        const switch2 = ref(false);

        return  {
          switch2
        }
      }
    `,d=`
      <sw-switch label="Primary" class="primary" :checked="true"></sw-switch>
      <sw-switch label="Secondary" class="secondary" :checked="true"></sw-switch>
      <sw-switch label="Danger" class="danger" :checked="true"></sw-switch>
      <sw-switch label="Warning" class="warning" :checked="true"></sw-switch>
    `,v=`
    <sw-switch v-model:value="switch3" class="w-max"></sw-switch>
    `,o=`
    <sw-switch @change="onChangeSwitch($event)" class="w-max" :checked="false"></sw-switch>
    `,c=`
    setup() {
      function onChangeSwitch(val: boolean): void {
        console.log("Switch change to", val)
      }

      return {
        onChangeSwitch
      }
    }
    `,p=`
    npm install @snowind/switch
    # or
    yarn add @snowind/switch
    `,m=i(!1),b=i(!0),f=i(!1),a=i(!0),C=i(!0),$=i(!0),T=i(!0),B=i(!0),D=i(!0);function _(V){console.log("Switch change to",V)}return{switch1:m,switch2:b,switch3:f,switch3Checked:a,onChangeSwitch:_,code1:e,code2:s,code3:r,code4:u,code5:d,code6:v,code7:o,code8:c,code9:p,collapse:C,collapse2:$,collapse3:T,collapse4:B,collapse5:D,propsData:[{prop:"checked",description:"The initial state of the switch",type:"boolean",values:"true, false",default:"false",required:!1},{prop:"label",description:"A clickable text label",type:"string",values:"any string",default:"",required:!1},{prop:"big",description:"Size of the switch",type:"boolean",values:"true, false",default:"false",required:!1}],eventsData:[{name:"@change",description:"Event emitted when the switch value changes",returnType:"boolean"}]}}}),x=l("div",{class:"mb-8 text-2xl"},"Switch",-1),ee={class:"mt-4"},se=n(" Value: "),le=n(" Template: "),te=n("Script: "),oe=l("div",{class:"mt-12 mb-8 text-xl"},"Style",-1),ae=l("div",{class:"mb-5"},"Big",-1),ne={class:"mt-4"},ce=n(" Value: "),ie=n(" Template: "),de=n("Script: "),re=l("div",{class:"my-8"},"Color variants",-1),ue={class:"flex flex-row w-full space-x-3"},pe=l("div",{class:"mt-12 mb-8 text-xl"},"Reactivity",-1),he=l("div",{class:"mt-3"}," There are two ways of handling the switch selected value: using v-model and using the change event. ",-1),we=l("div",{class:"mt-3 mb-5"},[n(" Using "),l("code",{class:"variable"},"v-model"),n(" the initial value will be set from the linked variable: ")],-1),ve={class:"inline ml-2"},me=n(" v-model value: "),be=l("div",{class:"mt-8 mb-5"},[n(" Using the "),l("code",{class:"variable"},"change"),n(" event to retrieve values and the "),l("code",{class:"variable"},"checked"),n(" attribute to set the initial value: ")],-1),fe=n("Script: "),ge=M('<div class="mt-12 mb-8 text-xl">Install</div><code lang="bash">npm install @snowind/switch</code><br><code class="mt-3 text-neutral"># or</code><br><code class="mt-3">yarn add @snowind/switch</code><div class="mt-12 mb-8 text-xl">Props</div>',7),ye=l("div",{class:"mt-12 mb-8 text-xl"},"Events",-1);function ke(e,s,r,u,d,v){const o=w("sw-switch"),c=w("code-block"),p=w("code-button"),m=w("props-table"),b=w("events-table"),f=w("next-bar");return g(),y("div",null,[x,t(o,{label:"Switch",value:e.switch1,"onUpdate:value":s[0]||(s[0]=a=>e.switch1=a),class:"w-max"},null,8,["value"]),l("div",ee,[se,l("code",null,k(e.switch1),1)]),l("div",{class:h([{"slide-y":!0,slideup:e.collapse===!0,slidedown:e.collapse===!1},"mt-4"])},[le,t(c,{code:e.code1,lang:"html",class:"my-3"},null,8,["code"]),te,t(c,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse,onToggle:s[1]||(s[1]=a=>e.collapse=!e.collapse)},null,8,["collapse"]),oe,ae,t(o,{label:"Switch",value:e.switch2,"onUpdate:value":s[2]||(s[2]=a=>e.switch2=a),class:"w-max",big:""},null,8,["value"]),l("div",ne,[ce,l("code",null,k(e.switch2),1)]),l("div",{class:h([{"slide-y":!0,slideup:e.collapse2===!0,slidedown:e.collapse2===!1},"pt-5"])},[ie,t(c,{code:e.code3,class:"my-3"},null,8,["code"]),de,t(c,{code:e.code4,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse2,onToggle:s[3]||(s[3]=a=>e.collapse2=!e.collapse2)},null,8,["collapse"]),re,l("div",ue,[t(o,{label:"Primary",class:"primary",checked:!0}),t(o,{label:"Secondary",class:"secondary",checked:!0}),t(o,{label:"Danger",class:"danger",checked:!0}),t(o,{label:"Warning",class:"warning",checked:!0})]),l("div",{class:h([{"slide-y":!0,slideup:e.collapse3===!0,slidedown:e.collapse3===!1},"pt-5"])},[t(c,{code:e.code5,class:"my-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse3,onToggle:s[4]||(s[4]=a=>e.collapse3=!e.collapse3)},null,8,["collapse"]),pe,he,we,t(o,{value:e.switch3,"onUpdate:value":s[5]||(s[5]=a=>e.switch3=a),class:"inline-block align-middle w-max"},null,8,["value"]),l("div",ve,[me,l("code",null,k(e.switch3),1)]),l("div",{class:h([{"slide-y":!0,slideup:e.collapse4===!0,slidedown:e.collapse4===!1},"pt-5"])},[t(c,{code:e.code6,class:"my-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse4,onToggle:s[6]||(s[6]=a=>e.collapse4=!e.collapse4)},null,8,["collapse"]),be,t(o,{onChange:s[7]||(s[7]=a=>e.onChangeSwitch(a)),class:"w-max",checked:!1}),l("div",{class:h([{"slide-y":!0,slideup:e.collapse5===!0,slidedown:e.collapse5===!1},"pt-5"])},[t(c,{code:e.code7,class:"my-3"},null,8,["code"]),fe,t(c,{code:e.code8,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse5,onToggle:s[8]||(s[8]=a=>e.collapse5=!e.collapse5)},null,8,["collapse"]),ge,t(m,{tableData:e.propsData},null,8,["tableData"]),ye,t(b,{tableData:e.eventsData},null,8,["tableData"]),t(f,{class:"mt-24",prev:{link:"/sidebar",text:"Sidebar"},next:{link:"/state/screen",text:"Screen size"}})])}var Ne=W(Z,[["render",ke]]);export{Ne as default};
