import{d as on,l as ln,o as un,c as gn,a as fn}from"./vendor.6a66068f.js";import{_ as dn}from"./NextBar.999c92da.js";var he={exports:{}};function pe(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];typeof t=="object"&&!Object.isFrozen(t)&&pe(t)}),e}he.exports=pe;he.exports.default=pe;var En=he.exports;class we{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function xe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function G(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const h in a)t[h]=a[h]}),t}const bn="</span>",Ie=e=>!!e.kind,hn=(e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((a,h)=>`${a}${"_".repeat(h+1)}`)].join(" ")}return`${n}${e}`};class pn{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=xe(n)}openNode(n){if(!Ie(n))return;let t=n.kind;n.sublanguage?t=`language-${t}`:t=hn(t,{prefix:this.classPrefix}),this.span(t)}closeNode(n){!Ie(n)||(this.buffer+=bn)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}class _e{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t={kind:n,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&(!n.children||(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{_e._collapse(t)})))}}class _n extends _e{constructor(n){super();this.options=n}addKeyword(n,t){n!==""&&(this.openNode(t),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,t){const a=n.root;a.kind=t,a.sublanguage=!0,this.add(a)}toHTML(){return new pn(this,this.options).value()}finalize(){return!0}}function te(e){return e?typeof e=="string"?e:e.source:null}function me(e){return W("(?=",e,")")}function Nn(e){return W("(?:",e,")*")}function An(e){return W("(?:",e,")?")}function W(...e){return e.map(t=>te(t)).join("")}function Sn(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function Ne(...e){const n=Sn(e);return"("+(n.capture?"":"?:")+e.map(a=>te(a)).join("|")+")"}function ve(e){return new RegExp(e.toString()+"|").exec("").length-1}function Rn(e,n){const t=e&&e.exec(n);return t&&t.index===0}const yn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Ae(e,{joinWith:n}){let t=0;return e.map(a=>{t+=1;const h=t;let p=te(a),i="";for(;p.length>0;){const r=yn.exec(p);if(!r){i+=p;break}i+=p.substring(0,r.index),p=p.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?i+="\\"+String(Number(r[1])+h):(i+=r[0],r[0]==="("&&t++)}return i}).map(a=>`(${a})`).join(n)}const Tn=/\b\B/,Ce="[a-zA-Z]\\w*",Se="[a-zA-Z_]\\w*",ke="\\b\\d+(\\.\\d+)?",Le="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",De="\\b(0b[01]+)",Mn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",On=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=W(n,/.*\b/,e.binary,/\b.*/)),G({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},se={begin:"\\\\[\\s\\S]",relevance:0},wn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[se]},xn={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[se]},In={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},oe=function(e,n,t={}){const a=G({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const h=Ne("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:W(/[ ]+/,"(",h,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},mn=oe("//","$"),vn=oe("/\\*","\\*/"),Cn=oe("#","$"),kn={scope:"number",begin:ke,relevance:0},Ln={scope:"number",begin:Le,relevance:0},Dn={scope:"number",begin:De,relevance:0},Bn={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[se,{begin:/\[/,end:/\]/,relevance:0,contains:[se]}]}]},Un={scope:"title",begin:Ce,relevance:0},Pn={scope:"title",begin:Se,relevance:0},$n={begin:"\\.\\s*"+Se,relevance:0},Gn=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var le=Object.freeze({__proto__:null,MATCH_NOTHING_RE:Tn,IDENT_RE:Ce,UNDERSCORE_IDENT_RE:Se,NUMBER_RE:ke,C_NUMBER_RE:Le,BINARY_NUMBER_RE:De,RE_STARTERS_RE:Mn,SHEBANG:On,BACKSLASH_ESCAPE:se,APOS_STRING_MODE:wn,QUOTE_STRING_MODE:xn,PHRASAL_WORDS_MODE:In,COMMENT:oe,C_LINE_COMMENT_MODE:mn,C_BLOCK_COMMENT_MODE:vn,HASH_COMMENT_MODE:Cn,NUMBER_MODE:kn,C_NUMBER_MODE:Ln,BINARY_NUMBER_MODE:Dn,REGEXP_MODE:Bn,TITLE_MODE:Un,UNDERSCORE_TITLE_MODE:Pn,METHOD_GUARD:$n,END_SAME_AS_BEGIN:Gn});function Hn(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function zn(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Fn(e,n){!n||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=Hn,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Zn(e,n){!Array.isArray(e.illegal)||(e.illegal=Ne(...e.illegal))}function Kn(e,n){if(!!e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Wn(e,n){e.relevance===void 0&&(e.relevance=1)}const Xn=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=t.keywords,e.begin=W(t.beforeMatch,me(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},Yn=["of","and","for","in","not","or","if","then","parent","list","value"],jn="keyword";function Be(e,n,t=jn){const a=Object.create(null);return typeof e=="string"?h(t,e.split(" ")):Array.isArray(e)?h(t,e):Object.keys(e).forEach(function(p){Object.assign(a,Be(e[p],n,p))}),a;function h(p,i){n&&(i=i.map(r=>r.toLowerCase())),i.forEach(function(r){const l=r.split("|");a[l[0]]=[p,Jn(l[0],l[1])]})}}function Jn(e,n){return n?Number(n):Vn(e)?0:1}function Vn(e){return Yn.includes(e.toLowerCase())}const Ue={},X=e=>{console.error(e)},Pe=(e,...n)=>{console.log(`WARN: ${e}`,...n)},V=(e,n)=>{Ue[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),Ue[`${e}/${n}`]=!0)},ue=new Error;function $e(e,n,{key:t}){let a=0;const h=e[t],p={},i={};for(let r=1;r<=n.length;r++)i[r+a]=h[r],p[r+a]=!0,a+=ve(n[r-1]);e[t]=i,e[t]._emit=p,e[t]._multi=!0}function Qn(e){if(!!Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw X("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ue;if(typeof e.beginScope!="object"||e.beginScope===null)throw X("beginScope must be object"),ue;$e(e,e.begin,{key:"beginScope"}),e.begin=Ae(e.begin,{joinWith:""})}}function qn(e){if(!!Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw X("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ue;if(typeof e.endScope!="object"||e.endScope===null)throw X("endScope must be object"),ue;$e(e,e.end,{key:"endScope"}),e.end=Ae(e.end,{joinWith:""})}}function et(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function nt(e){et(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Qn(e),qn(e)}function tt(e){function n(i,r){return new RegExp(te(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,l){l.position=this.position++,this.matchIndexes[this.matchAt]=l,this.regexes.push([l,r]),this.matchAt+=ve(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(l=>l[1]);this.matcherRe=n(Ae(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const l=this.matcherRe.exec(r);if(!l)return null;const b=l.findIndex((O,R)=>R>0&&O!==void 0),N=this.matchIndexes[b];return l.splice(0,b),Object.assign(l,N)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const l=new t;return this.rules.slice(r).forEach(([b,N])=>l.addRule(b,N)),l.compile(),this.multiRegexes[r]=l,l}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,l){this.rules.push([r,l]),l.type==="begin"&&this.count++}exec(r){const l=this.getMatcher(this.regexIndex);l.lastIndex=this.lastIndex;let b=l.exec(r);if(this.resumingScanAtSamePosition()&&!(b&&b.index===this.lastIndex)){const N=this.getMatcher(0);N.lastIndex=this.lastIndex+1,b=N.exec(r)}return b&&(this.regexIndex+=b.position+1,this.regexIndex===this.count&&this.considerAll()),b}}function h(i){const r=new a;return i.contains.forEach(l=>r.addRule(l.begin,{rule:l,type:"begin"})),i.terminatorEnd&&r.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&r.addRule(i.illegal,{type:"illegal"}),r}function p(i,r){const l=i;if(i.isCompiled)return l;[zn,Kn,nt,Xn].forEach(N=>N(i,r)),e.compilerExtensions.forEach(N=>N(i,r)),i.__beforeBegin=null,[Fn,Zn,Wn].forEach(N=>N(i,r)),i.isCompiled=!0;let b=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),b=i.keywords.$pattern,delete i.keywords.$pattern),b=b||/\w+/,i.keywords&&(i.keywords=Be(i.keywords,e.case_insensitive)),l.keywordPatternRe=n(b,!0),r&&(i.begin||(i.begin=/\B|\b/),l.beginRe=n(l.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(l.endRe=n(l.end)),l.terminatorEnd=te(l.end)||"",i.endsWithParent&&r.terminatorEnd&&(l.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(l.illegalRe=n(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(N){return st(N==="self"?i:N)})),i.contains.forEach(function(N){p(N,l)}),i.starts&&p(i.starts,r),l.matcher=h(l),l}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=G(e.classNameAliases||{}),p(e)}function Ge(e){return e?e.endsWithParent||Ge(e.starts):!1}function st(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return G(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:Ge(e)?G(e,{starts:e.starts?G(e.starts):null}):Object.isFrozen(e)?G(e):e}var rt="11.4.0";class it extends Error{constructor(n,t){super(n);this.name="HTMLInjectionError",this.html=t}}const Re=xe,He=G,ze=Symbol("nomatch"),at=7,ct=function(e){const n=Object.create(null),t=Object.create(null),a=[];let h=!0;const p="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:_n};function l(s){return r.noHighlightRe.test(s)}function b(s){let c=s.className+" ";c+=s.parentNode?s.parentNode.className:"";const g=r.languageDetectRe.exec(c);if(g){const E=v(g[1]);return E||(Pe(p.replace("{}",g[1])),Pe("Falling back to no-highlight mode for this block.",s)),E?g[1]:"no-highlight"}return c.split(/\s+/).find(E=>l(E)||v(E))}function N(s,c,g){let E="",A="";typeof c=="object"?(E=s,g=c.ignoreIllegals,A=c.language):(V("10.7.0","highlight(lang, code, ...args) has been deprecated."),V("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),A=s,E=c),g===void 0&&(g=!0);const T={code:E,language:A};U("before:highlight",T);const k=T.result?T.result:O(T.language,T.code,g);return k.code=T.code,U("after:highlight",k),k}function O(s,c,g,E){const A=Object.create(null);function T(o,u){return o.keywords[u]}function k(){if(!f.keywords){y.addText(S);return}let o=0;f.keywordPatternRe.lastIndex=0;let u=f.keywordPatternRe.exec(S),d="";for(;u;){d+=S.substring(o,u.index);const _=$.case_insensitive?u[0].toLowerCase():u[0],M=T(f,_);if(M){const[J,an]=M;if(y.addText(d),d="",A[_]=(A[_]||0)+1,A[_]<=at&&(ce+=an),J.startsWith("_"))d+=u[0];else{const cn=$.classNameAliases[J]||J;y.addKeyword(u[0],cn)}}else d+=u[0];o=f.keywordPatternRe.lastIndex,u=f.keywordPatternRe.exec(S)}d+=S.substr(o),y.addText(d)}function ie(){if(S==="")return;let o=null;if(typeof f.subLanguage=="string"){if(!n[f.subLanguage]){y.addText(S);return}o=O(f.subLanguage,S,!0,Oe[f.subLanguage]),Oe[f.subLanguage]=o._top}else o=C(S,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(ce+=o.relevance),y.addSublanguage(o._emitter,o.language)}function x(){f.subLanguage!=null?ie():k(),S=""}function P(o,u){let d=1;for(;u[d]!==void 0;){if(!o._emit[d]){d++;continue}const _=$.classNameAliases[o[d]]||o[d],M=u[d];_?y.addKeyword(M,_):(S=M,k(),S=""),d++}}function ye(o,u){return o.scope&&typeof o.scope=="string"&&y.openNode($.classNameAliases[o.scope]||o.scope),o.beginScope&&(o.beginScope._wrap?(y.addKeyword(S,$.classNameAliases[o.beginScope._wrap]||o.beginScope._wrap),S=""):o.beginScope._multi&&(P(o.beginScope,u),S="")),f=Object.create(o,{parent:{value:f}}),f}function Te(o,u,d){let _=Rn(o.endRe,d);if(_){if(o["on:end"]){const M=new we(o);o["on:end"](u,M),M.isMatchIgnored&&(_=!1)}if(_){for(;o.endsParent&&o.parent;)o=o.parent;return o}}if(o.endsWithParent)return Te(o.parent,u,d)}function en(o){return f.matcher.regexIndex===0?(S+=o[0],1):(be=!0,0)}function nn(o){const u=o[0],d=o.rule,_=new we(d),M=[d.__beforeBegin,d["on:begin"]];for(const J of M)if(!!J&&(J(o,_),_.isMatchIgnored))return en(u);return d.skip?S+=u:(d.excludeBegin&&(S+=u),x(),!d.returnBegin&&!d.excludeBegin&&(S=u)),ye(d,o),d.returnBegin?0:u.length}function tn(o){const u=o[0],d=c.substr(o.index),_=Te(f,o,d);if(!_)return ze;const M=f;f.endScope&&f.endScope._wrap?(x(),y.addKeyword(u,f.endScope._wrap)):f.endScope&&f.endScope._multi?(x(),P(f.endScope,o)):M.skip?S+=u:(M.returnEnd||M.excludeEnd||(S+=u),x(),M.excludeEnd&&(S=u));do f.scope&&y.closeNode(),!f.skip&&!f.subLanguage&&(ce+=f.relevance),f=f.parent;while(f!==_.parent);return _.starts&&ye(_.starts,o),M.returnEnd?0:u.length}function sn(){const o=[];for(let u=f;u!==$;u=u.parent)u.scope&&o.unshift(u.scope);o.forEach(u=>y.openNode(u))}let ae={};function Me(o,u){const d=u&&u[0];if(S+=o,d==null)return x(),0;if(ae.type==="begin"&&u.type==="end"&&ae.index===u.index&&d===""){if(S+=c.slice(u.index,u.index+1),!h){const _=new Error(`0 width match regex (${s})`);throw _.languageName=s,_.badRule=ae.rule,_}return 1}if(ae=u,u.type==="begin")return nn(u);if(u.type==="illegal"&&!g){const _=new Error('Illegal lexeme "'+d+'" for mode "'+(f.scope||"<unnamed>")+'"');throw _.mode=f,_}else if(u.type==="end"){const _=tn(u);if(_!==ze)return _}if(u.type==="illegal"&&d==="")return 1;if(Ee>1e5&&Ee>u.index*3)throw new Error("potential infinite loop, way more iterations than matches");return S+=d,d.length}const $=v(s);if(!$)throw X(p.replace("{}",s)),new Error('Unknown language: "'+s+'"');const rn=tt($);let de="",f=E||rn;const Oe={},y=new r.__emitter(r);sn();let S="",ce=0,K=0,Ee=0,be=!1;try{for(f.matcher.considerAll();;){Ee++,be?be=!1:f.matcher.considerAll(),f.matcher.lastIndex=K;const o=f.matcher.exec(c);if(!o)break;const u=c.substring(K,o.index),d=Me(u,o);K=o.index+d}return Me(c.substr(K)),y.closeAllNodes(),y.finalize(),de=y.toHTML(),{language:s,value:de,relevance:ce,illegal:!1,_emitter:y,_top:f}}catch(o){if(o.message&&o.message.includes("Illegal"))return{language:s,value:Re(c),illegal:!0,relevance:0,_illegalBy:{message:o.message,index:K,context:c.slice(K-100,K+100),mode:o.mode,resultSoFar:de},_emitter:y};if(h)return{language:s,value:Re(c),illegal:!1,relevance:0,errorRaised:o,_emitter:y,_top:f};throw o}}function R(s){const c={value:Re(s),illegal:!1,relevance:0,_top:i,_emitter:new r.__emitter(r)};return c._emitter.addText(s),c}function C(s,c){c=c||r.languages||Object.keys(n);const g=R(s),E=c.filter(v).filter(j).map(x=>O(x,s,!1));E.unshift(g);const A=E.sort((x,P)=>{if(x.relevance!==P.relevance)return P.relevance-x.relevance;if(x.language&&P.language){if(v(x.language).supersetOf===P.language)return 1;if(v(P.language).supersetOf===x.language)return-1}return 0}),[T,k]=A,ie=T;return ie.secondBest=k,ie}function L(s,c,g){const E=c&&t[c]||g;s.classList.add("hljs"),s.classList.add(`language-${E}`)}function I(s){let c=null;const g=b(s);if(l(g))return;if(U("before:highlightElement",{el:s,language:g}),s.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),r.throwUnescapedHTML))throw new it("One of your code blocks includes unescaped HTML.",s.innerHTML);c=s;const E=c.textContent,A=g?N(E,{language:g,ignoreIllegals:!0}):C(E);s.innerHTML=A.value,L(s,g,A.language),s.result={language:A.language,re:A.relevance,relevance:A.relevance},A.secondBest&&(s.secondBest={language:A.secondBest.language,relevance:A.secondBest.relevance}),U("after:highlightElement",{el:s,result:A,text:E})}function H(s){r=He(r,s)}const D=()=>{m(),V("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function z(){m(),V("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let B=!1;function m(){if(document.readyState==="loading"){B=!0;return}document.querySelectorAll(r.cssSelector).forEach(I)}function w(){B&&m()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",w,!1);function Q(s,c){let g=null;try{g=c(e)}catch(E){if(X("Language definition for '{}' could not be registered.".replace("{}",s)),h)X(E);else throw E;g=i}g.name||(g.name=s),n[s]=g,g.rawDefinition=c.bind(null,e),g.aliases&&Y(g.aliases,{languageName:s})}function F(s){delete n[s];for(const c of Object.keys(t))t[c]===s&&delete t[c]}function q(){return Object.keys(n)}function v(s){return s=(s||"").toLowerCase(),n[s]||n[t[s]]}function Y(s,{languageName:c}){typeof s=="string"&&(s=[s]),s.forEach(g=>{t[g.toLowerCase()]=c})}function j(s){const c=v(s);return c&&!c.disableAutodetect}function ee(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=c=>{s["before:highlightBlock"](Object.assign({block:c.el},c))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=c=>{s["after:highlightBlock"](Object.assign({block:c.el},c))})}function ne(s){ee(s),a.push(s)}function U(s,c){const g=s;a.forEach(function(E){E[g]&&E[g](c)})}function Z(s){return V("10.7.0","highlightBlock will be removed entirely in v12.0"),V("10.7.0","Please use highlightElement now."),I(s)}Object.assign(e,{highlight:N,highlightAuto:C,highlightAll:m,highlightElement:I,highlightBlock:Z,configure:H,initHighlighting:D,initHighlightingOnLoad:z,registerLanguage:Q,unregisterLanguage:F,listLanguages:q,getLanguage:v,registerAliases:Y,autoDetection:j,inherit:He,addPlugin:ne}),e.debugMode=function(){h=!1},e.safeMode=function(){h=!0},e.versionString=rt,e.regex={concat:W,lookahead:me,either:Ne,optional:An,anyNumberOfTimes:Nn};for(const s in le)typeof le[s]=="object"&&En(le[s]);return Object.assign(e,le),e};var re=ct({}),ge=re;re.HighlightJS=re;re.default=re;const fe="[A-Za-z$_][0-9A-Za-z$_]*",Fe=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Ze=["true","false","null","undefined","NaN","Infinity"],Ke=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],We=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Xe=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Ye=["arguments","this","super","console","window","document","localStorage","module","global"],je=[].concat(Xe,Ke,We);function ot(e){const n=e.regex,t=(c,{after:g})=>{const E="</"+c[0].slice(1);return c.input.indexOf(E,g)!==-1},a=fe,h={begin:"<>",end:"</>"},p=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(c,g)=>{const E=c[0].length+c.index,A=c.input[E];if(A==="<"||A===","){g.ignoreMatch();return}A===">"&&(t(c,{after:E})||g.ignoreMatch());let T;if((T=c.input.substr(E).match(/^\s+extends\s+/))&&T.index===0){g.ignoreMatch();return}}},r={$pattern:fe,keyword:Fe,literal:Ze,built_in:je,"variable.language":Ye},l="[0-9](_?[0-9])*",b=`\\.(${l})`,N="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",O={className:"number",variants:[{begin:`(\\b(${N})((${b})|\\.)?|(${b}))[eE][+-]?(${l})\\b`},{begin:`\\b(${N})\\b((${b})\\b|\\.)?|(${b})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},R={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},C={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,R],subLanguage:"xml"}},L={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,R],subLanguage:"css"}},I={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,R]},H=e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),D={className:"comment",variants:[H,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},z=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,C,L,I,O];R.contains=z.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(z)});const B=[].concat(D,R.contains),m=B.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(B)}]),w={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:m},Q={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},F={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ke,...We]}},q={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},v={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[w],illegal:/%/},Y={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function j(c){return n.concat("(?!",c.join("|"),")")}const ee={match:n.concat(/\b/,j([...Xe,"super"]),a,n.lookahead(/\(/)),className:"title.function",relevance:0},ne={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},U={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},w]},Z="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",s={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(Z)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[w]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:m,CLASS_REFERENCE:F},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),q,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,C,L,I,D,O,F,{className:"attr",begin:a+n.lookahead(":"),relevance:0},s,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[D,e.REGEXP_MODE,{className:"function",begin:Z,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:m}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:h.begin,end:h.end},{match:p},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},v,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[w,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ne,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[w]},ee,Y,Q,U,{match:/\$[(.]/}]}}function lt(e){const n=ot(e),t=fe,a=["any","void","number","boolean","string","object","never","enum"],h={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},p={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},contains:[n.exports.CLASS_REFERENCE]},i={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},r=["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"],l={$pattern:fe,keyword:Fe.concat(r),literal:Ze,built_in:je.concat(a),"variable.language":Ye},b={className:"meta",begin:"@"+t},N=(R,C,L)=>{const I=R.contains.findIndex(H=>H.label===C);if(I===-1)throw new Error("can not find mode to replace");R.contains.splice(I,1,L)};Object.assign(n.keywords,l),n.exports.PARAMS_CONTAINS.push(b),n.contains=n.contains.concat([b,h,p]),N(n,"shebang",e.SHEBANG()),N(n,"use_strict",i);const O=n.contains.find(R=>R.label==="func.def");return O.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx"]}),n}const Je="[A-Za-z$_][0-9A-Za-z$_]*",ut=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],gt=["true","false","null","undefined","NaN","Infinity"],Ve=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Qe=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],qe=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ft=["arguments","this","super","console","window","document","localStorage","module","global"],dt=[].concat(qe,Ve,Qe);function Et(e){const n=e.regex,t=(c,{after:g})=>{const E="</"+c[0].slice(1);return c.input.indexOf(E,g)!==-1},a=Je,h={begin:"<>",end:"</>"},p=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(c,g)=>{const E=c[0].length+c.index,A=c.input[E];if(A==="<"||A===","){g.ignoreMatch();return}A===">"&&(t(c,{after:E})||g.ignoreMatch());let T;if((T=c.input.substr(E).match(/^\s+extends\s+/))&&T.index===0){g.ignoreMatch();return}}},r={$pattern:Je,keyword:ut,literal:gt,built_in:dt,"variable.language":ft},l="[0-9](_?[0-9])*",b=`\\.(${l})`,N="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",O={className:"number",variants:[{begin:`(\\b(${N})((${b})|\\.)?|(${b}))[eE][+-]?(${l})\\b`},{begin:`\\b(${N})\\b((${b})\\b|\\.)?|(${b})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},R={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},C={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,R],subLanguage:"xml"}},L={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,R],subLanguage:"css"}},I={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,R]},H=e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),D={className:"comment",variants:[H,e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},z=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,C,L,I,O];R.contains=z.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(z)});const B=[].concat(D,R.contains),m=B.concat([{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(B)}]),w={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:m},Q={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},F={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ve,...Qe]}},q={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},v={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[w],illegal:/%/},Y={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function j(c){return n.concat("(?!",c.join("|"),")")}const ee={match:n.concat(/\b/,j([...qe,"super"]),a,n.lookahead(/\(/)),className:"title.function",relevance:0},ne={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},U={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},w]},Z="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",s={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(Z)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[w]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:m,CLASS_REFERENCE:F},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),q,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,C,L,I,D,O,F,{className:"attr",begin:a+n.lookahead(":"),relevance:0},s,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[D,e.REGEXP_MODE,{className:"function",begin:Z,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:m}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:h.begin,end:h.end},{match:p},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},v,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[w,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},ne,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[w]},ee,Y,Q,U,{match:/\$[(.]/}]}}function bt(e){const n=e.regex,t=n.concat(/[A-Z_]/,n.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),a=/[A-Za-z0-9._:-]+/,h={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},p={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(p,{begin:/\(/,end:/\)/}),r=e.inherit(e.APOS_STRING_MODE,{className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),b={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[h]},{begin:/'/,end:/'/,contains:[h]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[p,l,r,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[p,i,l,r]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},h,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[b],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[b],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:b}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}ge.registerLanguage("typescript",lt);ge.registerLanguage("javascript",Et);ge.registerLanguage("xml",bt);var ht=on({props:{code:{type:String,required:!0},lang:{type:String,default:"xml"}},setup(e){const{code:n,lang:t}=ln(e);return{parsedCode:ge.highlight(n.value,{language:t.value}).value}}});const pt={class:"dark:bg-neutral-700 bg-amber-50"},_t=["innerHTML"];function Nt(e,n){return un(),gn("pre",pt,[fn("code",{innerHTML:e.parsedCode,style:{"white-space":"pre"}},null,8,_t)])}var Rt=dn(ht,[["render",Nt]]);export{Rt as C};