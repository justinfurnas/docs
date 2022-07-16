"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5260],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={title:"Intelligence artificielle",description:"Comment l'IA fonctionne dans nanos world",sidebar_position:6,tags:["scripting"],keywords:["scripting","AI"]},s=void 0,l={unversionedId:"core-concepts/scripting/artificial-intelligence",id:"version-latest/core-concepts/scripting/artificial-intelligence",title:"Intelligence artificielle",description:"Comment l'IA fonctionne dans nanos world",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/artificial-intelligence.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/artificial-intelligence",permalink:"/fr/docs/core-concepts/scripting/artificial-intelligence",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/artificial-intelligence.md",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",sidebarPosition:6,frontMatter:{title:"Intelligence artificielle",description:"Comment l'IA fonctionne dans nanos world",sidebar_position:6,tags:["scripting"],keywords:["scripting","AI"]},sidebar:"version-latest/main",previous:{title:"User Interface",permalink:"/fr/docs/core-concepts/scripting/user-interface"},next:{title:"Traces & Raycasting",permalink:"/fr/docs/core-concepts/scripting/traces-and-raycasting"}},p={},u=[{value:"Mesh de navigation",id:"mesh-de-navigation",level:2}],d={toc:u};function f(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Comment l'IA fonctionne dans nanos world"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udea7 Cette page est en cours de r\xe9daction.")),(0,o.kt)("p",null,"Every ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/character"},"Character")," spawned without a ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/classes/player"},"Player")," possessing it will automatically be possessed by an ",(0,o.kt)("strong",{parentName:"p"},"AI")," Controller. Cela signifie que vous pourrez utiliser les m\xe9thodes de Personnage telles que ",(0,o.kt)("inlineCode",{parentName:"p"},":MoveTo()")," et ",(0,o.kt)("inlineCode",{parentName:"p"},":LookAt()"),"."),(0,o.kt)("p",null,"In nanos world, AI as well as Physics are things distributed through Clients to be calculated and shared with the other Players ","(","please refer to ",(0,o.kt)("a",{parentName:"p",href:"/fr/docs/core-concepts/scripting/authority-concepts#network-authority"},"Network Authority"),")",", which means the ",(0,o.kt)("strong",{parentName:"p"},"AI")," will only work if there is a Player connected to the server."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Si vous utilisez la fonction ",(0,o.kt)("inlineCode",{parentName:"p"},":MoveTo()")," sur un PNJ et qu'aucun joueur n'est connect\xe9, le PNJ commencera \xe0 marcher quand un joueur rejoindra le serveur.")),(0,o.kt)("h2",{id:"mesh-de-navigation"},"Mesh de navigation"),(0,o.kt)("p",null,"Afin que les PNJs puissent trouver le chemin \xe0 parcourir, la map doit avoir un ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.26/en-US/Resources/ContentExamples/NavMesh/"},"NavMesh")," configur\xe9."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(46061).Z,width:"1086",height:"304"})))}f.isMDXComponent=!0},46061:function(e,t,n){t.Z=n.p+"assets/images/artificial-intelligence-927ddbb4394769581af3e3fd81c4c67d.jpg"}}]);