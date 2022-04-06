"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6250],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=s,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63359:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=a(87462),s=a(63366),i=(a(67294),a(3905)),r=["components"],o={description:"All you need to know about Classes",sidebar_position:0,tags:["scripting"]},l="Classes Guide",c={unversionedId:"core-concepts/scripting/classes-guide",id:"version-latest/core-concepts/scripting/classes-guide",title:"Classes Guide",description:"All you need to know about Classes",source:"@site/versioned_docs/version-latest/core-concepts/scripting/classes-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/classes-guide",permalink:"/docs/core-concepts/scripting/classes-guide",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/classes-guide.md",tags:[{label:"scripting",permalink:"/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1634073576,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:0,frontMatter:{description:"All you need to know about Classes",sidebar_position:0,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Loading Screen",permalink:"/docs/core-concepts/packages/loading-screen"},next:{title:"Events Guide",permalink:"/docs/core-concepts/scripting/events-guide"}},p={},d=[{value:"Classes",id:"classes",level:2},{value:"Classes Inheritance",id:"classes-inheritance",level:3},{value:"Spawning Entities",id:"spawning-entities",level:3},{value:"Destroying Entities",id:"destroying-entities",level:3},{value:"Static Classes",id:"static-classes",level:2},{value:"Utility Classes",id:"utility-classes",level:2}],m={toc:d};function h(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"classes-guide"},"Classes Guide"),(0,i.kt)("p",null,"All you need to know about Classes"),(0,i.kt)("p",null,"All entities in nanos world are represented by a Class. In Lua, classes are represented by ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/glossary/basic-types#table"},"tables"),". That means that every interaction with entities (Players, Characters, Props, etc) are made with Classes/tables methods following an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"OOP ","(","Object-oriented programming")," pattern",")",". In this page we will explain more about that."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In nanos world we have 3 types of Classes (or structures): ",(0,i.kt)("inlineCode",{parentName:"p"},"Classes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Static Classes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Utility Classes"),"."))),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("p",null,"If you read our ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/quick-start"},"Quick Start")," guide, you noticed we were spawning entities in the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Spawning an entity with a Constructor\nlocal my_entity = Entity()\n\n-- Interacting with the entity with it's methods\nmy_entity:MyFunction()\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Access to ",(0,i.kt)("strong",{parentName:"p"},"Entities / Spawned Objects")," ",(0,i.kt)("strong",{parentName:"p"},"Methods")," are made with ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},":")),"."))),(0,i.kt)("p",null,"This is how ",(0,i.kt)("strong",{parentName:"p"},"OOP")," works! You create objects and call functions/catch events on that object. Unlike other scripting games which have tons of global functions and events to interact with entities, nanos world scripting is a ",(0,i.kt)("strong",{parentName:"p"},"modern approach")," to ",(0,i.kt)("strong",{parentName:"p"},"modern programming"),"."),(0,i.kt)("h3",{id:"classes-inheritance"},"Classes Inheritance"),(0,i.kt)("p",null,"Under the hood, nanos world Classes follow an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29"},"Inheritance Pattern"),", which means we have base parent classes, and it\u2019s childs which inherits all functions, events and properties from them. You will notice that all Classes that can be spawned in the world are ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Actors"),", for example in Character and ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/prop"},"Prop")," ","(","which are Actors",")"," it is possible to call the function: ",(0,i.kt)("inlineCode",{parentName:"p"},":SetLocation(Vector)"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Base Class Actor")," is a very important class in nanos world. It contains the most of methods which are shared through all Classes we have, and also ",(0,i.kt)("strong",{parentName:"p"},"Static Methods")," to get and retrieve entities directly."))),(0,i.kt)("h3",{id:"spawning-entities"},"Spawning Entities"),(0,i.kt)("p",null,"Spawning entities in nanos world is extremely easy and straightforward, let's say we want to spawn a Character:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"local my_character = Character()\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Each Class will contain it's own ",(0,i.kt)("strong",{parentName:"p"},"Constructor"),", ",(0,i.kt)("strong",{parentName:"p"},"Properties"),", ",(0,i.kt)("strong",{parentName:"p"},"Methods")," and ",(0,i.kt)("strong",{parentName:"p"},"Events"),"."),(0,i.kt)("p",{parentName:"div"},"Check all Classes that nanos world provides in the sidebar ",(0,i.kt)("strong",{parentName:"p"},"Scripting Reference -> Classes")," item."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Keep in mind that some Classes can only be spawned in the ",(0,i.kt)("strong",{parentName:"p"},"Server"),", others can only be spawned in the ",(0,i.kt)("strong",{parentName:"p"},"Client"),"."))),(0,i.kt)("h3",{id:"destroying-entities"},"Destroying Entities"),(0,i.kt)("p",null,"All classes ","(","but Player",")"," allow you to destroy them with the method ",(0,i.kt)("inlineCode",{parentName:"p"},"Destroy()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"my_character:Destroy()\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Destroying an Entity will trigger the event ",(0,i.kt)("inlineCode",{parentName:"p"},"Destroy")," and also will automatically detach all attached entities it had attached*."),(0,i.kt)("p",{parentName:"div"},"*",(0,i.kt)("em",{parentName:"p"},"If you attached entities with ",(0,i.kt)("inlineCode",{parentName:"em"},"auto_destroy_when_detached")," parameter, all attached entities will be destroyed as well \ud83d\ude09"),"."))),(0,i.kt)("h2",{id:"static-classes"},"Static Classes"),(0,i.kt)("p",null,"Static Classes in nanos world are Classes which you cannot Spawn. Instead you can use it's methods directly with ",(0,i.kt)("inlineCode",{parentName:"p"},"."),"."),(0,i.kt)("p",null,"For example, if you want to interact with World ","(","move the sun, set it raining, etc",")",", you will need the ",(0,i.kt)("inlineCode",{parentName:"p"},"World")," Static Class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Makes it 9:25 AM\nWorld.SetTime(9, 25)\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Access to ",(0,i.kt)("strong",{parentName:"p"},"Static Classes / Static Methods")," are made with ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},".")),"."))),(0,i.kt)("h2",{id:"utility-classes"},"Utility Classes"),(0,i.kt)("p",null,"Besides Classes and Static Classes, we have the ",(0,i.kt)("strong",{parentName:"p"},"Utility Classes"),"! Those are mostly structs used in nanos world API such as Vector, Rotator, Color, JSON and some others."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All Utility Classes are Open Sourced at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!"))))}h.isMDXComponent=!0}}]);