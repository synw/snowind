import{d as j,m as G,o as i,c as r,F as b,z as I,a as e,s as B,n as a,j as N,u as l,A as L,q as m,b as t,w as y,f as o,t as z}from"./vendor.48cc1c7c.js";import{P as J}from"./PropsTable.3a7f4565.js";import{C as g}from"./CodeBlock.d68e9033.js";import{C as T}from"./CodeButton.5d388d15.js";import{N as K}from"./NextBar.40b4edc2.js";import{A as M}from"./AnchorTitle.7570407b.js";const Q={class:"flex items-center sw-stepper"},U={class:"stepper-step"},W=["innerHTML"],X={class:"stepper-label"},Z=["innerHTML"],$=j({props:{steps:{type:Array,required:!0},activeIndex:{type:Number,required:!0}},setup(P){const d=P,{steps:V,activeIndex:f}=G(d);function w(p){let x="";return f.value==p?x="active":p<f.value&&(x="done"),x}function h(p){return p+1==d.steps.length}return(p,x)=>(i(),r("div",Q,[(i(!0),r(b,null,I(l(V),(v,u)=>(i(),r(b,null,[e("div",{class:a(["relative flex items-center",w(u)])},[e("div",U,[B(p.$slots,"content",{index:u,step:v},()=>{var _;return[e("div",{innerHTML:(_=v==null?void 0:v.content)!=null?_:u+1},null,8,W)]})]),e("div",X,[B(p.$slots,"label",{index:u,step:v},()=>[e("div",{innerHTML:v.label},null,8,Z)])])],2),h(u)?N("",!0):(i(),r("div",{key:0,class:a(["stepper-line",w(u)])},null,2))],64))),256))]))}}),ee=e("div",{class:"mb-8 text-2xl"},"Progress stepper",-1),te={class:"mt-12 md:w-1/2"},se={class:"mt-16 flex flex-row"},le=["onClick"],oe=o(" Template: "),ne=o("Script: "),ae=o("Colors and style"),ce={class:"mt-5"},ie=o(" The stepper is available for all the defined semantic colors (the default Snowind ones and the ones defined by the user), using a css class: "),re=e("code",{class:"variable"},[e("span",null,"stepper-"),e("i",null,"mycolorname")],-1),de=o(". Example with a "),pe=e("code",{class:"variable"},"stepper-success",-1),ue=o(" class and 5 steps: "),ve={class:"mt-12 md:w-2/3"},me={class:"mt-16 flex flex-row"},he=o(" Script: "),xe=o("Template: "),_e=o("Customize content"),be=e("div",{class:"mt-5"},"To customize the content of the circle declare it's content:",-1),ge={class:"mt-12 md:w-1/2"},fe={class:"mt-16 flex flex-row"},we=["onClick"],ye={class:"mt-5"},ke=o(" Or use the "),Se=e("code",{class:"variable"},"content",-1),Ce=o(" slot for more control. Example to use an icon only on the third step: "),Ie={class:"mt-12 md:w-1/2"},Te=e("path",{fill:"currentColor",d:"M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z"},null,-1),$e=[Te],ze={class:"mt-16 flex flex-row"},Me=["onClick"],Ve=o("Customize label"),He=e("div",{class:"mt-5"},[o(" To customize the label under the circle use the "),e("code",{class:"variable"},"label"),o(" slot: ")],-1),Le={class:"mt-12 md:w-1/2"},Pe=o(" Label for "),je=["innerHTML"],Be={class:"mt-16 flex flex-row"},Ne=["onClick"],Ae=o("Install"),Oe=e("code",{lang:"bash"},"npm install @snowind/stepper",-1),qe=e("br",null,null,-1),Re=e("code",{class:"mt-3 text-neutral"},"# or",-1),De=e("br",null,null,-1),Ee=e("code",{class:"mt-3"},"yarn add @snowind/stepper",-1),Fe=e("div",{class:"mt-12 mb-8 text-xl"},"Props",-1),Xe=j({setup(P){const d=L([{label:"Step 1"},{label:"Step 2"},{label:"Step 3"}]),V=L([{label:"Step 1"},{label:"Step 2"},{label:"Step 3"},{label:"Step 4"},{label:"Step 5"}]),f=L([{label:"Step 1",content:"One"},{label:"Step 2",content:"Two"},{label:"Step 3",content:"<i>3</i>"}]),w=m(0),h=m(1),p=m(1),x=m(0),v=m(0),u=m(!0),_=m(!0),k=m(!0),S=m(!0),C=m(!0),A=`
    <div class="mb-8 text-2xl">Progress stepper</div>
    <div class="mt-12 md:w-1/2">
      <sw-progress-stepper 
        class="stepper-secondary" 
        :steps="steps" 
        :active-index="activeIndex">
      </sw-progress-stepper>
    </div>
    <div class="mt-16 flex flex-row">
      <button
        v-for="(step, i) in Object.keys(steps)"
        :key="i"
        class="mr-1 btn bord-lighter"
        :class="activeIndex == i ? 'txt-lighter' : 'txt-light'"
        @click="activeIndex = i"
      >{{ steps[i].label }}</button>
    </div>

`,O=`
    import SwProgressStepper from "@snowind/stepper";
    import { reactive, ref } from "vue";

    const steps = reactive([
      { label: "Step 1" },
      { label: "Step 2" },
      { label: "Step 3" }
    ]);
    const activeIndex = ref(0);

`,q=`
    const steps3 = reactive([
      { label: "Step 1", content: "One" },
      { label: "Step 2", content: "Two" },
      { label: "Step 3", content: "<i>3</i>" }
    ]);
    const activeIndex3 = ref(1);

`,R=`
      <sw-progress-stepper class="stepper-lighter" :steps="steps" :active-index="activeIndex4">
        <template #content="slotProps">
          <svg
            v-if="slotProps.index == 2"
            class="text-xl"
            :class="activeIndex3 == 2 ? '' : 'txt-light'"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z"
            />
          </svg>
        </template>
      </sw-progress-stepper>

`,D=`
      <sw-progress-stepper class="stepper-light" :steps="steps2" :active-index="activeIndex5">
        <template #label="slotProps">
          <div :class="slotProps.index == activeIndex5 ? 'txt-success' : 'txt-light'">
            Label for
            <span v-html="slotProps.step.content"></span>
          </div>
        </template>
      </sw-progress-stepper>

`,E=`
    const steps2 = reactive([
      { label: "Step 1" },
      { label: "Step 2" },
      { label: "Step 3" },
      { label: "Step 4" },
      { label: "Step 5" },
    ]);
    const activeIndex2 = ref(1);
    
`,F=`
    <div class="mt-12 md:w-2/3">
      <sw-progress-stepper 
        class="stepper-success" 
        :steps="steps2" 
        :active-index="activeIndex2">
      </sw-progress-stepper>
    </div>
    <div class="mt-16 flex flex-row">
      <button
        class="mr-1 btn bord-lighter"
        :class="activeIndex2 != 0 ? 'txt-light' : 'txt-lighter'"
        @click="activeIndex2 != 0 ? --activeIndex2 : null"
      >Previous</button>
      <button
        class="mr-1 btn bord-lighter"
        :class="activeIndex2 != 4 ? 'txt-light' : 'txt-lighter'"
        @click="activeIndex2 != 4 ? ++activeIndex2 : null"
      >Next</button>
    </div>

`,Y=[{prop:"steps",description:"The steps data",type:"Array&lt;{ label: string, content?: string }&gt;",values:"",default:"",required:!0},{prop:"activeIndex",description:"The active step ref index",type:"Ref&lt;number&gt;",values:"",default:"",required:!0}];return(Ye,c)=>(i(),r(b,null,[ee,e("div",te,[t(l($),{class:"stepper-secondary",steps:l(d),"active-index":w.value},null,8,["steps","active-index"])]),e("div",se,[(i(!0),r(b,null,I(Object.keys(l(d)),(n,s)=>(i(),r("button",{key:s,class:a(["mr-1 btn bord-lighter",w.value==s?"txt-lighter":"txt-light"]),onClick:H=>w.value=s},z(l(d)[s].label),11,le))),128))]),e("div",{class:a([{"slide-y":!0,slideup:u.value===!0,slidedown:u.value===!1},"mt-4"])},[oe,t(g,{code:A,class:"mt-3"}),ne,t(g,{code:O,lang:"typescript",class:"mt-3"})],2),t(T,{class:"mt-3",collapse:u.value,onToggle:c[0]||(c[0]=n=>u.value=!u.value)},null,8,["collapse"]),t(M,{name:"colors",class:"mt-8 mb-8 text-lg"},{default:y(()=>[ae]),_:1}),e("div",ce,[ie,re,de,pe,ue,e("div",ve,[t(l($),{class:"stepper-success",steps:l(V),"active-index":h.value},null,8,["steps","active-index"])]),e("div",me,[e("button",{class:a(["mr-1 btn bord-lighter",h.value!=0?"txt-light":"txt-lighter"]),onClick:c[1]||(c[1]=n=>h.value!=0?--h.value:null)},"Previous",2),e("button",{class:a(["mr-1 btn bord-lighter",h.value!=4?"txt-light":"txt-lighter"]),onClick:c[2]||(c[2]=n=>h.value!=4?++h.value:null)},"Next",2)]),e("div",{class:a([{"slide-y":!0,slideup:C.value===!0,slidedown:C.value===!1},"mt-4"])},[he,t(g,{code:E,lang:"typescript",class:"mt-3"}),xe,t(g,{code:F,class:"mt-3"})],2),t(T,{class:"mt-3",collapse:C.value,onToggle:c[3]||(c[3]=n=>C.value=!C.value)},null,8,["collapse"])]),t(M,{name:"customize-content",class:"mt-8 mb-8 text-lg"},{default:y(()=>[_e]),_:1}),be,e("div",ge,[t(l($),{class:"stepper-light",steps:l(f),"active-index":p.value},null,8,["steps","active-index"]),e("div",fe,[(i(!0),r(b,null,I(Object.keys(l(d)),(n,s)=>(i(),r("button",{key:s,class:a(["mr-1 btn bord-lighter",p.value==s?"txt-lighter":"txt-light"]),onClick:H=>p.value=s},z(l(d)[s].label),11,we))),128))])]),e("div",{class:a([{"slide-y":!0,slideup:_.value===!0,slidedown:_.value===!1},"mt-4"])},[t(g,{code:q,lang:"typescript",class:"mt-3"})],2),t(T,{class:"mt-3",collapse:_.value,onToggle:c[4]||(c[4]=n=>_.value=!_.value)},null,8,["collapse"]),e("div",ye,[ke,Se,Ce,e("div",Ie,[t(l($),{class:"stepper-lighter",steps:l(d),"active-index":x.value},{content:y(n=>[n.index==2?(i(),r("svg",{key:0,class:a(["text-xl",p.value==2?"":"txt-light"]),xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024"},$e,2)):N("",!0)]),_:1},8,["steps","active-index"]),e("div",ze,[(i(!0),r(b,null,I(Object.keys(l(d)),(n,s)=>(i(),r("button",{key:s,class:a(["mr-1 btn bord-lighter",x.value==s?"txt-lighter":"txt-light"]),onClick:H=>x.value=s},z(l(d)[s].label),11,Me))),128))])]),e("div",{class:a([{"slide-y":!0,slideup:k.value===!0,slidedown:k.value===!1},"mt-4"])},[t(g,{code:R,class:"mt-3"})],2),t(T,{class:"mt-3",collapse:k.value,onToggle:c[5]||(c[5]=n=>k.value=!k.value)},null,8,["collapse"])]),t(M,{name:"customize-label",class:"mt-8 mb-8 text-lg"},{default:y(()=>[Ve]),_:1}),He,e("div",Le,[t(l($),{class:"stepper-light",steps:l(f),"active-index":v.value},{label:y(n=>[e("div",{class:a(n.index==v.value?"txt-success":"txt-light")},[Pe,e("span",{innerHTML:n.step.content},null,8,je)],2)]),_:1},8,["steps","active-index"]),e("div",Be,[(i(!0),r(b,null,I(Object.keys(l(f)),(n,s)=>(i(),r("button",{key:s,class:a(["mr-1 btn bord-lighter",v.value==s?"txt-lighter":"txt-light"]),onClick:H=>v.value=s},z(l(d)[s].label),11,Ne))),128))])]),e("div",{class:a([{"slide-y":!0,slideup:S.value===!0,slidedown:S.value===!1},"mt-4"])},[t(g,{code:D,class:"mt-3"})],2),t(T,{class:"mt-3",collapse:S.value,onToggle:c[6]||(c[6]=n=>S.value=!S.value)},null,8,["collapse"]),t(M,{name:"install",class:"mt-12 mb-8 text-lg"},{default:y(()=>[Ae]),_:1}),Oe,qe,Re,De,Ee,Fe,t(J,{tableData:Y}),t(K,{class:"mt-24",prev:{link:"/switch",text:"Switch"},next:{link:"/header",text:"Header"}})],64))}});export{Xe as default};
