function Ct(e,t){const a=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)a[o[l]]=!0;return t?l=>!!a[l.toLowerCase()]:l=>!!a[l]}function Be(e){if(le(e)){const t={};for(let a=0;a<e.length;a++){const o=e[a],l=je(o)?op(o):Be(o);if(l)for(const r in l)t[r]=l[r]}return t}else{if(je(e))return e;if(Te(e))return e}}const tp=/;(?![^(]*\))/g,sp=/:([^]+)/,ap=/\/\*.*?\*\//gs;function op(e){const t={};return e.replace(ap,"").split(tp).forEach(a=>{if(a){const o=a.split(sp);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ue(e){let t="";if(je(e))t=e;else if(le(e))for(let a=0;a<e.length;a++){const o=Ue(e[a]);o&&(t+=o+" ")}else if(Te(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}function ke(e){if(!e)return null;let{class:t,style:a}=e;return t&&!je(t)&&(e.class=Ue(t)),a&&(e.style=Be(a)),e}const lp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",rp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",ip=Ct(lp),cp=Ct(rp),up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pp=Ct(up);function ji(e){return!!e||e===""}const qe=e=>je(e)?e:e==null?"":le(e)||Te(e)&&(e.toString===Bi||!ce(e.toString))?JSON.stringify(e,Vi,2):String(e),Vi=(e,t)=>t&&t.__v_isRef?Vi(e,t.value):Ft(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[o,l])=>(a[`${o} =>`]=l,a),{})}:Ui(t)?{[`Set(${t.size})`]:[...t.values()]}:Te(t)&&!le(t)&&!Wi(t)?String(t):t,Le=Object.freeze({}),fs=Object.freeze([]),kn=()=>{},Hi=()=>!1,dp=/^on[^a-z]/,aa=e=>dp.test(e),Sa=e=>e.startsWith("onUpdate:"),ze=Object.assign,rl=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},fp=Object.prototype.hasOwnProperty,_e=(e,t)=>fp.call(e,t),le=Array.isArray,Ft=e=>Wa(e)==="[object Map]",Ui=e=>Wa(e)==="[object Set]",ce=e=>typeof e=="function",je=e=>typeof e=="string",il=e=>typeof e=="symbol",Te=e=>e!==null&&typeof e=="object",cl=e=>Te(e)&&ce(e.then)&&ce(e.catch),Bi=Object.prototype.toString,Wa=e=>Bi.call(e),ul=e=>Wa(e).slice(8,-1),Wi=e=>Wa(e)==="[object Object]",pl=e=>je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_a=Ct(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hp=Ct("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),za=e=>{const t=Object.create(null);return a=>t[a]||(t[a]=e(a))},mp=/-(\w)/g,Zn=za(e=>e.replace(mp,(t,a)=>a?a.toUpperCase():"")),kp=/\B([A-Z])/g,rt=za(e=>e.replace(kp,"-$1").toLowerCase()),qt=za(e=>e.charAt(0).toUpperCase()+e.slice(1)),At=za(e=>e?`on${qt(e)}`:""),zs=(e,t)=>!Object.is(e,t),vt=(e,t)=>{for(let a=0;a<e.length;a++)e[a](t)},Ca=(e,t,a)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:a})},Pa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Jl;const zi=()=>Jl||(Jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ta(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let bn;class Ki{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=bn,!t&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}run(t){if(this.active){const a=bn;try{return bn=this,t()}finally{bn=a}}else Ta("cannot run an inactive effect scope.")}on(){bn=this}off(){bn=this.parent}stop(t){if(this.active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this.active=!1}}}function w3(e){return new Ki(e)}function vp(e,t=bn){t&&t.active&&t.effects.push(e)}function _p(){return bn}function gp(e){bn?bn.cleanups.push(e):Ta("onScopeDispose() is called when there is no active effect scope to be associated with.")}const dl=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qi=e=>(e.w&$t)>0,Yi=e=>(e.n&$t)>0,yp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=$t},bp=e=>{const{deps:t}=e;if(t.length){let a=0;for(let o=0;o<t.length;o++){const l=t[o];qi(l)&&!Yi(l)?l.delete(e):t[a++]=l,l.w&=~$t,l.n&=~$t}t.length=a}},Eo=new WeakMap;let Ls=0,$t=1;const So=30;let dn;const jt=Symbol("iterate"),Co=Symbol("Map key iterate");class fl{constructor(t,a=null,o){this.fn=t,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,vp(this,o)}run(){if(!this.active)return this.fn();let t=dn,a=gt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=dn,dn=this,gt=!0,$t=1<<++Ls,Ls<=So?yp(this):Ql(this),this.fn()}finally{Ls<=So&&bp(this),$t=1<<--Ls,dn=this.parent,gt=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dn===this?this.deferStop=!0:this.active&&(Ql(this),this.onStop&&this.onStop(),this.active=!1)}}function Ql(e){const{deps:t}=e;if(t.length){for(let a=0;a<t.length;a++)t[a].delete(e);t.length=0}}let gt=!0;const Zi=[];function Xt(){Zi.push(gt),gt=!1}function es(){const e=Zi.pop();gt=e===void 0?!0:e}function Rn(e,t,a){if(gt&&dn){let o=Eo.get(e);o||Eo.set(e,o=new Map);let l=o.get(a);l||o.set(a,l=dl()),Gi(l,{effect:dn,target:e,type:t,key:a})}}function Gi(e,t){let a=!1;Ls<=So?Yi(e)||(e.n|=$t,a=!qi(e)):a=!e.has(dn),a&&(e.add(dn),dn.deps.push(e),dn.onTrack&&dn.onTrack(Object.assign({effect:dn},t)))}function it(e,t,a,o,l,r){const i=Eo.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(a==="length"&&le(e)){const p=Pa(o);i.forEach((f,d)=>{(d==="length"||d>=p)&&c.push(f)})}else switch(a!==void 0&&c.push(i.get(a)),t){case"add":le(e)?pl(a)&&c.push(i.get("length")):(c.push(i.get(jt)),Ft(e)&&c.push(i.get(Co)));break;case"delete":le(e)||(c.push(i.get(jt)),Ft(e)&&c.push(i.get(Co)));break;case"set":Ft(e)&&c.push(i.get(jt));break}const u={target:e,type:t,key:a,newValue:o,oldValue:l,oldTarget:r};if(c.length===1)c[0]&&Po(c[0],u);else{const p=[];for(const f of c)f&&p.push(...f);Po(dl(p),u)}}function Po(e,t){const a=le(e)?e:[...e];for(const o of a)o.computed&&Xl(o,t);for(const o of a)o.computed||Xl(o,t)}function Xl(e,t){(e!==dn||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(ze({effect:e},t)),e.scheduler?e.scheduler():e.run())}const wp=Ct("__proto__,__v_isRef,__isVue"),Ji=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(il)),xp=Ka(),$p=Ka(!1,!0),Rp=Ka(!0),Ep=Ka(!0,!0),er=Sp();function Sp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...a){const o=de(this);for(let r=0,i=this.length;r<i;r++)Rn(o,"get",r+"");const l=o[t](...a);return l===-1||l===!1?o[t](...a.map(de)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...a){Xt();const o=de(this)[t].apply(this,a);return es(),o}}),e}function Ka(e=!1,t=!1){return function(o,l,r){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(e?t?oc:ac:t?sc:tc).get(o))return o;const i=le(o);if(!e&&i&&_e(er,l))return Reflect.get(er,l,r);const c=Reflect.get(o,l,r);return(il(l)?Ji.has(l):wp(l))||(e||Rn(o,"get",l),t)?c:xe(c)?i&&pl(l)?c:c.value:Te(c)?e?qn(c):Xe(c):c}}const Cp=Qi(),Pp=Qi(!0);function Qi(e=!1){return function(a,o,l,r){let i=a[o];if(Rt(i)&&xe(i)&&!xe(l))return!1;if(!e&&(!Oa(l)&&!Rt(l)&&(i=de(i),l=de(l)),!le(a)&&xe(i)&&!xe(l)))return i.value=l,!0;const c=le(a)&&pl(o)?Number(o)<a.length:_e(a,o),u=Reflect.set(a,o,l,r);return a===de(r)&&(c?zs(l,i)&&it(a,"set",o,l,i):it(a,"add",o,l)),u}}function Tp(e,t){const a=_e(e,t),o=e[t],l=Reflect.deleteProperty(e,t);return l&&a&&it(e,"delete",t,void 0,o),l}function Op(e,t){const a=Reflect.has(e,t);return(!il(t)||!Ji.has(t))&&Rn(e,"has",t),a}function Ap(e){return Rn(e,"iterate",le(e)?"length":jt),Reflect.ownKeys(e)}const Xi={get:xp,set:Cp,deleteProperty:Tp,has:Op,ownKeys:Ap},ec={get:Rp,set(e,t){return Ta(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Ta(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Ip=ze({},Xi,{get:$p,set:Pp}),Mp=ze({},ec,{get:Ep}),hl=e=>e,qa=e=>Reflect.getPrototypeOf(e);function ca(e,t,a=!1,o=!1){e=e.__v_raw;const l=de(e),r=de(t);a||(t!==r&&Rn(l,"get",t),Rn(l,"get",r));const{has:i}=qa(l),c=o?hl:a?kl:Ks;if(i.call(l,t))return c(e.get(t));if(i.call(l,r))return c(e.get(r));e!==l&&e.get(t)}function ua(e,t=!1){const a=this.__v_raw,o=de(a),l=de(e);return t||(e!==l&&Rn(o,"has",e),Rn(o,"has",l)),e===l?a.has(e):a.has(e)||a.has(l)}function pa(e,t=!1){return e=e.__v_raw,!t&&Rn(de(e),"iterate",jt),Reflect.get(e,"size",e)}function nr(e){e=de(e);const t=de(this);return qa(t).has.call(t,e)||(t.add(e),it(t,"add",e,e)),this}function tr(e,t){t=de(t);const a=de(this),{has:o,get:l}=qa(a);let r=o.call(a,e);r?nc(a,o,e):(e=de(e),r=o.call(a,e));const i=l.call(a,e);return a.set(e,t),r?zs(t,i)&&it(a,"set",e,t,i):it(a,"add",e,t),this}function sr(e){const t=de(this),{has:a,get:o}=qa(t);let l=a.call(t,e);l?nc(t,a,e):(e=de(e),l=a.call(t,e));const r=o?o.call(t,e):void 0,i=t.delete(e);return l&&it(t,"delete",e,void 0,r),i}function ar(){const e=de(this),t=e.size!==0,a=Ft(e)?new Map(e):new Set(e),o=e.clear();return t&&it(e,"clear",void 0,void 0,a),o}function da(e,t){return function(o,l){const r=this,i=r.__v_raw,c=de(i),u=t?hl:e?kl:Ks;return!e&&Rn(c,"iterate",jt),i.forEach((p,f)=>o.call(l,u(p),u(f),r))}}function fa(e,t,a){return function(...o){const l=this.__v_raw,r=de(l),i=Ft(r),c=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,p=l[e](...o),f=a?hl:t?kl:Ks;return!t&&Rn(r,"iterate",u?Co:jt),{next(){const{value:d,done:h}=p.next();return h?{value:d,done:h}:{value:c?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function dt(e){return function(...t){{const a=t[0]?`on key "${t[0]}" `:"";console.warn(`${qt(e)} operation ${a}failed: target is readonly.`,de(this))}return e==="delete"?!1:this}}function Lp(){const e={get(r){return ca(this,r)},get size(){return pa(this)},has:ua,add:nr,set:tr,delete:sr,clear:ar,forEach:da(!1,!1)},t={get(r){return ca(this,r,!1,!0)},get size(){return pa(this)},has:ua,add:nr,set:tr,delete:sr,clear:ar,forEach:da(!1,!0)},a={get(r){return ca(this,r,!0)},get size(){return pa(this,!0)},has(r){return ua.call(this,r,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:da(!0,!1)},o={get(r){return ca(this,r,!0,!0)},get size(){return pa(this,!0)},has(r){return ua.call(this,r,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:da(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=fa(r,!1,!1),a[r]=fa(r,!0,!1),t[r]=fa(r,!1,!0),o[r]=fa(r,!0,!0)}),[e,a,t,o]}const[Dp,Np,Fp,jp]=Lp();function Ya(e,t){const a=t?e?jp:Fp:e?Np:Dp;return(o,l,r)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(_e(a,l)&&l in o?a:o,l,r)}const Vp={get:Ya(!1,!1)},Hp={get:Ya(!1,!0)},Up={get:Ya(!0,!1)},Bp={get:Ya(!0,!0)};function nc(e,t,a){const o=de(a);if(o!==a&&t.call(e,o)){const l=ul(e);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const tc=new WeakMap,sc=new WeakMap,ac=new WeakMap,oc=new WeakMap;function Wp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zp(e){return e.__v_skip||!Object.isExtensible(e)?0:Wp(ul(e))}function Xe(e){return Rt(e)?e:Za(e,!1,Xi,Vp,tc)}function Kp(e){return Za(e,!1,Ip,Hp,sc)}function qn(e){return Za(e,!0,ec,Up,ac)}function ps(e){return Za(e,!0,Mp,Bp,oc)}function Za(e,t,a,o,l){if(!Te(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=l.get(e);if(r)return r;const i=zp(e);if(i===0)return e;const c=new Proxy(e,i===2?o:a);return l.set(e,c),c}function Vt(e){return Rt(e)?Vt(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function Oa(e){return!!(e&&e.__v_isShallow)}function Aa(e){return Vt(e)||Rt(e)}function de(e){const t=e&&e.__v_raw;return t?de(t):e}function ml(e){return Ca(e,"__v_skip",!0),e}const Ks=e=>Te(e)?Xe(e):e,kl=e=>Te(e)?qn(e):e;function vl(e){gt&&dn&&(e=de(e),Gi(e.dep||(e.dep=dl()),{target:e,type:"get",key:"value"}))}function _l(e,t){e=de(e),e.dep&&Po(e.dep,{target:e,type:"set",key:"value",newValue:t})}function xe(e){return!!(e&&e.__v_isRef===!0)}function ne(e){return lc(e,!1)}function Gn(e){return lc(e,!0)}function lc(e,t){return xe(e)?e:new qp(e,t)}class qp{constructor(t,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?t:de(t),this._value=a?t:Ks(t)}get value(){return vl(this),this._value}set value(t){const a=this.__v_isShallow||Oa(t)||Rt(t);t=a?t:de(t),zs(t,this._rawValue)&&(this._rawValue=t,this._value=a?t:Ks(t),_l(this,t))}}function x(e){return xe(e)?e.value:e}const Yp={get:(e,t,a)=>x(Reflect.get(e,t,a)),set:(e,t,a,o)=>{const l=e[t];return xe(l)&&!xe(a)?(l.value=a,!0):Reflect.set(e,t,a,o)}};function rc(e){return Vt(e)?e:new Proxy(e,Yp)}class Zp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=t(()=>vl(this),()=>_l(this));this._get=a,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function ic(e){return new Zp(e)}function Gp(e){Aa(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=le(e)?new Array(e.length):{};for(const a in e)t[a]=Qp(e,a);return t}class Jp{constructor(t,a,o){this._object=t,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Qp(e,t,a){const o=e[t];return xe(o)?o:new Jp(e,t,a)}var cc;class Xp{constructor(t,a,o,l){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this[cc]=!1,this._dirty=!0,this.effect=new fl(t,()=>{this._dirty||(this._dirty=!0,_l(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=de(this);return vl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}cc="__v_isReadonly";function ed(e,t,a=!1){let o,l;const r=ce(e);r?(o=e,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,l=e.set);const i=new Xp(o,l,r||!l,a);return t&&!a&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const Ht=[];function ga(e){Ht.push(e)}function ya(){Ht.pop()}function L(e,...t){Xt();const a=Ht.length?Ht[Ht.length-1].component:null,o=a&&a.appContext.config.warnHandler,l=nd();if(o)lt(o,a,11,[e+t.join(""),a&&a.proxy,l.map(({vnode:r})=>`at <${oo(a,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${e}`,...t];l.length&&r.push(`
`,...td(l)),console.warn(...r)}es()}function nd(){let e=Ht[Ht.length-1];if(!e)return[];const t=[];for(;e;){const a=t[0];a&&a.vnode===e?a.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function td(e){const t=[];return e.forEach((a,o)=>{t.push(...o===0?[]:[`
`],...sd(a))}),t}function sd({vnode:e,recurseCount:t}){const a=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,l=` at <${oo(e.component,e.type,o)}`,r=">"+a;return e.props?[l,...ad(e.props),r]:[l+r]}function ad(e){const t=[],a=Object.keys(e);return a.slice(0,3).forEach(o=>{t.push(...uc(o,e[o]))}),a.length>3&&t.push(" ..."),t}function uc(e,t,a){return je(t)?(t=JSON.stringify(t),a?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?a?t:[`${e}=${t}`]:xe(t)?(t=uc(e,de(t.value),!0),a?t:[`${e}=Ref<`,t,">"]):ce(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=de(t),a?t:[`${e}=`,t])}const gl={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function lt(e,t,a,o){let l;try{l=o?e(...o):e()}catch(r){Ga(r,t,a)}return l}function jn(e,t,a,o){if(ce(e)){const r=lt(e,t,a,o);return r&&cl(r)&&r.catch(i=>{Ga(i,t,a)}),r}const l=[];for(let r=0;r<e.length;r++)l.push(jn(e[r],t,a,o));return l}function Ga(e,t,a,o=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,c=gl[a];for(;r;){const p=r.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,i,c)===!1)return}r=r.parent}const u=t.appContext.config.errorHandler;if(u){lt(u,null,10,[e,i,c]);return}}od(e,a,l,o)}function od(e,t,a,o=!0){{const l=gl[t];if(a&&ga(a),L(`Unhandled error${l?` during execution of ${l}`:""}`),a&&ya(),o)throw e;console.error(e)}}let qs=!1,To=!1;const an=[];let zn=0;const hs=[];let Wn=null,ht=0;const pc=Promise.resolve();let yl=null;const ld=100;function Vn(e){const t=yl||pc;return e?t.then(this?e.bind(this):e):t}function rd(e){let t=zn+1,a=an.length;for(;t<a;){const o=t+a>>>1;Ys(an[o])<e?t=o+1:a=o}return t}function Ja(e){(!an.length||!an.includes(e,qs&&e.allowRecurse?zn+1:zn))&&(e.id==null?an.push(e):an.splice(rd(e.id),0,e),dc())}function dc(){!qs&&!To&&(To=!0,yl=pc.then(mc))}function id(e){const t=an.indexOf(e);t>zn&&an.splice(t,1)}function fc(e){le(e)?hs.push(...e):(!Wn||!Wn.includes(e,e.allowRecurse?ht+1:ht))&&hs.push(e),dc()}function or(e,t=qs?zn+1:0){for(e=e||new Map;t<an.length;t++){const a=an[t];if(a&&a.pre){if(bl(e,a))continue;an.splice(t,1),t--,a()}}}function hc(e){if(hs.length){const t=[...new Set(hs)];if(hs.length=0,Wn){Wn.push(...t);return}for(Wn=t,e=e||new Map,Wn.sort((a,o)=>Ys(a)-Ys(o)),ht=0;ht<Wn.length;ht++)bl(e,Wn[ht])||Wn[ht]();Wn=null,ht=0}}const Ys=e=>e.id==null?1/0:e.id,cd=(e,t)=>{const a=Ys(e)-Ys(t);if(a===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return a};function mc(e){To=!1,qs=!0,e=e||new Map,an.sort(cd);const t=a=>bl(e,a);try{for(zn=0;zn<an.length;zn++){const a=an[zn];if(a&&a.active!==!1){if(t(a))continue;lt(a,null,14)}}}finally{zn=0,an.length=0,hc(e),qs=!1,yl=null,(an.length||hs.length)&&mc(e)}}function bl(e,t){if(!e.has(t))e.set(t,1);else{const a=e.get(t);if(a>ld){const o=t.ownerInstance,l=o&&Js(o.type);return L(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,a+1)}}let yt=!1;const is=new Set;zi().__VUE_HMR_RUNTIME__={createRecord:co(kc),rerender:co(dd),reload:co(fd)};const Yt=new Map;function ud(e){const t=e.type.__hmrId;let a=Yt.get(t);a||(kc(t,e.type),a=Yt.get(t)),a.instances.add(e)}function pd(e){Yt.get(e.type.__hmrId).instances.delete(e)}function kc(e,t){return Yt.has(e)?!1:(Yt.set(e,{initialDef:js(t),instances:new Set}),!0)}function js(e){return Yc(e)?e.__vccOpts:e}function dd(e,t){const a=Yt.get(e);a&&(a.initialDef.render=t,[...a.instances].forEach(o=>{t&&(o.render=t,js(o.type).render=t),o.renderCache=[],yt=!0,o.update(),yt=!1}))}function fd(e,t){const a=Yt.get(e);if(!a)return;t=js(t),lr(a.initialDef,t);const o=[...a.instances];for(const l of o){const r=js(l.type);is.has(r)||(r!==a.initialDef&&lr(r,t),is.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(is.add(r),l.ceReload(t.styles),is.delete(r)):l.parent?Ja(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}fc(()=>{for(const l of o)is.delete(js(l.type))})}function lr(e,t){ze(e,t);for(const a in e)a!=="__file"&&!(a in t)&&delete e[a]}function co(e){return(t,a)=>{try{return e(t,a)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Kn,Ds=[],Oo=!1;function oa(e,...t){Kn?Kn.emit(e,...t):Oo||Ds.push({event:e,args:t})}function vc(e,t){var a,o;Kn=e,Kn?(Kn.enabled=!0,Ds.forEach(({event:l,args:r})=>Kn.emit(l,...r)),Ds=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(a=window.navigator)===null||a===void 0?void 0:a.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{vc(r,t)}),setTimeout(()=>{Kn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Oo=!0,Ds=[])},3e3)):(Oo=!0,Ds=[])}function hd(e,t){oa("app:init",e,t,{Fragment:Ce,Text:ra,Comment:vn,Static:ba})}function md(e){oa("app:unmount",e)}const Ao=wl("component:added"),_c=wl("component:updated"),kd=wl("component:removed"),vd=e=>{Kn&&typeof Kn.cleanupBuffer=="function"&&!Kn.cleanupBuffer(e)&&kd(e)};function wl(e){return t=>{oa(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const _d=gc("perf:start"),gd=gc("perf:end");function gc(e){return(t,a,o)=>{oa(e,t.appContext.app,t.uid,t,a,o)}}function yd(e,t,a){oa("component:emit",e.appContext.app,e,t,a)}function bd(e,t,...a){if(e.isUnmounted)return;const o=e.vnode.props||Le;{const{emitsOptions:f,propsOptions:[d]}=e;if(f)if(!(t in f))(!d||!(At(t)in d))&&L(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${At(t)}" prop.`);else{const h=f[t];ce(h)&&(h(...a)||L(`Invalid event arguments: event validation failed for event "${t}".`))}}let l=a;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in o){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:h}=o[f]||Le;h&&(l=a.map(k=>je(k)?k.trim():k)),d&&(l=a.map(Pa))}yd(e,t,l);{const f=t.toLowerCase();f!==t&&o[At(f)]&&L(`Event "${f}" is emitted in component ${oo(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${rt(t)}" instead of "${t}".`)}let c,u=o[c=At(t)]||o[c=At(Zn(t))];!u&&r&&(u=o[c=At(rt(t))]),u&&jn(u,e,6,l);const p=o[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,jn(p,e,6,l)}}function yc(e,t,a=!1){const o=t.emitsCache,l=o.get(e);if(l!==void 0)return l;const r=e.emits;let i={},c=!1;if(!ce(e)){const u=p=>{const f=yc(p,t,!0);f&&(c=!0,ze(i,f))};!a&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!c?(Te(e)&&o.set(e,null),null):(le(r)?r.forEach(u=>i[u]=null):ze(i,r),Te(e)&&o.set(e,i),i)}function Qa(e,t){return!e||!aa(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,rt(t))||_e(e,t))}let Ge=null,Xa=null;function Ia(e){const t=Ge;return Ge=e,Xa=e&&e.type.__scopeId||null,t}function wd(e){Xa=e}function xd(){Xa=null}function g(e,t=Ge,a){if(!t||e._n)return e;const o=(...l)=>{o._d&&_r(-1);const r=Ia(t);let i;try{i=e(...l)}finally{Ia(r),o._d&&_r(1)}return _c(t),i};return o._n=!0,o._c=!0,o._d=!0,o}let Io=!1;function Ma(){Io=!0}function uo(e){const{type:t,vnode:a,proxy:o,withProxy:l,props:r,propsOptions:[i],slots:c,attrs:u,emit:p,render:f,renderCache:d,data:h,setupState:k,ctx:v,inheritAttrs:y}=e;let $,P;const E=Ia(e);Io=!1;try{if(a.shapeFlag&4){const B=l||o;$=Ln(f.call(B,B,d,r,k,h,v)),P=u}else{const B=t;u===r&&Ma(),$=Ln(B.length>1?B(r,{get attrs(){return Ma(),u},slots:c,emit:p}):B(r,null)),P=t.props?u:Rd(u)}}catch(B){Hs.length=0,Ga(B,e,1),$=b(vn)}let C=$,O;if($.patchFlag>0&&$.patchFlag&2048&&([C,O]=$d($)),P&&y!==!1){const B=Object.keys(P),{shapeFlag:U}=C;if(B.length){if(U&7)i&&B.some(Sa)&&(P=Ed(P,i)),C=ct(C,P);else if(!Io&&C.type!==vn){const J=Object.keys(u),Z=[],oe=[];for(let ie=0,ye=J.length;ie<ye;ie++){const He=J[ie];aa(He)?Sa(He)||Z.push(He[2].toLowerCase()+He.slice(3)):oe.push(He)}oe.length&&L(`Extraneous non-props attributes (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),Z.length&&L(`Extraneous non-emits event listeners (${Z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return a.dirs&&(rr(C)||L("Runtime directive used on component with non-element root node. The directives will not function as intended."),C=ct(C),C.dirs=C.dirs?C.dirs.concat(a.dirs):a.dirs),a.transition&&(rr(C)||L("Component inside <Transition> renders non-element root node that cannot be animated."),C.transition=a.transition),O?O(C):$=C,Ia(E),$}const $d=e=>{const t=e.children,a=e.dynamicChildren,o=bc(t);if(!o)return[e,void 0];const l=t.indexOf(o),r=a?a.indexOf(o):-1,i=c=>{t[l]=c,a&&(r>-1?a[r]=c:c.patchFlag>0&&(e.dynamicChildren=[...a,c]))};return[Ln(o),i]};function bc(e){let t;for(let a=0;a<e.length;a++){const o=e[a];if(Et(o)){if(o.type!==vn||o.children==="v-if"){if(t)return;t=o}}else return}return t}const Rd=e=>{let t;for(const a in e)(a==="class"||a==="style"||aa(a))&&((t||(t={}))[a]=e[a]);return t},Ed=(e,t)=>{const a={};for(const o in e)(!Sa(o)||!(o.slice(9)in t))&&(a[o]=e[o]);return a},rr=e=>e.shapeFlag&7||e.type===vn;function Sd(e,t,a){const{props:o,children:l,component:r}=e,{props:i,children:c,patchFlag:u}=t,p=r.emitsOptions;if((l||c)&&yt||t.dirs||t.transition)return!0;if(a&&u>=0){if(u&1024)return!0;if(u&16)return o?ir(o,i,p):!!i;if(u&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(i[h]!==o[h]&&!Qa(p,h))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:o===i?!1:o?i?ir(o,i,p):!0:!!i;return!1}function ir(e,t,a){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(t[r]!==e[r]&&!Qa(a,r))return!0}return!1}function Cd({vnode:e,parent:t},a){for(;t&&t.subTree===e;)(e=t.vnode).el=a,t=t.parent}const wc=e=>e.__isSuspense;function Pd(e,t){t&&t.pendingBranch?le(e)?t.effects.push(...e):t.effects.push(e):fc(e)}function xn(e,t){if(!Ye)L("provide() can only be used inside setup().");else{let a=Ye.provides;const o=Ye.parent&&Ye.parent.provides;o===a&&(a=Ye.provides=Object.create(o)),a[e]=t}}function V(e,t,a=!1){const o=Ye||Ge;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&e in l)return l[e];if(arguments.length>1)return a&&ce(t)?t.call(o.proxy):t;L(`injection "${String(e)}" not found.`)}else L("inject() can only be used inside setup() or functional components.")}function ws(e,t){return xl(e,null,t)}const ha={};function Fe(e,t,a){return ce(t)||L("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),xl(e,t,a)}function xl(e,t,{immediate:a,deep:o,flush:l,onTrack:r,onTrigger:i}=Le){t||(a!==void 0&&L('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&L('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=O=>{L("Invalid watch source: ",O,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Ye;let p,f=!1,d=!1;if(xe(e)?(p=()=>e.value,f=Oa(e)):Vt(e)?(p=()=>e,o=!0):le(e)?(d=!0,f=e.some(O=>Vt(O)||Oa(O)),p=()=>e.map(O=>{if(xe(O))return O.value;if(Vt(O))return Dt(O);if(ce(O))return lt(O,u,2);c(O)})):ce(e)?t?p=()=>lt(e,u,2):p=()=>{if(!(u&&u.isUnmounted))return h&&h(),jn(e,u,3,[k])}:(p=kn,c(e)),t&&o){const O=p;p=()=>Dt(O())}let h,k=O=>{h=E.onStop=()=>{lt(O,u,4)}},v;if(Gs)if(k=kn,t?a&&jn(t,u,3,[p(),d?[]:void 0,k]):p(),l==="sync"){const O=Mf();v=O.__watcherHandles||(O.__watcherHandles=[])}else return kn;let y=d?new Array(e.length).fill(ha):ha;const $=()=>{if(E.active)if(t){const O=E.run();(o||f||(d?O.some((B,U)=>zs(B,y[U])):zs(O,y)))&&(h&&h(),jn(t,u,3,[O,y===ha?void 0:d&&y[0]===ha?[]:y,k]),y=O)}else E.run()};$.allowRecurse=!!t;let P;l==="sync"?P=$:l==="post"?P=()=>tn($,u&&u.suspense):($.pre=!0,u&&($.id=u.uid),P=()=>Ja($));const E=new fl(p,P);E.onTrack=r,E.onTrigger=i,t?a?$():y=E.run():l==="post"?tn(E.run.bind(E),u&&u.suspense):E.run();const C=()=>{E.stop(),u&&u.scope&&rl(u.scope.effects,E)};return v&&v.push(C),C}function Td(e,t,a){const o=this.proxy,l=je(e)?e.includes(".")?xc(o,e):()=>o[e]:e.bind(o,o);let r;ce(t)?r=t:(r=t.handler,a=t);const i=Ye;gs(this);const c=xl(l,r.bind(o),a);return i?gs(i):Bt(),c}function xc(e,t){const a=t.split(".");return()=>{let o=e;for(let l=0;l<a.length&&o;l++)o=o[a[l]];return o}}function Dt(e,t){if(!Te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))Dt(e.value,t);else if(le(e))for(let a=0;a<e.length;a++)Dt(e[a],t);else if(Ui(e)||Ft(e))e.forEach(a=>{Dt(a,t)});else if(Wi(e))for(const a in e)Dt(e[a],t);return e}function $c(e,t){e.shapeFlag&6&&e.component?$c(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Re(e){return ce(e)?{setup:e,name:e.name}:e}const ms=e=>!!e.type.__asyncLoader,$l=e=>e.type.__isKeepAlive,Od={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const a=Pt(),o=a.ctx;if(!o.renderer)return()=>{const E=t.default&&t.default();return E&&E.length===1?E[0]:E};const l=new Map,r=new Set;let i=null;a.__v_cache=l;const c=a.suspense,{renderer:{p:u,m:p,um:f,o:{createElement:d}}}=o,h=d("div");o.activate=(E,C,O,B,U)=>{const J=E.component;p(E,C,O,0,c),u(J.vnode,E,C,O,J,c,B,E.slotScopeIds,U),tn(()=>{J.isDeactivated=!1,J.a&&vt(J.a);const Z=E.props&&E.props.onVnodeMounted;Z&&Sn(Z,J.parent,E)},c),Ao(J)},o.deactivate=E=>{const C=E.component;p(E,h,null,1,c),tn(()=>{C.da&&vt(C.da);const O=E.props&&E.props.onVnodeUnmounted;O&&Sn(O,C.parent,E),C.isDeactivated=!0},c),Ao(C)};function k(E){po(E),f(E,a,c,!0)}function v(E){l.forEach((C,O)=>{const B=Js(C.type);B&&(!E||!E(B))&&y(O)})}function y(E){const C=l.get(E);!i||C.type!==i.type?k(C):i&&po(i),l.delete(E),r.delete(E)}Fe(()=>[e.include,e.exclude],([E,C])=>{E&&v(O=>Ns(E,O)),C&&v(O=>!Ns(C,O))},{flush:"post",deep:!0});let $=null;const P=()=>{$!=null&&l.set($,fo(a.subTree))};return no(P),Sc(P),Cc(()=>{l.forEach(E=>{const{subTree:C,suspense:O}=a,B=fo(C);if(E.type===B.type){po(B);const U=B.component.da;U&&tn(U,O);return}k(E)})}),()=>{if($=null,!t.default)return null;const E=t.default(),C=E[0];if(E.length>1)return L("KeepAlive should contain exactly one component child."),i=null,E;if(!Et(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return i=null,C;let O=fo(C);const B=O.type,U=Js(ms(O)?O.type.__asyncResolved||{}:B),{include:J,exclude:Z,max:oe}=e;if(J&&(!U||!Ns(J,U))||Z&&U&&Ns(Z,U))return i=O,C;const ie=O.key==null?B:O.key,ye=l.get(ie);return O.el&&(O=ct(O),C.shapeFlag&128&&(C.ssContent=O)),$=ie,ye?(O.el=ye.el,O.component=ye.component,O.transition&&$c(O,O.transition),O.shapeFlag|=512,r.delete(ie),r.add(ie)):(r.add(ie),oe&&r.size>parseInt(oe,10)&&y(r.values().next().value)),O.shapeFlag|=256,i=O,wc(C.type)?C:O}}},Rc=Od;function Ns(e,t){return le(e)?e.some(a=>Ns(a,t)):je(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Ad(e,t){Ec(e,"a",t)}function Id(e,t){Ec(e,"da",t)}function Ec(e,t,a=Ye){const o=e.__wdc||(e.__wdc=()=>{let l=a;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(eo(t,o,a),a){let l=a.parent;for(;l&&l.parent;)$l(l.parent.vnode)&&Md(o,t,a,l),l=l.parent}}function Md(e,t,a,o){const l=eo(t,e,o,!0);to(()=>{rl(o[t],l)},a)}function po(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function fo(e){return e.shapeFlag&128?e.ssContent:e}function eo(e,t,a=Ye,o=!1){if(a){const l=a[e]||(a[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(a.isUnmounted)return;Xt(),gs(a);const c=jn(t,a,e,i);return Bt(),es(),c});return o?l.unshift(r):l.push(r),r}else{const l=At(gl[e].replace(/ hook$/,""));L(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ut=e=>(t,a=Ye)=>(!Gs||e==="sp")&&eo(e,(...o)=>t(...o),a),Ld=ut("bm"),no=ut("m"),Dd=ut("bu"),Sc=ut("u"),Cc=ut("bum"),to=ut("um"),Nd=ut("sp"),Fd=ut("rtg"),jd=ut("rtc");function Vd(e,t=Ye){eo("ec",e,t)}function Pc(e){hp(e)&&L("Do not use built-in directive ids as custom directive id: "+e)}function Se(e,t){const a=Ge;if(a===null)return L("withDirectives can only be used inside render functions."),e;const o=ao(a)||a.proxy,l=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,c,u,p=Le]=t[r];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&Dt(c),l.push({dir:i,instance:o,value:c,oldValue:void 0,arg:u,modifiers:p}))}return e}function Tt(e,t,a,o){const l=e.dirs,r=t&&t.dirs;for(let i=0;i<l.length;i++){const c=l[i];r&&(c.oldValue=r[i].value);let u=c.dir[o];u&&(Xt(),jn(u,a,8,[e.el,c,e,t]),es())}}const Mo="components",Hd="directives";function Zt(e,t){return Tc(Mo,e,!0,t)||e}const Ud=Symbol();function ln(e){return Tc(Hd,e)}function Tc(e,t,a=!0,o=!1){const l=Ge||Ye;if(l){const r=l.type;if(e===Mo){const c=Js(r,!1);if(c&&(c===t||c===Zn(t)||c===qt(Zn(t))))return r}const i=cr(l[e]||r[e],t)||cr(l.appContext[e],t);if(!i&&o)return r;if(a&&!i){const c=e===Mo?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";L(`Failed to resolve ${e.slice(0,-1)}: ${t}${c}`)}return i}else L(`resolve${qt(e.slice(0,-1))} can only be used in render() or setup().`)}function cr(e,t){return e&&(e[t]||e[Zn(t)]||e[qt(Zn(t))])}function la(e,t,a,o){let l;const r=a&&a[o];if(le(e)||je(e)){l=new Array(e.length);for(let i=0,c=e.length;i<c;i++)l[i]=t(e[i],i,void 0,r&&r[i])}else if(typeof e=="number"){Number.isInteger(e)||L(`The v-for range expect an integer value but got ${e}.`),l=new Array(e);for(let i=0;i<e;i++)l[i]=t(i+1,i,void 0,r&&r[i])}else if(Te(e))if(e[Symbol.iterator])l=Array.from(e,(i,c)=>t(i,c,void 0,r&&r[c]));else{const i=Object.keys(e);l=new Array(i.length);for(let c=0,u=i.length;c<u;c++){const p=i[c];l[c]=t(e[p],p,c,r&&r[c])}}else l=[];return a&&(a[o]=l),l}function _n(e,t,a={},o,l){if(Ge.isCE||Ge.parent&&ms(Ge.parent)&&Ge.parent.isCE)return t!=="default"&&(a.name=t),b("slot",a,o&&o());let r=e[t];r&&r.length>1&&(L("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),w();const i=r&&Oc(r(a)),c=z(Ce,{key:a.key||i&&i.key||`_${t}`},i||(o?o():[]),i&&e._===1?64:-2);return!l&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function Oc(e){return e.some(t=>Et(t)?!(t.type===vn||t.type===Ce&&!Oc(t.children)):!0)?e:null}const Lo=e=>e?zc(e)?ao(e)||e.proxy:Lo(e.parent):null,Ut=ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ps(e.props),$attrs:e=>ps(e.attrs),$slots:e=>ps(e.slots),$refs:e=>ps(e.refs),$parent:e=>Lo(e.parent),$root:e=>Lo(e.root),$emit:e=>e.emit,$options:e=>El(e),$forceUpdate:e=>e.f||(e.f=()=>Ja(e.update)),$nextTick:e=>e.n||(e.n=Vn.bind(e.proxy)),$watch:e=>Td.bind(e)}),Rl=e=>e==="_"||e==="$",ho=(e,t)=>e!==Le&&!e.__isScriptSetup&&_e(e,t),Ac={get({_:e},t){const{ctx:a,setupState:o,data:l,props:r,accessCache:i,type:c,appContext:u}=e;if(t==="__isVue")return!0;let p;if(t[0]!=="$"){const k=i[t];if(k!==void 0)switch(k){case 1:return o[t];case 2:return l[t];case 4:return a[t];case 3:return r[t]}else{if(ho(o,t))return i[t]=1,o[t];if(l!==Le&&_e(l,t))return i[t]=2,l[t];if((p=e.propsOptions[0])&&_e(p,t))return i[t]=3,r[t];if(a!==Le&&_e(a,t))return i[t]=4,a[t];Do&&(i[t]=0)}}const f=Ut[t];let d,h;if(f)return t==="$attrs"&&(Rn(e,"get",t),Ma()),f(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(a!==Le&&_e(a,t))return i[t]=4,a[t];if(h=u.config.globalProperties,_e(h,t))return h[t];Ge&&(!je(t)||t.indexOf("__v")!==0)&&(l!==Le&&Rl(t[0])&&_e(l,t)?L(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ge&&L(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,a){const{data:o,setupState:l,ctx:r}=e;return ho(l,t)?(l[t]=a,!0):l.__isScriptSetup&&_e(l,t)?(L(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Le&&_e(o,t)?(o[t]=a,!0):_e(e.props,t)?(L(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(L(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:a}):r[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:o,appContext:l,propsOptions:r}},i){let c;return!!a[i]||e!==Le&&_e(e,i)||ho(t,i)||(c=r[0])&&_e(c,i)||_e(o,i)||_e(Ut,i)||_e(l.config.globalProperties,i)},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:_e(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}};Ac.ownKeys=e=>(L("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Bd(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Ut).forEach(a=>{Object.defineProperty(t,a,{configurable:!0,enumerable:!1,get:()=>Ut[a](e),set:kn})}),t}function Wd(e){const{ctx:t,propsOptions:[a]}=e;a&&Object.keys(a).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:kn})})}function zd(e){const{ctx:t,setupState:a}=e;Object.keys(de(a)).forEach(o=>{if(!a.__isScriptSetup){if(Rl(o[0])){L(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a[o],set:kn})}})}function Kd(){const e=Object.create(null);return(t,a)=>{e[a]?L(`${t} property "${a}" is already defined in ${e[a]}.`):e[a]=t}}let Do=!0;function qd(e){const t=El(e),a=e.proxy,o=e.ctx;Do=!1,t.beforeCreate&&ur(t.beforeCreate,e,"bc");const{data:l,computed:r,methods:i,watch:c,provide:u,inject:p,created:f,beforeMount:d,mounted:h,beforeUpdate:k,updated:v,activated:y,deactivated:$,beforeDestroy:P,beforeUnmount:E,destroyed:C,unmounted:O,render:B,renderTracked:U,renderTriggered:J,errorCaptured:Z,serverPrefetch:oe,expose:ie,inheritAttrs:ye,components:He,directives:en,filters:nn}=t,Ae=Kd();{const[K]=e.propsOptions;if(K)for(const ae in K)Ae("Props",ae)}if(p&&Yd(p,o,Ae,e.appContext.config.unwrapInjectedRef),i)for(const K in i){const ae=i[K];ce(ae)?(Object.defineProperty(o,K,{value:ae.bind(a),configurable:!0,enumerable:!0,writable:!0}),Ae("Methods",K)):L(`Method "${K}" has type "${typeof ae}" in the component definition. Did you reference the function correctly?`)}if(l){ce(l)||L("The data option must be a function. Plain object usage is no longer supported.");const K=l.call(a,a);if(cl(K)&&L("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Te(K))L("data() should return an object.");else{e.data=Xe(K);for(const ae in K)Ae("Data",ae),Rl(ae[0])||Object.defineProperty(o,ae,{configurable:!0,enumerable:!0,get:()=>K[ae],set:kn})}}if(Do=!0,r)for(const K in r){const ae=r[K],fe=ce(ae)?ae.bind(a,a):ce(ae.get)?ae.get.bind(a,a):kn;fe===kn&&L(`Computed property "${K}" has no getter.`);const Ie=!ce(ae)&&ce(ae.set)?ae.set.bind(a):()=>{L(`Write operation failed: computed property "${K}" is readonly.`)},gn=T({get:fe,set:Ie});Object.defineProperty(o,K,{enumerable:!0,configurable:!0,get:()=>gn.value,set:sn=>gn.value=sn}),Ae("Computed",K)}if(c)for(const K in c)Ic(c[K],o,a,K);if(u){const K=ce(u)?u.call(a):u;Reflect.ownKeys(K).forEach(ae=>{xn(ae,K[ae])})}f&&ur(f,e,"c");function Ve(K,ae){le(ae)?ae.forEach(fe=>K(fe.bind(a))):ae&&K(ae.bind(a))}if(Ve(Ld,d),Ve(no,h),Ve(Dd,k),Ve(Sc,v),Ve(Ad,y),Ve(Id,$),Ve(Vd,Z),Ve(jd,U),Ve(Fd,J),Ve(Cc,E),Ve(to,O),Ve(Nd,oe),le(ie))if(ie.length){const K=e.exposed||(e.exposed={});ie.forEach(ae=>{Object.defineProperty(K,ae,{get:()=>a[ae],set:fe=>a[ae]=fe})})}else e.exposed||(e.exposed={});B&&e.render===kn&&(e.render=B),ye!=null&&(e.inheritAttrs=ye),He&&(e.components=He),en&&(e.directives=en)}function Yd(e,t,a=kn,o=!1){le(e)&&(e=No(e));for(const l in e){const r=e[l];let i;Te(r)?"default"in r?i=V(r.from||l,r.default,!0):i=V(r.from||l):i=V(r),xe(i)?o?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>i.value,set:c=>i.value=c}):(L(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[l]=i):t[l]=i,a("Inject",l)}}function ur(e,t,a){jn(le(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,a)}function Ic(e,t,a,o){const l=o.includes(".")?xc(a,o):()=>a[o];if(je(e)){const r=t[e];ce(r)?Fe(l,r):L(`Invalid watch handler specified by key "${e}"`,r)}else if(ce(e))Fe(l,e.bind(a));else if(Te(e))if(le(e))e.forEach(r=>Ic(r,t,a,o));else{const r=ce(e.handler)?e.handler.bind(a):t[e.handler];ce(r)?Fe(l,r,e):L(`Invalid watch handler specified by key "${e.handler}"`,r)}else L(`Invalid watch option: "${o}"`,e)}function El(e){const t=e.type,{mixins:a,extends:o}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,c=r.get(t);let u;return c?u=c:!l.length&&!a&&!o?u=t:(u={},l.length&&l.forEach(p=>La(u,p,i,!0)),La(u,t,i)),Te(t)&&r.set(t,u),u}function La(e,t,a,o=!1){const{mixins:l,extends:r}=t;r&&La(e,r,a,!0),l&&l.forEach(i=>La(e,i,a,!0));for(const i in t)if(o&&i==="expose")L('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=Zd[i]||a&&a[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Zd={data:pr,props:It,emits:It,methods:It,computed:It,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:It,directives:It,watch:Jd,provide:pr,inject:Gd};function pr(e,t){return t?e?function(){return ze(ce(e)?e.call(this,this):e,ce(t)?t.call(this,this):t)}:t:e}function Gd(e,t){return It(No(e),No(t))}function No(e){if(le(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function un(e,t){return e?[...new Set([].concat(e,t))]:t}function It(e,t){return e?ze(ze(Object.create(null),e),t):t}function Jd(e,t){if(!e)return t;if(!t)return e;const a=ze(Object.create(null),e);for(const o in t)a[o]=un(e[o],t[o]);return a}function Qd(e,t,a,o=!1){const l={},r={};Ca(r,so,1),e.propsDefaults=Object.create(null),Mc(e,t,l,r);for(const i in e.propsOptions[0])i in l||(l[i]=void 0);Dc(t||{},l,e),a?e.props=o?l:Kp(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function Xd(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function ef(e,t,a,o){const{props:l,attrs:r,vnode:{patchFlag:i}}=e,c=de(l),[u]=e.propsOptions;let p=!1;if(!Xd(e)&&(o||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(Qa(e.emitsOptions,h))continue;const k=t[h];if(u)if(_e(r,h))k!==r[h]&&(r[h]=k,p=!0);else{const v=Zn(h);l[v]=Fo(u,c,v,k,e,!1)}else k!==r[h]&&(r[h]=k,p=!0)}}}else{Mc(e,t,l,r)&&(p=!0);let f;for(const d in c)(!t||!_e(t,d)&&((f=rt(d))===d||!_e(t,f)))&&(u?a&&(a[d]!==void 0||a[f]!==void 0)&&(l[d]=Fo(u,c,d,void 0,e,!0)):delete l[d]);if(r!==c)for(const d in r)(!t||!_e(t,d))&&(delete r[d],p=!0)}p&&it(e,"set","$attrs"),Dc(t||{},l,e)}function Mc(e,t,a,o){const[l,r]=e.propsOptions;let i=!1,c;if(t)for(let u in t){if(_a(u))continue;const p=t[u];let f;l&&_e(l,f=Zn(u))?!r||!r.includes(f)?a[f]=p:(c||(c={}))[f]=p:Qa(e.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,i=!0)}if(r){const u=de(a),p=c||Le;for(let f=0;f<r.length;f++){const d=r[f];a[d]=Fo(l,u,d,p[d],e,!_e(p,d))}}return i}function Fo(e,t,a,o,l,r){const i=e[a];if(i!=null){const c=_e(i,"default");if(c&&o===void 0){const u=i.default;if(i.type!==Function&&ce(u)){const{propsDefaults:p}=l;a in p?o=p[a]:(gs(l),o=p[a]=u.call(null,t),Bt())}else o=u}i[0]&&(r&&!c?o=!1:i[1]&&(o===""||o===rt(a))&&(o=!0))}return o}function Lc(e,t,a=!1){const o=t.propsCache,l=o.get(e);if(l)return l;const r=e.props,i={},c=[];let u=!1;if(!ce(e)){const f=d=>{u=!0;const[h,k]=Lc(d,t,!0);ze(i,h),k&&c.push(...k)};!a&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!u)return Te(e)&&o.set(e,fs),fs;if(le(r))for(let f=0;f<r.length;f++){je(r[f])||L("props must be strings when using array syntax.",r[f]);const d=Zn(r[f]);dr(d)&&(i[d]=Le)}else if(r){Te(r)||L("invalid props options",r);for(const f in r){const d=Zn(f);if(dr(d)){const h=r[f],k=i[d]=le(h)||ce(h)?{type:h}:Object.assign({},h);if(k){const v=hr(Boolean,k.type),y=hr(String,k.type);k[0]=v>-1,k[1]=y<0||v<y,(v>-1||_e(k,"default"))&&c.push(d)}}}}const p=[i,c];return Te(e)&&o.set(e,p),p}function dr(e){return e[0]!=="$"?!0:(L(`Invalid prop name: "${e}" is a reserved property.`),!1)}function jo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function fr(e,t){return jo(e)===jo(t)}function hr(e,t){return le(t)?t.findIndex(a=>fr(a,e)):ce(t)&&fr(t,e)?0:-1}function Dc(e,t,a){const o=de(t),l=a.propsOptions[0];for(const r in l){let i=l[r];i!=null&&nf(r,o[r],i,!_e(e,r)&&!_e(e,rt(r)))}}function nf(e,t,a,o){const{type:l,required:r,validator:i}=a;if(r&&o){L('Missing required prop: "'+e+'"');return}if(!(t==null&&!a.required)){if(l!=null&&l!==!0){let c=!1;const u=le(l)?l:[l],p=[];for(let f=0;f<u.length&&!c;f++){const{valid:d,expectedType:h}=sf(t,u[f]);p.push(h||""),c=d}if(!c){L(af(e,t,p));return}}i&&!i(t)&&L('Invalid prop: custom validator check failed for prop "'+e+'".')}}const tf=Ct("String,Number,Boolean,Function,Symbol,BigInt");function sf(e,t){let a;const o=jo(t);if(tf(o)){const l=typeof e;a=l===o.toLowerCase(),!a&&l==="object"&&(a=e instanceof t)}else o==="Object"?a=Te(e):o==="Array"?a=le(e):o==="null"?a=e===null:a=e instanceof t;return{valid:a,expectedType:o}}function af(e,t,a){let o=`Invalid prop: type check failed for prop "${e}". Expected ${a.map(qt).join(" | ")}`;const l=a[0],r=ul(t),i=mr(t,l),c=mr(t,r);return a.length===1&&kr(l)&&!of(l,r)&&(o+=` with value ${i}`),o+=`, got ${r} `,kr(r)&&(o+=`with value ${c}.`),o}function mr(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function kr(e){return["string","number","boolean"].some(a=>e.toLowerCase()===a)}function of(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Nc=e=>e[0]==="_"||e==="$stable",Sl=e=>le(e)?e.map(Ln):[Ln(e)],lf=(e,t,a)=>{if(t._n)return t;const o=g((...l)=>(Ye&&L(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Sl(t(...l))),a);return o._c=!1,o},Fc=(e,t,a)=>{const o=e._ctx;for(const l in e){if(Nc(l))continue;const r=e[l];if(ce(r))t[l]=lf(l,r,o);else if(r!=null){L(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const i=Sl(r);t[l]=()=>i}}},jc=(e,t)=>{$l(e.vnode)||L("Non-function value encountered for default slot. Prefer function slots for better performance.");const a=Sl(t);e.slots.default=()=>a},rf=(e,t)=>{if(e.vnode.shapeFlag&32){const a=t._;a?(e.slots=de(t),Ca(t,"_",a)):Fc(t,e.slots={})}else e.slots={},t&&jc(e,t);Ca(e.slots,so,1)},cf=(e,t,a)=>{const{vnode:o,slots:l}=e;let r=!0,i=Le;if(o.shapeFlag&32){const c=t._;c?yt?ze(l,t):a&&c===1?r=!1:(ze(l,t),!a&&c===1&&delete l._):(r=!t.$stable,Fc(t,l)),i=t}else t&&(jc(e,t),i={default:1});if(r)for(const c in l)!Nc(c)&&!(c in i)&&delete l[c]};function Vc(){return{app:null,config:{isNativeTag:Hi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uf=0;function pf(e,t){return function(o,l=null){ce(o)||(o=Object.assign({},o)),l!=null&&!Te(l)&&(L("root props passed to app.mount() must be an object."),l=null);const r=Vc(),i=new Set;let c=!1;const u=r.app={_uid:uf++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:yr,get config(){return r.config},set config(p){L("app.config cannot be replaced. Modify individual options instead.")},use(p,...f){return i.has(p)?L("Plugin has already been applied to target app."):p&&ce(p.install)?(i.add(p),p.install(u,...f)):ce(p)?(i.add(p),p(u,...f)):L('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return r.mixins.includes(p)?L("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):r.mixins.push(p),u},component(p,f){return Uo(p,r.config),f?(r.components[p]&&L(`Component "${p}" has already been registered in target app.`),r.components[p]=f,u):r.components[p]},directive(p,f){return Pc(p),f?(r.directives[p]&&L(`Directive "${p}" has already been registered in target app.`),r.directives[p]=f,u):r.directives[p]},mount(p,f,d){if(c)L("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&L("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=b(o,l);return h.appContext=r,r.reload=()=>{e(ct(h),p,d)},f&&t?t(h,p):e(h,p,d),c=!0,u._container=p,p.__vue_app__=u,u._instance=h.component,hd(u,yr),ao(h.component)||h.component.proxy}},unmount(){c?(e(null,u._container),u._instance=null,md(u),delete u._container.__vue_app__):L("Cannot unmount an app that is not mounted.")},provide(p,f){return p in r.provides&&L(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),r.provides[p]=f,u}};return u}}function Vo(e,t,a,o,l=!1){if(le(e)){e.forEach((h,k)=>Vo(h,t&&(le(t)?t[k]:t),a,o,l));return}if(ms(o)&&!l)return;const r=o.shapeFlag&4?ao(o.component)||o.component.proxy:o.el,i=l?null:r,{i:c,r:u}=e;if(!c){L("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=t&&t.r,f=c.refs===Le?c.refs={}:c.refs,d=c.setupState;if(p!=null&&p!==u&&(je(p)?(f[p]=null,_e(d,p)&&(d[p]=null)):xe(p)&&(p.value=null)),ce(u))lt(u,c,12,[i,f]);else{const h=je(u),k=xe(u);if(h||k){const v=()=>{if(e.f){const y=h?_e(d,u)?d[u]:f[u]:u.value;l?le(y)&&rl(y,r):le(y)?y.includes(r)||y.push(r):h?(f[u]=[r],_e(d,u)&&(d[u]=f[u])):(u.value=[r],e.k&&(f[e.k]=u.value))}else h?(f[u]=i,_e(d,u)&&(d[u]=i)):k?(u.value=i,e.k&&(f[e.k]=i)):L("Invalid template ref type:",u,`(${typeof u})`)};i?(v.id=-1,tn(v,a)):v()}else L("Invalid template ref type:",u,`(${typeof u})`)}}let Rs,_t;function et(e,t){e.appContext.config.performance&&Da()&&_t.mark(`vue-${t}-${e.uid}`),_d(e,t,Da()?_t.now():Date.now())}function nt(e,t){if(e.appContext.config.performance&&Da()){const a=`vue-${t}-${e.uid}`,o=a+":end";_t.mark(o),_t.measure(`<${oo(e,e.type)}> ${t}`,a,o),_t.clearMarks(a),_t.clearMarks(o)}gd(e,t,Da()?_t.now():Date.now())}function Da(){return Rs!==void 0||(typeof window<"u"&&window.performance?(Rs=!0,_t=window.performance):Rs=!1),Rs}function df(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const tn=Pd;function ff(e){return hf(e)}function hf(e,t){df();const a=zi();a.__VUE__=!0,vc(a.__VUE_DEVTOOLS_GLOBAL_HOOK__,a);const{insert:o,remove:l,patchProp:r,createElement:i,createText:c,createComment:u,setText:p,setElementText:f,parentNode:d,nextSibling:h,setScopeId:k=kn,insertStaticContent:v}=e,y=(m,_,R,I=null,A=null,F=null,W=!1,N=null,j=yt?!1:!!_.dynamicChildren)=>{if(m===_)return;m&&!Es(m,_)&&(I=Q(m),mn(m,A,F,!0),m=null),_.patchFlag===-2&&(j=!1,_.dynamicChildren=null);const{type:M,ref:te,shapeFlag:X}=_;switch(M){case ra:$(m,_,R,I);break;case vn:P(m,_,R,I);break;case ba:m==null?E(_,R,I,W):C(m,_,R,W);break;case Ce:en(m,_,R,I,A,F,W,N,j);break;default:X&1?U(m,_,R,I,A,F,W,N,j):X&6?nn(m,_,R,I,A,F,W,N,j):X&64||X&128?M.process(m,_,R,I,A,F,W,N,j,be):L("Invalid VNode type:",M,`(${typeof M})`)}te!=null&&A&&Vo(te,m&&m.ref,F,_||m,!_)},$=(m,_,R,I)=>{if(m==null)o(_.el=c(_.children),R,I);else{const A=_.el=m.el;_.children!==m.children&&p(A,_.children)}},P=(m,_,R,I)=>{m==null?o(_.el=u(_.children||""),R,I):_.el=m.el},E=(m,_,R,I)=>{[m.el,m.anchor]=v(m.children,_,R,I,m.el,m.anchor)},C=(m,_,R,I)=>{if(_.children!==m.children){const A=h(m.anchor);B(m),[_.el,_.anchor]=v(_.children,R,A,I)}else _.el=m.el,_.anchor=m.anchor},O=({el:m,anchor:_},R,I)=>{let A;for(;m&&m!==_;)A=h(m),o(m,R,I),m=A;o(_,R,I)},B=({el:m,anchor:_})=>{let R;for(;m&&m!==_;)R=h(m),l(m),m=R;l(_)},U=(m,_,R,I,A,F,W,N,j)=>{W=W||_.type==="svg",m==null?J(_,R,I,A,F,W,N,j):ie(m,_,A,F,W,N,j)},J=(m,_,R,I,A,F,W,N)=>{let j,M;const{type:te,props:X,shapeFlag:se,transition:pe,dirs:ge}=m;if(j=m.el=i(m.type,F,X&&X.is,X),se&8?f(j,m.children):se&16&&oe(m.children,j,null,I,A,F&&te!=="foreignObject",W,N),ge&&Tt(m,null,I,"created"),X){for(const Me in X)Me!=="value"&&!_a(Me)&&r(j,Me,null,X[Me],F,m.children,I,A,H);"value"in X&&r(j,"value",null,X.value),(M=X.onVnodeBeforeMount)&&Sn(M,I,m)}Z(j,m,m.scopeId,W,I),Object.defineProperty(j,"__vnode",{value:m,enumerable:!1}),Object.defineProperty(j,"__vueParentComponent",{value:I,enumerable:!1}),ge&&Tt(m,null,I,"beforeMount");const Ne=(!A||A&&!A.pendingBranch)&&pe&&!pe.persisted;Ne&&pe.beforeEnter(j),o(j,_,R),((M=X&&X.onVnodeMounted)||Ne||ge)&&tn(()=>{M&&Sn(M,I,m),Ne&&pe.enter(j),ge&&Tt(m,null,I,"mounted")},A)},Z=(m,_,R,I,A)=>{if(R&&k(m,R),I)for(let F=0;F<I.length;F++)k(m,I[F]);if(A){let F=A.subTree;if(F.patchFlag>0&&F.patchFlag&2048&&(F=bc(F.children)||F),_===F){const W=A.vnode;Z(m,W,W.scopeId,W.slotScopeIds,A.parent)}}},oe=(m,_,R,I,A,F,W,N,j=0)=>{for(let M=j;M<m.length;M++){const te=m[M]=N?mt(m[M]):Ln(m[M]);y(null,te,_,R,I,A,F,W,N)}},ie=(m,_,R,I,A,F,W)=>{const N=_.el=m.el;let{patchFlag:j,dynamicChildren:M,dirs:te}=_;j|=m.patchFlag&16;const X=m.props||Le,se=_.props||Le;let pe;R&&Ot(R,!1),(pe=se.onVnodeBeforeUpdate)&&Sn(pe,R,_,m),te&&Tt(_,m,R,"beforeUpdate"),R&&Ot(R,!0),yt&&(j=0,W=!1,M=null);const ge=A&&_.type!=="foreignObject";if(M?(ye(m.dynamicChildren,M,N,R,I,ge,F),R&&R.type.__hmrId&&Vs(m,_)):W||fe(m,_,N,null,R,I,ge,F,!1),j>0){if(j&16)He(N,_,X,se,R,I,A);else if(j&2&&X.class!==se.class&&r(N,"class",null,se.class,A),j&4&&r(N,"style",X.style,se.style,A),j&8){const Ne=_.dynamicProps;for(let Me=0;Me<Ne.length;Me++){const We=Ne[Me],An=X[We],ss=se[We];(ss!==An||We==="value")&&r(N,We,An,ss,A,m.children,R,I,H)}}j&1&&m.children!==_.children&&f(N,_.children)}else!W&&M==null&&He(N,_,X,se,R,I,A);((pe=se.onVnodeUpdated)||te)&&tn(()=>{pe&&Sn(pe,R,_,m),te&&Tt(_,m,R,"updated")},I)},ye=(m,_,R,I,A,F,W)=>{for(let N=0;N<_.length;N++){const j=m[N],M=_[N],te=j.el&&(j.type===Ce||!Es(j,M)||j.shapeFlag&70)?d(j.el):R;y(j,M,te,null,I,A,F,W,!0)}},He=(m,_,R,I,A,F,W)=>{if(R!==I){if(R!==Le)for(const N in R)!_a(N)&&!(N in I)&&r(m,N,R[N],null,W,_.children,A,F,H);for(const N in I){if(_a(N))continue;const j=I[N],M=R[N];j!==M&&N!=="value"&&r(m,N,M,j,W,_.children,A,F,H)}"value"in I&&r(m,"value",R.value,I.value)}},en=(m,_,R,I,A,F,W,N,j)=>{const M=_.el=m?m.el:c(""),te=_.anchor=m?m.anchor:c("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:pe}=_;(yt||X&2048)&&(X=0,j=!1,se=null),pe&&(N=N?N.concat(pe):pe),m==null?(o(M,R,I),o(te,R,I),oe(_.children,R,te,A,F,W,N,j)):X>0&&X&64&&se&&m.dynamicChildren?(ye(m.dynamicChildren,se,R,A,F,W,N),A&&A.type.__hmrId?Vs(m,_):(_.key!=null||A&&_===A.subTree)&&Vs(m,_,!0)):fe(m,_,R,te,A,F,W,N,j)},nn=(m,_,R,I,A,F,W,N,j)=>{_.slotScopeIds=N,m==null?_.shapeFlag&512?A.ctx.activate(_,R,I,W,j):Ae(_,R,I,A,F,W,j):Ve(m,_,j)},Ae=(m,_,R,I,A,F,W)=>{const N=m.component=$f(m,I,A);if(N.type.__hmrId&&ud(N),ga(m),et(N,"mount"),$l(m)&&(N.ctx.renderer=be),et(N,"init"),Ef(N),nt(N,"init"),N.asyncDep){if(A&&A.registerDep(N,K),!m.el){const j=N.subTree=b(vn);P(null,j,_,R)}return}K(N,m,_,R,A,F,W),ya(),nt(N,"mount")},Ve=(m,_,R)=>{const I=_.component=m.component;if(Sd(m,_,R))if(I.asyncDep&&!I.asyncResolved){ga(_),ae(I,_,R),ya();return}else I.next=_,id(I.update),I.update();else _.el=m.el,I.vnode=_},K=(m,_,R,I,A,F,W)=>{const N=()=>{if(m.isMounted){let{next:te,bu:X,u:se,parent:pe,vnode:ge}=m,Ne=te,Me;ga(te||m.vnode),Ot(m,!1),te?(te.el=ge.el,ae(m,te,W)):te=ge,X&&vt(X),(Me=te.props&&te.props.onVnodeBeforeUpdate)&&Sn(Me,pe,te,ge),Ot(m,!0),et(m,"render");const We=uo(m);nt(m,"render");const An=m.subTree;m.subTree=We,et(m,"patch"),y(An,We,d(An.el),Q(An),m,A,F),nt(m,"patch"),te.el=We.el,Ne===null&&Cd(m,We.el),se&&tn(se,A),(Me=te.props&&te.props.onVnodeUpdated)&&tn(()=>Sn(Me,pe,te,ge),A),_c(m),ya()}else{let te;const{el:X,props:se}=_,{bm:pe,m:ge,parent:Ne}=m,Me=ms(_);if(Ot(m,!1),pe&&vt(pe),!Me&&(te=se&&se.onVnodeBeforeMount)&&Sn(te,Ne,_),Ot(m,!0),X&&re){const We=()=>{et(m,"render"),m.subTree=uo(m),nt(m,"render"),et(m,"hydrate"),re(X,m.subTree,m,A,null),nt(m,"hydrate")};Me?_.type.__asyncLoader().then(()=>!m.isUnmounted&&We()):We()}else{et(m,"render");const We=m.subTree=uo(m);nt(m,"render"),et(m,"patch"),y(null,We,R,I,m,A,F),nt(m,"patch"),_.el=We.el}if(ge&&tn(ge,A),!Me&&(te=se&&se.onVnodeMounted)){const We=_;tn(()=>Sn(te,Ne,We),A)}(_.shapeFlag&256||Ne&&ms(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&m.a&&tn(m.a,A),m.isMounted=!0,Ao(m),_=R=I=null}},j=m.effect=new fl(N,()=>Ja(M),m.scope),M=m.update=()=>j.run();M.id=m.uid,Ot(m,!0),j.onTrack=m.rtc?te=>vt(m.rtc,te):void 0,j.onTrigger=m.rtg?te=>vt(m.rtg,te):void 0,M.ownerInstance=m,M()},ae=(m,_,R)=>{_.component=m;const I=m.vnode.props;m.vnode=_,m.next=null,ef(m,_.props,I,R),cf(m,_.children,R),Xt(),or(),es()},fe=(m,_,R,I,A,F,W,N,j=!1)=>{const M=m&&m.children,te=m?m.shapeFlag:0,X=_.children,{patchFlag:se,shapeFlag:pe}=_;if(se>0){if(se&128){gn(M,X,R,I,A,F,W,N,j);return}else if(se&256){Ie(M,X,R,I,A,F,W,N,j);return}}pe&8?(te&16&&H(M,A,F),X!==M&&f(R,X)):te&16?pe&16?gn(M,X,R,I,A,F,W,N,j):H(M,A,F,!0):(te&8&&f(R,""),pe&16&&oe(X,R,I,A,F,W,N,j))},Ie=(m,_,R,I,A,F,W,N,j)=>{m=m||fs,_=_||fs;const M=m.length,te=_.length,X=Math.min(M,te);let se;for(se=0;se<X;se++){const pe=_[se]=j?mt(_[se]):Ln(_[se]);y(m[se],pe,R,null,A,F,W,N,j)}M>te?H(m,A,F,!0,!1,X):oe(_,R,I,A,F,W,N,j,X)},gn=(m,_,R,I,A,F,W,N,j)=>{let M=0;const te=_.length;let X=m.length-1,se=te-1;for(;M<=X&&M<=se;){const pe=m[M],ge=_[M]=j?mt(_[M]):Ln(_[M]);if(Es(pe,ge))y(pe,ge,R,null,A,F,W,N,j);else break;M++}for(;M<=X&&M<=se;){const pe=m[X],ge=_[se]=j?mt(_[se]):Ln(_[se]);if(Es(pe,ge))y(pe,ge,R,null,A,F,W,N,j);else break;X--,se--}if(M>X){if(M<=se){const pe=se+1,ge=pe<te?_[pe].el:I;for(;M<=se;)y(null,_[M]=j?mt(_[M]):Ln(_[M]),R,ge,A,F,W,N,j),M++}}else if(M>se)for(;M<=X;)mn(m[M],A,F,!0),M++;else{const pe=M,ge=M,Ne=new Map;for(M=ge;M<=se;M++){const cn=_[M]=j?mt(_[M]):Ln(_[M]);cn.key!=null&&(Ne.has(cn.key)&&L("Duplicate keys found during update:",JSON.stringify(cn.key),"Make sure keys are unique."),Ne.set(cn.key,M))}let Me,We=0;const An=se-ge+1;let ss=!1,Yl=0;const $s=new Array(An);for(M=0;M<An;M++)$s[M]=0;for(M=pe;M<=X;M++){const cn=m[M];if(We>=An){mn(cn,A,F,!0);continue}let Bn;if(cn.key!=null)Bn=Ne.get(cn.key);else for(Me=ge;Me<=se;Me++)if($s[Me-ge]===0&&Es(cn,_[Me])){Bn=Me;break}Bn===void 0?mn(cn,A,F,!0):($s[Bn-ge]=M+1,Bn>=Yl?Yl=Bn:ss=!0,y(cn,_[Bn],R,null,A,F,W,N,j),We++)}const Zl=ss?mf($s):fs;for(Me=Zl.length-1,M=An-1;M>=0;M--){const cn=ge+M,Bn=_[cn],Gl=cn+1<te?_[cn+1].el:I;$s[M]===0?y(null,Bn,R,Gl,A,F,W,N,j):ss&&(Me<0||M!==Zl[Me]?sn(Bn,R,Gl,2):Me--)}}},sn=(m,_,R,I,A=null)=>{const{el:F,type:W,transition:N,children:j,shapeFlag:M}=m;if(M&6){sn(m.component.subTree,_,R,I);return}if(M&128){m.suspense.move(_,R,I);return}if(M&64){W.move(m,_,R,be);return}if(W===Ce){o(F,_,R);for(let X=0;X<j.length;X++)sn(j[X],_,R,I);o(m.anchor,_,R);return}if(W===ba){O(m,_,R);return}if(I!==2&&M&1&&N)if(I===0)N.beforeEnter(F),o(F,_,R),tn(()=>N.enter(F),A);else{const{leave:X,delayLeave:se,afterLeave:pe}=N,ge=()=>o(F,_,R),Ne=()=>{X(F,()=>{ge(),pe&&pe()})};se?se(F,ge,Ne):Ne()}else o(F,_,R)},mn=(m,_,R,I=!1,A=!1)=>{const{type:F,props:W,ref:N,children:j,dynamicChildren:M,shapeFlag:te,patchFlag:X,dirs:se}=m;if(N!=null&&Vo(N,null,R,m,!0),te&256){_.ctx.deactivate(m);return}const pe=te&1&&se,ge=!ms(m);let Ne;if(ge&&(Ne=W&&W.onVnodeBeforeUnmount)&&Sn(Ne,_,m),te&6)G(m.component,R,I);else{if(te&128){m.suspense.unmount(R,I);return}pe&&Tt(m,null,_,"beforeUnmount"),te&64?m.type.remove(m,_,R,A,be,I):M&&(F!==Ce||X>0&&X&64)?H(M,_,R,!1,!0):(F===Ce&&X&384||!A&&te&16)&&H(j,_,R),I&&pt(m)}(ge&&(Ne=W&&W.onVnodeUnmounted)||pe)&&tn(()=>{Ne&&Sn(Ne,_,m),pe&&Tt(m,null,_,"unmounted")},R)},pt=m=>{const{type:_,el:R,anchor:I,transition:A}=m;if(_===Ce){m.patchFlag>0&&m.patchFlag&2048&&A&&!A.persisted?m.children.forEach(W=>{W.type===vn?l(W.el):pt(W)}):S(R,I);return}if(_===ba){B(m);return}const F=()=>{l(R),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(m.shapeFlag&1&&A&&!A.persisted){const{leave:W,delayLeave:N}=A,j=()=>W(R,F);N?N(m.el,F,j):j()}else F()},S=(m,_)=>{let R;for(;m!==_;)R=h(m),l(m),m=R;l(_)},G=(m,_,R)=>{m.type.__hmrId&&pd(m);const{bum:I,scope:A,update:F,subTree:W,um:N}=m;I&&vt(I),A.stop(),F&&(F.active=!1,mn(W,m,_,R)),N&&tn(N,_),tn(()=>{m.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),vd(m)},H=(m,_,R,I=!1,A=!1,F=0)=>{for(let W=F;W<m.length;W++)mn(m[W],_,R,I,A)},Q=m=>m.shapeFlag&6?Q(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),ve=(m,_,R)=>{m==null?_._vnode&&mn(_._vnode,null,null,!0):y(_._vnode||null,m,_,null,null,null,R),or(),hc(),_._vnode=m},be={p:y,um:mn,m:sn,r:pt,mt:Ae,mc:oe,pc:fe,pbc:ye,n:Q,o:e};let ue,re;return t&&([ue,re]=t(be)),{render:ve,hydrate:ue,createApp:pf(ve,ue)}}function Ot({effect:e,update:t},a){e.allowRecurse=t.allowRecurse=a}function Vs(e,t,a=!1){const o=e.children,l=t.children;if(le(o)&&le(l))for(let r=0;r<o.length;r++){const i=o[r];let c=l[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[r]=mt(l[r]),c.el=i.el),a||Vs(i,c)),c.type===ra&&(c.el=i.el),c.type===vn&&!c.el&&(c.el=i.el)}}function mf(e){const t=e.slice(),a=[0];let o,l,r,i,c;const u=e.length;for(o=0;o<u;o++){const p=e[o];if(p!==0){if(l=a[a.length-1],e[l]<p){t[o]=l,a.push(o);continue}for(r=0,i=a.length-1;r<i;)c=r+i>>1,e[a[c]]<p?r=c+1:i=c;p<e[a[r]]&&(r>0&&(t[o]=a[r-1]),a[r]=o)}}for(r=a.length,i=a[r-1];r-- >0;)a[r]=i,i=t[i];return a}const kf=e=>e.__isTeleport,ks=e=>e&&(e.disabled||e.disabled===""),vr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ho=(e,t)=>{const a=e&&e.to;if(je(a))if(t){const o=t(a);return o||L(`Failed to locate Teleport target with selector "${a}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return L("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!a&&!ks(e)&&L(`Invalid Teleport target: ${a}`),a},vf={__isTeleport:!0,process(e,t,a,o,l,r,i,c,u,p){const{mc:f,pc:d,pbc:h,o:{insert:k,querySelector:v,createText:y,createComment:$}}=p,P=ks(t.props);let{shapeFlag:E,children:C,dynamicChildren:O}=t;if(yt&&(u=!1,O=null),e==null){const B=t.el=$("teleport start"),U=t.anchor=$("teleport end");k(B,a,o),k(U,a,o);const J=t.target=Ho(t.props,v),Z=t.targetAnchor=y("");J?(k(Z,J),i=i||vr(J)):P||L("Invalid Teleport target on mount:",J,`(${typeof J})`);const oe=(ie,ye)=>{E&16&&f(C,ie,ye,l,r,i,c,u)};P?oe(a,U):J&&oe(J,Z)}else{t.el=e.el;const B=t.anchor=e.anchor,U=t.target=e.target,J=t.targetAnchor=e.targetAnchor,Z=ks(e.props),oe=Z?a:U,ie=Z?B:J;if(i=i||vr(U),O?(h(e.dynamicChildren,O,oe,l,r,i,c),Vs(e,t,!0)):u||d(e,t,oe,ie,l,r,i,c,!1),P)Z||ma(t,a,B,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ye=t.target=Ho(t.props,v);ye?ma(t,ye,null,p,0):L("Invalid Teleport target on update:",U,`(${typeof U})`)}else Z&&ma(t,U,J,p,1)}Hc(t)},remove(e,t,a,o,{um:l,o:{remove:r}},i){const{shapeFlag:c,children:u,anchor:p,targetAnchor:f,target:d,props:h}=e;if(d&&r(f),(i||!ks(h))&&(r(p),c&16))for(let k=0;k<u.length;k++){const v=u[k];l(v,t,a,!0,!!v.dynamicChildren)}},move:ma,hydrate:_f};function ma(e,t,a,{o:{insert:o},m:l},r=2){r===0&&o(e.targetAnchor,t,a);const{el:i,anchor:c,shapeFlag:u,children:p,props:f}=e,d=r===2;if(d&&o(i,t,a),(!d||ks(f))&&u&16)for(let h=0;h<p.length;h++)l(p[h],t,a,2);d&&o(c,t,a)}function _f(e,t,a,o,l,r,{o:{nextSibling:i,parentNode:c,querySelector:u}},p){const f=t.target=Ho(t.props,u);if(f){const d=f._lpa||f.firstChild;if(t.shapeFlag&16)if(ks(t.props))t.anchor=p(i(e),t,c(e),a,o,l,r),t.targetAnchor=d;else{t.anchor=i(e);let h=d;for(;h;)if(h=i(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,f._lpa=t.targetAnchor&&i(t.targetAnchor);break}p(d,t,f,a,o,l,r)}Hc(t)}return t.anchor&&i(t.anchor)}const x3=vf;function Hc(e){const t=e.ctx;if(t&&t.ut){let a=e.children[0].el;for(;a!==e.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",t.uid),a=a.nextSibling;t.ut()}}const Ce=Symbol("Fragment"),ra=Symbol("Text"),vn=Symbol("Comment"),ba=Symbol("Static"),Hs=[];let Nn=null;function w(e=!1){Hs.push(Nn=e?null:[])}function gf(){Hs.pop(),Nn=Hs[Hs.length-1]||null}let Zs=1;function _r(e){Zs+=e}function Uc(e){return e.dynamicChildren=Zs>0?Nn||fs:null,gf(),Zs>0&&Nn&&Nn.push(e),e}function D(e,t,a,o,l,r){return Uc(n(e,t,a,o,l,r,!0))}function z(e,t,a,o,l){return Uc(b(e,t,a,o,l,!0))}function Et(e){return e?e.__v_isVNode===!0:!1}function Es(e,t){return t.shapeFlag&6&&is.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const yf=(...e)=>bf(...e),so="__vInternal",Bc=({key:e})=>e??null,wa=({ref:e,ref_key:t,ref_for:a})=>e!=null?je(e)||xe(e)||ce(e)?{i:Ge,r:e,k:t,f:!!a}:e:null;function n(e,t=null,a=null,o=0,l=null,r=e===Ce?0:1,i=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bc(t),ref:t&&wa(t),scopeId:Xa,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Ge};return c?(Cl(u,a),r&128&&e.normalize(u)):a&&(u.shapeFlag|=je(a)?8:16),u.key!==u.key&&L("VNode created with invalid key (NaN). VNode type:",u.type),Zs>0&&!i&&Nn&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&Nn.push(u),u}const b=yf;function bf(e,t=null,a=null,o=0,l=null,r=!1){if((!e||e===Ud)&&(e||L(`Invalid vnode type when creating vnode: ${e}.`),e=vn),Et(e)){const c=ct(e,t,!0);return a&&Cl(c,a),Zs>0&&!r&&Nn&&(c.shapeFlag&6?Nn[Nn.indexOf(e)]=c:Nn.push(c)),c.patchFlag|=-2,c}if(Yc(e)&&(e=e.__vccOpts),t){t=he(t);let{class:c,style:u}=t;c&&!je(c)&&(t.class=Ue(c)),Te(u)&&(Aa(u)&&!le(u)&&(u=ze({},u)),t.style=Be(u))}const i=je(e)?1:wc(e)?128:kf(e)?64:Te(e)?4:ce(e)?2:0;return i&4&&Aa(e)&&(e=de(e),L("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),n(e,t,a,o,l,i,r,!0)}function he(e){return e?Aa(e)||so in e?ze({},e):e:null}function ct(e,t,a=!1){const{props:o,ref:l,patchFlag:r,children:i}=e,c=t?ee(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Bc(c),ref:t&&t.ref?a&&l?le(l)?l.concat(wa(t)):[l,wa(t)]:wa(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&le(i)?i.map(Wc):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ct(e.ssContent),ssFallback:e.ssFallback&&ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Wc(e){const t=ct(e);return le(e.children)&&(t.children=e.children.map(Wc)),t}function s(e=" ",t=0){return b(ra,null,e,t)}function me(e="",t=!1){return t?(w(),z(vn,null,e)):b(vn,null,e)}function Ln(e){return e==null||typeof e=="boolean"?b(vn):le(e)?b(Ce,null,e.slice()):typeof e=="object"?mt(e):b(ra,null,String(e))}function mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ct(e)}function Cl(e,t){let a=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(le(t))a=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),Cl(e,l()),l._c&&(l._d=!0));return}else{a=32;const l=t._;!l&&!(so in t)?t._ctx=Ge:l===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:Ge},a=32):(t=String(t),o&64?(a=16,t=[s(t)]):a=8);e.children=t,e.shapeFlag|=a}function ee(...e){const t={};for(let a=0;a<e.length;a++){const o=e[a];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=Ue([t.class,o.class]));else if(l==="style")t.style=Be([t.style,o.style]);else if(aa(l)){const r=t[l],i=o[l];i&&r!==i&&!(le(r)&&r.includes(i))&&(t[l]=r?[].concat(r,i):i)}else l!==""&&(t[l]=o[l])}return t}function Sn(e,t,a,o=null){jn(e,t,7,[a,o])}const wf=Vc();let xf=0;function $f(e,t,a){const o=e.type,l=(t?t.appContext:e.appContext)||wf,r={uid:xf++,vnode:e,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ki(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lc(o,l),emitsOptions:yc(o,l),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:o.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Bd(r),r.root=t?t.root:r,r.emit=bd.bind(null,r),e.ce&&e.ce(r),r}let Ye=null;const Pt=()=>Ye||Ge,gs=e=>{Ye=e,e.scope.on()},Bt=()=>{Ye&&Ye.scope.off(),Ye=null},Rf=Ct("slot,component");function Uo(e,t){const a=t.isNativeTag||Hi;(Rf(e)||a(e))&&L("Do not use built-in or reserved HTML elements as component id: "+e)}function zc(e){return e.vnode.shapeFlag&4}let Gs=!1;function Ef(e,t=!1){Gs=t;const{props:a,children:o}=e.vnode,l=zc(e);Qd(e,a,l,t),rf(e,o);const r=l?Sf(e,t):void 0;return Gs=!1,r}function Sf(e,t){var a;const o=e.type;{if(o.name&&Uo(o.name,e.appContext.config),o.components){const r=Object.keys(o.components);for(let i=0;i<r.length;i++)Uo(r[i],e.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let i=0;i<r.length;i++)Pc(r[i])}o.compilerOptions&&Cf()&&L('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ml(new Proxy(e.ctx,Ac)),Wd(e);const{setup:l}=o;if(l){const r=e.setupContext=l.length>1?qc(e):null;gs(e),Xt();const i=lt(l,e,0,[ps(e.props),r]);if(es(),Bt(),cl(i)){if(i.then(Bt,Bt),t)return i.then(c=>{gr(e,c,t)}).catch(c=>{Ga(c,e,0)});if(e.asyncDep=i,!e.suspense){const c=(a=o.name)!==null&&a!==void 0?a:"Anonymous";L(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else gr(e,i,t)}else Kc(e,t)}function gr(e,t,a){ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Te(t)?(Et(t)&&L("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=rc(t),zd(e)):t!==void 0&&L(`setup() should return an object. Received: ${t===null?"null":typeof t}`),Kc(e,a)}let Bo;const Cf=()=>!Bo;function Kc(e,t,a){const o=e.type;if(!e.render){if(!t&&Bo&&!o.render){const l=o.template||El(e).template;if(l){et(e,"compile");const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:u}=o,p=ze(ze({isCustomElement:r,delimiters:c},i),u);o.render=Bo(l,p),nt(e,"compile")}}e.render=o.render||kn}gs(e),Xt(),qd(e),es(),Bt(),!o.render&&e.render===kn&&!t&&(o.template?L('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):L("Component is missing template or render function."))}function Pf(e){return new Proxy(e.attrs,{get(t,a){return Ma(),Rn(e,"get","$attrs"),t[a]},set(){return L("setupContext.attrs is readonly."),!1},deleteProperty(){return L("setupContext.attrs is readonly."),!1}})}function qc(e){const t=o=>{e.exposed&&L("expose() should be called only once per setup()."),e.exposed=o||{}};let a;return Object.freeze({get attrs(){return a||(a=Pf(e))},get slots(){return ps(e.slots)},get emit(){return(o,...l)=>e.emit(o,...l)},expose:t})}function ao(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(rc(ml(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in Ut)return Ut[a](e)},has(t,a){return a in t||a in Ut}}))}const Tf=/(?:^|[-_])(\w)/g,Of=e=>e.replace(Tf,t=>t.toUpperCase()).replace(/[-_]/g,"");function Js(e,t=!0){return ce(e)?e.displayName||e.name:e.name||t&&e.__name}function oo(e,t,a=!1){let o=Js(t);if(!o&&t.__file){const l=t.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&e&&e.parent){const l=r=>{for(const i in r)if(r[i]===t)return i};o=l(e.components||e.parent.type.components)||l(e.appContext.components)}return o?Of(o):a?"App":"Anonymous"}function Yc(e){return ce(e)&&"__vccOpts"in e}const T=(e,t)=>ed(e,t,Gs);function $3(){return Af().slots}function Af(){const e=Pt();return e||L("useContext() called without active instance."),e.setupContext||(e.setupContext=qc(e))}function Gt(e,t,a){const o=arguments.length;return o===2?Te(t)&&!le(t)?Et(t)?b(e,null,[t]):b(e,t):b(e,null,t):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&Et(a)&&(a=[a]),b(e,t,a))}const If=Symbol("ssrContext"),Mf=()=>{{const e=V(If);return e||L("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function mo(e){return!!(e&&e.__v_isShallow)}function Lf(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},a={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(d){return Te(d)?d.__isVue?["div",e,"VueInstance"]:xe(d)?["div",{},["span",e,f(d)],"<",c(d.value),">"]:Vt(d)?["div",{},["span",e,mo(d)?"ShallowReactive":"Reactive"],"<",c(d),`>${Rt(d)?" (readonly)":""}`]:Rt(d)?["div",{},["span",e,mo(d)?"ShallowReadonly":"Readonly"],"<",c(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...r(d.$)]}};function r(d){const h=[];d.type.props&&d.props&&h.push(i("props",de(d.props))),d.setupState!==Le&&h.push(i("setup",d.setupState)),d.data!==Le&&h.push(i("data",de(d.data)));const k=u(d,"computed");k&&h.push(i("computed",k));const v=u(d,"inject");return v&&h.push(i("injected",v)),h.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),h}function i(d,h){return h=ze({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(k=>["div",{},["span",o,k+": "],c(h[k],!1)])]]:["span",{}]}function c(d,h=!0){return typeof d=="number"?["span",t,d]:typeof d=="string"?["span",a,JSON.stringify(d)]:typeof d=="boolean"?["span",o,d]:Te(d)?["object",{object:h?de(d):d}]:["span",a,String(d)]}function u(d,h){const k=d.type;if(ce(k))return;const v={};for(const y in d.ctx)p(k,y,h)&&(v[y]=d.ctx[y]);return v}function p(d,h,k){const v=d[k];if(le(v)&&v.includes(h)||Te(v)&&h in v||d.extends&&p(d.extends,h,k)||d.mixins&&d.mixins.some(y=>p(y,h,k)))return!0}function f(d){return mo(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const yr="3.2.45",Df="http://www.w3.org/2000/svg",Mt=typeof document<"u"?document:null,br=Mt&&Mt.createElement("template"),Nf={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,o)=>{const l=t?Mt.createElementNS(Df,e):Mt.createElement(e,a?{is:a}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>Mt.createTextNode(e),createComment:e=>Mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,o,l,r){const i=a?a.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),a),!(l===r||!(l=l.nextSibling)););else{br.innerHTML=o?`<svg>${e}</svg>`:e;const c=br.content;if(o){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,a)}return[i?i.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}};function Ff(e,t,a){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}function jf(e,t,a){const o=e.style,l=je(a);if(a&&!l){for(const r in a)Wo(o,r,a[r]);if(t&&!je(t))for(const r in t)a[r]==null&&Wo(o,r,"")}else{const r=o.display;l?t!==a&&(o.cssText=a):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const Vf=/[^\\];\s*$/,wr=/\s*!important$/;function Wo(e,t,a){if(le(a))a.forEach(o=>Wo(e,t,o));else if(a==null&&(a=""),Vf.test(a)&&L(`Unexpected semicolon at the end of '${t}' style value: '${a}'`),t.startsWith("--"))e.setProperty(t,a);else{const o=Hf(e,t);wr.test(a)?e.setProperty(rt(o),a.replace(wr,""),"important"):e[o]=a}}const xr=["Webkit","Moz","ms"],ko={};function Hf(e,t){const a=ko[t];if(a)return a;let o=Zn(t);if(o!=="filter"&&o in e)return ko[t]=o;o=qt(o);for(let l=0;l<xr.length;l++){const r=xr[l]+o;if(r in e)return ko[t]=r}return t}const $r="http://www.w3.org/1999/xlink";function Uf(e,t,a,o,l){if(o&&t.startsWith("xlink:"))a==null?e.removeAttributeNS($r,t.slice(6,t.length)):e.setAttributeNS($r,t,a);else{const r=pp(t);a==null||r&&!ji(a)?e.removeAttribute(t):e.setAttribute(t,r?"":a)}}function Bf(e,t,a,o,l,r,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,l,r),e[t]=a??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=a;const u=a??"";(e.value!==u||e.tagName==="OPTION")&&(e.value=u),a==null&&e.removeAttribute(t);return}let c=!1;if(a===""||a==null){const u=typeof e[t];u==="boolean"?a=ji(a):a==null&&u==="string"?(a="",c=!0):u==="number"&&(a=0,c=!0)}try{e[t]=a}catch(u){c||L(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${a} is invalid.`,u)}c&&e.removeAttribute(t)}function cs(e,t,a,o){e.addEventListener(t,a,o)}function Wf(e,t,a,o){e.removeEventListener(t,a,o)}function zf(e,t,a,o,l=null){const r=e._vei||(e._vei={}),i=r[t];if(o&&i)i.value=o;else{const[c,u]=Kf(t);if(o){const p=r[t]=Zf(o,l);cs(e,c,p,u)}else i&&(Wf(e,c,i,u),r[t]=void 0)}}const Rr=/(?:Once|Passive|Capture)$/;function Kf(e){let t;if(Rr.test(e)){t={};let o;for(;o=e.match(Rr);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):rt(e.slice(2)),t]}let vo=0;const qf=Promise.resolve(),Yf=()=>vo||(qf.then(()=>vo=0),vo=Date.now());function Zf(e,t){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;jn(Gf(o,a.value),t,5,[o])};return a.value=e,a.attached=Yf(),a}function Gf(e,t){if(le(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const Er=/^on[a-z]/,Jf=(e,t,a,o,l=!1,r,i,c,u)=>{t==="class"?Ff(e,o,l):t==="style"?jf(e,a,o):aa(t)?Sa(t)||zf(e,t,a,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qf(e,t,o,l))?Bf(e,t,o,r,i,c,u):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Uf(e,t,o,l))};function Qf(e,t,a,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Er.test(t)&&ce(a)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Er.test(t)&&je(a)?!1:t in e}const Sr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return le(t)?a=>vt(t,a):t};function Xf(e){e.target.composing=!0}function Cr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const eh={created(e,{modifiers:{lazy:t,trim:a,number:o}},l){e._assign=Sr(l);const r=o||l.props&&l.props.type==="number";cs(e,t?"change":"input",i=>{if(i.target.composing)return;let c=e.value;a&&(c=c.trim()),r&&(c=Pa(c)),e._assign(c)}),a&&cs(e,"change",()=>{e.value=e.value.trim()}),t||(cs(e,"compositionstart",Xf),cs(e,"compositionend",Cr),cs(e,"change",Cr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:a,trim:o,number:l}},r){if(e._assign=Sr(r),e.composing||document.activeElement===e&&e.type!=="range"&&(a||o&&e.value.trim()===t||(l||e.type==="number")&&Pa(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},nh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pr=(e,t)=>a=>{if(!("key"in a))return;const o=rt(a.key);if(t.some(l=>l===o||nh[l]===o))return e(a)},Zc={beforeMount(e,{value:t},{transition:a}){e._vod=e.style.display==="none"?"":e.style.display,a&&t?a.beforeEnter(e):Ss(e,t)},mounted(e,{value:t},{transition:a}){a&&t&&a.enter(e)},updated(e,{value:t,oldValue:a},{transition:o}){!t!=!a&&(o?t?(o.beforeEnter(e),Ss(e,!0),o.enter(e)):o.leave(e,()=>{Ss(e,!1)}):Ss(e,t))},beforeUnmount(e,{value:t}){Ss(e,t)}};function Ss(e,t){e.style.display=t?e._vod:"none"}const th=ze({patchProp:Jf},Nf);let Tr;function sh(){return Tr||(Tr=ff(th))}const R3=(...e)=>{const t=sh().createApp(...e);ah(t),oh(t);const{mount:a}=t;return t.mount=o=>{const l=lh(o);if(!l)return;const r=t._component;!ce(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const i=a(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},t};function ah(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>ip(t)||cp(t),writable:!1})}function oh(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){L("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const a=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return L(o),a},set(){L(o)}})}}function lh(e){if(je(e)){const t=document.querySelector(e);return t||L(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&L('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function rh(){Lf()}rh();const Gc=Symbol("v-click-clicks"),Jc=Symbol("v-click-clicks-elements"),ih=Symbol("v-click-clicks-order-map"),Qc=Symbol("v-click-clicks-disabled"),Xc=Symbol("slidev-slide-scale"),q=Symbol("slidev-slidev-context"),ch=Symbol("slidev-route"),uh=Symbol("slidev-slide-context"),ph="slidev-vclick-target",E3="slidev-vclick-hidden",S3="slidev-vclick-fade",C3="slidev-vclick-hidden-explicitly",P3="slidev-vclick-current",T3="slidev-vclick-prior";function eu(e){return e=e??[],Array.isArray(e)?e:[e]}function dh(e,t){if(!e)return!1;const a=e.indexOf(t);return a>=0?(e.splice(a,1),!0):!1}function fh(...e){let t,a,o;e.length===1?(t=0,o=1,[a]=e):[t,a,o=1]=e;const l=[];let r=t;for(;r<a;)l.push(r),r+=o||1;return l}function hh(e){return e!=null}function mh(e,t){return Object.fromEntries(Object.entries(e).map(([a,o])=>t(a,o)).filter(hh))}const Fs={theme:"default",title:"Vue的组合式开发",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0},De=Fs,bt=De.aspectRatio??16/9,wt=De.canvasWidth??980,Pl=Math.ceil(wt/bt),Tl=T(()=>mh(De.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Tn(e,t,a){Object.defineProperty(e,t,{value:a,writable:!0,enumerable:!1})}const ns=Xe({page:0,clicks:0});let kh=[],vh=[];Tn(ns,"$syncUp",!0);Tn(ns,"$syncDown",!0);Tn(ns,"$paused",!1);Tn(ns,"$onSet",e=>kh.push(e));Tn(ns,"$onPatch",e=>vh.push(e));Tn(ns,"$patch",async()=>!1);function nu(e,t,a=!1){const o=[];let l=!1,r=!1,i,c;const u=Xe(t);function p(k){o.push(k)}function f(k,v){clearTimeout(i),l=!0,u[k]=v,i=setTimeout(()=>l=!1,0)}function d(k){l||(clearTimeout(c),r=!0,Object.entries(k).forEach(([v,y])=>{u[v]=y}),c=setTimeout(()=>r=!1,0))}function h(k){let v;a?a&&window.addEventListener("storage",$=>{$&&$.key===k&&$.newValue&&d(JSON.parse($.newValue))}):(v=new BroadcastChannel(k),v.addEventListener("message",$=>d($.data)));function y(){!a&&v&&!r?v.postMessage(de(u)):a&&!r&&window.localStorage.setItem(k,JSON.stringify(u)),l||o.forEach($=>$(u))}if(Fe(u,y,{deep:!0}),a){const $=window.localStorage.getItem(k);$&&d(JSON.parse($))}}return{init:h,onPatch:p,patch:f,state:u}}const{init:O3,onPatch:A3,patch:I3,state:_o}=nu(ns,{page:1,clicks:0}),ts=Xe({});let _h=[],gh=[];Tn(ts,"$syncUp",!0);Tn(ts,"$syncDown",!0);Tn(ts,"$paused",!1);Tn(ts,"$onSet",e=>_h.push(e));Tn(ts,"$onPatch",e=>gh.push(e));Tn(ts,"$patch",async()=>!1);const{init:M3,onPatch:yh,patch:tu,state:Na}=nu(ts,{},!1),bh="modulepreload",wh=function(e){return"/"+e},Or={},Jt=function(t,a,o){if(!a||a.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(a.map(r=>{if(r=wh(r),r in Or)return;Or[r]=!0;const i=r.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!o)for(let f=l.length-1;f>=0;f--){const d=l[f];if(d.href===r&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const p=document.createElement("link");if(p.rel=i?"stylesheet":bh,i||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),i)return new Promise((f,d)=>{p.addEventListener("load",f),p.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var Ar;const Hn=typeof window<"u",xh=e=>typeof e<"u",$h=Object.prototype.toString,Qs=e=>typeof e=="function",L3=e=>typeof e=="number",su=e=>typeof e=="string",D3=e=>$h.call(e)==="[object Object]",zo=()=>+Date.now(),vs=()=>{},Rh=Hn&&((Ar=window==null?void 0:window.navigator)==null?void 0:Ar.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function fn(e){return typeof e=="function"?e():x(e)}function Eh(e,t){function a(...o){return new Promise((l,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(r)})}return a}const au=e=>e();function Sh(e=au){const t=ne(!0);function a(){t.value=!1}function o(){t.value=!0}const l=(...r)=>{t.value&&e(...r)};return{isActive:qn(t),pause:a,resume:o,eventFilter:l}}function Ch(e){return e}function Ph(e,t){var a;if(typeof e=="number")return e+t;const o=((a=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:a[0])||"",l=e.slice(o.length),r=parseFloat(o)+t;return Number.isNaN(r)?e:r+l}function Th(e,t){let a,o,l;const r=ne(!0),i=()=>{r.value=!0,l()};Fe(e,i,{flush:"sync"});const c=Qs(t)?t:t.get,u=Qs(t)?void 0:t.set,p=ic((f,d)=>(o=f,l=d,{get(){return r.value&&(a=c(),r.value=!1),o(),a},set(h){u==null||u(h)}}));return Object.isExtensible(p)&&(p.trigger=i),p}function Jn(e){return _p()?(gp(e),!0):!1}function Ir(e,t){const a=(t==null?void 0:t.computedGetter)===!1?x:fn;return function(...o){return T(()=>e.apply(this,o.map(l=>a(l))))}}function Oh(e){if(!xe(e))return Xe(e);const t=new Proxy({},{get(a,o,l){return x(Reflect.get(e.value,o,l))},set(a,o,l){return xe(e.value[o])&&!xe(l)?e.value[o].value=l:e.value[o]=l,!0},deleteProperty(a,o){return Reflect.deleteProperty(e.value,o)},has(a,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Xe(t)}function ou(e){return typeof e=="function"?T(e):ne(e)}var Ah=Object.defineProperty,Ih=Object.defineProperties,Mh=Object.getOwnPropertyDescriptors,Mr=Object.getOwnPropertySymbols,Lh=Object.prototype.hasOwnProperty,Dh=Object.prototype.propertyIsEnumerable,Lr=(e,t,a)=>t in e?Ah(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Nh=(e,t)=>{for(var a in t||(t={}))Lh.call(t,a)&&Lr(e,a,t[a]);if(Mr)for(var a of Mr(t))Dh.call(t,a)&&Lr(e,a,t[a]);return e},Fh=(e,t)=>Ih(e,Mh(t));function jh(e){if(!xe(e))return Gp(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const a in e.value)t[a]=ic(()=>({get(){return e.value[a]},set(o){if(Array.isArray(e.value)){const l=[...e.value];l[a]=o,e.value=l}else{const l=Fh(Nh({},e.value),{[a]:o});Object.setPrototypeOf(l,e.value),e.value=l}}}));return t}function lo(e,t=!0){Pt()?no(e):t?e():Vn(e)}function Vh(e,t=1e3,a={}){const{immediate:o=!0,immediateCallback:l=!1}=a;let r=null;const i=ne(!1);function c(){r&&(clearInterval(r),r=null)}function u(){i.value=!1,c()}function p(){const f=fn(t);f<=0||(i.value=!0,l&&e(),c(),r=setInterval(e,f))}if(o&&Hn&&p(),xe(t)||Qs(t)){const f=Fe(t,()=>{i.value&&Hn&&p()});Jn(f)}return Jn(u),{isActive:i,pause:u,resume:p}}function Hh(e,t,a={}){const{immediate:o=!0}=a,l=ne(!1);let r=null;function i(){r&&(clearTimeout(r),r=null)}function c(){l.value=!1,i()}function u(...p){i(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,e(...p)},fn(t))}return o&&(l.value=!0,Hn&&u()),Jn(c),{isPending:qn(l),start:u,stop:c}}function Ol(e=!1,t={}){const{truthyValue:a=!0,falsyValue:o=!1}=t,l=xe(e),r=ne(e);function i(c){if(arguments.length)return r.value=c,r.value;{const u=fn(a);return r.value=r.value===u?fn(o):u,r.value}}return l?i:[r,i]}var Dr=Object.getOwnPropertySymbols,Uh=Object.prototype.hasOwnProperty,Bh=Object.prototype.propertyIsEnumerable,Wh=(e,t)=>{var a={};for(var o in e)Uh.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&Dr)for(var o of Dr(e))t.indexOf(o)<0&&Bh.call(e,o)&&(a[o]=e[o]);return a};function zh(e,t,a={}){const o=a,{eventFilter:l=au}=o,r=Wh(o,["eventFilter"]);return Fe(e,Eh(l,t),r)}var Kh=Object.defineProperty,qh=Object.defineProperties,Yh=Object.getOwnPropertyDescriptors,Fa=Object.getOwnPropertySymbols,lu=Object.prototype.hasOwnProperty,ru=Object.prototype.propertyIsEnumerable,Nr=(e,t,a)=>t in e?Kh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Zh=(e,t)=>{for(var a in t||(t={}))lu.call(t,a)&&Nr(e,a,t[a]);if(Fa)for(var a of Fa(t))ru.call(t,a)&&Nr(e,a,t[a]);return e},Gh=(e,t)=>qh(e,Yh(t)),Jh=(e,t)=>{var a={};for(var o in e)lu.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&Fa)for(var o of Fa(e))t.indexOf(o)<0&&ru.call(e,o)&&(a[o]=e[o]);return a};function Qh(e,t,a={}){const o=a,{eventFilter:l}=o,r=Jh(o,["eventFilter"]),{eventFilter:i,pause:c,resume:u,isActive:p}=Sh(l);return{stop:zh(e,t,Gh(Zh({},r),{eventFilter:i})),pause:c,resume:u,isActive:p}}function Pn(e){var t;const a=fn(e);return(t=a==null?void 0:a.$el)!=null?t:a}const Je=Hn?window:void 0,iu=Hn?window.document:void 0,Xh=Hn?window.navigator:void 0;function Pe(...e){let t,a,o,l;if(su(e[0])||Array.isArray(e[0])?([a,o,l]=e,t=Je):[t,a,o,l]=e,!t)return vs;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const r=[],i=()=>{r.forEach(f=>f()),r.length=0},c=(f,d,h,k)=>(f.addEventListener(d,h,k),()=>f.removeEventListener(d,h,k)),u=Fe(()=>[Pn(t),fn(l)],([f,d])=>{i(),f&&r.push(...a.flatMap(h=>o.map(k=>c(f,h,k,d))))},{immediate:!0,flush:"post"}),p=()=>{u(),i()};return Jn(p),p}let Fr=!1;function em(e,t,a={}){const{window:o=Je,ignore:l=[],capture:r=!0,detectIframe:i=!1}=a;if(!o)return;Rh&&!Fr&&(Fr=!0,Array.from(o.document.body.children).forEach(h=>h.addEventListener("click",vs)));let c=!0;const u=h=>l.some(k=>{if(typeof k=="string")return Array.from(o.document.querySelectorAll(k)).some(v=>v===h.target||h.composedPath().includes(v));{const v=Pn(k);return v&&(h.target===v||h.composedPath().includes(v))}}),f=[Pe(o,"click",h=>{const k=Pn(e);if(!(!k||k===h.target||h.composedPath().includes(k))){if(h.detail===0&&(c=!u(h)),!c){c=!0;return}t(h)}},{passive:!0,capture:r}),Pe(o,"pointerdown",h=>{const k=Pn(e);k&&(c=!h.composedPath().includes(k)&&!u(h))},{passive:!0}),i&&Pe(o,"blur",h=>{var k;const v=Pn(e);((k=o.document.activeElement)==null?void 0:k.tagName)==="IFRAME"&&!(v!=null&&v.contains(o.document.activeElement))&&t(h)})].filter(Boolean);return()=>f.forEach(h=>h())}const nm=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function tm(...e){let t,a,o={};e.length===3?(t=e[0],a=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,a=e[0],o=e[1]):(t=e[0],a=e[1]):(t=!0,a=e[0]);const{target:l=Je,eventName:r="keydown",passive:i=!1}=o,c=nm(t);return Pe(l,r,p=>{c(p)&&a(p)},i)}function sm(e={}){var t;const{window:a=Je}=e,o=(t=e.document)!=null?t:a==null?void 0:a.document,l=Th(()=>null,()=>o==null?void 0:o.activeElement);return a&&(Pe(a,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),Pe(a,"focus",l.trigger,!0)),l}function ia(e,t=!1){const a=ne(),o=()=>a.value=Boolean(e());return o(),lo(o,t),a}function us(e,t={}){const{window:a=Je}=t,o=ia(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let l;const r=ne(!1),i=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",c):l.removeListener(c))},c=()=>{o.value&&(i(),l=a.matchMedia(ou(e).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",c):l.addListener(c))};return ws(c),Jn(()=>i()),r}const am={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var om=Object.defineProperty,jr=Object.getOwnPropertySymbols,lm=Object.prototype.hasOwnProperty,rm=Object.prototype.propertyIsEnumerable,Vr=(e,t,a)=>t in e?om(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,im=(e,t)=>{for(var a in t||(t={}))lm.call(t,a)&&Vr(e,a,t[a]);if(jr)for(var a of jr(t))rm.call(t,a)&&Vr(e,a,t[a]);return e};function cm(e,t={}){function a(c,u){let p=e[c];return u!=null&&(p=Ph(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=Je}=t;function l(c){return o?o.matchMedia(c).matches:!1}const r=c=>us(`(min-width: ${a(c)})`,t),i=Object.keys(e).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>r(u),enumerable:!0,configurable:!0}),c),{});return im({greater(c){return us(`(min-width: ${a(c,.1)})`,t)},greaterOrEqual:r,smaller(c){return us(`(max-width: ${a(c,-.1)})`,t)},smallerOrEqual(c){return us(`(max-width: ${a(c)})`,t)},between(c,u){return us(`(min-width: ${a(c)}) and (max-width: ${a(u,-.1)})`,t)},isGreater(c){return l(`(min-width: ${a(c,.1)})`)},isGreaterOrEqual(c){return l(`(min-width: ${a(c)})`)},isSmaller(c){return l(`(max-width: ${a(c,-.1)})`)},isSmallerOrEqual(c){return l(`(max-width: ${a(c)})`)},isInBetween(c,u){return l(`(min-width: ${a(c)}) and (max-width: ${a(u,-.1)})`)}},i)}function um(e={}){const{navigator:t=Xh,read:a=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=e,i=["copy","cut"],c=ia(()=>t&&"clipboard"in t),u=T(()=>c.value||r),p=ne(""),f=ne(!1),d=Hh(()=>f.value=!1,l);function h(){c.value?t.clipboard.readText().then($=>{p.value=$}):p.value=y()}if(u.value&&a)for(const $ of i)Pe($,h);async function k($=fn(o)){u.value&&$!=null&&(c.value?await t.clipboard.writeText($):v($),p.value=$,f.value=!0,d.start())}function v($){const P=document.createElement("textarea");P.value=$??"",P.style.position="absolute",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),P.remove()}function y(){var $,P,E;return(E=(P=($=document==null?void 0:document.getSelection)==null?void 0:$.call(document))==null?void 0:P.toString())!=null?E:""}return{isSupported:u,text:p,copied:f,copy:k}}function pm(e){return JSON.parse(JSON.stringify(e))}const Ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qo="__vueuse_ssr_handlers__";Ko[qo]=Ko[qo]||{};const dm=Ko[qo];function cu(e,t){return dm[e]||t}function fm(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var hm=Object.defineProperty,Hr=Object.getOwnPropertySymbols,mm=Object.prototype.hasOwnProperty,km=Object.prototype.propertyIsEnumerable,Ur=(e,t,a)=>t in e?hm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Br=(e,t)=>{for(var a in t||(t={}))mm.call(t,a)&&Ur(e,a,t[a]);if(Hr)for(var a of Hr(t))km.call(t,a)&&Ur(e,a,t[a]);return e};const vm={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Wr="vueuse-storage";function On(e,t,a,o={}){var l;const{flush:r="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:f,window:d=Je,eventFilter:h,onError:k=Z=>{console.error(Z)}}=o,v=(f?Gn:ne)(t);if(!a)try{a=cu("getDefaultStorage",()=>{var Z;return(Z=Je)==null?void 0:Z.localStorage})()}catch(Z){k(Z)}if(!a)return v;const y=fn(t),$=fm(y),P=(l=o.serializer)!=null?l:vm[$],{pause:E,resume:C}=Qh(v,()=>O(v.value),{flush:r,deep:i,eventFilter:h});return d&&c&&(Pe(d,"storage",J),Pe(d,Wr,U)),J(),v;function O(Z){try{if(Z==null)a.removeItem(e);else{const oe=P.write(Z),ie=a.getItem(e);ie!==oe&&(a.setItem(e,oe),d&&d.dispatchEvent(new CustomEvent(Wr,{detail:{key:e,oldValue:ie,newValue:oe,storageArea:a}})))}}catch(oe){k(oe)}}function B(Z){const oe=Z?Z.newValue:a.getItem(e);if(oe==null)return u&&y!==null&&a.setItem(e,P.write(y)),y;if(!Z&&p){const ie=P.read(oe);return Qs(p)?p(ie,y):$==="object"&&!Array.isArray(ie)?Br(Br({},y),ie):ie}else return typeof oe!="string"?oe:P.read(oe)}function U(Z){J(Z.detail)}function J(Z){if(!(Z&&Z.storageArea!==a)){if(Z&&Z.key==null){v.value=y;return}if(!(Z&&Z.key!==e)){E();try{v.value=B(Z)}catch(oe){k(oe)}finally{Z?Vn(C):C()}}}}}function Al(e){return us("(prefers-color-scheme: dark)",e)}var _m=Object.defineProperty,zr=Object.getOwnPropertySymbols,gm=Object.prototype.hasOwnProperty,ym=Object.prototype.propertyIsEnumerable,Kr=(e,t,a)=>t in e?_m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,bm=(e,t)=>{for(var a in t||(t={}))gm.call(t,a)&&Kr(e,a,t[a]);if(zr)for(var a of zr(t))ym.call(t,a)&&Kr(e,a,t[a]);return e};function uu(e={}){const{selector:t="html",attribute:a="class",initialValue:o="auto",window:l=Je,storage:r,storageKey:i="vueuse-color-scheme",listenToStorageChanges:c=!0,storageRef:u,emitAuto:p}=e,f=bm({auto:"",light:"light",dark:"dark"},e.modes||{}),d=Al({window:l}),h=T(()=>d.value?"dark":"light"),k=u||(i==null?ne(o):On(i,o,r,{window:l,listenToStorageChanges:c})),v=T({get(){return k.value==="auto"&&!p?h.value:k.value},set(E){k.value=E}}),y=cu("updateHTMLAttrs",(E,C,O)=>{const B=l==null?void 0:l.document.querySelector(E);if(B)if(C==="class"){const U=O.split(/\s/g);Object.values(f).flatMap(J=>(J||"").split(/\s/g)).filter(Boolean).forEach(J=>{U.includes(J)?B.classList.add(J):B.classList.remove(J)})}else B.setAttribute(C,O)});function $(E){var C;const O=E==="auto"?h.value:E;y(t,a,(C=f[O])!=null?C:O)}function P(E){e.onChanged?e.onChanged(E,$):$(E)}return Fe(v,P,{flush:"post",immediate:!0}),p&&Fe(h,()=>P(v.value),{flush:"post"}),lo(()=>P(v.value)),v}var wm=Object.defineProperty,xm=Object.defineProperties,$m=Object.getOwnPropertyDescriptors,qr=Object.getOwnPropertySymbols,Rm=Object.prototype.hasOwnProperty,Em=Object.prototype.propertyIsEnumerable,Yr=(e,t,a)=>t in e?wm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Sm=(e,t)=>{for(var a in t||(t={}))Rm.call(t,a)&&Yr(e,a,t[a]);if(qr)for(var a of qr(t))Em.call(t,a)&&Yr(e,a,t[a]);return e},Cm=(e,t)=>xm(e,$m(t));function Pm(e={}){const{valueDark:t="dark",valueLight:a="",window:o=Je}=e,l=uu(Cm(Sm({},e),{onChanged:(c,u)=>{var p;e.onChanged?(p=e.onChanged)==null||p.call(e,c==="dark"):u(c)},modes:{dark:t,light:a}})),r=Al({window:o});return T({get(){return l.value==="dark"},set(c){c===r.value?l.value="auto":l.value=c?"dark":"light"}})}var Tm=Object.defineProperty,Om=Object.defineProperties,Am=Object.getOwnPropertyDescriptors,Zr=Object.getOwnPropertySymbols,Im=Object.prototype.hasOwnProperty,Mm=Object.prototype.propertyIsEnumerable,Gr=(e,t,a)=>t in e?Tm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Lm=(e,t)=>{for(var a in t||(t={}))Im.call(t,a)&&Gr(e,a,t[a]);if(Zr)for(var a of Zr(t))Mm.call(t,a)&&Gr(e,a,t[a]);return e},Dm=(e,t)=>Om(e,Am(t));function N3(e,t={}){var a,o,l;const r=(a=t.draggingElement)!=null?a:Je,i=(o=t.handle)!=null?o:e,c=ne((l=fn(t.initialValue))!=null?l:{x:0,y:0}),u=ne(),p=v=>t.pointerTypes?t.pointerTypes.includes(v.pointerType):!0,f=v=>{fn(t.preventDefault)&&v.preventDefault(),fn(t.stopPropagation)&&v.stopPropagation()},d=v=>{var y;if(!p(v)||fn(t.exact)&&v.target!==fn(e))return;const $=fn(e).getBoundingClientRect(),P={x:v.clientX-$.left,y:v.clientY-$.top};((y=t.onStart)==null?void 0:y.call(t,P,v))!==!1&&(u.value=P,f(v))},h=v=>{var y;p(v)&&u.value&&(c.value={x:v.clientX-u.value.x,y:v.clientY-u.value.y},(y=t.onMove)==null||y.call(t,c.value,v),f(v))},k=v=>{var y;p(v)&&u.value&&(u.value=void 0,(y=t.onEnd)==null||y.call(t,c.value,v),f(v))};return Hn&&(Pe(i,"pointerdown",d,!0),Pe(r,"pointermove",h,!0),Pe(r,"pointerup",k,!0)),Dm(Lm({},jh(c)),{position:c,isDragging:T(()=>!!u.value),style:T(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var Jr=Object.getOwnPropertySymbols,Nm=Object.prototype.hasOwnProperty,Fm=Object.prototype.propertyIsEnumerable,jm=(e,t)=>{var a={};for(var o in e)Nm.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&Jr)for(var o of Jr(e))t.indexOf(o)<0&&Fm.call(e,o)&&(a[o]=e[o]);return a};function Vm(e,t,a={}){const o=a,{window:l=Je}=o,r=jm(o,["window"]);let i;const c=ia(()=>l&&"ResizeObserver"in l),u=()=>{i&&(i.disconnect(),i=void 0)},p=Fe(()=>Pn(e),d=>{u(),c.value&&l&&d&&(i=new ResizeObserver(t),i.observe(d,r))},{immediate:!0,flush:"post"}),f=()=>{u(),p()};return Jn(f),{isSupported:c,stop:f}}function Hm(e,t={}){const{immediate:a=!0,window:o=Je}=t,l=ne(!1);let r=0,i=null;function c(f){if(!l.value||!o)return;const d=f-r;e({delta:d,timestamp:f}),r=f,i=o.requestAnimationFrame(c)}function u(){!l.value&&o&&(l.value=!0,i=o.requestAnimationFrame(c))}function p(){l.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return a&&u(),Jn(p),{isActive:qn(l),pause:p,resume:u}}function Um(e,t={width:0,height:0},a={}){const{window:o=Je,box:l="content-box"}=a,r=T(()=>{var u,p;return(p=(u=Pn(e))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),i=ne(t.width),c=ne(t.height);return Vm(e,([u])=>{const p=l==="border-box"?u.borderBoxSize:l==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(o&&r.value){const f=Pn(e);if(f){const d=o.getComputedStyle(f);i.value=parseFloat(d.width),c.value=parseFloat(d.height)}}else if(p){const f=Array.isArray(p)?p:[p];i.value=f.reduce((d,{inlineSize:h})=>d+h,0),c.value=f.reduce((d,{blockSize:h})=>d+h,0)}else i.value=u.contentRect.width,c.value=u.contentRect.height},a),Fe(()=>Pn(e),u=>{i.value=u?t.width:0,c.value=u?t.height:0}),{width:i,height:c}}const Qr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Bm(e,t={}){const{document:a=iu,autoExit:o=!1}=t,l=e||(a==null?void 0:a.querySelector("html")),r=ne(!1);let i=Qr[0];const c=ia(()=>{if(a){for(const y of Qr)if(y[1]in a)return i=y,!0}else return!1;return!1}),[u,p,f,,d]=i;async function h(){c.value&&(a!=null&&a[f]&&await a[p](),r.value=!1)}async function k(){if(!c.value)return;await h();const y=Pn(l);y&&(await y[u](),r.value=!0)}async function v(){r.value?await h():await k()}return a&&Pe(a,d,()=>{r.value=!!(a!=null&&a[f])},!1),o&&Jn(h),{isSupported:c,isFullscreen:r,enter:k,exit:h,toggle:v}}function F3(e,t,a={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:i=Je}=a,c=ia(()=>i&&"IntersectionObserver"in i);let u=vs;const p=c.value?Fe(()=>({el:Pn(e),root:Pn(o)}),({el:d,root:h})=>{if(u(),!d)return;const k=new IntersectionObserver(t,{root:h,rootMargin:l,threshold:r});k.observe(d),u=()=>{k.disconnect(),u=vs}},{immediate:!0,flush:"post"}):vs,f=()=>{u(),p()};return Jn(f),{isSupported:c,stop:f}}const Wm={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function zm(e={}){const{reactive:t=!1,target:a=Je,aliasMap:o=Wm,passive:l=!0,onEventFired:r=vs}=e,i=Xe(new Set),c={toJSON(){return{}},current:i},u=t?Xe(c):c,p=new Set,f=new Set;function d(y,$){y in u&&(t?u[y]=$:u[y].value=$)}function h(){i.clear();for(const y of f)d(y,!1)}function k(y,$){var P,E;const C=(P=y.key)==null?void 0:P.toLowerCase(),B=[(E=y.code)==null?void 0:E.toLowerCase(),C].filter(Boolean);C&&($?i.add(C):i.delete(C));for(const U of B)f.add(U),d(U,$);C==="meta"&&!$?(p.forEach(U=>{i.delete(U),d(U,!1)}),p.clear()):typeof y.getModifierState=="function"&&y.getModifierState("Meta")&&$&&[...i,...B].forEach(U=>p.add(U))}Pe(a,"keydown",y=>(k(y,!0),r(y)),{passive:l}),Pe(a,"keyup",y=>(k(y,!1),r(y)),{passive:l}),Pe("blur",h,{passive:!0}),Pe("focus",h,{passive:!0});const v=new Proxy(u,{get(y,$,P){if(typeof $!="string")return Reflect.get(y,$,P);if($=$.toLowerCase(),$ in o&&($=o[$]),!($ in u))if(/[+_-]/.test($)){const C=$.split(/[+_-]/g).map(O=>O.trim());u[$]=T(()=>C.every(O=>x(v[O])))}else u[$]=ne(!1);const E=Reflect.get(y,$,P);return t?x(E):E}});return v}function j3(e={}){const{type:t="page",touch:a=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=Je,eventFilter:i}=e,c=ne(l.x),u=ne(l.y),p=ne(null),f=y=>{t==="page"?(c.value=y.pageX,u.value=y.pageY):t==="client"?(c.value=y.clientX,u.value=y.clientY):t==="movement"&&(c.value=y.movementX,u.value=y.movementY),p.value="mouse"},d=()=>{c.value=l.x,u.value=l.y},h=y=>{if(y.touches.length>0){const $=y.touches[0];t==="page"?(c.value=$.pageX,u.value=$.pageY):t==="client"&&(c.value=$.clientX,u.value=$.clientY),p.value="touch"}},k=y=>i===void 0?f(y):i(()=>f(y),{}),v=y=>i===void 0?h(y):i(()=>h(y),{});return r&&(Pe(r,"mousemove",k,{passive:!0}),Pe(r,"dragover",k,{passive:!0}),a&&t!=="movement"&&(Pe(r,"touchstart",v,{passive:!0}),Pe(r,"touchmove",v,{passive:!0}),o&&Pe(r,"touchend",d,{passive:!0}))),{x:c,y:u,sourceType:p}}var ot;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(ot||(ot={}));function Km(e,t={}){const a=ou(e),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:i}=t,c=Xe({x:0,y:0}),u=(U,J)=>{c.x=U,c.y=J},p=Xe({x:0,y:0}),f=(U,J)=>{p.x=U,p.y=J},d=T(()=>c.x-p.x),h=T(()=>c.y-p.y),{max:k,abs:v}=Math,y=T(()=>k(v(d.value),v(h.value))>=o),$=ne(!1),P=ne(!1),E=T(()=>y.value?v(d.value)>v(h.value)?d.value>0?ot.LEFT:ot.RIGHT:h.value>0?ot.UP:ot.DOWN:ot.NONE),C=U=>{var J,Z,oe;const ie=U.buttons===0,ye=U.buttons===1;return(oe=(Z=(J=t.pointerTypes)==null?void 0:J.includes(U.pointerType))!=null?Z:ie||ye)!=null?oe:!0},O=[Pe(e,"pointerdown",U=>{var J,Z;if(!C(U))return;P.value=!0,(Z=(J=a.value)==null?void 0:J.style)==null||Z.setProperty("touch-action","none");const oe=U.target;oe==null||oe.setPointerCapture(U.pointerId);const{clientX:ie,clientY:ye}=U;u(ie,ye),f(ie,ye),i==null||i(U)}),Pe(e,"pointermove",U=>{if(!C(U)||!P.value)return;const{clientX:J,clientY:Z}=U;f(J,Z),!$.value&&y.value&&($.value=!0),$.value&&(l==null||l(U))}),Pe(e,"pointerup",U=>{var J,Z;C(U)&&($.value&&(r==null||r(U,E.value)),P.value=!1,$.value=!1,(Z=(J=a.value)==null?void 0:J.style)==null||Z.setProperty("touch-action","initial"))})],B=()=>O.forEach(U=>U());return{isSwiping:qn($),direction:qn(E),posStart:qn(c),posEnd:qn(p),distanceX:d,distanceY:h,stop:B}}let qm=0;function V3(e,t={}){const a=ne(!1),{document:o=iu,immediate:l=!0,manual:r=!1,id:i=`vueuse_styletag_${++qm}`}=t,c=ne(e);let u=()=>{};const p=()=>{if(!o)return;const d=o.getElementById(i)||o.createElement("style");d.isConnected||(d.type="text/css",d.id=i,t.media&&(d.media=t.media),o.head.appendChild(d)),!a.value&&(u=Fe(c,h=>{d.textContent=h},{immediate:!0}),a.value=!0)},f=()=>{!o||!a.value||(u(),o.head.removeChild(o.getElementById(i)),a.value=!1)};return l&&!r&&lo(p),r||Jn(f),{id:i,css:c,unload:f,load:p,isLoaded:qn(a)}}var Ym=Object.defineProperty,Xr=Object.getOwnPropertySymbols,Zm=Object.prototype.hasOwnProperty,Gm=Object.prototype.propertyIsEnumerable,ei=(e,t,a)=>t in e?Ym(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Jm=(e,t)=>{for(var a in t||(t={}))Zm.call(t,a)&&ei(e,a,t[a]);if(Xr)for(var a of Xr(t))Gm.call(t,a)&&ei(e,a,t[a]);return e};function H3(e={}){const{controls:t=!1,offset:a=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=e,i=ne(zo()+a),c=()=>i.value=zo()+a,u=r?()=>{c(),r(i.value)}:c,p=l==="requestAnimationFrame"?Hm(u,{immediate:o}):Vh(u,l,{immediate:o});return t?Jm({timestamp:i},p):i}var Qm=Object.defineProperty,ni=Object.getOwnPropertySymbols,Xm=Object.prototype.hasOwnProperty,ek=Object.prototype.propertyIsEnumerable,ti=(e,t,a)=>t in e?Qm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,nk=(e,t)=>{for(var a in t||(t={}))Xm.call(t,a)&&ti(e,a,t[a]);if(ni)for(var a of ni(t))ek.call(t,a)&&ti(e,a,t[a]);return e};const tk={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};nk({linear:Ch},tk);function Fn(e,t,a,o={}){var l,r,i;const{clone:c=!1,passive:u=!1,eventName:p,deep:f=!1,defaultValue:d}=o,h=Pt(),k=a||(h==null?void 0:h.emit)||((l=h==null?void 0:h.$emit)==null?void 0:l.bind(h))||((i=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:i.bind(h==null?void 0:h.proxy));let v=p;t||(t="modelValue"),v=p||v||`update:${t.toString()}`;const y=P=>c?Qs(c)?c(P):pm(P):P,$=()=>xh(e[t])?y(e[t]):d;if(u){const P=$(),E=ne(P);return Fe(()=>e[t],C=>E.value=y(C)),Fe(E,C=>{(C!==e[t]||f)&&k(v,C)},{deep:f}),E}else return T({get(){return $()},set(P){k(v,P)}})}function pu(e,t,a={}){const o={};for(const l in e)o[l]=Fn(e,l,t,a);return o}function U3({window:e=Je}={}){if(!e)return ne(!1);const t=ne(e.document.hasFocus());return Pe(e,"blur",()=>{t.value=!1}),Pe(e,"focus",()=>{t.value=!0}),t}function sk(e={}){const{window:t=Je,initialWidth:a=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=e,i=ne(a),c=ne(o),u=()=>{t&&(r?(i.value=t.innerWidth,c.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};return u(),lo(u),Pe("resize",u,{passive:!0}),l&&Pe("orientationchange",u,{passive:!0}),{width:i,height:c}}function ak(){return du().__VUE_DEVTOOLS_GLOBAL_HOOK__}function du(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const ok=typeof Proxy=="function",lk="devtools-plugin:setup",rk="plugin:settings:set";let as,Yo;function ik(){var e;return as!==void 0||(typeof window<"u"&&window.performance?(as=!0,Yo=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(as=!0,Yo=global.perf_hooks.performance):as=!1),as}function ck(){return ik()?Yo.now():Date.now()}class uk{constructor(t,a){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=a;const o={};if(t.settings)for(const i in t.settings){const c=t.settings[i];o[i]=c.defaultValue}const l=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},o);try{const i=localStorage.getItem(l),c=JSON.parse(i);Object.assign(r,c)}catch{}this.fallbacks={getSettings(){return r},setSettings(i){try{localStorage.setItem(l,JSON.stringify(i))}catch{}r=i},now(){return ck()}},a&&a.on(rk,(i,c)=>{i===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(i,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(i,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(t){this.target=t;for(const a of this.onQueue)this.target.on[a.method](...a.args);for(const a of this.targetQueue)a.resolve(await this.target[a.method](...a.args))}}function pk(e,t){const a=e,o=du(),l=ak(),r=ok&&a.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(lk,e,t);else{const i=r?new uk(a,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:a,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const st=typeof window<"u";function dk(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function go(e,t){const a={};for(const o in t){const l=t[o];a[o]=En(l)?l.map(e):e(l)}return a}const Us=()=>{},En=Array.isArray;function we(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const fk=/\/$/,hk=e=>e.replace(fk,"");function yo(e,t,a="/"){let o,l={},r="",i="";const c=t.indexOf("#");let u=t.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(o=t.slice(0,u),r=t.slice(u+1,c>-1?c:t.length),l=e(r)),c>-1&&(o=o||t.slice(0,c),i=t.slice(c,t.length)),o=vk(o??t,a),{fullPath:o+(r&&"?")+r+i,path:o,query:l,hash:i}}function mk(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function si(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ai(e,t,a){const o=t.matched.length-1,l=a.matched.length-1;return o>-1&&o===l&&St(t.matched[o],a.matched[l])&&fu(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function St(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function fu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!kk(e[a],t[a]))return!1;return!0}function kk(e,t){return En(e)?oi(e,t):En(t)?oi(t,e):e===t}function oi(e,t){return En(t)?e.length===t.length&&e.every((a,o)=>a===t[o]):e.length===1&&e[0]===t}function vk(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return we(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const a=t.split("/"),o=e.split("/");let l=a.length-1,r,i;for(r=0;r<o.length;r++)if(i=o[r],i!==".")if(i==="..")l>1&&l--;else break;return a.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Xs;(function(e){e.pop="pop",e.push="push"})(Xs||(Xs={}));var Bs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Bs||(Bs={}));function _k(e){if(!e)if(st){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hk(e)}const gk=/^[^#]+#/;function yk(e,t){return e.replace(gk,"#")+t}function bk(e,t){const a=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-a.left-(t.left||0),top:o.top-a.top-(t.top||0)}}const ro=()=>({left:window.pageXOffset,top:window.pageYOffset});function wk(e){let t;if("el"in e){const a=e.el,o=typeof a=="string"&&a.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(o&&r){we(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{we(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!l){we(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=bk(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function li(e,t){return(history.state?history.state.position-t:-1)+e}const Zo=new Map;function xk(e,t){Zo.set(e,t)}function $k(e){const t=Zo.get(e);return Zo.delete(e),t}let Rk=()=>location.protocol+"//"+location.host;function hu(e,t){const{pathname:a,search:o,hash:l}=t,r=e.indexOf("#");if(r>-1){let c=l.includes(e.slice(r))?e.slice(r).length:1,u=l.slice(c);return u[0]!=="/"&&(u="/"+u),si(u,"")}return si(a,e)+o+l}function Ek(e,t,a,o){let l=[],r=[],i=null;const c=({state:h})=>{const k=hu(e,location),v=a.value,y=t.value;let $=0;if(h){if(a.value=k,t.value=h,i&&i===v){i=null;return}$=y?h.position-y.position:0}else o(k);l.forEach(P=>{P(a.value,v,{delta:$,type:Xs.pop,direction:$?$>0?Bs.forward:Bs.back:Bs.unknown})})};function u(){i=a.value}function p(h){l.push(h);const k=()=>{const v=l.indexOf(h);v>-1&&l.splice(v,1)};return r.push(k),k}function f(){const{history:h}=window;h.state&&h.replaceState(Ee({},h.state,{scroll:ro()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f),{pauseListeners:u,listen:p,destroy:d}}function ri(e,t,a,o=!1,l=!1){return{back:e,current:t,forward:a,replaced:o,position:window.history.length,scroll:l?ro():null}}function Sk(e){const{history:t,location:a}=window,o={value:hu(e,a)},l={value:t.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(u,p,f){const d=e.indexOf("#"),h=d>-1?(a.host&&document.querySelector("base")?e:e.slice(d))+u:Rk()+e+u;try{t[f?"replaceState":"pushState"](p,"",h),l.value=p}catch(k){we("Error with push/replace State",k),a[f?"replace":"assign"](h)}}function i(u,p){const f=Ee({},t.state,ri(l.value.back,u,l.value.forward,!0),p,{position:l.value.position});r(u,f,!0),o.value=u}function c(u,p){const f=Ee({},l.value,t.state,{forward:u,scroll:ro()});t.state||we(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(f.current,f,!0);const d=Ee({},ri(o.value,u,null),{position:f.position+1},p);r(u,d,!1),o.value=u}return{location:o,state:l,push:c,replace:i}}function Ck(e){e=_k(e);const t=Sk(e),a=Ek(e,t.state,t.location,t.replace);function o(r,i=!0){i||a.pauseListeners(),history.go(r)}const l=Ee({location:"",base:e,go:o,createHref:yk.bind(null,e)},t,a);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function Pk(e){return typeof e=="string"||e&&typeof e=="object"}function mu(e){return typeof e=="string"||typeof e=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ku=Symbol("navigation failure");var ii;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ii||(ii={}));const Tk={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${Ak(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function ys(e,t){return Ee(new Error(Tk[e](t)),{type:e,[ku]:!0},t)}function Xn(e,t){return e instanceof Error&&ku in e&&(t==null||!!(e.type&t))}const Ok=["params","query","hash"];function Ak(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const a of Ok)a in e&&(t[a]=e[a]);return JSON.stringify(t,null,2)}const ci="[^/]+?",Ik={sensitive:!1,strict:!1,start:!0,end:!0},Mk=/[.+*?^${}()[\]/\\]/g;function Lk(e,t){const a=Ee({},Ik,t),o=[];let l=a.start?"^":"";const r=[];for(const p of e){const f=p.length?[]:[90];a.strict&&!p.length&&(l+="/");for(let d=0;d<p.length;d++){const h=p[d];let k=40+(a.sensitive?.25:0);if(h.type===0)d||(l+="/"),l+=h.value.replace(Mk,"\\$&"),k+=40;else if(h.type===1){const{value:v,repeatable:y,optional:$,regexp:P}=h;r.push({name:v,repeatable:y,optional:$});const E=P||ci;if(E!==ci){k+=10;try{new RegExp(`(${E})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+O.message)}}let C=y?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(C=$&&p.length<2?`(?:/${C})`:"/"+C),$&&(C+="?"),l+=C,k+=20,$&&(k+=-8),y&&(k+=-20),E===".*"&&(k+=-50)}f.push(k)}o.push(f)}if(a.strict&&a.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}a.strict||(l+="/?"),a.end?l+="$":a.strict&&(l+="(?:/|$)");const i=new RegExp(l,a.sensitive?"":"i");function c(p){const f=p.match(i),d={};if(!f)return null;for(let h=1;h<f.length;h++){const k=f[h]||"",v=r[h-1];d[v.name]=k&&v.repeatable?k.split("/"):k}return d}function u(p){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const k of h)if(k.type===0)f+=k.value;else if(k.type===1){const{value:v,repeatable:y,optional:$}=k,P=v in p?p[v]:"";if(En(P)&&!y)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=En(P)?P.join("/"):P;if(!E)if($)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);f+=E}}return f||"/"}return{re:i,score:o,keys:r,parse:c,stringify:u}}function Dk(e,t){let a=0;for(;a<e.length&&a<t.length;){const o=t[a]-e[a];if(o)return o;a++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Nk(e,t){let a=0;const o=e.score,l=t.score;for(;a<o.length&&a<l.length;){const r=Dk(o[a],l[a]);if(r)return r;a++}if(Math.abs(l.length-o.length)===1){if(ui(o))return 1;if(ui(l))return-1}return l.length-o.length}function ui(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Fk={type:0,value:""},jk=/[a-zA-Z0-9_]/;function Vk(e){if(!e)return[[]];if(e==="/")return[[Fk]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(k){throw new Error(`ERR (${a})/"${p}": ${k}`)}let a=0,o=a;const l=[];let r;function i(){r&&l.push(r),r=[]}let c=0,u,p="",f="";function d(){p&&(a===0?r.push({type:0,value:p}):a===1||a===2||a===3?(r.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:f,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:u==="/"?(p&&d(),i()):u===":"?(d(),a=1):h();break;case 4:h(),a=o;break;case 1:u==="("?a=2:jk.test(u)?h():(d(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+u:a=3:f+=u;break;case 3:d(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,f="";break;default:t("Unknown state");break}}return a===2&&t(`Unfinished custom RegExp for param "${p}"`),d(),i(),l}function Hk(e,t,a){const o=Lk(Vk(e.path),a);{const r=new Set;for(const i of o.keys)r.has(i.name)&&we(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(i.name)}const l=Ee(o,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function Uk(e,t){const a=[],o=new Map;t=fi({strict:!1,end:!0,sensitive:!1},t);function l(f){return o.get(f)}function r(f,d,h){const k=!h,v=Bk(f);qk(v,d),v.aliasOf=h&&h.record;const y=fi(t,f),$=[v];if("alias"in f){const C=typeof f.alias=="string"?[f.alias]:f.alias;for(const O of C)$.push(Ee({},v,{components:h?h.record.components:v.components,path:O,aliasOf:h?h.record:v}))}let P,E;for(const C of $){const{path:O}=C;if(d&&O[0]!=="/"){const B=d.record.path,U=B[B.length-1]==="/"?"":"/";C.path=d.record.path+(O&&U+O)}if(C.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(P=Hk(C,d,y),d&&O[0]==="/"&&Yk(P,d),h?(h.alias.push(P),Kk(h,P)):(E=E||P,E!==P&&E.alias.push(P),k&&f.name&&!di(P)&&i(f.name)),v.children){const B=v.children;for(let U=0;U<B.length;U++)r(B[U],P,h&&h.children[U])}h=h||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&u(P)}return E?()=>{i(E)}:Us}function i(f){if(mu(f)){const d=o.get(f);d&&(o.delete(f),a.splice(a.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=a.indexOf(f);d>-1&&(a.splice(d,1),f.record.name&&o.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function c(){return a}function u(f){let d=0;for(;d<a.length&&Nk(f,a[d])>=0&&(f.record.path!==a[d].record.path||!vu(f,a[d]));)d++;a.splice(d,0,f),f.record.name&&!di(f)&&o.set(f.record.name,f)}function p(f,d){let h,k={},v,y;if("name"in f&&f.name){if(h=o.get(f.name),!h)throw ys(1,{location:f});{const E=Object.keys(f.params||{}).filter(C=>!h.keys.find(O=>O.name===C));E.length&&we(`Discarded invalid param(s) "${E.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}y=h.record.name,k=Ee(pi(d.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),f.params&&pi(f.params,h.keys.map(E=>E.name))),v=h.stringify(k)}else if("path"in f)v=f.path,v.startsWith("/")||we(`The Matcher cannot resolve relative paths but received "${v}". Unless you directly called \`matcher.resolve("${v}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=a.find(E=>E.re.test(v)),h&&(k=h.parse(v),y=h.record.name);else{if(h=d.name?o.get(d.name):a.find(E=>E.re.test(d.path)),!h)throw ys(1,{location:f,currentLocation:d});y=h.record.name,k=Ee({},d.params,f.params),v=h.stringify(k)}const $=[];let P=h;for(;P;)$.unshift(P.record),P=P.parent;return{name:y,path:v,params:k,matched:$,meta:zk($)}}return e.forEach(f=>r(f)),{addRoute:r,resolve:p,removeRoute:i,getRoutes:c,getRecordMatcher:l}}function pi(e,t){const a={};for(const o of t)o in e&&(a[o]=e[o]);return a}function Bk(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Wk(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Wk(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const o in e.components)t[o]=typeof a=="boolean"?a:a[o];return t}function di(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zk(e){return e.reduce((t,a)=>Ee(t,a.meta),{})}function fi(e,t){const a={};for(const o in e)a[o]=o in t?t[o]:e[o];return a}function Go(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function Kk(e,t){for(const a of e.keys)if(!a.optional&&!t.keys.find(Go.bind(null,a)))return we(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${a.name}"`);for(const a of t.keys)if(!a.optional&&!e.keys.find(Go.bind(null,a)))return we(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${a.name}"`)}function qk(e,t){t&&t.record.name&&!e.name&&!e.path&&we(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Yk(e,t){for(const a of t.keys)if(!e.keys.find(Go.bind(null,a)))return we(`Absolute path "${e.record.path}" must have the exact same param named "${a.name}" as its parent "${t.record.path}".`)}function vu(e,t){return t.children.some(a=>a===e||vu(e,a))}const _u=/#/g,Zk=/&/g,Gk=/\//g,Jk=/=/g,Qk=/\?/g,gu=/\+/g,Xk=/%5B/g,ev=/%5D/g,yu=/%5E/g,nv=/%60/g,bu=/%7B/g,tv=/%7C/g,wu=/%7D/g,sv=/%20/g;function Il(e){return encodeURI(""+e).replace(tv,"|").replace(Xk,"[").replace(ev,"]")}function av(e){return Il(e).replace(bu,"{").replace(wu,"}").replace(yu,"^")}function Jo(e){return Il(e).replace(gu,"%2B").replace(sv,"+").replace(_u,"%23").replace(Zk,"%26").replace(nv,"`").replace(bu,"{").replace(wu,"}").replace(yu,"^")}function ov(e){return Jo(e).replace(Jk,"%3D")}function lv(e){return Il(e).replace(_u,"%23").replace(Qk,"%3F")}function rv(e){return e==null?"":lv(e).replace(Gk,"%2F")}function ea(e){try{return decodeURIComponent(""+e)}catch{we(`Error decoding "${e}". Using original value`)}return""+e}function iv(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(gu," "),i=r.indexOf("="),c=ea(i<0?r:r.slice(0,i)),u=i<0?null:ea(r.slice(i+1));if(c in t){let p=t[c];En(p)||(p=t[c]=[p]),p.push(u)}else t[c]=u}return t}function hi(e){let t="";for(let a in e){const o=e[a];if(a=ov(a),o==null){o!==void 0&&(t+=(t.length?"&":"")+a);continue}(En(o)?o.map(r=>r&&Jo(r)):[o&&Jo(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+a,r!=null&&(t+="="+r))})}return t}function cv(e){const t={};for(const a in e){const o=e[a];o!==void 0&&(t[a]=En(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}const uv=Symbol("router view location matched"),mi=Symbol("router view depth"),Ml=Symbol("router"),xu=Symbol("route location"),Qo=Symbol("router view location");function Cs(){let e=[];function t(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function a(){e=[]}return{add:t,list:()=>e,reset:a}}function kt(e,t,a,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((i,c)=>{const u=d=>{d===!1?c(ys(4,{from:a,to:t})):d instanceof Error?c(d):Pk(d)?c(ys(2,{from:t,to:d})):(r&&o.enterCallbacks[l]===r&&typeof d=="function"&&r.push(d),i())},p=e.call(o&&o.instances[l],t,a,pv(u,t,a));let f=Promise.resolve(p);if(e.length<3&&(f=f.then(u)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)f=f.then(h=>u._called?h:(we(d),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){we(d),c(new Error("Invalid navigation guard"));return}}f.catch(d=>c(d))})}function pv(e,t,a){let o=0;return function(){o++===1&&we(`The "next" callback was called more than once in one navigation guard when going from "${a.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function bo(e,t,a,o){const l=[];for(const r of e){!r.components&&!r.children.length&&we(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const i in r.components){let c=r.components[i];{if(!c||typeof c!="object"&&typeof c!="function")throw we(`Component "${i}" in record with path "${r.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){we(`Component "${i}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,we(`Component "${i}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(dv(c)){const p=(c.__vccOpts||c)[t];p&&l.push(kt(p,a,o,r,i))}else{let u=c();"catch"in u||(we(`Component "${i}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),l.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));const f=dk(p)?p.default:p;r.components[i]=f;const h=(f.__vccOpts||f)[t];return h&&kt(h,a,o,r,i)()}))}}}return l}function dv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ki(e){const t=V(Ml),a=V(xu),o=T(()=>t.resolve(x(e.to))),l=T(()=>{const{matched:u}=o.value,{length:p}=u,f=u[p-1],d=a.matched;if(!f||!d.length)return-1;const h=d.findIndex(St.bind(null,f));if(h>-1)return h;const k=vi(u[p-2]);return p>1&&vi(f)===k&&d[d.length-1].path!==k?d.findIndex(St.bind(null,u[p-2])):h}),r=T(()=>l.value>-1&&kv(a.params,o.value.params)),i=T(()=>l.value>-1&&l.value===a.matched.length-1&&fu(a.params,o.value.params));function c(u={}){return mv(u)?t[x(e.replace)?"replace":"push"](x(e.to)).catch(Us):Promise.resolve()}if(st){const u=Pt();if(u){const p={route:o.value,isActive:r.value,isExactActive:i.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),ws(()=>{p.route=o.value,p.isActive=r.value,p.isExactActive=i.value},{flush:"post"})}}return{route:o,href:T(()=>o.value.href),isActive:r,isExactActive:i,navigate:c}}const fv=Re({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ki,setup(e,{slots:t}){const a=Xe(ki(e)),{options:o}=V(Ml),l=T(()=>({[_i(e.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[_i(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const r=t.default&&t.default(a);return e.custom?r:Gt("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:l.value},r)}}}),hv=fv;function mv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function kv(e,t){for(const a in t){const o=t[a],l=e[a];if(typeof o=="string"){if(o!==l)return!1}else if(!En(l)||l.length!==o.length||o.some((r,i)=>r!==l[i]))return!1}return!0}function vi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _i=(e,t,a)=>e??t??a,vv=Re({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:a}){gv();const o=V(Qo),l=T(()=>e.route||o.value),r=V(mi,0),i=T(()=>{let p=x(r);const{matched:f}=l.value;let d;for(;(d=f[p])&&!d.components;)p++;return p}),c=T(()=>l.value.matched[i.value]);xn(mi,T(()=>i.value+1)),xn(uv,c),xn(Qo,l);const u=ne();return Fe(()=>[u.value,c.value,e.name],([p,f,d],[h,k,v])=>{f&&(f.instances[d]=p,k&&k!==f&&p&&p===h&&(f.leaveGuards.size||(f.leaveGuards=k.leaveGuards),f.updateGuards.size||(f.updateGuards=k.updateGuards))),p&&f&&(!k||!St(f,k)||!h)&&(f.enterCallbacks[d]||[]).forEach(y=>y(p))},{flush:"post"}),()=>{const p=l.value,f=e.name,d=c.value,h=d&&d.components[f];if(!h)return gi(a.default,{Component:h,route:p});const k=d.props[f],v=k?k===!0?p.params:typeof k=="function"?k(p):k:null,$=Gt(h,Ee({},v,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[f]=null)},ref:u}));if(st&&$.ref){const P={depth:i.value,name:d.name,path:d.path,meta:d.meta};(En($.ref)?$.ref.map(C=>C.i):[$.ref.i]).forEach(C=>{C.__vrv_devtools=P})}return gi(a.default,{Component:$,route:p})||$}}});function gi(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const _v=vv;function gv(){const e=Pt(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const a=t==="KeepAlive"?"keep-alive":"transition";we(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${a}>
    <component :is="Component" />
  </${a}>
</router-view>`)}}function Ps(e,t){const a=Ee({},e,{matched:e.matched.map(o=>Cv(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:a}}}function ka(e){return{_custom:{display:e}}}let yv=0;function bv(e,t,a){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=yv++;pk({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((f,d)=>{f.instanceData&&f.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ps(t.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:f,componentInstance:d})=>{if(d.__vrv_devtools){const h=d.__vrv_devtools;f.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:$u})}En(d.__vrl_devtools)&&(d.__devtoolsApi=l,d.__vrl_devtools.forEach(h=>{let k=Su,v="";h.isExactActive?(k=Eu,v="This is exactly active"):h.isActive&&(k=Ru,v="This link is active"),f.tags.push({label:h.route.path,textColor:0,tooltip:v,backgroundColor:k})}))}),Fe(t.currentRoute,()=>{u(),l.notifyComponentUpdate(),l.sendInspectorTree(c),l.sendInspectorState(c)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((f,d)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:l.now(),data:{error:f},groupId:d.meta.__navigationId}})});let i=0;t.beforeEach((f,d)=>{const h={guard:ka("beforeEach"),from:Ps(d,"Current Location during this navigation"),to:Ps(f,"Target location")};Object.defineProperty(f.meta,"__navigationId",{value:i++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:f.fullPath,data:h,groupId:f.meta.__navigationId}})}),t.afterEach((f,d,h)=>{const k={guard:ka("afterEach")};h?(k.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},k.status=ka("❌")):k.status=ka("✅"),k.from=Ps(d,"Current Location during this navigation"),k.to=Ps(f,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:f.fullPath,time:l.now(),data:k,logType:h?"warning":"default",groupId:f.meta.__navigationId}})});const c="router-inspector:"+o;l.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const f=p;let d=a.getRoutes().filter(h=>!h.parent);d.forEach(Tu),f.filter&&(d=d.filter(h=>Xo(h,f.filter.toLowerCase()))),d.forEach(h=>Pu(h,t.currentRoute.value)),f.rootNodes=d.map(Cu)}let p;l.on.getInspectorTree(f=>{p=f,f.app===e&&f.inspectorId===c&&u()}),l.on.getInspectorState(f=>{if(f.app===e&&f.inspectorId===c){const h=a.getRoutes().find(k=>k.record.__vd_id===f.nodeId);h&&(f.state={options:xv(h)})}}),l.sendInspectorTree(c),l.sendInspectorState(c)})}function wv(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function xv(e){const{record:t}=e,a=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&a.push({editable:!1,key:"name",value:t.name}),a.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&a.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${wv(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&a.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&a.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&a.push({editable:!1,key:"meta",value:e.record.meta}),a.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),a}const $u=15485081,Ru=2450411,Eu=8702998,$v=2282478,Su=16486972,Rv=6710886;function Cu(e){const t=[],{record:a}=e;a.name!=null&&t.push({label:String(a.name),textColor:0,backgroundColor:$v}),a.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Su}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:$u}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Eu}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Ru}),a.redirect&&t.push({label:typeof a.redirect=="string"?`redirect: ${a.redirect}`:"redirects",textColor:16777215,backgroundColor:Rv});let o=a.__vd_id;return o==null&&(o=String(Ev++),a.__vd_id=o),{id:o,label:a.path,tags:t,children:e.children.map(Cu)}}let Ev=0;const Sv=/^\/(.*)\/([a-z]*)$/;function Pu(e,t){const a=t.matched.length&&St(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=a,a||(e.__vd_active=t.matched.some(o=>St(o,e.record))),e.children.forEach(o=>Pu(o,t))}function Tu(e){e.__vd_match=!1,e.children.forEach(Tu)}function Xo(e,t){const a=String(e.re).match(Sv);if(e.__vd_match=!1,!a||a.length<3)return!1;if(new RegExp(a[1].replace(/\$$/,""),a[2]).test(t))return e.children.forEach(i=>Xo(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const l=e.record.path.toLowerCase(),r=ea(l);return!t.startsWith("/")&&(r.includes(t)||l.includes(t))||r.startsWith(t)||l.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>Xo(i,t))}function Cv(e,t){const a={};for(const o in e)t.includes(o)||(a[o]=e[o]);return a}function Pv(e){const t=Uk(e.routes,e),a=e.parseQuery||iv,o=e.stringifyQuery||hi,l=e.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Cs(),i=Cs(),c=Cs(),u=Gn(ft);let p=ft;st&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=go.bind(null,S=>""+S),d=go.bind(null,rv),h=go.bind(null,ea);function k(S,G){let H,Q;return mu(S)?(H=t.getRecordMatcher(S),Q=G):Q=S,t.addRoute(Q,H)}function v(S){const G=t.getRecordMatcher(S);G?t.removeRoute(G):we(`Cannot remove non-existent route "${String(S)}"`)}function y(){return t.getRoutes().map(S=>S.record)}function $(S){return!!t.getRecordMatcher(S)}function P(S,G){if(G=Ee({},G||u.value),typeof S=="string"){const re=yo(a,S,G.path),m=t.resolve({path:re.path},G),_=l.createHref(re.fullPath);return _.startsWith("//")?we(`Location "${S}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):m.matched.length||we(`No match found for location with path "${S}"`),Ee(re,m,{params:h(m.params),hash:ea(re.hash),redirectedFrom:void 0,href:_})}let H;if("path"in S)"params"in S&&!("name"in S)&&Object.keys(S.params).length&&we(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),H=Ee({},S,{path:yo(a,S.path,G.path).path});else{const re=Ee({},S.params);for(const m in re)re[m]==null&&delete re[m];H=Ee({},S,{params:d(S.params)}),G.params=d(G.params)}const Q=t.resolve(H,G),ve=S.hash||"";ve&&!ve.startsWith("#")&&we(`A \`hash\` should always start with the character "#". Replace "${ve}" with "#${ve}".`),Q.params=f(h(Q.params));const be=mk(o,Ee({},S,{hash:av(ve),path:Q.path})),ue=l.createHref(be);return ue.startsWith("//")?we(`Location "${S}" resolved to "${ue}". A resolved location cannot start with multiple slashes.`):Q.matched.length||we(`No match found for location with path "${"path"in S?S.path:S}"`),Ee({fullPath:be,hash:ve,query:o===hi?cv(S.query):S.query||{}},Q,{redirectedFrom:void 0,href:ue})}function E(S){return typeof S=="string"?yo(a,S,u.value.path):Ee({},S)}function C(S,G){if(p!==S)return ys(8,{from:G,to:S})}function O(S){return J(S)}function B(S){return O(Ee(E(S),{replace:!0}))}function U(S){const G=S.matched[S.matched.length-1];if(G&&G.redirect){const{redirect:H}=G;let Q=typeof H=="function"?H(S):H;if(typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=E(Q):{path:Q},Q.params={}),!("path"in Q)&&!("name"in Q))throw we(`Invalid redirect found:
${JSON.stringify(Q,null,2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ee({query:S.query,hash:S.hash,params:"path"in Q?{}:S.params},Q)}}function J(S,G){const H=p=P(S),Q=u.value,ve=S.state,be=S.force,ue=S.replace===!0,re=U(H);if(re)return J(Ee(E(re),{state:typeof re=="object"?Ee({},ve,re.state):ve,force:be,replace:ue}),G||H);const m=H;m.redirectedFrom=G;let _;return!be&&ai(o,Q,H)&&(_=ys(16,{to:m,from:Q}),Ie(Q,Q,!0,!1)),(_?Promise.resolve(_):oe(m,Q)).catch(R=>Xn(R)?Xn(R,2)?R:fe(R):K(R,m,Q)).then(R=>{if(R){if(Xn(R,2))return ai(o,P(R.to),m)&&G&&(G._count=G._count?G._count+1:1)>10?(we(`Detected an infinite redirection in a navigation guard when going from "${Q.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):J(Ee({replace:ue},E(R.to),{state:typeof R.to=="object"?Ee({},ve,R.to.state):ve,force:be}),G||m)}else R=ye(m,Q,!0,ue,ve);return ie(m,Q,R),R})}function Z(S,G){const H=C(S,G);return H?Promise.reject(H):Promise.resolve()}function oe(S,G){let H;const[Q,ve,be]=Tv(S,G);H=bo(Q.reverse(),"beforeRouteLeave",S,G);for(const re of Q)re.leaveGuards.forEach(m=>{H.push(kt(m,S,G))});const ue=Z.bind(null,S,G);return H.push(ue),os(H).then(()=>{H=[];for(const re of r.list())H.push(kt(re,S,G));return H.push(ue),os(H)}).then(()=>{H=bo(ve,"beforeRouteUpdate",S,G);for(const re of ve)re.updateGuards.forEach(m=>{H.push(kt(m,S,G))});return H.push(ue),os(H)}).then(()=>{H=[];for(const re of S.matched)if(re.beforeEnter&&!G.matched.includes(re))if(En(re.beforeEnter))for(const m of re.beforeEnter)H.push(kt(m,S,G));else H.push(kt(re.beforeEnter,S,G));return H.push(ue),os(H)}).then(()=>(S.matched.forEach(re=>re.enterCallbacks={}),H=bo(be,"beforeRouteEnter",S,G),H.push(ue),os(H))).then(()=>{H=[];for(const re of i.list())H.push(kt(re,S,G));return H.push(ue),os(H)}).catch(re=>Xn(re,8)?re:Promise.reject(re))}function ie(S,G,H){for(const Q of c.list())Q(S,G,H)}function ye(S,G,H,Q,ve){const be=C(S,G);if(be)return be;const ue=G===ft,re=st?history.state:{};H&&(Q||ue?l.replace(S.fullPath,Ee({scroll:ue&&re&&re.scroll},ve)):l.push(S.fullPath,ve)),u.value=S,Ie(S,G,H,ue),fe()}let He;function en(){He||(He=l.listen((S,G,H)=>{if(!pt.listening)return;const Q=P(S),ve=U(Q);if(ve){J(Ee(ve,{replace:!0}),Q).catch(Us);return}p=Q;const be=u.value;st&&xk(li(be.fullPath,H.delta),ro()),oe(Q,be).catch(ue=>Xn(ue,12)?ue:Xn(ue,2)?(J(ue.to,Q).then(re=>{Xn(re,20)&&!H.delta&&H.type===Xs.pop&&l.go(-1,!1)}).catch(Us),Promise.reject()):(H.delta&&l.go(-H.delta,!1),K(ue,Q,be))).then(ue=>{ue=ue||ye(Q,be,!1),ue&&(H.delta&&!Xn(ue,8)?l.go(-H.delta,!1):H.type===Xs.pop&&Xn(ue,20)&&l.go(-1,!1)),ie(Q,be,ue)}).catch(Us)}))}let nn=Cs(),Ae=Cs(),Ve;function K(S,G,H){fe(S);const Q=Ae.list();return Q.length?Q.forEach(ve=>ve(S,G,H)):(we("uncaught error during route navigation:"),console.error(S)),Promise.reject(S)}function ae(){return Ve&&u.value!==ft?Promise.resolve():new Promise((S,G)=>{nn.add([S,G])})}function fe(S){return Ve||(Ve=!S,en(),nn.list().forEach(([G,H])=>S?H(S):G()),nn.reset()),S}function Ie(S,G,H,Q){const{scrollBehavior:ve}=e;if(!st||!ve)return Promise.resolve();const be=!H&&$k(li(S.fullPath,0))||(Q||!H)&&history.state&&history.state.scroll||null;return Vn().then(()=>ve(S,G,be)).then(ue=>ue&&wk(ue)).catch(ue=>K(ue,S,G))}const gn=S=>l.go(S);let sn;const mn=new Set,pt={currentRoute:u,listening:!0,addRoute:k,removeRoute:v,hasRoute:$,getRoutes:y,resolve:P,options:e,push:O,replace:B,go:gn,back:()=>gn(-1),forward:()=>gn(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:Ae.add,isReady:ae,install(S){const G=this;S.component("RouterLink",hv),S.component("RouterView",_v),S.config.globalProperties.$router=G,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>x(u)}),st&&!sn&&u.value===ft&&(sn=!0,O(l.location).catch(ve=>{we("Unexpected error when starting the router:",ve)}));const H={};for(const ve in ft)H[ve]=T(()=>u.value[ve]);S.provide(Ml,G),S.provide(xu,Xe(H)),S.provide(Qo,u);const Q=S.unmount;mn.add(S),S.unmount=function(){mn.delete(S),mn.size<1&&(p=ft,He&&He(),He=null,u.value=ft,sn=!1,Ve=!1),Q()},st&&bv(S,G,t)}};return pt}function os(e){return e.reduce((t,a)=>t.then(()=>a()),Promise.resolve())}function Tv(e,t){const a=[],o=[],l=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const c=t.matched[i];c&&(e.matched.find(p=>St(p,c))?o.push(c):a.push(c));const u=e.matched[i];u&&(t.matched.find(p=>St(p,u))||l.push(u))}return[a,o,l]}const wo=ne(!1),Ws=ne(!1),ds=ne(!1),Ov=ne(!0),el=cm({xs:460,...am}),Wt=sk(),Ou=zm(),Av=T(()=>Wt.height.value-Wt.width.value/bt>180),Au=Bm(Hn?document.body:null),_s=sm(),Iv=T(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=_s.value)==null?void 0:e.tagName)||"")||((t=_s.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Mv=T(()=>{var e;return["BUTTON","A"].includes(((e=_s.value)==null?void 0:e.tagName)||"")});On("slidev-camera","default");On("slidev-mic","default");const xa=On("slidev-scale",0),pn=On("slidev-show-overview",!1),xo=On("slidev-presenter-cursor",!0),yi=On("slidev-show-editor",!1);On("slidev-editor-width",Hn?window.innerWidth*.4:100);const Iu=Ol(pn);function bi(e,t,a,o=l=>l){return e*o(.5-t*(.5-a))}function Lv(e){return[-e[0],-e[1]]}function Mn(e,t){return[e[0]+t[0],e[1]+t[1]]}function Cn(e,t){return[e[0]-t[0],e[1]-t[1]]}function In(e,t){return[e[0]*t,e[1]*t]}function Dv(e,t){return[e[0]/t,e[1]/t]}function Ts(e){return[e[1],-e[0]]}function wi(e,t){return e[0]*t[0]+e[1]*t[1]}function Nv(e,t){return e[0]===t[0]&&e[1]===t[1]}function Fv(e){return Math.hypot(e[0],e[1])}function jv(e){return e[0]*e[0]+e[1]*e[1]}function xi(e,t){return jv(Cn(e,t))}function Mu(e){return Dv(e,Fv(e))}function Vv(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Os(e,t,a){let o=Math.sin(a),l=Math.cos(a),r=e[0]-t[0],i=e[1]-t[1],c=r*l-i*o,u=r*o+i*l;return[c+t[0],u+t[1]]}function nl(e,t,a){return Mn(e,In(Cn(t,e),a))}function $i(e,t,a){return Mn(e,In(t,a))}var{min:ls,PI:Hv}=Math,Ri=.275,As=Hv+1e-4;function Uv(e,t={}){let{size:a=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:i=K=>K,start:c={},end:u={},last:p=!1}=t,{cap:f=!0,easing:d=K=>K*(2-K)}=c,{cap:h=!0,easing:k=K=>--K*K*K+1}=u;if(e.length===0||a<=0)return[];let v=e[e.length-1].runningLength,y=c.taper===!1?0:c.taper===!0?Math.max(a,v):c.taper,$=u.taper===!1?0:u.taper===!0?Math.max(a,v):u.taper,P=Math.pow(a*o,2),E=[],C=[],O=e.slice(0,10).reduce((K,ae)=>{let fe=ae.pressure;if(r){let Ie=ls(1,ae.distance/a),gn=ls(1,1-Ie);fe=ls(1,K+(gn-K)*(Ie*Ri))}return(K+fe)/2},e[0].pressure),B=bi(a,l,e[e.length-1].pressure,i),U,J=e[0].vector,Z=e[0].point,oe=Z,ie=Z,ye=oe,He=!1;for(let K=0;K<e.length;K++){let{pressure:ae}=e[K],{point:fe,vector:Ie,distance:gn,runningLength:sn}=e[K];if(K<e.length-1&&v-sn<3)continue;if(l){if(r){let be=ls(1,gn/a),ue=ls(1,1-be);ae=ls(1,O+(ue-O)*(be*Ri))}B=bi(a,l,ae,i)}else B=a/2;U===void 0&&(U=B);let mn=sn<y?d(sn/y):1,pt=v-sn<$?k((v-sn)/$):1;B=Math.max(.01,B*Math.min(mn,pt));let S=(K<e.length-1?e[K+1]:e[K]).vector,G=K<e.length-1?wi(Ie,S):1,H=wi(Ie,J)<0&&!He,Q=G!==null&&G<0;if(H||Q){let be=In(Ts(J),B);for(let ue=1/13,re=0;re<=1;re+=ue)ie=Os(Cn(fe,be),fe,As*re),E.push(ie),ye=Os(Mn(fe,be),fe,As*-re),C.push(ye);Z=ie,oe=ye,Q&&(He=!0);continue}if(He=!1,K===e.length-1){let be=In(Ts(Ie),B);E.push(Cn(fe,be)),C.push(Mn(fe,be));continue}let ve=In(Ts(nl(S,Ie,G)),B);ie=Cn(fe,ve),(K<=1||xi(Z,ie)>P)&&(E.push(ie),Z=ie),ye=Mn(fe,ve),(K<=1||xi(oe,ye)>P)&&(C.push(ye),oe=ye),O=ae,J=Ie}let en=e[0].point.slice(0,2),nn=e.length>1?e[e.length-1].point.slice(0,2):Mn(e[0].point,[1,1]),Ae=[],Ve=[];if(e.length===1){if(!(y||$)||p){let K=$i(en,Mu(Ts(Cn(en,nn))),-(U||B)),ae=[];for(let fe=1/13,Ie=fe;Ie<=1;Ie+=fe)ae.push(Os(K,en,As*2*Ie));return ae}}else{if(!(y||$&&e.length===1))if(f)for(let ae=1/13,fe=ae;fe<=1;fe+=ae){let Ie=Os(C[0],en,As*fe);Ae.push(Ie)}else{let ae=Cn(E[0],C[0]),fe=In(ae,.5),Ie=In(ae,.51);Ae.push(Cn(en,fe),Cn(en,Ie),Mn(en,Ie),Mn(en,fe))}let K=Ts(Lv(e[e.length-1].vector));if($||y&&e.length===1)Ve.push(nn);else if(h){let ae=$i(nn,K,B);for(let fe=1/29,Ie=fe;Ie<1;Ie+=fe)Ve.push(Os(ae,nn,As*3*Ie))}else Ve.push(Mn(nn,In(K,B)),Mn(nn,In(K,B*.99)),Cn(nn,In(K,B*.99)),Cn(nn,In(K,B)))}return E.concat(Ve,C.reverse(),Ae)}function Bv(e,t={}){var a;let{streamline:o=.5,size:l=16,last:r=!1}=t;if(e.length===0)return[];let i=.15+(1-o)*.85,c=Array.isArray(e[0])?e:e.map(({x:k,y:v,pressure:y=.5})=>[k,v,y]);if(c.length===2){let k=c[1];c=c.slice(0,-1);for(let v=1;v<5;v++)c.push(nl(c[0],k,v/4))}c.length===1&&(c=[...c,[...Mn(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,f=0,d=u[0],h=c.length-1;for(let k=1;k<c.length;k++){let v=r&&k===h?c[k].slice(0,2):nl(d.point,c[k],i);if(Nv(d.point,v))continue;let y=Vv(v,d.point);if(f+=y,k<h&&!p){if(f<l)continue;p=!0}d={point:v,pressure:c[k][2]>=0?c[k][2]:.5,vector:Mu(Cn(d.point,v)),distance:y,runningLength:f},u.push(d)}return u[0].vector=((a=u[1])==null?void 0:a.vector)||[0,0],u}function Wv(e,t={}){return Uv(Bv(e,t),t)}var zv=()=>({events:{},emit(e,...t){let a=this.events[e]||[];for(let o=0,l=a.length;o<l;o++)a[o](...t)},on(e,t){var a;return(a=this.events[e])!=null&&a.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(l=>t!==l)}}});function ja(e,t){return e-t}function Kv(e){return e<0?-1:1}function Va(e){return[Math.abs(e),Kv(e)]}function Lu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var qv=2,at=qv,xs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const a=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((t=a.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*o,y:r.y*o,pressure:e.pressure}}}createElement(e,t){const a=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return a.setAttribute("fill",o.fill??"transparent"),a.setAttribute("stroke",o.color),a.setAttribute("stroke-width",o.size.toString()),a.setAttribute("stroke-linecap","round"),o.dasharray&&a.setAttribute("stroke-dasharray",o.dasharray),a}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(at))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Yv=class extends xs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Wv(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const a=t.reduce((o,[l,r],i,c)=>{const[u,p]=c[(i+1)%c.length];return o.push(l,r,(l+u)/2,(r+p)/2),o},["M",...t[0],"Q"]);return a.push("Z"),a.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Zv=class extends xs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,a]=Va(e.x-this.start.x),[o,l]=Va(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,i]=[this.start.x,this.start.x+t*a].sort(ja),[c,u]=[this.start.y,this.start.y+o*l].sort(ja);this.attr("cx",(r+i)/2),this.attr("cy",(c+u)/2),this.attr("rx",(i-r)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Du(e,t){const a=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),a.appendChild(o),a}var Gv=class extends xs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Lu(),a=document.createElementNS("http://www.w3.org/2000/svg","g");return a.append(Du(t,this.brush.color)),a.append(this.el),this.attr("marker-end",`url(#${t})`),a}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:a}=e;if(this.shiftPressed){const o=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,a=this.start.y+l):(t=this.start.x+o,a=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-a),this.attr("x2",t),this.attr("y2",a)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",a)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Jv=class extends xs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,a]=Va(e.x-this.start.x),[o,l]=Va(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,i]=[this.start.x,this.start.x+t*a].sort(ja),[c,u]=[this.start.y,this.start.y+o*l].sort(ja);this.attr("x",r),this.attr("y",c),this.attr("width",i-r),this.attr("height",u-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Qv(e,t){const a=e.x-t.x,o=e.y-t.y;return a*a+o*o}function Xv(e,t,a){let o=t.x,l=t.y,r=a.x-o,i=a.y-l;if(r!==0||i!==0){const c=((e.x-o)*r+(e.y-l)*i)/(r*r+i*i);c>1?(o=a.x,l=a.y):c>0&&(o+=r*c,l+=i*c)}return r=e.x-o,i=e.y-l,r*r+i*i}function e_(e,t){let a=e[0];const o=[a];let l;for(let r=1,i=e.length;r<i;r++)l=e[r],Qv(l,a)>t&&(o.push(l),a=l);return a!==l&&l&&o.push(l),o}function tl(e,t,a,o,l){let r=o,i=0;for(let c=t+1;c<a;c++){const u=Xv(e[c],e[t],e[a]);u>r&&(i=c,r=u)}r>o&&(i-t>1&&tl(e,t,i,o,l),l.push(e[i]),a-i>1&&tl(e,i,a,o,l))}function n_(e,t){const a=e.length-1,o=[e[0]];return tl(e,0,a,t,o),o.push(e[a]),o}function Ei(e,t,a=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=a?e:e_(e,o),e=n_(e,o),e}var t_=class extends xs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Lu();const t=Du(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ei(this.points,1,!0),this.count=0),this.attr("d",Ci(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ci(Ei(this.points,1,!0))),!e.getTotalLength()))}};function s_(e,t){const a=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(a**2+o**2),angle:Math.atan2(o,a)}}function Si(e,t,a,o){const l=t||e,r=a||e,i=.2,c=s_(l,r),u=c.angle+(o?Math.PI:0),p=c.length*i,f=e.x+Math.cos(u)*p,d=e.y+Math.sin(u)*p;return{x:f,y:d}}function a_(e,t,a){const o=Si(a[t-1],a[t-2],e),l=Si(e,a[t-1],a[t+1],!0);return`C ${o.x.toFixed(at)},${o.y.toFixed(at)} ${l.x.toFixed(at)},${l.y.toFixed(at)} ${e.x.toFixed(at)},${e.y.toFixed(at)}`}function Ci(e){return e.reduce((t,a,o,l)=>o===0?`M ${a.x.toFixed(at)},${a.y.toFixed(at)}`:`${t} ${a_(a,o,l)}`,"")}var o_=class extends xs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(a,o)=>{if(a&&a.length)for(let l=0;l<a.length;l++){const r=a[l];if(r.getTotalLength){const i=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=r.getPointAtLength(i*c/this.pathSubFactor),p=r.getPointAtLength(i*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:o||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const a=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(a,o)&&(a.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,a)=>!e.includes(a))),e.length>0}lineLineIntersect(e,t){const a=e.x1,o=e.x2,l=t.x1,r=t.x2,i=e.y1,c=e.y2,u=t.y1,p=t.y2,f=(a-o)*(u-p)-(i-c)*(l-r),d=(a*c-i*o)*(l-r)-(a-o)*(l*p-u*r),h=(a*c-i*o)*(u-p)-(i-c)*(l*p-u*r),k=(v,y,$)=>v>=y&&v<=$?!0:v>=$&&v<=y;if(f===0)return!1;{const v={x:d/f,y:h/f};return k(v.x,a,o)&&k(v.y,i,c)&&k(v.x,l,r)&&k(v.y,u,p)}}};function l_(e){return{draw:new t_(e),stylus:new Yv(e),line:new Gv(e),rectangle:new Jv(e),ellipse:new Zv(e),eraseLine:new o_(e)}}var r_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=zv(),this._models=l_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const a=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);a.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{a.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function i_(e){return new r_(e)}const sl=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Yn=On("slidev-drawing-enabled",!1),B3=On("slidev-drawing-pinned",!1),c_=ne(!1),u_=ne(!1),p_=ne(!1),na=ne(!1),Nt=Oh(On("slidev-drawing-brush",{color:sl[0],size:4,mode:"stylus"})),Pi=ne("stylus"),Nu=T(()=>De.drawings.syncAll||Dn.value);let ta=!1;const Is=T({get(){return Pi.value},set(e){Pi.value=e,e==="arrow"?(Nt.mode="line",Nt.arrowEnd=!0):(Nt.mode=e,Nt.arrowEnd=!1)}}),d_=Xe({brush:Nt,acceptsInputTypes:T(()=>Yn.value&&(!De.drawings.presenterOnly||Dn.value)?void 0:["pen"]),coordinateTransform:!1}),hn=ml(i_(d_));function f_(){hn.clear(),Nu.value&&tu(Qe.value,"")}function Fu(){var e;u_.value=hn.canRedo(),c_.value=hn.canUndo(),p_.value=!!((e=hn.el)!=null&&e.children.length)}function h_(e){ta=!0;const t=Na[e||Qe.value];t!=null?hn.load(t):hn.clear(),ta=!1}hn.on("changed",()=>{if(Fu(),!ta){const e=hn.dump(),t=Qe.value;(Na[t]||"")!==e&&Nu.value&&tu(t,hn.dump())}});yh(e=>{ta=!0,e[Qe.value]!=null&&hn.load(e[Qe.value]||""),ta=!1,Fu()});Vn(()=>{Fe(Qe,()=>{hn.mounted&&h_()},{immediate:!0})});hn.on("start",()=>na.value=!0);hn.on("end",()=>na.value=!1);window.addEventListener("keydown",e=>{if(!Yn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let a=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?hn.redo():hn.undo():e.code==="Escape"?Yn.value=!1:e.code==="KeyL"&&t?Is.value="line":e.code==="KeyA"&&t?Is.value="arrow":e.code==="KeyS"&&t?Is.value="stylus":e.code==="KeyR"&&t?Is.value="rectangle":e.code==="KeyE"&&t?Is.value="ellipse":e.code==="KeyC"&&t?f_():e.code.startsWith("Digit")&&t&&+e.code[5]<=sl.length?Nt.color=sl[+e.code[5]-1]:a=!1,a&&(e.preventDefault(),e.stopPropagation())},!1);var Ti;const m_=typeof window<"u";m_&&((Ti=window==null?void 0:window.navigator)!=null&&Ti.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ju(e){return typeof e=="function"?e():x(e)}function W3(e){Pt()&&to(e)}function Ke(...e){return T(()=>e.every(t=>ju(t)))}function yn(e){return T(()=>!ju(e))}const Oi=Al(),$o=On("slidev-color-schema","auto"),al=T(()=>De.colorSchema!=="auto"),Ll=T({get(){return al.value?De.colorSchema==="dark":$o.value==="auto"?Oi.value:$o.value==="dark"},set(e){al.value||($o.value=e===Oi.value?"auto":e?"dark":"light")}}),Vu=Ol(Ll);Hn&&Fe(Ll,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const $a=ne(1),Ra=T(()=>Ze.length-1),$n=ne(0),Dl=ne(0);function k_(){$n.value>$a.value&&($n.value-=1)}function v_(){$n.value<Ra.value&&($n.value+=1)}function __(){if($n.value>$a.value){let e=$n.value-Dl.value;e<$a.value&&(e=$a.value),$n.value=e}}function g_(){if($n.value<Ra.value){let e=$n.value+Dl.value;e>Ra.value&&(e=Ra.value),$n.value=e}}function y_(){const{escape:e,space:t,shift:a,left:o,right:l,up:r,down:i,enter:c,d:u,g:p,o:f}=Ou;let d=[{name:"next_space",key:Ke(t,yn(a)),fn:zt,autoRepeat:!0},{name:"prev_space",key:Ke(t,a),fn:Kt,autoRepeat:!0},{name:"next_right",key:Ke(l,yn(a),yn(pn)),fn:zt,autoRepeat:!0},{name:"prev_left",key:Ke(o,yn(a),yn(pn)),fn:Kt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:zt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Kt,autoRepeat:!0},{name:"next_down",key:Ke(i,yn(pn)),fn:Ua,autoRepeat:!0},{name:"prev_up",key:Ke(r,yn(pn)),fn:()=>Ba(!1),autoRepeat:!0},{name:"next_shift",key:Ke(l,a),fn:Ua,autoRepeat:!0},{name:"prev_shift",key:Ke(o,a),fn:()=>Ba(!1),autoRepeat:!0},{name:"toggle_dark",key:Ke(u,yn(Yn)),fn:Vu},{name:"toggle_overview",key:Ke(f,yn(Yn)),fn:Iu},{name:"hide_overview",key:Ke(e,yn(Yn)),fn:()=>pn.value=!1},{name:"goto",key:Ke(p,yn(Yn)),fn:()=>ds.value=!ds.value},{name:"next_overview",key:Ke(l,pn),fn:v_},{name:"prev_overview",key:Ke(o,pn),fn:k_},{name:"up_overview",key:Ke(r,pn),fn:__},{name:"down_overview",key:Ke(i,pn),fn:g_},{name:"goto_from_overview",key:Ke(c,pn),fn:()=>{bs($n.value),pn.value=!1}}];const h=new Set(d.map(v=>v.name));if(d.filter(v=>v.name&&h.has(v.name)).length===0){const v=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(v),console.warn(v)}return d}const Hu=Ke(yn(Iv),yn(Mv),Ov);function b_(e,t,a=!1){typeof e=="string"&&(e=Ou[e]);const o=Ke(e,Hu);let l=0,r;const i=()=>{if(clearTimeout(r),!o.value){l=0;return}a&&(r=setTimeout(i,Math.max(1e3-l*250,150)),l++),t()};return Fe(o,i,{flush:"sync"})}function w_(e,t){return tm(e,a=>{Hu.value&&(a.repeat||t())})}function x_(){const e=y_();new Map(e.map(a=>[a.key,a])).forEach(a=>{a.fn&&b_(a.key,a.fn,a.autoRepeat)}),w_("f",()=>Au.toggle())}const $_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R_=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),E_=[R_];function S_(e,t){return w(),D("svg",$_,E_)}const C_={name:"carbon-close",render:S_};function Nl(e){var a,o;const t=(o=(a=e==null?void 0:e.meta)==null?void 0:a.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const P_=Re({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;V(q);const a=ne(),o=Um(a),l=T(()=>t.width?t.width:o.width.value),r=T(()=>t.width?t.width/bt:o.height.value);t.width&&ws(()=>{a.value&&(a.value.style.width=`${l.value}px`,a.value.style.height=`${r.value}px`)});const i=T(()=>l.value/r.value),c=T(()=>t.scale?t.scale:i.value<bt?l.value/wt:r.value*bt/wt),u=T(()=>({height:`${Pl}px`,width:`${wt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=T(()=>({"select-none":!De.selectable,"slidev-code-line-numbers":De.lineNumbers}));return xn(Xc,c),(f,d)=>(w(),D("div",{id:"slide-container",ref_key:"root",ref:a,class:Ue(x(p))},[n("div",{id:"slide-content",style:Be(x(u))},[_n(f.$slots,"default")],4),_n(f.$slots,"controls")],2))}});const Y=(e,t)=>{const a=e.__vccOpts||e;for(const[o,l]of t)a[o]=l;return a},Uu=Y(P_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Fl=Re({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const a=Fn(e,"clicks",t),o=Fn(e,"clicksElements",t),l=Fn(e,"clicksDisabled",t),r=Fn(e,"clicksOrderMap",t);o.value.length=0,xn(ch,e.route),xn(uh,e.context),xn(Gc,a),xn(Qc,l),xn(Jc,o),xn(ih,r)},render(){var e,t;return this.$props.is?Gt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),T_=["innerHTML"],O_=Re({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return V(q),(t,a)=>x(Na)[e.page]?(w(),D("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:x(Na)[e.page]},null,8,T_)):me("v-if",!0)}}),Bu=Y(O_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),A_=Object.freeze(Object.defineProperty({__proto__:null,default:Bu},Symbol.toStringTag,{value:"Module"})),I_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},M_=["onClick"],L_=Re({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const a=e;V(q);const o=Fn(a,"modelValue",t);function l(){o.value=!1}function r(k){bs(k),l()}function i(k){return k===$n.value}const c=el.smaller("xs"),u=el.smaller("sm"),p=4*16*2,f=2*16,d=T(()=>c.value?Wt.width.value-p:u.value?(Wt.width.value-p-f)/2:300),h=T(()=>Math.floor((Wt.width.value-p)/(d.value+f)));return ws(()=>{$n.value=Qe.value,Dl.value=h.value}),(k,v)=>{const y=C_;return w(),D(Ce,null,[Se(n("div",I_,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Be(`grid-template-columns: repeat(auto-fit,minmax(${x(d)}px,1fr))`)},[(w(!0),D(Ce,null,la(x(Ze).slice(0,-1),($,P)=>(w(),D("div",{key:$.path,class:"relative"},[n("div",{class:Ue(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(P+1),"border-gray-400":!i(P+1)}]),style:Be(x(Tl)),onClick:E=>r(+$.path)},[(w(),z(Uu,{key:$.path,width:x(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:g(()=>[b(x(Fl),{is:$==null?void 0:$.component,"clicks-disabled":!0,class:Ue(x(Nl)($)),route:$,context:"overview"},null,8,["is","class","route"]),b(Bu,{page:+$.path},null,8,["page"])]),_:2},1032,["width"]))],14,M_),n("div",{class:"absolute top-0 opacity-50",style:Be(`left: ${x(d)+5}px`)},qe(P+1),5)]))),128))],4)],512),[[Zc,x(o)]]),x(o)?(w(),D("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[b(y)])):me("v-if",!0)],64)}}});const D_=Y(L_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),N_="/assets/logo-b72bde5d.png",F_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},j_=Re({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const a=e;V(q);const o=Fn(a,"modelValue",t);function l(){o.value=!1}return(r,i)=>(w(),z(Rc,null,[x(o)?(w(),D("div",F_,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=c=>l())}),n("div",{class:Ue(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ gray-400 opacity-10"},[_n(r.$slots,"default")],2)])):me("v-if",!0)],1024))}}),V_=Y(j_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Modal.vue"]]),H_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},U_=["innerHTML"],B_=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:N_,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),s("dev ")])])],-1),W_=Re({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const a=e;V(q);const o=Fn(a,"modelValue",t),l=T(()=>typeof De.info=="string");return(r,i)=>(w(),z(V_,{modelValue:x(o),"onUpdate:modelValue":i[0]||(i[0]=c=>xe(o)?o.value=c:null),class:"px-6 py-4"},{default:g(()=>[n("div",H_,[x(l)?(w(),D("div",{key:0,class:"mb-4",innerHTML:x(De).info},null,8,U_)):me("v-if",!0),B_])]),_:1},8,["modelValue"]))}});const z_=Y(W_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/InfoDialog.vue"]]),K_=["disabled","onKeydown"],q_=Re({__name:"Goto",setup(e){V(q);const t=ne(),a=ne(""),o=T(()=>{if(a.value.startsWith("/"))return!!Ze.find(i=>i.path===a.value.substring(1));{const i=+a.value;return!isNaN(i)&&i>0&&i<=np.value}});function l(){o.value&&(a.value.startsWith("/")?bs(a.value.substring(1)):bs(+a.value)),r()}function r(){ds.value=!1}return Fe(ds,async i=>{var c,u;i?(await Vn(),a.value="",(c=t.value)==null||c.focus()):(u=t.value)==null||u.blur()}),Fe(a,i=>{i.match(/^[^0-9/]/)&&(a.value=a.value.substring(1))}),(i,c)=>(w(),D("div",{id:"slidev-goto-dialog",class:Ue(["fixed right-5 bg-main transform transition-all",x(ds)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Se(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=u=>a.value=u),type:"text",disabled:!x(ds),class:Ue(["outline-none bg-transparent",{"text-red-400":!x(o)&&a.value}]),placeholder:"Goto...",onKeydown:[Pr(l,["enter"]),Pr(r,["escape"])],onBlur:r},null,42,K_),[[eh,a.value]])],2))}}),Y_=Y(q_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Goto.vue"]]),Z_=Re({__name:"Controls",setup(e){V(q);const t=Gn(),a=Gn();return(o,l)=>(w(),D(Ce,null,[b(D_,{modelValue:x(pn),"onUpdate:modelValue":l[0]||(l[0]=r=>xe(pn)?pn.value=r:null)},null,8,["modelValue"]),b(Y_),x(t)?(w(),z(x(t),{key:0})):me("v-if",!0),x(a)?(w(),z(x(a),{key:1,modelValue:x(wo),"onUpdate:modelValue":l[1]||(l[1]=r=>xe(wo)?wo.value=r:null)},null,8,["modelValue"])):me("v-if",!0),x(De).info?(w(),z(z_,{key:2,modelValue:x(Ws),"onUpdate:modelValue":l[2]||(l[2]=r=>xe(Ws)?Ws.value=r:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),G_=Y(Z_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Controls.vue"]]),J_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q_=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),X_=[Q_];function eg(e,t){return w(),D("svg",J_,X_)}const ng={name:"carbon-settings-adjust",render:eg},tg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},sg=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),ag=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),og=[sg,ag];function lg(e,t){return w(),D("svg",tg,og)}const rg={name:"carbon-information",render:lg},ig={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cg=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),ug=[cg];function pg(e,t){return w(),D("svg",ig,ug)}const dg={name:"carbon-download",render:pg},fg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hg=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),mg=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),kg=[hg,mg];function vg(e,t){return w(),D("svg",fg,kg)}const _g={name:"carbon-user-speaker",render:vg},gg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yg=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),bg=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),wg=[yg,bg];function xg(e,t){return w(),D("svg",gg,wg)}const $g={name:"carbon-presentation-file",render:xg},Rg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Eg=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Sg=[Eg];function Cg(e,t){return w(),D("svg",Rg,Sg)}const Pg={name:"carbon-pen",render:Cg},Tg={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Og=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Ag=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Ig=[Og,Ag];function Mg(e,t){return w(),D("svg",Tg,Ig)}const Lg={name:"ph-cursor-duotone",render:Mg},Dg={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ng=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Fg=[Ng];function jg(e,t){return w(),D("svg",Dg,Fg)}const Wu={name:"ph-cursor-fill",render:jg},Vg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hg=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Ug=[Hg];function Bg(e,t){return w(),D("svg",Vg,Ug)}const Wg={name:"carbon-sun",render:Bg},zg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Kg=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),qg=[Kg];function Yg(e,t){return w(),D("svg",zg,qg)}const Zg={name:"carbon-moon",render:Yg},Gg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jg=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Qg=[Jg];function Xg(e,t){return w(),D("svg",Gg,Qg)}const e1={name:"carbon-apps",render:Xg},n1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),s1=[t1];function a1(e,t){return w(),D("svg",n1,s1)}const o1={name:"carbon-arrow-right",render:a1},l1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r1=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),i1=[r1];function c1(e,t){return w(),D("svg",l1,i1)}const u1={name:"carbon-arrow-left",render:c1},p1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d1=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),f1=[d1];function h1(e,t){return w(),D("svg",p1,f1)}const m1={name:"carbon-maximize",render:h1},k1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v1=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),_1=[v1];function g1(e,t){return w(),D("svg",k1,_1)}const y1={name:"carbon-minimize",render:g1},b1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w1=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),x1=[w1];function $1(e,t){return w(),D("svg",b1,x1)}const R1={name:"carbon-checkmark",render:$1},E1={class:"select-list"},S1={class:"title"},C1={class:"items"},P1=["onClick"],T1=Re({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const a=e;V(q);const o=Fn(a,"modelValue",t,{passive:!0});return(l,r)=>{const i=R1;return w(),D("div",E1,[n("div",S1,qe(e.title),1),n("div",C1,[(w(!0),D(Ce,null,la(e.items,c=>(w(),D("div",{key:c.value,class:Ue(["item",{active:x(o)===c.value}]),onClick:()=>{var u;o.value=c.value,(u=c.onClick)==null||u.call(c)}},[b(i,{class:Ue(["text-green-500",{"opacity-0":x(o)!==c.value}])},null,8,["class"]),s(" "+qe(c.display||c.value),1)],10,P1))),128))])])}}});const O1=Y(T1,[["__scopeId","data-v-773f1c1c"],["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/SelectList.vue"]]),A1={class:"text-sm"},I1=Re({__name:"Settings",setup(e){V(q);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(a,o)=>(w(),D("div",A1,[b(O1,{modelValue:x(xa),"onUpdate:modelValue":o[0]||(o[0]=l=>xe(xa)?xa.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),M1=Y(I1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Settings.vue"]]),L1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},D1=Re({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const a=e;V(q);const o=Fn(a,"modelValue",t,{passive:!0}),l=ne();return em(l,()=>{o.value=!1}),(r,i)=>(w(),D("div",{ref_key:"el",ref:l,class:"flex relative"},[n("button",{class:Ue({disabled:e.disabled}),onClick:i[0]||(i[0]=c=>o.value=!x(o))},[_n(r.$slots,"button",{class:Ue({disabled:e.disabled})})],2),(w(),z(Rc,null,[x(o)?(w(),D("div",L1,[_n(r.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),N1=Y(D1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/MenuButton.vue"]]),F1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},j1={__name:"VerticalDivider",setup(e){return V(q),(t,a)=>(w(),D("div",F1))}},va=Y(j1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),V1={render(){return[]}},H1={class:"icon-btn"},U1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},B1={class:"my-auto"},W1={class:"opacity-50"},z1=Re({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;V(q);const a=el.smaller("md"),{isFullscreen:o,toggle:l}=Au,r=T(()=>ll.value?`?password=${ll.value}`:""),i=T(()=>`/presenter/${Qe.value}${r.value}`),c=T(()=>`/${Qe.value}${r.value}`),u=ne(),p=()=>{u.value&&_s.value&&u.value.contains(_s.value)&&_s.value.blur()},f=T(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Gn(),h=Gn();return Jt(()=>import("./DrawingControls-1ffb4246.js"),[]).then(k=>h.value=k.default),(k,v)=>{const y=y1,$=m1,P=u1,E=o1,C=e1,O=Zg,B=Wg,U=Wu,J=Lg,Z=Pg,oe=$g,ie=Zt("RouterLink"),ye=_g,He=dg,en=rg,nn=ng;return w(),D("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[n("div",{class:Ue(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",x(f)]),onMouseleave:p},[x(tt)?me("v-if",!0):(w(),D("button",{key:0,class:"icon-btn",onClick:v[0]||(v[0]=(...Ae)=>x(l)&&x(l)(...Ae))},[x(o)?(w(),z(y,{key:0})):(w(),z($,{key:1}))])),n("button",{class:Ue(["icon-btn",{disabled:!x(_3)}]),onClick:v[1]||(v[1]=(...Ae)=>x(Kt)&&x(Kt)(...Ae))},[b(P)],2),n("button",{class:Ue(["icon-btn",{disabled:!x(v3)}]),title:"Next",onClick:v[2]||(v[2]=(...Ae)=>x(zt)&&x(zt)(...Ae))},[b(E)],2),x(tt)?me("v-if",!0):(w(),D("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=Ae=>x(Iu)())},[b(C)])),x(al)?me("v-if",!0):(w(),D("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=Ae=>x(Vu)())},[x(Ll)?(w(),z(O,{key:0})):(w(),z(B,{key:1}))])),b(va),x(tt)?me("v-if",!0):(w(),D(Ce,{key:3},[!x(Dn)&&!x(a)&&x(d)?(w(),D(Ce,{key:0},[b(x(d)),b(va)],64)):me("v-if",!0),x(Dn)?(w(),D("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=Ae=>xo.value=!x(xo))},[x(xo)?(w(),z(U,{key:0})):(w(),z(J,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),(!x(De).drawings.presenterOnly||x(Dn))&&!x(tt)?(w(),D(Ce,{key:4},[n("button",{class:"icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=Ae=>Yn.value=!x(Yn))},[b(Z),x(Yn)?(w(),D("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Be({background:x(Nt).color})},null,4)):me("v-if",!0)]),b(va)],64)):me("v-if",!0),x(tt)?me("v-if",!0):(w(),D(Ce,{key:5},[x(Dn)?(w(),z(ie,{key:0,to:x(c),class:"icon-btn",title:"Play Mode"},{default:g(()=>[b(oe)]),_:1},8,["to"])):me("v-if",!0),x(h3)?(w(),z(ie,{key:1,to:x(i),class:"icon-btn",title:"Presenter Mode"},{default:g(()=>[b(ye)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(w(),D(Ce,{key:6},[x(De).download?(w(),D("button",{key:0,class:"icon-btn",onClick:v[8]||(v[8]=(...Ae)=>x(Fi)&&x(Fi)(...Ae))},[b(He)])):me("v-if",!0)],64)),!x(Dn)&&x(De).info&&!x(tt)?(w(),D("button",{key:7,class:"icon-btn",onClick:v[9]||(v[9]=Ae=>Ws.value=!x(Ws))},[b(en)])):me("v-if",!0),!x(Dn)&&!x(tt)?(w(),z(N1,{key:8},{button:g(()=>[n("button",H1,[b(nn)])]),menu:g(()=>[b(M1)]),_:1})):me("v-if",!0),x(tt)?me("v-if",!0):(w(),z(va,{key:9})),n("div",U1,[n("div",B1,[s(qe(x(Qe))+" ",1),n("span",W1,"/ "+qe(x(np)),1)])]),b(x(V1))],34)],512)}}}),K1=Y(z1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/NavControls.vue"]]),zu={render(){return[]}},Ku={render(){return[]}},q1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Y1=Re({__name:"PresenterMouse",setup(e){return V(q),(t,a)=>{const o=Wu;return x(_o).cursor?(w(),D("div",q1,[b(o,{class:"absolute",style:Be({left:`${x(_o).cursor.x}%`,top:`${x(_o).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),Z1=Y(Y1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),G1=Re({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){V(q),Fe(wn,()=>{var a,o;(a=wn.value)!=null&&a.meta&&wn.value.meta.preload!==!1&&(wn.value.meta.__preloaded=!0),(o=Ro.value)!=null&&o.meta&&Ro.value.meta.preload!==!1&&(Ro.value.meta.__preloaded=!0)},{immediate:!0});const t=Gn();return Jt(()=>import("./DrawingLayer-03d7207b.js"),[]).then(a=>t.value=a.default),(a,o)=>(w(),D(Ce,null,[me(" Global Bottom "),b(x(Ku)),me(" Slides "),(w(!0),D(Ce,null,la(x(Ze),l=>{var r,i;return w(),D(Ce,{key:l.path},[(r=l.meta)!=null&&r.__preloaded||l===x(wn)?Se((w(),z(x(Fl),{key:0,is:l==null?void 0:l.component,clicks:l===x(wn)?x(Qt):0,"clicks-elements":((i=l.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:Ue(x(Nl)(l)),route:l,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Zc,l===x(wn)]]):me("v-if",!0)],64)}),128)),me(" Global Top "),b(x(zu)),x(t)?(w(),z(x(t),{key:0})):me("v-if",!0),x(Dn)?me("v-if",!0):(w(),z(Z1,{key:1}))],64))}}),J1=Y(G1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Q1=Re({__name:"Play",setup(e){V(q),x_();const t=ne();function a(r){var i;yi.value||((i=r.target)==null?void 0:i.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?zt():Kt())}b3(t);const o=T(()=>Av.value||yi.value);Gn();const l=Gn();return Jt(()=>import("./DrawingControls-1ffb4246.js"),[]).then(r=>l.value=r.default),(r,i)=>(w(),D(Ce,null,[n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Be(x(Tl))},[b(Uu,{class:"w-full h-full",style:Be({background:"var(--slidev-slide-container-background, black)"}),width:x(Bl)?x(Wt).width.value:void 0,scale:x(xa),onPointerdown:a},{default:g(()=>[b(J1,{context:"slide"})]),controls:g(()=>[n("div",{class:Ue(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[x(o)?"opacity-100 right-0":"opacity-0 p-2",x(na)?"pointer-events-none":""]])},[b(K1,{class:"m-auto",persist:x(o)},null,8,["persist"])],2),!x(De).drawings.presenterOnly&&!x(tt)&&x(l)?(w(),z(x(l),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),b(G_)],64))}}),X1=Y(Q1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function qu(e){return typeof e>"u"||e===null}function ey(e){return typeof e=="object"&&e!==null}function ny(e){return Array.isArray(e)?e:qu(e)?[]:[e]}function ty(e,t){var a,o,l,r;if(t)for(r=Object.keys(t),a=0,o=r.length;a<o;a+=1)l=r[a],e[l]=t[l];return e}function sy(e,t){var a="",o;for(o=0;o<t;o+=1)a+=e;return a}function ay(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var oy=qu,ly=ey,ry=ny,iy=sy,cy=ay,uy=ty,jl={isNothing:oy,isObject:ly,toArray:ry,repeat:iy,isNegativeZero:cy,extend:uy};function Yu(e,t){var a="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(a+='in "'+e.mark.name+'" '),a+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(a+=`

`+e.mark.snippet),o+" "+a):o}function sa(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Yu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}sa.prototype=Object.create(Error.prototype);sa.prototype.constructor=sa;sa.prototype.toString=function(t){return this.name+": "+Yu(this,t)};var Lt=sa,py=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],dy=["scalar","sequence","mapping"];function fy(e){var t={};return e!==null&&Object.keys(e).forEach(function(a){e[a].forEach(function(o){t[String(o)]=a})}),t}function hy(e,t){if(t=t||{},Object.keys(t).forEach(function(a){if(py.indexOf(a)===-1)throw new Lt('Unknown option "'+a+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(a){return a},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=fy(t.styleAliases||null),dy.indexOf(this.kind)===-1)throw new Lt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var on=hy;function Ai(e,t){var a=[];return e[t].forEach(function(o){var l=a.length;a.forEach(function(r,i){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=i)}),a[l]=o}),a}function my(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,a;function o(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(t=0,a=arguments.length;t<a;t+=1)arguments[t].forEach(o);return e}function ol(e){return this.extend(e)}ol.prototype.extend=function(t){var a=[],o=[];if(t instanceof on)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(a=a.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Lt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");a.forEach(function(r){if(!(r instanceof on))throw new Lt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Lt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Lt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof on))throw new Lt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(ol.prototype);return l.implicit=(this.implicit||[]).concat(a),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Ai(l,"implicit"),l.compiledExplicit=Ai(l,"explicit"),l.compiledTypeMap=my(l.compiledImplicit,l.compiledExplicit),l};var ky=ol,vy=new on("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),_y=new on("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),gy=new on("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),yy=new ky({explicit:[vy,_y,gy]});function by(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function wy(){return null}function xy(e){return e===null}var $y=new on("tag:yaml.org,2002:null",{kind:"scalar",resolve:by,construct:wy,predicate:xy,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Ry(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Ey(e){return e==="true"||e==="True"||e==="TRUE"}function Sy(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Cy=new on("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Ry,construct:Ey,predicate:Sy,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Py(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ty(e){return 48<=e&&e<=55}function Oy(e){return 48<=e&&e<=57}function Ay(e){if(e===null)return!1;var t=e.length,a=0,o=!1,l;if(!t)return!1;if(l=e[a],(l==="-"||l==="+")&&(l=e[++a]),l==="0"){if(a+1===t)return!0;if(l=e[++a],l==="b"){for(a++;a<t;a++)if(l=e[a],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(a++;a<t;a++)if(l=e[a],l!=="_"){if(!Py(e.charCodeAt(a)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(a++;a<t;a++)if(l=e[a],l!=="_"){if(!Ty(e.charCodeAt(a)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;a<t;a++)if(l=e[a],l!=="_"){if(!Oy(e.charCodeAt(a)))return!1;o=!0}return!(!o||l==="_")}function Iy(e){var t=e,a=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(a=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return a*parseInt(t.slice(2),2);if(t[1]==="x")return a*parseInt(t.slice(2),16);if(t[1]==="o")return a*parseInt(t.slice(2),8)}return a*parseInt(t,10)}function My(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!jl.isNegativeZero(e)}var Ly=new on("tag:yaml.org,2002:int",{kind:"scalar",resolve:Ay,construct:Iy,predicate:My,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Dy=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ny(e){return!(e===null||!Dy.test(e)||e[e.length-1]==="_")}function Fy(e){var t,a;return t=e.replace(/_/g,"").toLowerCase(),a=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?a===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:a*parseFloat(t,10)}var jy=/^[-+]?[0-9]+e/;function Vy(e,t){var a;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(jl.isNegativeZero(e))return"-0.0";return a=e.toString(10),jy.test(a)?a.replace("e",".e"):a}function Hy(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||jl.isNegativeZero(e))}var Uy=new on("tag:yaml.org,2002:float",{kind:"scalar",resolve:Ny,construct:Fy,predicate:Hy,represent:Vy,defaultStyle:"lowercase"}),By=yy.extend({implicit:[$y,Cy,Ly,Uy]}),Wy=By,Zu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Gu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function zy(e){return e===null?!1:Zu.exec(e)!==null||Gu.exec(e)!==null}function Ky(e){var t,a,o,l,r,i,c,u=0,p=null,f,d,h;if(t=Zu.exec(e),t===null&&(t=Gu.exec(e)),t===null)throw new Error("Date resolve error");if(a=+t[1],o=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(a,o,l));if(r=+t[4],i=+t[5],c=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(f=+t[10],d=+(t[11]||0),p=(f*60+d)*6e4,t[9]==="-"&&(p=-p)),h=new Date(Date.UTC(a,o,l,r,i,c,u)),p&&h.setTime(h.getTime()-p),h}function qy(e){return e.toISOString()}var Yy=new on("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:zy,construct:Ky,instanceOf:Date,represent:qy});function Zy(e){return e==="<<"||e===null}var Gy=new on("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Zy}),Vl=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Jy(e){if(e===null)return!1;var t,a,o=0,l=e.length,r=Vl;for(a=0;a<l;a++)if(t=r.indexOf(e.charAt(a)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function Qy(e){var t,a,o=e.replace(/[\r\n=]/g,""),l=o.length,r=Vl,i=0,c=[];for(t=0;t<l;t++)t%4===0&&t&&(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)),i=i<<6|r.indexOf(o.charAt(t));return a=l%4*6,a===0?(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)):a===18?(c.push(i>>10&255),c.push(i>>2&255)):a===12&&c.push(i>>4&255),new Uint8Array(c)}function Xy(e){var t="",a=0,o,l,r=e.length,i=Vl;for(o=0;o<r;o++)o%3===0&&o&&(t+=i[a>>18&63],t+=i[a>>12&63],t+=i[a>>6&63],t+=i[a&63]),a=(a<<8)+e[o];return l=r%3,l===0?(t+=i[a>>18&63],t+=i[a>>12&63],t+=i[a>>6&63],t+=i[a&63]):l===2?(t+=i[a>>10&63],t+=i[a>>4&63],t+=i[a<<2&63],t+=i[64]):l===1&&(t+=i[a>>2&63],t+=i[a<<4&63],t+=i[64],t+=i[64]),t}function e0(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var n0=new on("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Jy,construct:Qy,predicate:e0,represent:Xy}),t0=Object.prototype.hasOwnProperty,s0=Object.prototype.toString;function a0(e){if(e===null)return!0;var t=[],a,o,l,r,i,c=e;for(a=0,o=c.length;a<o;a+=1){if(l=c[a],i=!1,s0.call(l)!=="[object Object]")return!1;for(r in l)if(t0.call(l,r))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function o0(e){return e!==null?e:[]}var l0=new on("tag:yaml.org,2002:omap",{kind:"sequence",resolve:a0,construct:o0}),r0=Object.prototype.toString;function i0(e){if(e===null)return!0;var t,a,o,l,r,i=e;for(r=new Array(i.length),t=0,a=i.length;t<a;t+=1){if(o=i[t],r0.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[t]=[l[0],o[l[0]]]}return!0}function c0(e){if(e===null)return[];var t,a,o,l,r,i=e;for(r=new Array(i.length),t=0,a=i.length;t<a;t+=1)o=i[t],l=Object.keys(o),r[t]=[l[0],o[l[0]]];return r}var u0=new on("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:i0,construct:c0}),p0=Object.prototype.hasOwnProperty;function d0(e){if(e===null)return!0;var t,a=e;for(t in a)if(p0.call(a,t)&&a[t]!==null)return!1;return!0}function f0(e){return e!==null?e:{}}var h0=new on("tag:yaml.org,2002:set",{kind:"mapping",resolve:d0,construct:f0});Wy.extend({implicit:[Yy,Gy],explicit:[n0,l0,u0,h0]});function Ii(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var m0=new Array(256),k0=new Array(256);for(var rs=0;rs<256;rs++)m0[rs]=Ii(rs)?1:0,k0[rs]=Ii(rs);function v0(e){return Array.from(new Set(e))}function Mi(...e){let t,a,o;e.length===1?(t=0,o=1,[a]=e):[t,a,o=1]=e;const l=[];let r=t;for(;r<a;)l.push(r),r+=o||1;return l}function Ju(e,t){if(!t||t==="all"||t==="*")return Mi(1,e+1);const a=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))a.push(+o);else{const[l,r]=o.split("-",2);a.push(...Mi(+l,r?+r+1:e+1))}return v0(a).filter(o=>o<=e).sort((o,l)=>o-l)}function _0(e){const t=T(()=>e.value.path),a=T(()=>Ze.length-1),o=T(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=T(()=>Wl(o.value)),r=T(()=>Ze.find(h=>h.path===`${o.value}`)),i=T(()=>{var h,k,v;return(v=(k=(h=r.value)==null?void 0:h.meta)==null?void 0:k.slide)==null?void 0:v.id}),c=T(()=>{var h,k;return((k=(h=r.value)==null?void 0:h.meta)==null?void 0:k.layout)||(o.value===1?"cover":"default")}),u=T(()=>Ze.find(h=>h.path===`${Math.min(Ze.length,o.value+1)}`)),p=T(()=>Ze.filter(h=>{var k,v;return(v=(k=h.meta)==null?void 0:k.slide)==null?void 0:v.title}).reduce((h,k)=>(zl(h,k),h),[])),f=T(()=>Kl(p.value,r.value)),d=T(()=>ql(f.value));return{route:e,path:t,total:a,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:i,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:f,tree:d}}function g0(e,t,a){const o=ne(0);Vn(()=>{xt.afterEach(async()=>{await Vn(),o.value+=1})});const l=T(()=>{var u,p;return o.value,((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),r=T(()=>{var u,p;return+(((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.clicks)??l.value.length)}),i=T(()=>a.value<Ze.length-1||e.value<r.value),c=T(()=>a.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:r,hasNext:i,hasPrev:c}}const y0=["id"],b0=Re({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const a=e,o=Fn(a,"clicksElements",t),l=T(()=>({height:`${Pl}px`,width:`${wt}px`})),r=Gn();Jt(()=>Promise.resolve().then(()=>A_),void 0).then(p=>r.value=p.default);const i=T(()=>a.clicks),c=g0(i,a.nav.currentRoute,a.nav.currentPage),u=T(()=>`${a.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return xn(q,Xe({nav:{...a.nav,...c},configs:De,themeConfigs:T(()=>De.themeConfig)})),(p,f)=>{var d;return w(),D("div",{id:x(u),class:"slide-container",style:Be(x(l))},[b(x(Ku)),b(x(Fl),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":x(o),"onUpdate:clicks-elements":f[0]||(f[0]=h=>xe(o)?o.value=h:null),clicks:x(i),"clicks-disabled":!1,class:Ue(x(Nl)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),x(r)?(w(),z(x(r),{key:0,page:+e.route.path},null,8,["page"])):me("v-if",!0),b(x(zu))],12,y0)}}}),Li=Y(b0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),w0=Re({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const t=e;V(q);const a=Xe(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=T(()=>t.route),l=_0(o);return(i,c)=>(w(),D(Ce,null,[b(Li,{"clicks-elements":a,"onUpdate:clicks-elements":c[0]||(c[0]=u=>a=u),clicks:0,nav:x(l),route:x(o)},null,8,["clicks-elements","nav","route"]),x(ep)?me("v-if",!0):(w(!0),D(Ce,{key:0},la(a.length,u=>(w(),z(Li,{key:u,clicks:u,nav:x(l),route:x(o)},null,8,["clicks","nav","route"]))),128))],64))}}),x0=Y(w0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/PrintSlide.vue"]]),$0={id:"print-content"},R0=Re({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;V(q);const a=T(()=>t.width),o=T(()=>t.width/bt),l=T(()=>a.value/o.value),r=T(()=>l.value<bt?a.value/wt:o.value*bt/wt);let i=Ze.slice(0,-1);Qn.value.query.range&&(i=Ju(i.length,Qn.value.query.range).map(p=>i[p-1]));const c=T(()=>({"select-none":!De.selectable,"slidev-code-line-numbers":De.lineNumbers}));return xn(Xc,r),(u,p)=>(w(),D("div",{id:"print-container",class:Ue(x(c))},[n("div",$0,[(w(!0),D(Ce,null,la(x(i),f=>(w(),z(x0,{key:f.path,route:f},null,8,["route"]))),128))]),_n(u.$slots,"controls")],2))}});const E0=Y(R0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/PrintContainer.vue"]]),S0=Re({__name:"Print",setup(e){V(q);function t(a,{slots:o}){if(o.default)return Gt("style",o.default())}return ws(()=>{Bl?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(a,o)=>(w(),D(Ce,null,[b(t,null,{default:g(()=>[s(" @page { size: "+qe(x(wt))+"px "+qe(x(Pl))+"px; margin: 0px; } ",1)]),_:1}),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Be(x(Tl))},[b(E0,{class:"w-full h-full",style:Be({background:"var(--slidev-slide-container-background, black)"}),width:x(Wt).width.value},null,8,["style","width"])],4)],64))}});const C0=Y(S0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Print.vue"]]);const P0={class:"slidev-layout end"},T0={__name:"end",setup(e){return V(q),(t,a)=>(w(),D("div",P0," END "))}},O0=Y(T0,[["__scopeId","data-v-1e28a237"],["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/layouts/end.vue"]]);function Di(e){return e.startsWith("/")?"/"+e.slice(1):e}function A0(e,t=!1){const a=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),o={background:a?e:void 0,color:e&&!a?"white":void 0,backgroundImage:a?void 0:e?t?`linear-gradient(#0005, #0008), url(${Di(e)})`:`url("${Di(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const I0={class:"my-auto w-full"},M0=Re({__name:"cover",props:{background:{default:""}},setup(e){const t=e;V(q);const a=T(()=>A0(t.background,!0));return(o,l)=>(w(),D("div",{class:"slidev-layout cover",style:Be(x(a))},[n("div",I0,[_n(o.$slots,"default")])],4))}}),L0=Y(M0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+theme-default@0.21.2/node_modules/@slidev/theme-default/layouts/cover.vue"]]),D0=n("br",null,null,-1),N0=n("br",null,null,-1),F0=n("br",null,null,-1),j0=n("br",null,null,-1),V0=n("br",null,null,-1),H0=n("br",null,null,-1),U0=n("h1",null,"Vue的组合式开发",-1),B0=n("p",null,[s("编写可组合可复用的 Vue 函数 "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),s(" 2023/03/06")],-1),W0={__name:"1",setup(e){const t={};return V(q),(a,o)=>(w(),z(L0,ke(he(t)),{default:g(()=>[D0,N0,F0,j0,V0,H0,U0,B0]),_:1},16))}},z0=Y(W0,[["__file","/@slidev/slides/1.md"]]),K0={class:"slidev-layout center h-full grid place-content-center"},q0={class:"my-auto"},Y0={__name:"center",setup(e){return V(q),(t,a)=>(w(),D("div",K0,[n("div",q0,[_n(t.$slots,"default")])]))}},Qu=Y(Y0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/layouts/center.vue"]]),Z0=n("h1",null,"Vue Composition API",-1),G0={__name:"2",setup(e){const t={layout:"center"};return V(q),(a,o)=>{const l=Zt("font"),r=Zt("center");return w(),z(Qu,ke(he(t)),{default:g(()=>[Z0,b(r,null,{default:g(()=>[b(l,{color:"#666"},{default:g(()=>[s("组合式 API")]),_:1})]),_:1})]),_:1},16)}}},J0=Y(G0,[["__file","/@slidev/slides/2.md"]]),Hl=Re({render(){var o,l;const e=ln("after");function t(r,i){return Se(r,[[i]])}let a=(l=(o=this.$slots).default)==null?void 0:l.call(o);if(a)return a=eu(a),a.map(r=>t(Gt(r),e))}});const Q0={class:"flex"},X0={class:"flex-item"},eb={class:"flex-item"},nb={__name:"LR",setup(e){return V(q),(t,a)=>(w(),D("div",Q0,[n("div",X0,[_n(t.$slots,"left",{},void 0,!0)]),n("div",eb,[_n(t.$slots,"right",{},void 0,!0)])]))}},rn=Y(nb,[["__scopeId","data-v-9f20fe88"],["__file","D:/github/share-ppt/components/LR.vue"]]),tb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},sb=n("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),ab=[sb];function ob(e,t){return w(),D("svg",tb,ab)}const lb={name:"ph-clipboard",render:ob},rb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ib=n("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),cb=[ib];function ub(e,t){return w(),D("svg",rb,cb)}const pb={name:"ph-check-circle",render:ub},db=["title"],fb=Re({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;V(q);const a=V(Gc),o=V(Jc),l=V(Qc);function r(d=5){const h=[],k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",v=k.length;for(let y=0;y<d;y++)h.push(k.charAt(Math.floor(Math.random()*v)));return h.join("")}const i=ne(),c=Pt();no(()=>{const d=t.at==null?o==null?void 0:o.value.length:t.at,h=T(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((a==null?void 0:a.value)||0)-(d||0)),t.ranges.length-1)),k=T(()=>t.ranges[h.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const v=r(),y=fh(t.ranges.length-1).map($=>v+$);o!=null&&o.value&&(o.value.push(...y),to(()=>y.forEach($=>dh(o.value,$)),c))}ws(()=>{if(!i.value)return;const y=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const $ of y){const P=Array.from($.querySelectorAll(".line")),E=Ju(P.length,k.value);if(P.forEach((C,O)=>{const B=E.includes(O+1);C.classList.toggle(ph,!0),C.classList.toggle("highlighted",B),C.classList.toggle("dishonored",!B)}),t.maxHeight){const C=$.querySelector(".line.highlighted");C&&C.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=um();function f(){var h,k;const d=(k=(h=i.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:k.textContent;d&&p(d)}return(d,h)=>{const k=pb,v=lb;return w(),D("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:Be({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[_n(d.$slots,"default"),x(De).codeCopy?(w(),D("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:x(u)?"Copied":"Copy",onClick:h[0]||(h[0]=y=>f())},[x(u)?(w(),z(k,{key:0,class:"p-2 w-8 h-8"})):(w(),z(v,{key:1,class:"p-2 w-8 h-8"}))],8,db)):me("v-if",!0)],4)}}}),Oe=Y(fb,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),hb={class:"slidev-layout default"},mb={__name:"default",setup(e){return V(q),(t,a)=>(w(),D("div",hb,[_n(t.$slots,"default")]))}},$e=Y(mb,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/layouts/default.vue"]]),kb=n("h1",null,"什么是组合式API",-1),vb=n("p",null,"在 Vue3 中引入的一种新的编写组件的方式",-1),_b=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  computed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"light"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),gb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" light "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      light"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        dark"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),yb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  computed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"light"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),bb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" light "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      light"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        dark"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),wb={__name:"3",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn,i=Hl,c=ln("click-hide");return w(),z($e,ke(he(t)),{default:g(()=>[kb,vb,Se((w(),z(r,null,{left:g(()=>[b(l,ee({},{ranges:[""]}),{default:g(()=>[_b]),_:1},16)]),right:g(()=>[b(l,ee({},{ranges:[""]}),{default:g(()=>[gb]),_:1},16)]),_:1})),[[c]]),Se((w(),z(i,null,{default:g(()=>[b(r,null,{left:g(()=>[b(l,ee({},{ranges:["3,7-8,12-13"]}),{default:g(()=>[yb]),_:1},16)]),right:g(()=>[b(l,ee({},{ranges:["5,16"]}),{default:g(()=>[bb]),_:1},16)]),_:1})]),_:1})),[[c]])]),_:1},16)}}},xb=Y(wb,[["__file","/@slidev/slides/3.md"]]),$b=n("h1",null,"什么是组合式API",-1),Rb=n("p",null,"在 Vue3 中引入的一种新的编写组件的方式",-1),Eb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  computed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"light"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),Sb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" light "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      light"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        dark"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),Cb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  computed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"light"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),Pb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" light "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      light"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        dark"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),Tb={__name:"4",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn,i=Hl,c=ln("click-hide");return w(),z($e,ke(he(t)),{default:g(()=>[$b,Rb,Se((w(),z(r,null,{left:g(()=>[b(l,ee({},{ranges:["4-6"]}),{default:g(()=>[Eb]),_:1},16)]),right:g(()=>[b(l,ee({},{ranges:["6,10"]}),{default:g(()=>[Sb]),_:1},16)]),_:1})),[[c]]),Se((w(),z(i,null,{default:g(()=>[b(r,null,{left:g(()=>[b(l,ee({},{ranges:["8-12"]}),{default:g(()=>[Cb]),_:1},16)]),right:g(()=>[b(l,ee({},{ranges:["7,11"]}),{default:g(()=>[Pb]),_:1},16)]),_:1})]),_:1})),[[c]])]),_:1},16)}}},Ob=Y(Tb,[["__file","/@slidev/slides/4.md"]]),Ab=n("h1",null,"什么是组合式API",-1),Ib=n("p",null,"在 Vue3 中引入的一种新的编写组件的方式",-1),Mb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  computed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"light"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),Lb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" light "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      light"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        dark"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),Db=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  computed"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"light"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  methods"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("dark")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),Nb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" dark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" light "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      dark"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      light"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token function"},"toggleDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("        dark"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"!"),s("dark"),n("span",{class:"token punctuation"},"."),s("value")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),Fb={__name:"5",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn,i=Hl,c=ln("click-hide");return w(),z($e,ke(he(t)),{default:g(()=>[Ab,Ib,Se((w(),z(r,null,{left:g(()=>[b(l,ee({},{ranges:["13-17"]}),{default:g(()=>[Mb]),_:1},16)]),right:g(()=>[b(l,ee({},{ranges:["12-14"]}),{default:g(()=>[Lb]),_:1},16)]),_:1})),[[c]]),Se((w(),z(i,null,{default:g(()=>[b(r,null,{left:g(()=>[b(l,ee({},{ranges:[""]}),{default:g(()=>[Db]),_:1},16)]),right:g(()=>[b(l,ee({},{ranges:[""]}),{default:g(()=>[Nb]),_:1},16)]),_:1})]),_:1})),[[c]])]),_:1},16)}}},jb=Y(Fb,[["__file","/@slidev/slides/5.md"]]),Un=Re({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var r,i;const e=ln("click"),t=ln("after"),a=(c,u,p)=>Se(c,[[u,this.at!=null?+this.at+p:null,"",{hide:this.hide,fade:this.fade}]]);let o=(i=(r=this.$slots).default)==null?void 0:i.call(r);if(!o)return;o=eu(o);const l=c=>c.map((u,p)=>Et(u)?a(Gt(u),p%this.every===0?e:t,Math.floor(p/this.every)):u);return o.length===1&&["ul","ol"].includes(o[0].type)&&Array.isArray(o[0].children)?Gt(o[0],{},[l(o[0].children)]):l(o)}}),Vb=n("h1",null,"为什么引入组合式API？",-1),Hb={__name:"6",setup(e){const t={};return V(q),(a,o)=>{const l=Zt("font"),r=rn,i=Un;return w(),z($e,ke(he(t)),{default:g(()=>[Vb,b(i,null,{default:g(()=>[b(r,{class:"mt-8 mb-8"},{left:g(()=>[b(l,{color:"#666"},{default:g(()=>[s("选项式 API 存在的问题")]),_:1})]),right:g(()=>[b(l,{color:"#666"},{default:g(()=>[s("组合式 API 提供的能力")]),_:1})]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[s(" • 不利于复用 ")]),right:g(()=>[s(" • 极易复用（原生JS函数） ")]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[s(" • 潜在命名冲突 ")]),right:g(()=>[s(" • 可灵活组合（生命周期钩子可多次使用） ")]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[s(" • 上下文丢失 ")]),right:g(()=>[s(" • 提供更好的上下文支持 ")]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[s(" • 有限的类型支持 ")]),right:g(()=>[s(" • 更好的TypeScript类型支持 ")]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[s(" • 按API类型组织 ")]),right:g(()=>[s(" • 按功能/逻辑组织 ")]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[]),right:g(()=>[s(" • 可独立于Vue组件使用 ")]),_:1})]),_:1})]),_:1},16)}}},Ub=Y(Hb,[["__file","/@slidev/slides/6.md"]]),Bb={flex:"~",w:"min",border:"~ gray-400 opacity-50 rounded-md"},Wb=Re({__name:"Dark",setup(e){V(q);const t=uu();t.value="dark";const a=Pm(),o=Ol(a);return(l,r)=>(w(),D("div",Bb,[n("button",{border:"r gray-400 opacity-50",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:r[0]||(r[0]=i=>x(o)())},qe(x(a)?"light":"dark"),1)]))}}),zb=Y(Wb,[["__file","D:/github/share-ppt/components/Dark.vue"]]),Kb=n("h1",null,"什么是可组合函数",-1),qb=n("p",null,"可复用逻辑的集合，专注点分离",-1),Yb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useDark"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token operator"},":"),s(" UseDarkOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" preferredDark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"usePreferredDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" mode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useColorMode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"computed"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"boolean"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"return"),s(" mode"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'dark'")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      mode"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" v "),n("span",{class:"token operator"},"==="),s(" preferredDark"),n("span",{class:"token punctuation"},"."),s("value ")]),s(`
`),n("span",{class:"line"},[s("        "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'auto'"),s(),n("span",{class:"token operator"},":"),s(" v "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'dark'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'light'")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),Zb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" isDark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useDark"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" toggleDark "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useToggle"),n("span",{class:"token punctuation"},"("),s("isDark"),n("span",{class:"token punctuation"},")")])])],-1),Gb=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("toggleDark()"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"{{ isDark ? 'light' : 'dark' }}"),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")])])])],-1),Jb={class:"flex-center mt-10"},Qb={__name:"7",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=zb,i=rn;return w(),z($e,ke(he(t)),{default:g(()=>[Kb,qb,b(i,null,{left:g(()=>[b(l,ee({},{ranges:[""]}),{default:g(()=>[Yb]),_:1},16)]),right:g(()=>[b(l,ee({},{ranges:[""]}),{default:g(()=>[Zb]),_:1},16),b(l,ee({},{ranges:[""]}),{default:g(()=>[Gb]),_:1},16),n("div",Jb,[b(r)])]),_:1})]),_:1},16)}}},Xb=Y(Qb,[["__file","/@slidev/slides/7.md"]]),ew=n("h1",null,"组合关系",-1),nw=n("p",null,[n("img",{src:"https://pageignore.github.io/share-ppt/useDark_img.png",alt:"Remote Image"})],-1),tw=n("div",{class:"mb-5"},"• 每个函数都可以单独使用",-1),sw=n("div",{class:"mb-5"},"• 专注点分离",-1),aw=n("div",{class:"mb-5"},"• 状态连接",-1),ow={__name:"8",setup(e){const t={};return V(q),(a,o)=>{const l=Un;return w(),z($e,ke(he(t)),{default:g(()=>[ew,nw,b(l,null,{default:g(()=>[tw,sw,aw]),_:1})]),_:1},16)}}},lw=Y(ow,[["__file","/@slidev/slides/8.md"]]),Ul=Re({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return b(Un,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),rw={flex:"~",w:"min",border:"~ gray-400 opacity-50 rounded-md"},iw={m:"auto",p:"2"},cw=Re({__name:"Counter",props:{count:{default:0}},setup(e){const t=e;V(q);const{count:a}=pu(t);return(o,l)=>(w(),D("div",rw,[n("button",{border:"r gray-400 opacity-50",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:l[0]||(l[0]=r=>a.value-=1)}," - "),n("span",iw,qe(x(a)),1),n("button",{border:"l gray-400 opacity-50",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:l[1]||(l[1]=r=>a.value+=1)}," + ")]))}}),uw=Y(cw,[["__file","D:/github/share-ppt/components/Counter.vue"]]),pw={class:"box"},dw={class:"name"},fw={key:0},hw={class:"left"},mw={key:0,class:"right"},kw=Re({__name:"CItem",props:{name:{default:""},power:{default:2},isPow:{default:!1},val:{default:0},canChange:{default:!1}},setup(e){const t=e;V(q);const a=t.name,o=t.isPow,{val:l,power:r}=pu(t);function i(c){c?l.value++:l.value>1&&l.value--}return(c,u)=>(w(),D("div",pw,[n("div",dw,[s(qe(x(a)),1),x(o)?(w(),D("sup",fw,qe(x(r)),1)):me("v-if",!0)]),n("div",hw,qe(x(l)),1),e.canChange?(w(),D("div",mw,[n("div",{class:"sign",onClick:u[0]||(u[0]=p=>i(1))},"+"),n("div",{class:"sign",onClick:u[1]||(u[1]=p=>i(0))},"-")])):me("v-if",!0)]))}});const Ms=Y(kw,[["__scopeId","data-v-714260c7"],["__file","D:/github/share-ppt/components/CItem.vue"]]),io=e=>(wd("data-v-726af6e8"),e=e(),xd(),e),vw={class:"formula"},_w={class:"flex mb-4"},gw=io(()=>n("div",{class:"text"},"次方",-1)),yw={class:"box"},bw={class:"row"},ww={class:"row-item"},xw=io(()=>n("img",{class:"img-01",src:"https://pageignore.github.io/share-ppt/arrow_01.png"},null,-1)),$w={class:"row-item"},Rw={class:"row"},Ew={class:"row-item"},Sw=io(()=>n("img",{class:"img-01",src:"https://pageignore.github.io/share-ppt/arrow_01.png"},null,-1)),Cw={class:"row-item"},Pw={class:"z-item"},Tw=io(()=>n("img",{class:"img-02",src:"https://pageignore.github.io/share-ppt/arrow_02.png"},null,-1)),Ow=Re({__name:"Connect",setup(e){V(q);function t(h,k){return h+k}const a=Ir(t),o=Ir(Math.pow),l=ne(2),r=ne(1),i=ne(1),c=o(r,l),u=o(i,l),p=a(c,u),f=T(()=>({"--tw-gradient-from":"rgba(52, 211, 153, .8)","--tw-gradient-to":"rgba(22, 111, 153, .8)"})),d=T(()=>({"--tw-gradient-from":"rgba(96, 165, 250, .8)","--tw-gradient-to":"rgba(167, 139, 250, .8)"}));return(h,k)=>{const v=uw;return w(),D("div",null,[n("div",vw,[s("𝒛 = 𝒙"),n("sup",null,qe(l.value),1),s(" + 𝒚"),n("sup",null,qe(l.value),1),s(" = "+qe(r.value)+"x"+qe(r.value)+"+"+qe(i.value)+"x"+qe(i.value)+" = "+qe(x(p)),1)]),n("div",_w,[b(v,{count:l.value,"onUpdate:count":k[0]||(k[0]=y=>l.value=y)},null,8,["count"]),gw]),n("div",yw,[n("div",bw,[n("div",ww,[b(Ms,{style:Be(x(f)),name:"𝒙",val:r.value,"onUpdate:val":k[1]||(k[1]=y=>r.value=y),canChange:!0},null,8,["style","val"]),xw]),n("div",$w,[b(Ms,{style:Be(x(d)),name:"𝒙",val:x(c),"onUpdate:val":k[2]||(k[2]=y=>xe(c)?c.value=y:null),isPow:!0,power:l.value,"onUpdate:power":k[3]||(k[3]=y=>l.value=y)},null,8,["style","val","power"])])]),n("div",Rw,[n("div",Ew,[b(Ms,{style:Be(x(f)),name:"𝒚",val:i.value,"onUpdate:val":k[4]||(k[4]=y=>i.value=y),canChange:!0},null,8,["style","val"]),Sw]),n("div",Cw,[b(Ms,{style:Be(x(d)),name:"𝒚",val:x(u),"onUpdate:val":k[5]||(k[5]=y=>xe(u)?u.value=y:null),isPow:!0,power:l.value,"onUpdate:power":k[6]||(k[6]=y=>l.value=y)},null,8,["style","val","power"])])]),n("div",Pw,[b(Ms,{style:Be(x(d)),name:"𝒛",val:x(p),"onUpdate:val":k[7]||(k[7]=y=>xe(p)?p.value=y:null)},null,8,["style","val"]),Tw])])])}}});const Aw=Y(Ow,[["__scopeId","data-v-726af6e8"],["__file","D:/github/share-ppt/components/Connect.vue"]]),Iw=n("h1",null,"建立“连接”",-1),Mw=n("p",null,[n("code",null,"setup()"),s("在组件中执行一次，建立 输入 → 输出 的连接，输出会自动根据输入的改变而改变")],-1),Lw=n("div",{class:"mb-5"},"• 状态驱动UI",-1),Dw=n("div",{class:"mb-5"},"• 状态改变会自动更新UI - 响应式",-1),Nw=n("div",{class:"mb-5"},[s("• 状态"),n("code",null,"setup()"),s("函数，建立 状态 和 逻辑 的连接")],-1),Fw=n("div",{class:"mb-5"},[s("• 通过"),n("code",null,"<template>"),s("模板，建立 状态 和 UI 的连接")],-1),jw={__name:"9",setup(e){const t={};return V(q),(a,o)=>{const l=Un,r=Aw,i=Ul,c=rn;return w(),z($e,ke(he(t)),{default:g(()=>[Iw,Mw,b(c,null,{left:g(()=>[b(l,null,{default:g(()=>[Lw,Dw,Nw,Fw]),_:1})]),right:g(()=>[b(i,null,{default:g(()=>[b(r,{class:"ml-4"})]),_:1})]),_:1})]),_:1},16)}}},Vw=Y(jw,[["__file","/@slidev/slides/9.md"]]),Hw={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},Uw=Re({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return V(q),(a,o)=>(w(),D("div",Hw,[n("div",{class:Ue(["col-left",t.class])},[_n(a.$slots,"default")],2),n("div",{class:Ue(["col-right",t.class])},[_n(a.$slots,"right")],2)]))}}),Bw=Y(Uw,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/layouts/two-cols.vue"]]),Ww=n("h1",null,"Ref",-1),zw={style:{width:"90%"}},Kw=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"let"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"let"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1")]),s(`
`),n("span",{class:"line"},[s("bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token comment"},"// ts-error")])])],-1),qw=n("br",null,null,-1),Yw=n("div",{class:"mb-5 mt-5"},"• 显式调用，类型检查",-1),Zw=n("div",{class:"mb-5"},"• 相比Reactive 局限更少",-1),Gw=n("div",{class:"mt-5"},[s("• "),n("code",null,".value")],-1),Jw=n("h1",null,"Reactive",-1),Qw=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" prop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("foo"),n("span",{class:"token punctuation"},"."),s("prop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1")]),s(`
`),n("span",{class:"line"},[s("bar"),n("span",{class:"token punctuation"},"."),s("prop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1")])])],-1),Xw=n("br",null,null,-1),ex=n("div",{class:"mb-5 mt-5"},[s("• 自动 Unwrap(即不需要"),n("code",null,".value"),s(")")],-1),nx=n("div",{class:"mb-5 mt-5"},"• 在类型上和一般对象没有区别",-1),tx=n("div",{class:"mb-5"},"• 使用 ES6 结构会使响应式丢失",-1),sx=n("div",{class:"mb-5"},[s("• 需要使用箭头函数包装才能使用"),n("code",null,"watch")],-1),ax={__name:"10",setup(e){const t={layout:"two-cols"};return V(q),(a,o)=>{const l=Oe,r=Ul,i=Zt("font");return w(),z(Bw,ke(he(t)),{right:g(c=>[Jw,b(r,{at:"1"},{default:g(()=>[b(l,ee({},{ranges:[""]}),{default:g(()=>[Qw]),_:1},16)]),_:1}),b(r,{at:"3"},{default:g(()=>[Xw,b(i,{color:"#666"},{default:g(()=>[s("PROS")]),_:1}),ex,b(i,{color:"#666"},{default:g(()=>[s("CONS")]),_:1}),nx,tx,sx]),_:1})]),default:g(()=>[Ww,b(r,{at:"1"},{default:g(()=>[n("div",zw,[b(l,ee({},{ranges:[""]}),{default:g(()=>[Kw]),_:1},16)])]),_:1}),b(r,{at:"2"},{default:g(()=>[qw,b(i,{color:"#666"},{default:g(()=>[s("PROS")]),_:1}),Yw,Zw,b(i,{color:"#666"},{default:g(()=>[s("CONS")]),_:1}),Gw]),_:1})]),_:1},16)}}},ox=Y(ax,[["__file","/@slidev/slides/10.md"]]),lx=n("h1",null,"Ref 自动解包",-1),rx=n("p",null,[s("在众多情况下，可以减少"),n("code",null,".value"),s("的使用")],-1),ix=n("div",{class:"lh-30"},[s("• "),n("code",null,"watch"),s("直接接受Ref作为监听对象，并在回调函数中返回解包后的值")],-1),cx=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" counter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("counter"),n("span",{class:"token punctuation"},","),s(" count "),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("count"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// same as `counter.value`")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])])],-1),ux=n("div",{class:"lh-30"},"• Ref在模板中自动解包",-1),px=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("counter += 1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},"    Counter is {{ counter }}"),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")])])])],-1),dx=n("div",{class:"lh-30"},"• 使用 Reactive 解包嵌套的 Ref",-1),fx=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'bar'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" foo"),n("span",{class:"token punctuation"},","),s(" id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("data"),n("span",{class:"token punctuation"},"."),s("foo "),n("span",{class:"token comment"},"// 'bar'")])])],-1),hx={__name:"11",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn,i=Un;return w(),z($e,ke(he(t)),{default:g(()=>[lx,rx,b(i,null,{default:g(()=>[b(r,null,{left:g(()=>[ix]),right:g(()=>[b(l,ee({},{ranges:[""]}),{default:g(()=>[cx]),_:1},16)]),_:1}),b(r,null,{left:g(()=>[ux]),right:g(()=>[b(l,ee({},{ranges:[""]}),{default:g(()=>[px]),_:1},16)]),_:1}),b(r,null,{left:g(()=>[dx]),right:g(()=>[b(l,ee({},{ranges:[""]}),{default:g(()=>[fx]),_:1},16)]),_:1})]),_:1})]),_:1},16)}}},mx=Y(hx,[["__file","/@slidev/slides/11.md"]]),kx=n("h1",null,[n("code",null,"ref"),s(" - Ref 的内部实现")],-1),vx=n("p",null,"Vue 源码分析",-1),_x=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isRef"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},"?"),s(" input")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"createRef"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),gx=n("p",null,[s("也就是说，"),n("code",null,"ref()"),s(" 会直接返回已经是 Ref 的值")],-1),yx=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"123"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("foo "),n("span",{class:"token operator"},"==="),s(" bar "),n("span",{class:"token comment"},"// true")])])],-1),bx={__name:"12",setup(e){const t={};return V(q),(a,o)=>{const l=Oe;return w(),z($e,ke(he(t)),{default:g(()=>[kx,vx,b(l,ee({},{ranges:[""]}),{default:g(()=>[_x]),_:1},16),gx,b(l,ee({},{ranges:[""]}),{default:g(()=>[yx]),_:1},16)]),_:1},16)}}},wx=Y(bx,[["__file","/@slidev/slides/12.md"]]),xx=n("h1",null,[n("code",null,"unref"),s(" - Ref 的反操作")],-1),$x=n("div",{class:"mt-5 mb-5"},"• 如果传入一个 Ref， 返回其值",-1),Rx=n("div",null,"• 否则愿样返回",-1),Ex=n("br",null,null,-1),Sx=n("br",null,null,-1),Cx=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"unref"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("r"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isRef"),n("span",{class:"token punctuation"},"("),s("r"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(" r"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},":"),s(" r")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),Px=n("br",null,null,-1),Tx=n("br",null,null,-1),Ox=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" unref"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 'foo'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'bar'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("bar"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 'bar'")])])],-1),Ax={__name:"13",setup(e){const t={};return V(q),(a,o)=>{const l=Zt("font"),r=Oe,i=rn,c=Ul;return w(),z($e,ke(he(t)),{default:g(()=>[xx,$x,Rx,b(c,null,{default:g(()=>[b(i,null,{left:g(()=>[Ex,b(l,{color:"#666"},{default:g(()=>[s("实现")]),_:1}),Sx,b(r,ee({},{ranges:[""]}),{default:g(()=>[Cx]),_:1},16)]),right:g(()=>[Px,b(l,{color:"#666"},{default:g(()=>[s("使用")]),_:1}),Tx,b(r,ee({},{ranges:[""]}),{default:g(()=>[Ox]),_:1},16)]),_:1})]),_:1})]),_:1},16)}}},Ix=Y(Ax,[["__file","/@slidev/slides/13.md"]]),Mx=n("h1",null,"接受 Ref 作为函数参数",-1),Lx={class:"flex-3"},Dx=n("div",{class:"flex-3-item-01"},null,-1),Nx={class:"flex-3-item-02"},Fx={class:"flex-3-item-03"},jx={class:"flex-3"},Vx={class:"flex-3-item-01"},Hx=n("br",null,null,-1),Ux=n("div",{class:"flex-3-item-02"},[n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(" a "),n("span",{class:"token operator"},"+"),s(" b")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])])],-1),Bx=n("div",{class:"flex-3-item-03"},[n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"let"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"let"),s(" b "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"let"),s(" c "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 3")])])])],-1),Wx={class:"flex-3"},zx={class:"flex-3-item-01"},Kx=n("br",null,null,-1),qx=n("div",{class:"flex-3-item-02"},[n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"+"),s(" b"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])])],-1),Yx=n("div",{class:"flex-3-item-03"},[n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" b "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" c "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("c"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token comment"},"// 3")])])])],-1),Zx={class:"flex-3"},Gx={class:"flex-3-item-01"},Jx=n("br",null,null,-1),Qx=n("div",{class:"flex-3-item-02"},[n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"(")]),s(`
`),n("span",{class:"line"},[s("  a"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"number"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  b"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"number"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"number")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])])],-1),Xx=n("div",{class:"flex-3-item-03"},[n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" c "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("c"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token comment"},"// 6")])])])],-1),e$={__name:"14",setup(e){const t={};return V(q),(a,o)=>{const l=Zt("font"),r=Un;return w(),z($e,ke(he(t)),{default:g(()=>[Mx,n("div",Lx,[Dx,n("div",Nx,[b(l,{color:"#666"},{default:g(()=>[s("实现")]),_:1})]),n("div",Fx,[b(l,{color:"#666"},{default:g(()=>[s("用例")]),_:1})])]),b(r,null,{default:g(()=>[n("div",jx,[n("div",Vx,[Hx,b(l,{color:"#666"},{default:g(()=>[s("纯函数")]),_:1})]),Ux,Bx]),n("div",Wx,[n("div",zx,[Kx,b(l,{color:"#666"},{default:g(()=>[s("接受 Ref 作为参数，返回一个响应式的结果")]),_:1})]),qx,Yx]),n("div",Zx,[n("div",Gx,[Jx,b(l,{color:"#666"},{default:g(()=>[s("同时接受传入值和 Ref")]),_:1})]),Qx,Xx])]),_:1})]),_:1},16)}}},n$=Y(e$,[["__file","/@slidev/slides/14.md"]]),t$=n("h1",null,"MaybeRef 类型工具",-1),s$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},[s("MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token operator"},"="),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token constant"},"T")])])],-1),a$=n("p",null,[s("使用"),n("code",null,"MaybeRef"),s("来支持可选择性的响应式参数")],-1),o$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTimeAgo"),n("span",{class:"token punctuation"},"(")]),s(`
`),n("span",{class:"line"},[s("  time"),n("span",{class:"token operator"},":"),s(" Date "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(" Ref"),n("span",{class:"token operator"},"<"),s("Date "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"someFormating"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),l$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" computed"),n("span",{class:"token punctuation"},","),s(" unref"),n("span",{class:"token punctuation"},","),s(" Ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},[s("MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token operator"},"="),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token constant"},"T")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTimeAgo"),n("span",{class:"token punctuation"},"(")]),s(`
`),n("span",{class:"line"},[s("  time"),n("span",{class:"token operator"},":"),s(" MaybeRef"),n("span",{class:"token operator"},"<"),s("Date "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"someFormating"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("time"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),r$={__name:"15",setup(e){const t={};return V(q),(a,o)=>{const l=Oe;return w(),z($e,ke(he(t)),{default:g(()=>[t$,b(l,ee({},{ranges:[""]}),{default:g(()=>[s$]),_:1},16),a$,b(l,ee({},{ranges:[""]}),{default:g(()=>[o$]),_:1},16),b(l,ee({},{ranges:[""]}),{default:g(()=>[l$]),_:1},16)]),_:1},16)}}},i$=Y(r$,[["__file","/@slidev/slides/15.md"]]),c$=n("h1",null,"Reactify 响应式化",-1),u$=n("p",null,"使用魔法构造“连接”",-1),p$=n("p",null,"可以将一个普通函数转化为一个响应式的函数",-1),d$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactify "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vueuse/core'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(" a "),n("span",{class:"token operator"},"+"),s(" b")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" useAdd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactify"),n("span",{class:"token punctuation"},"("),s("add"),n("span",{class:"token punctuation"},")")])])],-1),f$=n("p",null,"自动 unref 入参，并将返回值包装为 computed",-1),h$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useAdd"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// z = 3")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("x"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token comment"},"// z = 12")])])],-1),m$=n("p",null,"适用于JS原生方法",-1),k$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" useFloor"),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactify"),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),s("floor"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" usePow "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactify"),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),s("pow"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2.4"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"usePow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"useFloor"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// res = 4")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("x"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3.6"),s(),n("span",{class:"token comment"},"// res = 9")])])],-1),v$={__name:"16",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn,i=ln("click");return w(),z($e,ke(he(t)),{default:g(()=>[c$,u$,b(r,null,{left:g(()=>[Se((w(),D("div",null,[p$,b(l,ee({},{ranges:[""]}),{default:g(()=>[d$]),_:1},16),f$,b(l,ee({},{ranges:[""]}),{default:g(()=>[h$]),_:1},16)])),[[i]])]),right:g(()=>[Se((w(),D("div",null,[m$,b(l,ee({},{ranges:[""]}),{default:g(()=>[k$]),_:1},16)])),[[i]])]),_:1})]),_:1},16)}}},_$=Y(v$,[["__file","/@slidev/slides/16.md"]]),g$=n("h1",null,[n("code",null,"Reactify"),s(" 的实现")],-1),y$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"reactify"),n("span",{class:"token punctuation"},"("),s("fn"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),s("args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"fn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(" args"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),b$={__name:"17",setup(e){const t={};return V(q),(a,o)=>{const l=Oe;return w(),z($e,ke(he(t)),{default:g(()=>[g$,b(l,ee({},{ranges:[""]}),{default:g(()=>[y$]),_:1},16)]),_:1},16)}}},w$=Y(b$,[["__file","/@slidev/slides/17.md"]]),x$=n("h1",null,"让你的函数更灵活",-1),$$=n("p",null,"让函数可以适应不同的场景",-1),R$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTitle "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vueuse/core'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" title "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTitle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("title"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Hello World'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"// 网页的标题随 Ref 改变")])])],-1),E$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTitle "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vueuse/core'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Hello'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" title "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("name"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - World"),n("span",{class:"token template-punctuation string"},"`")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"useTitle"),n("span",{class:"token punctuation"},"("),s("title"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// Hello - World")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("name"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Hi'"),s(),n("span",{class:"token comment"},"// Hi - World")])])],-1),S$={__name:"18",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn;return w(),z($e,ke(he(t)),{default:g(()=>[x$,$$,b(r,null,{left:g(()=>[n("div",null,[s(" 构造一个“特殊的”Ref "),b(l,ee({},{ranges:[""]}),{default:g(()=>[R$]),_:1},16)])]),right:g(()=>[n("div",null,[s(" 绑定一个现有的Ref "),b(l,ee({},{ranges:[""]}),{default:g(()=>[E$]),_:1},16)])]),_:1})]),_:1},16)}}},C$=Y(S$,[["__file","/@slidev/slides/18.md"]]),P$=n("h1",null,[n("code",null,"useTitle")],-1),T$=n("p",null,[n("code",null,"useTitle"),s(" 的实现")],-1),O$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" MaybeRef "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vueuse/core'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTitle"),n("span",{class:"token punctuation"},"(")]),s(`
`),n("span",{class:"line"},[s("  newTitle"),n("span",{class:"token operator"},":"),s(" MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"// 重复使用用户提供的 Ref，或者建立一个新的")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" title "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("newTitle "),n("span",{class:"token operator"},"||"),s(" document"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"// 将页面的标题与 Ref 同步")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("title"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("      document"),n("span",{class:"token punctuation"},"."),s("title "),n("span",{class:"token operator"},"="),s(" t")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" immediate"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(" title")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),A$={__name:"19",setup(e){const t={};return V(q),(a,o)=>{const l=Oe;return w(),z($e,ke(he(t)),{default:g(()=>[P$,T$,b(l,ee({},{ranges:["all","7-8","10-14","all"]}),{default:g(()=>[O$]),_:1},16)]),_:1},16)}}},I$=Y(A$,[["__file","/@slidev/slides/19.md"]]),M$=n("h1",null,"重复使用已有的 Ref",-1),L$=n("p",null,[s("如果将一个"),n("code",null,"ref"),s("传递给"),n("code",null,"ref"),s("构造函数，它会将其原样返回")],-1),D$={class:"mb-4"},N$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// Ref<1>")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// Ref<1>")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("foo "),n("span",{class:"token operator"},"==="),s(" bar "),n("span",{class:"token comment"},"// true")])])],-1),F$={class:"mb-4"},j$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useFoo"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"// 不需要额外操作")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"isRef"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(" foo "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"// 与上面的代码等效")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"/* ... */")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),V$=n("div",{class:"mb-4"}," 这个技巧在编写不确定参数的函数时十分有用 ",-1),H$={__name:"20",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=Un;return w(),z($e,ke(he(t)),{default:g(()=>[M$,L$,b(r,null,{default:g(()=>[n("div",D$,[b(l,ee({},{ranges:[""]}),{default:g(()=>[N$]),_:1},16)]),n("div",F$,[b(l,ee({},{ranges:[""]}),{default:g(()=>[j$]),_:1},16)]),V$]),_:1})]),_:1},16)}}},U$=Y(H$,[["__file","/@slidev/slides/20.md"]]),B$=n("h1",null,[n("code",null,"Ref"),s(" / "),n("code",null,"unref")],-1),W$=n("div",{class:"mt-5 mb-5"},[s("• "),n("code",null,"MaybeRef<T>"),s("可以很好的配合`ref`和`unref`进行使用")],-1),z$=n("div",{class:"mb-5"},[s("• 使用"),n("code",null,"ref"),s("当你想要将其标准化为Ref")],-1),K$=n("div",{class:"mb-5"},[s("• 使用"),n("code",null,"unref"),s("当你想要获取其值")],-1),q$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},[s("MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token operator"},"="),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token constant"},"T")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useBala"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("arg"),n("span",{class:"token operator"},":"),s(" MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" reference "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("arg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 得到 ref")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("arg"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// 得到值")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),Y$={__name:"21",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=ln("click");return w(),z($e,ke(he(t)),{default:g(()=>[B$,Se((w(),D("div",null,[W$,z$,K$,b(l,ee({},{ranges:[""]}),{default:g(()=>[q$]),_:1},16)])),[[r]])]),_:1},16)}}},Z$=Y(Y$,[["__file","/@slidev/slides/21.md"]]),G$=n("h1",null,"还可以更灵活",-1),J$=n("p",null,"响应式的获取器",-1),Q$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Hello'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" title "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("name"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - World"),n("span",{class:"token template-punctuation string"},"`")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"useTitle"),n("span",{class:"token punctuation"},"("),s("title"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// Hello - World")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("name"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Hi'"),s(),n("span",{class:"token comment"},"// Hi - World")])])],-1),X$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" name "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Hello'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"useTitle"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("name"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," - World"),n("span",{class:"token template-punctuation string"},"`")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// Hello - World")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("name"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Hi'"),s(),n("span",{class:"token comment"},"// Hi - World")])])],-1),e2={__name:"22",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn;return w(),z($e,ke(he(t)),{default:g(()=>[G$,J$,b(r,null,{left:g(()=>[n("div",null,[s(" 接受响应式的`Ref`对象作为参数 "),b(l,ee({},{ranges:[""]}),{default:g(()=>[Q$]),_:1},16)])]),right:g(()=>[n("div",null,[s(" 直接传入一个函数 "),b(l,ee({},{ranges:[""]}),{default:g(()=>[X$]),_:1},16)])]),_:1})]),_:1},16)}}},n2=Y(e2,[["__file","/@slidev/slides/22.md"]]),t2=n("h1",null,[n("code",null,"MaybeComputedRef")],-1),s2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"/**")]),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token operator"},"*"),s(" 可能是一个 Ref，或者一个字面值")]),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},"/")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},[s("MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token operator"},"|"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"/**")]),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token operator"},"*"),s(" 可能是一个 Ref，一个字面值，或者一个 Getter 函数")]),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},"/")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},[s("MaybeComputedRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token operator"},"="),s(" MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"|"),s(" ComputedRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])])],-1),a2={__name:"23",setup(e){const t={};return V(q),(a,o)=>{const l=Oe;return w(),z($e,ke(he(t)),{default:g(()=>[t2,b(l,ee({},{ranges:[""]}),{default:g(()=>[s2]),_:1},16)]),_:1},16)}}},o2=Y(a2,[["__file","/@slidev/slides/23.md"]]),l2=n("h1",null,[n("code",null,"resolveRef")],-1),r2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"resolveRef"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token operator"},":"),s(" MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"typeof"),s(" input "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'function'")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),i2={class:"mt-10"},c2={__name:"24",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=ln("click");return w(),z($e,ke(he(t)),{default:g(()=>[l2,b(l,ee({},{ranges:["all","2-3","all"]}),{default:g(()=>[r2]),_:1},16),Se((w(),D("div",i2,[s(" 如果传入的是一个函数，使用`computed`创建一个`Ref`对象，否则交由`ref()`处理 ")])),[[r]])]),_:1},16)}}},u2=Y(c2,[["__file","/@slidev/slides/24.md"]]),p2=n("h1",null,[n("code",null,"resolveUnRef")],-1),d2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"resolveUnref"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token operator"},":"),s(" MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"typeof"),s(" input "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'function'")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"input"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),f2={class:"mt-10"},h2={__name:"25",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=ln("click");return w(),z($e,ke(he(t)),{default:g(()=>[p2,b(l,ee({},{ranges:["all","2-3","all"]}),{default:g(()=>[d2]),_:1},16),Se((w(),D("div",f2,[s(" 如果传入的是一个函数，直接调用取值，否则交由`ref()`处理 ")])),[[r]])]),_:1},16)}}},m2=Y(h2,[["__file","/@slidev/slides/25.md"]]),k2=n("h1",null,[n("code",null,"useTitle")],-1),v2=n("p",null,[n("code",null,"useTitle"),s(" 的更灵活的实现")],-1),_2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" MaybeRef"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vueuse/core'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTitle"),n("span",{class:"token punctuation"},"(")]),s(`
`),n("span",{class:"line"},[s("  newTitle"),n("span",{class:"token operator"},":"),s(" MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"// 重复使用用户提供的 Ref，或者建立一个新的")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" title "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("newTitle "),n("span",{class:"token operator"},"||"),s(" document"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"// 将页面的标题与 Ref 同步")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("title"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("      document"),n("span",{class:"token punctuation"},"."),s("title "),n("span",{class:"token operator"},"="),s(" t")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" immediate"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(" title")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),g2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" MaybeComputedRef"),n("span",{class:"token punctuation"},","),s(" resolveRef "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vueuse/core'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTitle"),n("span",{class:"token punctuation"},"(")]),s(`
`),n("span",{class:"line"},[s("  newTitle"),n("span",{class:"token operator"},":"),s(" MaybeComputedRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"// 重复使用用户提供的 Ref，或者建立一个新的")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" title "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"resolveRef"),n("span",{class:"token punctuation"},"("),s("newTitle "),n("span",{class:"token operator"},"||"),s(" document"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"// 将页面的标题与 Ref 同步")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("title"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("t"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("t "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("      document"),n("span",{class:"token punctuation"},"."),s("title "),n("span",{class:"token operator"},"="),s(" t")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" immediate"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(" title")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),y2={__name:"26",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn;return w(),z($e,ke(he(t)),{default:g(()=>[k2,v2,b(r,null,{left:g(()=>[n("div",null,[b(l,ee({},{ranges:["2,5,7-8"]}),{default:g(()=>[_2]),_:1},16)])]),right:g(()=>[n("div",null,[b(l,ee({},{ranges:["2,5,7-8"]}),{default:g(()=>[g2]),_:1},16)])]),_:1})]),_:1},16)}}},b2=Y(y2,[["__file","/@slidev/slides/26.md"]]),w2=n("h1",null,"将异步操作转换为“同步”",-1),x2=n("p",null,"使用组合式API，甚至可以将异步请求转换为“同步”的",-1),$2={class:"mb-5"},R2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://api.github.com/'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),s("r "),n("span",{class:"token operator"},"=>"),s(" r"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"// use data")])])],-1),E2={class:"mb-5"},S2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" data "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useFetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://api.github.com/'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" user_url "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" data"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"?."),s("user_url"),n("span",{class:"token punctuation"},")")])])],-1),C2=n("div",null," 先建立数据的“连接”，然后再等待异步请求返回将数据填充（注意：并不是真正的异步） ",-1),P2={__name:"27",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=Un;return w(),z($e,ke(he(t)),{default:g(()=>[w2,x2,b(r,null,{default:g(()=>[n("div",$2,[s(" 异步 "),b(l,ee({},{ranges:[""]}),{default:g(()=>[R2]),_:1},16)]),n("div",E2,[s(" 组合式 API "),b(l,ee({},{ranges:[""]}),{default:g(()=>[S2]),_:1},16)]),C2]),_:1})]),_:1},16)}}},T2=Y(P2,[["__file","/@slidev/slides/27.md"]]),O2=n("h1",null,"副作用自动清除",-1),A2=n("p",null,[s("Vue原生的"),n("code",null,"watch"),s("和"),n("code",null,"computed"),s(" API 会在组件销毁的时候自动解除其内部的依赖监听。 我们在编写自己的函数时，可以遵循同样的模式。")],-1),I2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" onUnmounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useEventListener"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token operator"},":"),s(" EventTarget"),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" fn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  target"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" fn"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"onUnmounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    target"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeEventListener"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" fn"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// <--")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),M2={__name:"28",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=ln("click");return w(),z($e,ke(he(t)),{default:g(()=>[O2,A2,Se((w(),D("div",null,[b(l,ee({},{ranges:[""]}),{default:g(()=>[I2]),_:1},16)])),[[r]])]),_:1},16)}}},L2=Y(M2,[["__file","/@slidev/slides/28.md"]]),D2=n("h1",null,"状态共享",-1),N2=n("p",null,"由于组合式 API 天然提供的灵活性，状态可以独立于组件被创建并使用",-1),F2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// shared.ts")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  foo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  bar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Hello'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])])],-1),j2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// A.vue")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" state "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./shared.ts'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("state"),n("span",{class:"token punctuation"},"."),s("foo "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1")])])],-1),V2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// B.vue")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" state "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./shared.ts'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},"."),s("foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 2")])])],-1),H2={class:"mt-10"},U2={__name:"29",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn,i=ln("click");return w(),z($e,ke(he(t)),{default:g(()=>[D2,N2,b(r,null,{left:g(()=>[Se((w(),D("div",null,[b(l,ee({},{ranges:[""]}),{default:g(()=>[F2]),_:1},16)])),[[i]])]),right:g(()=>[Se((w(),D("div",null,[b(l,ee({},{ranges:[""]}),{default:g(()=>[j2]),_:1},16)])),[[i]]),Se((w(),D("div",null,[b(l,ee({},{ranges:[""]}),{default:g(()=>[V2]),_:1},16)])),[[i]])]),_:1}),Se((w(),D("div",H2,[s("此方案不兼容SSR")])),[[i]])]),_:1},16)}}},B2=Y(U2,[["__file","/@slidev/slides/29.md"]]),W2=n("h1",null,"useVModel",-1),z2=n("p",null,"一个让使用 props 和 emit 更加容易的工具",-1),K2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useVModel"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" emit "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getCurrentInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("emit")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token keyword"},"return"),s(" props"),n("span",{class:"token punctuation"},"["),s("name"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("v"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("      "),n("span",{class:"token function"},"emit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"update:"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(" v"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),q2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"const"),s(" title "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useVModel"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'title'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" title "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])])],-1),Y2=n("pre",{class:"slidev-code language-html"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")])]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("input")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("title")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("title"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")])]),s(`
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")])])])],-1),Z2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" titke "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useVModels"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" title "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),G2={__name:"30",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn,i=ln("click");return w(),z($e,ke(he(t)),{default:g(()=>[W2,z2,b(r,null,{left:g(()=>[Se((w(),D("div",null,[b(l,ee({},{ranges:[""]}),{default:g(()=>[K2]),_:1},16)])),[[i]])]),right:g(()=>[Se((w(),D("div",null,[b(l,ee({},{ranges:[""]}),{default:g(()=>[q2]),_:1},16)])),[[i]]),Se((w(),D("div",null,[b(l,ee({},{ranges:[""]}),{default:g(()=>[Y2]),_:1},16)])),[[i]]),Se((w(),D("div",null,[b(l,ee({},{ranges:[""]}),{default:g(()=>[Z2]),_:1},16)])),[[i]])]),_:1})]),_:1},16)}}},J2=Y(G2,[["__file","/@slidev/slides/30.md"]]),Q2=n("h1",null,"调试",-1),X2=n("p",null,[s("让 "),n("code",null,"console.log"),s(" 更好看")],-1),eR=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'hello world'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10086"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("a"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  list"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},")")])])],-1),nR=n("p",null,[n("img",{src:"https://pageignore.github.io/share-ppt/log_img01.png",alt:"Remote Image"})],-1),tR=[nR],sR={__name:"31",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=rn,i=ln("click");return w(),z($e,ke(he(t)),{default:g(()=>[Q2,X2,b(r,null,{left:g(()=>[Se((w(),D("div",null,[b(l,ee({},{ranges:[""]}),{default:g(()=>[eR]),_:1},16)])),[[i]])]),right:g(()=>[Se((w(),D("div",null,tR)),[[i]])]),_:1})]),_:1},16)}}},aR=Y(sR,[["__file","/@slidev/slides/31.md"]]),oR=n("h1",null,"调试",-1),lR=n("p",null,[s("让 "),n("code",null,"console.log"),s(" 更好看")],-1),rR=n("div",{class:"mb-5 lh-30"}," 浏览器允许我们编写自定义的 formatter，从而自定义输出形式。在 Vue.js 3 的源码中，你可以搜索到名为initCustomFormatter 的函数，该函数就是用来在开发环境下初始化自定义 formatter 的。 ",-1),iR=n("div",{class:"mb-5 lh-30"}," 以Chrome 为例，我们可以打开 DevTools 的设置，然后勾选“Console”→“Enable custom formatters”选项。 ",-1),cR=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" str "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'hello world'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10086"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s("a"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  list"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token punctuation"},","),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("str"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},")")])])],-1),uR=n("p",null,[n("img",{src:"https://pageignore.github.io/share-ppt/log_img02.png",alt:"Remote Image"})],-1),pR=[uR],dR={__name:"32",setup(e){const t={};return V(q),(a,o)=>{const l=Un,r=Oe,i=rn,c=ln("click");return w(),z($e,ke(he(t)),{default:g(()=>[oR,lR,b(l,null,{default:g(()=>[rR,iR]),_:1}),b(i,null,{left:g(()=>[Se((w(),D("div",null,[b(r,ee({},{ranges:[""]}),{default:g(()=>[cR]),_:1},16)])),[[c]])]),right:g(()=>[Se((w(),D("div",null,pR)),[[c]])]),_:1})]),_:1},16)}}},fR=Y(dR,[["__file","/@slidev/slides/32.md"]]),hR=n("h1",null,"优化",-1),mR=n("div",{class:"mb-5"}," • 使用 `shallowRef` 、`shallowReactive` 等浅层响应式函数 ",-1),kR=n("div",{class:"mb-2"}," • Tree-Shaking ",-1),vR={class:"mb-5"},_R=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"/*#__PURE__*/"),s(),n("span",{class:"token function"},"foo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";")])])],-1),gR=n("div",{class:"mb-2"}," • 特性开关 ",-1),yR={class:"mb-5"},bR=n("p",null,[n("code",null,"true")],-1),wR=n("p",null,[s("如果明确知道自己不会使用选项 API，用户就可以使用 "),n("strong",null,"VUE_OPTIONS_API"),s(" 开关来关闭该特性，这样在打包的时候 Vue.js 的这部分代码就不会包含在最终的资源中，从而减小资源体积。")],-1),xR=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// webpack.DefinePlugin 插件配置")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"webpack"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"DefinePlugin"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  true"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 开启特性")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])])],-1),$R={__name:"33",setup(e){const t={};return V(q),(a,o)=>{const l=Oe,r=Un;return w(),z($e,ke(he(t)),{default:g(()=>[hR,b(r,null,{default:g(()=>[mR,kR,n("div",vR,[b(l,ee({},{ranges:[""]}),{default:g(()=>[_R]),_:1},16)]),gR,n("div",yR,[bR,wR,b(l,ee({},{ranges:[""]}),{default:g(()=>[xR]),_:1},16)])]),_:1})]),_:1},16)}}},RR=Y($R,[["__file","/@slidev/slides/33.md"]]),ER=n("h1",null,[n("code",null,"@vue/composition-api")],-1),SR=n("p",null,"为 Vue2 提供组合式 API 的插件",-1),CR=n("p",null,[n("a",{href:"https://github.com/vuejs/composition-api",target:"_blank",rel:"noopener"},"vue/composition-api")],-1),PR=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// same syntax for both Vue 2 and 3")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-demi'")])])],-1),TR={__name:"34",setup(e){const t={};return V(q),(a,o)=>{const l=Oe;return w(),z($e,ke(he(t)),{default:g(()=>[ER,SR,CR,b(l,ee({},{ranges:[""]}),{default:g(()=>[PR]),_:1},16)]),_:1},16)}}},OR=Y(TR,[["__file","/@slidev/slides/34.md"]]),AR=n("h1",null,"Vue Demi",-1),IR=n("p",null,"创建 Vue2 和 Vue3 兼容的插件库",-1),MR=n("p",null,[n("a",{href:"https://github.com/vueuse/vue-demi",target:"_blank",rel:"noopener"},"vueuse/vue-demi")],-1),LR=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// same syntax for both Vue 2 and 3")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-demi'")])])],-1),DR={__name:"35",setup(e){const t={};return V(q),(a,o)=>{const l=Oe;return w(),z($e,ke(he(t)),{default:g(()=>[AR,IR,MR,b(l,ee({},{ranges:[""]}),{default:g(()=>[LR]),_:1},16)]),_:1},16)}}},NR=Y(DR,[["__file","/@slidev/slides/35.md"]]),FR=n("h1",null,"VueUse",-1),jR=n("p",null,"Vue 组合式API工具合集",-1),VR=n("p",null,[n("a",{href:"https://github.com/vueuse/vueuse",target:"_blank",rel:"noopener"},"VueUse")],-1),HR=n("div",{class:"mt-10 mb-5"},"• 同时支持Vue2 和 3",-1),UR=n("div",{class:"mb-5"},"• Tree-shake",-1),BR=n("div",{class:"mb-5"},"• TypeScript",-1),WR=n("div",{class:"mb-5"},"• 支持 CDN",-1),zR=n("div",{class:"mb-5"},"• 丰富的生态系统",-1),KR=[HR,UR,BR,WR,zR],qR={__name:"36",setup(e){const t={};return V(q),(a,o)=>{const l=ln("click");return w(),z($e,ke(he(t)),{default:g(()=>[FR,jR,VR,Se((w(),D("div",null,KR)),[[l]])]),_:1},16)}}},YR=Y(qR,[["__file","/@slidev/slides/36.md"]]),ZR=n("h1",null,"快速回顾",-1),GR=n("div",{class:"mt-10 mb-5"},"• 建立“连接”",-1),JR=n("div",{class:"mb-5"},"• 接受 Ref 作为函数参数",-1),QR=n("div",{class:"mb-5"},"• 将异步操作转换为“同步”",-1),XR=n("div",{class:"mb-5"},"• 副作用自动清除",-1),e3=n("div",{class:"mb-5"},"• 状态共享",-1),n3=n("div",{class:"mb-5"},[s("• "),n("code",null,"useVModel")],-1),t3={__name:"37",setup(e){const t={};return V(q),(a,o)=>{const l=Un;return w(),z($e,ke(he(t)),{default:g(()=>[ZR,b(l,null,{default:g(()=>[GR,JR,QR,XR,e3,n3]),_:1})]),_:1},16)}}},s3=Y(t3,[["__file","/@slidev/slides/37.md"]]),a3={flex:"~",w:"min",border:"~ gray-400 opacity-50 rounded-md"},o3=Re({__name:"test",setup(e){V(q);const t=ne("hello world"),a=ne(10086),o=ne({a:1}),l=Xe({list:[1,2,3]});return console.log(t),console.log(a),console.log(o),console.log(l),(r,i)=>(w(),D("div",a3))}}),l3=Y(o3,[["__file","D:/github/share-ppt/components/test.vue"]]),r3=n("h4",null,"谢谢～",-1),i3=n("p",null,[s("本演示文稿由 "),n("a",{href:"https://cn.sli.dev/",target:"_blank",rel:"noopener"},"Slidev"),s(" 强力驱动")],-1),c3={__name:"38",setup(e){const t={layout:"center"};return V(q),(a,o)=>{const l=l3;return w(),z(Qu,ke(he(t)),{default:g(()=>[r3,i3,b(l)]),_:1},16)}}},u3=Y(c3,[["__file","/@slidev/slides/38.md"]]),p3=[{path:"1",name:"page-1",component:z0,meta:{title:"Vue的组合式开发",slide:{raw:`<br />
<br />
<br />
<br />
<br />
<br />

# Vue的组合式开发
编写可组合可复用的 Vue 函数
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
2023/03/06
`,title:"Vue的组合式开发",level:1,content:`<br />
<br />
<br />
<br />
<br />
<br />

# Vue的组合式开发
编写可组合可复用的 Vue 函数
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
2023/03/06`,frontmatter:{title:"Vue的组合式开发"},index:0,start:0,end:20,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:J0,meta:{layout:"center",slide:{raw:`---
layout: center
---

# Vue Composition API

<center><font color="#666">组合式 API</font></center>

`,title:"Vue Composition API",level:1,content:`# Vue Composition API

<center><font color="#666">组合式 API</font></center>`,frontmatter:{layout:"center"},index:1,start:20,end:29,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:xb,meta:{slide:{raw:`
# 什么是组合式API
在 Vue3 中引入的一种新的编写组件的方式

<LR v-click-hide>
<template v-slot:left>
\`\`\`ts
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
<v-after v-click-hide>
<LR>
<template v-slot:left>
\`\`\`ts {3,7-8,12-13}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts {5,16}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
</v-after>
`,title:"什么是组合式API",level:1,content:`# 什么是组合式API
在 Vue3 中引入的一种新的编写组件的方式

<LR v-click-hide>
<template v-slot:left>
\`\`\`ts
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
<v-after v-click-hide>
<LR>
<template v-slot:left>
\`\`\`ts {3,7-8,12-13}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts {5,16}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
</v-after>`,frontmatter:{},index:2,start:30,end:133,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Ob,meta:{slide:{raw:`
# 什么是组合式API
在 Vue3 中引入的一种新的编写组件的方式

<LR v-click-hide>
<template v-slot:left>
\`\`\`ts {4-6}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts {6,10}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
<v-after v-click-hide>
<LR>
<template v-slot:left>
\`\`\`ts {8-12}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts {7,11}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
</v-after>
`,title:"什么是组合式API",level:1,content:`# 什么是组合式API
在 Vue3 中引入的一种新的编写组件的方式

<LR v-click-hide>
<template v-slot:left>
\`\`\`ts {4-6}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts {6,10}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
<v-after v-click-hide>
<LR>
<template v-slot:left>
\`\`\`ts {8-12}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts {7,11}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
</v-after>`,frontmatter:{},index:3,start:134,end:237,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:jb,meta:{slide:{raw:`
# 什么是组合式API
在 Vue3 中引入的一种新的编写组件的方式

<LR v-click-hide>
<template v-slot:left>
\`\`\`ts {13-17}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts {12-14}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
<v-after v-click-hide>
<LR>
<template v-slot:left>
\`\`\`ts
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
</v-after>
`,title:"什么是组合式API",level:1,content:`# 什么是组合式API
在 Vue3 中引入的一种新的编写组件的方式

<LR v-click-hide>
<template v-slot:left>
\`\`\`ts {13-17}
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts {12-14}
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
<v-after v-click-hide>
<LR>
<template v-slot:left>
\`\`\`ts
<script>
export default {
  data() {
    return {
      dark: false
    }
  },
  computed: {
    light() {
      return !this.dark
    }
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark
    }
  }
}
<\/script>
\`\`\`
</template>

<template v-slot:right>
\`\`\`ts
<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const dark = ref(false)
    const light = computed(() => !dark.value)

    return {
      dark,
      light,
      toggleDark() {
        dark.value = !dark.value
      }
    }
  }
}
<\/script>
\`\`\`
</template>
</LR>
</v-after>`,frontmatter:{},index:4,start:238,end:341,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Ub,meta:{slide:{raw:`
# 为什么引入组合式API？


<v-clicks>
<LR class="mt-8 mb-8">
<template v-slot:left>
<font color="#666">选项式 API 存在的问题</font>
</template>
<template v-slot:right>
<font color="#666">组合式 API 提供的能力</font>
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 不利于复用
</template>
<template v-slot:right>
• 极易复用（原生JS函数）
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 潜在命名冲突
</template>
<template v-slot:right>
• 可灵活组合（生命周期钩子可多次使用）
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 上下文丢失
</template>
<template v-slot:right>
• 提供更好的上下文支持
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 有限的类型支持
</template>
<template v-slot:right>
• 更好的TypeScript类型支持
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 按API类型组织
</template>
<template v-slot:right>
• 按功能/逻辑组织
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
</template>
<template v-slot:right>
• 可独立于Vue组件使用
</template>
</LR>
</v-clicks>
`,title:"为什么引入组合式API？",level:1,content:`# 为什么引入组合式API？


<v-clicks>
<LR class="mt-8 mb-8">
<template v-slot:left>
<font color="#666">选项式 API 存在的问题</font>
</template>
<template v-slot:right>
<font color="#666">组合式 API 提供的能力</font>
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 不利于复用
</template>
<template v-slot:right>
• 极易复用（原生JS函数）
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 潜在命名冲突
</template>
<template v-slot:right>
• 可灵活组合（生命周期钩子可多次使用）
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 上下文丢失
</template>
<template v-slot:right>
• 提供更好的上下文支持
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 有限的类型支持
</template>
<template v-slot:right>
• 更好的TypeScript类型支持
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
• 按API类型组织
</template>
<template v-slot:right>
• 按功能/逻辑组织
</template>
</LR>
<LR class="mb-4">
<template v-slot:left>
</template>
<template v-slot:right>
• 可独立于Vue组件使用
</template>
</LR>
</v-clicks>`,frontmatter:{},index:5,start:342,end:404,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Xb,meta:{slide:{raw:`
# 什么是可组合函数
可复用逻辑的集合，专注点分离

<LR>
<template v-slot:left>

\`\`\`ts
export function useDark(options: UseDarkOptions = {}) {
  const preferredDark = usePreferredDark()
  const mode = useColorMode()

  return computed<boolean>({
    get() {
      return mode.value === 'dark'
    },
    set(v) {
      mode.value = v === preferredDark.value 
        ? 'auto' : v ? 'dark' : 'light'
    },
  })
}
\`\`\`

</template>
<template v-slot:right>

\`\`\`ts
const isDark = useDark()
const toggleDark = useToggle(isDark)
\`\`\`

\`\`\`html
<button @click="toggleDark()" >
{{ isDark ? 'light' : 'dark' }}
</button>
\`\`\`
<div class="flex-center mt-10">
<Dark />
</div>
</template>
</LR>
`,title:"什么是可组合函数",level:1,content:`# 什么是可组合函数
可复用逻辑的集合，专注点分离

<LR>
<template v-slot:left>

\`\`\`ts
export function useDark(options: UseDarkOptions = {}) {
  const preferredDark = usePreferredDark()
  const mode = useColorMode()

  return computed<boolean>({
    get() {
      return mode.value === 'dark'
    },
    set(v) {
      mode.value = v === preferredDark.value 
        ? 'auto' : v ? 'dark' : 'light'
    },
  })
}
\`\`\`

</template>
<template v-slot:right>

\`\`\`ts
const isDark = useDark()
const toggleDark = useToggle(isDark)
\`\`\`

\`\`\`html
<button @click="toggleDark()" >
{{ isDark ? 'light' : 'dark' }}
</button>
\`\`\`
<div class="flex-center mt-10">
<Dark />
</div>
</template>
</LR>`,frontmatter:{},index:6,start:405,end:448,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:lw,meta:{slide:{raw:`
# 组合关系
![Remote Image](https://pageignore.github.io/share-ppt/useDark_img.png)

<v-clicks>
<div class="mb-5">• 每个函数都可以单独使用</div>
<div class="mb-5">• 专注点分离</div>
<div class="mb-5">• 状态连接</div>
</v-clicks>
`,title:"组合关系",level:1,content:`# 组合关系
![Remote Image](https://pageignore.github.io/share-ppt/useDark_img.png)

<v-clicks>
<div class="mb-5">• 每个函数都可以单独使用</div>
<div class="mb-5">• 专注点分离</div>
<div class="mb-5">• 状态连接</div>
</v-clicks>`,frontmatter:{},index:7,start:449,end:459,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Vw,meta:{slide:{raw:`
# 建立“连接”
\`setup()\`在组件中执行一次，建立 输入 → 输出 的连接，输出会自动根据输入的改变而改变

<LR>
<template v-slot:left>
<v-clicks>
<div class="mb-5">• 状态驱动UI</div>
<div class="mb-5">• 状态改变会自动更新UI - 响应式</div>
<div class="mb-5">• 状态<code>setup()</code>函数，建立 状态 和 逻辑 的连接</div>
<div class="mb-5">• 通过<code>&#60;template&#62;</code>模板，建立 状态 和 UI 的连接</div>
</v-clicks>
</template>

<template v-slot:right>
<v-click>
  <Connect class="ml-4" />
</v-click>
</template>
</LR>
`,title:"建立“连接”",level:1,content:`# 建立“连接”
\`setup()\`在组件中执行一次，建立 输入 → 输出 的连接，输出会自动根据输入的改变而改变

<LR>
<template v-slot:left>
<v-clicks>
<div class="mb-5">• 状态驱动UI</div>
<div class="mb-5">• 状态改变会自动更新UI - 响应式</div>
<div class="mb-5">• 状态<code>setup()</code>函数，建立 状态 和 逻辑 的连接</div>
<div class="mb-5">• 通过<code>&#60;template&#62;</code>模板，建立 状态 和 UI 的连接</div>
</v-clicks>
</template>

<template v-slot:right>
<v-click>
  <Connect class="ml-4" />
</v-click>
</template>
</LR>`,frontmatter:{},index:8,start:460,end:481,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:ox,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Ref
<v-click at="1">
<div style="width:90%">

\`\`\`ts
import { ref } from 'vue'

let foo = 0
let bar = ref(0)

foo = 1
bar = 1 // ts-error
\`\`\`

</div>

</v-click>

<v-click at="2">

<br/>
<font color="#666">PROS</font>
<div class="mb-5 mt-5">• 显式调用，类型检查</div>
<div class="mb-5">• 相比Reactive 局限更少</div>

<font color="#666">CONS</font>
<div class="mt-5">• <code>.value</code></div>

</v-click>

::right::

# Reactive

<v-click at="1">

\`\`\`ts
import { reactive } from 'vue'

const foo = { prop: 0 }
const bar = reactive({ prop: 0 })

foo.prop = 1
bar.prop = 1
\`\`\`
</v-click>

<v-click at="3">

<br/>
<font color="#666">PROS</font>
<div class="mb-5 mt-5">• 自动 Unwrap(即不需要<code>.value</code>)</div>

<font color="#666">CONS</font>
<div class="mb-5 mt-5">• 在类型上和一般对象没有区别</div>
<div class="mb-5">• 使用 ES6 结构会使响应式丢失</div>
<div class="mb-5">• 需要使用箭头函数包装才能使用<code>watch</code></div>

</v-click>
`,title:"Ref",level:1,content:`# Ref
<v-click at="1">
<div style="width:90%">

\`\`\`ts
import { ref } from 'vue'

let foo = 0
let bar = ref(0)

foo = 1
bar = 1 // ts-error
\`\`\`

</div>

</v-click>

<v-click at="2">

<br/>
<font color="#666">PROS</font>
<div class="mb-5 mt-5">• 显式调用，类型检查</div>
<div class="mb-5">• 相比Reactive 局限更少</div>

<font color="#666">CONS</font>
<div class="mt-5">• <code>.value</code></div>

</v-click>

::right::

# Reactive

<v-click at="1">

\`\`\`ts
import { reactive } from 'vue'

const foo = { prop: 0 }
const bar = reactive({ prop: 0 })

foo.prop = 1
bar.prop = 1
\`\`\`
</v-click>

<v-click at="3">

<br/>
<font color="#666">PROS</font>
<div class="mb-5 mt-5">• 自动 Unwrap(即不需要<code>.value</code>)</div>

<font color="#666">CONS</font>
<div class="mb-5 mt-5">• 在类型上和一般对象没有区别</div>
<div class="mb-5">• 使用 ES6 结构会使响应式丢失</div>
<div class="mb-5">• 需要使用箭头函数包装才能使用<code>watch</code></div>

</v-click>`,frontmatter:{layout:"two-cols"},index:9,start:481,end:545,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:mx,meta:{slide:{raw:`
# Ref 自动解包
在众多情况下，可以减少\`.value\`的使用

<v-clicks>

<LR>
<template v-slot:left>
<div class="lh-30">• <code>watch</code>直接接受Ref作为监听对象，并在回调函数中返回解包后的值</div>
</template> 
<template v-slot:right>

\`\`\`ts
const counter = ref(0)

watch(counter, count => {
  console.log(count) // same as \`counter.value\`
})
\`\`\`

</template>
</LR>

<LR>
<template v-slot:left>
<div class="lh-30">• Ref在模板中自动解包</div>
</template> 
<template v-slot:right>

\`\`\`html
<template>
  <button @click="counter += 1">
    Counter is {{ counter }}
  </button>
</template>
\`\`\`

</template>
</LR>

<LR>
<template v-slot:left>
<div class="lh-30">• 使用 Reactive 解包嵌套的 Ref</div>
</template> 
<template v-slot:right>

\`\`\`ts
import { ref, reactive } from 'vue'
const foo = ref('bar')
const data = reactive({ foo, id: 10 })
data.foo // 'bar'
\`\`\`

</template>
</LR>

</v-clicks>
`,title:"Ref 自动解包",level:1,content:`# Ref 自动解包
在众多情况下，可以减少\`.value\`的使用

<v-clicks>

<LR>
<template v-slot:left>
<div class="lh-30">• <code>watch</code>直接接受Ref作为监听对象，并在回调函数中返回解包后的值</div>
</template> 
<template v-slot:right>

\`\`\`ts
const counter = ref(0)

watch(counter, count => {
  console.log(count) // same as \`counter.value\`
})
\`\`\`

</template>
</LR>

<LR>
<template v-slot:left>
<div class="lh-30">• Ref在模板中自动解包</div>
</template> 
<template v-slot:right>

\`\`\`html
<template>
  <button @click="counter += 1">
    Counter is {{ counter }}
  </button>
</template>
\`\`\`

</template>
</LR>

<LR>
<template v-slot:left>
<div class="lh-30">• 使用 Reactive 解包嵌套的 Ref</div>
</template> 
<template v-slot:right>

\`\`\`ts
import { ref, reactive } from 'vue'
const foo = ref('bar')
const data = reactive({ foo, id: 10 })
data.foo // 'bar'
\`\`\`

</template>
</LR>

</v-clicks>`,frontmatter:{},index:10,start:546,end:604,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:wx,meta:{slide:{raw:`
# \`ref\` - Ref 的内部实现
Vue 源码分析

\`\`\`ts
function ref(input) {
  return isRef(input)
    ? input
    : createRef(input)
}
\`\`\`

也就是说，\`ref()\` 会直接返回已经是 Ref 的值

\`\`\`ts
const foo = ref(123)
const bar = ref(foo)

foo === bar // true
\`\`\`

`,title:"`ref` - Ref 的内部实现",level:1,content:`# \`ref\` - Ref 的内部实现
Vue 源码分析

\`\`\`ts
function ref(input) {
  return isRef(input)
    ? input
    : createRef(input)
}
\`\`\`

也就是说，\`ref()\` 会直接返回已经是 Ref 的值

\`\`\`ts
const foo = ref(123)
const bar = ref(foo)

foo === bar // true
\`\`\``,frontmatter:{},index:11,start:605,end:627,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Ix,meta:{slide:{raw:`
# \`unref\` - Ref 的反操作
<div class="mt-5 mb-5">• 如果传入一个 Ref， 返回其值</div>
<div>• 否则愿样返回</div>

<v-click>
<LR>
<template v-slot:left>
<br />
<font color="#666">实现</font>
<br />

\`\`\`ts
function unref<T>(r: Ref<T> | T): T {
  return isRef(r) ? r.value : r
}
\`\`\`

</template> 
<template v-slot:right>
<br />
<font color="#666">使用</font>
<br />

\`\`\`ts
import { unref, ref } from 'vue'

const foo = ref('foo')
unref(foo) // 'foo'

const bar = 'bar'
unref(bar) // 'bar'
\`\`\`

</template>
</LR>
</v-click>
`,title:"`unref` - Ref 的反操作",level:1,content:`# \`unref\` - Ref 的反操作
<div class="mt-5 mb-5">• 如果传入一个 Ref， 返回其值</div>
<div>• 否则愿样返回</div>

<v-click>
<LR>
<template v-slot:left>
<br />
<font color="#666">实现</font>
<br />

\`\`\`ts
function unref<T>(r: Ref<T> | T): T {
  return isRef(r) ? r.value : r
}
\`\`\`

</template> 
<template v-slot:right>
<br />
<font color="#666">使用</font>
<br />

\`\`\`ts
import { unref, ref } from 'vue'

const foo = ref('foo')
unref(foo) // 'foo'

const bar = 'bar'
unref(bar) // 'bar'
\`\`\`

</template>
</LR>
</v-click>`,frontmatter:{},index:12,start:628,end:666,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:n$,meta:{slide:{raw:`
# 接受 Ref 作为函数参数

<div class="flex-3">
  <div class="flex-3-item-01"></div>
  <div class="flex-3-item-02">
   <font color="#666">实现</font>
  </div>
  <div class="flex-3-item-03">
   <font color="#666">用例</font>
  </div>
</div>

<v-clicks>

<div class="flex-3">
  <div class="flex-3-item-01"><br /><font color="#666">纯函数</font></div>
  <div class="flex-3-item-02">

  \`\`\`ts
  function add(a: number, b: number) {
    return a + b
  }
  \`\`\`

  </div>
  <div class="flex-3-item-03">
  
  \`\`\`ts
  let a = 1
  let b = 2

  let c = add(a, b) // 3
  \`\`\`
  
  </div>
</div>

<div class="flex-3">
  <div class="flex-3-item-01"><br /><font color="#666">接受 Ref 作为参数，返回一个响应式的结果</font></div>
  <div class="flex-3-item-02">

  \`\`\`ts
  function add(a: Ref<number>, b: Ref<number>) {
    return computed(() => a.value + b.value)
  }
  \`\`\`

  </div>
  <div class="flex-3-item-03">
  
  \`\`\`ts
  const a = ref(1)
  const b = ref(2)

  const c = add(a, b)
  c.value // 3
  \`\`\`
  
  </div>
</div>

<div class="flex-3">
  <div class="flex-3-item-01"><br /><font color="#666">同时接受传入值和 Ref</font></div>
  <div class="flex-3-item-02">

  \`\`\`ts
  function add(
    a: Ref<number> | number,
    b: Ref<number> | number
  ) {
    return computed(() => unref(a) + unref(b))
  }
  \`\`\`

  </div>
  <div class="flex-3-item-03">
  
  \`\`\`ts
  const a = ref(1)

  const c = add(a, 5)
  c.value // 6
  \`\`\`
  
  </div>
</div>

</v-clicks>
`,title:"接受 Ref 作为函数参数",level:1,content:`# 接受 Ref 作为函数参数

<div class="flex-3">
  <div class="flex-3-item-01"></div>
  <div class="flex-3-item-02">
   <font color="#666">实现</font>
  </div>
  <div class="flex-3-item-03">
   <font color="#666">用例</font>
  </div>
</div>

<v-clicks>

<div class="flex-3">
  <div class="flex-3-item-01"><br /><font color="#666">纯函数</font></div>
  <div class="flex-3-item-02">

  \`\`\`ts
  function add(a: number, b: number) {
    return a + b
  }
  \`\`\`

  </div>
  <div class="flex-3-item-03">
  
  \`\`\`ts
  let a = 1
  let b = 2

  let c = add(a, b) // 3
  \`\`\`
  
  </div>
</div>

<div class="flex-3">
  <div class="flex-3-item-01"><br /><font color="#666">接受 Ref 作为参数，返回一个响应式的结果</font></div>
  <div class="flex-3-item-02">

  \`\`\`ts
  function add(a: Ref<number>, b: Ref<number>) {
    return computed(() => a.value + b.value)
  }
  \`\`\`

  </div>
  <div class="flex-3-item-03">
  
  \`\`\`ts
  const a = ref(1)
  const b = ref(2)

  const c = add(a, b)
  c.value // 3
  \`\`\`
  
  </div>
</div>

<div class="flex-3">
  <div class="flex-3-item-01"><br /><font color="#666">同时接受传入值和 Ref</font></div>
  <div class="flex-3-item-02">

  \`\`\`ts
  function add(
    a: Ref<number> | number,
    b: Ref<number> | number
  ) {
    return computed(() => unref(a) + unref(b))
  }
  \`\`\`

  </div>
  <div class="flex-3-item-03">
  
  \`\`\`ts
  const a = ref(1)

  const c = add(a, 5)
  c.value // 6
  \`\`\`
  
  </div>
</div>

</v-clicks>`,frontmatter:{},index:13,start:667,end:757,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:i$,meta:{slide:{raw:`
# MaybeRef 类型工具

\`\`\`ts
type MaybeRef<T> = Ref<T> | T
\`\`\`

使用\`MaybeRef\`来支持可选择性的响应式参数

\`\`\`ts
export function useTimeAgo(
  time: Date | number | string | Ref<Date | number | string>,
) {
  return computed(() => someFormating(unref(time)))
}
\`\`\`

\`\`\`ts
import { computed, unref, Ref } from 'vue'

type MaybeRef<T> = Ref<T> | T

export function useTimeAgo(
  time: MaybeRef<Date | number | string>,
) {
  return computed(() => someFormating(unref(time)))
}
\`\`\`
`,title:"MaybeRef 类型工具",level:1,content:`# MaybeRef 类型工具

\`\`\`ts
type MaybeRef<T> = Ref<T> | T
\`\`\`

使用\`MaybeRef\`来支持可选择性的响应式参数

\`\`\`ts
export function useTimeAgo(
  time: Date | number | string | Ref<Date | number | string>,
) {
  return computed(() => someFormating(unref(time)))
}
\`\`\`

\`\`\`ts
import { computed, unref, Ref } from 'vue'

type MaybeRef<T> = Ref<T> | T

export function useTimeAgo(
  time: MaybeRef<Date | number | string>,
) {
  return computed(() => someFormating(unref(time)))
}
\`\`\``,frontmatter:{},index:14,start:758,end:787,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:_$,meta:{slide:{raw:`
# Reactify 响应式化
使用魔法构造“连接”

<LR>
<template v-slot:left>

<div v-click>

可以将一个普通函数转化为一个响应式的函数

\`\`\`ts
import { reactify } from '@vueuse/core'

function add(a, b) {
  return a + b
}

const useAdd = reactify(add)
\`\`\`

自动 unref 入参，并将返回值包装为 computed

\`\`\`ts
const x = ref(1)
const y = ref(2)
const z = useAdd(x, y) // z = 3

x.value = 10 // z = 12
\`\`\`
</div>
</template>
<template v-slot:right>
<div v-click>

适用于JS原生方法

\`\`\`ts
const useFloor= reactify(Math.floor)
const usePow = reactify(Math.pow)

const x = ref(2.4)
const res = usePow(useFloor(x), 2) // res = 4

x.value = 3.6 // res = 9
\`\`\`

</div>
</template>
</LR>
`,title:"Reactify 响应式化",level:1,content:`# Reactify 响应式化
使用魔法构造“连接”

<LR>
<template v-slot:left>

<div v-click>

可以将一个普通函数转化为一个响应式的函数

\`\`\`ts
import { reactify } from '@vueuse/core'

function add(a, b) {
  return a + b
}

const useAdd = reactify(add)
\`\`\`

自动 unref 入参，并将返回值包装为 computed

\`\`\`ts
const x = ref(1)
const y = ref(2)
const z = useAdd(x, y) // z = 3

x.value = 10 // z = 12
\`\`\`
</div>
</template>
<template v-slot:right>
<div v-click>

适用于JS原生方法

\`\`\`ts
const useFloor= reactify(Math.floor)
const usePow = reactify(Math.pow)

const x = ref(2.4)
const res = usePow(useFloor(x), 2) // res = 4

x.value = 3.6 // res = 9
\`\`\`

</div>
</template>
</LR>`,frontmatter:{},index:15,start:788,end:839,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:w$,meta:{slide:{raw:`
# \`Reactify\` 的实现

\`\`\`ts

function reactify(fn){
  return function (this, ...args) {
    return computed(() => fn.apply(this, args.map(i => unref(i))))
  }
}

\`\`\`
`,title:"`Reactify` 的实现",level:1,content:`# \`Reactify\` 的实现

\`\`\`ts

function reactify(fn){
  return function (this, ...args) {
    return computed(() => fn.apply(this, args.map(i => unref(i))))
  }
}

\`\`\``,frontmatter:{},index:16,start:840,end:853,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:C$,meta:{slide:{raw:`
# 让你的函数更灵活
让函数可以适应不同的场景

<LR>
<template v-slot:left>

<div>
构造一个“特殊的”Ref

\`\`\`ts
import { useTitle } from '@vueuse/core'

const title = useTitle()

title.value = 'Hello World'
// 网页的标题随 Ref 改变

\`\`\`

</div>
</template>

<template v-slot:right>

<div>
绑定一个现有的Ref

\`\`\`ts
import { ref, computed } from 'vue'
import { useTitle } from '@vueuse/core'

const name = ref('Hello')
const title = computed(() => {
  return \`\${name.value} - World\`
})

useTitle(title) // Hello - World

name.value = 'Hi' // Hi - World

\`\`\`
</div>

</template>
</LR>
`,title:"让你的函数更灵活",level:1,content:`# 让你的函数更灵活
让函数可以适应不同的场景

<LR>
<template v-slot:left>

<div>
构造一个“特殊的”Ref

\`\`\`ts
import { useTitle } from '@vueuse/core'

const title = useTitle()

title.value = 'Hello World'
// 网页的标题随 Ref 改变

\`\`\`

</div>
</template>

<template v-slot:right>

<div>
绑定一个现有的Ref

\`\`\`ts
import { ref, computed } from 'vue'
import { useTitle } from '@vueuse/core'

const name = ref('Hello')
const title = computed(() => {
  return \`\${name.value} - World\`
})

useTitle(title) // Hello - World

name.value = 'Hi' // Hi - World

\`\`\`
</div>

</template>
</LR>`,frontmatter:{},index:17,start:854,end:901,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:I$,meta:{slide:{raw:`
# \`useTitle\`
\`useTitle\` 的实现

\`\`\`ts {all|7-8|10-14|all}
import { ref, watch } from 'vue'
import { MaybeRef } from '@vueuse/core'

export function useTitle(
  newTitle: MaybeRef<string | null | undefined>
) {
  // 重复使用用户提供的 Ref，或者建立一个新的
  const title = ref(newTitle || document.title)

  // 将页面的标题与 Ref 同步
  watch(title, (t) => {
    if (t != null)
      document.title = t
  }, { immediate: true })

  return title
}
\`\`\`
`,title:"`useTitle`",level:1,content:`# \`useTitle\`
\`useTitle\` 的实现

\`\`\`ts {all|7-8|10-14|all}
import { ref, watch } from 'vue'
import { MaybeRef } from '@vueuse/core'

export function useTitle(
  newTitle: MaybeRef<string | null | undefined>
) {
  // 重复使用用户提供的 Ref，或者建立一个新的
  const title = ref(newTitle || document.title)

  // 将页面的标题与 Ref 同步
  watch(title, (t) => {
    if (t != null)
      document.title = t
  }, { immediate: true })

  return title
}
\`\`\``,frontmatter:{},index:18,start:902,end:926,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:U$,meta:{slide:{raw:`
# 重复使用已有的 Ref
如果将一个\`ref\`传递给\`ref\`构造函数，它会将其原样返回

<v-clicks>
<div class="mb-4">

\`\`\`ts
const foo = ref(1)   // Ref<1>
const bar = ref(foo) // Ref<1>

foo === bar // true
\`\`\`

</div>

<div class="mb-4">

\`\`\`ts
function useFoo(foo: Ref<string> | string) {
  // 不需要额外操作
  const bar = isRef(foo) ? foo : ref(foo)

  // 与上面的代码等效
  const bar = ref(foo)

  /* ... */
}
\`\`\`

</div>

<div class="mb-4">
这个技巧在编写不确定参数的函数时十分有用
</div>
</v-clicks>
`,title:"重复使用已有的 Ref",level:1,content:`# 重复使用已有的 Ref
如果将一个\`ref\`传递给\`ref\`构造函数，它会将其原样返回

<v-clicks>
<div class="mb-4">

\`\`\`ts
const foo = ref(1)   // Ref<1>
const bar = ref(foo) // Ref<1>

foo === bar // true
\`\`\`

</div>

<div class="mb-4">

\`\`\`ts
function useFoo(foo: Ref<string> | string) {
  // 不需要额外操作
  const bar = isRef(foo) ? foo : ref(foo)

  // 与上面的代码等效
  const bar = ref(foo)

  /* ... */
}
\`\`\`

</div>

<div class="mb-4">
这个技巧在编写不确定参数的函数时十分有用
</div>
</v-clicks>`,frontmatter:{},index:19,start:927,end:964,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Z$,meta:{slide:{raw:`
# \`Ref\` / \`unref\`

<div v-click>
<div class="mt-5 mb-5">• <code>MaybeRef&#60;T&#62;</code>可以很好的配合\`ref\`和\`unref\`进行使用</div>
<div class="mb-5">• 使用<code>ref</code>当你想要将其标准化为Ref</div>
<div class="mb-5">• 使用<code>unref</code>当你想要获取其值</div>

\`\`\`ts
type MaybeRef<T> = Ref<T> | T

function useBala<T>(arg: MaybeRef<T>) {
  const reference = ref(arg) // 得到 ref
  const value = unref(arg)   // 得到值
}
\`\`\`

</div>
`,title:"`Ref` / `unref`",level:1,content:`# \`Ref\` / \`unref\`

<div v-click>
<div class="mt-5 mb-5">• <code>MaybeRef&#60;T&#62;</code>可以很好的配合\`ref\`和\`unref\`进行使用</div>
<div class="mb-5">• 使用<code>ref</code>当你想要将其标准化为Ref</div>
<div class="mb-5">• 使用<code>unref</code>当你想要获取其值</div>

\`\`\`ts
type MaybeRef<T> = Ref<T> | T

function useBala<T>(arg: MaybeRef<T>) {
  const reference = ref(arg) // 得到 ref
  const value = unref(arg)   // 得到值
}
\`\`\`

</div>`,frontmatter:{},index:20,start:965,end:984,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:n2,meta:{slide:{raw:`
# 还可以更灵活
响应式的获取器

<LR>
<template v-slot:left>

<div>
接受响应式的\`Ref\`对象作为参数

\`\`\`ts

const name = ref('Hello')
const title = computed(() => {
  return \`\${name.value} - World\`
})

useTitle(title) // Hello - World

name.value = 'Hi' // Hi - World

\`\`\`
</div>
</template>

<template v-slot:right>

<div>
直接传入一个函数

\`\`\`ts

const name = ref('Hello')

useTitle(() => {
  return \`\${name.value} - World\`
}) // Hello - World

name.value = 'Hi' // Hi - World

\`\`\`
</div>

</template>
</LR>
`,title:"还可以更灵活",level:1,content:`# 还可以更灵活
响应式的获取器

<LR>
<template v-slot:left>

<div>
接受响应式的\`Ref\`对象作为参数

\`\`\`ts

const name = ref('Hello')
const title = computed(() => {
  return \`\${name.value} - World\`
})

useTitle(title) // Hello - World

name.value = 'Hi' // Hi - World

\`\`\`
</div>
</template>

<template v-slot:right>

<div>
直接传入一个函数

\`\`\`ts

const name = ref('Hello')

useTitle(() => {
  return \`\${name.value} - World\`
}) // Hello - World

name.value = 'Hi' // Hi - World

\`\`\`
</div>

</template>
</LR>`,frontmatter:{},index:21,start:985,end:1031,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:o2,meta:{slide:{raw:`
# \`MaybeComputedRef\`

\`\`\`ts

/**
 * 可能是一个 Ref，或者一个字面值
 */
export type MaybeRef<T> = T | Ref<T>

/**
 * 可能是一个 Ref，一个字面值，或者一个 Getter 函数
 */
export type MaybeComputedRef<T> = MaybeRef<T> | (() => T) | ComputedRef<T>

\`\`\`
`,title:"`MaybeComputedRef`",level:1,content:`# \`MaybeComputedRef\`

\`\`\`ts

/**
 * 可能是一个 Ref，或者一个字面值
 */
export type MaybeRef<T> = T | Ref<T>

/**
 * 可能是一个 Ref，一个字面值，或者一个 Getter 函数
 */
export type MaybeComputedRef<T> = MaybeRef<T> | (() => T) | ComputedRef<T>

\`\`\``,frontmatter:{},index:22,start:1032,end:1049,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:u2,meta:{slide:{raw:`
# \`resolveRef\`

\`\`\`ts {all|2-3|all}
function resolveRef<T>(input: MaybeRef<T>): Ref<T> {
  return typeof input === 'function'
    ? computed(input)
    : ref(input)
}

\`\`\`

<div class="mt-10" v-click>
如果传入的是一个函数，使用\`computed\`创建一个\`Ref\`对象，否则交由\`ref()\`处理
</div>
`,title:"`resolveRef`",level:1,content:`# \`resolveRef\`

\`\`\`ts {all|2-3|all}
function resolveRef<T>(input: MaybeRef<T>): Ref<T> {
  return typeof input === 'function'
    ? computed(input)
    : ref(input)
}

\`\`\`

<div class="mt-10" v-click>
如果传入的是一个函数，使用\`computed\`创建一个\`Ref\`对象，否则交由\`ref()\`处理
</div>`,frontmatter:{},index:23,start:1050,end:1066,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:m2,meta:{slide:{raw:`
# \`resolveUnRef\`

\`\`\`ts {all|2-3|all}
function resolveUnref<T>(input: MaybeRef<T>): T {
  return typeof input === 'function'
    ? input()
    : unref(input)
}

\`\`\`

<div class="mt-10" v-click>
如果传入的是一个函数，直接调用取值，否则交由\`ref()\`处理
</div>
`,title:"`resolveUnRef`",level:1,content:`# \`resolveUnRef\`

\`\`\`ts {all|2-3|all}
function resolveUnref<T>(input: MaybeRef<T>): T {
  return typeof input === 'function'
    ? input()
    : unref(input)
}

\`\`\`

<div class="mt-10" v-click>
如果传入的是一个函数，直接调用取值，否则交由\`ref()\`处理
</div>`,frontmatter:{},index:24,start:1067,end:1083,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:b2,meta:{slide:{raw:`
# \`useTitle\`
\`useTitle\` 的更灵活的实现

<LR>
<template v-slot:left>

<div>

\`\`\`ts {2,5,7-8}
import { ref, watch } from 'vue'
import { MaybeRef} from '@vueuse/core'

export function useTitle(
  newTitle: MaybeRef<string | null | undefined>
) {
  // 重复使用用户提供的 Ref，或者建立一个新的
  const title = ref(newTitle || document.title)

  // 将页面的标题与 Ref 同步
  watch(title, (t) => {
    if (t != null)
      document.title = t
  }, { immediate: true })

  return title
}
\`\`\`

</div>
</template>

<template v-slot:right>

<div>

\`\`\`ts {2,5,7-8}
import { ref, watch } from 'vue'
import { MaybeComputedRef, resolveRef } from '@vueuse/core'

export function useTitle(
  newTitle: MaybeComputedRef<string | null | undefined>
) {
  // 重复使用用户提供的 Ref，或者建立一个新的
  const title = resolveRef(newTitle || document.title)

  // 将页面的标题与 Ref 同步
  watch(title, (t) => {
    if (t != null)
      document.title = t
  }, { immediate: true })

  return title
}
\`\`\`
</div>

</template>
</LR>
`,title:"`useTitle`",level:1,content:`# \`useTitle\`
\`useTitle\` 的更灵活的实现

<LR>
<template v-slot:left>

<div>

\`\`\`ts {2,5,7-8}
import { ref, watch } from 'vue'
import { MaybeRef} from '@vueuse/core'

export function useTitle(
  newTitle: MaybeRef<string | null | undefined>
) {
  // 重复使用用户提供的 Ref，或者建立一个新的
  const title = ref(newTitle || document.title)

  // 将页面的标题与 Ref 同步
  watch(title, (t) => {
    if (t != null)
      document.title = t
  }, { immediate: true })

  return title
}
\`\`\`

</div>
</template>

<template v-slot:right>

<div>

\`\`\`ts {2,5,7-8}
import { ref, watch } from 'vue'
import { MaybeComputedRef, resolveRef } from '@vueuse/core'

export function useTitle(
  newTitle: MaybeComputedRef<string | null | undefined>
) {
  // 重复使用用户提供的 Ref，或者建立一个新的
  const title = resolveRef(newTitle || document.title)

  // 将页面的标题与 Ref 同步
  watch(title, (t) => {
    if (t != null)
      document.title = t
  }, { immediate: true })

  return title
}
\`\`\`
</div>

</template>
</LR>`,frontmatter:{},index:25,start:1084,end:1144,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:T2,meta:{slide:{raw:`
# 将异步操作转换为“同步”
使用组合式API，甚至可以将异步请求转换为“同步”的

<v-clicks>
<div class="mb-5">
异步

\`\`\`ts
const data = await fetch('https://api.github.com/').then(r => r.json())

// use data
\`\`\`

</div>

<div class="mb-5">
组合式 API

\`\`\`ts
const { data } = useFetch('https://api.github.com/').json()

const user_url = computed(() => data.value?.user_url)
\`\`\`

</div>

<div>
先建立数据的“连接”，然后再等待异步请求返回将数据填充（注意：并不是真正的异步）
</div>
</v-clicks>
`,title:"将异步操作转换为“同步”",level:1,content:`# 将异步操作转换为“同步”
使用组合式API，甚至可以将异步请求转换为“同步”的

<v-clicks>
<div class="mb-5">
异步

\`\`\`ts
const data = await fetch('https://api.github.com/').then(r => r.json())

// use data
\`\`\`

</div>

<div class="mb-5">
组合式 API

\`\`\`ts
const { data } = useFetch('https://api.github.com/').json()

const user_url = computed(() => data.value?.user_url)
\`\`\`

</div>

<div>
先建立数据的“连接”，然后再等待异步请求返回将数据填充（注意：并不是真正的异步）
</div>
</v-clicks>`,frontmatter:{},index:26,start:1145,end:1177,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:L2,meta:{slide:{raw:`
# 副作用自动清除
Vue原生的\`watch\`和\`computed\` API 会在组件销毁的时候自动解除其内部的依赖监听。
我们在编写自己的函数时，可以遵循同样的模式。

<div v-click>

\`\`\`ts
import { onUnmounted } from 'vue'

export function useEventListener(target: EventTarget, name: string, fn: any) {
  target.addEventListener(name, fn)

  onUnmounted(() => {
    target.removeEventListener(name, fn) // <--
  })
}
\`\`\`

</div>
`,title:"副作用自动清除",level:1,content:`# 副作用自动清除
Vue原生的\`watch\`和\`computed\` API 会在组件销毁的时候自动解除其内部的依赖监听。
我们在编写自己的函数时，可以遵循同样的模式。

<div v-click>

\`\`\`ts
import { onUnmounted } from 'vue'

export function useEventListener(target: EventTarget, name: string, fn: any) {
  target.addEventListener(name, fn)

  onUnmounted(() => {
    target.removeEventListener(name, fn) // <--
  })
}
\`\`\`

</div>`,frontmatter:{},index:27,start:1178,end:1199,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:B2,meta:{slide:{raw:`
# 状态共享
由于组合式 API 天然提供的灵活性，状态可以独立于组件被创建并使用

<LR>
<template v-slot:left>

<div v-click>

\`\`\`ts
// shared.ts
import { reactive } from 'vue'

export const state = reactive({
  foo: 1,
  bar: 'Hello'
})
\`\`\`

</div>

</template>
<template v-slot:right>

<div v-click>

\`\`\`ts
// A.vue
import { state } from './shared.ts'

state.foo += 1
\`\`\`

</div>

<div v-click>

\`\`\`ts
// B.vue
import { state } from './shared.ts'

console.log(state.foo) // 2
\`\`\`

</div>

</template>
</LR>

<div v-click class="mt-10">此方案不兼容SSR</div>
`,title:"状态共享",level:1,content:`# 状态共享
由于组合式 API 天然提供的灵活性，状态可以独立于组件被创建并使用

<LR>
<template v-slot:left>

<div v-click>

\`\`\`ts
// shared.ts
import { reactive } from 'vue'

export const state = reactive({
  foo: 1,
  bar: 'Hello'
})
\`\`\`

</div>

</template>
<template v-slot:right>

<div v-click>

\`\`\`ts
// A.vue
import { state } from './shared.ts'

state.foo += 1
\`\`\`

</div>

<div v-click>

\`\`\`ts
// B.vue
import { state } from './shared.ts'

console.log(state.foo) // 2
\`\`\`

</div>

</template>
</LR>

<div v-click class="mt-10">此方案不兼容SSR</div>`,frontmatter:{},index:28,start:1200,end:1251,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:J2,meta:{slide:{raw:`
# useVModel
一个让使用 props 和 emit 更加容易的工具

<LR>
<template v-slot:left>

<div v-click>

\`\`\`ts
export function useVModel(props, name) {
  const emit = getCurrentInstance().emit

  return computed({
    get() {
      return props[name]
    },
    set(v) {
      emit(\`update:\${name}\`, v)
    }
  })
}
\`\`\`

</div>

</template>
<template v-slot:right>

<div v-click>

\`\`\`ts
export default defineComponent({
  setup(props) {
    const title = useVModel(props, 'title')

    return { title }
  }
})
\`\`\`

</div>

<div v-click>

\`\`\`html

<template>
  <input v-model:title="title" />
</template>

\`\`\`

</div>

<div v-click>

\`\`\`ts
setup(props) {
  const { titke } = useVModels(props)

  return { title }
}
\`\`\`

</div>

</template>
</LR>
`,title:"useVModel",level:1,content:`# useVModel
一个让使用 props 和 emit 更加容易的工具

<LR>
<template v-slot:left>

<div v-click>

\`\`\`ts
export function useVModel(props, name) {
  const emit = getCurrentInstance().emit

  return computed({
    get() {
      return props[name]
    },
    set(v) {
      emit(\`update:\${name}\`, v)
    }
  })
}
\`\`\`

</div>

</template>
<template v-slot:right>

<div v-click>

\`\`\`ts
export default defineComponent({
  setup(props) {
    const title = useVModel(props, 'title')

    return { title }
  }
})
\`\`\`

</div>

<div v-click>

\`\`\`html

<template>
  <input v-model:title="title" />
</template>

\`\`\`

</div>

<div v-click>

\`\`\`ts
setup(props) {
  const { titke } = useVModels(props)

  return { title }
}
\`\`\`

</div>

</template>
</LR>`,frontmatter:{},index:29,start:1252,end:1322,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:aR,meta:{slide:{raw:`
# 调试
让 \`console.log\` 更好看

<LR>
<template v-slot:left>

<div v-click>

\`\`\`ts
const str = ref('hello world')
const num = ref(10086)
const obj = ref({a: 1})

const state = reactive({
  list: [1, 2 ,3]
})

console.log(str)
console.log(num)
console.log(obj)
console.log(state)
\`\`\`

</div>

</template>

<template v-slot:right>

<div v-click>

![Remote Image](https://pageignore.github.io/share-ppt/log_img01.png)

</div>

</template>
</LR>
`,title:"调试",level:1,content:`# 调试
让 \`console.log\` 更好看

<LR>
<template v-slot:left>

<div v-click>

\`\`\`ts
const str = ref('hello world')
const num = ref(10086)
const obj = ref({a: 1})

const state = reactive({
  list: [1, 2 ,3]
})

console.log(str)
console.log(num)
console.log(obj)
console.log(state)
\`\`\`

</div>

</template>

<template v-slot:right>

<div v-click>

![Remote Image](https://pageignore.github.io/share-ppt/log_img01.png)

</div>

</template>
</LR>`,frontmatter:{},index:30,start:1323,end:1362,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:fR,meta:{slide:{raw:`
# 调试
让 \`console.log\` 更好看

<v-clicks>

<div class="mb-5 lh-30">
浏览器允许我们编写自定义的 formatter，从而自定义输出形式。在 Vue.js 3 的源码中，你可以搜索到名为initCustomFormatter 的函数，该函数就是用来在开发环境下初始化自定义 formatter 的。
</div>

<div class="mb-5 lh-30">
以Chrome 为例，我们可以打开 DevTools 的设置，然后勾选“Console”→“Enable custom formatters”选项。
</div>

</v-clicks>

<LR>
<template v-slot:left>

<div v-click>

\`\`\`ts
const str = ref('hello world')
const num = ref(10086)
const obj = ref({a: 1})

const state = reactive({
  list: [1, 2 ,3]
})

console.log(str)
console.log(num)
console.log(obj)
console.log(state)
\`\`\`

</div>

</template>

<template v-slot:right>

<div v-click>

![Remote Image](https://pageignore.github.io/share-ppt/log_img02.png)

</div>

</template>
</LR>
`,title:"调试",level:1,content:`# 调试
让 \`console.log\` 更好看

<v-clicks>

<div class="mb-5 lh-30">
浏览器允许我们编写自定义的 formatter，从而自定义输出形式。在 Vue.js 3 的源码中，你可以搜索到名为initCustomFormatter 的函数，该函数就是用来在开发环境下初始化自定义 formatter 的。
</div>

<div class="mb-5 lh-30">
以Chrome 为例，我们可以打开 DevTools 的设置，然后勾选“Console”→“Enable custom formatters”选项。
</div>

</v-clicks>

<LR>
<template v-slot:left>

<div v-click>

\`\`\`ts
const str = ref('hello world')
const num = ref(10086)
const obj = ref({a: 1})

const state = reactive({
  list: [1, 2 ,3]
})

console.log(str)
console.log(num)
console.log(obj)
console.log(state)
\`\`\`

</div>

</template>

<template v-slot:right>

<div v-click>

![Remote Image](https://pageignore.github.io/share-ppt/log_img02.png)

</div>

</template>
</LR>`,frontmatter:{},index:31,start:1363,end:1414,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:RR,meta:{slide:{raw:`
# 优化

<v-clicks>
<div class="mb-5">
• 使用 \`shallowRef\` 、\`shallowReactive\` 等浅层响应式函数
</div>

<div  class="mb-2">
• Tree-Shaking
</div>

<div  class="mb-5">

\`\`\`ts
const x = 3;
/*#__PURE__*/ foo()
const y = 4;
\`\`\`

</div>

<div  class="mb-2">
• 特性开关
</div>

<div  class="mb-5">

\`true\`

如果明确知道自己不会使用选项 API，用户就可以使用 true 开关来关闭该特性，这样在打包的时候 Vue.js 的这部分代码就不会包含在最终的资源中，从而减小资源体积。

\`\`\`ts
// webpack.DefinePlugin 插件配置
new webpack.DefinePlugin({
  true: JSON.stringify(true), // 开启特性
})
\`\`\`

</div>
</v-clicks>
`,title:"优化",level:1,content:`# 优化

<v-clicks>
<div class="mb-5">
• 使用 \`shallowRef\` 、\`shallowReactive\` 等浅层响应式函数
</div>

<div  class="mb-2">
• Tree-Shaking
</div>

<div  class="mb-5">

\`\`\`ts
const x = 3;
/*#__PURE__*/ foo()
const y = 4;
\`\`\`

</div>

<div  class="mb-2">
• 特性开关
</div>

<div  class="mb-5">

\`true\`

如果明确知道自己不会使用选项 API，用户就可以使用 true 开关来关闭该特性，这样在打包的时候 Vue.js 的这部分代码就不会包含在最终的资源中，从而减小资源体积。

\`\`\`ts
// webpack.DefinePlugin 插件配置
new webpack.DefinePlugin({
  true: JSON.stringify(true), // 开启特性
})
\`\`\`

</div>
</v-clicks>`,frontmatter:{},index:32,start:1415,end:1457,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:OR,meta:{slide:{raw:`
# \`@vue/composition-api\`
为 Vue2 提供组合式 API 的插件

[vue/composition-api](https://github.com/vuejs/composition-api)

\`\`\`ts
// same syntax for both Vue 2 and 3
import { ref, reactive, defineComponent } from 'vue-demi'
\`\`\`
`,title:"`@vue/composition-api`",level:1,content:"# `@vue/composition-api`\n为 Vue2 提供组合式 API 的插件\n\n[vue/composition-api](https://github.com/vuejs/composition-api)\n\n```ts\n// same syntax for both Vue 2 and 3\nimport { ref, reactive, defineComponent } from 'vue-demi'\n```",frontmatter:{},index:33,start:1458,end:1469,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:NR,meta:{slide:{raw:`
# Vue Demi
创建 Vue2 和 Vue3 兼容的插件库

[vueuse/vue-demi](https://github.com/vueuse/vue-demi)

\`\`\`ts
// same syntax for both Vue 2 and 3
import { ref, reactive, defineComponent } from 'vue-demi'
\`\`\`
`,title:"Vue Demi",level:1,content:`# Vue Demi
创建 Vue2 和 Vue3 兼容的插件库

[vueuse/vue-demi](https://github.com/vueuse/vue-demi)

\`\`\`ts
// same syntax for both Vue 2 and 3
import { ref, reactive, defineComponent } from 'vue-demi'
\`\`\``,frontmatter:{},index:34,start:1470,end:1481,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:YR,meta:{slide:{raw:`
# VueUse
Vue 组合式API工具合集

[VueUse](https://github.com/vueuse/vueuse)

<div v-click>
<div class="mt-10 mb-5">• 同时支持Vue2 和 3</div>
<div class="mb-5">• Tree-shake</div>
<div class="mb-5">• TypeScript</div>
<div class="mb-5">• 支持 CDN</div>
<div class="mb-5">• 丰富的生态系统</div>
</div>
`,title:"VueUse",level:1,content:`# VueUse
Vue 组合式API工具合集

[VueUse](https://github.com/vueuse/vueuse)

<div v-click>
<div class="mt-10 mb-5">• 同时支持Vue2 和 3</div>
<div class="mb-5">• Tree-shake</div>
<div class="mb-5">• TypeScript</div>
<div class="mb-5">• 支持 CDN</div>
<div class="mb-5">• 丰富的生态系统</div>
</div>`,frontmatter:{},index:35,start:1482,end:1496,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:s3,meta:{slide:{raw:`
# 快速回顾

<v-clicks>
<div class="mt-10 mb-5">• 建立“连接”</div>
<div class="mb-5">• 接受 Ref 作为函数参数</div>
<div class="mb-5">• 将异步操作转换为“同步”</div>
<div class="mb-5">• 副作用自动清除</div>
<div class="mb-5">• 状态共享</div>
<div class="mb-5">• <code>useVModel</code></div>
</v-clicks>

`,title:"快速回顾",level:1,content:`# 快速回顾

<v-clicks>
<div class="mt-10 mb-5">• 建立“连接”</div>
<div class="mb-5">• 接受 Ref 作为函数参数</div>
<div class="mb-5">• 将异步操作转换为“同步”</div>
<div class="mb-5">• 副作用自动清除</div>
<div class="mb-5">• 状态共享</div>
<div class="mb-5">• <code>useVModel</code></div>
</v-clicks>`,frontmatter:{},index:36,start:1497,end:1510,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:u3,meta:{layout:"center",slide:{raw:`---
layout: center
---

#### 谢谢～
本演示文稿由 [Slidev](https://cn.sli.dev/) 强力驱动

<test />




`,title:"谢谢～",level:4,content:`#### 谢谢～
本演示文稿由 [Slidev](https://cn.sli.dev/) 强力驱动

<test />`,frontmatter:{layout:"center"},index:37,start:1510,end:1523,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",component:O0,meta:{layout:"end"}}],Ze=p3,Ea=[{name:"play",path:"/",component:X1,children:[...Ze]},{name:"print",path:"/print",component:C0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];Ea.push({path:"/presenter/print",component:()=>Jt(()=>import("./PresenterPrint-a6b5c2bf.js"),["assets/PresenterPrint-a6b5c2bf.js","assets/NoteViewer-9ed7fe10.js","assets/index-379db353.js"])}),Ea.push({name:"presenter",path:"/presenter/:no",component:()=>Jt(()=>import("./Presenter-8fa99763.js"),["assets/Presenter-8fa99763.js","assets/NoteViewer-9ed7fe10.js","assets/DrawingControls-1ffb4246.js","assets/index-379db353.js","assets/Presenter-0b9fbbd3.css"]),beforeEnter:e=>{if(!Fs.remote||Fs.remote===e.query.password)return!0;if(Fs.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Fs.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}}),Ea.push({path:"/presenter",redirect:{path:"/presenter/1"}});const xt=Pv({history:Ck("/"),routes:Ea});function d3(e,t,{mode:a="replace"}={}){return T({get(){const o=xt.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){Vn(()=>{xt[x(a)]({query:{...xt.currentRoute.value.query,[e]:o}})})}})}const Xu=ne(0);Vn(()=>{xt.afterEach(async()=>{await Vn(),Xu.value+=1})});const Qn=T(()=>xt.currentRoute.value),Bl=T(()=>Qn.value.query.print!==void 0),f3=T(()=>Qn.value.query.print==="clicks"),tt=T(()=>Qn.value.query.embedded!==void 0),Dn=T(()=>Qn.value.path.startsWith("/presenter")),ep=T(()=>Bl.value&&!f3.value),ll=T(()=>Qn.value.query.password),h3=T(()=>!Dn.value&&(!De.remote||ll.value===De.remote)),Ni=d3("clicks","0"),np=T(()=>Ze.length-1),m3=T(()=>Qn.value.path),Qe=T(()=>parseInt(m3.value.split(/\//g).slice(-1)[0])||1);T(()=>Wl(Qe.value));const wn=T(()=>Ze.find(e=>e.path===`${Qe.value}`));T(()=>{var e,t,a;return(a=(t=(e=wn.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:a.id});T(()=>{var e,t;return((t=(e=wn.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Qe.value===1?"cover":"default")});const Ro=T(()=>Ze.find(e=>e.path===`${Math.min(Ze.length,Qe.value+1)}`)),k3=T(()=>{var e,t;return Xu.value,((t=(e=wn.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Qt=T({get(){if(ep.value)return 99999;let e=+(Ni.value||0);return isNaN(e)&&(e=0),e},set(e){Ni.value=e.toString()}}),Ha=T(()=>{var e,t;return+(((t=(e=wn.value)==null?void 0:e.meta)==null?void 0:t.clicks)??k3.value.length)}),v3=T(()=>Qe.value<Ze.length-1||Qt.value<Ha.value),_3=T(()=>Qe.value>1||Qt.value>0),g3=T(()=>Ze.filter(e=>{var t,a;return(a=(t=e.meta)==null?void 0:t.slide)==null?void 0:a.title}).reduce((e,t)=>(zl(e,t),e),[])),y3=T(()=>Kl(g3.value,wn.value));T(()=>ql(y3.value));function zt(){Ha.value<=Qt.value?Ua():Qt.value+=1}async function Kt(){Qt.value<=0?await Ba():Qt.value-=1}function Wl(e){return Dn.value?`/presenter/${e}`:`/${e}`}function Ua(){const e=Math.min(Ze.length,Qe.value+1);return bs(e)}async function Ba(e=!0){const t=Math.max(1,Qe.value-1);await bs(t),e&&Ha.value&&xt.replace({query:{...Qn.value.query,clicks:Ha.value}})}function bs(e,t){return xt.push({path:Wl(e),query:{...Qn.value.query,clicks:t}})}function b3(e){const t=ne(0),{direction:a,distanceX:o,distanceY:l}=Km(e,{onSwipeStart(r){r.pointerType==="touch"&&(na.value||(t.value=zo()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||na.value)return;const i=Math.abs(o.value),c=Math.abs(l.value);i/window.innerWidth>.3||i>100?a.value===ot.LEFT?zt():Kt():(c/window.innerHeight>.4||c>200)&&(a.value===ot.DOWN?Ba():Ua())}})}async function Fi(){const{saveAs:e}=await Jt(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(su(De.download)?De.download:De.exportFilename?`${De.exportFilename}.pdf`:"/slidev-exported.pdf",`${De.title}.pdf`)}async function z3(e){var t,a;if(e==null){const o=(a=(t=wn.value)==null?void 0:t.meta)==null?void 0:a.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function zl(e,t,a=1){var l,r,i,c,u;const o=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>a&&e.length>0?zl(e[e.length-1].children,t,a+1):e.push({children:[],level:a,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(u=(c=t.meta)==null?void 0:c.slide)==null?void 0:u.title})}function Kl(e,t,a=!1,o){return e.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:a};return r.children.length>0&&(r.children=Kl(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ql(e,t=1){return e.filter(a=>!a.hideInToc).map(a=>({...a,children:ql(a.children,t+1)}))}export{C3 as $,ne as A,D3 as B,L3 as C,Pe as D,F3 as E,Ce as F,Pn as G,W3 as H,_p as I,gp as J,no as K,Vn as L,Cc as M,ee as N,Et as O,ml as P,Pt as Q,w3 as R,ep as S,x3 as T,ph as U,dh as V,Qc as W,Jc as X,Gc as Y,ih as Z,Y as _,M3 as a,Se as a$,P3 as a0,T3 as a1,E3 as a2,S3 as a3,_0 as a4,g0 as a5,Fi as a6,zt as a7,Ua as a8,z3 as a9,Uu as aA,pn as aB,D_ as aC,Ha as aD,v3 as aE,Ro as aF,_o as aG,na as aH,xo as aI,J1 as aJ,Nl as aK,Fl as aL,wd as aM,xd as aN,K1 as aO,Y_ as aP,On as aQ,N3 as aR,_n as aS,Is as aT,Nt as aU,Yn as aV,sl as aW,c_ as aX,u_ as aY,p_ as aZ,f_ as a_,Kt as aa,Ba as ab,Qn as ac,R3 as ad,ws as ae,xe as af,V3 as ag,ed as ah,n as ai,qe as aj,la as ak,Be as al,Ze as am,np as an,s as ao,me as ap,Tl as aq,Ue as ar,H3 as as,wn as at,z as au,x_ as av,b3 as aw,j3 as ax,U3 as ay,g as az,Qe as b,Zc as b0,B3 as b1,hn as b2,va as b3,Pg as b4,Xc as b5,h_ as b6,De as c,Qt as d,Dn as e,Re as f,Wl as g,V as h,O3 as i,q as j,Zt as k,D as l,b as m,w as n,A3 as o,I3 as p,Xe as q,xt as r,Gt as s,T as t,$3 as u,yr as v,Fe as w,Sc as x,x as y,ip as z};
