function g0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var w0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),x0=Symbol.for("react.portal"),S0=Symbol.for("react.fragment"),k0=Symbol.for("react.strict_mode"),E0=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),z0=Symbol.for("react.forward_ref"),T0=Symbol.for("react.suspense"),P0=Symbol.for("react.memo"),N0=Symbol.for("react.lazy"),Xa=Symbol.iterator;function O0(e){return e===null||typeof e!="object"?null:(e=Xa&&e[Xa]||e["@@iterator"],typeof e=="function"?e:null)}var Tc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pc=Object.assign,Nc={};function Gn(e,t,n){this.props=e,this.context=t,this.refs=Nc,this.updater=n||Tc}Gn.prototype.isReactComponent={};Gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oc(){}Oc.prototype=Gn.prototype;function Vs(e,t,n){this.props=e,this.context=t,this.refs=Nc,this.updater=n||Tc}var As=Vs.prototype=new Oc;As.constructor=Vs;Pc(As,Gn.prototype);As.isPureReactComponent=!0;var Qa=Array.isArray,Rc=Object.prototype.hasOwnProperty,js={current:null},Mc={key:!0,ref:!0,__self:!0,__source:!0};function $c(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Rc.call(t,r)&&!Mc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Qr,type:e,key:i,ref:l,props:o,_owner:js.current}}function R0(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Us(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function M0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ga=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M0(""+e.key):t.toString(36)}function _o(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qr:case x0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+el(l,0):r,Qa(o)?(n="",e!=null&&(n=e.replace(Ga,"$&/")+"/"),_o(o,t,n,"",function(c){return c})):o!=null&&(Us(o)&&(o=R0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ga,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Qa(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+el(i,s);l+=_o(i,t,n,a,o)}else if(a=O0(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+el(i,s++),l+=_o(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function to(e,t,n){if(e==null)return e;var r=[],o=0;return _o(e,r,"","",function(i){return t.call(n,i,o++)}),r}function $0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},zo={transition:null},L0={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:zo,ReactCurrentOwner:js};Y.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Gn;Y.Fragment=S0;Y.Profiler=E0;Y.PureComponent=Vs;Y.StrictMode=k0;Y.Suspense=T0;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=js.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Rc.call(t,a)&&!Mc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Qr,type:e.type,key:o,ref:i,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:_0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:C0,_context:e},e.Consumer=e};Y.createElement=$c;Y.createFactory=function(e){var t=$c.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:z0,render:e}};Y.isValidElement=Us;Y.lazy=function(e){return{$$typeof:N0,_payload:{_status:-1,_result:e},_init:$0}};Y.memo=function(e,t){return{$$typeof:P0,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=zo.transition;zo.transition={};try{e()}finally{zo.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Ie.current.useCallback(e,t)};Y.useContext=function(e){return Ie.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ie.current.useEffect(e,t)};Y.useId=function(){return Ie.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ie.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};Y.useRef=function(e){return Ie.current.useRef(e)};Y.useState=function(e){return Ie.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ie.current.useTransition()};Y.version="18.2.0";(function(e){e.exports=Y})(U);const rt=Fs(U.exports),Ka=g0({__proto__:null,default:rt},[U.exports]);var Il={},Lc={exports:{}},qe={},Dc={exports:{}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(m,v){var k=m.length;m.push(v);e:for(;0<k;){var T=k-1>>>1,R=m[T];if(0<o(R,v))m[T]=v,m[k]=R,k=T;else break e}}function n(m){return m.length===0?null:m[0]}function r(m){if(m.length===0)return null;var v=m[0],k=m.pop();if(k!==v){m[0]=k;e:for(var T=0,R=m.length,F=R>>>1;T<F;){var D=2*(T+1)-1,X=m[D],Q=D+1,j=m[Q];if(0>o(X,k))Q<R&&0>o(j,X)?(m[T]=j,m[Q]=k,T=Q):(m[T]=X,m[D]=k,T=D);else if(Q<R&&0>o(j,k))m[T]=j,m[Q]=k,T=Q;else break e}}return v}function o(m,v){var k=m.sortIndex-v.sortIndex;return k!==0?k:m.id-v.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],c=[],p=1,h=null,y=3,S=!1,x=!1,g=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(m){for(var v=n(c);v!==null;){if(v.callback===null)r(c);else if(v.startTime<=m)r(c),v.sortIndex=v.expirationTime,t(a,v);else break;v=n(c)}}function w(m){if(g=!1,d(m),!x)if(n(a)!==null)x=!0,Dt(O);else{var v=n(c);v!==null&&C(w,v.startTime-m)}}function O(m,v){x=!1,g&&(g=!1,f(E),E=-1),S=!0;var k=y;try{for(d(v),h=n(a);h!==null&&(!(h.expirationTime>v)||m&&!se());){var T=h.callback;if(typeof T=="function"){h.callback=null,y=h.priorityLevel;var R=T(h.expirationTime<=v);v=e.unstable_now(),typeof R=="function"?h.callback=R:h===n(a)&&r(a),d(v)}else r(a);h=n(a)}if(h!==null)var F=!0;else{var D=n(c);D!==null&&C(w,D.startTime-v),F=!1}return F}finally{h=null,y=k,S=!1}}var N=!1,_=null,E=-1,H=5,V=-1;function se(){return!(e.unstable_now()-V<H)}function ue(){if(_!==null){var m=e.unstable_now();V=m;var v=!0;try{v=_(!0,m)}finally{v?Te():(N=!1,_=null)}}else N=!1}var Te;if(typeof u=="function")Te=function(){u(ue)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,$e=Ve.port2;Ve.port1.onmessage=ue,Te=function(){$e.postMessage(null)}}else Te=function(){A(ue,0)};function Dt(m){_=m,N||(N=!0,Te())}function C(m,v){E=A(function(){m(e.unstable_now())},v)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(m){m.callback=null},e.unstable_continueExecution=function(){x||S||(x=!0,Dt(O))},e.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<m?Math.floor(1e3/m):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(m){switch(y){case 1:case 2:case 3:var v=3;break;default:v=y}var k=y;y=v;try{return m()}finally{y=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(m,v){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var k=y;y=m;try{return v()}finally{y=k}},e.unstable_scheduleCallback=function(m,v,k){var T=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?T+k:T):k=T,m){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=k+R,m={id:p++,callback:v,priorityLevel:m,startTime:k,expirationTime:R,sortIndex:-1},k>T?(m.sortIndex=k,t(c,m),n(a)===null&&m===n(c)&&(g?(f(E),E=-1):g=!0,C(w,k-T))):(m.sortIndex=R,t(a,m),x||S||(x=!0,Dt(O))),m},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(m){var v=y;return function(){var k=y;y=v;try{return m.apply(this,arguments)}finally{y=k}}}})(Ic);(function(e){e.exports=Ic})(Dc);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=U.exports,Ze=Dc.exports;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vc=new Set,Tr={};function vn(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(Tr[e]=t,e=0;e<t.length;e++)Vc.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,D0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Za={},qa={};function I0(e){return Fl.call(qa,e)?!0:Fl.call(Za,e)?!1:D0.test(e)?qa[e]=!0:(Za[e]=!0,!1)}function F0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V0(e,t,n,r){if(t===null||typeof t>"u"||F0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bs=/[\-:]([a-z])/g;function Ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bs,Ws);ze[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bs,Ws);ze[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bs,Ws);ze[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ys(e,t,n,r){var o=ze.hasOwnProperty(t)?ze[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V0(t,n,o,r)&&(n=null),r||o===null?I0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Lt=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),xn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Hs=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),Ac=Symbol.for("react.provider"),jc=Symbol.for("react.context"),Xs=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),jl=Symbol.for("react.suspense_list"),Qs=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Uc=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,tl;function pr(e){if(tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tl=t&&t[1]||""}return`
`+tl+e}var nl=!1;function rl(e,t){if(!e||nl)return"";nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pr(e):""}function A0(e){switch(e.tag){case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return pr("Suspense");case 19:return pr("SuspenseList");case 0:case 2:case 15:return e=rl(e.type,!1),e;case 11:return e=rl(e.type.render,!1),e;case 1:return e=rl(e.type,!0),e;default:return""}}function Ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case xn:return"Portal";case Vl:return"Profiler";case Hs:return"StrictMode";case Al:return"Suspense";case jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jc:return(e.displayName||"Context")+".Consumer";case Ac:return(e._context.displayName||"Context")+".Provider";case Xs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qs:return t=e.displayName||null,t!==null?t:Ul(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Ul(e(t))}catch{}}return null}function j0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ul(t);case 8:return t===Hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U0(e){var t=Bc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=U0(e))}function Wc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bl(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function ba(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yc(e,t){t=t.checked,t!=null&&Ys(e,"checked",t,!1)}function Wl(e,t){Yc(e,t);var n=bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yl(e,t.type,bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yl(e,t,n){(t!=="number"||jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var mr=Array.isArray;function Mn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(mr(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bt(n)}}function Hc(e,t){var n=bt(t.value),r=bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,Qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},B0=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){B0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function Gc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function Kc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Gc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var W0=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(e,t){if(t){if(W0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kl=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,$n=null,Ln=null;function ru(e){if(e=Zr(e)){if(typeof Zl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=vi(t),Zl(e.stateNode,e.type,t))}}function Zc(e){$n?Ln?Ln.push(e):Ln=[e]:$n=e}function qc(){if($n){var e=$n,t=Ln;if(Ln=$n=null,ru(e),t)for(e=0;e<t.length;e++)ru(t[e])}}function Jc(e,t){return e(t)}function bc(){}var ol=!1;function ef(e,t,n){if(ol)return e(t,n);ol=!0;try{return Jc(e,t,n)}finally{ol=!1,($n!==null||Ln!==null)&&(bc(),qc())}}function Nr(e,t){var n=e.stateNode;if(n===null)return null;var r=vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var ql=!1;if(Ot)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{ql=!1}function Y0(e,t,n,r,o,i,l,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var gr=!1,Uo=null,Bo=!1,Jl=null,H0={onError:function(e){gr=!0,Uo=e}};function X0(e,t,n,r,o,i,l,s,a){gr=!1,Uo=null,Y0.apply(H0,arguments)}function Q0(e,t,n,r,o,i,l,s,a){if(X0.apply(this,arguments),gr){if(gr){var c=Uo;gr=!1,Uo=null}else throw Error(z(198));Bo||(Bo=!0,Jl=c)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ou(e){if(gn(e)!==e)throw Error(z(188))}function G0(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ou(o),e;if(i===r)return ou(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function nf(e){return e=G0(e),e!==null?rf(e):null}function rf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rf(e);if(t!==null)return t;e=e.sibling}return null}var of=Ze.unstable_scheduleCallback,iu=Ze.unstable_cancelCallback,K0=Ze.unstable_shouldYield,Z0=Ze.unstable_requestPaint,me=Ze.unstable_now,q0=Ze.unstable_getCurrentPriorityLevel,Ks=Ze.unstable_ImmediatePriority,lf=Ze.unstable_UserBlockingPriority,Wo=Ze.unstable_NormalPriority,J0=Ze.unstable_LowPriority,sf=Ze.unstable_IdlePriority,pi=null,St=null;function b0(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(pi,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:np,ep=Math.log,tp=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(ep(e)/tp|0)|0}var io=64,lo=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=hr(s):(i&=l,i!==0&&(r=hr(i)))}else l=n&~o,l!==0?r=hr(l):i!==0&&(r=hr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),o=1<<n,r|=e[n],t&=~o;return r}function rp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function op(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-dt(i),s=1<<l,a=o[l];a===-1?((s&n)===0||(s&r)!==0)&&(o[l]=rp(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function af(){var e=io;return io<<=1,(io&4194240)===0&&(io=64),e}function il(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function ip(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-dt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Zs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var b=0;function uf(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var cf,qs,ff,df,pf,es=!1,so=[],Ht=null,Xt=null,Qt=null,Or=new Map,Rr=new Map,jt=[],lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function nr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zr(t),t!==null&&qs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function sp(e,t,n,r,o){switch(t){case"focusin":return Ht=nr(Ht,e,t,n,r,o),!0;case"dragenter":return Xt=nr(Xt,e,t,n,r,o),!0;case"mouseover":return Qt=nr(Qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Or.set(i,nr(Or.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Rr.set(i,nr(Rr.get(i)||null,e,t,n,r,o)),!0}return!1}function mf(e){var t=sn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=tf(n),t!==null){e.blockedOn=t,pf(e.priority,function(){ff(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function To(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kl=r,n.target.dispatchEvent(r),Kl=null}else return t=Zr(n),t!==null&&qs(t),e.blockedOn=n,!1;t.shift()}return!0}function su(e,t,n){To(e)&&n.delete(t)}function ap(){es=!1,Ht!==null&&To(Ht)&&(Ht=null),Xt!==null&&To(Xt)&&(Xt=null),Qt!==null&&To(Qt)&&(Qt=null),Or.forEach(su),Rr.forEach(su)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,es||(es=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,ap)))}function Mr(e){function t(o){return rr(o,e)}if(0<so.length){rr(so[0],e);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&rr(Ht,e),Xt!==null&&rr(Xt,e),Qt!==null&&rr(Qt,e),Or.forEach(t),Rr.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)mf(n),n.blockedOn===null&&jt.shift()}var Dn=Lt.ReactCurrentBatchConfig,Ho=!0;function up(e,t,n,r){var o=b,i=Dn.transition;Dn.transition=null;try{b=1,Js(e,t,n,r)}finally{b=o,Dn.transition=i}}function cp(e,t,n,r){var o=b,i=Dn.transition;Dn.transition=null;try{b=4,Js(e,t,n,r)}finally{b=o,Dn.transition=i}}function Js(e,t,n,r){if(Ho){var o=ts(e,t,n,r);if(o===null)hl(e,t,r,Xo,n),lu(e,r);else if(sp(o,e,t,n,r))r.stopPropagation();else if(lu(e,r),t&4&&-1<lp.indexOf(e)){for(;o!==null;){var i=Zr(o);if(i!==null&&cf(i),i=ts(e,t,n,r),i===null&&hl(e,t,r,Xo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var Xo=null;function ts(e,t,n,r){if(Xo=null,e=Gs(r),e=sn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xo=e,null}function hf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q0()){case Ks:return 1;case lf:return 4;case Wo:case J0:return 16;case sf:return 536870912;default:return 16}default:return 16}}var Wt=null,bs=null,Po=null;function yf(){if(Po)return Po;var e,t=bs,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Po=o.slice(e,1<r?1-r:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ao(){return!0}function au(){return!1}function Je(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ao:au,this.isPropagationStopped=au,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ea=Je(Kn),Kr=de({},Kn,{view:0,detail:0}),fp=Je(Kr),ll,sl,or,mi=de({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(ll=e.screenX-or.screenX,sl=e.screenY-or.screenY):sl=ll=0,or=e),ll)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),uu=Je(mi),dp=de({},mi,{dataTransfer:0}),pp=Je(dp),mp=de({},Kr,{relatedTarget:0}),al=Je(mp),hp=de({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),yp=Je(hp),vp=de({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gp=Je(vp),wp=de({},Kn,{data:0}),cu=Je(wp),xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ep(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kp[e])?!!t[e]:!1}function ta(){return Ep}var Cp=de({},Kr,{key:function(e){if(e.key){var t=xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_p=Je(Cp),zp=de({},mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=Je(zp),Tp=de({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),Pp=Je(Tp),Np=de({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Op=Je(Np),Rp=de({},mi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mp=Je(Rp),$p=[9,13,27,32],na=Ot&&"CompositionEvent"in window,wr=null;Ot&&"documentMode"in document&&(wr=document.documentMode);var Lp=Ot&&"TextEvent"in window&&!wr,vf=Ot&&(!na||wr&&8<wr&&11>=wr),du=String.fromCharCode(32),pu=!1;function gf(e,t){switch(e){case"keyup":return $p.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Dp(e,t){switch(e){case"compositionend":return wf(t);case"keypress":return t.which!==32?null:(pu=!0,du);case"textInput":return e=t.data,e===du&&pu?null:e;default:return null}}function Ip(e,t){if(kn)return e==="compositionend"||!na&&gf(e,t)?(e=yf(),Po=bs=Wt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vf&&t.locale!=="ko"?null:t.data;default:return null}}var Fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fp[e.type]:t==="textarea"}function xf(e,t,n,r){Zc(r),t=Qo(t,"onChange"),0<t.length&&(n=new ea("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,$r=null;function Vp(e){Rf(e,0)}function hi(e){var t=_n(e);if(Wc(t))return e}function Ap(e,t){if(e==="change")return t}var Sf=!1;if(Ot){var ul;if(Ot){var cl="oninput"in document;if(!cl){var hu=document.createElement("div");hu.setAttribute("oninput","return;"),cl=typeof hu.oninput=="function"}ul=cl}else ul=!1;Sf=ul&&(!document.documentMode||9<document.documentMode)}function yu(){xr&&(xr.detachEvent("onpropertychange",kf),$r=xr=null)}function kf(e){if(e.propertyName==="value"&&hi($r)){var t=[];xf(t,$r,e,Gs(e)),ef(Vp,t)}}function jp(e,t,n){e==="focusin"?(yu(),xr=t,$r=n,xr.attachEvent("onpropertychange",kf)):e==="focusout"&&yu()}function Up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hi($r)}function Bp(e,t){if(e==="click")return hi(t)}function Wp(e,t){if(e==="input"||e==="change")return hi(t)}function Yp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Yp;function Lr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Fl.call(t,o)||!mt(e[o],t[o]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gu(e,t){var n=vu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vu(n)}}function Ef(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ef(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cf(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jo(e.document)}return t}function ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hp(e){var t=Cf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ef(n.ownerDocument.documentElement,n)){if(r!==null&&ra(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=gu(n,i);var l=gu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xp=Ot&&"documentMode"in document&&11>=document.documentMode,En=null,ns=null,Sr=null,rs=!1;function wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rs||En==null||En!==jo(r)||(r=En,"selectionStart"in r&&ra(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&Lr(Sr,r)||(Sr=r,r=Qo(ns,"onSelect"),0<r.length&&(t=new ea("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},fl={},_f={};Ot&&(_f=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function yi(e){if(fl[e])return fl[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _f)return fl[e]=t[n];return e}var zf=yi("animationend"),Tf=yi("animationiteration"),Pf=yi("animationstart"),Nf=yi("transitionend"),Of=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Of.set(e,t),vn(t,[e])}for(var dl=0;dl<xu.length;dl++){var pl=xu[dl],Qp=pl.toLowerCase(),Gp=pl[0].toUpperCase()+pl.slice(1);tn(Qp,"on"+Gp)}tn(zf,"onAnimationEnd");tn(Tf,"onAnimationIteration");tn(Pf,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(Nf,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function Su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Q0(r,t,void 0,e),e.currentTarget=null}function Rf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Su(o,s,c),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Su(o,s,c),i=a}}}if(Bo)throw e=Jl,Bo=!1,Jl=null,e}function ie(e,t){var n=t[as];n===void 0&&(n=t[as]=new Set);var r=e+"__bubble";n.has(r)||(Mf(t,e,2,!1),n.add(r))}function ml(e,t,n){var r=0;t&&(r|=4),Mf(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[co]){e[co]=!0,Vc.forEach(function(n){n!=="selectionchange"&&(Kp.has(n)||ml(n,!1,e),ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,ml("selectionchange",!1,t))}}function Mf(e,t,n,r){switch(hf(t)){case 1:var o=up;break;case 4:o=cp;break;default:o=Js}n=o.bind(null,t,n,e),o=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=sn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}ef(function(){var c=i,p=Gs(n),h=[];e:{var y=Of.get(e);if(y!==void 0){var S=ea,x=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":S=_p;break;case"focusin":x="focus",S=al;break;case"focusout":x="blur",S=al;break;case"beforeblur":case"afterblur":S=al;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Pp;break;case zf:case Tf:case Pf:S=yp;break;case Nf:S=Op;break;case"scroll":S=fp;break;case"wheel":S=Mp;break;case"copy":case"cut":case"paste":S=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=fu}var g=(t&4)!==0,A=!g&&e==="scroll",f=g?y!==null?y+"Capture":null:y;g=[];for(var u=c,d;u!==null;){d=u;var w=d.stateNode;if(d.tag===5&&w!==null&&(d=w,f!==null&&(w=Nr(u,f),w!=null&&g.push(Ir(u,w,d)))),A)break;u=u.return}0<g.length&&(y=new S(y,x,null,n,p),h.push({event:y,listeners:g}))}}if((t&7)===0){e:{if(y=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",y&&n!==Kl&&(x=n.relatedTarget||n.fromElement)&&(sn(x)||x[Rt]))break e;if((S||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,S?(x=n.relatedTarget||n.toElement,S=c,x=x?sn(x):null,x!==null&&(A=gn(x),x!==A||x.tag!==5&&x.tag!==6)&&(x=null)):(S=null,x=c),S!==x)){if(g=uu,w="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(g=fu,w="onPointerLeave",f="onPointerEnter",u="pointer"),A=S==null?y:_n(S),d=x==null?y:_n(x),y=new g(w,u+"leave",S,n,p),y.target=A,y.relatedTarget=d,w=null,sn(p)===c&&(g=new g(f,u+"enter",x,n,p),g.target=d,g.relatedTarget=A,w=g),A=w,S&&x)t:{for(g=S,f=x,u=0,d=g;d;d=wn(d))u++;for(d=0,w=f;w;w=wn(w))d++;for(;0<u-d;)g=wn(g),u--;for(;0<d-u;)f=wn(f),d--;for(;u--;){if(g===f||f!==null&&g===f.alternate)break t;g=wn(g),f=wn(f)}g=null}else g=null;S!==null&&ku(h,y,S,g,!1),x!==null&&A!==null&&ku(h,A,x,g,!0)}}e:{if(y=c?_n(c):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var O=Ap;else if(mu(y))if(Sf)O=Wp;else{O=Up;var N=jp}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(O=Bp);if(O&&(O=O(e,c))){xf(h,O,n,p);break e}N&&N(e,y,c),e==="focusout"&&(N=y._wrapperState)&&N.controlled&&y.type==="number"&&Yl(y,"number",y.value)}switch(N=c?_n(c):window,e){case"focusin":(mu(N)||N.contentEditable==="true")&&(En=N,ns=c,Sr=null);break;case"focusout":Sr=ns=En=null;break;case"mousedown":rs=!0;break;case"contextmenu":case"mouseup":case"dragend":rs=!1,wu(h,n,p);break;case"selectionchange":if(Xp)break;case"keydown":case"keyup":wu(h,n,p)}var _;if(na)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else kn?gf(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(vf&&n.locale!=="ko"&&(kn||E!=="onCompositionStart"?E==="onCompositionEnd"&&kn&&(_=yf()):(Wt=p,bs="value"in Wt?Wt.value:Wt.textContent,kn=!0)),N=Qo(c,E),0<N.length&&(E=new cu(E,e,null,n,p),h.push({event:E,listeners:N}),_?E.data=_:(_=wf(n),_!==null&&(E.data=_)))),(_=Lp?Dp(e,n):Ip(e,n))&&(c=Qo(c,"onBeforeInput"),0<c.length&&(p=new cu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=_))}Rf(h,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Nr(e,n),i!=null&&r.unshift(Ir(e,i,o)),i=Nr(e,t),i!=null&&r.push(Ir(e,i,o))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ku(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,o?(a=Nr(n,i),a!=null&&l.unshift(Ir(n,a,s))):o||(a=Nr(n,i),a!=null&&l.push(Ir(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zp=/\r\n?/g,qp=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(Zp,`
`).replace(qp,"")}function fo(e,t,n){if(t=Eu(t),Eu(e)!==t&&n)throw Error(z(425))}function Go(){}var os=null,is=null;function ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,Jp=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(em)}:ss;function em(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Mr(t)}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),xt="__reactFiber$"+Zn,Fr="__reactProps$"+Zn,Rt="__reactContainer$"+Zn,as="__reactEvents$"+Zn,tm="__reactListeners$"+Zn,nm="__reactHandles$"+Zn;function sn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_u(e);e!==null;){if(n=e[xt])return n;e=_u(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[xt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function vi(e){return e[Fr]||null}var us=[],zn=-1;function nn(e){return{current:e}}function le(e){0>zn||(e.current=us[zn],us[zn]=null,zn--)}function oe(e,t){zn++,us[zn]=e.current,e.current=t}var en={},Me=nn(en),Ue=nn(!1),dn=en;function jn(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function Ko(){le(Ue),le(Me)}function zu(e,t,n){if(Me.current!==en)throw Error(z(168));oe(Me,t),oe(Ue,n)}function $f(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,j0(e)||"Unknown",o));return de({},n,r)}function Zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,dn=Me.current,oe(Me,e),oe(Ue,Ue.current),!0}function Tu(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=$f(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,le(Ue),le(Me),oe(Me,e)):le(Ue),oe(Ue,n)}var _t=null,gi=!1,vl=!1;function Lf(e){_t===null?_t=[e]:_t.push(e)}function rm(e){gi=!0,Lf(e)}function rn(){if(!vl&&_t!==null){vl=!0;var e=0,t=b;try{var n=_t;for(b=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,gi=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),of(Ks,rn),o}finally{b=t,vl=!1}}return null}var Tn=[],Pn=0,qo=null,Jo=0,et=[],tt=0,pn=null,zt=1,Tt="";function on(e,t){Tn[Pn++]=Jo,Tn[Pn++]=qo,qo=e,Jo=t}function Df(e,t,n){et[tt++]=zt,et[tt++]=Tt,et[tt++]=pn,pn=e;var r=zt;e=Tt;var o=32-dt(r)-1;r&=~(1<<o),n+=1;var i=32-dt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,zt=1<<32-dt(t)+o|n<<o|r,Tt=i+e}else zt=1<<i|n<<o|r,Tt=e}function oa(e){e.return!==null&&(on(e,1),Df(e,1,0))}function ia(e){for(;e===qo;)qo=Tn[--Pn],Tn[Pn]=null,Jo=Tn[--Pn],Tn[Pn]=null;for(;e===pn;)pn=et[--tt],et[tt]=null,Tt=et[--tt],et[tt]=null,zt=et[--tt],et[tt]=null}var Ge=null,Qe=null,ae=!1,ft=null;function If(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Qe=Gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=pn!==null?{id:zt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Qe=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fs(e){if(ae){var t=Qe;if(t){var n=t;if(!Pu(e,t)){if(cs(e))throw Error(z(418));t=Gt(n.nextSibling);var r=Ge;t&&Pu(e,t)?If(r,n):(e.flags=e.flags&-4097|2,ae=!1,Ge=e)}}else{if(cs(e))throw Error(z(418));e.flags=e.flags&-4097|2,ae=!1,Ge=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function po(e){if(e!==Ge)return!1;if(!ae)return Nu(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ls(e.type,e.memoizedProps)),t&&(t=Qe)){if(cs(e))throw Ff(),Error(z(418));for(;t;)If(e,t),t=Gt(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ge?Gt(e.stateNode.nextSibling):null;return!0}function Ff(){for(var e=Qe;e;)e=Gt(e.nextSibling)}function Un(){Qe=Ge=null,ae=!1}function la(e){ft===null?ft=[e]:ft.push(e)}var om=Lt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var bo=nn(null),ei=null,Nn=null,sa=null;function aa(){sa=Nn=ei=null}function ua(e){var t=bo.current;le(bo),e._currentValue=t}function ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function In(e,t){ei=e,sa=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(je=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(sa!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(ei===null)throw Error(z(308));Nn=e,ei.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var an=null;function ca(e){an===null?an=[e]:an.push(e)}function Vf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ca(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,ca(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}function Ou(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ti(e,t,n,r){var o=e.updateQueue;At=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,p=c=a=null,s=i;do{var y=s.lane,S=s.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,g=s;switch(y=t,S=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){h=x.call(S,h,y);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,y=typeof x=="function"?x.call(S,h,y):x,y==null)break e;h=de({},h,y);break e;case 2:At=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[s]:y.push(s))}else S={eventTime:S,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=S,a=h):p=p.next=S,l|=y;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;y=s,s=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(1);if(p===null&&(a=h),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);hn|=l,e.lanes=l,e.memoizedState=h}}function Ru(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var jf=new Fc.Component().refs;function ps(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),o=qt(e),i=Pt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,o),t!==null&&(pt(t,e,o,r),Oo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),o=qt(e),i=Pt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,o),t!==null&&(pt(t,e,o,r),Oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=qt(e),o=Pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Kt(e,o,r),t!==null&&(pt(t,e,r,n),Oo(t,e,r))}};function Mu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(o,i):!0}function Uf(e,t,n){var r=!1,o=en,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=Be(t)?dn:Me.current,r=t.contextTypes,i=(r=r!=null)?jn(e,o):en),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function $u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wi.enqueueReplaceState(t,t.state,null)}function ms(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=jf,fa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=Be(t)?dn:Me.current,o.context=jn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ps(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&wi.enqueueReplaceState(o,o.state,null),ti(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===jf&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function mo(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lu(e){var t=e._init;return t(e._payload)}function Bf(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Jt(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,d,w){return u===null||u.tag!==6?(u=Cl(d,f.mode,w),u.return=f,u):(u=o(u,d),u.return=f,u)}function a(f,u,d,w){var O=d.type;return O===Sn?p(f,u,d.props.children,w,d.key):u!==null&&(u.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Vt&&Lu(O)===u.type)?(w=o(u,d.props),w.ref=ir(f,u,d),w.return=f,w):(w=Io(d.type,d.key,d.props,null,f.mode,w),w.ref=ir(f,u,d),w.return=f,w)}function c(f,u,d,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=_l(d,f.mode,w),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function p(f,u,d,w,O){return u===null||u.tag!==7?(u=fn(d,f.mode,w,O),u.return=f,u):(u=o(u,d),u.return=f,u)}function h(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Cl(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case no:return d=Io(u.type,u.key,u.props,null,f.mode,d),d.ref=ir(f,null,u),d.return=f,d;case xn:return u=_l(u,f.mode,d),u.return=f,u;case Vt:var w=u._init;return h(f,w(u._payload),d)}if(mr(u)||er(u))return u=fn(u,f.mode,d,null),u.return=f,u;mo(f,u)}return null}function y(f,u,d,w){var O=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return O!==null?null:s(f,u,""+d,w);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case no:return d.key===O?a(f,u,d,w):null;case xn:return d.key===O?c(f,u,d,w):null;case Vt:return O=d._init,y(f,u,O(d._payload),w)}if(mr(d)||er(d))return O!==null?null:p(f,u,d,w,null);mo(f,d)}return null}function S(f,u,d,w,O){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(d)||null,s(u,f,""+w,O);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case no:return f=f.get(w.key===null?d:w.key)||null,a(u,f,w,O);case xn:return f=f.get(w.key===null?d:w.key)||null,c(u,f,w,O);case Vt:var N=w._init;return S(f,u,d,N(w._payload),O)}if(mr(w)||er(w))return f=f.get(d)||null,p(u,f,w,O,null);mo(u,w)}return null}function x(f,u,d,w){for(var O=null,N=null,_=u,E=u=0,H=null;_!==null&&E<d.length;E++){_.index>E?(H=_,_=null):H=_.sibling;var V=y(f,_,d[E],w);if(V===null){_===null&&(_=H);break}e&&_&&V.alternate===null&&t(f,_),u=i(V,u,E),N===null?O=V:N.sibling=V,N=V,_=H}if(E===d.length)return n(f,_),ae&&on(f,E),O;if(_===null){for(;E<d.length;E++)_=h(f,d[E],w),_!==null&&(u=i(_,u,E),N===null?O=_:N.sibling=_,N=_);return ae&&on(f,E),O}for(_=r(f,_);E<d.length;E++)H=S(_,f,E,d[E],w),H!==null&&(e&&H.alternate!==null&&_.delete(H.key===null?E:H.key),u=i(H,u,E),N===null?O=H:N.sibling=H,N=H);return e&&_.forEach(function(se){return t(f,se)}),ae&&on(f,E),O}function g(f,u,d,w){var O=er(d);if(typeof O!="function")throw Error(z(150));if(d=O.call(d),d==null)throw Error(z(151));for(var N=O=null,_=u,E=u=0,H=null,V=d.next();_!==null&&!V.done;E++,V=d.next()){_.index>E?(H=_,_=null):H=_.sibling;var se=y(f,_,V.value,w);if(se===null){_===null&&(_=H);break}e&&_&&se.alternate===null&&t(f,_),u=i(se,u,E),N===null?O=se:N.sibling=se,N=se,_=H}if(V.done)return n(f,_),ae&&on(f,E),O;if(_===null){for(;!V.done;E++,V=d.next())V=h(f,V.value,w),V!==null&&(u=i(V,u,E),N===null?O=V:N.sibling=V,N=V);return ae&&on(f,E),O}for(_=r(f,_);!V.done;E++,V=d.next())V=S(_,f,E,V.value,w),V!==null&&(e&&V.alternate!==null&&_.delete(V.key===null?E:V.key),u=i(V,u,E),N===null?O=V:N.sibling=V,N=V);return e&&_.forEach(function(ue){return t(f,ue)}),ae&&on(f,E),O}function A(f,u,d,w){if(typeof d=="object"&&d!==null&&d.type===Sn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case no:e:{for(var O=d.key,N=u;N!==null;){if(N.key===O){if(O=d.type,O===Sn){if(N.tag===7){n(f,N.sibling),u=o(N,d.props.children),u.return=f,f=u;break e}}else if(N.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Vt&&Lu(O)===N.type){n(f,N.sibling),u=o(N,d.props),u.ref=ir(f,N,d),u.return=f,f=u;break e}n(f,N);break}else t(f,N);N=N.sibling}d.type===Sn?(u=fn(d.props.children,f.mode,w,d.key),u.return=f,f=u):(w=Io(d.type,d.key,d.props,null,f.mode,w),w.ref=ir(f,u,d),w.return=f,f=w)}return l(f);case xn:e:{for(N=d.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=_l(d,f.mode,w),u.return=f,f=u}return l(f);case Vt:return N=d._init,A(f,u,N(d._payload),w)}if(mr(d))return x(f,u,d,w);if(er(d))return g(f,u,d,w);mo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=Cl(d,f.mode,w),u.return=f,f=u),l(f)):n(f,u)}return A}var Bn=Bf(!0),Wf=Bf(!1),qr={},kt=nn(qr),Vr=nn(qr),Ar=nn(qr);function un(e){if(e===qr)throw Error(z(174));return e}function da(e,t){switch(oe(Ar,t),oe(Vr,e),oe(kt,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xl(t,e)}le(kt),oe(kt,t)}function Wn(){le(kt),le(Vr),le(Ar)}function Yf(e){un(Ar.current);var t=un(kt.current),n=Xl(t,e.type);t!==n&&(oe(Vr,e),oe(kt,n))}function pa(e){Vr.current===e&&(le(kt),le(Vr))}var ce=nn(0);function ni(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function ma(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var Ro=Lt.ReactCurrentDispatcher,wl=Lt.ReactCurrentBatchConfig,mn=0,fe=null,ve=null,xe=null,ri=!1,kr=!1,jr=0,im=0;function Pe(){throw Error(z(321))}function ha(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function ya(e,t,n,r,o,i){if(mn=i,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?um:cm,e=n(r,o),kr){i=0;do{if(kr=!1,jr=0,25<=i)throw Error(z(301));i+=1,xe=ve=null,t.updateQueue=null,Ro.current=fm,e=n(r,o)}while(kr)}if(Ro.current=oi,t=ve!==null&&ve.next!==null,mn=0,xe=ve=fe=null,ri=!1,t)throw Error(z(300));return e}function va(){var e=jr!==0;return jr=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?fe.memoizedState=xe=e:xe=xe.next=e,xe}function lt(){if(ve===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=xe===null?fe.memoizedState:xe.next;if(t!==null)xe=t,ve=e;else{if(e===null)throw Error(z(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},xe===null?fe.memoizedState=xe=e:xe=xe.next=e}return xe}function Ur(e,t){return typeof t=="function"?t(e):t}function xl(e){var t=lt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,c=i;do{var p=c.lane;if((mn&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,l=r):a=a.next=h,fe.lanes|=p,hn|=p}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=s,mt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,fe.lanes|=i,hn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=lt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);mt(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Hf(){}function Xf(e,t){var n=fe,r=lt(),o=t(),i=!mt(r.memoizedState,o);if(i&&(r.memoizedState=o,je=!0),r=r.queue,ga(Kf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Br(9,Gf.bind(null,n,r,o,t),void 0,null),Se===null)throw Error(z(349));(mn&30)!==0||Qf(n,t,o)}return o}function Qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gf(e,t,n,r){t.value=n,t.getSnapshot=r,Zf(t)&&qf(e)}function Kf(e,t,n){return n(function(){Zf(t)&&qf(e)})}function Zf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function qf(e){var t=Mt(e,1);t!==null&&pt(t,e,1,-1)}function Du(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=am.bind(null,fe,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jf(){return lt().memoizedState}function Mo(e,t,n,r){var o=vt();fe.flags|=e,o.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function xi(e,t,n,r){var o=lt();r=r===void 0?null:r;var i=void 0;if(ve!==null){var l=ve.memoizedState;if(i=l.destroy,r!==null&&ha(r,l.deps)){o.memoizedState=Br(t,n,i,r);return}}fe.flags|=e,o.memoizedState=Br(1|t,n,i,r)}function Iu(e,t){return Mo(8390656,8,e,t)}function ga(e,t){return xi(2048,8,e,t)}function bf(e,t){return xi(4,2,e,t)}function ed(e,t){return xi(4,4,e,t)}function td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nd(e,t,n){return n=n!=null?n.concat([e]):null,xi(4,4,td.bind(null,t,e),n)}function wa(){}function rd(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ha(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function od(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ha(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function id(e,t,n){return(mn&21)===0?(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n):(mt(n,t)||(n=af(),fe.lanes|=n,hn|=n,e.baseState=!0),t)}function lm(e,t){var n=b;b=n!==0&&4>n?n:4,e(!0);var r=wl.transition;wl.transition={};try{e(!1),t()}finally{b=n,wl.transition=r}}function ld(){return lt().memoizedState}function sm(e,t,n){var r=qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sd(e))ad(t,n);else if(n=Vf(e,t,n,r),n!==null){var o=De();pt(n,e,r,o),ud(n,t,r)}}function am(e,t,n){var r=qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sd(e))ad(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,mt(s,l)){var a=t.interleaved;a===null?(o.next=o,ca(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Vf(e,t,o,r),n!==null&&(o=De(),pt(n,e,r,o),ud(n,t,r))}}function sd(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function ad(e,t){kr=ri=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ud(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}var oi={readContext:it,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},um={readContext:it,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4194308,4,td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mo(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=sm.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Du,useDebugValue:wa,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Du(!1),t=e[0];return e=lm.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,o=vt();if(ae){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Se===null)throw Error(z(349));(mn&30)!==0||Qf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Iu(Kf.bind(null,r,i,e),[e]),r.flags|=2048,Br(9,Gf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vt(),t=Se.identifierPrefix;if(ae){var n=Tt,r=zt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=im++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cm={readContext:it,useCallback:rd,useContext:it,useEffect:ga,useImperativeHandle:nd,useInsertionEffect:bf,useLayoutEffect:ed,useMemo:od,useReducer:xl,useRef:Jf,useState:function(){return xl(Ur)},useDebugValue:wa,useDeferredValue:function(e){var t=lt();return id(t,ve.memoizedState,e)},useTransition:function(){var e=xl(Ur)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Xf,useId:ld,unstable_isNewReconciler:!1},fm={readContext:it,useCallback:rd,useContext:it,useEffect:ga,useImperativeHandle:nd,useInsertionEffect:bf,useLayoutEffect:ed,useMemo:od,useReducer:Sl,useRef:Jf,useState:function(){return Sl(Ur)},useDebugValue:wa,useDeferredValue:function(e){var t=lt();return ve===null?t.memoizedState=e:id(t,ve.memoizedState,e)},useTransition:function(){var e=Sl(Ur)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Hf,useSyncExternalStore:Xf,useId:ld,unstable_isNewReconciler:!1};function Yn(e,t){try{var n="",r=t;do n+=A0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function kl(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dm=typeof WeakMap=="function"?WeakMap:Map;function cd(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){li||(li=!0,_s=r),hs(e,t)},n}function fd(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){hs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){hs(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Fu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=zm.bind(null,e,t,n),t.then(e,e))}function Vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Au(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var pm=Lt.ReactCurrentOwner,je=!1;function Le(e,t,n,r){t.child=e===null?Wf(t,null,n,r):Bn(t,e.child,n,r)}function ju(e,t,n,r,o){n=n.render;var i=t.ref;return In(t,o),r=ya(e,t,n,r,i,o),n=va(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(ae&&n&&oa(t),t.flags|=1,Le(e,t,r,o),t.child)}function Uu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ta(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,dd(e,t,i,r,o)):(e=Io(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(l,r)&&e.ref===t.ref)return $t(e,t,o)}return t.flags|=1,e=Jt(i,r),e.ref=t.ref,e.return=t,t.child=e}function dd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Lr(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,$t(e,t,o)}return ys(e,t,n,r,o)}function pd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Rn,Xe),Xe|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(Rn,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,oe(Rn,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,oe(Rn,Xe),Xe|=r;return Le(e,t,o,n),t.child}function md(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ys(e,t,n,r,o){var i=Be(n)?dn:Me.current;return i=jn(t,i),In(t,o),n=ya(e,t,n,r,i,o),r=va(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,$t(e,t,o)):(ae&&r&&oa(t),t.flags|=1,Le(e,t,n,o),t.child)}function Bu(e,t,n,r,o){if(Be(n)){var i=!0;Zo(t)}else i=!1;if(In(t,o),t.stateNode===null)$o(e,t),Uf(t,n,r),ms(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=it(c):(c=Be(n)?dn:Me.current,c=jn(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==c)&&$u(t,l,r,c),At=!1;var y=t.memoizedState;l.state=y,ti(t,r,l,o),a=t.memoizedState,s!==r||y!==a||Ue.current||At?(typeof p=="function"&&(ps(t,n,p,r),a=t.memoizedState),(s=At||Mu(t,n,s,r,y,a,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Af(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ut(t.type,s),l.props=c,h=t.pendingProps,y=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=it(a):(a=Be(n)?dn:Me.current,a=jn(t,a));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||y!==a)&&$u(t,l,r,a),At=!1,y=t.memoizedState,l.state=y,ti(t,r,l,o);var x=t.memoizedState;s!==h||y!==x||Ue.current||At?(typeof S=="function"&&(ps(t,n,S,r),x=t.memoizedState),(c=At||Mu(t,n,c,r,y,x,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return vs(e,t,n,r,i,o)}function vs(e,t,n,r,o,i){md(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Tu(t,n,!1),$t(e,t,i);r=t.stateNode,pm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Bn(t,e.child,null,i),t.child=Bn(t,null,s,i)):Le(e,t,s,i),t.memoizedState=r.state,o&&Tu(t,n,!0),t.child}function hd(e){var t=e.stateNode;t.pendingContext?zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zu(e,t.context,!1),da(e,t.containerInfo)}function Wu(e,t,n,r,o){return Un(),la(o),t.flags|=256,Le(e,t,n,r),t.child}var gs={dehydrated:null,treeContext:null,retryLane:0};function ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function yd(e,t,n){var r=t.pendingProps,o=ce.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(ce,o&1),e===null)return fs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ei(l,r,0,null),e=fn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ws(n),t.memoizedState=gs,e):xa(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return mm(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Jt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Jt(s,i):(i=fn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ws(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=gs,r}return i=e.child,e=i.sibling,r=Jt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xa(e,t){return t=Ei({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&la(r),Bn(t,e.child,null,n),e=xa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=kl(Error(z(422))),ho(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ei({mode:"visible",children:r.children},o,0,null),i=fn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Bn(t,e.child,null,l),t.child.memoizedState=ws(l),t.memoizedState=gs,i);if((t.mode&1)===0)return ho(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(z(419)),r=kl(i,r,void 0),ho(e,t,l,r)}if(s=(l&e.childLanes)!==0,je||s){if(r=Se,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mt(e,o),pt(r,e,o,-1))}return za(),r=kl(Error(z(421))),ho(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Tm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Qe=Gt(o.nextSibling),Ge=t,ae=!0,ft=null,e!==null&&(et[tt++]=zt,et[tt++]=Tt,et[tt++]=pn,zt=e.id,Tt=e.overflow,pn=t),t=xa(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ds(e.return,t,n)}function El(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function vd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Le(e,t,r.children,n),r=ce.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(ce,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ni(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),El(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ni(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}El(t,!0,n,null,i);break;case"together":El(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $o(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hm(e,t,n){switch(t.tag){case 3:hd(t),Un();break;case 5:Yf(t);break;case 1:Be(t.type)&&Zo(t);break;case 4:da(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;oe(bo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(ce,ce.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?yd(e,t,n):(oe(ce,ce.current&1),e=$t(e,t,n),e!==null?e.sibling:null);oe(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return vd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,pd(e,t,n)}return $t(e,t,n)}var gd,xs,wd,xd;gd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xs=function(){};wd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,un(kt.current);var i=null;switch(n){case"input":o=Bl(e,o),r=Bl(e,r),i=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),i=[];break;case"textarea":o=Hl(e,o),r=Hl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Go)}Ql(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Tr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&ie("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};xd=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ym(e,t,n){var r=t.pendingProps;switch(ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Be(t.type)&&Ko(),Ne(t),null;case 3:return r=t.stateNode,Wn(),le(Ue),le(Me),ma(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(Ps(ft),ft=null))),xs(e,t),Ne(t),null;case 5:pa(t);var o=un(Ar.current);if(n=t.type,e!==null&&t.stateNode!=null)wd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ne(t),null}if(e=un(kt.current),po(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[xt]=t,r[Fr]=i,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<yr.length;o++)ie(yr[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":ba(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":tu(r,i),ie("invalid",r)}Ql(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&fo(r.textContent,s,e),o=["children",""+s]):Tr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ie("scroll",r)}switch(n){case"input":ro(r),eu(r,i,!0);break;case"textarea":ro(r),nu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Go)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[xt]=t,e[Fr]=r,gd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Gl(n,r),n){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<yr.length;o++)ie(yr[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":ba(e,r),o=Bl(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),ie("invalid",e);break;case"textarea":tu(e,r),o=Hl(e,r),ie("invalid",e);break;default:o=r}Ql(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Kc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Qc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Pr(e,a):typeof a=="number"&&Pr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Tr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ie("scroll",e):a!=null&&Ys(e,i,a,l))}switch(n){case"input":ro(e),eu(e,r,!1);break;case"textarea":ro(e),nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Mn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Mn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)xd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=un(Ar.current),un(kt.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(i=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:fo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Ne(t),null;case 13:if(le(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ff(),Un(),t.flags|=98560,i=!1;else if(i=po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[xt]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),i=!1}else ft!==null&&(Ps(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ce.current&1)!==0?ge===0&&(ge=3):za())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return Wn(),xs(e,t),e===null&&Dr(t.stateNode.containerInfo),Ne(t),null;case 10:return ua(t.type._context),Ne(t),null;case 17:return Be(t.type)&&Ko(),Ne(t),null;case 19:if(le(ce),i=t.memoizedState,i===null)return Ne(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)lr(i,!1);else{if(ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ni(e),l!==null){for(t.flags|=128,lr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&me()>Hn&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ni(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ae)return Ne(t),null}else 2*me()-i.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=me(),t.sibling=null,n=ce.current,oe(ce,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return _a(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Xe&1073741824)!==0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function vm(e,t){switch(ia(t),t.tag){case 1:return Be(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),le(Ue),le(Me),ma(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return pa(t),null;case 13:if(le(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ce),null;case 4:return Wn(),null;case 10:return ua(t.type._context),null;case 22:case 23:return _a(),null;case 24:return null;default:return null}}var yo=!1,Re=!1,gm=typeof WeakSet=="function"?WeakSet:Set,M=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Ss(e,t,n){try{n()}catch(r){pe(e,t,r)}}var Hu=!1;function wm(e,t){if(os=Ho,e=Cf(),ra(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,c=0,p=0,h=e,y=null;t:for(;;){for(var S;h!==n||o!==0&&h.nodeType!==3||(s=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(S=h.firstChild)!==null;)y=h,h=S;for(;;){if(h===e)break t;if(y===n&&++c===o&&(s=l),y===i&&++p===r&&(a=l),(S=h.nextSibling)!==null)break;h=y,y=h.parentNode}h=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},Ho=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,A=x.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:ut(t.type,g),A);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(w){pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return x=Hu,Hu=!1,x}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ss(t,n,i)}o=o.next}while(o!==r)}}function Si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ks(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sd(e){var t=e.alternate;t!==null&&(e.alternate=null,Sd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[Fr],delete t[as],delete t[tm],delete t[nm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kd(e){return e.tag===5||e.tag===3||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Go));else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}function Cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}var Ee=null,ct=!1;function It(e,t,n){for(n=n.child;n!==null;)Ed(e,t,n),n=n.sibling}function Ed(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(pi,n)}catch{}switch(n.tag){case 5:Re||On(n,t);case 6:var r=Ee,o=ct;Ee=null,It(e,t,n),Ee=r,ct=o,Ee!==null&&(ct?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(ct?(e=Ee,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),Mr(e)):yl(Ee,n.stateNode));break;case 4:r=Ee,o=ct,Ee=n.stateNode.containerInfo,ct=!0,It(e,t,n),Ee=r,ct=o;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Ss(n,t,l),o=o.next}while(o!==r)}It(e,t,n);break;case 1:if(!Re&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){pe(n,t,s)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,It(e,t,n),Re=r):It(e,t,n);break;default:It(e,t,n)}}function Qu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gm),t.forEach(function(r){var o=Pm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:Ee=s.stateNode,ct=!1;break e;case 3:Ee=s.stateNode.containerInfo,ct=!0;break e;case 4:Ee=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(Ee===null)throw Error(z(160));Ed(i,l,o),Ee=null,ct=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){pe(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cd(t,e),t=t.sibling}function Cd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),yt(e),r&4){try{Er(3,e,e.return),Si(3,e)}catch(g){pe(e,e.return,g)}try{Er(5,e,e.return)}catch(g){pe(e,e.return,g)}}break;case 1:at(t,e),yt(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(at(t,e),yt(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var o=e.stateNode;try{Pr(o,"")}catch(g){pe(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Yc(o,i),Gl(s,l);var c=Gl(s,i);for(l=0;l<a.length;l+=2){var p=a[l],h=a[l+1];p==="style"?Kc(o,h):p==="dangerouslySetInnerHTML"?Qc(o,h):p==="children"?Pr(o,h):Ys(o,p,h,c)}switch(s){case"input":Wl(o,i);break;case"textarea":Hc(o,i);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?Mn(o,!!i.multiple,S,!1):y!==!!i.multiple&&(i.defaultValue!=null?Mn(o,!!i.multiple,i.defaultValue,!0):Mn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Fr]=i}catch(g){pe(e,e.return,g)}}break;case 6:if(at(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){pe(e,e.return,g)}}break;case 3:if(at(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(g){pe(e,e.return,g)}break;case 4:at(t,e),yt(e);break;case 13:at(t,e),yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ea=me())),r&4&&Qu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(c=Re)||p,at(t,e),Re=c):at(t,e),yt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&(e.mode&1)!==0)for(M=e,p=e.child;p!==null;){for(h=M=p;M!==null;){switch(y=M,S=y.child,y.tag){case 0:case 11:case 14:case 15:Er(4,y,y.return);break;case 1:On(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(g){pe(r,n,g)}}break;case 5:On(y,y.return);break;case 22:if(y.memoizedState!==null){Ku(h);continue}}S!==null?(S.return=y,M=S):Ku(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Gc("display",l))}catch(g){pe(e,e.return,g)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(g){pe(e,e.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:at(t,e),yt(e),r&4&&Qu(e);break;case 21:break;default:at(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kd(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Pr(o,""),r.flags&=-33);var i=Xu(e);Cs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Xu(e);Es(e,s,l);break;default:throw Error(z(161))}}catch(a){pe(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xm(e,t,n){M=e,_d(e)}function _d(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||yo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||Re;s=yo;var c=Re;if(yo=l,(Re=a)&&!c)for(M=o;M!==null;)l=M,a=l.child,l.tag===22&&l.memoizedState!==null?Zu(o):a!==null?(a.return=l,M=a):Zu(o);for(;i!==null;)M=i,_d(i),i=i.sibling;M=o,yo=s,Re=c}Gu(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,M=i):Gu(e)}}function Gu(e){for(;M!==null;){var t=M;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Re||Si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ru(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ru(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Mr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Re||t.flags&512&&ks(t)}catch(y){pe(t,t.return,y)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Ku(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Zu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Si(4,t)}catch(a){pe(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){pe(t,o,a)}}var i=t.return;try{ks(t)}catch(a){pe(t,i,a)}break;case 5:var l=t.return;try{ks(t)}catch(a){pe(t,l,a)}}}catch(a){pe(t,t.return,a)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var Sm=Math.ceil,ii=Lt.ReactCurrentDispatcher,Sa=Lt.ReactCurrentOwner,ot=Lt.ReactCurrentBatchConfig,G=0,Se=null,ye=null,_e=0,Xe=0,Rn=nn(0),ge=0,Wr=null,hn=0,ki=0,ka=0,Cr=null,Ae=null,Ea=0,Hn=1/0,Ct=null,li=!1,_s=null,Zt=null,vo=!1,Yt=null,si=0,_r=0,zs=null,Lo=-1,Do=0;function De(){return(G&6)!==0?me():Lo!==-1?Lo:Lo=me()}function qt(e){return(e.mode&1)===0?1:(G&2)!==0&&_e!==0?_e&-_e:om.transition!==null?(Do===0&&(Do=af()),Do):(e=b,e!==0||(e=window.event,e=e===void 0?16:hf(e.type)),e)}function pt(e,t,n,r){if(50<_r)throw _r=0,zs=null,Error(z(185));Gr(e,n,r),((G&2)===0||e!==Se)&&(e===Se&&((G&2)===0&&(ki|=n),ge===4&&Ut(e,_e)),We(e,r),n===1&&G===0&&(t.mode&1)===0&&(Hn=me()+500,gi&&rn()))}function We(e,t){var n=e.callbackNode;op(e,t);var r=Yo(e,e===Se?_e:0);if(r===0)n!==null&&iu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&iu(n),t===1)e.tag===0?rm(qu.bind(null,e)):Lf(qu.bind(null,e)),bp(function(){(G&6)===0&&rn()}),n=null;else{switch(uf(r)){case 1:n=Ks;break;case 4:n=lf;break;case 16:n=Wo;break;case 536870912:n=sf;break;default:n=Wo}n=$d(n,zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zd(e,t){if(Lo=-1,Do=0,(G&6)!==0)throw Error(z(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Yo(e,e===Se?_e:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ai(e,r);else{t=r;var o=G;G|=2;var i=Pd();(Se!==e||_e!==t)&&(Ct=null,Hn=me()+500,cn(e,t));do try{Cm();break}catch(s){Td(e,s)}while(1);aa(),ii.current=i,G=o,ye!==null?t=0:(Se=null,_e=0,t=ge)}if(t!==0){if(t===2&&(o=bl(e),o!==0&&(r=o,t=Ts(e,o))),t===1)throw n=Wr,cn(e,0),Ut(e,r),We(e,me()),n;if(t===6)Ut(e,r);else{if(o=e.current.alternate,(r&30)===0&&!km(o)&&(t=ai(e,r),t===2&&(i=bl(e),i!==0&&(r=i,t=Ts(e,i))),t===1))throw n=Wr,cn(e,0),Ut(e,r),We(e,me()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:ln(e,Ae,Ct);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Ea+500-me(),10<t)){if(Yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ss(ln.bind(null,e,Ae,Ct),t);break}ln(e,Ae,Ct);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-dt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sm(r/1960))-r,10<r){e.timeoutHandle=ss(ln.bind(null,e,Ae,Ct),r);break}ln(e,Ae,Ct);break;case 5:ln(e,Ae,Ct);break;default:throw Error(z(329))}}}return We(e,me()),e.callbackNode===n?zd.bind(null,e):null}function Ts(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=ai(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Ps(t)),e}function Ps(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!mt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~ka,t&=~ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function qu(e){if((G&6)!==0)throw Error(z(327));Fn();var t=Yo(e,0);if((t&1)===0)return We(e,me()),null;var n=ai(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=Ts(e,r))}if(n===1)throw n=Wr,cn(e,0),Ut(e,t),We(e,me()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Ae,Ct),We(e,me()),null}function Ca(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Hn=me()+500,gi&&rn())}}function yn(e){Yt!==null&&Yt.tag===0&&(G&6)===0&&Fn();var t=G;G|=1;var n=ot.transition,r=b;try{if(ot.transition=null,b=1,e)return e()}finally{b=r,ot.transition=n,G=t,(G&6)===0&&rn()}}function _a(){Xe=Rn.current,le(Rn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jp(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(ia(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:Wn(),le(Ue),le(Me),ma();break;case 5:pa(r);break;case 4:Wn();break;case 13:le(ce);break;case 19:le(ce);break;case 10:ua(r.type._context);break;case 22:case 23:_a()}n=n.return}if(Se=e,ye=e=Jt(e.current,null),_e=Xe=t,ge=0,Wr=null,ka=ki=hn=0,Ae=Cr=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}an=null}return e}function Td(e,t){do{var n=ye;try{if(aa(),Ro.current=oi,ri){for(var r=fe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ri=!1}if(mn=0,xe=ve=fe=null,kr=!1,jr=0,Sa.current=null,n===null||n.return===null){ge=1,Wr=t,ye=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=_e,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=s,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=Vu(l);if(S!==null){S.flags&=-257,Au(S,l,s,i,t),S.mode&1&&Fu(i,c,t),t=S,a=c;var x=t.updateQueue;if(x===null){var g=new Set;g.add(a),t.updateQueue=g}else x.add(a);break e}else{if((t&1)===0){Fu(i,c,t),za();break e}a=Error(z(426))}}else if(ae&&s.mode&1){var A=Vu(l);if(A!==null){(A.flags&65536)===0&&(A.flags|=256),Au(A,l,s,i,t),la(Yn(a,s));break e}}i=a=Yn(a,s),ge!==4&&(ge=2),Cr===null?Cr=[i]:Cr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=cd(i,a,t);Ou(i,f);break e;case 1:s=a;var u=i.type,d=i.stateNode;if((i.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Zt===null||!Zt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=fd(i,s,t);Ou(i,w);break e}}i=i.return}while(i!==null)}Od(n)}catch(O){t=O,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function Pd(){var e=ii.current;return ii.current=oi,e===null?oi:e}function za(){(ge===0||ge===3||ge===2)&&(ge=4),Se===null||(hn&268435455)===0&&(ki&268435455)===0||Ut(Se,_e)}function ai(e,t){var n=G;G|=2;var r=Pd();(Se!==e||_e!==t)&&(Ct=null,cn(e,t));do try{Em();break}catch(o){Td(e,o)}while(1);if(aa(),G=n,ii.current=r,ye!==null)throw Error(z(261));return Se=null,_e=0,ge}function Em(){for(;ye!==null;)Nd(ye)}function Cm(){for(;ye!==null&&!K0();)Nd(ye)}function Nd(e){var t=Md(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Od(e):ye=t,Sa.current=null}function Od(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ym(n,t,Xe),n!==null){ye=n;return}}else{if(n=vm(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,ye=null;return}}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);ge===0&&(ge=5)}function ln(e,t,n){var r=b,o=ot.transition;try{ot.transition=null,b=1,_m(e,t,n,r)}finally{ot.transition=o,b=r}return null}function _m(e,t,n,r){do Fn();while(Yt!==null);if((G&6)!==0)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ip(e,i),e===Se&&(ye=Se=null,_e=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vo||(vo=!0,$d(Wo,function(){return Fn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=ot.transition,ot.transition=null;var l=b;b=1;var s=G;G|=4,Sa.current=null,wm(e,n),Cd(n,e),Hp(is),Ho=!!os,is=os=null,e.current=n,xm(n),Z0(),G=s,b=l,ot.transition=i}else e.current=n;if(vo&&(vo=!1,Yt=e,si=o),i=e.pendingLanes,i===0&&(Zt=null),b0(n.stateNode),We(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(li)throw li=!1,e=_s,_s=null,e;return(si&1)!==0&&e.tag!==0&&Fn(),i=e.pendingLanes,(i&1)!==0?e===zs?_r++:(_r=0,zs=e):_r=0,rn(),null}function Fn(){if(Yt!==null){var e=uf(si),t=ot.transition,n=b;try{if(ot.transition=null,b=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,si=0,(G&6)!==0)throw Error(z(331));var o=G;for(G|=4,M=e.current;M!==null;){var i=M,l=i.child;if((M.flags&16)!==0){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(M=c;M!==null;){var p=M;switch(p.tag){case 0:case 11:case 15:Er(8,p,i)}var h=p.child;if(h!==null)h.return=p,M=h;else for(;M!==null;){p=M;var y=p.sibling,S=p.return;if(Sd(p),p===c){M=null;break}if(y!==null){y.return=S,M=y;break}M=S}}}var x=i.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var A=g.sibling;g.sibling=null,g=A}while(g!==null)}}M=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,M=l;else e:for(;M!==null;){if(i=M,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Er(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,M=f;break e}M=i.return}}var u=e.current;for(M=u;M!==null;){l=M;var d=l.child;if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,M=d;else e:for(l=u;M!==null;){if(s=M,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Si(9,s)}}catch(O){pe(s,s.return,O)}if(s===l){M=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,M=w;break e}M=s.return}}if(G=o,rn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(pi,e)}catch{}r=!0}return r}finally{b=n,ot.transition=t}}return!1}function Ju(e,t,n){t=Yn(n,t),t=cd(e,t,1),e=Kt(e,t,1),t=De(),e!==null&&(Gr(e,1,t),We(e,t))}function pe(e,t,n){if(e.tag===3)Ju(e,e,n);else for(;t!==null;){if(t.tag===3){Ju(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Yn(n,e),e=fd(t,e,1),t=Kt(t,e,1),e=De(),t!==null&&(Gr(t,1,e),We(t,e));break}}t=t.return}}function zm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(_e&n)===n&&(ge===4||ge===3&&(_e&130023424)===_e&&500>me()-Ea?cn(e,0):ka|=n),We(e,t)}function Rd(e,t){t===0&&((e.mode&1)===0?t=1:(t=lo,lo<<=1,(lo&130023424)===0&&(lo=4194304)));var n=De();e=Mt(e,t),e!==null&&(Gr(e,t,n),We(e,n))}function Tm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rd(e,n)}function Pm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Rd(e,n)}var Md;Md=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return je=!1,hm(e,t,n);je=(e.flags&131072)!==0}else je=!1,ae&&(t.flags&1048576)!==0&&Df(t,Jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$o(e,t),e=t.pendingProps;var o=jn(t,Me.current);In(t,n),o=ya(null,t,r,e,o,n);var i=va();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(i=!0,Zo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,fa(t),o.updater=wi,t.stateNode=o,o._reactInternals=t,ms(t,r,e,n),t=vs(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&oa(t),Le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch($o(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Om(r),e=ut(r,e),o){case 0:t=ys(null,t,r,e,n);break e;case 1:t=Bu(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=Uu(null,t,r,ut(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),ys(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),Bu(e,t,r,o,n);case 3:e:{if(hd(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Af(e,t),ti(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Yn(Error(z(423)),t),t=Wu(e,t,r,n,o);break e}else if(r!==o){o=Yn(Error(z(424)),t),t=Wu(e,t,r,n,o);break e}else for(Qe=Gt(t.stateNode.containerInfo.firstChild),Ge=t,ae=!0,ft=null,n=Wf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===o){t=$t(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return Yf(t),e===null&&fs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ls(r,o)?l=null:i!==null&&ls(r,i)&&(t.flags|=32),md(e,t),Le(e,t,l,n),t.child;case 6:return e===null&&fs(t),null;case 13:return yd(e,t,n);case 4:return da(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),ju(e,t,r,o,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,oe(bo,r._currentValue),r._currentValue=l,i!==null)if(mt(i.value,l)){if(i.children===o.children&&!Ue.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Pt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ds(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ds(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,In(t,n),o=it(o),r=r(o),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,o=ut(r,t.pendingProps),o=ut(r.type,o),Uu(e,t,r,o,n);case 15:return dd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ut(r,o),$o(e,t),t.tag=1,Be(r)?(e=!0,Zo(t)):e=!1,In(t,n),Uf(t,r,o),ms(t,r,o,n),vs(null,t,r,!0,e,n);case 19:return vd(e,t,n);case 22:return pd(e,t,n)}throw Error(z(156,t.tag))};function $d(e,t){return of(e,t)}function Nm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new Nm(e,t,n,r)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Om(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xs)return 11;if(e===Qs)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Io(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ta(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Sn:return fn(n.children,o,i,t);case Hs:l=8,o|=8;break;case Vl:return e=nt(12,n,t,o|2),e.elementType=Vl,e.lanes=i,e;case Al:return e=nt(13,n,t,o),e.elementType=Al,e.lanes=i,e;case jl:return e=nt(19,n,t,o),e.elementType=jl,e.lanes=i,e;case Uc:return Ei(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ac:l=10;break e;case jc:l=9;break e;case Xs:l=11;break e;case Qs:l=14;break e;case Vt:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=nt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function fn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function Ei(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Uc,e.lanes=n,e.stateNode={isHidden:!1},e}function Cl(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function _l(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Pa(e,t,n,r,o,i,l,s,a){return e=new Rm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=nt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fa(i),e}function Mm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ld(e){if(!e)return en;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Be(n))return $f(e,n,t)}return t}function Dd(e,t,n,r,o,i,l,s,a){return e=Pa(n,r,!0,e,o,i,l,s,a),e.context=Ld(null),n=e.current,r=De(),o=qt(n),i=Pt(r,o),i.callback=t!=null?t:null,Kt(n,i,o),e.current.lanes=o,Gr(e,o,r),We(e,r),e}function Ci(e,t,n,r){var o=t.current,i=De(),l=qt(o);return n=Ld(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(o,t,l),e!==null&&(pt(e,o,l,i),Oo(e,o,l)),l}function ui(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Na(e,t){bu(e,t),(e=e.alternate)&&bu(e,t)}function $m(){return null}var Id=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oa(e){this._internalRoot=e}_i.prototype.render=Oa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Ci(e,t,null,null)};_i.prototype.unmount=Oa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){Ci(null,e,null,null)}),t[Rt]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var t=df();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&mf(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function Lm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=ui(l);i.call(c)}}var l=Dd(t,r,e,0,null,!1,!1,"",ec);return e._reactRootContainer=l,e[Rt]=l.current,Dr(e.nodeType===8?e.parentNode:e),yn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=ui(a);s.call(c)}}var a=Pa(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=a,e[Rt]=a.current,Dr(e.nodeType===8?e.parentNode:e),yn(function(){Ci(t,a,n,r)}),a}function Ti(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=ui(l);s.call(a)}}Ci(t,l,e,o)}else l=Lm(n,t,e,o,r);return ui(l)}cf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(Zs(t,n|1),We(t,me()),(G&6)===0&&(Hn=me()+500,rn()))}break;case 13:yn(function(){var r=Mt(e,1);if(r!==null){var o=De();pt(r,e,1,o)}}),Na(e,1)}};qs=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=De();pt(t,e,134217728,n)}Na(e,134217728)}};ff=function(e){if(e.tag===13){var t=qt(e),n=Mt(e,t);if(n!==null){var r=De();pt(n,e,t,r)}Na(e,t)}};df=function(){return b};pf=function(e,t){var n=b;try{return b=e,t()}finally{b=n}};Zl=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=vi(r);if(!o)throw Error(z(90));Wc(r),Wl(r,o)}}}break;case"textarea":Hc(e,n);break;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}};Jc=Ca;bc=yn;var Dm={usingClientEntryPoint:!1,Events:[Zr,_n,vi,Zc,qc,Ca]},sr={findFiberByHostInstance:sn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Im={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nf(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||$m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{pi=go.inject(Im),St=go}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(t))throw Error(z(200));return Mm(e,t,null,n)};qe.createRoot=function(e,t){if(!Ra(e))throw Error(z(299));var n=!1,r="",o=Id;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Pa(e,1,!1,null,null,n,!1,r,o),e[Rt]=t.current,Dr(e.nodeType===8?e.parentNode:e),new Oa(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=nf(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return yn(e)};qe.hydrate=function(e,t,n){if(!zi(t))throw Error(z(200));return Ti(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Ra(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Id;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Dd(t,null,e,1,n!=null?n:null,o,!1,i,l),e[Rt]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new _i(t)};qe.render=function(e,t,n){if(!zi(t))throw Error(z(200));return Ti(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!zi(e))throw Error(z(40));return e._reactRootContainer?(yn(function(){Ti(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};qe.unstable_batchedUpdates=Ca;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zi(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Ti(e,t,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=qe})(Lc);var tc=Lc.exports;Il.createRoot=tc.createRoot,Il.hydrateRoot=tc.hydrateRoot;const nc=e=>{let t;const n=new Set,r=(a,c)=>{const p=typeof a=="function"?a(t):a;if(!Object.is(p,t)){const h=t;t=(c!=null?c:typeof p!="object")?p:Object.assign({},t,p),n.forEach(y=>y(t,h))}},o=()=>t,s={setState:r,getState:o,subscribe:a=>(n.add(a),()=>n.delete(a)),destroy:()=>{var a;((a={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0})==null?void 0:a.MODE)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,o,s),s},Fm=e=>e?nc(e):nc;var Fd={exports:{}},Vd={},Ad={exports:{}},jd={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=U.exports;function Vm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Am=typeof Object.is=="function"?Object.is:Vm,jm=Xn.useState,Um=Xn.useEffect,Bm=Xn.useLayoutEffect,Wm=Xn.useDebugValue;function Ym(e,t){var n=t(),r=jm({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Bm(function(){o.value=n,o.getSnapshot=t,zl(o)&&i({inst:o})},[e,n,t]),Um(function(){return zl(o)&&i({inst:o}),e(function(){zl(o)&&i({inst:o})})},[e]),Wm(n),n}function zl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Am(e,n)}catch{return!0}}function Hm(e,t){return t()}var Xm=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Hm:Ym;jd.useSyncExternalStore=Xn.useSyncExternalStore!==void 0?Xn.useSyncExternalStore:Xm;(function(e){e.exports=jd})(Ad);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pi=U.exports,Qm=Ad.exports;function Gm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Km=typeof Object.is=="function"?Object.is:Gm,Zm=Qm.useSyncExternalStore,qm=Pi.useRef,Jm=Pi.useEffect,bm=Pi.useMemo,eh=Pi.useDebugValue;Vd.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=qm(null);if(i.current===null){var l={hasValue:!1,value:null};i.current=l}else l=i.current;i=bm(function(){function a(S){if(!c){if(c=!0,p=S,S=r(S),o!==void 0&&l.hasValue){var x=l.value;if(o(x,S))return h=x}return h=S}if(x=h,Km(p,S))return x;var g=r(S);return o!==void 0&&o(x,g)?x:(p=S,h=g)}var c=!1,p,h,y=n===void 0?null:n;return[function(){return a(t())},y===null?void 0:function(){return a(y())}]},[t,n,r,o]);var s=Zm(e,i[0],i[1]);return Jm(function(){l.hasValue=!0,l.value=s},[s]),eh(s),s};(function(e){e.exports=Vd})(Fd);const th=Fs(Fd.exports),{useSyncExternalStoreWithSelector:nh}=th;function rh(e,t=e.getState,n){const r=nh(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return U.exports.useDebugValue(r),r}const rc=e=>{var t;((t={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0})==null?void 0:t.MODE)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const n=typeof e=="function"?Fm(e):e,r=(o,i)=>rh(n,o,i);return Object.assign(r,n),r},oh=e=>e?rc(e):rc;var ih=e=>{var t;return((t={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0})==null?void 0:t.MODE)!=="production"&&console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),oh(e)},Ni={exports:{}},Oi={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh=U.exports,sh=Symbol.for("react.element"),ah=Symbol.for("react.fragment"),uh=Object.prototype.hasOwnProperty,ch=lh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fh={key:!0,ref:!0,__self:!0,__source:!0};function Ud(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)uh.call(t,r)&&!fh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:sh,type:e,key:i,ref:l,props:o,_owner:ch.current}}Oi.Fragment=ah;Oi.jsx=Ud;Oi.jsxs=Ud;(function(e){e.exports=Oi})(Ni);const dh=Ni.exports.Fragment,q=Ni.exports.jsx,Nt=Ni.exports.jsxs,Jr=rt.createContext(null),ph=({children:e})=>{const t=window.localStorage.getItem("theme"),[n,r]=rt.useState(t?t==="true":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),o=()=>{window.localStorage.setItem("theme",`${!n}`),r(!n)};return q(Jr.Provider,{value:{toggle:n,toggleTheme:o},children:e})},Bt=e=>{const{toggle:t}=rt.useContext(Jr),{fontSize:n,stroke:r,color:o,uppercase:i,className:l,children:s}=e;return q("p",{className:`${n!=null?n:"text-9xl"} bg-transparent inline-block word-spacing ${r?t?"text-stroke":"text-stroke-light":o!=null?o:t?"text-white":"text-gray-800"} ${l!=null?l:""}`,children:i?s==null?void 0:s.toString().toUpperCase():s})},Tl=e=>{var t,n;return q("button",{className:`pr-2 pl-2 ${(t=e.fontSize)!=null?t:""} focus:outline-none ${(n=e.className)!=null?n:""}`,onClick:e.onClick,children:e.children})},Ns=e=>{var t;return q("div",{className:`flex flex-col content-center justify-center text-center h-screen bg-transparent ${rt.useContext(Jr).toggle?"text-white":"text-gray-800"} ${(t=e.className)!=null?t:""}`,children:e.children})};var Bd={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(typeof self<"u"?self:w0,()=>(()=>{var n={d:(C,m)=>{for(var v in m)n.o(m,v)&&!n.o(C,v)&&Object.defineProperty(C,v,{enumerable:!0,get:m[v]})},o:(C,m)=>Object.prototype.hasOwnProperty.call(C,m),r:C=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(C,"__esModule",{value:!0})}},r={};function o(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}n.r(r),n.d(r,{default:()=>Dt}),Number.prototype.clamp=function(C,m){return Math.min(Math.max(this,C),m)};function i(C){for(;C.children&&C.children.length>0;)i(C.children[0]),C.remove(C.children[0]);C.geometry&&C.geometry.dispose(),C.material&&(Object.keys(C.material).forEach(m=>{C.material[m]&&C.material[m]!==null&&typeof C.material[m].dispose=="function"&&C.material[m].dispose()}),C.material.dispose())}const l=typeof window=="object";let s=l&&window.THREE||{};l&&!window.VANTA&&(window.VANTA={});const a=l&&window.VANTA||{};a.register=(C,m)=>a[C]=v=>new m(v),a.version="0.5.24";const c=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};a.VantaBase=class{constructor(C={}){if(!l)return!1;a.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const m=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},m),(C instanceof HTMLElement||typeof C=="string")&&(C={el:C}),Object.assign(this.options,C),this.options.THREE&&(s=this.options.THREE),this.el=this.options.el,this.el==null)c('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const R=this.el;if(this.el=(v=R,document.querySelector(v)),!this.el)return void c("Cannot find element",R)}var v,k;this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(R){return c("Init error",R),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=(k=this.options.backgroundColor,typeof k=="number"?"#"+("00000"+k.toString(16)).slice(-6):k)))}this.initMouse(),this.resize(),this.animationLoop();const T=window.addEventListener;T("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(T("scroll",this.windowMouseMoveWrapper),T("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(T("touchstart",this.windowTouchWrapper),T("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&T("deviceorientation",this.windowGyroWrapper)}setOptions(C={}){Object.assign(this.options,C),this.triggerMouseMove()}prepareEl(){let C,m;if(typeof Node<"u"&&Node.TEXT_NODE)for(C=0;C<this.el.childNodes.length;C++){const v=this.el.childNodes[C];if(v.nodeType===Node.TEXT_NODE){const k=document.createElement("span");k.textContent=v.textContent,v.parentElement.insertBefore(k,v),v.remove()}}for(C=0;C<this.el.children.length;C++)m=this.el.children[C],getComputedStyle(m).position==="static"&&(m.style.position="relative"),getComputedStyle(m).zIndex==="auto"&&(m.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(C,m={}){Object.assign(C.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(C.style,m),C.classList.add("vanta-canvas")}initThree(){s.WebGLRenderer?(this.renderer=new s.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new s.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const C=this.getCanvasElement();return!!C&&C.getBoundingClientRect()}windowMouseMoveWrapper(C){const m=this.getCanvasRect();if(!m)return!1;const v=C.clientX-m.left,k=C.clientY-m.top;v>=0&&k>=0&&v<=m.width&&k<=m.height&&(this.mouseX=v,this.mouseY=k,this.options.mouseEase||this.triggerMouseMove(v,k))}windowTouchWrapper(C){const m=this.getCanvasRect();if(!m)return!1;if(C.touches.length===1){const v=C.touches[0].clientX-m.left,k=C.touches[0].clientY-m.top;v>=0&&k>=0&&v<=m.width&&k<=m.height&&(this.mouseX=v,this.mouseY=k,this.options.mouseEase||this.triggerMouseMove(v,k))}}windowGyroWrapper(C){const m=this.getCanvasRect();if(!m)return!1;const v=Math.round(2*C.alpha)-m.left,k=Math.round(2*C.beta)-m.top;v>=0&&k>=0&&v<=m.width&&k<=m.height&&(this.mouseX=v,this.mouseY=k,this.options.mouseEase||this.triggerMouseMove(v,k))}triggerMouseMove(C,m){C===void 0&&m===void 0&&(this.options.mouseEase?(C=this.mouseEaseX,m=this.mouseEaseY):(C=this.mouseX,m=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=C/this.scale,this.uniforms.iMouse.value.y=m/this.scale);const v=C/this.width,k=m/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(v,k)}setSize(){this.scale||(this.scale=1),o()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const C=this.el.offsetHeight,m=this.el.getBoundingClientRect(),v=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,k=m.top+v;return k-window.innerHeight<=v&&v<=k+C}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const C=performance.now();if(this.prevNow){let m=(C-this.prevNow)/16.666666666666668;m=Math.max(.2,Math.min(m,5)),this.t+=m,this.t2+=(this.options.speed||1)*m,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2)}return this.prevNow=C,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const C=window.removeEventListener;C("touchstart",this.windowTouchWrapper),C("touchmove",this.windowTouchWrapper),C("scroll",this.windowMouseMoveWrapper),C("mousemove",this.windowMouseMoveWrapper),C("deviceorientation",this.windowGyroWrapper),C("resize",this.resize),window.cancelAnimationFrame(this.req);const m=this.scene;m&&m.children&&i(m),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),a.current===this&&(a.current=null)}};const p=a.VantaBase;let h=typeof window=="object"&&window.THREE,{Camera:y,ClampToEdgeWrapping:S,DataTexture:x,FloatType:g,Mesh:A,NearestFilter:f,PlaneBufferGeometry:u,RGBAFormat:d,Scene:w,ShaderMaterial:O,WebGLRenderTarget:N}=h||{};const _=function(C,m,v,k){k&&({Camera:y,ClampToEdgeWrapping:S,DataTexture:x,FloatType:g,Mesh:A,NearestFilter:f,PlaneBufferGeometry:u,RGBAFormat:d,Scene:w,ShaderMaterial:O,WebGLRenderTarget:N}=k),this.variables=[],this.currentTextureIndex=0;var T=g,R=new w,F=new y;F.position.z=1;var D={passThruTexture:{value:null}},X=W(`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`,D),Q=new A(new u(2,2),X);function j(L){L.defines.resolution="vec2( "+C.toFixed(1)+", "+m.toFixed(1)+" )"}function W(L,I){var B=new O({uniforms:I=I||{},vertexShader:`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`,fragmentShader:L});return j(B),B}R.add(Q),this.setDataType=function(L){return T=L,this},this.addVariable=function(L,I,B){var K={name:L,initialValueTexture:B,material:this.createShaderMaterial(I),dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:f,magFilter:f};return this.variables.push(K),K},this.setVariableDependencies=function(L,I){L.dependencies=I},this.init=function(){if(!v.capabilities.isWebGL2&&!v.extensions.get("OES_texture_float"))return"No OES_texture_float support for float textures.";if(v.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(var L=0;L<this.variables.length;L++){var I=this.variables[L];I.renderTargets[0]=this.createRenderTarget(C,m,I.wrapS,I.wrapT,I.minFilter,I.magFilter),I.renderTargets[1]=this.createRenderTarget(C,m,I.wrapS,I.wrapT,I.minFilter,I.magFilter),this.renderTexture(I.initialValueTexture,I.renderTargets[0]),this.renderTexture(I.initialValueTexture,I.renderTargets[1]);var B=I.material,K=B.uniforms;if(I.dependencies!==null)for(var ne=0;ne<I.dependencies.length;ne++){var re=I.dependencies[ne];if(re.name!==I.name){for(var He=!1,ht=0;ht<this.variables.length;ht++)if(re.name===this.variables[ht].name){He=!0;break}if(!He)return"Variable dependency not found. Variable="+I.name+", dependency="+re.name}K[re.name]={value:null},B.fragmentShader=`
uniform sampler2D `+re.name+`;
`+B.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){for(var L=this.currentTextureIndex,I=this.currentTextureIndex===0?1:0,B=0,K=this.variables.length;B<K;B++){var ne=this.variables[B];if(ne.dependencies!==null)for(var re=ne.material.uniforms,He=0,ht=ne.dependencies.length;He<ht;He++){var Jn=ne.dependencies[He];re[Jn.name].value=Jn.renderTargets[L].texture}this.doRenderTarget(ne.material,ne.renderTargets[I])}this.currentTextureIndex=I},this.getCurrentRenderTarget=function(L){return L.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(L){return L.renderTargets[this.currentTextureIndex===0?1:0]},this.addResolutionDefine=j,this.createShaderMaterial=W,this.createRenderTarget=function(L,I,B,K,ne,re){return new N(L=L||C,I=I||m,{wrapS:B=B||S,wrapT:K=K||S,minFilter:ne=ne||f,magFilter:re=re||f,format:d,type:T,stencilBuffer:!1,depthBuffer:!1})},this.createTexture=function(){var L=new Float32Array(C*m*4);return new x(L,C,m,d,g)},this.renderTexture=function(L,I){D.passThruTexture.value=L,this.doRenderTarget(X,I),D.passThruTexture.value=null},this.doRenderTarget=function(L,I){var B=v.getRenderTarget();Q.material=L,v.setRenderTarget(I),v.render(R,F),Q.material=X,v.setRenderTarget(B)}};let E=typeof window=="object"&&window.THREE;const H=!o();let V=32,se=V*V;const ue=800,Te=(C={})=>{const m=new E.BufferGeometry,v=[];function k(R,F,D){const X=1.5*(C.birdSize||1);v.push(new E.Vector3(R*X,F*X,D*X))}k(5,0,0),k(-5,-1,1),k(-5,0,0),k(-5,-2,-1),k(0,2,-6),k(0,2,6),k(2,0,0),k(-3,0,0),m.setFromPoints(v);const T=[];return T.push(0,2,1),T.push(4,7,6),T.push(5,6,7),m.setIndex(T),m};class Ve{constructor(m){var v,k,T=new E.Vector3,R=500,F=500,D=200,X=.1,Q=m;this.position=new E.Vector3,this.velocity=new E.Vector3,v=new E.Vector3,this.setGoal=function(j){k=j},this.setWorldSize=function(j,W,L){R=j,F=W,D=L},this.run=function(j){T.set(-R,this.position.y,this.position.z),(T=this.avoid(T)).multiplyScalar(5),v.add(T),T.set(R,this.position.y,this.position.z),(T=this.avoid(T)).multiplyScalar(5),v.add(T),T.set(this.position.x,-F,this.position.z),(T=this.avoid(T)).multiplyScalar(5),v.add(T),T.set(this.position.x,F,this.position.z),(T=this.avoid(T)).multiplyScalar(5),v.add(T),T.set(this.position.x,this.position.y,-D),(T=this.avoid(T)).multiplyScalar(5),v.add(T),T.set(this.position.x,this.position.y,D),(T=this.avoid(T)).multiplyScalar(5),v.add(T),Math.random()>.5&&this.flock(j),this.move()},this.flock=function(j){k&&v.add(this.reach(k,.005)),v.add(this.alignment(j)),v.add(this.cohesion(j)),v.add(this.separation(j))},this.move=function(){this.velocity.add(v);var j=this.velocity.length();j>2.5&&this.velocity.divideScalar(j/2.5),this.position.add(this.velocity),v.set(0,0,0)},this.checkBounds=function(){this.position.x>R&&(this.position.x=-R),this.position.x<-R&&(this.position.x=R),this.position.y>F&&(this.position.y=-F),this.position.y<-F&&(this.position.y=F),this.position.z>D&&(this.position.z=-D),this.position.z<-D&&(this.position.z=D)},this.avoid=function(j){var W=new E.Vector3;return W.copy(this.position),W.sub(j),W.multiplyScalar(1/this.position.distanceToSquared(j)),W},this.repulse=function(j){var W=this.position.distanceTo(j);if(W<150){var L=new E.Vector3;L.subVectors(this.position,j),L.multiplyScalar(.5/W),v.add(L)}},this.reach=function(j,W){var L=new E.Vector3;return L.subVectors(j,this.position),L.multiplyScalar(W),L},this.alignment=function(j){var W,L,I=new E.Vector3,B=0;const K=100*Q.alignment/20;for(var ne=0,re=j.length;ne<re;ne++)Math.random()>.6||(L=(W=j[ne]).position.distanceTo(this.position))>0&&L<=K&&(I.add(W.velocity),B++);if(B>0){I.divideScalar(B);var He=I.length();He>X&&I.divideScalar(He/X)}return I},this.cohesion=function(j){var W,L,I=new E.Vector3,B=new E.Vector3,K=0;const ne=100*Q.cohesion/20;for(var re=0,He=j.length;re<He;re++)Math.random()>.6||(L=(W=j[re]).position.distanceTo(this.position))>0&&L<=ne&&(I.add(W.position),K++);K>0&&I.divideScalar(K),B.subVectors(I,this.position);var ht=B.length();return ht>X&&B.divideScalar(ht/X),B},this.separation=function(j){var W,L,I=new E.Vector3,B=new E.Vector3;const K=100*Q.separation/20;for(var ne=0,re=j.length;ne<re;ne++)Math.random()>.6||(L=(W=j[ne]).position.distanceTo(this.position))>0&&L<=K&&(B.subVectors(this.position,W.position),B.normalize(),B.divideScalar(L),I.add(B));return I}}}class $e extends p{static initClass(){this.prototype.defaultOptions={backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}constructor(m){E=m.THREE||E,super(m)}initComputeRenderer(){this.gpuCompute=new _(V,V,this.renderer,E);const m=this.gpuCompute.createTexture(),v=this.gpuCompute.createTexture();(function(T){const R=T.image.data;let F=0;const D=R.length;(()=>{const X=[];for(;F<D;){const Q=Math.random()*ue-400,j=Math.random()*ue-400,W=Math.random()*ue-400;R[F+0]=Q,R[F+1]=j,R[F+2]=W,R[F+3]=1,X.push(F+=4)}})()})(m),function(T){const R=T.image.data;let F=0;const D=R.length;(()=>{const X=[];for(;F<D;){const Q=Math.random()-.5,j=Math.random()-.5,W=Math.random()-.5;R[F+0]=10*Q,R[F+1]=10*j,R[F+2]=10*W,R[F+3]=1,X.push(F+=4)}})()}(v),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",`uniform float time;
uniform float testing;
uniform float delta; // about 0.016
uniform float separationDistance; // 20
uniform float alignmentDistance; // 40
uniform float cohesionDistance;
uniform float speedLimit;
uniform float freedomFactor;
uniform vec3 predator;

const float width = resolution.x;
const float height = resolution.y;

const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;
// const float VISION = PI * 0.55;

float zoneRadius = 40.0;
float zoneRadiusSquared = 1600.0;

float separationThresh = 0.45;
float alignmentThresh = 0.65;

const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {

  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
  separationThresh = separationDistance / zoneRadius;
  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
  zoneRadiusSquared = zoneRadius * zoneRadius;


  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 birdPosition, birdVelocity;

  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;

  float dist;
  vec3 dir; // direction
  float distSquared;

  float separationSquared = separationDistance * separationDistance;
  float cohesionSquared = cohesionDistance * cohesionDistance;

  float f;
  float percent;

  vec3 velocity = selfVelocity;

  float limit = speedLimit;

  dir = predator * UPPER_BOUNDS - selfPosition;
  dir.z = 0.;
  // dir.z *= 0.6;
  dist = length( dir );
  distSquared = dist * dist;

  float preyRadius = 150.0;
  float preyRadiusSq = preyRadius * preyRadius;

  // move birds away from predator
  if (dist < preyRadius) {

    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
    velocity += normalize( dir ) * f;
    limit += 5.0;
  }

  // if (testing == 0.0) {}
  // if ( rand( uv + time ) < freedomFactor ) {}

  // Attract flocks to the center
  vec3 central = vec3( 0., 0., 0. );
  dir = selfPosition - central;
  dist = length( dir );

  dir.y *= 2.5;
  velocity -= normalize( dir ) * delta * 5.;

  for (float y=0.0;y<height;y++) {
    for (float x=0.0;x<width;x++) {

      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
      birdPosition = texture2D( texturePosition, ref ).xyz;

      dir = birdPosition - selfPosition;
      dist = length(dir);

      if (dist < 0.0001) continue;

      distSquared = dist * dist;

      if (distSquared > zoneRadiusSquared ) continue;

      percent = distSquared / zoneRadiusSquared;

      if ( percent < separationThresh ) { // low

        // Separation - Move apart for comfort
        f = (separationThresh / percent - 1.0) * delta;
        velocity -= normalize(dir) * f;

      } else if ( percent < alignmentThresh ) { // high

        // Alignment - fly the same direction
        float threshDelta = alignmentThresh - separationThresh;
        float adjustedPercent = ( percent - separationThresh ) / threshDelta;

        birdVelocity = texture2D( textureVelocity, ref ).xyz;

        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
        velocity += normalize(birdVelocity) * f;

      } else {

        // Attraction / Cohesion - move closer
        float threshDelta = 1.0 - alignmentThresh;
        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;

        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;

        velocity += normalize(dir) * f;

      }
    }
  }

  // this make tends to fly around than down or up
  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);

  // Speed Limits
  if ( length( velocity ) > limit ) {
    velocity = normalize( velocity ) * limit;
  }

  gl_FragColor = vec4( velocity, 1.0 );

}`,v),this.positionVariable=this.gpuCompute.addVariable("texturePosition",`uniform float time;
uniform float delta;

void main() {

  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( texturePosition, uv );
  vec3 position = tmpPos.xyz;
  vec3 velocity = texture2D( textureVelocity, uv ).xyz;

  float phase = tmpPos.w;

  phase = mod( ( phase + delta +
    length( velocity.xz ) * delta * 3. +
    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );

  gl_FragColor = vec4( position + velocity * delta * 15. , phase );

}`,m),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new E.Vector3},this.velocityVariable.material.defines.BOUNDS=ue.toFixed(2),this.velocityVariable.wrapS=E.RepeatWrapping,this.velocityVariable.wrapT=E.RepeatWrapping,this.positionVariable.wrapS=E.RepeatWrapping,this.positionVariable.wrapT=E.RepeatWrapping;const k=this.gpuCompute.init();k!==null&&console.error(k)}initGpgpuBirds(){const m=(T=>{const R=new E.BufferGeometry;T.quantity&&(V=Math.pow(2,T.quantity),se=V*V);const F=3*se,D=3*F,X=new E.BufferAttribute(new Float32Array(3*D),3),Q=new E.BufferAttribute(new Float32Array(3*D),3),j=new E.BufferAttribute(new Float32Array(2*D),2),W=new E.BufferAttribute(new Float32Array(D),1);R.setAttribute||(R.setAttribute=R.addAttribute),R.setAttribute("position",X),R.setAttribute("birdColor",Q),R.setAttribute("reference",j),R.setAttribute("birdVertex",W);let L=0;const I=function(){for(let re=0;re<arguments.length;re++)X.array[L++]=arguments[re]},B=T.wingSpan||20,K=T.birdSize||1;for(let re=0;re<se;re++)I(0,-0,-20*K,0,4*K,-20*K,0,0,30*K),I(0,0,-15*K,-B*K,0,0,0,0,15*K),I(0,0,15*K,B*K,0,0,0,0,-15*K);const ne={};for(L=0;L<3*F;L++){const re=~~(L/3),He=re%V/V,ht=~~(re/V)/V,Jn=~~(L/9)/se,eo=Jn.toString(),Ha=T.colorMode.indexOf("Gradient")!=-1;let bn;bn=!Ha&&ne[eo]?ne[eo]:T.effect.getNewCol(Jn),Ha||ne[eo]||(ne[eo]=bn),Q.array[3*L+0]=bn.r,Q.array[3*L+1]=bn.g,Q.array[3*L+2]=bn.b,j.array[2*L]=He,j.array[2*L+1]=ht,W.array[L]=L%9}return R.scale(.2,.2,.2)})(Object.assign({},this.options,{effect:this}));this.birdUniforms={color:{value:new E.Color(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:this.options.birdSize}};const v=new E.ShaderMaterial({uniforms:this.birdUniforms,vertexShader:`attribute vec2 reference;
attribute float birdVertex;

attribute vec3 birdColor;

uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;

varying vec4 vColor;
varying float z;

uniform float time;
uniform float birdSize;

void main() {

  vec4 tmpPos = texture2D( texturePosition, reference );
  vec3 pos = tmpPos.xyz;
  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);

  vec3 newPosition = position;

  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {
    // flap wings
    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;
  }

  newPosition = mat3( modelMatrix ) * newPosition;

  velocity.z *= -1.;
  float xz = length( velocity.xz );
  float xyz = 1.;
  float x = sqrt( 1. - velocity.y * velocity.y );

  float cosry = velocity.x / xz;
  float sinry = velocity.z / xz;

  float cosrz = x / xyz;
  float sinrz = velocity.y / xyz;

  mat3 maty =  mat3(
    cosry, 0, -sinry,
    0    , 1, 0     ,
    sinry, 0, cosry
  );

  mat3 matz =  mat3(
    cosrz , sinrz, 0,
    -sinrz, cosrz, 0,
    0     , 0    , 1
  );
  newPosition =  maty * matz * newPosition;
  newPosition += pos;
  z = newPosition.z;

  vColor = vec4( birdColor, 1.0 );
  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );
}`,fragmentShader:`varying vec4 vColor;
varying float z;
uniform vec3 color;
void main() {
  // Fake colors for now
  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;
  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;
  gl_FragColor = vec4( rr, gg, bb, 1. );
}`,side:E.DoubleSide}),k=new E.Mesh(m,v);return k.rotation.y=Math.PI/2,k.matrixAutoUpdate=!1,k.updateMatrix(),this.scene.add(k)}getNewCol(m){const v=this.options,k=v.color1!=null?v.color1:4456448,T=v.color2!=null?v.color2:6684672,R=new E.Color(k),F=new E.Color(T);let D,X;if(X=v.colorMode.indexOf("Gradient")!=-1?Math.random():m,v.colorMode.indexOf("variance")==0){const Q=(R.r+Math.random()*F.r).clamp(0,1),j=(R.g+Math.random()*F.g).clamp(0,1),W=(R.b+Math.random()*F.b).clamp(0,1);D=new E.Color(Q,j,W)}else D=v.colorMode.indexOf("mix")==0?new E.Color(k+X*T):R.lerp(F,X);return D}onInit(){this.camera=new E.PerspectiveCamera(75,this.width/this.height,1,3e3),this.camera.position.z=350,this.fog=new E.Fog(16777215,100,1e3),this.mouseX=this.mouseY=0;const m=this.birds=[],v=this.boids=[],k=this.options;let T,R;if(H)try{this.initComputeRenderer(),this.valuesChanger=this.valuesChanger.bind(this),this.valuesChanger(),this.initGpgpuBirds()}catch(Q){console.error("[vanta.js] birds init error: ",Q)}else{const Q=6*Math.pow(2,k.quantity);for(var F=0;F<Q;F++){T=v[F]=new Ve(k),T.position.x=400*Math.random()-200,T.position.y=400*Math.random()-200,T.position.z=400*Math.random()-200,T.velocity.x=2*Math.random()-1,T.velocity.y=2*Math.random()-1,T.velocity.z=2*Math.random()-1,T.setWorldSize(500,500,300);const j=k.colorMode.indexOf("Gradient")!=-1,W=Te(k),L=W.attributes.position.length,I=new E.BufferAttribute(new Float32Array(L),3);if(j)for(var D=0;D<W.index.array.length;D+=3)for(var X=0;X<=2;X++){const B=W.index.array[D+X],K=this.getNewCol();I.array[3*B]=K.r,I.array[3*B+1]=K.g,I.array[3*B+2]=K.b}else{const B=this.getNewCol(F/Q);for(D=0;D<I.array.length;D+=3)I.array[D]=B.r,I.array[D+1]=B.g,I.array[D+2]=B.b}W.setAttribute("color",I),R=m[F]=new E.Mesh(W,new E.MeshBasicMaterial({color:16777215,side:E.DoubleSide,vertexColors:E.VertexColors})),R.phase=Math.floor(62.83*Math.random()),R.position.x=v[F].position.x,R.position.y=v[F].position.y,R.position.z=v[F].position.z,this.scene.add(R)}}}valuesChanger(){this.velocityUniforms&&(this.velocityUniforms.separationDistance.value=this.options.separation,this.velocityUniforms.alignmentDistance.value=this.options.alignment,this.velocityUniforms.speedLimit.value=this.options.speedLimit,this.velocityUniforms.cohesionDistance.value=this.options.cohesion)}onUpdate(){this.now=performance.now(),this.last||(this.last=this.now);let m=(this.now-this.last)/1e3;if(m>1&&(m=1),this.last=this.now,H)this.positionUniforms.time.value=this.now,this.positionUniforms.delta.value=m,this.velocityUniforms.time.value=this.now,this.velocityUniforms.delta.value=m,this.birdUniforms.time.value=this.now,this.birdUniforms.delta.value=m,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;else{const T=this.birds,R=this.boids;let F,D;for(var v=0,k=T.length;v<k;v++){F=R[v],F.run(R),D=T[v],D.rotation.y=Math.atan2(-F.velocity.z,F.velocity.x),D.rotation.z=Math.asin(F.velocity.y/F.velocity.length()),D.phase=(D.phase+(Math.max(0,D.rotation.z)+.1))%62.83;const X=16,Q=13;D.geometry.attributes.position.array[X]=D.geometry.attributes.position.array[Q]=5*Math.sin(D.phase)*this.options.birdSize,D.geometry.attributes.position.needsUpdate=!0,D.geometry.computeVertexNormals(),D.position.x=R[v].position.x,D.position.y=R[v].position.y,D.position.z=R[v].position.z}}}onMouseMove(m,v){if(this.mouseX=m-.5,this.mouseY=v-.5,!H){const F=this.boids;let D;for(var k=new E.Vector3(this.mouseX*this.width,-this.mouseY*this.height,0),T=0,R=F.length;T<R;T++)D=F[T],k.z=D.position.z,D.repulse(k)}}onDestroy(){}onResize(){}}$e.initClass();const Dt=a.register("BIRDS",$e);return r})())})(Bd);const mh=Fs(Bd.exports),hh=e=>e.current&&mh({el:e.current,backgroundAlpha:0,quantity:3,speedLimit:3,alignment:1e4,cohesion:0}),yh=()=>{const{toggle:e}=rt.useContext(Jr),t=rt.useRef(null);return rt.useEffect(()=>void hh(t),[]),q("div",{className:`fixed w-[100vw] h-[100vh] ${e?"bg-background":"bg-background-light"}`,ref:t})};function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}var Pl=function(e){var t=U.exports.useRef(e);return t.current=e,t},vh="\u{1F4A1} use-web-animations: please install polyfill to use this hook. See https://github.com/wellyshen/use-web-animations##use-polyfill",gh=`\u{1F4A1} use-web-animations: the browser doesn't support "onReady" event, please use "onUpdate" to monitor the animation's state instead. See https://github.com/wellyshen/use-web-animations#basic-usage`,oc=function(t){var n=t===void 0?{}:t,r=n.ref,o=n.id,i=n.playbackRate,l=n.autoPlay,s=n.keyframes,a=n.animationOptions,c=n.onReady,p=n.onUpdate,h=n.onFinish,y=U.exports.useState(),S=y[0],x=y[1],g=U.exports.useRef(!1),A=U.exports.useRef(),f=U.exports.useRef(),u=U.exports.useRef(),d=U.exports.useRef(s),w=U.exports.useRef(a),O=Pl(c),N=Pl(p),_=Pl(h),E=U.exports.useRef(null),H=r||E,V=U.exports.useCallback(function(){return A.current},[]),se=U.exports.useCallback(function(ue){if(!(!H.current||!ue.keyframes)){if(!H.current.animate){console.error(vh);return}A.current=H.current.animate(ue.keyframes,ue.animationOptions);var Te=A.current;ue.autoPlay===!1&&Te.pause(),ue.id&&(Te.id=ue.id),ue.playbackRate&&(Te.playbackRate=ue.playbackRate),O.current&&(Te.ready?Te.ready.then(function(Ve){O.current({playState:Ve.playState,animate:se,animation:Ve})}):console.error(gh)),_.current&&(Te.onfinish=function(Ve){var $e=Ve.target;g.current||_.current({playState:$e.playState,animate:se,animation:$e})}),u.current=void 0}},[_,O,H]);return U.exports.useEffect(function(){d.current&&se({id:o,playbackRate:i,autoPlay:l,keyframes:d.current,animationOptions:w.current})},[se,l,o,i]),U.exports.useEffect(function(){var ue,Te=function Ve(){var $e=V();if($e){var Dt=$e.pending,C=$e.playState;u.current!==C&&x(C),N.current&&(f.current!==Dt||u.current!==C||C==="running")&&N.current({playState:C,animate:se,animation:$e}),f.current=Dt,u.current=C}ue=requestAnimationFrame(Ve)};return ue=requestAnimationFrame(Te),function(){var Ve,$e;cancelAnimationFrame(ue),g.current=!0,(Ve=V())==null||Ve.finish(),($e=V())==null||$e.cancel()}},[se,V,N]),{ref:H,playState:S,getAnimation:V,animate:se}},Wd="cubic-bezier(0.215, 0.61, 0.355, 1)",Yd="cubic-bezier(0.755, 0.05, 0.855, 0.06)",zr="center bottom",wo={transform:"translate3d(0, 0, 0)",easing:Wd,transformOrigin:zr},ic={transform:"translate3d(0, -30px, 0) scaleY(1.1)",easing:Yd,transformOrigin:zr};$({},wo,{offset:0}),$({},wo,{offset:.2}),$({},ic,{offset:.4}),$({},ic,{offset:.43}),$({},wo,{offset:.53}),$({},wo,{offset:1});var Nl={opacity:1},lc={opacity:0};$({},Nl,{offset:0}),$({},lc,{offset:.25}),$({},Nl,{offset:.5}),$({},lc,{offset:.75}),$({},Nl,{offset:1});var sc={transform:"translate3d(0, 0, 0)"},ar={transform:"translate3d(-10px, 0, 0)"},xo={transform:"translate3d(10px, 0, 0)"};$({},sc,{offset:0}),$({},ar,{offset:.1}),$({},xo,{offset:.2}),$({},ar,{offset:.3}),$({},xo,{offset:.4}),$({},ar,{offset:.5}),$({},xo,{offset:.6}),$({},ar,{offset:.7}),$({},xo,{offset:.8}),$({},ar,{offset:.9}),$({},sc,{offset:1});var ac={transform:"translate3d(0, 0, 0)"},ur={transform:"translate3d(0, -10px, 0)"},So={transform:"translate3d(0, 10px, 0)"};$({},ac,{offset:0}),$({},ur,{offset:.1}),$({},So,{offset:.2}),$({},ur,{offset:.3}),$({},So,{offset:.4}),$({},ur,{offset:.5}),$({},So,{offset:.6}),$({},ur,{offset:.7}),$({},So,{offset:.8}),$({},ur,{offset:.9}),$({},ac,{offset:1});var wh={keyframes:[{transform:"translateX(0)",offset:0},{transform:"translateX(-6px) rotateY(-9deg)",offset:.065},{transform:"translateX(5px) rotateY(7deg)",offset:.185},{transform:"translateX(-3px) rotateY(-5deg)",offset:.315},{transform:"translateX(2px) rotateY(3deg)",offset:.435},{transform:"translateX(0)",offset:.5},{transform:"none",offset:1}],animationOptions:{duration:1e3,fill:"both",easing:"ease-in-out"}},uc={transform:"scale3d(1, 1, 1)"},cc={transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},ko={transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},Ol={transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"};$({},uc,{offset:0}),$({},cc,{offset:.1}),$({},cc,{offset:.2}),$({},ko,{offset:.3}),$({},Ol,{offset:.4}),$({},ko,{offset:.5}),$({},Ol,{offset:.6}),$({},ko,{offset:.7}),$({},Ol,{offset:.8}),$({},ko,{offset:.9}),$({},uc,{offset:1});var Ft="center",Rl={transform:"translate3d(0, 0, 0)",transformOrigin:Ft};$({},Rl,{offset:0}),$({},Rl,{offset:.111}),$({},Rl,{offset:1});var Ml={transform:"scale(1)"},fc={transform:"scale(1.3)"};$({},Ml,{offset:0}),$({},fc,{offset:.14}),$({},Ml,{offset:.28}),$({},fc,{offset:.42}),$({},Ml,{offset:.7});var cr="cubic-bezier(0.215, 0.61, 0.355, 1)",xh={keyframes:[{transform:"translate3d(-3000px, 0, 0) scaleX(3)",opacity:0,easing:cr,offset:0},{transform:"translate3d(25px, 0, 0) scaleX(1)",opacity:1,easing:cr,offset:.6},{transform:"translate3d(-10px, 0, 0) scaleX(0.98)",easing:cr,offset:.75},{transform:"translate3d(5px, 0, 0) scaleX(0.995)",easing:cr,offset:.9},{transform:"translate3d(0, 0, 0)",opacity:1,easing:cr,offset:1}],animationOptions:{duration:1e3,fill:"both"}},fr="cubic-bezier(0.215, 0.61, 0.355, 1)",Sh={keyframes:[{transform:"translate3d(3000px, 0, 0) scaleX(3)",opacity:0,easing:fr,offset:0},{transform:"translate3d(-25px, 0, 0) scaleX(1)",opacity:1,easing:fr,offset:.6},{transform:"translate3d(10px, 0, 0) scaleX(0.98)",easing:fr,offset:.75},{transform:"translate3d(-5px, 0, 0) scaleX(0.995)",easing:fr,offset:.9},{transform:"translate3d(0, 0, 0)",opacity:1,easing:fr,offset:1}],animationOptions:{duration:1e3,fill:"both"}},dc={transform:"scale3d(1.1, 1.1, 1.1)",opacity:1};$({},dc,{offset:.5}),$({},dc,{offset:.55});var pc={transform:"translate3d(0, -20px, 0) scaleY(0.9)",opacity:1};$({},pc,{offset:.4}),$({},pc,{offset:.45});var mc={transform:"translate3d(0, 20px, 0) scaleY(0.9)",opacity:1};$({},mc,{offset:.4}),$({},mc,{offset:.45});var Ma="ease-in-out",ci="top left",hc={transform:"rotate3d(0, 0, 1, 80deg)",easing:Ma,transformOrigin:ci},yc={transform:"rotate3d(0, 0, 1, 60deg)",opacity:1,easing:Ma,transformOrigin:ci};$({},hc,{offset:.2}),$({},yc,{offset:.4}),$({},hc,{offset:.6}),$({},yc,{offset:.8});var vc={transform:"none",opacity:1};$({},vc,{offset:.5}),$({},vc,{offset:1});const kh=()=>{const{ref:e,animate:t}=oc(xh),{ref:n}=oc(Sh),r=q("div",{ref:e,onClick:()=>t(wh),children:q(Bt,{className:"text-4xl sm:text-6xl",uppercase:!0,children:"ky0422"})}),[o,i]=["text-xl sm:text-2xl","pr-1.5"],l=Nt("div",{className:"pt-3",ref:n,children:[q(Bt,{className:`${o} ${i}`,color:"text-blue-500",children:"\uB2E4\uB78C\uC950"}),q(Bt,{className:`${o} ${i}`,children:"\uD5CC"}),q(Bt,{className:o,color:"text-red-500",children:"\uCCC7\uBC14\uD034"}),q(Bt,{className:`${o} ${i}`,children:"\uC5D0 \uD0C0\uACE0\uD30C"})]});return Nt("div",{className:"inline-block",children:[r,l]})};function Eh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ch(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var _h=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ch(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Eh(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Oe="-ms-",fi="-moz-",Z="-webkit-",Hd="comm",$a="rule",La="decl",zh="@import",Xd="@keyframes",Th=Math.abs,Ri=String.fromCharCode,Ph=Object.assign;function Nh(e,t){return Ce(e,0)^45?(((t<<2^Ce(e,0))<<2^Ce(e,1))<<2^Ce(e,2))<<2^Ce(e,3):0}function Qd(e){return e.trim()}function Oh(e,t){return(e=t.exec(e))?e[0]:e}function J(e,t,n){return e.replace(t,n)}function Os(e,t){return e.indexOf(t)}function Ce(e,t){return e.charCodeAt(t)|0}function Yr(e,t,n){return e.slice(t,n)}function gt(e){return e.length}function Da(e){return e.length}function Eo(e,t){return t.push(e),e}function Rh(e,t){return e.map(t).join("")}var Mi=1,Qn=1,Gd=0,Ye=0,he=0,qn="";function $i(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Mi,column:Qn,length:l,return:""}}function dr(e,t){return Ph($i("",null,null,"",null,null,0),e,{length:-e.length},t)}function Mh(){return he}function $h(){return he=Ye>0?Ce(qn,--Ye):0,Qn--,he===10&&(Qn=1,Mi--),he}function Ke(){return he=Ye<Gd?Ce(qn,Ye++):0,Qn++,he===10&&(Qn=1,Mi++),he}function Et(){return Ce(qn,Ye)}function Fo(){return Ye}function br(e,t){return Yr(qn,e,t)}function Hr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kd(e){return Mi=Qn=1,Gd=gt(qn=e),Ye=0,[]}function Zd(e){return qn="",e}function Vo(e){return Qd(br(Ye-1,Rs(e===91?e+2:e===40?e+1:e)))}function Lh(e){for(;(he=Et())&&he<33;)Ke();return Hr(e)>2||Hr(he)>3?"":" "}function Dh(e,t){for(;--t&&Ke()&&!(he<48||he>102||he>57&&he<65||he>70&&he<97););return br(e,Fo()+(t<6&&Et()==32&&Ke()==32))}function Rs(e){for(;Ke();)switch(he){case e:return Ye;case 34:case 39:e!==34&&e!==39&&Rs(he);break;case 40:e===41&&Rs(e);break;case 92:Ke();break}return Ye}function Ih(e,t){for(;Ke()&&e+he!==47+10;)if(e+he===42+42&&Et()===47)break;return"/*"+br(t,Ye-1)+"*"+Ri(e===47?e:Ke())}function Fh(e){for(;!Hr(Et());)Ke();return br(e,Ye)}function Vh(e){return Zd(Ao("",null,null,null,[""],e=Kd(e),0,[0],e))}function Ao(e,t,n,r,o,i,l,s,a){for(var c=0,p=0,h=l,y=0,S=0,x=0,g=1,A=1,f=1,u=0,d="",w=o,O=i,N=r,_=d;A;)switch(x=u,u=Ke()){case 40:if(x!=108&&Ce(_,h-1)==58){Os(_+=J(Vo(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Vo(u);break;case 9:case 10:case 13:case 32:_+=Lh(x);break;case 92:_+=Dh(Fo()-1,7);continue;case 47:switch(Et()){case 42:case 47:Eo(Ah(Ih(Ke(),Fo()),t,n),a);break;default:_+="/"}break;case 123*g:s[c++]=gt(_)*f;case 125*g:case 59:case 0:switch(u){case 0:case 125:A=0;case 59+p:S>0&&gt(_)-h&&Eo(S>32?wc(_+";",r,n,h-1):wc(J(_," ","")+";",r,n,h-2),a);break;case 59:_+=";";default:if(Eo(N=gc(_,t,n,c,p,o,s,d,w=[],O=[],h),i),u===123)if(p===0)Ao(_,t,N,N,w,i,h,s,O);else switch(y===99&&Ce(_,3)===110?100:y){case 100:case 109:case 115:Ao(e,N,N,r&&Eo(gc(e,N,N,0,0,o,s,d,o,w=[],h),O),o,O,h,s,r?w:O);break;default:Ao(_,N,N,N,[""],O,0,s,O)}}c=p=S=0,g=f=1,d=_="",h=l;break;case 58:h=1+gt(_),S=x;default:if(g<1){if(u==123)--g;else if(u==125&&g++==0&&$h()==125)continue}switch(_+=Ri(u),u*g){case 38:f=p>0?1:(_+="\f",-1);break;case 44:s[c++]=(gt(_)-1)*f,f=1;break;case 64:Et()===45&&(_+=Vo(Ke())),y=Et(),p=h=gt(d=_+=Fh(Fo())),u++;break;case 45:x===45&&gt(_)==2&&(g=0)}}return i}function gc(e,t,n,r,o,i,l,s,a,c,p){for(var h=o-1,y=o===0?i:[""],S=Da(y),x=0,g=0,A=0;x<r;++x)for(var f=0,u=Yr(e,h+1,h=Th(g=l[x])),d=e;f<S;++f)(d=Qd(g>0?y[f]+" "+u:J(u,/&\f/g,y[f])))&&(a[A++]=d);return $i(e,t,n,o===0?$a:s,a,c,p)}function Ah(e,t,n){return $i(e,t,n,Hd,Ri(Mh()),Yr(e,2,-2),0)}function wc(e,t,n,r){return $i(e,t,n,La,Yr(e,0,r),Yr(e,r+1,-1),r)}function Vn(e,t){for(var n="",r=Da(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function jh(e,t,n,r){switch(e.type){case zh:case La:return e.return=e.return||e.value;case Hd:return"";case Xd:return e.return=e.value+"{"+Vn(e.children,r)+"}";case $a:e.value=e.props.join(",")}return gt(n=Vn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Uh(e){var t=Da(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Bh(e){return function(t){t.root||(t=t.return)&&e(t)}}function Wh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Yh=function(t,n,r){for(var o=0,i=0;o=i,i=Et(),o===38&&i===12&&(n[r]=1),!Hr(i);)Ke();return br(t,Ye)},Hh=function(t,n){var r=-1,o=44;do switch(Hr(o)){case 0:o===38&&Et()===12&&(n[r]=1),t[r]+=Yh(Ye-1,n,r);break;case 2:t[r]+=Vo(o);break;case 4:if(o===44){t[++r]=Et()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ri(o)}while(o=Ke());return t},Xh=function(t,n){return Zd(Hh(Kd(t),n))},xc=new WeakMap,Qh=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!xc.get(r))&&!o){xc.set(t,!0);for(var i=[],l=Xh(n,i),s=r.props,a=0,c=0;a<l.length;a++)for(var p=0;p<s.length;p++,c++)t.props[c]=i[a]?l[a].replace(/&\f/g,s[p]):s[p]+" "+l[a]}}},Gh=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function qd(e,t){switch(Nh(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+fi+e+Oe+e+e;case 6828:case 4268:return Z+e+Oe+e+e;case 6165:return Z+e+Oe+"flex-"+e+e;case 5187:return Z+e+J(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+Oe+"flex-$1$2")+e;case 5443:return Z+e+Oe+"flex-item-"+J(e,/flex-|-self/,"")+e;case 4675:return Z+e+Oe+"flex-line-pack"+J(e,/align-content|flex-|-self/,"")+e;case 5548:return Z+e+Oe+J(e,"shrink","negative")+e;case 5292:return Z+e+Oe+J(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+J(e,"-grow","")+Z+e+Oe+J(e,"grow","positive")+e;case 4554:return Z+J(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return J(J(J(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return J(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return J(J(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4095:case 3583:case 4068:case 2532:return J(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gt(e)-1-t>6)switch(Ce(e,t+1)){case 109:if(Ce(e,t+4)!==45)break;case 102:return J(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+fi+(Ce(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Os(e,"stretch")?qd(J(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Ce(e,t+1)!==115)break;case 6444:switch(Ce(e,gt(e)-3-(~Os(e,"!important")&&10))){case 107:return J(e,":",":"+Z)+e;case 101:return J(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Z+(Ce(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+Oe+"$2box$3")+e}break;case 5936:switch(Ce(e,t+11)){case 114:return Z+e+Oe+J(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+Oe+J(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+Oe+J(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Z+e+Oe+e+e}return e}var Kh=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case La:t.return=qd(t.value,t.length);break;case Xd:return Vn([dr(t,{value:J(t.value,"@","@"+Z)})],o);case $a:if(t.length)return Rh(t.props,function(i){switch(Oh(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Vn([dr(t,{props:[J(i,/:(read-\w+)/,":"+fi+"$1")]})],o);case"::placeholder":return Vn([dr(t,{props:[J(i,/:(plac\w+)/,":"+Z+"input-$1")]}),dr(t,{props:[J(i,/:(plac\w+)/,":"+fi+"$1")]}),dr(t,{props:[J(i,/:(plac\w+)/,Oe+"input-$1")]})],o)}return""})}},Zh=[Kh],qh=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var A=g.getAttribute("data-emotion");A.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||Zh,i={},l,s=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var A=g.getAttribute("data-emotion").split(" "),f=1;f<A.length;f++)i[A[f]]=!0;s.push(g)});var a,c=[Qh,Gh];{var p,h=[jh,Bh(function(g){p.insert(g)})],y=Uh(c.concat(o,h)),S=function(A){return Vn(Vh(A),y)};a=function(A,f,u,d){p=u,S(A?A+"{"+f.styles+"}":f.styles),d&&(x.inserted[f.name]=!0)}}var x={key:n,sheet:new _h({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return x.sheet.hydrate(s),x},Jd={exports:{}},ee={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=typeof Symbol=="function"&&Symbol.for,Ia=ke?Symbol.for("react.element"):60103,Fa=ke?Symbol.for("react.portal"):60106,Li=ke?Symbol.for("react.fragment"):60107,Di=ke?Symbol.for("react.strict_mode"):60108,Ii=ke?Symbol.for("react.profiler"):60114,Fi=ke?Symbol.for("react.provider"):60109,Vi=ke?Symbol.for("react.context"):60110,Va=ke?Symbol.for("react.async_mode"):60111,Ai=ke?Symbol.for("react.concurrent_mode"):60111,ji=ke?Symbol.for("react.forward_ref"):60112,Ui=ke?Symbol.for("react.suspense"):60113,Jh=ke?Symbol.for("react.suspense_list"):60120,Bi=ke?Symbol.for("react.memo"):60115,Wi=ke?Symbol.for("react.lazy"):60116,bh=ke?Symbol.for("react.block"):60121,e1=ke?Symbol.for("react.fundamental"):60117,t1=ke?Symbol.for("react.responder"):60118,n1=ke?Symbol.for("react.scope"):60119;function be(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ia:switch(e=e.type,e){case Va:case Ai:case Li:case Ii:case Di:case Ui:return e;default:switch(e=e&&e.$$typeof,e){case Vi:case ji:case Wi:case Bi:case Fi:return e;default:return t}}case Fa:return t}}}function bd(e){return be(e)===Ai}ee.AsyncMode=Va;ee.ConcurrentMode=Ai;ee.ContextConsumer=Vi;ee.ContextProvider=Fi;ee.Element=Ia;ee.ForwardRef=ji;ee.Fragment=Li;ee.Lazy=Wi;ee.Memo=Bi;ee.Portal=Fa;ee.Profiler=Ii;ee.StrictMode=Di;ee.Suspense=Ui;ee.isAsyncMode=function(e){return bd(e)||be(e)===Va};ee.isConcurrentMode=bd;ee.isContextConsumer=function(e){return be(e)===Vi};ee.isContextProvider=function(e){return be(e)===Fi};ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ia};ee.isForwardRef=function(e){return be(e)===ji};ee.isFragment=function(e){return be(e)===Li};ee.isLazy=function(e){return be(e)===Wi};ee.isMemo=function(e){return be(e)===Bi};ee.isPortal=function(e){return be(e)===Fa};ee.isProfiler=function(e){return be(e)===Ii};ee.isStrictMode=function(e){return be(e)===Di};ee.isSuspense=function(e){return be(e)===Ui};ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Li||e===Ai||e===Ii||e===Di||e===Ui||e===Jh||typeof e=="object"&&e!==null&&(e.$$typeof===Wi||e.$$typeof===Bi||e.$$typeof===Fi||e.$$typeof===Vi||e.$$typeof===ji||e.$$typeof===e1||e.$$typeof===t1||e.$$typeof===n1||e.$$typeof===bh)};ee.typeOf=be;(function(e){e.exports=ee})(Jd);var e0=Jd.exports,r1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t0={};t0[e0.ForwardRef]=r1;t0[e0.Memo]=o1;var i1=!0;function n0(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Aa=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||i1===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},r0=function(t,n,r){Aa(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function l1(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var s1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a1=/[A-Z]|^ms/g,u1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,o0=function(t){return t.charCodeAt(1)===45},Sc=function(t){return t!=null&&typeof t!="boolean"},$l=Wh(function(e){return o0(e)?e:e.replace(a1,"-$&").toLowerCase()}),kc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(u1,function(r,o,i){return wt={name:o,styles:i,next:wt},o})}return s1[t]!==1&&!o0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Xr(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return wt={name:n.name,styles:n.styles,next:wt},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)wt={name:r.name,styles:r.styles,next:wt},r=r.next;var o=n.styles+";";return o}return c1(e,t,n)}case"function":{if(e!==void 0){var i=wt,l=n(e);return wt=i,Xr(e,t,l)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function c1(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Xr(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":Sc(l)&&(r+=$l(i)+":"+kc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var s=0;s<l.length;s++)Sc(l[s])&&(r+=$l(i)+":"+kc(i,l[s])+";");else{var a=Xr(e,t,l);switch(i){case"animation":case"animationName":{r+=$l(i)+":"+a+";";break}default:r+=i+"{"+a+"}"}}}return r}var Ec=/label:\s*([^\s;\n{]+)\s*(;|$)/g,wt,ja=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";wt=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Xr(r,n,l)):i+=l[0];for(var s=1;s<t.length;s++)i+=Xr(r,n,t[s]),o&&(i+=l[s]);Ec.lastIndex=0;for(var a="",c;(c=Ec.exec(i))!==null;)a+="-"+c[1];var p=l1(i)+a;return{name:p,styles:i,next:wt}},f1=function(t){return t()},d1=Ka["useInsertionEffect"]?Ka["useInsertionEffect"]:!1,i0=d1||f1,Ua={}.hasOwnProperty,l0=U.exports.createContext(typeof HTMLElement<"u"?qh({key:"css"}):null);l0.Provider;var s0=function(t){return U.exports.forwardRef(function(n,r){var o=U.exports.useContext(l0);return t(n,o,r)})},a0=U.exports.createContext({}),Ms="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",p1=function(t,n){var r={};for(var o in n)Ua.call(n,o)&&(r[o]=n[o]);return r[Ms]=t,r},m1=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Aa(n,r,o),i0(function(){return r0(n,r,o)}),null},h1=s0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ms],i=[r],l="";typeof e.className=="string"?l=n0(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var s=ja(i,void 0,U.exports.useContext(a0));l+=t.key+"-"+s.name;var a={};for(var c in e)Ua.call(e,c)&&c!=="css"&&c!==Ms&&(a[c]=e[c]);return a.ref=n,a.className=l,U.exports.createElement(U.exports.Fragment,null,U.exports.createElement(m1,{cache:t,serialized:s,isStringTag:typeof o=="string"}),U.exports.createElement(o,a))});function u0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ja(t)}var P=function(){var t=u0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},y1=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var s in i)i[s]&&s&&(l&&(l+=" "),l+=s)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function v1(e,t,n){var r=[],o=n0(e,r,n);return r.length<2?n:o+t(r)}var g1=function(t){var n=t.cache,r=t.serializedArr;return i0(function(){for(var o=0;o<r.length;o++)r0(n,r[o],!1)}),null},Ll=s0(function(e,t){var n=!1,r=[],o=function(){for(var c=arguments.length,p=new Array(c),h=0;h<c;h++)p[h]=arguments[h];var y=ja(p,t.registered);return r.push(y),Aa(t,y,!1),t.key+"-"+y.name},i=function(){for(var c=arguments.length,p=new Array(c),h=0;h<c;h++)p[h]=arguments[h];return v1(t.registered,o,y1(p))},l={css:o,cx:i,theme:U.exports.useContext(a0)},s=e.children(l);return n=!0,U.exports.createElement(U.exports.Fragment,null,U.exports.createElement(g1,{cache:t,serializedArr:r}),s)});function $s(){return $s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$s.apply(this,arguments)}function w1(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ls(e,t)}function Ls(e,t){return Ls=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Ls(e,t)}function x1(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Ds=new Map,Co=new WeakMap,Cc=0,S1=void 0;function k1(e){return e?(Co.has(e)||(Cc+=1,Co.set(e,Cc.toString())),Co.get(e)):"0"}function E1(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?k1(e.root):e[t])}).toString()}function C1(e){var t=E1(e),n=Ds.get(t);if(!n){var r=new Map,o,i=new IntersectionObserver(function(l){l.forEach(function(s){var a,c=s.isIntersecting&&o.some(function(p){return s.intersectionRatio>=p});e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(function(p){p(c,s)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Ds.set(t,n)}return n}function c0(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=S1),typeof window.IntersectionObserver>"u"&&r!==void 0){var o=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=C1(n),l=i.id,s=i.observer,a=i.elements,c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),s.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(a.delete(e),s.unobserve(e)),a.size===0&&(s.disconnect(),Ds.delete(l))}}var _1=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function _c(e){return typeof e.children!="function"}var zc=function(e){w1(t,e);function t(r){var o;return o=e.call(this,r)||this,o.node=null,o._unobserveCb=null,o.handleNode=function(i){o.node&&(o.unobserve(),!i&&!o.props.triggerOnce&&!o.props.skip&&o.setState({inView:!!o.props.initialInView,entry:void 0})),o.node=i||null,o.observeNode()},o.handleChange=function(i,l){i&&o.props.triggerOnce&&o.unobserve(),_c(o.props)||o.setState({inView:i,entry:l}),o.props.onChange&&o.props.onChange(i,l)},o.state={inView:!!r.initialInView,entry:void 0},o}var n=t.prototype;return n.componentDidUpdate=function(o){(o.rootMargin!==this.props.rootMargin||o.root!==this.props.root||o.threshold!==this.props.threshold||o.skip!==this.props.skip||o.trackVisibility!==this.props.trackVisibility||o.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var o=this.props,i=o.threshold,l=o.root,s=o.rootMargin,a=o.trackVisibility,c=o.delay,p=o.fallbackInView;this._unobserveCb=c0(this.node,this.handleChange,{threshold:i,root:l,rootMargin:s,trackVisibility:a,delay:c},p)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!_c(this.props)){var o=this.state,i=o.inView,l=o.entry;return this.props.children({inView:i,entry:l,ref:this.handleNode})}var s=this.props,a=s.children,c=s.as,p=x1(s,_1);return U.exports.createElement(c||"div",$s({ref:this.handleNode},p),a)},t}(U.exports.Component);function f0(e){var t,n=e===void 0?{}:e,r=n.threshold,o=n.delay,i=n.trackVisibility,l=n.rootMargin,s=n.root,a=n.triggerOnce,c=n.skip,p=n.initialInView,h=n.fallbackInView,y=n.onChange,S=U.exports.useState(null),x=S[0],g=S[1],A=U.exports.useRef(),f=U.exports.useState({inView:!!p,entry:void 0}),u=f[0],d=f[1];A.current=y,U.exports.useEffect(function(){if(!(c||!x)){var _;return _=c0(x,function(E,H){d({inView:E,entry:H}),A.current&&A.current(E,H),H.isIntersecting&&a&&_&&(_(),_=void 0)},{root:s,rootMargin:l,threshold:r,trackVisibility:i,delay:o},h),function(){_&&_()}}},[Array.isArray(r)?r.toString():r,x,s,l,a,c,i,h,o]);var w=(t=u.entry)==null?void 0:t.target,O=U.exports.useRef();!x&&w&&!a&&!c&&O.current!==w&&(O.current=w,d({inView:!!p,entry:void 0}));var N=[g,u.inView,u.entry];return N.ref=N[0],N.inView=N[1],N.entry=N[2],N}var d0={exports:{}},te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),Wa=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),Hi=Symbol.for("react.strict_mode"),Xi=Symbol.for("react.profiler"),Qi=Symbol.for("react.provider"),Gi=Symbol.for("react.context"),z1=Symbol.for("react.server_context"),Ki=Symbol.for("react.forward_ref"),Zi=Symbol.for("react.suspense"),qi=Symbol.for("react.suspense_list"),Ji=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),T1=Symbol.for("react.offscreen"),p0;p0=Symbol.for("react.module.reference");function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ba:switch(e=e.type,e){case Yi:case Xi:case Hi:case Zi:case qi:return e;default:switch(e=e&&e.$$typeof,e){case z1:case Gi:case Ki:case bi:case Ji:case Qi:return e;default:return t}}case Wa:return t}}}te.ContextConsumer=Gi;te.ContextProvider=Qi;te.Element=Ba;te.ForwardRef=Ki;te.Fragment=Yi;te.Lazy=bi;te.Memo=Ji;te.Portal=Wa;te.Profiler=Xi;te.StrictMode=Hi;te.Suspense=Zi;te.SuspenseList=qi;te.isAsyncMode=function(){return!1};te.isConcurrentMode=function(){return!1};te.isContextConsumer=function(e){return st(e)===Gi};te.isContextProvider=function(e){return st(e)===Qi};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ba};te.isForwardRef=function(e){return st(e)===Ki};te.isFragment=function(e){return st(e)===Yi};te.isLazy=function(e){return st(e)===bi};te.isMemo=function(e){return st(e)===Ji};te.isPortal=function(e){return st(e)===Wa};te.isProfiler=function(e){return st(e)===Xi};te.isStrictMode=function(e){return st(e)===Hi};te.isSuspense=function(e){return st(e)===Zi};te.isSuspenseList=function(e){return st(e)===qi};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yi||e===Xi||e===Hi||e===Zi||e===qi||e===T1||typeof e=="object"&&e!==null&&(e.$$typeof===bi||e.$$typeof===Ji||e.$$typeof===Qi||e.$$typeof===Gi||e.$$typeof===Ki||e.$$typeof===p0||e.getModuleId!==void 0)};te.typeOf=st;(function(e){e.exports=te})(d0);var P1=dh;function we(e,t,n){return Ua.call(t,"css")?q(h1,p1(e,t),n):q(e,t,n)}P`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;P`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;P`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;P`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;P`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;P`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;P`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;P`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var N1=P`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,O1=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,R1=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,M1=P`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$1=P`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ya=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,L1=P`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,D1=P`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,I1=P`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,F1=P`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,V1=P`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,A1=P`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,j1=P`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function U1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Ya,iterationCount:o=1}){return u0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function B1(e){return e==null}function W1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function m0(e,t){return n=>n?e():t()}function di(e){return m0(e,()=>null)}var h0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=Ya,triggerOnce:s=!1,className:a,style:c,childClassName:p,childStyle:h,children:y,onVisibilityChange:S}=e,x=U.exports.useMemo(()=>U1({keyframes:l,duration:o}),[o,l]);return B1(y)?null:W1(y)?we(H1,{...e,animationStyles:x,children:String(y)}):d0.exports.isFragment(y)?we(y0,{...e,animationStyles:x}):we(P1,{children:U.exports.Children.map(y,(g,A)=>{if(!U.exports.isValidElement(g))return null;const f=r+(t?A*o*n:0);switch(g.type){case"ol":case"ul":return we(Ll,{children:({cx:u})=>we(g.type,{...g.props,className:u(a,g.props.className),style:Object.assign({},c,g.props.style),children:we(h0,{...e,children:g.props.children})})});case"li":return we(zc,{threshold:i,triggerOnce:s,onChange:S,children:({inView:u,ref:d})=>we(Ll,{children:({cx:w})=>we(g.type,{...g.props,ref:d,className:w(p,g.props.className),css:di(()=>x)(u),style:Object.assign({},h,g.props.style,{animationDelay:f+"ms"})})})});default:return we(zc,{threshold:i,triggerOnce:s,onChange:S,children:({inView:u,ref:d})=>we("div",{ref:d,className:a,css:di(()=>x)(u),style:Object.assign({},c,{animationDelay:f+"ms"}),children:we(Ll,{children:({cx:w})=>we(g.type,{...g.props,className:w(p,g.props.className),style:Object.assign({},h,g.props.style)})})})})}})})},Y1={display:"inline-block",whiteSpace:"pre"},H1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:s=!1,className:a,style:c,children:p,onVisibilityChange:h}=e,{ref:y,inView:S}=f0({triggerOnce:s,threshold:l,onChange:h});return m0(()=>we("div",{ref:y,className:a,style:Object.assign({},c,Y1),children:p.split("").map((x,g)=>we("span",{css:di(()=>t)(S),style:{animationDelay:o+g*i*r+"ms"},children:x},g))}),()=>we(y0,{...e,children:p}))(n)},y0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:i,children:l,onVisibilityChange:s}=e,{ref:a,inView:c}=f0({triggerOnce:r,threshold:n,onChange:s});return we("div",{ref:a,className:o,css:di(()=>t)(c),style:i,children:l})};P`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;P`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;P`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;P`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;P`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var X1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Q1=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,G1=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,K1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Z1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,q1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,J1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,b1=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,ey=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,ty=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,ny=P`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,ry=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,oy=P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function iy(e,t,n){switch(n){case"bottom-left":return t?Q1:O1;case"bottom-right":return t?G1:R1;case"down":return e?t?Z1:$1:t?K1:M1;case"left":return e?t?J1:L1:t?q1:Ya;case"right":return e?t?ey:I1:t?b1:D1;case"top-left":return t?ty:F1;case"top-right":return t?ny:V1;case"up":return e?t?oy:j1:t?ry:A1;default:return t?X1:N1}}var Is=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=U.exports.useMemo(()=>iy(t,r,n),[t,n,r]);return we(h0,{keyframes:i,...o})};P`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;P`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;P`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;P`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;P`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;P`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;P`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;P`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;P`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;P`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;P`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;P`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const v0=ih(e=>({count:0,increment:t=>e(n=>({count:n.count+t})),decrement:t=>e(n=>({count:n.count-t}))})),ly=e=>{const{toggle:t,toggleTheme:n}=rt.useContext(Jr),{increment:r,decrement:o}=v0(),i=rt.useCallback(()=>r(e.inc),[r]),l=rt.useCallback(()=>o(e.inc),[o]);return Nt("div",{className:"inline-block bg-transparent",children:[Nt("div",{children:[q(Tl,{onClick:i,fontSize:"text-5xl",children:"+"}),q(Tl,{onClick:l,fontSize:"text-5xl",children:"-"})]}),e.toggleButton&&Nt(Tl,{onClick:n,fontSize:"text-3xl",children:[t?"\uB77C\uC774\uD2B8":"\uB2E4\uD06C","\uBAA8\uB4DC \uC804\uD658"]})]})},Dl=e=>q(Is,{delay:300,children:Nt(Ns,{children:[q(Bt,{fontSize:"text-9xl",stroke:!0,children:v0().count}),q(ly,{inc:e.inc,toggleButton:e.toggleButton})]})});Il.createRoot(document.getElementById("root")).render(q(rt.StrictMode,{children:Nt(ph,{children:[q(yh,{}),Nt("div",{className:"absolute top-0 left-0 w-full bg-transparent select-none",children:[q(Is,{delay:300,children:q(Ns,{children:q(kh,{})})}),q(Dl,{inc:1,toggleButton:!0}),q(Dl,{inc:5}),q(Dl,{inc:10}),q(Ns,{children:Nt(Is,{delay:300,children:[q(Bt,{className:"text-2xl sm:text-3xl",children:q("a",{href:"https://github.com/ky0422/ky0422.github.io",children:"GITHUB"})}),q(Bt,{className:"text-2xl sm:text-3xl",children:q("a",{href:"https://ky0422.tistory.com",children:"TISTORY"})})]})})]})]})}));
