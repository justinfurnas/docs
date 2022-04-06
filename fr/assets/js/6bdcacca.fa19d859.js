"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3496],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(a),k=r,u=c["".concat(l,".").concat(k)]||c[k]||m[k]||s;return a?n.createElement(u,i(i({ref:e},d),{},{components:a})):n.createElement(u,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88436:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),i=["components"],o={title:"Assets",description:"All you need to know about Assets",tags:["assets"]},l=void 0,p={unversionedId:"core-concepts/assets",id:"core-concepts/assets",title:"Assets",description:"All you need to know about Assets",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/assets.md",sourceDirName:"core-concepts",slug:"/core-concepts/assets",permalink:"/fr/docs/next/core-concepts/assets",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/assets.md",tags:[{label:"assets",permalink:"/fr/docs/next/tags/assets"}],version:"current",frontMatter:{title:"Assets",description:"All you need to know about Assets",tags:["assets"]},sidebar:"main",previous:{title:"Donn\xe9es persistantes",permalink:"/fr/docs/next/core-concepts/scripting/persistent-data"},next:{title:"Modules",permalink:"/fr/docs/next/core-concepts/modules"}},d={},m=[{value:"Folder Structure",id:"folder-structure",level:2},{value:"Assets Pack Configuration",id:"assets-pack-configuration",level:2},{value:"Settings Detailed",id:"settings-detailed",level:3},{value:"Referencing Assets in Scripting",id:"referencing-assets-in-scripting",level:2},{value:"Types of Assets",id:"types-of-assets",level:2},{value:"nanos world Default Asset Pack",id:"nanos-world-default-asset-pack",level:2}],c={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"All you need to know about Assets"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Assets")," in nanos world are all objects or content which come from Unreal Engine, i.e. ",(0,s.kt)("em",{parentName:"p"},"Maps"),", ",(0,s.kt)("em",{parentName:"p"},"StaticMeshes"),", ",(0,s.kt)("em",{parentName:"p"},"SkeletalMeshes"),", ",(0,s.kt)("em",{parentName:"p"},"Sounds"),", ",(0,s.kt)("em",{parentName:"p"},"Particles"),", etc are all ",(0,s.kt)("strong",{parentName:"p"},"Assets"),"."),(0,s.kt)("p",null,"In order to use custom Assets in your servers, you must have or create an ",(0,s.kt)("strong",{parentName:"p"},"Asset Pack"),". Asset Packs are a set of Assets that were exported together from Unreal."),(0,s.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,s.kt)("p",null,"All Asset Packs go under ",(0,s.kt)("inlineCode",{parentName:"p"},"Server/Assets/")," folder. Each Asset Pack is a folder under that."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"Note:")," Asset Packs downloaded when connecting to servers will be stored in ",(0,s.kt)("inlineCode",{parentName:"p"},"Server/Assets/")," folder as well!"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer.exe\nPackages/\n\u251c\u2500\u2500 my-asset-pack-01/\n\u2502   \u251c\u2500\u2500 MyAsset_01.uasset\n\u2502   \u251c\u2500\u2500 MyAsset_02.uasset\n\u2502   \u251c\u2500\u2500 MyBigMap.umap\n\u2502   \u2502    ...\n\u2502   \u2514\u2500\u2500 Assets.toml\n\u251c\u2500\u2500 awesome-weapons/\n\u2502   \u251c\u2500\u2500 BigFuckingGun.uasset\n\u2502   \u2502   ...\n\u2502   \u2514\u2500\u2500 Assets.toml\nAssets/\nConfig.toml\n")),(0,s.kt)("h2",{id:"assets-pack-configuration"},"Assets Pack Configuration"),(0,s.kt)("p",null,"Asset Packs have a configuration file in the root of the Asset Pack folder, called ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.toml"),", in this file we can setup all pertinent settings related to the Asset Pack:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Assets.toml\n")),(0,s.kt)("h3",{id:"settings-detailed"},"Settings Detailed"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"name"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Friendly name of the Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Author","(","s",")"," of the Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"version"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Version of the Asset Pack - please refer to ",(0,s.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"image"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Image URL to be displayed in the Vault")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"unreal_folder"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Name of the root folder in the Unreal Project which exported this Assets. This is important so the Assets can keep the relative references correct.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.maps"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Maps in this Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.static_meshes"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Static Meshes in this Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.skeletal_meshes"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Skeletal Meshes in this Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.sounds"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Sounds in this Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.animations"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Animations in this Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.particles"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Particles in this Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.materials"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Materials in this Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.blueprints"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of Blueprints in this Asset Pack")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets.others"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"List of other Assets in this Asset Pack")))),(0,s.kt)("h2",{id:"referencing-assets-in-scripting"},"Referencing Assets in Scripting"),(0,s.kt)("p",null,"To be able to use Assets through scripting, you will first have to ensure that the Asset Pack is loaded, an Asset Pack is loaded if:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Set the Map to be loaded (this will make it's Asset Pack to be loaded automatically)"),(0,s.kt)("li",{parentName:"ol"},"Manually set in ",(0,s.kt)("inlineCode",{parentName:"li"},"Server.toml")," the ",(0,s.kt)("inlineCode",{parentName:"li"},"assets")," to load"),(0,s.kt)("li",{parentName:"ol"},"Manually set in any loaded package, in ",(0,s.kt)("inlineCode",{parentName:"li"},"Package.toml")," the ",(0,s.kt)("inlineCode",{parentName:"li"},"asset_requirements"))),(0,s.kt)("p",null,"With that, you can refer to it's assets using the following pattern:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},'"ASSET_PACK_PATH::ASSET_KEY"')),(0,s.kt)("p",null,"Example:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},'"my-asset-pack-01::SM_Cube"')),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"ASSET_PACK_PATH")," is the Asset Pack folder name and ",(0,s.kt)("inlineCode",{parentName:"p"},"ASSET_KEY")," is the key defined in the ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.toml"),"."))),(0,s.kt)("h2",{id:"types-of-assets"},"Types of Assets"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Map")),(0,s.kt)("td",{parentName:"tr",align:"left"},"An Unreal Engine Map/Level")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Static Mesh")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreal Static Meshes can be used to load meshes for Props and StaticMeshes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Skeletal Mesh")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreal Skeletal Meshes can be used to load meshes for Characters and Vehicles")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Sound")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreal Sounds to load Sounds")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Particle")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreal Particles can be used for settings in several entities, including Particle Class itself")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Animation")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreal Animations can be used for settings in Character and Weapons")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Material")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreal Materials can be used for customizing meshes surfaces and used as Post Process")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Blueprint")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unreal Actor Blueprints can be used for spawning Blueprint entities")))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Some methods require some specific Type of Assets to load, attempting to load an invalid or wrong type will cause an Error. E.g.: ",(0,s.kt)("inlineCode",{parentName:"p"},"Character:SetMesh()")," requires an Asset of type ",(0,s.kt)("inlineCode",{parentName:"p"},"Skeletal Mesh"),"."))),(0,s.kt)("h2",{id:"nanos-world-default-asset-pack"},"nanos world Default Asset Pack"),(0,s.kt)("p",null,"nanos world provides a default  Asset Pack which is already included in the base game. Please refer to ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/assets-modding/default-asset-pack/"},"nanos world Default Asset Pack")," for more information."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To create your own Asset Pack, please refer to ",(0,s.kt)("a",{parentName:"p",href:"/fr/docs/next/assets-modding/creating-assets/importing-assets"},"Importing Assets")))))}k.isMDXComponent=!0}}]);