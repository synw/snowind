import{C as m}from"./CodeBlock.d68e9033.js";import{S as c}from"./input.es.41658006.js";import{C as g}from"./CodeButton.5d388d15.js";import{d as f,q as y,A as h,o as r,c as v,a as n,b as s,u as a,n as w,F as _,f as d,l as x}from"./vendor.48cc1c7c.js";import{N as T}from"./NextBar.40b4edc2.js";import{P as V}from"./PropsTable.3a7f4565.js";import{E as $}from"./EventsTable.e41a87ea.js";const q={id:"form"},k={class:"mt-3 text-sm"},B={key:0,class:"txt-success"},C={key:1,class:"txt-danger"},I={key:2,class:"txt-light"},U=d(" Template: "),E=d("Script: "),S=n("div",{class:"mt-5"},[d(" The input field has a tristate: "),n("code",{class:"variable"},"null"),d(" : nothing has been edited, "),n("code",{class:"variable"},"false"),d(": invalid input and "),n("code",{class:"variable"},"true"),d(": valid input ")],-1),j=f({setup(b){const t=y(!0),e=h({name:{val:"",isValid:null,validator:o=>o.length>2}}),u=`
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
    `,p=`
      import SwInput from "@snowind/input";
      
      const form = reactive({
        name: {
          val: "",
          isValid: null,
          validator: (v: string) => v.length > 2
        }
      });
    `;return(o,l)=>(r(),v(_,null,[n("div",q,[s(a(c),{id:"form-username",value:a(e).name.val,"onUpdate:value":l[0]||(l[0]=i=>a(e).name.val=i),isvalid:a(e).name.isValid,"onUpdate:isvalid":l[1]||(l[1]=i=>a(e).name.isValid=i),validator:a(e).name.validator,placeholder:"username",required:""},null,8,["value","isvalid","validator"]),n("div",k,[a(e).name.isValid===!0?(r(),v("div",B,"Ok")):a(e).name.isValid===!1?(r(),v("div",C,"Type 3 characters minimum")):(r(),v("div",I,"Type a username"))])]),n("div",{class:w([{"slide-y":!0,slideup:t.value===!0,slidedown:t.value===!1},"mt-4 border-gray-100"])},[U,s(m,{code:u,class:"my-3"}),E,s(m,{code:p,lang:"typescript",class:"mt-3"})],2),s(g,{class:"mt-3",collapse:t.value,onToggle:l[2]||(l[2]=i=>t.value=!t.value)},null,8,["collapse"]),S],64))}});const N={id:"form2"},L=d(" Template: "),P=d("Script: "),D=f({setup(b){const t=y(!0),e=h({name:{val:"",isValid:null,validator:o=>o.length>=3},password:{val:"",isValid:!1,validator:o=>o.length>=6}}),u=`
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
    `,p=`
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
    `;return(o,l)=>(r(),v(_,null,[n("div",N,[s(a(c),{value:a(e).name.val,"onUpdate:value":l[0]||(l[0]=i=>a(e).name.val=i),isvalid:a(e).name.isValid,"onUpdate:isvalid":l[1]||(l[1]=i=>a(e).name.isValid=i),validator:a(e).name.validator,inlineLabel:"Username"},null,8,["value","isvalid","validator"]),s(a(c),{class:"mt-5",value:a(e).password.val,"onUpdate:value":l[2]||(l[2]=i=>a(e).password.val=i),isvalid:a(e).password.isValid,"onUpdate:isvalid":l[3]||(l[3]=i=>a(e).password.isValid=i),validator:a(e).password.validator,inlineLabel:"Password",type:"password"},null,8,["value","isvalid","validator"])]),n("div",{class:w([{"slide-y":!0,slideup:t.value===!0,slidedown:t.value===!1},"mt-4"])},[L,s(m,{code:u,class:"mb-3"}),P,s(m,{code:p,lang:"typescript"})],2),s(g,{class:"mt-3",collapse:t.value,onToggle:l[4]||(l[4]=i=>t.value=!t.value)},null,8,["collapse"])],64))}});const z=n("div",{class:"mb-5"},"The validation state can be customized with css:",-1),F={id:"form3"},O=f({setup(b){const t=y(!0),e=h({name:{val:"",isValid:null,validator:o=>o.length===0?null:o.length>=3}}),u=`
    <div id="form">
      <sw-input
        v-model:value="form.name.val"
        v-model:isvalid="form.name.isValid"
        :validator="form.name.validator"
        placeholder="username">
      </sw-input>
    </div>
    `,p=`
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
    `;return(o,l)=>(r(),v(_,null,[z,n("div",F,[s(a(c),{value:a(e).name.val,"onUpdate:value":l[0]||(l[0]=i=>a(e).name.val=i),isvalid:a(e).name.isValid,"onUpdate:isvalid":l[1]||(l[1]=i=>a(e).name.isValid=i),validator:a(e).name.validator,placeholder:"username"},null,8,["value","isvalid","validator"])]),n("div",{class:w([{"slide-y":!0,slideup:t.value===!0,slidedown:t.value===!1},"mt-4"])},[s(m,{code:u,class:"mb-3"}),s(m,{code:p,lang:"html",class:"mb-3"})],2),s(g,{class:"mt-3",collapse:t.value,onToggle:l[2]||(l[2]=i=>t.value=!t.value)},null,8,["collapse"])],64))}});const A=n("div",{class:"mb-8 text-2xl"},"Input",-1),H=n("div",{class:"mb-5"},"Input form control with validation:",-1),M=n("div",{class:"mt-12 mb-8 text-xl"},"Inline label",-1),W=n("div",{class:"mt-12 mb-8 text-xl"},"Style",-1),G=x('<div class="mt-12 mb-8 text-xl">Install</div><code lang="bash">npm install @snowind/input</code><br><code class="mt-3 txt-light"># or</code><br><code class="mt-3">yarn add @snowind/input</code><div class="mt-12 mb-8 text-xl">Props</div>',7),J=n("div",{class:"mt-12 mb-8 text-xl"},"Events",-1),ae=f({setup(b){const t=[{prop:"id",description:"The id of the widget, it will be autogenerated if not provided",type:"string",values:"any string",default:"",required:!1},{prop:"v-model:value",description:"The initial value of the input",type:"string",values:"any string",default:"",required:!0},{prop:"v-model:isvalid",description:"The validity property of the input",type:"boolean or null",values:"false, true or null",default:"",required:!0},{prop:"type",description:"The input type",type:"string",values:'<a class="underline" href="https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input">standard input types</a>',default:"text",required:!1},{prop:"validator",description:"The validator function",type:"<pre>(value: T) => boolean</pre>",values:"a validator function",default:"",required:!1},{prop:"placeholder",description:"The placeholder text",type:"string",values:"any string",default:"",required:!1},{prop:"inlineLabel",description:"The inline label for inline input",type:"string",values:"any string",default:"",required:!1},{prop:"required",description:"The html required attribute",type:"boolean",values:"true, false",default:"false",required:!1}],e=[{name:"update:value",description:"Event emitted when the input value changes",returnType:"string"},{name:"update:isvalid",description:"Event emitted when the input value becomes valid",returnType:"boolean"}];return(u,p)=>(r(),v(_,null,[A,H,s(j),M,s(D),W,s(O),G,s(V,{tableData:t}),J,s($,{tableData:e}),s(T,{class:"mt-24",prev:{link:"/collapse",text:"Collapse"},next:{link:"/sidebar",text:"Sidebar"}})],64))}});export{ae as default};
