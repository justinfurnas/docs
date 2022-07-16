"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7978],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return u}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return t?n.createElement(g,o(o({ref:a},d),{},{components:t})):n.createElement(g,o({ref:a},d))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13229:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],s={title:"Map Script and Configuration",description:"Como criar e exportar mapas do Unreal para nanos world",tags:["m\xeddias"],keywords:["Mapa","level","package","script"]},p=void 0,l={unversionedId:"assets-modding/creating-assets/maps-and-levels/map-script-and-data",id:"version-latest/assets-modding/creating-assets/maps-and-levels/map-script-and-data",title:"Map Script and Configuration",description:"Como criar e exportar mapas do Unreal para nanos world",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/assets-modding/creating-assets/maps-and-levels/map-script-and-data.md",sourceDirName:"assets-modding/creating-assets/maps-and-levels",slug:"/assets-modding/creating-assets/maps-and-levels/map-script-and-data",permalink:"/pt-BR/docs/assets-modding/creating-assets/maps-and-levels/map-script-and-data",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/assets-modding/creating-assets/maps-and-levels/map-script-and-data.md",tags:[{label:"m\xeddias",permalink:"/pt-BR/docs/tags/midias"}],version:"latest",frontMatter:{title:"Map Script and Configuration",description:"Como criar e exportar mapas do Unreal para nanos world",tags:["m\xeddias"],keywords:["Mapa","level","package","script"]},sidebar:"version-latest/main",previous:{title:"Criar um mapa personalizado",permalink:"/pt-BR/docs/assets-modding/creating-assets/maps-and-levels/importing-maps"},next:{title:"water",permalink:"/pt-BR/docs/assets-modding/creating-assets/maps-and-levels/water"}},d={},c=[{value:"Estrutura da pasta",id:"estrutura-da-pasta",level:2},{value:"Adding a Configuration File",id:"adding-a-configuration-file",level:2},{value:"Adding a Package",id:"adding-a-package",level:2},{value:"Adding a Map Image",id:"adding-a-map-image",level:2},{value:"Extra Tips",id:"extra-tips",level:2}],m={toc:c};function u(e){var a=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In nanos world, maps can have their own Package and a Data file associated to it. Those are automatically loaded when the server starts with a map."),(0,i.kt)("h2",{id:"estrutura-da-pasta"},"Estrutura da pasta"),(0,i.kt)("p",null,"To be able to add a Map Package, Custom Data and even a Image to your map, you must create the proper structure for it."),(0,i.kt)("p",null,"For that, create a folder with the same name as your map file (",(0,i.kt)("inlineCode",{parentName:"p"},".umap"),") besides it:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(25426).Z,width:"686",height:"223"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Map Folder"',title:'"Map','Folder"':!0},"Assets/\n\u251c\u2500\u2500 my-asset-pack-01/\n\u2502   \u251c\u2500\u2500 MyMap/\n\u2502   \u2502   \u251c\u2500\u2500 MyMap.umap\n\u2502   \u2502   \u251c\u2500\u2500 MyMap/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Client/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Server/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Shared/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Map.toml\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Map.jpg\n\u2514\u2500\u2500 my-asset-pack-02/\n    \u2514\u2500\u2500 ...\n")),(0,i.kt)("h2",{id:"adding-a-configuration-file"},"Adding a Configuration File"),(0,i.kt)("p",null,"Now maps can have it's own Configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"Map.toml"),", this file contains a header with common configuration and a space for custom data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Map.toml\n")),(0,i.kt)("p",null,"This data can be get with ",(0,i.kt)("inlineCode",{parentName:"p"},"Server.GetMapCustomData()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Server.GetMapSpawnPoints()"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"All nanos structs (Vectors, Rotators, Vector2D, etc) are automatically parsed from it's string representation into the proper Lua struct from ",(0,i.kt)("inlineCode",{parentName:"p"},".toml")," files.")),(0,i.kt)("h2",{id:"adding-a-package"},"Adding a Package"),(0,i.kt)("p",null,"Inside this folder you can create all folders related to the Package: ",(0,i.kt)("inlineCode",{parentName:"p"},"Server/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Client/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Shared/")," and create your scripts as usual. This will be loaded as a normal Package when your Map loads. Usually these scripts should have map specific spawn props/weapons and pertinent stuff."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If at least one of the loaded packages enable the setting ",(0,i.kt)("inlineCode",{parentName:"p"},"force_no_map_script")," then this Package will not load.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(99492).Z,width:"684",height:"246"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The Map Package will be loaded with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"map-package"),".")),(0,i.kt)("h2",{id:"adding-a-map-image"},"Adding a Map Image"),(0,i.kt)("p",null,"You can add a ",(0,i.kt)("inlineCode",{parentName:"p"},".jpg")," image called ",(0,i.kt)("inlineCode",{parentName:"p"},"Map.jpg")," inside the Map Folder. This image will be automatically loaded when browsing through New Game menu."),(0,i.kt)("h2",{id:"extra-tips"},"Extra Tips"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"As nanos world server is not aware of Unreal or it's Assets, we need to somehow say to the server where are the scriptable part of the map, such as Spawn Points, Props locations, Weapon locations and so on."),(0,i.kt)("p",{parentName:"admonition"},"It is a recommended approach to implement all Props, Weapons and Vehicles spawn locations in your Map Package ",(0,i.kt)("inlineCode",{parentName:"p"},"[Map]/Server/Index.lua")," and define all Player's Spawn points in the Configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"[Map]/Map.toml"),".")))}u.isMDXComponent=!0},25426:function(e,a,t){a.Z=t.p+"assets/images/map-package-01-1f5535e656282158eeb65ac9163abca6.jpg"},99492:function(e,a,t){a.Z=t.p+"assets/images/map-package-02-b5a5d3b945c2120dad8140a6994e4ffd.jpg"}}]);