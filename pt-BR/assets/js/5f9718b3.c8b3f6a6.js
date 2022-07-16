"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8042],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},l),{},{components:n})):a.createElement(g,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Migrating from 1.0 to 1.3",description:"How to migrate your Packages and Asset Packs from Alpha 1.0 to 1.3 version",tags:["script","migration"]},p=void 0,c={unversionedId:"migrations/migrating-10-to-13",id:"migrations/migrating-10-to-13",title:"Migrating from 1.0 to 1.3",description:"How to migrate your Packages and Asset Packs from Alpha 1.0 to 1.3 version",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/migrations/migrating-10-to-13.md",sourceDirName:"migrations",slug:"/migrations/migrating-10-to-13",permalink:"/pt-BR/docs/next/migrations/migrating-10-to-13",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/migrations/migrating-10-to-13.md",tags:[{label:"script",permalink:"/pt-BR/docs/next/tags/script"},{label:"migration",permalink:"/pt-BR/docs/next/tags/migration"}],version:"current",frontMatter:{title:"Migrating from 1.0 to 1.3",description:"How to migrate your Packages and Asset Packs from Alpha 1.0 to 1.3 version",tags:["script","migration"]},sidebar:"main",previous:{title:"Vault",permalink:"/pt-BR/docs/next/vault-and-store/vault"},next:{title:"Migrating to Alpha 1.0",permalink:"/pt-BR/docs/next/migrations/migrating-to-alpha"}},l={},m=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"<code>TranslateTo()</code> and <code>RotateTo()</code>",id:"translateto-and-rotateto",level:2},{value:"Deprecation Notes",id:"deprecation-notes",level:2},{value:"<code>SetCameraLocation()</code> and <code>SetCameraRotation()</code>",id:"setcameralocation-and-setcamerarotation",level:2}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All changes from Alpha 1.0 until 1.2 did not have breaking changes, all changes were documented as deprecated and got warnings on the console if you are using it."),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Breaking Changes requires you to immediately fix your code, otherwise it won't work properly anymore.")),(0,o.kt)("h2",{id:"translateto-and-rotateto"},(0,o.kt)("inlineCode",{parentName:"h2"},"TranslateTo()")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"RotateTo()")),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"TranslateTo()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RotateTo()")," has new parameters, ",(0,o.kt)("strong",{parentName:"p"},"speed")," has been replaced by ",(0,o.kt)("strong",{parentName:"p"},"time")," and ",(0,o.kt)("strong",{parentName:"p"},"sweep")," has been removed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- Old\nActor:TranslateTo(location, speed, sweep)\nActor:RotateTo(rotation, speed)\n\n-- New\nActor:TranslateTo(location, time, exp)\nActor:RotateTo(rotation, time, exp)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"time")," is how long it takes to make the movement, and ",(0,o.kt)("strong",{parentName:"p"},"exp")," is the exponential used to smooth the movement (ease-in ease-out)."),(0,o.kt)("h2",{id:"deprecation-notes"},"Deprecation Notes"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Deprecation Notes will still work in the current way, but the old methods/interfaces will be removed as soon as possible, without previous warning. Please always stay tuned to the console to warning messages, they are very important! \ud83d\ude09")),(0,o.kt)("h2",{id:"setcameralocation-and-setcamerarotation"},(0,o.kt)("inlineCode",{parentName:"h2"},"SetCameraLocation()")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"SetCameraRotation()")),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"SetCameraLocation()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SetCameraRotation()")," don't have ",(0,o.kt)("strong",{parentName:"p"},"time")," and ",(0,o.kt)("strong",{parentName:"p"},"exp")," parameters anymore."),(0,o.kt)("p",null,"We've added new methods ",(0,o.kt)("inlineCode",{parentName:"p"},"TranslateCameraTo()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RotateCameraTo()")," with ",(0,o.kt)("strong",{parentName:"p"},"time")," and ",(0,o.kt)("strong",{parentName:"p"},"exp"),". Set","[","Something","]"," will be just setters."))}u.isMDXComponent=!0}}]);