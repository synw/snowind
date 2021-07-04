import{_ as a}from"./CodeBlock.2c4b2b1a.js";import{F as s}from"./input.es.9699300a.js";import{_ as i}from"./NextBar.de0b65ec.js";import{d as e,q as t,c as n,r as l,o as d,a as r,b as o,e as m}from"./vendor.b191bed2.js";var v=e({components:{CodeBlock:a,SwInput:s,NextBar:i},setup(){const a=t({name:{val:"",isValid:null,validator:a=>a.length>2},password:{val:"",isValid:null,validator:a=>a.length>7}}),s=n((()=>!0===a.name.isValid&&!0===a.password.isValid));return{form:a,code1:'\n      <sw-input\n        v-model:value="form.name.val"\n        v-model:isvalid="form.name.isValid"\n        :validator="form.name.validator"\n        inlineLabel="Username"\n      ></sw-input>\n      <div class="mt-3 text-sm text-gray-500 dark:text-gray-200">\n        <div v-if="form.name.isValid === true" class="text-success">Ok</div>\n        <div v-else-if="form.name.isValid === false" class="text-danger">Type 3 characters minimum</div>\n        <div v-else>Type a username</div>\n      </div>\n      <sw-input\n        class="mt-5"\n        v-model:value="form.password.val"\n        v-model:isvalid="form.password.isValid"\n        :validator="form.password.validator"\n        inlineLabel="Password"\n        type="password"\n      ></sw-input>\n      <div class="mt-3 text-sm text-gray-500 dark:text-gray-200">\n        <div v-if="form.password.isValid === true" class="text-success">Ok</div>\n        <div\n          v-else-if="form.password.isValid === false"\n          class="text-danger"\n        >Type 8 characters minimum</div>\n        <div v-else>Type a password</div>\n      </div>\n      <button\n        class="mt-3 btn"\n        :disabled="!isFormValid"\n        :class="{ \'success\': isFormValid, \'light\': !isFormValid }"\n      >Submit</button>\n    ',code2:'\n    import { Validators } from "@/snowind";\n    \n    setup() {\n      const form = reactive({\n        name: {\n          val: "", // initial value\n          isValid: null, // initial state\n          (v: string) => v.length > 2,\n        },\n        password: {\n          val: "", // initial value\n          isValid: null, // initial state\n          validator: (v: string) => v.length > 7,\n        },\n      });\n\n      const isFormValid = computed<boolean>(() => {\n        return form.name.isValid === true && form.password.isValid === true;\n      });\n\n      return {\n        form,\n        isFormValid\n      }\n    }\n    ',isFormValid:s}}});const c=o("div",{class:"text-2xl"},"Form",-1),p=o("div",{class:"mt-8"},"A complete form example with validation and hints",-1),u={id:"form2",class:"mt-8"},f={class:"mt-3 text-sm text-gray-500 dark:text-gray-200"},w={key:0,class:"text-success"},V={key:1,class:"text-danger"},b={key:2},y={class:"mt-3 text-sm text-gray-500 dark:text-gray-200"},x={key:0,class:"text-success"},h={key:1,class:"text-danger"},g={key:2},k=o("div",{class:"mt-5"}," The form fields use a tristate: neutral when nothing has been typed, invalid when something has been typed but does not statisfy the validator conditions, and valid when the validator passes. We use a computed property to check the form validity and enable the submit button ",-1),F={class:"mt-5"},T=m(" Template: "),U=m("Script: ");v.render=function(a,s,i,e,t,n){const m=l("sw-input"),v=l("code-block"),S=l("next-bar");return d(),r("div",null,[c,p,o("div",u,[o(m,{value:a.form.name.val,"onUpdate:value":s[1]||(s[1]=s=>a.form.name.val=s),isvalid:a.form.name.isValid,"onUpdate:isvalid":s[2]||(s[2]=s=>a.form.name.isValid=s),validator:a.form.name.validator,inlineLabel:"Username"},null,8,["value","isvalid","validator"]),o("div",f,[!0===a.form.name.isValid?(d(),r("div",w,"Ok")):!1===a.form.name.isValid?(d(),r("div",V,"Type 3 characters minimum")):(d(),r("div",b,"Type a username"))]),o(m,{class:"mt-5",value:a.form.password.val,"onUpdate:value":s[3]||(s[3]=s=>a.form.password.val=s),isvalid:a.form.password.isValid,"onUpdate:isvalid":s[4]||(s[4]=s=>a.form.password.isValid=s),validator:a.form.password.validator,inlineLabel:"Password",type:"password"},null,8,["value","isvalid","validator"]),o("div",y,[!0===a.form.password.isValid?(d(),r("div",x,"Ok")):!1===a.form.password.isValid?(d(),r("div",h,"Type 8 characters minimum")):(d(),r("div",g,"Type a password"))]),o("button",{class:["mt-3 btn",{success:a.isFormValid,light:!a.isFormValid}],disabled:!a.isFormValid},"Submit",10,["disabled"])]),k,o("div",F,[T,o(v,{code:a.code1,class:"mb-3"},null,8,["code"]),U,o(v,{code:a.code2,lang:"typescript"},null,8,["code"])]),o(S,{class:"mt-24",prev:{link:"/switch",text:"Switch"}})])};export default v;
