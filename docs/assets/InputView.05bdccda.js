import{C as f}from"./CodeBlock.cfd1c453.js";import{S as h}from"./input.es.2500a53a.js";import{C as w}from"./CodeButton.3bafc646.js";import{_ as b,N as D}from"./NextBar.999c92da.js";import{d as _,s as $,A as V,r as n,o as u,c as m,a as l,e as s,n as T,F as g,f as d,m as U}from"./vendor.6a66068f.js";import{P as S}from"./PropsTable.bb7bb3aa.js";import{E}from"./EventsTable.9c9b35c6.js";const j=_({components:{CodeBlock:f,SwInput:h,CodeButton:w},setup(){const e=$(!0);return{form:V({name:{val:"",isValid:null,validator:t=>t.length===0?null:t.length>=3}}),code1:`
    <div id="form">
      <sw-input
        v-model:value="form.name.val"
        v-model:isvalid="form.name.isValid"
        :validator="form.name.validator"
        placeholder="username">
      </sw-input>
    </div>
    `,code2:`
    <style lang="sass">
      #form
        & input
          @apply ring-0 dark:bg-transparent border-b border-t-0 border-l-0 border-r-0 w-40
          &.neutral
            @apply bord-secondary
          &.invalid
            @apply danger
          &.valid
            @apply bord-success txt-success
    </style>
    `,collapse:e}}}),N=l("div",{class:"mb-5"},"The validation state can be customized with css:",-1),L={id:"form3"};function P(e,a,c,v,t,y){const r=n("sw-input"),i=n("code-block"),p=n("code-button");return u(),m(g,null,[N,l("div",L,[s(r,{value:e.form.name.val,"onUpdate:value":a[0]||(a[0]=o=>e.form.name.val=o),isvalid:e.form.name.isValid,"onUpdate:isvalid":a[1]||(a[1]=o=>e.form.name.isValid=o),validator:e.form.name.validator,placeholder:"username"},null,8,["value","isvalid","validator"])]),l("div",{class:T([{"slide-y":!0,slideup:e.collapse===!0,slidedown:e.collapse===!1},"mt-4"])},[s(i,{code:e.code1,class:"mb-3"},null,8,["code"]),s(i,{code:e.code2,lang:"html",class:"mb-3"},null,8,["code"])],2),s(p,{class:"mt-3",collapse:e.collapse,onToggle:a[2]||(a[2]=o=>e.collapse=!e.collapse)},null,8,["collapse"])],64)}var k=b(j,[["render",P]]);const z=_({components:{CodeBlock:f,SwInput:h,CodeButton:w},setup(){const e=$(!0);return{form:V({name:{val:"",isValid:null,validator:t=>t.length>=3},password:{val:"",isValid:!1,validator:t=>t.length>=6}}),code1:`
    <sw-input
      v-model:value="form.name.val"
      v-model:isvalid="form.name.isValid"
      :validator="form.name.validator"
      inlineLabel="Username">
    </sw-input>
    <sw-input
      class="mt-5"
      v-model:value="form.password.val"
      v-model:isvalid="form.password.isValid"
      :validator="form.password.validator"
      inlineLabel="Password"
      type="password">
    </sw-input>
    `,code2:`
    setup() {
      const form = reactive({
        name: {
          val: "",
          isValid: null,
          validator: (v: string) => v.length >= 3
        },
        password: {
          val: "",
          isValid: false,
          validator: (v: string) => v.length >= 6
        },
      });

      return {
        form,
      }
    }
    `,collapse:e}}}),A={id:"form2"},F=d(" Template: "),O=d("Script: ");function H(e,a,c,v,t,y){const r=n("sw-input"),i=n("code-block"),p=n("code-button");return u(),m(g,null,[l("div",A,[s(r,{value:e.form.name.val,"onUpdate:value":a[0]||(a[0]=o=>e.form.name.val=o),isvalid:e.form.name.isValid,"onUpdate:isvalid":a[1]||(a[1]=o=>e.form.name.isValid=o),validator:e.form.name.validator,inlineLabel:"Username"},null,8,["value","isvalid","validator"]),s(r,{class:"mt-5",value:e.form.password.val,"onUpdate:value":a[2]||(a[2]=o=>e.form.password.val=o),isvalid:e.form.password.isValid,"onUpdate:isvalid":a[3]||(a[3]=o=>e.form.password.isValid=o),validator:e.form.password.validator,inlineLabel:"Password",type:"password"},null,8,["value","isvalid","validator"])]),l("div",{class:T([{"slide-y":!0,slideup:e.collapse===!0,slidedown:e.collapse===!1},"mt-4"])},[F,s(i,{code:e.code1,class:"mb-3"},null,8,["code"]),O,s(i,{code:e.code2,lang:"typescript"},null,8,["code"])],2),s(p,{class:"mt-3",collapse:e.collapse,onToggle:a[4]||(a[4]=o=>e.collapse=!e.collapse)},null,8,["collapse"])],64)}var I=b(z,[["render",H]]);const M=_({components:{CodeBlock:f,SwInput:h,CodeButton:w},setup(){const e=$(!0);return{form:V({name:{val:"",isValid:null,validator:t=>t.length>2}}),code1:`
      <sw-input
        id="username"
        v-model:value="form.name.val"
        v-model:isvalid="form.name.isValid"
        :validator="form.name.validator"
        placeholder="username"
        required>
      </sw-input>
      <div class="mt-3 text-sm">
        <div v-if="form.name.isValid === true" class="txt-success">Ok</div>
        <div
          v-else-if="form.name.isValid === false"
          class="txt-danger"
        >Type 3 characters minimum</div>
        <div v-else class="txt-light">Type a username</div>
      </div>
    `,code2:`
      import SwInput from "@snowind/input";
      
      components: {
        SwInput
      },
      setup() {
        const form = reactive({
          name: {
            val: "",
            isValid: null,
            validator: (v: string) => v.length > 2
          }
        });

        return {
          form
        }
      }
    `,collapse:e}}}),W={id:"form"},G={class:"mt-3 text-sm"},J={key:0,class:"txt-success"},K={key:1,class:"txt-danger"},Q={key:2,class:"txt-light"},R=d(" Template: "),X=d("Script: "),Y=l("div",{class:"mt-5"},[d(" The input field has a tristate: "),l("code",{class:"variable"},"null"),d(" : nothing has been edited, "),l("code",{class:"variable"},"false"),d(": invalid input and "),l("code",{class:"variable"},"true"),d(": valid input ")],-1);function Z(e,a,c,v,t,y){const r=n("sw-input"),i=n("code-block"),p=n("code-button");return u(),m(g,null,[l("div",W,[s(r,{id:"form-username",value:e.form.name.val,"onUpdate:value":a[0]||(a[0]=o=>e.form.name.val=o),isvalid:e.form.name.isValid,"onUpdate:isvalid":a[1]||(a[1]=o=>e.form.name.isValid=o),validator:e.form.name.validator,placeholder:"username",required:""},null,8,["value","isvalid","validator"]),l("div",G,[e.form.name.isValid===!0?(u(),m("div",J,"Ok")):e.form.name.isValid===!1?(u(),m("div",K,"Type 3 characters minimum")):(u(),m("div",Q,"Type a username"))])]),l("div",{class:T([{"slide-y":!0,slideup:e.collapse===!0,slidedown:e.collapse===!1},"mt-4 border-gray-100"])},[R,s(i,{code:e.code1,class:"my-3"},null,8,["code"]),X,s(i,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),s(p,{class:"mt-3",collapse:e.collapse,onToggle:a[2]||(a[2]=o=>e.collapse=!e.collapse)},null,8,["collapse"]),Y],64)}var q=b(M,[["render",Z]]);const x=_({components:{InputA:q,InputB:I,InputC:k,NextBar:D,CodeBlock:f,PropsTable:S,EventsTable:E},setup(){return{propsData:[{prop:"id",description:"The id of the widget, it will be autogenerated if not provided",type:"string",values:"any string",default:"",required:!1},{prop:"v-model:value",description:"The initial value of the input",type:"string",values:"any string",default:"",required:!1},{prop:"v-model:isvalid",description:"The validity property of the input",type:"boolean or null",values:"false, true or null",default:"null",required:!1},{prop:"type",description:"The input type",type:"string",values:'<a class="underline" href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input">standard input types</a>',default:"text",required:!1},{prop:"validator",description:"The validator function",type:"<pre>(value: T) => boolean</pre>",values:"a validator function",default:"",required:!1},{prop:"placeholder",description:"The placeholder text",type:"string",values:"any string",default:"",required:!1},{prop:"inlineLabel",description:"The inline label for inline input",type:"string",values:"any string",default:"",required:!1},{prop:"required",description:"The html required attribute",type:"boolean",values:"true, false",default:"false",required:!1}],eventsData:[{name:"update:value",description:"Event emitted when the input value changes",returnType:"string"},{name:"update:isvalid",description:"Event emitted when the input value becomes valid",returnType:"boolean"}]}}}),ee=l("div",{class:"mb-8 text-2xl"},"Input",-1),ae=l("div",{class:"mb-5"},"Input form control with validation:",-1),oe=l("div",{class:"mt-12 mb-8 text-xl"},"Inline label",-1),se=l("div",{class:"mt-12 mb-8 text-xl"},"Style",-1),le=U('<div class="mt-12 mb-8 text-xl">Install</div><code lang="bash">npm install @snowind/input</code><br><code class="mt-3 txt-light"># or</code><br><code class="mt-3">yarn add @snowind/input</code><div class="mt-12 mb-8 text-xl">Props</div>',7),te=l("div",{class:"mt-12 mb-8 text-xl"},"Events",-1);function ne(e,a,c,v,t,y){const r=q,i=I,p=k,o=n("props-table"),C=n("events-table"),B=n("next-bar");return u(),m(g,null,[ee,ae,s(r),oe,s(i),se,s(p),le,s(o,{tableData:e.propsData},null,8,["tableData"]),te,s(C,{tableData:e.eventsData},null,8,["tableData"]),s(B,{class:"mt-24",prev:{link:"/collapse",text:"Collapse"},next:{link:"/sidebar",text:"Sidebar"}})],64)}var ve=b(x,[["render",ne]]);export{ve as default};
