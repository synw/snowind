import{d as ht,m as pt,o as L,c as F,B as _t,C as vt,a as gt,n as U,t as wt,j as mt}from"./vendor.48cc1c7c.js";var bt=Object.defineProperty,St=(t,e,n)=>e in t?bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e,n)=>(St(t,typeof e!="symbol"?e+"":e,n),n);function Et(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const It=Object.prototype.hasOwnProperty,S=(t,e)=>It.call(t,e),d=Array.isArray,E=t=>Y(t)==="[object Map]",Rt=t=>typeof t=="string",A=t=>typeof t=="symbol",I=t=>t!==null&&typeof t=="object",Tt=Object.prototype.toString,Y=t=>Tt.call(t),Mt=t=>Y(t).slice(8,-1),C=t=>Rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$=(t,e)=>!Object.is(t,e),z=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ot=t=>(t.w&N)>0,Vt=t=>(t.n&N)>0,B=new WeakMap;let N=1,R;const _=Symbol(""),W=Symbol("");let T=!0;const x=[];function Kt(){x.push(T),T=!1}function Pt(){const t=x.pop();T=t===void 0?!0:t}function c(t,e,n){if(!J())return;let r=B.get(t);r||B.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=z()),Q(s)}function J(){return T&&R!==void 0}function Q(t,e){let n=!1;Vt(t)||(t.n|=N,n=!Ot(t)),n&&(t.add(R),R.deps.push(t))}function h(t,e,n,r,s,i){const a=B.get(t);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(n==="length"&&d(t))a.forEach((l,f)=>{(f==="length"||f>=r)&&o.push(l)});else switch(n!==void 0&&o.push(a.get(n)),e){case"add":d(t)?C(n)&&o.push(a.get("length")):(o.push(a.get(_)),E(t)&&o.push(a.get(W)));break;case"delete":d(t)||(o.push(a.get(_)),E(t)&&o.push(a.get(W)));break;case"set":E(t)&&o.push(a.get(_));break}if(o.length===1)o[0]&&q(o[0]);else{const l=[];for(const f of o)f&&l.push(...f);q(z(l))}}function q(t,e){for(const n of d(t)?t:[...t])(n!==R||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const jt=Et("__proto__,__v_isRef,__isVue"),X=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(A)),yt=k(),At=k(!0),Z=Ct();function Ct(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=u(this);for(let i=0,a=this.length;i<a;i++)c(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(u)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Kt();const r=u(this)[e].apply(this,n);return Pt(),r}}),t}function k(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Qt:at:e?Jt:it).get(r))return r;const a=d(r);if(!t&&a&&S(Z,s))return Reflect.get(Z,s,i);const o=Reflect.get(r,s,i);return(A(s)?X.has(s):jt(s))||(t||c(r,"get",s),e)?o:g(o)?!a||!C(s)?o.value:o:I(o)?t?ut(o):ot(o):o}}const $t=zt();function zt(t=!1){return function(n,r,s,i){let a=n[r];if(G(a)&&g(a)&&!g(s))return!1;if(!t&&!G(s)&&(kt(s)||(s=u(s),a=u(a)),!d(n)&&g(a)&&!g(s)))return a.value=s,!0;const o=d(n)&&C(r)?Number(r)<n.length:S(n,r),l=Reflect.set(n,r,s,i);return n===u(i)&&(o?$(s,a)&&h(n,"set",r,s):h(n,"add",r,s)),l}}function Bt(t,e){const n=S(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&h(t,"delete",e,void 0),r}function Nt(t,e){const n=Reflect.has(t,e);return(!A(e)||!X.has(e))&&c(t,"has",e),n}function Wt(t){return c(t,"iterate",d(t)?"length":_),Reflect.ownKeys(t)}const qt={get:yt,set:$t,deleteProperty:Bt,has:Nt,ownKeys:Wt},Dt={get:At,set(t,e){return!0},deleteProperty(t,e){return!0}},D=t=>t,M=t=>Reflect.getPrototypeOf(t);function O(t,e,n=!1,r=!1){t=t.__v_raw;const s=u(t),i=u(e);e!==i&&!n&&c(s,"get",e),!n&&c(s,"get",i);const{has:a}=M(s),o=r?D:n?H:m;if(a.call(s,e))return o(t.get(e));if(a.call(s,i))return o(t.get(i));t!==s&&t.get(e)}function V(t,e=!1){const n=this.__v_raw,r=u(n),s=u(t);return t!==s&&!e&&c(r,"has",t),!e&&c(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function K(t,e=!1){return t=t.__v_raw,!e&&c(u(t),"iterate",_),Reflect.get(t,"size",t)}function tt(t){t=u(t);const e=u(this);return M(e).has.call(e,t)||(e.add(t),h(e,"add",t,t)),this}function et(t,e){e=u(e);const n=u(this),{has:r,get:s}=M(n);let i=r.call(n,t);i||(t=u(t),i=r.call(n,t));const a=s.call(n,t);return n.set(t,e),i?$(e,a)&&h(n,"set",t,e):h(n,"add",t,e),this}function nt(t){const e=u(this),{has:n,get:r}=M(e);let s=n.call(e,t);s||(t=u(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&h(e,"delete",t,void 0),i}function st(){const t=u(this),e=t.size!==0,n=t.clear();return e&&h(t,"clear",void 0,void 0),n}function P(t,e){return function(r,s){const i=this,a=i.__v_raw,o=u(a),l=e?D:t?H:m;return!t&&c(o,"iterate",_),a.forEach((f,w)=>r.call(s,l(f),l(w),i))}}function j(t,e,n){return function(...r){const s=this.__v_raw,i=u(s),a=E(i),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,f=s[t](...r),w=n?D:e?H:m;return!e&&c(i,"iterate",l?W:_),{next(){const{value:b,done:y}=f.next();return y?{value:b,done:y}:{value:o?[w(b[0]),w(b[1])]:w(b),done:y}},[Symbol.iterator](){return this}}}}function p(t){return function(...e){return t==="delete"?!1:this}}function Gt(){const t={get(i){return O(this,i)},get size(){return K(this)},has:V,add:tt,set:et,delete:nt,clear:st,forEach:P(!1,!1)},e={get(i){return O(this,i,!1,!0)},get size(){return K(this)},has:V,add:tt,set:et,delete:nt,clear:st,forEach:P(!1,!0)},n={get(i){return O(this,i,!0)},get size(){return K(this,!0)},has(i){return V.call(this,i,!0)},add:p("add"),set:p("set"),delete:p("delete"),clear:p("clear"),forEach:P(!0,!1)},r={get(i){return O(this,i,!0,!0)},get size(){return K(this,!0)},has(i){return V.call(this,i,!0)},add:p("add"),set:p("set"),delete:p("delete"),clear:p("clear"),forEach:P(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=j(i,!1,!1),n[i]=j(i,!0,!1),e[i]=j(i,!1,!0),r[i]=j(i,!0,!0)}),[t,n,e,r]}const[Ht,Lt,Ft,Ut]=Gt();function rt(t,e){const n=e?t?Ut:Ft:t?Lt:Ht;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(S(n,s)&&s in r?n:r,s,i)}const Yt={get:rt(!1,!1)},xt={get:rt(!0,!1)},it=new WeakMap,Jt=new WeakMap,at=new WeakMap,Qt=new WeakMap;function Xt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zt(t){return t.__v_skip||!Object.isExtensible(t)?0:Xt(Mt(t))}function ot(t){return G(t)?t:lt(t,!1,qt,Yt,it)}function ut(t){return lt(t,!0,Dt,xt,at)}function lt(t,e,n,r,s){if(!I(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=Zt(t);if(a===0)return t;const o=new Proxy(t,a===2?r:n);return s.set(t,o),o}function G(t){return!!(t&&t.__v_isReadonly)}function kt(t){return!!(t&&t.__v_isShallow)}function u(t){const e=t&&t.__v_raw;return e?u(e):t}const m=t=>I(t)?ot(t):t,H=t=>I(t)?ut(t):t;function ct(t){J()&&(t=u(t),t.dep||(t.dep=z()),Q(t.dep))}function ft(t,e){t=u(t),t.dep&&q(t.dep)}function g(t){return Boolean(t&&t.__v_isRef===!0)}function dt(t){return te(t,!1)}function te(t,e){return g(t)?t:new ee(t,e)}class ee{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:u(e),this._value=n?e:m(e)}get value(){return ct(this),this._value}set value(e){e=this.__v_isShallow?e:u(e),$(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:m(e),ft(this))}}class ne{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>ct(this),()=>ft(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function se(t){return new ne(t)}Promise.resolve();class re{constructor({id:e,value:n,validator:r,validationDelay:s=400}){v(this,"id"),v(this,"validator"),v(this,"isValid",dt(null)),v(this,"_value"),v(this,"inputValue"),v(this,"_timeout",null),this.id=e,this._value=dt(n),this.validator=r;const i=this;this.inputValue=se((a,o)=>({get(){return a(),i._value.value},set:l=>{this._timeout!==null&&clearTimeout(this._timeout),this._timeout=setTimeout(()=>{i._value.value=l,o(),i.isValid.value=i.validator(l),i._timeout=null},s)}}))}}function ie(){const t=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}var ae=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const oe=ht({props:{id:{type:String,default:()=>null},inlineLabel:{type:String,default:""},value:{type:String,required:!0},type:{type:String,default:"text"},validator:{type:Function,default:()=>!0},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1}},emits:["update:value","update:isvalid"],setup(t,{emit:e}){var n;const{id:r,value:s,validator:i}=pt(t),a=new re({id:(n=r.value)!=null?n:ie(),value:s.value,validator:o=>{let l=!1;switch(i.value(o)){case!0:a.isValid.value=!0,e("update:isvalid",!0),e("update:value",o),l=!0;break;case!1:a.isValid.value=!1,e("update:isvalid",!1),l=!1;break;case null:a.isValid.value=!1,e("update:isvalid",null),l=null;break;default:throw new Error(`The ${r} validator received an invalid value ${o}: it must be true, false or null`)}return l}});return{input:a}}}),ue={class:"relative sw-input"},le=["type","id","placeholder","required","autofocus"],ce=["for"];function fe(t,e,n,r,s,i){return L(),F("div",ue,[_t(gt("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.input.inputValue.value=a),type:t.type,id:t.id,class:U({valid:t.input.isValid.value===!0,invalid:t.input.isValid.value===!1,unset:t.input.isValid.value===null}),placeholder:t.placeholder,required:t.required,autofocus:t.autofocus},null,10,le),[[vt,t.input.inputValue.value]]),t.inlineLabel!==""?(L(),F("label",{key:0,for:t.id,class:U(["absolute px-1 left-2",{valid:t.input.isValid.value===!0,invalid:t.input.isValid.value===!1,unset:t.input.isValid.value===null}])},wt(t.inlineLabel),11,ce)):mt("",!0)])}var he=ae(oe,[["render",fe]]);export{he as S};
