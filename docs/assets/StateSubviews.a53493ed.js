import{C as i}from"./CodeBlock.d68e9033.js";import{C as d}from"./CodeButton.5d388d15.js";import{N as S}from"./NextBar.40b4edc2.js";import{A as n}from"./AnchorTitle.7570407b.js";import{d as k,q as w,o as T,c as y,b as e,w as v,a as s,n as r,F as C,l as u,f as o}from"./vendor.48cc1c7c.js";const B=s("div",{class:"mb-8 text-2xl"},"Subviews",-1),N=s("div",null,"Manage local reactive subviews without any router. The views are mapped on components",-1),A=s("div",{class:"mt-8 mb-8 text-xl"},"Usage",-1),O=s("div",{class:"mt-5"},"Create a component for each view and declare the views:",-1),j=s("div",{class:"mt-5"},"Then use the views in template:",-1),D=s("div",{class:"mt-5"},"To activate a view:",-1),I=o("Options"),L=u('<ul class="mx-3 mt-5 space-y-2"><li><div class="inline-block font-bold">activeView</div>: <code class="variable">Literal</code>: the initialy active view. One of the view names declared </li><li><div class="inline-block font-bold">invisibleViews</div>: <code class="variable">Array of literal</code>: hidden views. An array with some of the view names declared </li><li><div class="inline-block font-bold">onViewChange</div>: <code class="variable">function</code> a function that takes a view name as parameter. Called each time the view changes </li></ul>',1),F=o("Methods"),R=u('<ul class="mx-3 mt-5 space-y-2"><li><div class="inline-block font-bold">activate</div>: to activate a view </li><li><div class="inline-block font-bold">hide</div>: to hide a visible view </li><li><div class="inline-block font-bold">show</div>: to show a hidden view </li><li><div class="inline-block font-bold">isVisible</div>: to check if a view is visible </li></ul>',1),$=o("Properties, getters and computed props"),E=u('<ul class="mx-3 mt-5 space-y-2"><li><div class="inline-block font-bold">views</div>: <code class="variable">Record&lt;T, SubViewData&gt;</code>: an object view the view name as key and the view data as value. This property is read only </li><li><div class="inline-block font-bold">activeName</div>: <code class="variable">Ref&lt;T&gt;</code>: the active view name reactive ref </li><li><div class="inline-block font-bold">active</div>: <code class="variable">SubViewData</code>: the active view data </li><li><div class="inline-block font-bold">activeIndex</div>: <code class="variable">computed prop</code>: the active view index number </li><li><div class="inline-block font-bold">component</div>: <code class="variable">a Vue component</code>: the component associated with the view </li><li><div class="inline-block font-bold">visibleViews</div>: <code class="variable">computed prop</code>: a computed prop array of the visible views names </li></ul>',1),M=o("Custom view props"),U=s("div",{class:"mt-5"},"The views can have custom properties. Example:",-1),q=o("Template: "),z=o("Install"),P=s("code",{lang:"bash"},"npm install @snowind/subviews",-1),G=s("br",null,null,-1),H=s("code",{class:"mt-3 text-neutral"},"# or",-1),J=s("br",null,null,-1),K=s("code",{class:"mt-3"},"yarn add @snowind/subviews",-1),ie=k({setup(Q){const l=w(!0),a=w(!0),c=w(!0),m=`
    import { SubViews } from "@snowind/subviews";
    // import your subviews components here: SubviewOne,SubviewTwo,SubviewThree

    const subviews = new SubViews({
      views: {
        "one": SubviewOne,
        "two": SubviewTwo,
        "three": SubviewThree,
      }
    });
    `,p=`
    <div>
      <component :is="subviews.component"></component>
    </div>
    `,h=`
  <button class="btn" @click="subviews.activate('two')">Activate view two</button>

`,f=`
    import { SubViews } from "@snowind/subviews";
    // import your subviews components here: SubviewOne,SubviewTwo,SubviewThree

    const subviews = new SubViews({
      views: {
        "one": SubviewOne,
        "two": SubviewTwo,
        "three": SubviewThree,
      },
      activeView: "three",
      invisibleViews: ["two"],
      onChangeView: (v: typeof subviews) { 
        console.log("View changed to", v)
       }
    });

`,_=`
    // activate a view
    subviews.activate("two");
    // hide a view
    subviews.hide("two")
    // show a view
    subviews.show("two")
    // check if a view is visible
    const isVisible: boolean = subviews.isVisible("two")

`,x=`
    import { Component } from "vue";
    import { SubViewData } from "@snowind/subviews";

    // all views
    const views: Record<"one" | "two" | "three", SubViewData> = subviews.views;
    // active view name
    const active: "one" | "two" | "three" = subviews.activeName.value;
    // active view data
    const activeView: SubViewData = subviews.active;
    // active view index number
    const activeIndex: number = subviews.activeIndex.value;
    // active component
    const activeComponent: Component = subviews.component;
    // visible views
    const visibleViews: ("one" | "two" | "three")[] = subviews.visibleViews.value;

`,V=`
    const subviews = new SubViews({
      views: {
        "one": { component: SubviewOne, props: { label: "Label prop 1" } },
        "two": { component: SubviewTwo, props: { label: "Label prop 2" } },
        "three": { component: SubviewThree, props: { label: "Label prop 3" } },
      }
    });

`,g=`
    <div>Active view label prop: {{ subviews.active.props.label }}</div>

`;return(W,t)=>(T(),y(C,null,[B,N,A,O,e(i,{code:m,lang:"typescript",class:"mt-5"}),j,e(i,{code:p,class:"mt-5"}),D,e(i,{code:h,class:"mt-5"}),e(n,{name:"options",class:"mt-8 mb-8 text-lg"},{default:v(()=>[I]),_:1}),L,s("div",{class:r([{"slide-y":!0,slideup:l.value===!0,slidedown:l.value===!1},"mt-4"])},[e(i,{code:f,lang:"typescript",class:"mt-3"})],2),e(d,{class:"mt-3",collapse:l.value,onToggle:t[0]||(t[0]=b=>l.value=!l.value)},null,8,["collapse"]),e(n,{name:"methods",class:"mt-8 mb-8 text-lg"},{default:v(()=>[F]),_:1}),R,s("div",{class:r([{"slide-y":!0,slideup:a.value===!0,slidedown:a.value===!1},"mt-4"])},[e(i,{code:_,lang:"typescript",class:"mt-3"})],2),e(d,{class:"mt-3",collapse:a.value,onToggle:t[1]||(t[1]=b=>a.value=!a.value)},null,8,["collapse"]),e(n,{name:"props",class:"mt-8 mb-8 text-lg"},{default:v(()=>[$]),_:1}),E,s("div",{class:r([{"slide-y":!0,slideup:c.value===!0,slidedown:c.value===!1},"mt-4"])},[e(i,{code:x,lang:"typescript",class:"mt-3"})],2),e(d,{class:"mt-3",collapse:c.value,onToggle:t[2]||(t[2]=b=>c.value=!c.value)},null,8,["collapse"]),e(n,{name:"custom-props",class:"mt-8 mb-8 text-lg"},{default:v(()=>[M]),_:1}),U,e(i,{code:V,lang:"typescript",class:"mt-3"}),q,e(i,{code:g,class:"mt-3"}),e(n,{name:"install",class:"mt-12 mb-8 text-lg"},{default:v(()=>[z]),_:1}),P,G,H,J,K,e(S,{class:"mt-24",prev:{link:"/state/user",text:"User"},next:{link:"/examples/form",text:"Form example"}})],64))}});export{ie as default};
