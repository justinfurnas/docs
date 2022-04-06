"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8101],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return u}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),d=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=d(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?n.createElement(g,s(s({ref:a},l),{},{components:t})):n.createElement(g,s({ref:a},l))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66880:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var n=t(87462),r=t(63366),i=(t(67294),t(3905)),s=["components"],o={title:"Map Script and Configuration",description:"How to create and export maps from Unreal to nanos world",tags:["assets"],keywords:["map","level","package","script"]},p=void 0,d={unversionedId:"assets-modding/creating-assets/maps-and-levels/map-script-and-data",id:"assets-modding/creating-assets/maps-and-levels/map-script-and-data",title:"Map Script and Configuration",description:"How to create and export maps from Unreal to nanos world",source:"@site/docs/assets-modding/creating-assets/maps-and-levels/map-script-and-data.md",sourceDirName:"assets-modding/creating-assets/maps-and-levels",slug:"/assets-modding/creating-assets/maps-and-levels/map-script-and-data",permalink:"/docs/next/assets-modding/creating-assets/maps-and-levels/map-script-and-data",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/maps-and-levels/map-script-and-data.md",tags:[{label:"assets",permalink:"/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1649242488,formattedLastUpdatedAt:"4/6/2022",frontMatter:{title:"Map Script and Configuration",description:"How to create and export maps from Unreal to nanos world",tags:["assets"],keywords:["map","level","package","script"]},sidebar:"main",previous:{title:"Creating Custom Maps",permalink:"/docs/next/assets-modding/creating-assets/maps-and-levels/importing-maps"},next:{title:"Water",permalink:"/docs/next/assets-modding/creating-assets/maps-and-levels/water"}},l={},c=[{value:"Folder Structure",id:"folder-structure",level:2},{value:"Adding a Configuration File",id:"adding-a-configuration-file",level:2},{value:"Adding a Package",id:"adding-a-package",level:2},{value:"Adding a Map Image",id:"adding-a-map-image",level:2},{value:"Extra Tips",id:"extra-tips",level:2}],m={toc:c};function u(e){var a=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In nanos world, maps can have their own Package and a Data file associated to it. Those are automatically loaded when the server starts with a map."),(0,i.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("p",null,"To be able to add a Map Package, Custom Data and even a Image to your map, you must create the proper structure for it."),(0,i.kt)("p",null,"For that, create a folder with the same name as your map file (",(0,i.kt)("inlineCode",{parentName:"p"},".umap"),") besides it:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(25426).Z,width:"686",height:"223"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Map Folder"',title:'"Map','Folder"':!0},"Assets/\n\u251c\u2500\u2500 my-asset-pack-01/\n\u2502   \u251c\u2500\u2500 MyMap/\n\u2502   \u2502   \u251c\u2500\u2500 MyMap.umap\n\u2502   \u2502   \u251c\u2500\u2500 MyMap/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Client/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Server/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Shared/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Map.toml\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Map.jpg\n\u2514\u2500\u2500 my-asset-pack-02/\n    \u2514\u2500\u2500 ...\n")),(0,i.kt)("h2",{id:"adding-a-configuration-file"},"Adding a Configuration File"),(0,i.kt)("p",null,"Now maps can have it's own Configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"Map.toml"),", this file contains a header with common configuration and a space for custom data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Map.toml\n")),(0,i.kt)("p",null,"This data can be get with ",(0,i.kt)("inlineCode",{parentName:"p"},"Server.GetMapCustomData()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Server.GetMapSpawnPoints()"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All nanos structs (Vectors, Rotators, Vector2D, etc) are automatically parsed from it's string representation into the proper Lua struct from ",(0,i.kt)("inlineCode",{parentName:"p"},".toml")," files."))),(0,i.kt)("h2",{id:"adding-a-package"},"Adding a Package"),(0,i.kt)("p",null,"Inside this folder you can create all folders related to the Package: ",(0,i.kt)("inlineCode",{parentName:"p"},"Server/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Client/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Shared/")," and create your scripts as usual. This will be loaded as a normal Package when your Map loads. Usually these scripts should have map specific spawn props/weapons and pertinent stuff."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If at least one of the loaded packages enable the setting ",(0,i.kt)("inlineCode",{parentName:"p"},"force_no_map_script")," then this Package will not load."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(99492).Z,width:"684",height:"246"})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Map Package will be loaded with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"map-package"),"."))),(0,i.kt)("h2",{id:"adding-a-map-image"},"Adding a Map Image"),(0,i.kt)("p",null,"You can add a ",(0,i.kt)("inlineCode",{parentName:"p"},".jpg")," image called ",(0,i.kt)("inlineCode",{parentName:"p"},"Map.jpg")," inside the Map Folder. This image will be automatically loaded when browsing through New Game menu."),(0,i.kt)("h2",{id:"extra-tips"},"Extra Tips"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As nanos world server is not aware of Unreal or it's Assets, we need to somehow say to the server where are the scriptable part of the map, such as Spawn Points, Props locations, Weapon locations and so on."),(0,i.kt)("p",{parentName:"div"},"It is a recommended approach to implement all Props, Weapons and Vehicles spawn locations in your Map Package ",(0,i.kt)("inlineCode",{parentName:"p"},"[Map]/Server/Index.lua")," and define all Player's Spawn points in the Configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"[Map]/Map.toml"),"."))))}u.isMDXComponent=!0},25426:function(e,a,t){a.Z=t.p+"assets/images/map-package-01-1f5535e656282158eeb65ac9163abca6.jpg"},99492:function(e,a,t){a.Z=t.p+"assets/images/map-package-02-b5a5d3b945c2120dad8140a6994e4ffd.jpg"}}]);