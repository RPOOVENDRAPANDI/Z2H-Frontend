import{Q as Ke,a as Ye}from"./QLayout.fe49d1b3.js";import{u as Xe}from"./use-quasar.088138f3.js";import{B as J,c as u,h as _,E as oe,i as pe,G as Z,r as H,w as k,H as re,I as Ze,g as he,J as Ce,K as Je,L as Le,l as A,x as M,n as l,d as a,A as ye,u as Q,v as et,M as E,q as tt,t as F,N as at,O as nt,P as Be,R as Ie,C as Oe,S as $e,D as Qe,U as we,V as Pe,W as xe,X as De,Y as lt,Q as L,Z as ut,$ as it,a0 as ot,o as rt,a1 as ke,a2 as Se,a3 as st,a4 as dt}from"./index.741a3cbc.js";import{Q as ct,T as ge}from"./TouchPan.72e21371.js";import{Q as ft}from"./QResizeObserver.a9dbfe29.js";import{u as vt,Q as P,a as B,b,c as ie}from"./format.b5946461.js";import{Q as qe}from"./QList.de37d55a.js";import{u as mt}from"./axios.851d6ad1.js";import"./QScrollObserver.5b685606.js";import"./touch.3df10340.js";var gt=J({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:y}){const h=u(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:h.value},oe(y.default))}}),ht=J({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:y}){const h=u(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:h.value,role:"toolbar"},oe(y.default))}}),bt=J({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:y,emit:h}){const{proxy:{$q:w}}=he(),i=pe(Ce,Z);if(i===Z)return console.error("QHeader needs to be child of QLayout"),Z;const o=H(parseInt(e.heightHint,10)),d=H(!0),x=u(()=>e.reveal===!0||i.view.value.indexOf("H")>-1||w.platform.is.ios&&i.isContainer.value===!0),T=u(()=>{if(e.modelValue!==!0)return 0;if(x.value===!0)return d.value===!0?o.value:0;const s=o.value-i.scroll.value.position;return s>0?s:0}),I=u(()=>e.modelValue!==!0||x.value===!0&&d.value!==!0),n=u(()=>e.modelValue===!0&&I.value===!0&&e.reveal===!0),p=u(()=>"q-header q-layout__section--marginal "+(x.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(I.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=u(()=>{const s=i.rows.value.top,O={};return s[0]==="l"&&i.left.space===!0&&(O[w.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),s[2]==="r"&&i.right.space===!0&&(O[w.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),O});function q(s,O){i.update("header",s,O)}function g(s,O){s.value!==O&&(s.value=O)}function r({height:s}){g(o,s),q("size",s)}function v(s){n.value===!0&&g(d,!0),h("focusin",s)}k(()=>e.modelValue,s=>{q("space",s),g(d,!0),i.animate()}),k(T,s=>{q("offset",s)}),k(()=>e.reveal,s=>{s===!1&&g(d,e.modelValue)}),k(d,s=>{i.animate(),h("reveal",s)}),k(i.scroll,s=>{e.reveal===!0&&g(d,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const f={};return i.instances.header=f,e.modelValue===!0&&q("size",o.value),q("space",e.modelValue),q("offset",T.value),re(()=>{i.instances.header===f&&(i.instances.header=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const s=Ze(y.default,[]);return e.elevated===!0&&s.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(_(ft,{debounce:0,onResize:r})),_("header",{class:p.value,style:S.value,onFocusin:v},s)}}});const _t={class:"q-gutter-sm row items-center no-wrap"},yt={__name:"HeaderComp",props:{toggleLeftDrawer:{type:Function,required:!0}},setup(e){const y=e,h=vt(),w=Je(),{selectedPage:i}=Le(h),o=u(()=>{let d=w.name;return d==="users"?i.value="Users":d==="user-settings"?i.value="User Settings":d==="customer-settings"?i.value="Customer Settings":d==="main"?i.value="Dashboard":d==="customers"?i.value="Customers":d==="registrationPayments"?i.value="Registration Payments":d==="products"&&(i.value="Products"),`Zero To Hero / ${i.value}`});return(d,x)=>(A(),M(bt,{elevated:""},{default:l(()=>[a(ht,null,{default:l(()=>[a(ye,{flat:"",dense:"",round:"",onClick:y.toggleLeftDrawer,icon:"menu","aria-label":"Menu"},null,8,["onClick"]),a(gt,null,{default:l(()=>[Q(et(E(o)),1)]),_:1}),a(ct),tt("div",_t,[d.$q.screen.gt.sm?(A(),M(ye,{key:0,round:"",dense:"",flat:"",color:"white",icon:d.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen",onClick:x[0]||(x[0]=T=>d.$q.fullscreen.toggle())},null,8,["icon"])):F("",!0)])]),_:1})]),_:1}))}};var wt=J({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:y,emit:h}){let w=!1,i,o,d=null,x=null,T,I;function n(){i&&i(),i=null,w=!1,d!==null&&(clearTimeout(d),d=null),x!==null&&(clearTimeout(x),x=null),o!==void 0&&o.removeEventListener("transitionend",T),T=null}function p(r,v,f){v!==void 0&&(r.style.height=`${v}px`),r.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,w=!0,i=f}function S(r,v){r.style.overflowY=null,r.style.height=null,r.style.transition=null,n(),v!==I&&h(v)}function q(r,v){let f=0;o=r,w===!0?(n(),f=r.offsetHeight===r.scrollHeight?0:void 0):(I="hide",r.style.overflowY="hidden"),p(r,f,v),d=setTimeout(()=>{d=null,r.style.height=`${r.scrollHeight}px`,T=s=>{x=null,(Object(s)!==s||s.target===r)&&S(r,"show")},r.addEventListener("transitionend",T),x=setTimeout(T,e.duration*1.1)},100)}function g(r,v){let f;o=r,w===!0?n():(I="show",r.style.overflowY="hidden",f=r.scrollHeight),p(r,f,v),d=setTimeout(()=>{d=null,r.style.height=0,T=s=>{x=null,(Object(s)!==s||s.target===r)&&S(r,"hide")},r.addEventListener("transitionend",T),x=setTimeout(T,e.duration*1.1)},100)}return re(()=>{w===!0&&n()}),()=>_(at,{css:!1,appear:e.appear,onEnter:q,onLeave:g},y.default)}});const G=nt({}),xt=Object.keys(Be);var kt=J({name:"QExpansionItem",props:{...Be,...Ie,...Oe,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...$e,"click","afterShow","afterHide"],setup(e,{slots:y,emit:h}){const{proxy:{$q:w}}=he(),i=Qe(e,w),o=H(e.modelValue!==null?e.modelValue:e.defaultOpened),d=H(null),x=we(),{show:T,hide:I,toggle:n}=Pe({showing:o});let p,S;const q=u(()=>`q-expansion-item q-item-type q-expansion-item--${o.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),g=u(()=>{if(e.contentInsetLevel===void 0)return null;const c=w.lang.rtl===!0?"Right":"Left";return{["padding"+c]:e.contentInsetLevel*56+"px"}}),r=u(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),v=u(()=>{const c={};return xt.forEach($=>{c[$]=e[$]}),c}),f=u(()=>r.value===!0||e.expandIconToggle!==!0),s=u(()=>e.expandedIcon!==void 0&&o.value===!0?e.expandedIcon:e.expandIcon||w.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),O=u(()=>e.disable!==!0&&(r.value===!0||e.expandIconToggle===!0)),te=u(()=>({expanded:o.value===!0,detailsId:e.targetUid,toggle:n,show:T,hide:I})),K=u(()=>{const c=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:w.lang.label[o.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":o.value===!0?"true":"false","aria-controls":x,"aria-label":c}});k(()=>e.group,c=>{S!==void 0&&S(),c!==void 0&&R()});function j(c){r.value!==!0&&n(c),h("click",c)}function se(c){c.keyCode===13&&ae(c,!0)}function ae(c,$){$!==!0&&d.value!==null&&d.value.focus(),n(c),ut(c)}function Y(){h("afterShow")}function V(){h("afterHide")}function R(){p===void 0&&(p=we()),o.value===!0&&(G[e.group]=p);const c=k(o,N=>{N===!0?G[e.group]=p:G[e.group]===p&&delete G[e.group]}),$=k(()=>G[e.group],(N,de)=>{de===p&&N!==void 0&&N!==p&&I()});S=()=>{c(),$(),G[e.group]===p&&delete G[e.group],S=void 0}}function ne(){const c={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},$=[_(L,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&o.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:s.value})];return O.value===!0&&(Object.assign(c,{tabindex:0,...K.value,onClick:ae,onKeyup:se}),$.unshift(_("div",{ref:d,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),_(b,c,()=>$)}function z(){let c;return y.header!==void 0?c=[].concat(y.header(te.value)):(c=[_(b,()=>[_(B,{lines:e.labelLines},()=>e.label||""),e.caption?_(B,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&c[e.switchToggleSide===!0?"push":"unshift"](_(b,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>_(L,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&c[e.switchToggleSide===!0?"unshift":"push"](ne()),c}function ee(){const c={ref:"item",style:e.headerStyle,class:e.headerClass,dark:i.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return f.value===!0&&(c.clickable=!0,c.onClick=j,Object.assign(c,r.value===!0?v.value:K.value)),_(P,c,z)}function le(){return De(_("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:g.value,id:x},oe(y.default)),[[lt,o.value]])}function X(){const c=[ee(),_(wt,{duration:e.duration,onShow:Y,onHide:V},le)];return e.expandSeparator===!0&&c.push(_(xe,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:i.value}),_(xe,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:i.value})),c}return e.group!==void 0&&R(),re(()=>{S!==void 0&&S()}),()=>_("div",{class:q.value},[_("div",{class:"q-expansion-item__container relative-position"},X())])}});const Te=150;var St=J({name:"QDrawer",inheritAttrs:!1,props:{...Ie,...Oe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...$e,"onLayout","miniState"],setup(e,{slots:y,emit:h,attrs:w}){const i=he(),{proxy:{$q:o}}=i,d=Qe(e,o),{preventBodyScroll:x}=st(),{registerTimeout:T,removeTimeout:I}=it(),n=pe(Ce,Z);if(n===Z)return console.error("QDrawer needs to be child of QLayout"),Z;let p,S=null,q;const g=H(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),r=u(()=>e.mini===!0&&g.value!==!0),v=u(()=>r.value===!0?e.miniWidth:e.width),f=H(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),s=u(()=>e.persistent!==!0&&(g.value===!0||de.value===!0));function O(t,m){if(se(),t!==!1&&n.animate(),D(0),g.value===!0){const C=n.instances[X.value];C!==void 0&&C.belowBreakpoint===!0&&C.hide(!1),W(1),n.isContainer.value!==!0&&x(!0)}else W(0),t!==!1&&fe(!1);T(()=>{t!==!1&&fe(!0),m!==!0&&h("show",t)},Te)}function te(t,m){ae(),t!==!1&&n.animate(),W(0),D(R.value*v.value),ve(),m!==!0?T(()=>{h("hide",t)},Te):I()}const{show:K,hide:j}=Pe({showing:f,hideOnRouteChange:s,handleShow:O,handleHide:te}),{addToHistory:se,removeFromHistory:ae}=ot(f,j,s),Y={belowBreakpoint:g,hide:j},V=u(()=>e.side==="right"),R=u(()=>(o.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),ne=H(0),z=H(!1),ee=H(!1),le=H(v.value*R.value),X=u(()=>V.value===!0?"left":"right"),c=u(()=>f.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:v.value:0),$=u(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(V.value?"R":"L")>-1||o.platform.is.ios===!0&&n.isContainer.value===!0),N=u(()=>e.overlay===!1&&f.value===!0&&g.value===!1),de=u(()=>e.overlay===!0&&f.value===!0&&g.value===!1),He=u(()=>"fullscreen q-drawer__backdrop"+(f.value===!1&&z.value===!1?" hidden":"")),Ve=u(()=>({backgroundColor:`rgba(0,0,0,${ne.value*.4})`})),be=u(()=>V.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),Ae=u(()=>V.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),Me=u(()=>{const t={};return n.header.space===!0&&be.value===!1&&($.value===!0?t.top=`${n.header.offset}px`:n.header.space===!0&&(t.top=`${n.header.size}px`)),n.footer.space===!0&&Ae.value===!1&&($.value===!0?t.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(t.bottom=`${n.footer.size}px`)),t}),Ne=u(()=>{const t={width:`${v.value}px`,transform:`translateX(${le.value}px)`};return g.value===!0?t:Object.assign(t,Me.value)}),Re=u(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),ze=u(()=>`q-drawer q-drawer--${e.side}`+(ee.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(d.value===!0?" q-drawer--dark q-dark":"")+(z.value===!0?" no-transition":f.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${r.value===!0?"mini":"standard"}`+($.value===!0||N.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(be.value===!0?" q-drawer--top-padding":""))),We=u(()=>{const t=o.lang.rtl===!0?e.side:X.value;return[[ge,je,void 0,{[t]:!0,mouse:!0}]]}),Ue=u(()=>{const t=o.lang.rtl===!0?X.value:e.side;return[[ge,_e,void 0,{[t]:!0,mouse:!0}]]}),Ee=u(()=>{const t=o.lang.rtl===!0?X.value:e.side;return[[ge,_e,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ce(){Ge(g,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}k(g,t=>{t===!0?(p=f.value,f.value===!0&&j(!1)):e.overlay===!1&&e.behavior!=="mobile"&&p!==!1&&(f.value===!0?(D(0),W(0),ve()):K(!1))}),k(()=>e.side,(t,m)=>{n.instances[m]===Y&&(n.instances[m]=void 0,n[m].space=!1,n[m].offset=0),n.instances[t]=Y,n[t].size=v.value,n[t].space=N.value,n[t].offset=c.value}),k(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&ce()}),k(()=>e.behavior+e.breakpoint,ce),k(n.isContainer,t=>{f.value===!0&&x(t!==!0),t===!0&&ce()}),k(n.scrollbarWidth,()=>{D(f.value===!0?0:void 0)}),k(c,t=>{U("offset",t)}),k(N,t=>{h("onLayout",t),U("space",t)}),k(V,()=>{D()}),k(v,t=>{D(),me(e.miniToOverlay,t)}),k(()=>e.miniToOverlay,t=>{me(t,v.value)}),k(()=>o.lang.rtl,()=>{D()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Fe(),n.animate())}),k(r,t=>{h("miniState",t)});function D(t){t===void 0?ke(()=>{t=f.value===!0?0:v.value,D(R.value*t)}):(n.isContainer.value===!0&&V.value===!0&&(g.value===!0||Math.abs(t)===v.value)&&(t+=R.value*n.scrollbarWidth.value),le.value=t)}function W(t){ne.value=t}function fe(t){const m=t===!0?"remove":n.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function Fe(){S!==null&&clearTimeout(S),i.proxy&&i.proxy.$el&&i.proxy.$el.classList.add("q-drawer--mini-animate"),ee.value=!0,S=setTimeout(()=>{S=null,ee.value=!1,i&&i.proxy&&i.proxy.$el&&i.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function je(t){if(f.value!==!1)return;const m=v.value,C=ie(t.distance.x,0,m);if(t.isFinal===!0){C>=Math.min(75,m)===!0?K():(n.animate(),W(0),D(R.value*m)),z.value=!1;return}D((o.lang.rtl===!0?V.value!==!0:V.value)?Math.max(m-C,0):Math.min(0,C-m)),W(ie(C/m,0,1)),t.isFirst===!0&&(z.value=!0)}function _e(t){if(f.value!==!0)return;const m=v.value,C=t.direction===e.side,ue=(o.lang.rtl===!0?C!==!0:C)?ie(t.distance.x,0,m):0;if(t.isFinal===!0){Math.abs(ue)<Math.min(75,m)===!0?(n.animate(),W(1),D(0)):j(),z.value=!1;return}D(R.value*ue),W(ie(1-ue/m,0,1)),t.isFirst===!0&&(z.value=!0)}function ve(){x(!1),fe(!0)}function U(t,m){n.update(e.side,t,m)}function Ge(t,m){t.value!==m&&(t.value=m)}function me(t,m){U("size",t===!0?e.miniWidth:m)}return n.instances[e.side]=Y,me(e.miniToOverlay,v.value),U("space",N.value),U("offset",c.value),e.showIfAbove===!0&&e.modelValue!==!0&&f.value===!0&&e["onUpdate:modelValue"]!==void 0&&h("update:modelValue",!0),rt(()=>{h("onLayout",N.value),h("miniState",r.value),p=e.showIfAbove===!0;const t=()=>{(f.value===!0?O:te)(!1,!0)};if(n.totalWidth.value!==0){ke(t);return}q=k(n.totalWidth,()=>{q(),q=void 0,f.value===!1&&e.showIfAbove===!0&&g.value===!1?K(!1):t()})}),re(()=>{q!==void 0&&q(),S!==null&&(clearTimeout(S),S=null),f.value===!0&&ve(),n.instances[e.side]===Y&&(n.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const t=[];g.value===!0&&(e.noSwipeOpen===!1&&t.push(De(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),We.value)),t.push(Se("div",{ref:"backdrop",class:He.value,style:Ve.value,"aria-hidden":"true",onClick:j},void 0,"backdrop",e.noSwipeBackdrop!==!0&&f.value===!0,()=>Ee.value)));const m=r.value===!0&&y.mini!==void 0,C=[_("div",{...w,key:""+m,class:[Re.value,w.class]},m===!0?y.mini():oe(y.default))];return e.elevated===!0&&f.value===!0&&C.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Se("aside",{ref:"content",class:ze.value,style:Ne.value},C,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>Ue.value)),_("div",{class:"q-drawer-container"},t)}}});const qt={__name:"SideNavBar",props:{leftDrawerOpen:{type:Boolean,required:!0}},setup(e){const y=e,h=mt(),w=H(!1),{userInfo:i}=Le(h),o=u(()=>{var r;return(r=i.value)==null?void 0:r.web_pages}),d=u(()=>{var r;return((r=i.value)==null?void 0:r.role)==="Superadmin"}),x=u(()=>d.value?!0:o.value&&o.value.includes("settings")),T=u(()=>d.value?!0:o.value&&o.value.includes("reports")),I=u(()=>d.value?!0:o.value&&o.value.includes("customers")),n=u(()=>d.value?!0:o.value&&o.value.includes("orders")),p=u(()=>d.value?!0:o.value&&o.value.includes("products")),S=u(()=>d.value?!0:o.value&&o.value.includes("users")),q=u(()=>!!d.value),g=()=>{h.logoutUser()};return(r,v)=>(A(),M(St,{modelValue:y.leftDrawerOpen,"onUpdate:modelValue":v[0]||(v[0]=f=>y.leftDrawerOpen=f),"show-if-above":"",mini:w.value,onMouseover:v[1]||(v[1]=f=>w.value=!1),onMouseout:v[2]||(v[2]=f=>w.value=!0),width:200,bordered:"",class:"bg-primary text-white"},{default:l(()=>[a(qe,null,{default:l(()=>[E(S)?(A(),M(P,{key:0,to:"/users","active-class":"q-item-no-link-highlighting"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"person"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Users")]),_:1})]),_:1})]),_:1})):F("",!0),E(p)?(A(),M(P,{key:1,to:"/products","active-class":"q-item-no-link-highlighting"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"card_giftcard"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Products")]),_:1})]),_:1})]),_:1})):F("",!0),E(n)?(A(),M(P,{key:2,to:"/registration-payments","active-class":"q-item-no-link-highlighting"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"shopping_cart"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Reg Payments")]),_:1})]),_:1})]),_:1})):F("",!0),E(I)?(A(),M(P,{key:3,to:"/customers","active-class":"q-item-no-link-highlighting"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"person"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Customers")]),_:1})]),_:1})]),_:1})):F("",!0),E(q)?(A(),M(P,{key:4,"active-class":"q-item-no-link-highlighting",class:"report-icon"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"fas fa-percent"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Commission")]),_:1})]),_:1})]),_:1})):F("",!0),E(T)?(A(),M(kt,{key:5,icon:"insert_chart",label:"Reports"},{default:l(()=>[a(qe,{class:"q-pl-lg"},{default:l(()=>[a(P,{"active-class":"q-item-no-link-highlighting",class:"report-icon"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"fas fa-bullhorn"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Sales")]),_:1})]),_:1})]),_:1}),a(P,{"active-class":"q-item-no-link-highlighting",class:"report-icon"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"fas fa-angle-down"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("No Downline")]),_:1})]),_:1})]),_:1}),a(P,{"active-class":"q-item-no-link-highlighting",class:"report-icon"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"fas fa-percent"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Commission")]),_:1})]),_:1})]),_:1}),a(P,{"active-class":"q-item-no-link-highlighting",class:"report-icon"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"fas fa-file-invoice"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Sales Tax")]),_:1})]),_:1})]),_:1}),a(P,{"active-class":"q-item-no-link-highlighting",class:"report-icon"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"fas fa-money-bill"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Income Tax")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):F("",!0),E(x)?(A(),M(P,{key:6,to:"/customer-settings","active-class":"q-item-no-link-highlighting"},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"settings"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Settings")]),_:1})]),_:1})]),_:1})):F("",!0),a(P,{to:"/sign-in","active-class":"q-item-no-link-highlighting",onClick:g},{default:l(()=>[a(b,{avatar:""},{default:l(()=>[a(L,{name:"person"})]),_:1}),a(b,null,{default:l(()=>[a(B,null,{default:l(()=>[Q("Logout")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","mini"]))}};const Ht={__name:"MainLayout",setup(e){Xe();const y=H(!0),h=()=>{y.value=!y.value};return(w,i)=>{const o=dt("router-view");return A(),M(Ke,{view:"lHh Lpr lFf"},{default:l(()=>[a(yt,{"toggle-left-drawer":h}),a(qt,{leftDrawerOpen:y.value},null,8,["leftDrawerOpen"]),a(Ye,null,{default:l(()=>[a(o)]),_:1})]),_:1})}}};export{Ht as default};
