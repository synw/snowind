import{d as s,o as a,a as t,b as e,F as l,s as p,t as r}from"./vendor.7abf9bc1.js";var c=s({props:{tableData:{type:Array,required:!0}}});const d={class:"w-full py-5"},n=e("thead",{class:"text-neutral dark:text-neutral-dark"},[e("tr",null,[e("th",{class:"px-8 py-3"},"Name"),e("th",{class:"px-8 py-3"},"Description"),e("th",{class:"px-8 py-3"},"Type"),e("th",{class:"px-8 py-3"},"Accepted values"),e("th",{class:"px-8 py-3"},"Default"),e("th",{class:"px-8 py-3"},"Required")])],-1),i={class:"divide-y"},y={class:"px-8 py-3 font-bold"},u={class:"px-8 py-3"},x={class:"px-8 py-3"},o={class:"px-8 py-3"},f={class:"px-8 py-3"},h={key:0,class:"fas fa-check text-success dark:text-success-dark"},k={key:1,class:"text-light dark:text-light-dark fas fa-times"};c.render=function(s,c,b,T,H,L){return a(),t("table",d,[n,e("tbody",i,[(a(!0),t(l,null,p(s.tableData,((s,l)=>(a(),t("tr",{key:l},[e("td",y,r(s.prop),1),e("td",u,r(s.description),1),e("td",x,[e("code",{innerHTML:s.type},null,8,["innerHTML"])]),e("td",{class:"px-8 py-3",innerHTML:s.values},null,8,["innerHTML"]),e("td",o,[e("code",{innerHTML:s.default},null,8,["innerHTML"])]),e("td",f,[!0===s.required?(a(),t("i",h)):(a(),t("i",k))])])))),128))])])};export{c as _};
