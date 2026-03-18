(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const Q of document.querySelectorAll('link[rel="modulepreload"]'))U(Q);new MutationObserver(Q=>{for(const A of Q)if(A.type==="childList")for(const B of A.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&U(B)}).observe(document,{childList:!0,subtree:!0});function h(Q){const A={};return Q.integrity&&(A.integrity=Q.integrity),Q.referrerPolicy&&(A.referrerPolicy=Q.referrerPolicy),Q.crossOrigin==="use-credentials"?A.credentials="include":Q.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function U(Q){if(Q.ep)return;Q.ep=!0;const A=h(Q);fetch(Q.href,A)}})();function js(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}var Lo={exports:{}},vr={},Eo={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es;function Of(){if(Es)return D;Es=1;var w=Symbol.for("react.element"),j=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),ge=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),J=Symbol.iterator;function K(c){return c===null||typeof c!="object"?null:(c=J&&c[J]||c["@@iterator"],typeof c=="function"?c:null)}var Fe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Me=Object.assign,ee={};function q(c,g,I){this.props=c,this.context=g,this.refs=ee,this.updater=I||Fe}q.prototype.isReactComponent={},q.prototype.setState=function(c,g){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,g,"setState")},q.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function qe(){}qe.prototype=q.prototype;function tn(c,g,I){this.props=c,this.context=g,this.refs=ee,this.updater=I||Fe}var Ke=tn.prototype=new qe;Ke.constructor=tn,Me(Ke,q.prototype),Ke.isPureReactComponent=!0;var Se=Array.isArray,Ye=Object.prototype.hasOwnProperty,Ce={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function G(c,g,I){var F,W={},Z=null,ne=null;if(g!=null)for(F in g.ref!==void 0&&(ne=g.ref),g.key!==void 0&&(Z=""+g.key),g)Ye.call(g,F)&&!C.hasOwnProperty(F)&&(W[F]=g[F]);var Y=arguments.length-2;if(Y===1)W.children=I;else if(1<Y){for(var oe=Array(Y),Xe=0;Xe<Y;Xe++)oe[Xe]=arguments[Xe+2];W.children=oe}if(c&&c.defaultProps)for(F in Y=c.defaultProps,Y)W[F]===void 0&&(W[F]=Y[F]);return{$$typeof:w,type:c,key:Z,ref:ne,props:W,_owner:Ce.current}}function pe(c,g){return{$$typeof:w,type:c.type,key:g,ref:c.ref,props:c.props,_owner:c._owner}}function ze(c){return typeof c=="object"&&c!==null&&c.$$typeof===w}function Be(c){var g={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(I){return g[I]})}var ye=/\/+/g;function Ne(c,g){return typeof c=="object"&&c!==null&&c.key!=null?Be(""+c.key):g.toString(36)}function Qe(c,g,I,F,W){var Z=typeof c;(Z==="undefined"||Z==="boolean")&&(c=null);var ne=!1;if(c===null)ne=!0;else switch(Z){case"string":case"number":ne=!0;break;case"object":switch(c.$$typeof){case w:case j:ne=!0}}if(ne)return ne=c,W=W(ne),c=F===""?"."+Ne(ne,0):F,Se(W)?(I="",c!=null&&(I=c.replace(ye,"$&/")+"/"),Qe(W,g,I,"",function(Xe){return Xe})):W!=null&&(ze(W)&&(W=pe(W,I+(!W.key||ne&&ne.key===W.key?"":(""+W.key).replace(ye,"$&/")+"/")+c)),g.push(W)),1;if(ne=0,F=F===""?".":F+":",Se(c))for(var Y=0;Y<c.length;Y++){Z=c[Y];var oe=F+Ne(Z,Y);ne+=Qe(Z,g,I,oe,W)}else if(oe=K(c),typeof oe=="function")for(c=oe.call(c),Y=0;!(Z=c.next()).done;)Z=Z.value,oe=F+Ne(Z,Y++),ne+=Qe(Z,g,I,oe,W);else if(Z==="object")throw g=String(c),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return ne}function Re(c,g,I){if(c==null)return c;var F=[],W=0;return Qe(c,F,"","",function(Z){return g.call(I,Z,W++)}),F}function ke(c){if(c._status===-1){var g=c._result;g=g(),g.then(function(I){(c._status===0||c._status===-1)&&(c._status=1,c._result=I)},function(I){(c._status===0||c._status===-1)&&(c._status=2,c._result=I)}),c._status===-1&&(c._status=0,c._result=g)}if(c._status===1)return c._result.default;throw c._result}var re={current:null},x={transition:null},R={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:x,ReactCurrentOwner:Ce};function L(){throw Error("act(...) is not supported in production builds of React.")}return D.Children={map:Re,forEach:function(c,g,I){Re(c,function(){g.apply(this,arguments)},I)},count:function(c){var g=0;return Re(c,function(){g++}),g},toArray:function(c){return Re(c,function(g){return g})||[]},only:function(c){if(!ze(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},D.Component=q,D.Fragment=h,D.Profiler=Q,D.PureComponent=tn,D.StrictMode=U,D.Suspense=H,D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,D.act=L,D.cloneElement=function(c,g,I){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var F=Me({},c.props),W=c.key,Z=c.ref,ne=c._owner;if(g!=null){if(g.ref!==void 0&&(Z=g.ref,ne=Ce.current),g.key!==void 0&&(W=""+g.key),c.type&&c.type.defaultProps)var Y=c.type.defaultProps;for(oe in g)Ye.call(g,oe)&&!C.hasOwnProperty(oe)&&(F[oe]=g[oe]===void 0&&Y!==void 0?Y[oe]:g[oe])}var oe=arguments.length-2;if(oe===1)F.children=I;else if(1<oe){Y=Array(oe);for(var Xe=0;Xe<oe;Xe++)Y[Xe]=arguments[Xe+2];F.children=Y}return{$$typeof:w,type:c.type,key:W,ref:Z,props:F,_owner:ne}},D.createContext=function(c){return c={$$typeof:B,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:A,_context:c},c.Consumer=c},D.createElement=G,D.createFactory=function(c){var g=G.bind(null,c);return g.type=c,g},D.createRef=function(){return{current:null}},D.forwardRef=function(c){return{$$typeof:b,render:c}},D.isValidElement=ze,D.lazy=function(c){return{$$typeof:ue,_payload:{_status:-1,_result:c},_init:ke}},D.memo=function(c,g){return{$$typeof:ge,type:c,compare:g===void 0?null:g}},D.startTransition=function(c){var g=x.transition;x.transition={};try{c()}finally{x.transition=g}},D.unstable_act=L,D.useCallback=function(c,g){return re.current.useCallback(c,g)},D.useContext=function(c){return re.current.useContext(c)},D.useDebugValue=function(){},D.useDeferredValue=function(c){return re.current.useDeferredValue(c)},D.useEffect=function(c,g){return re.current.useEffect(c,g)},D.useId=function(){return re.current.useId()},D.useImperativeHandle=function(c,g,I){return re.current.useImperativeHandle(c,g,I)},D.useInsertionEffect=function(c,g){return re.current.useInsertionEffect(c,g)},D.useLayoutEffect=function(c,g){return re.current.useLayoutEffect(c,g)},D.useMemo=function(c,g){return re.current.useMemo(c,g)},D.useReducer=function(c,g,I){return re.current.useReducer(c,g,I)},D.useRef=function(c){return re.current.useRef(c)},D.useState=function(c){return re.current.useState(c)},D.useSyncExternalStore=function(c,g,I){return re.current.useSyncExternalStore(c,g,I)},D.useTransition=function(){return re.current.useTransition()},D.version="18.3.1",D}var Ms;function Po(){return Ms||(Ms=1,Eo.exports=Of()),Eo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs;function jf(){if(Cs)return vr;Cs=1;var w=Po(),j=Symbol.for("react.element"),h=Symbol.for("react.fragment"),U=Object.prototype.hasOwnProperty,Q=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function B(b,H,ge){var ue,J={},K=null,Fe=null;ge!==void 0&&(K=""+ge),H.key!==void 0&&(K=""+H.key),H.ref!==void 0&&(Fe=H.ref);for(ue in H)U.call(H,ue)&&!A.hasOwnProperty(ue)&&(J[ue]=H[ue]);if(b&&b.defaultProps)for(ue in H=b.defaultProps,H)J[ue]===void 0&&(J[ue]=H[ue]);return{$$typeof:j,type:b,key:K,ref:Fe,props:J,_owner:Q.current}}return vr.Fragment=h,vr.jsx=B,vr.jsxs=B,vr}var Ns;function If(){return Ns||(Ns=1,Lo.exports=jf()),Lo.exports}var P=If(),de=Po();const Df=js(de);var Ql={},Mo={exports:{}},$e={},Co={exports:{}},No={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qs;function Ff(){return Qs||(Qs=1,(function(w){function j(x,R){var L=x.length;x.push(R);e:for(;0<L;){var c=L-1>>>1,g=x[c];if(0<Q(g,R))x[c]=R,x[L]=g,L=c;else break e}}function h(x){return x.length===0?null:x[0]}function U(x){if(x.length===0)return null;var R=x[0],L=x.pop();if(L!==R){x[0]=L;e:for(var c=0,g=x.length,I=g>>>1;c<I;){var F=2*(c+1)-1,W=x[F],Z=F+1,ne=x[Z];if(0>Q(W,L))Z<g&&0>Q(ne,W)?(x[c]=ne,x[Z]=L,c=Z):(x[c]=W,x[F]=L,c=F);else if(Z<g&&0>Q(ne,L))x[c]=ne,x[Z]=L,c=Z;else break e}}return R}function Q(x,R){var L=x.sortIndex-R.sortIndex;return L!==0?L:x.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var A=performance;w.unstable_now=function(){return A.now()}}else{var B=Date,b=B.now();w.unstable_now=function(){return B.now()-b}}var H=[],ge=[],ue=1,J=null,K=3,Fe=!1,Me=!1,ee=!1,q=typeof setTimeout=="function"?setTimeout:null,qe=typeof clearTimeout=="function"?clearTimeout:null,tn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ke(x){for(var R=h(ge);R!==null;){if(R.callback===null)U(ge);else if(R.startTime<=x)U(ge),R.sortIndex=R.expirationTime,j(H,R);else break;R=h(ge)}}function Se(x){if(ee=!1,Ke(x),!Me)if(h(H)!==null)Me=!0,ke(Ye);else{var R=h(ge);R!==null&&re(Se,R.startTime-x)}}function Ye(x,R){Me=!1,ee&&(ee=!1,qe(G),G=-1),Fe=!0;var L=K;try{for(Ke(R),J=h(H);J!==null&&(!(J.expirationTime>R)||x&&!Be());){var c=J.callback;if(typeof c=="function"){J.callback=null,K=J.priorityLevel;var g=c(J.expirationTime<=R);R=w.unstable_now(),typeof g=="function"?J.callback=g:J===h(H)&&U(H),Ke(R)}else U(H);J=h(H)}if(J!==null)var I=!0;else{var F=h(ge);F!==null&&re(Se,F.startTime-R),I=!1}return I}finally{J=null,K=L,Fe=!1}}var Ce=!1,C=null,G=-1,pe=5,ze=-1;function Be(){return!(w.unstable_now()-ze<pe)}function ye(){if(C!==null){var x=w.unstable_now();ze=x;var R=!0;try{R=C(!0,x)}finally{R?Ne():(Ce=!1,C=null)}}else Ce=!1}var Ne;if(typeof tn=="function")Ne=function(){tn(ye)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Re=Qe.port2;Qe.port1.onmessage=ye,Ne=function(){Re.postMessage(null)}}else Ne=function(){q(ye,0)};function ke(x){C=x,Ce||(Ce=!0,Ne())}function re(x,R){G=q(function(){x(w.unstable_now())},R)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(x){x.callback=null},w.unstable_continueExecution=function(){Me||Fe||(Me=!0,ke(Ye))},w.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<x?Math.floor(1e3/x):5},w.unstable_getCurrentPriorityLevel=function(){return K},w.unstable_getFirstCallbackNode=function(){return h(H)},w.unstable_next=function(x){switch(K){case 1:case 2:case 3:var R=3;break;default:R=K}var L=K;K=R;try{return x()}finally{K=L}},w.unstable_pauseExecution=function(){},w.unstable_requestPaint=function(){},w.unstable_runWithPriority=function(x,R){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=K;K=x;try{return R()}finally{K=L}},w.unstable_scheduleCallback=function(x,R,L){var c=w.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?c+L:c):L=c,x){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=L+g,x={id:ue++,callback:R,priorityLevel:x,startTime:L,expirationTime:g,sortIndex:-1},L>c?(x.sortIndex=L,j(ge,x),h(H)===null&&x===h(ge)&&(ee?(qe(G),G=-1):ee=!0,re(Se,L-c))):(x.sortIndex=g,j(H,x),Me||Fe||(Me=!0,ke(Ye))),x},w.unstable_shouldYield=Be,w.unstable_wrapCallback=function(x){var R=K;return function(){var L=K;K=R;try{return x.apply(this,arguments)}finally{K=L}}}})(No)),No}var Ps;function Uf(){return Ps||(Ps=1,Co.exports=Ff()),Co.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ts;function Af(){if(Ts)return $e;Ts=1;var w=Po(),j=Uf();function h(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U=new Set,Q={};function A(e,n){B(e,n),B(e+"Capture",n)}function B(e,n){for(Q[e]=n,e=0;e<n.length;e++)U.add(n[e])}var b=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),H=Object.prototype.hasOwnProperty,ge=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ue={},J={};function K(e){return H.call(J,e)?!0:H.call(ue,e)?!1:ge.test(e)?J[e]=!0:(ue[e]=!0,!1)}function Fe(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Me(e,n,t,r){if(n===null||typeof n>"u"||Fe(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ee(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new ee(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];q[n]=new ee(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new ee(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new ee(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new ee(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new ee(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new ee(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new ee(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var qe=/[\-:]([a-z])/g;function tn(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(qe,tn);q[n]=new ee(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(qe,tn);q[n]=new ee(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(qe,tn);q[n]=new ee(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new ee(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ke(e,n,t,r){var l=q.hasOwnProperty(n)?q[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Me(n,t,l,r)&&(t=null),r||l===null?K(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Se=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ye=Symbol.for("react.element"),Ce=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),ze=Symbol.for("react.provider"),Be=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),x=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,c;function g(e){if(c===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);c=n&&n[1]||""}return`
`+c+e}var I=!1;function F(e,n){if(!e||I)return"";I=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var r=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){r=p}e.call(n.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{I=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?g(e):""}function W(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1),e;case 11:return e=F(e.type.render,!1),e;case 1:return e=F(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case Ce:return"Portal";case pe:return"Profiler";case G:return"StrictMode";case Ne:return"Suspense";case Qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Be:return(e.displayName||"Context")+".Consumer";case ze:return(e._context.displayName||"Context")+".Provider";case ye:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return n=e.displayName||null,n!==null?n:Z(e.type)||"Memo";case ke:n=e._payload,e=e._init;try{return Z(e(n))}catch{}}return null}function ne(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(n);case 8:return n===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Y(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xe(e){var n=oe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function kr(e){e._valueTracker||(e._valueTracker=Xe(e))}function To(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=oe(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pl(e,n){var t=n.checked;return L({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function zo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Y(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ro(e,n){n=n.checked,n!=null&&Ke(e,"checked",n,!1)}function Tl(e,n){Ro(e,n);var t=Y(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?zl(e,n.type,t):n.hasOwnProperty("defaultValue")&&zl(e,n.type,Y(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Oo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function zl(e,n,t){(n!=="number"||wr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Rt=Array.isArray;function ut(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Y(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Rl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(h(91));return L({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(h(92));if(Rt(t)){if(1<t.length)throw Error(h(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Y(t)}}function Io(e,n){var t=Y(n.value),r=Y(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Do(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Fo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Fo(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Uo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ot(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ds=["Webkit","ms","Moz","O"];Object.keys(jt).forEach(function(e){Ds.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jt[n]=jt[e]})});function Ao(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||jt.hasOwnProperty(e)&&jt[e]?(""+n).trim():n+"px"}function Bo(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Ao(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Fs=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,n){if(n){if(Fs[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(h(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(h(61))}if(n.style!=null&&typeof n.style!="object")throw Error(h(62))}}function Il(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dl=null;function Fl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,st=null,ct=null;function Ho(e){if(e=rr(e)){if(typeof Ul!="function")throw Error(h(280));var n=e.stateNode;n&&(n=Vr(n),Ul(e.stateNode,e.type,n))}}function Go(e){st?ct?ct.push(e):ct=[e]:st=e}function Vo(){if(st){var e=st,n=ct;if(ct=st=null,Ho(e),n)for(e=0;e<n.length;e++)Ho(n[e])}}function Wo(e,n){return e(n)}function Zo(){}var Al=!1;function $o(e,n,t){if(Al)return e(n,t);Al=!0;try{return Wo(e,n,t)}finally{Al=!1,(st!==null||ct!==null)&&(Zo(),Vo())}}function It(e,n){var t=e.stateNode;if(t===null)return null;var r=Vr(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(h(231,n,typeof t));return t}var Bl=!1;if(b)try{var Dt={};Object.defineProperty(Dt,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",Dt,Dt),window.removeEventListener("test",Dt,Dt)}catch{Bl=!1}function Us(e,n,t,r,l,i,o,a,u){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(y){this.onError(y)}}var Ft=!1,Sr=null,_r=!1,Hl=null,As={onError:function(e){Ft=!0,Sr=e}};function Bs(e,n,t,r,l,i,o,a,u){Ft=!1,Sr=null,Us.apply(As,arguments)}function Hs(e,n,t,r,l,i,o,a,u){if(Bs.apply(this,arguments),Ft){if(Ft){var p=Sr;Ft=!1,Sr=null}else throw Error(h(198));_r||(_r=!0,Hl=p)}}function Kn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function qo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ko(e){if(Kn(e)!==e)throw Error(h(188))}function Gs(e){var n=e.alternate;if(!n){if(n=Kn(e),n===null)throw Error(h(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Ko(l),e;if(i===r)return Ko(l),n;i=i.sibling}throw Error(h(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(h(189))}}if(t.alternate!==r)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?e:n}function Yo(e){return e=Gs(e),e!==null?Xo(e):null}function Xo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Xo(e);if(n!==null)return n;e=e.sibling}return null}var Jo=j.unstable_scheduleCallback,bo=j.unstable_cancelCallback,Vs=j.unstable_shouldYield,Ws=j.unstable_requestPaint,he=j.unstable_now,Zs=j.unstable_getCurrentPriorityLevel,Gl=j.unstable_ImmediatePriority,ea=j.unstable_UserBlockingPriority,Lr=j.unstable_NormalPriority,$s=j.unstable_LowPriority,na=j.unstable_IdlePriority,Er=null,yn=null;function qs(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Er,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Xs,Ks=Math.log,Ys=Math.LN2;function Xs(e){return e>>>=0,e===0?32:31-(Ks(e)/Ys|0)|0}var Mr=64,Cr=4194304;function Ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=Ut(a):(i&=o,i!==0&&(r=Ut(i)))}else o=t&~l,o!==0?r=Ut(o):i!==0&&(r=Ut(i));if(r===0)return 0;if(n!==0&&n!==r&&(n&l)===0&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-cn(n),l=1<<t,r|=e[t],n&=~l;return r}function Js(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bs(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-cn(i),a=1<<o,u=l[o];u===-1?((a&t)===0||(a&r)!==0)&&(l[o]=Js(a,n)):u<=n&&(e.expiredLanes|=a),i&=~a}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ta(){var e=Mr;return Mr<<=1,(Mr&4194240)===0&&(Mr=64),e}function Wl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function At(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-cn(n),e[n]=t}function ec(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-cn(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Zl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-cn(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var X=0;function ra(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var la,$l,ia,oa,aa,ql=!1,Qr=[],Pn=null,Tn=null,zn=null,Bt=new Map,Ht=new Map,Rn=[],nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ua(e,n){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Bt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(n.pointerId)}}function Gt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=rr(n),n!==null&&$l(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function tc(e,n,t,r,l){switch(n){case"focusin":return Pn=Gt(Pn,e,n,t,r,l),!0;case"dragenter":return Tn=Gt(Tn,e,n,t,r,l),!0;case"mouseover":return zn=Gt(zn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Bt.set(i,Gt(Bt.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Ht.set(i,Gt(Ht.get(i)||null,e,n,t,r,l)),!0}return!1}function sa(e){var n=Yn(e.target);if(n!==null){var t=Kn(n);if(t!==null){if(n=t.tag,n===13){if(n=qo(t),n!==null){e.blockedOn=n,aa(e.priority,function(){ia(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Yl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Dl=r,t.target.dispatchEvent(r),Dl=null}else return n=rr(t),n!==null&&$l(n),e.blockedOn=t,!1;n.shift()}return!0}function ca(e,n,t){Pr(e)&&t.delete(n)}function rc(){ql=!1,Pn!==null&&Pr(Pn)&&(Pn=null),Tn!==null&&Pr(Tn)&&(Tn=null),zn!==null&&Pr(zn)&&(zn=null),Bt.forEach(ca),Ht.forEach(ca)}function Vt(e,n){e.blockedOn===n&&(e.blockedOn=null,ql||(ql=!0,j.unstable_scheduleCallback(j.unstable_NormalPriority,rc)))}function Wt(e){function n(l){return Vt(l,e)}if(0<Qr.length){Vt(Qr[0],e);for(var t=1;t<Qr.length;t++){var r=Qr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&Vt(Pn,e),Tn!==null&&Vt(Tn,e),zn!==null&&Vt(zn,e),Bt.forEach(n),Ht.forEach(n),t=0;t<Rn.length;t++)r=Rn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rn.length&&(t=Rn[0],t.blockedOn===null);)sa(t),t.blockedOn===null&&Rn.shift()}var ft=Se.ReactCurrentBatchConfig,Tr=!0;function lc(e,n,t,r){var l=X,i=ft.transition;ft.transition=null;try{X=1,Kl(e,n,t,r)}finally{X=l,ft.transition=i}}function ic(e,n,t,r){var l=X,i=ft.transition;ft.transition=null;try{X=4,Kl(e,n,t,r)}finally{X=l,ft.transition=i}}function Kl(e,n,t,r){if(Tr){var l=Yl(e,n,t,r);if(l===null)pi(e,n,r,zr,t),ua(e,r);else if(tc(l,e,n,t,r))r.stopPropagation();else if(ua(e,r),n&4&&-1<nc.indexOf(e)){for(;l!==null;){var i=rr(l);if(i!==null&&la(i),i=Yl(e,n,t,r),i===null&&pi(e,n,r,zr,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else pi(e,n,r,null,t)}}var zr=null;function Yl(e,n,t,r){if(zr=null,e=Fl(r),e=Yn(e),e!==null)if(n=Kn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=qo(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return zr=e,null}function fa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zs()){case Gl:return 1;case ea:return 4;case Lr:case $s:return 16;case na:return 536870912;default:return 16}default:return 16}}var On=null,Xl=null,Rr=null;function da(){if(Rr)return Rr;var e,n=Xl,t=n.length,r,l="value"in On?On.value:On.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return Rr=l.slice(e,1<r?1-r:void 0)}function Or(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function pa(){return!1}function Je(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jr:pa,this.isPropagationStopped=pa,this}return L(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),n}var dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=Je(dt),Zt=L({},dt,{view:0,detail:0}),oc=Je(Zt),bl,ei,$t,Ir=L({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$t&&($t&&e.type==="mousemove"?(bl=e.screenX-$t.screenX,ei=e.screenY-$t.screenY):ei=bl=0,$t=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),ha=Je(Ir),ac=L({},Ir,{dataTransfer:0}),uc=Je(ac),sc=L({},Zt,{relatedTarget:0}),ni=Je(sc),cc=L({},dt,{animationName:0,elapsedTime:0,pseudoElement:0}),fc=Je(cc),dc=L({},dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pc=Je(dc),hc=L({},dt,{data:0}),ma=Je(hc),mc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yc[e])?!!n[e]:!1}function ti(){return vc}var kc=L({},Zt,{key:function(e){if(e.key){var n=mc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wc=Je(kc),xc=L({},Ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ga=Je(xc),Sc=L({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),_c=Je(Sc),Lc=L({},dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ec=Je(Lc),Mc=L({},Ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cc=Je(Mc),Nc=[9,13,27,32],ri=b&&"CompositionEvent"in window,qt=null;b&&"documentMode"in document&&(qt=document.documentMode);var Qc=b&&"TextEvent"in window&&!qt,ya=b&&(!ri||qt&&8<qt&&11>=qt),va=" ",ka=!1;function wa(e,n){switch(e){case"keyup":return Nc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pt=!1;function Pc(e,n){switch(e){case"compositionend":return xa(n);case"keypress":return n.which!==32?null:(ka=!0,va);case"textInput":return e=n.data,e===va&&ka?null:e;default:return null}}function Tc(e,n){if(pt)return e==="compositionend"||!ri&&wa(e,n)?(e=da(),Rr=Xl=On=null,pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ya&&n.locale!=="ko"?null:n.data;default:return null}}var zc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zc[e.type]:n==="textarea"}function _a(e,n,t,r){Go(r),n=Br(n,"onChange"),0<n.length&&(t=new Jl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Kt=null,Yt=null;function Rc(e){Ba(e,0)}function Dr(e){var n=vt(e);if(To(n))return e}function Oc(e,n){if(e==="change")return n}var La=!1;if(b){var li;if(b){var ii="oninput"in document;if(!ii){var Ea=document.createElement("div");Ea.setAttribute("oninput","return;"),ii=typeof Ea.oninput=="function"}li=ii}else li=!1;La=li&&(!document.documentMode||9<document.documentMode)}function Ma(){Kt&&(Kt.detachEvent("onpropertychange",Ca),Yt=Kt=null)}function Ca(e){if(e.propertyName==="value"&&Dr(Yt)){var n=[];_a(n,Yt,e,Fl(e)),$o(Rc,n)}}function jc(e,n,t){e==="focusin"?(Ma(),Kt=n,Yt=t,Kt.attachEvent("onpropertychange",Ca)):e==="focusout"&&Ma()}function Ic(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dr(Yt)}function Dc(e,n){if(e==="click")return Dr(n)}function Fc(e,n){if(e==="input"||e==="change")return Dr(n)}function Uc(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:Uc;function Xt(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!H.call(n,l)||!fn(e[l],n[l]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qa(e,n){var t=Na(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Na(t)}}function Pa(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Pa(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ta(){for(var e=window,n=wr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=wr(e.document)}return n}function oi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ac(e){var n=Ta(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Pa(t.ownerDocument.documentElement,t)){if(r!==null&&oi(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Qa(t,i);var o=Qa(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bc=b&&"documentMode"in document&&11>=document.documentMode,ht=null,ai=null,Jt=null,ui=!1;function za(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ui||ht==null||ht!==wr(r)||(r=ht,"selectionStart"in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jt&&Xt(Jt,r)||(Jt=r,r=Br(ai,"onSelect"),0<r.length&&(n=new Jl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=ht)))}function Fr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var mt={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},si={},Ra={};b&&(Ra=document.createElement("div").style,"AnimationEvent"in window||(delete mt.animationend.animation,delete mt.animationiteration.animation,delete mt.animationstart.animation),"TransitionEvent"in window||delete mt.transitionend.transition);function Ur(e){if(si[e])return si[e];if(!mt[e])return e;var n=mt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ra)return si[e]=n[t];return e}var Oa=Ur("animationend"),ja=Ur("animationiteration"),Ia=Ur("animationstart"),Da=Ur("transitionend"),Fa=new Map,Ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jn(e,n){Fa.set(e,n),A(n,[e])}for(var ci=0;ci<Ua.length;ci++){var fi=Ua[ci],Hc=fi.toLowerCase(),Gc=fi[0].toUpperCase()+fi.slice(1);jn(Hc,"on"+Gc)}jn(Oa,"onAnimationEnd"),jn(ja,"onAnimationIteration"),jn(Ia,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(Da,"onTransitionEnd"),B("onMouseEnter",["mouseout","mouseover"]),B("onMouseLeave",["mouseout","mouseover"]),B("onPointerEnter",["pointerout","pointerover"]),B("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vc=new Set("cancel close invalid load scroll toggle".split(" ").concat(bt));function Aa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Hs(r,n,void 0,e),e.currentTarget=null}function Ba(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,p=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;Aa(l,a,p),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,p=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;Aa(l,a,p),i=u}}}if(_r)throw e=Hl,_r=!1,Hl=null,e}function le(e,n){var t=n[ki];t===void 0&&(t=n[ki]=new Set);var r=e+"__bubble";t.has(r)||(Ha(n,e,2,!1),t.add(r))}function di(e,n,t){var r=0;n&&(r|=4),Ha(t,e,r,n)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Ar]){e[Ar]=!0,U.forEach(function(t){t!=="selectionchange"&&(Vc.has(t)||di(t,!1,e),di(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ar]||(n[Ar]=!0,di("selectionchange",!1,n))}}function Ha(e,n,t,r){switch(fa(n)){case 1:var l=lc;break;case 4:l=ic;break;default:l=Kl}t=l.bind(null,n,t,e),l=void 0,!Bl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function pi(e,n,t,r,l){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Yn(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}$o(function(){var p=i,y=Fl(t),v=[];e:{var m=Fa.get(e);if(m!==void 0){var S=Jl,E=e;switch(e){case"keypress":if(Or(t)===0)break e;case"keydown":case"keyup":S=wc;break;case"focusin":E="focus",S=ni;break;case"focusout":E="blur",S=ni;break;case"beforeblur":case"afterblur":S=ni;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=_c;break;case Oa:case ja:case Ia:S=fc;break;case Da:S=Ec;break;case"scroll":S=oc;break;case"wheel":S=Cc;break;case"copy":case"cut":case"paste":S=pc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ga}var M=(n&4)!==0,me=!M&&e==="scroll",f=M?m!==null?m+"Capture":null:m;M=[];for(var s=p,d;s!==null;){d=s;var k=d.stateNode;if(d.tag===5&&k!==null&&(d=k,f!==null&&(k=It(s,f),k!=null&&M.push(nr(s,k,d)))),me)break;s=s.return}0<M.length&&(m=new S(m,E,null,t,y),v.push({event:m,listeners:M}))}}if((n&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&t!==Dl&&(E=t.relatedTarget||t.fromElement)&&(Yn(E)||E[Sn]))break e;if((S||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,S?(E=t.relatedTarget||t.toElement,S=p,E=E?Yn(E):null,E!==null&&(me=Kn(E),E!==me||E.tag!==5&&E.tag!==6)&&(E=null)):(S=null,E=p),S!==E)){if(M=ha,k="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(M=ga,k="onPointerLeave",f="onPointerEnter",s="pointer"),me=S==null?m:vt(S),d=E==null?m:vt(E),m=new M(k,s+"leave",S,t,y),m.target=me,m.relatedTarget=d,k=null,Yn(y)===p&&(M=new M(f,s+"enter",E,t,y),M.target=d,M.relatedTarget=me,k=M),me=k,S&&E)n:{for(M=S,f=E,s=0,d=M;d;d=gt(d))s++;for(d=0,k=f;k;k=gt(k))d++;for(;0<s-d;)M=gt(M),s--;for(;0<d-s;)f=gt(f),d--;for(;s--;){if(M===f||f!==null&&M===f.alternate)break n;M=gt(M),f=gt(f)}M=null}else M=null;S!==null&&Ga(v,m,S,M,!1),E!==null&&me!==null&&Ga(v,me,E,M,!0)}}e:{if(m=p?vt(p):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var N=Oc;else if(Sa(m))if(La)N=Fc;else{N=Ic;var T=jc}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Dc);if(N&&(N=N(e,p))){_a(v,N,t,y);break e}T&&T(e,m,p),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&zl(m,"number",m.value)}switch(T=p?vt(p):window,e){case"focusin":(Sa(T)||T.contentEditable==="true")&&(ht=T,ai=p,Jt=null);break;case"focusout":Jt=ai=ht=null;break;case"mousedown":ui=!0;break;case"contextmenu":case"mouseup":case"dragend":ui=!1,za(v,t,y);break;case"selectionchange":if(Bc)break;case"keydown":case"keyup":za(v,t,y)}var z;if(ri)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else pt?wa(e,t)&&(O="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(O="onCompositionStart");O&&(ya&&t.locale!=="ko"&&(pt||O!=="onCompositionStart"?O==="onCompositionEnd"&&pt&&(z=da()):(On=y,Xl="value"in On?On.value:On.textContent,pt=!0)),T=Br(p,O),0<T.length&&(O=new ma(O,e,null,t,y),v.push({event:O,listeners:T}),z?O.data=z:(z=xa(t),z!==null&&(O.data=z)))),(z=Qc?Pc(e,t):Tc(e,t))&&(p=Br(p,"onBeforeInput"),0<p.length&&(y=new ma("onBeforeInput","beforeinput",null,t,y),v.push({event:y,listeners:p}),y.data=z))}Ba(v,n)})}function nr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Br(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=It(e,t),i!=null&&r.unshift(nr(e,i,l)),i=It(e,n),i!=null&&r.push(nr(e,i,l))),e=e.return}return r}function gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ga(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,p=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&p!==null&&(a=p,l?(u=It(t,i),u!=null&&o.unshift(nr(t,u,a))):l||(u=It(t,i),u!=null&&o.push(nr(t,u,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Wc=/\r\n?/g,Zc=/\u0000|\uFFFD/g;function Va(e){return(typeof e=="string"?e:""+e).replace(Wc,`
`).replace(Zc,"")}function Hr(e,n,t){if(n=Va(n),Va(e)!==n&&t)throw Error(h(425))}function Gr(){}var hi=null,mi=null;function gi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yi=typeof setTimeout=="function"?setTimeout:void 0,$c=typeof clearTimeout=="function"?clearTimeout:void 0,Wa=typeof Promise=="function"?Promise:void 0,qc=typeof queueMicrotask=="function"?queueMicrotask:typeof Wa<"u"?function(e){return Wa.resolve(null).then(e).catch(Kc)}:yi;function Kc(e){setTimeout(function(){throw e})}function vi(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),Wt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);Wt(n)}function In(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Za(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var yt=Math.random().toString(36).slice(2),vn="__reactFiber$"+yt,tr="__reactProps$"+yt,Sn="__reactContainer$"+yt,ki="__reactEvents$"+yt,Yc="__reactListeners$"+yt,Xc="__reactHandles$"+yt;function Yn(e){var n=e[vn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Sn]||t[vn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Za(e);e!==null;){if(t=e[vn])return t;e=Za(e)}return n}e=t,t=e.parentNode}return null}function rr(e){return e=e[vn]||e[Sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Vr(e){return e[tr]||null}var wi=[],kt=-1;function Dn(e){return{current:e}}function ie(e){0>kt||(e.current=wi[kt],wi[kt]=null,kt--)}function te(e,n){kt++,wi[kt]=e.current,e.current=n}var Fn={},Oe=Dn(Fn),He=Dn(!1),Xn=Fn;function wt(e,n){var t=e.type.contextTypes;if(!t)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ge(e){return e=e.childContextTypes,e!=null}function Wr(){ie(He),ie(Oe)}function $a(e,n,t){if(Oe.current!==Fn)throw Error(h(168));te(Oe,n),te(He,t)}function qa(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(h(108,ne(e)||"Unknown",l));return L({},t,r)}function Zr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,Xn=Oe.current,te(Oe,e),te(He,He.current),!0}function Ka(e,n,t){var r=e.stateNode;if(!r)throw Error(h(169));t?(e=qa(e,n,Xn),r.__reactInternalMemoizedMergedChildContext=e,ie(He),ie(Oe),te(Oe,e)):ie(He),te(He,t)}var _n=null,$r=!1,xi=!1;function Ya(e){_n===null?_n=[e]:_n.push(e)}function Jc(e){$r=!0,Ya(e)}function Un(){if(!xi&&_n!==null){xi=!0;var e=0,n=X;try{var t=_n;for(X=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}_n=null,$r=!1}catch(l){throw _n!==null&&(_n=_n.slice(e+1)),Jo(Gl,Un),l}finally{X=n,xi=!1}}return null}var xt=[],St=0,qr=null,Kr=0,rn=[],ln=0,Jn=null,Ln=1,En="";function bn(e,n){xt[St++]=Kr,xt[St++]=qr,qr=e,Kr=n}function Xa(e,n,t){rn[ln++]=Ln,rn[ln++]=En,rn[ln++]=Jn,Jn=e;var r=Ln;e=En;var l=32-cn(r)-1;r&=~(1<<l),t+=1;var i=32-cn(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ln=1<<32-cn(n)+l|t<<l|r,En=i+e}else Ln=1<<i|t<<l|r,En=e}function Si(e){e.return!==null&&(bn(e,1),Xa(e,1,0))}function _i(e){for(;e===qr;)qr=xt[--St],xt[St]=null,Kr=xt[--St],xt[St]=null;for(;e===Jn;)Jn=rn[--ln],rn[ln]=null,En=rn[--ln],rn[ln]=null,Ln=rn[--ln],rn[ln]=null}var be=null,en=null,ae=!1,dn=null;function Ja(e,n){var t=sn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ba(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,be=e,en=In(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,be=e,en=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Jn!==null?{id:Ln,overflow:En}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=sn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,be=e,en=null,!0):!1;default:return!1}}function Li(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ei(e){if(ae){var n=en;if(n){var t=n;if(!ba(e,n)){if(Li(e))throw Error(h(418));n=In(t.nextSibling);var r=be;n&&ba(e,n)?Ja(r,t):(e.flags=e.flags&-4097|2,ae=!1,be=e)}}else{if(Li(e))throw Error(h(418));e.flags=e.flags&-4097|2,ae=!1,be=e}}}function eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Yr(e){if(e!==be)return!1;if(!ae)return eu(e),ae=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gi(e.type,e.memoizedProps)),n&&(n=en)){if(Li(e))throw nu(),Error(h(418));for(;n;)Ja(e,n),n=In(n.nextSibling)}if(eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){en=In(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}en=null}}else en=be?In(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=en;e;)e=In(e.nextSibling)}function _t(){en=be=null,ae=!1}function Mi(e){dn===null?dn=[e]:dn.push(e)}var bc=Se.ReactCurrentBatchConfig;function lr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var r=t.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,e))}return e}function Xr(e,n){throw e=Object.prototype.toString.call(n),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function tu(e){var n=e._init;return n(e._payload)}function ru(e){function n(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function t(f,s){if(!e)return null;for(;s!==null;)n(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function l(f,s){return f=$n(f,s),f.index=0,f.sibling=null,f}function i(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,s,d,k){return s===null||s.tag!==6?(s=vo(d,f.mode,k),s.return=f,s):(s=l(s,d),s.return=f,s)}function u(f,s,d,k){var N=d.type;return N===C?y(f,s,d.props.children,k,d.key):s!==null&&(s.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ke&&tu(N)===s.type)?(k=l(s,d.props),k.ref=lr(f,s,d),k.return=f,k):(k=xl(d.type,d.key,d.props,null,f.mode,k),k.ref=lr(f,s,d),k.return=f,k)}function p(f,s,d,k){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=ko(d,f.mode,k),s.return=f,s):(s=l(s,d.children||[]),s.return=f,s)}function y(f,s,d,k,N){return s===null||s.tag!==7?(s=at(d,f.mode,k,N),s.return=f,s):(s=l(s,d),s.return=f,s)}function v(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=vo(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Ye:return d=xl(s.type,s.key,s.props,null,f.mode,d),d.ref=lr(f,null,s),d.return=f,d;case Ce:return s=ko(s,f.mode,d),s.return=f,s;case ke:var k=s._init;return v(f,k(s._payload),d)}if(Rt(s)||R(s))return s=at(s,f.mode,d,null),s.return=f,s;Xr(f,s)}return null}function m(f,s,d,k){var N=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return N!==null?null:a(f,s,""+d,k);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ye:return d.key===N?u(f,s,d,k):null;case Ce:return d.key===N?p(f,s,d,k):null;case ke:return N=d._init,m(f,s,N(d._payload),k)}if(Rt(d)||R(d))return N!==null?null:y(f,s,d,k,null);Xr(f,d)}return null}function S(f,s,d,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(d)||null,a(s,f,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ye:return f=f.get(k.key===null?d:k.key)||null,u(s,f,k,N);case Ce:return f=f.get(k.key===null?d:k.key)||null,p(s,f,k,N);case ke:var T=k._init;return S(f,s,d,T(k._payload),N)}if(Rt(k)||R(k))return f=f.get(d)||null,y(s,f,k,N,null);Xr(s,k)}return null}function E(f,s,d,k){for(var N=null,T=null,z=s,O=s=0,Ee=null;z!==null&&O<d.length;O++){z.index>O?(Ee=z,z=null):Ee=z.sibling;var $=m(f,z,d[O],k);if($===null){z===null&&(z=Ee);break}e&&z&&$.alternate===null&&n(f,z),s=i($,s,O),T===null?N=$:T.sibling=$,T=$,z=Ee}if(O===d.length)return t(f,z),ae&&bn(f,O),N;if(z===null){for(;O<d.length;O++)z=v(f,d[O],k),z!==null&&(s=i(z,s,O),T===null?N=z:T.sibling=z,T=z);return ae&&bn(f,O),N}for(z=r(f,z);O<d.length;O++)Ee=S(z,f,O,d[O],k),Ee!==null&&(e&&Ee.alternate!==null&&z.delete(Ee.key===null?O:Ee.key),s=i(Ee,s,O),T===null?N=Ee:T.sibling=Ee,T=Ee);return e&&z.forEach(function(qn){return n(f,qn)}),ae&&bn(f,O),N}function M(f,s,d,k){var N=R(d);if(typeof N!="function")throw Error(h(150));if(d=N.call(d),d==null)throw Error(h(151));for(var T=N=null,z=s,O=s=0,Ee=null,$=d.next();z!==null&&!$.done;O++,$=d.next()){z.index>O?(Ee=z,z=null):Ee=z.sibling;var qn=m(f,z,$.value,k);if(qn===null){z===null&&(z=Ee);break}e&&z&&qn.alternate===null&&n(f,z),s=i(qn,s,O),T===null?N=qn:T.sibling=qn,T=qn,z=Ee}if($.done)return t(f,z),ae&&bn(f,O),N;if(z===null){for(;!$.done;O++,$=d.next())$=v(f,$.value,k),$!==null&&(s=i($,s,O),T===null?N=$:T.sibling=$,T=$);return ae&&bn(f,O),N}for(z=r(f,z);!$.done;O++,$=d.next())$=S(z,f,O,$.value,k),$!==null&&(e&&$.alternate!==null&&z.delete($.key===null?O:$.key),s=i($,s,O),T===null?N=$:T.sibling=$,T=$);return e&&z.forEach(function(Rf){return n(f,Rf)}),ae&&bn(f,O),N}function me(f,s,d,k){if(typeof d=="object"&&d!==null&&d.type===C&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Ye:e:{for(var N=d.key,T=s;T!==null;){if(T.key===N){if(N=d.type,N===C){if(T.tag===7){t(f,T.sibling),s=l(T,d.props.children),s.return=f,f=s;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ke&&tu(N)===T.type){t(f,T.sibling),s=l(T,d.props),s.ref=lr(f,T,d),s.return=f,f=s;break e}t(f,T);break}else n(f,T);T=T.sibling}d.type===C?(s=at(d.props.children,f.mode,k,d.key),s.return=f,f=s):(k=xl(d.type,d.key,d.props,null,f.mode,k),k.ref=lr(f,s,d),k.return=f,f=k)}return o(f);case Ce:e:{for(T=d.key;s!==null;){if(s.key===T)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){t(f,s.sibling),s=l(s,d.children||[]),s.return=f,f=s;break e}else{t(f,s);break}else n(f,s);s=s.sibling}s=ko(d,f.mode,k),s.return=f,f=s}return o(f);case ke:return T=d._init,me(f,s,T(d._payload),k)}if(Rt(d))return E(f,s,d,k);if(R(d))return M(f,s,d,k);Xr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(t(f,s.sibling),s=l(s,d),s.return=f,f=s):(t(f,s),s=vo(d,f.mode,k),s.return=f,f=s),o(f)):t(f,s)}return me}var Lt=ru(!0),lu=ru(!1),Jr=Dn(null),br=null,Et=null,Ci=null;function Ni(){Ci=Et=br=null}function Qi(e){var n=Jr.current;ie(Jr),e._currentValue=n}function Pi(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Mt(e,n){br=e,Ci=Et=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Ve=!0),e.firstContext=null)}function on(e){var n=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:n,next:null},Et===null){if(br===null)throw Error(h(308));Et=e,br.dependencies={lanes:0,firstContext:e}}else Et=Et.next=e;return n}var et=null;function Ti(e){et===null?et=[e]:et.push(e)}function iu(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Ti(n)):(t.next=l.next,l.next=t),n.interleaved=t,Mn(e,r)}function Mn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var An=!1;function zi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ou(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Cn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Bn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Mn(e,t)}return l=r.interleaved,l===null?(n.next=n,Ti(r)):(n.next=l.next,l.next=n),r.interleaved=n,Mn(e,t)}function el(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zl(e,t)}}function au(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function nl(e,n,t,r){var l=e.updateQueue;An=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,p=u.next;u.next=null,o===null?i=p:o.next=p,o=u;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==o&&(a===null?y.firstBaseUpdate=p:a.next=p,y.lastBaseUpdate=u))}if(i!==null){var v=l.baseState;o=0,y=p=u=null,a=i;do{var m=a.lane,S=a.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=e,M=a;switch(m=n,S=t,M.tag){case 1:if(E=M.payload,typeof E=="function"){v=E.call(S,v,m);break e}v=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=M.payload,m=typeof E=="function"?E.call(S,v,m):E,m==null)break e;v=L({},v,m);break e;case 2:An=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else S={eventTime:S,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(p=y=S,u=v):y=y.next=S,o|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(y===null&&(u=v),l.baseState=u,l.firstBaseUpdate=p,l.lastBaseUpdate=y,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);rt|=o,e.lanes=o,e.memoizedState=v}}function uu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(h(191,l));l.call(r)}}}var ir={},kn=Dn(ir),or=Dn(ir),ar=Dn(ir);function nt(e){if(e===ir)throw Error(h(174));return e}function Ri(e,n){switch(te(ar,n),te(or,e),te(kn,ir),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ol(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ol(n,e)}ie(kn),te(kn,n)}function Ct(){ie(kn),ie(or),ie(ar)}function su(e){nt(ar.current);var n=nt(kn.current),t=Ol(n,e.type);n!==t&&(te(or,e),te(kn,t))}function Oi(e){or.current===e&&(ie(kn),ie(or))}var se=Dn(0);function tl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ji=[];function Ii(){for(var e=0;e<ji.length;e++)ji[e]._workInProgressVersionPrimary=null;ji.length=0}var rl=Se.ReactCurrentDispatcher,Di=Se.ReactCurrentBatchConfig,tt=0,ce=null,we=null,_e=null,ll=!1,ur=!1,sr=0,ef=0;function je(){throw Error(h(321))}function Fi(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!fn(e[t],n[t]))return!1;return!0}function Ui(e,n,t,r,l,i){if(tt=i,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,rl.current=e===null||e.memoizedState===null?lf:of,e=t(r,l),ur){i=0;do{if(ur=!1,sr=0,25<=i)throw Error(h(301));i+=1,_e=we=null,n.updateQueue=null,rl.current=af,e=t(r,l)}while(ur)}if(rl.current=al,n=we!==null&&we.next!==null,tt=0,_e=we=ce=null,ll=!1,n)throw Error(h(300));return e}function Ai(){var e=sr!==0;return sr=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ce.memoizedState=_e=e:_e=_e.next=e,_e}function an(){if(we===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var n=_e===null?ce.memoizedState:_e.next;if(n!==null)_e=n,we=e;else{if(e===null)throw Error(h(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},_e===null?ce.memoizedState=_e=e:_e=_e.next=e}return _e}function cr(e,n){return typeof n=="function"?n(e):n}function Bi(e){var n=an(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=we,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,p=i;do{var y=p.lane;if((tt&y)===y)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(a=u=v,o=r):u=u.next=v,ce.lanes|=y,rt|=y}p=p.next}while(p!==null&&p!==i);u===null?o=r:u.next=a,fn(r,n.memoizedState)||(Ve=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,ce.lanes|=i,rt|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Hi(e){var n=an(),t=n.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);fn(i,n.memoizedState)||(Ve=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function cu(){}function fu(e,n){var t=ce,r=an(),l=n(),i=!fn(r.memoizedState,l);if(i&&(r.memoizedState=l,Ve=!0),r=r.queue,Gi(hu.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||_e!==null&&_e.memoizedState.tag&1){if(t.flags|=2048,fr(9,pu.bind(null,t,r,l,n),void 0,null),Le===null)throw Error(h(349));(tt&30)!==0||du(t,n,l)}return l}function du(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function pu(e,n,t,r){n.value=t,n.getSnapshot=r,mu(n)&&gu(e)}function hu(e,n,t){return t(function(){mu(n)&&gu(e)})}function mu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!fn(e,t)}catch{return!0}}function gu(e){var n=Mn(e,1);n!==null&&gn(n,e,1,-1)}function yu(e){var n=wn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},n.queue=e,e=e.dispatch=rf.bind(null,ce,e),[n.memoizedState,e]}function fr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function vu(){return an().memoizedState}function il(e,n,t,r){var l=wn();ce.flags|=e,l.memoizedState=fr(1|n,t,void 0,r===void 0?null:r)}function ol(e,n,t,r){var l=an();r=r===void 0?null:r;var i=void 0;if(we!==null){var o=we.memoizedState;if(i=o.destroy,r!==null&&Fi(r,o.deps)){l.memoizedState=fr(n,t,i,r);return}}ce.flags|=e,l.memoizedState=fr(1|n,t,i,r)}function ku(e,n){return il(8390656,8,e,n)}function Gi(e,n){return ol(2048,8,e,n)}function wu(e,n){return ol(4,2,e,n)}function xu(e,n){return ol(4,4,e,n)}function Su(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function _u(e,n,t){return t=t!=null?t.concat([e]):null,ol(4,4,Su.bind(null,n,e),t)}function Vi(){}function Lu(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fi(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Eu(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Fi(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Mu(e,n,t){return(tt&21)===0?(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=t):(fn(t,n)||(t=ta(),ce.lanes|=t,rt|=t,e.baseState=!0),n)}function nf(e,n){var t=X;X=t!==0&&4>t?t:4,e(!0);var r=Di.transition;Di.transition={};try{e(!1),n()}finally{X=t,Di.transition=r}}function Cu(){return an().memoizedState}function tf(e,n,t){var r=Wn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Nu(e))Qu(n,t);else if(t=iu(e,n,t,r),t!==null){var l=Ae();gn(t,e,r,l),Pu(t,n,r)}}function rf(e,n,t){var r=Wn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))Qu(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,fn(a,o)){var u=n.interleaved;u===null?(l.next=l,Ti(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=iu(e,n,l,r),t!==null&&(l=Ae(),gn(t,e,r,l),Pu(t,n,r))}}function Nu(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Qu(e,n){ur=ll=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pu(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zl(e,t)}}var al={readContext:on,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},lf={readContext:on,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:on,useEffect:ku,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,il(4194308,4,Su.bind(null,n,e),t)},useLayoutEffect:function(e,n){return il(4194308,4,e,n)},useInsertionEffect:function(e,n){return il(4,2,e,n)},useMemo:function(e,n){var t=wn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=wn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=tf.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:yu,useDebugValue:Vi,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=yu(!1),n=e[0];return e=nf.bind(null,e[1]),wn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ce,l=wn();if(ae){if(t===void 0)throw Error(h(407));t=t()}else{if(t=n(),Le===null)throw Error(h(349));(tt&30)!==0||du(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,ku(hu.bind(null,r,i,e),[e]),r.flags|=2048,fr(9,pu.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=wn(),n=Le.identifierPrefix;if(ae){var t=En,r=Ln;t=(r&~(1<<32-cn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=sr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ef++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},of={readContext:on,useCallback:Lu,useContext:on,useEffect:Gi,useImperativeHandle:_u,useInsertionEffect:wu,useLayoutEffect:xu,useMemo:Eu,useReducer:Bi,useRef:vu,useState:function(){return Bi(cr)},useDebugValue:Vi,useDeferredValue:function(e){var n=an();return Mu(n,we.memoizedState,e)},useTransition:function(){var e=Bi(cr)[0],n=an().memoizedState;return[e,n]},useMutableSource:cu,useSyncExternalStore:fu,useId:Cu,unstable_isNewReconciler:!1},af={readContext:on,useCallback:Lu,useContext:on,useEffect:Gi,useImperativeHandle:_u,useInsertionEffect:wu,useLayoutEffect:xu,useMemo:Eu,useReducer:Hi,useRef:vu,useState:function(){return Hi(cr)},useDebugValue:Vi,useDeferredValue:function(e){var n=an();return we===null?n.memoizedState=e:Mu(n,we.memoizedState,e)},useTransition:function(){var e=Hi(cr)[0],n=an().memoizedState;return[e,n]},useMutableSource:cu,useSyncExternalStore:fu,useId:Cu,unstable_isNewReconciler:!1};function pn(e,n){if(e&&e.defaultProps){n=L({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Wi(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:L({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ul={isMounted:function(e){return(e=e._reactInternals)?Kn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ae(),l=Wn(e),i=Cn(r,l);i.payload=n,t!=null&&(i.callback=t),n=Bn(e,i,l),n!==null&&(gn(n,e,l,r),el(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ae(),l=Wn(e),i=Cn(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Bn(e,i,l),n!==null&&(gn(n,e,l,r),el(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ae(),r=Wn(e),l=Cn(t,r);l.tag=2,n!=null&&(l.callback=n),n=Bn(e,l,r),n!==null&&(gn(n,e,r,t),el(n,e,r))}};function Tu(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Xt(t,r)||!Xt(l,i):!0}function zu(e,n,t){var r=!1,l=Fn,i=n.contextType;return typeof i=="object"&&i!==null?i=on(i):(l=Ge(n)?Xn:Oe.current,r=n.contextTypes,i=(r=r!=null)?wt(e,l):Fn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ul,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Ru(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ul.enqueueReplaceState(n,n.state,null)}function Zi(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},zi(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=on(i):(i=Ge(n)?Xn:Oe.current,l.context=wt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Wi(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ul.enqueueReplaceState(l,l.state,null),nl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Nt(e,n){try{var t="",r=n;do t+=W(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function $i(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function qi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var uf=typeof WeakMap=="function"?WeakMap:Map;function Ou(e,n,t){t=Cn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){ml||(ml=!0,so=r),qi(e,n)},t}function ju(e,n,t){t=Cn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){qi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){qi(e,n),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Iu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new uf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Sf.bind(null,e,n,t),n.then(e,e))}function Du(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Fu(e,n,t,r,l){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Cn(-1,1),n.tag=2,Bn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var sf=Se.ReactCurrentOwner,Ve=!1;function Ue(e,n,t,r){n.child=e===null?lu(n,null,t,r):Lt(n,e.child,t,r)}function Uu(e,n,t,r,l){t=t.render;var i=n.ref;return Mt(n,l),r=Ui(e,n,t,r,i,l),t=Ai(),e!==null&&!Ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Nn(e,n,l)):(ae&&t&&Si(n),n.flags|=1,Ue(e,n,r,l),n.child)}function Au(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!yo(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Bu(e,n,i,r,l)):(e=xl(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Xt,t(o,r)&&e.ref===n.ref)return Nn(e,n,l)}return n.flags|=1,e=$n(i,r),e.ref=n.ref,e.return=n,n.child=e}function Bu(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Xt(i,r)&&e.ref===n.ref)if(Ve=!1,n.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ve=!0);else return n.lanes=e.lanes,Nn(e,n,l)}return Ki(e,n,t,r,l)}function Hu(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Pt,nn),nn|=t;else{if((t&1073741824)===0)return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,te(Pt,nn),nn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,te(Pt,nn),nn|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,te(Pt,nn),nn|=r;return Ue(e,n,l,t),n.child}function Gu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ki(e,n,t,r,l){var i=Ge(t)?Xn:Oe.current;return i=wt(n,i),Mt(n,l),t=Ui(e,n,t,r,i,l),r=Ai(),e!==null&&!Ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Nn(e,n,l)):(ae&&r&&Si(n),n.flags|=1,Ue(e,n,t,l),n.child)}function Vu(e,n,t,r,l){if(Ge(t)){var i=!0;Zr(n)}else i=!1;if(Mt(n,l),n.stateNode===null)cl(e,n),zu(n,t,r),Zi(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var u=o.context,p=t.contextType;typeof p=="object"&&p!==null?p=on(p):(p=Ge(t)?Xn:Oe.current,p=wt(n,p));var y=t.getDerivedStateFromProps,v=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==p)&&Ru(n,o,r,p),An=!1;var m=n.memoizedState;o.state=m,nl(n,r,o,l),u=n.memoizedState,a!==r||m!==u||He.current||An?(typeof y=="function"&&(Wi(n,t,y,r),u=n.memoizedState),(a=An||Tu(n,t,a,r,m,u,p))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=p,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ou(e,n),a=n.memoizedProps,p=n.type===n.elementType?a:pn(n.type,a),o.props=p,v=n.pendingProps,m=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=on(u):(u=Ge(t)?Xn:Oe.current,u=wt(n,u));var S=t.getDerivedStateFromProps;(y=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==v||m!==u)&&Ru(n,o,r,u),An=!1,m=n.memoizedState,o.state=m,nl(n,r,o,l);var E=n.memoizedState;a!==v||m!==E||He.current||An?(typeof S=="function"&&(Wi(n,t,S,r),E=n.memoizedState),(p=An||Tu(n,t,p,r,m,E,u)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=E),o.props=r,o.state=E,o.context=u,r=p):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Yi(e,n,t,r,i,l)}function Yi(e,n,t,r,l,i){Gu(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&Ka(n,t,!1),Nn(e,n,i);r=n.stateNode,sf.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Lt(n,e.child,null,i),n.child=Lt(n,null,a,i)):Ue(e,n,a,i),n.memoizedState=r.state,l&&Ka(n,t,!0),n.child}function Wu(e){var n=e.stateNode;n.pendingContext?$a(e,n.pendingContext,n.pendingContext!==n.context):n.context&&$a(e,n.context,!1),Ri(e,n.containerInfo)}function Zu(e,n,t,r,l){return _t(),Mi(l),n.flags|=256,Ue(e,n,t,r),n.child}var Xi={dehydrated:null,treeContext:null,retryLane:0};function Ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function $u(e,n,t){var r=n.pendingProps,l=se.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),te(se,l&1),e===null)return Ei(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Sl(o,r,0,null),e=at(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ji(t),n.memoizedState=Xi,e):bi(n,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return cf(e,n,o,r,a,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return(o&1)===0&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=$n(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=$n(a,i):(i=at(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?Ji(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Xi,r}return i=e.child,e=i.sibling,r=$n(i,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function bi(e,n){return n=Sl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function sl(e,n,t,r){return r!==null&&Mi(r),Lt(n,e.child,null,t),e=bi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function cf(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=$i(Error(h(422))),sl(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Sl({mode:"visible",children:r.children},l,0,null),i=at(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,(n.mode&1)!==0&&Lt(n,e.child,null,o),n.child.memoizedState=Ji(o),n.memoizedState=Xi,i);if((n.mode&1)===0)return sl(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(h(419)),r=$i(i,r,void 0),sl(e,n,o,r)}if(a=(o&e.childLanes)!==0,Ve||a){if(r=Le,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Mn(e,l),gn(r,e,l,-1))}return go(),r=$i(Error(h(421))),sl(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=_f.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,en=In(l.nextSibling),be=n,ae=!0,dn=null,e!==null&&(rn[ln++]=Ln,rn[ln++]=En,rn[ln++]=Jn,Ln=e.id,En=e.overflow,Jn=n),n=bi(n,r.children),n.flags|=4096,n)}function qu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Pi(e.return,n,t)}function eo(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Ku(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(Ue(e,n,r.children,t),r=se.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qu(e,t,n);else if(e.tag===19)qu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(se,r),(n.mode&1)===0)n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&tl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),eo(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&tl(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}eo(n,!0,t,null,i);break;case"together":eo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function cl(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Nn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),rt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(h(153));if(n.child!==null){for(e=n.child,t=$n(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=$n(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ff(e,n,t){switch(n.tag){case 3:Wu(n),_t();break;case 5:su(n);break;case 1:Ge(n.type)&&Zr(n);break;case 4:Ri(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;te(Jr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?$u(e,n,t):(te(se,se.current&1),e=Nn(e,n,t),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Ku(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return n.lanes=0,Hu(e,n,t)}return Nn(e,n,t)}var Yu,no,Xu,Ju;Yu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},no=function(){},Xu=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,nt(kn.current);var i=null;switch(t){case"input":l=Pl(e,l),r=Pl(e,r),i=[];break;case"select":l=L({},l,{value:void 0}),r=L({},r,{value:void 0}),i=[];break;case"textarea":l=Rl(e,l),r=Rl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}jl(t,r);var o;t=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var a=l[p];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Q.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var u=r[p];if(a=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&u!==a&&(u!=null||a!=null))if(p==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(p,t)),t=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Q.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&le("scroll",e),i||a===u||(i=[])):(i=i||[]).push(p,u))}t&&(i=i||[]).push("style",t);var p=i;(n.updateQueue=p)&&(n.flags|=4)}},Ju=function(e,n,t,r){t!==r&&(n.flags|=4)};function dr(e,n){if(!ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function df(e,n,t){var r=n.pendingProps;switch(_i(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(n),null;case 1:return Ge(n.type)&&Wr(),Ie(n),null;case 3:return r=n.stateNode,Ct(),ie(He),ie(Oe),Ii(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,dn!==null&&(po(dn),dn=null))),no(e,n),Ie(n),null;case 5:Oi(n);var l=nt(ar.current);if(t=n.type,e!==null&&n.stateNode!=null)Xu(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(h(166));return Ie(n),null}if(e=nt(kn.current),Yr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[vn]=n,r[tr]=i,e=(n.mode&1)!==0,t){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(l=0;l<bt.length;l++)le(bt[l],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":zo(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":jo(r,i),le("invalid",r)}jl(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,a,e),l=["children",""+a]):Q.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(t){case"input":kr(r),Oo(r,i,!0);break;case"textarea":kr(r),Do(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Gr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fo(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[vn]=n,e[tr]=r,Yu(e,n,!1,!1),n.stateNode=e;e:{switch(o=Il(t,r),t){case"dialog":le("cancel",e),le("close",e),l=r;break;case"iframe":case"object":case"embed":le("load",e),l=r;break;case"video":case"audio":for(l=0;l<bt.length;l++)le(bt[l],e);l=r;break;case"source":le("error",e),l=r;break;case"img":case"image":case"link":le("error",e),le("load",e),l=r;break;case"details":le("toggle",e),l=r;break;case"input":zo(e,r),l=Pl(e,r),le("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=L({},r,{value:void 0}),le("invalid",e);break;case"textarea":jo(e,r),l=Rl(e,r),le("invalid",e);break;default:l=r}jl(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Bo(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uo(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Ot(e,u):typeof u=="number"&&Ot(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Q.hasOwnProperty(i)?u!=null&&i==="onScroll"&&le("scroll",e):u!=null&&Ke(e,i,u,o))}switch(t){case"input":kr(e),Oo(e,r,!1);break;case"textarea":kr(e),Do(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Y(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ut(e,!!r.multiple,i,!1):r.defaultValue!=null&&ut(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Gr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ie(n),null;case 6:if(e&&n.stateNode!=null)Ju(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(h(166));if(t=nt(ar.current),nt(kn.current),Yr(n)){if(r=n.stateNode,t=n.memoizedProps,r[vn]=n,(i=r.nodeValue!==t)&&(e=be,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[vn]=n,n.stateNode=r}return Ie(n),null;case 13:if(ie(se),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&en!==null&&(n.mode&1)!==0&&(n.flags&128)===0)nu(),_t(),n.flags|=98560,i=!1;else if(i=Yr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[vn]=n}else _t(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),i=!1}else dn!==null&&(po(dn),dn=null),i=!0;if(!i)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(se.current&1)!==0?xe===0&&(xe=3):go())),n.updateQueue!==null&&(n.flags|=4),Ie(n),null);case 4:return Ct(),no(e,n),e===null&&er(n.stateNode.containerInfo),Ie(n),null;case 10:return Qi(n.type._context),Ie(n),null;case 17:return Ge(n.type)&&Wr(),Ie(n),null;case 19:if(ie(se),i=n.memoizedState,i===null)return Ie(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)dr(i,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(o=tl(e),o!==null){for(n.flags|=128,dr(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return te(se,se.current&1|2),n.child}e=e.sibling}i.tail!==null&&he()>Tt&&(n.flags|=128,r=!0,dr(i,!1),n.lanes=4194304)}else{if(!r)if(e=tl(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),dr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ae)return Ie(n),null}else 2*he()-i.renderingStartTime>Tt&&t!==1073741824&&(n.flags|=128,r=!0,dr(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=he(),n.sibling=null,t=se.current,te(se,r?t&1|2:t&1),n):(Ie(n),null);case 22:case 23:return mo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(nn&1073741824)!==0&&(Ie(n),n.subtreeFlags&6&&(n.flags|=8192)):Ie(n),null;case 24:return null;case 25:return null}throw Error(h(156,n.tag))}function pf(e,n){switch(_i(n),n.tag){case 1:return Ge(n.type)&&Wr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ct(),ie(He),ie(Oe),Ii(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Oi(n),null;case 13:if(ie(se),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(h(340));_t()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(se),null;case 4:return Ct(),null;case 10:return Qi(n.type._context),null;case 22:case 23:return mo(),null;case 24:return null;default:return null}}var fl=!1,De=!1,hf=typeof WeakSet=="function"?WeakSet:Set,_=null;function Qt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){fe(e,n,r)}else t.current=null}function to(e,n,t){try{t()}catch(r){fe(e,n,r)}}var bu=!1;function mf(e,n){if(hi=Tr,e=Ta(),oi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,p=0,y=0,v=e,m=null;n:for(;;){for(var S;v!==t||l!==0&&v.nodeType!==3||(a=o+l),v!==i||r!==0&&v.nodeType!==3||(u=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(S=v.firstChild)!==null;)m=v,v=S;for(;;){if(v===e)break n;if(m===t&&++p===l&&(a=o),m===i&&++y===r&&(u=o),(S=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=S}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(mi={focusedElem:e,selectionRange:t},Tr=!1,_=n;_!==null;)if(n=_,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_=e;else for(;_!==null;){n=_;try{var E=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var M=E.memoizedProps,me=E.memoizedState,f=n.stateNode,s=f.getSnapshotBeforeUpdate(n.elementType===n.type?M:pn(n.type,M),me);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(k){fe(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,_=e;break}_=n.return}return E=bu,bu=!1,E}function pr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&to(n,t,i)}l=l.next}while(l!==r)}}function dl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ro(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function es(e){var n=e.alternate;n!==null&&(e.alternate=null,es(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[vn],delete n[tr],delete n[ki],delete n[Yc],delete n[Xc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ns(e){return e.tag===5||e.tag===3||e.tag===4}function ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ns(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Gr));else if(r!==4&&(e=e.child,e!==null))for(lo(e,n,t),e=e.sibling;e!==null;)lo(e,n,t),e=e.sibling}function io(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,n,t),e=e.sibling;e!==null;)io(e,n,t),e=e.sibling}var Pe=null,hn=!1;function Hn(e,n,t){for(t=t.child;t!==null;)rs(e,n,t),t=t.sibling}function rs(e,n,t){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Er,t)}catch{}switch(t.tag){case 5:De||Qt(t,n);case 6:var r=Pe,l=hn;Pe=null,Hn(e,n,t),Pe=r,hn=l,Pe!==null&&(hn?(e=Pe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Pe.removeChild(t.stateNode));break;case 18:Pe!==null&&(hn?(e=Pe,t=t.stateNode,e.nodeType===8?vi(e.parentNode,t):e.nodeType===1&&vi(e,t),Wt(e)):vi(Pe,t.stateNode));break;case 4:r=Pe,l=hn,Pe=t.stateNode.containerInfo,hn=!0,Hn(e,n,t),Pe=r,hn=l;break;case 0:case 11:case 14:case 15:if(!De&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&to(t,n,o),l=l.next}while(l!==r)}Hn(e,n,t);break;case 1:if(!De&&(Qt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){fe(t,n,a)}Hn(e,n,t);break;case 21:Hn(e,n,t);break;case 22:t.mode&1?(De=(r=De)||t.memoizedState!==null,Hn(e,n,t),De=r):Hn(e,n,t);break;default:Hn(e,n,t)}}function ls(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new hf),n.forEach(function(r){var l=Lf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function mn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,hn=!1;break e;case 3:Pe=a.stateNode.containerInfo,hn=!0;break e;case 4:Pe=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(Pe===null)throw Error(h(160));rs(i,o,l),Pe=null,hn=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(p){fe(l,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)is(n,e),n=n.sibling}function is(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mn(n,e),xn(e),r&4){try{pr(3,e,e.return),dl(3,e)}catch(M){fe(e,e.return,M)}try{pr(5,e,e.return)}catch(M){fe(e,e.return,M)}}break;case 1:mn(n,e),xn(e),r&512&&t!==null&&Qt(t,t.return);break;case 5:if(mn(n,e),xn(e),r&512&&t!==null&&Qt(t,t.return),e.flags&32){var l=e.stateNode;try{Ot(l,"")}catch(M){fe(e,e.return,M)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ro(l,i),Il(a,o);var p=Il(a,i);for(o=0;o<u.length;o+=2){var y=u[o],v=u[o+1];y==="style"?Bo(l,v):y==="dangerouslySetInnerHTML"?Uo(l,v):y==="children"?Ot(l,v):Ke(l,y,v,p)}switch(a){case"input":Tl(l,i);break;case"textarea":Io(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var S=i.value;S!=null?ut(l,!!i.multiple,S,!1):m!==!!i.multiple&&(i.defaultValue!=null?ut(l,!!i.multiple,i.defaultValue,!0):ut(l,!!i.multiple,i.multiple?[]:"",!1))}l[tr]=i}catch(M){fe(e,e.return,M)}}break;case 6:if(mn(n,e),xn(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(M){fe(e,e.return,M)}}break;case 3:if(mn(n,e),xn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Wt(n.containerInfo)}catch(M){fe(e,e.return,M)}break;case 4:mn(n,e),xn(e);break;case 13:mn(n,e),xn(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(uo=he())),r&4&&ls(e);break;case 22:if(y=t!==null&&t.memoizedState!==null,e.mode&1?(De=(p=De)||y,mn(n,e),De=p):mn(n,e),xn(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&(e.mode&1)!==0)for(_=e,y=e.child;y!==null;){for(v=_=y;_!==null;){switch(m=_,S=m.child,m.tag){case 0:case 11:case 14:case 15:pr(4,m,m.return);break;case 1:Qt(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,E.props=n.memoizedProps,E.state=n.memoizedState,E.componentWillUnmount()}catch(M){fe(r,t,M)}}break;case 5:Qt(m,m.return);break;case 22:if(m.memoizedState!==null){us(v);continue}}S!==null?(S.return=m,_=S):us(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{l=v.stateNode,p?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=v.stateNode,u=v.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ao("display",o))}catch(M){fe(e,e.return,M)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(M){fe(e,e.return,M)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:mn(n,e),xn(e),r&4&&ls(e);break;case 21:break;default:mn(n,e),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ns(t)){var r=t;break e}t=t.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Ot(l,""),r.flags&=-33);var i=ts(e);io(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ts(e);lo(e,a,o);break;default:throw Error(h(161))}}catch(u){fe(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gf(e,n,t){_=e,os(e)}function os(e,n,t){for(var r=(e.mode&1)!==0;_!==null;){var l=_,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||fl;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||De;a=fl;var p=De;if(fl=o,(De=u)&&!p)for(_=l;_!==null;)o=_,u=o.child,o.tag===22&&o.memoizedState!==null?ss(l):u!==null?(u.return=o,_=u):ss(l);for(;i!==null;)_=i,os(i),i=i.sibling;_=l,fl=a,De=p}as(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,_=i):as(e)}}function as(e){for(;_!==null;){var n=_;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:De||dl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!De)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:pn(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&uu(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}uu(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Wt(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}De||n.flags&512&&ro(n)}catch(m){fe(n,n.return,m)}}if(n===e){_=null;break}if(t=n.sibling,t!==null){t.return=n.return,_=t;break}_=n.return}}function us(e){for(;_!==null;){var n=_;if(n===e){_=null;break}var t=n.sibling;if(t!==null){t.return=n.return,_=t;break}_=n.return}}function ss(e){for(;_!==null;){var n=_;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{dl(4,n)}catch(u){fe(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){fe(n,l,u)}}var i=n.return;try{ro(n)}catch(u){fe(n,i,u)}break;case 5:var o=n.return;try{ro(n)}catch(u){fe(n,o,u)}}}catch(u){fe(n,n.return,u)}if(n===e){_=null;break}var a=n.sibling;if(a!==null){a.return=n.return,_=a;break}_=n.return}}var yf=Math.ceil,pl=Se.ReactCurrentDispatcher,oo=Se.ReactCurrentOwner,un=Se.ReactCurrentBatchConfig,V=0,Le=null,ve=null,Te=0,nn=0,Pt=Dn(0),xe=0,hr=null,rt=0,hl=0,ao=0,mr=null,We=null,uo=0,Tt=1/0,Qn=null,ml=!1,so=null,Gn=null,gl=!1,Vn=null,yl=0,gr=0,co=null,vl=-1,kl=0;function Ae(){return(V&6)!==0?he():vl!==-1?vl:vl=he()}function Wn(e){return(e.mode&1)===0?1:(V&2)!==0&&Te!==0?Te&-Te:bc.transition!==null?(kl===0&&(kl=ta()),kl):(e=X,e!==0||(e=window.event,e=e===void 0?16:fa(e.type)),e)}function gn(e,n,t,r){if(50<gr)throw gr=0,co=null,Error(h(185));At(e,t,r),((V&2)===0||e!==Le)&&(e===Le&&((V&2)===0&&(hl|=t),xe===4&&Zn(e,Te)),Ze(e,r),t===1&&V===0&&(n.mode&1)===0&&(Tt=he()+500,$r&&Un()))}function Ze(e,n){var t=e.callbackNode;bs(e,n);var r=Nr(e,e===Le?Te:0);if(r===0)t!==null&&bo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&bo(t),n===1)e.tag===0?Jc(fs.bind(null,e)):Ya(fs.bind(null,e)),qc(function(){(V&6)===0&&Un()}),t=null;else{switch(ra(r)){case 1:t=Gl;break;case 4:t=ea;break;case 16:t=Lr;break;case 536870912:t=na;break;default:t=Lr}t=ks(t,cs.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function cs(e,n){if(vl=-1,kl=0,(V&6)!==0)throw Error(h(327));var t=e.callbackNode;if(zt()&&e.callbackNode!==t)return null;var r=Nr(e,e===Le?Te:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=wl(e,r);else{n=r;var l=V;V|=2;var i=ps();(Le!==e||Te!==n)&&(Qn=null,Tt=he()+500,it(e,n));do try{wf();break}catch(a){ds(e,a)}while(!0);Ni(),pl.current=i,V=l,ve!==null?n=0:(Le=null,Te=0,n=xe)}if(n!==0){if(n===2&&(l=Vl(e),l!==0&&(r=l,n=fo(e,l))),n===1)throw t=hr,it(e,0),Zn(e,r),Ze(e,he()),t;if(n===6)Zn(e,r);else{if(l=e.current.alternate,(r&30)===0&&!vf(l)&&(n=wl(e,r),n===2&&(i=Vl(e),i!==0&&(r=i,n=fo(e,i))),n===1))throw t=hr,it(e,0),Zn(e,r),Ze(e,he()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(h(345));case 2:ot(e,We,Qn);break;case 3:if(Zn(e,r),(r&130023424)===r&&(n=uo+500-he(),10<n)){if(Nr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=yi(ot.bind(null,e,We,Qn),n);break}ot(e,We,Qn);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-cn(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=yi(ot.bind(null,e,We,Qn),r);break}ot(e,We,Qn);break;case 5:ot(e,We,Qn);break;default:throw Error(h(329))}}}return Ze(e,he()),e.callbackNode===t?cs.bind(null,e):null}function fo(e,n){var t=mr;return e.current.memoizedState.isDehydrated&&(it(e,n).flags|=256),e=wl(e,n),e!==2&&(n=We,We=t,n!==null&&po(n)),e}function po(e){We===null?We=e:We.push.apply(We,e)}function vf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!fn(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n){for(n&=~ao,n&=~hl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-cn(n),r=1<<t;e[t]=-1,n&=~r}}function fs(e){if((V&6)!==0)throw Error(h(327));zt();var n=Nr(e,0);if((n&1)===0)return Ze(e,he()),null;var t=wl(e,n);if(e.tag!==0&&t===2){var r=Vl(e);r!==0&&(n=r,t=fo(e,r))}if(t===1)throw t=hr,it(e,0),Zn(e,n),Ze(e,he()),t;if(t===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ot(e,We,Qn),Ze(e,he()),null}function ho(e,n){var t=V;V|=1;try{return e(n)}finally{V=t,V===0&&(Tt=he()+500,$r&&Un())}}function lt(e){Vn!==null&&Vn.tag===0&&(V&6)===0&&zt();var n=V;V|=1;var t=un.transition,r=X;try{if(un.transition=null,X=1,e)return e()}finally{X=r,un.transition=t,V=n,(V&6)===0&&Un()}}function mo(){nn=Pt.current,ie(Pt)}function it(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,$c(t)),ve!==null)for(t=ve.return;t!==null;){var r=t;switch(_i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wr();break;case 3:Ct(),ie(He),ie(Oe),Ii();break;case 5:Oi(r);break;case 4:Ct();break;case 13:ie(se);break;case 19:ie(se);break;case 10:Qi(r.type._context);break;case 22:case 23:mo()}t=t.return}if(Le=e,ve=e=$n(e.current,null),Te=nn=n,xe=0,hr=null,ao=hl=rt=0,We=mr=null,et!==null){for(n=0;n<et.length;n++)if(t=et[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}et=null}return e}function ds(e,n){do{var t=ve;try{if(Ni(),rl.current=al,ll){for(var r=ce.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ll=!1}if(tt=0,_e=we=ce=null,ur=!1,sr=0,oo.current=null,t===null||t.return===null){xe=1,hr=n,ve=null;break}e:{var i=e,o=t.return,a=t,u=n;if(n=Te,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,y=a,v=y.tag;if((y.mode&1)===0&&(v===0||v===11||v===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var S=Du(o);if(S!==null){S.flags&=-257,Fu(S,o,a,i,n),S.mode&1&&Iu(i,p,n),n=S,u=p;var E=n.updateQueue;if(E===null){var M=new Set;M.add(u),n.updateQueue=M}else E.add(u);break e}else{if((n&1)===0){Iu(i,p,n),go();break e}u=Error(h(426))}}else if(ae&&a.mode&1){var me=Du(o);if(me!==null){(me.flags&65536)===0&&(me.flags|=256),Fu(me,o,a,i,n),Mi(Nt(u,a));break e}}i=u=Nt(u,a),xe!==4&&(xe=2),mr===null?mr=[i]:mr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=Ou(i,u,n);au(i,f);break e;case 1:a=u;var s=i.type,d=i.stateNode;if((i.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Gn===null||!Gn.has(d)))){i.flags|=65536,n&=-n,i.lanes|=n;var k=ju(i,a,n);au(i,k);break e}}i=i.return}while(i!==null)}ms(t)}catch(N){n=N,ve===t&&t!==null&&(ve=t=t.return);continue}break}while(!0)}function ps(){var e=pl.current;return pl.current=al,e===null?al:e}function go(){(xe===0||xe===3||xe===2)&&(xe=4),Le===null||(rt&268435455)===0&&(hl&268435455)===0||Zn(Le,Te)}function wl(e,n){var t=V;V|=2;var r=ps();(Le!==e||Te!==n)&&(Qn=null,it(e,n));do try{kf();break}catch(l){ds(e,l)}while(!0);if(Ni(),V=t,pl.current=r,ve!==null)throw Error(h(261));return Le=null,Te=0,xe}function kf(){for(;ve!==null;)hs(ve)}function wf(){for(;ve!==null&&!Vs();)hs(ve)}function hs(e){var n=vs(e.alternate,e,nn);e.memoizedProps=e.pendingProps,n===null?ms(e):ve=n,oo.current=null}function ms(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=df(t,n,nn),t!==null){ve=t;return}}else{if(t=pf(t,n),t!==null){t.flags&=32767,ve=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,ve=null;return}}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);xe===0&&(xe=5)}function ot(e,n,t){var r=X,l=un.transition;try{un.transition=null,X=1,xf(e,n,t,r)}finally{un.transition=l,X=r}return null}function xf(e,n,t,r){do zt();while(Vn!==null);if((V&6)!==0)throw Error(h(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(ec(e,i),e===Le&&(ve=Le=null,Te=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||gl||(gl=!0,ks(Lr,function(){return zt(),null})),i=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||i){i=un.transition,un.transition=null;var o=X;X=1;var a=V;V|=4,oo.current=null,mf(e,t),is(t,e),Ac(mi),Tr=!!hi,mi=hi=null,e.current=t,gf(t),Ws(),V=a,X=o,un.transition=i}else e.current=t;if(gl&&(gl=!1,Vn=e,yl=l),i=e.pendingLanes,i===0&&(Gn=null),qs(t.stateNode),Ze(e,he()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(ml)throw ml=!1,e=so,so=null,e;return(yl&1)!==0&&e.tag!==0&&zt(),i=e.pendingLanes,(i&1)!==0?e===co?gr++:(gr=0,co=e):gr=0,Un(),null}function zt(){if(Vn!==null){var e=ra(yl),n=un.transition,t=X;try{if(un.transition=null,X=16>e?16:e,Vn===null)var r=!1;else{if(e=Vn,Vn=null,yl=0,(V&6)!==0)throw Error(h(331));var l=V;for(V|=4,_=e.current;_!==null;){var i=_,o=i.child;if((_.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var p=a[u];for(_=p;_!==null;){var y=_;switch(y.tag){case 0:case 11:case 15:pr(8,y,i)}var v=y.child;if(v!==null)v.return=y,_=v;else for(;_!==null;){y=_;var m=y.sibling,S=y.return;if(es(y),y===p){_=null;break}if(m!==null){m.return=S,_=m;break}_=S}}}var E=i.alternate;if(E!==null){var M=E.child;if(M!==null){E.child=null;do{var me=M.sibling;M.sibling=null,M=me}while(M!==null)}}_=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,_=o;else e:for(;_!==null;){if(i=_,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:pr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var s=e.current;for(_=s;_!==null;){o=_;var d=o.child;if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,_=d;else e:for(o=s;_!==null;){if(a=_,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:dl(9,a)}}catch(N){fe(a,a.return,N)}if(a===o){_=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,_=k;break e}_=a.return}}if(V=l,Un(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Er,e)}catch{}r=!0}return r}finally{X=t,un.transition=n}}return!1}function gs(e,n,t){n=Nt(t,n),n=Ou(e,n,1),e=Bn(e,n,1),n=Ae(),e!==null&&(At(e,1,n),Ze(e,n))}function fe(e,n,t){if(e.tag===3)gs(e,e,t);else for(;n!==null;){if(n.tag===3){gs(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){e=Nt(t,e),e=ju(n,e,1),n=Bn(n,e,1),e=Ae(),n!==null&&(At(n,1,e),Ze(n,e));break}}n=n.return}}function Sf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ae(),e.pingedLanes|=e.suspendedLanes&t,Le===e&&(Te&t)===t&&(xe===4||xe===3&&(Te&130023424)===Te&&500>he()-uo?it(e,0):ao|=t),Ze(e,n)}function ys(e,n){n===0&&((e.mode&1)===0?n=1:(n=Cr,Cr<<=1,(Cr&130023424)===0&&(Cr=4194304)));var t=Ae();e=Mn(e,n),e!==null&&(At(e,n,t),Ze(e,t))}function _f(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),ys(e,t)}function Lf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(n),ys(e,t)}var vs;vs=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||He.current)Ve=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return Ve=!1,ff(e,n,t);Ve=(e.flags&131072)!==0}else Ve=!1,ae&&(n.flags&1048576)!==0&&Xa(n,Kr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;cl(e,n),e=n.pendingProps;var l=wt(n,Oe.current);Mt(n,t),l=Ui(null,n,r,e,l,t);var i=Ai();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ge(r)?(i=!0,Zr(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,zi(n),l.updater=ul,n.stateNode=l,l._reactInternals=n,Zi(n,r,e,t),n=Yi(null,n,r,!0,i,t)):(n.tag=0,ae&&i&&Si(n),Ue(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(cl(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Mf(r),e=pn(r,e),l){case 0:n=Ki(null,n,r,e,t);break e;case 1:n=Vu(null,n,r,e,t);break e;case 11:n=Uu(null,n,r,e,t);break e;case 14:n=Au(null,n,r,pn(r.type,e),t);break e}throw Error(h(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:pn(r,l),Ki(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:pn(r,l),Vu(e,n,r,l,t);case 3:e:{if(Wu(n),e===null)throw Error(h(387));r=n.pendingProps,i=n.memoizedState,l=i.element,ou(e,n),nl(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=Nt(Error(h(423)),n),n=Zu(e,n,r,t,l);break e}else if(r!==l){l=Nt(Error(h(424)),n),n=Zu(e,n,r,t,l);break e}else for(en=In(n.stateNode.containerInfo.firstChild),be=n,ae=!0,dn=null,t=lu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_t(),r===l){n=Nn(e,n,t);break e}Ue(e,n,r,t)}n=n.child}return n;case 5:return su(n),e===null&&Ei(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,gi(r,l)?o=null:i!==null&&gi(r,i)&&(n.flags|=32),Gu(e,n),Ue(e,n,o,t),n.child;case 6:return e===null&&Ei(n),null;case 13:return $u(e,n,t);case 4:return Ri(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Lt(n,null,r,t):Ue(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:pn(r,l),Uu(e,n,r,l,t);case 7:return Ue(e,n,n.pendingProps,t),n.child;case 8:return Ue(e,n,n.pendingProps.children,t),n.child;case 12:return Ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,te(Jr,r._currentValue),r._currentValue=o,i!==null)if(fn(i.value,o)){if(i.children===l.children&&!He.current){n=Nn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Cn(-1,t&-t),u.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?u.next=u:(u.next=y.next,y.next=u),p.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Pi(i.return,t,n),a.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Pi(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ue(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Mt(n,t),l=on(l),r=r(l),n.flags|=1,Ue(e,n,r,t),n.child;case 14:return r=n.type,l=pn(r,n.pendingProps),l=pn(r.type,l),Au(e,n,r,l,t);case 15:return Bu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:pn(r,l),cl(e,n),n.tag=1,Ge(r)?(e=!0,Zr(n)):e=!1,Mt(n,t),zu(n,r,l),Zi(n,r,l,t),Yi(null,n,r,!0,e,t);case 19:return Ku(e,n,t);case 22:return Hu(e,n,t)}throw Error(h(156,n.tag))};function ks(e,n){return Jo(e,n)}function Ef(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,n,t,r){return new Ef(e,n,t,r)}function yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mf(e){if(typeof e=="function")return yo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ye)return 11;if(e===Re)return 14}return 2}function $n(e,n){var t=e.alternate;return t===null?(t=sn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function xl(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")yo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case C:return at(t.children,l,i,n);case G:o=8,l|=8;break;case pe:return e=sn(12,t,n,l|2),e.elementType=pe,e.lanes=i,e;case Ne:return e=sn(13,t,n,l),e.elementType=Ne,e.lanes=i,e;case Qe:return e=sn(19,t,n,l),e.elementType=Qe,e.lanes=i,e;case re:return Sl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ze:o=10;break e;case Be:o=9;break e;case ye:o=11;break e;case Re:o=14;break e;case ke:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return n=sn(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function at(e,n,t,r){return e=sn(7,e,r,n),e.lanes=t,e}function Sl(e,n,t,r){return e=sn(22,e,r,n),e.elementType=re,e.lanes=t,e.stateNode={isHidden:!1},e}function vo(e,n,t){return e=sn(6,e,null,n),e.lanes=t,e}function ko(e,n,t){return n=sn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Cf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function wo(e,n,t,r,l,i,o,a,u){return e=new Cf(e,n,t,a,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=sn(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},zi(i),e}function Nf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ce,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ws(e){if(!e)return Fn;e=e._reactInternals;e:{if(Kn(e)!==e||e.tag!==1)throw Error(h(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(h(171))}if(e.tag===1){var t=e.type;if(Ge(t))return qa(e,t,n)}return n}function xs(e,n,t,r,l,i,o,a,u){return e=wo(t,r,!0,e,l,i,o,a,u),e.context=ws(null),t=e.current,r=Ae(),l=Wn(t),i=Cn(r,l),i.callback=n??null,Bn(t,i,l),e.current.lanes=l,At(e,l,r),Ze(e,r),e}function _l(e,n,t,r){var l=n.current,i=Ae(),o=Wn(l);return t=ws(t),n.context===null?n.context=t:n.pendingContext=t,n=Cn(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Bn(l,n,o),e!==null&&(gn(e,l,o,i),el(e,l,o)),o}function Ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ss(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function xo(e,n){Ss(e,n),(e=e.alternate)&&Ss(e,n)}function Qf(){return null}var _s=typeof reportError=="function"?reportError:function(e){console.error(e)};function So(e){this._internalRoot=e}El.prototype.render=So.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(h(409));_l(e,n,null,null)},El.prototype.unmount=So.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;lt(function(){_l(null,e,null,null)}),n[Sn]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var n=oa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Rn.length&&n!==0&&n<Rn[t].priority;t++);Rn.splice(t,0,e),t===0&&sa(e)}};function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ls(){}function Pf(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var p=Ll(o);i.call(p)}}var o=xs(n,r,e,0,null,!1,!1,"",Ls);return e._reactRootContainer=o,e[Sn]=o.current,er(e.nodeType===8?e.parentNode:e),lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var p=Ll(u);a.call(p)}}var u=wo(e,0,!1,null,null,!1,!1,"",Ls);return e._reactRootContainer=u,e[Sn]=u.current,er(e.nodeType===8?e.parentNode:e),lt(function(){_l(n,u,t,r)}),u}function Cl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=Ll(o);a.call(u)}}_l(n,o,e,l)}else o=Pf(t,n,e,l,r);return Ll(o)}la=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ut(n.pendingLanes);t!==0&&(Zl(n,t|1),Ze(n,he()),(V&6)===0&&(Tt=he()+500,Un()))}break;case 13:lt(function(){var r=Mn(e,1);if(r!==null){var l=Ae();gn(r,e,1,l)}}),xo(e,1)}},$l=function(e){if(e.tag===13){var n=Mn(e,134217728);if(n!==null){var t=Ae();gn(n,e,134217728,t)}xo(e,134217728)}},ia=function(e){if(e.tag===13){var n=Wn(e),t=Mn(e,n);if(t!==null){var r=Ae();gn(t,e,n,r)}xo(e,n)}},oa=function(){return X},aa=function(e,n){var t=X;try{return X=e,n()}finally{X=t}},Ul=function(e,n,t){switch(n){case"input":if(Tl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Vr(r);if(!l)throw Error(h(90));To(r),Tl(r,l)}}}break;case"textarea":Io(e,t);break;case"select":n=t.value,n!=null&&ut(e,!!t.multiple,n,!1)}},Wo=ho,Zo=lt;var Tf={usingClientEntryPoint:!1,Events:[rr,vt,Vr,Go,Vo,ho]},yr={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zf={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yo(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Qf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Er=Nl.inject(zf),yn=Nl}catch{}}return $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf,$e.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_o(n))throw Error(h(200));return Nf(e,n,null,t)},$e.createRoot=function(e,n){if(!_o(e))throw Error(h(299));var t=!1,r="",l=_s;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=wo(e,1,!1,null,null,t,!1,r,l),e[Sn]=n.current,er(e.nodeType===8?e.parentNode:e),new So(n)},$e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Yo(n),e=e===null?null:e.stateNode,e},$e.flushSync=function(e){return lt(e)},$e.hydrate=function(e,n,t){if(!Ml(n))throw Error(h(200));return Cl(null,e,n,!0,t)},$e.hydrateRoot=function(e,n,t){if(!_o(e))throw Error(h(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=_s;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=xs(n,null,e,1,t??null,l,!1,i,o),e[Sn]=n.current,er(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new El(n)},$e.render=function(e,n,t){if(!Ml(n))throw Error(h(200));return Cl(null,e,n,!1,t)},$e.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(h(40));return e._reactRootContainer?(lt(function(){Cl(null,null,e,!1,function(){e._reactRootContainer=null,e[Sn]=null})}),!0):!1},$e.unstable_batchedUpdates=ho,$e.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ml(t))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Cl(e,n,t,!1,r)},$e.version="18.3.1-next-f1338f8080-20240426",$e}var zs;function Bf(){if(zs)return Mo.exports;zs=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(j){console.error(j)}}return w(),Mo.exports=Af(),Mo.exports}var Rs;function Hf(){if(Rs)return Ql;Rs=1;var w=Bf();return Ql.createRoot=w.createRoot,Ql.hydrateRoot=w.hydrateRoot,Ql}var Gf=Hf();const Vf=js(Gf),Wf=`<svg
                  id="avatarSvg"
                class="avatar-svg"
                viewBox="0 0 180 260"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- background halo -->
                <defs>
                  <radialGradient id="haloGrad" cx="50%" cy="10%" r="70%">
                    <stop offset="0%" stop-color="#ffe8ff" stop-opacity="1" />
                    <stop offset="55%" stop-color="#7a4bff" stop-opacity="0.9" />
                    <stop offset="100%" stop-color="#150425" stop-opacity="1" />
                  </radialGradient>
                  <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#f5c6a3" />
                    <stop offset="100%" stop-color="#f5c6a3" />
                  </linearGradient>
                  <linearGradient id="hairDark" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#221426" />
                    <stop offset="100%" stop-color="#4a305f" />
                  </linearGradient>
                </defs>

                <rect
                  x="0"
                  y="0"
                  width="180"
                  height="260"
                  fill="url(#haloGrad)"
                  rx="28"
                />

                <!-- HAIR STYLES (drawn behind face) -->
                <g id="hair-layer">
                  <g id="hair_bubble-pigtails_art" class="avatar-piece">
                    <!-- scalp cap -->
                    <path
                      d="M64 46 Q90 20 116 46 Q112 30 106 22 Q98 14 90 14 Q82 14 74 22 Q68 30 64 46Z"
                      fill="#3a1b4a"
                    />

                    <!-- left pigtail -->
                    <path
                      d="M68 52 Q58 56 56 68 Q54 80 64 88 Q74 82 74 70 Q74 58 68 52Z"
                      fill="#5c2a7a"
                    />
                    <circle cx="58" cy="70" r="9" fill="#5c2a7a" />
                    <circle cx="58" cy="70" r="3.8" fill="#ffbdf5" />

                    <!-- right pigtail -->
                    <path
                      d="M112 52 Q122 56 124 68 Q126 80 116 88 Q106 82 106 70 Q106 58 112 52Z"
                      fill="#5c2a7a"
                    />
                    <circle cx="122" cy="70" r="9" fill="#5c2a7a" />
                    <circle cx="122" cy="70" r="3.8" fill="#ffbdf5" />
                  </g>

                  <g id="hair_sleek-bun_art" class="avatar-piece">
                    <!-- main updo volume, tightened so it doesn't stick out past the head -->
                    <path
                      d="M66 46 Q90 20 114 46 Q112 64 102 74 Q90 80 78 74 Q68 64 66 46Z"
                      fill="#1b1025"
                    />
                    <!-- crown bun -->
                    <path
                      d="M76 24 Q90 8 104 24 Q98 34 90 38 Q82 34 76 24Z"
                      fill="#1b1025"
                    />
                    <!-- subtle highlight across the top of the updo -->
                    <path
                      d="M78 46 Q90 38 102 46"
                      stroke="#4b3c72"
                      stroke-width="2"
                      stroke-linecap="round"
                      fill="none"
                    />
                    <!-- curly bang pieces at the temples -->
                    <path
                      d="M76 50 Q74 54 76 58 Q78 62 76 66"
                      stroke="#1b1025"
                      stroke-width="2"
                      stroke-linecap="round"
                      fill="none"
                    />
                    <path
                      d="M104 50 Q106 54 104 58 Q102 62 104 66"
                      stroke="#1b1025"
                      stroke-width="2"
                      stroke-linecap="round"
                      fill="none"
                    />
                  </g>

                  <g id="hair_beach-waves_art" class="avatar-piece">
                    <path
                      d="M60 38 Q90 14 120 38 Q124 74 116 104 Q106 132 90 140 Q74 132 64 104 Q56 74 60 38Z"
                      fill="#d38f5b"
                    />
                    <path
                      d="M70 60 Q80 52 90 60 Q100 68 110 60"
                      stroke="#f2c18a"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                    />
                  </g>

                  <g id="hair_space-buns_art" class="avatar-piece">
                    <ellipse
                      cx="90"
                      cy="44"
                      rx="30"
                      ry="18"
                      fill="#2b103f"
                    />
                    <circle cx="72" cy="30" r="9" fill="#4e2f94" />
                    <circle cx="108" cy="30" r="9" fill="#4e2f94" />
                    <circle cx="72" cy="30" r="4" fill="#ffefff" />
                    <circle cx="108" cy="30" r="4" fill="#ffefff" />
                    <circle cx="78" cy="50" r="2" fill="#ffe45f" />
                    <circle cx="100" cy="52" r="2" fill="#7df9ff" />
                  </g>

                  <g id="hair_claw-clip_art" class="avatar-piece">
                    <ellipse
                      cx="90"
                      cy="42"
                      rx="30"
                      ry="18"
                      fill="#211626"
                    />
                    <rect
                      x="77"
                      y="28"
                      width="26"
                      height="8"
                      rx="3"
                      fill="#f5ede7"
                    />
                    <rect
                      x="79"
                      y="30"
                      width="4"
                      height="8"
                      rx="2"
                      fill="#d4c6bd"
                    />
                    <rect
                      x="86"
                      y="30"
                      width="4"
                      height="8"
                      rx="2"
                      fill="#d4c6bd"
                    />
                    <rect
                      x="93"
                      y="30"
                      width="4"
                      height="8"
                      rx="2"
                      fill="#d4c6bd"
                    />
                    <rect
                      x="100"
                      y="30"
                      width="4"
                      height="8"
                      rx="2"
                      fill="#d4c6bd"
                    />
                  </g>

                  <g id="hair_curtain-bangs_art" class="avatar-piece">
                    <path
                      d="M60 38 Q90 16 120 38 Q124 70 112 100 Q100 130 90 138 Q80 130 68 100 Q56 70 60 38Z"
                      fill="#2a1835"
                    />
                    <path d="M72 50 Q78 62 76 75" stroke="#4a3858" stroke-width="1.5" fill="none"/>
                    <path d="M90 45 Q94 58 92 72" stroke="#4a3858" stroke-width="1.5" fill="none"/>
                    <path d="M108 50 Q102 62 104 75" stroke="#4a3858" stroke-width="1.5" fill="none"/>
                  </g>
                </g>

                <!-- base body / face drawn on top -->
                <g id="base-girl">
                  <!-- neck -->
                  <rect
                    x="82"
                    y="76"
                    width="16"
                    height="18"
                    rx="7"
                    fill="url(#skinGrad)"
                  />
                  <!-- shoulders / upper torso (hourglass) -->
                  <path
                    d="M58 96 Q90 82 122 96 Q118 132 110 152 Q102 170 90 174 Q78 170 70 152 Q62 132 58 96Z"
                    fill="url(#skinGrad)"
                  />
                  <!-- hips (wider than waist) -->
                  <path
                    d="M66 168 Q90 182 114 168 L118 194 Q104 206 90 208 Q76 206 62 194Z"
                    fill="url(#skinGrad)"
                  />
                  <!-- legs (even bigger + longer) -->
                  <rect
                    x="72"
                    y="194"
                    width="14"
                    height="60"
                    rx="7"
                    fill="url(#skinGrad)"
                  />
                  <rect
                    x="94"
                    y="194"
                    width="14"
                    height="60"
                    rx="7"
                    fill="url(#skinGrad)"
                  />
                  <!-- arms -->
                  <rect
                    x="36"
                    y="104"
                    width="14"
                    height="82"
                    rx="9"
                    fill="url(#skinGrad)"
                  />
                  <rect
                    x="130"
                    y="104"
                    width="14"
                    height="82"
                    rx="9"
                    fill="url(#skinGrad)"
                  />
                  <!-- head -->
                  <circle
                    cx="90"
                    cy="60"
                    r="26"
                    fill="url(#skinGrad)"
                    stroke="rgba(255,255,255,0.65)"
                    stroke-width="1.2"
                  />
                  <!-- detailed face -->
                  <g id="face">
                    <!-- brows -->
                    <path
                      d="M78 54 Q82 52 86 54"
                      stroke="#2b1630"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      fill="none"
                    />
                    <path
                      d="M94 54 Q98 52 102 54"
                      stroke="#2b1630"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      fill="none"
                    />
                    <!-- eyes -->
                    <ellipse
                      cx="82"
                      cy="58"
                      rx="4"
                      ry="2.8"
                      fill="#fdfbff"
                    />
                    <ellipse
                      cx="98"
                      cy="58"
                      rx="4"
                      ry="2.8"
                      fill="#fdfbff"
                    />
                    <circle cx="82" cy="58" r="1.8" fill="#3a223b" />
                    <circle cx="98" cy="58" r="1.8" fill="#3a223b" />
                    <!-- lashes left -->
                    <path
                      d="M78 56 L76 55"
                      stroke="#2b1630"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <path
                      d="M80 54.5 L78 53.5"
                      stroke="#2b1630"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <path
                      d="M84 54.5 L86 53.5"
                      stroke="#2b1630"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <!-- lashes right -->
                    <path
                      d="M102 56 L104 55"
                      stroke="#2b1630"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <path
                      d="M100 54.5 L102 53.5"
                      stroke="#2b1630"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <path
                      d="M96 54.5 L94 53.5"
                      stroke="#2b1630"
                      stroke-width="1"
                      stroke-linecap="round"
                    />
                    <!-- nose -->
                    <path
                      d="M90 58 Q91 62 89.5 64"
                      stroke="#bf7a69"
                      stroke-width="1"
                      stroke-linecap="round"
                      fill="none"
                    />
                    <!-- lips -->
                    <path
                      d="M80 69 Q90 76 100 69"
                      stroke="#c96d7a"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      fill="none"
                    />
                    <path
                      d="M82 69 Q90 72 98 69"
                      stroke="#f1a2b0"
                      stroke-width="1"
                      stroke-linecap="round"
                      fill="none"
                    />
                  </g>

                  <!-- front hair overlays for styles that need bangs/curls -->
                  <g id="front-hair-layer">
                    <!-- curly bangs for sleek bun -->
                    <g id="hair_sleek-bun_overlay" class="avatar-piece">
                      <!-- wide hairline cap following the top of the head, curving down toward the temples -->
                      <path
                        d="M60 36 Q90 24 120 36 Q116 52 90 56 Q64 52 60 36Z"
                        fill="#1b1025"
                      />
                      <!-- left bang: bigger, looser curl starting from that cap -->
                      <path
                        d="M78 36 Q66 46 66 60 Q66 74 72 88"
                        stroke="#1b1025"
                        stroke-width="3"
                        stroke-linecap="round"
                        fill="none"
                      />
                      <!-- right bang -->
                      <path
                        d="M102 36 Q114 46 114 60 Q114 74 108 88"
                        stroke="#1b1025"
                        stroke-width="3"
                        stroke-linecap="round"
                        fill="none"
                      />
                    </g>
                  </g>
                </g>

                <!-- MAKEUP LOOKS -->
                <g id="makeup-layer">
                  <!-- soft glam: warm blush + glossy lip -->
                  <g id="makeup_soft-glam_art" class="avatar-piece">
                    <ellipse
                      cx="76"
                      cy="72"
                      rx="4.5"
                      ry="2.6"
                      fill="rgba(244, 152, 142, 0.6)"
                    />
                    <ellipse
                      cx="104"
                      cy="72"
                      rx="4.5"
                      ry="2.6"
                      fill="rgba(244, 152, 142, 0.6)"
                    />
                    <path
                      d="M82 70 Q90 74 98 70"
                      stroke="#f49baf"
                      stroke-width="2.2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M82 70 Q90 72.5 98 70"
                      stroke="#ffd0de"
                      stroke-width="1.2"
                      stroke-linecap="round"
                    />
                  </g>

                  <!-- rave glitter liner -->
                  <g id="makeup_glitter-liner_art" class="avatar-piece">
                    <path
                      d="M76 56 Q82 52 88 56"
                      stroke="#7df9ff"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                    <path
                      d="M92 56 Q98 52 104 56"
                      stroke="#ff9df2"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                    <circle cx="80" cy="54" r="0.8" fill="#ffffff" />
                    <circle cx="86" cy="54" r="0.8" fill="#ffffff" />
                    <circle cx="94" cy="54" r="0.8" fill="#ffffff" />
                    <circle cx="100" cy="54" r="0.8" fill="#ffffff" />
                  </g>

                  <!-- sunkissed bronze -->
                  <g id="makeup_sunkissed_art" class="avatar-piece">
                    <path
                      d="M74 63 Q90 70 106 63"
                      stroke="rgba(193, 120, 70, 0.9)"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <ellipse
                      cx="90"
                      cy="74"
                      rx="10"
                      ry="4"
                      fill="rgba(201, 125, 80, 0.7)"
                    />
                  </g>

                  <!-- clean girl -->
                  <g id="makeup_clean-girl_art" class="avatar-piece">
                    <ellipse
                      cx="82"
                      cy="58"
                      rx="3.6"
                      ry="2.4"
                      fill="#fdfbff"
                    />
                    <ellipse
                      cx="98"
                      cy="58"
                      rx="3.6"
                      ry="2.4"
                      fill="#fdfbff"
                    />
                    <circle cx="82" cy="58" r="1.4" fill="#2a1a2c" />
                    <circle cx="98" cy="58" r="1.4" fill="#2a1a2c" />
                    <path
                      d="M82 68 Q90 70 98 68"
                      stroke="#e8a9b0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>

                  <!-- siren smoky eye -->
                  <g id="makeup_siren_art" class="avatar-piece">
                    <path
                      d="M76 56 Q82 52 88 56 Q84 58 80 58Z"
                      fill="#4b2338"
                      opacity="0.9"
                    />
                    <path
                      d="M92 56 Q98 52 104 56 Q100 58 96 58Z"
                      fill="#4b2338"
                      opacity="0.9"
                    />
                    <path
                      d="M80 69 Q90 76 100 69"
                      stroke="#8a555a"
                      stroke-width="2"
                      stroke-linecap="round"
                      fill="none"
                    />
                  </g>

                  <g id="makeup_bold-red_art" class="avatar-piece">
                    <path
                      d="M78 68 Q90 76 102 68"
                      stroke="#b71c34"
                      stroke-width="3"
                      stroke-linecap="round"
                      fill="none"
                    />
                    <path
                      d="M80 68 Q90 73 100 68"
                      fill="#c62838"
                    />
                  </g>
                </g>

                <!-- DRESSES -->
                <g id="dress-layer">
                  <g id="dress_slip-dress_art" class="avatar-piece">
                    <path
                      d="M64 96 Q90 86 116 96 L122 190 Q90 210 58 190Z"
                      fill="#f0a5c0"
                    />
                    <path
                      d="M72 92 Q90 84 108 92"
                      stroke="#ffdbe9"
                      stroke-width="2"
                      fill="none"
                    />
                  </g>

                  <g id="dress_ballgown_art" class="avatar-piece">
                    <path
                      d="M64 96 Q90 88 116 96 L138 210 Q90 234 42 210Z"
                      fill="#4a215e"
                    />
                    <path
                      d="M50 156 Q90 142 130 156"
                      stroke="#b67bff"
                      stroke-width="2"
                      fill="none"
                      stroke-dasharray="4 4"
                      opacity="0.9"
                    />
                    <circle cx="78" cy="170" r="2" fill="#ffd6ff" />
                    <circle cx="102" cy="182" r="2" fill="#ffd6ff" />
                    <circle cx="90" cy="200" r="2" fill="#ffd6ff" />
                  </g>

                  <g id="dress_metallic-mini_art" class="avatar-piece">
                    <rect
                      x="64"
                      y="96"
                      width="52"
                      height="64"
                      rx="18"
                      fill="#f6f0ff"
                    />
                    <path
                      d="M64 120 Q90 108 116 120"
                      stroke="#c6b3ff"
                      stroke-width="2"
                      fill="none"
                    />
                    <rect
                      x="66"
                      y="98"
                      width="12"
                      height="18"
                      rx="8"
                      fill="rgba(255,255,255,0.65)"
                    />
                    <rect
                      x="102"
                      y="98"
                      width="12"
                      height="18"
                      rx="8"
                      fill="rgba(255,255,255,0.4)"
                    />
                  </g>

                  <g id="dress_cutout-knit_art" class="avatar-piece">
                    <path
                      d="M68 96 Q90 88 112 96 L120 210 Q90 228 60 210Z"
                      fill="#f3c8a0"
                    />
                    <path
                      d="M74 120 Q90 110 106 120"
                      stroke="#fbe1c5"
                      stroke-width="3"
                      fill="none"
                      stroke-dasharray="2 4"
                    />
                    <path
                      d="M72 150 Q90 140 108 150"
                      stroke="#fbe1c5"
                      stroke-width="3"
                      fill="none"
                      stroke-dasharray="2 4"
                    />
                  </g>

                  <g id="dress_archi-column_art" class="avatar-piece">
                    <rect
                      x="70"
                      y="96"
                      width="40"
                      height="110"
                      rx="12"
                      fill="#f2f2f5"
                    />
                    <path
                      d="M70 132 Q90 122 110 132"
                      stroke="#c4c7d4"
                      stroke-width="2"
                      fill="none"
                    />
                    <rect
                      x="70"
                      y="160"
                      width="40"
                      height="30"
                      rx="10"
                      fill="#d9dde7"
                    />
                  </g>

                  <g id="dress_blazer_art" class="avatar-piece">
                    <path d="M64 96 L70 96 L72 200 Q90 216 108 200 L110 96 L116 96" fill="#1a1a2e"/>
                    <path d="M90 96 L90 200" stroke="#3a3a5a" stroke-width="1" fill="none"/>
                    <rect x="88" y="96" width="4" height="30" rx="1" fill="#2a2a4a"/>
                    <path d="M72 132 Q90 124 108 132" stroke="#4a4a6a" stroke-width="1.5" fill="none"/>
                  </g>
                </g>

                <!-- TOPS -->
                <g id="top-layer">
                  <g id="top_mesh-long-sleeve_art" class="avatar-piece">
                    <rect
                      x="52"
                      y="96"
                      width="76"
                      height="46"
                      rx="24"
                      fill="rgba(134,88,214,0.4)"
                      stroke="rgba(255,255,255,0.4)"
                      stroke-width="1.2"
                    />
                    <path
                      d="M54 106 L126 132"
                      stroke="rgba(255,255,255,0.3)"
                      stroke-width="1"
                    />
                    <path
                      d="M54 118 L126 144"
                      stroke="rgba(255,255,255,0.3)"
                      stroke-width="1"
                    />
                  </g>

                  <g id="top_corset_art" class="avatar-piece">
                    <path
                      d="M56 96 L124 96 L118 138 Q90 150 62 138Z"
                      fill="#642f76"
                    />
                    <path
                      d="M90 96 L90 144"
                      stroke="#fce6ff"
                      stroke-width="1.5"
                    />
                    <circle cx="90" cy="104" r="1.4" fill="#fce6ff" />
                    <circle cx="90" cy="114" r="1.4" fill="#fce6ff" />
                    <circle cx="90" cy="124" r="1.4" fill="#fce6ff" />
                    <circle cx="90" cy="134" r="1.4" fill="#fce6ff" />
                  </g>

                  <g id="top_baby-tee_art" class="avatar-piece">
                    <path
                      d="M60 98 Q90 86 120 98 L116 132 Q90 140 64 132Z"
                      fill="#ffb9dd"
                    />
                    <text
                      x="90"
                      y="118"
                      text-anchor="middle"
                      font-size="8"
                      fill="#7d1d4b"
                    >
                      ANGEL
                    </text>
                  </g>

                  <g id="top_satin-cami_art" class="avatar-piece">
                    <path
                      d="M66 96 Q90 86 114 96 L118 132 Q90 144 62 132Z"
                      fill="#f7d5c8"
                    />
                    <path
                      d="M66 96 L72 84"
                      stroke="#f7d5c8"
                      stroke-width="2"
                    />
                    <path
                      d="M114 96 L108 84"
                      stroke="#f7d5c8"
                      stroke-width="2"
                    />
                  </g>

                  <g id="top_cropped-hoodie_art" class="avatar-piece">
                    <path d="M52 96 Q90 90 128 96 L124 132 Q90 142 56 132Z" fill="#4a4a6a"/>
                    <path d="M56 96 L64 84 L72 96 M124 96 L116 84 L108 96" stroke="#5a5a7a" stroke-width="2" fill="none"/>
                    <rect x="84" y="94" width="12" height="16" rx="2" fill="#6a6a8a"/>
                  </g>

                  <g id="top_oversized-shirt_art" class="avatar-piece">
                    <path
                      d="M50 96 Q90 88 130 96 L126 140 Q90 154 54 140Z"
                      fill="#f1f6f0"
                    />
                    <path
                      d="M88 96 L92 146"
                      stroke="#c7d3c7"
                      stroke-width="1.5"
                    />
                    <circle cx="90" cy="104" r="1.3" fill="#c7d3c7" />
                    <circle cx="90" cy="116" r="1.3" fill="#c7d3c7" />
                    <circle cx="90" cy="128" r="1.3" fill="#c7d3c7" />
                  </g>
                </g>

                <!-- BOTTOMS -->
                <g id="bottom-layer">
                  <g id="bottom_cargo-mini_art" class="avatar-piece">
                    <rect
                      x="62"
                      y="140"
                      width="56"
                      height="38"
                      rx="10"
                      fill="#717bff"
                    />
                    <rect
                      x="66"
                      y="150"
                      width="14"
                      height="10"
                      rx="3"
                      fill="#9aa3ff"
                    />
                    <rect
                      x="100"
                      y="150"
                      width="14"
                      height="10"
                      rx="3"
                      fill="#9aa3ff"
                    />
                    <rect
                      x="83"
                      y="140"
                      width="14"
                      height="4"
                      rx="2"
                      fill="#c6cdff"
                    />
                  </g>

                  <g id="bottom_lowrise-jeans_art" class="avatar-piece">
                    <path
                      d="M64 140 Q90 134 116 140 L118 208 L108 216 L72 216 L62 208Z"
                      fill="#4d77a5"
                    />
                    <path
                      d="M88 140 Q90 144 92 140"
                      stroke="#f6f9ff"
                      stroke-width="1.5"
                    />
                    <circle cx="84" cy="146" r="1.4" fill="#f6f9ff" />
                    <circle cx="96" cy="146" r="1.4" fill="#f6f9ff" />
                  </g>

                  <g id="bottom_tulle-skirt_art" class="avatar-piece">
                    <path
                      d="M60 142 Q90 134 120 142 L136 196 Q90 214 44 196Z"
                      fill="#f4c6ff"
                      opacity="0.9"
                    />
                    <path
                      d="M52 168 Q90 158 128 168"
                      stroke="#ffe6ff"
                      stroke-width="2"
                      fill="none"
                    />
                  </g>

                  <g id="bottom_tailored-trousers_art" class="avatar-piece">
                    <path
                      d="M66 140 Q90 134 114 140 L118 210 L104 220 L90 210 L76 220 L62 210Z"
                      fill="#262634"
                    />
                    <path
                      d="M90 140 L90 208"
                      stroke="#4a4a65"
                      stroke-width="1.2"
                    />
                  </g>

                  <g id="bottom_knitted-shorts_art" class="avatar-piece">
                    <rect
                      x="64"
                      y="144"
                      width="52"
                      height="32"
                      rx="12"
                      fill="#f1c9aa"
                    />
                    <path
                      d="M64 160 Q90 152 116 160"
                      stroke="#f7dcc5"
                      stroke-width="3"
                      fill="none"
                      stroke-dasharray="2 3"
                    />
                  </g>

                  <g id="bottom_wide-leg_art" class="avatar-piece">
                    <path d="M58 142 Q62 180 56 216 L68 218 L72 178 Q76 150 90 148 Q104 150 108 178 L112 218 L124 216 Q118 180 122 142 Z" fill="#2a2a2a"/>
                    <path d="M70 170 Q90 168 110 170" stroke="#4a4a4a" stroke-width="1" fill="none"/>
                  </g>
                </g>

                <!-- SHOES -->
                <g id="shoes-layer">
                  <g id="shoes_holographic-platforms_art" class="avatar-piece">
                    <rect
                      x="60"
                      y="216"
                      width="26"
                      height="10"
                      rx="4"
                      fill="#f7f0ff"
                    />
                    <rect
                      x="94"
                      y="216"
                      width="26"
                      height="10"
                      rx="4"
                      fill="#f7f0ff"
                    />
                    <rect
                      x="60"
                      y="224"
                      width="26"
                      height="8"
                      rx="3"
                      fill="#c0b7ff"
                    />
                    <rect
                      x="94"
                      y="224"
                      width="26"
                      height="8"
                      rx="3"
                      fill="#c0b7ff"
                    />
                  </g>

                  <g id="shoes_satin-heels_art" class="avatar-piece">
                    <path
                      d="M60 218 L78 218 L82 224 L66 224Z"
                      fill="#f9b8c6"
                    />
                    <path d="M96 218 L114 218 L118 224 L102 224Z" fill="#f9b8c6" />
                    <rect
                      x="62"
                      y="224"
                      width="3"
                      height="7"
                      fill="#f3a2b5"
                    />
                    <rect
                      x="112"
                      y="224"
                      width="3"
                      height="7"
                      fill="#f3a2b5"
                    />
                  </g>

                  <g id="shoes_pointed-flats_art" class="avatar-piece">
                    <path
                      d="M60 218 L78 218 L70 226Z"
                      fill="#f3f0f5"
                    />
                    <path
                      d="M102 218 L120 218 L112 226Z"
                      fill="#f3f0f5"
                    />
                  </g>

                  <g id="shoes_beaded-sandals_art" class="avatar-piece">
                    <rect
                      x="58"
                      y="220"
                      width="26"
                      height="4"
                      rx="2"
                      fill="#f0e3c0"
                    />
                    <rect
                      x="96"
                      y="220"
                      width="26"
                      height="4"
                      rx="2"
                      fill="#f0e3c0"
                    />
                    <circle cx="62" cy="220" r="1.3" fill="#ff9ab3" />
                    <circle cx="70" cy="220" r="1.3" fill="#78ffe0" />
                    <circle cx="78" cy="220" r="1.3" fill="#ffd56b" />
                    <circle cx="100" cy="220" r="1.3" fill="#ff9ab3" />
                    <circle cx="108" cy="220" r="1.3" fill="#78ffe0" />
                    <circle cx="116" cy="220" r="1.3" fill="#ffd56b" />
                  </g>

                  <g id="shoes_furry-mules_art" class="avatar-piece">
                    <rect
                      x="60"
                      y="218"
                      width="24"
                      height="6"
                      rx="3"
                      fill="#fdd9ff"
                    />
                    <rect
                      x="98"
                      y="218"
                      width="24"
                      height="6"
                      rx="3"
                      fill="#fdd9ff"
                    />
                    <ellipse
                      cx="72"
                      cy="220"
                      rx="10"
                      ry="5"
                      fill="#ffeefd"
                    />
                    <ellipse
                      cx="110"
                      cy="220"
                      rx="10"
                      ry="5"
                      fill="#ffeefd"
                    />
                  </g>

                  <g id="shoes_chunky-boots_art" class="avatar-piece">
                    <rect x="56" y="208" width="32" height="18" rx="4" fill="#1a1a1a"/>
                    <rect x="92" y="208" width="32" height="18" rx="4" fill="#1a1a1a"/>
                    <rect x="58" y="212" width="28" height="12" rx="2" fill="#2a2a2a"/>
                    <rect x="94" y="212" width="28" height="12" rx="2" fill="#2a2a2a"/>
                    <rect x="62" y="204" width="20" height="8" rx="2" fill="#252525"/>
                    <rect x="98" y="204" width="20" height="8" rx="2" fill="#252525"/>
                  </g>
                </g>

                <!-- ACCESSORIES -->
                <g id="accessories-layer">
                  <g id="acc_neon-sunnies_art" class="avatar-piece">
                    <rect
                      x="70"
                      y="54"
                      width="16"
                      height="6"
                      rx="3"
                      fill="#4cf5ff"
                    />
                    <rect
                      x="94"
                      y="54"
                      width="16"
                      height="6"
                      rx="3"
                      fill="#4cf5ff"
                    />
                    <rect
                      x="86"
                      y="56"
                      width="8"
                      height="2"
                      fill="#befdff"
                    />
                  </g>

                  <g id="acc_pearl-choker_art" class="avatar-piece">
                    <circle cx="78" cy="80" r="2" fill="#fff3ff" />
                    <circle cx="84" cy="81" r="2" fill="#fff3ff" />
                    <circle cx="90" cy="82" r="2" fill="#fff3ff" />
                    <circle cx="96" cy="81" r="2" fill="#fff3ff" />
                    <circle cx="102" cy="80" r="2" fill="#fff3ff" />
                  </g>

                  <g id="acc_butterfly-clips_art" class="avatar-piece">
                    <path
                      d="M68 48 L72 44 L76 48 L72 52Z"
                      fill="#ffb8f2"
                    />
                    <path
                      d="M104 48 L108 44 L112 48 L108 52Z"
                      fill="#ffb8f2"
                    />
                  </g>

                  <g id="acc_giant-tote_art" class="avatar-piece">
                    <rect
                      x="120"
                      y="128"
                      width="26"
                      height="34"
                      rx="6"
                      fill="#f6efe0"
                    />
                    <path
                      d="M124 128 Q133 118 142 128"
                      stroke="#e0d1b3"
                      stroke-width="2"
                      fill="none"
                    />
                  </g>

                  <g id="acc_gold-earrings_art" class="avatar-piece">
                    <circle
                      cx="72"
                      cy="66"
                      r="4"
                      stroke="#f3b85c"
                      stroke-width="2"
                      fill="none"
                    />
                    <circle
                      cx="108"
                      cy="66"
                      r="4"
                      stroke="#f3b85c"
                      stroke-width="2"
                      fill="none"
                    />
                  </g>

                  <g id="acc_opera-gloves_art" class="avatar-piece">
                    <rect
                      x="38"
                      y="110"
                      width="14"
                      height="70"
                      rx="7"
                      fill="#f6ecff"
                    />
                    <rect
                      x="128"
                      y="110"
                      width="14"
                      height="70"
                      rx="7"
                      fill="#f6ecff"
                    />
                  </g>
                </g>
              </svg>`,Zf=`<svg id="avatarBackSvg" class="avatar-svg" viewBox="0 0 180 260" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="180" height="260" fill="url(#haloGrad)" rx="28"/>
                  <g id="back-base">
                    <rect x="36" y="104" width="14" height="82" rx="9" fill="url(#skinGrad)"/>
                    <rect x="130" y="104" width="14" height="82" rx="9" fill="url(#skinGrad)"/>
                    <circle cx="90" cy="60" r="26" fill="url(#skinGrad)" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>
                    <rect x="82" y="76" width="16" height="18" rx="7" fill="url(#skinGrad)"/>
                    <path d="M54 96 Q90 82 126 96 Q122 132 114 152 Q106 170 90 174 Q74 170 66 152 Q58 132 54 96Z" fill="url(#skinGrad)"/>
                    <path d="M62 168 Q90 182 118 168 L122 194 Q108 206 90 208 Q72 206 58 194Z" fill="url(#skinGrad)"/>
                    <rect x="72" y="194" width="14" height="60" rx="7" fill="url(#skinGrad)"/>
                    <rect x="94" y="194" width="14" height="60" rx="7" fill="url(#skinGrad)"/>
                  </g>
                  <g id="back-dress-layer">
                    <g id="dress_slip-dress_back_art" class="avatar-piece"><path d="M58 96 Q90 88 122 96 L118 194 Q90 208 62 194Z" fill="#e8d5e8" stroke="#c4a8c4" stroke-width="1"/></g>
                    <g id="dress_ballgown_back_art" class="avatar-piece"><path d="M50 96 Q90 80 130 96 Q128 140 120 200 Q90 220 60 200 Q52 140 50 96Z" fill="#3d1a4a" stroke="#5c2a6a" stroke-width="1"/></g>
                    <g id="dress_metallic-mini_back_art" class="avatar-piece"><path d="M60 96 Q90 90 120 96 L116 150 Q90 160 64 150Z" fill="#8a9bb5" stroke="#6a7b95" stroke-width="1"/></g>
                    <g id="dress_cutout-knit_back_art" class="avatar-piece"><path d="M56 96 Q90 86 124 96 L120 194 Q90 208 60 194Z" fill="#d4c4b8" stroke="#b8a898" stroke-width="1"/></g>
                    <g id="dress_archi-column_back_art" class="avatar-piece"><path d="M62 96 L118 96 L114 194 Q90 208 66 194Z" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="1"/></g>
                    <g id="dress_blazer_back_art" class="avatar-piece"><path d="M58 96 L122 96 L118 194 Q90 208 62 194Z" fill="#1a1a2e" stroke="#2a2a4a" stroke-width="1"/></g>
                  </g>
                  <g id="back-top-layer">
                    <g id="top_mesh-long-sleeve_back_art" class="avatar-piece"><path d="M52 96 Q90 84 128 96 L124 138 Q90 152 56 138Z" fill="rgba(134,88,214,0.5)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/></g>
                    <g id="top_corset_back_art" class="avatar-piece"><path d="M56 96 L124 96 L118 142 Q90 152 62 142Z" fill="#642f76"/></g>
                    <g id="top_baby-tee_back_art" class="avatar-piece"><path d="M60 96 Q90 88 120 96 L116 138 Q90 148 64 138Z" fill="#ffb9dd"/></g>
                    <g id="top_satin-cami_back_art" class="avatar-piece"><path d="M64 96 Q90 88 116 96 L112 138 Q90 148 68 138Z" fill="#f7d5c8"/></g>
                    <g id="top_oversized-shirt_back_art" class="avatar-piece"><path d="M48 96 Q90 86 132 96 L128 148 Q90 162 52 148Z" fill="#f1f6f0"/></g>
                    <g id="top_cropped-hoodie_back_art" class="avatar-piece"><path d="M52 96 Q90 88 128 96 L124 132 Q90 142 56 132Z" fill="#4a4a6a"/></g>
                  </g>
                  <g id="back-bottom-layer">
                    <g id="bottom_cargo-mini_back_art" class="avatar-piece"><path d="M62 140 Q90 132 118 140 L114 180 Q90 188 66 180Z" fill="#717bff"/></g>
                    <g id="bottom_lowrise-jeans_back_art" class="avatar-piece"><path d="M64 140 Q90 132 116 140 L112 216 L68 216 L64 208Z" fill="#4d77a5"/></g>
                    <g id="bottom_tulle-skirt_back_art" class="avatar-piece"><path d="M58 140 Q90 120 122 140 Q118 200 90 212 Q62 200 58 140Z" fill="#fce6ff"/></g>
                    <g id="bottom_tailored-trousers_back_art" class="avatar-piece"><path d="M66 140 L114 140 L110 216 L70 216Z" fill="#1a1a1a"/></g>
                    <g id="bottom_knitted-shorts_back_art" class="avatar-piece"><path d="M64 140 Q90 136 116 140 L112 175 Q90 182 68 175Z" fill="#c7d3c7"/></g>
                    <g id="bottom_wide-leg_back_art" class="avatar-piece"><path d="M58 140 L62 216 L70 218 L74 160 Q90 158 106 160 L110 218 L118 216 L122 140Z" fill="#2a2a2a"/></g>
                  </g>
                  <g id="back-hair-layer">
                    <g id="hair_bubble-pigtails_back_art" class="avatar-piece"><path d="M64 28 Q90 6 116 28 Q116 52 104 66 Q90 72 76 66 Q64 52 64 28Z" fill="#3a1b4a"/><circle cx="58" cy="62" r="10" fill="#5c2a7a"/><circle cx="122" cy="62" r="10" fill="#5c2a7a"/></g>
                    <g id="hair_sleek-bun_back_art" class="avatar-piece"><path d="M60 24 Q90 6 120 24 Q118 56 106 74 Q90 82 74 74 Q62 62 60 24Z" fill="#1b1025"/></g>
                    <g id="hair_beach-waves_back_art" class="avatar-piece"><path d="M60 38 Q90 18 120 38 L118 86 Q116 120 108 146 Q100 168 90 172 Q80 168 72 146 Q64 120 62 86Z" fill="#d38f5b"/></g>
                    <g id="hair_space-buns_back_art" class="avatar-piece"><ellipse cx="90" cy="28" rx="26" ry="14" fill="#2b103f"/></g>
                    <g id="hair_claw-clip_back_art" class="avatar-piece"><path d="M70 25 Q90 10 110 25 L108 55 Q90 68 72 55Z" fill="#211626"/></g>
                    <g id="hair_curtain-bangs_back_art" class="avatar-piece"><path d="M60 38 Q90 22 120 38 L118 78 Q116 110 108 136 Q100 156 90 160 Q80 156 72 136 Q64 110 62 78Z" fill="#2a1835"/></g>
                  </g>
                  <g id="back-shoes-layer">
                    <g id="shoes_holographic-platforms_back_art" class="avatar-piece"><path d="M70 250 L80 254 L100 254 L110 250 M94 250 L104 254 L124 254 L134 250" stroke="#b8c4ff" stroke-width="4" fill="none"/></g>
                    <g id="shoes_satin-heels_back_art" class="avatar-piece"><path d="M72 248 L88 256 L102 256 L118 248 M92 248 L106 256 L120 256 L136 248" stroke="#e8d5f0" stroke-width="3" fill="none"/></g>
                    <g id="shoes_pointed-flats_back_art" class="avatar-piece"><path d="M72 252 L90 256 L110 256 L128 252 M92 252 L108 256 L128 256 L146 252" stroke="#2a2a2a" stroke-width="2" fill="none"/></g>
                    <g id="shoes_beaded-sandals_back_art" class="avatar-piece"><path d="M70 252 L88 256 L102 256 L120 252 M92 252 L108 256 L122 256 L140 252" stroke="#d4b868" stroke-width="2" fill="none"/></g>
                    <g id="shoes_furry-mules_back_art" class="avatar-piece"><path d="M68 250 Q88 256 108 250 M90 250 Q108 256 128 250" stroke="#c9a882" stroke-width="6" fill="none" stroke-linecap="round"/></g>
                    <g id="shoes_chunky-boots_back_art" class="avatar-piece"><path d="M58 206 L66 254 L94 254 L102 206 M92 206 L100 254 L128 254 L136 206" stroke="#1a1a1a" stroke-width="8" fill="none" stroke-linecap="round"/></g>
                  </g>
                </svg>`,$f=`<svg class="result-queen-svg" viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                      <linearGradient id="queenHairGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#ff6ec7" />
                        <stop offset="100%" stop-color="#a01a6b" />
                      </linearGradient>
                      <linearGradient id="queenLipGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#ff3d8a" />
                        <stop offset="100%" stop-color="#c41e5a" />
                      </linearGradient>
                      <linearGradient id="queenSkinGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#f5c6a3" />
                        <stop offset="100%" stop-color="#f5c6a3" />
                      </linearGradient>
                    </defs>
                    <!-- POSE: slay - arms up, triumphant -->
                    <g class="result-queen-pose result-queen-pose--slay" data-pose="slay">
                      <path d="M28 5 Q60 -8 92 5 Q100 50 88 68 L70 62 L66 75 L60 70 L54 75 L50 62 L32 68 Q20 50 28 5Z" fill="url(#queenHairGrad)" stroke="#2d0a1f" stroke-width="0.8"/>
                      <path d="M42 92 L24 52 L32 48 L48 88 L72 88 L88 48 L96 52 L78 92Z" fill="url(#queenSkinGrad)"/>
                      <path d="M44 88 Q32 95 34 108 Q38 120 28 135 Q42 142 60 142 Q78 142 92 135 Q82 120 86 108 Q88 95 76 88 Q60 78 44 88Z" fill="#ff7bb8" stroke="#c41e5a" stroke-width="0.8"/>
                      <rect x="46" y="140" width="12" height="40" rx="5" fill="url(#queenSkinGrad)"/>
                      <rect x="62" y="140" width="12" height="40" rx="5" fill="url(#queenSkinGrad)"/>
                      <rect x="54" y="60" width="12" height="30" rx="6" fill="url(#queenSkinGrad)"/>
                      <circle cx="60" cy="42" r="18" fill="url(#queenSkinGrad)" stroke="rgba(255,255,255,0.5)" stroke-width="0.8"/>
                      <path d="M54 34 Q60 30 66 34" stroke="#2b1630" stroke-width="2" stroke-linecap="round" fill="none"/>
                      <ellipse cx="60" cy="40" rx="5" ry="3.5" fill="#fdfbff"/>
                      <circle cx="60" cy="40" r="2.2" fill="#2a1a2c"/>
                      <path d="M52 38 L50 28 M55 37 L54 26 M60 36 L60 25 M65 37 L66 26 M68 38 L70 28" stroke="#1a0a12" stroke-width="1.2" stroke-linecap="round" fill="none"/>
                      <path d="M54 48 Q60 52 66 48" fill="none" stroke="url(#queenLipGrad)" stroke-width="1.2" stroke-linecap="round"/>
                    </g>
                    <!-- POSE: mid - arms crossed -->
                    <g class="result-queen-pose result-queen-pose--mid" data-pose="mid">
                      <path d="M28 4 Q60 -10 92 4 Q98 48 86 64 L68 58 L64 72 L60 66 L56 72 L52 58 L34 64 Q22 48 28 4Z" fill="url(#queenHairGrad)" stroke="#2d0a1f" stroke-width="0.8"/>
                      <path d="M38 90 L28 112 L36 120 L52 92 M82 90 L92 112 L84 120 L68 92" fill="url(#queenSkinGrad)"/>
                      <rect x="44" y="124" width="32" height="8" rx="3" fill="url(#queenSkinGrad)"/>
                      <path d="M44 86 Q30 94 32 108 Q36 120 26 136 Q40 140 60 140 Q80 140 94 136 Q84 120 88 108 Q90 94 76 86 Q60 76 44 86Z" fill="#c41e5a" stroke="#8b1538" stroke-width="0.8"/>
                      <rect x="46" y="138" width="12" height="42" rx="5" fill="url(#queenSkinGrad)"/>
                      <rect x="62" y="138" width="12" height="42" rx="5" fill="url(#queenSkinGrad)"/>
                      <rect x="54" y="58" width="12" height="30" rx="6" fill="url(#queenSkinGrad)"/>
                      <circle cx="60" cy="41" r="18" fill="url(#queenSkinGrad)" stroke="rgba(255,255,255,0.5)" stroke-width="0.8"/>
                      <path d="M54 33 Q60 29 66 33" stroke="#2b1630" stroke-width="2" stroke-linecap="round" fill="none"/>
                      <ellipse cx="60" cy="39" rx="5" ry="3.5" fill="#fdfbff"/>
                      <circle cx="60" cy="39" r="2.2" fill="#2a1a2c"/>
                      <path d="M52 37 L50 27 M55 36 L54 25 M60 35 L60 24 M65 36 L66 25 M68 37 L70 27" stroke="#1a0a12" stroke-width="1.2" stroke-linecap="round" fill="none"/>
                      <path d="M54 47 Q60 50 66 47" fill="none" stroke="url(#queenLipGrad)" stroke-width="1.2" stroke-linecap="round"/>
                    </g>
                    <!-- POSE: flop - hand on hip, pointing -->
                    <g class="result-queen-pose result-queen-pose--flop" data-pose="flop">
                      <path d="M28 6 Q60 -8 92 6 Q96 50 84 66 L66 60 L62 74 L60 68 L58 74 L54 60 L36 66 Q24 50 28 6Z" fill="url(#queenHairGrad)" stroke="#2d0a1f" stroke-width="0.8"/>
                      <path d="M36 92 L24 130 L32 132 L42 92Z M84 92 L96 130 L88 132 L78 92Z" fill="url(#queenSkinGrad)"/>
                      <path d="M46 88 Q32 96 34 110 Q38 122 28 138 Q42 142 60 142 Q78 142 92 138 Q82 122 86 110 Q88 96 74 88 Q60 78 46 88Z" fill="#ff3d8a" stroke="#c41e5a" stroke-width="0.8"/>
                      <rect x="46" y="140" width="12" height="40" rx="5" fill="url(#queenSkinGrad)"/>
                      <rect x="62" y="140" width="12" height="40" rx="5" fill="url(#queenSkinGrad)"/>
                      <rect x="54" y="60" width="12" height="30" rx="6" fill="url(#queenSkinGrad)"/>
                      <circle cx="60" cy="43" r="18" fill="url(#queenSkinGrad)" stroke="rgba(255,255,255,0.5)" stroke-width="0.8"/>
                      <path d="M54 37 Q60 33 66 37" stroke="#2b1630" stroke-width="2" stroke-linecap="round" fill="none"/>
                      <ellipse cx="60" cy="41" rx="5" ry="3.5" fill="#fdfbff"/>
                      <circle cx="60" cy="41" r="2.2" fill="#2a1a2c"/>
                      <path d="M52 39 L50 29 M55 38 L54 27 M60 37 L60 26 M65 38 L66 27 M68 39 L70 29" stroke="#1a0a12" stroke-width="1.2" stroke-linecap="round" fill="none"/>
                      <path d="M55 49 Q60 51 65 49" fill="none" stroke="url(#queenLipGrad)" stroke-width="1.2" stroke-linecap="round"/>
                    </g>
                    <!-- POSE: idle - neutral waiting -->
                    <g class="result-queen-pose result-queen-pose--idle" data-pose="idle">
                      <path d="M28 4 Q60 -10 92 4 Q98 48 86 64 L68 58 L64 72 L60 66 L56 72 L52 58 L34 64 Q22 48 28 4Z" fill="url(#queenHairGrad)" stroke="#2d0a1f" stroke-width="0.8"/>
                      <path d="M34 90 L22 135 L30 136 L40 92Z M86 90 L98 135 L90 136 L80 92Z" fill="url(#queenSkinGrad)"/>
                      <path d="M44 86 Q30 94 32 108 Q36 120 26 136 Q40 140 60 140 Q80 140 94 136 Q84 120 88 108 Q90 94 76 86 Q60 76 44 86Z" fill="#ff9ad7" stroke="#c41e5a" stroke-width="0.8"/>
                      <rect x="46" y="138" width="12" height="42" rx="5" fill="url(#queenSkinGrad)"/>
                      <rect x="62" y="138" width="12" height="42" rx="5" fill="url(#queenSkinGrad)"/>
                      <rect x="54" y="58" width="12" height="30" rx="6" fill="url(#queenSkinGrad)"/>
                      <circle cx="60" cy="41" r="18" fill="url(#queenSkinGrad)" stroke="rgba(255,255,255,0.5)" stroke-width="0.8"/>
                      <path d="M54 33 Q60 29 66 33" stroke="#2b1630" stroke-width="2" stroke-linecap="round" fill="none"/>
                      <ellipse cx="60" cy="39" rx="5" ry="3.5" fill="#fdfbff"/>
                      <circle cx="60" cy="39" r="2.2" fill="#2a1a2c"/>
                      <path d="M52 37 L50 27 M55 36 L54 25 M60 35 L60 24 M65 36 L66 25 M68 37 L70 27" stroke="#1a0a12" stroke-width="1.2" stroke-linecap="round" fill="none"/>
                      <path d="M54 47 Q60 50 66 47" fill="none" stroke="url(#queenLipGrad)" stroke-width="1.2" stroke-linecap="round"/>
                    </g>
                  </svg>`,Os={skin_espresso:{top:"#c58c5c",bottom:"#8b4a28"},skin_mocha:{top:"#c99a6d",bottom:"#9d6b3a"},skin_honey:{top:"#f5d4a8",bottom:"#e0a864"},skin_bronze:{top:"#e5b28a",bottom:"#c27a4a"},skin_olive:{top:"#f1c9aa",bottom:"#d99a72"},skin_porcelain:{top:"#fbe0d0",bottom:"#f1b39a"}},Qo=[{id:"rave",name:"Brat Rave",description:"Charli XCX is on the aux. Bass is violent, lasers everywhere. Dress to serve cunt—reflective, breathable, chaotic.",idealTags:["neon","mesh","platform","glow","mini","y2k"]},{id:"ball",name:"Midnight Masquerade Ball",description:"Anonymous glamour. Masks required, drama optional. Go full gown, corset, sparkle—and at least one detail that makes people whisper.",idealTags:["gown","dramatic","sparkle","corset","heels","opera"]},{id:"y2k",name:"Night out with Paris Hilton",description:"That's hot. Y2K vibes only—glossy, sparkly, early 2000s. Low-rise, baby tees, and enough glitter to make it obvious you understood the assignment.",idealTags:["low-rise","denim","baby-tee","platform","glossy"]},{id:"gallery",name:"Pretentious Art Gallery Opening",description:"Free wine, confusing sculptures, everyone pretending to know the artist. She needs something smart, sculptural, a little cold.",idealTags:["structured","monochrome","tailored","minimal","pointed"]},{id:"beach",name:"Sunset Beach Bonfire",description:"Sand everywhere, guitar guy, someone brought a projector for no reason. She needs cozy, layered, and sand-proof.",idealTags:["flowy","linen","sandals","oversized","knit"]},{id:"date",name:"Mystery Grindr Date",description:"He might be chopped. You never know. Dress cute either way—effortless that took three hours.",idealTags:["slip","heels","red","sheer","gold"]}],Is=[{id:"skin",label:"Skin tone",items:[{id:"skin_espresso",label:"Espresso slay",tags:["skin"]},{id:"skin_mocha",label:"Mocha latte",tags:["skin","date"]},{id:"skin_honey",label:"Honey warmth",tags:["skin","soft","date"]},{id:"skin_bronze",label:"Bronzed babe",tags:["skin","beach","glow"]},{id:"skin_olive",label:"Olive neutral",tags:["skin","gallery"]},{id:"skin_porcelain",label:"Porcelain glow",tags:["skin","soft"]}]},{id:"hair",label:"Hair",items:[{id:"hair_bubble-pigtails",label:"Bubble pigtails",tags:["y2k","playful"]},{id:"hair_sleek-bun",label:"Sleek bun",tags:["elegant","gallery","ball"]},{id:"hair_beach-waves",label:"Salt-kissed waves",tags:["beach","flowy"]},{id:"hair_space-buns",label:"Glitter space buns",tags:["neon","rave","glow"]},{id:"hair_claw-clip",label:"Claw clip updo",tags:["gallery","minimal"]},{id:"hair_curtain-bangs",label:"Curtain bangs",tags:["flowy","date","soft"]}]},{id:"makeup",label:"Makeup",items:[{id:"makeup_soft-glam",label:"Soft glam neutral",tags:["soft","glam","date","ball"]},{id:"makeup_glitter-liner",label:"Neon glitter liner",tags:["neon","glitter","rave","y2k"]},{id:"makeup_sunkissed",label:"Sunkissed bronze",tags:["beach","glow"]},{id:"makeup_clean-girl",label:"Clean girl minimal",tags:["gallery","minimal"]},{id:"makeup_siren",label:"Siren smoky eye",tags:["dramatic","date","ball"]},{id:"makeup_bold-red",label:"Bold red lip",tags:["dramatic","ball","date"]}]},{id:"top",label:"Tops",items:[{id:"top_mesh-long-sleeve",label:"Sheer mesh long sleeve",tags:["mesh","rave","layer"]},{id:"top_corset",label:"Structured corset top",tags:["corset","dramatic","ball"]},{id:"top_baby-tee",label:"Baby tee with rhinestones",tags:["baby-tee","y2k"]},{id:"top_satin-cami",label:"Bias-cut satin cami",tags:["slip","date"]},{id:"top_oversized-shirt",label:"Oversized linen shirt",tags:["linen","oversized","beach"]},{id:"top_cropped-hoodie",label:"Cropped zip hoodie",tags:["y2k","casual","layered"]}]},{id:"bottom",label:"Bottoms",items:[{id:"bottom_cargo-mini",label:"Reflective cargo mini",tags:["neon","mini","rave"]},{id:"bottom_lowrise-jeans",label:"Low-rise bootcut jeans",tags:["low-rise","denim","y2k"]},{id:"bottom_tulle-skirt",label:"Layered tulle skirt",tags:["gown","dramatic","ball"]},{id:"bottom_tailored-trousers",label:"Tailored black trousers",tags:["structured","tailored","gallery"]},{id:"bottom_knitted-shorts",label:"Soft knit shorts",tags:["knit","beach"]},{id:"bottom_wide-leg",label:"Wide-leg cargo",tags:["oversized","y2k","casual"]}]},{id:"dress",label:"Dresses",items:[{id:"dress_slip-dress",label:"Backless silk slip",tags:["slip","date","heels"]},{id:"dress_ballgown",label:"Crushed velvet ballgown",tags:["gown","dramatic","sparkle","ball"]},{id:"dress_metallic-mini",label:"Metallic party mini",tags:["neon","mini","glow","rave"]},{id:"dress_cutout-knit",label:"Cutout knit maxi",tags:["beach","flowy","knit"]},{id:"dress_archi-column",label:"Architect column dress",tags:["structured","monochrome","gallery"]},{id:"dress_blazer",label:"Suit blazer dress",tags:["structured","tailored","gallery"]}]},{id:"shoes",label:"Shoes",items:[{id:"shoes_holographic-platforms",label:"Holographic platforms",tags:["platform","neon","rave"]},{id:"shoes_satin-heels",label:"Strappy satin heels",tags:["heels","ball","date"]},{id:"shoes_pointed-flats",label:"Pointed ballet flats",tags:["minimal","gallery"]},{id:"shoes_beaded-sandals",label:"Beaded flat sandals",tags:["sandals","beach"]},{id:"shoes_furry-mules",label:"Furry mules",tags:["y2k","playful"]},{id:"shoes_chunky-boots",label:"Chunky platform boots",tags:["platform","y2k","rave"]}]},{id:"accessories",label:"Accessories",items:[{id:"acc_neon-sunnies",label:"Neon shield sunglasses",tags:["neon","rave"]},{id:"acc_pearl-choker",label:"Pearl choker",tags:["ball","elegant"]},{id:"acc_butterfly-clips",label:"Butterfly hair clips",tags:["y2k","playful"]},{id:"acc_giant-tote",label:"Way-too-big tote",tags:["beach","oversized"]},{id:"acc_gold-earrings",label:"Gold sculptural earrings",tags:["gold","gallery","date"]},{id:"acc_opera-gloves",label:"Satin opera gloves",tags:["opera","ball","dramatic"]}]}];function qf(w){return w[Math.floor(Math.random()*w.length)]}function Kf(w){for(const j of Is){const h=j.items.find(U=>U.id===w);if(h)return h}return null}function Yf(w,j){if(!w)return{score:0,tier:"idle",title:"Pick Something. I'm Waiting.",text:"Honey. HONEY. I cannot read an empty calendar. Pick a goddamn event so I have something to work with. The audacity of showing up with NOTHING."};const h=Object.values(j).map(ue=>Kf(ue)).filter(Boolean);if(!h.length)return{score:5,tier:"flop",title:"Nothing On. NOTHING.",text:"A whole closet. A WHOLE CLOSET. And you come to me with NOTHING ON? Put something on that body before I have a stroke. I cannot read a mannequin, sweetie."};let U=40;h.forEach(ue=>{const J=ue.tags.filter(K=>w.idealTags.includes(K)).length;U+=J*10});const Q=!!j.dress,A=!!j.top&&!!j.bottom;Q&&A&&(U-=15),w.id==="ball"&&Q&&(U+=10),w.id==="rave"&&j.shoes==="shoes_satin-heels"&&(U-=10),w.id==="beach"&&j.shoes==="shoes_satin-heels"&&(U-=12),w.id==="gallery"&&j.hair==="hair_bubble-pigtails"&&(U-=8);const B=Object.keys(j).length;U+=B*2,U=Math.max(0,Math.min(100,U));let b="mid";U>=78?b="slay":U<=45&&(b="flop");const{title:H,text:ge}=Xf(w,h,U,b);return{score:U,tier:b,title:H,text:ge}}function Xf(w,j,h,U){const Q=j.length?j.slice(0,3).map(B=>B.label.toLowerCase()).join(", "):"the complete absence of an outfit";if(U==="slay"){const B=[`“Okay. OKAY. For ${w.name.toLowerCase()} you actually did that. I'm mad about it. ${Q}? Don't get cocky, bitch.”`,`“Alright, you ate. I'm not happy about it. Everyone at ${w.name.toLowerCase()} will think you tried. For once they'd be right. Don't let it go to your head.”`,`"I was READY to read you to filth and you had to go and do THIS? ${Q} for ${w.name.toLowerCase()}? Unfortunately you ate. I'm upset."`];return{title:"Certified Serve",text:B[Math.floor(Math.random()*B.length)]}}if(U==="flop"){const B=[`“For ${w.name.toLowerCase()}? HONEY. This is a HATE CRIME. ${Q}? Looks like you closed your eyes and grabbed three random hangers. The audacity.”`,`"Who HURT you? Who did this to you? The ${Q} combo is giving 'I gave up' and 'please ask me to leave.' I'm gonna need you to do better."`,`“She's at ${w.name.toLowerCase()} but her OUTFIT is in a different ZIP CODE. A different DECADE. Refusing to make eye contact. Baby, no.”`,`"This is NOT it. This is never it. ${Q} for this? Giving 'I read the invite wrong' or 'I'm the main character in a BAD way.' Oh, you thought?"`,`"The theme was RIGHT THERE. You had ONE JOB. ONE. This ${Q} situation? A public service announcement. Do better, sweetie."`,`"No. NO. For ${w.name.toLowerCase()}? Girl. The nerve. ${Q}? I'm gonna need you to go back to the closet and think about your choices."`];return{title:"Absolutely Not. No.",text:B[Math.floor(Math.random()*B.length)]}}const A=[`“She's dressed. I'll give you that. For ${w.name.toLowerCase()} it's giving 'I showed up' and 'I did not excel.' MID. Next.”`,"“This is the outfit of someone who will stand by the wall all night. Cute? Debatable. MEMORABLE? No. Goodbye.”",`“You'll get in. Will you get compliments? No. ${Q} is fine in the most forgettable way possible. I said what I said.”`,`"It's giving 'I had 20 minutes and it shows.' For ${w.name.toLowerCase()} that's not a flex. Do better. Or don't. I don't care. Next."`,`"Mid. MID. You'll blend in. You won't stand out. ${Q} is giving 'I showed up' and that's all. Bye."`];return{title:"You Tried. It Shows.",text:A[Math.floor(Math.random()*A.length)]}}function Jf(){const[w,j]=de.useState(null),[h,U]=de.useState({}),[Q,A]=de.useState(null),[B,b]=de.useState(!1),H=de.useRef(null),ge=de.useRef(null),ue=de.useRef(null),J=de.useRef(null),K=de.useRef(null),Fe=de.useRef(null),Me=de.useRef(null),ee=de.useRef(null),q=de.useRef(null),qe=de.useMemo(()=>Qo.map(C=>C.id),[]),tn=()=>{U({});const C=w==null?void 0:w.id,G=C?Qo.filter(ze=>ze.id!==C):Qo,pe=qf(G);j(pe),A(null),b(!1)},Ke=(C,G)=>{U(pe=>{if(pe[C]===G){const Be={...pe};return delete Be[C],Be}return{...pe,[C]:G}})},Se=()=>{const C=Yf(w,h);A(C),b(!0)},Ye=()=>{b(!1)};de.useEffect(()=>{const C=Fe.current;C&&(qe.forEach(G=>C.classList.remove(`event-${G}`)),w&&qe.includes(w.id)&&C.classList.add(`event-${w.id}`))},[w,qe]),de.useEffect(()=>{const C=K.current;if(C){if(!w){C.innerHTML="Okay so… all my cards just declined. No new outfit for me! Tragic. Luckily my closet is still insane. Help me pull a look—Eye-con is going to be there and she does NOT hold back!";return}Q?Q.tier==="slay"?C.innerHTML="<p>Oh this is actually sick. Screenshot it before I change my mind.</p>":Q.tier==="flop"?C.innerHTML="<p>Okay… at least if it flops we can blame the lighting.</p>":C.innerHTML="<p>Cute! But I feel like we were one chaotic choice away from greatness.</p>":C.innerHTML=`<p>New crisis unlocked: <strong>${w.name}</strong>. Dig into the closet and make it make sense.</p>`}},[w,Q]),de.useEffect(()=>{var C,G;H.current=((C=ue.current)==null?void 0:C.querySelector("svg"))||null,ge.current=((G=J.current)==null?void 0:G.querySelector("svg"))||null},[]),de.useEffect(()=>{const C=H.current;if(C)try{C.querySelectorAll(".avatar-piece").forEach(ye=>ye.classList.remove("visible"));const pe=h.skin||"skin_olive",ze=Os[pe]||Os.skin_olive;if(ze){const ye=C.querySelectorAll("#skinGrad stop");ye[0]&&ye[0].setAttribute("stop-color",ze.top),ye[1]&&ye[1].setAttribute("stop-color",ze.bottom)}Object.entries(h).forEach(([ye,Ne])=>{const Qe=`${Ne}_art`,Re=C.querySelector(`#${Qe}`);if(Re&&Re.classList.add("visible"),ye==="hair"&&Ne==="hair_sleek-bun"){const ke=C.querySelector("#hair_sleek-bun_overlay");ke&&ke.classList.add("visible")}});const Be=ge.current;Be&&(Be.querySelectorAll(".avatar-piece").forEach(Qe=>Qe.classList.remove("visible")),["hair","dress","top","bottom","shoes"].forEach(Qe=>{const Re=h[Qe];if(Re){const ke=`${Re}_back_art`,re=Be.querySelector(`#${ke}`);re&&re.classList.add("visible")}}))}catch{}},[h]),de.useEffect(()=>{if(!B)return;const C=ee.current,G=H.current;if(!C||!G)return;C.innerHTML="";const pe=G.cloneNode(!0);pe.removeAttribute("id"),C.appendChild(pe)},[B,h]),de.useEffect(()=>{const C=q.current;C&&(C.innerHTML=$f)},[]),de.useEffect(()=>{Me.current&&(Q?Me.current.dataset.tier=Q.tier:Me.current.dataset.tier="idle")},[Q]);const Ce=Q?`${Q.score} / 100`:"– / 100";return P.jsxs("div",{className:"app-shell",children:[P.jsx("header",{className:"app-header",children:P.jsxs("div",{className:"logo-lockup",children:[P.jsx("span",{className:"logo-mark",children:"DD"}),P.jsxs("div",{className:"logo-text",children:[P.jsx("h1",{children:"diva_down"}),P.jsx("p",{className:"tagline",children:"Closet meltdown. Infinite looks."})]})]})}),P.jsxs("main",{className:"layout",children:[P.jsxs("section",{className:"panel story-panel",children:[P.jsxs("div",{className:"character-card",children:[P.jsxs("div",{className:"character-portrait",ref:Fe,children:[P.jsxs("div",{className:"avatar-view avatar-front",children:[P.jsx("span",{className:"avatar-label",children:"Front"}),P.jsx("div",{ref:ue,style:{display:"contents"},dangerouslySetInnerHTML:{__html:Wf}})]}),P.jsxs("div",{className:"avatar-view avatar-back",children:[P.jsx("span",{className:"avatar-label",children:"Back"}),P.jsx("div",{ref:J,style:{display:"contents"},dangerouslySetInnerHTML:{__html:Zf}})]})]}),P.jsx("div",{className:"speech-bubble",ref:K,children:P.jsx("p",{children:"Okay so… all my cards just declined. No new outfit for me! Tragic. Luckily my closet is still insane. Help me pull a look—Eye-con is going to be there and she does NOT hold back!"})})]}),P.jsxs("div",{className:"event-card",children:[P.jsx("div",{className:"event-label",children:"Tonight's chaos:"}),P.jsx("div",{id:"eventName",className:"event-name",children:w?w.name:"Tap “New event” to start"}),P.jsx("p",{id:"eventDescription",className:"event-description",children:(w==null?void 0:w.description)||""}),P.jsx("button",{type:"button",className:"pill-button",id:"newEventBtn",onClick:tn,children:"New event"})]})]}),P.jsxs("section",{className:"panel wardrobe-panel",children:[P.jsx("h2",{children:"Closet chaos"}),P.jsx("div",{className:"categories-grid",children:Is.map(C=>P.jsxs("div",{className:"category","data-category-id":C.id,children:[P.jsxs("div",{className:"category-header",children:[P.jsx("span",{children:C.label}),P.jsxs("span",{className:"category-count",children:[C.items.length," pcs"]})]}),P.jsx("div",{className:"items-row",children:[...C.items].map(G=>{const pe=h[C.id]===G.id;return P.jsx("button",{type:"button",className:`closet-item${pe?" selected":""}`,onClick:()=>Ke(C.id,G.id),title:G.tags.join(", "),children:P.jsxs("div",{className:"closet-item-inner",children:[P.jsx("div",{className:"closet-item-hanger"}),P.jsx("div",{className:`closet-item-photo closet-visual-${G.id}`}),P.jsx("div",{className:"closet-item-label",children:G.label})]})},G.id)})})]},C.id))}),P.jsx("button",{id:"submitOutfitBtn",className:"primary-button",type:"button",onClick:Se,children:"Lock the look"})]})]}),P.jsxs("section",{id:"resultScreen",className:`result-screen${B?" visible":""}`,"aria-hidden":B?"false":"true",children:[P.jsx("div",{className:"result-backdrop"}),P.jsx("div",{className:"result-content",children:P.jsxs("div",{className:"result-card",children:[P.jsxs("header",{className:"result-header",children:[P.jsx("span",{className:"result-label",children:"Vibe check"}),P.jsx("button",{id:"resultCloseBtn",className:"ghost-button result-close-btn",type:"button",onClick:Ye,children:"Back to closet"})]}),P.jsxs("div",{className:"result-body",children:[P.jsxs("div",{className:"result-avatar-wrap",children:[P.jsx("div",{className:"result-avatar-halo"}),P.jsx("div",{id:"resultAvatarMount",className:"result-avatar-mount",ref:ee}),P.jsxs("div",{id:"resultQueenWrap",className:"result-queen-wrap","data-tier":"idle",ref:Me,children:[P.jsx("div",{ref:q}),P.jsx("span",{className:"result-queen-name",children:"Eye-con"})]})]}),P.jsxs("div",{className:"result-copy",children:[P.jsx("div",{id:"resultScore",className:"result-score",children:Ce}),P.jsx("div",{id:"resultTitle",className:"result-title",children:(Q==null?void 0:Q.title)||"Waiting for a look…"}),P.jsx("p",{id:"resultText",className:"result-text",children:(Q==null?void 0:Q.text)||"Once you lock the look, she’ll step into her close‑up and give you the full rundown."})]})]})]})})]})]})}Vf.createRoot(document.getElementById("root")).render(P.jsx(Df.StrictMode,{children:P.jsx(Jf,{})}));
