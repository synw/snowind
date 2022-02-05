import{C as f}from"./CodeBlock.75e3803d.js";import{S as w}from"./input.es.2500a53a.js";import{C as h}from"./CodeButton.b60baf0a.js";import{_ as b,N as D}from"./NextBar.999c92da.js";import{d as _,s as k,A as $,r as n,o as u,c as m,a as o,e as t,n as V,F as g,f as d,m as U}from"./vendor.6a66068f.js";import{P as S}from"./PropsTable.bb7bb3aa.js";import{E}from"./EventsTable.9c9b35c6.js";const j=_({components:{CodeBlock:f,SwInput:w,CodeButton:h},setup(){const e=k(!0);return{form:$({name:{val:"",isValid:null,validator:l=>l.length===0?null:l.length>=3}}),code1:`
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
            @apply border-secondary dark:border-secondary-dark
          &.invalid
            @apply bg-danger dark:bg-danger-dark text-danger-r dark:text-danger-r-dark
          &.valid
            @apply border-success dark:border-success-dark text-success dark:text-success-dark
    </style>
    `,collapse:e}}}),N=o("div",{class:"mb-5"},"The validation state can be customized with css:",-1),L={id:"form3"};function P(e,a,c,v,l,y){const i=n("sw-input"),r=n("code-block"),p=n("code-button");return u(),m(g,null,[N,o("div",L,[t(i,{value:e.form.name.val,"onUpdate:value":a[0]||(a[0]=s=>e.form.name.val=s),isvalid:e.form.name.isValid,"onUpdate:isvalid":a[1]||(a[1]=s=>e.form.name.isValid=s),validator:e.form.name.validator,placeholder:"username"},null,8,["value","isvalid","validator"])]),o("div",{class:V([{"slide-y":!0,slideup:e.collapse===!0,slidedown:e.collapse===!1},"mt-4"])},[t(r,{code:e.code1,class:"mb-3"},null,8,["code"]),t(r,{code:e.code2,lang:"html",class:"mb-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse,onToggle:a[2]||(a[2]=s=>e.collapse=!e.collapse)},null,8,["collapse"])],64)}var T=b(j,[["render",P]]);const x=_({components:{CodeBlock:f,SwInput:w,CodeButton:h},setup(){const e=k(!0);return{form:$({name:{val:"",isValid:null,validator:l=>l.length>=3},password:{val:"",isValid:!1,validator:l=>l.length>=6}}),code1:`
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
    `,collapse:e}}}),z={id:"form2"},A=d(" Template: "),F=d("Script: ");function O(e,a,c,v,l,y){const i=n("sw-input"),r=n("code-block"),p=n("code-button");return u(),m(g,null,[o("div",z,[t(i,{value:e.form.name.val,"onUpdate:value":a[0]||(a[0]=s=>e.form.name.val=s),isvalid:e.form.name.isValid,"onUpdate:isvalid":a[1]||(a[1]=s=>e.form.name.isValid=s),validator:e.form.name.validator,inlineLabel:"Username"},null,8,["value","isvalid","validator"]),t(i,{class:"mt-5",value:e.form.password.val,"onUpdate:value":a[2]||(a[2]=s=>e.form.password.val=s),isvalid:e.form.password.isValid,"onUpdate:isvalid":a[3]||(a[3]=s=>e.form.password.isValid=s),validator:e.form.password.validator,inlineLabel:"Password",type:"password"},null,8,["value","isvalid","validator"])]),o("div",{class:V([{"slide-y":!0,slideup:e.collapse===!0,slidedown:e.collapse===!1},"mt-4"])},[A,t(r,{code:e.code1,class:"mb-3"},null,8,["code"]),F,t(r,{code:e.code2,lang:"typescript"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse,onToggle:a[4]||(a[4]=s=>e.collapse=!e.collapse)},null,8,["collapse"])],64)}var I=b(x,[["render",O]]);const H=_({components:{CodeBlock:f,SwInput:w,CodeButton:h},setup(){const e=k(!0);return{form:$({name:{val:"",isValid:null,validator:l=>l.length>2}}),code1:`
      <sw-input
        id="username"
        v-model:value="form.name.val"
        v-model:isvalid="form.name.isValid"
        :validator="form.name.validator"
        placeholder="username"
        required>
      </sw-input>
      <div class="mt-3 text-sm">
        <div v-if="form.name.isValid === true" class="text-success dark:text-success-dark">Ok</div>
        <div
          v-else-if="form.name.isValid === false"
          class="text-danger dark:text-danger-dark"
        >Type 3 characters minimum</div>
        <div v-else class="text-neutral dark:text-neutral-dark">Type a username</div>
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
    `,collapse:e}}}),M={id:"form"},W={class:"mt-3 text-sm"},G={key:0,class:"text-success dark:text-success-dark"},J={key:1,class:"text-danger dark:text-danger-dark"},K={key:2,class:"text-neutral dark:text-neutral-dark"},Q=d(" Template: "),R=d("Script: "),X=o("div",{class:"mt-5"},[d(" The input field has a tristate: "),o("code",{class:"variable"},"null"),d(" : nothing has been edited, "),o("code",{class:"variable"},"false"),d(": invalid input and "),o("code",{class:"variable"},"true"),d(": valid input ")],-1);function Y(e,a,c,v,l,y){const i=n("sw-input"),r=n("code-block"),p=n("code-button");return u(),m(g,null,[o("div",M,[t(i,{id:"form-username",value:e.form.name.val,"onUpdate:value":a[0]||(a[0]=s=>e.form.name.val=s),isvalid:e.form.name.isValid,"onUpdate:isvalid":a[1]||(a[1]=s=>e.form.name.isValid=s),validator:e.form.name.validator,placeholder:"username",required:""},null,8,["value","isvalid","validator"]),o("div",W,[e.form.name.isValid===!0?(u(),m("div",G,"Ok")):e.form.name.isValid===!1?(u(),m("div",J,"Type 3 characters minimum")):(u(),m("div",K,"Type a username"))])]),o("div",{class:V([{"slide-y":!0,slideup:e.collapse===!0,slidedown:e.collapse===!1},"mt-4"])},[Q,t(r,{code:e.code1,class:"my-3"},null,8,["code"]),R,t(r,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(p,{class:"mt-3",collapse:e.collapse,onToggle:a[2]||(a[2]=s=>e.collapse=!e.collapse)},null,8,["collapse"]),X],64)}var q=b(H,[["render",Y]]);const Z=_({components:{InputA:q,InputB:I,InputC:T,NextBar:D,CodeBlock:f,PropsTable:S,EventsTable:E},setup(){return{propsData:[{prop:"id",description:"The id of the widget, it will be autogenerated if not provided",type:"string",values:"any string",default:"",required:!1},{prop:"v-model:value",description:"The initial value of the input",type:"string",values:"any string",default:"",required:!1},{prop:"v-model:isvalid",description:"The validity property of the input",type:"boolean or null",values:"false, true or null",default:"null",required:!1},{prop:"type",description:"The input type",type:"string",values:'<a class="underline" href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input">standard input types</a>',default:"text",required:!1},{prop:"validator",description:"The validator function",type:"<pre>(value: T) => boolean</pre>",values:"a validator function",default:"",required:!1},{prop:"placeholder",description:"The placeholder text",type:"string",values:"any string",default:"",required:!1},{prop:"inlineLabel",description:"The inline label for inline input",type:"string",values:"any string",default:"",required:!1},{prop:"required",description:"The html required attribute",type:"boolean",values:"true, false",default:"false",required:!1}],eventsData:[{name:"update:value",description:"Event emitted when the input value changes",returnType:"string"},{name:"update:isvalid",description:"Event emitted when the input value becomes valid",returnType:"boolean"}]}}}),ee=o("div",{class:"mb-8 text-2xl"},"Input",-1),ae=o("div",{class:"mb-5"},"Input form control with validation:",-1),se=o("div",{class:"mt-12 mb-8 text-xl"},"Inline label",-1),te=o("div",{class:"mt-12 mb-8 text-xl"},"Style",-1),oe=U('<div class="mt-12 mb-8 text-xl">Install</div><code lang="bash">npm install @snowind/input</code><br><code class="mt-3 text-neutral"># or</code><br><code class="mt-3">yarn add @snowind/input</code><div class="mt-12 mb-8 text-xl">Props</div>',7),le=o("div",{class:"mt-12 mb-8 text-xl"},"Events",-1);function ne(e,a,c,v,l,y){const i=q,r=I,p=T,s=n("props-table"),C=n("events-table"),B=n("next-bar");return u(),m(g,null,[ee,ae,t(i),se,t(r),te,t(p),oe,t(s,{tableData:e.propsData},null,8,["tableData"]),le,t(C,{tableData:e.eventsData},null,8,["tableData"]),t(B,{class:"mt-24",prev:{link:"/collapse",text:"Collapse"},next:{link:"/sidebar",text:"Sidebar"}})],64)}var ve=b(Z,[["render",ne]]);export{ve as default};
