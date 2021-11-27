import{d as y,l as E,q as i,D as N,o as S,c as C,a as s,B as P,E as U,n as h,s as q,r as v,e as t,t as k,w as m,f as n,m as z}from"./vendor.ba3950ab.js";import{C as M}from"./CodeBlock.ffc5ebb7.js";import{P as R}from"./PropsTable.3f7e19eb.js";import{E as W}from"./EventsTable.82a3381c.js";import{N as A}from"./NextBar.97f99761.js";import{C as G}from"./CodeButton.987e368a.js";import{_ as I}from"./index.59f06184.js";function F(){const e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}var H=(e,l)=>{for(const[r,u]of l)e[r]=u;return e};const J=y({props:{checked:{type:Boolean,default:null},big:{type:Boolean,default:!1},value:{type:Boolean,default:null}},emits:["update:value","change"],setup(e,{emit:l}){const{checked:r,value:u}=E(e),d=i(!1),w=F();function o(){l("change",d.value),l("update:value",d.value)}return N(()=>{if(u.value!==null){d.value=u.value;return}r.value!==null&&(d.value=r.value)}),{onChange:o,isChecked:d,sid:w}}}),K={class:"inline-block sw-switch",style:{"background-color":"transparent",color:"inherit"}},L=["for"],O={class:"relative"},Q=["id","checked"];function X(e,l,r,u,d,w){return S(),C("div",K,[s("label",{for:"toggle"+e.sid,class:"flex items-center cursor-pointer"},[s("div",O,[P(s("input",{id:"toggle"+e.sid,type:"checkbox",class:"sr-only",checked:e.isChecked,"onUpdate:modelValue":l[0]||(l[0]=o=>e.isChecked=o),onChange:l[1]||(l[1]=o=>e.onChange())},null,40,Q),[[U,e.isChecked]]),s("div",{class:h(["block rounded-full bg",{big:e.big===!0}])},null,2),s("div",{class:h(["absolute transition rounded-full dot left-1 top-1",{big:e.big===!0}])},null,2)]),q(e.$slots,"default")],8,L)])}var Y=H(J,[["render",X]]);const Z=y({components:{CodeBlock:M,PropsTable:R,EventsTable:W,SwSwitch:Y,NextBar:A,CodeButton:G},setup(){const e=`
      <sw-switch label="Switch" v-model:value="switch1" class="w-max"></sw-switch>
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
      <sw-switch label="Switch" v-model:value="switch2" :checked="switch2" class="w-max" big></sw-switch>
    `,u=`
      setup() {
        const switch2 = ref(false);

        return  {
          switch2
        }
      }
    `,d=`
      <sw-switch class="primary" :checked="true">
        <div class="ml-2">Primary</div>
      </sw-switch>
      <sw-switch class="secondary" :checked="true">
        <div class="ml-2">Secondary</div>
      </sw-switch>
      <sw-switch class="danger" :checked="true">
        <div class="ml-2">Danger</div>
      </sw-switch>
      <sw-switch class="warning" :checked="true">
        <div class="ml-2">Warning</div>
      </sw-switch>
    `,w=`
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
    `,f=i(!1),b=i(!0),g=i(!1),a=i(!0),_=i(!0),$=i(!0),B=i(!0),D=i(!0),T=i(!0);function V(j){console.log("Switch change to",j)}return{switch1:f,switch2:b,switch3:g,switch3Checked:a,onChangeSwitch:V,code1:e,code2:l,code3:r,code4:u,code5:d,code6:w,code7:o,code8:c,code9:p,collapse:_,collapse2:$,collapse3:B,collapse4:D,collapse5:T,propsData:[{prop:"checked",description:"The initial state of the switch",type:"boolean",values:"true, false",default:"false",required:!1},{prop:"label",description:"A clickable text label",type:"string",values:"any string",default:"",required:!1},{prop:"big",description:"Size of the switch",type:"boolean",values:"true, false",default:"false",required:!1}],eventsData:[{name:"@change",description:"Event emitted when the switch value changes",returnType:"boolean"}]}}}),x=s("div",{class:"mb-8 text-2xl"},"Switch",-1),ee={class:"mt-4"},se=n(" Value: "),le=n(" Template: "),te=n("Script: "),oe=s("div",{class:"mt-12 mb-8 text-xl"},"Style",-1),ae=s("div",{class:"mb-5"},"Big",-1),ne={class:"mt-4"},ce=n(" Value: "),ie=n(" Template: "),de=n("Script: "),re=s("div",{class:"my-8"},"Color variants and clickable labels",-1),ue={class:"flex flex-row w-full space-x-3"},pe=s("div",{class:"ml-2"},"Primary",-1),he=s("div",{class:"ml-2"},"Secondary",-1),ve=s("div",{class:"ml-2"},"Danger",-1),we=s("div",{class:"ml-2"},"Warning",-1),me=s("div",{class:"mt-12 mb-8 text-xl"},"Reactivity",-1),fe=s("div",{class:"mt-3"}," There are two ways of handling the switch selected value: using v-model and using the change event. ",-1),be=s("div",{class:"mt-3 mb-5"},[n(" Using "),s("code",{class:"variable"},"v-model"),n(" the initial value will be set from the linked variable: ")],-1),ge={class:"inline ml-2"},ke=n(" v-model value: "),ye=s("div",{class:"mt-8 mb-5"},[n(" Using the "),s("code",{class:"variable"},"change"),n(" event to retrieve values and the "),s("code",{class:"variable"},"checked"),n(" attribute to set the initial value: ")],-1),Se=n("Script: "),Ce=z('<div class="mt-12 mb-8 text-xl">Install</div><code lang="bash">npm install @snowind/switch</code><br><code class="mt-3 text-neutral"># or</code><br><code class="mt-3">yarn add @snowind/switch</code><div class="mt-12 mb-8 text-xl">Props</div>',7),_e=s("div",{class:"mt-12 mb-8 text-xl"},"Events",-1);function $e(e,l,r,u,d,w){const o=v("sw-switch"),c=v("code-block"),p=v("code-button"),f=v("props-table"),b=v("events-table"),g=v("next-bar");return S(),C("div",null,[x,t(o,{label:"Switch",value:e.switch1,"onUpdate:value":l[0]||(l[0]=a=>e.switch1=a),class:"w-max"},null,8,["value"]),s("div",ee,[se,s("code",null,k(e.switch1),1)]),s("div",{class:h([{"slide-y":!0,slideup:e.collapse===!0,slidedown:e.collapse===!1},"mt-4"])},[le,t(c,{code:e.code1,lang:"html",class:"my-3"},null,8,["code"]),te,t(c,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse,onToggle:l[1]||(l[1]=a=>e.collapse=!e.collapse)},null,8,["collapse"]),oe,ae,t(o,{label:"Switch",value:e.switch2,"onUpdate:value":l[2]||(l[2]=a=>e.switch2=a),class:"w-max",big:""},null,8,["value"]),s("div",ne,[ce,s("code",null,k(e.switch2),1)]),s("div",{class:h([{"slide-y":!0,slideup:e.collapse2===!0,slidedown:e.collapse2===!1},"pt-5"])},[ie,t(c,{code:e.code3,class:"my-3"},null,8,["code"]),de,t(c,{code:e.code4,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse2,onToggle:l[3]||(l[3]=a=>e.collapse2=!e.collapse2)},null,8,["collapse"]),re,s("div",ue,[t(o,{class:"primary",checked:!0},{default:m(()=>[pe]),_:1}),t(o,{class:"secondary",checked:!0},{default:m(()=>[he]),_:1}),t(o,{class:"danger",checked:!0},{default:m(()=>[ve]),_:1}),t(o,{class:"warning",checked:!0},{default:m(()=>[we]),_:1})]),s("div",{class:h([{"slide-y":!0,slideup:e.collapse3===!0,slidedown:e.collapse3===!1},"pt-5"])},[t(c,{code:e.code5,class:"my-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse3,onToggle:l[4]||(l[4]=a=>e.collapse3=!e.collapse3)},null,8,["collapse"]),me,fe,be,t(o,{value:e.switch3,"onUpdate:value":l[5]||(l[5]=a=>e.switch3=a),class:"inline-block align-middle w-max"},null,8,["value"]),s("div",ge,[ke,s("code",null,k(e.switch3),1)]),s("div",{class:h([{"slide-y":!0,slideup:e.collapse4===!0,slidedown:e.collapse4===!1},"pt-5"])},[t(c,{code:e.code6,class:"my-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse4,onToggle:l[6]||(l[6]=a=>e.collapse4=!e.collapse4)},null,8,["collapse"]),ye,t(o,{onChange:l[7]||(l[7]=a=>e.onChangeSwitch(a)),class:"w-max",checked:!1}),s("div",{class:h([{"slide-y":!0,slideup:e.collapse5===!0,slidedown:e.collapse5===!1},"pt-5"])},[t(c,{code:e.code7,class:"my-3"},null,8,["code"]),Se,t(c,{code:e.code8,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse5,onToggle:l[8]||(l[8]=a=>e.collapse5=!e.collapse5)},null,8,["collapse"]),Ce,t(f,{tableData:e.propsData},null,8,["tableData"]),_e,t(b,{tableData:e.eventsData},null,8,["tableData"]),t(g,{class:"mt-24",prev:{link:"/sidebar",text:"Sidebar"},next:{link:"/state/screen",text:"Screen size"}})])}var qe=I(Z,[["render",$e]]);export{qe as default};
