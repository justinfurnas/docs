"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3123],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34933:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=a(83117),n=a(80102),l=(a(67294),a(3905)),o=["components"],s={title:"Chat Colors",description:"Learn how to use and print colored messages to the built-in chat",tags:["tutorial-example"]},i=void 0,c={unversionedId:"getting-started/tutorials-and-examples/chat-colors",id:"version-latest/getting-started/tutorials-and-examples/chat-colors",title:"Chat Colors",description:"Learn how to use and print colored messages to the built-in chat",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/chat-colors.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/chat-colors",permalink:"/docs/getting-started/tutorials-and-examples/chat-colors",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/chat-colors.md",tags:[{label:"tutorial-example",permalink:"/docs/tags/tutorial-example"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1649243394,formattedLastUpdatedAt:"Apr 6, 2022",frontMatter:{title:"Chat Colors",description:"Learn how to use and print colored messages to the built-in chat",tags:["tutorial-example"]},sidebar:"version-latest/main",previous:{title:"Basic HUD (HTML)",permalink:"/docs/getting-started/tutorials-and-examples/basic-hud-html"},next:{title:"Doors",permalink:"/docs/getting-started/tutorials-and-examples/doors"}},p={},u=[{value:"Example",id:"example",level:2},{value:"All supported text styles/tags",id:"all-supported-text-stylestags",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(25712).Z,width:"314",height:"309"})),(0,l.kt)("p",null,"To stylize a text, just circumvent a piece of text with a style tag: ",(0,l.kt)("inlineCode",{parentName:"p"},"<TAG>my awesome text</>"),"."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Server.BroadcastChatMessage("Hello with Normal text message!")\nServer.BroadcastChatMessage("Hello with <cyan>Cyan</> text message!")\nServer.BroadcastChatMessage("Hello with <green>Green</> text message!")\nServer.BroadcastChatMessage("Hello with <blue>Blue</> text message!")\nServer.BroadcastChatMessage("Hello with <marengo>Marengo</> text message!")\nServer.BroadcastChatMessage("Hello with <yellow>Yellow</> text message!")\nServer.BroadcastChatMessage("Hello with <orange>Orange</> text message!")\nServer.BroadcastChatMessage("Hello with <red>Red</> text message!")\nServer.BroadcastChatMessage("Hello with <grey>Grey</> text message!")\nServer.BroadcastChatMessage("Hello with <bold>Bold</> text message!")\nServer.BroadcastChatMessage("Hello with <italic>Italic</> text message!")\n')),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"It is NOT possible to combine two or more styles together ","(","eg.: Bold + Red",")",".")),(0,l.kt)("h2",{id:"all-supported-text-stylestags"},"All supported text styles/tags"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<cyan>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<green>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<blue>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<purple>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<marengo>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<yellow>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<orange>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<red>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<grey>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<bold>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<italic>"))))}m.isMDXComponent=!0},25712:function(e,t,a){t.Z=a.p+"assets/images/chat-colors-1bb4fffde3890766721a885e90a326b9.jpg"}}]);