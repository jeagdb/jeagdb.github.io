(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{9938:function(e,t,r){"use strict";var o=r(5696),i=r(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,a=r(2648).Z,l=r(1598).Z,s=r(7273).Z,d=l(r(7294)),u=a(r(6505)),c=r(7675),f=r(5980),p=r(1059);r(2783);var h=a(r(1923)),b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function v(e,t,r,o,i,a,l){e&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode){if("blur"===r&&a(!0),null==o?void 0:o.current){var t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});var l=!1,s=!1;o.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:function(){return l},isPropagationStopped:function(){return s},persist:function(){},preventDefault:function(){l=!0,t.preventDefault()},stopPropagation:function(){s=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}}))}var x=d.forwardRef(function(e,t){var r=e.imgAttributes,o=e.heightInt,i=e.widthInt,a=(e.qualityInt,e.className),l=e.imgStyle,u=e.blurStyle,c=e.isLazy,f=e.fill,p=e.placeholder,h=e.loading,b=e.srcString,g=(e.config,e.unoptimized),m=(e.loader,e.onLoadRef),x=e.onLoadingCompleteRef,y=e.setBlurComplete,A=e.setShowAltText,w=(e.onLoad,e.onError),$=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=c?"lazy":h,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},$,r,{width:i,height:o,decoding:"async","data-nimg":f?"fill":"1",className:a,loading:h,style:n({},l,u),ref:d.useCallback(function(e){t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&v(e,b,p,m,x,y,g))},[b,p,m,x,y,w,g,t]),onLoad:function(e){v(e.currentTarget,b,p,m,x,y,g)},onError:function(e){A(!0),"blur"===p&&y(!0),w&&w(e)}})))}),y=d.forwardRef(function(e,t){var r,a,l,v=e.src,y=e.sizes,A=e.unoptimized,w=void 0!==A&&A,$=e.priority,k=void 0!==$&&$,E=e.loading,C=e.className,B=e.quality,P=e.width,L=e.height,T=e.fill,I=e.style,D=e.onLoad,R=e.onLoadingComplete,z=e.placeholder,S=void 0===z?"empty":z,Z=e.blurDataURL,O=e.layout,N=e.objectFit,M=e.objectPosition,Q=(e.lazyBoundary,e.lazyRoot,s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"])),U=d.useContext(p.ImageConfigContext),j=d.useMemo(function(){var e=b||U||f.imageConfigDefault,t=[].concat(i(e.deviceSizes),i(e.imageSizes)).sort(function(e,t){return e-t}),r=e.deviceSizes.sort(function(e,t){return e-t});return n({},e,{allSizes:t,deviceSizes:r})},[U]),H=Q,F=H.loader||h.default;delete H.loader;var G="__next_img_default"in F;if(G){if("custom"===j.loader)throw Error('Image with src "'.concat(v,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{var V=F;F=function(e){return e.config,V(s(e,["config"]))}}if(O){"fill"===O&&(T=!0);var W={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];W&&(I=n({},I,W));var q={responsive:"100vw",fill:"100vw"}[O];q&&!y&&(y=q)}var X="",K=m(P),Y=m(L);if("object"==typeof(r=v)&&(g(r)||void 0!==r.src)){var J=g(v)?v.default:v;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(a=J.blurWidth,l=J.blurHeight,Z=Z||J.blurDataURL,X=J.src,!T){if(K||Y){if(K&&!Y){var _=K/J.width;Y=Math.round(J.height*_)}else if(!K&&Y){var ee=Y/J.height;K=Math.round(J.width*ee)}}else K=J.width,Y=J.height}}var et=!k&&("lazy"===E||void 0===E);((v="string"==typeof v?v:X).startsWith("data:")||v.startsWith("blob:"))&&(w=!0,et=!1),j.unoptimized&&(w=!0),G&&v.endsWith(".svg")&&!j.dangerouslyAllowSVG&&(w=!0);var er=o(d.useState(!1),2),eo=er[0],ei=er[1],en=o(d.useState(!1),2),ea=en[0],el=en[1],es=m(B),ed=Object.assign(T?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:M}:{},ea?{}:{color:"transparent"},I),eu="blur"===S&&Z&&!eo?{backgroundSize:ed.objectFit||"cover",backgroundPosition:ed.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:K,heightInt:Y,blurWidth:a,blurHeight:l,blurDataURL:Z}),'")')}:{},ec=function(e){var t=e.config,r=e.src,o=e.unoptimized,n=e.width,a=e.quality,l=e.sizes,s=e.loader;if(o)return{src:r,srcSet:void 0,sizes:void 0};var d=function(e,t,r){var o=e.deviceSizes,n=e.allSizes;if(r){for(var a,l=/(^|\s)(1?\d?\d)vw/g,s=[];a=l.exec(r);a)s.push(parseInt(a[2]));if(s.length){var d=.01*Math.min.apply(Math,s);return{widths:n.filter(function(e){return e>=o[0]*d}),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map(function(e){return n.find(function(t){return t>=e})||n[n.length-1]}))),kind:"x"}}(t,n,l),u=d.widths,c=d.kind,f=u.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:u.map(function(e,o){return"".concat(s({config:t,src:r,quality:a,width:e})," ").concat("w"===c?e:o+1).concat(c)}).join(", "),src:s({config:t,src:r,quality:a,width:u[f]})}}({config:j,src:v,unoptimized:w,width:K,quality:es,sizes:y,loader:F}),ef=v,ep={imageSrcSet:ec.srcSet,imageSizes:ec.sizes,crossOrigin:H.crossOrigin},eh=d.useRef(D);d.useEffect(function(){eh.current=D},[D]);var eb=d.useRef(R);d.useEffect(function(){eb.current=R},[R]);var eg=n({isLazy:et,imgAttributes:ec,heightInt:Y,widthInt:K,qualityInt:es,className:C,imgStyle:ed,blurStyle:eu,loading:E,config:j,fill:T,unoptimized:w,placeholder:S,loader:F,srcString:ef,onLoadRef:eh,onLoadingCompleteRef:eb,setBlurComplete:ei,setShowAltText:el},H);return d.default.createElement(d.default.Fragment,null,d.default.createElement(x,Object.assign({},eg,{ref:t})),k?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ec.src+ec.srcSet+ec.sizes,rel:"preload",as:"image",href:ec.srcSet?void 0:ec.src},ep))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){var t=e.widthInt,r=e.heightInt,o=e.blurWidth,i=e.blurHeight,n=e.blurDataURL,a=o||t,l=i||r,s=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},1923:function(e,t){"use strict";function r(e){var t=e.config,r=e.src,o=e.width,i=e.quality;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(o,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},1876:function(e){!function(){var t={675:function(e,t){"use strict";t.byteLength=function(e){var t=s(e),r=t[0],o=t[1];return(r+o)*3/4-o},t.toByteArray=function(e){var t,r,n=s(e),a=n[0],l=n[1],d=new i((a+l)*3/4-l),u=0,c=l>0?a-4:a;for(r=0;r<c;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],d[u++]=t>>16&255,d[u++]=t>>8&255,d[u++]=255&t;return 2===l&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,d[u++]=255&t),1===l&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,d[u++]=t>>8&255,d[u++]=255&t),d},t.fromByteArray=function(e){for(var t,o=e.length,i=o%3,n=[],a=0,l=o-i;a<l;a+=16383)n.push(function(e,t,o){for(var i,n=[],a=t;a<o;a+=3)n.push(r[(i=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return n.join("")}(e,a,a+16383>l?l:a+16383));return 1===i?n.push(r[(t=e[o-1])>>2]+r[t<<4&63]+"=="):2===i&&n.push(r[(t=(e[o-2]<<8)+e[o-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),n.join("")};for(var r=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,l=n.length;a<l;++a)r[a]=n[a],o[n.charCodeAt(a)]=a;function s(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var o=r===t?0:4-r%4;return[r,o]}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},72:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var o=r(675),i=r(783),n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return s(e,t,r)}function s(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!l.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|p(e,t),o=a(r),i=o.write(e,t);return i!==r&&(o=o.slice(0,i)),o}(e,t);if(ArrayBuffer.isView(e))return c(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(L(e,ArrayBuffer)||e&&L(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(L(e,SharedArrayBuffer)||e&&L(e.buffer,SharedArrayBuffer)))return function(e,t,r){var o;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(o=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),l.prototype),o}(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var o=e.valueOf&&e.valueOf();if(null!=o&&o!==e)return l.from(o,t,r);var i=function(e){if(l.isBuffer(e)){var t,r=0|f(e.length),o=a(r);return 0===o.length||e.copy(o,0,0,r),o}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?a(0):c(e):"Buffer"===e.type&&Array.isArray(e.data)?c(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function d(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return d(e),a(e<0?0:0|f(e))}function c(e){for(var t=e.length<0?0:0|f(e.length),r=a(t),o=0;o<t;o+=1)r[o]=255&e[o];return r}function f(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||L(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,o=arguments.length>2&&!0===arguments[2];if(!o&&0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return E(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return B(e).length;default:if(i)return o?-1:E(e).length;t=(""+t).toLowerCase(),i=!0}}function h(e,t,r){var i,n,a=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var o=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>o)&&(r=o);for(var i="",n=t;n<r;++n)i+=T[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return v(this,t,r);case"ascii":return function(e,t,r){var o="";r=Math.min(e.length,r);for(var i=t;i<r;++i)o+=String.fromCharCode(127&e[i]);return o}(this,t,r);case"latin1":case"binary":return function(e,t,r){var o="";r=Math.min(e.length,r);for(var i=t;i<r;++i)o+=String.fromCharCode(e[i]);return o}(this,t,r);case"base64":return i=t,n=r,0===i&&n===this.length?o.fromByteArray(this):o.fromByteArray(this.slice(i,n));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var o=e.slice(t,r),i="",n=0;n<o.length;n+=2)i+=String.fromCharCode(o[n]+256*o[n+1]);return i}(this,t,r);default:if(a)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),a=!0}}function b(e,t,r){var o=e[t];e[t]=e[r],e[r]=o}function g(e,t,r,o,i){var n;if(0===e.length)return -1;if("string"==typeof r?(o=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(n=r=+r)!=n&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=l.from(t,o)),l.isBuffer(t))return 0===t.length?-1:m(e,t,r,o,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):m(e,[t],r,o,i);throw TypeError("val must be string, number or Buffer")}function m(e,t,r,o,i){var n,a=1,l=e.length,s=t.length;if(void 0!==o&&("ucs2"===(o=String(o).toLowerCase())||"ucs-2"===o||"utf16le"===o||"utf-16le"===o)){if(e.length<2||t.length<2)return -1;a=2,l/=2,s/=2,r/=2}function d(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var u=-1;for(n=r;n<l;n++)if(d(e,n)===d(t,-1===u?0:n-u)){if(-1===u&&(u=n),n-u+1===s)return u*a}else -1!==u&&(n-=n-u),u=-1}else for(r+s>l&&(r=l-s),n=r;n>=0;n--){for(var c=!0,f=0;f<s;f++)if(d(e,n+f)!==d(t,f)){c=!1;break}if(c)return n}return -1}function v(e,t,r){r=Math.min(e.length,r);for(var o=[],i=t;i<r;){var n,a,l,s,d=e[i],u=null,c=d>239?4:d>223?3:d>191?2:1;if(i+c<=r)switch(c){case 1:d<128&&(u=d);break;case 2:(192&(n=e[i+1]))==128&&(s=(31&d)<<6|63&n)>127&&(u=s);break;case 3:n=e[i+1],a=e[i+2],(192&n)==128&&(192&a)==128&&(s=(15&d)<<12|(63&n)<<6|63&a)>2047&&(s<55296||s>57343)&&(u=s);break;case 4:n=e[i+1],a=e[i+2],l=e[i+3],(192&n)==128&&(192&a)==128&&(192&l)==128&&(s=(15&d)<<18|(63&n)<<12|(63&a)<<6|63&l)>65535&&s<1114112&&(u=s)}null===u?(u=65533,c=1):u>65535&&(u-=65536,o.push(u>>>10&1023|55296),u=56320|1023&u),o.push(u),i+=c}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",o=0;o<t;)r+=String.fromCharCode.apply(String,e.slice(o,o+=4096));return r}(o)}function x(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function y(e,t,r,o,i,n){if(!l.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<n)throw RangeError('"value" argument is out of bounds');if(r+o>e.length)throw RangeError("Index out of range")}function A(e,t,r,o,i,n){if(r+o>e.length||r<0)throw RangeError("Index out of range")}function w(e,t,r,o,n){return t=+t,r>>>=0,n||A(e,t,r,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,r,o,23,4),r+4}function $(e,t,r,o,n){return t=+t,r>>>=0,n||A(e,t,r,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,r,o,52,8),r+8}t.Buffer=l,t.SlowBuffer=function(e){return+e!=e&&(e=0),l.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,l.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(r){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return s(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return(d(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},l.allocUnsafe=function(e){return u(e)},l.allocUnsafeSlow=function(e){return u(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(L(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),L(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,o=t.length,i=0,n=Math.min(r,o);i<n;++i)if(e[i]!==t[i]){r=e[i],o=t[i];break}return r<o?-1:o<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,o=l.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var n=e[r];if(L(n,Uint8Array)&&(n=l.from(n)),!l.isBuffer(n))throw TypeError('"list" argument must be an Array of Buffers');n.copy(o,i),i+=n.length}return o},l.byteLength=p,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)b(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},l.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?v(this,0,e):h.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},n&&(l.prototype[n]=l.prototype.inspect),l.prototype.compare=function(e,t,r,o,i){if(L(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===o&&(o=0),void 0===i&&(i=this.length),t<0||r>e.length||o<0||i>this.length)throw RangeError("out of range index");if(o>=i&&t>=r)return 0;if(o>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,o>>>=0,i>>>=0,this===e)return 0;for(var n=i-o,a=r-t,s=Math.min(n,a),d=this.slice(o,i),u=e.slice(t,r),c=0;c<s;++c)if(d[c]!==u[c]){n=d[c],a=u[c];break}return n<a?-1:a<n?1:0},l.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)},l.prototype.write=function(e,t,r,o){if(void 0===t)o="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)o=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===o&&(o="utf8")):(o=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,n,a,l,s,d,u,c,f,p,h,b,g=this.length-t;if((void 0===r||r>g)&&(r=g),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var m=!1;;)switch(o){case"hex":return function(e,t,r,o){r=Number(r)||0;var i=e.length-r;o?(o=Number(o))>i&&(o=i):o=i;var n=t.length;o>n/2&&(o=n/2);for(var a=0;a<o;++a){var l=parseInt(t.substr(2*a,2),16);if(l!=l)break;e[r+a]=l}return a}(this,e,t,r);case"utf8":case"utf-8":return s=t,d=r,P(E(e,this.length-s),this,s,d);case"ascii":return u=t,c=r,P(C(e),this,u,c);case"latin1":case"binary":return i=this,n=e,a=t,l=r,P(C(n),i,a,l);case"base64":return f=t,p=r,P(B(e),this,f,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,b=r,P(function(e,t){for(var r,o,i=[],n=0;n<e.length&&!((t-=2)<0);++n)o=(r=e.charCodeAt(n))>>8,i.push(r%256),i.push(o);return i}(e,this.length-h),this,h,b);default:if(m)throw TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),m=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var o=this.subarray(e,t);return Object.setPrototypeOf(o,l.prototype),o},l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var o=this[e],i=1,n=0;++n<t&&(i*=256);)o+=this[e+n]*i;return o},l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var o=this[e+--t],i=1;t>0&&(i*=256);)o+=this[e+--t]*i;return o},l.prototype.readUInt8=function(e,t){return e>>>=0,t||x(e,1,this.length),this[e]},l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||x(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||x(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||x(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||x(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var o=this[e],i=1,n=0;++n<t&&(i*=256);)o+=this[e+n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var o=t,i=1,n=this[e+--o];o>0&&(i*=256);)n+=this[e+--o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readInt8=function(e,t){return(e>>>=0,t||x(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||x(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||x(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||x(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||x(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return e>>>=0,t||x(e,4,this.length),i.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||x(e,4,this.length),i.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||x(e,8,this.length),i.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||x(e,8,this.length),i.read(this,e,!1,52,8)},l.prototype.writeUIntLE=function(e,t,r,o){if(e=+e,t>>>=0,r>>>=0,!o){var i=Math.pow(2,8*r)-1;y(this,e,t,r,i,0)}var n=1,a=0;for(this[t]=255&e;++a<r&&(n*=256);)this[t+a]=e/n&255;return t+r},l.prototype.writeUIntBE=function(e,t,r,o){if(e=+e,t>>>=0,r>>>=0,!o){var i=Math.pow(2,8*r)-1;y(this,e,t,r,i,0)}var n=r-1,a=1;for(this[t+n]=255&e;--n>=0&&(a*=256);)this[t+n]=e/a&255;return t+r},l.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeIntLE=function(e,t,r,o){if(e=+e,t>>>=0,!o){var i=Math.pow(2,8*r-1);y(this,e,t,r,i-1,-i)}var n=0,a=1,l=0;for(this[t]=255&e;++n<r&&(a*=256);)e<0&&0===l&&0!==this[t+n-1]&&(l=1),this[t+n]=(e/a>>0)-l&255;return t+r},l.prototype.writeIntBE=function(e,t,r,o){if(e=+e,t>>>=0,!o){var i=Math.pow(2,8*r-1);y(this,e,t,r,i-1,-i)}var n=r-1,a=1,l=0;for(this[t+n]=255&e;--n>=0&&(a*=256);)e<0&&0===l&&0!==this[t+n+1]&&(l=1),this[t+n]=(e/a>>0)-l&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||y(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeFloatLE=function(e,t,r){return w(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return w(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return $(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return $(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,o){if(!l.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),o||0===o||(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<r&&(o=r),o===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(o<0)throw RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-r&&(o=e.length-t+r);var i=o-r;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,r,o);else if(this===e&&r<t&&t<o)for(var n=i-1;n>=0;--n)e[n+t]=this[n+r];else Uint8Array.prototype.set.call(e,this.subarray(r,o),t);return i},l.prototype.fill=function(e,t,r,o){if("string"==typeof e){if("string"==typeof t?(o=t,t=0,r=this.length):"string"==typeof r&&(o=r,r=this.length),void 0!==o&&"string"!=typeof o)throw TypeError("encoding must be a string");if("string"==typeof o&&!l.isEncoding(o))throw TypeError("Unknown encoding: "+o);if(1===e.length){var i,n=e.charCodeAt(0);("utf8"===o&&n<128||"latin1"===o)&&(e=n)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var a=l.isBuffer(e)?e:l.from(e,o),s=a.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=a[i%s]}return this};var k=/[^+/0-9A-Za-z-_]/g;function E(e,t){t=t||1/0;for(var r,o=e.length,i=null,n=[],a=0;a<o;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319||a+1===o){(t-=3)>-1&&n.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&n.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&n.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;n.push(r)}else if(r<2048){if((t-=2)<0)break;n.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;n.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;n.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return n}function C(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function B(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(k,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function P(e,t,r,o){for(var i=0;i<o&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function L(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var T=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var o=16*r,i=0;i<16;++i)t[o+i]=e[r]+e[i];return t}()},783:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,o,i){var n,a,l=8*i-o-1,s=(1<<l)-1,d=s>>1,u=-7,c=r?i-1:0,f=r?-1:1,p=e[t+c];for(c+=f,n=p&(1<<-u)-1,p>>=-u,u+=l;u>0;n=256*n+e[t+c],c+=f,u-=8);for(a=n&(1<<-u)-1,n>>=-u,u+=o;u>0;a=256*a+e[t+c],c+=f,u-=8);if(0===n)n=1-d;else{if(n===s)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,o),n-=d}return(p?-1:1)*a*Math.pow(2,n-o)},t.write=function(e,t,r,o,i,n){var a,l,s,d=8*n-i-1,u=(1<<d)-1,c=u>>1,f=23===i?5960464477539062e-23:0,p=o?0:n-1,h=o?1:-1,b=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(l=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-a))<1&&(a--,s*=2),a+c>=1?t+=f/s:t+=f*Math.pow(2,1-c),t*s>=2&&(a++,s/=2),a+c>=u?(l=0,a=u):a+c>=1?(l=(t*s-1)*Math.pow(2,i),a+=c):(l=t*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;e[r+p]=255&l,p+=h,l/=256,i-=8);for(a=a<<i|l,d+=i;d>0;e[r+p]=255&a,p+=h,a/=256,d-=8);e[r+p-h]|=128*b}}},r={};function o(e){var i=r[e];if(void 0!==i)return i.exports;var n=r[e]={exports:{}},a=!0;try{t[e](n,n.exports,o),a=!1}finally{a&&delete r[e]}return n.exports}o.ab="//";var i=o(72);e.exports=i}()},5675:function(e,t,r){e.exports=r(9938)},5226:function(e){"use strict";e.exports={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"}},8039:function(e,t,r){"use strict";let o;r.d(t,{xG:function(){return k},zx:function(){return S},RQ:function(){return e7},qy:function(){return M},MF:function(){return N},Z0:function(){return _},o8:function(){return eV}});var i=r(9521),n=r(1876).Buffer;let a="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",l="inset 2px 2px 3px rgba(0,0,0,0.2)",s=()=>i.iv`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,d=({background:e="material",color:t="materialText"}={})=>i.iv`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:t})=>t[e]};
  color: ${({theme:e})=>e[t]};
`,u=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:r=2})=>i.iv`
  background-image: ${`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    ),linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`};
  background-color: ${t};
  background-size: ${`${2*r}px ${2*r}px`};
  background-position: 0 0, ${`${r}px ${r}px`};
`,c=()=>i.iv`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,f={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},p=({theme:e,topLeftInner:t,bottomRightInner:r,hasShadow:o=!1,hasInsetShadow:i=!1})=>[!!o&&a,!!i&&l,null!==t&&`inset 1px 1px 0px 1px ${e[t]}`,null!==r&&`inset -1px -1px 0 1px ${e[r]}`].filter(Boolean).join(", "),h=({invert:e=!1,style:t="button"}={})=>{let r={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return i.iv`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e[f[t][r.topLeftOuter]]};
    border-top-color: ${({theme:e})=>e[f[t][r.topLeftOuter]]};
    border-right-color: ${({theme:e})=>e[f[t][r.bottomRightOuter]]};
    border-bottom-color: ${({theme:e})=>e[f[t][r.bottomRightOuter]]};
    box-shadow: ${({theme:e,shadow:o})=>p({theme:e,topLeftInner:f[t][r.topLeftInner],bottomRightInner:f[t][r.bottomRightInner],hasShadow:o})};
  `},b=()=>i.iv`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,g=e=>n.from(e).toString("base64"),m="undefined"!=typeof btoa?btoa:g,v=(e,t=0)=>{let r=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`,o=m(r);return`url(data:image/svg+xml;base64,${o})`},x=(e="default")=>i.iv`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>u({mainColor:"flat"===e?t.flatLight:t.material,secondaryColor:"flat"===e?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${d()}
    ${"flat"===e?c():h({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:e})=>e.material};
  }
  ::-webkit-scrollbar-button {
    ${d()}
    ${"flat"===e?c():h({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${"default"===e?h({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:e})=>v(e.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:e})=>v(e.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:e})=>v(e.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:e})=>v(e.materialText,0)};
  }
`;var y=r(7294);let A=i.ZP.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,w=(0,y.forwardRef)(({children:e,underline:t=!0,...r},o)=>y.createElement(A,{ref:o,underline:t,...r},e));w.displayName="Anchor";let $=i.ZP.header`
  ${h()};
  ${d()};

  position: ${e=>{var t;return null!==(t=e.position)&&void 0!==t?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,k=(0,y.forwardRef)(({children:e,fixed:t=!0,position:r="fixed",...o},i)=>y.createElement($,{fixed:t,position:!1!==t?r:void 0,ref:i,...o},e));k.displayName="AppBar";let E=()=>{};function C(e,t,r){return null!==r&&e>r?r:null!==t&&e<t?t:e}function B(e,t,r){return Number((Math.round((e-r)/t)*t+r).toFixed(function(e){if(1>Math.abs(e)){let t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}let o=e.toString().split(".")[1];return o?o.length:0}(t)))}function P(e){return"number"==typeof e?`${e}px`:e}let L=i.ZP.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,T=i.ZP.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,I=(0,y.forwardRef)(({alt:e="",children:t,noBorder:r=!1,size:o=35,square:i=!1,src:n,...a},l)=>y.createElement(L,{noBorder:r,ref:l,size:P(o),square:i,src:n,...a},n?y.createElement(T,{src:n,alt:e}):t));I.displayName="Avatar";let D={sm:"28px",md:"36px",lg:"44px"},R=i.iv`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>D[e]};
  width: ${({fullWidth:e,size:t="md",square:r})=>e?"100%":r?D[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,z=i.ZP.button`
  ${({active:e,disabled:t,primary:r,theme:o,variant:n})=>"flat"===n?i.iv`
          ${c()}
          ${r?`
          border: 2px solid ${o.checkmark};
            outline: 2px solid ${o.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${o.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&b}
            outline-offset: -4px;
          }
        `:"menu"===n||"thin"===n?i.iv`
          ${d()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&h({style:"buttonThin"})}
          }
          &:active {
            ${!t&&h({style:"buttonThinPressed"})}
          }
          ${e&&h({style:"buttonThinPressed"})}
          ${t&&s()}
        `:i.iv`
          ${d()};
          border: none;
          ${t&&s()}
          ${e?u({mainColor:o.material,secondaryColor:o.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${r?i.iv`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${o.borderDarkest};
                `:i.iv`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${e?h({style:"raised"===n?"window":"button",invert:!0}):h({style:"raised"===n?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&h({style:"raised"===n?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&b}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${R}
`,S=(0,y.forwardRef)(({onClick:e,disabled:t=!1,children:r,type:o="button",fullWidth:i=!1,size:n="md",square:a=!1,active:l=!1,onTouchStart:s=E,primary:d=!1,variant:u="default",...c},f)=>y.createElement(z,{active:l,disabled:t,$disabled:t,fullWidth:i,onClick:t?void 0:e,onTouchStart:s,primary:d,ref:f,size:n,square:a,type:o,variant:u,...c},r));function Z({defaultValue:e,onChange:t,onChangePropName:r="onChange",readOnly:o,value:i,valuePropName:n="value"}){let a=void 0!==i,[l,s]=(0,y.useState)(e),d=(0,y.useCallback)(e=>{a||s(e)},[a]);if(a&&"function"!=typeof t&&!o){let u=`Warning: You provided a \`${n}\` prop to a component without an \`${r}\` handler.${"value"===n?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${r}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${r}\` function that updates \`${n}\`.`}`;console.warn(u)}return[a?i:l,d]}S.displayName="Button";let O=i.ZP.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>D[e.size]};
  width: ${e=>e.square?D[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>D[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&s()}
`,N=(0,y.forwardRef)(({size:e="lg",disabled:t,square:r,children:o,onClick:i,primary:n,...a},l)=>y.createElement(O,{$disabled:t,size:e,square:r,onClick:t?void 0:i,primary:n,role:"menuitem",ref:l,"aria-disabled":t,...a},o));N.displayName="MenuListItem";let M=i.ZP.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${h({style:"window"})}
  ${d()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;M.displayName="MenuList";let Q=i.ZP.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${20}px;
  height: ${20}px;
  opacity: 0;
  z-index: -1;
`,U=i.ZP.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&s()}

  ${O} & {
    margin: 0;
    height: 100%;
  }
  ${O}:hover & {
    ${({$disabled:e,theme:t})=>!e&&i.iv`
        color: ${t.materialTextInvert};
      `};
  }
`,j=i.ZP.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Q}:focus ~ & {
    ${b}
  }
  ${Q}:not(:disabled) ~ &:active {
    ${b}
  }
`,H=i.ZP.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${l};`}
  }
`,F=i.ZP.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${x()}
`,G=(0,y.forwardRef)(({children:e,shadow:t=!0,...r},o)=>y.createElement(H,{ref:o,shadow:t,...r},y.createElement(F,null,e)));G.displayName="ScrollView";let V=i.iv`
  width: ${20}px;
  height: ${20}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,W=(0,i.ZP)(H)`
  ${V}
  width: ${20}px;
  height: ${20}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,q=i.ZP.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${V}
  width: ${16}px;
  height: ${16}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,X=i.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,K=i.ZP.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>u({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Y={flat:q,default:W},J=(0,y.forwardRef)(({checked:e,className:t="",defaultChecked:r=!1,disabled:o=!1,indeterminate:i=!1,label:n="",onChange:a=E,style:l={},value:s,variant:d="default",...u},c)=>{var f;let[p,h]=Z({defaultValue:r,onChange:a,readOnly:null!==(f=u.readOnly)&&void 0!==f?f:o,value:e}),b=(0,y.useCallback)(e=>{let t=e.target.checked;h(t),a(e)},[a,h]),g=Y[d],m=null;return i?m=K:p&&(m=X),y.createElement(U,{$disabled:o,className:t,style:l},y.createElement(Q,{disabled:o,onChange:o?void 0:b,readOnly:o,type:"checkbox",value:s,checked:p,"data-indeterminate":i,ref:c,...u}),y.createElement(g,{$disabled:o,role:"presentation"},m&&y.createElement(m,{$disabled:o,variant:d})),n&&y.createElement(j,null,n))});J.displayName="Checkbox";let _=i.ZP.div`
  ${({orientation:e,theme:t,size:r="100%"})=>"vertical"===e?`
    height: ${P(r)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${P(r)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;_.displayName="Separator";let ee=(0,i.ZP)(z)`
  padding-left: 8px;
`,et=(0,i.ZP)(_)`
  height: 21px;
  position: relative;
  top: 0;
`,er=i.ZP.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,eo=i.ZP.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?i.iv`
          border: 2px solid ${({theme:e})=>e.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
          );
        `:i.iv`
          border: 2px solid ${({theme:e})=>e.materialText};
        `}
  ${er}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${b}
    outline-offset: -8px;
  }
`,ei=i.ZP.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?i.iv`
          border-top: 6px solid ${({theme:e})=>e.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
          );
        `:i.iv`
          border-top: 6px solid ${({theme:e})=>e.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>"flat"===e?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,en=(0,y.forwardRef)(({value:e,defaultValue:t,onChange:r=E,disabled:o=!1,variant:i="default",...n},a)=>{var l;let[s,d]=Z({defaultValue:t,onChange:r,readOnly:null!==(l=n.readOnly)&&void 0!==l?l:o,value:e}),u=e=>{let t=e.target.value;d(t),r(e)};return y.createElement(ee,{disabled:o,as:"div",variant:i,size:"md"},y.createElement(er,{onChange:u,readOnly:o,disabled:o,value:null!=s?s:"#008080",type:"color",ref:a,...n}),y.createElement(eo,{$disabled:o,color:null!=s?s:"#008080",role:"presentation"}),"default"===i&&y.createElement(et,{orientation:"vertical"}),y.createElement(ei,{$disabled:o,variant:i}))});en.displayName="ColorInput";let ea=i.ZP.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>i.iv`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${u({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${2*e}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${2*e}px);
      top: ${e}px;
      left: ${2*e}px;
    }
  `}
`,el=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],es=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function ed({digit:e=0,pixelSize:t=2,...r}){let o=es[Number(e)].map((e,t)=>e?`${el[t]} active`:el[t]);return y.createElement(ea,{pixelSize:t,...r},o.map((e,t)=>y.createElement("span",{className:e,key:t})))}let eu=i.ZP.div`
  ${h({style:"status"})}
  display: inline-flex;
  background: #000000;
`,ec={sm:1,md:2,lg:3,xl:4},ef=(0,y.forwardRef)(({value:e=0,minLength:t=3,size:r="md",...o},i)=>{let n=(0,y.useMemo)(()=>e.toString().padStart(t,"0").split(""),[t,e]);return y.createElement(eu,{ref:i,...o},n.map((e,t)=>y.createElement(ed,{digit:e,pixelSize:ec[r],key:t})))});ef.displayName="Counter";let ep=i.iv`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${D.md};
`,eh=(0,i.ZP)(H).attrs({"data-testid":"variant-default"})`
  ${ep}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,eb=i.ZP.div.attrs({"data-testid":"variant-flat"})`
  ${c()}
  ${ep}
  position: relative;
`,eg=i.iv`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>"flat"!==t&&e&&s()}
`,em=i.ZP.input`
  ${eg}
  padding: 0 8px;
`,ev=i.ZP.textarea`
  ${eg}
  padding: 8px;
  resize: none;
  ${({variant:e})=>x(e)}
`,ex=(0,y.forwardRef)(({className:e,disabled:t=!1,fullWidth:r,onChange:o=E,shadow:i=!0,style:n,variant:a="default",...l},s)=>{let d=(0,y.useMemo)(()=>{var e;return l.multiline?y.createElement(ev,{disabled:t,onChange:t?void 0:o,readOnly:t,ref:s,variant:a,...l}):y.createElement(em,{disabled:t,onChange:t?void 0:o,readOnly:t,ref:s,type:null!==(e=l.type)&&void 0!==e?e:"text",variant:a,...l})},[t,o,l,s,a]);return y.createElement("flat"===a?eb:eh,{className:e,fullWidth:r,$disabled:t,shadow:i,style:n},d)});ex.displayName="TextInput";let ey=i.ZP.div`
  display: inline-flex;
  align-items: center;
`,eA=(0,i.ZP)(S)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>"flat"===e?i.iv`
          height: calc(50% - 1px);
        `:i.iv`
          height: 50%;
        `}
`,ew=i.ZP.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>"flat"===e?i.iv`
          height: calc(${D.md} - 4px);
        `:i.iv`
          height: ${D.md};
          margin-left: 2px;
        `}
`,e$=i.ZP.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?i.iv`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:e})=>e.materialText};
        `:i.iv`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:e})=>e.materialText};
        `}
  ${eA}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?i.iv`
            border-bottom-color: ${({theme:e})=>e.materialTextDisabled};
          `:i.iv`
            border-top-color: ${({theme:e})=>e.materialTextDisabled};
          `}
  }
`,ek=(0,y.forwardRef)(({className:e,defaultValue:t,disabled:r=!1,max:o,min:i,onChange:n,readOnly:a,step:l=1,style:s,value:d,variant:u="default",width:c,...f},p)=>{let[h,b]=Z({defaultValue:t,onChange:n,readOnly:a,value:d}),g=(0,y.useCallback)(e=>{let t=parseFloat(e.target.value);b(t)},[b]),m=(0,y.useCallback)(e=>{let t=C(parseFloat(((null!=h?h:0)+e).toFixed(2)),null!=i?i:null,null!=o?o:null);b(t),null==n||n(t)},[o,i,n,b,h]),v=(0,y.useCallback)(()=>{void 0!==h&&(null==n||n(h))},[n,h]),x=(0,y.useCallback)(()=>{m(l)},[m,l]),A=(0,y.useCallback)(()=>{m(-l)},[m,l]),w="flat"===u?"flat":"raised";return y.createElement(ey,{className:e,style:{...s,width:void 0!==c?P(c):"auto"},...f},y.createElement(ex,{value:h,variant:u,onChange:g,disabled:r,type:"number",readOnly:a,ref:p,fullWidth:!0,onBlur:v}),y.createElement(ew,{variant:u},y.createElement(eA,{"data-testid":"increment",variant:w,disabled:r||a,onClick:x},y.createElement(e$,{invert:!0})),y.createElement(eA,{"data-testid":"decrement",variant:w,disabled:r||a,onClick:A},y.createElement(e$,null))))});ek.displayName="NumberInput";let eE=e=>(0,y.useMemo)(()=>null!=e?e:function(){let e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t="";for(let r=0;r<10;r+=1)t+=e[Math.floor(Math.random()*e.length)];return t}(),[e]),eC=i.iv`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,eB=i.iv`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,eP=i.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,eL=i.ZP.div`
  ${eC}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${eP}:focus & {
    ${eB}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,eT=i.iv`
  height: ${D.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?s():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,eI=(0,i.ZP)(H)`
  ${eT}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,eD=i.ZP.div`
  ${c()}
  ${eT}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,eR=i.ZP.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${eC}
  cursor: pointer;
  &:disabled {
    ${s()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,ez=(0,i.ZP)(z).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>"flat"===e?i.iv`
          height: 100%;
          margin-right: 0;
        `:i.iv`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&("flat"===t?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,eS=i.ZP.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${ez}:active & {
    margin-top: 2px;
  }
`,eZ=i.ZP.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${a};
  ${({variant:e="default"})=>"flat"===e?i.iv`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:e})=>e.flatDark};
        `:i.iv`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:e})=>e.borderDarkest};
        `}
  ${({variant:e="default"})=>x(e)}
`,eO=i.ZP.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${D.md} - 4px);
  line-height: calc(${D.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?eB:""}
  user-select: none;
`,eN=[],eM=({className:e,defaultValue:t,disabled:r,native:o,onChange:i,options:n=eN,readOnly:a,style:l,value:s,variant:d,width:u})=>{var c;let f=(0,y.useMemo)(()=>n.filter(Boolean),[n]),[p,h]=Z({defaultValue:null!=t?t:null===(c=null==f?void 0:f[0])||void 0===c?void 0:c.value,onChange:i,readOnly:a,value:s}),b=!(r||a),g=(0,y.useMemo)(()=>({className:e,style:{...l,width:u}}),[e,l,u]),m=(0,y.useMemo)(()=>y.createElement(ez,{as:"div","data-testid":"select-button",$disabled:r,native:o,tabIndex:-1,variant:"flat"===d?"flat":"raised"},y.createElement(eS,{"data-testid":"select-icon",$disabled:r})),[r,o,d]),v=(0,y.useMemo)(()=>"flat"===d?eD:eI,[d]);return(0,y.useMemo)(()=>({isEnabled:b,options:f,value:p,setValue:h,wrapperProps:g,DropdownButton:m,Wrapper:v}),[m,v,b,f,h,p,g])},eQ={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},eU=({onBlur:e,onChange:t,onClose:r,onFocus:o,onKeyDown:i,onMouseDown:n,onOpen:a,open:l,options:s,readOnly:d,value:u,selectRef:c,setValue:f,wrapperRef:p})=>{let h=(0,y.useRef)(null),b=(0,y.useRef)([]),g=(0,y.useRef)(0),m=(0,y.useRef)(0),v=(0,y.useRef)(),x=(0,y.useRef)("search"),A=(0,y.useRef)(""),w=(0,y.useRef)(),[$,k]=Z({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:d,value:l,valuePropName:"open"}),E=(0,y.useMemo)(()=>{let e=s.findIndex(e=>e.value===u);return g.current=C(e,0,null),s[e]},[s,u]),[B,P]=(0,y.useState)(s[0]),L=(0,y.useCallback)(e=>{let t=h.current,r=b.current[e];if(!r||!t){v.current=e;return}v.current=void 0;let o=t.clientHeight,i=t.scrollTop,n=t.scrollTop+o,a=r.offsetTop,l=r.offsetHeight,s=r.offsetTop+r.offsetHeight;a<i&&t.scrollTo(0,a),s>n&&t.scrollTo(0,a-o+l),r.focus({preventScroll:!0})},[h]),T=(0,y.useCallback)((e,{scroll:t}={})=>{var r;let o;let i=s.length-1;switch(e){case"first":o=0;break;case"last":o=i;break;case"next":o=C(m.current+1,0,i);break;case"previous":o=C(m.current-1,0,i);break;case"selected":o=C(null!==(r=g.current)&&void 0!==r?r:0,0,i);break;default:o=e}m.current=o,P(s[o]),t&&L(o)},[m,s,L]),I=(0,y.useCallback)(({fromEvent:e})=>{k(!0),T("selected",{scroll:!0}),null==a||a({fromEvent:e})},[T,a,k]),D=(0,y.useCallback)(()=>{x.current="search",A.current="",clearTimeout(w.current)},[]),R=(0,y.useCallback)(({focusSelect:e,fromEvent:t})=>{var o;null==r||r({fromEvent:t}),k(!1),P(s[0]),D(),v.current=void 0,e&&(null===(o=c.current)||void 0===o||o.focus())},[D,r,s,c,k]),z=(0,y.useCallback)(({fromEvent:e})=>{$?R({focusSelect:!1,fromEvent:e}):I({fromEvent:e})},[R,I,$]),S=(0,y.useCallback)((e,{fromEvent:r})=>{g.current!==e&&(g.current=e,f(s[e].value),null==t||t(s[e],{fromEvent:r}))},[t,s,f]),O=(0,y.useCallback)(({focusSelect:e,fromEvent:t})=>{S(m.current,{fromEvent:t}),R({focusSelect:e,fromEvent:t})},[R,S]),N=(0,y.useCallback)((e,{fromEvent:t,select:r})=>{var o;switch("cycleFirstLetter"===x.current&&e!==A.current&&(x.current="search"),e===A.current?x.current="cycleFirstLetter":A.current+=e,x.current){case"search":{let i=s.findIndex(e=>{var t;return(null===(t=e.label)||void 0===t?void 0:t.toLocaleUpperCase().indexOf(A.current))===0});i<0&&(i=s.findIndex(t=>{var r;return(null===(r=t.label)||void 0===r?void 0:r.toLocaleUpperCase().indexOf(e))===0}),A.current=e),i>=0&&(r?S(i,{fromEvent:t}):T(i,{scroll:!0}));break}case"cycleFirstLetter":{let n=r?null!==(o=g.current)&&void 0!==o?o:-1:m.current,a=s.findIndex((t,r)=>{var o;return r>n&&(null===(o=t.label)||void 0===o?void 0:o.toLocaleUpperCase().indexOf(e))===0});a<0&&(a=s.findIndex(t=>{var r;return(null===(r=t.label)||void 0===r?void 0:r.toLocaleUpperCase().indexOf(e))===0})),a>=0&&(r?S(a,{fromEvent:t}):T(a,{scroll:!0}))}}clearTimeout(w.current),w.current=setTimeout(()=>{"search"===x.current&&(A.current="")},1e3)},[T,s,S]),M=(0,y.useCallback)(e=>{var t;0===e.button&&(e.preventDefault(),null===(t=c.current)||void 0===t||t.focus(),z({fromEvent:e}),null==n||n(e))},[n,c,z]),Q=(0,y.useCallback)(e=>{O({focusSelect:!0,fromEvent:e})},[O]),U=(0,y.useCallback)(e=>{let{altKey:t,code:r,ctrlKey:o,metaKey:i,shiftKey:n}=e,{ARROW_DOWN:a,ARROW_UP:l,END:s,ENTER:d,ESC:u,HOME:c,SPACE:f,TAB:p}=eQ,h=t||o||i||n;if((r!==p||!t&&!o&&!i)&&(r===p||!h))switch(r){case a:if(e.preventDefault(),!$){I({fromEvent:e});return}T("next",{scroll:!0});break;case l:if(e.preventDefault(),!$){I({fromEvent:e});return}T("previous",{scroll:!0});break;case s:if(e.preventDefault(),!$){I({fromEvent:e});return}T("last",{scroll:!0});break;case d:if(!$)return;e.preventDefault(),O({focusSelect:!0,fromEvent:e});break;case u:if(!$)return;e.preventDefault(),R({focusSelect:!0,fromEvent:e});break;case c:if(e.preventDefault(),!$){I({fromEvent:e});return}T("first",{scroll:!0});break;case f:e.preventDefault(),$?O({focusSelect:!0,fromEvent:e}):I({fromEvent:e});break;case p:if(!$)return;n||e.preventDefault(),O({focusSelect:!n,fromEvent:e});break;default:!h&&r.match(/^Key/)&&(e.preventDefault(),e.stopPropagation(),N(r.replace(/^Key/,""),{select:!$,fromEvent:e}))}},[T,R,$,I,N,O]),j=(0,y.useCallback)(e=>{U(e),null==i||i(e)},[U,i]),H=(0,y.useCallback)(e=>{T(e)},[T]),F=(0,y.useCallback)(t=>{$||(D(),null==e||e(t))},[D,e,$]),G=(0,y.useCallback)(e=>{D(),null==o||o(e)},[D,o]),V=(0,y.useCallback)(e=>{h.current=e,void 0!==v.current&&L(v.current)},[L]),W=(0,y.useCallback)((e,t)=>{b.current[t]=e,v.current===t&&L(v.current)},[L]);return(0,y.useEffect)(()=>{if(!$)return()=>{};let e=e=>{var t;let r=e.target;(null===(t=p.current)||void 0===t?void 0:t.contains(r))||(e.preventDefault(),R({focusSelect:!1,fromEvent:e}))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[R,$,p]),(0,y.useMemo)(()=>({activeOption:B,handleActivateOptionIndex:H,handleBlur:F,handleButtonKeyDown:j,handleDropdownKeyDown:U,handleFocus:G,handleMouseDown:M,handleOptionClick:Q,handleSetDropdownRef:V,handleSetOptionRef:W,open:$,selectedOption:E}),[B,H,F,j,G,U,M,Q,V,W,$,E])},ej=(0,y.forwardRef)(({className:e,defaultValue:t,disabled:r,onChange:o,options:i,readOnly:n,style:a,value:l,variant:s,width:d,...u},c)=>{let{isEnabled:f,options:p,setValue:h,value:b,DropdownButton:g,Wrapper:m}=eM({defaultValue:t,disabled:r,native:!0,onChange:o,options:i,readOnly:n,value:l,variant:s}),v=(0,y.useCallback)(e=>{let t=p.find(t=>t.value===e.target.value);t&&(h(t.value),null==o||o(t,{fromEvent:e}))},[o,p,h]);return y.createElement(m,{className:e,style:{...a,width:d}},y.createElement(eP,null,y.createElement(eR,{...u,disabled:r,onChange:f?v:E,ref:c,value:b},p.map((e,t)=>{var r;return y.createElement("option",{key:`${e.value}-${t}`,value:e.value},null!==(r=e.label)&&void 0!==r?r:e.value)})),g))});function eH({activateOptionIndex:e,active:t,index:r,onClick:o,option:i,selected:n,setRef:a}){let l=(0,y.useCallback)(()=>{e(r)},[e,r]),s=(0,y.useCallback)(e=>{a(e,r)},[r,a]),d=eE();return y.createElement(eO,{active:t,"aria-selected":n?"true":void 0,"data-value":i.value,id:d,onClick:o,onMouseEnter:l,ref:s,role:"option",tabIndex:0},i.label)}ej.displayName="SelectNative";let eF=(0,y.forwardRef)(function({"aria-label":e,"aria-labelledby":t,className:r,defaultValue:o,disabled:i=!1,formatDisplay:n,inputProps:a,labelId:l,menuMaxHeight:s,name:d,onBlur:u,onChange:c,onClose:f,onFocus:p,onKeyDown:h,onMouseDown:b,onOpen:g,open:m,options:v,readOnly:x,shadow:A=!0,style:w,variant:$="default",value:k,width:E="auto",...C},B){let{isEnabled:P,options:L,setValue:T,value:I,wrapperProps:D,DropdownButton:R,Wrapper:z}=eM({className:r,defaultValue:o,disabled:i,native:!1,onChange:c,options:v,style:w,readOnly:x,value:k,variant:$,width:E}),S=(0,y.useRef)(null),Z=(0,y.useRef)(null),O=(0,y.useRef)(null),{activeOption:N,handleActivateOptionIndex:M,handleBlur:Q,handleButtonKeyDown:U,handleDropdownKeyDown:j,handleFocus:H,handleMouseDown:F,handleOptionClick:G,handleSetDropdownRef:V,handleSetOptionRef:W,open:q,selectedOption:X}=eU({onBlur:u,onChange:c,onClose:f,onFocus:p,onKeyDown:h,onMouseDown:b,onOpen:g,open:m,options:L,value:I,selectRef:Z,setValue:T,wrapperRef:O});(0,y.useImperativeHandle)(B,()=>({focus:e=>{var t;null===(t=Z.current)||void 0===t||t.focus(e)},node:S.current,value:String(I)}),[I]);let K=(0,y.useMemo)(()=>X?"function"==typeof n?n(X):X.label:"",[n,X]),Y=(0,y.useMemo)(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),J=eE(),_=(0,y.useMemo)(()=>L.map((e,t)=>{let r=`${I}-${t}`;return y.createElement(eH,{activateOptionIndex:M,active:e===N,index:t,key:r,onClick:G,option:e,selected:e===X,setRef:W})}),[N,M,G,W,L,X,I]);return y.createElement(z,{...D,$disabled:i,ref:O,shadow:A,style:{...w,width:E}},y.createElement("input",{name:d,ref:S,type:"hidden",value:String(I),...a}),y.createElement(eP,{"aria-disabled":i,"aria-expanded":q,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":null!=t?t:l,"aria-owns":P&&q?J:void 0,onBlur:Q,onFocus:H,onKeyDown:U,onMouseDown:P?F:b,ref:Z,role:"button",tabIndex:P?1:void 0,...C},y.createElement(eL,null,K),R),P&&q&&y.createElement(eZ,{id:J,onKeyDown:j,ref:V,role:"listbox",style:Y,tabIndex:0,variant:$},_))});eF.displayName="Select";let eG=i.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,eV=(0,y.forwardRef)(function({children:e,noPadding:t=!1,...r},o){return y.createElement(eG,{noPadding:t,ref:o,...r},e)});eV.displayName="Toolbar";let eW=i.ZP.div`
  padding: 16px;
`,eq=(0,y.forwardRef)(function({children:e,...t},r){return y.createElement(eW,{ref:r,...t},e)});eq.displayName="WindowContent";let eX=i.ZP.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>!1===e?i.iv`
          background: ${({theme:e})=>e.headerNotActiveBackground};
          color: ${({theme:e})=>e.headerNotActiveText};
        `:i.iv`
          background: ${({theme:e})=>e.headerBackground};
          color: ${({theme:e})=>e.headerText};
        `}

  ${z} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,eK=(0,y.forwardRef)(function({active:e=!0,children:t,...r},o){return y.createElement(eX,{active:e,ref:o,...r},t)});eK.displayName="WindowHeader";let eY=i.ZP.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${h({style:"window"})}
  ${d()}
`,eJ=i.ZP.span`
  ${({theme:e})=>i.iv`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,e_=(0,y.forwardRef)(({children:e,resizable:t=!1,resizeRef:r,shadow:o=!0,...i},n)=>y.createElement(eY,{ref:n,shadow:o,...i},e,t&&y.createElement(eJ,{"data-testid":"resizeHandle",ref:r})));e_.displayName="Window";let e0=(0,i.ZP)(G)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,e1=i.ZP.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,e2=i.ZP.div`
  display: flex;
  flex-wrap: wrap;
`,e5=i.ZP.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,e8=i.ZP.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,e4=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}],e6=(0,y.forwardRef)(({className:e,date:t=new Date().toISOString(),onAccept:r,onCancel:o,shadow:i=!0},n)=>{let[a,l]=(0,y.useState)(()=>(function(e){let t=new Date(Date.parse(e)),r=t.getUTCDate(),o=t.getUTCMonth(),i=t.getUTCFullYear();return{day:r,month:o,year:i}})(t)),{year:s,month:d,day:u}=a,c=(0,y.useCallback)(({value:e})=>{l(t=>({...t,month:e}))},[]),f=(0,y.useCallback)(e=>{l(t=>({...t,year:e}))},[]),p=(0,y.useCallback)(e=>{l(t=>({...t,day:e}))},[]),h=(0,y.useCallback)(()=>{let e=[a.year,a.month+1,a.day].map(e=>String(e).padStart(2,"0")).join("-");null==r||r(e)},[a.day,a.month,a.year,r]),b=(0,y.useMemo)(()=>{let e=Array.from({length:42}),t=new Date(s,d,1).getDay(),r=u,o=new Date(s,d+1,0).getDate();return r=r<o?r:o,e.forEach((i,n)=>{if(n>=t&&n<o+t){let a=n-t+1;e[n]=y.createElement(e5,{key:n,onClick:()=>{p(a)}},y.createElement(e8,{active:a===r},a))}else e[n]=y.createElement(e5,{key:n})}),e},[u,p,d,s]);return y.createElement(e_,{className:e,ref:n,shadow:i,style:{margin:20}},y.createElement(eK,null,y.createElement("span",{role:"img","aria-label":"\uD83D\uDCC6"},"\uD83D\uDCC6"),"Date"),y.createElement(eq,null,y.createElement(eV,{noPadding:!0,style:{justifyContent:"space-between"}},y.createElement(eF,{options:e4,value:d,onChange:c,width:128,menuMaxHeight:200}),y.createElement(ek,{value:s,onChange:f,width:100})),y.createElement(e0,null,y.createElement(e1,null,y.createElement(e5,null,"S"),y.createElement(e5,null,"M"),y.createElement(e5,null,"T"),y.createElement(e5,null,"W"),y.createElement(e5,null,"T"),y.createElement(e5,null,"F"),y.createElement(e5,null,"S")),y.createElement(e2,null,b)),y.createElement(eV,{noPadding:!0,style:{justifyContent:"space-between"}},y.createElement(S,{fullWidth:!0,onClick:o,disabled:!o},"Cancel"),y.createElement(S,{fullWidth:!0,onClick:r?h:void 0,disabled:!r},"OK"))))});e6.displayName="DatePicker";let e3=e=>{switch(e){case"status":case"well":return i.iv`
        ${h({style:"status"})}
      `;case"window":case"outside":return i.iv`
        ${h({style:"window"})}
      `;case"field":return i.iv`
        ${h({style:"field"})}
      `;default:return i.iv`
        ${h()}
      `}},e9=i.ZP.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>e3(e)}
  ${({variant:e})=>d("field"===e?{background:"canvas",color:"canvasText"}:void 0)}
`,e7=(0,y.forwardRef)(({children:e,shadow:t=!1,variant:r="window",...o},i)=>y.createElement(e9,{ref:i,shadow:t,variant:r,...o},e));e7.displayName="Frame";let te=i.ZP.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>"flat"===t?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>"flat"!==e&&i.iv`
      box-shadow: -1px -1px 0 1px ${({theme:e})=>e.borderDark},
        inset -1px -1px 0 1px ${({theme:e})=>e.borderDark};
    `}
  ${e=>e.$disabled&&s()}
`,tt=i.ZP.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>"flat"===t?e.canvas:e.material};
`,tr=(0,y.forwardRef)(({label:e,disabled:t=!1,variant:r="default",children:o,...i},n)=>y.createElement(te,{"aria-disabled":t,$disabled:t,variant:r,ref:n,...i},e&&y.createElement(tt,{variant:r},e),o));tr.displayName="GroupBox";let to=i.ZP.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${P(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;to.displayName="Handle";let ti=i.ZP.div`
  display: inline-block;
  height: ${({size:e})=>P(e)};
  width: ${({size:e})=>P(e)};
`,tn=i.ZP.span`
  display: block;
  background: ${"url('data:image/gif;base64,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')"};
  background-size: cover;
  width: 100%;
  height: 100%;
`,ta=(0,y.forwardRef)(({size:e=30,...t},r)=>y.createElement(ti,{size:e,ref:r,...t},y.createElement(tn,null)));ta.displayName="Hourglass";let tl=i.ZP.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,ts=i.ZP.div`
  position: relative;
`,td=i.ZP.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,tu=(0,i.ZP)(H).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,tc=i.ZP.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,tf=(0,y.forwardRef)(({backgroundStyles:e,children:t,...r},o)=>y.createElement(tl,{ref:o,...r},y.createElement(ts,null,y.createElement(td,null,y.createElement(tu,{style:e},t)),y.createElement(tc,null))));tf.displayName="Monitor";let tp=i.ZP.div`
  display: inline-block;
  height: ${D.md};
  width: 100%;
`,th=(0,i.ZP)(H)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,tb=i.iv`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,tg=i.ZP.div`
  position: relative;
  top: 4px;
  ${tb}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,tm=i.ZP.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${tb}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,tv=i.ZP.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,tx=i.ZP.span`
  display: inline-block;
  width: ${17}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,ty=(0,y.forwardRef)(({hideValue:e=!1,shadow:t=!0,value:r,variant:o="default",...i},n)=>{let a=e?null:`${r}%`,l=(0,y.useRef)(null),[s,d]=(0,y.useState)([]),u=(0,y.useCallback)(()=>{if(!l.current||void 0===r)return;let e=l.current.getBoundingClientRect().width;d(Array.from({length:Math.round(r/100*e/17)}))},[r]);return(0,y.useEffect)(()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[u]),y.createElement(tp,{"aria-valuenow":void 0!==r?Math.round(r):void 0,ref:n,role:"progressbar",variant:o,...i},y.createElement(th,{variant:o,shadow:t},"default"===o?y.createElement(y.Fragment,null,y.createElement(tg,{"data-testid":"defaultProgress1"},a),y.createElement(tm,{"data-testid":"defaultProgress2",value:r},a)):y.createElement(tv,{ref:l,"data-testid":"tileProgress"},s.map((e,t)=>y.createElement(tx,{key:t})))))});ty.displayName="ProgressBar";let tA=i.iv`
  width: ${20}px;
  height: ${20}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,tw=(0,i.ZP)(H)`
  ${tA}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,t$=i.ZP.div`
  ${c()}
  ${tA}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,tk=i.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,tE={flat:t$,default:tw},tC=(0,y.forwardRef)(({checked:e,className:t="",disabled:r=!1,label:o="",onChange:i,style:n={},variant:a="default",...l},s)=>{let d=tE[a];return y.createElement(U,{$disabled:r,className:t,style:n},y.createElement(d,{$disabled:r,role:"presentation"},e&&y.createElement(tk,{$disabled:r,variant:a})),y.createElement(Q,{disabled:r,onChange:r?void 0:i,readOnly:r,type:"radio",checked:e,ref:s,...l}),o&&y.createElement(j,null,o))});tC.displayName="Radio";let tB="undefined"!=typeof window?y.useLayoutEffect:y.useEffect;function tP(e){let t=y.useRef(e);return tB(()=>{t.current=e}),y.useCallback((...e)=>(0,t.current)(...e),[])}function tL(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function tT(e,t){return(0,y.useMemo)(()=>null==e&&null==t?null:r=>{tL(e,r),tL(t,r)},[e,t])}var tI=r(3935);let tD=!0,tR=!1,tz={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function tS(e){e.metaKey||e.altKey||e.ctrlKey||(tD=!0)}function tZ(){tD=!1}function tO(){"hidden"===this.visibilityState&&tR&&(tD=!0)}function tN(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(r){}return tD||function(e){if("type"in e){let{type:t,tagName:r}=e;if("INPUT"===r&&tz[t]&&!e.readOnly||"TEXTAREA"===r&&!e.readOnly)return!0}return"isContentEditable"in e&&!!e.isContentEditable}(t)}function tM(){tR=!0,window.clearTimeout(o),o=window.setTimeout(()=>{tR=!1},100)}function tQ(e,t){if(void 0!==t&&"changedTouches"in e){for(let r=0;r<e.changedTouches.length;r+=1){let o=e.changedTouches[r];if(o.identifier===t)return{x:o.clientX,y:o.clientY}}return!1}return"clientX"in e&&{x:e.clientX,y:e.clientY}}function tU(e){return e&&e.ownerDocument||document}let tj=i.ZP.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>"vertical"===e?i.iv`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:e})=>e?"41px":"39px"};
          }
        `:i.iv`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:e})=>e?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,tH=()=>i.iv`
  position: absolute;
  ${({orientation:e})=>"vertical"===e?i.iv`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:i.iv`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,tF=(0,i.ZP)(H)`
  ${tH()}
`,tG=(0,i.ZP)(H)`
  ${tH()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,tV=i.ZP.span`
  position: relative;
  ${({orientation:e})=>"vertical"===e?i.iv`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:i.iv`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>"flat"===e?i.iv`
          ${c()}
          outline: 2px solid ${({theme:e})=>e.flatDark};
          background: ${({theme:e})=>e.flatLight};
        `:i.iv`
          ${d()}
          ${h()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&u({mainColor:t.material,secondaryColor:t.borderLightest})}
`,tW=i.ZP.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>"vertical"===e?i.iv`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${6}px;
          border-bottom: 2px solid ${({theme:e})=>e.materialText};
        `:i.iv`
          bottom: ${-6}px;
          height: ${6}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:e})=>e.materialText};
          border-right: 1px solid ${({theme:e})=>e.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&i.iv`
      ${s()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,tq=i.ZP.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>"vertical"===e?i.iv`
          transform: translate(${8}px, ${7}px);
        `:i.iv`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,tX=(0,y.forwardRef)(({defaultValue:e,disabled:t=!1,marks:r=!1,max:o=100,min:i=0,name:n,onChange:a,onChangeCommitted:l,onMouseDown:s,orientation:d="horizontal",size:u="100%",step:c=1,value:f,variant:p="default",...h},b)=>{let g="vertical"===d,[m=i,v]=Z({defaultValue:e,onChange:null!=a?a:l,value:f}),{isFocusVisible:x,onBlurVisible:A,ref:w}=function(){let e=(0,y.useCallback)(e=>{let t=(0,tI.findDOMNode)(e);if(null!=t){var r;(r=t.ownerDocument).addEventListener("keydown",tS,!0),r.addEventListener("mousedown",tZ,!0),r.addEventListener("pointerdown",tZ,!0),r.addEventListener("touchstart",tZ,!0),r.addEventListener("visibilitychange",tO,!0)}},[]);return{isFocusVisible:tN,onBlurVisible:tM,ref:e}}(),[$,k]=(0,y.useState)(!1),E=(0,y.useRef)(),L=(0,y.useRef)(null),T=tT(w,E),I=tT(b,T),D=tP(e=>{x(e)&&k(!0)}),R=tP(()=>{!1!==$&&(k(!1),A())}),z=(0,y.useRef)(),S=(0,y.useMemo)(()=>!0===r&&Number.isFinite(c)?[...Array(Math.round((o-i)/c)+1)].map((e,t)=>({label:void 0,value:i+c*t})):Array.isArray(r)?r:[],[r,o,i,c]),O=tP(e=>{let t=(o-i)/10,r=S.map(e=>e.value),n=r.indexOf(m),s=0;switch(e.key){case"Home":s=i;break;case"End":s=o;break;case"PageUp":c&&(s=m+t);break;case"PageDown":c&&(s=m-t);break;case"ArrowRight":case"ArrowUp":s=c?m+c:r[n+1]||r[r.length-1];break;case"ArrowLeft":case"ArrowDown":s=c?m-c:r[n-1]||r[0];break;default:return}e.preventDefault(),c&&(s=B(s,c,i)),v(s=C(s,i,o)),k(!0),null==a||a(s),null==l||l(s)}),N=(0,y.useCallback)(e=>{let t;if(!E.current)return 0;let r=E.current.getBoundingClientRect();if(t=(o-i)*(g?(r.bottom-e.y)/r.height:(e.x-r.left)/r.width)+i,c)t=B(t,c,i);else{let n=S.map(e=>e.value),a=function(e,t){var r;let{index:o}=null!==(r=e.reduce((e,r,o)=>{let i=Math.abs(t-r);return null===e||i<e.distance||i===e.distance?{distance:i,index:o}:e},null))&&void 0!==r?r:{};return null!=o?o:-1}(n,t);t=n[a]}return C(t,i,o)},[S,o,i,c,g]),M=tP(e=>{var t;let r=tQ(e,z.current);if(!r)return;let o=N(r);null===(t=L.current)||void 0===t||t.focus(),v(o),k(!0),null==a||a(o)}),Q=tP(e=>{let t=tQ(e,z.current);if(!t)return;let r=N(t);null==l||l(r),z.current=void 0;let o=tU(E.current);o.removeEventListener("mousemove",M),o.removeEventListener("mouseup",Q),o.removeEventListener("touchmove",M),o.removeEventListener("touchend",Q)}),U=tP(e=>{var t;null==s||s(e),e.preventDefault(),null===(t=L.current)||void 0===t||t.focus(),k(!0);let r=tQ(e,z.current);if(r){let o=N(r);v(o),null==a||a(o)}let i=tU(E.current);i.addEventListener("mousemove",M),i.addEventListener("mouseup",Q)}),j=tP(e=>{var t;e.preventDefault();let r=e.changedTouches[0];null!=r&&(z.current=r.identifier),null===(t=L.current)||void 0===t||t.focus(),k(!0);let o=tQ(e,z.current);if(o){let i=N(o);v(i),null==a||a(i)}let n=tU(E.current);n.addEventListener("touchmove",M),n.addEventListener("touchend",Q)});return(0,y.useEffect)(()=>{let{current:e}=E;null==e||e.addEventListener("touchstart",j);let t=tU(e);return()=>{null==e||e.removeEventListener("touchstart",j),t.removeEventListener("mousemove",M),t.removeEventListener("mouseup",Q),t.removeEventListener("touchmove",M),t.removeEventListener("touchend",Q)}},[Q,M,j]),y.createElement(tj,{$disabled:t,hasMarks:Boolean(S.length),isFocused:$,onMouseDown:U,orientation:d,ref:I,size:P(u),...h},y.createElement("input",{disabled:t,name:n,type:"hidden",value:null!=m?m:0}),S&&S.map(e=>y.createElement(tW,{$disabled:t,"data-testid":"tick",key:e.value/(o-i)*100,orientation:d,style:{[g?"bottom":"left"]:`${(e.value-i)/(o-i)*100}%`}},e.label&&y.createElement(tq,{"aria-hidden":!0,"data-testid":"mark",orientation:d},e.label))),y.createElement("flat"===p?tG:tF,{orientation:d,variant:p}),y.createElement(tV,{$disabled:t,"aria-disabled":!!t||void 0,"aria-orientation":d,"aria-valuemax":o,"aria-valuemin":i,"aria-valuenow":m,onBlur:R,onFocus:D,onKeyDown:O,orientation:d,ref:L,role:"slider",style:{[g?"bottom":"left"]:`${(g?-100:0)+100*(m-i)/(o-i)}%`},tabIndex:t?void 0:0,variant:p}))});tX.displayName="Slider";let tK=i.ZP.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${l};
  overflow-y: auto;
`,tY=(0,y.forwardRef)(function({children:e,...t},r){return y.createElement(tK,{ref:r,...t},e)});tY.displayName="TableBody";let tJ=i.ZP.td`
  padding: 0 8px;
`,t_=(0,y.forwardRef)(function({children:e,...t},r){return y.createElement(tJ,{ref:r,...t},e)});t_.displayName="TableDataCell";let t0=i.ZP.thead`
  display: table-header-group;
`,t1=(0,y.forwardRef)(function({children:e,...t},r){return y.createElement(t0,{ref:r,...t},e)});t1.displayName="TableHead";let t2=i.ZP.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${h()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&i.iv`
      &:active {
        &:before {
          ${h({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&s()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&s()}
  }
`,t5=(0,y.forwardRef)(function({disabled:e=!1,children:t,onClick:r,onTouchStart:o=E,sort:i,...n},a){return y.createElement(t2,{$disabled:e,"aria-disabled":e,"aria-sort":"asc"===i?"ascending":"desc"===i?"descending":void 0,onClick:e?void 0:r,onTouchStart:e?void 0:o,ref:a,...n},y.createElement("div",null,t))});t5.displayName="TableHeadCell";let t8=i.ZP.tr`
  color: inherit;
  display: table-row;
  height: calc(${D.md} - 2px);
  line-height: calc(${D.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,t4=(0,y.forwardRef)(function({children:e,...t},r){return y.createElement(t8,{ref:r,...t},e)});t4.displayName="TableRow";let t6=i.ZP.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,t3=(0,i.ZP)(H)`
  &:before {
    box-shadow: none;
  }
`,t9=(0,y.forwardRef)(({children:e,...t},r)=>y.createElement(t3,null,y.createElement(t6,{ref:r,...t},e)));t9.displayName="Table";let t7=i.ZP.button`
  ${d()}
  ${h()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${D.md};
  line-height: ${D.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${b}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${D.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,re=(0,y.forwardRef)(({value:e,onClick:t,selected:r=!1,children:o,...i},n)=>y.createElement(t7,{"aria-selected":r,selected:r,onClick:r=>null==t?void 0:t(e,r),ref:n,role:"tab",...i},o));re.displayName="Tab";let rt=i.ZP.div`
  ${d()}
  ${h()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,rr=(0,y.forwardRef)(({children:e,...t},r)=>y.createElement(rt,{ref:r,...t},e));rr.displayName="TabBody";let ro=i.ZP.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,ri=i.ZP.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`,rn=(0,y.forwardRef)(({value:e,onChange:t=E,children:r,rows:o=1,...i},n)=>{let a=(0,y.useMemo)(()=>{var i;let n=null!==(i=y.Children.map(r,r=>{if(!y.isValidElement(r))return null;let o={selected:r.props.value===e,onClick:t};return y.cloneElement(r,o)}))&&void 0!==i?i:[],a=(function(e,t){let r=[];for(let o=t;o>0;o-=1)r.push(e.splice(0,Math.ceil(e.length/o)));return r})(n,o).map((e,t)=>({key:t,tabs:e})),l=a.findIndex(e=>e.tabs.some(e=>e.props.selected));return a.push(a.splice(l,1)[0]),a},[r,t,o,e]);return y.createElement(ro,{...i,isMultiRow:o>1,role:"tablist",ref:n},a.map(e=>y.createElement(ri,{key:e.key},e.tabs)))});rn.displayName="Tabs";let ra=["blur","focus"],rl=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function rs(e){return"nativeEvent"in e&&ra.includes(e.type)}function rd(e){return"nativeEvent"in e&&rl.includes(e.type)}let ru={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},rc=i.ZP.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${a};
  text-align: center;
  font-size: 1rem;
  ${e=>ru[e.position]}
`,rf=i.ZP.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,rp=(0,y.forwardRef)(({className:e,children:t,disableFocusListener:r=!1,disableMouseListener:o=!1,enterDelay:i=1e3,leaveDelay:n=0,onBlur:a,onClose:l,onFocus:s,onMouseEnter:d,onMouseLeave:u,onOpen:c,style:f,text:p,position:h="top",...b},g)=>{let[m,v]=(0,y.useState)(!1),[x,A]=(0,y.useState)(),[w,$]=(0,y.useState)(),k=!r,E=!o,C=e=>{window.clearTimeout(x),window.clearTimeout(w);let t=window.setTimeout(()=>{v(!0),null==c||c(e)},i);A(t)},B=e=>{e.persist(),rs(e)?null==s||s(e):rd(e)&&(null==d||d(e)),C(e)},P=e=>{window.clearTimeout(x),window.clearTimeout(w);let t=window.setTimeout(()=>{v(!1),null==l||l(e)},n);$(t)},L=e=>{e.persist(),rs(e)?null==a||a(e):rd(e)&&(null==u||u(e)),P(e)};return y.createElement(rf,{"data-testid":"tooltip-wrapper",onBlur:k?L:void 0,onFocus:k?B:void 0,onMouseEnter:E?B:void 0,onMouseLeave:E?L:void 0,tabIndex:k?0:void 0},y.createElement(rc,{className:e,"data-testid":"tooltip",position:h,ref:g,show:m,style:f,...b},p),t)});rp.displayName="Tooltip";let rh=(0,i.ZP)(j)`
  white-space: nowrap;
`,rb=i.iv`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":i.iv`
          cursor: pointer;

          :focus {
            ${rh} {
              background: ${({theme:e})=>e.hoverBackground};
              color: ${({theme:e})=>e.materialTextInvert};
              outline: 2px dotted ${({theme:e})=>e.focusSecondary};
            }
          }
        `}
`,rg=i.ZP.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&i.iv`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:e})=>e.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,rm=i.ZP.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?i.iv`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:e})=>e.material};
            }
          }
        `:i.iv`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:e})=>e.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,rv=i.ZP.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,rx=i.ZP.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${rb};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,ry=(0,i.ZP)(U)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${rb};
`,rA=i.ZP.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function rw(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}function r$(e){e.preventDefault()}function rk({className:e,disabled:t,expanded:r,innerRef:o,level:i,select:n,selected:a,style:l,tree:s=[]}){let d=0===i,u=(0,y.useCallback)(o=>{var s,u;let c=Boolean(o.items&&o.items.length>0),f=r.includes(o.id),p=null!==(s=t||o.disabled)&&void 0!==s&&s,h=a===o.id,b=y.createElement(rA,{"aria-hidden":!0},o.icon);return y.createElement(rm,{key:o.label,isRootLevel:d,role:"treeitem","aria-expanded":f,"aria-selected":h,hasItems:c},c?y.createElement(rv,{open:f},y.createElement(rx,{onClick:p?r$:e=>n(e,o),$disabled:p},y.createElement(ry,{$disabled:p},b,y.createElement(rh,null,o.label))),f&&y.createElement(rk,{className:e,disabled:p,expanded:r,level:i+1,select:n,selected:a,style:l,tree:null!==(u=o.items)&&void 0!==u?u:[]})):y.createElement(ry,{as:"button",$disabled:p,onClick:p?r$:e=>n(e,o)},b,y.createElement(rh,null,o.label)))},[e,t,r,d,i,n,a,l]);return y.createElement(rg,{className:d?e:void 0,style:d?l:void 0,ref:d?o:void 0,role:d?"tree":"group",isRootLevel:d},s.map(u))}let rE=(0,y.forwardRef)(function({className:e,defaultExpanded:t=[],defaultSelected:r,disabled:o=!1,expanded:i,onNodeSelect:n,onNodeToggle:a,selected:l,style:s,tree:d=[]},u){let[c,f]=Z({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:i,valuePropName:"expanded"}),[p,h]=Z({defaultValue:r,onChange:n,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),b=(0,y.useCallback)((e,t)=>{if(a){let r=rw(c,t);a(e,r)}f(e=>rw(e,t))},[c,a,f]),g=(0,y.useCallback)((e,t)=>{h(t),n&&n(e,t)},[n,h]),m=(0,y.useCallback)((e,t)=>{e.preventDefault(),g(e,t.id),t.items&&t.items.length&&b(e,t.id)},[g,b]);return y.createElement(rk,{className:e,disabled:o,expanded:c,level:0,innerRef:u,select:m,selected:p,style:s,tree:d})});rE.displayName="TreeView"}}]);