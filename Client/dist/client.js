// ------------------- altv-esbuild banner -------------------
// banner imports
import ___altvEsbuild_altvInject_altShared___ from "alt-shared";
import ___altvEsbuild_altvInject_alt___ from "alt";
import ___altvEsbuild_altvInject_native___ from "natives";
const ___altvEsbuild_altvInject_pluginOptions___ = {"mode":"client","dev":{"enabled":true,"hotReload":true,"hotReloadServerPort":8877,"playersReconnect":true,"playersReconnectDelay":200,"playersReconnectResetPos":true,"connectionCompleteEvent":true,"disconnectEvent":true,"restartCommand":true,"topLevelExceptionHandling":true,"moveExternalsOnTop":true,"enhancedRestartCommand":false,"serverStartedEvent":true},"bugFixes":{"webViewFlickering":true,"playerPrototype":true,"playerDamageOnFirstConnect":true},"altvEnums":true,"enhancedAltLog":true,"altDefaultImport":false};
// ----------------- external imports on top -----------------
// ----------------- external imports on top -----------------
await (async () => { // start banner wrapper
var nn=Object.defineProperty;var rn=(t,e,n)=>e in t?nn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Q=(t,e,n)=>(rn(t,typeof e!="symbol"?e+"":e,n),n);var x="altv-esbuild",ee="__altv-esbuild-resource-control";var pe=class{receiver;sender;constructor(e,n,o){this.isCommunicatorSenderAndReceiver(e)?(this.sender=e.sender??null,this.receiver=e.receiver??null):(this.sender=e,this.receiver=e),this.receiver?.on("data",r=>{r=r.toString();for(let i of r.split("|"))if(i)try{let{event:s,args:l}=JSON.parse(i),a=n[s];if(!a){o(`received unknown event: ${s}`);return}a(...l)}catch(s){o(`failed to handle chunk: '${i}' error: ${s?.stack}`)}}),this.receiver?.on("error",r=>{r?.code==="ECONNRESET"||r?.code==="ECONNREFUSED"||o(`socket error: ${r.stack}`,r)})}send(e,...n){if(!this.sender)throw new Error("EventManager cannot send since sender was not provided");let o={args:n,event:e};this.sender.write(JSON.stringify(o)+"|")}destroy(){this.receiver?.removeAllListeners("data"),this.receiver?.removeAllListeners("error")}isCommunicatorSenderAndReceiver(e){return!!(e.sender||e.receiver)}};var Ce=___altvEsbuild_altvInject_alt___,I=class{constructor(e){this.name=e;this.debug=()=>{}}debug;info(...e){Ce.log(`~bl~[${x}][${this.name}]~w~`,...e)}error(...e){Ce.logError(`[${x}][${this.name}]`,...e)}warn(...e){Ce.logWarning(`[${x}][${this.name}]`,...e)}};var g={},on=/\u001b\[\d\d?m/g,{defineProperty:M,getOwnPropertyDescriptor:K,ownKeys:q}=Reflect,{apply:sn,bind:Pt,call:ln}=Function.prototype,G=Pt.bind(ln);g.uncurryThis=G;var Ee=Pt.bind(sn);g.applyBind=Ee;var We=["ArrayOf","ArrayPrototypePush","ArrayPrototypeUnshift","MathHypot","MathMax","MathMin","StringPrototypeConcat","TypedArrayOf"];function Ge(t){return typeof t=="symbol"?`Symbol${t.description[7].toUpperCase()}${t.description.slice(8)}`:`${t[0].toUpperCase()}${t.slice(1)}`}function He(t,e,n,{enumerable:o,get:r,set:i}){M(t,`${e}Get${n}`,{__proto__:null,value:G(r),enumerable:o}),i!==void 0&&M(t,`${e}Set${n}`,{__proto__:null,value:G(i),enumerable:o})}function _t(t,e,n){for(let o of q(t)){let r=Ge(o),i=K(t,o);if("get"in i)He(e,n,r,i);else{let s=`${n}${r}`;M(e,s,{__proto__:null,...i}),We.includes(s)&&M(e,`${s}Apply`,{__proto__:null,value:Ee(i.value,t)})}}}function an(t,e,n){for(let o of q(t)){let r=Ge(o),i=K(t,o);if("get"in i)He(e,n,r,i);else{let{value:s}=i;typeof s=="function"&&(i.value=s.bind(t));let l=`${n}${r}`;M(e,l,{__proto__:null,...i}),We.includes(l)&&M(e,`${l}Apply`,{__proto__:null,value:Ee(s,t)})}}}function ye(t,e,n){for(let o of q(t)){let r=Ge(o),i=K(t,o);if("get"in i)He(e,n,r,i);else{let{value:s}=i;typeof s=="function"&&(i.value=G(s));let l=`${n}${r}`;M(e,l,{__proto__:null,...i}),We.includes(l)&&M(e,`${l}Apply`,{__proto__:null,value:Ee(s)})}}}["Proxy","globalThis"].forEach(t=>{g[t]=globalThis[t]});[decodeURI,decodeURIComponent,encodeURI,encodeURIComponent].forEach(t=>{g[t.name]=t});[escape,eval,unescape].forEach(t=>{g[t.name]=t});["JSON","Math","Proxy","Reflect"].forEach(t=>{_t(globalThis[t],g,t)});["AggregateError","Array","ArrayBuffer","BigInt","BigInt64Array","BigUint64Array","Boolean","DataView","Date","Error","EvalError","FinalizationRegistry","Float32Array","Float64Array","Function","Int16Array","Int32Array","Int8Array","Map","Number","Object","RangeError","ReferenceError","RegExp","Set","String","Symbol","SyntaxError","TypeError","URIError","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray","WeakMap","WeakRef","WeakSet"].forEach(t=>{let e=globalThis[t];g[t]=e,_t(e,g,t),ye(e.prototype,g,`${t}Prototype`)});["Promise"].forEach(t=>{let e=globalThis[t];g[t]=e,an(e,g,t),ye(e.prototype,g,`${t}Prototype`)});[{name:"TypedArray",original:Reflect.getPrototypeOf(Uint8Array)},{name:"ArrayIterator",original:{prototype:Reflect.getPrototypeOf(Array.prototype[Symbol.iterator]())}},{name:"StringIterator",original:{prototype:Reflect.getPrototypeOf(String.prototype[Symbol.iterator]())}}].forEach(({name:t,original:e})=>{g[t]=e,ye(e,g,t),ye(e.prototype,g,`${t}Prototype`)});var{ArrayPrototypeForEach:Je=Array.prototype.forEach.call,FinalizationRegistry:Ie=Ie,FunctionPrototypeCall:Ze=Function.prototype.call,Map:F=F,ObjectFreeze:ie=S.freeze.call,ObjectSetPrototypeOf:se=S.setPrototypeOf,Promise:H=H,PromisePrototypeThen:At=H.prototype.then,Set:V=V,SymbolIterator:le=Symbol.iterator,WeakMap:he=he,WeakRef:Le=Le,WeakSet:me=me}=g,qe=(t,e)=>{class n{constructor(r){this._iterator=t(r)}next(){return e(this._iterator)}[le](){return this}}return se(n.prototype,null),ie(n.prototype),ie(n),n};g.SafeArrayIterator=qe(g.ArrayPrototypeSymbolIterator,g.ArrayIteratorPrototypeNext);g.SafeStringIterator=qe(g.StringPrototypeSymbolIterator,g.StringIteratorPrototypeNext);var dt=(t,e)=>{Je(q(t),n=>{K(e,n)||M(e,n,{__proto__:null,...K(t,n)})})},T=(t,e)=>{if(le in t.prototype){let n=new t,o;Je(q(t.prototype),r=>{if(!K(e.prototype,r)){let i=K(t.prototype,r);if(typeof i.value=="function"&&i.value.length===0&&le in(Ze(i.value,n)??{})){let s=G(i.value);o??=G(s(n).next);let l=qe(s,o);i.value=function(){return new l(this)}}M(e.prototype,r,{__proto__:null,...i})}})}else dt(t.prototype,e.prototype);return dt(t,e),se(e.prototype,null),ie(e.prototype),ie(e),e};g.makeSafe=T;g.SafeMap=T(F,class extends F{constructor(e){super(e)}});g.SafeWeakMap=T(he,class extends he{constructor(e){super(e)}});g.SafeSet=T(V,class extends V{constructor(e){super(e)}});g.SafeWeakSet=T(me,class extends me{constructor(e){super(e)}});g.SafeFinalizationRegistry=T(Ie,class extends Ie{constructor(e){super(e)}});g.SafeWeakRef=T(Le,class extends Le{constructor(e){super(e)}});var cn=T(H,class extends H{constructor(e){super(e)}});g.PromisePrototypeCatch=(t,e)=>At(t,void 0,e);g.SafePromisePrototypeFinally=(t,e)=>new H((n,o)=>new cn((r,i)=>At(t,r,i)).finally(e).then(n,o));g.AsyncIteratorPrototype=g.ReflectGetPrototypeOf(g.ReflectGetPrototypeOf(async function*(){}).prototype);se(g,null);ie(g);var{getOwnNonIndexProperties:Ne,getProxyDetails:fn=()=>{},kPending:Io=0,kFulfilled:Lo=1,kRejected:No=2,previewEntries:we,getConstructorName:Ye,propertyFilter:{ALL_PROPERTIES:$t,ONLY_ENUMERABLE:kt}={ALL_PROPERTIES:0,ONLY_ENUMERABLE:2}}={},dn=(t,e)=>{if(e===$t)return S.getOwnPropertyNames(t);if(kt)return Array.isArray(t)?[]:S.keys(t);throw new Error("unknown filter")};Ne=dn;var un=t=>t?.constructor?.name??"<UNKNOWN CONSTRUCTOR NAME>";Ye=un;var pn=t=>{let e=t instanceof F,n=[];if(!(t instanceof F||t instanceof V))return[n,e];try{n=t.entries()}catch(o){console.error("custom_previewEntries",o.stack)}return[n,e]};we=pn;var Fe=Uint8Array.prototype.__proto__,{ArrayIsArray:Ct=Array.isArray,ArrayPrototypeFilter:Rt=Array.prototype.filter.call,ArrayPrototypePop:gn=Array.prototype.pop.call,ArrayPrototypePush:N=Array.prototype.push.call,ArrayPrototypePushApply:ut=Array.prototype.push.apply,ArrayPrototypeSort:yn=Array.prototype.sort.call,ArrayPrototypeUnshift:pt=Array.prototype.unshift.call,BigIntPrototypeValueOf:hn=BigInt.prototype.valueOf.call,BooleanPrototypeValueOf:mn=Boolean.prototype.valueOf.call,DatePrototypeGetTime:vn=Date.prototype.getTime.call,DatePrototypeToISOString:Sn=Date.prototype.toISOString.call,DatePrototypeToString:bn=Date.prototype.toString.call,ErrorPrototypeToString:En=Error.prototype.toString.call,FunctionPrototypeToString:wn=Function.prototype.toString.call,JSONStringify:Fo=JSON.stringify,MapPrototypeGetSize:Pn=S.getOwnPropertyDescriptor(F.prototype,"size").get.call,MapPrototypeEntries:_n=F.prototype.entries.call,MathFloor:An=Math.floor,MathMax:ce=Math.max,MathMin:B=Math.min,MathRound:$n=Math.round,MathSqrt:gt=Math.sqrt,MathTrunc:kn=Math.trunc,Number:oe=oe,NumberIsFinite:Cn=oe.isFinite,NumberIsNaN:Ot=isNaN,NumberParseFloat:Bo=parseFloat,NumberParseInt:To=parseInt,NumberPrototypeValueOf:Rn=oe.prototype.valueOf.call,Object:S=S,ObjectAssign:Xe=S.assign,ObjectCreate:Mt=S.create,ObjectDefineProperty:Qe=S.defineProperty,ObjectGetOwnPropertyDescriptor:ve=S.getOwnPropertyDescriptor,ObjectGetOwnPropertyNames:Be=S.getOwnPropertyNames,ObjectGetOwnPropertySymbols:On=S.getOwnPropertySymbols,ObjectGetPrototypeOf:et=S.getPrototypeOf,ObjectIs:Mn=S.is,ObjectKeys:Pe=S.keys,ObjectPrototypeHasOwnProperty:fe=S.prototype.hasOwnProperty.call,ObjectPrototypePropertyIsEnumerable:xt=S.prototype.propertyIsEnumerable.call,ObjectSeal:xn=S.seal,RegExp:U=U,RegExpPrototypeExec:tt=U.prototype.exec.call,RegExpPrototypeSymbolReplace:Se=U.prototype[Symbol.replace].call,RegExpPrototypeToString:In=U.prototype.toString.call,SafeStringIterator:Ln,SafeMap:Nn,SafeSet:It,SetPrototypeGetSize:Fn=S.getOwnPropertyDescriptor(V.prototype,"size").get.call,SetPrototypeValues:Bn=V.prototype.values.call,StringPrototypeCharCodeAt:Te=String.prototype.charCodeAt.call,StringPrototypeCodePointAt:Tn=String.prototype.codePointAt.call,StringPrototypeIncludes:ne=String.prototype.includes.call,StringPrototypeNormalize:Dn=String.prototype.normalize.call,StringPrototypePadEnd:jn=String.prototype.padEnd.call,StringPrototypePadStart:Re=String.prototype.padStart.call,StringPrototypeRepeat:yt=String.prototype.repeat.call,StringPrototypeSlice:Oe=String.prototype.slice.call,StringPrototypeSplit:Do=String.prototype.split.call,StringPrototypeToLowerCase:zn=String.prototype.toLowerCase.call,StringPrototypeTrim:Un=String.prototype.trim.call,StringPrototypeValueOf:Kn=String.prototype.valueOf.call,SymbolPrototypeToString:Lt=Symbol.prototype.toString.call,SymbolPrototypeValueOf:Vn=Symbol.prototype.valueOf.call,SymbolToStringTag:ht=Symbol.toStringTag,TypedArrayPrototypeGetLength:Wn=S.getOwnPropertyDescriptor(Fe,"length").get.call,TypedArrayPrototypeGetSymbolToStringTag:Gn=S.getOwnPropertyDescriptor(Fe,Symbol.toStringTag).get.call}=g,{customInspectSymbol:Nt=Symbol.for("nodejs.util.inspect.custom"),isError:Ft=t=>t instanceof Error,join:re,removeColors:Bt}={};function Hn(t,e){let n="";if(t.length!==0){let o=t.length-1;for(let r=0;r<o;r++)n+=t[r],n+=e;n+=t[o]}return n}re=Hn;function Jn(t){return String.prototype.replace.call(t,on,"")}Bt=Jn;var{isStackOverflowError:Tt}={};function L(t){if(L.maxStack_ErrorMessage===void 0)try{let n=function(){n()};var e=n;n()}catch(n){L.maxStack_ErrorMessage=n.message,L.maxStack_ErrorName=n.name}return t&&t.name===L.maxStack_ErrorName&&t.message===L.maxStack_ErrorMessage}L.maxStack_ErrorMessage=void 0;L.maxStack_ErrorName=void 0;Tt=L;var{isAsyncFunction:Zn=t=>t?.constructor?.name==="AsyncFunction",isGeneratorFunction:qn=t=>t?.constructor?.name==="GeneratorFunction",isAnyArrayBuffer:Yn=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer,isArrayBuffer:Dt,isArgumentsObject:jt,isBoxedPrimitive:zt,isDataView:Ut,isExternal:Xn=()=>!1,isMap:Qn=t=>t instanceof F,isMapIterator:er=t=>t?.toString()==="[object Map Iterator]",isModuleNamespaceObject:nt,isNativeError:Kt=t=>!1,isPromise:tr=t=>t instanceof H,isSet:nr=t=>t instanceof V,isSetIterator:rr=t=>t?.toString()==="[object Set Iterator]",isWeakMap:or=t=>t instanceof he,isWeakSet:ir=t=>t instanceof me,isRegExp:sr=t=>t instanceof U,isDate:lr=t=>t instanceof Date,isTypedArray:ar=t=>t instanceof Fe.constructor,isStringObject:cr=t=>typeof t=="object"&&t!=null&&t.constructor===String,isNumberObject:fr=t=>typeof t=="object"&&t!=null&&t.constructor===oe,isBooleanObject:dr=t=>typeof t=="object"&&t!=null&&t.constructor===Boolean,isBigIntObject:ur=t=>typeof t=="object"&&t!=null&&t.constructor===BigInt}={},pr=t=>t instanceof ArrayBuffer||typeof t=="object"&&t.constructor&&t.constructor.name==="ArrayBuffer"&&t.byteLength>=0;Dt=pr;var gr=t=>t+""=="[object Arguments]"&&t[le]!=null;jt=gr;var yr=t=>typeof t=="object"&&t!=null&&(t.constructor===oe||t.constructor===String||t.constructor===Boolean||t.constructor===BigInt||t.constructor===Symbol);zt=yr;var hr=t=>t instanceof DataView;Ut=hr;var mr=t=>{try{let e=t&&S.getOwnPropertyDescriptor(t,Symbol.toStringTag);return e.value==="Module"&&!(e.writable||e.enumerable||e.configurable)}catch{return!1}};nt=mr;var De=class extends Error{};function Vt(t,e){if(!t)throw new De(e)}var vr={exists:()=>!1};function Sr(t){let e="__internal_shit__"+t.name;return Qe(t,"name",{__proto__:null,value:e}),t}var br=Sr((t,e,n)=>{let o=n==null,r=o?!1:n.allowArray,i=o?!1:n.allowFunction;if(!(o?!1:n.nullable)&&t===null||!r&&Ct(t)||typeof t!="object"&&(!i||typeof t!="function"))throw new Error(`[validateObject] invalid ${e} type of arg, expected: Object`)});function Er(t,e){if(typeof t!="string")throw new Error(`value ${e} must be string`)}var Me,Wt=new It(Rt(Be(globalThis),t=>tt(/^[A-Z][a-zA-Z0-9]+$/,t)!==null)),Gt=t=>typeof t>"u"&&t!==void 0,P=xn({showHidden:!1,depth:2,colors:!1,customInspect:!0,showProxy:!1,maxArrayLength:100,maxStringLength:1e4,breakLength:80,compact:3,sorted:!1,getters:!1,numericSeparator:!1}),J=0,rt=1,ae=2,wr=/[\x00-\x1f\x27\x5c\x7f-\x9f]|[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/,je=/[\x00-\x1f\x27\x5c\x7f-\x9f]|[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/g,Pr=/[\x00-\x1f\x5c\x7f-\x9f]|[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/,_r=/[\x00-\x1f\x5c\x7f-\x9f]|[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/g,Ar=/^[a-zA-Z_][a-zA-Z_0-9]*$/,$r=/^(0|[1-9][0-9]*)$/,kr=/^ {4}at (?:[^/\\(]+ \(|)node:(.+):\d+:\d+\)?$/,Cr=/[/\\]node_modules[/\\](.+?)(?=[/\\])/g,Rr=/^(\s+[^(]*?)\s*{/,Or=/(\/\/.*?\n)|(\/\*(.|\n)*?\*\/)/g,Mr=16,_e=0,xr=1,Ir=2,be=["\\x00","\\x01","\\x02","\\x03","\\x04","\\x05","\\x06","\\x07","\\b","\\t","\\n","\\x0B","\\f","\\r","\\x0E","\\x0F","\\x10","\\x11","\\x12","\\x13","\\x14","\\x15","\\x16","\\x17","\\x18","\\x19","\\x1A","\\x1B","\\x1C","\\x1D","\\x1E","\\x1F","","","","","","","","\\'","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\x7F","\\x80","\\x81","\\x82","\\x83","\\x84","\\x85","\\x86","\\x87","\\x88","\\x89","\\x8A","\\x8B","\\x8C","\\x8D","\\x8E","\\x8F","\\x90","\\x91","\\x92","\\x93","\\x94","\\x95","\\x96","\\x97","\\x98","\\x99","\\x9A","\\x9B","\\x9C","\\x9D","\\x9E","\\x9F"],Lr="[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",Nr=new U(Lr,"g"),ot;function Fr(t,e){let n={stylize:t.stylize,showHidden:t.showHidden,depth:t.depth,colors:t.colors,customInspect:t.customInspect,showProxy:t.showProxy,maxArrayLength:t.maxArrayLength,maxStringLength:t.maxStringLength,breakLength:t.breakLength,compact:t.compact,sorted:t.sorted,getters:t.getters,numericSeparator:t.numericSeparator,...t.userOptions};if(e){se(n,null);for(let o of Pe(n))(typeof n[o]=="object"||typeof n[o]=="function")&&n[o]!==null&&delete n[o];n.stylize=se((o,r)=>{let i;try{i=`${t.stylize(o,r)}`}catch{}return typeof i!="string"?o:i},null)}return n}function O(t,e){let n={budget:{},indentationLvl:0,seen:[],currentDepth:0,stylize:Ke,showHidden:P.showHidden,depth:P.depth,colors:P.colors,customInspect:P.customInspect,showProxy:P.showProxy,maxArrayLength:P.maxArrayLength,maxStringLength:P.maxStringLength,breakLength:P.breakLength,compact:P.compact,sorted:P.sorted,getters:P.getters,numericSeparator:P.numericSeparator};if(arguments.length>1){if(arguments.length>2&&(arguments[2]!==void 0&&(n.depth=arguments[2]),arguments.length>3&&arguments[3]!==void 0&&(n.colors=arguments[3])),typeof e=="boolean")n.showHidden=e;else if(e){let o=Pe(e);for(let r=0;r<o.length;++r){let i=o[r];fe(P,i)||i==="stylize"?n[i]=e[i]:n.userOptions===void 0&&(n.userOptions=e)}}}return n.colors&&(n.stylize=Br),n.maxArrayLength===null&&(n.maxArrayLength=1/0),n.maxStringLength===null&&(n.maxStringLength=1/0),A(n,t,0)}O.custom=Nt;Qe(O,"defaultOptions",{__proto__:null,get(){return P},set(t){return br(t,"options"),Xe(P,t)}});O.colors=Xe(Mt(null),{reset:["w",0],bold:["wl"],dim:["w"],italic:["w"],underline:["w"],blink:["w"],inverse:["w"],hidden:["w"],strikethrough:["w"],doubleunderline:["w"],black:["k"],red:["rl"],green:["gl"],yellow:["yl"],blue:["bl"],magenta:["ml"],cyan:["cl"],white:["wl"],bgBlack:["w"],bgRed:["w"],bgGreen:["w"],bgYellow:["w"],bgBlue:["w"],bgMagenta:["w"],bgCyan:["w"],bgWhite:["w"],framed:["w"],overlined:["w"],gray:["kl"],redBright:["rl"],greenBright:["gl"],yellowBright:["yl"],blueBright:["bl"],magentaBright:["ml"],cyanBright:["cl"],whiteBright:["wl"],bgGray:["kl"],bgRedBright:["rl"],bgGreenBright:["gl"],bgYellowBright:["yl"],bgBlueBright:["bl"],bgMagentaBright:["ml"],bgCyanBright:["cl"],bgWhiteBright:["wl"]});function R(t,e){Qe(O.colors,e,{__proto__:null,get(){return this[t]},set(n){this[t]=n},configurable:!0,enumerable:!1})}R("gray","grey");R("gray","blackBright");R("bgGray","bgGrey");R("bgGray","bgBlackBright");R("dim","faint");R("strikethrough","crossedout");R("strikethrough","strikeThrough");R("strikethrough","crossedOut");R("hidden","conceal");R("inverse","swapColors");R("inverse","swapcolors");R("doubleunderline","doubleUnderline");O.styles=Xe(Mt(null),{special:"cyan",number:"yellow",bigint:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",symbol:"green",date:"magenta",regexp:"red",module:"underline"});function xe(t,e){return e===-1?`"${t}"`:e===-2?`\`${t}\``:`'${t}'`}function ze(t){let e=Te(t);return be.length>e?be[e]:`\\u${e.toString(16)}`}function Ue(t){let e=wr,n=je,o=39;if(ne(t,"'")&&(ne(t,'"')?!ne(t,"`")&&!ne(t,"${")&&(o=-2):o=-1,o!==39&&(e=Pr,n=_r)),t.length<5e3&&tt(e,t)===null)return xe(t,o);if(t.length>100)return t=Se(n,t,ze),xe(t,o);let r="",i=0;for(let s=0;s<t.length;s++){let l=Te(t,s);if(l===o||l===92||l<32||l>126&&l<160)i===s?r+=be[l]:r+=`${Oe(t,i,s)}${be[l]}`,i=s+1;else if(l>=55296&&l<=57343){if(l<=56319&&s+1<t.length){let a=Te(t,s+1);if(a>=56320&&a<=57343){s++;continue}}r+=`${Oe(t,i,s)}${`\\u${l.toString(16)}`}`,i=s+1}}return i!==t.length&&(r+=Oe(t,i)),xe(r,o)}function Br(t,e){let n=O.styles[e];if(n!==void 0){let o=O.colors[n];if(o!==void 0)return`~${o[0]}~${t}~w~`}return t}function Ke(t){return t}function Tr(){return[]}function Dr(t,e){try{return t instanceof e}catch{return!1}}function Ht(t,e,n,o){let r,i=t;for(;t||Gt(t);){let a=ve(t,"constructor");if(a!==void 0&&typeof a.value=="function"&&a.value.name!==""&&Dr(i,a.value))return o!==void 0&&(r!==t||!Wt.has(a.value.name))&&jr(e,i,r||i,n,o),String(a.value.name);t=et(t),r===void 0&&(r=t)}if(r===null)return null;let s=Ye(i);if(n>e.depth&&e.depth!==null)return`${s} <Complex prototype>`;let l=Ht(r,e,n+1,o);return l===null?`${s} <${O(r,{...e,customInspect:!1,depth:-1})}>`:`${s} <${l}>`}function jr(t,e,n,o,r){let i=0,s,l;do{if(i!==0||e===n){if(n=et(n),n===null)return;let a=ve(n,"constructor");if(a!==void 0&&typeof a.value=="function"&&Wt.has(a.value.name))return}i===0?l=new It:Je(s,a=>l.add(a)),s=q(n),N(t.seen,e);for(let a of s){if(a==="constructor"||fe(e,a)||i!==0&&l.has(a))continue;let f=ve(n,a);if(typeof f.value=="function")continue;let c=Z(t,n,o,a,J,f,e);t.colors?N(r,`\x1B[2m${c}\x1B[22m`):N(r,c)}gn(t.seen)}while(++i!==3)}function _(t,e,n,o=""){return t===null?e!==""&&n!==e?`[${n}${o}: null prototype] [${e}] `:`[${n}${o}: null prototype] `:e!==""&&t!==e?`${t}${o} [${e}] `:`${t}${o} `}function te(t,e){let n,o=On(t);if(e)n=Be(t),o.length!==0&&ut(n,o);else{try{n=Pe(t)}catch(r){Vt(Kt(r)&&r.name==="ReferenceError"&&nt(t)),n=Be(t)}o.length!==0&&ut(n,Rt(o,i=>xt(t,i)))}return n}function ge(t,e,n){let o="";return e===null&&(o=Ye(t),o===n&&(o="Object")),_(e,n,o)}function zr(t,e,n){if(n>t.depth&&t.depth!==null)return t.stylize("Proxy [Array]","special");n+=1,t.indentationLvl+=2;let o=[A(t,e[0],n),A(t,e[1],n)];return t.indentationLvl-=2,lt(t,o,"",["Proxy [","]"],ae,n)}function A(t,e,n,o){if(typeof e!="object"&&typeof e!="function"&&!Gt(e))return st(t.stylize,e,t);if(e===null)return t.stylize("null","null");let r=e,i=fn(e,!!t.showProxy);if(i!==void 0){if(i===null||i[0]===null)return t.stylize("<Revoked Proxy>","special");if(t.showProxy)return zr(t,i,n);e=i}if(t.customInspect){let s=e[Nt];if(typeof s=="function"&&s!==O&&!(e.constructor&&e.constructor.prototype===e)){let l=t.depth===null?null:t.depth-n,a=i!==void 0||!(r instanceof S),f=Ze(s,r,l,Fr(t,a),O);if(f!==r)return typeof f!="string"?A(t,f,n):f.replace(/\n/g,`
${" ".repeat(t.indentationLvl)}`)}}if(t.seen.includes(e)){let s=1;return t.circular===void 0?(t.circular=new Nn,t.circular.set(e,s)):(s=t.circular.get(e),s===void 0&&(s=t.circular.size+1,t.circular.set(e,s))),t.stylize(`[Circular *${s}]`,"special")}return Ur(t,e,n,o)}function Ur(t,e,n,o){let r,i;t.showHidden&&(n<=t.depth||t.depth===null)&&(i=[]);let s=Ht(e,t,n,i);i!==void 0&&i.length===0&&(i=void 0);let l=e[ht];(typeof l!="string"||l!==""&&(t.showHidden?fe:xt)(e,ht))&&(l="");let a="",f=Tr,c,p=!0,y=0,h=t.showHidden?$t:kt,w=J;if(e[le]||s===null)if(p=!1,Ct(e)){let u=s!=="Array"||l!==""?_(s,l,"Array",`(${e.length})`):"";if(r=Ne(e,h),c=[`${u}[`,"]"],e.length===0&&r.length===0&&i===void 0)return`${c[0]}]`;w=ae,f=ro}else if(nr(e)){let u=Fn(e),v=_(s,l,"Set",`(${u})`);if(r=te(e,t.showHidden),f=s!==null?vt.bind(null,e):vt.bind(null,Bn(e)),u===0&&r.length===0&&i===void 0)return`${v}{}`;c=[`${v}{`,"}"]}else if(Qn(e)){let u=Pn(e),v=_(s,l,"Map",`(${u})`);if(r=te(e,t.showHidden),f=s!==null?St.bind(null,e):St.bind(null,_n(e)),u===0&&r.length===0&&i===void 0)return`${v}{}`;c=[`${v}{`,"}"]}else if(ar(e)){r=Ne(e,h);let u=e,v="";s===null&&(v=Gn(e),u=new g[v](e));let ft=Wn(e);if(c=[`${_(s,l,v,`(${ft})`)}[`,"]"],e.length===0&&r.length===0&&!t.showHidden)return`${c[0]}]`;f=oo.bind(null,u,ft),w=ae}else er(e)?(r=te(e,t.showHidden),c=mt("Map",l),f=Et.bind(null,c)):rr(e)?(r=te(e,t.showHidden),c=mt("Set",l),f=Et.bind(null,c)):p=!0;if(p)if(r=te(e,t.showHidden),c=["{","}"],s==="Object"){if(jt(e)?c[0]="[Arguments] {":l!==""&&(c[0]=`${_(s,l,"Object")}{`),r.length===0&&i===void 0)return`${c[0]}}`}else if(typeof e=="function"){if(a=Wr(e,s,l),r.length===0&&i===void 0)return t.stylize(a,"special")}else if(sr(e)){a=In(s!==null?e:new U(e));let u=_(s,l,"RegExp");if(u!=="RegExp "&&(a=`${u}${a}`),r.length===0&&i===void 0||n>t.depth&&t.depth!==null)return t.stylize(a,"regexp")}else if(lr(e)){a=Ot(vn(e))?bn(e):Sn(e);let u=_(s,l,"Date");if(u!=="Date "&&(a=`${u}${a}`),r.length===0&&i===void 0)return t.stylize(a,"date")}else if(Ft(e)){if(a=qr(e,s,l,t,r),r.length===0&&i===void 0)return a}else if(Yn(e)){let u=Dt(e)?"ArrayBuffer":"SharedArrayBuffer",v=_(s,l,u);if(o===void 0)f=no;else if(r.length===0&&i===void 0)return v+`{ byteLength: ${it(t.stylize,e.byteLength,!1)} }`;c[0]=`${v}{`,pt(r,"byteLength")}else if(Ut(e))c[0]=`${_(s,l,"DataView")}{`,pt(r,"byteLength","byteOffset","buffer");else if(tr(e))c[0]=`${_(s,l,"Promise")}{`,f=lo;else if(ir(e))c[0]=`${_(s,l,"WeakSet")}{`,f=t.showHidden?io:bt;else if(or(e))c[0]=`${_(s,l,"WeakMap")}{`,f=t.showHidden?so:bt;else if(nt(e))c[0]=`${_(s,l,"Module")}{`,f=eo.bind(null,r);else if(zt(e)){if(a=Kr(e,t,r,s,l),r.length===0&&i===void 0)return a}else{if(r.length===0&&i===void 0){if(Xn(e)){let u="UNSUPPORTED VALUE";return t.stylize(`[External: ${u}]`,"special")}return`${ge(e,s,l)}{}`}c[0]=`${ge(e,s,l)}{`}if(n>t.depth&&t.depth!==null){let u=ge(e,s,l).slice(0,-1);return s!==null&&(u=`[${u}]`),t.stylize(u,"special")}n+=1,t.seen.push(e),t.currentDepth=n;let $,X=t.indentationLvl;try{for($=f(t,e,n),y=0;y<r.length;y++)$.push(Z(t,e,n,r[y],w));i!==void 0&&$.push(...i)}catch(u){let v=ge(e,s,l).slice(0,-1);return Xr(t,u,v,X)}if(t.circular!==void 0){let u=t.circular.get(e);if(u!==void 0){let v=t.stylize(`<ref *${u}>`,"special");t.compact!==!0?a=a===""?v:`${v} ${a}`:c[0]=`${v} ${c[0]}`}}if(t.seen.pop(),t.sorted){let u=t.sorted===!0?void 0:t.sorted;if(w===J)$=$.sort(u);else if(r.length>1){let v=$.slice($.length-r.length).sort(u);$.splice($.length-r.length,r.length,...v)}}let E=lt(t,$,a,c,w,n,e),C=(t.budget[t.indentationLvl]||0)+E.length;return t.budget[t.indentationLvl]=C,C>2**27&&(t.depth=-1),E}function mt(t,e){return e!==`${t} Iterator`&&(e!==""&&(e+="] ["),e+=`${t} Iterator`),[`[${e}] {`,"}"]}function Kr(t,e,n,o,r){let i,s;fr(t)?(i=Rn,s="Number"):cr(t)?(i=Kn,s="String",n.splice(0,t.length)):dr(t)?(i=mn,s="Boolean"):ur(t)?(i=hn,s="BigInt"):(i=Vn,s="Symbol");let l=`[${s}`;return s!==o&&(o===null?l+=" (null prototype)":l+=` (${o})`),l+=`: ${st(Ke,i(t),e)}]`,r!==""&&r!==o&&(l+=` [${r}]`),n.length!==0||e.stylize===Ke?l:e.stylize(l,zn(s))}function Vr(t,e,n){let i=`class ${fe(t,"name")&&t.name||"(anonymous)"}`;if(e!=="Function"&&e!==null&&(i+=` [${e}]`),n!==""&&e!==n&&(i+=` [${n}]`),e!==null){let s=et(t).name;s&&(i+=` extends ${s}`)}else i+=" extends [null prototype]";return`[${i}]`}function Wr(t,e,n){let o=wn(t);if(o.startsWith("class")&&o.endsWith("}")){let s=o.slice(5,-1),l=s.indexOf("{");if(l!==-1&&(!s.slice(0,l).includes("(")||Rr.test(s.replace(Or))))return Vr(t,e,n)}let r="Function";qn(t)&&(r=`Generator${r}`),Zn(t)&&(r=`Async${r}`);let i=`[${r}`;return e===null&&(i+=" (null prototype)"),t.name===""?i+=" (anonymous)":i+=`: ${t.name}`,i+="]",e!==r&&e!==null&&(i+=` ${e}`),n!==""&&e!==n&&(i+=` [${n}]`),i}function Gr(t,e){for(let n=0;n<t.length-3;n++){let o=e.indexOf(t[n]);if(o!==-1){let r=e.length-o;if(r>3){let i=1,s=B(t.length-n,r);for(;s>i&&t[n+i]===e[o+i];)i++;if(i>3)return{len:i,offset:n}}}}return{len:0,offset:0}}function Jt(t){return t.stack?String(t.stack):En(t)}function Hr(t,e,n){let o=n.split(`
`);if(e.cause&&Ft(e.cause)){let r=Jt(e.cause),i=r.indexOf(`
    at`);if(i!==-1){let s=r.slice(i+1).split(`
`),{len:l,offset:a}=Gr(o,s);if(l>0){let f=l-2,c=`    ... ${f} lines matching cause stack trace ...`;o.splice(a+1,f,t.stylize(c,"undefined"))}}}return o}function Jr(t,e,n,o){let r=n.length;if(e===null||n.endsWith("Error")&&t.startsWith(n)&&(t.length===r||t[r]===":"||t[r]===`
`)){let i="Error";if(e===null){let l=t.match(/^([A-Z][a-z_ A-Z0-9[\]()-]+)(?::|\n {4}at)/)||t.match(/^([a-z_A-Z0-9-]*Error)$/);i=l&&l[1]||"",r=i.length,i=i||"Error"}let s=_(e,o,i).slice(0,-1);n!==s&&(s.includes(n)?r===0?t=`${s}: ${t}`:t=`${s}${t.slice(r)}`:t=`${s} [${n}]${t.slice(r)}`)}return t}function Zr(t,e,n,o){if(!t.showHidden&&e.length!==0)for(let r of["name","message","stack"]){let i=e.indexOf(r);i!==-1&&o.includes(n[r])&&e.splice(i,1)}}function qr(t,e,n,o,r){let i=t.name!=null?String(t.name):"Error",s=Jt(t);Zr(o,r,t,s),"cause"in t&&(r.length===0||!r.includes("cause"))&&r.push("cause"),s=Jr(s,e,i,n);let l=t.message&&s.indexOf(t.message)||-1;l!==-1&&(l+=t.message.length);let a=s.indexOf(`
    at`,l);if(a===-1)s=`[${s}]`;else{let f=s.slice(0,a),c=Hr(o,t,s.slice(a+1));if(o.colors)for(let p of c){let y=p.match(kr);if(y!==null&&vr.exists(y[1]))f+=`
${o.stylize(p,"undefined")}`;else{let h;f+=`
`;let w=0;for(;(h=Cr.exec(p))!==null;)f+=p.slice(w,h.index+14),f+=o.stylize(h[1],"module"),w=h.index+h[0].length;f+=w===0?p:p.slice(w)}}else f+=`
${c.join(`
`)}`;s=f}if(o.indentationLvl!==0){let f=" ".repeat(o.indentationLvl);s=s.replace(/\n/g,`
${f}`)}return s}function Yr(t,e,n){let o=0,r=0,i=0,s=e.length;t.maxArrayLength<e.length&&s--;let l=2,a=new Array(s);for(;i<s;i++){let c=ot(e[i],t.colors);a[i]=c,o+=c+l,r<c&&(r=c)}let f=r+l;if(f*3+t.indentationLvl<t.breakLength&&(o/f>5||r<=6)){let p=gt(f-o/e.length),y=ce(f-3-p,1),h=B($n(gt(2.5*y*s)/y),An((t.breakLength-t.indentationLvl)/f),t.compact*4,15);if(h<=1)return e;let w=[],$=[];for(let E=0;E<h;E++){let z=0;for(let C=E;C<e.length;C+=h)a[C]>z&&(z=a[C]);z+=l,$[E]=z}let X=Re;if(n!==void 0){for(let E=0;E<e.length;E++)if(typeof n[E]!="number"&&typeof n[E]!="bigint"){X=jn;break}}for(let E=0;E<s;E+=h){let z=B(E+h,s),C="",u=E;for(;u<z-1;u++){let v=$[u-E]+e[u].length-a[u];C+=X(`${e[u]}, `,v," ")}if(X===Re){let v=$[u-E]+e[u].length-a[u]-l;C+=Re(e[u],v," ")}else C+=e[u];N(w,C)}t.maxArrayLength<e.length&&N(w,e[s]),e=w}return e}function Xr(t,e,n,o){if(Tt(e))return t.seen.pop(),t.indentationLvl=o,t.stylize(`[${n}: Inspection interrupted prematurely. Maximum call stack size exceeded.]`,"special");throw new Error(e.stack)}function Ve(t){let e="",n=t.length,o=t.startsWith("-")?1:0;for(;n>=o+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return n===t.length?t:`${t.slice(0,n)}${e}`}function Qr(t){let e="",n=0;for(;n<t.length-3;n+=3)e+=`${t.slice(n,n+3)}_`;return n===0?t:`${e}${t.slice(n)}`}function it(t,e,n){if(!n)return Mn(e,-0)?t("-0","number"):t(`${e}`,"number");let o=kn(e),r=String(o);return o===e?!Cn(e)||r.includes("e")?t(r,"number"):t(`${Ve(r)}`,"number"):Ot(e)?t(r,"number"):t(`${Ve(r)}.${Qr(String(e).slice(r.length+1))}`,"number")}function Zt(t,e,n){let o=String(e);return t(n?`${Ve(o)}n`:`${o}n`,"bigint")}function st(t,e,n){if(typeof e=="string"){let o="";if(e.length>n.maxStringLength){let r=e.length-n.maxStringLength;e=e.slice(0,n.maxStringLength),o=`... ${r} more character${r>1?"s":""}`}return n.compact!==!0&&e.length>Mr&&e.length>n.breakLength-n.indentationLvl-4?e.split(/(?<=\n)/).map(r=>t(Ue(r),"string")).join(` +
${" ".repeat(n.indentationLvl+2)}`)+o:t(Ue(e),"string")+o}return typeof e=="number"?it(t,e,n.numericSeparator):typeof e=="bigint"?Zt(t,e,n.numericSeparator):typeof e=="boolean"?t(`${e}`,"boolean"):typeof e>"u"?t("undefined","undefined"):t(Lt(e),"symbol")}function eo(t,e,n,o){let r=new Array(t.length);for(let i=0;i<t.length;i++)try{r[i]=Z(e,n,o,t[i],J)}catch(s){Vt(Kt(s)&&s.name==="ReferenceError");let l={[t[i]]:""};r[i]=Z(e,l,o,t[i],J);let a=r[i].lastIndexOf(" ");r[i]=r[i].slice(0,a+1)+e.stylize("<uninitialized>","special")}return t.length=0,r}function to(t,e,n,o,r,i){let s=Pe(e),l=i;for(;i<s.length&&r.length<o;i++){let f=s[i],c=+f;if(c>2**32-2)break;if(`${l}`!==f){if(!$r.test(f))break;let p=c-l,y=p>1?"s":"",h=`<${p} empty item${y}>`;if(r.push(t.stylize(h,"undefined")),l=c,r.length===o)break}r.push(Z(t,e,n,f,rt)),l++}let a=e.length-l;if(r.length!==o){if(a>0){let f=a>1?"s":"",c=`<${a} empty item${f}>`;r.push(t.stylize(c,"undefined"))}}else a>0&&r.push(`... ${a} more item${a>1?"s":""}`);return r}function no(t,e){let n;try{n=new Uint8Array(e)}catch{return[t.stylize("(detached)","special")]}Me===void 0&&(Me=function(s){return[...new Uint8Array(s)].map(l=>l.toString(16).padStart(2,"0")).join("")});let o=Un(Se(/(.{2})/g,Me(n,0,B(t.maxArrayLength,n.length)),"$1 ")),r=n.length-t.maxArrayLength;return r>0&&(o+=` ... ${r} more byte${r>1?"s":""}`),[`${t.stylize("[Uint8Contents]","special")}: <${o}>`]}function ro(t,e,n){let o=e.length,r=B(ce(0,t.maxArrayLength),o),i=o-r,s=[];for(let l=0;l<r;l++){if(!fe(e,l))return to(t,e,n,r,s,l);s.push(Z(t,e,n,l,rt))}return i>0&&s.push(`... ${i} more item${i>1?"s":""}`),s}function oo(t,e,n,o,r){let i=B(ce(0,n.maxArrayLength),e),s=t.length-i,l=new Array(i),a=t.length>0&&typeof t[0]=="number"?it:Zt;for(let f=0;f<i;++f)l[f]=a(n.stylize,t[f],n.numericSeparator);if(s>0&&(l[i]=`... ${s} more item${s>1?"s":""}`),n.showHidden){n.indentationLvl+=2;for(let f of["BYTES_PER_ELEMENT","length","byteLength","byteOffset","buffer"]){let c=A(n,t[f],r,!0);N(l,`[${f}]: ${c}`)}n.indentationLvl-=2}return l}function vt(t,e,n,o){let r=[];e.indentationLvl+=2;for(let i of t)N(r,A(e,i,o));return e.indentationLvl-=2,r}function St(t,e,n,o){let r=[];e.indentationLvl+=2;for(let{0:i,1:s}of t)r.push(`${A(e,i,o)} => ${A(e,s,o)}`);return e.indentationLvl-=2,r}function qt(t,e,n,o){let r=ce(t.maxArrayLength,0),i=B(r,n.length),s=new Array(i);t.indentationLvl+=2;for(let a=0;a<i;a++)s[a]=A(t,n[a],e);t.indentationLvl-=2,o===_e&&!t.sorted&&yn(s);let l=n.length-i;return l>0&&N(s,`... ${l} more item${l>1?"s":""}`),s}function Yt(t,e,n,o){let r=ce(t.maxArrayLength,0),i=n.length/2,s=i-r,l=B(r,i),a=new Array(l),f=0;if(t.indentationLvl+=2,o===_e){for(;f<l;f++){let c=f*2;a[f]=`${A(t,n[c],e)} => ${A(t,n[c+1],e)}`}t.sorted||(a=a.sort())}else for(;f<l;f++){let c=f*2,p=[A(t,n[c],e),A(t,n[c+1],e)];a[f]=lt(t,p,"",["[","]"],ae,e)}return t.indentationLvl-=2,s>0&&a.push(`... ${s} more item${s>1?"s":""}`),a}function bt(t){return[t.stylize("<items unknown>","special")]}function io(t,e,n){let o=we(e);return qt(t,n,o,_e)}function so(t,e,n){let o=we(e);return Yt(t,n,o,_e)}function Et(t,e,n,o){let{0:r,1:i}=we(n,!0);return i?(t[0]=t[0].replace(/ Iterator] {$/," Entries] {"),Yt(e,o,r,Ir)):qt(e,o,r,xr)}function lo(t,e,n){return[""]}function Z(t,e,n,o,r,i,s=e){let l,a,f=" ";if(i=i||ve(e,o)||{value:e[o],enumerable:!0},i.value!==void 0){let c=t.compact!==!0||r!==J?2:3;t.indentationLvl+=c,a=A(t,i.value,n),c===3&&t.breakLength<ot(a,t.colors)&&(f=`
${" ".repeat(t.indentationLvl)}`),t.indentationLvl-=c}else if(i.get!==void 0){let c=i.set!==void 0?"Getter/Setter":"Getter",p=t.stylize,y="special";if(t.getters&&(t.getters===!0||t.getters==="get"&&i.set===void 0||t.getters==="set"&&i.set!==void 0))try{let h=Ze(i.get,s);if(t.indentationLvl+=2,h===null)a=`${p(`[${c}:`,y)} ${p("null","null")}${p("]",y)}`;else if(typeof h=="object")a=`${p(`[${c}]`,y)} ${A(t,h,n)}`;else{let w=st(p,h,t);a=`${p(`[${c}:`,y)} ${w}${p("]",y)}`}t.indentationLvl-=2}catch(h){let w=`<Inspection threw (${h.message})>`;a=`${p(`[${c}:`,y)} ${w}${p("]",y)}`}else a=t.stylize(`[${c}]`,y)}else i.set!==void 0?a=t.stylize("[Setter]","special"):a=t.stylize("undefined","undefined");if(r===rt)return a;if(typeof o=="symbol"){let c=Se(je,Lt(o),ze);l=`[${t.stylize(c,"symbol")}]`}else o==="__proto__"?l="['__proto__']":i.enumerable===!1?l=`[${Se(je,o,ze)}]`:tt(Ar,o)!==null?l=t.stylize(o,"name"):l=t.stylize(Ue(o),"string");return`${l}:${f}${a}`}function wt(t,e,n,o){let r=e.length+n;if(r+e.length>t.breakLength)return!1;for(let i=0;i<e.length;i++)if(t.colors?r+=Bt(e[i]).length:r+=e[i].length,r>t.breakLength)return!1;return o===""||!ne(o,`
`)}function lt(t,e,n,o,r,i,s){if(t.compact!==!0){if(typeof t.compact=="number"&&t.compact>=1){let c=e.length;if(r===ae&&c>6&&(e=Yr(t,e,s)),t.currentDepth-i<t.compact&&c===e.length){let p=e.length+t.indentationLvl+o[0].length+n.length+10;if(wt(t,e,p,n)){let y=re(e,", ");if(!y.includes(`
`))return`${n?`${n} `:""}${o[0]} ${y} ${o[1]}`}}}let f=`
${yt(" ",t.indentationLvl)}`;return`${n?`${n} `:""}${o[0]}${f}  ${re(e,`,${f}  `)}${f}${o[1]}`}if(wt(t,e,0,n))return`${o[0]}${n?` ${n}`:""} ${re(e,", ")} `+o[1];let l=yt(" ",t.indentationLvl),a=n===""&&o[0].length===1?" ":`${n?` ${n}`:""}
${l}  `;return`${o[0]}${a}${re(e,`,
${l}  `)} ${o[1]}`}ot=function(e,n=!0){let o=0;n&&(e=fo(e)),e=Dn(e,"NFC");for(let r of new Ln(e)){let i=Tn(r,0);ao(i)?o+=2:co(i)||o++}return o};var ao=t=>t>=4352&&(t<=4447||t===9001||t===9002||t>=11904&&t<=12871&&t!==12351||t>=12880&&t<=19903||t>=19968&&t<=42182||t>=43360&&t<=43388||t>=44032&&t<=55203||t>=63744&&t<=64255||t>=65040&&t<=65049||t>=65072&&t<=65131||t>=65281&&t<=65376||t>=65504&&t<=65510||t>=110592&&t<=110593||t>=127488&&t<=127569||t>=127744&&t<=128591||t>=131072&&t<=262141),co=t=>t<=31||t>=127&&t<=159||t>=768&&t<=879||t>=8203&&t<=8207||t>=8400&&t<=8447||t>=65024&&t<=65039||t>=65056&&t<=65071||t>=917760&&t<=917999;function fo(t){return Er(t,"str"),t.replace(Nr,"")}var Xt=O;var Qt={length:!0,name:!0,arguments:!0,caller:!0,prototype:!0};var D=___altvEsbuild_altvInject_alt___,en=___altvEsbuild_altvInject_altShared___,at=class{log=new I("shared");resourceStopEvent=()=>{this.log.debug("resourceStop");for(let e of this.metaKeys)D.deleteMeta(e)};origAltOn;origAltOnce;origAltOff;origAltSetMeta;eventHandlers={local:{},remote:{}};metaKeys=new Set;baseObjects=new Set;hookedAltEvents={};eventHandlersWrappers=new Map;constructor(e){e.dev.enabled&&(this.origAltOn=this.hookAltEventAdd("local","on",1),this.origAltOnce=this.hookAltEventAdd("local","once",1,!0),this.origAltOff=this.hookAltEventRemove("local","off",1),this.hookAlt("getEventListeners",(n,o)=>typeof o=="string"?[...this.eventHandlers.local[o]??[]]:n(o),1),this.hookAlt("getRemoteEventListeners",(n,o)=>typeof o=="string"?[...this.eventHandlers.remote[o]??[]]:n(o),1),this.origAltSetMeta=this.hookAlt("setMeta",(n,o,r)=>{this.metaKeys.add(o),n(o,r)},2),this.origAltOn("resourceStop",this.resourceStopEvent),e.enhancedAltLog&&this.hookAltLogging())}hookAlt(e,n,o){let r=D[e];if(r==null)throw new Error(`[hookAlt] original property is not defined: ${e}`);if(Object.hasOwn(r,"___hookAlt"))throw new Error(`[hookAlt] already hooked property: ${e}`);return n.prototype||(n=n.bind(null,r)),Object.defineProperty(n,"___hookAlt",{enumerable:!1,configurable:!1,writable:!1,value:!0}),D[e]=(...i)=>{if(i.length<o)throw new Error(`${o} arguments expected`);return n(...i)},en[e]!=null&&(en[e]=n),r}hookAltEventAdd(e,n,o,r=!1){return this.hookAlt(n,(i,s,l)=>{if(!(typeof s=="string"||typeof s=="function"))throw new Error("Expected a string or function as first argument");if(typeof s=="function"){i(s);return}if(typeof l!="function")throw new Error("Expected a function as second argument");let a=this.eventHandlers[e];(a[s]??(a[s]=new Set)).add(l);let f=(...p)=>{if(r&&(a[s]?.delete(l),this.eventHandlersWrappers.get(s)?.delete(l)),this.hookedAltEvents[s]){this.log.debug("skip calling user handler of hooked alt event:",s);return}try{let y=l(...p);return this.log.debug("callback result:",y),y instanceof Promise?y.catch(h=>{throw this.logEventException(s,h),h}):y}catch(y){throw this.logEventException(s,y),y}},c=this.eventHandlersWrappers.get(s)??new Map;this.eventHandlersWrappers.set(s,c),c.set(l,f),i(s,f)},o)}hookAltEventRemove(e,n,o){return this.hookAlt(n,(r,i,s)=>{if(this.log.debug(`hooked alt.${n} called args:`,i,typeof s),!(typeof i=="string"||typeof i=="function"))throw new Error("Expected a string or function as first argument");if(typeof i=="function"){r(i);return}if(typeof s!="function")throw new Error("Expected a function as second argument");let l=this.eventHandlersWrappers.get(i);if(!l){this.log.debug(`alt.${n} called but event handlers are not registered for event: ${i}`);return}let a=l.get(s);if(!a){this.log.debug(`alt.${n} called but event handler is not registered for event: ${i}`);return}this.eventHandlers[e][i]?.delete(s),l?.delete(s),r(i,a)},o)}hookAltEvent(e,n){this.hookedAltEvents[e]=!0,this.log.debug("hooked alt event:",e);let o=this.origAltOn??D.on;this.log.debug("hookAltEvent altOn:",o),o(e,(...r)=>{this.log.debug("received hooked alt event:",e);let i=s=>{if(s===!1){this.log.debug("hooked altv event:",e,"was canceled");return}this.log.debug("hooked altv event:",e,"calling with args:",s),this.emitAltEvent(e,...s)};try{let s=n(...r);s instanceof Promise?s.then(l=>{i(l)}).catch(l=>{this.log.error(l)}):i(s)}catch(s){this.log.error("hook of altv event:",e,"error:",s)}})}emitAltEvent(e,...n){let o=this.eventHandlers.local[e];if(!o){this.log.debug("callAltEvent:",e,"no handlers");return}o.forEach(async r=>{try{await r(...n)}catch(i){this.logEventException(e,i)}})}setPlayerObjectPrototype(e,n=D.Player){Object.setPrototypeOf(e,n.prototype)}generateEventName(e){return`___${x}:${e}___`}wrapBaseObjectChildClass(e){let n=e.prototype,o=Symbol("originalDestroy"),r=this.baseObjects,i=this.log;n[o]=n.destroy,n.destroy=function(){try{r.delete(this),this[o]()}catch(l){throw i.error(`failed to destroy alt.${e.name} error:`),l}};let s=function(...l){try{let a=new e(...l);return r.add(a),Object.setPrototypeOf(a,this.__proto__),a}catch(a){throw i.error(`failed to create alt.${e.name} error:`),a}};s.prototype=e.prototype,Object.defineProperty(s,"name",{value:e.name});try{let l=Object.keys(e);for(let a of l)if(!Qt[a])try{let{value:f,set:c}=Object.getOwnPropertyDescriptor(e,a);typeof f=="function"?s[a]=e[a]:Object.defineProperty(s,a,{get:()=>e[a],set:c?.bind(e)})}catch(f){this.log.error(`detected broken alt.${e.name} static property: ${a}. 
`,f?.stack??f)}}catch(l){this.log.error(l.stack??l)}return s}destroyBaseObjects(){this.log.debug("destroyBaseObjects count:",this.baseObjects.size);for(let e of this.baseObjects)e.destroy()}onResourceStop(e){this.origAltOn("resourceStop",e)}defineMetaSetter(e,n,o){return function(r,i){if(arguments.length<2)throw new Error("2 arguments expected");this[n](r,i),this[o]??={},this[o][r]=i}}hookAltLogging(){let e=(o,...r)=>{o(...r.map(i=>typeof i=="string"?i:Xt(i,{colors:!0})))},n=this.hookAlt("log",e,0);D.isClient&&(console.log=e.bind(null,n)),D.logDebug&&this.hookAlt("logDebug",e,0)}logEventException(e,n){D.logError(`Uncaught exception in event listener of event "${e}":
`,n?.stack??n)}},d=new at(___altvEsbuild_altvInject_pluginOptions___);var j={restartCommand:d.generateEventName("restartCommand"),clientReady:d.generateEventName("clientReady"),playerModelsLoaded:d.generateEventName("playerModelsLoaded")},W={playerConnect:d.generateEventName("playerConnect"),connectionComplete:d.generateEventName("connectionComplete"),loadPlayerModels:d.generateEventName("loadPlayerModels")};var b=___altvEsbuild_altvInject_alt___,k;b.isClient&&(k=___altvEsbuild_altvInject_native___);var Ae=class{origAltOnServer;log=new I("client");clearPlayerMeta;onResourceStop=()=>{this.clearGame(),d.destroyBaseObjects(),this.clearPlayerMeta?.()};constructor(e){let{bugFixes:n,dev:o}=e;n.webViewFlickering&&this.initWebViewFlickeringBugFix(),n.playerDamageOnFirstConnect&&this.initPlayerDamageOnFirstConnectFix(),o.enabled&&(this.origAltOnServer=d.hookAltEventAdd("remote","onServer",1),d.hookAltEventAdd("remote","onceServer",1,!0),d.hookAltEventRemove("remote","offServer",1),n.playerPrototype&&this.initPlayerPrototypeTempFix(),o.restartCommand&&this.initRestartConsoleCommand(e),o.disconnectEvent&&this.initDisconnectEvent(),o.connectionCompleteEvent&&(this.log.debug("dev.connectionCompleteEvent:",o.connectionCompleteEvent),this.initConnectionCompleteEvent()),this.initClientReady(),this.hookBaseObjects(),this.clearPlayerMeta=this.initPlayerMetaCleanup(),d.onResourceStop(this.onResourceStop))}initPlayerPrototypeTempFix(){b.nextTick(()=>{for(let e of b.Player.all)e.valid&&(e!==b.Player.local?d.setPlayerObjectPrototype(e):(this.log.debug("set local player prototype"),d.setPlayerObjectPrototype(e,b.LocalPlayer)))}),this.origAltOnServer(W.playerConnect,e=>{d.setPlayerObjectPrototype(e)})}initRestartConsoleCommand(e){let n=e.dev.restartCommand===!0?"res":e.dev.restartCommand;this.log.debug("initRestartConsoleCommand command:",n),d.origAltOn("consoleCommand",o=>{o===n&&(this.log.info("~gl~restarting resource"),b.emitServerRaw(j.restartCommand))})}initWebViewFlickeringBugFix(){b.everyTick(()=>k.drawRect(0,0,0,0,0,0,0,0,!1))}initDisconnectEvent(){this.log.debug("initDisconnectEvent"),d.origAltOn("resourceStop",()=>d.emitAltEvent("disconnect"))}initConnectionCompleteEvent(){this.log.debug("initConnectionCompleteEvent");let e=!1;d.origAltOn("connectionComplete",()=>{e=!0}),this.origAltOnServer(W.connectionComplete,()=>{this.log.debug("received connectionComplete"),!e&&d.emitAltEvent("connectionComplete")})}initClientReady(){b.emitServerRaw(j.clientReady)}clearGame(){let e=b.Player.local;k.freezeEntityPosition(e,!1),k.setEntityVisible(e,!0,!1),k.doScreenFadeIn(0),k.triggerScreenblurFadeOut(0),k.stopAudioScenes(),k.newLoadSceneStop(),k.destroyAllCams(!1),k.animpostfxStopAll(),k.setCamDeathFailEffectState(0),k.displayHud(!0),k.displayRadar(!0),b.FocusData.clearFocus(),k.setFrontendActive(!1)}hookBaseObjects(){for(let e in b){let n=e,o=b[n];(this.isAltBlipClass(o)||this.isAltObjectClass(o))&&(this.log.debug("hooking class:",o.name),b[n]=d.wrapBaseObjectChildClass(o))}}isAltBlipClass(e){return e.prototype instanceof b.Blip}isAltObjectClass(e){return e.prototype instanceof b.Entity&&e.name==="Object"}initPlayerMetaCleanup(){let e=b.Player.prototype,n=e,o=Symbol("metaStoreKey"),r=Symbol("originalSetMeta");return n[r]=e.setMeta,e.setMeta=d.defineMetaSetter(n,r,o),()=>{for(let i of b.Player.all){if(!i?.valid)continue;let s=i;for(let l in s[o])i.deleteMeta(l)}}}initPlayerDamageOnFirstConnectFix(){(this.origAltOnServer??b.onServer)(W.loadPlayerModels,async()=>{this.log.debug("playerDamageOnFirstConnectFix loading models...");let n=await Promise.allSettled([b.Utils.requestModel("mp_m_freemode_01"),b.Utils.requestModel("mp_f_freemode_01")]);this.log.debug("playerDamageOnFirstConnectFix load model promises results",n),b.emitServerRaw(j.playerModelsLoaded)})}};var de=class{_promise;_resolve;_reject;constructor(){this._promise=new Promise((e,n)=>{this._resolve=e,this._reject=n})}get promise(){return this._promise}resolve(e){this._resolve(e)}reject(e){this._reject(e instanceof Error?e:new Error(e))}};var $e=class{constructor(e,n,o,r){this.name=e;this._net=n;this.port=o;this.connectHandler=r;this._socket=this.connect()}logDebug=()=>{};onError=e=>{(e?.code==="ECONNRESET"||e?.code==="ECONNREFUSED")&&(this.logDebug(`disconnected from server, trying reconnecting in ${$e.RECONNECT_MS}ms...`),setTimeout(()=>this.connect(),$e.RECONNECT_MS))};onConnect=e=>{this.connectHandler(e)};_socket;get socket(){return this._socket}connect(){this._socket&&this._socket.destroy();let e=this._net.connect(this.port);return e.on("connect",this.onConnect.bind(this,e)),e.on("error",this.onError),e}},ue=$e;Q(ue,"RECONNECT_MS",500);var m=___altvEsbuild_altvInject_alt___,tn;m.isServer&&(tn=await(async()=>await import("net"))());var ke=class{constructor(e){this.options=e;let{dev:n,bugFixes:o}=e;if(o.playerDamageOnFirstConnect&&this.initPlayerDamageOnFirstConnectFix(),n.enabled){this.origAltOnClient=d.hookAltEventAdd("remote","onClient",1),d.hookAltEventAdd("remote","onceClient",1,!0),d.hookAltEventRemove("remote","offClient",1),d.hookAlt("setSyncedMeta",(s,l,a)=>{this.syncedMetaKeys.add(l),s(l,a)},2),this.hookBaseObjects();let r=this.hookAltPlayer(),i=()=>{};if(n.playersReconnect){this.initPlayersReconnect(e);let s=new m.Vector3((m.getServerConfig().mapBoundsMaxX??1e5)+2e3);this.log.debug("despawnPlayers streamOutPos:",s),i=this.despawnPlayers.bind(this,s)}d.onResourceStop(this.onResourceStop.bind(this,r,i)),this.log.debug("dev.hotReload:",n.hotReload),n.hotReload&&(this.log.debug("init socketConnect"),this.socketConnect=new ue("server-inject",tn,this.options.dev.hotReloadServerPort,s=>{this.socket=s,this.eventManager=this.initEventManager(s),this.onConnect(),this.connectedAgain=!0})),n.enhancedRestartCommand?this.initEnhancedRestartCommand(e):n.restartCommand&&this.initRestartConsoleCommand(e),n.connectionCompleteEvent&&this.initConnectionCompleteEvent(),o.playerPrototype&&this.initPlayerPrototypeTempFix(),n.serverStartedEvent&&this.initServerStartedEvent()}}events={buildStart:e=>{this.log.debug(`[buildStart] ms: ${new Date().getMilliseconds()} mode:`,e),this.onBuildStart(e)},buildEnd:(e,n)=>{if(this.log.debug("[buildEnd] received:",e),n&&(this.log.debug("received cached buildEnd -> emulate buildStart first"),this.onBuildStart(e)),!this.buildsInProgress.delete(e)){this.log.debug(`received unknown buildEnd: ${e}, do nothing`);return}if(this.buildsInProgress.size){this.log.debug("remaining builds in progress:",this.buildsInProgress.size),this.waitingForBuildEnd===e&&(this.waitingForBuildEnd=this.flipMode(e));return}if(this.waitingForBuildEnd!==e){this.log.debug("received not what we waiting for");return}this.log.debug("no builds in progress -> restart"),this.restartResource()},clientConnect:()=>{this.log.debug("clientConnect"),this.clientConnected=!0},clientDisconnect:()=>{this.log.debug("clientDisconnect"),this.clientConnected=!1}};onConnect=()=>{if(this.connectedAgain){this.restartResource();return}this.log.debug("net socket connected, sending connect server event"),this.sendEvent("connect","server")};onSocketError=(e,n)=>{this.log.error("[events]",e,n)};onResourceStop=(e,n)=>{this.log.debug("resourceStop");for(let o of this.syncedMetaKeys)this.log.debug("deleting synced meta key:",o),m.deleteSyncedMeta(o);e(),n(),d.destroyBaseObjects()};socket;eventManager;log=new I("server");clientConnected=!1;anotherBuildStartTimeout=null;waitingForBuildEnd=null;restartInProgress=!1;connectedAgain=!1;buildsInProgress=new Set;syncedMetaKeys=new Set;origAltOnClient;socketConnect;playerReadyEvents=new Map;sendEvent(e,...n){if(!this.eventManager){this.log.error("[sendEvent] no event manager");return}this.eventManager?.send(e,...n)}restartResource(){if(this.restartInProgress){this.log.error("resource restart already in progress");return}this.restartInProgress=!0,this.clearCurrentBuild();let e=this.getFullResourceName();this.log.info(`restarting resource ${e}...`),m.restartResource(e)}clearCurrentBuild(){this.waitingForBuildEnd=null,this.buildsInProgress.clear()}flipMode(e){return e==="client"?"server":"client"}initEventManager(e){return new pe(e,this.events,this.onSocketError)}hookAltPlayer(){let e=m.Player.prototype,n=Symbol("metaStoreKey"),o=Symbol("syncedMetaStoreKey"),r=Symbol("streamSyncedMetaStoreKey"),i=Symbol("localMetaStoreKey"),s=Symbol("originalSetMeta"),l=Symbol("originalSetSyncedMeta"),a=Symbol("originalSetStreamSyncedMeta"),f=Symbol("originalSetLocalMeta"),c=e;return c[s]=e.setMeta,c[l]=e.setSyncedMeta,c[a]=e.setStreamSyncedMeta,c[f]=e.setLocalMeta,e.setMeta=d.defineMetaSetter(c,s,n),e.setSyncedMeta=d.defineMetaSetter(c,l,o),e.setStreamSyncedMeta=d.defineMetaSetter(c,a,r),e.setLocalMeta=d.defineMetaSetter(c,f,i),()=>{for(let p of m.Player.all){if(!p?.valid)continue;let y=p;for(let h in y[n])p.deleteMeta(h);for(let h in y[o])p.deleteSyncedMeta(h);for(let h in y[r])p.deleteStreamSyncedMeta(h);for(let h in y[i])p.deleteLocalMeta(h)}}}initPlayersReconnect({dev:{playersReconnectDelay:e}}){let n=`${x}:resourceRestarted`;if(this.log.debug("_alt.getMeta(resourceRestartedKey):",m.getMeta(n)),!m.getMeta(n)){this.log.debug("set resource restarted"),d.origAltSetMeta(n,!0);return}let o=m.Player.all;if(!o.length){this.log.debug("no players to reconnect");return}for(let r of o)r.valid&&this.initPlayerReadyEvent(r);this.log.info(`start a timer for ~cl~${e}~w~ ms to reconnect players (${o.length})`),setTimeout(()=>{for(let r of o)r.valid&&(r.dimension=m.defaultDimension,r.streamed=!0,r.collision=!0,r.invincible=!1,r.visible=!0,r.frozen=!1,this.waitForPlayerReadyEvent(r).then(i=>{if(!i){this.log.debug("waitForPlayerReadyEvent promise resolved false, player disconnected");return}this.log.debug("waitForPlayerReadyEvent success player:",r.name,r.id),d.emitAltEvent("playerConnect",r)}).catch(i=>{this.log.error(i.stack)}))},e)}despawnPlayers(e){this.log.debug("despawn players");for(let n of m.Player.all)n.valid&&(n.removeAllWeapons(),n.clearBloodDamage(),n.detach(),n.despawn(),n.visible=!1,this.options.dev.playersReconnectResetPos&&(n.pos=e))}initPlayerPrototypeTempFix(){m.nextTick(()=>{for(let e of m.Player.all)e.valid&&d.setPlayerObjectPrototype(e)}),d.origAltOn("playerConnect",e=>{d.setPlayerObjectPrototype(e)})}initRestartConsoleCommand(e){let n=e.dev.restartCommand===!0?"res":e.dev.restartCommand,o=()=>{this.restartResource()};d.origAltOn("consoleCommand",r=>{r===n&&o()}),this.origAltOnClient(j.restartCommand,()=>{o()})}initEnhancedRestartCommand({dev:{enhancedRestartCommand:e}}){let n=e===!0?"res":e;if(m.hasResource(ee))this.log.debug("control resource already started",ee);else{this.log.debug("control resource is not started",ee);let o=`../node_modules/altv-esbuild/dist/${ee}`;this.log.debug("resource control path:",o),m.nextTick(()=>{d.origAltOnce(d.generateEventName("resourceControlReady"),()=>{m.emit(d.generateEventName("resourceControlInit"),this.getFullResourceName(),n)}),m.startResource(o)})}}initConnectionCompleteEvent(){this.log.debug("initConnectionCompleteEvent"),this.origAltOnClient(j.clientReady,e=>{this.log.debug("received clientReady player:",e.name,e.id),e.emitRaw(W.connectionComplete);let n=this.playerReadyEvents.get(e);if(!n){this.log.debug("cant get ready event, skip");return}n.resolve(!0)})}hookBaseObjects(){for(let e in m){let n=e,o=m[n];if(!this.isBaseObjectClass(o))continue;let r=!1;try{new o,r=!0}catch(i){i?.message?.includes("abstract")&&(r=!0)}r||(m[n]=d.wrapBaseObjectChildClass(o))}}isBaseObjectClass(e){return e.prototype instanceof m.BaseObject&&e!==m.Player}onBuildStart(e){let n=this.flipMode(e);if(this.buildsInProgress.add(e),this.buildsInProgress.size===1&&this.waitingForBuildEnd===n&&this.buildsInProgress.has(n)){this.log.debug(`waiting currently for first build, change waitingForBuildEnd to: ${e}`),this.waitingForBuildEnd=e;return}if(this.anotherBuildStartTimeout){this.log.debug("[buildStart] received another build:",e,"clear timeout"),clearTimeout(this.anotherBuildStartTimeout),this.anotherBuildStartTimeout=null;return}if(e==="server"&&!this.clientConnected){this.log.debug("[buildStart] client is not connected, skip waiting for another build"),this.waitingForBuildEnd=e;return}this.waitingForBuildEnd=n,this.log.debug(`[buildStart] waiting for another build: ${this.waitingForBuildEnd} to start...`),this.anotherBuildStartTimeout=setTimeout(()=>{this.anotherBuildStartTimeout=null,this.log.debug(`another build didnt started after ${ke.MAX_ANOTHER_BUILD_START_MS}ms`),this.buildsInProgress.has(e)?(this.log.debug(`waiting for build: ${e} to end now...`),this.waitingForBuildEnd=e):(this.log.debug(`first build: ${e} ended -> restart`),this.restartResource())},ke.MAX_ANOTHER_BUILD_START_MS)}initPlayerReadyEvent(e){let n=new de;this.playerReadyEvents.set(e,n);let o=r=>{r===e&&(this.playerReadyEvents.delete(e),n.resolve(!1))};n.promise.finally(()=>{d.origAltOff("playerDisconnect",o)}),d.origAltOn("playerDisconnect",o),this.origAltOnClient(d.generateEventName("playerReady"),o)}async waitForPlayerReadyEvent(e){let n=this.playerReadyEvents.get(e);return n?await n.promise:(this.log.warn("waitForPlayerReadyEvent unknown player:",e.name,e.id),!1)}getFullResourceName(){let{path:e}=m.Resource.current,n=`${m.rootDir}\\resources\\`;return e.slice(n.length).replaceAll("\\","/")}initServerStartedEvent(){this.log.debug("initServerStartedEvent");let e=new m.Utils.Timeout(()=>{e=null,this.log.debug("emitting serverStarted from timer"),d.emitAltEvent("serverStarted")},500);d.hookAltEvent("serverStarted",(...n)=>e?(e?.destroy(),e=null,this.log.debug("emitting serverStarted from original"),n):(this.log.error("original serverStarted was called, but timer is already null"),!1))}initPlayerDamageOnFirstConnectFix(){let e=new Map,n=(r,i)=>{if(!i.valid){r.reject(new Error("[playerDamageOnFirstConnectFix] player object is invalid"));return}r.resolve([i])};d.hookAltEvent("playerConnect",r=>{this.log.debug("playerDamageOnFirstConnectFix received playerConnect",r.name,r.id);let i=new de;e.set(r,i);let s=m.setTimeout(()=>{s=0,this.log.warn("[playerDamageOnFirstConnectFix] resolve playerConnect after timeout (maybe player is already disconnected?)"),n(i,r)},5e3);return i.promise.finally(()=>{this.log.debug("playerDamageOnFirstConnectFix promise.finally player:",r.name,r.id),s&&(m.clearTimeout(s),s=0),e.delete(r)}),r.emitRaw(W.loadPlayerModels),i.promise}),(this.origAltOnClient??m.onClient)(j.playerModelsLoaded,r=>{this.log.debug("received playerModelsLoaded player:",r.name,r.id);let i=e.get(r);if(!i){this.log.debug("cant get loadingModelPromise, skip");return}n(i,r)})}},Y=ke;Q(Y,"MAX_ANOTHER_BUILD_START_MS",500),Q(Y,"RECONNECT_MS",500);var ct=___altvEsbuild_altvInject_pluginOptions___;ct.mode==="client"?new Ae(ct):new Y(ct);
})().catch(e => ___altvEsbuild_altvInject_altShared___.logError("[altv-esbuild] banner wrapper error:", e?.stack ?? e?.message ?? e));
try {// ------------------- altv-esbuild banner -------------------

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// altv-esbuild:external-handling-alt-client:alt-client
var require_alt_client = __commonJS({
  "altv-esbuild:external-handling-alt-client:alt-client"(exports, module) {
    module.exports = ___altvEsbuild_altvInject_alt___;
  }
});

// altv-esbuild:external-handling-natives:natives
var require_natives = __commonJS({
  "altv-esbuild:external-handling-natives:natives"(exports, module) {
    module.exports = ___altvEsbuild_altvInject_native___;
  }
});

// src/shared/locale/readJson.ts
var import_alt_client = __toESM(require_alt_client(), 1);
var hans_filePath = "/Client/locales/zh_hans.json";
var playerLang = "zh-CN";
var isFileExist = import_alt_client.default.File.exists(hans_filePath);
var locales = JSON.parse(import_alt_client.default.File.read(hans_filePath));
if (isFileExist)
  locales = JSON.parse(import_alt_client.default.File.read(hans_filePath));

// src/log/handler.ts
var alt3 = __toESM(require_alt_client(), 1);

// src/log/logger.ts
var alt2 = __toESM(require_alt_client(), 1);
function info(msg) {
  alt2.log("~g~" + msg);
}
function debug(msg) {
  alt2.log("~y~" + msg);
}

// src/log/handler.ts
alt3.onServer("client:Console", handleLogConsole);
function handleLogConsole(msg) {
  info("[\u670D\u52A1\u7AEF\u65E5\u5FD7] " + msg);
}

// src/events/connect.ts
var alt4 = __toESM(require_alt_client(), 1);

// src/shared/locale/langService.ts
function langPack(lang) {
  if (playerLang == "zh-CN")
    if (isFileExist)
      if (locales[lang])
        return locales[lang];
      else
        return "\u65E0\u6548\u8BED\u6CD5";
    else
      return "\u8BED\u8A00\u6587\u4EF6\u4E0D\u5B58\u5728";
  else
    return "\u8F93\u5165\u5B57\u7B26\u4E32\u65E0\u6548";
}

// src/events/connect.ts
alt4.onServer("TestClientside", (playerName) => {
  const joinMessage = langPack("server.connect").replace("{name}", playerName);
  info(joinMessage);
});

// src/cef_handler/model.ts
var import_alt_client2 = __toESM(require_alt_client(), 1);

// src/config.ts
var DEV_MODE = true;
var config_default = DEV_MODE;

// src/shared/decorator.ts
function withLogging(target, propertyKey, descriptor) {
  if (!config_default)
    return;
  const originalMethod = descriptor.value;
  descriptor.value = async function(...args) {
    const className = target.constructor.name;
    const debugMsg = `\u7C7B: ${className} \u7684\u65B9\u6CD5: ${propertyKey} \u88AB\u8C03\u7528`;
    debug(debugMsg);
    const result = await originalMethod.apply(this, args);
    const debugMsg2 = `\u7C7B: ${className} \u7684\u65B9\u6CD5: ${propertyKey} \u6267\u884C\u5B8C\u6BD5\uFF0C\u7ED3\u679C: ${JSON.stringify(result)}`;
    debug(debugMsg2);
    return result;
  };
  return descriptor;
}

// src/cef_handler/model.ts
var webView = class {
  view;
  url;
  name;
  active_state;
  focus_state;
  constructor(name, url) {
    this.url = url;
    this.name = name;
    this.active_state = false;
    this.focus_state = false;
  }
  get page() {
    return this.view;
  }
  get active() {
    return this.active_state;
  }
  async on(event, func) {
    if (!this.view)
      return false;
    this.view.on(event, func);
    return true;
  }
  async emitSync(event, ...args) {
    if (!this.view)
      return;
    await this.view.emit(event, ...args);
  }
  emit(event, ...args) {
    if (!this.view)
      return;
    this.view.emit(event, ...args);
  }
  async show() {
    this.view = new import_alt_client2.default.WebView(this.url);
    this.active_state = true;
    return true;
  }
  async showWithFocus() {
    this.view = new import_alt_client2.default.WebView(this.url);
    await this.focus();
    this.active_state = true;
    return true;
  }
  async focus() {
    if (!this.view)
      return false;
    this.focus_state = true;
    this.view.focus();
    return true;
  }
  async unfocus() {
    if (!this.view)
      return false;
    this.focus_state = false;
    this.view.unfocus();
    return true;
  }
  async destroy(isPageDestroy) {
    if (!this.view)
      return false;
    if (!isPageDestroy)
      return false;
    this.view.unfocus();
    this.view.destroy();
    this.active_state = false;
    await this.gameCursor(false);
    await this.gameControl(true);
    return true;
  }
  async gameCursor(state) {
    if (!this.view)
      return false;
    import_alt_client2.default.showCursor(state);
    return true;
  }
  async gameControl(state) {
    if (!this.view)
      return false;
    import_alt_client2.default.toggleGameControls(state);
    return true;
  }
};
__decorateClass([
  withLogging
], webView.prototype, "on", 1);
__decorateClass([
  withLogging
], webView.prototype, "emitSync", 1);
__decorateClass([
  withLogging
], webView.prototype, "emit", 1);
__decorateClass([
  withLogging
], webView.prototype, "show", 1);
__decorateClass([
  withLogging
], webView.prototype, "showWithFocus", 1);
__decorateClass([
  withLogging
], webView.prototype, "focus", 1);
__decorateClass([
  withLogging
], webView.prototype, "unfocus", 1);
__decorateClass([
  withLogging
], webView.prototype, "destroy", 1);
__decorateClass([
  withLogging
], webView.prototype, "gameCursor", 1);
__decorateClass([
  withLogging
], webView.prototype, "gameControl", 1);

// src/cef_handler/chat/main.ts
var alt8 = __toESM(require_alt_client(), 1);

// src/cef_handler/auth/main.ts
var alt7 = __toESM(require_alt_client(), 1);

// src/cef_handler/notify/main.ts
var alt6 = __toESM(require_alt_client(), 1);
var notifyPage = new webView("\u6D88\u606F\u901A\u77E5", "http://resource/Client/webview/notify/index.html");
alt6.onServer("notify:client:init", init);
async function init() {
  const result = await notifyPage.show();
  if (!result)
    return;
  if (!notifyPage.page)
    return;
}
async function info2(text) {
  if (!notifyPage.page)
    return;
  await notifyPage.emitSync("notify:webview:send", "info", "\u63D0\u793A", text);
}
async function green(text) {
  if (!notifyPage.page)
    return;
  await notifyPage.emitSync("notify:webview:send", "good", "\u4FE1\u606F", text);
}
async function error(text) {
  if (!notifyPage.page)
    return;
  await notifyPage.emitSync("notify:webview:send", "error", "\u9519\u8BEF", text);
}
alt6.on("notify:client:send", async (type, text) => {
  if (type == "info")
    await info2(text);
  else if (type == "green")
    await green(text);
  else if (type == "error")
    await error(text);
});
alt6.onServer("notify:server:send", async (type, text) => {
  if (type == "info")
    await info2(text);
  else if (type == "green")
    await green(text);
  else if (type == "error")
    await error(text);
});

// src/cef_handler/auth/main.ts
var authPage = new webView("\u767B\u5F55\u6CE8\u518C\u9875\u9762", "http://resource/Client/webview/auth/index.html");
var localUsername = alt7.LocalStorage.get("username");
var localPassword = alt7.LocalStorage.get("password");
var infoNotify = green;
var playerTempVar = {
  logged: false,
  // 默认为未登录
  setLogged: async function(state) {
    this.logged = state;
    await infoNotify(langPack("login.success"));
  }
};
alt7.onServer("auth:client:show", _showAuthPage);
async function _showAuthPage() {
  const result = await authPage.showWithFocus();
  if (!result)
    return;
  if (!authPage.page)
    return;
  setTimeout(async function() {
    await authPage.gameCursor(true);
    if (await authPage.gameControl(true)) {
      console.log("control:" + alt7.gameControlsEnabled());
      if (localUsername != null && localPassword != null) {
        await authPage.emitSync("auth:webview:getLocalAuth", localUsername, localPassword);
      }
      await authPage.on("auth:client:tryLogin", _tryLogin);
      await authPage.on("auth:client:saveLocalAuth", _saveLocalAuth);
      await authPage.on("auth:client:deleteLocalAuth", _deleteLocalAuth);
      await authPage.on("auth:client:tryRegister", _tryRegister);
    }
  }, 5e3);
}
async function _tryLogin(username, password) {
  alt7.emitServer("auth:server:tryLogin", username, password);
}
async function _tryRegister(username, password, email) {
  alt7.emitServer("auth:server:tryRegister", username, password, email);
}
function _saveLocalAuth(username, password) {
  alt7.LocalStorage.set("username", username);
  alt7.LocalStorage.set("password", password);
  alt7.LocalStorage.save();
}
function _deleteLocalAuth() {
  alt7.LocalStorage.delete("username");
  alt7.LocalStorage.delete("password");
  alt7.LocalStorage.save();
}
alt7.onServer("auth:client:close", _destroyAuthPage);
async function _destroyAuthPage(finishLogin = false) {
  if (!authPage.page)
    return;
  if (finishLogin) {
    await authPage.emitSync("auth:webview:clearForm");
    if (await authPage.destroy(true)) {
      console.log("control:" + alt7.gameControlsEnabled());
    }
  }
  await playerTempVar.setLogged(true);
}
alt7.onServer("auth:client:wrongAuth", _wrongAuth);
async function _wrongAuth() {
  if (!authPage.page)
    return;
  await authPage.emitSync("auth:webview:wrongAuth", langPack("login.error.wrong_pass"));
}
alt7.onServer("auth:client:alreadyExist", _alreadyExist);
async function _alreadyExist() {
  if (!authPage.page)
    return;
  await authPage.emitSync("auth:webview:alreadyExist", langPack("reg.already_exist"));
}
alt7.onServer("auth:client:finishReg", _finishReg);
async function _finishReg() {
  if (!authPage.page)
    return;
  await authPage.emitSync("auth:webview:finishReg", langPack("reg.finish"));
}

// src/cef_handler/chat/main.ts
var chatPage = new webView("\u804A\u5929\u6846", "http://resource/Client/webview/chat/index.html");
var chatBuffer = [];
var chatLoaded = false;
var chatOpened = false;
alt8.onServer("chat:client:init", init2);
async function init2() {
  const result = await chatPage.show();
  if (!result)
    return;
  if (!chatPage.page)
    return;
  await chatPage.gameControl(true);
  await chatPage.on("chat:webview:loaded", handleLoaded);
  await chatPage.on("chat:webview:submitMessage", handleSubmit);
  await pushLine("<b>\u5DF2\u8FDE\u63A5alt:V\u9879\u76EE</b>");
}
async function addMessage(name, text) {
  if (!chatPage.page)
    return;
  if (name) {
    await chatPage.emitSync("chat:webview:addMessage", name, text);
  } else {
    await chatPage.emitSync("chat:webview:addString", text);
  }
}
async function handleLoaded() {
  for (const msg of chatBuffer) {
    await addMessage(msg.name, msg.text);
  }
  chatLoaded = true;
}
async function handleSubmit(text) {
  if (!chatPage.page)
    return;
  alt8.emitServer("chat:server:addMessage", text);
  chatOpened = false;
  await chatPage.gameControl(true);
  await chatPage.unfocus();
}
alt8.onServer("chat:client:addMessage", pushMessage);
async function pushMessage(name, text) {
  if (!chatLoaded) {
    let buffer = { name, text };
    chatBuffer.push(buffer);
  } else {
    await addMessage(name, text);
  }
}
async function pushLine(text) {
  await pushMessage(null, text);
}
alt8.on("keyup", async (key) => {
  if (!chatPage.page)
    return;
  if (chatLoaded && !authPage.active) {
    if (!chatOpened && key === 84 && alt8.gameControlsEnabled()) {
      chatOpened = true;
      await chatPage.emitSync("chat:webview:open", false);
      await chatPage.gameControl(false);
      await chatPage.focus();
    } else if (!chatOpened && key === 191 && alt8.gameControlsEnabled()) {
      chatOpened = true;
      await chatPage.emitSync("chat:webview:open", true);
      await chatPage.gameControl(false);
      await chatPage.focus();
    } else if (chatOpened && key == 27) {
      chatOpened = false;
      await chatPage.emitSync("chat:webview:close");
      await chatPage.gameControl(true);
      await chatPage.unfocus();
    }
  }
});

// src/cef_handler/character_creator/main.ts
var alt10 = __toESM(require_alt_client(), 1);

// src/cef_handler/character_creator/camera.ts
var alt9 = __toESM(require_alt_client(), 1);
var native = __toESM(require_natives(), 1);
var cameraControlsInterval;
var camera;
var zpos = 0;
var fov = 90;
var startPosition;
var startCamPosition;
var timeBetweenAnimChecks = Date.now() + 100;
function createPedEditCamera() {
  startPosition = { ...alt9.Player.local.pos };
  if (!camera) {
    const forwardVector = native.getEntityForwardVector(alt9.Player.local.scriptID);
    const forwardCameraPosition = {
      x: startPosition.x + forwardVector.x * 1.2,
      y: startPosition.y + forwardVector.y * 1.2,
      z: startPosition.z + zpos
    };
    fov = 90;
    startCamPosition = forwardCameraPosition;
    camera = native.createCamWithParams(
      "DEFAULT_SCRIPTED_CAMERA",
      forwardCameraPosition.x,
      forwardCameraPosition.y,
      forwardCameraPosition.z,
      0,
      0,
      0,
      fov,
      true,
      0
    );
    native.pointCamAtCoord(camera, startPosition.x, startPosition.y, startPosition.z);
    native.setCamActive(camera, true);
    native.renderScriptCams(true, false, 0, true, false, 0);
  }
  cameraControlsInterval = alt9.setInterval(handleControls, 0);
}
function handleControls() {
  native.hideHudAndRadarThisFrame();
  native.disableAllControlActions(0);
  native.disableAllControlActions(1);
  native.disableControlAction(0, 0, true);
  native.disableControlAction(0, 1, true);
  native.disableControlAction(0, 2, true);
  native.disableControlAction(0, 24, true);
  native.disableControlAction(0, 25, true);
  native.disableControlAction(0, 32, true);
  native.disableControlAction(0, 33, true);
  native.disableControlAction(0, 34, true);
  native.disableControlAction(0, 35, true);
  const [_, width] = native.getScreenResolution(0, 0);
  const cursor = alt9.getCursorPos();
  const _x = cursor.x;
  let oldHeading = native.getEntityHeading(alt9.Player.local.scriptID);
  if (native.isDisabledControlPressed(0, 15)) {
    if (_x < width / 2 + 250 && _x > width / 2 - 250) {
      fov -= 2;
      if (fov < 10) {
        fov = 10;
      }
      native.setCamFov(camera, fov);
      native.setCamActive(camera, true);
      native.renderScriptCams(true, false, 0, true, false, 0);
    }
  }
  if (native.isDisabledControlPressed(0, 16)) {
    if (_x < width / 2 + 250 && _x > width / 2 - 250) {
      fov += 2;
      if (fov > 130) {
        fov = 130;
      }
      native.setCamFov(camera, fov);
      native.setCamActive(camera, true);
      native.renderScriptCams(true, false, 0, true, false, 0);
    }
  }
  if (native.isDisabledControlPressed(0, 32)) {
    zpos += 0.01;
    if (zpos > 1.2) {
      zpos = 1.2;
    }
    native.setCamCoord(camera, startCamPosition.x, startCamPosition.y, startCamPosition.z + zpos);
    native.pointCamAtCoord(camera, startPosition.x, startPosition.y, startPosition.z + zpos);
    native.setCamActive(camera, true);
    native.renderScriptCams(true, false, 0, true, false, 0);
  }
  if (native.isDisabledControlPressed(0, 33)) {
    zpos -= 0.01;
    if (zpos < -1.2) {
      zpos = -1.2;
    }
    native.setCamCoord(camera, startCamPosition.x, startCamPosition.y, startCamPosition.z + zpos);
    native.pointCamAtCoord(camera, startPosition.x, startPosition.y, startPosition.z + zpos);
    native.setCamActive(camera, true);
    native.renderScriptCams(true, false, 0, true, false, 0);
  }
  if (native.isDisabledControlPressed(0, 25)) {
    if (_x < width / 2) {
      const newHeading = oldHeading -= 2;
      native.setEntityHeading(alt9.Player.local.scriptID, newHeading);
    }
    if (_x > width / 2) {
      const newHeading = oldHeading += 2;
      native.setEntityHeading(alt9.Player.local.scriptID, newHeading);
    }
  }
  if (native.isDisabledControlPressed(0, 35)) {
    const newHeading = oldHeading += 2;
    native.setEntityHeading(alt9.Player.local.scriptID, newHeading);
  }
  if (native.isDisabledControlPressed(0, 34)) {
    const newHeading = oldHeading -= 2;
    native.setEntityHeading(alt9.Player.local.scriptID, newHeading);
  }
  if (Date.now() > timeBetweenAnimChecks) {
    timeBetweenAnimChecks = Date.now() + 1500;
    if (!native.isEntityPlayingAnim(alt9.Player.local.scriptID, "nm@hands", "hands_up", 3)) {
      alt9.emit("animation:Play", {
        dict: "nm@hands",
        name: "hands_up",
        duration: -1,
        flag: 2
      });
    }
  }
}
function setFov(value) {
  fov = value;
  native.setCamFov(camera, fov);
  native.setCamActive(camera, true);
  native.renderScriptCams(true, false, 0, true, false, 0);
}
function setZPos(value) {
  let posZ = value;
  native.setCamCoord(camera, startCamPosition.x, startCamPosition.y, startCamPosition.z + posZ);
  native.pointCamAtCoord(camera, startPosition.x, startPosition.y, startPosition.z + posZ);
  native.setCamActive(camera, true);
  native.renderScriptCams(true, false, 0, true, false, 0);
}

// src/cef_handler/character_creator/main.ts
var creatorPage = new webView("\u521B\u5EFA\u89D2\u8272\u9875\u9762", "http://resource/Client/webview/character-creator/index.html");
alt10.onServer("charCreator:client:show", _showCharCreator);
async function _showCharCreator() {
  createPedEditCamera();
  setFov(50);
  setZPos(0.6);
}

// src/nametag/main.ts
var alt11 = __toESM(require_alt_client(), 1);
var native2 = __toESM(require_natives(), 1);
var controlKey = 112;
var document = new alt11.RmlDocument("/Client/nametag/index.rml");
var container = document.getElementByID("nametag-container");
var nameTags = /* @__PURE__ */ new Map();
var tickHandle;
alt11.on("gameEntityCreate", (entity) => {
  if (container == null)
    return;
  const rmlElement = document.createElement("button");
  rmlElement.rmlId = entity.id.toString();
  rmlElement.addClass("nametag");
  rmlElement.addClass("hide");
  if (entity instanceof alt11.Player) {
    rmlElement.innerRML = `\u73A9\u5BB6: ${entity.id}\u53F7`;
  } else if (entity instanceof alt11.Vehicle)
    rmlElement.innerRML = `\u8F66\u8F86ID: ${entity.id}`;
  else {
    rmlElement.destroy();
    return;
  }
  nameTags.set(entity, rmlElement);
  container.appendChild(rmlElement);
  rmlElement.on("click", printCoordinates);
  if (tickHandle !== void 0)
    return;
  tickHandle = alt11.everyTick(drawMarkers);
});
alt11.on("gameEntityDestroy", (entity) => {
  if (container == null)
    return;
  const rmlElement = nameTags.get(entity);
  if (rmlElement === void 0)
    return;
  container.removeChild(rmlElement);
  rmlElement.destroy();
  nameTags.delete(entity);
  if (tickHandle === void 0 || nameTags.size > 0)
    return;
  alt11.clearEveryTick(tickHandle);
});
alt11.on("keyup", (key) => {
  if (key !== controlKey)
    return;
  const currentState = alt11.rmlControlsEnabled();
  if (currentState) {
    alt11.toggleGameControls(true);
    alt11.showCursor(false);
    alt11.toggleRmlControls(false);
  } else {
    alt11.toggleGameControls(false);
    alt11.showCursor(true);
    alt11.toggleRmlControls(true);
  }
});
function printCoordinates(rmlElement) {
  const entity = alt11.Entity.getByID(parseInt(rmlElement.rmlId));
  if (entity == null)
    return;
  alt11.log("\u5B9E\u4F53\u5750\u6807", "X", entity.pos.x, "Y", entity.pos.y, "Z", entity.pos.z);
}
function drawMarkers() {
  nameTags.forEach((rmlElement, entity) => {
    let { x, y, z } = entity.pos;
    if (distance2d(new alt11.Vector3(entity.pos), alt11.Player.local.pos) > 20)
      return;
    if (!native2.isSphereVisible(x, y, z, 0.0099999998) || !native2.hasEntityClearLosToEntity(alt11.Player.local, entity, 17)) {
      if (!rmlElement.shown)
        return;
      rmlElement.addClass("hide");
      rmlElement.shown = false;
    } else {
      if (!rmlElement.shown) {
        rmlElement.removeClass("hide");
        rmlElement.shown = true;
      }
      if (entity instanceof alt11.Player) {
        let pos = { ...native2.getPedBoneCoords(entity.scriptID, 12844, 0, 0, 0) };
        const { x: screenX, y: screenY } = alt11.worldToScreen(pos.x, pos.y, pos.z + 0.75);
        rmlElement.style["left"] = `${screenX}px`;
        rmlElement.style["top"] = `${screenY}px`;
      } else {
        const { x: screenX, y: screenY } = alt11.worldToScreen(x, y, z + 0.75);
        rmlElement.style["left"] = `${screenX}px`;
        rmlElement.style["top"] = `${screenY}px`;
      }
    }
  });
}
function distance2d(vector1, vector2) {
  return Math.sqrt(Math.pow(vector1.x - vector2.x, 2) + Math.pow(vector1.y - vector2.y, 2));
}

// src/noclip/main.ts
var import_alt_client3 = __toESM(require_alt_client(), 1);
var import_natives = __toESM(require_natives(), 1);
var player = import_alt_client3.default.Player.local;
var arrayNum = 4;
var noClipState = false;
var inCarState = false;
var noClipEntity;
var rotation = 0;
var noClipSpeed = [0, 0.125, 0.25, 0.5, 1, 1.5, 2, 4, 0];
function arrayNumPlus() {
  ++arrayNum;
  if (arrayNum == 8)
    arrayNum = 1;
}
function arrayNumMinus() {
  ++arrayNum;
  if (arrayNum == 0)
    arrayNum = 7;
}
import_alt_client3.default.everyTick(() => {
  if (!noClipState) {
    rotation = import_natives.default.getEntityRotation(player.scriptID, 2).z;
  }
  if (noClipState) {
    let selectedSpeed;
    let xOff = 0;
    let yOff = 0;
    let zOff = 0;
    import_natives.default.disableControlAction(0, 32, true);
    import_natives.default.disableControlAction(0, 33, true);
    import_natives.default.disableControlAction(0, 34, true);
    import_natives.default.disableControlAction(0, 35, true);
    import_natives.default.disableControlAction(0, 22, true);
    import_natives.default.disableControlAction(0, 21, true);
    import_natives.default.disableControlAction(0, 268, true);
    import_natives.default.disableControlAction(0, 269, true);
    import_natives.default.disableControlAction(0, 266, true);
    import_natives.default.disableControlAction(0, 267, true);
    import_natives.default.disableControlAction(0, 31, true);
    import_natives.default.disableControlAction(0, 30, true);
    import_natives.default.disableControlAction(0, 44, true);
    import_natives.default.disableControlAction(0, 85, true);
    import_natives.default.disableControlAction(0, 86, true);
    import_natives.default.disableControlAction(0, 74, true);
    selectedSpeed = noClipSpeed[arrayNum];
    if (import_natives.default.updateOnscreenKeyboard() !== 0 && import_alt_client3.default.isGameFocused()) {
      if (import_natives.default.isDisabledControlPressed(0, 44))
        rotation += 5;
      if (import_natives.default.isDisabledControlPressed(0, 86))
        rotation -= 5;
      if (import_natives.default.isDisabledControlPressed(0, 32))
        yOff = 1 * selectedSpeed;
      if (import_natives.default.isDisabledControlPressed(0, 33))
        yOff = -1 * selectedSpeed;
      if (import_natives.default.isDisabledControlPressed(0, 34))
        xOff = -1 * selectedSpeed;
      if (import_natives.default.isDisabledControlPressed(0, 35))
        xOff = 1 * selectedSpeed;
      if (import_natives.default.isDisabledControlPressed(0, 22))
        zOff = 1 * selectedSpeed;
      if (import_natives.default.isDisabledControlPressed(0, 21))
        zOff = -1 * selectedSpeed;
    }
    if (inCarState) {
      if (!player.vehicle) {
        import_natives.default.freezeEntityPosition(noClipEntity, false);
        import_natives.default.setEntityCollision(noClipEntity, true, true);
        import_natives.default.setVehicleGravity(noClipEntity, true);
        noClipState = false;
      }
    }
    let newPosition;
    newPosition = import_natives.default.getOffsetFromEntityInWorldCoords(noClipEntity, xOff, yOff, zOff);
    import_natives.default.setEntityRotation(noClipEntity, 0, 0, rotation, 0, false);
    import_natives.default.setEntityCoordsNoOffset(noClipEntity, newPosition.x, newPosition.y, newPosition.z, true, true, true);
  }
});
import_alt_client3.default.on("keyup", (key) => {
  if (key == 33) {
    arrayNumPlus();
  } else if (key == 34) {
    arrayNumMinus();
  }
});
import_alt_client3.default.onServer("noclip:client:toggle", startNoClip);
function startNoClip() {
  noClipState = !noClipState;
  if (player.vehicle) {
    noClipEntity = player.vehicle.scriptID;
    inCarState = true;
  } else {
    noClipEntity = player.scriptID;
    inCarState = false;
  }
  if (noClipState) {
    if (player.vehicle)
      import_natives.default.setVehicleGravity(noClipEntity, false);
    import_natives.default.setEntityInvincible(noClipEntity, true);
    import_natives.default.freezeEntityPosition(noClipEntity, true);
    import_natives.default.setEntityCollision(noClipEntity, false, false);
  } else {
    import_natives.default.freezeEntityPosition(noClipEntity, false);
    import_natives.default.setEntityInvincible(noClipEntity, false);
    import_natives.default.setEntityCollision(noClipEntity, true, true);
    if (player.vehicle) {
      import_natives.default.setVehicleGravity(noClipEntity, true);
      import_natives.default.setVehicleForwardSpeed(noClipEntity, 0);
      import_natives.default.setVehicleForwardSpeed(noClipEntity, -0.01);
    }
  }
}

// src/weather/main.ts
var import_alt_client4 = __toESM(require_alt_client(), 1);
var import_natives2 = __toESM(require_natives(), 1);
var lastWeather = "CLEAR";
var currentWeather = "CLEAR";
import_alt_client4.default.onServer("weather:client:weather", setServerWeather);
function setServerWeather(weather, time) {
  console.log(`\u6536\u5230\u5929\u6C14${weather}`);
  currentWeather = weather;
  if (time === 0) {
    import_natives2.default.setWeatherTypeNowPersist(weather);
  } else {
    if (lastWeather != currentWeather) {
      let i = 0;
      let inter = import_alt_client4.default.setInterval(() => {
        i++;
        if (i < 100) {
          import_natives2.default.setWeatherTypeOvertimePersist(currentWeather, i / 100);
        } else {
          import_alt_client4.default.clearInterval(inter);
          lastWeather = currentWeather;
        }
      }, time * 10);
    }
  }
}
import_alt_client4.default.onServer("weather:client:time", setServerTime);
function setServerTime(hour, minute, second, msperminute) {
  console.log(`\u6536\u5230\u65F6\u95F4${hour}:${minute}:${second}`);
  let oldTime = {
    hour: import_natives2.default.getClockHours(),
    minute: import_natives2.default.getClockMinutes(),
    second: import_natives2.default.getClockSeconds()
  };
  if (minute - oldTime.minute > 10) {
    import_natives2.default.setClockTime(hour, minute, second);
  }
  if (msperminute != import_alt_client4.default.getMsPerGameMinute()) {
    import_alt_client4.default.setMsPerGameMinute(msperminute);
  }
}
import_alt_client4.default.onServer("weather:client:testcheck", testCheck);
function testCheck() {
  console.log(`\u65F6\u95F4: ${import_natives2.default.getClockHours()}:${import_natives2.default.getClockMinutes()}:${import_natives2.default.getClockSeconds()}`);
  console.log(`\u5929\u6C14: ${import_natives2.default.getCurrWeatherState()}`);
}

// ------------------- altv-esbuild footer -------------------
} catch (e) {
        const error = ___altvEsbuild_altvInject_altShared___.logError;

        // hide all other user logs to show error at a glance
        ___altvEsbuild_altvInject_altShared___.log = () => {};
        ___altvEsbuild_altvInject_altShared___.logWarning = () => {};
        ___altvEsbuild_altvInject_altShared___.logError = () => {};
        ___altvEsbuild_altvInject_alt___.log = () => {};
        ___altvEsbuild_altvInject_alt___.logWarning = () => {};
        ___altvEsbuild_altvInject_alt___.logError = () => {};
        console.log = () => {};
        console.warn = () => {};
        console.error = () => {};

        ___altvEsbuild_altvInject_altShared___.setTimeout(() => {
          error(
            "[altv-esbuild] Top-level exception:\n  ",
            e?.stack ?? e
          );
        }, 500);
        if (___altvEsbuild_altvInject_alt___.isClient) {
          drawError("TOP-LEVEL EXCEPTION", "see client console", "(it's message from altv-esbuild)");
          function drawError(title,text,text2){
            const alt = ___altvEsbuild_altvInject_alt___;
            alt.addGxtText("warning_error",title);
            alt.addGxtText("warning_text",text);
            alt.addGxtText("warning_text2",text2);
            let state=!alt.isConsoleOpen();
            const timeout=alt.setInterval(()=>{state=!alt.isConsoleOpen()},50);
            const tick=alt.everyTick(()=>{
              if (state) {
                ___altvEsbuild_altvInject_native___.setWarningMessageWithHeader(
                  "warning_error",
                  "warning_text",
                  0,
                  "warning_text2",
                  false, -1,
                  null, null,
                  true, 0
                );
              }
            });
            return()=>{alt.clearInterval(timeout);alt.clearEveryTick(tick)}
          }
        }
      }
// ------------------- altv-esbuild footer -------------------

