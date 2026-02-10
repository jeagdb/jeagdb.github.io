(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{571:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={default:function(){return b},defaultHead:function(){return c}};for(var n in o)Object.defineProperty(t,n,{enumerable:!0,get:o[n]});var i=r(4252),a=r(8365),l=r(7876),s=a._(r(4232)),d=i._(r(1796)),u=r(2563);function c(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(5360);var p=["name","httpEquiv","charSet","itemProp"];function h(e){var t,r,o,n;return e.reduce(f,[]).reverse().concat(c().reverse()).filter((t=new Set,r=new Set,o=new Set,n={},function(e){var i=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;var l=e.key.slice(e.key.indexOf("$")+1);t.has(l)?i=!1:t.add(l)}switch(e.type){case"title":case"base":r.has(e.type)?i=!1:r.add(e.type);break;case"meta":for(var s=0,d=p.length;s<d;s++){var u=p[s];if(e.props.hasOwnProperty(u))if("charSet"===u)o.has(u)?i=!1:o.add(u);else{var c=e.props[u],f=n[u]||new Set;("name"!==u||!a)&&f.has(c)?i=!1:(f.add(c),n[u]=f)}}}return i})).reverse().map(function(e,t){var r=e.key||t;return s.default.cloneElement(e,{key:r})})}var b=function(e){var t=e.children,r=(0,s.useContext)(u.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:h,headManager:r,children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1796:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var o=r(4232),n=o.useLayoutEffect,i=o.useEffect;function a(e){var t=e.headManager,r=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var e=o.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return n(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),n(function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}}),i(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},2405:e=>{"use strict";e.exports={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"}},2681:(e,t,r)=>{"use strict";var o=r(2983);Object.defineProperty(t,"__esModule",{value:!0});var n={default:function(){return c},getImageProps:function(){return u}};for(var i in n)Object.defineProperty(t,i,{enumerable:!0,get:n[i]});var a=r(4252),l=r(6302),s=r(7454),d=a._(r(6918));function u(e){for(var t=(0,l.getImgProps)(e,{defaultLoader:d.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}}).props,r=0,n=Object.entries(t);r<n.length;r++){var i=o(n[r],2),a=i[0];void 0===i[1]&&delete t[a]}return{props:t}}var c=s.Image},2715:(e,t)=>{"use strict";function r(e){var t=e.widthInt,r=e.heightInt,o=e.blurWidth,n=e.blurHeight,i=e.blurDataURL,a=e.objectFit,l=o?40*o:t,s=n?40*n:r,d=l&&s?"viewBox='0 0 ".concat(l," ").concat(s,"'"):"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' ".concat(d,"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(20,"'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='").concat(20,"'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='").concat(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' style='filter: url(%23b);' href='").concat(i,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},4587:(e,t,r)=>{e.exports=r(2681)},6302:(e,t,r)=>{"use strict";r(2983);var o=r(3095),n=r(7327),i=r(5236),a=["src","sizes","unoptimized","priority","preload","loading","className","quality","width","height","fill","style","overrideSrc","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","decoding","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"],l=["config"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return g}}),r(5360);var u=r(6296),c=r(2715),f=r(6335),p=["-moz-initial","fill","none","scale-down",void 0];function h(e){return void 0!==e.default}function b(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t){var r,o,s,g=e.src,m=e.sizes,v=e.unoptimized,x=void 0!==v&&v,y=e.priority,A=void 0!==y&&y,w=e.preload,$=void 0!==w&&w,k=e.loading,E=e.className,C=e.quality,B=e.width,L=e.height,O=e.fill,T=void 0!==O&&O,D=e.style,I=e.overrideSrc,R=(e.onLoad,e.onLoadingComplete,e.placeholder),z=void 0===R?"empty":R,S=e.blurDataURL,P=e.fetchPriority,H=e.decoding,j=e.layout,M=e.objectFit,N=e.objectPosition,U=(e.lazyBoundary,e.lazyRoot,n(e,a)),Q=t.imgConf,F=t.showAltText,_=t.blurComplete,G=t.defaultLoader,W=Q||f.imageConfigDefault;if("allSizes"in W)V=W;else{var V,q,X=[].concat(i(W.deviceSizes),i(W.imageSizes)).sort(function(e,t){return e-t}),K=W.deviceSizes.sort(function(e,t){return e-t}),Z=null==(q=W.qualities)?void 0:q.sort(function(e,t){return e-t});V=d(d({},W),{},{allSizes:X,deviceSizes:K,qualities:Z})}if(void 0===G)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});var Y=U.loader||G;delete U.loader,delete U.srcSet;var J="__next_img_default"in Y;if(J){if("custom"===V.loader)throw Object.defineProperty(Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{var ee=Y;Y=function(e){return e.config,ee(n(e,l))}}if(j){"fill"===j&&(T=!0);var et={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];et&&(D=d(d({},D),et));var er={responsive:"100vw",fill:"100vw"}[j];er&&!m&&(m=er)}var eo="",en=b(B),ei=b(L);if((r=g)&&"object"==typeof r&&(h(r)||void 0!==r.src)){var ea=h(g)?g.default:g;if(!ea.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(ea))),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!ea.height||!ea.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(ea))),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(o=ea.blurWidth,s=ea.blurHeight,S=S||ea.blurDataURL,eo=ea.src,!T)if(en||ei){if(en&&!ei){var el=en/ea.width;ei=Math.round(ea.height*el)}else if(!en&&ei){var es=ei/ea.height;en=Math.round(ea.width*es)}}else en=ea.width,ei=ea.height}var ed=!A&&!$&&("lazy"===k||void 0===k);(!(g="string"==typeof g?g:eo)||g.startsWith("data:")||g.startsWith("blob:"))&&(x=!0,ed=!1),V.unoptimized&&(x=!0),J&&!V.dangerouslyAllowSVG&&g.split("?",1)[0].endsWith(".svg")&&(x=!0);var eu=b(C),ec=Object.assign(T?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:N}:{},F?{}:{color:"transparent"},D),ef=_||"empty"===z?null:"blur"===z?'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:en,heightInt:ei,blurWidth:o,blurHeight:s,blurDataURL:S||"",objectFit:ec.objectFit}),'")'):'url("'.concat(z,'")'),ep=p.includes(ec.objectFit)?"fill"===ec.objectFit?"100% 100%":"cover":ec.objectFit,eh=ef?{backgroundSize:ep,backgroundPosition:ec.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:ef}:{},eb=function(e){var t=e.config,r=e.src,o=e.unoptimized,n=e.width,a=e.quality,l=e.sizes,s=e.loader;if(o){var d=(0,u.getDeploymentId)();if(r.startsWith("/")&&!r.startsWith("//")&&d){var c=r.includes("?")?"&":"?";r="".concat(r).concat(c,"dpl=").concat(d)}return{src:r,srcSet:void 0,sizes:void 0}}var f=function(e,t,r){var o=e.deviceSizes,n=e.allSizes;if(r){for(var a,l=/(^|\s)(1?\d?\d)vw/g,s=[];a=l.exec(r);)s.push(parseInt(a[2]));if(s.length){var d=.01*Math.min.apply(Math,s);return{widths:n.filter(function(e){return e>=o[0]*d}),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map(function(e){return n.find(function(t){return t>=e})||n[n.length-1]}))),kind:"x"}}(t,n,l),p=f.widths,h=f.kind,b=p.length-1;return{sizes:l||"w"!==h?l:"100vw",srcSet:p.map(function(e,o){return"".concat(s({config:t,src:r,quality:a,width:e})," ").concat("w"===h?e:o+1).concat(h)}).join(", "),src:s({config:t,src:r,quality:a,width:p[b]})}}({config:V,src:g,unoptimized:x,width:en,quality:eu,sizes:m,loader:Y}),eg=ed?"lazy":k;return{props:d(d({},U),{},{loading:eg,fetchPriority:P,width:en,height:ei,decoding:void 0===H?"async":H,className:E,style:d(d({},ec),eh),sizes:eb.sizes,srcSet:eb.srcSet,src:I||eb.src}),meta:{unoptimized:x,preload:$||A,placeholder:z,fill:T}}}},6807:(e,t,r)=>{"use strict";let o;r.d(t,{hw:()=>A,eu:()=>L,$n:()=>I,wI:()=>eJ,cO:()=>P,xC:()=>S,wv:()=>X,M7:()=>ej,p8:()=>eG,Me:()=>eN,y4:()=>eQ});var n=r(1626),i=r(8220).Buffer;let a="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",l="inset 2px 2px 3px rgba(0,0,0,0.2)",s=()=>(0,n.AH)`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,d=({background:e="material",color:t="materialText"}={})=>(0,n.AH)`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:t})=>t[e]};
  color: ${({theme:e})=>e[t]};
`,u=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:r=2})=>(0,n.AH)`
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
`,c=()=>(0,n.AH)`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,f={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},p=({invert:e=!1,style:t="button"}={})=>{let r={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return(0,n.AH)`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e[f[t][r.topLeftOuter]]};
    border-top-color: ${({theme:e})=>e[f[t][r.topLeftOuter]]};
    border-right-color: ${({theme:e})=>e[f[t][r.bottomRightOuter]]};
    border-bottom-color: ${({theme:e})=>e[f[t][r.bottomRightOuter]]};
    box-shadow: ${({theme:e,shadow:o})=>(({theme:e,topLeftInner:t,bottomRightInner:r,hasShadow:o=!1,hasInsetShadow:n=!1})=>[!!o&&a,!!n&&l,null!==t&&`inset 1px 1px 0px 1px ${e[t]}`,null!==r&&`inset -1px -1px 0 1px ${e[r]}`].filter(Boolean).join(", "))({theme:e,topLeftInner:f[t][r.topLeftInner],bottomRightInner:f[t][r.bottomRightInner],hasShadow:o})};
  `},h=()=>(0,n.AH)`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,b="u">typeof btoa?btoa:e=>i.from(e).toString("base64"),g=(e,t=0)=>{let r=b(`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`);return`url(data:image/svg+xml;base64,${r})`},m=(e="default")=>(0,n.AH)`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>u({mainColor:"flat"===e?t.flatLight:t.material,secondaryColor:"flat"===e?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${d()}
    ${"flat"===e?c():p({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:e})=>e.material};
  }
  ::-webkit-scrollbar-button {
    ${d()}
    ${"flat"===e?c():p({style:"window"})}
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
    ${"default"===e?p({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:e})=>g(e.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:e})=>g(e.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:e})=>g(e.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:e})=>g(e.materialText,0)};
  }
`;var v=r(4232);let x=n.Ay.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`;(0,v.forwardRef)(({children:e,underline:t=!0,...r},o)=>v.createElement(x,{ref:o,underline:t,...r},e)).displayName="Anchor";let y=n.Ay.header`
  ${p()};
  ${d()};

  position: ${e=>{var t;return null!=(t=e.position)?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,A=(0,v.forwardRef)(({children:e,fixed:t=!0,position:r="fixed",...o},n)=>v.createElement(y,{fixed:t,position:!1!==t?r:void 0,ref:n,...o},e));A.displayName="AppBar";let w=()=>{};function $(e,t,r){return null!==r&&e>r?r:null!==t&&e<t?t:e}function k(e,t,r){return Number((Math.round((e-r)/t)*t+r).toFixed(function(e){if(1>Math.abs(e)){let t=e.toExponential().split("e-"),r=t[0].split(".")[1];return(r?r.length:0)+parseInt(t[1],10)}let t=e.toString().split(".")[1];return t?t.length:0}(t)))}function E(e){return"number"==typeof e?`${e}px`:e}let C=n.Ay.div`
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
`,B=n.Ay.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,L=(0,v.forwardRef)(({alt:e="",children:t,noBorder:r=!1,size:o=35,square:n=!1,src:i,...a},l)=>v.createElement(C,{noBorder:r,ref:l,size:E(o),square:n,src:i,...a},i?v.createElement(B,{src:i,alt:e}):t));L.displayName="Avatar";let O={sm:"28px",md:"36px",lg:"44px"},T=(0,n.AH)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>O[e]};
  width: ${({fullWidth:e,size:t="md",square:r})=>e?"100%":r?O[t]:"auto"};
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
`,D=n.Ay.button`
  ${({active:e,disabled:t,primary:r,theme:o,variant:i})=>"flat"===i?(0,n.AH)`
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
            ${!e&&!t&&h}
            outline-offset: -4px;
          }
        `:"menu"===i||"thin"===i?(0,n.AH)`
          ${d()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&p({style:"buttonThin"})}
          }
          &:active {
            ${!t&&p({style:"buttonThinPressed"})}
          }
          ${e&&p({style:"buttonThinPressed"})}
          ${t&&s()}
        `:(0,n.AH)`
          ${d()};
          border: none;
          ${t&&s()}
          ${e?u({mainColor:o.material,secondaryColor:o.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${r?(0,n.AH)`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${o.borderDarkest};
                `:(0,n.AH)`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${e?p({style:"raised"===i?"window":"button",invert:!0}):p({style:"raised"===i?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&p({style:"raised"===i?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&h}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${T}
`,I=(0,v.forwardRef)(({onClick:e,disabled:t=!1,children:r,type:o="button",fullWidth:n=!1,size:i="md",square:a=!1,active:l=!1,onTouchStart:s=w,primary:d=!1,variant:u="default",...c},f)=>v.createElement(D,{active:l,disabled:t,$disabled:t,fullWidth:n,onClick:t?void 0:e,onTouchStart:s,primary:d,ref:f,size:i,square:a,type:o,variant:u,...c},r));function R({defaultValue:e,onChange:t,onChangePropName:r="onChange",readOnly:o,value:n,valuePropName:i="value"}){let a=void 0!==n,[l,s]=(0,v.useState)(e),d=(0,v.useCallback)(e=>{a||s(e)},[a]);return a&&"function"!=typeof t&&!o&&console.warn(`Warning: You provided a \`${i}\` prop to a component without an \`${r}\` handler.${"value"===i?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${r}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${r}\` function that updates \`${i}\`.`}`),[a?n:l,d]}I.displayName="Button";let z=n.Ay.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>O[e.size]};
  width: ${e=>e.square?O[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>O[e.size]};
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
`,S=(0,v.forwardRef)(({size:e="lg",disabled:t,square:r,children:o,onClick:n,primary:i,...a},l)=>v.createElement(z,{$disabled:t,size:e,square:r,onClick:t?void 0:n,primary:i,role:"menuitem",ref:l,"aria-disabled":t,...a},o));S.displayName="MenuListItem";let P=n.Ay.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${p({style:"window"})}
  ${d()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;P.displayName="MenuList";let H=n.Ay.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${20}px;
  height: ${20}px;
  opacity: 0;
  z-index: -1;
`,j=n.Ay.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&s()}

  ${z} & {
    margin: 0;
    height: 100%;
  }
  ${z}:hover & {
    ${({$disabled:e,theme:t})=>!e&&(0,n.AH)`
        color: ${t.materialTextInvert};
      `};
  }
`,M=n.Ay.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${H}:focus ~ & {
    ${h}
  }
  ${H}:not(:disabled) ~ &:active {
    ${h}
  }
`,N=n.Ay.div`
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
`,U=n.Ay.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${m()}
`,Q=(0,v.forwardRef)(({children:e,shadow:t=!0,...r},o)=>v.createElement(N,{ref:o,shadow:t,...r},v.createElement(U,null,e)));Q.displayName="ScrollView";let F=(0,n.AH)`
  width: ${20}px;
  height: ${20}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,_=(0,n.Ay)(N)`
  ${F}
  width: ${20}px;
  height: ${20}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,G=n.Ay.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${F}
  width: ${16}px;
  height: ${16}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,W=n.Ay.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,V=n.Ay.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
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
`,q={flat:G,default:_};(0,v.forwardRef)(({checked:e,className:t="",defaultChecked:r=!1,disabled:o=!1,indeterminate:n=!1,label:i="",onChange:a=w,style:l={},value:s,variant:d="default",...u},c)=>{var f;let[p,h]=R({defaultValue:r,onChange:a,readOnly:null!=(f=u.readOnly)?f:o,value:e}),b=(0,v.useCallback)(e=>{h(e.target.checked),a(e)},[a,h]),g=q[d],m=null;return n?m=V:p&&(m=W),v.createElement(j,{$disabled:o,className:t,style:l},v.createElement(H,{disabled:o,onChange:o?void 0:b,readOnly:o,type:"checkbox",value:s,checked:p,"data-indeterminate":n,ref:c,...u}),v.createElement(g,{$disabled:o,role:"presentation"},m&&v.createElement(m,{$disabled:o,variant:d})),i&&v.createElement(M,null,i))}).displayName="Checkbox";let X=n.Ay.div`
  ${({orientation:e,theme:t,size:r="100%"})=>"vertical"===e?`
    height: ${E(r)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${E(r)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;X.displayName="Separator";let K=(0,n.Ay)(D)`
  padding-left: 8px;
`,Z=(0,n.Ay)(X)`
  height: 21px;
  position: relative;
  top: 0;
`,Y=n.Ay.input`
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
`,J=n.Ay.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?(0,n.AH)`
          border: 2px solid ${({theme:e})=>e.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
          );
        `:(0,n.AH)`
          border: 2px solid ${({theme:e})=>e.materialText};
        `}
  ${Y}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${h}
    outline-offset: -8px;
  }
`,ee=n.Ay.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?(0,n.AH)`
          border-top: 6px solid ${({theme:e})=>e.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
          );
        `:(0,n.AH)`
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
`;(0,v.forwardRef)(({value:e,defaultValue:t,onChange:r=w,disabled:o=!1,variant:n="default",...i},a)=>{var l;let[s,d]=R({defaultValue:t,onChange:r,readOnly:null!=(l=i.readOnly)?l:o,value:e});return v.createElement(K,{disabled:o,as:"div",variant:n,size:"md"},v.createElement(Y,{onChange:e=>{d(e.target.value),r(e)},readOnly:o,disabled:o,value:null!=s?s:"#008080",type:"color",ref:a,...i}),v.createElement(J,{$disabled:o,color:null!=s?s:"#008080",role:"presentation"}),"default"===n&&v.createElement(Z,{orientation:"vertical"}),v.createElement(ee,{$disabled:o,variant:n}))}).displayName="ColorInput";let et=n.Ay.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>(0,n.AH)`
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
`,er=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],eo=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function en({digit:e=0,pixelSize:t=2,...r}){let o=eo[Number(e)].map((e,t)=>e?`${er[t]} active`:er[t]);return v.createElement(et,{pixelSize:t,...r},o.map((e,t)=>v.createElement("span",{className:e,key:t})))}let ei=n.Ay.div`
  ${p({style:"status"})}
  display: inline-flex;
  background: #000000;
`,ea={sm:1,md:2,lg:3,xl:4};(0,v.forwardRef)(({value:e=0,minLength:t=3,size:r="md",...o},n)=>{let i=(0,v.useMemo)(()=>e.toString().padStart(t,"0").split(""),[t,e]);return v.createElement(ei,{ref:n,...o},i.map((e,t)=>v.createElement(en,{digit:e,pixelSize:ea[r],key:t})))}).displayName="Counter";let el=(0,n.AH)`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${O.md};
`,es=(0,n.Ay)(N).attrs({"data-testid":"variant-default"})`
  ${el}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,ed=n.Ay.div.attrs({"data-testid":"variant-flat"})`
  ${c()}
  ${el}
  position: relative;
`,eu=(0,n.AH)`
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
`,ec=n.Ay.input`
  ${eu}
  padding: 0 8px;
`,ef=n.Ay.textarea`
  ${eu}
  padding: 8px;
  resize: none;
  ${({variant:e})=>m(e)}
`,ep=(0,v.forwardRef)(({className:e,disabled:t=!1,fullWidth:r,onChange:o=w,shadow:n=!0,style:i,variant:a="default",...l},s)=>{let d="flat"===a?ed:es,u=(0,v.useMemo)(()=>{var e;return l.multiline?v.createElement(ef,{disabled:t,onChange:t?void 0:o,readOnly:t,ref:s,variant:a,...l}):v.createElement(ec,{disabled:t,onChange:t?void 0:o,readOnly:t,ref:s,type:null!=(e=l.type)?e:"text",variant:a,...l})},[t,o,l,s,a]);return v.createElement(d,{className:e,fullWidth:r,$disabled:t,shadow:n,style:i},u)});ep.displayName="TextInput";let eh=n.Ay.div`
  display: inline-flex;
  align-items: center;
`,eb=(0,n.Ay)(I)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>"flat"===e?(0,n.AH)`
          height: calc(50% - 1px);
        `:(0,n.AH)`
          height: 50%;
        `}
`,eg=n.Ay.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>"flat"===e?(0,n.AH)`
          height: calc(${O.md} - 4px);
        `:(0,n.AH)`
          height: ${O.md};
          margin-left: 2px;
        `}
`,em=n.Ay.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?(0,n.AH)`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:e})=>e.materialText};
        `:(0,n.AH)`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:e})=>e.materialText};
        `}
  ${eb}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?(0,n.AH)`
            border-bottom-color: ${({theme:e})=>e.materialTextDisabled};
          `:(0,n.AH)`
            border-top-color: ${({theme:e})=>e.materialTextDisabled};
          `}
  }
`,ev=(0,v.forwardRef)(({className:e,defaultValue:t,disabled:r=!1,max:o,min:n,onChange:i,readOnly:a,step:l=1,style:s,value:d,variant:u="default",width:c,...f},p)=>{let[h,b]=R({defaultValue:t,onChange:i,readOnly:a,value:d}),g=(0,v.useCallback)(e=>{b(parseFloat(e.target.value))},[b]),m=(0,v.useCallback)(e=>{let t=$(parseFloat(((null!=h?h:0)+e).toFixed(2)),null!=n?n:null,null!=o?o:null);b(t),null==i||i(t)},[o,n,i,b,h]),x=(0,v.useCallback)(()=>{void 0!==h&&(null==i||i(h))},[i,h]),y=(0,v.useCallback)(()=>{m(l)},[m,l]),A=(0,v.useCallback)(()=>{m(-l)},[m,l]),w="flat"===u?"flat":"raised";return v.createElement(eh,{className:e,style:{...s,width:void 0!==c?E(c):"auto"},...f},v.createElement(ep,{value:h,variant:u,onChange:g,disabled:r,type:"number",readOnly:a,ref:p,fullWidth:!0,onBlur:x}),v.createElement(eg,{variant:u},v.createElement(eb,{"data-testid":"increment",variant:w,disabled:r||a,onClick:y},v.createElement(em,{invert:!0})),v.createElement(eb,{"data-testid":"decrement",variant:w,disabled:r||a,onClick:A},v.createElement(em,null))))});ev.displayName="NumberInput";let ex=e=>(0,v.useMemo)(()=>null!=e?e:function(){let e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",t="";for(let r=0;r<10;r+=1)t+=e[Math.floor(Math.random()*e.length)];return t}(),[e]),ey=(0,n.AH)`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,eA=(0,n.AH)`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,ew=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,e$=n.Ay.div`
  ${ey}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${ew}:focus & {
    ${eA}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,ek=(0,n.AH)`
  height: ${O.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?s():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,eE=(0,n.Ay)(N)`
  ${ek}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,eC=n.Ay.div`
  ${c()}
  ${ek}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,eB=n.Ay.select`
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
  ${ey}
  cursor: pointer;
  &:disabled {
    ${s()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,eL=(0,n.Ay)(D).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>"flat"===e?(0,n.AH)`
          height: 100%;
          margin-right: 0;
        `:(0,n.AH)`
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
`,eO=n.Ay.span`
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
  ${eL}:active & {
    margin-top: 2px;
  }
`,eT=n.Ay.ul`
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
  ${({variant:e="default"})=>"flat"===e?(0,n.AH)`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:e})=>e.flatDark};
        `:(0,n.AH)`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:e})=>e.borderDarkest};
        `}
  ${({variant:e="default"})=>m(e)}
`,eD=n.Ay.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${O.md} - 4px);
  line-height: calc(${O.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?eA:""}
  user-select: none;
`,eI=[],eR=({className:e,defaultValue:t,disabled:r,native:o,onChange:n,options:i=eI,readOnly:a,style:l,value:s,variant:d,width:u})=>{var c;let f=(0,v.useMemo)(()=>i.filter(Boolean),[i]),[p,h]=R({defaultValue:null!=t?t:null==(c=null==f?void 0:f[0])?void 0:c.value,onChange:n,readOnly:a,value:s}),b=!(r||a),g=(0,v.useMemo)(()=>({className:e,style:{...l,width:u}}),[e,l,u]),m=(0,v.useMemo)(()=>v.createElement(eL,{as:"div","data-testid":"select-button",$disabled:r,native:o,tabIndex:-1,variant:"flat"===d?"flat":"raised"},v.createElement(eO,{"data-testid":"select-icon",$disabled:r})),[r,o,d]),x=(0,v.useMemo)(()=>"flat"===d?eC:eE,[d]);return(0,v.useMemo)(()=>({isEnabled:b,options:f,value:p,setValue:h,wrapperProps:g,DropdownButton:m,Wrapper:x}),[m,x,b,f,h,p,g])},ez={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"};function eS({activateOptionIndex:e,active:t,index:r,onClick:o,option:n,selected:i,setRef:a}){let l=(0,v.useCallback)(()=>{e(r)},[e,r]),s=(0,v.useCallback)(e=>{a(e,r)},[r,a]),d=ex();return v.createElement(eD,{active:t,"aria-selected":i?"true":void 0,"data-value":n.value,id:d,onClick:o,onMouseEnter:l,ref:s,role:"option",tabIndex:0},n.label)}(0,v.forwardRef)(({className:e,defaultValue:t,disabled:r,onChange:o,options:n,readOnly:i,style:a,value:l,variant:s,width:d,...u},c)=>{let{isEnabled:f,options:p,setValue:h,value:b,DropdownButton:g,Wrapper:m}=eR({defaultValue:t,disabled:r,native:!0,onChange:o,options:n,readOnly:i,value:l,variant:s}),x=(0,v.useCallback)(e=>{let t=p.find(t=>t.value===e.target.value);t&&(h(t.value),null==o||o(t,{fromEvent:e}))},[o,p,h]);return v.createElement(m,{className:e,style:{...a,width:d}},v.createElement(ew,null,v.createElement(eB,{...u,disabled:r,onChange:f?x:w,ref:c,value:b},p.map((e,t)=>{var r;return v.createElement("option",{key:`${e.value}-${t}`,value:e.value},null!=(r=e.label)?r:e.value)})),g))}).displayName="SelectNative";let eP=(0,v.forwardRef)(function({"aria-label":e,"aria-labelledby":t,className:r,defaultValue:o,disabled:n=!1,formatDisplay:i,inputProps:a,labelId:l,menuMaxHeight:s,name:d,onBlur:u,onChange:c,onClose:f,onFocus:p,onKeyDown:h,onMouseDown:b,onOpen:g,open:m,options:x,readOnly:y,shadow:A=!0,style:w,variant:k="default",value:E,width:C="auto",...B},L){let{isEnabled:O,options:T,setValue:D,value:I,wrapperProps:z,DropdownButton:S,Wrapper:P}=eR({className:r,defaultValue:o,disabled:n,native:!1,onChange:c,options:x,style:w,readOnly:y,value:E,variant:k,width:C}),H=(0,v.useRef)(null),j=(0,v.useRef)(null),M=(0,v.useRef)(null),{activeOption:N,handleActivateOptionIndex:U,handleBlur:Q,handleButtonKeyDown:F,handleDropdownKeyDown:_,handleFocus:G,handleMouseDown:W,handleOptionClick:V,handleSetDropdownRef:q,handleSetOptionRef:X,open:K,selectedOption:Z}=(({onBlur:e,onChange:t,onClose:r,onFocus:o,onKeyDown:n,onMouseDown:i,onOpen:a,open:l,options:s,readOnly:d,value:u,selectRef:c,setValue:f,wrapperRef:p})=>{let h=(0,v.useRef)(null),b=(0,v.useRef)([]),g=(0,v.useRef)(0),m=(0,v.useRef)(0),x=(0,v.useRef)(),y=(0,v.useRef)("search"),A=(0,v.useRef)(""),w=(0,v.useRef)(),[k,E]=R({defaultValue:!1,onChange:a,onChangePropName:"onOpen",readOnly:d,value:l,valuePropName:"open"}),C=(0,v.useMemo)(()=>{let e=s.findIndex(e=>e.value===u);return g.current=$(e,0,null),s[e]},[s,u]),[B,L]=(0,v.useState)(s[0]),O=(0,v.useCallback)(e=>{let t=h.current,r=b.current[e];if(!r||!t){x.current=e;return}x.current=void 0;let o=t.clientHeight,n=t.scrollTop,i=t.scrollTop+o,a=r.offsetTop,l=r.offsetHeight,s=r.offsetTop+r.offsetHeight;a<n&&t.scrollTo(0,a),s>i&&t.scrollTo(0,a-o+l),r.focus({preventScroll:!0})},[h]),T=(0,v.useCallback)((e,{scroll:t}={})=>{var r;let o,n=s.length-1;switch(e){case"first":o=0;break;case"last":o=n;break;case"next":o=$(m.current+1,0,n);break;case"previous":o=$(m.current-1,0,n);break;case"selected":o=$(null!=(r=g.current)?r:0,0,n);break;default:o=e}m.current=o,L(s[o]),t&&O(o)},[m,s,O]),D=(0,v.useCallback)(({fromEvent:e})=>{E(!0),T("selected",{scroll:!0}),null==a||a({fromEvent:e})},[T,a,E]),I=(0,v.useCallback)(()=>{y.current="search",A.current="",clearTimeout(w.current)},[]),z=(0,v.useCallback)(({focusSelect:e,fromEvent:t})=>{var o;null==r||r({fromEvent:t}),E(!1),L(s[0]),I(),x.current=void 0,e&&(null==(o=c.current)||o.focus())},[I,r,s,c,E]),S=(0,v.useCallback)(({fromEvent:e})=>{k?z({focusSelect:!1,fromEvent:e}):D({fromEvent:e})},[z,D,k]),P=(0,v.useCallback)((e,{fromEvent:r})=>{g.current!==e&&(g.current=e,f(s[e].value),null==t||t(s[e],{fromEvent:r}))},[t,s,f]),H=(0,v.useCallback)(({focusSelect:e,fromEvent:t})=>{P(m.current,{fromEvent:t}),z({focusSelect:e,fromEvent:t})},[z,P]),j=(0,v.useCallback)((e,{fromEvent:t,select:r})=>{var o;switch("cycleFirstLetter"===y.current&&e!==A.current&&(y.current="search"),e===A.current?y.current="cycleFirstLetter":A.current+=e,y.current){case"search":{let o=s.findIndex(e=>{var t;return(null==(t=e.label)?void 0:t.toLocaleUpperCase().indexOf(A.current))===0});o<0&&(o=s.findIndex(t=>{var r;return(null==(r=t.label)?void 0:r.toLocaleUpperCase().indexOf(e))===0}),A.current=e),o>=0&&(r?P(o,{fromEvent:t}):T(o,{scroll:!0}));break}case"cycleFirstLetter":{let n=r?null!=(o=g.current)?o:-1:m.current,i=s.findIndex((t,r)=>{var o;return r>n&&(null==(o=t.label)?void 0:o.toLocaleUpperCase().indexOf(e))===0});i<0&&(i=s.findIndex(t=>{var r;return(null==(r=t.label)?void 0:r.toLocaleUpperCase().indexOf(e))===0})),i>=0&&(r?P(i,{fromEvent:t}):T(i,{scroll:!0}))}}clearTimeout(w.current),w.current=setTimeout(()=>{"search"===y.current&&(A.current="")},1e3)},[T,s,P]),M=(0,v.useCallback)(e=>{var t;0===e.button&&(e.preventDefault(),null==(t=c.current)||t.focus(),S({fromEvent:e}),null==i||i(e))},[i,c,S]),N=(0,v.useCallback)(e=>{H({focusSelect:!0,fromEvent:e})},[H]),U=(0,v.useCallback)(e=>{let{altKey:t,code:r,ctrlKey:o,metaKey:n,shiftKey:i}=e,{ARROW_DOWN:a,ARROW_UP:l,END:s,ENTER:d,ESC:u,HOME:c,SPACE:f,TAB:p}=ez,h=t||o||n||i;if((r!==p||!(t||o||n))&&(r===p||!h))switch(r){case a:if(e.preventDefault(),!k)return void D({fromEvent:e});T("next",{scroll:!0});break;case l:if(e.preventDefault(),!k)return void D({fromEvent:e});T("previous",{scroll:!0});break;case s:if(e.preventDefault(),!k)return void D({fromEvent:e});T("last",{scroll:!0});break;case d:if(!k)return;e.preventDefault(),H({focusSelect:!0,fromEvent:e});break;case u:if(!k)return;e.preventDefault(),z({focusSelect:!0,fromEvent:e});break;case c:if(e.preventDefault(),!k)return void D({fromEvent:e});T("first",{scroll:!0});break;case f:e.preventDefault(),k?H({focusSelect:!0,fromEvent:e}):D({fromEvent:e});break;case p:if(!k)return;i||e.preventDefault(),H({focusSelect:!i,fromEvent:e});break;default:!h&&r.match(/^Key/)&&(e.preventDefault(),e.stopPropagation(),j(r.replace(/^Key/,""),{select:!k,fromEvent:e}))}},[T,z,k,D,j,H]),Q=(0,v.useCallback)(e=>{U(e),null==n||n(e)},[U,n]),F=(0,v.useCallback)(e=>{T(e)},[T]),_=(0,v.useCallback)(t=>{k||(I(),null==e||e(t))},[I,e,k]),G=(0,v.useCallback)(e=>{I(),null==o||o(e)},[I,o]),W=(0,v.useCallback)(e=>{h.current=e,void 0!==x.current&&O(x.current)},[O]),V=(0,v.useCallback)((e,t)=>{b.current[t]=e,x.current===t&&O(x.current)},[O]);return(0,v.useEffect)(()=>{if(!k)return()=>{};let e=e=>{var t;let r=e.target;(null==(t=p.current)?void 0:t.contains(r))||(e.preventDefault(),z({focusSelect:!1,fromEvent:e}))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[z,k,p]),(0,v.useMemo)(()=>({activeOption:B,handleActivateOptionIndex:F,handleBlur:_,handleButtonKeyDown:Q,handleDropdownKeyDown:U,handleFocus:G,handleMouseDown:M,handleOptionClick:N,handleSetDropdownRef:W,handleSetOptionRef:V,open:k,selectedOption:C}),[B,F,_,Q,G,U,M,N,W,V,k,C])})({onBlur:u,onChange:c,onClose:f,onFocus:p,onKeyDown:h,onMouseDown:b,onOpen:g,open:m,options:T,value:I,selectRef:j,setValue:D,wrapperRef:M});(0,v.useImperativeHandle)(L,()=>({focus:e=>{var t;null==(t=j.current)||t.focus(e)},node:H.current,value:String(I)}),[I]);let Y=(0,v.useMemo)(()=>Z?"function"==typeof i?i(Z):Z.label:"",[i,Z]),J=(0,v.useMemo)(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),ee=ex(),et=(0,v.useMemo)(()=>T.map((e,t)=>{let r=`${I}-${t}`,o=e===N,n=e===Z;return v.createElement(eS,{activateOptionIndex:U,active:o,index:t,key:r,onClick:V,option:e,selected:n,setRef:X})}),[N,U,V,X,T,Z,I]);return v.createElement(P,{...z,$disabled:n,ref:M,shadow:A,style:{...w,width:C}},v.createElement("input",{name:d,ref:H,type:"hidden",value:String(I),...a}),v.createElement(ew,{"aria-disabled":n,"aria-expanded":K,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":null!=t?t:l,"aria-owns":O&&K?ee:void 0,onBlur:Q,onFocus:G,onKeyDown:F,onMouseDown:O?W:b,ref:j,role:"button",tabIndex:O?1:void 0,...B},v.createElement(e$,null,Y),S),O&&K&&v.createElement(eT,{id:ee,onKeyDown:_,ref:q,role:"listbox",style:J,tabIndex:0,variant:k},et))});eP.displayName="Select";let eH=n.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,ej=(0,v.forwardRef)(function({children:e,noPadding:t=!1,...r},o){return v.createElement(eH,{noPadding:t,ref:o,...r},e)});ej.displayName="Toolbar";let eM=n.Ay.div`
  padding: 16px;
`,eN=(0,v.forwardRef)(function({children:e,...t},r){return v.createElement(eM,{ref:r,...t},e)});eN.displayName="WindowContent";let eU=n.Ay.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>!1===e?(0,n.AH)`
          background: ${({theme:e})=>e.headerNotActiveBackground};
          color: ${({theme:e})=>e.headerNotActiveText};
        `:(0,n.AH)`
          background: ${({theme:e})=>e.headerBackground};
          color: ${({theme:e})=>e.headerText};
        `}

  ${D} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,eQ=(0,v.forwardRef)(function({active:e=!0,children:t,...r},o){return v.createElement(eU,{active:e,ref:o,...r},t)});eQ.displayName="WindowHeader";let eF=n.Ay.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${p({style:"window"})}
  ${d()}
`,e_=n.Ay.span`
  ${({theme:e})=>(0,n.AH)`
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
`,eG=(0,v.forwardRef)(({children:e,resizable:t=!1,resizeRef:r,shadow:o=!0,...n},i)=>v.createElement(eF,{ref:i,shadow:o,...n},e,t&&v.createElement(e_,{"data-testid":"resizeHandle",ref:r})));eG.displayName="Window";let eW=(0,n.Ay)(Q)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,eV=n.Ay.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,eq=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
`,eX=n.Ay.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,eK=n.Ay.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,eZ=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];(0,v.forwardRef)(({className:e,date:t=new Date().toISOString(),onAccept:r,onCancel:o,shadow:n=!0},i)=>{let[a,l]=(0,v.useState)(()=>{let e,r;return r=(e=new Date(Date.parse(t))).getUTCDate(),{day:r,month:e.getUTCMonth(),year:e.getUTCFullYear()}}),{year:s,month:d,day:u}=a,c=(0,v.useCallback)(({value:e})=>{l(t=>({...t,month:e}))},[]),f=(0,v.useCallback)(e=>{l(t=>({...t,year:e}))},[]),p=(0,v.useCallback)(e=>{l(t=>({...t,day:e}))},[]),h=(0,v.useCallback)(()=>{let e=[a.year,a.month+1,a.day].map(e=>String(e).padStart(2,"0")).join("-");null==r||r(e)},[a.day,a.month,a.year,r]),b=(0,v.useMemo)(()=>{let e=Array.from({length:42}),t=new Date(s,d,1).getDay(),r=u,o=new Date(s,d+1,0).getDate();return r=r<o?r:o,e.forEach((n,i)=>{if(i>=t&&i<o+t){let o=i-t+1;e[i]=v.createElement(eX,{key:i,onClick:()=>{p(o)}},v.createElement(eK,{active:o===r},o))}else e[i]=v.createElement(eX,{key:i})}),e},[u,p,d,s]);return v.createElement(eG,{className:e,ref:i,shadow:n,style:{margin:20}},v.createElement(eQ,null,v.createElement("span",{role:"img","aria-label":"\uD83D\uDCC6"},"\uD83D\uDCC6"),"Date"),v.createElement(eN,null,v.createElement(ej,{noPadding:!0,style:{justifyContent:"space-between"}},v.createElement(eP,{options:eZ,value:d,onChange:c,width:128,menuMaxHeight:200}),v.createElement(ev,{value:s,onChange:f,width:100})),v.createElement(eW,null,v.createElement(eV,null,v.createElement(eX,null,"S"),v.createElement(eX,null,"M"),v.createElement(eX,null,"T"),v.createElement(eX,null,"W"),v.createElement(eX,null,"T"),v.createElement(eX,null,"F"),v.createElement(eX,null,"S")),v.createElement(eq,null,b)),v.createElement(ej,{noPadding:!0,style:{justifyContent:"space-between"}},v.createElement(I,{fullWidth:!0,onClick:o,disabled:!o},"Cancel"),v.createElement(I,{fullWidth:!0,onClick:r?h:void 0,disabled:!r},"OK"))))}).displayName="DatePicker";let eY=n.Ay.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>(e=>{switch(e){case"status":case"well":return(0,n.AH)`
        ${p({style:"status"})}
      `;case"window":case"outside":return(0,n.AH)`
        ${p({style:"window"})}
      `;case"field":return(0,n.AH)`
        ${p({style:"field"})}
      `;default:return(0,n.AH)`
        ${p()}
      `}})(e)}
  ${({variant:e})=>d("field"===e?{background:"canvas",color:"canvasText"}:void 0)}
`,eJ=(0,v.forwardRef)(({children:e,shadow:t=!1,variant:r="window",...o},n)=>v.createElement(eY,{ref:n,shadow:t,variant:r,...o},e));eJ.displayName="Frame";let e0=n.Ay.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>"flat"===t?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>"flat"!==e&&(0,n.AH)`
      box-shadow: -1px -1px 0 1px ${({theme:e})=>e.borderDark},
        inset -1px -1px 0 1px ${({theme:e})=>e.borderDark};
    `}
  ${e=>e.$disabled&&s()}
`,e1=n.Ay.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>"flat"===t?e.canvas:e.material};
`;(0,v.forwardRef)(({label:e,disabled:t=!1,variant:r="default",children:o,...n},i)=>v.createElement(e0,{"aria-disabled":t,$disabled:t,variant:r,ref:i,...n},e&&v.createElement(e1,{variant:r},e),o)).displayName="GroupBox",n.Ay.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${E(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`.displayName="Handle";let e2=n.Ay.div`
  display: inline-block;
  height: ${({size:e})=>E(e)};
  width: ${({size:e})=>E(e)};
`,e5=n.Ay.span`
  display: block;
  background: ${"url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')"};
  background-size: cover;
  width: 100%;
  height: 100%;
`;(0,v.forwardRef)(({size:e=30,...t},r)=>v.createElement(e2,{size:e,ref:r,...t},v.createElement(e5,null))).displayName="Hourglass";let e8=n.Ay.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,e6=n.Ay.div`
  position: relative;
`,e3=n.Ay.div`
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
`,e4=(0,n.Ay)(N).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,e9=n.Ay.div`
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
`;(0,v.forwardRef)(({backgroundStyles:e,children:t,...r},o)=>v.createElement(e8,{ref:o,...r},v.createElement(e6,null,v.createElement(e3,null,v.createElement(e4,{style:e},t)),v.createElement(e9,null)))).displayName="Monitor";let e7=n.Ay.div`
  display: inline-block;
  height: ${O.md};
  width: 100%;
`,te=(0,n.Ay)(N)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,tt=(0,n.AH)`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,tr=n.Ay.div`
  position: relative;
  top: 4px;
  ${tt}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,to=n.Ay.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${tt}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,tn=n.Ay.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,ti=n.Ay.span`
  display: inline-block;
  width: ${17}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`;(0,v.forwardRef)(({hideValue:e=!1,shadow:t=!0,value:r,variant:o="default",...n},i)=>{let a=e?null:`${r}%`,l=(0,v.useRef)(null),[s,d]=(0,v.useState)([]),u=(0,v.useCallback)(()=>{l.current&&void 0!==r&&d(Array.from({length:Math.round(r/100*l.current.getBoundingClientRect().width/17)}))},[r]);return(0,v.useEffect)(()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[u]),v.createElement(e7,{"aria-valuenow":void 0!==r?Math.round(r):void 0,ref:i,role:"progressbar",variant:o,...n},v.createElement(te,{variant:o,shadow:t},"default"===o?v.createElement(v.Fragment,null,v.createElement(tr,{"data-testid":"defaultProgress1"},a),v.createElement(to,{"data-testid":"defaultProgress2",value:r},a)):v.createElement(tn,{ref:l,"data-testid":"tileProgress"},s.map((e,t)=>v.createElement(ti,{key:t})))))}).displayName="ProgressBar";let ta=(0,n.AH)`
  width: ${20}px;
  height: ${20}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,tl=(0,n.Ay)(N)`
  ${ta}
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
`,ts=n.Ay.div`
  ${c()}
  ${ta}
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
`,td=n.Ay.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,tu={flat:ts,default:tl};(0,v.forwardRef)(({checked:e,className:t="",disabled:r=!1,label:o="",onChange:n,style:i={},variant:a="default",...l},s)=>{let d=tu[a];return v.createElement(j,{$disabled:r,className:t,style:i},v.createElement(d,{$disabled:r,role:"presentation"},e&&v.createElement(td,{$disabled:r,variant:a})),v.createElement(H,{disabled:r,onChange:r?void 0:n,readOnly:r,type:"radio",checked:e,ref:s,...l}),o&&v.createElement(M,null,o))}).displayName="Radio";let tc="u">typeof window?v.useLayoutEffect:v.useEffect;function tf(e){let t=v.useRef(e);return tc(()=>{t.current=e}),v.useCallback((...e)=>(0,t.current)(...e),[])}function tp(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function th(e,t){return(0,v.useMemo)(()=>null==e&&null==t?null:r=>{tp(e,r),tp(t,r)},[e,t])}var tb=r(8477);let tg=!0,tm=!1,tv={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function tx(e){e.metaKey||e.altKey||e.ctrlKey||(tg=!0)}function ty(){tg=!1}function tA(){"hidden"===this.visibilityState&&tm&&(tg=!0)}function tw(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return tg||function(e){if("type"in e){let{type:t,tagName:r}=e;if("INPUT"===r&&tv[t]&&!e.readOnly||"TEXTAREA"===r&&!e.readOnly)return!0}return"isContentEditable"in e&&!!e.isContentEditable}(t)}function t$(){tm=!0,window.clearTimeout(o),o=window.setTimeout(()=>{tm=!1},100)}function tk(e,t){if(void 0!==t&&"changedTouches"in e){for(let r=0;r<e.changedTouches.length;r+=1){let o=e.changedTouches[r];if(o.identifier===t)return{x:o.clientX,y:o.clientY}}return!1}return"clientX"in e&&{x:e.clientX,y:e.clientY}}function tE(e){return e&&e.ownerDocument||document}let tC=n.Ay.div`
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

  ${({orientation:e,size:t})=>"vertical"===e?(0,n.AH)`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:e})=>e?"41px":"39px"};
          }
        `:(0,n.AH)`
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
`,tB=()=>(0,n.AH)`
  position: absolute;
  ${({orientation:e})=>"vertical"===e?(0,n.AH)`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:(0,n.AH)`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,tL=(0,n.Ay)(N)`
  ${tB()}
`,tO=(0,n.Ay)(N)`
  ${tB()}

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
`,tT=n.Ay.span`
  position: relative;
  ${({orientation:e})=>"vertical"===e?(0,n.AH)`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:(0,n.AH)`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>"flat"===e?(0,n.AH)`
          ${c()}
          outline: 2px solid ${({theme:e})=>e.flatDark};
          background: ${({theme:e})=>e.flatLight};
        `:(0,n.AH)`
          ${d()}
          ${p()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&u({mainColor:t.material,secondaryColor:t.borderLightest})}
`,tD=n.Ay.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>"vertical"===e?(0,n.AH)`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${6}px;
          border-bottom: 2px solid ${({theme:e})=>e.materialText};
        `:(0,n.AH)`
          bottom: ${-6}px;
          height: ${6}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:e})=>e.materialText};
          border-right: 1px solid ${({theme:e})=>e.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&(0,n.AH)`
      ${s()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,tI=n.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>"vertical"===e?(0,n.AH)`
          transform: translate(${8}px, ${7}px);
        `:(0,n.AH)`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`;(0,v.forwardRef)(({defaultValue:e,disabled:t=!1,marks:r=!1,max:o=100,min:n=0,name:i,onChange:a,onChangeCommitted:l,onMouseDown:s,orientation:d="horizontal",size:u="100%",step:c=1,value:f,variant:p="default",...h},b)=>{let g="flat"===p?tO:tL,m="vertical"===d,[x=n,y]=R({defaultValue:e,onChange:null!=a?a:l,value:f}),{isFocusVisible:A,onBlurVisible:w,ref:C}={isFocusVisible:tw,onBlurVisible:t$,ref:(0,v.useCallback)(e=>{var t;let r=(0,tb.findDOMNode)(e);null!=r&&((t=r.ownerDocument).addEventListener("keydown",tx,!0),t.addEventListener("mousedown",ty,!0),t.addEventListener("pointerdown",ty,!0),t.addEventListener("touchstart",ty,!0),t.addEventListener("visibilitychange",tA,!0))},[])},[B,L]=(0,v.useState)(!1),O=(0,v.useRef)(),T=(0,v.useRef)(null),D=th(C,O),I=th(b,D),z=tf(e=>{A(e)&&L(!0)}),S=tf(()=>{!1!==B&&(L(!1),w())}),P=(0,v.useRef)(),H=(0,v.useMemo)(()=>!0===r&&Number.isFinite(c)?[...Array(Math.round((o-n)/c)+1)].map((e,t)=>({label:void 0,value:n+c*t})):Array.isArray(r)?r:[],[r,o,n,c]),j=tf(e=>{let t=(o-n)/10,r=H.map(e=>e.value),i=r.indexOf(x),s=0;switch(e.key){case"Home":s=n;break;case"End":s=o;break;case"PageUp":c&&(s=x+t);break;case"PageDown":c&&(s=x-t);break;case"ArrowRight":case"ArrowUp":s=c?x+c:r[i+1]||r[r.length-1];break;case"ArrowLeft":case"ArrowDown":s=c?x-c:r[i-1]||r[0];break;default:return}e.preventDefault(),c&&(s=k(s,c,n)),y(s=$(s,n,o)),L(!0),null==a||a(s),null==l||l(s)}),M=(0,v.useCallback)(e=>{let t;if(!O.current)return 0;let r=O.current.getBoundingClientRect();if(t=(o-n)*(m?(r.bottom-e.y)/r.height:(e.x-r.left)/r.width)+n,c)t=k(t,c,n);else{let e=H.map(e=>e.value),r=function(e,t){var r;let{index:o}=null!=(r=e.reduce((e,r,o)=>{let n=Math.abs(t-r);return null===e||n<e.distance||n===e.distance?{distance:n,index:o}:e},null))?r:{};return null!=o?o:-1}(e,t);t=e[r]}return $(t,n,o)},[H,o,n,c,m]),N=tf(e=>{var t;let r=tk(e,P.current);if(!r)return;let o=M(r);null==(t=T.current)||t.focus(),y(o),L(!0),null==a||a(o)}),U=tf(e=>{let t=tk(e,P.current);if(!t)return;let r=M(t);null==l||l(r),P.current=void 0;let o=tE(O.current);o.removeEventListener("mousemove",N),o.removeEventListener("mouseup",U),o.removeEventListener("touchmove",N),o.removeEventListener("touchend",U)}),Q=tf(e=>{var t;null==s||s(e),e.preventDefault(),null==(t=T.current)||t.focus(),L(!0);let r=tk(e,P.current);if(r){let e=M(r);y(e),null==a||a(e)}let o=tE(O.current);o.addEventListener("mousemove",N),o.addEventListener("mouseup",U)}),F=tf(e=>{var t;e.preventDefault();let r=e.changedTouches[0];null!=r&&(P.current=r.identifier),null==(t=T.current)||t.focus(),L(!0);let o=tk(e,P.current);if(o){let e=M(o);y(e),null==a||a(e)}let n=tE(O.current);n.addEventListener("touchmove",N),n.addEventListener("touchend",U)});return(0,v.useEffect)(()=>{let{current:e}=O;null==e||e.addEventListener("touchstart",F);let t=tE(e);return()=>{null==e||e.removeEventListener("touchstart",F),t.removeEventListener("mousemove",N),t.removeEventListener("mouseup",U),t.removeEventListener("touchmove",N),t.removeEventListener("touchend",U)}},[U,N,F]),v.createElement(tC,{$disabled:t,hasMarks:!!H.length,isFocused:B,onMouseDown:Q,orientation:d,ref:I,size:E(u),...h},v.createElement("input",{disabled:t,name:i,type:"hidden",value:null!=x?x:0}),H&&H.map(e=>v.createElement(tD,{$disabled:t,"data-testid":"tick",key:e.value/(o-n)*100,orientation:d,style:{[m?"bottom":"left"]:`${(e.value-n)/(o-n)*100}%`}},e.label&&v.createElement(tI,{"aria-hidden":!0,"data-testid":"mark",orientation:d},e.label))),v.createElement(g,{orientation:d,variant:p}),v.createElement(tT,{$disabled:t,"aria-disabled":!!t||void 0,"aria-orientation":d,"aria-valuemax":o,"aria-valuemin":n,"aria-valuenow":x,onBlur:S,onFocus:z,onKeyDown:j,orientation:d,ref:T,role:"slider",style:{[m?"bottom":"left"]:`${(m?-100:0)+100*(x-n)/(o-n)}%`},tabIndex:t?void 0:0,variant:p}))}).displayName="Slider";let tR=n.Ay.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${l};
  overflow-y: auto;
`;(0,v.forwardRef)(function({children:e,...t},r){return v.createElement(tR,{ref:r,...t},e)}).displayName="TableBody";let tz=n.Ay.td`
  padding: 0 8px;
`;(0,v.forwardRef)(function({children:e,...t},r){return v.createElement(tz,{ref:r,...t},e)}).displayName="TableDataCell";let tS=n.Ay.thead`
  display: table-header-group;
`;(0,v.forwardRef)(function({children:e,...t},r){return v.createElement(tS,{ref:r,...t},e)}).displayName="TableHead";let tP=n.Ay.th`
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
    ${p()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&(0,n.AH)`
      &:active {
        &:before {
          ${p({invert:!0,style:"window"})}
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
`;(0,v.forwardRef)(function({disabled:e=!1,children:t,onClick:r,onTouchStart:o=w,sort:n,...i},a){return v.createElement(tP,{$disabled:e,"aria-disabled":e,"aria-sort":"asc"===n?"ascending":"desc"===n?"descending":void 0,onClick:e?void 0:r,onTouchStart:e?void 0:o,ref:a,...i},v.createElement("div",null,t))}).displayName="TableHeadCell";let tH=n.Ay.tr`
  color: inherit;
  display: table-row;
  height: calc(${O.md} - 2px);
  line-height: calc(${O.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`;(0,v.forwardRef)(function({children:e,...t},r){return v.createElement(tH,{ref:r,...t},e)}).displayName="TableRow";let tj=n.Ay.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,tM=(0,n.Ay)(N)`
  &:before {
    box-shadow: none;
  }
`;(0,v.forwardRef)(({children:e,...t},r)=>v.createElement(tM,null,v.createElement(tj,{ref:r,...t},e))).displayName="Table";let tN=n.Ay.button`
  ${d()}
  ${p()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${O.md};
  line-height: ${O.md};
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
    ${h}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${O.md} + 4px);
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
`;(0,v.forwardRef)(({value:e,onClick:t,selected:r=!1,children:o,...n},i)=>v.createElement(tN,{"aria-selected":r,selected:r,onClick:r=>null==t?void 0:t(e,r),ref:i,role:"tab",...n},o)).displayName="Tab";let tU=n.Ay.div`
  ${d()}
  ${p()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`;(0,v.forwardRef)(({children:e,...t},r)=>v.createElement(tU,{ref:r,...t},e)).displayName="TabBody";let tQ=n.Ay.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,tF=n.Ay.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;(0,v.forwardRef)(({value:e,onChange:t=w,children:r,rows:o=1,...n},i)=>{let a=(0,v.useMemo)(()=>{var n;let i=(function(e,t){let r=[];for(let o=t;o>0;o-=1)r.push(e.splice(0,Math.ceil(e.length/o)));return r})(null!=(n=v.Children.map(r,r=>{if(!v.isValidElement(r))return null;let o={selected:r.props.value===e,onClick:t};return v.cloneElement(r,o)}))?n:[],o).map((e,t)=>({key:t,tabs:e})),a=i.findIndex(e=>e.tabs.some(e=>e.props.selected));return i.push(i.splice(a,1)[0]),i},[r,t,o,e]);return v.createElement(tQ,{...n,isMultiRow:o>1,role:"tablist",ref:i},a.map(e=>v.createElement(tF,{key:e.key},e.tabs)))}).displayName="Tabs";let t_=["blur","focus"],tG=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function tW(e){return"nativeEvent"in e&&t_.includes(e.type)}function tV(e){return"nativeEvent"in e&&tG.includes(e.type)}let tq={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},tX=n.Ay.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${a};
  text-align: center;
  font-size: 1rem;
  ${e=>tq[e.position]}
`,tK=n.Ay.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;(0,v.forwardRef)(({className:e,children:t,disableFocusListener:r=!1,disableMouseListener:o=!1,enterDelay:n=1e3,leaveDelay:i=0,onBlur:a,onClose:l,onFocus:s,onMouseEnter:d,onMouseLeave:u,onOpen:c,style:f,text:p,position:h="top",...b},g)=>{let[m,x]=(0,v.useState)(!1),[y,A]=(0,v.useState)(),[w,$]=(0,v.useState)(),k=!r,E=!o,C=e=>{e.persist(),tW(e)?null==s||s(e):tV(e)&&(null==d||d(e)),window.clearTimeout(y),window.clearTimeout(w),A(window.setTimeout(()=>{x(!0),null==c||c(e)},n))},B=e=>{e.persist(),tW(e)?null==a||a(e):tV(e)&&(null==u||u(e)),window.clearTimeout(y),window.clearTimeout(w),$(window.setTimeout(()=>{x(!1),null==l||l(e)},i))},L=k?B:void 0,O=k?C:void 0,T=E?C:void 0,D=E?B:void 0;return v.createElement(tK,{"data-testid":"tooltip-wrapper",onBlur:L,onFocus:O,onMouseEnter:T,onMouseLeave:D,tabIndex:k?0:void 0},v.createElement(tX,{className:e,"data-testid":"tooltip",position:h,ref:g,show:m,style:f,...b},p),t)}).displayName="Tooltip";let tZ=(0,n.Ay)(M)`
  white-space: nowrap;
`,tY=(0,n.AH)`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":(0,n.AH)`
          cursor: pointer;

          :focus {
            ${tZ} {
              background: ${({theme:e})=>e.hoverBackground};
              color: ${({theme:e})=>e.materialTextInvert};
              outline: 2px dotted ${({theme:e})=>e.focusSecondary};
            }
          }
        `}
`,tJ=n.Ay.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&(0,n.AH)`
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
`,t0=n.Ay.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?(0,n.AH)`
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
        `:(0,n.AH)`
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
`,t1=n.Ay.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,t2=n.Ay.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${tY};

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
`,t5=(0,n.Ay)(j)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${tY};
`,t8=n.Ay.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function t6(e,t){return e.includes(t)?e.filter(e=>e!==t):[...e,t]}function t3(e){e.preventDefault()}function t4({className:e,disabled:t,expanded:r,innerRef:o,level:n,select:i,selected:a,style:l,tree:s=[]}){let d=0===n,u=(0,v.useCallback)(o=>{var s,u;let c=!!(o.items&&o.items.length>0),f=r.includes(o.id),p=null!=(s=t||o.disabled)&&s,h=p?t3:e=>i(e,o),b=p?t3:e=>i(e,o),g=a===o.id,m=v.createElement(t8,{"aria-hidden":!0},o.icon);return v.createElement(t0,{key:o.label,isRootLevel:d,role:"treeitem","aria-expanded":f,"aria-selected":g,hasItems:c},c?v.createElement(t1,{open:f},v.createElement(t2,{onClick:h,$disabled:p},v.createElement(t5,{$disabled:p},m,v.createElement(tZ,null,o.label))),f&&v.createElement(t4,{className:e,disabled:p,expanded:r,level:n+1,select:i,selected:a,style:l,tree:null!=(u=o.items)?u:[]})):v.createElement(t5,{as:"button",$disabled:p,onClick:b},m,v.createElement(tZ,null,o.label)))},[e,t,r,d,n,i,a,l]);return v.createElement(tJ,{className:d?e:void 0,style:d?l:void 0,ref:d?o:void 0,role:d?"tree":"group",isRootLevel:d},s.map(u))}(0,v.forwardRef)(function({className:e,defaultExpanded:t=[],defaultSelected:r,disabled:o=!1,expanded:n,onNodeSelect:i,onNodeToggle:a,selected:l,style:s,tree:d=[]},u){let[c,f]=R({defaultValue:t,onChange:a,onChangePropName:"onNodeToggle",value:n,valuePropName:"expanded"}),[p,h]=R({defaultValue:r,onChange:i,onChangePropName:"onNodeSelect",value:l,valuePropName:"selected"}),b=(0,v.useCallback)((e,t)=>{a&&a(e,t6(c,t)),f(e=>t6(e,t))},[c,a,f]),g=(0,v.useCallback)((e,t)=>{h(t),i&&i(e,t)},[i,h]),m=(0,v.useCallback)((e,t)=>{e.preventDefault(),g(e,t.id),t.items&&t.items.length&&b(e,t.id)},[g,b]);return v.createElement(t4,{className:e,disabled:o,expanded:c,level:0,innerRef:u,select:m,selected:p,style:s,tree:d})}).displayName="TreeView"},6918:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var o=r(7688),n=r(6296);function i(e){var t,r=e.config,i=e.src,a=e.width,l=e.quality;if(i.startsWith("/")&&i.includes("?")&&(null==(t=r.localPatterns)?void 0:t.length)===1&&"**"===r.localPatterns[0].pathname&&""===r.localPatterns[0].search)throw Object.defineProperty(Error('Image with src "'.concat(i,'" is using a query string which is not configured in images.localPatterns.')+"\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns"),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});var s=(0,o.findClosestQuality)(l,r),d=(0,n.getDeploymentId)();return"".concat(r.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(a,"&q=").concat(s).concat(i.startsWith("/")&&d?"&dpl=".concat(d):"")}i.__next_img_default=!0;var a=i},7328:(e,t,r)=>{e.exports=r(571)},7454:(e,t,r)=>{"use strict";var o=r(2983),n=r(5236),i=r(7327),a=r(3095),l=["src","srcSet","sizes","height","width","decoding","className","style","fetchPriority","placeholder","loading","unoptimized","fill","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","sizesInput","onLoad","onError"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return B}});var u=r(4252),c=r(8365),f=r(7876),p=c._(r(4232)),h=u._(r(8477)),b=u._(r(571)),g=r(6302),m=r(6335),v=r(7297);r(5360);var x=r(1128),y=u._(r(6918)),A=r(5237),w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function $(e,t,r,o,n,i,a){var l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null!=r&&r.current){var i=new Event("load");Object.defineProperty(i,"target",{writable:!1,value:e});var a=!1,l=!1;r.current(d(d({},i),{},{nativeEvent:i,currentTarget:e,target:e,isDefaultPrevented:function(){return a},isPropagationStopped:function(){return l},persist:function(){},preventDefault:function(){a=!0,i.preventDefault()},stopPropagation:function(){l=!0,i.stopPropagation()}}))}null!=o&&o.current&&o.current(e)}}))}function k(e){return p.use?{fetchPriority:e}:{fetchpriority:e}}var E=(0,p.forwardRef)(function(e,t){var r=e.src,o=e.srcSet,n=e.sizes,a=e.height,s=e.width,u=e.decoding,c=e.className,h=e.style,b=e.fetchPriority,g=e.placeholder,m=e.loading,v=e.unoptimized,x=e.fill,y=e.onLoadRef,w=e.onLoadingCompleteRef,E=e.setBlurComplete,C=e.setShowAltText,B=e.sizesInput,L=(e.onLoad,e.onError),O=i(e,l),T=(0,p.useCallback)(function(e){e&&(L&&(e.src=e.src),e.complete&&$(e,g,y,w,E,v,B))},[r,g,y,w,E,L,v,B]),D=(0,A.useMergedRef)(t,T);return(0,f.jsx)("img",d(d(d({},O),k(b)),{},{loading:m,width:s,height:a,decoding:u,"data-nimg":x?"fill":"1",className:c,style:h,sizes:n,srcSet:o,src:r,ref:D,onLoad:function(e){$(e.currentTarget,g,y,w,E,v,B)},onError:function(e){C(!0),"empty"!==g&&E(!0),L&&L(e)}}))});function C(e){var t=e.isAppRouter,r=e.imgAttributes,o=d({as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy},k(r.fetchPriority));return t&&h.default.preload?(h.default.preload(r.src,o),null):(0,f.jsx)(b.default,{children:(0,f.jsx)("link",d({rel:"preload",href:r.srcSet?void 0:r.src},o),"__nimg-"+r.src+r.srcSet+r.sizes)})}var B=(0,p.forwardRef)(function(e,t){var r=(0,p.useContext)(x.RouterContext),i=(0,p.useContext)(v.ImageConfigContext),a=(0,p.useMemo)(function(){var e,t=w||i||m.imageConfigDefault,r=[].concat(n(t.deviceSizes),n(t.imageSizes)).sort(function(e,t){return e-t}),o=t.deviceSizes.sort(function(e,t){return e-t}),a=null==(e=t.qualities)?void 0:e.sort(function(e,t){return e-t});return d(d({},t),{},{allSizes:r,deviceSizes:o,qualities:a,localPatterns:t.localPatterns})},[i]),l=e.onLoad,s=e.onLoadingComplete,u=(0,p.useRef)(l);(0,p.useEffect)(function(){u.current=l},[l]);var c=(0,p.useRef)(s);(0,p.useEffect)(function(){c.current=s},[s]);var h=o((0,p.useState)(!1),2),b=h[0],A=h[1],$=o((0,p.useState)(!1),2),k=$[0],B=$[1],L=(0,g.getImgProps)(e,{defaultLoader:y.default,imgConf:a,blurComplete:b,showAltText:k}),O=L.props,T=L.meta;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(E,d(d({},O),{},{unoptimized:T.unoptimized,placeholder:T.placeholder,fill:T.fill,onLoadRef:u,onLoadingCompleteRef:c,setBlurComplete:A,setShowAltText:B,sizesInput:e.sizes,ref:t})),T.preload?(0,f.jsx)(C,{isAppRouter:!r,imgAttributes:O}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7688:(e,t)=>{"use strict";function r(e,t){var r,o=e||75;return null!=t&&null!=(r=t.qualities)&&r.length?t.qualities.reduce(function(e,t){return Math.abs(t-o)<Math.abs(e-o)?t:e},0):o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"findClosestQuality",{enumerable:!0,get:function(){return r}})},8220:e=>{var t={675:function(e,t){"use strict";t.byteLength=function(e){var t=s(e),r=t[0],o=t[1];return(r+o)*3/4-o},t.toByteArray=function(e){var t,r,i=s(e),a=i[0],l=i[1],d=new n((a+l)*3/4-l),u=0,c=l>0?a-4:a;for(r=0;r<c;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],d[u++]=t>>16&255,d[u++]=t>>8&255,d[u++]=255&t;return 2===l&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,d[u++]=255&t),1===l&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,d[u++]=t>>8&255,d[u++]=255&t),d},t.fromByteArray=function(e){for(var t,o=e.length,n=o%3,i=[],a=0,l=o-n;a<l;a+=16383)i.push(function(e,t,o){for(var n,i=[],a=t;a<o;a+=3)n=(e[a]<<16&0xff0000)+(e[a+1]<<8&65280)+(255&e[a+2]),i.push(r[n>>18&63]+r[n>>12&63]+r[n>>6&63]+r[63&n]);return i.join("")}(e,a,a+16383>l?l:a+16383));return 1===n?i.push(r[(t=e[o-1])>>2]+r[t<<4&63]+"=="):2===n&&i.push(r[(t=(e[o-2]<<8)+e[o-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),i.join("")};for(var r=[],o=[],n="u">typeof Uint8Array?Uint8Array:Array,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,l=i.length;a<l;++a)r[a]=i[a],o[i.charCodeAt(a)]=a;function s(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var o=r===t?0:4-r%4;return[r,o]}o[45]=62,o[95]=63},72:function(e,t,r){"use strict";var o=r(675),n=r(783),i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return s(e,t,r)}function s(e,t,r){if("string"==typeof e){var o=e,n=t;if(("string"!=typeof n||""===n)&&(n="utf8"),!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);var i=0|p(o,n),s=a(i),d=s.write(o,n);return d!==i&&(s=s.slice(0,d)),s}if(ArrayBuffer.isView(e))return c(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(O(e,ArrayBuffer)||e&&O(e.buffer,ArrayBuffer)||"u">typeof SharedArrayBuffer&&(O(e,SharedArrayBuffer)||e&&O(e.buffer,SharedArrayBuffer)))return function(e,t,r){var o;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(o=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),l.prototype),o}(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var u=e.valueOf&&e.valueOf();if(null!=u&&u!==e)return l.from(u,t,r);var h=function(e){if(l.isBuffer(e)){var t=0|f(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?a(0):c(e):"Buffer"===e.type&&Array.isArray(e.data)?c(e.data):void 0}(e);if(h)return h;if("u">typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function d(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return d(e),a(e<0?0:0|f(e))}function c(e){for(var t=e.length<0?0:0|f(e.length),r=a(t),o=0;o<t;o+=1)r[o]=255&e[o];return r}t.Buffer=l,t.SlowBuffer=function(e){return+e!=e&&(e=0),l.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=0x7fffffff,l.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),!l.TYPED_ARRAY_SUPPORT&&"u">typeof console&&"function"==typeof console.error&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return s(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return(d(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},l.allocUnsafe=function(e){return u(e)},l.allocUnsafeSlow=function(e){return u(e)};function f(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function p(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||O(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,o=arguments.length>2&&!0===arguments[2];if(!o&&0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return E(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return B(e).length;default:if(n)return o?-1:E(e).length;t=(""+t).toLowerCase(),n=!0}}function h(e,t,r){var n,i,a,l=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var o=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>o)&&(r=o);for(var n="",i=t;i<r;++i)n+=T[e[i]];return n}(this,t,r);case"utf8":case"utf-8":return v(this,t,r);case"ascii":return function(e,t,r){var o="";r=Math.min(e.length,r);for(var n=t;n<r;++n)o+=String.fromCharCode(127&e[n]);return o}(this,t,r);case"latin1":case"binary":return function(e,t,r){var o="";r=Math.min(e.length,r);for(var n=t;n<r;++n)o+=String.fromCharCode(e[n]);return o}(this,t,r);case"base64":return n=this,i=t,a=r,0===i&&a===n.length?o.fromByteArray(n):o.fromByteArray(n.slice(i,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var o=e.slice(t,r),n="",i=0;i<o.length;i+=2)n+=String.fromCharCode(o[i]+256*o[i+1]);return n}(this,t,r);default:if(l)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),l=!0}}function b(e,t,r){var o=e[t];e[t]=e[r],e[r]=o}function g(e,t,r,o,n){var i;if(0===e.length)return -1;if("string"==typeof r?(o=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(i=r*=1)!=i&&(r=n?0:e.length-1),r<0&&(r=e.length+r),r>=e.length)if(n)return -1;else r=e.length-1;else if(r<0)if(!n)return -1;else r=0;if("string"==typeof t&&(t=l.from(t,o)),l.isBuffer(t))return 0===t.length?-1:m(e,t,r,o,n);if("number"==typeof t){if(t&=255,"function"==typeof Uint8Array.prototype.indexOf)if(n)return Uint8Array.prototype.indexOf.call(e,t,r);else return Uint8Array.prototype.lastIndexOf.call(e,t,r);return m(e,[t],r,o,n)}throw TypeError("val must be string, number or Buffer")}function m(e,t,r,o,n){var i,a=1,l=e.length,s=t.length;if(void 0!==o&&("ucs2"===(o=String(o).toLowerCase())||"ucs-2"===o||"utf16le"===o||"utf-16le"===o)){if(e.length<2||t.length<2)return -1;a=2,l/=2,s/=2,r/=2}function d(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(n){var u=-1;for(i=r;i<l;i++)if(d(e,i)===d(t,-1===u?0:i-u)){if(-1===u&&(u=i),i-u+1===s)return u*a}else -1!==u&&(i-=i-u),u=-1}else for(r+s>l&&(r=l-s),i=r;i>=0;i--){for(var c=!0,f=0;f<s;f++)if(d(e,i+f)!==d(t,f)){c=!1;break}if(c)return i}return -1}l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(O(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),O(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,o=t.length,n=0,i=Math.min(r,o);n<i;++n)if(e[n]!==t[n]){r=e[n],o=t[n];break}return r<o?-1:+(o<r)},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,o=l.allocUnsafe(t),n=0;for(r=0;r<e.length;++r){var i=e[r];if(O(i,Uint8Array)&&(i=l.from(i)),!l.isBuffer(i))throw TypeError('"list" argument must be an Array of Buffers');i.copy(o,n),n+=i.length}return o},l.byteLength=p,l.prototype._isBuffer=!0,l.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)b(this,t,t+1);return this},l.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},l.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},l.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?v(this,0,e):h.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},i&&(l.prototype[i]=l.prototype.inspect),l.prototype.compare=function(e,t,r,o,n){if(O(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===o&&(o=0),void 0===n&&(n=this.length),t<0||r>e.length||o<0||n>this.length)throw RangeError("out of range index");if(o>=n&&t>=r)return 0;if(o>=n)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,o>>>=0,n>>>=0,this===e)return 0;for(var i=n-o,a=r-t,s=Math.min(i,a),d=this.slice(o,n),u=e.slice(t,r),c=0;c<s;++c)if(d[c]!==u[c]){i=d[c],a=u[c];break}return i<a?-1:+(a<i)},l.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)};function v(e,t,r){r=Math.min(e.length,r);for(var o=[],n=t;n<r;){var i,a,l,s,d=e[n],u=null,c=d>239?4:d>223?3:d>191?2:1;if(n+c<=r)switch(c){case 1:d<128&&(u=d);break;case 2:(192&(i=e[n+1]))==128&&(s=(31&d)<<6|63&i)>127&&(u=s);break;case 3:i=e[n+1],a=e[n+2],(192&i)==128&&(192&a)==128&&(s=(15&d)<<12|(63&i)<<6|63&a)>2047&&(s<55296||s>57343)&&(u=s);break;case 4:i=e[n+1],a=e[n+2],l=e[n+3],(192&i)==128&&(192&a)==128&&(192&l)==128&&(s=(15&d)<<18|(63&i)<<12|(63&a)<<6|63&l)>65535&&s<1114112&&(u=s)}null===u?(u=65533,c=1):u>65535&&(u-=65536,o.push(u>>>10&1023|55296),u=56320|1023&u),o.push(u),n+=c}var f=o,p=f.length;if(p<=4096)return String.fromCharCode.apply(String,f);for(var h="",b=0;b<p;)h+=String.fromCharCode.apply(String,f.slice(b,b+=4096));return h}function x(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function y(e,t,r,o,n,i){if(!l.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<i)throw RangeError('"value" argument is out of bounds');if(r+o>e.length)throw RangeError("Index out of range")}function A(e,t,r,o,n,i){if(r+o>e.length||r<0)throw RangeError("Index out of range")}function w(e,t,r,o,i){return t*=1,r>>>=0,i||A(e,t,r,4,34028234663852886e22,-34028234663852886e22),n.write(e,t,r,o,23,4),r+4}function $(e,t,r,o,i){return t*=1,r>>>=0,i||A(e,t,r,8,17976931348623157e292,-17976931348623157e292),n.write(e,t,r,o,52,8),r+8}l.prototype.write=function(e,t,r,o){if(void 0===t)o="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)o=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===o&&(o="utf8")):(o=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var n,i,a,l,s,d,u,c,f=this.length-t;if((void 0===r||r>f)&&(r=f),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");o||(o="utf8");for(var p=!1;;)switch(o){case"hex":return function(e,t,r,o){r=Number(r)||0;var n=e.length-r;o?(o=Number(o))>n&&(o=n):o=n;var i=t.length;o>i/2&&(o=i/2);for(var a=0;a<o;++a){var l,s=parseInt(t.substr(2*a,2),16);if((l=s)!=l)break;e[r+a]=s}return a}(this,e,t,r);case"utf8":case"utf-8":return n=t,i=r,L(E(e,this.length-n),this,n,i);case"ascii":return a=t,l=r,L(C(e),this,a,l);case"latin1":case"binary":return function(e,t,r,o){return L(C(t),e,r,o)}(this,e,t,r);case"base64":return s=t,d=r,L(B(e),this,s,d);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,c=r,L(function(e,t){for(var r,o,n=[],i=0;i<e.length&&!((t-=2)<0);++i)o=(r=e.charCodeAt(i))>>8,n.push(r%256),n.push(o);return n}(e,this.length-u),this,u,c);default:if(p)throw TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),p=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var o=this.subarray(e,t);return Object.setPrototypeOf(o,l.prototype),o},l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var o=this[e],n=1,i=0;++i<t&&(n*=256);)o+=this[e+i]*n;return o},l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var o=this[e+--t],n=1;t>0&&(n*=256);)o+=this[e+--t]*n;return o},l.prototype.readUInt8=function(e,t){return e>>>=0,t||x(e,1,this.length),this[e]},l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||x(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||x(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||x(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||x(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var o=this[e],n=1,i=0;++i<t&&(n*=256);)o+=this[e+i]*n;return o>=(n*=128)&&(o-=Math.pow(2,8*t)),o},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);for(var o=t,n=1,i=this[e+--o];o>0&&(n*=256);)i+=this[e+--o]*n;return i>=(n*=128)&&(i-=Math.pow(2,8*t)),i},l.prototype.readInt8=function(e,t){return(e>>>=0,t||x(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||x(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||x(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||x(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||x(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readFloatLE=function(e,t){return e>>>=0,t||x(e,4,this.length),n.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||x(e,4,this.length),n.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||x(e,8,this.length),n.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||x(e,8,this.length),n.read(this,e,!1,52,8)},l.prototype.writeUIntLE=function(e,t,r,o){if(e*=1,t>>>=0,r>>>=0,!o){var n=Math.pow(2,8*r)-1;y(this,e,t,r,n,0)}var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},l.prototype.writeUIntBE=function(e,t,r,o){if(e*=1,t>>>=0,r>>>=0,!o){var n=Math.pow(2,8*r)-1;y(this,e,t,r,n,0)}var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},l.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||y(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||y(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||y(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||y(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||y(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeIntLE=function(e,t,r,o){if(e*=1,t>>>=0,!o){var n=Math.pow(2,8*r-1);y(this,e,t,r,n-1,-n)}var i=0,a=1,l=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===l&&0!==this[t+i-1]&&(l=1),this[t+i]=(e/a|0)-l&255;return t+r},l.prototype.writeIntBE=function(e,t,r,o){if(e*=1,t>>>=0,!o){var n=Math.pow(2,8*r-1);y(this,e,t,r,n-1,-n)}var i=r-1,a=1,l=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===l&&0!==this[t+i+1]&&(l=1),this[t+i]=(e/a|0)-l&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||y(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||y(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||y(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||y(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||y(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeFloatLE=function(e,t,r){return w(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return w(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return $(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return $(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,o){if(!l.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),o||0===o||(o=this.length),t>=e.length&&(t=e.length),t||(t=0),o>0&&o<r&&(o=r),o===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(o<0)throw RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-t<o-r&&(o=e.length-t+r);var n=o-r;if(this===e&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(t,r,o);else if(this===e&&r<t&&t<o)for(var i=n-1;i>=0;--i)e[i+t]=this[i+r];else Uint8Array.prototype.set.call(e,this.subarray(r,o),t);return n},l.prototype.fill=function(e,t,r,o){if("string"==typeof e){if("string"==typeof t?(o=t,t=0,r=this.length):"string"==typeof r&&(o=r,r=this.length),void 0!==o&&"string"!=typeof o)throw TypeError("encoding must be a string");if("string"==typeof o&&!l.isEncoding(o))throw TypeError("Unknown encoding: "+o);if(1===e.length){var n,i=e.charCodeAt(0);("utf8"===o&&i<128||"latin1"===o)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(n=t;n<r;++n)this[n]=e;else{var a=l.isBuffer(e)?e:l.from(e,o),s=a.length;if(0===s)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(n=0;n<r-t;++n)this[n+t]=a[n%s]}return this};var k=/[^+/0-9A-Za-z-_]/g;function E(e,t){t=t||1/0;for(var r,o=e.length,n=null,i=[],a=0;a<o;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!n){if(r>56319||a+1===o){(t-=3)>-1&&i.push(239,191,189);continue}n=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),n=r;continue}r=(n-55296<<10|r-56320)+65536}else n&&(t-=3)>-1&&i.push(239,191,189);if(n=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function C(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}function B(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(k,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function L(e,t,r,o){for(var n=0;n<o&&!(n+r>=t.length)&&!(n>=e.length);++n)t[n+r]=e[n];return n}function O(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var T=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var o=16*r,n=0;n<16;++n)t[o+n]=e[r]+e[n];return t}()},783:function(e,t){t.read=function(e,t,r,o,n){var i,a,l=8*n-o-1,s=(1<<l)-1,d=s>>1,u=-7,c=r?n-1:0,f=r?-1:1,p=e[t+c];for(c+=f,i=p&(1<<-u)-1,p>>=-u,u+=l;u>0;i=256*i+e[t+c],c+=f,u-=8);for(a=i&(1<<-u)-1,i>>=-u,u+=o;u>0;a=256*a+e[t+c],c+=f,u-=8);if(0===i)i=1-d;else{if(i===s)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,o),i-=d}return(p?-1:1)*a*Math.pow(2,i-o)},t.write=function(e,t,r,o,n,i){var a,l,s,d=8*i-n-1,u=(1<<d)-1,c=u>>1,f=5960464477539062e-23*(23===n),p=o?0:i-1,h=o?1:-1,b=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(l=+!!isNaN(t),a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(s=Math.pow(2,-a))<1&&(a--,s*=2),a+c>=1?t+=f/s:t+=f*Math.pow(2,1-c),t*s>=2&&(a++,s/=2),a+c>=u?(l=0,a=u):a+c>=1?(l=(t*s-1)*Math.pow(2,n),a+=c):(l=t*Math.pow(2,c-1)*Math.pow(2,n),a=0));n>=8;e[r+p]=255&l,p+=h,l/=256,n-=8);for(a=a<<n|l,d+=n;d>0;e[r+p]=255&a,p+=h,a/=256,d-=8);e[r+p-h]|=128*b}}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,o),a=!1}finally{a&&delete r[e]}return i.exports}o.ab="//",e.exports=o(72)},9860:(e,t,r)=>{"use strict";function o(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r={};for(var o in e)if(({}).hasOwnProperty.call(e,o)){if(-1!==t.indexOf(o))continue;r[o]=e[o]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],-1===t.indexOf(r)&&({}).propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,{A:()=>o})}}]);