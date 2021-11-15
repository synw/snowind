import{C}from"./CodeBlock.8e63f17f.js";import{C as g}from"./CodeButton.18610415.js";import{N as h}from"./NextBar.2221aae1.js";import{_ as y}from"./index.9c82c8e6.js";import{d as q,q as a,r,c as w,a as s,t as p,n as i,e as t,F as k,f as m,o as B}from"./vendor.ba3950ab.js";const _=`Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
tortor pretium viverra suspendisse potenti nullam ac. Massa sed elementum
tempus egestas sed sed risus pretium quam. Non curabitur gravida arcu ac.
Scelerisque in dictum non consectetur a erat nam. Dolor sit amet consectetur
adipiscing elit duis tristique sollicitudin nibh. Ac tortor vitae purus
faucibus ornare. Vitae ultricies leo integer malesuada nunc vel risus. Vitae
elementum curabitur vitae nunc sed. Sapien eget mi proin sed libero enim
sed. Vel eros donec ac odio tempor orci dapibus ultrices. Posuere ac ut
consequat semper. Mi proin sed libero enim sed faucibus. Cursus eget nunc
scelerisque viverra mauris in aliquam sem. Suscipit adipiscing bibendum est
ultricies integer. Consequat mauris nunc congue nisi vitae suscipit tellus
mauris a. Et malesuada fames ac turpis egestas. At augue eget arcu dictum.
Pretium fusce id velit ut tortor. Purus viverra accumsan in nisl nisi
scelerisque eu ultrices. Venenatis lectus magna fringilla urna porttitor
rhoncus. Diam donec adipiscing tristique risus nec feugiat in. Orci porta
non pulvinar neque laoreet suspendisse. Justo laoreet sit amet cursus sit.
Pharetra vel turpis nunc eget lorem dolor sed viverra. Nullam ac tortor
vitae purus faucibus ornare suspendisse sed. Pellentesque nec nam aliquam
sem et tortor consequat id porta. Egestas dui id ornare arcu odio ut.
Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Aliquam
ultrices sagittis orci a scelerisque purus semper eget.`;const V=q({components:{CodeBlock:C,CodeButton:g,NextBar:h},setup(){const e=a(!0),o=a(!0),c=a(!0),u=a(!0);return{code1:`
    <button class="mt-4 btn" @click="collapse = !collapse" v-html="collapse ? 'Open' : 'Close'"></button>
    <div
      :class="{
        'slide-y': true,
        'slideup': collapse === true,
        'slidedown': collapse === false
      }"
      class="mt-4"
    >
    </div>
    `,code2:`
      setup() {
        const collapse = ref(false);

        return  {
          collapse
        }
      }
    `,code3:`
    <button
      class="mt-4 btn"
      @click="collapse2 = !collapse2"
      v-html="collapse2 ? 'Open with delay' : 'Close with delay'"
    ></button>
    <div
      :class="{
        'slideup': collapse2 === true,
        'slidedown': collapse2 === false
      }"
      class="mt-4 duration-500 delay-1000 slide-y"
    >
    </div>
    `,collapse:e,collapse2:c,collapseCode1:o,collapseCode2:u,textBlock:_}}}),N=s("div",{class:"mb-8 text-2xl"},"Collapse",-1),T=["innerHTML"],$={class:"p-3 mt-3 border shadow"},H=m(" Template: "),L=m("Script: "),M=s("div",{class:"my-8 text-xl"},"Style",-1),S=s("p",null,"Configure the animation with css",-1),j=["innerHTML"],O={class:"p-3 mt-3 border shadow"},P=s("p",{class:"mt-5"}," Here the animation will occur after a delay of 1 second and has a duration of 500 milliseconds ",-1);function A(e,o,c,u,v,b){const l=r("code-block"),d=r("code-button"),f=r("next-bar");return B(),w(k,null,[N,s("button",{class:"mt-4 btn",onClick:o[0]||(o[0]=n=>e.collapse=!e.collapse),innerHTML:e.collapse?"Open":"Close"},null,8,T),s("div",{class:i([{"slide-y":!0,slideup:e.collapse===!0,slidedown:e.collapse===!1},"mt-4"])},[s("div",$,p(e.textBlock),1)],2),s("div",{class:i([{"slide-y":!0,slideup:e.collapseCode1===!0,slidedown:e.collapseCode1===!1},"mt-4"])},[H,t(l,{code:e.code1,class:"my-3"},null,8,["code"]),L,t(l,{code:e.code2,lang:"typescript",class:"mt-3"},null,8,["code"])],2),t(d,{class:"mt-3",collapse:e.collapseCode1,onToggle:o[1]||(o[1]=n=>e.collapseCode1=!e.collapseCode1)},null,8,["collapse"]),M,S,s("button",{class:"mt-4 btn",onClick:o[2]||(o[2]=n=>e.collapse2=!e.collapse2),innerHTML:e.collapse2?"Open with delay":"Close with delay"},null,8,j),s("div",{class:i([{slideup:e.collapse2===!0,slidedown:e.collapse2===!1},"mt-4 duration-500 delay-1000 slide-y"])},[s("div",O,p(e.textBlock),1)],2),P,s("div",{class:i([{"slide-y":!0,slideup:e.collapseCode2===!0,slidedown:e.collapseCode2===!1},"mt-4"])},[t(l,{code:e.code3},null,8,["code"])],2),t(d,{class:"mt-3",collapse:e.collapseCode2,onToggle:o[3]||(o[3]=n=>e.collapseCode2=!e.collapseCode2)},null,8,["collapse"]),t(f,{class:"mt-24",prev:{link:"/button",text:"Button"},next:{link:"/header",text:"Header"}})],64)}var J=y(V,[["render",A]]);export{J as default};
