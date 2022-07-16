"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1300],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41e3:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={title:"Intelig\xeancia Artificial",description:"Como IA funciona no mundo do nanos",sidebar_position:6,tags:["script"],keywords:["script","AI"]},s=void 0,p={unversionedId:"core-concepts/scripting/artificial-intelligence",id:"core-concepts/scripting/artificial-intelligence",title:"Intelig\xeancia Artificial",description:"Como IA funciona no mundo do nanos",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/core-concepts/scripting/artificial-intelligence.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/artificial-intelligence",permalink:"/pt-BR/docs/next/core-concepts/scripting/artificial-intelligence",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/artificial-intelligence.md",tags:[{label:"script",permalink:"/pt-BR/docs/next/tags/script"}],version:"current",sidebarPosition:6,frontMatter:{title:"Intelig\xeancia Artificial",description:"Como IA funciona no mundo do nanos",sidebar_position:6,tags:["script"],keywords:["script","AI"]},sidebar:"main",previous:{title:"User Interface",permalink:"/pt-BR/docs/next/core-concepts/scripting/user-interface"},next:{title:"Tra\xe7os & Raycasting",permalink:"/pt-BR/docs/next/core-concepts/scripting/traces-and-raycasting"}},l={},u=[{value:"Navigation Mesh",id:"navigation-mesh",level:2}],d={toc:u};function f(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Como IA funciona no mundo do nanos"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udea7 Esta p\xe1gina est\xe1 em constru\xe7\xe3o.")),(0,i.kt)("p",null,"Every ",(0,i.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/character"},"Character")," spawned without a ",(0,i.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/player"},"Player")," possessing it will automatically be possessed by an ",(0,i.kt)("strong",{parentName:"p"},"AI")," Controller. O que significa que voc\xea pode usar m\xe9todos de personagem como ",(0,i.kt)("inlineCode",{parentName:"p"},":MoveTo()")," e ",(0,i.kt)("inlineCode",{parentName:"p"},":LookAt()"),"."),(0,i.kt)("p",null,"In nanos world, AI as well as Physics are things distributed through Clients to be calculated and shared with the other Players ","(","please refer to ",(0,i.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/core-concepts/scripting/authority-concepts#network-authority"},"Network Authority"),")",", which means the ",(0,i.kt)("strong",{parentName:"p"},"AI")," will only work if there is a Player connected to the server."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Se voc\xea inserir um NPC para ",(0,i.kt)("inlineCode",{parentName:"p"},":MoveTo()")," em algum lugar e n\xe3o h\xe1 jogador conectado, ele s\xf3 come\xe7ar\xe1 a andar quando um jogador entrar no servidor.")),(0,i.kt)("h2",{id:"navigation-mesh"},"Navigation Mesh"),(0,i.kt)("p",null,"Para conseguir NPCs para descobrir o caminho para andar, o mapa precisar\xe1 ter um ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.26/en-US/Resources/ContentExamples/NavMesh/"},"NavMesh")," configurado."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(46061).Z,width:"1086",height:"304"})))}f.isMDXComponent=!0},46061:function(e,t,n){t.Z=n.p+"assets/images/artificial-intelligence-927ddbb4394769581af3e3fd81c4c67d.jpg"}}]);