function Ct(e,t){const a=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)a[o[l]]=!0;return t?l=>!!a[l.toLowerCase()]:l=>!!a[l]}function Be(e){if(le(e)){const t={};for(let a=0;a<e.length;a++){const o=e[a],l=Ve(o)?op(o):Be(o);if(l)for(const r in l)t[r]=l[r]}return t}else{if(Ve(e))return e;if(Pe(e))return e}}const tp=/;(?![^(]*\))/g,sp=/:([^]+)/,ap=/\/\*.*?\*\//gs;function op(e){const t={};return e.replace(ap,"").split(tp).forEach(a=>{if(a){const o=a.split(sp);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Ue(e){let t="";if(Ve(e))t=e;else if(le(e))for(let a=0;a<e.length;a++){const o=Ue(e[a]);o&&(t+=o+" ")}else if(Pe(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}function be(e){if(!e)return null;let{class:t,style:a}=e;return t&&!Ve(t)&&(e.class=Ue(t)),a&&(e.style=Be(a)),e}const lp="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",rp="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",ip=Ct(lp),cp=Ct(rp),up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pp=Ct(up);function Vi(e){return!!e||e===""}const qe=e=>Ve(e)?e:e==null?"":le(e)||Pe(e)&&(e.toString===Bi||!ce(e.toString))?JSON.stringify(e,ji,2):String(e),ji=(e,t)=>t&&t.__v_isRef?ji(e,t.value):Ft(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[o,l])=>(a[`${o} =>`]=l,a),{})}:Ui(t)?{[`Set(${t.size})`]:[...t.values()]}:Pe(t)&&!le(t)&&!Wi(t)?String(t):t,Me=Object.freeze({}),fs=Object.freeze([]),hn=()=>{},Hi=()=>!1,dp=/^on[^a-z]/,aa=e=>dp.test(e),Sa=e=>e.startsWith("onUpdate:"),Ke=Object.assign,rl=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},fp=Object.prototype.hasOwnProperty,ve=(e,t)=>fp.call(e,t),le=Array.isArray,Ft=e=>Wa(e)==="[object Map]",Ui=e=>Wa(e)==="[object Set]",ce=e=>typeof e=="function",Ve=e=>typeof e=="string",il=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",cl=e=>Pe(e)&&ce(e.then)&&ce(e.catch),Bi=Object.prototype.toString,Wa=e=>Bi.call(e),ul=e=>Wa(e).slice(8,-1),Wi=e=>Wa(e)==="[object Object]",pl=e=>Ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_a=Ct(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hp=Ct("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Ka=e=>{const t=Object.create(null);return a=>t[a]||(t[a]=e(a))},mp=/-(\w)/g,Yn=Ka(e=>e.replace(mp,(t,a)=>a?a.toUpperCase():"")),vp=/\B([A-Z])/g,lt=Ka(e=>e.replace(vp,"-$1").toLowerCase()),qt=Ka(e=>e.charAt(0).toUpperCase()+e.slice(1)),At=Ka(e=>e?`on${qt(e)}`:""),Ks=(e,t)=>!Object.is(e,t),kt=(e,t)=>{for(let a=0;a<e.length;a++)e[a](t)},Ca=(e,t,a)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:a})},Pa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Jl;const Ki=()=>Jl||(Jl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ta(e,...t){console.warn(`[Vue warn] ${e}`,...t)}let bn;class zi{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=bn,!t&&bn&&(this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}run(t){if(this.active){const a=bn;try{return bn=this,t()}finally{bn=a}}else Ta("cannot run an inactive effect scope.")}on(){bn=this}off(){bn=this.parent}stop(t){if(this.active){let a,o;for(a=0,o=this.effects.length;a<o;a++)this.effects[a].stop();for(a=0,o=this.cleanups.length;a<o;a++)this.cleanups[a]();if(this.scopes)for(a=0,o=this.scopes.length;a<o;a++)this.scopes[a].stop(!0);if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this.active=!1}}}function KR(e){return new zi(e)}function kp(e,t=bn){t&&t.active&&t.effects.push(e)}function _p(){return bn}function gp(e){bn?bn.cleanups.push(e):Ta("onScopeDispose() is called when there is no active effect scope to be associated with.")}const dl=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qi=e=>(e.w&$t)>0,Yi=e=>(e.n&$t)>0,yp=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=$t},bp=e=>{const{deps:t}=e;if(t.length){let a=0;for(let o=0;o<t.length;o++){const l=t[o];qi(l)&&!Yi(l)?l.delete(e):t[a++]=l,l.w&=~$t,l.n&=~$t}t.length=a}},Eo=new WeakMap;let Ls=0,$t=1;const So=30;let un;const Vt=Symbol("iterate"),Co=Symbol("Map key iterate");class fl{constructor(t,a=null,o){this.fn=t,this.scheduler=a,this.active=!0,this.deps=[],this.parent=void 0,kp(this,o)}run(){if(!this.active)return this.fn();let t=un,a=gt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=un,un=this,gt=!0,$t=1<<++Ls,Ls<=So?yp(this):Ql(this),this.fn()}finally{Ls<=So&&bp(this),$t=1<<--Ls,un=this.parent,gt=a,this.parent=void 0,this.deferStop&&this.stop()}}stop(){un===this?this.deferStop=!0:this.active&&(Ql(this),this.onStop&&this.onStop(),this.active=!1)}}function Ql(e){const{deps:t}=e;if(t.length){for(let a=0;a<t.length;a++)t[a].delete(e);t.length=0}}let gt=!0;const Zi=[];function Xt(){Zi.push(gt),gt=!1}function es(){const e=Zi.pop();gt=e===void 0?!0:e}function Rn(e,t,a){if(gt&&un){let o=Eo.get(e);o||Eo.set(e,o=new Map);let l=o.get(a);l||o.set(a,l=dl()),Gi(l,{effect:un,target:e,type:t,key:a})}}function Gi(e,t){let a=!1;Ls<=So?Yi(e)||(e.n|=$t,a=!qi(e)):a=!e.has(un),a&&(e.add(un),un.deps.push(e),un.onTrack&&un.onTrack(Object.assign({effect:un},t)))}function rt(e,t,a,o,l,r){const i=Eo.get(e);if(!i)return;let c=[];if(t==="clear")c=[...i.values()];else if(a==="length"&&le(e)){const p=Pa(o);i.forEach((f,d)=>{(d==="length"||d>=p)&&c.push(f)})}else switch(a!==void 0&&c.push(i.get(a)),t){case"add":le(e)?pl(a)&&c.push(i.get("length")):(c.push(i.get(Vt)),Ft(e)&&c.push(i.get(Co)));break;case"delete":le(e)||(c.push(i.get(Vt)),Ft(e)&&c.push(i.get(Co)));break;case"set":Ft(e)&&c.push(i.get(Vt));break}const u={target:e,type:t,key:a,newValue:o,oldValue:l,oldTarget:r};if(c.length===1)c[0]&&Po(c[0],u);else{const p=[];for(const f of c)f&&p.push(...f);Po(dl(p),u)}}function Po(e,t){const a=le(e)?e:[...e];for(const o of a)o.computed&&Xl(o,t);for(const o of a)o.computed||Xl(o,t)}function Xl(e,t){(e!==un||e.allowRecurse)&&(e.onTrigger&&e.onTrigger(Ke({effect:e},t)),e.scheduler?e.scheduler():e.run())}const wp=Ct("__proto__,__v_isRef,__isVue"),Ji=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(il)),xp=za(),$p=za(!1,!0),Rp=za(!0),Ep=za(!0,!0),er=Sp();function Sp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...a){const o=de(this);for(let r=0,i=this.length;r<i;r++)Rn(o,"get",r+"");const l=o[t](...a);return l===-1||l===!1?o[t](...a.map(de)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...a){Xt();const o=de(this)[t].apply(this,a);return es(),o}}),e}function za(e=!1,t=!1){return function(o,l,r){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&r===(e?t?oc:ac:t?sc:tc).get(o))return o;const i=le(o);if(!e&&i&&ve(er,l))return Reflect.get(er,l,r);const c=Reflect.get(o,l,r);return(il(l)?Ji.has(l):wp(l))||(e||Rn(o,"get",l),t)?c:xe(c)?i&&pl(l)?c:c.value:Pe(c)?e?zn(c):tn(c):c}}const Cp=Qi(),Pp=Qi(!0);function Qi(e=!1){return function(a,o,l,r){let i=a[o];if(Rt(i)&&xe(i)&&!xe(l))return!1;if(!e&&(!Oa(l)&&!Rt(l)&&(i=de(i),l=de(l)),!le(a)&&xe(i)&&!xe(l)))return i.value=l,!0;const c=le(a)&&pl(o)?Number(o)<a.length:ve(a,o),u=Reflect.set(a,o,l,r);return a===de(r)&&(c?Ks(l,i)&&rt(a,"set",o,l,i):rt(a,"add",o,l)),u}}function Tp(e,t){const a=ve(e,t),o=e[t],l=Reflect.deleteProperty(e,t);return l&&a&&rt(e,"delete",t,void 0,o),l}function Op(e,t){const a=Reflect.has(e,t);return(!il(t)||!Ji.has(t))&&Rn(e,"has",t),a}function Ap(e){return Rn(e,"iterate",le(e)?"length":Vt),Reflect.ownKeys(e)}const Xi={get:xp,set:Cp,deleteProperty:Tp,has:Op,ownKeys:Ap},ec={get:Rp,set(e,t){return Ta(`Set operation on key "${String(t)}" failed: target is readonly.`,e),!0},deleteProperty(e,t){return Ta(`Delete operation on key "${String(t)}" failed: target is readonly.`,e),!0}},Mp=Ke({},Xi,{get:$p,set:Pp}),Ip=Ke({},ec,{get:Ep}),hl=e=>e,qa=e=>Reflect.getPrototypeOf(e);function ca(e,t,a=!1,o=!1){e=e.__v_raw;const l=de(e),r=de(t);a||(t!==r&&Rn(l,"get",t),Rn(l,"get",r));const{has:i}=qa(l),c=o?hl:a?vl:zs;if(i.call(l,t))return c(e.get(t));if(i.call(l,r))return c(e.get(r));e!==l&&e.get(t)}function ua(e,t=!1){const a=this.__v_raw,o=de(a),l=de(e);return t||(e!==l&&Rn(o,"has",e),Rn(o,"has",l)),e===l?a.has(e):a.has(e)||a.has(l)}function pa(e,t=!1){return e=e.__v_raw,!t&&Rn(de(e),"iterate",Vt),Reflect.get(e,"size",e)}function nr(e){e=de(e);const t=de(this);return qa(t).has.call(t,e)||(t.add(e),rt(t,"add",e,e)),this}function tr(e,t){t=de(t);const a=de(this),{has:o,get:l}=qa(a);let r=o.call(a,e);r?nc(a,o,e):(e=de(e),r=o.call(a,e));const i=l.call(a,e);return a.set(e,t),r?Ks(t,i)&&rt(a,"set",e,t,i):rt(a,"add",e,t),this}function sr(e){const t=de(this),{has:a,get:o}=qa(t);let l=a.call(t,e);l?nc(t,a,e):(e=de(e),l=a.call(t,e));const r=o?o.call(t,e):void 0,i=t.delete(e);return l&&rt(t,"delete",e,void 0,r),i}function ar(){const e=de(this),t=e.size!==0,a=Ft(e)?new Map(e):new Set(e),o=e.clear();return t&&rt(e,"clear",void 0,void 0,a),o}function da(e,t){return function(o,l){const r=this,i=r.__v_raw,c=de(i),u=t?hl:e?vl:zs;return!e&&Rn(c,"iterate",Vt),i.forEach((p,f)=>o.call(l,u(p),u(f),r))}}function fa(e,t,a){return function(...o){const l=this.__v_raw,r=de(l),i=Ft(r),c=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,p=l[e](...o),f=a?hl:t?vl:zs;return!t&&Rn(r,"iterate",u?Co:Vt),{next(){const{value:d,done:h}=p.next();return h?{value:d,done:h}:{value:c?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function dt(e){return function(...t){{const a=t[0]?`on key "${t[0]}" `:"";console.warn(`${qt(e)} operation ${a}failed: target is readonly.`,de(this))}return e==="delete"?!1:this}}function Lp(){const e={get(r){return ca(this,r)},get size(){return pa(this)},has:ua,add:nr,set:tr,delete:sr,clear:ar,forEach:da(!1,!1)},t={get(r){return ca(this,r,!1,!0)},get size(){return pa(this)},has:ua,add:nr,set:tr,delete:sr,clear:ar,forEach:da(!1,!0)},a={get(r){return ca(this,r,!0)},get size(){return pa(this,!0)},has(r){return ua.call(this,r,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:da(!0,!1)},o={get(r){return ca(this,r,!0,!0)},get size(){return pa(this,!0)},has(r){return ua.call(this,r,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:da(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=fa(r,!1,!1),a[r]=fa(r,!0,!1),t[r]=fa(r,!1,!0),o[r]=fa(r,!0,!0)}),[e,a,t,o]}const[Dp,Np,Fp,Vp]=Lp();function Ya(e,t){const a=t?e?Vp:Fp:e?Np:Dp;return(o,l,r)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(ve(a,l)&&l in o?a:o,l,r)}const jp={get:Ya(!1,!1)},Hp={get:Ya(!1,!0)},Up={get:Ya(!0,!1)},Bp={get:Ya(!0,!0)};function nc(e,t,a){const o=de(a);if(o!==a&&t.call(e,o)){const l=ul(e);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const tc=new WeakMap,sc=new WeakMap,ac=new WeakMap,oc=new WeakMap;function Wp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kp(e){return e.__v_skip||!Object.isExtensible(e)?0:Wp(ul(e))}function tn(e){return Rt(e)?e:Za(e,!1,Xi,jp,tc)}function zp(e){return Za(e,!1,Mp,Hp,sc)}function zn(e){return Za(e,!0,ec,Up,ac)}function ps(e){return Za(e,!0,Ip,Bp,oc)}function Za(e,t,a,o,l){if(!Pe(e))return console.warn(`value cannot be made reactive: ${String(e)}`),e;if(e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=l.get(e);if(r)return r;const i=Kp(e);if(i===0)return e;const c=new Proxy(e,i===2?o:a);return l.set(e,c),c}function jt(e){return Rt(e)?jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function Oa(e){return!!(e&&e.__v_isShallow)}function Aa(e){return jt(e)||Rt(e)}function de(e){const t=e&&e.__v_raw;return t?de(t):e}function ml(e){return Ca(e,"__v_skip",!0),e}const zs=e=>Pe(e)?tn(e):e,vl=e=>Pe(e)?zn(e):e;function kl(e){gt&&un&&(e=de(e),Gi(e.dep||(e.dep=dl()),{target:e,type:"get",key:"value"}))}function _l(e,t){e=de(e),e.dep&&Po(e.dep,{target:e,type:"set",key:"value",newValue:t})}function xe(e){return!!(e&&e.__v_isRef===!0)}function ne(e){return lc(e,!1)}function Zn(e){return lc(e,!0)}function lc(e,t){return xe(e)?e:new qp(e,t)}class qp{constructor(t,a){this.__v_isShallow=a,this.dep=void 0,this.__v_isRef=!0,this._rawValue=a?t:de(t),this._value=a?t:zs(t)}get value(){return kl(this),this._value}set value(t){const a=this.__v_isShallow||Oa(t)||Rt(t);t=a?t:de(t),Ks(t,this._rawValue)&&(this._rawValue=t,this._value=a?t:zs(t),_l(this,t))}}function w(e){return xe(e)?e.value:e}const Yp={get:(e,t,a)=>w(Reflect.get(e,t,a)),set:(e,t,a,o)=>{const l=e[t];return xe(l)&&!xe(a)?(l.value=a,!0):Reflect.set(e,t,a,o)}};function rc(e){return jt(e)?e:new Proxy(e,Yp)}class Zp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:a,set:o}=t(()=>kl(this),()=>_l(this));this._get=a,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function ic(e){return new Zp(e)}function Gp(e){Aa(e)||console.warn("toRefs() expects a reactive object but received a plain one.");const t=le(e)?new Array(e.length):{};for(const a in e)t[a]=Qp(e,a);return t}class Jp{constructor(t,a,o){this._object=t,this._key=a,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Qp(e,t,a){const o=e[t];return xe(o)?o:new Jp(e,t,a)}var cc;class Xp{constructor(t,a,o,l){this._setter=a,this.dep=void 0,this.__v_isRef=!0,this[cc]=!1,this._dirty=!0,this.effect=new fl(t,()=>{this._dirty||(this._dirty=!0,_l(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const t=de(this);return kl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}cc="__v_isReadonly";function ed(e,t,a=!1){let o,l;const r=ce(e);r?(o=e,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=e.get,l=e.set);const i=new Xp(o,l,r||!l,a);return t&&!a&&(i.effect.onTrack=t.onTrack,i.effect.onTrigger=t.onTrigger),i}const Ht=[];function ga(e){Ht.push(e)}function ya(){Ht.pop()}function L(e,...t){Xt();const a=Ht.length?Ht[Ht.length-1].component:null,o=a&&a.appContext.config.warnHandler,l=nd();if(o)ot(o,a,11,[e+t.join(""),a&&a.proxy,l.map(({vnode:r})=>`at <${oo(a,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${e}`,...t];l.length&&r.push(`
`,...td(l)),console.warn(...r)}es()}function nd(){let e=Ht[Ht.length-1];if(!e)return[];const t=[];for(;e;){const a=t[0];a&&a.vnode===e?a.recurseCount++:t.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return t}function td(e){const t=[];return e.forEach((a,o)=>{t.push(...o===0?[]:[`
`],...sd(a))}),t}function sd({vnode:e,recurseCount:t}){const a=t>0?`... (${t} recursive calls)`:"",o=e.component?e.component.parent==null:!1,l=` at <${oo(e.component,e.type,o)}`,r=">"+a;return e.props?[l,...ad(e.props),r]:[l+r]}function ad(e){const t=[],a=Object.keys(e);return a.slice(0,3).forEach(o=>{t.push(...uc(o,e[o]))}),a.length>3&&t.push(" ..."),t}function uc(e,t,a){return Ve(t)?(t=JSON.stringify(t),a?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?a?t:[`${e}=${t}`]:xe(t)?(t=uc(e,de(t.value),!0),a?t:[`${e}=Ref<`,t,">"]):ce(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=de(t),a?t:[`${e}=`,t])}const gl={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ot(e,t,a,o){let l;try{l=o?e(...o):e()}catch(r){Ga(r,t,a)}return l}function Vn(e,t,a,o){if(ce(e)){const r=ot(e,t,a,o);return r&&cl(r)&&r.catch(i=>{Ga(i,t,a)}),r}const l=[];for(let r=0;r<e.length;r++)l.push(Vn(e[r],t,a,o));return l}function Ga(e,t,a,o=!0){const l=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,c=gl[a];for(;r;){const p=r.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,i,c)===!1)return}r=r.parent}const u=t.appContext.config.errorHandler;if(u){ot(u,null,10,[e,i,c]);return}}od(e,a,l,o)}function od(e,t,a,o=!0){{const l=gl[t];if(a&&ga(a),L(`Unhandled error${l?` during execution of ${l}`:""}`),a&&ya(),o)throw e;console.error(e)}}let qs=!1,To=!1;const an=[];let Wn=0;const hs=[];let Bn=null,ht=0;const pc=Promise.resolve();let yl=null;const ld=100;function jn(e){const t=yl||pc;return e?t.then(this?e.bind(this):e):t}function rd(e){let t=Wn+1,a=an.length;for(;t<a;){const o=t+a>>>1;Ys(an[o])<e?t=o+1:a=o}return t}function Ja(e){(!an.length||!an.includes(e,qs&&e.allowRecurse?Wn+1:Wn))&&(e.id==null?an.push(e):an.splice(rd(e.id),0,e),dc())}function dc(){!qs&&!To&&(To=!0,yl=pc.then(mc))}function id(e){const t=an.indexOf(e);t>Wn&&an.splice(t,1)}function fc(e){le(e)?hs.push(...e):(!Bn||!Bn.includes(e,e.allowRecurse?ht+1:ht))&&hs.push(e),dc()}function or(e,t=qs?Wn+1:0){for(e=e||new Map;t<an.length;t++){const a=an[t];if(a&&a.pre){if(bl(e,a))continue;an.splice(t,1),t--,a()}}}function hc(e){if(hs.length){const t=[...new Set(hs)];if(hs.length=0,Bn){Bn.push(...t);return}for(Bn=t,e=e||new Map,Bn.sort((a,o)=>Ys(a)-Ys(o)),ht=0;ht<Bn.length;ht++)bl(e,Bn[ht])||Bn[ht]();Bn=null,ht=0}}const Ys=e=>e.id==null?1/0:e.id,cd=(e,t)=>{const a=Ys(e)-Ys(t);if(a===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return a};function mc(e){To=!1,qs=!0,e=e||new Map,an.sort(cd);const t=a=>bl(e,a);try{for(Wn=0;Wn<an.length;Wn++){const a=an[Wn];if(a&&a.active!==!1){if(t(a))continue;ot(a,null,14)}}}finally{Wn=0,an.length=0,hc(e),qs=!1,yl=null,(an.length||hs.length)&&mc(e)}}function bl(e,t){if(!e.has(t))e.set(t,1);else{const a=e.get(t);if(a>ld){const o=t.ownerInstance,l=o&&Js(o.type);return L(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else e.set(t,a+1)}}let yt=!1;const is=new Set;Ki().__VUE_HMR_RUNTIME__={createRecord:co(vc),rerender:co(dd),reload:co(fd)};const Yt=new Map;function ud(e){const t=e.type.__hmrId;let a=Yt.get(t);a||(vc(t,e.type),a=Yt.get(t)),a.instances.add(e)}function pd(e){Yt.get(e.type.__hmrId).instances.delete(e)}function vc(e,t){return Yt.has(e)?!1:(Yt.set(e,{initialDef:Vs(t),instances:new Set}),!0)}function Vs(e){return Yc(e)?e.__vccOpts:e}function dd(e,t){const a=Yt.get(e);a&&(a.initialDef.render=t,[...a.instances].forEach(o=>{t&&(o.render=t,Vs(o.type).render=t),o.renderCache=[],yt=!0,o.update(),yt=!1}))}function fd(e,t){const a=Yt.get(e);if(!a)return;t=Vs(t),lr(a.initialDef,t);const o=[...a.instances];for(const l of o){const r=Vs(l.type);is.has(r)||(r!==a.initialDef&&lr(r,t),is.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(is.add(r),l.ceReload(t.styles),is.delete(r)):l.parent?Ja(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}fc(()=>{for(const l of o)is.delete(Vs(l.type))})}function lr(e,t){Ke(e,t);for(const a in e)a!=="__file"&&!(a in t)&&delete e[a]}function co(e){return(t,a)=>{try{return e(t,a)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Kn,Ds=[],Oo=!1;function oa(e,...t){Kn?Kn.emit(e,...t):Oo||Ds.push({event:e,args:t})}function kc(e,t){var a,o;Kn=e,Kn?(Kn.enabled=!0,Ds.forEach(({event:l,args:r})=>Kn.emit(l,...r)),Ds=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(a=window.navigator)===null||a===void 0?void 0:a.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{kc(r,t)}),setTimeout(()=>{Kn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Oo=!0,Ds=[])},3e3)):(Oo=!0,Ds=[])}function hd(e,t){oa("app:init",e,t,{Fragment:Se,Text:ra,Comment:mn,Static:ba})}function md(e){oa("app:unmount",e)}const Ao=wl("component:added"),_c=wl("component:updated"),vd=wl("component:removed"),kd=e=>{Kn&&typeof Kn.cleanupBuffer=="function"&&!Kn.cleanupBuffer(e)&&vd(e)};function wl(e){return t=>{oa(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const _d=gc("perf:start"),gd=gc("perf:end");function gc(e){return(t,a,o)=>{oa(e,t.appContext.app,t.uid,t,a,o)}}function yd(e,t,a){oa("component:emit",e.appContext.app,e,t,a)}function bd(e,t,...a){if(e.isUnmounted)return;const o=e.vnode.props||Me;{const{emitsOptions:f,propsOptions:[d]}=e;if(f)if(!(t in f))(!d||!(At(t)in d))&&L(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${At(t)}" prop.`);else{const h=f[t];ce(h)&&(h(...a)||L(`Invalid event arguments: event validation failed for event "${t}".`))}}let l=a;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in o){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:h}=o[f]||Me;h&&(l=a.map(v=>Ve(v)?v.trim():v)),d&&(l=a.map(Pa))}yd(e,t,l);{const f=t.toLowerCase();f!==t&&o[At(f)]&&L(`Event "${f}" is emitted in component ${oo(e,e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${lt(t)}" instead of "${t}".`)}let c,u=o[c=At(t)]||o[c=At(Yn(t))];!u&&r&&(u=o[c=At(lt(t))]),u&&Vn(u,e,6,l);const p=o[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Vn(p,e,6,l)}}function yc(e,t,a=!1){const o=t.emitsCache,l=o.get(e);if(l!==void 0)return l;const r=e.emits;let i={},c=!1;if(!ce(e)){const u=p=>{const f=yc(p,t,!0);f&&(c=!0,Ke(i,f))};!a&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!c?(Pe(e)&&o.set(e,null),null):(le(r)?r.forEach(u=>i[u]=null):Ke(i,r),Pe(e)&&o.set(e,i),i)}function Qa(e,t){return!e||!aa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(e,t[0].toLowerCase()+t.slice(1))||ve(e,lt(t))||ve(e,t))}let Ge=null,Xa=null;function Ma(e){const t=Ge;return Ge=e,Xa=e&&e.type.__scopeId||null,t}function wd(e){Xa=e}function xd(){Xa=null}function g(e,t=Ge,a){if(!t||e._n)return e;const o=(...l)=>{o._d&&_r(-1);const r=Ma(t);let i;try{i=e(...l)}finally{Ma(r),o._d&&_r(1)}return _c(t),i};return o._n=!0,o._c=!0,o._d=!0,o}let Mo=!1;function Ia(){Mo=!0}function uo(e){const{type:t,vnode:a,proxy:o,withProxy:l,props:r,propsOptions:[i],slots:c,attrs:u,emit:p,render:f,renderCache:d,data:h,setupState:v,ctx:k,inheritAttrs:y}=e;let x,P;const E=Ma(e);Mo=!1;try{if(a.shapeFlag&4){const U=l||o;x=Ln(f.call(U,U,d,r,v,h,k)),P=u}else{const U=t;u===r&&Ia(),x=Ln(U.length>1?U(r,{get attrs(){return Ia(),u},slots:c,emit:p}):U(r,null)),P=t.props?u:Rd(u)}}catch(U){Hs.length=0,Ga(U,e,1),x=b(mn)}let C=x,O;if(x.patchFlag>0&&x.patchFlag&2048&&([C,O]=$d(x)),P&&y!==!1){const U=Object.keys(P),{shapeFlag:H}=C;if(U.length){if(H&7)i&&U.some(Sa)&&(P=Ed(P,i)),C=it(C,P);else if(!Mo&&C.type!==mn){const Z=Object.keys(u),q=[],oe=[];for(let ie=0,ge=Z.length;ie<ge;ie++){const He=Z[ie];aa(He)?Sa(He)||q.push(He[2].toLowerCase()+He.slice(3)):oe.push(He)}oe.length&&L(`Extraneous non-props attributes (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),q.length&&L(`Extraneous non-emits event listeners (${q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return a.dirs&&(rr(C)||L("Runtime directive used on component with non-element root node. The directives will not function as intended."),C=it(C),C.dirs=C.dirs?C.dirs.concat(a.dirs):a.dirs),a.transition&&(rr(C)||L("Component inside <Transition> renders non-element root node that cannot be animated."),C.transition=a.transition),O?O(C):x=C,Ma(E),x}const $d=e=>{const t=e.children,a=e.dynamicChildren,o=bc(t);if(!o)return[e,void 0];const l=t.indexOf(o),r=a?a.indexOf(o):-1,i=c=>{t[l]=c,a&&(r>-1?a[r]=c:c.patchFlag>0&&(e.dynamicChildren=[...a,c]))};return[Ln(o),i]};function bc(e){let t;for(let a=0;a<e.length;a++){const o=e[a];if(Et(o)){if(o.type!==mn||o.children==="v-if"){if(t)return;t=o}}else return}return t}const Rd=e=>{let t;for(const a in e)(a==="class"||a==="style"||aa(a))&&((t||(t={}))[a]=e[a]);return t},Ed=(e,t)=>{const a={};for(const o in e)(!Sa(o)||!(o.slice(9)in t))&&(a[o]=e[o]);return a},rr=e=>e.shapeFlag&7||e.type===mn;function Sd(e,t,a){const{props:o,children:l,component:r}=e,{props:i,children:c,patchFlag:u}=t,p=r.emitsOptions;if((l||c)&&yt||t.dirs||t.transition)return!0;if(a&&u>=0){if(u&1024)return!0;if(u&16)return o?ir(o,i,p):!!i;if(u&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(i[h]!==o[h]&&!Qa(p,h))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:o===i?!1:o?i?ir(o,i,p):!0:!!i;return!1}function ir(e,t,a){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(t[r]!==e[r]&&!Qa(a,r))return!0}return!1}function Cd({vnode:e,parent:t},a){for(;t&&t.subTree===e;)(e=t.vnode).el=a,t=t.parent}const wc=e=>e.__isSuspense;function Pd(e,t){t&&t.pendingBranch?le(e)?t.effects.push(...e):t.effects.push(e):fc(e)}function xn(e,t){if(!Ye)L("provide() can only be used inside setup().");else{let a=Ye.provides;const o=Ye.parent&&Ye.parent.provides;o===a&&(a=Ye.provides=Object.create(o)),a[e]=t}}function W(e,t,a=!1){const o=Ye||Ge;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&e in l)return l[e];if(arguments.length>1)return a&&ce(t)?t.call(o.proxy):t;L(`injection "${String(e)}" not found.`)}else L("inject() can only be used inside setup() or functional components.")}function ws(e,t){return xl(e,null,t)}const ha={};function Fe(e,t,a){return ce(t)||L("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),xl(e,t,a)}function xl(e,t,{immediate:a,deep:o,flush:l,onTrack:r,onTrigger:i}=Me){t||(a!==void 0&&L('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&L('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=O=>{L("Invalid watch source: ",O,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},u=Ye;let p,f=!1,d=!1;if(xe(e)?(p=()=>e.value,f=Oa(e)):jt(e)?(p=()=>e,o=!0):le(e)?(d=!0,f=e.some(O=>jt(O)||Oa(O)),p=()=>e.map(O=>{if(xe(O))return O.value;if(jt(O))return Dt(O);if(ce(O))return ot(O,u,2);c(O)})):ce(e)?t?p=()=>ot(e,u,2):p=()=>{if(!(u&&u.isUnmounted))return h&&h(),Vn(e,u,3,[v])}:(p=hn,c(e)),t&&o){const O=p;p=()=>Dt(O())}let h,v=O=>{h=E.onStop=()=>{ot(O,u,4)}},k;if(Gs)if(v=hn,t?a&&Vn(t,u,3,[p(),d?[]:void 0,v]):p(),l==="sync"){const O=If();k=O.__watcherHandles||(O.__watcherHandles=[])}else return hn;let y=d?new Array(e.length).fill(ha):ha;const x=()=>{if(E.active)if(t){const O=E.run();(o||f||(d?O.some((U,H)=>Ks(U,y[H])):Ks(O,y)))&&(h&&h(),Vn(t,u,3,[O,y===ha?void 0:d&&y[0]===ha?[]:y,v]),y=O)}else E.run()};x.allowRecurse=!!t;let P;l==="sync"?P=x:l==="post"?P=()=>nn(x,u&&u.suspense):(x.pre=!0,u&&(x.id=u.uid),P=()=>Ja(x));const E=new fl(p,P);E.onTrack=r,E.onTrigger=i,t?a?x():y=E.run():l==="post"?nn(E.run.bind(E),u&&u.suspense):E.run();const C=()=>{E.stop(),u&&u.scope&&rl(u.scope.effects,E)};return k&&k.push(C),C}function Td(e,t,a){const o=this.proxy,l=Ve(e)?e.includes(".")?xc(o,e):()=>o[e]:e.bind(o,o);let r;ce(t)?r=t:(r=t.handler,a=t);const i=Ye;gs(this);const c=xl(l,r.bind(o),a);return i?gs(i):Bt(),c}function xc(e,t){const a=t.split(".");return()=>{let o=e;for(let l=0;l<a.length&&o;l++)o=o[a[l]];return o}}function Dt(e,t){if(!Pe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))Dt(e.value,t);else if(le(e))for(let a=0;a<e.length;a++)Dt(e[a],t);else if(Ui(e)||Ft(e))e.forEach(a=>{Dt(a,t)});else if(Wi(e))for(const a in e)Dt(e[a],t);return e}function $c(e,t){e.shapeFlag&6&&e.component?$c(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $e(e){return ce(e)?{setup:e,name:e.name}:e}const ms=e=>!!e.type.__asyncLoader,$l=e=>e.type.__isKeepAlive,Od={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const a=Pt(),o=a.ctx;if(!o.renderer)return()=>{const E=t.default&&t.default();return E&&E.length===1?E[0]:E};const l=new Map,r=new Set;let i=null;a.__v_cache=l;const c=a.suspense,{renderer:{p:u,m:p,um:f,o:{createElement:d}}}=o,h=d("div");o.activate=(E,C,O,U,H)=>{const Z=E.component;p(E,C,O,0,c),u(Z.vnode,E,C,O,Z,c,U,E.slotScopeIds,H),nn(()=>{Z.isDeactivated=!1,Z.a&&kt(Z.a);const q=E.props&&E.props.onVnodeMounted;q&&Sn(q,Z.parent,E)},c),Ao(Z)},o.deactivate=E=>{const C=E.component;p(E,h,null,1,c),nn(()=>{C.da&&kt(C.da);const O=E.props&&E.props.onVnodeUnmounted;O&&Sn(O,C.parent,E),C.isDeactivated=!0},c),Ao(C)};function v(E){po(E),f(E,a,c,!0)}function k(E){l.forEach((C,O)=>{const U=Js(C.type);U&&(!E||!E(U))&&y(O)})}function y(E){const C=l.get(E);!i||C.type!==i.type?v(C):i&&po(i),l.delete(E),r.delete(E)}Fe(()=>[e.include,e.exclude],([E,C])=>{E&&k(O=>Ns(E,O)),C&&k(O=>!Ns(C,O))},{flush:"post",deep:!0});let x=null;const P=()=>{x!=null&&l.set(x,fo(a.subTree))};return no(P),Sc(P),Cc(()=>{l.forEach(E=>{const{subTree:C,suspense:O}=a,U=fo(C);if(E.type===U.type){po(U);const H=U.component.da;H&&nn(H,O);return}v(E)})}),()=>{if(x=null,!t.default)return null;const E=t.default(),C=E[0];if(E.length>1)return L("KeepAlive should contain exactly one component child."),i=null,E;if(!Et(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return i=null,C;let O=fo(C);const U=O.type,H=Js(ms(O)?O.type.__asyncResolved||{}:U),{include:Z,exclude:q,max:oe}=e;if(Z&&(!H||!Ns(Z,H))||q&&H&&Ns(q,H))return i=O,C;const ie=O.key==null?U:O.key,ge=l.get(ie);return O.el&&(O=it(O),C.shapeFlag&128&&(C.ssContent=O)),x=ie,ge?(O.el=ge.el,O.component=ge.component,O.transition&&$c(O,O.transition),O.shapeFlag|=512,r.delete(ie),r.add(ie)):(r.add(ie),oe&&r.size>parseInt(oe,10)&&y(r.values().next().value)),O.shapeFlag|=256,i=O,wc(C.type)?C:O}}},Rc=Od;function Ns(e,t){return le(e)?e.some(a=>Ns(a,t)):Ve(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Ad(e,t){Ec(e,"a",t)}function Md(e,t){Ec(e,"da",t)}function Ec(e,t,a=Ye){const o=e.__wdc||(e.__wdc=()=>{let l=a;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(eo(t,o,a),a){let l=a.parent;for(;l&&l.parent;)$l(l.parent.vnode)&&Id(o,t,a,l),l=l.parent}}function Id(e,t,a,o){const l=eo(t,e,o,!0);to(()=>{rl(o[t],l)},a)}function po(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function fo(e){return e.shapeFlag&128?e.ssContent:e}function eo(e,t,a=Ye,o=!1){if(a){const l=a[e]||(a[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(a.isUnmounted)return;Xt(),gs(a);const c=Vn(t,a,e,i);return Bt(),es(),c});return o?l.unshift(r):l.push(r),r}else{const l=At(gl[e].replace(/ hook$/,""));L(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const ct=e=>(t,a=Ye)=>(!Gs||e==="sp")&&eo(e,(...o)=>t(...o),a),Ld=ct("bm"),no=ct("m"),Dd=ct("bu"),Sc=ct("u"),Cc=ct("bum"),to=ct("um"),Nd=ct("sp"),Fd=ct("rtg"),Vd=ct("rtc");function jd(e,t=Ye){eo("ec",e,t)}function Pc(e){hp(e)&&L("Do not use built-in directive ids as custom directive id: "+e)}function De(e,t){const a=Ge;if(a===null)return L("withDirectives can only be used inside render functions."),e;const o=ao(a)||a.proxy,l=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,c,u,p=Me]=t[r];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&Dt(c),l.push({dir:i,instance:o,value:c,oldValue:void 0,arg:u,modifiers:p}))}return e}function Tt(e,t,a,o){const l=e.dirs,r=t&&t.dirs;for(let i=0;i<l.length;i++){const c=l[i];r&&(c.oldValue=r[i].value);let u=c.dir[o];u&&(Xt(),Vn(u,a,8,[e.el,c,e,t]),es())}}const Io="components",Hd="directives";function Zt(e,t){return Tc(Io,e,!0,t)||e}const Ud=Symbol();function vn(e){return Tc(Hd,e)}function Tc(e,t,a=!0,o=!1){const l=Ge||Ye;if(l){const r=l.type;if(e===Io){const c=Js(r,!1);if(c&&(c===t||c===Yn(t)||c===qt(Yn(t))))return r}const i=cr(l[e]||r[e],t)||cr(l.appContext[e],t);if(!i&&o)return r;if(a&&!i){const c=e===Io?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";L(`Failed to resolve ${e.slice(0,-1)}: ${t}${c}`)}return i}else L(`resolve${qt(e.slice(0,-1))} can only be used in render() or setup().`)}function cr(e,t){return e&&(e[t]||e[Yn(t)]||e[qt(Yn(t))])}function la(e,t,a,o){let l;const r=a&&a[o];if(le(e)||Ve(e)){l=new Array(e.length);for(let i=0,c=e.length;i<c;i++)l[i]=t(e[i],i,void 0,r&&r[i])}else if(typeof e=="number"){Number.isInteger(e)||L(`The v-for range expect an integer value but got ${e}.`),l=new Array(e);for(let i=0;i<e;i++)l[i]=t(i+1,i,void 0,r&&r[i])}else if(Pe(e))if(e[Symbol.iterator])l=Array.from(e,(i,c)=>t(i,c,void 0,r&&r[c]));else{const i=Object.keys(e);l=new Array(i.length);for(let c=0,u=i.length;c<u;c++){const p=i[c];l[c]=t(e[p],p,c,r&&r[c])}}else l=[];return a&&(a[o]=l),l}function kn(e,t,a={},o,l){if(Ge.isCE||Ge.parent&&ms(Ge.parent)&&Ge.parent.isCE)return t!=="default"&&(a.name=t),b("slot",a,o&&o());let r=e[t];r&&r.length>1&&(L("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),$();const i=r&&Oc(r(a)),c=z(Se,{key:a.key||i&&i.key||`_${t}`},i||(o?o():[]),i&&e._===1?64:-2);return!l&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function Oc(e){return e.some(t=>Et(t)?!(t.type===mn||t.type===Se&&!Oc(t.children)):!0)?e:null}const Lo=e=>e?Kc(e)?ao(e)||e.proxy:Lo(e.parent):null,Ut=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>ps(e.props),$attrs:e=>ps(e.attrs),$slots:e=>ps(e.slots),$refs:e=>ps(e.refs),$parent:e=>Lo(e.parent),$root:e=>Lo(e.root),$emit:e=>e.emit,$options:e=>El(e),$forceUpdate:e=>e.f||(e.f=()=>Ja(e.update)),$nextTick:e=>e.n||(e.n=jn.bind(e.proxy)),$watch:e=>Td.bind(e)}),Rl=e=>e==="_"||e==="$",ho=(e,t)=>e!==Me&&!e.__isScriptSetup&&ve(e,t),Ac={get({_:e},t){const{ctx:a,setupState:o,data:l,props:r,accessCache:i,type:c,appContext:u}=e;if(t==="__isVue")return!0;let p;if(t[0]!=="$"){const v=i[t];if(v!==void 0)switch(v){case 1:return o[t];case 2:return l[t];case 4:return a[t];case 3:return r[t]}else{if(ho(o,t))return i[t]=1,o[t];if(l!==Me&&ve(l,t))return i[t]=2,l[t];if((p=e.propsOptions[0])&&ve(p,t))return i[t]=3,r[t];if(a!==Me&&ve(a,t))return i[t]=4,a[t];Do&&(i[t]=0)}}const f=Ut[t];let d,h;if(f)return t==="$attrs"&&(Rn(e,"get",t),Ia()),f(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(a!==Me&&ve(a,t))return i[t]=4,a[t];if(h=u.config.globalProperties,ve(h,t))return h[t];Ge&&(!Ve(t)||t.indexOf("__v")!==0)&&(l!==Me&&Rl(t[0])&&ve(l,t)?L(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):e===Ge&&L(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`))},set({_:e},t,a){const{data:o,setupState:l,ctx:r}=e;return ho(l,t)?(l[t]=a,!0):l.__isScriptSetup&&ve(l,t)?(L(`Cannot mutate <script setup> binding "${t}" from Options API.`),!1):o!==Me&&ve(o,t)?(o[t]=a,!0):ve(e.props,t)?(L(`Attempting to mutate prop "${t}". Props are readonly.`),!1):t[0]==="$"&&t.slice(1)in e?(L(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`),!1):(t in e.appContext.config.globalProperties?Object.defineProperty(r,t,{enumerable:!0,configurable:!0,value:a}):r[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:o,appContext:l,propsOptions:r}},i){let c;return!!a[i]||e!==Me&&ve(e,i)||ho(t,i)||(c=r[0])&&ve(c,i)||ve(o,i)||ve(Ut,i)||ve(l.config.globalProperties,i)},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:ve(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}};Ac.ownKeys=e=>(L("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(e));function Bd(e){const t={};return Object.defineProperty(t,"_",{configurable:!0,enumerable:!1,get:()=>e}),Object.keys(Ut).forEach(a=>{Object.defineProperty(t,a,{configurable:!0,enumerable:!1,get:()=>Ut[a](e),set:hn})}),t}function Wd(e){const{ctx:t,propsOptions:[a]}=e;a&&Object.keys(a).forEach(o=>{Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>e.props[o],set:hn})})}function Kd(e){const{ctx:t,setupState:a}=e;Object.keys(de(a)).forEach(o=>{if(!a.__isScriptSetup){if(Rl(o[0])){L(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a[o],set:hn})}})}function zd(){const e=Object.create(null);return(t,a)=>{e[a]?L(`${t} property "${a}" is already defined in ${e[a]}.`):e[a]=t}}let Do=!0;function qd(e){const t=El(e),a=e.proxy,o=e.ctx;Do=!1,t.beforeCreate&&ur(t.beforeCreate,e,"bc");const{data:l,computed:r,methods:i,watch:c,provide:u,inject:p,created:f,beforeMount:d,mounted:h,beforeUpdate:v,updated:k,activated:y,deactivated:x,beforeDestroy:P,beforeUnmount:E,destroyed:C,unmounted:O,render:U,renderTracked:H,renderTriggered:Z,errorCaptured:q,serverPrefetch:oe,expose:ie,inheritAttrs:ge,components:He,directives:Xe,filters:en}=t,Te=zd();{const[K]=e.propsOptions;if(K)for(const ae in K)Te("Props",ae)}if(p&&Yd(p,o,Te,e.appContext.config.unwrapInjectedRef),i)for(const K in i){const ae=i[K];ce(ae)?(Object.defineProperty(o,K,{value:ae.bind(a),configurable:!0,enumerable:!0,writable:!0}),Te("Methods",K)):L(`Method "${K}" has type "${typeof ae}" in the component definition. Did you reference the function correctly?`)}if(l){ce(l)||L("The data option must be a function. Plain object usage is no longer supported.");const K=l.call(a,a);if(cl(K)&&L("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Pe(K))L("data() should return an object.");else{e.data=tn(K);for(const ae in K)Te("Data",ae),Rl(ae[0])||Object.defineProperty(o,ae,{configurable:!0,enumerable:!0,get:()=>K[ae],set:hn})}}if(Do=!0,r)for(const K in r){const ae=r[K],fe=ce(ae)?ae.bind(a,a):ce(ae.get)?ae.get.bind(a,a):hn;fe===hn&&L(`Computed property "${K}" has no getter.`);const Oe=!ce(ae)&&ce(ae.set)?ae.set.bind(a):()=>{L(`Write operation failed: computed property "${K}" is readonly.`)},gn=T({get:fe,set:Oe});Object.defineProperty(o,K,{enumerable:!0,configurable:!0,get:()=>gn.value,set:sn=>gn.value=sn}),Te("Computed",K)}if(c)for(const K in c)Mc(c[K],o,a,K);if(u){const K=ce(u)?u.call(a):u;Reflect.ownKeys(K).forEach(ae=>{xn(ae,K[ae])})}f&&ur(f,e,"c");function je(K,ae){le(ae)?ae.forEach(fe=>K(fe.bind(a))):ae&&K(ae.bind(a))}if(je(Ld,d),je(no,h),je(Dd,v),je(Sc,k),je(Ad,y),je(Md,x),je(jd,q),je(Vd,H),je(Fd,Z),je(Cc,E),je(to,O),je(Nd,oe),le(ie))if(ie.length){const K=e.exposed||(e.exposed={});ie.forEach(ae=>{Object.defineProperty(K,ae,{get:()=>a[ae],set:fe=>a[ae]=fe})})}else e.exposed||(e.exposed={});U&&e.render===hn&&(e.render=U),ge!=null&&(e.inheritAttrs=ge),He&&(e.components=He),Xe&&(e.directives=Xe)}function Yd(e,t,a=hn,o=!1){le(e)&&(e=No(e));for(const l in e){const r=e[l];let i;Pe(r)?"default"in r?i=W(r.from||l,r.default,!0):i=W(r.from||l):i=W(r),xe(i)?o?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>i.value,set:c=>i.value=c}):(L(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),t[l]=i):t[l]=i,a("Inject",l)}}function ur(e,t,a){Vn(le(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,a)}function Mc(e,t,a,o){const l=o.includes(".")?xc(a,o):()=>a[o];if(Ve(e)){const r=t[e];ce(r)?Fe(l,r):L(`Invalid watch handler specified by key "${e}"`,r)}else if(ce(e))Fe(l,e.bind(a));else if(Pe(e))if(le(e))e.forEach(r=>Mc(r,t,a,o));else{const r=ce(e.handler)?e.handler.bind(a):t[e.handler];ce(r)?Fe(l,r,e):L(`Invalid watch handler specified by key "${e.handler}"`,r)}else L(`Invalid watch option: "${o}"`,e)}function El(e){const t=e.type,{mixins:a,extends:o}=t,{mixins:l,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,c=r.get(t);let u;return c?u=c:!l.length&&!a&&!o?u=t:(u={},l.length&&l.forEach(p=>La(u,p,i,!0)),La(u,t,i)),Pe(t)&&r.set(t,u),u}function La(e,t,a,o=!1){const{mixins:l,extends:r}=t;r&&La(e,r,a,!0),l&&l.forEach(i=>La(e,i,a,!0));for(const i in t)if(o&&i==="expose")L('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=Zd[i]||a&&a[i];e[i]=c?c(e[i],t[i]):t[i]}return e}const Zd={data:pr,props:Mt,emits:Mt,methods:Mt,computed:Mt,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Mt,directives:Mt,watch:Jd,provide:pr,inject:Gd};function pr(e,t){return t?e?function(){return Ke(ce(e)?e.call(this,this):e,ce(t)?t.call(this,this):t)}:t:e}function Gd(e,t){return Mt(No(e),No(t))}function No(e){if(le(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function rn(e,t){return e?[...new Set([].concat(e,t))]:t}function Mt(e,t){return e?Ke(Ke(Object.create(null),e),t):t}function Jd(e,t){if(!e)return t;if(!t)return e;const a=Ke(Object.create(null),e);for(const o in t)a[o]=rn(e[o],t[o]);return a}function Qd(e,t,a,o=!1){const l={},r={};Ca(r,so,1),e.propsDefaults=Object.create(null),Ic(e,t,l,r);for(const i in e.propsOptions[0])i in l||(l[i]=void 0);Dc(t||{},l,e),a?e.props=o?l:zp(l):e.type.props?e.props=l:e.props=r,e.attrs=r}function Xd(e){for(;e;){if(e.type.__hmrId)return!0;e=e.parent}}function ef(e,t,a,o){const{props:l,attrs:r,vnode:{patchFlag:i}}=e,c=de(l),[u]=e.propsOptions;let p=!1;if(!Xd(e)&&(o||i>0)&&!(i&16)){if(i&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(Qa(e.emitsOptions,h))continue;const v=t[h];if(u)if(ve(r,h))v!==r[h]&&(r[h]=v,p=!0);else{const k=Yn(h);l[k]=Fo(u,c,k,v,e,!1)}else v!==r[h]&&(r[h]=v,p=!0)}}}else{Ic(e,t,l,r)&&(p=!0);let f;for(const d in c)(!t||!ve(t,d)&&((f=lt(d))===d||!ve(t,f)))&&(u?a&&(a[d]!==void 0||a[f]!==void 0)&&(l[d]=Fo(u,c,d,void 0,e,!0)):delete l[d]);if(r!==c)for(const d in r)(!t||!ve(t,d))&&(delete r[d],p=!0)}p&&rt(e,"set","$attrs"),Dc(t||{},l,e)}function Ic(e,t,a,o){const[l,r]=e.propsOptions;let i=!1,c;if(t)for(let u in t){if(_a(u))continue;const p=t[u];let f;l&&ve(l,f=Yn(u))?!r||!r.includes(f)?a[f]=p:(c||(c={}))[f]=p:Qa(e.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,i=!0)}if(r){const u=de(a),p=c||Me;for(let f=0;f<r.length;f++){const d=r[f];a[d]=Fo(l,u,d,p[d],e,!ve(p,d))}}return i}function Fo(e,t,a,o,l,r){const i=e[a];if(i!=null){const c=ve(i,"default");if(c&&o===void 0){const u=i.default;if(i.type!==Function&&ce(u)){const{propsDefaults:p}=l;a in p?o=p[a]:(gs(l),o=p[a]=u.call(null,t),Bt())}else o=u}i[0]&&(r&&!c?o=!1:i[1]&&(o===""||o===lt(a))&&(o=!0))}return o}function Lc(e,t,a=!1){const o=t.propsCache,l=o.get(e);if(l)return l;const r=e.props,i={},c=[];let u=!1;if(!ce(e)){const f=d=>{u=!0;const[h,v]=Lc(d,t,!0);Ke(i,h),v&&c.push(...v)};!a&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!r&&!u)return Pe(e)&&o.set(e,fs),fs;if(le(r))for(let f=0;f<r.length;f++){Ve(r[f])||L("props must be strings when using array syntax.",r[f]);const d=Yn(r[f]);dr(d)&&(i[d]=Me)}else if(r){Pe(r)||L("invalid props options",r);for(const f in r){const d=Yn(f);if(dr(d)){const h=r[f],v=i[d]=le(h)||ce(h)?{type:h}:Object.assign({},h);if(v){const k=hr(Boolean,v.type),y=hr(String,v.type);v[0]=k>-1,v[1]=y<0||k<y,(k>-1||ve(v,"default"))&&c.push(d)}}}}const p=[i,c];return Pe(e)&&o.set(e,p),p}function dr(e){return e[0]!=="$"?!0:(L(`Invalid prop name: "${e}" is a reserved property.`),!1)}function Vo(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function fr(e,t){return Vo(e)===Vo(t)}function hr(e,t){return le(t)?t.findIndex(a=>fr(a,e)):ce(t)&&fr(t,e)?0:-1}function Dc(e,t,a){const o=de(t),l=a.propsOptions[0];for(const r in l){let i=l[r];i!=null&&nf(r,o[r],i,!ve(e,r)&&!ve(e,lt(r)))}}function nf(e,t,a,o){const{type:l,required:r,validator:i}=a;if(r&&o){L('Missing required prop: "'+e+'"');return}if(!(t==null&&!a.required)){if(l!=null&&l!==!0){let c=!1;const u=le(l)?l:[l],p=[];for(let f=0;f<u.length&&!c;f++){const{valid:d,expectedType:h}=sf(t,u[f]);p.push(h||""),c=d}if(!c){L(af(e,t,p));return}}i&&!i(t)&&L('Invalid prop: custom validator check failed for prop "'+e+'".')}}const tf=Ct("String,Number,Boolean,Function,Symbol,BigInt");function sf(e,t){let a;const o=Vo(t);if(tf(o)){const l=typeof e;a=l===o.toLowerCase(),!a&&l==="object"&&(a=e instanceof t)}else o==="Object"?a=Pe(e):o==="Array"?a=le(e):o==="null"?a=e===null:a=e instanceof t;return{valid:a,expectedType:o}}function af(e,t,a){let o=`Invalid prop: type check failed for prop "${e}". Expected ${a.map(qt).join(" | ")}`;const l=a[0],r=ul(t),i=mr(t,l),c=mr(t,r);return a.length===1&&vr(l)&&!of(l,r)&&(o+=` with value ${i}`),o+=`, got ${r} `,vr(r)&&(o+=`with value ${c}.`),o}function mr(e,t){return t==="String"?`"${e}"`:t==="Number"?`${Number(e)}`:`${e}`}function vr(e){return["string","number","boolean"].some(a=>e.toLowerCase()===a)}function of(...e){return e.some(t=>t.toLowerCase()==="boolean")}const Nc=e=>e[0]==="_"||e==="$stable",Sl=e=>le(e)?e.map(Ln):[Ln(e)],lf=(e,t,a)=>{if(t._n)return t;const o=g((...l)=>(Ye&&L(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),Sl(t(...l))),a);return o._c=!1,o},Fc=(e,t,a)=>{const o=e._ctx;for(const l in e){if(Nc(l))continue;const r=e[l];if(ce(r))t[l]=lf(l,r,o);else if(r!=null){L(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const i=Sl(r);t[l]=()=>i}}},Vc=(e,t)=>{$l(e.vnode)||L("Non-function value encountered for default slot. Prefer function slots for better performance.");const a=Sl(t);e.slots.default=()=>a},rf=(e,t)=>{if(e.vnode.shapeFlag&32){const a=t._;a?(e.slots=de(t),Ca(t,"_",a)):Fc(t,e.slots={})}else e.slots={},t&&Vc(e,t);Ca(e.slots,so,1)},cf=(e,t,a)=>{const{vnode:o,slots:l}=e;let r=!0,i=Me;if(o.shapeFlag&32){const c=t._;c?yt?Ke(l,t):a&&c===1?r=!1:(Ke(l,t),!a&&c===1&&delete l._):(r=!t.$stable,Fc(t,l)),i=t}else t&&(Vc(e,t),i={default:1});if(r)for(const c in l)!Nc(c)&&!(c in i)&&delete l[c]};function jc(){return{app:null,config:{isNativeTag:Hi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uf=0;function pf(e,t){return function(o,l=null){ce(o)||(o=Object.assign({},o)),l!=null&&!Pe(l)&&(L("root props passed to app.mount() must be an object."),l=null);const r=jc(),i=new Set;let c=!1;const u=r.app={_uid:uf++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:yr,get config(){return r.config},set config(p){L("app.config cannot be replaced. Modify individual options instead.")},use(p,...f){return i.has(p)?L("Plugin has already been applied to target app."):p&&ce(p.install)?(i.add(p),p.install(u,...f)):ce(p)?(i.add(p),p(u,...f)):L('A plugin must either be a function or an object with an "install" function.'),u},mixin(p){return r.mixins.includes(p)?L("Mixin has already been applied to target app"+(p.name?`: ${p.name}`:"")):r.mixins.push(p),u},component(p,f){return Uo(p,r.config),f?(r.components[p]&&L(`Component "${p}" has already been registered in target app.`),r.components[p]=f,u):r.components[p]},directive(p,f){return Pc(p),f?(r.directives[p]&&L(`Directive "${p}" has already been registered in target app.`),r.directives[p]=f,u):r.directives[p]},mount(p,f,d){if(c)L("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{p.__vue_app__&&L("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const h=b(o,l);return h.appContext=r,r.reload=()=>{e(it(h),p,d)},f&&t?t(h,p):e(h,p,d),c=!0,u._container=p,p.__vue_app__=u,u._instance=h.component,hd(u,yr),ao(h.component)||h.component.proxy}},unmount(){c?(e(null,u._container),u._instance=null,md(u),delete u._container.__vue_app__):L("Cannot unmount an app that is not mounted.")},provide(p,f){return p in r.provides&&L(`App already provides property with key "${String(p)}". It will be overwritten with the new value.`),r.provides[p]=f,u}};return u}}function jo(e,t,a,o,l=!1){if(le(e)){e.forEach((h,v)=>jo(h,t&&(le(t)?t[v]:t),a,o,l));return}if(ms(o)&&!l)return;const r=o.shapeFlag&4?ao(o.component)||o.component.proxy:o.el,i=l?null:r,{i:c,r:u}=e;if(!c){L("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const p=t&&t.r,f=c.refs===Me?c.refs={}:c.refs,d=c.setupState;if(p!=null&&p!==u&&(Ve(p)?(f[p]=null,ve(d,p)&&(d[p]=null)):xe(p)&&(p.value=null)),ce(u))ot(u,c,12,[i,f]);else{const h=Ve(u),v=xe(u);if(h||v){const k=()=>{if(e.f){const y=h?ve(d,u)?d[u]:f[u]:u.value;l?le(y)&&rl(y,r):le(y)?y.includes(r)||y.push(r):h?(f[u]=[r],ve(d,u)&&(d[u]=f[u])):(u.value=[r],e.k&&(f[e.k]=u.value))}else h?(f[u]=i,ve(d,u)&&(d[u]=i)):v?(u.value=i,e.k&&(f[e.k]=i)):L("Invalid template ref type:",u,`(${typeof u})`)};i?(k.id=-1,nn(k,a)):k()}else L("Invalid template ref type:",u,`(${typeof u})`)}}let Rs,_t;function Xn(e,t){e.appContext.config.performance&&Da()&&_t.mark(`vue-${t}-${e.uid}`),_d(e,t,Da()?_t.now():Date.now())}function et(e,t){if(e.appContext.config.performance&&Da()){const a=`vue-${t}-${e.uid}`,o=a+":end";_t.mark(o),_t.measure(`<${oo(e,e.type)}> ${t}`,a,o),_t.clearMarks(a),_t.clearMarks(o)}gd(e,t,Da()?_t.now():Date.now())}function Da(){return Rs!==void 0||(typeof window<"u"&&window.performance?(Rs=!0,_t=window.performance):Rs=!1),Rs}function df(){const e=[];if(e.length){const t=e.length>1;console.warn(`Feature flag${t?"s":""} ${e.join(", ")} ${t?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nn=Pd;function ff(e){return hf(e)}function hf(e,t){df();const a=Ki();a.__VUE__=!0,kc(a.__VUE_DEVTOOLS_GLOBAL_HOOK__,a);const{insert:o,remove:l,patchProp:r,createElement:i,createText:c,createComment:u,setText:p,setElementText:f,parentNode:d,nextSibling:h,setScopeId:v=hn,insertStaticContent:k}=e,y=(m,_,R,M=null,A=null,F=null,B=!1,D=null,V=yt?!1:!!_.dynamicChildren)=>{if(m===_)return;m&&!Es(m,_)&&(M=Q(m),fn(m,A,F,!0),m=null),_.patchFlag===-2&&(V=!1,_.dynamicChildren=null);const{type:I,ref:ee,shapeFlag:X}=_;switch(I){case ra:x(m,_,R,M);break;case mn:P(m,_,R,M);break;case ba:m==null?E(_,R,M,B):C(m,_,R,B);break;case Se:Xe(m,_,R,M,A,F,B,D,V);break;default:X&1?H(m,_,R,M,A,F,B,D,V):X&6?en(m,_,R,M,A,F,B,D,V):X&64||X&128?I.process(m,_,R,M,A,F,B,D,V,ye):L("Invalid VNode type:",I,`(${typeof I})`)}ee!=null&&A&&jo(ee,m&&m.ref,F,_||m,!_)},x=(m,_,R,M)=>{if(m==null)o(_.el=c(_.children),R,M);else{const A=_.el=m.el;_.children!==m.children&&p(A,_.children)}},P=(m,_,R,M)=>{m==null?o(_.el=u(_.children||""),R,M):_.el=m.el},E=(m,_,R,M)=>{[m.el,m.anchor]=k(m.children,_,R,M,m.el,m.anchor)},C=(m,_,R,M)=>{if(_.children!==m.children){const A=h(m.anchor);U(m),[_.el,_.anchor]=k(_.children,R,A,M)}else _.el=m.el,_.anchor=m.anchor},O=({el:m,anchor:_},R,M)=>{let A;for(;m&&m!==_;)A=h(m),o(m,R,M),m=A;o(_,R,M)},U=({el:m,anchor:_})=>{let R;for(;m&&m!==_;)R=h(m),l(m),m=R;l(_)},H=(m,_,R,M,A,F,B,D,V)=>{B=B||_.type==="svg",m==null?Z(_,R,M,A,F,B,D,V):ie(m,_,A,F,B,D,V)},Z=(m,_,R,M,A,F,B,D)=>{let V,I;const{type:ee,props:X,shapeFlag:se,transition:pe,dirs:ke}=m;if(V=m.el=i(m.type,F,X&&X.is,X),se&8?f(V,m.children):se&16&&oe(m.children,V,null,M,A,F&&ee!=="foreignObject",B,D),ke&&Tt(m,null,M,"created"),X){for(const Ae in X)Ae!=="value"&&!_a(Ae)&&r(V,Ae,null,X[Ae],F,m.children,M,A,j);"value"in X&&r(V,"value",null,X.value),(I=X.onVnodeBeforeMount)&&Sn(I,M,m)}q(V,m,m.scopeId,B,M),Object.defineProperty(V,"__vnode",{value:m,enumerable:!1}),Object.defineProperty(V,"__vueParentComponent",{value:M,enumerable:!1}),ke&&Tt(m,null,M,"beforeMount");const Le=(!A||A&&!A.pendingBranch)&&pe&&!pe.persisted;Le&&pe.beforeEnter(V),o(V,_,R),((I=X&&X.onVnodeMounted)||Le||ke)&&nn(()=>{I&&Sn(I,M,m),Le&&pe.enter(V),ke&&Tt(m,null,M,"mounted")},A)},q=(m,_,R,M,A)=>{if(R&&v(m,R),M)for(let F=0;F<M.length;F++)v(m,M[F]);if(A){let F=A.subTree;if(F.patchFlag>0&&F.patchFlag&2048&&(F=bc(F.children)||F),_===F){const B=A.vnode;q(m,B,B.scopeId,B.slotScopeIds,A.parent)}}},oe=(m,_,R,M,A,F,B,D,V=0)=>{for(let I=V;I<m.length;I++){const ee=m[I]=D?mt(m[I]):Ln(m[I]);y(null,ee,_,R,M,A,F,B,D)}},ie=(m,_,R,M,A,F,B)=>{const D=_.el=m.el;let{patchFlag:V,dynamicChildren:I,dirs:ee}=_;V|=m.patchFlag&16;const X=m.props||Me,se=_.props||Me;let pe;R&&Ot(R,!1),(pe=se.onVnodeBeforeUpdate)&&Sn(pe,R,_,m),ee&&Tt(_,m,R,"beforeUpdate"),R&&Ot(R,!0),yt&&(V=0,B=!1,I=null);const ke=A&&_.type!=="foreignObject";if(I?(ge(m.dynamicChildren,I,D,R,M,ke,F),R&&R.type.__hmrId&&js(m,_)):B||fe(m,_,D,null,R,M,ke,F,!1),V>0){if(V&16)He(D,_,X,se,R,M,A);else if(V&2&&X.class!==se.class&&r(D,"class",null,se.class,A),V&4&&r(D,"style",X.style,se.style,A),V&8){const Le=_.dynamicProps;for(let Ae=0;Ae<Le.length;Ae++){const We=Le[Ae],An=X[We],ss=se[We];(ss!==An||We==="value")&&r(D,We,An,ss,A,m.children,R,M,j)}}V&1&&m.children!==_.children&&f(D,_.children)}else!B&&I==null&&He(D,_,X,se,R,M,A);((pe=se.onVnodeUpdated)||ee)&&nn(()=>{pe&&Sn(pe,R,_,m),ee&&Tt(_,m,R,"updated")},M)},ge=(m,_,R,M,A,F,B)=>{for(let D=0;D<_.length;D++){const V=m[D],I=_[D],ee=V.el&&(V.type===Se||!Es(V,I)||V.shapeFlag&70)?d(V.el):R;y(V,I,ee,null,M,A,F,B,!0)}},He=(m,_,R,M,A,F,B)=>{if(R!==M){if(R!==Me)for(const D in R)!_a(D)&&!(D in M)&&r(m,D,R[D],null,B,_.children,A,F,j);for(const D in M){if(_a(D))continue;const V=M[D],I=R[D];V!==I&&D!=="value"&&r(m,D,I,V,B,_.children,A,F,j)}"value"in M&&r(m,"value",R.value,M.value)}},Xe=(m,_,R,M,A,F,B,D,V)=>{const I=_.el=m?m.el:c(""),ee=_.anchor=m?m.anchor:c("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:pe}=_;(yt||X&2048)&&(X=0,V=!1,se=null),pe&&(D=D?D.concat(pe):pe),m==null?(o(I,R,M),o(ee,R,M),oe(_.children,R,ee,A,F,B,D,V)):X>0&&X&64&&se&&m.dynamicChildren?(ge(m.dynamicChildren,se,R,A,F,B,D),A&&A.type.__hmrId?js(m,_):(_.key!=null||A&&_===A.subTree)&&js(m,_,!0)):fe(m,_,R,ee,A,F,B,D,V)},en=(m,_,R,M,A,F,B,D,V)=>{_.slotScopeIds=D,m==null?_.shapeFlag&512?A.ctx.activate(_,R,M,B,V):Te(_,R,M,A,F,B,V):je(m,_,V)},Te=(m,_,R,M,A,F,B)=>{const D=m.component=$f(m,M,A);if(D.type.__hmrId&&ud(D),ga(m),Xn(D,"mount"),$l(m)&&(D.ctx.renderer=ye),Xn(D,"init"),Ef(D),et(D,"init"),D.asyncDep){if(A&&A.registerDep(D,K),!m.el){const V=D.subTree=b(mn);P(null,V,_,R)}return}K(D,m,_,R,A,F,B),ya(),et(D,"mount")},je=(m,_,R)=>{const M=_.component=m.component;if(Sd(m,_,R))if(M.asyncDep&&!M.asyncResolved){ga(_),ae(M,_,R),ya();return}else M.next=_,id(M.update),M.update();else _.el=m.el,M.vnode=_},K=(m,_,R,M,A,F,B)=>{const D=()=>{if(m.isMounted){let{next:ee,bu:X,u:se,parent:pe,vnode:ke}=m,Le=ee,Ae;ga(ee||m.vnode),Ot(m,!1),ee?(ee.el=ke.el,ae(m,ee,B)):ee=ke,X&&kt(X),(Ae=ee.props&&ee.props.onVnodeBeforeUpdate)&&Sn(Ae,pe,ee,ke),Ot(m,!0),Xn(m,"render");const We=uo(m);et(m,"render");const An=m.subTree;m.subTree=We,Xn(m,"patch"),y(An,We,d(An.el),Q(An),m,A,F),et(m,"patch"),ee.el=We.el,Le===null&&Cd(m,We.el),se&&nn(se,A),(Ae=ee.props&&ee.props.onVnodeUpdated)&&nn(()=>Sn(Ae,pe,ee,ke),A),_c(m),ya()}else{let ee;const{el:X,props:se}=_,{bm:pe,m:ke,parent:Le}=m,Ae=ms(_);if(Ot(m,!1),pe&&kt(pe),!Ae&&(ee=se&&se.onVnodeBeforeMount)&&Sn(ee,Le,_),Ot(m,!0),X&&re){const We=()=>{Xn(m,"render"),m.subTree=uo(m),et(m,"render"),Xn(m,"hydrate"),re(X,m.subTree,m,A,null),et(m,"hydrate")};Ae?_.type.__asyncLoader().then(()=>!m.isUnmounted&&We()):We()}else{Xn(m,"render");const We=m.subTree=uo(m);et(m,"render"),Xn(m,"patch"),y(null,We,R,M,m,A,F),et(m,"patch"),_.el=We.el}if(ke&&nn(ke,A),!Ae&&(ee=se&&se.onVnodeMounted)){const We=_;nn(()=>Sn(ee,Le,We),A)}(_.shapeFlag&256||Le&&ms(Le.vnode)&&Le.vnode.shapeFlag&256)&&m.a&&nn(m.a,A),m.isMounted=!0,Ao(m),_=R=M=null}},V=m.effect=new fl(D,()=>Ja(I),m.scope),I=m.update=()=>V.run();I.id=m.uid,Ot(m,!0),V.onTrack=m.rtc?ee=>kt(m.rtc,ee):void 0,V.onTrigger=m.rtg?ee=>kt(m.rtg,ee):void 0,I.ownerInstance=m,I()},ae=(m,_,R)=>{_.component=m;const M=m.vnode.props;m.vnode=_,m.next=null,ef(m,_.props,M,R),cf(m,_.children,R),Xt(),or(),es()},fe=(m,_,R,M,A,F,B,D,V=!1)=>{const I=m&&m.children,ee=m?m.shapeFlag:0,X=_.children,{patchFlag:se,shapeFlag:pe}=_;if(se>0){if(se&128){gn(I,X,R,M,A,F,B,D,V);return}else if(se&256){Oe(I,X,R,M,A,F,B,D,V);return}}pe&8?(ee&16&&j(I,A,F),X!==I&&f(R,X)):ee&16?pe&16?gn(I,X,R,M,A,F,B,D,V):j(I,A,F,!0):(ee&8&&f(R,""),pe&16&&oe(X,R,M,A,F,B,D,V))},Oe=(m,_,R,M,A,F,B,D,V)=>{m=m||fs,_=_||fs;const I=m.length,ee=_.length,X=Math.min(I,ee);let se;for(se=0;se<X;se++){const pe=_[se]=V?mt(_[se]):Ln(_[se]);y(m[se],pe,R,null,A,F,B,D,V)}I>ee?j(m,A,F,!0,!1,X):oe(_,R,M,A,F,B,D,V,X)},gn=(m,_,R,M,A,F,B,D,V)=>{let I=0;const ee=_.length;let X=m.length-1,se=ee-1;for(;I<=X&&I<=se;){const pe=m[I],ke=_[I]=V?mt(_[I]):Ln(_[I]);if(Es(pe,ke))y(pe,ke,R,null,A,F,B,D,V);else break;I++}for(;I<=X&&I<=se;){const pe=m[X],ke=_[se]=V?mt(_[se]):Ln(_[se]);if(Es(pe,ke))y(pe,ke,R,null,A,F,B,D,V);else break;X--,se--}if(I>X){if(I<=se){const pe=se+1,ke=pe<ee?_[pe].el:M;for(;I<=se;)y(null,_[I]=V?mt(_[I]):Ln(_[I]),R,ke,A,F,B,D,V),I++}}else if(I>se)for(;I<=X;)fn(m[I],A,F,!0),I++;else{const pe=I,ke=I,Le=new Map;for(I=ke;I<=se;I++){const ln=_[I]=V?mt(_[I]):Ln(_[I]);ln.key!=null&&(Le.has(ln.key)&&L("Duplicate keys found during update:",JSON.stringify(ln.key),"Make sure keys are unique."),Le.set(ln.key,I))}let Ae,We=0;const An=se-ke+1;let ss=!1,Yl=0;const $s=new Array(An);for(I=0;I<An;I++)$s[I]=0;for(I=pe;I<=X;I++){const ln=m[I];if(We>=An){fn(ln,A,F,!0);continue}let Un;if(ln.key!=null)Un=Le.get(ln.key);else for(Ae=ke;Ae<=se;Ae++)if($s[Ae-ke]===0&&Es(ln,_[Ae])){Un=Ae;break}Un===void 0?fn(ln,A,F,!0):($s[Un-ke]=I+1,Un>=Yl?Yl=Un:ss=!0,y(ln,_[Un],R,null,A,F,B,D,V),We++)}const Zl=ss?mf($s):fs;for(Ae=Zl.length-1,I=An-1;I>=0;I--){const ln=ke+I,Un=_[ln],Gl=ln+1<ee?_[ln+1].el:M;$s[I]===0?y(null,Un,R,Gl,A,F,B,D,V):ss&&(Ae<0||I!==Zl[Ae]?sn(Un,R,Gl,2):Ae--)}}},sn=(m,_,R,M,A=null)=>{const{el:F,type:B,transition:D,children:V,shapeFlag:I}=m;if(I&6){sn(m.component.subTree,_,R,M);return}if(I&128){m.suspense.move(_,R,M);return}if(I&64){B.move(m,_,R,ye);return}if(B===Se){o(F,_,R);for(let X=0;X<V.length;X++)sn(V[X],_,R,M);o(m.anchor,_,R);return}if(B===ba){O(m,_,R);return}if(M!==2&&I&1&&D)if(M===0)D.beforeEnter(F),o(F,_,R),nn(()=>D.enter(F),A);else{const{leave:X,delayLeave:se,afterLeave:pe}=D,ke=()=>o(F,_,R),Le=()=>{X(F,()=>{ke(),pe&&pe()})};se?se(F,ke,Le):Le()}else o(F,_,R)},fn=(m,_,R,M=!1,A=!1)=>{const{type:F,props:B,ref:D,children:V,dynamicChildren:I,shapeFlag:ee,patchFlag:X,dirs:se}=m;if(D!=null&&jo(D,null,R,m,!0),ee&256){_.ctx.deactivate(m);return}const pe=ee&1&&se,ke=!ms(m);let Le;if(ke&&(Le=B&&B.onVnodeBeforeUnmount)&&Sn(Le,_,m),ee&6)Y(m.component,R,M);else{if(ee&128){m.suspense.unmount(R,M);return}pe&&Tt(m,null,_,"beforeUnmount"),ee&64?m.type.remove(m,_,R,A,ye,M):I&&(F!==Se||X>0&&X&64)?j(I,_,R,!1,!0):(F===Se&&X&384||!A&&ee&16)&&j(V,_,R),M&&pt(m)}(ke&&(Le=B&&B.onVnodeUnmounted)||pe)&&nn(()=>{Le&&Sn(Le,_,m),pe&&Tt(m,null,_,"unmounted")},R)},pt=m=>{const{type:_,el:R,anchor:M,transition:A}=m;if(_===Se){m.patchFlag>0&&m.patchFlag&2048&&A&&!A.persisted?m.children.forEach(B=>{B.type===mn?l(B.el):pt(B)}):S(R,M);return}if(_===ba){U(m);return}const F=()=>{l(R),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(m.shapeFlag&1&&A&&!A.persisted){const{leave:B,delayLeave:D}=A,V=()=>B(R,F);D?D(m.el,F,V):V()}else F()},S=(m,_)=>{let R;for(;m!==_;)R=h(m),l(m),m=R;l(_)},Y=(m,_,R)=>{m.type.__hmrId&&pd(m);const{bum:M,scope:A,update:F,subTree:B,um:D}=m;M&&kt(M),A.stop(),F&&(F.active=!1,fn(B,m,_,R)),D&&nn(D,_),nn(()=>{m.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve()),kd(m)},j=(m,_,R,M=!1,A=!1,F=0)=>{for(let B=F;B<m.length;B++)fn(m[B],_,R,M,A)},Q=m=>m.shapeFlag&6?Q(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),me=(m,_,R)=>{m==null?_._vnode&&fn(_._vnode,null,null,!0):y(_._vnode||null,m,_,null,null,null,R),or(),hc(),_._vnode=m},ye={p:y,um:fn,m:sn,r:pt,mt:Te,mc:oe,pc:fe,pbc:ge,n:Q,o:e};let ue,re;return t&&([ue,re]=t(ye)),{render:me,hydrate:ue,createApp:pf(me,ue)}}function Ot({effect:e,update:t},a){e.allowRecurse=t.allowRecurse=a}function js(e,t,a=!1){const o=e.children,l=t.children;if(le(o)&&le(l))for(let r=0;r<o.length;r++){const i=o[r];let c=l[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[r]=mt(l[r]),c.el=i.el),a||js(i,c)),c.type===ra&&(c.el=i.el),c.type===mn&&!c.el&&(c.el=i.el)}}function mf(e){const t=e.slice(),a=[0];let o,l,r,i,c;const u=e.length;for(o=0;o<u;o++){const p=e[o];if(p!==0){if(l=a[a.length-1],e[l]<p){t[o]=l,a.push(o);continue}for(r=0,i=a.length-1;r<i;)c=r+i>>1,e[a[c]]<p?r=c+1:i=c;p<e[a[r]]&&(r>0&&(t[o]=a[r-1]),a[r]=o)}}for(r=a.length,i=a[r-1];r-- >0;)a[r]=i,i=t[i];return a}const vf=e=>e.__isTeleport,vs=e=>e&&(e.disabled||e.disabled===""),kr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ho=(e,t)=>{const a=e&&e.to;if(Ve(a))if(t){const o=t(a);return o||L(`Failed to locate Teleport target with selector "${a}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return L("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!a&&!vs(e)&&L(`Invalid Teleport target: ${a}`),a},kf={__isTeleport:!0,process(e,t,a,o,l,r,i,c,u,p){const{mc:f,pc:d,pbc:h,o:{insert:v,querySelector:k,createText:y,createComment:x}}=p,P=vs(t.props);let{shapeFlag:E,children:C,dynamicChildren:O}=t;if(yt&&(u=!1,O=null),e==null){const U=t.el=x("teleport start"),H=t.anchor=x("teleport end");v(U,a,o),v(H,a,o);const Z=t.target=Ho(t.props,k),q=t.targetAnchor=y("");Z?(v(q,Z),i=i||kr(Z)):P||L("Invalid Teleport target on mount:",Z,`(${typeof Z})`);const oe=(ie,ge)=>{E&16&&f(C,ie,ge,l,r,i,c,u)};P?oe(a,H):Z&&oe(Z,q)}else{t.el=e.el;const U=t.anchor=e.anchor,H=t.target=e.target,Z=t.targetAnchor=e.targetAnchor,q=vs(e.props),oe=q?a:H,ie=q?U:Z;if(i=i||kr(H),O?(h(e.dynamicChildren,O,oe,l,r,i,c),js(e,t,!0)):u||d(e,t,oe,ie,l,r,i,c,!1),P)q||ma(t,a,U,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ge=t.target=Ho(t.props,k);ge?ma(t,ge,null,p,0):L("Invalid Teleport target on update:",H,`(${typeof H})`)}else q&&ma(t,H,Z,p,1)}Hc(t)},remove(e,t,a,o,{um:l,o:{remove:r}},i){const{shapeFlag:c,children:u,anchor:p,targetAnchor:f,target:d,props:h}=e;if(d&&r(f),(i||!vs(h))&&(r(p),c&16))for(let v=0;v<u.length;v++){const k=u[v];l(k,t,a,!0,!!k.dynamicChildren)}},move:ma,hydrate:_f};function ma(e,t,a,{o:{insert:o},m:l},r=2){r===0&&o(e.targetAnchor,t,a);const{el:i,anchor:c,shapeFlag:u,children:p,props:f}=e,d=r===2;if(d&&o(i,t,a),(!d||vs(f))&&u&16)for(let h=0;h<p.length;h++)l(p[h],t,a,2);d&&o(c,t,a)}function _f(e,t,a,o,l,r,{o:{nextSibling:i,parentNode:c,querySelector:u}},p){const f=t.target=Ho(t.props,u);if(f){const d=f._lpa||f.firstChild;if(t.shapeFlag&16)if(vs(t.props))t.anchor=p(i(e),t,c(e),a,o,l,r),t.targetAnchor=d;else{t.anchor=i(e);let h=d;for(;h;)if(h=i(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,f._lpa=t.targetAnchor&&i(t.targetAnchor);break}p(d,t,f,a,o,l,r)}Hc(t)}return t.anchor&&i(t.anchor)}const zR=kf;function Hc(e){const t=e.ctx;if(t&&t.ut){let a=e.children[0].el;for(;a!==e.targetAnchor;)a.nodeType===1&&a.setAttribute("data-v-owner",t.uid),a=a.nextSibling;t.ut()}}const Se=Symbol("Fragment"),ra=Symbol("Text"),mn=Symbol("Comment"),ba=Symbol("Static"),Hs=[];let Nn=null;function $(e=!1){Hs.push(Nn=e?null:[])}function gf(){Hs.pop(),Nn=Hs[Hs.length-1]||null}let Zs=1;function _r(e){Zs+=e}function Uc(e){return e.dynamicChildren=Zs>0?Nn||fs:null,gf(),Zs>0&&Nn&&Nn.push(e),e}function N(e,t,a,o,l,r){return Uc(n(e,t,a,o,l,r,!0))}function z(e,t,a,o,l){return Uc(b(e,t,a,o,l,!0))}function Et(e){return e?e.__v_isVNode===!0:!1}function Es(e,t){return t.shapeFlag&6&&is.has(t.type)?(e.shapeFlag&=-257,t.shapeFlag&=-513,!1):e.type===t.type&&e.key===t.key}const yf=(...e)=>bf(...e),so="__vInternal",Bc=({key:e})=>e??null,wa=({ref:e,ref_key:t,ref_for:a})=>e!=null?Ve(e)||xe(e)||ce(e)?{i:Ge,r:e,k:t,f:!!a}:e:null;function n(e,t=null,a=null,o=0,l=null,r=e===Se?0:1,i=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bc(t),ref:t&&wa(t),scopeId:Xa,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Ge};return c?(Cl(u,a),r&128&&e.normalize(u)):a&&(u.shapeFlag|=Ve(a)?8:16),u.key!==u.key&&L("VNode created with invalid key (NaN). VNode type:",u.type),Zs>0&&!i&&Nn&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&Nn.push(u),u}const b=yf;function bf(e,t=null,a=null,o=0,l=null,r=!1){if((!e||e===Ud)&&(e||L(`Invalid vnode type when creating vnode: ${e}.`),e=mn),Et(e)){const c=it(e,t,!0);return a&&Cl(c,a),Zs>0&&!r&&Nn&&(c.shapeFlag&6?Nn[Nn.indexOf(e)]=c:Nn.push(c)),c.patchFlag|=-2,c}if(Yc(e)&&(e=e.__vccOpts),t){t=_e(t);let{class:c,style:u}=t;c&&!Ve(c)&&(t.class=Ue(c)),Pe(u)&&(Aa(u)&&!le(u)&&(u=Ke({},u)),t.style=Be(u))}const i=Ve(e)?1:wc(e)?128:vf(e)?64:Pe(e)?4:ce(e)?2:0;return i&4&&Aa(e)&&(e=de(e),L("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,e)),n(e,t,a,o,l,i,r,!0)}function _e(e){return e?Aa(e)||so in e?Ke({},e):e:null}function it(e,t,a=!1){const{props:o,ref:l,patchFlag:r,children:i}=e,c=t?te(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Bc(c),ref:t&&t.ref?a&&l?le(l)?l.concat(wa(t)):[l,wa(t)]:wa(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r===-1&&le(i)?i.map(Wc):i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&it(e.ssContent),ssFallback:e.ssFallback&&it(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function Wc(e){const t=it(e);return le(e.children)&&(t.children=e.children.map(Wc)),t}function s(e=" ",t=0){return b(ra,null,e,t)}function he(e="",t=!1){return t?($(),z(mn,null,e)):b(mn,null,e)}function Ln(e){return e==null||typeof e=="boolean"?b(mn):le(e)?b(Se,null,e.slice()):typeof e=="object"?mt(e):b(ra,null,String(e))}function mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:it(e)}function Cl(e,t){let a=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(le(t))a=16;else if(typeof t=="object")if(o&65){const l=t.default;l&&(l._c&&(l._d=!1),Cl(e,l()),l._c&&(l._d=!0));return}else{a=32;const l=t._;!l&&!(so in t)?t._ctx=Ge:l===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:Ge},a=32):(t=String(t),o&64?(a=16,t=[s(t)]):a=8);e.children=t,e.shapeFlag|=a}function te(...e){const t={};for(let a=0;a<e.length;a++){const o=e[a];for(const l in o)if(l==="class")t.class!==o.class&&(t.class=Ue([t.class,o.class]));else if(l==="style")t.style=Be([t.style,o.style]);else if(aa(l)){const r=t[l],i=o[l];i&&r!==i&&!(le(r)&&r.includes(i))&&(t[l]=r?[].concat(r,i):i)}else l!==""&&(t[l]=o[l])}return t}function Sn(e,t,a,o=null){Vn(e,t,7,[a,o])}const wf=jc();let xf=0;function $f(e,t,a){const o=e.type,l=(t?t.appContext:e.appContext)||wf,r={uid:xf++,vnode:e,type:o,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new zi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lc(o,l),emitsOptions:yc(o,l),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:o.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=Bd(r),r.root=t?t.root:r,r.emit=bd.bind(null,r),e.ce&&e.ce(r),r}let Ye=null;const Pt=()=>Ye||Ge,gs=e=>{Ye=e,e.scope.on()},Bt=()=>{Ye&&Ye.scope.off(),Ye=null},Rf=Ct("slot,component");function Uo(e,t){const a=t.isNativeTag||Hi;(Rf(e)||a(e))&&L("Do not use built-in or reserved HTML elements as component id: "+e)}function Kc(e){return e.vnode.shapeFlag&4}let Gs=!1;function Ef(e,t=!1){Gs=t;const{props:a,children:o}=e.vnode,l=Kc(e);Qd(e,a,l,t),rf(e,o);const r=l?Sf(e,t):void 0;return Gs=!1,r}function Sf(e,t){var a;const o=e.type;{if(o.name&&Uo(o.name,e.appContext.config),o.components){const r=Object.keys(o.components);for(let i=0;i<r.length;i++)Uo(r[i],e.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let i=0;i<r.length;i++)Pc(r[i])}o.compilerOptions&&Cf()&&L('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}e.accessCache=Object.create(null),e.proxy=ml(new Proxy(e.ctx,Ac)),Wd(e);const{setup:l}=o;if(l){const r=e.setupContext=l.length>1?qc(e):null;gs(e),Xt();const i=ot(l,e,0,[ps(e.props),r]);if(es(),Bt(),cl(i)){if(i.then(Bt,Bt),t)return i.then(c=>{gr(e,c,t)}).catch(c=>{Ga(c,e,0)});if(e.asyncDep=i,!e.suspense){const c=(a=o.name)!==null&&a!==void 0?a:"Anonymous";L(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else gr(e,i,t)}else zc(e,t)}function gr(e,t,a){ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Pe(t)?(Et(t)&&L("setup() should not return VNodes directly - return a render function instead."),e.devtoolsRawSetupState=t,e.setupState=rc(t),Kd(e)):t!==void 0&&L(`setup() should return an object. Received: ${t===null?"null":typeof t}`),zc(e,a)}let Bo;const Cf=()=>!Bo;function zc(e,t,a){const o=e.type;if(!e.render){if(!t&&Bo&&!o.render){const l=o.template||El(e).template;if(l){Xn(e,"compile");const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:c,compilerOptions:u}=o,p=Ke(Ke({isCustomElement:r,delimiters:c},i),u);o.render=Bo(l,p),et(e,"compile")}}e.render=o.render||hn}gs(e),Xt(),qd(e),es(),Bt(),!o.render&&e.render===hn&&!t&&(o.template?L('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):L("Component is missing template or render function."))}function Pf(e){return new Proxy(e.attrs,{get(t,a){return Ia(),Rn(e,"get","$attrs"),t[a]},set(){return L("setupContext.attrs is readonly."),!1},deleteProperty(){return L("setupContext.attrs is readonly."),!1}})}function qc(e){const t=o=>{e.exposed&&L("expose() should be called only once per setup()."),e.exposed=o||{}};let a;return Object.freeze({get attrs(){return a||(a=Pf(e))},get slots(){return ps(e.slots)},get emit(){return(o,...l)=>e.emit(o,...l)},expose:t})}function ao(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(rc(ml(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in Ut)return Ut[a](e)},has(t,a){return a in t||a in Ut}}))}const Tf=/(?:^|[-_])(\w)/g,Of=e=>e.replace(Tf,t=>t.toUpperCase()).replace(/[-_]/g,"");function Js(e,t=!0){return ce(e)?e.displayName||e.name:e.name||t&&e.__name}function oo(e,t,a=!1){let o=Js(t);if(!o&&t.__file){const l=t.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&e&&e.parent){const l=r=>{for(const i in r)if(r[i]===t)return i};o=l(e.components||e.parent.type.components)||l(e.appContext.components)}return o?Of(o):a?"App":"Anonymous"}function Yc(e){return ce(e)&&"__vccOpts"in e}const T=(e,t)=>ed(e,t,Gs);function qR(){return Af().slots}function Af(){const e=Pt();return e||L("useContext() called without active instance."),e.setupContext||(e.setupContext=qc(e))}function Gt(e,t,a){const o=arguments.length;return o===2?Pe(t)&&!le(t)?Et(t)?b(e,null,[t]):b(e,t):b(e,null,t):(o>3?a=Array.prototype.slice.call(arguments,2):o===3&&Et(a)&&(a=[a]),b(e,t,a))}const Mf=Symbol("ssrContext"),If=()=>{{const e=W(Mf);return e||L("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),e}};function mo(e){return!!(e&&e.__v_isShallow)}function Lf(){if(typeof window>"u")return;const e={style:"color:#3ba776"},t={style:"color:#0b1bc9"},a={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(d){return Pe(d)?d.__isVue?["div",e,"VueInstance"]:xe(d)?["div",{},["span",e,f(d)],"<",c(d.value),">"]:jt(d)?["div",{},["span",e,mo(d)?"ShallowReactive":"Reactive"],"<",c(d),`>${Rt(d)?" (readonly)":""}`]:Rt(d)?["div",{},["span",e,mo(d)?"ShallowReadonly":"Readonly"],"<",c(d),">"]:null:null},hasBody(d){return d&&d.__isVue},body(d){if(d&&d.__isVue)return["div",{},...r(d.$)]}};function r(d){const h=[];d.type.props&&d.props&&h.push(i("props",de(d.props))),d.setupState!==Me&&h.push(i("setup",d.setupState)),d.data!==Me&&h.push(i("data",de(d.data)));const v=u(d,"computed");v&&h.push(i("computed",v));const k=u(d,"inject");return k&&h.push(i("injected",k)),h.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:d}]]),h}function i(d,h){return h=Ke({},h),Object.keys(h).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},d],["div",{style:"padding-left:1.25em"},...Object.keys(h).map(v=>["div",{},["span",o,v+": "],c(h[v],!1)])]]:["span",{}]}function c(d,h=!0){return typeof d=="number"?["span",t,d]:typeof d=="string"?["span",a,JSON.stringify(d)]:typeof d=="boolean"?["span",o,d]:Pe(d)?["object",{object:h?de(d):d}]:["span",a,String(d)]}function u(d,h){const v=d.type;if(ce(v))return;const k={};for(const y in d.ctx)p(v,y,h)&&(k[y]=d.ctx[y]);return k}function p(d,h,v){const k=d[v];if(le(k)&&k.includes(h)||Pe(k)&&h in k||d.extends&&p(d.extends,h,v)||d.mixins&&d.mixins.some(y=>p(y,h,v)))return!0}function f(d){return mo(d)?"ShallowRef":d.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const yr="3.2.45",Df="http://www.w3.org/2000/svg",It=typeof document<"u"?document:null,br=It&&It.createElement("template"),Nf={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,o)=>{const l=t?It.createElementNS(Df,e):It.createElement(e,a?{is:a}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>It.createTextNode(e),createComment:e=>It.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>It.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,o,l,r){const i=a?a.previousSibling:t.lastChild;if(l&&(l===r||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),a),!(l===r||!(l=l.nextSibling)););else{br.innerHTML=o?`<svg>${e}</svg>`:e;const c=br.content;if(o){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,a)}return[i?i.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}};function Ff(e,t,a){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}function Vf(e,t,a){const o=e.style,l=Ve(a);if(a&&!l){for(const r in a)Wo(o,r,a[r]);if(t&&!Ve(t))for(const r in t)a[r]==null&&Wo(o,r,"")}else{const r=o.display;l?t!==a&&(o.cssText=a):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const jf=/[^\\];\s*$/,wr=/\s*!important$/;function Wo(e,t,a){if(le(a))a.forEach(o=>Wo(e,t,o));else if(a==null&&(a=""),jf.test(a)&&L(`Unexpected semicolon at the end of '${t}' style value: '${a}'`),t.startsWith("--"))e.setProperty(t,a);else{const o=Hf(e,t);wr.test(a)?e.setProperty(lt(o),a.replace(wr,""),"important"):e[o]=a}}const xr=["Webkit","Moz","ms"],vo={};function Hf(e,t){const a=vo[t];if(a)return a;let o=Yn(t);if(o!=="filter"&&o in e)return vo[t]=o;o=qt(o);for(let l=0;l<xr.length;l++){const r=xr[l]+o;if(r in e)return vo[t]=r}return t}const $r="http://www.w3.org/1999/xlink";function Uf(e,t,a,o,l){if(o&&t.startsWith("xlink:"))a==null?e.removeAttributeNS($r,t.slice(6,t.length)):e.setAttributeNS($r,t,a);else{const r=pp(t);a==null||r&&!Vi(a)?e.removeAttribute(t):e.setAttribute(t,r?"":a)}}function Bf(e,t,a,o,l,r,i){if(t==="innerHTML"||t==="textContent"){o&&i(o,l,r),e[t]=a??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=a;const u=a??"";(e.value!==u||e.tagName==="OPTION")&&(e.value=u),a==null&&e.removeAttribute(t);return}let c=!1;if(a===""||a==null){const u=typeof e[t];u==="boolean"?a=Vi(a):a==null&&u==="string"?(a="",c=!0):u==="number"&&(a=0,c=!0)}try{e[t]=a}catch(u){c||L(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${a} is invalid.`,u)}c&&e.removeAttribute(t)}function cs(e,t,a,o){e.addEventListener(t,a,o)}function Wf(e,t,a,o){e.removeEventListener(t,a,o)}function Kf(e,t,a,o,l=null){const r=e._vei||(e._vei={}),i=r[t];if(o&&i)i.value=o;else{const[c,u]=zf(t);if(o){const p=r[t]=Zf(o,l);cs(e,c,p,u)}else i&&(Wf(e,c,i,u),r[t]=void 0)}}const Rr=/(?:Once|Passive|Capture)$/;function zf(e){let t;if(Rr.test(e)){t={};let o;for(;o=e.match(Rr);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):lt(e.slice(2)),t]}let ko=0;const qf=Promise.resolve(),Yf=()=>ko||(qf.then(()=>ko=0),ko=Date.now());function Zf(e,t){const a=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=a.attached)return;Vn(Gf(o,a.value),t,5,[o])};return a.value=e,a.attached=Yf(),a}function Gf(e,t){if(le(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(o=>l=>!l._stopped&&o&&o(l))}else return t}const Er=/^on[a-z]/,Jf=(e,t,a,o,l=!1,r,i,c,u)=>{t==="class"?Ff(e,o,l):t==="style"?Vf(e,a,o):aa(t)?Sa(t)||Kf(e,t,a,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qf(e,t,o,l))?Bf(e,t,o,r,i,c,u):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Uf(e,t,o,l))};function Qf(e,t,a,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Er.test(t)&&ce(a)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Er.test(t)&&Ve(a)?!1:t in e}const Sr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return le(t)?a=>kt(t,a):t};function Xf(e){e.target.composing=!0}function Cr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const eh={created(e,{modifiers:{lazy:t,trim:a,number:o}},l){e._assign=Sr(l);const r=o||l.props&&l.props.type==="number";cs(e,t?"change":"input",i=>{if(i.target.composing)return;let c=e.value;a&&(c=c.trim()),r&&(c=Pa(c)),e._assign(c)}),a&&cs(e,"change",()=>{e.value=e.value.trim()}),t||(cs(e,"compositionstart",Xf),cs(e,"compositionend",Cr),cs(e,"change",Cr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:a,trim:o,number:l}},r){if(e._assign=Sr(r),e.composing||document.activeElement===e&&e.type!=="range"&&(a||o&&e.value.trim()===t||(l||e.type==="number")&&Pa(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},nh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pr=(e,t)=>a=>{if(!("key"in a))return;const o=lt(a.key);if(t.some(l=>l===o||nh[l]===o))return e(a)},Zc={beforeMount(e,{value:t},{transition:a}){e._vod=e.style.display==="none"?"":e.style.display,a&&t?a.beforeEnter(e):Ss(e,t)},mounted(e,{value:t},{transition:a}){a&&t&&a.enter(e)},updated(e,{value:t,oldValue:a},{transition:o}){!t!=!a&&(o?t?(o.beforeEnter(e),Ss(e,!0),o.enter(e)):o.leave(e,()=>{Ss(e,!1)}):Ss(e,t))},beforeUnmount(e,{value:t}){Ss(e,t)}};function Ss(e,t){e.style.display=t?e._vod:"none"}const th=Ke({patchProp:Jf},Nf);let Tr;function sh(){return Tr||(Tr=ff(th))}const YR=(...e)=>{const t=sh().createApp(...e);ah(t),oh(t);const{mount:a}=t;return t.mount=o=>{const l=lh(o);if(!l)return;const r=t._component;!ce(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const i=a(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},t};function ah(e){Object.defineProperty(e.config,"isNativeTag",{value:t=>ip(t)||cp(t),writable:!1})}function oh(e){{const t=e.config.isCustomElement;Object.defineProperty(e.config,"isCustomElement",{get(){return t},set(){L("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const a=e.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(e.config,"compilerOptions",{get(){return L(o),a},set(){L(o)}})}}function lh(e){if(Ve(e)){const t=document.querySelector(e);return t||L(`Failed to mount app: mount target selector "${e}" returned null.`),t}return window.ShadowRoot&&e instanceof window.ShadowRoot&&e.mode==="closed"&&L('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),e}function rh(){Lf()}rh();const Gc=Symbol("v-click-clicks"),Jc=Symbol("v-click-clicks-elements"),ih=Symbol("v-click-clicks-order-map"),Qc=Symbol("v-click-clicks-disabled"),Xc=Symbol("slidev-slide-scale"),G=Symbol("slidev-slidev-context"),ch=Symbol("slidev-route"),uh=Symbol("slidev-slide-context"),ph="slidev-vclick-target",ZR="slidev-vclick-hidden",GR="slidev-vclick-fade",JR="slidev-vclick-hidden-explicitly",QR="slidev-vclick-current",XR="slidev-vclick-prior";function eu(e){return e=e??[],Array.isArray(e)?e:[e]}function dh(e,t){if(!e)return!1;const a=e.indexOf(t);return a>=0?(e.splice(a,1),!0):!1}function fh(...e){let t,a,o;e.length===1?(t=0,o=1,[a]=e):[t,a,o=1]=e;const l=[];let r=t;for(;r<a;)l.push(r),r+=o||1;return l}function hh(e){return e!=null}function mh(e,t){return Object.fromEntries(Object.entries(e).map(([a,o])=>t(a,o)).filter(hh))}const Fs={theme:"default",title:"Vue的组合式开发",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",presenter:!0},Ie=Fs,bt=Ie.aspectRatio??16/9,wt=Ie.canvasWidth??980,Pl=Math.ceil(wt/bt),Tl=T(()=>mh(Ie.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Tn(e,t,a){Object.defineProperty(e,t,{value:a,writable:!0,enumerable:!1})}const ns=tn({page:0,clicks:0});let vh=[],kh=[];Tn(ns,"$syncUp",!0);Tn(ns,"$syncDown",!0);Tn(ns,"$paused",!1);Tn(ns,"$onSet",e=>vh.push(e));Tn(ns,"$onPatch",e=>kh.push(e));Tn(ns,"$patch",async()=>!1);function nu(e,t,a=!1){const o=[];let l=!1,r=!1,i,c;const u=tn(t);function p(v){o.push(v)}function f(v,k){clearTimeout(i),l=!0,u[v]=k,i=setTimeout(()=>l=!1,0)}function d(v){l||(clearTimeout(c),r=!0,Object.entries(v).forEach(([k,y])=>{u[k]=y}),c=setTimeout(()=>r=!1,0))}function h(v){let k;a?a&&window.addEventListener("storage",x=>{x&&x.key===v&&x.newValue&&d(JSON.parse(x.newValue))}):(k=new BroadcastChannel(v),k.addEventListener("message",x=>d(x.data)));function y(){!a&&k&&!r?k.postMessage(de(u)):a&&!r&&window.localStorage.setItem(v,JSON.stringify(u)),l||o.forEach(x=>x(u))}if(Fe(u,y,{deep:!0}),a){const x=window.localStorage.getItem(v);x&&d(JSON.parse(x))}}return{init:h,onPatch:p,patch:f,state:u}}const{init:eE,onPatch:nE,patch:tE,state:_o}=nu(ns,{page:1,clicks:0}),ts=tn({});let _h=[],gh=[];Tn(ts,"$syncUp",!0);Tn(ts,"$syncDown",!0);Tn(ts,"$paused",!1);Tn(ts,"$onSet",e=>_h.push(e));Tn(ts,"$onPatch",e=>gh.push(e));Tn(ts,"$patch",async()=>!1);const{init:sE,onPatch:yh,patch:tu,state:Na}=nu(ts,{},!1),bh="modulepreload",wh=function(e){return"/"+e},Or={},Jt=function(t,a,o){if(!a||a.length===0)return t();const l=document.getElementsByTagName("link");return Promise.all(a.map(r=>{if(r=wh(r),r in Or)return;Or[r]=!0;const i=r.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!o)for(let f=l.length-1;f>=0;f--){const d=l[f];if(d.href===r&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const p=document.createElement("link");if(p.rel=i?"stylesheet":bh,i||(p.as="script",p.crossOrigin=""),p.href=r,document.head.appendChild(p),i)return new Promise((f,d)=>{p.addEventListener("load",f),p.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var Ar;const Hn=typeof window<"u",xh=e=>typeof e<"u",$h=Object.prototype.toString,Qs=e=>typeof e=="function",aE=e=>typeof e=="number",su=e=>typeof e=="string",oE=e=>$h.call(e)==="[object Object]",Ko=()=>+Date.now(),ks=()=>{},Rh=Hn&&((Ar=window==null?void 0:window.navigator)==null?void 0:Ar.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pn(e){return typeof e=="function"?e():w(e)}function Eh(e,t){function a(...o){return new Promise((l,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(r)})}return a}const au=e=>e();function Sh(e=au){const t=ne(!0);function a(){t.value=!1}function o(){t.value=!0}const l=(...r)=>{t.value&&e(...r)};return{isActive:zn(t),pause:a,resume:o,eventFilter:l}}function Ch(e){return e}function Ph(e,t){var a;if(typeof e=="number")return e+t;const o=((a=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:a[0])||"",l=e.slice(o.length),r=parseFloat(o)+t;return Number.isNaN(r)?e:r+l}function Th(e,t){let a,o,l;const r=ne(!0),i=()=>{r.value=!0,l()};Fe(e,i,{flush:"sync"});const c=Qs(t)?t:t.get,u=Qs(t)?void 0:t.set,p=ic((f,d)=>(o=f,l=d,{get(){return r.value&&(a=c(),r.value=!1),o(),a},set(h){u==null||u(h)}}));return Object.isExtensible(p)&&(p.trigger=i),p}function Gn(e){return _p()?(gp(e),!0):!1}function Mr(e,t){const a=(t==null?void 0:t.computedGetter)===!1?w:pn;return function(...o){return T(()=>e.apply(this,o.map(l=>a(l))))}}function Oh(e){if(!xe(e))return tn(e);const t=new Proxy({},{get(a,o,l){return w(Reflect.get(e.value,o,l))},set(a,o,l){return xe(e.value[o])&&!xe(l)?e.value[o].value=l:e.value[o]=l,!0},deleteProperty(a,o){return Reflect.deleteProperty(e.value,o)},has(a,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return tn(t)}function ou(e){return typeof e=="function"?T(e):ne(e)}var Ah=Object.defineProperty,Mh=Object.defineProperties,Ih=Object.getOwnPropertyDescriptors,Ir=Object.getOwnPropertySymbols,Lh=Object.prototype.hasOwnProperty,Dh=Object.prototype.propertyIsEnumerable,Lr=(e,t,a)=>t in e?Ah(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Nh=(e,t)=>{for(var a in t||(t={}))Lh.call(t,a)&&Lr(e,a,t[a]);if(Ir)for(var a of Ir(t))Dh.call(t,a)&&Lr(e,a,t[a]);return e},Fh=(e,t)=>Mh(e,Ih(t));function Vh(e){if(!xe(e))return Gp(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const a in e.value)t[a]=ic(()=>({get(){return e.value[a]},set(o){if(Array.isArray(e.value)){const l=[...e.value];l[a]=o,e.value=l}else{const l=Fh(Nh({},e.value),{[a]:o});Object.setPrototypeOf(l,e.value),e.value=l}}}));return t}function lo(e,t=!0){Pt()?no(e):t?e():jn(e)}function jh(e,t=1e3,a={}){const{immediate:o=!0,immediateCallback:l=!1}=a;let r=null;const i=ne(!1);function c(){r&&(clearInterval(r),r=null)}function u(){i.value=!1,c()}function p(){const f=pn(t);f<=0||(i.value=!0,l&&e(),c(),r=setInterval(e,f))}if(o&&Hn&&p(),xe(t)||Qs(t)){const f=Fe(t,()=>{i.value&&Hn&&p()});Gn(f)}return Gn(u),{isActive:i,pause:u,resume:p}}function Hh(e,t,a={}){const{immediate:o=!0}=a,l=ne(!1);let r=null;function i(){r&&(clearTimeout(r),r=null)}function c(){l.value=!1,i()}function u(...p){i(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,e(...p)},pn(t))}return o&&(l.value=!0,Hn&&u()),Gn(c),{isPending:zn(l),start:u,stop:c}}function Ol(e=!1,t={}){const{truthyValue:a=!0,falsyValue:o=!1}=t,l=xe(e),r=ne(e);function i(c){if(arguments.length)return r.value=c,r.value;{const u=pn(a);return r.value=r.value===u?pn(o):u,r.value}}return l?i:[r,i]}var Dr=Object.getOwnPropertySymbols,Uh=Object.prototype.hasOwnProperty,Bh=Object.prototype.propertyIsEnumerable,Wh=(e,t)=>{var a={};for(var o in e)Uh.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&Dr)for(var o of Dr(e))t.indexOf(o)<0&&Bh.call(e,o)&&(a[o]=e[o]);return a};function Kh(e,t,a={}){const o=a,{eventFilter:l=au}=o,r=Wh(o,["eventFilter"]);return Fe(e,Eh(l,t),r)}var zh=Object.defineProperty,qh=Object.defineProperties,Yh=Object.getOwnPropertyDescriptors,Fa=Object.getOwnPropertySymbols,lu=Object.prototype.hasOwnProperty,ru=Object.prototype.propertyIsEnumerable,Nr=(e,t,a)=>t in e?zh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Zh=(e,t)=>{for(var a in t||(t={}))lu.call(t,a)&&Nr(e,a,t[a]);if(Fa)for(var a of Fa(t))ru.call(t,a)&&Nr(e,a,t[a]);return e},Gh=(e,t)=>qh(e,Yh(t)),Jh=(e,t)=>{var a={};for(var o in e)lu.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&Fa)for(var o of Fa(e))t.indexOf(o)<0&&ru.call(e,o)&&(a[o]=e[o]);return a};function Qh(e,t,a={}){const o=a,{eventFilter:l}=o,r=Jh(o,["eventFilter"]),{eventFilter:i,pause:c,resume:u,isActive:p}=Sh(l);return{stop:Kh(e,t,Gh(Zh({},r),{eventFilter:i})),pause:c,resume:u,isActive:p}}function Pn(e){var t;const a=pn(e);return(t=a==null?void 0:a.$el)!=null?t:a}const Je=Hn?window:void 0,iu=Hn?window.document:void 0,Xh=Hn?window.navigator:void 0;function Ce(...e){let t,a,o,l;if(su(e[0])||Array.isArray(e[0])?([a,o,l]=e,t=Je):[t,a,o,l]=e,!t)return ks;Array.isArray(a)||(a=[a]),Array.isArray(o)||(o=[o]);const r=[],i=()=>{r.forEach(f=>f()),r.length=0},c=(f,d,h,v)=>(f.addEventListener(d,h,v),()=>f.removeEventListener(d,h,v)),u=Fe(()=>[Pn(t),pn(l)],([f,d])=>{i(),f&&r.push(...a.flatMap(h=>o.map(v=>c(f,h,v,d))))},{immediate:!0,flush:"post"}),p=()=>{u(),i()};return Gn(p),p}let Fr=!1;function em(e,t,a={}){const{window:o=Je,ignore:l=[],capture:r=!0,detectIframe:i=!1}=a;if(!o)return;Rh&&!Fr&&(Fr=!0,Array.from(o.document.body.children).forEach(h=>h.addEventListener("click",ks)));let c=!0;const u=h=>l.some(v=>{if(typeof v=="string")return Array.from(o.document.querySelectorAll(v)).some(k=>k===h.target||h.composedPath().includes(k));{const k=Pn(v);return k&&(h.target===k||h.composedPath().includes(k))}}),f=[Ce(o,"click",h=>{const v=Pn(e);if(!(!v||v===h.target||h.composedPath().includes(v))){if(h.detail===0&&(c=!u(h)),!c){c=!0;return}t(h)}},{passive:!0,capture:r}),Ce(o,"pointerdown",h=>{const v=Pn(e);v&&(c=!h.composedPath().includes(v)&&!u(h))},{passive:!0}),i&&Ce(o,"blur",h=>{var v;const k=Pn(e);((v=o.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(k!=null&&k.contains(o.document.activeElement))&&t(h)})].filter(Boolean);return()=>f.forEach(h=>h())}const nm=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0;function tm(...e){let t,a,o={};e.length===3?(t=e[0],a=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,a=e[0],o=e[1]):(t=e[0],a=e[1]):(t=!0,a=e[0]);const{target:l=Je,eventName:r="keydown",passive:i=!1}=o,c=nm(t);return Ce(l,r,p=>{c(p)&&a(p)},i)}function sm(e={}){var t;const{window:a=Je}=e,o=(t=e.document)!=null?t:a==null?void 0:a.document,l=Th(()=>null,()=>o==null?void 0:o.activeElement);return a&&(Ce(a,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),Ce(a,"focus",l.trigger,!0)),l}function ia(e,t=!1){const a=ne(),o=()=>a.value=Boolean(e());return o(),lo(o,t),a}function us(e,t={}){const{window:a=Je}=t,o=ia(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let l;const r=ne(!1),i=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",c):l.removeListener(c))},c=()=>{o.value&&(i(),l=a.matchMedia(ou(e).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",c):l.addListener(c))};return ws(c),Gn(()=>i()),r}const am={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var om=Object.defineProperty,Vr=Object.getOwnPropertySymbols,lm=Object.prototype.hasOwnProperty,rm=Object.prototype.propertyIsEnumerable,jr=(e,t,a)=>t in e?om(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,im=(e,t)=>{for(var a in t||(t={}))lm.call(t,a)&&jr(e,a,t[a]);if(Vr)for(var a of Vr(t))rm.call(t,a)&&jr(e,a,t[a]);return e};function cm(e,t={}){function a(c,u){let p=e[c];return u!=null&&(p=Ph(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=Je}=t;function l(c){return o?o.matchMedia(c).matches:!1}const r=c=>us(`(min-width: ${a(c)})`,t),i=Object.keys(e).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>r(u),enumerable:!0,configurable:!0}),c),{});return im({greater(c){return us(`(min-width: ${a(c,.1)})`,t)},greaterOrEqual:r,smaller(c){return us(`(max-width: ${a(c,-.1)})`,t)},smallerOrEqual(c){return us(`(max-width: ${a(c)})`,t)},between(c,u){return us(`(min-width: ${a(c)}) and (max-width: ${a(u,-.1)})`,t)},isGreater(c){return l(`(min-width: ${a(c,.1)})`)},isGreaterOrEqual(c){return l(`(min-width: ${a(c)})`)},isSmaller(c){return l(`(max-width: ${a(c,-.1)})`)},isSmallerOrEqual(c){return l(`(max-width: ${a(c)})`)},isInBetween(c,u){return l(`(min-width: ${a(c)}) and (max-width: ${a(u,-.1)})`)}},i)}function um(e={}){const{navigator:t=Xh,read:a=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=e,i=["copy","cut"],c=ia(()=>t&&"clipboard"in t),u=T(()=>c.value||r),p=ne(""),f=ne(!1),d=Hh(()=>f.value=!1,l);function h(){c.value?t.clipboard.readText().then(x=>{p.value=x}):p.value=y()}if(u.value&&a)for(const x of i)Ce(x,h);async function v(x=pn(o)){u.value&&x!=null&&(c.value?await t.clipboard.writeText(x):k(x),p.value=x,f.value=!0,d.start())}function k(x){const P=document.createElement("textarea");P.value=x??"",P.style.position="absolute",P.style.opacity="0",document.body.appendChild(P),P.select(),document.execCommand("copy"),P.remove()}function y(){var x,P,E;return(E=(P=(x=document==null?void 0:document.getSelection)==null?void 0:x.call(document))==null?void 0:P.toString())!=null?E:""}return{isSupported:u,text:p,copied:f,copy:v}}function pm(e){return JSON.parse(JSON.stringify(e))}const zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qo="__vueuse_ssr_handlers__";zo[qo]=zo[qo]||{};const dm=zo[qo];function cu(e,t){return dm[e]||t}function fm(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var hm=Object.defineProperty,Hr=Object.getOwnPropertySymbols,mm=Object.prototype.hasOwnProperty,vm=Object.prototype.propertyIsEnumerable,Ur=(e,t,a)=>t in e?hm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Br=(e,t)=>{for(var a in t||(t={}))mm.call(t,a)&&Ur(e,a,t[a]);if(Hr)for(var a of Hr(t))vm.call(t,a)&&Ur(e,a,t[a]);return e};const km={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Wr="vueuse-storage";function On(e,t,a,o={}){var l;const{flush:r="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:f,window:d=Je,eventFilter:h,onError:v=q=>{console.error(q)}}=o,k=(f?Zn:ne)(t);if(!a)try{a=cu("getDefaultStorage",()=>{var q;return(q=Je)==null?void 0:q.localStorage})()}catch(q){v(q)}if(!a)return k;const y=pn(t),x=fm(y),P=(l=o.serializer)!=null?l:km[x],{pause:E,resume:C}=Qh(k,()=>O(k.value),{flush:r,deep:i,eventFilter:h});return d&&c&&(Ce(d,"storage",Z),Ce(d,Wr,H)),Z(),k;function O(q){try{if(q==null)a.removeItem(e);else{const oe=P.write(q),ie=a.getItem(e);ie!==oe&&(a.setItem(e,oe),d&&d.dispatchEvent(new CustomEvent(Wr,{detail:{key:e,oldValue:ie,newValue:oe,storageArea:a}})))}}catch(oe){v(oe)}}function U(q){const oe=q?q.newValue:a.getItem(e);if(oe==null)return u&&y!==null&&a.setItem(e,P.write(y)),y;if(!q&&p){const ie=P.read(oe);return Qs(p)?p(ie,y):x==="object"&&!Array.isArray(ie)?Br(Br({},y),ie):ie}else return typeof oe!="string"?oe:P.read(oe)}function H(q){Z(q.detail)}function Z(q){if(!(q&&q.storageArea!==a)){if(q&&q.key==null){k.value=y;return}if(!(q&&q.key!==e)){E();try{k.value=U(q)}catch(oe){v(oe)}finally{q?jn(C):C()}}}}}function Al(e){return us("(prefers-color-scheme: dark)",e)}var _m=Object.defineProperty,Kr=Object.getOwnPropertySymbols,gm=Object.prototype.hasOwnProperty,ym=Object.prototype.propertyIsEnumerable,zr=(e,t,a)=>t in e?_m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,bm=(e,t)=>{for(var a in t||(t={}))gm.call(t,a)&&zr(e,a,t[a]);if(Kr)for(var a of Kr(t))ym.call(t,a)&&zr(e,a,t[a]);return e};function uu(e={}){const{selector:t="html",attribute:a="class",initialValue:o="auto",window:l=Je,storage:r,storageKey:i="vueuse-color-scheme",listenToStorageChanges:c=!0,storageRef:u,emitAuto:p}=e,f=bm({auto:"",light:"light",dark:"dark"},e.modes||{}),d=Al({window:l}),h=T(()=>d.value?"dark":"light"),v=u||(i==null?ne(o):On(i,o,r,{window:l,listenToStorageChanges:c})),k=T({get(){return v.value==="auto"&&!p?h.value:v.value},set(E){v.value=E}}),y=cu("updateHTMLAttrs",(E,C,O)=>{const U=l==null?void 0:l.document.querySelector(E);if(U)if(C==="class"){const H=O.split(/\s/g);Object.values(f).flatMap(Z=>(Z||"").split(/\s/g)).filter(Boolean).forEach(Z=>{H.includes(Z)?U.classList.add(Z):U.classList.remove(Z)})}else U.setAttribute(C,O)});function x(E){var C;const O=E==="auto"?h.value:E;y(t,a,(C=f[O])!=null?C:O)}function P(E){e.onChanged?e.onChanged(E,x):x(E)}return Fe(k,P,{flush:"post",immediate:!0}),p&&Fe(h,()=>P(k.value),{flush:"post"}),lo(()=>P(k.value)),k}var wm=Object.defineProperty,xm=Object.defineProperties,$m=Object.getOwnPropertyDescriptors,qr=Object.getOwnPropertySymbols,Rm=Object.prototype.hasOwnProperty,Em=Object.prototype.propertyIsEnumerable,Yr=(e,t,a)=>t in e?wm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Sm=(e,t)=>{for(var a in t||(t={}))Rm.call(t,a)&&Yr(e,a,t[a]);if(qr)for(var a of qr(t))Em.call(t,a)&&Yr(e,a,t[a]);return e},Cm=(e,t)=>xm(e,$m(t));function Pm(e={}){const{valueDark:t="dark",valueLight:a="",window:o=Je}=e,l=uu(Cm(Sm({},e),{onChanged:(c,u)=>{var p;e.onChanged?(p=e.onChanged)==null||p.call(e,c==="dark"):u(c)},modes:{dark:t,light:a}})),r=Al({window:o});return T({get(){return l.value==="dark"},set(c){c===r.value?l.value="auto":l.value=c?"dark":"light"}})}var Tm=Object.defineProperty,Om=Object.defineProperties,Am=Object.getOwnPropertyDescriptors,Zr=Object.getOwnPropertySymbols,Mm=Object.prototype.hasOwnProperty,Im=Object.prototype.propertyIsEnumerable,Gr=(e,t,a)=>t in e?Tm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Lm=(e,t)=>{for(var a in t||(t={}))Mm.call(t,a)&&Gr(e,a,t[a]);if(Zr)for(var a of Zr(t))Im.call(t,a)&&Gr(e,a,t[a]);return e},Dm=(e,t)=>Om(e,Am(t));function lE(e,t={}){var a,o,l;const r=(a=t.draggingElement)!=null?a:Je,i=(o=t.handle)!=null?o:e,c=ne((l=pn(t.initialValue))!=null?l:{x:0,y:0}),u=ne(),p=k=>t.pointerTypes?t.pointerTypes.includes(k.pointerType):!0,f=k=>{pn(t.preventDefault)&&k.preventDefault(),pn(t.stopPropagation)&&k.stopPropagation()},d=k=>{var y;if(!p(k)||pn(t.exact)&&k.target!==pn(e))return;const x=pn(e).getBoundingClientRect(),P={x:k.clientX-x.left,y:k.clientY-x.top};((y=t.onStart)==null?void 0:y.call(t,P,k))!==!1&&(u.value=P,f(k))},h=k=>{var y;p(k)&&u.value&&(c.value={x:k.clientX-u.value.x,y:k.clientY-u.value.y},(y=t.onMove)==null||y.call(t,c.value,k),f(k))},v=k=>{var y;p(k)&&u.value&&(u.value=void 0,(y=t.onEnd)==null||y.call(t,c.value,k),f(k))};return Hn&&(Ce(i,"pointerdown",d,!0),Ce(r,"pointermove",h,!0),Ce(r,"pointerup",v,!0)),Dm(Lm({},Vh(c)),{position:c,isDragging:T(()=>!!u.value),style:T(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var Jr=Object.getOwnPropertySymbols,Nm=Object.prototype.hasOwnProperty,Fm=Object.prototype.propertyIsEnumerable,Vm=(e,t)=>{var a={};for(var o in e)Nm.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&Jr)for(var o of Jr(e))t.indexOf(o)<0&&Fm.call(e,o)&&(a[o]=e[o]);return a};function jm(e,t,a={}){const o=a,{window:l=Je}=o,r=Vm(o,["window"]);let i;const c=ia(()=>l&&"ResizeObserver"in l),u=()=>{i&&(i.disconnect(),i=void 0)},p=Fe(()=>Pn(e),d=>{u(),c.value&&l&&d&&(i=new ResizeObserver(t),i.observe(d,r))},{immediate:!0,flush:"post"}),f=()=>{u(),p()};return Gn(f),{isSupported:c,stop:f}}function Hm(e,t={}){const{immediate:a=!0,window:o=Je}=t,l=ne(!1);let r=0,i=null;function c(f){if(!l.value||!o)return;const d=f-r;e({delta:d,timestamp:f}),r=f,i=o.requestAnimationFrame(c)}function u(){!l.value&&o&&(l.value=!0,i=o.requestAnimationFrame(c))}function p(){l.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return a&&u(),Gn(p),{isActive:zn(l),pause:p,resume:u}}function Um(e,t={width:0,height:0},a={}){const{window:o=Je,box:l="content-box"}=a,r=T(()=>{var u,p;return(p=(u=Pn(e))==null?void 0:u.namespaceURI)==null?void 0:p.includes("svg")}),i=ne(t.width),c=ne(t.height);return jm(e,([u])=>{const p=l==="border-box"?u.borderBoxSize:l==="content-box"?u.contentBoxSize:u.devicePixelContentBoxSize;if(o&&r.value){const f=Pn(e);if(f){const d=o.getComputedStyle(f);i.value=parseFloat(d.width),c.value=parseFloat(d.height)}}else if(p){const f=Array.isArray(p)?p:[p];i.value=f.reduce((d,{inlineSize:h})=>d+h,0),c.value=f.reduce((d,{blockSize:h})=>d+h,0)}else i.value=u.contentRect.width,c.value=u.contentRect.height},a),Fe(()=>Pn(e),u=>{i.value=u?t.width:0,c.value=u?t.height:0}),{width:i,height:c}}const Qr=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Bm(e,t={}){const{document:a=iu,autoExit:o=!1}=t,l=e||(a==null?void 0:a.querySelector("html")),r=ne(!1);let i=Qr[0];const c=ia(()=>{if(a){for(const y of Qr)if(y[1]in a)return i=y,!0}else return!1;return!1}),[u,p,f,,d]=i;async function h(){c.value&&(a!=null&&a[f]&&await a[p](),r.value=!1)}async function v(){if(!c.value)return;await h();const y=Pn(l);y&&(await y[u](),r.value=!0)}async function k(){r.value?await h():await v()}return a&&Ce(a,d,()=>{r.value=!!(a!=null&&a[f])},!1),o&&Gn(h),{isSupported:c,isFullscreen:r,enter:v,exit:h,toggle:k}}function rE(e,t,a={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:i=Je}=a,c=ia(()=>i&&"IntersectionObserver"in i);let u=ks;const p=c.value?Fe(()=>({el:Pn(e),root:Pn(o)}),({el:d,root:h})=>{if(u(),!d)return;const v=new IntersectionObserver(t,{root:h,rootMargin:l,threshold:r});v.observe(d),u=()=>{v.disconnect(),u=ks}},{immediate:!0,flush:"post"}):ks,f=()=>{u(),p()};return Gn(f),{isSupported:c,stop:f}}const Wm={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Km(e={}){const{reactive:t=!1,target:a=Je,aliasMap:o=Wm,passive:l=!0,onEventFired:r=ks}=e,i=tn(new Set),c={toJSON(){return{}},current:i},u=t?tn(c):c,p=new Set,f=new Set;function d(y,x){y in u&&(t?u[y]=x:u[y].value=x)}function h(){i.clear();for(const y of f)d(y,!1)}function v(y,x){var P,E;const C=(P=y.key)==null?void 0:P.toLowerCase(),U=[(E=y.code)==null?void 0:E.toLowerCase(),C].filter(Boolean);C&&(x?i.add(C):i.delete(C));for(const H of U)f.add(H),d(H,x);C==="meta"&&!x?(p.forEach(H=>{i.delete(H),d(H,!1)}),p.clear()):typeof y.getModifierState=="function"&&y.getModifierState("Meta")&&x&&[...i,...U].forEach(H=>p.add(H))}Ce(a,"keydown",y=>(v(y,!0),r(y)),{passive:l}),Ce(a,"keyup",y=>(v(y,!1),r(y)),{passive:l}),Ce("blur",h,{passive:!0}),Ce("focus",h,{passive:!0});const k=new Proxy(u,{get(y,x,P){if(typeof x!="string")return Reflect.get(y,x,P);if(x=x.toLowerCase(),x in o&&(x=o[x]),!(x in u))if(/[+_-]/.test(x)){const C=x.split(/[+_-]/g).map(O=>O.trim());u[x]=T(()=>C.every(O=>w(k[O])))}else u[x]=ne(!1);const E=Reflect.get(y,x,P);return t?w(E):E}});return k}function iE(e={}){const{type:t="page",touch:a=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=Je,eventFilter:i}=e,c=ne(l.x),u=ne(l.y),p=ne(null),f=y=>{t==="page"?(c.value=y.pageX,u.value=y.pageY):t==="client"?(c.value=y.clientX,u.value=y.clientY):t==="movement"&&(c.value=y.movementX,u.value=y.movementY),p.value="mouse"},d=()=>{c.value=l.x,u.value=l.y},h=y=>{if(y.touches.length>0){const x=y.touches[0];t==="page"?(c.value=x.pageX,u.value=x.pageY):t==="client"&&(c.value=x.clientX,u.value=x.clientY),p.value="touch"}},v=y=>i===void 0?f(y):i(()=>f(y),{}),k=y=>i===void 0?h(y):i(()=>h(y),{});return r&&(Ce(r,"mousemove",v,{passive:!0}),Ce(r,"dragover",v,{passive:!0}),a&&t!=="movement"&&(Ce(r,"touchstart",k,{passive:!0}),Ce(r,"touchmove",k,{passive:!0}),o&&Ce(r,"touchend",d,{passive:!0}))),{x:c,y:u,sourceType:p}}var at;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(at||(at={}));function zm(e,t={}){const a=ou(e),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:i}=t,c=tn({x:0,y:0}),u=(H,Z)=>{c.x=H,c.y=Z},p=tn({x:0,y:0}),f=(H,Z)=>{p.x=H,p.y=Z},d=T(()=>c.x-p.x),h=T(()=>c.y-p.y),{max:v,abs:k}=Math,y=T(()=>v(k(d.value),k(h.value))>=o),x=ne(!1),P=ne(!1),E=T(()=>y.value?k(d.value)>k(h.value)?d.value>0?at.LEFT:at.RIGHT:h.value>0?at.UP:at.DOWN:at.NONE),C=H=>{var Z,q,oe;const ie=H.buttons===0,ge=H.buttons===1;return(oe=(q=(Z=t.pointerTypes)==null?void 0:Z.includes(H.pointerType))!=null?q:ie||ge)!=null?oe:!0},O=[Ce(e,"pointerdown",H=>{var Z,q;if(!C(H))return;P.value=!0,(q=(Z=a.value)==null?void 0:Z.style)==null||q.setProperty("touch-action","none");const oe=H.target;oe==null||oe.setPointerCapture(H.pointerId);const{clientX:ie,clientY:ge}=H;u(ie,ge),f(ie,ge),i==null||i(H)}),Ce(e,"pointermove",H=>{if(!C(H)||!P.value)return;const{clientX:Z,clientY:q}=H;f(Z,q),!x.value&&y.value&&(x.value=!0),x.value&&(l==null||l(H))}),Ce(e,"pointerup",H=>{var Z,q;C(H)&&(x.value&&(r==null||r(H,E.value)),P.value=!1,x.value=!1,(q=(Z=a.value)==null?void 0:Z.style)==null||q.setProperty("touch-action","initial"))})],U=()=>O.forEach(H=>H());return{isSwiping:zn(x),direction:zn(E),posStart:zn(c),posEnd:zn(p),distanceX:d,distanceY:h,stop:U}}let qm=0;function cE(e,t={}){const a=ne(!1),{document:o=iu,immediate:l=!0,manual:r=!1,id:i=`vueuse_styletag_${++qm}`}=t,c=ne(e);let u=()=>{};const p=()=>{if(!o)return;const d=o.getElementById(i)||o.createElement("style");d.isConnected||(d.type="text/css",d.id=i,t.media&&(d.media=t.media),o.head.appendChild(d)),!a.value&&(u=Fe(c,h=>{d.textContent=h},{immediate:!0}),a.value=!0)},f=()=>{!o||!a.value||(u(),o.head.removeChild(o.getElementById(i)),a.value=!1)};return l&&!r&&lo(p),r||Gn(f),{id:i,css:c,unload:f,load:p,isLoaded:zn(a)}}var Ym=Object.defineProperty,Xr=Object.getOwnPropertySymbols,Zm=Object.prototype.hasOwnProperty,Gm=Object.prototype.propertyIsEnumerable,ei=(e,t,a)=>t in e?Ym(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Jm=(e,t)=>{for(var a in t||(t={}))Zm.call(t,a)&&ei(e,a,t[a]);if(Xr)for(var a of Xr(t))Gm.call(t,a)&&ei(e,a,t[a]);return e};function uE(e={}){const{controls:t=!1,offset:a=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=e,i=ne(Ko()+a),c=()=>i.value=Ko()+a,u=r?()=>{c(),r(i.value)}:c,p=l==="requestAnimationFrame"?Hm(u,{immediate:o}):jh(u,l,{immediate:o});return t?Jm({timestamp:i},p):i}var Qm=Object.defineProperty,ni=Object.getOwnPropertySymbols,Xm=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable,ti=(e,t,a)=>t in e?Qm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,nv=(e,t)=>{for(var a in t||(t={}))Xm.call(t,a)&&ti(e,a,t[a]);if(ni)for(var a of ni(t))ev.call(t,a)&&ti(e,a,t[a]);return e};const tv={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};nv({linear:Ch},tv);function Fn(e,t,a,o={}){var l,r,i;const{clone:c=!1,passive:u=!1,eventName:p,deep:f=!1,defaultValue:d}=o,h=Pt(),v=a||(h==null?void 0:h.emit)||((l=h==null?void 0:h.$emit)==null?void 0:l.bind(h))||((i=(r=h==null?void 0:h.proxy)==null?void 0:r.$emit)==null?void 0:i.bind(h==null?void 0:h.proxy));let k=p;t||(t="modelValue"),k=p||k||`update:${t.toString()}`;const y=P=>c?Qs(c)?c(P):pm(P):P,x=()=>xh(e[t])?y(e[t]):d;if(u){const P=x(),E=ne(P);return Fe(()=>e[t],C=>E.value=y(C)),Fe(E,C=>{(C!==e[t]||f)&&v(k,C)},{deep:f}),E}else return T({get(){return x()},set(P){v(k,P)}})}function pu(e,t,a={}){const o={};for(const l in e)o[l]=Fn(e,l,t,a);return o}function pE({window:e=Je}={}){if(!e)return ne(!1);const t=ne(e.document.hasFocus());return Ce(e,"blur",()=>{t.value=!1}),Ce(e,"focus",()=>{t.value=!0}),t}function sv(e={}){const{window:t=Je,initialWidth:a=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=e,i=ne(a),c=ne(o),u=()=>{t&&(r?(i.value=t.innerWidth,c.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,c.value=t.document.documentElement.clientHeight))};return u(),lo(u),Ce("resize",u,{passive:!0}),l&&Ce("orientationchange",u,{passive:!0}),{width:i,height:c}}function av(){return du().__VUE_DEVTOOLS_GLOBAL_HOOK__}function du(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const ov=typeof Proxy=="function",lv="devtools-plugin:setup",rv="plugin:settings:set";let as,Yo;function iv(){var e;return as!==void 0||(typeof window<"u"&&window.performance?(as=!0,Yo=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(as=!0,Yo=global.perf_hooks.performance):as=!1),as}function cv(){return iv()?Yo.now():Date.now()}class uv{constructor(t,a){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=a;const o={};if(t.settings)for(const i in t.settings){const c=t.settings[i];o[i]=c.defaultValue}const l=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},o);try{const i=localStorage.getItem(l),c=JSON.parse(i);Object.assign(r,c)}catch{}this.fallbacks={getSettings(){return r},setSettings(i){try{localStorage.setItem(l,JSON.stringify(i))}catch{}r=i},now(){return cv()}},a&&a.on(rv,(i,c)=>{i===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(i,c)=>this.target?this.target.on[c]:(...u)=>{this.onQueue.push({method:c,args:u})}}),this.proxiedTarget=new Proxy({},{get:(i,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...u)=>(this.targetQueue.push({method:c,args:u,resolve:()=>{}}),this.fallbacks[c](...u)):(...u)=>new Promise(p=>{this.targetQueue.push({method:c,args:u,resolve:p})})})}async setRealTarget(t){this.target=t;for(const a of this.onQueue)this.target.on[a.method](...a.args);for(const a of this.targetQueue)a.resolve(await this.target[a.method](...a.args))}}function pv(e,t){const a=e,o=du(),l=av(),r=ov&&a.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(lv,e,t);else{const i=r?new uv(a,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:a,setupFn:t,proxy:i}),i&&t(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const tt=typeof window<"u";function dv(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function go(e,t){const a={};for(const o in t){const l=t[o];a[o]=En(l)?l.map(e):e(l)}return a}const Us=()=>{},En=Array.isArray;function we(e){const t=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+e].concat(t))}const fv=/\/$/,hv=e=>e.replace(fv,"");function yo(e,t,a="/"){let o,l={},r="",i="";const c=t.indexOf("#");let u=t.indexOf("?");return c<u&&c>=0&&(u=-1),u>-1&&(o=t.slice(0,u),r=t.slice(u+1,c>-1?c:t.length),l=e(r)),c>-1&&(o=o||t.slice(0,c),i=t.slice(c,t.length)),o=kv(o??t,a),{fullPath:o+(r&&"?")+r+i,path:o,query:l,hash:i}}function mv(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function si(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ai(e,t,a){const o=t.matched.length-1,l=a.matched.length-1;return o>-1&&o===l&&St(t.matched[o],a.matched[l])&&fu(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function St(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function fu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!vv(e[a],t[a]))return!1;return!0}function vv(e,t){return En(e)?oi(e,t):En(t)?oi(t,e):e===t}function oi(e,t){return En(t)?e.length===t.length&&e.every((a,o)=>a===t[o]):e.length===1&&e[0]===t}function kv(e,t){if(e.startsWith("/"))return e;if(!t.startsWith("/"))return we(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`),e;if(!e)return t;const a=t.split("/"),o=e.split("/");let l=a.length-1,r,i;for(r=0;r<o.length;r++)if(i=o[r],i!==".")if(i==="..")l>1&&l--;else break;return a.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Xs;(function(e){e.pop="pop",e.push="push"})(Xs||(Xs={}));var Bs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Bs||(Bs={}));function _v(e){if(!e)if(tt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),hv(e)}const gv=/^[^#]+#/;function yv(e,t){return e.replace(gv,"#")+t}function bv(e,t){const a=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-a.left-(t.left||0),top:o.top-a.top-(t.top||0)}}const ro=()=>({left:window.pageXOffset,top:window.pageYOffset});function wv(e){let t;if("el"in e){const a=e.el,o=typeof a=="string"&&a.startsWith("#");if(typeof e.el=="string"&&(!o||!document.getElementById(e.el.slice(1))))try{const r=document.querySelector(e.el);if(o&&r){we(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);return}}catch{we(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof a=="string"?o?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!l){we(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);return}t=bv(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function li(e,t){return(history.state?history.state.position-t:-1)+e}const Zo=new Map;function xv(e,t){Zo.set(e,t)}function $v(e){const t=Zo.get(e);return Zo.delete(e),t}let Rv=()=>location.protocol+"//"+location.host;function hu(e,t){const{pathname:a,search:o,hash:l}=t,r=e.indexOf("#");if(r>-1){let c=l.includes(e.slice(r))?e.slice(r).length:1,u=l.slice(c);return u[0]!=="/"&&(u="/"+u),si(u,"")}return si(a,e)+o+l}function Ev(e,t,a,o){let l=[],r=[],i=null;const c=({state:h})=>{const v=hu(e,location),k=a.value,y=t.value;let x=0;if(h){if(a.value=v,t.value=h,i&&i===k){i=null;return}x=y?h.position-y.position:0}else o(v);l.forEach(P=>{P(a.value,k,{delta:x,type:Xs.pop,direction:x?x>0?Bs.forward:Bs.back:Bs.unknown})})};function u(){i=a.value}function p(h){l.push(h);const v=()=>{const k=l.indexOf(h);k>-1&&l.splice(k,1)};return r.push(v),v}function f(){const{history:h}=window;h.state&&h.replaceState(Ee({},h.state,{scroll:ro()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f),{pauseListeners:u,listen:p,destroy:d}}function ri(e,t,a,o=!1,l=!1){return{back:e,current:t,forward:a,replaced:o,position:window.history.length,scroll:l?ro():null}}function Sv(e){const{history:t,location:a}=window,o={value:hu(e,a)},l={value:t.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(u,p,f){const d=e.indexOf("#"),h=d>-1?(a.host&&document.querySelector("base")?e:e.slice(d))+u:Rv()+e+u;try{t[f?"replaceState":"pushState"](p,"",h),l.value=p}catch(v){we("Error with push/replace State",v),a[f?"replace":"assign"](h)}}function i(u,p){const f=Ee({},t.state,ri(l.value.back,u,l.value.forward,!0),p,{position:l.value.position});r(u,f,!0),o.value=u}function c(u,p){const f=Ee({},l.value,t.state,{forward:u,scroll:ro()});t.state||we(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(f.current,f,!0);const d=Ee({},ri(o.value,u,null),{position:f.position+1},p);r(u,d,!1),o.value=u}return{location:o,state:l,push:c,replace:i}}function Cv(e){e=_v(e);const t=Sv(e),a=Ev(e,t.state,t.location,t.replace);function o(r,i=!0){i||a.pauseListeners(),history.go(r)}const l=Ee({location:"",base:e,go:o,createHref:yv.bind(null,e)},t,a);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function Pv(e){return typeof e=="string"||e&&typeof e=="object"}function mu(e){return typeof e=="string"||typeof e=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vu=Symbol("navigation failure");var ii;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ii||(ii={}));const Tv={[1]({location:e,currentLocation:t}){return`No match for
 ${JSON.stringify(e)}${t?`
while being at
`+JSON.stringify(t):""}`},[2]({from:e,to:t}){return`Redirected from "${e.fullPath}" to "${Av(t)}" via a navigation guard.`},[4]({from:e,to:t}){return`Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`},[8]({from:e,to:t}){return`Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`},[16]({from:e,to:t}){return`Avoided redundant navigation to current location: "${e.fullPath}".`}};function ys(e,t){return Ee(new Error(Tv[e](t)),{type:e,[vu]:!0},t)}function Qn(e,t){return e instanceof Error&&vu in e&&(t==null||!!(e.type&t))}const Ov=["params","query","hash"];function Av(e){if(typeof e=="string")return e;if("path"in e)return e.path;const t={};for(const a of Ov)a in e&&(t[a]=e[a]);return JSON.stringify(t,null,2)}const ci="[^/]+?",Mv={sensitive:!1,strict:!1,start:!0,end:!0},Iv=/[.+*?^${}()[\]/\\]/g;function Lv(e,t){const a=Ee({},Mv,t),o=[];let l=a.start?"^":"";const r=[];for(const p of e){const f=p.length?[]:[90];a.strict&&!p.length&&(l+="/");for(let d=0;d<p.length;d++){const h=p[d];let v=40+(a.sensitive?.25:0);if(h.type===0)d||(l+="/"),l+=h.value.replace(Iv,"\\$&"),v+=40;else if(h.type===1){const{value:k,repeatable:y,optional:x,regexp:P}=h;r.push({name:k,repeatable:y,optional:x});const E=P||ci;if(E!==ci){v+=10;try{new RegExp(`(${E})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${k}" (${E}): `+O.message)}}let C=y?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(C=x&&p.length<2?`(?:/${C})`:"/"+C),x&&(C+="?"),l+=C,v+=20,x&&(v+=-8),y&&(v+=-20),E===".*"&&(v+=-50)}f.push(v)}o.push(f)}if(a.strict&&a.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}a.strict||(l+="/?"),a.end?l+="$":a.strict&&(l+="(?:/|$)");const i=new RegExp(l,a.sensitive?"":"i");function c(p){const f=p.match(i),d={};if(!f)return null;for(let h=1;h<f.length;h++){const v=f[h]||"",k=r[h-1];d[k.name]=v&&k.repeatable?v.split("/"):v}return d}function u(p){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const v of h)if(v.type===0)f+=v.value;else if(v.type===1){const{value:k,repeatable:y,optional:x}=v,P=k in p?p[k]:"";if(En(P)&&!y)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const E=En(P)?P.join("/"):P;if(!E)if(x)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);f+=E}}return f||"/"}return{re:i,score:o,keys:r,parse:c,stringify:u}}function Dv(e,t){let a=0;for(;a<e.length&&a<t.length;){const o=t[a]-e[a];if(o)return o;a++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Nv(e,t){let a=0;const o=e.score,l=t.score;for(;a<o.length&&a<l.length;){const r=Dv(o[a],l[a]);if(r)return r;a++}if(Math.abs(l.length-o.length)===1){if(ui(o))return 1;if(ui(l))return-1}return l.length-o.length}function ui(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Fv={type:0,value:""},Vv=/[a-zA-Z0-9_]/;function jv(e){if(!e)return[[]];if(e==="/")return[[Fv]];if(!e.startsWith("/"))throw new Error(`Route paths should start with a "/": "${e}" should be "/${e}".`);function t(v){throw new Error(`ERR (${a})/"${p}": ${v}`)}let a=0,o=a;const l=[];let r;function i(){r&&l.push(r),r=[]}let c=0,u,p="",f="";function d(){p&&(a===0?r.push({type:0,value:p}):a===1||a===2||a===3?(r.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:f,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&a!==2){o=a,a=4;continue}switch(a){case 0:u==="/"?(p&&d(),i()):u===":"?(d(),a=1):h();break;case 4:h(),a=o;break;case 1:u==="("?a=2:Vv.test(u)?h():(d(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+u:a=3:f+=u;break;case 3:d(),a=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,f="";break;default:t("Unknown state");break}}return a===2&&t(`Unfinished custom RegExp for param "${p}"`),d(),i(),l}function Hv(e,t,a){const o=Lv(jv(e.path),a);{const r=new Set;for(const i of o.keys)r.has(i.name)&&we(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`),r.add(i.name)}const l=Ee(o,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function Uv(e,t){const a=[],o=new Map;t=fi({strict:!1,end:!0,sensitive:!1},t);function l(f){return o.get(f)}function r(f,d,h){const v=!h,k=Bv(f);qv(k,d),k.aliasOf=h&&h.record;const y=fi(t,f),x=[k];if("alias"in f){const C=typeof f.alias=="string"?[f.alias]:f.alias;for(const O of C)x.push(Ee({},k,{components:h?h.record.components:k.components,path:O,aliasOf:h?h.record:k}))}let P,E;for(const C of x){const{path:O}=C;if(d&&O[0]!=="/"){const U=d.record.path,H=U[U.length-1]==="/"?"":"/";C.path=d.record.path+(O&&H+O)}if(C.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(P=Hv(C,d,y),d&&O[0]==="/"&&Yv(P,d),h?(h.alias.push(P),zv(h,P)):(E=E||P,E!==P&&E.alias.push(P),v&&f.name&&!di(P)&&i(f.name)),k.children){const U=k.children;for(let H=0;H<U.length;H++)r(U[H],P,h&&h.children[H])}h=h||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&u(P)}return E?()=>{i(E)}:Us}function i(f){if(mu(f)){const d=o.get(f);d&&(o.delete(f),a.splice(a.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=a.indexOf(f);d>-1&&(a.splice(d,1),f.record.name&&o.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function c(){return a}function u(f){let d=0;for(;d<a.length&&Nv(f,a[d])>=0&&(f.record.path!==a[d].record.path||!ku(f,a[d]));)d++;a.splice(d,0,f),f.record.name&&!di(f)&&o.set(f.record.name,f)}function p(f,d){let h,v={},k,y;if("name"in f&&f.name){if(h=o.get(f.name),!h)throw ys(1,{location:f});{const E=Object.keys(f.params||{}).filter(C=>!h.keys.find(O=>O.name===C));E.length&&we(`Discarded invalid param(s) "${E.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}y=h.record.name,v=Ee(pi(d.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),f.params&&pi(f.params,h.keys.map(E=>E.name))),k=h.stringify(v)}else if("path"in f)k=f.path,k.startsWith("/")||we(`The Matcher cannot resolve relative paths but received "${k}". Unless you directly called \`matcher.resolve("${k}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),h=a.find(E=>E.re.test(k)),h&&(v=h.parse(k),y=h.record.name);else{if(h=d.name?o.get(d.name):a.find(E=>E.re.test(d.path)),!h)throw ys(1,{location:f,currentLocation:d});y=h.record.name,v=Ee({},d.params,f.params),k=h.stringify(v)}const x=[];let P=h;for(;P;)x.unshift(P.record),P=P.parent;return{name:y,path:k,params:v,matched:x,meta:Kv(x)}}return e.forEach(f=>r(f)),{addRoute:r,resolve:p,removeRoute:i,getRoutes:c,getRecordMatcher:l}}function pi(e,t){const a={};for(const o of t)o in e&&(a[o]=e[o]);return a}function Bv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Wv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Wv(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const o in e.components)t[o]=typeof a=="boolean"?a:a[o];return t}function di(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Kv(e){return e.reduce((t,a)=>Ee(t,a.meta),{})}function fi(e,t){const a={};for(const o in e)a[o]=o in t?t[o]:e[o];return a}function Go(e,t){return e.name===t.name&&e.optional===t.optional&&e.repeatable===t.repeatable}function zv(e,t){for(const a of e.keys)if(!a.optional&&!t.keys.find(Go.bind(null,a)))return we(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${a.name}"`);for(const a of t.keys)if(!a.optional&&!e.keys.find(Go.bind(null,a)))return we(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${a.name}"`)}function qv(e,t){t&&t.record.name&&!e.name&&!e.path&&we(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function Yv(e,t){for(const a of t.keys)if(!e.keys.find(Go.bind(null,a)))return we(`Absolute path "${e.record.path}" must have the exact same param named "${a.name}" as its parent "${t.record.path}".`)}function ku(e,t){return t.children.some(a=>a===e||ku(e,a))}const _u=/#/g,Zv=/&/g,Gv=/\//g,Jv=/=/g,Qv=/\?/g,gu=/\+/g,Xv=/%5B/g,ek=/%5D/g,yu=/%5E/g,nk=/%60/g,bu=/%7B/g,tk=/%7C/g,wu=/%7D/g,sk=/%20/g;function Ml(e){return encodeURI(""+e).replace(tk,"|").replace(Xv,"[").replace(ek,"]")}function ak(e){return Ml(e).replace(bu,"{").replace(wu,"}").replace(yu,"^")}function Jo(e){return Ml(e).replace(gu,"%2B").replace(sk,"+").replace(_u,"%23").replace(Zv,"%26").replace(nk,"`").replace(bu,"{").replace(wu,"}").replace(yu,"^")}function ok(e){return Jo(e).replace(Jv,"%3D")}function lk(e){return Ml(e).replace(_u,"%23").replace(Qv,"%3F")}function rk(e){return e==null?"":lk(e).replace(Gv,"%2F")}function ea(e){try{return decodeURIComponent(""+e)}catch{we(`Error decoding "${e}". Using original value`)}return""+e}function ik(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(gu," "),i=r.indexOf("="),c=ea(i<0?r:r.slice(0,i)),u=i<0?null:ea(r.slice(i+1));if(c in t){let p=t[c];En(p)||(p=t[c]=[p]),p.push(u)}else t[c]=u}return t}function hi(e){let t="";for(let a in e){const o=e[a];if(a=ok(a),o==null){o!==void 0&&(t+=(t.length?"&":"")+a);continue}(En(o)?o.map(r=>r&&Jo(r)):[o&&Jo(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+a,r!=null&&(t+="="+r))})}return t}function ck(e){const t={};for(const a in e){const o=e[a];o!==void 0&&(t[a]=En(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return t}const uk=Symbol("router view location matched"),mi=Symbol("router view depth"),Il=Symbol("router"),xu=Symbol("route location"),Qo=Symbol("router view location");function Cs(){let e=[];function t(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function a(){e=[]}return{add:t,list:()=>e,reset:a}}function vt(e,t,a,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((i,c)=>{const u=d=>{d===!1?c(ys(4,{from:a,to:t})):d instanceof Error?c(d):Pv(d)?c(ys(2,{from:t,to:d})):(r&&o.enterCallbacks[l]===r&&typeof d=="function"&&r.push(d),i())},p=e.call(o&&o.instances[l],t,a,pk(u,t,a));let f=Promise.resolve(p);if(e.length<3&&(f=f.then(u)),e.length>2){const d=`The "next" callback was never called inside of ${e.name?'"'+e.name+'"':""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof p=="object"&&"then"in p)f=f.then(h=>u._called?h:(we(d),Promise.reject(new Error("Invalid navigation guard"))));else if(p!==void 0&&!u._called){we(d),c(new Error("Invalid navigation guard"));return}}f.catch(d=>c(d))})}function pk(e,t,a){let o=0;return function(){o++===1&&we(`The "next" callback was called more than once in one navigation guard when going from "${a.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),e._called=!0,o===1&&e.apply(null,arguments)}}function bo(e,t,a,o){const l=[];for(const r of e){!r.components&&!r.children.length&&we(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const i in r.components){let c=r.components[i];{if(!c||typeof c!="object"&&typeof c!="function")throw we(`Component "${i}" in record with path "${r.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){we(`Component "${i}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const u=c;c=()=>u}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,we(`Component "${i}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(dk(c)){const p=(c.__vccOpts||c)[t];p&&l.push(vt(p,a,o,r,i))}else{let u=c();"catch"in u||(we(`Component "${i}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),u=Promise.resolve(u)),l.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));const f=dv(p)?p.default:p;r.components[i]=f;const h=(f.__vccOpts||f)[t];return h&&vt(h,a,o,r,i)()}))}}}return l}function dk(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function vi(e){const t=W(Il),a=W(xu),o=T(()=>t.resolve(w(e.to))),l=T(()=>{const{matched:u}=o.value,{length:p}=u,f=u[p-1],d=a.matched;if(!f||!d.length)return-1;const h=d.findIndex(St.bind(null,f));if(h>-1)return h;const v=ki(u[p-2]);return p>1&&ki(f)===v&&d[d.length-1].path!==v?d.findIndex(St.bind(null,u[p-2])):h}),r=T(()=>l.value>-1&&vk(a.params,o.value.params)),i=T(()=>l.value>-1&&l.value===a.matched.length-1&&fu(a.params,o.value.params));function c(u={}){return mk(u)?t[w(e.replace)?"replace":"push"](w(e.to)).catch(Us):Promise.resolve()}if(tt){const u=Pt();if(u){const p={route:o.value,isActive:r.value,isExactActive:i.value};u.__vrl_devtools=u.__vrl_devtools||[],u.__vrl_devtools.push(p),ws(()=>{p.route=o.value,p.isActive=r.value,p.isExactActive=i.value},{flush:"post"})}}return{route:o,href:T(()=>o.value.href),isActive:r,isExactActive:i,navigate:c}}const fk=$e({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vi,setup(e,{slots:t}){const a=tn(vi(e)),{options:o}=W(Il),l=T(()=>({[_i(e.activeClass,o.linkActiveClass,"router-link-active")]:a.isActive,[_i(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const r=t.default&&t.default(a);return e.custom?r:Gt("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:l.value},r)}}}),hk=fk;function mk(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function vk(e,t){for(const a in t){const o=t[a],l=e[a];if(typeof o=="string"){if(o!==l)return!1}else if(!En(l)||l.length!==o.length||o.some((r,i)=>r!==l[i]))return!1}return!0}function ki(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _i=(e,t,a)=>e??t??a,kk=$e({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:a}){gk();const o=W(Qo),l=T(()=>e.route||o.value),r=W(mi,0),i=T(()=>{let p=w(r);const{matched:f}=l.value;let d;for(;(d=f[p])&&!d.components;)p++;return p}),c=T(()=>l.value.matched[i.value]);xn(mi,T(()=>i.value+1)),xn(uk,c),xn(Qo,l);const u=ne();return Fe(()=>[u.value,c.value,e.name],([p,f,d],[h,v,k])=>{f&&(f.instances[d]=p,v&&v!==f&&p&&p===h&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),p&&f&&(!v||!St(f,v)||!h)&&(f.enterCallbacks[d]||[]).forEach(y=>y(p))},{flush:"post"}),()=>{const p=l.value,f=e.name,d=c.value,h=d&&d.components[f];if(!h)return gi(a.default,{Component:h,route:p});const v=d.props[f],k=v?v===!0?p.params:typeof v=="function"?v(p):v:null,x=Gt(h,Ee({},k,t,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[f]=null)},ref:u}));if(tt&&x.ref){const P={depth:i.value,name:d.name,path:d.path,meta:d.meta};(En(x.ref)?x.ref.map(C=>C.i):[x.ref.i]).forEach(C=>{C.__vrv_devtools=P})}return gi(a.default,{Component:x,route:p})||x}}});function gi(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const _k=kk;function gk(){const e=Pt(),t=e.parent&&e.parent.type.name;if(t&&(t==="KeepAlive"||t.includes("Transition"))){const a=t==="KeepAlive"?"keep-alive":"transition";we(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${a}>
    <component :is="Component" />
  </${a}>
</router-view>`)}}function Ps(e,t){const a=Ee({},e,{matched:e.matched.map(o=>Ck(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:a}}}function va(e){return{_custom:{display:e}}}let yk=0;function bk(e,t,a){if(t.__hasDevtools)return;t.__hasDevtools=!0;const o=yk++;pv({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((f,d)=>{f.instanceData&&f.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ps(t.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:f,componentInstance:d})=>{if(d.__vrv_devtools){const h=d.__vrv_devtools;f.tags.push({label:(h.name?`${h.name.toString()}: `:"")+h.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:$u})}En(d.__vrl_devtools)&&(d.__devtoolsApi=l,d.__vrl_devtools.forEach(h=>{let v=Su,k="";h.isExactActive?(v=Eu,k="This is exactly active"):h.isActive&&(v=Ru,k="This link is active"),f.tags.push({label:h.route.path,textColor:0,tooltip:k,backgroundColor:v})}))}),Fe(t.currentRoute,()=>{u(),l.notifyComponentUpdate(),l.sendInspectorTree(c),l.sendInspectorState(c)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),t.onError((f,d)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:l.now(),data:{error:f},groupId:d.meta.__navigationId}})});let i=0;t.beforeEach((f,d)=>{const h={guard:va("beforeEach"),from:Ps(d,"Current Location during this navigation"),to:Ps(f,"Target location")};Object.defineProperty(f.meta,"__navigationId",{value:i++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:f.fullPath,data:h,groupId:f.meta.__navigationId}})}),t.afterEach((f,d,h)=>{const v={guard:va("afterEach")};h?(v.failure={_custom:{type:Error,readOnly:!0,display:h?h.message:"",tooltip:"Navigation Failure",value:h}},v.status=va("❌")):v.status=va("✅"),v.from=Ps(d,"Current Location during this navigation"),v.to=Ps(f,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:f.fullPath,time:l.now(),data:v,logType:h?"warning":"default",groupId:f.meta.__navigationId}})});const c="router-inspector:"+o;l.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function u(){if(!p)return;const f=p;let d=a.getRoutes().filter(h=>!h.parent);d.forEach(Tu),f.filter&&(d=d.filter(h=>Xo(h,f.filter.toLowerCase()))),d.forEach(h=>Pu(h,t.currentRoute.value)),f.rootNodes=d.map(Cu)}let p;l.on.getInspectorTree(f=>{p=f,f.app===e&&f.inspectorId===c&&u()}),l.on.getInspectorState(f=>{if(f.app===e&&f.inspectorId===c){const h=a.getRoutes().find(v=>v.record.__vd_id===f.nodeId);h&&(f.state={options:xk(h)})}}),l.sendInspectorTree(c),l.sendInspectorState(c)})}function wk(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function xk(e){const{record:t}=e,a=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&a.push({editable:!1,key:"name",value:t.name}),a.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&a.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(o=>`${o.name}${wk(o)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&a.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&a.push({editable:!1,key:"aliases",value:e.alias.map(o=>o.record.path)}),Object.keys(e.record.meta).length&&a.push({editable:!1,key:"meta",value:e.record.meta}),a.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),a}const $u=15485081,Ru=2450411,Eu=8702998,$k=2282478,Su=16486972,Rk=6710886;function Cu(e){const t=[],{record:a}=e;a.name!=null&&t.push({label:String(a.name),textColor:0,backgroundColor:$k}),a.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Su}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:$u}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:Eu}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:Ru}),a.redirect&&t.push({label:typeof a.redirect=="string"?`redirect: ${a.redirect}`:"redirects",textColor:16777215,backgroundColor:Rk});let o=a.__vd_id;return o==null&&(o=String(Ek++),a.__vd_id=o),{id:o,label:a.path,tags:t,children:e.children.map(Cu)}}let Ek=0;const Sk=/^\/(.*)\/([a-z]*)$/;function Pu(e,t){const a=t.matched.length&&St(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=a,a||(e.__vd_active=t.matched.some(o=>St(o,e.record))),e.children.forEach(o=>Pu(o,t))}function Tu(e){e.__vd_match=!1,e.children.forEach(Tu)}function Xo(e,t){const a=String(e.re).match(Sk);if(e.__vd_match=!1,!a||a.length<3)return!1;if(new RegExp(a[1].replace(/\$$/,""),a[2]).test(t))return e.children.forEach(i=>Xo(i,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const l=e.record.path.toLowerCase(),r=ea(l);return!t.startsWith("/")&&(r.includes(t)||l.includes(t))||r.startsWith(t)||l.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(i=>Xo(i,t))}function Ck(e,t){const a={};for(const o in e)t.includes(o)||(a[o]=e[o]);return a}function Pk(e){const t=Uv(e.routes,e),a=e.parseQuery||ik,o=e.stringifyQuery||hi,l=e.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Cs(),i=Cs(),c=Cs(),u=Zn(ft);let p=ft;tt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=go.bind(null,S=>""+S),d=go.bind(null,rk),h=go.bind(null,ea);function v(S,Y){let j,Q;return mu(S)?(j=t.getRecordMatcher(S),Q=Y):Q=S,t.addRoute(Q,j)}function k(S){const Y=t.getRecordMatcher(S);Y?t.removeRoute(Y):we(`Cannot remove non-existent route "${String(S)}"`)}function y(){return t.getRoutes().map(S=>S.record)}function x(S){return!!t.getRecordMatcher(S)}function P(S,Y){if(Y=Ee({},Y||u.value),typeof S=="string"){const re=yo(a,S,Y.path),m=t.resolve({path:re.path},Y),_=l.createHref(re.fullPath);return _.startsWith("//")?we(`Location "${S}" resolved to "${_}". A resolved location cannot start with multiple slashes.`):m.matched.length||we(`No match found for location with path "${S}"`),Ee(re,m,{params:h(m.params),hash:ea(re.hash),redirectedFrom:void 0,href:_})}let j;if("path"in S)"params"in S&&!("name"in S)&&Object.keys(S.params).length&&we(`Path "${S.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),j=Ee({},S,{path:yo(a,S.path,Y.path).path});else{const re=Ee({},S.params);for(const m in re)re[m]==null&&delete re[m];j=Ee({},S,{params:d(S.params)}),Y.params=d(Y.params)}const Q=t.resolve(j,Y),me=S.hash||"";me&&!me.startsWith("#")&&we(`A \`hash\` should always start with the character "#". Replace "${me}" with "#${me}".`),Q.params=f(h(Q.params));const ye=mv(o,Ee({},S,{hash:ak(me),path:Q.path})),ue=l.createHref(ye);return ue.startsWith("//")?we(`Location "${S}" resolved to "${ue}". A resolved location cannot start with multiple slashes.`):Q.matched.length||we(`No match found for location with path "${"path"in S?S.path:S}"`),Ee({fullPath:ye,hash:me,query:o===hi?ck(S.query):S.query||{}},Q,{redirectedFrom:void 0,href:ue})}function E(S){return typeof S=="string"?yo(a,S,u.value.path):Ee({},S)}function C(S,Y){if(p!==S)return ys(8,{from:Y,to:S})}function O(S){return Z(S)}function U(S){return O(Ee(E(S),{replace:!0}))}function H(S){const Y=S.matched[S.matched.length-1];if(Y&&Y.redirect){const{redirect:j}=Y;let Q=typeof j=="function"?j(S):j;if(typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=E(Q):{path:Q},Q.params={}),!("path"in Q)&&!("name"in Q))throw we(`Invalid redirect found:
${JSON.stringify(Q,null,2)}
 when navigating to "${S.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Ee({query:S.query,hash:S.hash,params:"path"in Q?{}:S.params},Q)}}function Z(S,Y){const j=p=P(S),Q=u.value,me=S.state,ye=S.force,ue=S.replace===!0,re=H(j);if(re)return Z(Ee(E(re),{state:typeof re=="object"?Ee({},me,re.state):me,force:ye,replace:ue}),Y||j);const m=j;m.redirectedFrom=Y;let _;return!ye&&ai(o,Q,j)&&(_=ys(16,{to:m,from:Q}),Oe(Q,Q,!0,!1)),(_?Promise.resolve(_):oe(m,Q)).catch(R=>Qn(R)?Qn(R,2)?R:fe(R):K(R,m,Q)).then(R=>{if(R){if(Qn(R,2))return ai(o,P(R.to),m)&&Y&&(Y._count=Y._count?Y._count+1:1)>10?(we(`Detected an infinite redirection in a navigation guard when going from "${Q.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):Z(Ee({replace:ue},E(R.to),{state:typeof R.to=="object"?Ee({},me,R.to.state):me,force:ye}),Y||m)}else R=ge(m,Q,!0,ue,me);return ie(m,Q,R),R})}function q(S,Y){const j=C(S,Y);return j?Promise.reject(j):Promise.resolve()}function oe(S,Y){let j;const[Q,me,ye]=Tk(S,Y);j=bo(Q.reverse(),"beforeRouteLeave",S,Y);for(const re of Q)re.leaveGuards.forEach(m=>{j.push(vt(m,S,Y))});const ue=q.bind(null,S,Y);return j.push(ue),os(j).then(()=>{j=[];for(const re of r.list())j.push(vt(re,S,Y));return j.push(ue),os(j)}).then(()=>{j=bo(me,"beforeRouteUpdate",S,Y);for(const re of me)re.updateGuards.forEach(m=>{j.push(vt(m,S,Y))});return j.push(ue),os(j)}).then(()=>{j=[];for(const re of S.matched)if(re.beforeEnter&&!Y.matched.includes(re))if(En(re.beforeEnter))for(const m of re.beforeEnter)j.push(vt(m,S,Y));else j.push(vt(re.beforeEnter,S,Y));return j.push(ue),os(j)}).then(()=>(S.matched.forEach(re=>re.enterCallbacks={}),j=bo(ye,"beforeRouteEnter",S,Y),j.push(ue),os(j))).then(()=>{j=[];for(const re of i.list())j.push(vt(re,S,Y));return j.push(ue),os(j)}).catch(re=>Qn(re,8)?re:Promise.reject(re))}function ie(S,Y,j){for(const Q of c.list())Q(S,Y,j)}function ge(S,Y,j,Q,me){const ye=C(S,Y);if(ye)return ye;const ue=Y===ft,re=tt?history.state:{};j&&(Q||ue?l.replace(S.fullPath,Ee({scroll:ue&&re&&re.scroll},me)):l.push(S.fullPath,me)),u.value=S,Oe(S,Y,j,ue),fe()}let He;function Xe(){He||(He=l.listen((S,Y,j)=>{if(!pt.listening)return;const Q=P(S),me=H(Q);if(me){Z(Ee(me,{replace:!0}),Q).catch(Us);return}p=Q;const ye=u.value;tt&&xv(li(ye.fullPath,j.delta),ro()),oe(Q,ye).catch(ue=>Qn(ue,12)?ue:Qn(ue,2)?(Z(ue.to,Q).then(re=>{Qn(re,20)&&!j.delta&&j.type===Xs.pop&&l.go(-1,!1)}).catch(Us),Promise.reject()):(j.delta&&l.go(-j.delta,!1),K(ue,Q,ye))).then(ue=>{ue=ue||ge(Q,ye,!1),ue&&(j.delta&&!Qn(ue,8)?l.go(-j.delta,!1):j.type===Xs.pop&&Qn(ue,20)&&l.go(-1,!1)),ie(Q,ye,ue)}).catch(Us)}))}let en=Cs(),Te=Cs(),je;function K(S,Y,j){fe(S);const Q=Te.list();return Q.length?Q.forEach(me=>me(S,Y,j)):(we("uncaught error during route navigation:"),console.error(S)),Promise.reject(S)}function ae(){return je&&u.value!==ft?Promise.resolve():new Promise((S,Y)=>{en.add([S,Y])})}function fe(S){return je||(je=!S,Xe(),en.list().forEach(([Y,j])=>S?j(S):Y()),en.reset()),S}function Oe(S,Y,j,Q){const{scrollBehavior:me}=e;if(!tt||!me)return Promise.resolve();const ye=!j&&$v(li(S.fullPath,0))||(Q||!j)&&history.state&&history.state.scroll||null;return jn().then(()=>me(S,Y,ye)).then(ue=>ue&&wv(ue)).catch(ue=>K(ue,S,Y))}const gn=S=>l.go(S);let sn;const fn=new Set,pt={currentRoute:u,listening:!0,addRoute:v,removeRoute:k,hasRoute:x,getRoutes:y,resolve:P,options:e,push:O,replace:U,go:gn,back:()=>gn(-1),forward:()=>gn(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:Te.add,isReady:ae,install(S){const Y=this;S.component("RouterLink",hk),S.component("RouterView",_k),S.config.globalProperties.$router=Y,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>w(u)}),tt&&!sn&&u.value===ft&&(sn=!0,O(l.location).catch(me=>{we("Unexpected error when starting the router:",me)}));const j={};for(const me in ft)j[me]=T(()=>u.value[me]);S.provide(Il,Y),S.provide(xu,tn(j)),S.provide(Qo,u);const Q=S.unmount;fn.add(S),S.unmount=function(){fn.delete(S),fn.size<1&&(p=ft,He&&He(),He=null,u.value=ft,sn=!1,je=!1),Q()},tt&&bk(S,Y,t)}};return pt}function os(e){return e.reduce((t,a)=>t.then(()=>a()),Promise.resolve())}function Tk(e,t){const a=[],o=[],l=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const c=t.matched[i];c&&(e.matched.find(p=>St(p,c))?o.push(c):a.push(c));const u=e.matched[i];u&&(t.matched.find(p=>St(p,u))||l.push(u))}return[a,o,l]}const wo=ne(!1),Ws=ne(!1),ds=ne(!1),Ok=ne(!0),el=cm({xs:460,...am}),Wt=sv(),Ou=Km(),Ak=T(()=>Wt.height.value-Wt.width.value/bt>180),Au=Bm(Hn?document.body:null),_s=sm(),Mk=T(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=_s.value)==null?void 0:e.tagName)||"")||((t=_s.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),Ik=T(()=>{var e;return["BUTTON","A"].includes(((e=_s.value)==null?void 0:e.tagName)||"")});On("slidev-camera","default");On("slidev-mic","default");const xa=On("slidev-scale",0),cn=On("slidev-show-overview",!1),xo=On("slidev-presenter-cursor",!0),yi=On("slidev-show-editor",!1);On("slidev-editor-width",Hn?window.innerWidth*.4:100);const Mu=Ol(cn);function bi(e,t,a,o=l=>l){return e*o(.5-t*(.5-a))}function Lk(e){return[-e[0],-e[1]]}function In(e,t){return[e[0]+t[0],e[1]+t[1]]}function Cn(e,t){return[e[0]-t[0],e[1]-t[1]]}function Mn(e,t){return[e[0]*t,e[1]*t]}function Dk(e,t){return[e[0]/t,e[1]/t]}function Ts(e){return[e[1],-e[0]]}function wi(e,t){return e[0]*t[0]+e[1]*t[1]}function Nk(e,t){return e[0]===t[0]&&e[1]===t[1]}function Fk(e){return Math.hypot(e[0],e[1])}function Vk(e){return e[0]*e[0]+e[1]*e[1]}function xi(e,t){return Vk(Cn(e,t))}function Iu(e){return Dk(e,Fk(e))}function jk(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Os(e,t,a){let o=Math.sin(a),l=Math.cos(a),r=e[0]-t[0],i=e[1]-t[1],c=r*l-i*o,u=r*o+i*l;return[c+t[0],u+t[1]]}function nl(e,t,a){return In(e,Mn(Cn(t,e),a))}function $i(e,t,a){return In(e,Mn(t,a))}var{min:ls,PI:Hk}=Math,Ri=.275,As=Hk+1e-4;function Uk(e,t={}){let{size:a=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:i=K=>K,start:c={},end:u={},last:p=!1}=t,{cap:f=!0,easing:d=K=>K*(2-K)}=c,{cap:h=!0,easing:v=K=>--K*K*K+1}=u;if(e.length===0||a<=0)return[];let k=e[e.length-1].runningLength,y=c.taper===!1?0:c.taper===!0?Math.max(a,k):c.taper,x=u.taper===!1?0:u.taper===!0?Math.max(a,k):u.taper,P=Math.pow(a*o,2),E=[],C=[],O=e.slice(0,10).reduce((K,ae)=>{let fe=ae.pressure;if(r){let Oe=ls(1,ae.distance/a),gn=ls(1,1-Oe);fe=ls(1,K+(gn-K)*(Oe*Ri))}return(K+fe)/2},e[0].pressure),U=bi(a,l,e[e.length-1].pressure,i),H,Z=e[0].vector,q=e[0].point,oe=q,ie=q,ge=oe,He=!1;for(let K=0;K<e.length;K++){let{pressure:ae}=e[K],{point:fe,vector:Oe,distance:gn,runningLength:sn}=e[K];if(K<e.length-1&&k-sn<3)continue;if(l){if(r){let ye=ls(1,gn/a),ue=ls(1,1-ye);ae=ls(1,O+(ue-O)*(ye*Ri))}U=bi(a,l,ae,i)}else U=a/2;H===void 0&&(H=U);let fn=sn<y?d(sn/y):1,pt=k-sn<x?v((k-sn)/x):1;U=Math.max(.01,U*Math.min(fn,pt));let S=(K<e.length-1?e[K+1]:e[K]).vector,Y=K<e.length-1?wi(Oe,S):1,j=wi(Oe,Z)<0&&!He,Q=Y!==null&&Y<0;if(j||Q){let ye=Mn(Ts(Z),U);for(let ue=1/13,re=0;re<=1;re+=ue)ie=Os(Cn(fe,ye),fe,As*re),E.push(ie),ge=Os(In(fe,ye),fe,As*-re),C.push(ge);q=ie,oe=ge,Q&&(He=!0);continue}if(He=!1,K===e.length-1){let ye=Mn(Ts(Oe),U);E.push(Cn(fe,ye)),C.push(In(fe,ye));continue}let me=Mn(Ts(nl(S,Oe,Y)),U);ie=Cn(fe,me),(K<=1||xi(q,ie)>P)&&(E.push(ie),q=ie),ge=In(fe,me),(K<=1||xi(oe,ge)>P)&&(C.push(ge),oe=ge),O=ae,Z=Oe}let Xe=e[0].point.slice(0,2),en=e.length>1?e[e.length-1].point.slice(0,2):In(e[0].point,[1,1]),Te=[],je=[];if(e.length===1){if(!(y||x)||p){let K=$i(Xe,Iu(Ts(Cn(Xe,en))),-(H||U)),ae=[];for(let fe=1/13,Oe=fe;Oe<=1;Oe+=fe)ae.push(Os(K,Xe,As*2*Oe));return ae}}else{if(!(y||x&&e.length===1))if(f)for(let ae=1/13,fe=ae;fe<=1;fe+=ae){let Oe=Os(C[0],Xe,As*fe);Te.push(Oe)}else{let ae=Cn(E[0],C[0]),fe=Mn(ae,.5),Oe=Mn(ae,.51);Te.push(Cn(Xe,fe),Cn(Xe,Oe),In(Xe,Oe),In(Xe,fe))}let K=Ts(Lk(e[e.length-1].vector));if(x||y&&e.length===1)je.push(en);else if(h){let ae=$i(en,K,U);for(let fe=1/29,Oe=fe;Oe<1;Oe+=fe)je.push(Os(ae,en,As*3*Oe))}else je.push(In(en,Mn(K,U)),In(en,Mn(K,U*.99)),Cn(en,Mn(K,U*.99)),Cn(en,Mn(K,U)))}return E.concat(je,C.reverse(),Te)}function Bk(e,t={}){var a;let{streamline:o=.5,size:l=16,last:r=!1}=t;if(e.length===0)return[];let i=.15+(1-o)*.85,c=Array.isArray(e[0])?e:e.map(({x:v,y:k,pressure:y=.5})=>[v,k,y]);if(c.length===2){let v=c[1];c=c.slice(0,-1);for(let k=1;k<5;k++)c.push(nl(c[0],v,k/4))}c.length===1&&(c=[...c,[...In(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,f=0,d=u[0],h=c.length-1;for(let v=1;v<c.length;v++){let k=r&&v===h?c[v].slice(0,2):nl(d.point,c[v],i);if(Nk(d.point,k))continue;let y=jk(k,d.point);if(f+=y,v<h&&!p){if(f<l)continue;p=!0}d={point:k,pressure:c[v][2]>=0?c[v][2]:.5,vector:Iu(Cn(d.point,k)),distance:y,runningLength:f},u.push(d)}return u[0].vector=((a=u[1])==null?void 0:a.vector)||[0,0],u}function Wk(e,t={}){return Uk(Bk(e,t),t)}var Kk=()=>({events:{},emit(e,...t){let a=this.events[e]||[];for(let o=0,l=a.length;o<l;o++)a[o](...t)},on(e,t){var a;return(a=this.events[e])!=null&&a.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(l=>t!==l)}}});function Va(e,t){return e-t}function zk(e){return e<0?-1:1}function ja(e){return[Math.abs(e),zk(e)]}function Lu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var qk=2,st=qk,xs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t;const a=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-l.left)*o,y:(e.pageY-l.top)*o,pressure:e.pressure}}else{const l=this.drauu.svgPoint;l.x=e.clientX,l.y=e.clientY;const r=l.matrixTransform((t=a.getScreenCTM())==null?void 0:t.inverse());return{x:r.x*o,y:r.y*o,pressure:e.pressure}}}createElement(e,t){const a=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return a.setAttribute("fill",o.fill??"transparent"),a.setAttribute("stroke",o.color),a.setAttribute("stroke-width",o.size.toString()),a.setAttribute("stroke-linecap","round"),o.dasharray&&a.setAttribute("stroke-dasharray",o.dasharray),a}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(st))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Yk=class extends xs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=Wk(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const a=t.reduce((o,[l,r],i,c)=>{const[u,p]=c[(i+1)%c.length];return o.push(l,r,(l+u)/2,(r+p)/2),o},["M",...t[0],"Q"]);return a.push("Z"),a.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Zk=class extends xs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,a]=ja(e.x-this.start.x),[o,l]=ja(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[r,i]=[this.start.x,this.start.x+t*a].sort(Va),[c,u]=[this.start.y,this.start.y+o*l].sort(Va);this.attr("cx",(r+i)/2),this.attr("cy",(c+u)/2),this.attr("rx",(i-r)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Du(e,t){const a=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),a.appendChild(o),a}var Gk=class extends xs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Lu(),a=document.createElementNS("http://www.w3.org/2000/svg","g");return a.append(Du(t,this.brush.color)),a.append(this.el),this.attr("marker-end",`url(#${t})`),a}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:a}=e;if(this.shiftPressed){const o=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(t=this.start.x+l*r,a=this.start.y+l):(t=this.start.x+o,a=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-a),this.attr("x2",t),this.attr("y2",a)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",a)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Jk=class extends xs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,a]=ja(e.x-this.start.x),[o,l]=ja(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(t,o);t=r,o=r}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[r,i]=[this.start.x,this.start.x+t*a].sort(Va),[c,u]=[this.start.y,this.start.y+o*l].sort(Va);this.attr("x",r),this.attr("y",c),this.attr("width",i-r),this.attr("height",u-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Qk(e,t){const a=e.x-t.x,o=e.y-t.y;return a*a+o*o}function Xk(e,t,a){let o=t.x,l=t.y,r=a.x-o,i=a.y-l;if(r!==0||i!==0){const c=((e.x-o)*r+(e.y-l)*i)/(r*r+i*i);c>1?(o=a.x,l=a.y):c>0&&(o+=r*c,l+=i*c)}return r=e.x-o,i=e.y-l,r*r+i*i}function e_(e,t){let a=e[0];const o=[a];let l;for(let r=1,i=e.length;r<i;r++)l=e[r],Qk(l,a)>t&&(o.push(l),a=l);return a!==l&&l&&o.push(l),o}function tl(e,t,a,o,l){let r=o,i=0;for(let c=t+1;c<a;c++){const u=Xk(e[c],e[t],e[a]);u>r&&(i=c,r=u)}r>o&&(i-t>1&&tl(e,t,i,o,l),l.push(e[i]),a-i>1&&tl(e,i,a,o,l))}function n_(e,t){const a=e.length-1,o=[e[0]];return tl(e,0,a,t,o),o.push(e[a]),o}function Ei(e,t,a=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=a?e:e_(e,o),e=n_(e,o),e}var t_=class extends xs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Lu();const t=Du(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ei(this.points,1,!0),this.count=0),this.attr("d",Ci(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ci(Ei(this.points,1,!0))),!e.getTotalLength()))}};function s_(e,t){const a=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(a**2+o**2),angle:Math.atan2(o,a)}}function Si(e,t,a,o){const l=t||e,r=a||e,i=.2,c=s_(l,r),u=c.angle+(o?Math.PI:0),p=c.length*i,f=e.x+Math.cos(u)*p,d=e.y+Math.sin(u)*p;return{x:f,y:d}}function a_(e,t,a){const o=Si(a[t-1],a[t-2],e),l=Si(e,a[t-1],a[t+1],!0);return`C ${o.x.toFixed(st)},${o.y.toFixed(st)} ${l.x.toFixed(st)},${l.y.toFixed(st)} ${e.x.toFixed(st)},${e.y.toFixed(st)}`}function Ci(e){return e.reduce((t,a,o,l)=>o===0?`M ${a.x.toFixed(st)},${a.y.toFixed(st)}`:`${t} ${a_(a,o,l)}`,"")}var o_=class extends xs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(a,o)=>{if(a&&a.length)for(let l=0;l<a.length;l++){const r=a[l];if(r.getTotalLength){const i=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=r.getPointAtLength(i*c/this.pathSubFactor),p=r.getPointAtLength(i*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:o||r})}}else r.children&&t(r.children,r)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const a=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(a,o)&&(a.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,a)=>!e.includes(a))),e.length>0}lineLineIntersect(e,t){const a=e.x1,o=e.x2,l=t.x1,r=t.x2,i=e.y1,c=e.y2,u=t.y1,p=t.y2,f=(a-o)*(u-p)-(i-c)*(l-r),d=(a*c-i*o)*(l-r)-(a-o)*(l*p-u*r),h=(a*c-i*o)*(u-p)-(i-c)*(l*p-u*r),v=(k,y,x)=>k>=y&&k<=x?!0:k>=x&&k<=y;if(f===0)return!1;{const k={x:d/f,y:h/f};return v(k.x,a,o)&&v(k.y,i,c)&&v(k.x,l,r)&&v(k.y,u,p)}}};function l_(e){return{draw:new t_(e),stylus:new Yk(e),line:new Gk(e),rectangle:new Jk(e),ellipse:new Zk(e),eraseLine:new o_(e)}}var r_=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Kk(),this._models=l_(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const a=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);a.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{a.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){this.acceptsInput(e)&&(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function i_(e){return new r_(e)}const sl=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],qn=On("slidev-drawing-enabled",!1),dE=On("slidev-drawing-pinned",!1),c_=ne(!1),u_=ne(!1),p_=ne(!1),na=ne(!1),Nt=Oh(On("slidev-drawing-brush",{color:sl[0],size:4,mode:"stylus"})),Pi=ne("stylus"),Nu=T(()=>Ie.drawings.syncAll||Dn.value);let ta=!1;const Ms=T({get(){return Pi.value},set(e){Pi.value=e,e==="arrow"?(Nt.mode="line",Nt.arrowEnd=!0):(Nt.mode=e,Nt.arrowEnd=!1)}}),d_=tn({brush:Nt,acceptsInputTypes:T(()=>qn.value&&(!Ie.drawings.presenterOnly||Dn.value)?void 0:["pen"]),coordinateTransform:!1}),dn=ml(i_(d_));function f_(){dn.clear(),Nu.value&&tu(Qe.value,"")}function Fu(){var e;u_.value=dn.canRedo(),c_.value=dn.canUndo(),p_.value=!!((e=dn.el)!=null&&e.children.length)}function h_(e){ta=!0;const t=Na[e||Qe.value];t!=null?dn.load(t):dn.clear(),ta=!1}dn.on("changed",()=>{if(Fu(),!ta){const e=dn.dump(),t=Qe.value;(Na[t]||"")!==e&&Nu.value&&tu(t,dn.dump())}});yh(e=>{ta=!0,e[Qe.value]!=null&&dn.load(e[Qe.value]||""),ta=!1,Fu()});jn(()=>{Fe(Qe,()=>{dn.mounted&&h_()},{immediate:!0})});dn.on("start",()=>na.value=!0);dn.on("end",()=>na.value=!1);window.addEventListener("keydown",e=>{if(!qn.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let a=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?dn.redo():dn.undo():e.code==="Escape"?qn.value=!1:e.code==="KeyL"&&t?Ms.value="line":e.code==="KeyA"&&t?Ms.value="arrow":e.code==="KeyS"&&t?Ms.value="stylus":e.code==="KeyR"&&t?Ms.value="rectangle":e.code==="KeyE"&&t?Ms.value="ellipse":e.code==="KeyC"&&t?f_():e.code.startsWith("Digit")&&t&&+e.code[5]<=sl.length?Nt.color=sl[+e.code[5]-1]:a=!1,a&&(e.preventDefault(),e.stopPropagation())},!1);var Ti;const m_=typeof window<"u";m_&&((Ti=window==null?void 0:window.navigator)!=null&&Ti.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Vu(e){return typeof e=="function"?e():w(e)}function fE(e){Pt()&&to(e)}function ze(...e){return T(()=>e.every(t=>Vu(t)))}function yn(e){return T(()=>!Vu(e))}const Oi=Al(),$o=On("slidev-color-schema","auto"),al=T(()=>Ie.colorSchema!=="auto"),Ll=T({get(){return al.value?Ie.colorSchema==="dark":$o.value==="auto"?Oi.value:$o.value==="dark"},set(e){al.value||($o.value=e===Oi.value?"auto":e?"dark":"light")}}),ju=Ol(Ll);Hn&&Fe(Ll,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const $a=ne(1),Ra=T(()=>Ze.length-1),$n=ne(0),Dl=ne(0);function v_(){$n.value>$a.value&&($n.value-=1)}function k_(){$n.value<Ra.value&&($n.value+=1)}function __(){if($n.value>$a.value){let e=$n.value-Dl.value;e<$a.value&&(e=$a.value),$n.value=e}}function g_(){if($n.value<Ra.value){let e=$n.value+Dl.value;e>Ra.value&&(e=Ra.value),$n.value=e}}function y_(){const{escape:e,space:t,shift:a,left:o,right:l,up:r,down:i,enter:c,d:u,g:p,o:f}=Ou;let d=[{name:"next_space",key:ze(t,yn(a)),fn:Kt,autoRepeat:!0},{name:"prev_space",key:ze(t,a),fn:zt,autoRepeat:!0},{name:"next_right",key:ze(l,yn(a),yn(cn)),fn:Kt,autoRepeat:!0},{name:"prev_left",key:ze(o,yn(a),yn(cn)),fn:zt,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Kt,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:zt,autoRepeat:!0},{name:"next_down",key:ze(i,yn(cn)),fn:Ua,autoRepeat:!0},{name:"prev_up",key:ze(r,yn(cn)),fn:()=>Ba(!1),autoRepeat:!0},{name:"next_shift",key:ze(l,a),fn:Ua,autoRepeat:!0},{name:"prev_shift",key:ze(o,a),fn:()=>Ba(!1),autoRepeat:!0},{name:"toggle_dark",key:ze(u,yn(qn)),fn:ju},{name:"toggle_overview",key:ze(f,yn(qn)),fn:Mu},{name:"hide_overview",key:ze(e,yn(qn)),fn:()=>cn.value=!1},{name:"goto",key:ze(p,yn(qn)),fn:()=>ds.value=!ds.value},{name:"next_overview",key:ze(l,cn),fn:k_},{name:"prev_overview",key:ze(o,cn),fn:v_},{name:"up_overview",key:ze(r,cn),fn:__},{name:"down_overview",key:ze(i,cn),fn:g_},{name:"goto_from_overview",key:ze(c,cn),fn:()=>{bs($n.value),cn.value=!1}}];const h=new Set(d.map(k=>k.name));if(d.filter(k=>k.name&&h.has(k.name)).length===0){const k=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(k),console.warn(k)}return d}const Hu=ze(yn(Mk),yn(Ik),Ok);function b_(e,t,a=!1){typeof e=="string"&&(e=Ou[e]);const o=ze(e,Hu);let l=0,r;const i=()=>{if(clearTimeout(r),!o.value){l=0;return}a&&(r=setTimeout(i,Math.max(1e3-l*250,150)),l++),t()};return Fe(o,i,{flush:"sync"})}function w_(e,t){return tm(e,a=>{Hu.value&&(a.repeat||t())})}function x_(){const e=y_();new Map(e.map(a=>[a.key,a])).forEach(a=>{a.fn&&b_(a.key,a.fn,a.autoRepeat)}),w_("f",()=>Au.toggle())}const $_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R_=n("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),E_=[R_];function S_(e,t){return $(),N("svg",$_,E_)}const C_={name:"carbon-close",render:S_};function Nl(e){var a,o;const t=(o=(a=e==null?void 0:e.meta)==null?void 0:a.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const P_=$e({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;W(G);const a=ne(),o=Um(a),l=T(()=>t.width?t.width:o.width.value),r=T(()=>t.width?t.width/bt:o.height.value);t.width&&ws(()=>{a.value&&(a.value.style.width=`${l.value}px`,a.value.style.height=`${r.value}px`)});const i=T(()=>l.value/r.value),c=T(()=>t.scale?t.scale:i.value<bt?l.value/wt:r.value*bt/wt),u=T(()=>({height:`${Pl}px`,width:`${wt}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=T(()=>({"select-none":!Ie.selectable,"slidev-code-line-numbers":Ie.lineNumbers}));return xn(Xc,c),(f,d)=>($(),N("div",{id:"slide-container",ref_key:"root",ref:a,class:Ue(w(p))},[n("div",{id:"slide-content",style:Be(w(u))},[kn(f.$slots,"default")],4),kn(f.$slots,"controls")],2))}});const J=(e,t)=>{const a=e.__vccOpts||e;for(const[o,l]of t)a[o]=l;return a},Uu=J(P_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Fl=$e({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const a=Fn(e,"clicks",t),o=Fn(e,"clicksElements",t),l=Fn(e,"clicksDisabled",t),r=Fn(e,"clicksOrderMap",t);o.value.length=0,xn(ch,e.route),xn(uh,e.context),xn(Gc,a),xn(Qc,l),xn(Jc,o),xn(ih,r)},render(){var e,t;return this.$props.is?Gt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),T_=["innerHTML"],O_=$e({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(e){return W(G),(t,a)=>w(Na)[e.page]?($(),N("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Na)[e.page]},null,8,T_)):he("v-if",!0)}}),Bu=J(O_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),A_=Object.freeze(Object.defineProperty({__proto__:null,default:Bu},Symbol.toStringTag,{value:"Module"})),M_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},I_=["onClick"],L_=$e({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(e,{emit:t}){const a=e;W(G);const o=Fn(a,"modelValue",t);function l(){o.value=!1}function r(v){bs(v),l()}function i(v){return v===$n.value}const c=el.smaller("xs"),u=el.smaller("sm"),p=4*16*2,f=2*16,d=T(()=>c.value?Wt.width.value-p:u.value?(Wt.width.value-p-f)/2:300),h=T(()=>Math.floor((Wt.width.value-p)/(d.value+f)));return ws(()=>{$n.value=Qe.value,Dl.value=h.value}),(v,k)=>{const y=C_;return $(),N(Se,null,[De(n("div",M_,[n("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Be(`grid-template-columns: repeat(auto-fit,minmax(${w(d)}px,1fr))`)},[($(!0),N(Se,null,la(w(Ze).slice(0,-1),(x,P)=>($(),N("div",{key:x.path,class:"relative"},[n("div",{class:Ue(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(P+1),"border-gray-400":!i(P+1)}]),style:Be(w(Tl)),onClick:E=>r(+x.path)},[($(),z(Uu,{key:x.path,width:w(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:g(()=>[b(w(Fl),{is:x==null?void 0:x.component,"clicks-disabled":!0,class:Ue(w(Nl)(x)),route:x,context:"overview"},null,8,["is","class","route"]),b(Bu,{page:+x.path},null,8,["page"])]),_:2},1032,["width"]))],14,I_),n("div",{class:"absolute top-0 opacity-50",style:Be(`left: ${w(d)+5}px`)},qe(P+1),5)]))),128))],4)],512),[[Zc,w(o)]]),w(o)?($(),N("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[b(y)])):he("v-if",!0)],64)}}});const D_=J(L_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),N_="/assets/logo-b72bde5d.png",F_={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},V_=$e({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const a=e;W(G);const o=Fn(a,"modelValue",t);function l(){o.value=!1}return(r,i)=>($(),z(Rc,null,[w(o)?($(),N("div",F_,[n("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=c=>l())}),n("div",{class:Ue(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ gray-400 opacity-10"},[kn(r.$slots,"default")],2)])):he("v-if",!0)],1024))}}),j_=J(V_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Modal.vue"]]),H_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},U_=["innerHTML"],B_=n("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[n("div",{class:"flex gap-1 children:my-auto"},[n("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),n("img",{class:"w-5 h-5",src:N_,alt:"Slidev"}),n("div",{style:{color:"#2082A6"}},[n("b",null,"Sli"),s("dev ")])])],-1),W_=$e({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const a=e;W(G);const o=Fn(a,"modelValue",t),l=T(()=>typeof Ie.info=="string");return(r,i)=>($(),z(j_,{modelValue:w(o),"onUpdate:modelValue":i[0]||(i[0]=c=>xe(o)?o.value=c:null),class:"px-6 py-4"},{default:g(()=>[n("div",H_,[w(l)?($(),N("div",{key:0,class:"mb-4",innerHTML:w(Ie).info},null,8,U_)):he("v-if",!0),B_])]),_:1},8,["modelValue"]))}});const K_=J(W_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/InfoDialog.vue"]]),z_=["disabled","onKeydown"],q_=$e({__name:"Goto",setup(e){W(G);const t=ne(),a=ne(""),o=T(()=>{if(a.value.startsWith("/"))return!!Ze.find(i=>i.path===a.value.substring(1));{const i=+a.value;return!isNaN(i)&&i>0&&i<=np.value}});function l(){o.value&&(a.value.startsWith("/")?bs(a.value.substring(1)):bs(+a.value)),r()}function r(){ds.value=!1}return Fe(ds,async i=>{var c,u;i?(await jn(),a.value="",(c=t.value)==null||c.focus()):(u=t.value)==null||u.blur()}),Fe(a,i=>{i.match(/^[^0-9/]/)&&(a.value=a.value.substring(1))}),(i,c)=>($(),N("div",{id:"slidev-goto-dialog",class:Ue(["fixed right-5 bg-main transform transition-all",w(ds)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[De(n("input",{ref_key:"input",ref:t,"onUpdate:modelValue":c[0]||(c[0]=u=>a.value=u),type:"text",disabled:!w(ds),class:Ue(["outline-none bg-transparent",{"text-red-400":!w(o)&&a.value}]),placeholder:"Goto...",onKeydown:[Pr(l,["enter"]),Pr(r,["escape"])],onBlur:r},null,42,z_),[[eh,a.value]])],2))}}),Y_=J(q_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Goto.vue"]]),Z_=$e({__name:"Controls",setup(e){W(G);const t=Zn(),a=Zn();return(o,l)=>($(),N(Se,null,[b(D_,{modelValue:w(cn),"onUpdate:modelValue":l[0]||(l[0]=r=>xe(cn)?cn.value=r:null)},null,8,["modelValue"]),b(Y_),w(t)?($(),z(w(t),{key:0})):he("v-if",!0),w(a)?($(),z(w(a),{key:1,modelValue:w(wo),"onUpdate:modelValue":l[1]||(l[1]=r=>xe(wo)?wo.value=r:null)},null,8,["modelValue"])):he("v-if",!0),w(Ie).info?($(),z(K_,{key:2,modelValue:w(Ws),"onUpdate:modelValue":l[2]||(l[2]=r=>xe(Ws)?Ws.value=r:null)},null,8,["modelValue"])):he("v-if",!0)],64))}}),G_=J(Z_,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Controls.vue"]]),J_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Q_=n("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),X_=[Q_];function eg(e,t){return $(),N("svg",J_,X_)}const ng={name:"carbon-settings-adjust",render:eg},tg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},sg=n("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),ag=n("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),og=[sg,ag];function lg(e,t){return $(),N("svg",tg,og)}const rg={name:"carbon-information",render:lg},ig={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},cg=n("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),ug=[cg];function pg(e,t){return $(),N("svg",ig,ug)}const dg={name:"carbon-download",render:pg},fg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hg=n("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),mg=n("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),vg=[hg,mg];function kg(e,t){return $(),N("svg",fg,vg)}const _g={name:"carbon-user-speaker",render:kg},gg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yg=n("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),bg=n("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),wg=[yg,bg];function xg(e,t){return $(),N("svg",gg,wg)}const $g={name:"carbon-presentation-file",render:xg},Rg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Eg=n("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Sg=[Eg];function Cg(e,t){return $(),N("svg",Rg,Sg)}const Pg={name:"carbon-pen",render:Cg},Tg={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Og=n("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Ag=n("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Mg=[Og,Ag];function Ig(e,t){return $(),N("svg",Tg,Mg)}const Lg={name:"ph-cursor-duotone",render:Ig},Dg={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Ng=n("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),Fg=[Ng];function Vg(e,t){return $(),N("svg",Dg,Fg)}const Wu={name:"ph-cursor-fill",render:Vg},jg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hg=n("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Ug=[Hg];function Bg(e,t){return $(),N("svg",jg,Ug)}const Wg={name:"carbon-sun",render:Bg},Kg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zg=n("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),qg=[zg];function Yg(e,t){return $(),N("svg",Kg,qg)}const Zg={name:"carbon-moon",render:Yg},Gg={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jg=n("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Qg=[Jg];function Xg(e,t){return $(),N("svg",Gg,Qg)}const e1={name:"carbon-apps",render:Xg},n1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t1=n("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),s1=[t1];function a1(e,t){return $(),N("svg",n1,s1)}const o1={name:"carbon-arrow-right",render:a1},l1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r1=n("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),i1=[r1];function c1(e,t){return $(),N("svg",l1,i1)}const u1={name:"carbon-arrow-left",render:c1},p1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d1=n("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),f1=[d1];function h1(e,t){return $(),N("svg",p1,f1)}const m1={name:"carbon-maximize",render:h1},v1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k1=n("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),_1=[k1];function g1(e,t){return $(),N("svg",v1,_1)}const y1={name:"carbon-minimize",render:g1},b1={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w1=n("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),x1=[w1];function $1(e,t){return $(),N("svg",b1,x1)}const R1={name:"carbon-checkmark",render:$1},E1={class:"select-list"},S1={class:"title"},C1={class:"items"},P1=["onClick"],T1=$e({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const a=e;W(G);const o=Fn(a,"modelValue",t,{passive:!0});return(l,r)=>{const i=R1;return $(),N("div",E1,[n("div",S1,qe(e.title),1),n("div",C1,[($(!0),N(Se,null,la(e.items,c=>($(),N("div",{key:c.value,class:Ue(["item",{active:w(o)===c.value}]),onClick:()=>{var u;o.value=c.value,(u=c.onClick)==null||u.call(c)}},[b(i,{class:Ue(["text-green-500",{"opacity-0":w(o)!==c.value}])},null,8,["class"]),s(" "+qe(c.display||c.value),1)],10,P1))),128))])])}}});const O1=J(T1,[["__scopeId","data-v-773f1c1c"],["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/SelectList.vue"]]),A1={class:"text-sm"},M1=$e({__name:"Settings",setup(e){W(G);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(a,o)=>($(),N("div",A1,[b(O1,{modelValue:w(xa),"onUpdate:modelValue":o[0]||(o[0]=l=>xe(xa)?xa.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),I1=J(M1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Settings.vue"]]),L1={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},D1=$e({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const a=e;W(G);const o=Fn(a,"modelValue",t,{passive:!0}),l=ne();return em(l,()=>{o.value=!1}),(r,i)=>($(),N("div",{ref_key:"el",ref:l,class:"flex relative"},[n("button",{class:Ue({disabled:e.disabled}),onClick:i[0]||(i[0]=c=>o.value=!w(o))},[kn(r.$slots,"button",{class:Ue({disabled:e.disabled})})],2),($(),z(Rc,null,[w(o)?($(),N("div",L1,[kn(r.$slots,"menu")])):he("v-if",!0)],1024))],512))}}),N1=J(D1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/MenuButton.vue"]]),F1={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},V1={__name:"VerticalDivider",setup(e){return W(G),(t,a)=>($(),N("div",F1))}},ka=J(V1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),j1={render(){return[]}},H1={class:"icon-btn"},U1={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},B1={class:"my-auto"},W1={class:"opacity-50"},K1=$e({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;W(G);const a=el.smaller("md"),{isFullscreen:o,toggle:l}=Au,r=T(()=>ll.value?`?password=${ll.value}`:""),i=T(()=>`/presenter/${Qe.value}${r.value}`),c=T(()=>`/${Qe.value}${r.value}`),u=ne(),p=()=>{u.value&&_s.value&&u.value.contains(_s.value)&&_s.value.blur()},f=T(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=Zn(),h=Zn();return Jt(()=>import("./DrawingControls-fa97338c.js"),[]).then(v=>h.value=v.default),(v,k)=>{const y=y1,x=m1,P=u1,E=o1,C=e1,O=Zg,U=Wg,H=Wu,Z=Lg,q=Pg,oe=$g,ie=Zt("RouterLink"),ge=_g,He=dg,Xe=rg,en=ng;return $(),N("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[n("div",{class:Ue(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(f)]),onMouseleave:p},[w(nt)?he("v-if",!0):($(),N("button",{key:0,class:"icon-btn",onClick:k[0]||(k[0]=(...Te)=>w(l)&&w(l)(...Te))},[w(o)?($(),z(y,{key:0})):($(),z(x,{key:1}))])),n("button",{class:Ue(["icon-btn",{disabled:!w(HR)}]),onClick:k[1]||(k[1]=(...Te)=>w(zt)&&w(zt)(...Te))},[b(P)],2),n("button",{class:Ue(["icon-btn",{disabled:!w(jR)}]),title:"Next",onClick:k[2]||(k[2]=(...Te)=>w(Kt)&&w(Kt)(...Te))},[b(E)],2),w(nt)?he("v-if",!0):($(),N("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:k[3]||(k[3]=Te=>w(Mu)())},[b(C)])),w(al)?he("v-if",!0):($(),N("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:k[4]||(k[4]=Te=>w(ju)())},[w(Ll)?($(),z(O,{key:0})):($(),z(U,{key:1}))])),b(ka),w(nt)?he("v-if",!0):($(),N(Se,{key:3},[!w(Dn)&&!w(a)&&w(d)?($(),N(Se,{key:0},[b(w(d)),b(ka)],64)):he("v-if",!0),w(Dn)?($(),N("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:k[5]||(k[5]=Te=>xo.value=!w(xo))},[w(xo)?($(),z(H,{key:0})):($(),z(Z,{key:1,class:"opacity-50"}))])):he("v-if",!0)],64)),(!w(Ie).drawings.presenterOnly||w(Dn))&&!w(nt)?($(),N(Se,{key:4},[n("button",{class:"icon-btn relative",title:"Drawing",onClick:k[6]||(k[6]=Te=>qn.value=!w(qn))},[b(q),w(qn)?($(),N("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Be({background:w(Nt).color})},null,4)):he("v-if",!0)]),b(ka)],64)):he("v-if",!0),w(nt)?he("v-if",!0):($(),N(Se,{key:5},[w(Dn)?($(),z(ie,{key:0,to:w(c),class:"icon-btn",title:"Play Mode"},{default:g(()=>[b(oe)]),_:1},8,["to"])):he("v-if",!0),w(NR)?($(),z(ie,{key:1,to:w(i),class:"icon-btn",title:"Presenter Mode"},{default:g(()=>[b(ge)]),_:1},8,["to"])):he("v-if",!0),he("v-if",!0)],64)),($(),N(Se,{key:6},[w(Ie).download?($(),N("button",{key:0,class:"icon-btn",onClick:k[8]||(k[8]=(...Te)=>w(Fi)&&w(Fi)(...Te))},[b(He)])):he("v-if",!0)],64)),!w(Dn)&&w(Ie).info&&!w(nt)?($(),N("button",{key:7,class:"icon-btn",onClick:k[9]||(k[9]=Te=>Ws.value=!w(Ws))},[b(Xe)])):he("v-if",!0),!w(Dn)&&!w(nt)?($(),z(N1,{key:8},{button:g(()=>[n("button",H1,[b(en)])]),menu:g(()=>[b(I1)]),_:1})):he("v-if",!0),w(nt)?he("v-if",!0):($(),z(ka,{key:9})),n("div",U1,[n("div",B1,[s(qe(w(Qe))+" ",1),n("span",W1,"/ "+qe(w(np)),1)])]),b(w(j1))],34)],512)}}}),z1=J(K1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/NavControls.vue"]]),Ku={render(){return[]}},zu={render(){return[]}},q1={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Y1=$e({__name:"PresenterMouse",setup(e){return W(G),(t,a)=>{const o=Wu;return w(_o).cursor?($(),N("div",q1,[b(o,{class:"absolute",style:Be({left:`${w(_o).cursor.x}%`,top:`${w(_o).cursor.y}%`})},null,8,["style"])])):he("v-if",!0)}}}),Z1=J(Y1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),G1=$e({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(e){W(G),Fe(wn,()=>{var a,o;(a=wn.value)!=null&&a.meta&&wn.value.meta.preload!==!1&&(wn.value.meta.__preloaded=!0),(o=Ro.value)!=null&&o.meta&&Ro.value.meta.preload!==!1&&(Ro.value.meta.__preloaded=!0)},{immediate:!0});const t=Zn();return Jt(()=>import("./DrawingLayer-3481f0d3.js"),[]).then(a=>t.value=a.default),(a,o)=>($(),N(Se,null,[he(" Global Bottom "),b(w(zu)),he(" Slides "),($(!0),N(Se,null,la(w(Ze),l=>{var r,i;return $(),N(Se,{key:l.path},[(r=l.meta)!=null&&r.__preloaded||l===w(wn)?De(($(),z(w(Fl),{key:0,is:l==null?void 0:l.component,clicks:l===w(wn)?w(Qt):0,"clicks-elements":((i=l.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:Ue(w(Nl)(l)),route:l,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Zc,l===w(wn)]]):he("v-if",!0)],64)}),128)),he(" Global Top "),b(w(Ku)),w(t)?($(),z(w(t),{key:0})):he("v-if",!0),w(Dn)?he("v-if",!0):($(),z(Z1,{key:1}))],64))}}),J1=J(G1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/SlidesShow.vue"]]),Q1=$e({__name:"Play",setup(e){W(G),x_();const t=ne();function a(r){var i;yi.value||((i=r.target)==null?void 0:i.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Kt():zt())}WR(t);const o=T(()=>Ak.value||yi.value);Zn();const l=Zn();return Jt(()=>import("./DrawingControls-fa97338c.js"),[]).then(r=>l.value=r.default),(r,i)=>($(),N(Se,null,[n("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Be(w(Tl))},[b(Uu,{class:"w-full h-full",style:Be({background:"var(--slidev-slide-container-background, black)"}),width:w(Bl)?w(Wt).width.value:void 0,scale:w(xa),onPointerdown:a},{default:g(()=>[b(J1,{context:"slide"})]),controls:g(()=>[n("div",{class:Ue(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(o)?"opacity-100 right-0":"opacity-0 p-2",w(na)?"pointer-events-none":""]])},[b(z1,{class:"m-auto",persist:w(o)},null,8,["persist"])],2),!w(Ie).drawings.presenterOnly&&!w(nt)&&w(l)?($(),z(w(l),{key:0,class:"ml-0"})):he("v-if",!0)]),_:1},8,["style","width","scale"]),he("v-if",!0)],4),b(G_)],64))}}),X1=J(Q1,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function qu(e){return typeof e>"u"||e===null}function ey(e){return typeof e=="object"&&e!==null}function ny(e){return Array.isArray(e)?e:qu(e)?[]:[e]}function ty(e,t){var a,o,l,r;if(t)for(r=Object.keys(t),a=0,o=r.length;a<o;a+=1)l=r[a],e[l]=t[l];return e}function sy(e,t){var a="",o;for(o=0;o<t;o+=1)a+=e;return a}function ay(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var oy=qu,ly=ey,ry=ny,iy=sy,cy=ay,uy=ty,Vl={isNothing:oy,isObject:ly,toArray:ry,repeat:iy,isNegativeZero:cy,extend:uy};function Yu(e,t){var a="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(a+='in "'+e.mark.name+'" '),a+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(a+=`

`+e.mark.snippet),o+" "+a):o}function sa(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Yu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}sa.prototype=Object.create(Error.prototype);sa.prototype.constructor=sa;sa.prototype.toString=function(t){return this.name+": "+Yu(this,t)};var Lt=sa,py=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],dy=["scalar","sequence","mapping"];function fy(e){var t={};return e!==null&&Object.keys(e).forEach(function(a){e[a].forEach(function(o){t[String(o)]=a})}),t}function hy(e,t){if(t=t||{},Object.keys(t).forEach(function(a){if(py.indexOf(a)===-1)throw new Lt('Unknown option "'+a+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(a){return a},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=fy(t.styleAliases||null),dy.indexOf(this.kind)===-1)throw new Lt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var on=hy;function Ai(e,t){var a=[];return e[t].forEach(function(o){var l=a.length;a.forEach(function(r,i){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=i)}),a[l]=o}),a}function my(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,a;function o(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(t=0,a=arguments.length;t<a;t+=1)arguments[t].forEach(o);return e}function ol(e){return this.extend(e)}ol.prototype.extend=function(t){var a=[],o=[];if(t instanceof on)o.push(t);else if(Array.isArray(t))o=o.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(a=a.concat(t.implicit)),t.explicit&&(o=o.concat(t.explicit));else throw new Lt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");a.forEach(function(r){if(!(r instanceof on))throw new Lt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Lt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Lt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof on))throw new Lt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(ol.prototype);return l.implicit=(this.implicit||[]).concat(a),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Ai(l,"implicit"),l.compiledExplicit=Ai(l,"explicit"),l.compiledTypeMap=my(l.compiledImplicit,l.compiledExplicit),l};var vy=ol,ky=new on("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),_y=new on("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),gy=new on("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),yy=new vy({explicit:[ky,_y,gy]});function by(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function wy(){return null}function xy(e){return e===null}var $y=new on("tag:yaml.org,2002:null",{kind:"scalar",resolve:by,construct:wy,predicate:xy,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Ry(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Ey(e){return e==="true"||e==="True"||e==="TRUE"}function Sy(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var Cy=new on("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Ry,construct:Ey,predicate:Sy,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Py(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Ty(e){return 48<=e&&e<=55}function Oy(e){return 48<=e&&e<=57}function Ay(e){if(e===null)return!1;var t=e.length,a=0,o=!1,l;if(!t)return!1;if(l=e[a],(l==="-"||l==="+")&&(l=e[++a]),l==="0"){if(a+1===t)return!0;if(l=e[++a],l==="b"){for(a++;a<t;a++)if(l=e[a],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(a++;a<t;a++)if(l=e[a],l!=="_"){if(!Py(e.charCodeAt(a)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(a++;a<t;a++)if(l=e[a],l!=="_"){if(!Ty(e.charCodeAt(a)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;a<t;a++)if(l=e[a],l!=="_"){if(!Oy(e.charCodeAt(a)))return!1;o=!0}return!(!o||l==="_")}function My(e){var t=e,a=1,o;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),o=t[0],(o==="-"||o==="+")&&(o==="-"&&(a=-1),t=t.slice(1),o=t[0]),t==="0")return 0;if(o==="0"){if(t[1]==="b")return a*parseInt(t.slice(2),2);if(t[1]==="x")return a*parseInt(t.slice(2),16);if(t[1]==="o")return a*parseInt(t.slice(2),8)}return a*parseInt(t,10)}function Iy(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Vl.isNegativeZero(e)}var Ly=new on("tag:yaml.org,2002:int",{kind:"scalar",resolve:Ay,construct:My,predicate:Iy,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Dy=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Ny(e){return!(e===null||!Dy.test(e)||e[e.length-1]==="_")}function Fy(e){var t,a;return t=e.replace(/_/g,"").toLowerCase(),a=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?a===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:a*parseFloat(t,10)}var Vy=/^[-+]?[0-9]+e/;function jy(e,t){var a;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Vl.isNegativeZero(e))return"-0.0";return a=e.toString(10),Vy.test(a)?a.replace("e",".e"):a}function Hy(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Vl.isNegativeZero(e))}var Uy=new on("tag:yaml.org,2002:float",{kind:"scalar",resolve:Ny,construct:Fy,predicate:Hy,represent:jy,defaultStyle:"lowercase"}),By=yy.extend({implicit:[$y,Cy,Ly,Uy]}),Wy=By,Zu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Gu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function Ky(e){return e===null?!1:Zu.exec(e)!==null||Gu.exec(e)!==null}function zy(e){var t,a,o,l,r,i,c,u=0,p=null,f,d,h;if(t=Zu.exec(e),t===null&&(t=Gu.exec(e)),t===null)throw new Error("Date resolve error");if(a=+t[1],o=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(a,o,l));if(r=+t[4],i=+t[5],c=+t[6],t[7]){for(u=t[7].slice(0,3);u.length<3;)u+="0";u=+u}return t[9]&&(f=+t[10],d=+(t[11]||0),p=(f*60+d)*6e4,t[9]==="-"&&(p=-p)),h=new Date(Date.UTC(a,o,l,r,i,c,u)),p&&h.setTime(h.getTime()-p),h}function qy(e){return e.toISOString()}var Yy=new on("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:Ky,construct:zy,instanceOf:Date,represent:qy});function Zy(e){return e==="<<"||e===null}var Gy=new on("tag:yaml.org,2002:merge",{kind:"scalar",resolve:Zy}),jl=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function Jy(e){if(e===null)return!1;var t,a,o=0,l=e.length,r=jl;for(a=0;a<l;a++)if(t=r.indexOf(e.charAt(a)),!(t>64)){if(t<0)return!1;o+=6}return o%8===0}function Qy(e){var t,a,o=e.replace(/[\r\n=]/g,""),l=o.length,r=jl,i=0,c=[];for(t=0;t<l;t++)t%4===0&&t&&(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)),i=i<<6|r.indexOf(o.charAt(t));return a=l%4*6,a===0?(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)):a===18?(c.push(i>>10&255),c.push(i>>2&255)):a===12&&c.push(i>>4&255),new Uint8Array(c)}function Xy(e){var t="",a=0,o,l,r=e.length,i=jl;for(o=0;o<r;o++)o%3===0&&o&&(t+=i[a>>18&63],t+=i[a>>12&63],t+=i[a>>6&63],t+=i[a&63]),a=(a<<8)+e[o];return l=r%3,l===0?(t+=i[a>>18&63],t+=i[a>>12&63],t+=i[a>>6&63],t+=i[a&63]):l===2?(t+=i[a>>10&63],t+=i[a>>4&63],t+=i[a<<2&63],t+=i[64]):l===1&&(t+=i[a>>2&63],t+=i[a<<4&63],t+=i[64],t+=i[64]),t}function e0(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var n0=new on("tag:yaml.org,2002:binary",{kind:"scalar",resolve:Jy,construct:Qy,predicate:e0,represent:Xy}),t0=Object.prototype.hasOwnProperty,s0=Object.prototype.toString;function a0(e){if(e===null)return!0;var t=[],a,o,l,r,i,c=e;for(a=0,o=c.length;a<o;a+=1){if(l=c[a],i=!1,s0.call(l)!=="[object Object]")return!1;for(r in l)if(t0.call(l,r))if(!i)i=!0;else return!1;if(!i)return!1;if(t.indexOf(r)===-1)t.push(r);else return!1}return!0}function o0(e){return e!==null?e:[]}var l0=new on("tag:yaml.org,2002:omap",{kind:"sequence",resolve:a0,construct:o0}),r0=Object.prototype.toString;function i0(e){if(e===null)return!0;var t,a,o,l,r,i=e;for(r=new Array(i.length),t=0,a=i.length;t<a;t+=1){if(o=i[t],r0.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[t]=[l[0],o[l[0]]]}return!0}function c0(e){if(e===null)return[];var t,a,o,l,r,i=e;for(r=new Array(i.length),t=0,a=i.length;t<a;t+=1)o=i[t],l=Object.keys(o),r[t]=[l[0],o[l[0]]];return r}var u0=new on("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:i0,construct:c0}),p0=Object.prototype.hasOwnProperty;function d0(e){if(e===null)return!0;var t,a=e;for(t in a)if(p0.call(a,t)&&a[t]!==null)return!1;return!0}function f0(e){return e!==null?e:{}}var h0=new on("tag:yaml.org,2002:set",{kind:"mapping",resolve:d0,construct:f0});Wy.extend({implicit:[Yy,Gy],explicit:[n0,l0,u0,h0]});function Mi(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"":e===95?" ":e===76?"\u2028":e===80?"\u2029":""}var m0=new Array(256),v0=new Array(256);for(var rs=0;rs<256;rs++)m0[rs]=Mi(rs)?1:0,v0[rs]=Mi(rs);function k0(e){return Array.from(new Set(e))}function Ii(...e){let t,a,o;e.length===1?(t=0,o=1,[a]=e):[t,a,o=1]=e;const l=[];let r=t;for(;r<a;)l.push(r),r+=o||1;return l}function Ju(e,t){if(!t||t==="all"||t==="*")return Ii(1,e+1);const a=[];for(const o of t.split(/[,;]/g))if(!o.includes("-"))a.push(+o);else{const[l,r]=o.split("-",2);a.push(...Ii(+l,r?+r+1:e+1))}return k0(a).filter(o=>o<=e).sort((o,l)=>o-l)}function _0(e){const t=T(()=>e.value.path),a=T(()=>Ze.length-1),o=T(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=T(()=>Wl(o.value)),r=T(()=>Ze.find(h=>h.path===`${o.value}`)),i=T(()=>{var h,v,k;return(k=(v=(h=r.value)==null?void 0:h.meta)==null?void 0:v.slide)==null?void 0:k.id}),c=T(()=>{var h,v;return((v=(h=r.value)==null?void 0:h.meta)==null?void 0:v.layout)||(o.value===1?"cover":"default")}),u=T(()=>Ze.find(h=>h.path===`${Math.min(Ze.length,o.value+1)}`)),p=T(()=>Ze.filter(h=>{var v,k;return(k=(v=h.meta)==null?void 0:v.slide)==null?void 0:k.title}).reduce((h,v)=>(Kl(h,v),h),[])),f=T(()=>zl(p.value,r.value)),d=T(()=>ql(f.value));return{route:e,path:t,total:a,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:i,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:f,tree:d}}function g0(e,t,a){const o=ne(0);jn(()=>{xt.afterEach(async()=>{await jn(),o.value+=1})});const l=T(()=>{var u,p;return o.value,((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),r=T(()=>{var u,p;return+(((p=(u=t.value)==null?void 0:u.meta)==null?void 0:p.clicks)??l.value.length)}),i=T(()=>a.value<Ze.length-1||e.value<r.value),c=T(()=>a.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:r,hasNext:i,hasPrev:c}}const y0=["id"],b0=$e({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(e,{emit:t}){const a=e,o=Fn(a,"clicksElements",t),l=T(()=>({height:`${Pl}px`,width:`${wt}px`})),r=Zn();Jt(()=>Promise.resolve().then(()=>A_),void 0).then(p=>r.value=p.default);const i=T(()=>a.clicks),c=g0(i,a.nav.currentRoute,a.nav.currentPage),u=T(()=>`${a.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return xn(G,tn({nav:{...a.nav,...c},configs:Ie,themeConfigs:T(()=>Ie.themeConfig)})),(p,f)=>{var d;return $(),N("div",{id:w(u),class:"slide-container",style:Be(w(l))},[b(w(zu)),b(w(Fl),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":w(o),"onUpdate:clicks-elements":f[0]||(f[0]=h=>xe(o)?o.value=h:null),clicks:w(i),"clicks-disabled":!1,class:Ue(w(Nl)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),w(r)?($(),z(w(r),{key:0,page:+e.route.path},null,8,["page"])):he("v-if",!0),b(w(Ku))],12,y0)}}}),Li=J(b0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),w0=$e({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(e){var r;const t=e;W(G);const a=tn(((r=t.route.meta)==null?void 0:r.__clicksElements)||[]),o=T(()=>t.route),l=_0(o);return(i,c)=>($(),N(Se,null,[b(Li,{"clicks-elements":a,"onUpdate:clicks-elements":c[0]||(c[0]=u=>a=u),clicks:0,nav:w(l),route:w(o)},null,8,["clicks-elements","nav","route"]),w(ep)?he("v-if",!0):($(!0),N(Se,{key:0},la(a.length,u=>($(),z(Li,{key:u,clicks:u,nav:w(l),route:w(o)},null,8,["clicks","nav","route"]))),128))],64))}}),x0=J(w0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/PrintSlide.vue"]]),$0={id:"print-content"},R0=$e({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(e){const t=e;W(G);const a=T(()=>t.width),o=T(()=>t.width/bt),l=T(()=>a.value/o.value),r=T(()=>l.value<bt?a.value/wt:o.value*bt/wt);let i=Ze.slice(0,-1);Jn.value.query.range&&(i=Ju(i.length,Jn.value.query.range).map(p=>i[p-1]));const c=T(()=>({"select-none":!Ie.selectable,"slidev-code-line-numbers":Ie.lineNumbers}));return xn(Xc,r),(u,p)=>($(),N("div",{id:"print-container",class:Ue(w(c))},[n("div",$0,[($(!0),N(Se,null,la(w(i),f=>($(),z(x0,{key:f.path,route:f},null,8,["route"]))),128))]),kn(u.$slots,"controls")],2))}});const E0=J(R0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/PrintContainer.vue"]]),S0=$e({__name:"Print",setup(e){W(G);function t(a,{slots:o}){if(o.default)return Gt("style",o.default())}return ws(()=>{Bl?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(a,o)=>($(),N(Se,null,[b(t,null,{default:g(()=>[s(" @page { size: "+qe(w(wt))+"px "+qe(w(Pl))+"px; margin: 0px; } ",1)]),_:1}),n("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Be(w(Tl))},[b(E0,{class:"w-full h-full",style:Be({background:"var(--slidev-slide-container-background, black)"}),width:w(Wt).width.value},null,8,["style","width"])],4)],64))}});const C0=J(S0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/internals/Print.vue"]]);const P0={class:"slidev-layout end"},T0={__name:"end",setup(e){return W(G),(t,a)=>($(),N("div",P0," END "))}},O0=J(T0,[["__scopeId","data-v-1e28a237"],["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/layouts/end.vue"]]);function Di(e){return e.startsWith("/")?"/"+e.slice(1):e}function A0(e,t=!1){const a=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),o={background:a?e:void 0,color:e&&!a?"white":void 0,backgroundImage:a?void 0:e?t?`linear-gradient(#0005, #0008), url(${Di(e)})`:`url("${Di(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const M0={class:"my-auto w-full"},I0=$e({__name:"cover",props:{background:{default:""}},setup(e){const t=e;W(G);const a=T(()=>A0(t.background,!0));return(o,l)=>($(),N("div",{class:"slidev-layout cover",style:Be(w(a))},[n("div",M0,[kn(o.$slots,"default")])],4))}}),L0=J(I0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+theme-default@0.21.2/node_modules/@slidev/theme-default/layouts/cover.vue"]]),D0=n("br",null,null,-1),N0=n("br",null,null,-1),F0=n("br",null,null,-1),V0=n("br",null,null,-1),j0=n("br",null,null,-1),H0=n("br",null,null,-1),U0=n("h1",null,"Vue的组合式开发",-1),B0=n("p",null,[s("编写可组合可复用的 Vue 函数 "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),s(" 2023/03/06")],-1),W0={__name:"1",setup(e){const t={};return W(G),(a,o)=>($(),z(L0,be(_e(t)),{default:g(()=>[D0,N0,F0,V0,j0,H0,U0,B0]),_:1},16))}},K0=J(W0,[["__file","/@slidev/slides/1.md"]]),z0={class:"slidev-layout center h-full grid place-content-center"},q0={class:"my-auto"},Y0={__name:"center",setup(e){return W(G),(t,a)=>($(),N("div",z0,[n("div",q0,[kn(t.$slots,"default")])]))}},Qu=J(Y0,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/layouts/center.vue"]]),Z0=n("h1",null,"Vue Composition API",-1),G0={__name:"2",setup(e){const t={layout:"center"};return W(G),(a,o)=>{const l=Zt("font"),r=Zt("center");return $(),z(Qu,be(_e(t)),{default:g(()=>[Z0,b(r,null,{default:g(()=>[b(l,{color:"#666"},{default:g(()=>[s("组合式 API")]),_:1})]),_:1})]),_:1},16)}}},J0=J(G0,[["__file","/@slidev/slides/2.md"]]),Hl=$e({render(){var o,l;const e=vn("after");function t(r,i){return De(r,[[i]])}let a=(l=(o=this.$slots).default)==null?void 0:l.call(o);if(a)return a=eu(a),a.map(r=>t(Gt(r),e))}});const Q0={class:"flex"},X0={class:"flex-item"},eb={class:"flex-item"},nb={__name:"LR",setup(e){return W(G),(t,a)=>($(),N("div",Q0,[n("div",X0,[kn(t.$slots,"left",{},void 0,!0)]),n("div",eb,[kn(t.$slots,"right",{},void 0,!0)])]))}},_n=J(nb,[["__scopeId","data-v-9f20fe88"],["__file","D:/github/share-ppt/components/LR.vue"]]),tb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},sb=n("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),ab=[sb];function ob(e,t){return $(),N("svg",tb,ab)}const lb={name:"ph-clipboard",render:ob},rb={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ib=n("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),cb=[ib];function ub(e,t){return $(),N("svg",rb,cb)}const pb={name:"ph-check-circle",render:ub},db=["title"],fb=$e({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const t=e;W(G);const a=W(Gc),o=W(Jc),l=W(Qc);function r(d=5){const h=[],v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",k=v.length;for(let y=0;y<d;y++)h.push(v.charAt(Math.floor(Math.random()*k)));return h.join("")}const i=ne(),c=Pt();no(()=>{const d=t.at==null?o==null?void 0:o.value.length:t.at,h=T(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((a==null?void 0:a.value)||0)-(d||0)),t.ranges.length-1)),v=T(()=>t.ranges[h.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const k=r(),y=fh(t.ranges.length-1).map(x=>k+x);o!=null&&o.value&&(o.value.push(...y),to(()=>y.forEach(x=>dh(o.value,x)),c))}ws(()=>{if(!i.value)return;const y=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const x of y){const P=Array.from(x.querySelectorAll(".line")),E=Ju(P.length,v.value);if(P.forEach((C,O)=>{const U=E.includes(O+1);C.classList.toggle(ph,!0),C.classList.toggle("highlighted",U),C.classList.toggle("dishonored",!U)}),t.maxHeight){const C=x.querySelector(".line.highlighted");C&&C.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:u,copy:p}=um();function f(){var h,v;const d=(v=(h=i.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:v.textContent;d&&p(d)}return(d,h)=>{const v=pb,k=lb;return $(),N("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:Be({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0})},[kn(d.$slots,"default"),w(Ie).codeCopy?($(),N("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:w(u)?"Copied":"Copy",onClick:h[0]||(h[0]=y=>f())},[w(u)?($(),z(v,{key:0,class:"p-2 w-8 h-8"})):($(),z(k,{key:1,class:"p-2 w-8 h-8"}))],8,db)):he("v-if",!0)],4)}}}),Ne=J(fb,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),hb={class:"slidev-layout default"},mb={__name:"default",setup(e){return W(G),(t,a)=>($(),N("div",hb,[kn(t.$slots,"default")]))}},Re=J(mb,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/layouts/default.vue"]]),vb=n("h1",null,"什么是组合式API",-1),kb=n("p",null,"在 Vue3 中引入的一种新的编写组件的方式",-1),_b=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),wb={__name:"3",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=_n,i=Hl,c=vn("click-hide");return $(),z(Re,be(_e(t)),{default:g(()=>[vb,kb,De(($(),z(r,null,{left:g(()=>[b(l,te({},{ranges:[""]}),{default:g(()=>[_b]),_:1},16)]),right:g(()=>[b(l,te({},{ranges:[""]}),{default:g(()=>[gb]),_:1},16)]),_:1})),[[c]]),De(($(),z(i,null,{default:g(()=>[b(r,null,{left:g(()=>[b(l,te({},{ranges:["3,7-8,12-13"]}),{default:g(()=>[yb]),_:1},16)]),right:g(()=>[b(l,te({},{ranges:["5,16"]}),{default:g(()=>[bb]),_:1},16)]),_:1})]),_:1})),[[c]])]),_:1},16)}}},xb=J(wb,[["__file","/@slidev/slides/3.md"]]),$b=n("h1",null,"什么是组合式API",-1),Rb=n("p",null,"在 Vue3 中引入的一种新的编写组件的方式",-1),Eb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),Tb={__name:"4",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=_n,i=Hl,c=vn("click-hide");return $(),z(Re,be(_e(t)),{default:g(()=>[$b,Rb,De(($(),z(r,null,{left:g(()=>[b(l,te({},{ranges:["4-6"]}),{default:g(()=>[Eb]),_:1},16)]),right:g(()=>[b(l,te({},{ranges:["6,10"]}),{default:g(()=>[Sb]),_:1},16)]),_:1})),[[c]]),De(($(),z(i,null,{default:g(()=>[b(r,null,{left:g(()=>[b(l,te({},{ranges:["8-12"]}),{default:g(()=>[Cb]),_:1},16)]),right:g(()=>[b(l,te({},{ranges:["7,11"]}),{default:g(()=>[Pb]),_:1},16)]),_:1})]),_:1})),[[c]])]),_:1},16)}}},Ob=J(Tb,[["__file","/@slidev/slides/4.md"]]),Ab=n("h1",null,"什么是组合式API",-1),Mb=n("p",null,"在 Vue3 中引入的一种新的编写组件的方式",-1),Ib=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token operator"},"<"),s("script"),n("span",{class:"token operator"},">")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">")])])],-1),Fb={__name:"5",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=_n,i=Hl,c=vn("click-hide");return $(),z(Re,be(_e(t)),{default:g(()=>[Ab,Mb,De(($(),z(r,null,{left:g(()=>[b(l,te({},{ranges:["13-17"]}),{default:g(()=>[Ib]),_:1},16)]),right:g(()=>[b(l,te({},{ranges:["12-14"]}),{default:g(()=>[Lb]),_:1},16)]),_:1})),[[c]]),De(($(),z(i,null,{default:g(()=>[b(r,null,{left:g(()=>[b(l,te({},{ranges:[""]}),{default:g(()=>[Db]),_:1},16)]),right:g(()=>[b(l,te({},{ranges:[""]}),{default:g(()=>[Nb]),_:1},16)]),_:1})]),_:1})),[[c]])]),_:1},16)}}},Vb=J(Fb,[["__file","/@slidev/slides/5.md"]]),ut=$e({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var r,i;const e=vn("click"),t=vn("after"),a=(c,u,p)=>De(c,[[u,this.at!=null?+this.at+p:null,"",{hide:this.hide,fade:this.fade}]]);let o=(i=(r=this.$slots).default)==null?void 0:i.call(r);if(!o)return;o=eu(o);const l=c=>c.map((u,p)=>Et(u)?a(Gt(u),p%this.every===0?e:t,Math.floor(p/this.every)):u);return o.length===1&&["ul","ol"].includes(o[0].type)&&Array.isArray(o[0].children)?Gt(o[0],{},[l(o[0].children)]):l(o)}}),jb=n("h1",null,"为什么引入组合式API？",-1),Hb={__name:"6",setup(e){const t={};return W(G),(a,o)=>{const l=Zt("font"),r=_n,i=ut;return $(),z(Re,be(_e(t)),{default:g(()=>[jb,b(i,null,{default:g(()=>[b(r,{class:"mt-8 mb-8"},{left:g(()=>[b(l,{color:"#666"},{default:g(()=>[s("选项式 API 存在的问题")]),_:1})]),right:g(()=>[b(l,{color:"#666"},{default:g(()=>[s("组合式 API 提供的能力")]),_:1})]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[s(" • 不利于复用 ")]),right:g(()=>[s(" • 极易复用（原生JS函数） ")]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[s(" • 潜在命名冲突 ")]),right:g(()=>[s(" • 可灵活组合（生命周期钩子可多次使用） ")]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[s(" • 上下文丢失 ")]),right:g(()=>[s(" • 提供更好的上下文支持 ")]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[s(" • 有限的类型支持 ")]),right:g(()=>[s(" • 更好的TypeScript类型支持 ")]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[s(" • 按API类型组织 ")]),right:g(()=>[s(" • 按功能/逻辑组织 ")]),_:1}),b(r,{class:"mb-4"},{left:g(()=>[]),right:g(()=>[s(" • 可独立于Vue组件使用 ")]),_:1})]),_:1})]),_:1},16)}}},Ub=J(Hb,[["__file","/@slidev/slides/6.md"]]),Bb={flex:"~",w:"min",border:"~ gray-400 opacity-50 rounded-md"},Wb=$e({__name:"Dark",setup(e){W(G);const t=uu();t.value="dark";const a=Pm(),o=Ol(a);return(l,r)=>($(),N("div",Bb,[n("button",{border:"r gray-400 opacity-50",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:r[0]||(r[0]=i=>w(o)())},qe(w(a)?"light":"dark"),1)]))}}),Kb=J(Wb,[["__file","D:/github/share-ppt/components/Dark.vue"]]),zb=n("h1",null,"什么是可组合函数",-1),qb=n("p",null,"可复用逻辑的集合，专注点分离",-1),Yb=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useDark"),n("span",{class:"token punctuation"},"("),s("options"),n("span",{class:"token operator"},":"),s(" UseDarkOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")])])])],-1),Jb={class:"flex-center mt-10"},Qb={__name:"7",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=Kb,i=_n;return $(),z(Re,be(_e(t)),{default:g(()=>[zb,qb,b(i,null,{left:g(()=>[b(l,te({},{ranges:[""]}),{default:g(()=>[Yb]),_:1},16)]),right:g(()=>[b(l,te({},{ranges:[""]}),{default:g(()=>[Zb]),_:1},16),b(l,te({},{ranges:[""]}),{default:g(()=>[Gb]),_:1},16),n("div",Jb,[b(r)])]),_:1})]),_:1},16)}}},Xb=J(Qb,[["__file","/@slidev/slides/7.md"]]),ew=n("h1",null,"组合关系",-1),nw=n("p",null,[n("img",{src:"https://pageignore.github.io/share-ppt/useDark_img.png",alt:"Remote Image"})],-1),tw=n("div",{class:"mb-5"},"• 每个函数都可以单独使用",-1),sw=n("div",{class:"mb-5"},"• 专注点分离",-1),aw=n("div",{class:"mb-5"},"• 状态连接",-1),ow={__name:"8",setup(e){const t={};return W(G),(a,o)=>{const l=ut;return $(),z(Re,be(_e(t)),{default:g(()=>[ew,nw,b(l,null,{default:g(()=>[tw,sw,aw]),_:1})]),_:1},16)}}},lw=J(ow,[["__file","/@slidev/slides/8.md"]]),Ul=$e({props:{at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){return b(ut,{every:99999,at:this.at,hide:this.hide,fade:this.fade},{default:this.$slots.default})}}),rw={flex:"~",w:"min",border:"~ gray-400 opacity-50 rounded-md"},iw={m:"auto",p:"2"},cw=$e({__name:"Counter",props:{count:{default:0}},setup(e){const t=e;W(G);const{count:a}=pu(t);return(o,l)=>($(),N("div",rw,[n("button",{border:"r gray-400 opacity-50",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:l[0]||(l[0]=r=>a.value-=1)}," - "),n("span",iw,qe(w(a)),1),n("button",{border:"l gray-400 opacity-50",p:"2",font:"mono",outline:"!none","hover:bg":"gray-400 opacity-20",onClick:l[1]||(l[1]=r=>a.value+=1)}," + ")]))}}),uw=J(cw,[["__file","D:/github/share-ppt/components/Counter.vue"]]),pw={class:"box"},dw={class:"name"},fw={key:0},hw={class:"left"},mw={key:0,class:"right"},vw=$e({__name:"CItem",props:{name:{default:""},power:{default:2},isPow:{default:!1},val:{default:0},canChange:{default:!1}},setup(e){const t=e;W(G);const a=t.name,o=t.isPow,{val:l,power:r}=pu(t);function i(c){c?l.value++:l.value>1&&l.value--}return(c,u)=>($(),N("div",pw,[n("div",dw,[s(qe(w(a)),1),w(o)?($(),N("sup",fw,qe(w(r)),1)):he("v-if",!0)]),n("div",hw,qe(w(l)),1),e.canChange?($(),N("div",mw,[n("div",{class:"sign",onClick:u[0]||(u[0]=p=>i(1))},"+"),n("div",{class:"sign",onClick:u[1]||(u[1]=p=>i(0))},"-")])):he("v-if",!0)]))}});const Is=J(vw,[["__scopeId","data-v-714260c7"],["__file","D:/github/share-ppt/components/CItem.vue"]]),io=e=>(wd("data-v-726af6e8"),e=e(),xd(),e),kw={class:"formula"},_w={class:"flex mb-4"},gw=io(()=>n("div",{class:"text"},"次方",-1)),yw={class:"box"},bw={class:"row"},ww={class:"row-item"},xw=io(()=>n("img",{class:"img-01",src:"https://pageignore.github.io/share-ppt/arrow_01.png"},null,-1)),$w={class:"row-item"},Rw={class:"row"},Ew={class:"row-item"},Sw=io(()=>n("img",{class:"img-01",src:"https://pageignore.github.io/share-ppt/arrow_01.png"},null,-1)),Cw={class:"row-item"},Pw={class:"z-item"},Tw=io(()=>n("img",{class:"img-02",src:"https://pageignore.github.io/share-ppt/arrow_02.png"},null,-1)),Ow=$e({__name:"Connect",setup(e){W(G);function t(h,v){return h+v}const a=Mr(t),o=Mr(Math.pow),l=ne(2),r=ne(1),i=ne(1),c=o(r,l),u=o(i,l),p=a(c,u),f=T(()=>({"--tw-gradient-from":"rgba(52, 211, 153, .8)","--tw-gradient-to":"rgba(22, 111, 153, .8)"})),d=T(()=>({"--tw-gradient-from":"rgba(96, 165, 250, .8)","--tw-gradient-to":"rgba(167, 139, 250, .8)"}));return(h,v)=>{const k=uw;return $(),N("div",null,[n("div",kw,[s("𝒛 = 𝒙"),n("sup",null,qe(l.value),1),s(" + 𝒚"),n("sup",null,qe(l.value),1),s(" = "+qe(r.value)+"x"+qe(r.value)+"+"+qe(i.value)+"x"+qe(i.value)+" = "+qe(w(p)),1)]),n("div",_w,[b(k,{count:l.value,"onUpdate:count":v[0]||(v[0]=y=>l.value=y)},null,8,["count"]),gw]),n("div",yw,[n("div",bw,[n("div",ww,[b(Is,{style:Be(w(f)),name:"𝒙",val:r.value,"onUpdate:val":v[1]||(v[1]=y=>r.value=y),canChange:!0},null,8,["style","val"]),xw]),n("div",$w,[b(Is,{style:Be(w(d)),name:"𝒙",val:w(c),"onUpdate:val":v[2]||(v[2]=y=>xe(c)?c.value=y:null),isPow:!0,power:l.value,"onUpdate:power":v[3]||(v[3]=y=>l.value=y)},null,8,["style","val","power"])])]),n("div",Rw,[n("div",Ew,[b(Is,{style:Be(w(f)),name:"𝒚",val:i.value,"onUpdate:val":v[4]||(v[4]=y=>i.value=y),canChange:!0},null,8,["style","val"]),Sw]),n("div",Cw,[b(Is,{style:Be(w(d)),name:"𝒚",val:w(u),"onUpdate:val":v[5]||(v[5]=y=>xe(u)?u.value=y:null),isPow:!0,power:l.value,"onUpdate:power":v[6]||(v[6]=y=>l.value=y)},null,8,["style","val","power"])])]),n("div",Pw,[b(Is,{style:Be(w(d)),name:"𝒛",val:w(p),"onUpdate:val":v[7]||(v[7]=y=>xe(p)?p.value=y:null)},null,8,["style","val"]),Tw])])])}}});const Aw=J(Ow,[["__scopeId","data-v-726af6e8"],["__file","D:/github/share-ppt/components/Connect.vue"]]),Mw=n("h1",null,"建立“连接”",-1),Iw=n("p",null,[n("code",null,"setup()"),s("在组件中执行一次，建立 输入 → 输出 的连接，输出会自动根据输入的改变而改变")],-1),Lw=n("div",{class:"mb-5"},"• 状态驱动UI",-1),Dw=n("div",{class:"mb-5"},"• 状态改变会自动更新UI - 响应式",-1),Nw=n("div",{class:"mb-5"},[s("• 状态"),n("code",null,"setup()"),s("函数，建立 状态 和 逻辑 的连接")],-1),Fw=n("div",{class:"mb-5"},[s("• 通过"),n("code",null,"<template>"),s("模板，建立 状态 和 UI 的连接")],-1),Vw={__name:"9",setup(e){const t={};return W(G),(a,o)=>{const l=ut,r=Aw,i=Ul,c=_n;return $(),z(Re,be(_e(t)),{default:g(()=>[Mw,Iw,b(c,null,{left:g(()=>[b(l,null,{default:g(()=>[Lw,Dw,Nw,Fw]),_:1})]),right:g(()=>[b(i,null,{default:g(()=>[b(r,{class:"ml-4"})]),_:1})]),_:1})]),_:1},16)}}},jw=J(Vw,[["__file","/@slidev/slides/9.md"]]),Hw={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},Uw=$e({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return W(G),(a,o)=>($(),N("div",Hw,[n("div",{class:Ue(["col-left",t.class])},[kn(a.$slots,"default")],2),n("div",{class:Ue(["col-right",t.class])},[kn(a.$slots,"right")],2)]))}}),Bw=J(Uw,[["__file","D:/github/share-ppt/node_modules/.pnpm/@slidev+client@0.38.4_vite@4.0.4/node_modules/@slidev/client/layouts/two-cols.vue"]]),Ww=n("h1",null,"Ref",-1),Kw={style:{width:"90%"}},zw=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
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
`),n("span",{class:"line"},[s("bar"),n("span",{class:"token punctuation"},"."),s("prop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1")])])],-1),Xw=n("br",null,null,-1),ex=n("div",{class:"mb-5 mt-5"},[s("• 自动 Unwrap(即不需要"),n("code",null,".value"),s(")")],-1),nx=n("div",{class:"mb-5 mt-5"},"• 在类型上和一般对象没有区别",-1),tx=n("div",{class:"mb-5"},"• 使用 ES6 结构会使响应式丢失",-1),sx=n("div",{class:"mb-5"},[s("• 需要使用箭头函数包装才能使用"),n("code",null,"watch")],-1),ax={__name:"10",setup(e){const t={layout:"two-cols"};return W(G),(a,o)=>{const l=Ne,r=Ul,i=Zt("font");return $(),z(Bw,be(_e(t)),{right:g(c=>[Jw,b(r,{at:"1"},{default:g(()=>[b(l,te({},{ranges:[""]}),{default:g(()=>[Qw]),_:1},16)]),_:1}),b(r,{at:"3"},{default:g(()=>[Xw,b(i,{color:"#666"},{default:g(()=>[s("PROS")]),_:1}),ex,b(i,{color:"#666"},{default:g(()=>[s("CONS")]),_:1}),nx,tx,sx]),_:1})]),default:g(()=>[Ww,b(r,{at:"1"},{default:g(()=>[n("div",Kw,[b(l,te({},{ranges:[""]}),{default:g(()=>[zw]),_:1},16)])]),_:1}),b(r,{at:"2"},{default:g(()=>[qw,b(i,{color:"#666"},{default:g(()=>[s("PROS")]),_:1}),Yw,Zw,b(i,{color:"#666"},{default:g(()=>[s("CONS")]),_:1}),Gw]),_:1})]),_:1},16)}}},ox=J(ax,[["__file","/@slidev/slides/10.md"]]),lx=n("h1",null,"Ref 自动解包",-1),rx=n("p",null,[s("在众多情况下，可以减少"),n("code",null,".value"),s("的使用")],-1),ix=n("div",{class:"lh-30"},[s("• "),n("code",null,"watch"),s("直接接受Ref作为监听对象，并在回调函数中返回解包后的值")],-1),cx=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" counter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")")]),s(`
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
`),n("span",{class:"line"},[s("data"),n("span",{class:"token punctuation"},"."),s("foo "),n("span",{class:"token comment"},"// 'bar'")])])],-1),hx={__name:"11",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=_n,i=ut;return $(),z(Re,be(_e(t)),{default:g(()=>[lx,rx,b(i,null,{default:g(()=>[b(r,null,{left:g(()=>[ix]),right:g(()=>[b(l,te({},{ranges:[""]}),{default:g(()=>[cx]),_:1},16)]),_:1}),b(r,null,{left:g(()=>[ux]),right:g(()=>[b(l,te({},{ranges:[""]}),{default:g(()=>[px]),_:1},16)]),_:1}),b(r,null,{left:g(()=>[dx]),right:g(()=>[b(l,te({},{ranges:[""]}),{default:g(()=>[fx]),_:1},16)]),_:1})]),_:1})]),_:1},16)}}},mx=J(hx,[["__file","/@slidev/slides/11.md"]]),vx=n("h1",null,[n("code",null,"ref"),s(" - Ref 的内部实现")],-1),kx=n("p",null,"Vue 源码分析",-1),_x=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isRef"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},"?"),s(" input")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"createRef"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),gx=n("p",null,[s("也就是说，"),n("code",null,"ref()"),s(" 会直接返回已经是 Ref 的值")],-1),yx=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"123"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("foo "),n("span",{class:"token operator"},"==="),s(" bar "),n("span",{class:"token comment"},"// true")])])],-1),bx={__name:"12",setup(e){const t={};return W(G),(a,o)=>{const l=Ne;return $(),z(Re,be(_e(t)),{default:g(()=>[vx,kx,b(l,te({},{ranges:[""]}),{default:g(()=>[_x]),_:1},16),gx,b(l,te({},{ranges:[""]}),{default:g(()=>[yx]),_:1},16)]),_:1},16)}}},wx=J(bx,[["__file","/@slidev/slides/12.md"]]),xx=n("h1",null,[n("code",null,"unref"),s(" - Ref 的反操作")],-1),$x=n("div",{class:"mt-5 mb-5"},"• 如果传入一个 Ref， 返回其值",-1),Rx=n("div",null,"• 否则愿样返回",-1),Ex=n("br",null,null,-1),Sx=n("br",null,null,-1),Cx=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"unref"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("r"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"isRef"),n("span",{class:"token punctuation"},"("),s("r"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(" r"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},":"),s(" r")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),Px=n("br",null,null,-1),Tx=n("br",null,null,-1),Ox=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" unref"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'foo'"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 'foo'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'bar'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("bar"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 'bar'")])])],-1),Ax={__name:"13",setup(e){const t={};return W(G),(a,o)=>{const l=Zt("font"),r=Ne,i=_n,c=Ul;return $(),z(Re,be(_e(t)),{default:g(()=>[xx,$x,Rx,b(c,null,{default:g(()=>[b(i,null,{left:g(()=>[Ex,b(l,{color:"#666"},{default:g(()=>[s("实现")]),_:1}),Sx,b(r,te({},{ranges:[""]}),{default:g(()=>[Cx]),_:1},16)]),right:g(()=>[Px,b(l,{color:"#666"},{default:g(()=>[s("使用")]),_:1}),Tx,b(r,te({},{ranges:[""]}),{default:g(()=>[Ox]),_:1},16)]),_:1})]),_:1})]),_:1},16)}}},Mx=J(Ax,[["__file","/@slidev/slides/13.md"]]),Ix=n("h1",null,"接受 Ref 作为函数参数",-1),Lx={class:"flex-3"},Dx=n("div",{class:"flex-3-item-01"},null,-1),Nx={class:"flex-3-item-02"},Fx={class:"flex-3-item-03"},Vx={class:"flex-3"},jx={class:"flex-3-item-01"},Hx=n("br",null,null,-1),Ux=n("div",{class:"flex-3-item-02"},[n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(" a "),n("span",{class:"token operator"},"+"),s(" b")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])])],-1),Bx=n("div",{class:"flex-3-item-03"},[n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"let"),s(" a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"let"),s(" b "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"let"),s(" c "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 3")])])])],-1),Wx={class:"flex-3"},Kx={class:"flex-3-item-01"},zx=n("br",null,null,-1),qx=n("div",{class:"flex-3-item-02"},[n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"number"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[s("c"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token comment"},"// 6")])])])],-1),e$={__name:"14",setup(e){const t={};return W(G),(a,o)=>{const l=Zt("font"),r=ut;return $(),z(Re,be(_e(t)),{default:g(()=>[Ix,n("div",Lx,[Dx,n("div",Nx,[b(l,{color:"#666"},{default:g(()=>[s("实现")]),_:1})]),n("div",Fx,[b(l,{color:"#666"},{default:g(()=>[s("用例")]),_:1})])]),b(r,null,{default:g(()=>[n("div",Vx,[n("div",jx,[Hx,b(l,{color:"#666"},{default:g(()=>[s("纯函数")]),_:1})]),Ux,Bx]),n("div",Wx,[n("div",Kx,[zx,b(l,{color:"#666"},{default:g(()=>[s("接受 Ref 作为参数，返回一个响应式的结果")]),_:1})]),qx,Yx]),n("div",Zx,[n("div",Gx,[Jx,b(l,{color:"#666"},{default:g(()=>[s("同时接受传入值和 Ref")]),_:1})]),Qx,Xx])]),_:1})]),_:1},16)}}},n$=J(e$,[["__file","/@slidev/slides/14.md"]]),t$=n("h1",null,"MaybeRef 类型工具",-1),s$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},[s("MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token operator"},"="),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token constant"},"T")])])],-1),a$=n("p",null,[s("使用"),n("code",null,"MaybeRef"),s("来支持可选择性的响应式参数")],-1),o$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useTimeAgo"),n("span",{class:"token punctuation"},"(")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),r$={__name:"15",setup(e){const t={};return W(G),(a,o)=>{const l=Ne;return $(),z(Re,be(_e(t)),{default:g(()=>[t$,b(l,te({},{ranges:[""]}),{default:g(()=>[s$]),_:1},16),a$,b(l,te({},{ranges:[""]}),{default:g(()=>[o$]),_:1},16),b(l,te({},{ranges:[""]}),{default:g(()=>[l$]),_:1},16)]),_:1},16)}}},i$=J(r$,[["__file","/@slidev/slides/15.md"]]),c$=n("h1",null,"Reactify 响应式化",-1),u$=n("p",null,"使用魔法构造“连接”",-1),p$=n("p",null,"可以将一个普通函数转化为一个响应式的函数",-1),d$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactify "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vueuse/core'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(" a "),n("span",{class:"token operator"},"+"),s(" b")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" useAdd "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactify"),n("span",{class:"token punctuation"},"("),s("add"),n("span",{class:"token punctuation"},")")])])],-1),f$=n("p",null,"自动 unref 入参，并将返回值包装为 computed",-1),h$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" y "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" z "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useAdd"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},","),s(" y"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// z = 3")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("x"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token comment"},"// z = 12")])])],-1),m$=n("p",null,"适用于JS原生方法",-1),v$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" useFloor"),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactify"),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),s("floor"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" usePow "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactify"),n("span",{class:"token punctuation"},"("),s("Math"),n("span",{class:"token punctuation"},"."),s("pow"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" x "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2.4"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"usePow"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"useFloor"),n("span",{class:"token punctuation"},"("),s("x"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// res = 4")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("x"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3.6"),s(),n("span",{class:"token comment"},"// res = 9")])])],-1),k$={__name:"16",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=_n,i=vn("click");return $(),z(Re,be(_e(t)),{default:g(()=>[c$,u$,b(r,null,{left:g(()=>[De(($(),N("div",null,[p$,b(l,te({},{ranges:[""]}),{default:g(()=>[d$]),_:1},16),f$,b(l,te({},{ranges:[""]}),{default:g(()=>[h$]),_:1},16)])),[[i]])]),right:g(()=>[De(($(),N("div",null,[m$,b(l,te({},{ranges:[""]}),{default:g(()=>[v$]),_:1},16)])),[[i]])]),_:1})]),_:1},16)}}},_$=J(k$,[["__file","/@slidev/slides/16.md"]]),g$=n("h1",null,[n("code",null,"Reactify"),s(" 的实现")],-1),y$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"reactify"),n("span",{class:"token punctuation"},"("),s("fn"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),s("args"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"fn"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"apply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(" args"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),b$={__name:"17",setup(e){const t={};return W(G),(a,o)=>{const l=Ne;return $(),z(Re,be(_e(t)),{default:g(()=>[g$,b(l,te({},{ranges:[""]}),{default:g(()=>[y$]),_:1},16)]),_:1},16)}}},w$=J(b$,[["__file","/@slidev/slides/17.md"]]),x$=n("h1",null,"让你的函数更灵活",-1),$$=n("p",null,"让函数可以适应不同的场景",-1),R$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useTitle "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vueuse/core'")]),s(`
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
`),n("span",{class:"line"},[s("name"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Hi'"),s(),n("span",{class:"token comment"},"// Hi - World")])])],-1),S$={__name:"18",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=_n;return $(),z(Re,be(_e(t)),{default:g(()=>[x$,$$,b(r,null,{left:g(()=>[n("div",null,[s(" 构造一个“特殊的”Ref "),b(l,te({},{ranges:[""]}),{default:g(()=>[R$]),_:1},16)])]),right:g(()=>[n("div",null,[s(" 绑定一个现有的Ref "),b(l,te({},{ranges:[""]}),{default:g(()=>[E$]),_:1},16)])]),_:1})]),_:1},16)}}},C$=J(S$,[["__file","/@slidev/slides/18.md"]]),P$=n("h1",null,[n("code",null,"useTitle")],-1),T$=n("p",null,[n("code",null,"useTitle"),s(" 的实现")],-1),O$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),A$={__name:"19",setup(e){const t={};return W(G),(a,o)=>{const l=Ne;return $(),z(Re,be(_e(t)),{default:g(()=>[P$,T$,b(l,te({},{ranges:["all","7-8","10-14","all"]}),{default:g(()=>[O$]),_:1},16)]),_:1},16)}}},M$=J(A$,[["__file","/@slidev/slides/19.md"]]),I$=n("h1",null,"重复使用已有的 Ref",-1),L$=n("p",null,[s("如果将一个"),n("code",null,"ref"),s("传递给"),n("code",null,"ref"),s("构造函数，它会将其原样返回")],-1),D$={class:"mb-4"},N$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// Ref<1>")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// Ref<1>")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("foo "),n("span",{class:"token operator"},"==="),s(" bar "),n("span",{class:"token comment"},"// true")])])],-1),F$={class:"mb-4"},V$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useFoo"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"string"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"// 不需要额外操作")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"isRef"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(" foo "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"// 与上面的代码等效")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("foo"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token comment"},"/* ... */")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),j$=n("div",{class:"mb-4"}," 这个技巧在编写不确定参数的函数时十分有用 ",-1),H$={__name:"20",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=ut;return $(),z(Re,be(_e(t)),{default:g(()=>[I$,L$,b(r,null,{default:g(()=>[n("div",D$,[b(l,te({},{ranges:[""]}),{default:g(()=>[N$]),_:1},16)]),n("div",F$,[b(l,te({},{ranges:[""]}),{default:g(()=>[V$]),_:1},16)]),j$]),_:1})]),_:1},16)}}},U$=J(H$,[["__file","/@slidev/slides/20.md"]]),B$=n("h1",null,[n("code",null,"Ref"),s(" / "),n("code",null,"unref")],-1),W$=n("div",{class:"mt-5 mb-5"},[s("• "),n("code",null,"MaybeRef<T>"),s("可以很好的配合`ref`和`unref`进行使用")],-1),K$=n("div",{class:"mb-5"},[s("• 使用"),n("code",null,"ref"),s("当你想要将其标准化为Ref")],-1),z$=n("div",{class:"mb-5"},[s("• 使用"),n("code",null,"unref"),s("当你想要获取其值")],-1),q$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},[s("MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token operator"},"="),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token constant"},"T")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"useBala"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("arg"),n("span",{class:"token operator"},":"),s(" MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" reference "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("arg"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 得到 ref")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"const"),s(" value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("arg"),n("span",{class:"token punctuation"},")"),s("   "),n("span",{class:"token comment"},"// 得到值")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),Y$={__name:"21",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=vn("click");return $(),z(Re,be(_e(t)),{default:g(()=>[B$,De(($(),N("div",null,[W$,K$,z$,b(l,te({},{ranges:[""]}),{default:g(()=>[q$]),_:1},16)])),[[r]])]),_:1},16)}}},Z$=J(Y$,[["__file","/@slidev/slides/21.md"]]),G$=n("h1",null,"还可以更灵活",-1),J$=n("p",null,"响应式的获取器",-1),Q$=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"}),s(`
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
`),n("span",{class:"line"},[s("name"),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'Hi'"),s(),n("span",{class:"token comment"},"// Hi - World")])])],-1),e2={__name:"22",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=_n;return $(),z(Re,be(_e(t)),{default:g(()=>[G$,J$,b(r,null,{left:g(()=>[n("div",null,[s(" 接受响应式的`Ref`对象作为参数 "),b(l,te({},{ranges:[""]}),{default:g(()=>[Q$]),_:1},16)])]),right:g(()=>[n("div",null,[s(" 直接传入一个函数 "),b(l,te({},{ranges:[""]}),{default:g(()=>[X$]),_:1},16)])]),_:1})]),_:1},16)}}},n2=J(e2,[["__file","/@slidev/slides/22.md"]]),t2=n("h1",null,[n("code",null,"MaybeComputedRef")],-1),s2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"/**")]),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token operator"},"*"),s(" 可能是一个 Ref，或者一个字面值")]),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},"/")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},[s("MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token operator"},"|"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"/**")]),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token operator"},"*"),s(" 可能是一个 Ref，一个字面值，或者一个 Getter 函数")]),s(`
`),n("span",{class:"line"},[s(),n("span",{class:"token operator"},"*"),n("span",{class:"token operator"},"/")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},[s("MaybeComputedRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")]),s(),n("span",{class:"token operator"},"="),s(" MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"|"),s(" ComputedRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])])],-1),a2={__name:"23",setup(e){const t={};return W(G),(a,o)=>{const l=Ne;return $(),z(Re,be(_e(t)),{default:g(()=>[t2,b(l,te({},{ranges:[""]}),{default:g(()=>[s2]),_:1},16)]),_:1},16)}}},o2=J(a2,[["__file","/@slidev/slides/23.md"]]),l2=n("h1",null,[n("code",null,"resolveRef")],-1),r2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"resolveRef"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token operator"},":"),s(" MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" Ref"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"typeof"),s(" input "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'function'")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),i2={class:"mt-10"},c2={__name:"24",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=vn("click");return $(),z(Re,be(_e(t)),{default:g(()=>[l2,b(l,te({},{ranges:["all","2-3","all"]}),{default:g(()=>[r2]),_:1},16),De(($(),N("div",i2,[s(" 如果传入的是一个函数，使用`computed`创建一个`Ref`对象，否则交由`ref()`处理 ")])),[[r]])]),_:1},16)}}},u2=J(c2,[["__file","/@slidev/slides/24.md"]]),p2=n("h1",null,[n("code",null,"resolveUnRef")],-1),d2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token generic-function"},[n("span",{class:"token function"},"resolveUnref"),n("span",{class:"token generic class-name"},[n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">")])]),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token operator"},":"),s(" MaybeRef"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"typeof"),s(" input "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'function'")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token function"},"input"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[s("    "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"unref"),n("span",{class:"token punctuation"},"("),s("input"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),f2={class:"mt-10"},h2={__name:"25",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=vn("click");return $(),z(Re,be(_e(t)),{default:g(()=>[p2,b(l,te({},{ranges:["all","2-3","all"]}),{default:g(()=>[d2]),_:1},16),De(($(),N("div",f2,[s(" 如果传入的是一个函数，直接调用取值，否则交由`ref()`处理 ")])),[[r]])]),_:1},16)}}},m2=J(h2,[["__file","/@slidev/slides/25.md"]]),v2=n("h1",null,[n("code",null,"useTitle")],-1),k2=n("p",null,[n("code",null,"useTitle"),s(" 的更灵活的实现")],-1),_2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),y2={__name:"26",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=_n;return $(),z(Re,be(_e(t)),{default:g(()=>[v2,k2,b(r,null,{left:g(()=>[n("div",null,[b(l,te({},{ranges:["2,5,7-8"]}),{default:g(()=>[_2]),_:1},16)])]),right:g(()=>[n("div",null,[b(l,te({},{ranges:["2,5,7-8"]}),{default:g(()=>[g2]),_:1},16)])]),_:1})]),_:1},16)}}},b2=J(y2,[["__file","/@slidev/slides/26.md"]]),w2=n("h1",null,"将异步操作转换为“同步”",-1),x2=n("p",null,"使用组合式API，甚至可以将异步请求转换为“同步”的",-1),$2={class:"mb-5"},R2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://api.github.com/'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),s("r "),n("span",{class:"token operator"},"=>"),s(" r"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token comment"},"// use data")])])],-1),E2={class:"mb-5"},S2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" data "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useFetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://api.github.com/'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"const"),s(" user_url "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" data"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token operator"},"?."),s("user_url"),n("span",{class:"token punctuation"},")")])])],-1),C2=n("div",null," 先建立数据的“连接”，然后再等待异步请求返回将数据填充（注意：并不是真正的异步） ",-1),P2={__name:"27",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=ut;return $(),z(Re,be(_e(t)),{default:g(()=>[w2,x2,b(r,null,{default:g(()=>[n("div",$2,[s(" 异步 "),b(l,te({},{ranges:[""]}),{default:g(()=>[R2]),_:1},16)]),n("div",E2,[s(" 组合式 API "),b(l,te({},{ranges:[""]}),{default:g(()=>[S2]),_:1},16)]),C2]),_:1})]),_:1},16)}}},T2=J(P2,[["__file","/@slidev/slides/27.md"]]),O2=n("h1",null,"副作用自动清除",-1),A2=n("p",null,[s("Vue原生的"),n("code",null,"watch"),s("和"),n("code",null,"computed"),s(" API 会在组件销毁的时候自动解除其内部的依赖监听。 我们在编写自己的函数时，可以遵循同样的模式。")],-1),M2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" onUnmounted "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useEventListener"),n("span",{class:"token punctuation"},"("),s("target"),n("span",{class:"token operator"},":"),s(" EventTarget"),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" fn"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  target"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" fn"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token function"},"onUnmounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("    target"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeEventListener"),n("span",{class:"token punctuation"},"("),s("name"),n("span",{class:"token punctuation"},","),s(" fn"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// <--")]),s(`
`),n("span",{class:"line"},[s("  "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),I2={__name:"28",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=vn("click");return $(),z(Re,be(_e(t)),{default:g(()=>[O2,A2,De(($(),N("div",null,[b(l,te({},{ranges:[""]}),{default:g(()=>[M2]),_:1},16)])),[[r]])]),_:1},16)}}},L2=J(I2,[["__file","/@slidev/slides/28.md"]]),D2=n("h1",null,"状态共享",-1),N2=n("p",null,"由于组合式 API 天然提供的灵活性，状态可以独立于组件被创建并使用",-1),F2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// shared.ts")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" state "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{")]),s(`
`),n("span",{class:"line"},[s("  foo"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},",")]),s(`
`),n("span",{class:"line"},[s("  bar"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Hello'")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")")])])],-1),V2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// A.vue")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" state "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./shared.ts'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[s("state"),n("span",{class:"token punctuation"},"."),s("foo "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1")])])],-1),j2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// B.vue")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" state "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./shared.ts'")]),s(`
`),n("span",{class:"line"}),s(`
`),n("span",{class:"line"},[n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token punctuation"},"."),s("foo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 2")])])],-1),H2={class:"mt-10"},U2={__name:"29",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=_n,i=vn("click");return $(),z(Re,be(_e(t)),{default:g(()=>[D2,N2,b(r,null,{left:g(()=>[De(($(),N("div",null,[b(l,te({},{ranges:[""]}),{default:g(()=>[F2]),_:1},16)])),[[i]])]),right:g(()=>[De(($(),N("div",null,[b(l,te({},{ranges:[""]}),{default:g(()=>[V2]),_:1},16)])),[[i]]),De(($(),N("div",null,[b(l,te({},{ranges:[""]}),{default:g(()=>[j2]),_:1},16)])),[[i]])]),_:1}),De(($(),N("div",H2,[s("此方案不兼容SSR")])),[[i]])]),_:1},16)}}},B2=J(U2,[["__file","/@slidev/slides/29.md"]]),W2=n("h1",null,"useVModel",-1),K2=n("p",null,"一个让使用 props 和 emit 更加容易的工具",-1),z2=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"useVModel"),n("span",{class:"token punctuation"},"("),s("props"),n("span",{class:"token punctuation"},","),s(" name"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{")]),s(`
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
`),n("span",{class:"line"},[n("span",{class:"token punctuation"},"}")])])],-1),G2={__name:"30",setup(e){const t={};return W(G),(a,o)=>{const l=Ne,r=_n,i=vn("click");return $(),z(Re,be(_e(t)),{default:g(()=>[W2,K2,b(r,null,{left:g(()=>[De(($(),N("div",null,[b(l,te({},{ranges:[""]}),{default:g(()=>[z2]),_:1},16)])),[[i]])]),right:g(()=>[De(($(),N("div",null,[b(l,te({},{ranges:[""]}),{default:g(()=>[q2]),_:1},16)])),[[i]]),De(($(),N("div",null,[b(l,te({},{ranges:[""]}),{default:g(()=>[Y2]),_:1},16)])),[[i]]),De(($(),N("div",null,[b(l,te({},{ranges:[""]}),{default:g(()=>[Z2]),_:1},16)])),[[i]])]),_:1})]),_:1},16)}}},J2=J(G2,[["__file","/@slidev/slides/30.md"]]),Q2=n("h1",null,[n("code",null,"@vue/composition-api")],-1),X2=n("p",null,"为 Vue2 提供组合式 API 的插件",-1),eR=n("p",null,[n("a",{href:"https://github.com/vuejs/composition-api",target:"_blank",rel:"noopener"},"vue/composition-api")],-1),nR=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// same syntax for both Vue 2 and 3")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-demi'")])])],-1),tR={__name:"31",setup(e){const t={};return W(G),(a,o)=>{const l=Ne;return $(),z(Re,be(_e(t)),{default:g(()=>[Q2,X2,eR,b(l,te({},{ranges:[""]}),{default:g(()=>[nR]),_:1},16)]),_:1},16)}}},sR=J(tR,[["__file","/@slidev/slides/31.md"]]),aR=n("h1",null,"Vue Demi",-1),oR=n("p",null,"创建 Vue2 和 Vue3 兼容的插件库",-1),lR=n("p",null,[n("a",{href:"https://github.com/vueuse/vue-demi",target:"_blank",rel:"noopener"},"vueuse/vue-demi")],-1),rR=n("pre",{class:"slidev-code language-ts"},[n("code",null,[n("span",{class:"line"},[n("span",{class:"token comment"},"// same syntax for both Vue 2 and 3")]),s(`
`),n("span",{class:"line"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-demi'")])])],-1),iR={__name:"32",setup(e){const t={};return W(G),(a,o)=>{const l=Ne;return $(),z(Re,be(_e(t)),{default:g(()=>[aR,oR,lR,b(l,te({},{ranges:[""]}),{default:g(()=>[rR]),_:1},16)]),_:1},16)}}},cR=J(iR,[["__file","/@slidev/slides/32.md"]]),uR=n("h1",null,"VueUse",-1),pR=n("p",null,"Vue 组合式API工具合集",-1),dR=n("p",null,[n("a",{href:"https://github.com/vueuse/vueuse",target:"_blank",rel:"noopener"},"VueUse")],-1),fR=n("div",{class:"mt-10 mb-5"},"• 同时支持Vue2 和 3",-1),hR=n("div",{class:"mb-5"},"• Tree-shake",-1),mR=n("div",{class:"mb-5"},"• TypeScript",-1),vR=n("div",{class:"mb-5"},"• 支持 CDN",-1),kR=n("div",{class:"mb-5"},"• 丰富的生态系统",-1),_R=[fR,hR,mR,vR,kR],gR={__name:"33",setup(e){const t={};return W(G),(a,o)=>{const l=vn("click");return $(),z(Re,be(_e(t)),{default:g(()=>[uR,pR,dR,De(($(),N("div",null,_R)),[[l]])]),_:1},16)}}},yR=J(gR,[["__file","/@slidev/slides/33.md"]]),bR=n("h1",null,"快速回顾",-1),wR=n("div",{class:"mt-10 mb-5"},"• 建立“连接”",-1),xR=n("div",{class:"mb-5"},"• 接受 Ref 作为函数参数",-1),$R=n("div",{class:"mb-5"},"• 将异步操作转换为“同步”",-1),RR=n("div",{class:"mb-5"},"• 副作用自动清除",-1),ER=n("div",{class:"mb-5"},"• 状态共享",-1),SR=n("div",{class:"mb-5"},[s("• "),n("code",null,"useVModel")],-1),CR={__name:"34",setup(e){const t={};return W(G),(a,o)=>{const l=ut;return $(),z(Re,be(_e(t)),{default:g(()=>[bR,b(l,null,{default:g(()=>[wR,xR,$R,RR,ER,SR]),_:1})]),_:1},16)}}},PR=J(CR,[["__file","/@slidev/slides/34.md"]]),TR=n("h4",null,"谢谢～",-1),OR=n("p",null,[s("本演示文稿由 "),n("a",{href:"https://cn.sli.dev/",target:"_blank",rel:"noopener"},"Slidev"),s(" 强力驱动")],-1),AR={__name:"35",setup(e){const t={layout:"center"};return W(G),(a,o)=>($(),z(Qu,be(_e(t)),{default:g(()=>[TR,OR]),_:1},16))}},MR=J(AR,[["__file","/@slidev/slides/35.md"]]),IR=[{path:"1",name:"page-1",component:K0,meta:{title:"Vue的组合式开发",slide:{raw:`<br />
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
</v-after>`,frontmatter:{},index:3,start:134,end:237,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Vb,meta:{slide:{raw:`
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
</v-clicks>`,frontmatter:{},index:7,start:449,end:459,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:jw,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:11,start:605,end:627,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Mx,meta:{slide:{raw:`
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
</LR>`,frontmatter:{},index:17,start:854,end:901,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:M$,meta:{slide:{raw:`
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
</LR>`,frontmatter:{},index:29,start:1252,end:1323,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:sR,meta:{slide:{raw:`
# \`@vue/composition-api\`
为 Vue2 提供组合式 API 的插件

[vue/composition-api](https://github.com/vuejs/composition-api)

\`\`\`ts
// same syntax for both Vue 2 and 3
import { ref, reactive, defineComponent } from 'vue-demi'
\`\`\`
`,title:"`@vue/composition-api`",level:1,content:"# `@vue/composition-api`\n为 Vue2 提供组合式 API 的插件\n\n[vue/composition-api](https://github.com/vuejs/composition-api)\n\n```ts\n// same syntax for both Vue 2 and 3\nimport { ref, reactive, defineComponent } from 'vue-demi'\n```",frontmatter:{},index:30,start:1324,end:1335,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:cR,meta:{slide:{raw:`
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
\`\`\``,frontmatter:{},index:31,start:1336,end:1347,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:yR,meta:{slide:{raw:`
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
</div>`,frontmatter:{},index:32,start:1348,end:1362,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:PR,meta:{slide:{raw:`
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
</v-clicks>`,frontmatter:{},index:33,start:1363,end:1376,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:MR,meta:{layout:"center",slide:{raw:`---
layout: center
---

#### 谢谢～
本演示文稿由 [Slidev](https://cn.sli.dev/) 强力驱动




`,title:"谢谢～",level:4,content:`#### 谢谢～
本演示文稿由 [Slidev](https://cn.sli.dev/) 强力驱动`,frontmatter:{layout:"center"},index:34,start:1376,end:1387,notesHTML:"",filepath:"D:\\github\\share-ppt\\slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",component:O0,meta:{layout:"end"}}],Ze=IR,Ea=[{name:"play",path:"/",component:X1,children:[...Ze]},{name:"print",path:"/print",component:C0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];Ea.push({path:"/presenter/print",component:()=>Jt(()=>import("./PresenterPrint-064a7eab.js"),["assets/PresenterPrint-064a7eab.js","assets/NoteViewer-b71f7d2b.js","assets/index-28b45da3.js"])}),Ea.push({name:"presenter",path:"/presenter/:no",component:()=>Jt(()=>import("./Presenter-53aa4358.js"),["assets/Presenter-53aa4358.js","assets/NoteViewer-b71f7d2b.js","assets/DrawingControls-fa97338c.js","assets/index-28b45da3.js","assets/Presenter-0b9fbbd3.css"]),beforeEnter:e=>{if(!Fs.remote||Fs.remote===e.query.password)return!0;if(Fs.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Fs.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}}),Ea.push({path:"/presenter",redirect:{path:"/presenter/1"}});const xt=Pk({history:Cv("/"),routes:Ea});function LR(e,t,{mode:a="replace"}={}){return T({get(){const o=xt.currentRoute.value.query[e];return o==null?t??null:Array.isArray(o)?o.filter(Boolean):o},set(o){jn(()=>{xt[w(a)]({query:{...xt.currentRoute.value.query,[e]:o}})})}})}const Xu=ne(0);jn(()=>{xt.afterEach(async()=>{await jn(),Xu.value+=1})});const Jn=T(()=>xt.currentRoute.value),Bl=T(()=>Jn.value.query.print!==void 0),DR=T(()=>Jn.value.query.print==="clicks"),nt=T(()=>Jn.value.query.embedded!==void 0),Dn=T(()=>Jn.value.path.startsWith("/presenter")),ep=T(()=>Bl.value&&!DR.value),ll=T(()=>Jn.value.query.password),NR=T(()=>!Dn.value&&(!Ie.remote||ll.value===Ie.remote)),Ni=LR("clicks","0"),np=T(()=>Ze.length-1),FR=T(()=>Jn.value.path),Qe=T(()=>parseInt(FR.value.split(/\//g).slice(-1)[0])||1);T(()=>Wl(Qe.value));const wn=T(()=>Ze.find(e=>e.path===`${Qe.value}`));T(()=>{var e,t,a;return(a=(t=(e=wn.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:a.id});T(()=>{var e,t;return((t=(e=wn.value)==null?void 0:e.meta)==null?void 0:t.layout)||(Qe.value===1?"cover":"default")});const Ro=T(()=>Ze.find(e=>e.path===`${Math.min(Ze.length,Qe.value+1)}`)),VR=T(()=>{var e,t;return Xu.value,((t=(e=wn.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Qt=T({get(){if(ep.value)return 99999;let e=+(Ni.value||0);return isNaN(e)&&(e=0),e},set(e){Ni.value=e.toString()}}),Ha=T(()=>{var e,t;return+(((t=(e=wn.value)==null?void 0:e.meta)==null?void 0:t.clicks)??VR.value.length)}),jR=T(()=>Qe.value<Ze.length-1||Qt.value<Ha.value),HR=T(()=>Qe.value>1||Qt.value>0),UR=T(()=>Ze.filter(e=>{var t,a;return(a=(t=e.meta)==null?void 0:t.slide)==null?void 0:a.title}).reduce((e,t)=>(Kl(e,t),e),[])),BR=T(()=>zl(UR.value,wn.value));T(()=>ql(BR.value));function Kt(){Ha.value<=Qt.value?Ua():Qt.value+=1}async function zt(){Qt.value<=0?await Ba():Qt.value-=1}function Wl(e){return Dn.value?`/presenter/${e}`:`/${e}`}function Ua(){const e=Math.min(Ze.length,Qe.value+1);return bs(e)}async function Ba(e=!0){const t=Math.max(1,Qe.value-1);await bs(t),e&&Ha.value&&xt.replace({query:{...Jn.value.query,clicks:Ha.value}})}function bs(e,t){return xt.push({path:Wl(e),query:{...Jn.value.query,clicks:t}})}function WR(e){const t=ne(0),{direction:a,distanceX:o,distanceY:l}=zm(e,{onSwipeStart(r){r.pointerType==="touch"&&(na.value||(t.value=Ko()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!t.value||na.value)return;const i=Math.abs(o.value),c=Math.abs(l.value);i/window.innerWidth>.3||i>100?a.value===at.LEFT?Kt():zt():(c/window.innerHeight>.4||c>200)&&(a.value===at.DOWN?Ba():Ua())}})}async function Fi(){const{saveAs:e}=await Jt(()=>import("./FileSaver.min-17c85779.js").then(t=>t.F),[]);e(su(Ie.download)?Ie.download:Ie.exportFilename?`${Ie.exportFilename}.pdf`:"/slidev-exported.pdf",`${Ie.title}.pdf`)}async function hE(e){var t,a;if(e==null){const o=(a=(t=wn.value)==null?void 0:t.meta)==null?void 0:a.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Kl(e,t,a=1){var l,r,i,c,u;const o=(r=(l=t.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>a&&e.length>0?Kl(e[e.length-1].children,t,a+1):e.push({children:[],level:a,path:t.path,hideInToc:Boolean((i=t.meta)==null?void 0:i.hideInToc),title:(u=(c=t.meta)==null?void 0:c.slide)==null?void 0:u.title})}function zl(e,t,a=!1,o){return e.map(l=>{const r={...l,active:l.path===(t==null?void 0:t.path),hasActiveParent:a};return r.children.length>0&&(r.children=zl(r.children,t,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ql(e,t=1){return e.filter(a=>!a.hideInToc).map(a=>({...a,children:ql(a.children,t+1)}))}export{JR as $,ne as A,oE as B,aE as C,Ce as D,rE as E,Se as F,Pn as G,fE as H,_p as I,gp as J,no as K,jn as L,Cc as M,te as N,Et as O,ml as P,Pt as Q,KR as R,ep as S,zR as T,ph as U,dh as V,Qc as W,Jc as X,Gc as Y,ih as Z,J as _,sE as a,De as a$,QR as a0,XR as a1,ZR as a2,GR as a3,_0 as a4,g0 as a5,Fi as a6,Kt as a7,Ua as a8,hE as a9,Uu as aA,cn as aB,D_ as aC,Ha as aD,jR as aE,Ro as aF,_o as aG,na as aH,xo as aI,J1 as aJ,Nl as aK,Fl as aL,wd as aM,xd as aN,z1 as aO,Y_ as aP,On as aQ,lE as aR,kn as aS,Ms as aT,Nt as aU,qn as aV,sl as aW,c_ as aX,u_ as aY,p_ as aZ,f_ as a_,zt as aa,Ba as ab,Jn as ac,YR as ad,ws as ae,xe as af,cE as ag,ed as ah,n as ai,qe as aj,la as ak,Be as al,Ze as am,np as an,s as ao,he as ap,Tl as aq,Ue as ar,uE as as,wn as at,z as au,x_ as av,WR as aw,iE as ax,pE as ay,g as az,Qe as b,Zc as b0,dE as b1,dn as b2,ka as b3,Pg as b4,Xc as b5,h_ as b6,Ie as c,Qt as d,Dn as e,$e as f,Wl as g,W as h,eE as i,G as j,Zt as k,N as l,b as m,$ as n,nE as o,tE as p,tn as q,xt as r,Gt as s,T as t,qR as u,yr as v,Fe as w,Sc as x,w as y,ip as z};
