(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6],{7956:function(n,e,t){"use strict";var i=(0,t(9521).vJ)(["*,*::before,*::after{box-sizing:border-box;}#__next{height:100%;width:100%;}html{height:100%;margin:0;}body{margin:0;height:100%;color:white;font-family:'Roboto',sans-serif;background-image:black;*::-webkit-scrollbar{width:4px;}*::-webkit-scrollbar-thumb{background:white;transition:.5s;}}a{text-decoration:none;color:inherit;&:hover{text-decoration:none;}}img{max-width:100%;}pre{background:grey;padding:2px 4px;border-radius:10px;}code{background:grey;padding:0px 4px;border-radius:10px;white-space:pre-wrap;}"]);e.Z=i},316:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return L},default:function(){return q}});var i,o,a,r,c,d,s,l=t(4660),p=t(9008),u=t.n(p),m=t(9521),h=t(7294),f=t(6687),x=t(6486),g=t(1664),b=t.n(g),k=(0,t(605).Jq)({s:"577px",m:"769px",l:"993px",xl:"1401px"}),w=t(5893),j=m.ZP.div.withConfig({displayName:"File__Round",componentId:"sc-fma05d-0"})(["margin-right:4px;height:12px;width:12px;border-radius:50%;border:1px solid white;display:inline-block;background-color:",";"],function(n){return n.selected?"white":"transparent"}),_=m.ZP.div.withConfig({displayName:"File__FileTitle",componentId:"sc-fma05d-1"})(["margin-left:16px;font-weight:",";"," "],function(n){return n.selected?600:400},k.lessThan("m")(i||(i=(0,l.Z)(["\n    font-size: 22px;\n  "])))),v=function(n){var e=n.name,t=n.path,i=n.selected,o=n.updateSelected;return(0,w.jsxs)(_,{selected:i===t,onClick:function(){return o(t)},children:[(0,w.jsx)(j,{selected:i===t}),(0,w.jsx)(b(),{href:"/content/".concat(t),children:e})]})},y=m.ZP.div.withConfig({displayName:"Folder__Block",componentId:"sc-1b0px8i-0"})(["margin-left:16px;font-size:18px;"]),C=m.ZP.div.withConfig({displayName:"Folder__FolderTitle",componentId:"sc-1b0px8i-1"})(["cursor:pointer;font-size:18px;"," "],k.lessThan("m")(o||(o=(0,l.Z)(["\n    font-size: 22px;\n  "])))),Z=function(n){var e=n.name,t=n.children,i=n.isOpen,o=n.handleClick;return(0,w.jsxs)(y,{children:[(0,w.jsxs)(C,{onClick:function(n){return o(n,e)},children:[e," ",i?"-":"+"]}),i&&t]})},N=m.ZP.div.withConfig({displayName:"Tree__Arborescence",componentId:"sc-1jgaow7-0"})(["display:flex;align-self:start;flex-direction:column;overflow:auto;padding:16px;min-width:300px;max-height:500px;"," "],k.lessThan("m")(a||(a=(0,l.Z)(["\n    display: ",";\n  "])),function(n){return n.visible?"block":"none"})),P=function(n){var e=n.id,t=n.tree,i=n.back,o=n.updateBack,a=(0,h.useState)(e),r=a[0],c=a[1],d=(0,h.useState)([]),s=d[0],l=d[1],p=(0,h.useCallback)(function(n,e){l(function(n){return(0,x.includes)(n,e)?(0,x.filter)(n,function(n){return n!==e}):[].concat((0,f.Z)(n),[e])})},[l]),u=(0,h.useCallback)(function(n){c(n),o(!i)},[i,o,c]),m=(0,h.useCallback)(function(n,e){return"object"==typeof n?(0,w.jsx)(Z,{name:e,selected:r,isOpen:(0,x.includes)(s,e),handleClick:p,children:Object.keys(n).map(function(e){return m(n[e],e,r)})},e):(0,w.jsx)(v,{name:e,path:n,selected:r,updateSelected:u},e)},[r,s,p,u]);return(0,w.jsx)(N,{visible:i,children:Object.keys(t).map(function(n){return m(t[n],n)})})},z=(0,m.F4)(["0%{background-position:0% 100%;}50%{background-position:100% 0%;}100%{background-position:0% 100%;}"]),I=m.ZP.div.withConfig({displayName:"GradientBg",componentId:"sc-1qytzh1-0"})(["background:linear-gradient(20deg,#FBEEC1,#659DBD,#DAAD86,#8D8741);background-size:150% 150%;animation-name:",";animation-duration:40s;animation-timing-function:ease;animation-iteration-count:infinite;"],z),T=JSON.parse('{"basics":{"compilation.md":"basics-compilation","interpretation.md":"basics-interpretation","package.md":"basics-package","transpilation.md":"basics-transpilation"},"frontend":{"commun":{"web.md":"frontend-commun-web"},"javascript":{"ecmascript.md":"frontend-javascript-ecmascript","javascript.md":"frontend-javascript-javascript","moteurV8.md":"frontend-javascript-moteurV8","npm.md":"frontend-javascript-npm"},"react":{"react.md":"frontend-react-react"}},"projets":{"jeagdb.md":"projets-jeagdb"}}'),B=t(7956),S=t(9417),F=t(9603),D=m.ZP.div.withConfig({displayName:"MdVisualizer__Page",componentId:"sc-1hka3jl-0"})(["display:flex;border:1px solid #fff;padding:0px 8px;max-width:100%;height:80%;"," "],k.lessThan("m")(r||(r=(0,l.Z)(["\n    border: none;\n    padding: 0px 0px;\n    margin-top: 18px;\n    font-size: 16px;\n    display: ",";\n  "])),function(n){return n.visible?"block":"none"})),E=m.ZP.div.withConfig({displayName:"MdVisualizer__Title",componentId:"sc-1hka3jl-1"})(["position:absolute;top:0;right:0;border:1px solid #fff;border-top:none;border-right:none;padding:2px 16px;color:#fff;background:#659DBD;"," "],k.greaterThan("m")(c||(c=(0,l.Z)(["\n    font-size: 17px;\n  "])))),O=m.ZP.div.withConfig({displayName:"MdVisualizer__Content",componentId:"sc-1hka3jl-2"})(["padding:0px 8px;max-height:550px;overflow-y:scroll;"]),V=(0,m.ZP)(F.G).withConfig({displayName:"MdVisualizer__BackButton",componentId:"sc-1hka3jl-3"})(["position:absolute;top:8px;left:12px;padding:4px;cursor:pointer;color:white;width:26px;"," "],k.greaterThan("m")(d||(d=(0,l.Z)(["\n    display: none;\n  "])))),M=function(n){var e=n.html,t=n.title,i=n.back,o=n.updateBack;return(0,w.jsxs)(D,{visible:!i,children:[(0,w.jsx)(E,{children:t}),(0,w.jsx)(V,{icon:S.acZ,color:"white",onClick:function(){return o(!i)},fontSize:10}),(0,w.jsx)(O,{children:(0,w.jsx)("div",{dangerouslySetInnerHTML:{__html:e}})})]})},J=(0,m.ZP)(I).withConfig({displayName:"ContentLayout__Page",componentId:"sc-1t6gg0-0"})(["height:100%;max-width:100%;padding:24px 32px;"]),A=m.ZP.div.withConfig({displayName:"ContentLayout__Inline",componentId:"sc-1t6gg0-1"})(["display:flex;gap:16px;max-width:100%;"," "],k.lessThan("m")(s||(s=(0,l.Z)(["\n    justify-content: center;\n  "])))),G=function(n){var e=n.content,t=(0,h.useState)(!1),i=t[0],o=t[1];return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(B.Z,{}),(0,w.jsxs)(J,{children:[(0,w.jsxs)(u(),{children:[(0,w.jsx)("title",{children:e.title}),(0,w.jsx)("meta",{name:"description",content:"Jeagdb website"}),(0,w.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,w.jsx)("link",{rel:"icon",href:"/logo512.png"})]}),(0,w.jsxs)(A,{children:[(0,w.jsx)(P,{id:e.id,back:i,tree:T,updateBack:o}),(0,w.jsx)(M,{back:i,html:e.content,title:e.title,updateBack:o})]})]})]})};G.layout=G;var L=!0,q=function(n){var e=n.content;return(0,w.jsx)(G,{content:e})}},1509:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/[id]",function(){return t(316)}])}},function(n){n.O(0,[662,976,990,779,774,888,179],function(){return n(n.s=1509)}),_N_E=n.O()}]);