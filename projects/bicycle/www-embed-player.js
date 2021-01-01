(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var ea={wa:!0},fa={};try{fa.__proto__=ea;ca=fa.wa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.w=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
function la(){la=function(){};
ja.Symbol||(ja.Symbol=ma)}
var ma=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function na(){la();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return oa(this)}});
na=function(){}}
function oa(a){var b=0;return pa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function pa(a){na();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a}
function qa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ra="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)qa(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||ra});
function sa(a){na();var b=a[Symbol.iterator];return b?b.call(a):oa(a)}
ka("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){la();na();a=sa(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){qa(a,e)||ia(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(m){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!qa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};
b.prototype.get=function(a){return qa(a,e)?a[e][this.b]:void 0};
b.prototype.has=function(a){return qa(a,e)&&qa(a[e],this.b)};
b.prototype["delete"]=function(a){return qa(a,e)&&qa(a[e],this.b)?delete a[e][this.b]:!1};
return b});
ka("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return pa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&qa(a.f,c))for(var e=0;e<d.length;e++){var h=d[e];if(b!==b&&h.key!==h.key||b===h.key)return{id:c,list:d,index:e,o:h}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=sa(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(sa([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(G){return!1}}())return a;
la();na();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ka("Set",function(a){function b(a){this.b=new Map;if(a){a=sa(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(sa([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
la();na();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ka("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
ka("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function ta(a){return"boolean"==typeof a}
function ua(a){return"number"==typeof a}
function u(a,b,c){a=a.split(".");c=c||p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var va=/^[\w+/_-]+[=]{0,2}$/,wa=null;function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){a.ga=void 0;a.getInstance=function(){return a.ga?a.ga:a.ga=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==za(a)}
function Aa(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ba(a){return"function"==za(a)}
function Ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Da="closure_uid_"+(1E9*Math.random()>>>0),Ea=0;function Fa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=Fa:x=Ga;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function Ha(a,b){u(a,b,void 0)}
function A(a,b){function c(){}
c.prototype=b.prototype;a.w=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Ia=document,B=window;function C(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(C,Error);C.prototype.name="CustomError";var Ka=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},La=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Na=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Oa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Pa(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Qa(a,b){var c=Ka(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Aa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ta=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ua(a){if(!Va.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Wa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Xa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ya,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Za,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace($a,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ab,"&#0;"));return a}
var Wa=/&/g,Xa=/</g,Ya=/>/g,Za=/"/g,$a=/'/g,ab=/\x00/g,Va=/[\x00&<>"']/;function bb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var cb;a:{var db=p.navigator;if(db){var fb=db.userAgent;if(fb){cb=fb;break a}}cb=""}function E(a){return-1!=cb.indexOf(a)}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a,b){var c=Aa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function ib(a){var b=jb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function kb(a){for(var b in a)return!1;return!0}
function lb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function nb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function qb(a){qb[" "](a);return a}
qb[" "]=xa;var rb=E("Opera"),sb=E("Trident")||E("MSIE"),tb=E("Edge"),ub=E("Gecko")&&!(-1!=cb.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),vb=-1!=cb.toLowerCase().indexOf("webkit")&&!E("Edge");function wb(){var a=p.document;return a?a.documentMode:void 0}
var xb;a:{var yb="",zb=function(){var a=cb;if(ub)return/rv:([^\);]+)(\)|;)/.exec(a);if(tb)return/Edge\/([\d\.]+)/.exec(a);if(sb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(vb)return/WebKit\/(\S+)/.exec(a);if(rb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
zb&&(yb=zb?zb[1]:"");if(sb){var Ab=wb();if(null!=Ab&&Ab>parseFloat(yb)){xb=String(Ab);break a}}xb=yb}var Bb=xb,Cb;var Db=p.document;Cb=Db&&sb?wb()||("CSS1Compat"==Db.compatMode?parseInt(Bb,10):5):void 0;var Eb=null,Fb=null;function Gb(a){this.b=a||{cookie:""}}
k=Gb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ta(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ta(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Hb=new Gb("undefined"==typeof document?null:document);Hb.f=3950;function Ib(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Jb=!sb||9<=Number(Cb);function Kb(){this.b="";this.f=Lb}
Kb.prototype.J=!0;Kb.prototype.I=function(){return this.b};
Kb.prototype.fa=!0;Kb.prototype.ba=function(){return 1};
function Mb(a){return a instanceof Kb&&a.constructor===Kb&&a.f===Lb?a.b:"type_error:TrustedResourceUrl"}
var Lb={};function F(){this.b="";this.f=Nb}
F.prototype.J=!0;F.prototype.I=function(){return this.b};
F.prototype.fa=!0;F.prototype.ba=function(){return 1};
function Ob(a){return a instanceof F&&a.constructor===F&&a.f===Nb?a.b:"type_error:SafeUrl"}
var Pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Qb(a){if(a instanceof F)return a;a=a.J?a.I():String(a);Pb.test(a)||(a="about:invalid#zClosurez");return Rb(a)}
var Nb={};function Rb(a){var b=new F;b.b=a;return b}
Rb("about:blank");function Sb(){this.b="";this.g=Tb;this.f=null}
Sb.prototype.fa=!0;Sb.prototype.ba=function(){return this.f};
Sb.prototype.J=!0;Sb.prototype.I=function(){return this.b};
var Tb={};function Ub(a,b){var c=new Sb;c.b=a;c.f=b;return c}
Ub("<!DOCTYPE html>",0);Ub("",0);Ub("<br>",0);function Vb(a,b){var c=b instanceof F?b:Qb(b);a.href=Ob(c)}
function Wb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?Mb(b):b instanceof Kb?Mb(b):b instanceof F?Ob(b):Qb(b).I()}
function Xb(a,b){a.src=Mb(b);if(null===wa){a:{var c=p.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&va.test(c))break a;c=null}wa=c||""}(c=wa)&&a.setAttribute("nonce",c)}
;function Yb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
k=Yb.prototype;k.clone=function(){return new Yb(this.x,this.y)};
k.equals=function(a){return a instanceof Yb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Zb(a,b){this.width=a;this.height=b}
k=Zb.prototype;k.clone=function(){return new Zb(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function $b(a){var b=document;return r(a)?b.getElementById(a):a}
function ac(a,b){gb(b,function(b,d){b&&b.J&&(b=b.I());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:bc.hasOwnProperty(d)?a.setAttribute(bc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var bc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function cc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Jb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ua(g.name),'"');if(g.type){f.push(' type="',Ua(g.type),'"');var h={};pb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):ac(f,g));2<d.length&&dc(e,f,d);return f}
function dc(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Aa(f)||Ca(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ca(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(Ba(f)){g="function"==typeof f.item;break a}}g=!1}D(g?Ra(f):f,d)}}}
function ec(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function fc(a){gc();var b=new Kb;b.b=a;return b}
var gc=xa;var hc=/^[\w+/_-]+[=]{0,2}$/;function ic(){var a=p.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&hc.test(a))return a}
;function jc(){var a=kc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{qb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function lc(a){var b=mc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function nc(){var a=[];lc(function(b){a.push(b)});
return a}
var mc={eb:"allow-forms",fb:"allow-modals",gb:"allow-orientation-lock",hb:"allow-pointer-lock",ib:"allow-popups",jb:"allow-popups-to-escape-sandbox",kb:"allow-presentation",lb:"allow-same-origin",mb:"allow-scripts",nb:"allow-top-navigation",ob:"allow-top-navigation-by-user-activation"},oc=Ib(function(){return nc()});
function pc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};D(oc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function qc(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)}
function rc(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)}
;function sc(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;p.google_image_requests||(p.google_image_requests=[]);var d=p.document.createElement("img");if(b){var e=function(){b&&Qa(p.google_image_requests,d);rc(d,"load",e);rc(d,"error",e)};
qc(d,"load",e);qc(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=a;p.google_image_requests.push(d)}
;function tc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var uc=!!window.google_async_iframe_id,kc=uc&&window.parent||window;var vc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function H(a){return a.match(vc)}
function wc(a){return a?decodeURI(a):a}
function xc(a,b,c){if(w(b))for(var d=0;d<b.length;d++)xc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function yc(a){var b=[],c;for(c in a)xc(c,a[c],b);return b.join("&")}
function zc(a,b){var c=yc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var Ac=null;function Bc(){var a=p.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):z()}
function Cc(){var a=void 0===a?p:a;return(a=a.performance)&&a.now?a.now():null}
;function Dc(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var I=p.performance,Ec=!!(I&&I.mark&&I.measure&&I.clearMarks),Fc=Ib(function(){var a;if(a=Ec){var b;if(null===Ac){Ac="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(Ac=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Ac;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function Gc(){var a=Hc;this.events=[];this.f=a||p;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=Fc()||(null!=b?b:1>Math.random())}
Gc.prototype.disable=function(){this.b=!1;this.events!=this.f.google_js_reporting_queue&&(Fc()&&D(this.events,Ic),this.events.length=0)};
function Ic(a){a&&I&&Fc()&&(I.clearMarks("goog_"+a.uniqueId+"_start"),I.clearMarks("goog_"+a.uniqueId+"_end"))}
Gc.prototype.start=function(a,b){if(!this.b)return null;var c=Cc()||Bc();c=new Dc(a,b,c);var d="goog_"+c.uniqueId+"_start";I&&Fc()&&I.mark(d);return c};
Gc.prototype.end=function(a){if(this.b&&ua(a.value)){var b=Cc()||Bc();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";I&&Fc()&&I.mark(b);this.b&&this.events.push(a)}};if(uc&&!jc()){var Jc="."+Ia.domain;try{for(;2<Jc.split(".").length&&!jc();)Ia.domain=Jc=Jc.substr(Jc.indexOf(".")+1),kc=window.parent}catch(a){}jc()||(kc=window)}var Hc=kc,Kc=new Gc;"complete"==Hc.document.readyState?Hc.google_measure_js_timing||Kc.disable():Kc.b&&qc(Hc,"load",function(){Hc.google_measure_js_timing||Kc.disable()});var Lc=(new Date).getTime();function Mc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Nc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;t=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var t=1518500249}else m=d^f^h,t=1859775393;else 60>c?(m=d&f|h&(d|f),t=2400959708):(m=d^f^h,t=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+t+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,t+=64;for(;d<c;)if(f[m++]=a[d++],t++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,t+=64}
function d(){var a=[],d=8*t;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,t;a();return{reset:a,update:c,digest:d,ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Oc(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],D(d,function(a){e.push(a)}),Pc(e.join(" "));
var f=[],g=[];D(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(a){e.push(a)});
a=Pc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Pc(a){var b=Nc();b.update(a);return b.ya().toLowerCase()}
;function Qc(a){var b=Mc(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Gb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Gb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Oc(Mc(d),b,a||null)].join(" "):null}return null}
;function Rc(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
Rc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Sc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Tc(a){p.setTimeout(function(){throw a;},0)}
var Uc;
function Vc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ma;c.ma=null;a()}};
return function(a){d.next={ma:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function Wc(){this.f=this.b=null}
var Yc=new Rc(function(){return new Xc},function(a){a.reset()});
Wc.prototype.add=function(a,b){var c=Yc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Wc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Xc(){this.next=this.scope=this.b=null}
Xc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Xc.prototype.reset=function(){this.next=this.scope=this.b=null};function Zc(a,b){$c||ad();bd||($c(),bd=!0);cd.add(a,b)}
var $c;function ad(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);$c=function(){a.then(dd)}}else $c=function(){var a=dd;
!Ba(p.setImmediate)||p.Window&&p.Window.prototype&&!E("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Uc||(Uc=Vc()),Uc(a)):p.setImmediate(a)}}
var bd=!1,cd=new Wc;function dd(){for(var a;a=cd.remove();){try{a.b.call(a.scope)}catch(b){Tc(b)}Sc(Yc,a)}bd=!1}
;function ed(){this.f=-1}
;function fd(){this.f=64;this.b=[];this.j=[];this.l=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
A(fd,ed);fd.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function gd(a,b,c){c||(c=0);var d=a.l;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
fd.prototype.update=function(a,b){if(null!=a){q(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)gd(this,a,d),d+=this.f;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){gd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){gd(this,e);f=0;break}}this.g=f;this.i+=b}};
fd.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;gd(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function J(){this.g=this.g;this.C=this.C}
J.prototype.g=!1;J.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function hd(a,b){a.g?q(void 0)?b.call(void 0):b():(a.C||(a.C=[]),a.C.push(q(void 0)?x(b,void 0):b))}
J.prototype.m=function(){if(this.C)for(;this.C.length;)this.C.shift()()};
function id(a){a&&"function"==typeof a.dispose&&a.dispose()}
function jd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Aa(d)?jd.apply(null,d):id(d)}}
;function kd(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function ld(a,b){if(a.classList)var c=a.classList.contains(b);else c=kd(a),c=0<=Ka(c,b);return c}
function md(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ld(a,"inverted-hdpi")&&(a.className=La(kd(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var nd="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function od(){}
od.prototype.next=function(){throw nd;};
od.prototype.F=function(){return this};
function pd(a){if(a instanceof od)return a;if("function"==typeof a.F)return a.F(!1);if(Aa(a)){var b=0,c=new od;c.next=function(){for(;;){if(b>=a.length)throw nd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function qd(a,b){if(Aa(a))try{D(a,b,void 0)}catch(c){if(c!==nd)throw c;}else{a=pd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==nd)throw c;}}}
function rd(a){if(Aa(a))return Ra(a);a=pd(a);var b=[];qd(a,function(a){b.push(a)});
return b}
;function sd(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof sd)for(c=td(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function td(a){ud(a);return a.b.concat()}
k=sd.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||vd;ud(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function vd(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.h=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&ud(this),!0):!1};
function ud(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
k.forEach=function(a,b){for(var c=td(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new sd(this)};
k.F=function(a){ud(this);var b=0,c=this.h,d=this,e=new od;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw nd;var e=d.b[b++];return a?e:d.g[e]};
return e};function wd(a){var b=[];xd(new yd,a,b);return b.join("")}
function yd(){}
function xd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),xd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),zd(d,c),c.push(":"),xd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":zd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ad={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Bd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function zd(a,b){b.push('"',a.replace(Bd,function(a){var b=Ad[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ad[a]=b);return b}),'"')}
;function Cd(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Dd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function K(a,b){this.b=0;this.l=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=xa)try{var c=this;a.call(b,function(a){Ed(c,2,a)},function(a){Ed(c,3,a)})}catch(d){Ed(this,3,d)}}
function Fd(){this.next=this.context=this.onRejected=this.g=this.b=null;this.f=!1}
Fd.prototype.reset=function(){this.context=this.onRejected=this.g=this.b=null;this.f=!1};
var Gd=new Rc(function(){return new Fd},function(a){a.reset()});
function Hd(a,b,c){var d=Gd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Id(a){return new K(function(b,c){c(a)})}
function Jd(a,b,c){Kd(a,b,c,null)||Zc(y(b,a))}
function Ld(a){return new K(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Jd(e,b,c)})}
function Md(a){return new K(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{aa:!0,value:f}:{aa:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Jd(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
K.prototype.then=function(a,b,c){return Nd(this,Ba(a)?a:null,Ba(b)?b:null,c)};
Cd(K);function Od(a,b){var c=Hd(b,b,void 0);c.f=!0;Pd(a,c);return a}
function Qd(a,b){return Nd(a,null,b,void 0)}
K.prototype.cancel=function(a){0==this.b&&Zc(function(){var b=new Rd(a);Sd(this,b)},this)};
function Sd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Sd(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Td(c),Ud(c,e,3,b)))}a.g=null}else Ed(a,3,b)}
function Pd(a,b){a.f||2!=a.b&&3!=a.b||Vd(a);a.h?a.h.next=b:a.f=b;a.h=b}
function Nd(a,b,c,d){var e=Hd(null,null,null);e.b=new K(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Rd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Pd(a,e);return e.b}
K.prototype.u=function(a){this.b=0;Ed(this,2,a)};
K.prototype.A=function(a){this.b=0;Ed(this,3,a)};
function Ed(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Kd(c,a.u,a.A,a)||(a.l=c,a.b=b,a.g=null,Vd(a),3!=b||c instanceof Rd||Wd(a,c)))}
function Kd(a,b,c,d){if(a instanceof K)return Pd(a,Hd(b||xa,c||null,d)),!0;if(Dd(a))return a.then(b,c,d),!0;if(Ca(a))try{var e=a.then;if(Ba(e))return Xd(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Xd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Vd(a){a.j||(a.j=!0,Zc(a.C,a))}
function Td(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
K.prototype.C=function(){for(var a;a=Td(this);)Ud(this,a,this.b,this.l);this.j=!1};
function Ud(a,b,c,d){if(3==c&&b.onRejected&&!b.f)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Yd(b,c,d);else try{b.f?b.g.call(b.context):Yd(b,c,d)}catch(e){Zd.call(null,e)}Sc(Gd,b)}
function Yd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Wd(a,b){a.i=!0;Zc(function(){a.i&&Zd.call(null,b)})}
var Zd=Tc;function Rd(a){C.call(this,a)}
A(Rd,C);Rd.prototype.name="cancel";function L(a){J.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.l=!!a}
A(L,J);k=L.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function $d(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Pa(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=xa):(c&&Qa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.K=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];ae(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.L(c)}}return 0!=e}return!1};
function ae(a,b,c){Zc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(D(b,this.L,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.m=function(){L.w.m.call(this);this.clear();this.h.length=0};function be(a){this.b=a}
be.prototype.set=function(a,b){q(b)?this.b.set(a,wd(b)):this.b.remove(a)};
be.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
be.prototype.remove=function(a){this.b.remove(a)};function ce(a){this.b=a}
A(ce,be);function de(a){this.data=a}
function ee(a){return!q(a)||a instanceof de?a:new de(a)}
ce.prototype.set=function(a,b){ce.w.set.call(this,a,ee(b))};
ce.prototype.f=function(a){a=ce.w.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ce.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function fe(a){this.b=a}
A(fe,ce);fe.prototype.set=function(a,b,c){if(b=ee(b)){if(c){if(c<z()){fe.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}fe.w.set.call(this,a,b)};
fe.prototype.f=function(a){var b=fe.w.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())fe.prototype.remove.call(this,a);else return b}};function ge(a){this.b=a}
A(ge,fe);function he(){}
;function ie(){}
A(ie,he);ie.prototype.clear=function(){var a=rd(this.F(!0)),b=this;D(a,function(a){b.remove(a)})};function je(a){this.b=a}
A(je,ie);k=je.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.F=function(a){var b=0,c=this.b,d=new od;d.next=function(){if(b>=c.length)throw nd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function ke(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(ke,je);function le(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(le,je);function me(a,b){this.f=a;this.b=null;if(sb&&!(9<=Number(Cb))){ne||(ne=new sd);this.b=ne.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),ne.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
A(me,ie);var oe={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ne=null;function pe(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return oe[a]})}
k=me.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(pe(a),b);re(this)};
k.get=function(a){a=this.b.getAttribute(pe(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(pe(a));re(this)};
k.F=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new od;d.next=function(){if(b>=c.length)throw nd;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);re(this)};
function re(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function se(a,b){this.f=a;this.b=b+"::"}
A(se,ie);se.prototype.set=function(a,b){this.f.set(this.b+a,b)};
se.prototype.get=function(a){return this.f.get(this.b+a)};
se.prototype.remove=function(a){this.f.remove(this.b+a)};
se.prototype.F=function(a){var b=this.f.F(!0),c=this,d=new od;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function te(a){if(!Ba(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function ue(){var a=null;return Qd(new K(function(b,c){a=te(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;function ve(){this.f=[];this.b=-1}
ve.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
ve.prototype.get=function(a){return!!this.f[a]};
function we(a){-1==a.b&&(a.b=Oa(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;function xe(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");try{Wb(e,b,"preload")}catch(f){return}d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(f){}}
;var ye=/^\.google\.(com?\.)?[a-z]{2,3}$/,ze=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;function Ae(a){return ye.test(a)&&!ze.test(a)}
var Be=p;function Ce(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];M[3]>=z()&&b.push("adsid="+encodeURIComponent(M[1]));return a+"?"+b.join("&")}
var M,N;function De(){Be=p;M=Be.googleToken=Be.googleToken||{};var a=z();M[1]&&M[3]>a&&0<M[2]||(M[1]="",M[2]=-1,M[3]=-1,M[4]="",M[6]="");N=Be.googleIMState=Be.googleIMState||{};Ae(N[1])||(N[1]=".google.com");w(N[5])||(N[5]=[]);ta(N[6])||(N[6]=!1);w(N[7])||(N[7]=[]);ua(N[8])||(N[8]=0)}
function Ee(){De();return M[1]}
var O={ea:function(){return 0<N[8]},
Qa:function(){N[8]++},
Ra:function(){0<N[8]&&N[8]--},
Sa:function(){N[8]=0},
shouldRetry:function(){return!1},
na:function(){return N[5]},
la:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ja:function(){if(!O.ea()){var a=p.document,b=function(b){b=Ce(b);a:{try{var c=ic();break a}catch(h){}c=void 0}var d=c;xe(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return p.processGoogleToken({},2)};
b=fc(b);Xb(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),O.Qa()}catch(h){}},c=N[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function Fe(a){De();var b=Be.googleToken[5]||0;a&&(0!=b||M[3]>=z()?O.la(a):(O.na().push(a),O.ja()));M[3]>=z()&&M[2]>=z()||O.ja()}
function Ge(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g="NT"==f,h=parseInt(b.freshLifetimeSecs||"",10),l=parseInt(b.validLifetimeSecs||"",10),m=b["1p_jar"]||"";b=b.pucrd||"";De();1==e?O.Sa():O.Ra();if(!f&&O.shouldRetry())Ae(".google.com")&&(N[1]=".google.com"),O.ja();else{var t=Be.googleToken=Be.googleToken||{},G=0==e&&f&&r(f)&&!g&&ua(h)&&0<h&&ua(l)&&0<l&&r(m);g=g&&!O.ea()&&(!(M[3]>=z())||"NT"==M[1]);var Ja=!(M[3]>=
z())&&0!=e;if(G||g||Ja)g=z(),h=g+1E3*h,l=g+1E3*l,1E-5>Math.random()&&sc("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e),t[5]=e,t[1]=f,t[2]=h,t[3]=l,t[4]=m,t[6]=b,De();if(G||!O.ea()){e=O.na();for(f=0;f<e.length;f++)O.la(e[f]);e.length=0}}};
Fe(a)}
;function He(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var P=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Ie=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Ie,void 0);function Q(a){He(Ie,arguments)}
function R(a,b){return a in Ie?Ie[a]:b}
function Je(a){return R(a,void 0)}
function Ke(){return R("PLAYER_CONFIG",{})}
;z();function Le(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b)}}:a}
function S(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=R("ERRORS",[]),f.push([a,b,c,d,e]),Q("ERRORS",f))}
function Me(a){S(a,"WARNING",void 0,void 0,void 0)}
;var Ne=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Oe(){if(!Ne)return null;var a=Ne();return"open"in a?a:null}
function Pe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){Ba(a)&&(a=Le(a));return window.setTimeout(a,b)}
function Qe(a){window.clearTimeout(a)}
;function Re(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Sa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var Se={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Te=!1;
function Ue(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=H(a)[1]||null,e=wc(H(a)[3]||null);d&&e?(d=c,c=H(a),d=H(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?wc(H(c)[3]||null)==e&&(Number(H(c)[4]||null)||null)==(Number(H(a)[4]||null)||null):!0;for(var f in Se)(d=R(Se[f]))&&(c||Ve(a,f))&&(b[f]=d);if(c||Ve(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b}
function Ve(a,b){var c=R("CORS_HEADER_WHITELIST")||{},d=wc(H(a)[3]||null);return d?(c=c[d])?0<=Ka(c,b):!1:!0}
function We(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Xe(a,b);var d=Ye(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&Qe(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ia&&b.ia.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.pa&&0<b.timeout&&(f=T(function(){e||(e=!0,Qe(f),b.pa.call(b.context||p))},b.timeout))}else Ze(a,b)}
function Ze(a,b){var c=b.format||"JSON";a=Xe(a,b);var d=Ye(a,b),e=!1,f,g=$e(a,function(a){if(!e){e=!0;f&&Qe(f);var d=Pe(a),g=null;if(d||400<=a.status&&500>a.status)g=af(c,a,b.sb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ia&&b.ia.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.M&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),Qe(f),b.M.call(b.context||p,g))},b.timeout));
return g}
function Xe(a,b){b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.cb;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=Re(f[1]||"");for(var g in d)f[g]=d[g];a=zc(c,f)+e}return a}
function Ye(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.B,g=Je("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.tb||wc(H(a)[3]||null)&&!b.withCredentials&&wc(H(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.B&&b.B[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=Re(e),pb(e,f),e=b.qa&&"JSON"==b.qa?JSON.stringify(e):yc(e));f=e||f&&!kb(f);!Te&&f&&"POST"!=b.method&&(Te=!0,S(Error("AJAX request with postData should use POST")));
return e}
function af(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?bf(b):null)d={},D(b.getElementsByTagName("*"),function(a){d[a.tagName]=cf(a)})}c&&df(d);
return d}
function df(a){if(Ca(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ub(a[b],null);a[c]=d}else df(a[b])}}
function bf(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function cf(a){var b="";D(a.childNodes,function(a){b+=a.nodeValue});
return b}
function ef(a,b){b.method="POST";b.B||(b.B={});Ze(a,b)}
function $e(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Le(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Oe();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ue(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var ff={},gf=0;
function hf(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=cb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof F||(a=a.J?a.I():String(a),Pb.test(a)||(a="about:invalid#zClosurez"),a=Rb(a)),b=Ob(a),"about:invalid#zClosurez"===b?a="":(b instanceof Sb?a=b:(a=null,b.fa&&(a=b.ba()),b=Ua(b.J?b.I():String(b)),a=Ub(b,a)),a=encodeURIComponent(String(wd(a instanceof Sb&&a.constructor===Sb&&a.g===Tb?a.b:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=cc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?$e(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?$e(a,b,"GET","",d):jf(a,b))}
function jf(a,b){var c=new Image,d=""+gf++;ff[d]=c;c.onload=c.onerror=function(){b&&ff[d]&&b();delete ff[d]};
c.src=a}
;var kf={},lf=0;
function mf(a,b,c,d,e,f){f=f||{};f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=lf)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params));d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var h=a.lineNumber||a.line||"Not available"}catch(G){h="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(G){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(kf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=
e;h={cb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":f.name},B:{url:R("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.B.stack=l);for(var m in f)h.B["client."+m]=f[m];if(m=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var t in m)h.B[t]=m[t];Ze(R("ECATCHER_REPORT_HOST","")+"/error_204",h);kf[a.message]=!0;lf++}}}
;var nf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};u("yt.msgs_",nf,void 0);function of(a){He(nf,arguments)}
;function pf(a){a&&(a.dataset?a.dataset[qf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function rf(a,b){return a?a.dataset?a.dataset[qf(b)]:a.getAttribute("data-"+b):null}
var sf={};function qf(a){return sf[a]||(sf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var tf=v("ytPubsubPubsubInstance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.L;L.prototype.publish=L.prototype.K;L.prototype.clear=L.prototype.clear;u("ytPubsubPubsubInstance",tf,void 0);var uf=v("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",uf,void 0);var vf=v("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",vf,void 0);var wf=v("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",wf,void 0);
function xf(a,b){var c=yf();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){uf[d]&&b.apply(window,c)};
try{wf[a]?f():T(f,0)}catch(g){S(g)}},void 0);
uf[d]=!0;vf[a]||(vf[a]=[]);vf[a].push(d);return d}return 0}
function zf(a){var b=yf();b&&(ua(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),D(a,function(a){b.unsubscribeByKey(a);delete uf[a]}))}
function Af(a,b){var c=yf();c&&c.publish.apply(c,arguments)}
function Bf(a){var b=yf();if(b)if(b.clear(a),a)Cf(a);else for(var c in vf)Cf(c)}
function yf(){return v("ytPubsubPubsubInstance")}
function Cf(a){vf[a]&&(a=vf[a],D(a,function(a){uf[a]&&delete uf[a]}),a.length=0)}
;var Df=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ef=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ff(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Df,""),c=c.replace(Ef,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Gf(a,b)}
function Gf(a,b){var c=Hf(a),d=document.getElementById(c),e=d&&rf(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=xf(c,b);var g=""+(b[Da]||(b[Da]=++Ea));If[g]=e}f||(d=Jf(a,c,function(){rf(d,"loaded")||(pf(d),Af(c),T(y(Bf,c),0))}))}}
function Jf(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Xb(d,fc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Kf(a){a=Hf(a);var b=document.getElementById(a);b&&(Bf(a),b.parentNode.removeChild(b))}
function Lf(a,b){if(a&&b){var c=""+(b[Da]||(b[Da]=++Ea));(c=If[c])&&zf(c)}}
function Hf(a){var b=document.createElement("a");Vb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+bb(a)}
var If={};function Mf(){}
function Nf(a,b){return Of(a,1,b)}
;function Pf(){}
n(Pf,Mf);function Of(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function Qf(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):Qe(a)}}
Pf.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Pf.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
ya(Pf);Pf.getInstance();var Rf=[],Sf=!1;function Tf(){if("1"!=hb(Ke(),"args","privembed")){var a=function(){Sf=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)};
Ff("//static.doubleclick.net/instream/ad_status.js",a);Rf.push(Nf(function(){Sf||"google_ad_status"in window||(Lf("//static.doubleclick.net/instream/ad_status.js",a),Q("DCLKSTAT",3))},5E3))}}
function Uf(){return parseInt(R("DCLKSTAT",0),10)}
;function Vf(){this.f=!1;this.b=null}
Vf.prototype.initialize=function(a,b,c,d){b?(this.f=!0,Ff(b,function(){this.f=!1;window.botguard?Wf(this,c,d):(Kf(b),S(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this))):a&&(eval(a),window.botguard?Wf(this,c,d):S(Error("Unable to load Botguard from JS"),"WARNING"))};
function Wf(a,b,c){try{a.b=new window.botguard.bg(b)}catch(d){Me(d)}c&&c(b)}
Vf.prototype.invoke=function(){return this.b?this.b.invoke():null};
Vf.prototype.dispose=function(){this.b=null};function U(a){return R("EXPERIMENT_FLAGS",{})[a]}
;var Xf=new Vf,Yf=!1,Zf=0,$f="";function ag(a){U("botguard_periodic_refresh")?Zf=P():U("botguard_always_refresh")&&($f=a)}
function bg(a){if(a){if(Xf.f)return!1;if(U("botguard_periodic_refresh"))return 72E5<P()-Zf;if(U("botguard_always_refresh"))return $f!=a}else return!1;return!Yf}
function cg(){return null!==Xf.b}
function dg(){return Xf.invoke()}
;var eg=0;u("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++eg},void 0);var fg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function gg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in fg||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function hg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
gg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
gg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
gg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var jb=v("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",jb,void 0);var ig=v("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",ig,void 0);
function jg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ib(function(e){var f=ta(e[4])&&e[4]==!!d,g=Ca(e[4])&&Ca(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var kg=Ib(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=jg(a,b,c,d);if(e)return e;e=++ig.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new gg(d);if(!ec(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new gg(b);
b.currentTarget=a;return c.call(a,b)};
g=Le(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),kg()||ta(d)?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);jb[e]=[a,b,c,g,d];return e}
function lg(a){a&&("string"==typeof a&&(a=[a]),D(a,function(a){if(a in jb){var b=jb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?kg()||ta(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete jb[a]}}))}
;function mg(a){this.u=a;this.b=null;this.i=0;this.l=null;this.j=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.h=0;this.D=W(window,"mousemove",x(this.G,this));a=x(this.A,this);Ba(a)&&(a=Le(a));this.H=window.setInterval(a,25)}
A(mg,J);mg.prototype.G=function(a){q(a.b)||hg(a);var b=a.b;q(a.f)||hg(a);this.b=new Yb(b,a.f)};
mg.prototype.A=function(){if(this.b){var a=P();if(0!=this.i){var b=this.l,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.f[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.u();this.j=d}this.i=a;this.l=this.b;this.h=(this.h+1)%4}};
mg.prototype.m=function(){window.clearInterval(this.H);lg(this.D)};var ng={};
function og(a){var b=void 0===a?{}:a;a=void 0===b.Ea?!0:b.Ea;b=void 0===b.Oa?!1:b.Oa;if(null==v("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;u("_lact",c,window);u("_fact",c,window);-1==c&&pg();W(document,"keydown",pg);W(document,"keyup",pg);W(document,"mousedown",pg);W(document,"mouseup",pg);a&&(b?W(window,"touchmove",function(){qg("touchmove",200)},{passive:!0}):(W(window,"resize",function(){qg("resize",200)}),W(window,"scroll",function(){qg("scroll",200)})));
new mg(function(){qg("mouse",100)});
W(document,"touchstart",pg,{passive:!0});W(document,"touchend",pg,{passive:!0})}}
function qg(a,b){ng[a]||(ng[a]=!0,Nf(function(){pg();ng[a]=!1},b))}
function pg(){null==v("_lact",window)&&og();var a=z();u("_lact",a,window);-1==v("_fact",window)&&u("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function rg(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var sg=Math.pow(2,16)-1,tg={log_event:"events",log_interaction:"interactions"},ug=Object.create(null);ug.log_event="GENERIC_EVENT_LOGGING";ug.log_interaction="INTERACTION_LOGGING";var vg=new Set(["log_event"]),wg={},xg=0,X=v("ytLoggingTransportLogPayloadsQueue_")||{};u("ytLoggingTransportLogPayloadsQueue_",X,void 0);var yg=v("ytLoggingTransportTokensToCttTargetIds_")||{};u("ytLoggingTransportTokensToCttTargetIds_",yg,void 0);var zg=v("ytLoggingTransportDispatchedStats_")||{};
u("ytLoggingTransportDispatchedStats_",zg,void 0);u("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function Ag(a,b){if(a.X){var c=a.X;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);yg[a.X.token]=d;c=Bg(a.endpoint,a.X.token)}else c=Bg(a.endpoint);c.push(a.payload);wg[a.endpoint]=new b;c.length>=(Number(U("web_logging_max_batch")||0)||20)?Cg():Dg()}
function Cg(){Qe(xg);if(!kb(X)){for(var a in X){var b=wg[a];if(b){var c=void 0,d=a,e=b,f=tg[d],g=zg[d]||{};zg[d]=g;b=Math.round(P());for(c in X[d]){var h=e.b;h={client:{hl:h.Ha,gl:h.Ga,clientName:h.Fa,clientVersion:h.innertubeContextClientVersion}};var l=window.devicePixelRatio;l&&1!=l&&(h.client.screenDensityFloat=String(l));R("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});h={context:h};h[f]=Bg(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=
h[f].length;if(l=yg[c])a:{var m=h,t=c;if(l.videoId)var G="VIDEO";else if(l.playlistId)G="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:t,scope:G}]}delete yg[c];l=h;l.requestTimeMs=b;(G=R("EVENT_ID",void 0))&&U("enable_gel_web_client_event_id")&&(m=(R("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>sg&&(m=1),Q("BATCH_CLIENT_COUNTER",m),l.serializedClientEventId={serializedEventId:G,clientCounter:m});
Eg(e,d,h,{retry:vg.has(d)})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete X[a]}}kb(X)||Dg()}}
function Dg(){Qe(xg);xg=T(Cg,R("LOGGING_BATCH_TIMEOUT",1E4))}
function Bg(a,b){b=void 0===b?"":b;X[a]=X[a]||{};X[a][b]=X[a][b]||[];return X[a][b]}
;function Fg(a,b,c,d){var e=Gg,f={};f.eventTimeMs=Math.round(c||P());f[a]=b;f.context={lastActivityMs:String(c?-1:rg())};Ag({endpoint:"log_event",payload:f,X:d},e)}
;function Hg(a,b){var c={"X-Goog-Visitor-Id":R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return c;var d;a?d="Bearer "+v("gapi.auth.getToken")().pb:d=Qc([]);d&&(c.Authorization=d,c["X-Goog-AuthUser"]=R("SESSION_INDEX",0));return c}
function Ig(a){a=Object.assign({},a);delete a.Authorization;var b=Qc();if(b){var c=new fd;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!Eb)for(Eb={},Fb={},c=0;65>c;c++)Eb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Fb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Fb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,t=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[t],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Jg(a,b,c,d){Hb.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function Kg(){var a=new ke;(a=a.isAvailable()?new se(a,"yt.innertube"):null)||(a=new me("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new fe(a):null;this.f=document.domain||window.location.hostname}
Kg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(wd(b))}catch(f){return}else e=escape(b);Jg(a,e,c,this.f)};
Kg.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Hb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Kg.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Hb.remove(""+a,"/",void 0===b?"youtube.com":b)};var Lg=new Kg;function Mg(a,b,c,d){if(d)return null;d=Lg.get("nextId",!0)||1;var e=Lg.get("requests",!0)||{};e[d]={method:a,request:b,authState:Ig(c),requestTime:Math.round(P())};Lg.set("nextId",d+1,86400,!0);Lg.set("requests",e,86400,!0);return d}
function Ng(a){var b=Lg.get("requests",!0)||{};delete b[a];Lg.set("requests",b,86400,!0)}
function Og(a){var b=Lg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Ig(Hg(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Eg(a,d.method,e,{}));delete b[c]}}Lg.set("requests",b,86400,!0)}}
;function Gg(a){var b=this;this.b=a||{innertubeApiKey:Je("INNERTUBE_API_KEY"),innertubeApiVersion:Je("INNERTUBE_API_VERSION"),Fa:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Je("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ha:Je("INNERTUBE_CONTEXT_HL"),Ga:Je("INNERTUBE_CONTEXT_GL"),Ia:Je("INNERTUBE_HOST_OVERRIDE")||"",Ja:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Of(function(){Og(b)},0,5E3)}
function Eg(a,b,c,d){!R("VISITOR_DATA")&&.01>Math.random()&&S(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",B:c,qa:"JSON",M:function(){d.M()},
pa:d.M,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
oa:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
ub:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Ia;g&&(f=g);g=a.b.Ja||!1;var h=Hg(g,f);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,m;if(d.retry&&U("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=Mg(b,c,h,g))){var t=e.onSuccess,G=e.oa;e.onSuccess=function(a,b){Ng(m);t(a,b)};
c.oa=function(a,b){Ng(m);G(a,b)}}try{U("use_fetch_for_op_xhr")?We(l,e):ef(l,e)}catch(Ja){if("InvalidAccessError"==Ja)m&&(Ng(m),m=0),S(Error("An extension is blocking network request."),"WARNING");
else throw Ja;}m&&Of(function(){Og(a)},0,5E3)}
;var Pg=z().toString();
function Qg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Pg)for(a=1,b=0;b<Pg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Pg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Rg=Qg();function Sg(a){this.b=a}
function Tg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Tg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var Ug=1;function Vg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Wg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Xg(a){return R(Wg(void 0===a?0:a),void 0)}
u("yt.logging.screen.getRootVeType",Xg,void 0);function Yg(){var a=Xg(0),b;a?b=new Sg({veType:a,youtubeData:void 0}):b=null;return b}
function Zg(a){a=void 0===a?0:a;var b=R(Vg(a));b||0!=a||(b=R("EVENT_ID"));return b?b:null}
u("yt.logging.screen.getCurrentCsn",Zg,void 0);function $g(a,b){var c=void 0===c?0:c;Q(Vg(c),a);Q(Wg(c),b);0==c&&(c=function(){setTimeout(function(){a&&Fg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Rg,clientScreenNonce:a})},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(c):c())}
;function ah(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=wc(H(window.location.href)[3]||null);f&&e.push(f);f=wc(H(d)[3]||null);if(0<=Ka(e,f)||!f&&0==d.lastIndexOf("/",0))if(U("autoescape_tempdata_url")&&(e=document.createElement("a"),Vb(e,d),d=e.href),d){f=H(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Zg();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+bb(d).toString(36),b=b?yc(b):"",Jg(d,b,h||5))}else h="ST-"+bb(d).toString(36),b=b?yc(b):"",Jg(h,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var t=void 0===t?window:t;c=t.location;a=zc(a,l)+m;a=a instanceof F?a:Qb(a);c.href=Ob(a)}return!0}
;function bh(a,b,c){a={attachChild:{csn:a,parentVisualElement:Tg(b),visualElements:[Tg(c)]}};a.eventTimeMs=Math.round(P());a.lactMs=rg();Ag({endpoint:"log_interaction",payload:a},Gg)}
;function ch(a){a=a||{};this.url=a.url||"";this.args=a.args||nb(dh);this.assets=a.assets||{};this.attrs=a.attrs||nb(eh);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var dh={enablejsapi:1},eh={};ch.prototype.clone=function(){var a=new ch,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==za(c)?nb(c):c}return a};function fh(){J.call(this);this.b=[]}
n(fh,J);fh.prototype.m=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.rb)}J.prototype.m.call(this)};var gh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function hh(a){a=a||"";if(window.spf){var b=a.match(gh);spf.style.load(a,b?b[1]:"",void 0)}else ih(a)}
function ih(a){var b=jh(a),c=document.getElementById(b),d=c&&rf(c,"loaded");d||c&&!d||(c=kh(a,b,function(){rf(c,"loaded")||(pf(c),Af(b),T(y(Bf,b),0))}))}
function kh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=fc(a);Wb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function jh(a){var b=document.createElement("A");a=Rb(a);Vb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+bb(b)}
;var lh=v("ytLoggingLatencyUsageStats_")||{};u("ytLoggingLatencyUsageStats_",lh,void 0);var mh=0;function nh(a){lh[a]=lh[a]||{count:0};var b=lh[a];b.count++;b.time=P();mh||(mh=Of(oh,0,5E3));return 10<b.count?(11==b.count&&mf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function oh(){var a=P(),b;for(b in lh)6E4<a-lh[b].time&&delete lh[b];mh=0}
;function ph(a,b){this.version=a;this.args=b}
;function qh(a){this.topic=a}
qh.prototype.toString=function(){return this.topic};var rh=v("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.L;L.prototype.publish=L.prototype.K;L.prototype.clear=L.prototype.clear;u("ytPubsub2Pubsub2Instance",rh,void 0);u("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);u("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);u("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
u("ytPubsub2Pubsub2SkipSubKey",null,void 0);function sh(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var th=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function uh(){var a=R("TIMING_TICK_EXPIRATION");a||(a={},Q("TIMING_TICK_EXPIRATION",a));return a}
function vh(){var a=uh(),b;for(b in a)Qf(a[b]);Q("TIMING_TICK_EXPIRATION",{})}
;function wh(a,b){ph.call(this,1,arguments)}
n(wh,ph);function xh(a,b){ph.call(this,1,arguments)}
n(xh,ph);var yh=new qh("aft-recorded"),zh=new qh("timing-sent");var Ah={vc:!0},Y={},Bh=(Y.ad_allowed="adTypesAllowed",Y.ad_at="adType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_nav="isNavigation",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr=
"prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Ch="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Fh="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
Gh=!1;function Hh(){var a=Ih().info.yt_lt="hot_bg";Jh().info_yt_lt=a;if(Kh())if("yt_lt"in Bh){var b=Bh.yt_lt;0<=Ka(Fh,b)&&(a=!!a);var c=a;if(Kh()){a={};b=b.split(".");for(var d=a,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=c;c=Lh();b=Object.keys(a).join("");nh("info_"+b+"_"+c)||(a.clientActionNonce=c,Fg("latencyActionInfo",a,void 0,void 0))}}else 0<=Ka(Ch,"yt_lt")||S(Error("Unknown label yt_lt logged with GEL CSI."))}
function Mh(){var a=Nh();if(a.aft)return a.aft;for(var b=R("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
var Oh=x(th.clearResourceTimings||th.webkitClearResourceTimings||th.mozClearResourceTimings||th.msClearResourceTimings||th.oClearResourceTimings||xa,th);function Lh(){var a=Ih().nonce;a||(a=Qg(),Ih().nonce=a);return a}
function Nh(){return Ih().tick}
function Jh(){var a=Ih();"gel"in a||(a.gel={});return a.gel}
function Ih(){return v("ytcsi.data_")||Ph()}
function Ph(){var a={tick:{},info:{}};u("ytcsi.data_",a,void 0);return a}
function Qh(a,b){u("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Rh(){var a=Nh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Ih().info.yt_pvis}
function Kh(){return!!U("csi_on_gel")||!!Ih().useGel}
function Sh(){vh();if(!Kh()){var a=Nh(),b=Ih().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&w(a[f])){var d=f.slice(1);if(d in Ah){var e=Na(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}var f=!!b.ap;if(d=v("ytglobal.timingReportbuilder_")){if(a=d(a,b,void 0))Th(a,f),Ph(),Oh(),Qh(!1,void 0),R("TIMING_ACTION")&&Q("PREVIOUS_ACTION",R("TIMING_ACTION")),Q("TIMING_ACTION","")}else{var g=R("CSI_SERVICE_NAME","youtube");d={v:2,s:g,action:R("TIMING_ACTION",void 0)};e=Hh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var h=window.location.protocol+v("ytplayer.config.assets.js");(h=th.getEntriesByName?th.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-
h.responseEnd):delete b.h5jse}a.aft=Mh();Rh()&&"youtube"==g&&(Hh(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var l in b)"_"!=l.charAt(0)&&(d[l]=b[l]);a.ps=P();b={};l=[];for(var m in a)"_"!=m.charAt(0)&&(g=Math.round(a[m]-c),b[m]=g,l.push(m+"."+g));d.rt=l.join(",");(a=v("ytdebug.logTiming"))&&a(d,b);Th(d,f,void 0);sh(zh,new xh(b.aft+(e||0),void 0))}}}
function Th(a,b,c){if(U("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],u("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||hf(a,void 0,void 0,void 0,f)}catch(g){hf(a,void 0,void 0,void 0,f)}}else hf(a);Qh(!0,c)}
function Uh(a){if("_"!=a[0]){var b=a;th.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),th.mark(b))}b=Nh();var c=P();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=uh();if(c=b[a])Qf(c),b[a]=0;Jh()["tick_"+a]=void 0;P();Kh()?(b=Lh(),"_start"==a?nh("baseline_"+b)||Fg("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):nh("tick_"+a+"_"+b)||Fg("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=Je("TIMING_ACTION"),
a=Nh(),v("ytglobal.timingready_")&&b&&a._start&&(b=Mh()))){Gh||(sh(yh,new wh(Math.round(b-a._start),void 0)),Gh=!0);b=!0;c=R("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Sh()}}
;function Vh(a,b){J.call(this);this.l=this.U=a;this.G=b;this.u=!1;this.f={};this.R=this.D=null;this.H=new L;hd(this,y(id,this.H));this.i={};this.O=this.T=this.h=this.Z=this.b=null;this.N=!1;this.j=this.A=null;this.V={};this.ua=["onReady"];this.Y=null;this.ka=NaN;this.P={};Wh(this);this.W("WATCH_LATER_VIDEO_ADDED",this.La.bind(this));this.W("WATCH_LATER_VIDEO_REMOVED",this.Ma.bind(this));this.W("onAdAnnounce",this.xa.bind(this));this.va=new fh(this);hd(this,y(id,this.va))}
n(Vh,J);k=Vh.prototype;
k.ha=function(a){if(!this.g){a instanceof ch||(a=new ch(a));this.Z=a;this.b=a.clone();this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.G,this.b.attrs.id=this.G);this.l.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.G;this.T||(this.T=Xh(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.l.style.width=tc(Number(a)||a);if(a=this.b.attrs.height)this.l.style.height=tc(Number(a)||
a);Yh(this);this.u&&Zh(this)}};
k.Aa=function(){return this.Z};
function Zh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function $h(a){var b=!0,c=ai(a);c&&a.b&&(a=a.b,b=rf(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function Yh(a){if(!a.g&&!a.N){var b=$h(a);if(b&&"html5"==(ai(a)?"html5":null))a.O="html5",a.u||bi(a);else if(ci(a),a.O="html5",b&&a.j)a.U.appendChild(a.j),bi(a);else{a.b.loaded=!0;var c=!1;a.A=function(){c=!0;var b=a.b.clone();v("yt.player.Application.create")(a.U,b);bi(a)};
a.N=!0;b?a.A():(Ff(a.b.assets.js,a.A),hh(a.b.assets.css),di(a)&&!c&&u("yt.player.Application.create",null,void 0))}}}
function ai(a){var b=$b(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function bi(a){if(!a.g){var b=ai(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.N=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||ei(a)):a.ka=T(function(){bi(a)},50)}}
function ei(a){Wh(a);a.u=!0;var b=ai(a);b.addEventListener&&(a.D=fi(a,b,"addEventListener"));b.removeEventListener&&(a.R=fi(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=fi(a,b,e))}for(var f in a.i)a.D(f,a.i[f]);Zh(a);a.T&&a.T(a.f);a.H.K("onReady",a.f)}
function fi(a,b,c){var d=b[c];return function(){try{return a.Y=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Y=e,Me(e))}}}
function Wh(a){a.u=!1;if(a.R)for(var b in a.i)a.R(b,a.i[b]);for(var c in a.P)Qe(parseInt(c,10));a.P={};a.D=null;a.R=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.W.bind(a);a.f.removeEventListener=a.Ta.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.Ba.bind(a);a.f.getPlayerType=a.Ca.bind(a);a.f.getCurrentVideoConfig=a.Aa.bind(a);a.f.loadNewVideoConfig=a.ha.bind(a);a.f.isReady=a.Ka.bind(a)}
k.Ka=function(){return this.u};
k.W=function(a,b){var c=this,d=Xh(this,b);if(d){if(!(0<=Ka(this.ua,a)||this.i[a])){var e=gi(this,a);this.D&&this.D(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.u&&T(function(){d(c.f)},0)}};
k.Ta=function(a,b){if(!this.g){var c=Xh(this,b);c&&$d(this.H,a,c)}};
function Xh(a,b){var c=b;if("string"==typeof b){if(a.V[b])return a.V[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.V[b]=c}return c?c:null}
function gi(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;p[c]=function(c){var d=T(function(){if(!a.g){a.H.K(b,c);var e=a.P,g=String(d);g in e&&delete e[g]}},0);
lb(a.P,String(d))};
return c}
k.xa=function(a){Af("a11y-announce",a)};
k.La=function(a){Af("WATCH_LATER_VIDEO_ADDED",a)};
k.Ma=function(a){Af("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ca=function(){return this.O||(ai(this)?"html5":null)};
k.Ba=function(){return this.Y};
function ci(a){Uh("dcp");a.cancel();Wh(a);a.O=null;a.b&&(a.b.loaded=!1);var b=ai(a);b&&($h(a)||!di(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.U;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.A&&Lf(this.b.assets.js,this.A);Qe(this.ka);this.N=!1};
k.m=function(){ci(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){S(b)}this.V=null;for(var a in this.i)p[this.i[a]]=null;this.Z=this.b=this.f=null;delete this.U;delete this.l;J.prototype.m.call(this)};
function di(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var hi={},ii="player_uid_"+(1E9*Math.random()>>>0);function ji(a){var b="player";b=r(b)?$b(b):b;var c=ii+"_"+(b[Da]||(b[Da]=++Ea)),d=hi[c];if(d)return d.ha(a),d.f;d=new Vh(b,c);hi[c]=d;Af("player-added",d.f);hd(d,y(ki,d));T(function(){d.ha(a)},0);
return d.f}
function ki(a){delete hi[a.G]}
;function li(){var a=mi(),b=ni();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!r(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!r(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var ni=Ib(function(){var a=new ke;return a.isAvailable()?new ge(a):null}),mi=Ib(function(){var a=new le;
return a.isAvailable()?new ge(a):null});function oi(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function pi(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return qi(a)}
function qi(a,b,c){if(Ca(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function ri(a,b,c,d){if(Ca(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function si(a){var b=a.video_id||a.videoId;if(r(b)){var c=li()||{},d=li()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=ni();if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function ti(a){J.call(this);this.b=a;this.b.subscribe("command",this.ra,this);this.f={};this.i=!1}
A(ti,J);k=ti.prototype;k.start=function(){this.i||this.g||(this.i=!0,ui(this.b,"RECEIVING"))};
k.ra=function(a,b,c){if(this.i&&!this.g){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=x(this.Va,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&vi(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=wi(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=xi(a,c))&&this.i&&!this.g&&ui(this.b,a,c))}}};
k.Va=function(a,b){this.i&&!this.g&&ui(this.b,a,this.ca(a,b))};
k.ca=function(a,b){if(null!=b)return{value:b}};
function vi(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
k.m=function(){var a=this.b;a.g||$d(a.b,"command",this.ra,this);this.b=null;for(var b in this.f)vi(this,b);ti.w.m.call(this)};function yi(a,b){ti.call(this,b);this.h=a;this.start()}
A(yi,ti);yi.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
yi.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function wi(a,b){switch(a){case "loadVideoById":return b=qi(b),si(b),[b];case "cueVideoById":return b=qi(b),si(b),[b];case "loadVideoByPlayerVars":return si(b),[b];case "cueVideoByPlayerVars":return si(b),[b];case "loadPlaylist":return b=ri(b),si(b),[b];case "cuePlaylist":return b=ri(b),si(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function xi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
yi.prototype.ca=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return yi.w.ca.call(this,a,b)};
yi.prototype.m=function(){yi.w.m.call(this);delete this.h};function zi(a,b,c,d){J.call(this);this.f=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.l=x(this.A,this);window.addEventListener("message",this.l)}
n(zi,J);zi.prototype.A=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.u=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Ka(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
zi.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=wd(a);c.postMessage(d,this.u)}catch(e){S(e,"WARNING")}}};
zi.prototype.m=function(){window.removeEventListener("message",this.l);J.prototype.m.call(this)};function Ai(a,b,c){zi.call(this,a,b,c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(Ai,zi);function Bi(){var a=this.f=new Ai(!!R("WIDGET_ID_ENFORCE")),b=x(this.Pa,this);a.i=b;a.j=null;this.f.channel="widget";if(a=R("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=Bi.prototype;k.Pa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,Ci(this,a)),this.i[a]=!0)):this.ta(a,b,c)};
k.ta=function(){};
function Ci(a,b){return x(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.za=function(){this.j=!0;this.sendMessage("initialDelivery",this.da());this.sendMessage("onReady");D(this.h,this.sa,this);this.h=[]};
k.da=function(){return null};
function Di(a,b){a.sendMessage("infoDelivery",b)}
k.sa=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.sa({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Ei(a){Bi.call(this);this.b=a;this.g=[];this.addEventListener("onReady",x(this.Na,this));this.addEventListener("onVideoProgress",x(this.Za,this));this.addEventListener("onVolumeChange",x(this.ab,this));this.addEventListener("onApiChange",x(this.Ua,this));this.addEventListener("onPlaybackQualityChange",x(this.Wa,this));this.addEventListener("onPlaybackRateChange",x(this.Xa,this));this.addEventListener("onStateChange",x(this.Ya,this));this.addEventListener("onWebglSettingsChanged",x(this.bb,
this))}
A(Ei,Bi);k=Ei.prototype;k.ta=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&oi(a)){var d=b;if(Ca(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=qi.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=pi.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=ri.apply(window,d)}d=e}si(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);oi(a)&&Di(this,this.da())}};
k.Na=function(){var a=x(this.za,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.da=function(){if(!this.b)return null;var a=this.b.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
k.Ya=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getVideoContentRect&&(a.videoContentRect=this.b.getVideoContentRect());this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Di(this,a)};
k.Wa=function(a){Di(this,{playbackQuality:a})};
k.Xa=function(a){Di(this,{playbackRate:a})};
k.Ua=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.ab=function(){Di(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Za=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Di(this,a)};
k.bb=function(){if(this.b.getSphericalProperties){var a={sphericalProperties:this.b.getSphericalProperties()};Di(this,a)}};
k.dispose=function(){Ei.w.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function Fi(){J.call(this);this.b=new L;hd(this,y(id,this.b))}
A(Fi,J);Fi.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
Fi.prototype.i=function(a,b){this.g||this.b.K.apply(this.b,arguments)};function Gi(a,b,c){Fi.call(this);this.f=a;this.h=b;this.j=c}
A(Gi,Fi);function ui(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(wd(a),d.h))}}
Gi.prototype.m=function(){this.h=this.f=null;Gi.w.m.call(this)};function Hi(a,b,c){J.call(this);this.b=a;this.h=c;this.i=W(window,"message",x(this.j,this));this.f=new Gi(this,a,b);hd(this,y(id,this.f))}
A(Hi,J);Hi.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.g||c.i("command",b.command,b.data,a.origin))}};
Hi.prototype.m=function(){lg(this.i);this.b=null;Hi.w.m.call(this)};function Ii(){var a=nb(Ji),b;return Qd(new K(function(c,d){a.onSuccess=function(a){Pe(a)?c(a):d(new Ki("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new Ki("Unknown request error","net.unknown",a))};
a.M=function(a){d(new Ki("Request timed out","net.timeout",a))};
b=Ze("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof Rd&&b.abort();
return Id(a)})}
function Ki(a,b){C.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Ki,C);function Li(a){this.g=void 0===a?null:a;this.f=0;this.b=null}
Li.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Dd(a)?a:Mi(a)):2===this.f&&b?(a=b.call(c,this.b),Dd(a)?a:Ni(a)):this};
Li.prototype.getValue=function(){return this.b};
Cd(Li);function Ni(a){var b=new Li;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function Mi(a){var b=new Li;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function Oi(a){C.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Pi;this.isTimeout=a instanceof Ki&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Rd}
n(Oi,C);Oi.prototype.name="BiscottiError";function Pi(){C.call(this,"Biscotti ID is missing from server")}
n(Pi,C);Pi.prototype.name="BiscottiMissingError";var Ji={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Qi=null;function Ri(){if("1"===hb(Ke(),"args","privembed"))return Id(Error("Biscotti ID is not available in private embed mode"));Qi||(Qi=Qd(Ii().then(Si),function(a){return Ti(2,a)}));
return Qi}
function Si(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Pi;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Pi;a=a.id;Ui(a);Qi=Mi(a);Vi(18E5,2);return a}
function Ti(a,b){var c=new Oi(b);Ui("");Qi=Ni(c);0<a&&Vi(12E4,a-1);throw c;}
function Vi(a,b){T(function(){Qd(Ii().then(Si,function(a){return Ti(b,a)}),xa)},a)}
function Ui(a){u("yt.ads.biscotti.lastId_",a,void 0)}
function Wi(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Ri()}catch(b){return Id(b)}}
;function Xi(a){C.apply(this,arguments)}
n(Xi,C);Xi.prototype.name="YuzuError";function Yi(){var a=new Xi("ID is missing"),b=new Xi("Timeout"),c=null,d=!1;Ge(function(){c=Ee();d=!0});
if(d)return c?Mi(c):Ni(a);var e=new K(function(b,c){Ge(function(){var d=Ee();d?b(d):c(a)})}),f=ue().then(function(){return Id(b)});
return Od(Ld([e,f]),function(){return f.cancel()})}
;function Zi(a){if("1"!==hb(Ke(),"args","privembed")){a&&(v("yt.ads.biscotti.getId_")||Ha("yt.ads.biscotti.getId_",Ri));try{var b=Wi();if(U("enable_yuzu")){v("yt.ads.yuzu.getId_")||u("yt.ads.yuzu.getId_",Yi,void 0);try{var c=v("yt.ads.yuzu.getId_")()}catch(d){c=Id(d)}}else c=Id(new Xi("unimplemented"));Md([b,c]).then(function(a){var b=a[0];a=a[1];if(b.aa||a.aa){b=b.value;a=a.value;var c={};c.dt=Lc;c.flash="0";a:{try{var d=window.top.location.href}catch(eb){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?B:h;try{var l=h.history.length}catch(eb){l=0}d.u_his=l;d.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(d.u_h=B.screen.height,d.u_w=B.screen.width,d.u_ah=B.screen.availHeight,d.u_aw=B.screen.availWidth,d.u_cd=B.screen.colorDepth);B.navigator&&B.navigator.plugins&&(d.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(d.u_nmime=
B.navigator.mimeTypes.length);d.ca_type="image";if(U("enable_server_side_search_pyv")||U("enable_server_side_mweb_search_pyv")){l=window;try{var m=l.screenX;var t=l.screenY}catch(eb){}try{var G=l.outerWidth;var Ja=l.outerHeight}catch(eb){}try{var Dh=l.innerWidth;var Eh=l.innerHeight}catch(eb){}m=[l.screenLeft,l.screenTop,m,t,l.screen?l.screen.availWidth:void 0,l.screen?l.screen.availTop:void 0,G,Ja,Dh,Eh];t=window.top;try{var V=(t||window).document,da="CSS1Compat"==V.compatMode?V.documentElement:
V.body;var Ma=(new Zb(da.clientWidth,da.clientHeight)).round()}catch(eb){Ma=new Zb(-12245933,-12245933)}V={};da=new ve;p.SVGElement&&p.document.createElementNS&&da.set(0);t=pc();t["allow-top-navigation-by-user-activation"]&&da.set(1);t["allow-popups-to-escape-sandbox"]&&da.set(2);da=we(da);V.bc=da;V.bih=Ma.height;V.biw=Ma.width;V.brdim=m.join();Ma=(V.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Ia.visibilityState||Ia.webkitVisibilityState||Ia.mozVisibilityState||""]||0,V.wgl=!!B.WebGLRenderingContext,
V);for(var qe in Ma)d[qe]=Ma[qe]}void 0!==b&&(d.bid=b);void 0!==a&&(d.anid=a);d.bsq=$i++;ef("//www.youtube.com/ad_data_204",{Da:!1,B:d,withCredentials:!0})}});
T(Zi,18E5)}catch(d){S(d)}}}
var $i=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};u("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function aj(){this.b=R("ALT_PREF_COOKIE_NAME","PREF");var a=Hb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
k=aj.prototype;k.get=function(a,b){bj(a);cj(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){bj(a);cj(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
k.remove=function(a){bj(a);cj(a);delete Z[a]};
k.save=function(){Jg(this.b,this.dump(),63072E3)};
k.clear=function(){for(var a in Z)delete Z[a]};
k.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function cj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function bj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function dj(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ya(aj);var ej=null,fj=null,gj=null,hj={};function ij(a){Fg(a.payload_name,a.payload,void 0,void 0)}
function jj(a){var b=a.id;a=a.ve_type;var c=Ug++;a=new Sg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});hj[b]=a;b=Zg();c=Yg();b&&c&&bh(b,c,a)}
function kj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&($g(b,a),a=Yg()))for(var c in hj){var d=hj[c];d&&bh(b,a,d)}}
function lj(a){hj[a.id]=new Sg({trackingParams:a.tracking_params})}
function mj(a){var b=Zg();a=hj[a.id];b&&a&&Fg("visualElementGestured",{csn:b,ve:Tg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"})}
function nj(a){a=a.ids;var b=Zg();if(b)for(var c=0;c<a.length;c++){var d=hj[a[c]];d&&Fg("visualElementShown",{csn:b,ve:Tg(d),eventType:1})}}
function oj(){var a=ej;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;u("yt.setConfig",Q,void 0);u("yt.config.set",Q,void 0);u("yt.setMsg",of,void 0);u("yt.msgs.set",of,void 0);u("yt.logging.errors.log",mf,void 0);
u("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);Zi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=R("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);R("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&si(a.args);ej=a=ji(a);a.addEventListener("onScreenChanged",kj);a.addEventListener("onLogClientVeCreated",jj);a.addEventListener("onLogServerVeCreated",lj);a.addEventListener("onLogToGel",ij);
a.addEventListener("onLogVeClicked",mj);a.addEventListener("onLogVesShown",nj);a.addEventListener("onReady",oj);b=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?gj=new Ei(a):R("ENABLE_POST_API")&&r(b)&&r(c)&&(fj=new Hi(window.parent,b,c),gj=new yi(a,fj.f));c=Je("BG_P");bg(c)&&(R("BG_I")||R("BG_IU"))&&(Yf=!0,Xf.initialize(R("BG_I",null),R("BG_IU",null),c,ag));Tf()},void 0);
u("yt.www.watch.ads.restrictioncookie.spr",function(a){hf(a+"mac_204?action_fcts=1");return!0},void 0);
var pj=Le(function(){Uh("ol");var a=aj.getInstance(),b=!!((dj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&ld(document.body,"exp-invert-logo"))if(c&&!ld(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):ld(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&ld(document.body,"inverted-hdpi")&&md();b!=c&&(b="f"+(Math.floor(119/31)+1),d=dj(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),qj=Le(function(){var a=ej;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&Xf.dispose();a=0;for(var b=Rf.length;a<b;a++)Qf(Rf[a]);Rf.length=0;Kf("//static.doubleclick.net/instream/ad_status.js");Sf=!1;Q("DCLKSTAT",0);jd(gj,fj);if(a=ej)a.removeEventListener("onScreenChanged",kj),a.removeEventListener("onLogClientVeCreated",jj),a.removeEventListener("onLogServerVeCreated",lj),a.removeEventListener("onLogToGel",ij),a.removeEventListener("onLogVeClicked",mj),a.removeEventListener("onLogVesShown",nj),a.removeEventListener("onReady",
oj),a.destroy();hj={}});
window.addEventListener?(window.addEventListener("load",pj),window.addEventListener("unload",qj)):window.attachEvent&&(window.attachEvent("onload",pj),window.attachEvent("onunload",qj));Ha("yt.abuse.player.botguardInitialized",v("yt.abuse.player.botguardInitialized")||cg);Ha("yt.abuse.player.invokeBotguard",v("yt.abuse.player.invokeBotguard")||dg);Ha("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||Uf);
Ha("yt.player.exports.navigate",v("yt.player.exports.navigate")||ah);Ha("yt.util.activity.init",v("yt.util.activity.init")||og);Ha("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||rg);Ha("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||pg);}).call(this);
