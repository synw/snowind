import{C as c}from"./CodeBlock.d68e9033.js";import{C as d}from"./CodeButton.5d388d15.js";import{N as h}from"./NextBar.40b4edc2.js";import{d as C,q as u,o as y,c as q,a as e,t as m,u as p,n,b as t,F as w,f as v}from"./vendor.48cc1c7c.js";const g=`Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
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
ultrices sagittis orci a scelerisque purus semper eget.`;const x=e("div",{class:"mb-8 text-2xl"},"Collapse",-1),k=["innerHTML"],B={class:"p-3 mt-3 border shadow"},N=v(" Template: "),T=v("Script: "),V=e("div",{class:"my-8 text-xl"},"Style",-1),L=e("p",null,"Configure the animation with css",-1),M=["innerHTML"],S={class:"p-3 mt-3 border shadow"},H=e("p",{class:"mt-5"}," Here the animation will occur after a delay of 1 second and has a duration of 500 milliseconds ",-1),E=C({setup(O){const a=u(!0),l=u(!0),i=u(!0),o=u(!0),f=`
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
    `,b=`
    const collapse = ref(false);
    `,_=`
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
    `;return(P,s)=>(y(),q(w,null,[x,e("button",{class:"mt-4 btn lighter",onClick:s[0]||(s[0]=r=>a.value=!a.value),innerHTML:a.value?"Open":"Close"},null,8,k),e("div",{class:n([{"slide-y":!0,slideup:a.value===!0,slidedown:a.value===!1},"mt-4"])},[e("div",B,m(p(g)),1)],2),e("div",{class:n([{"slide-y":!0,slideup:l.value===!0,slidedown:l.value===!1},"mt-4"])},[N,t(c,{code:f,class:"my-3"}),T,t(c,{code:b,lang:"typescript",class:"mt-3"})],2),t(d,{class:"mt-3",collapse:l.value,onToggle:s[1]||(s[1]=r=>l.value=!l.value)},null,8,["collapse"]),V,L,e("button",{class:"mt-4 btn lighter",onClick:s[2]||(s[2]=r=>i.value=!i.value),innerHTML:i.value?"Open with delay":"Close with delay"},null,8,M),e("div",{class:n([{slideup:i.value===!0,slidedown:i.value===!1},"mt-4 duration-500 delay-1000 slide-y"])},[e("div",S,m(p(g)),1)],2),H,e("div",{class:n([{"slide-y":!0,slideup:o.value===!0,slidedown:o.value===!1},"mt-4"])},[t(c,{code:_})],2),t(d,{class:"mt-3",collapse:o.value,onToggle:s[3]||(s[3]=r=>o.value=!o.value)},null,8,["collapse"]),t(h,{class:"mt-24",prev:{link:"/button",text:"Button"},next:{link:"/input",text:"Input"}})],64))}});export{E as default};
