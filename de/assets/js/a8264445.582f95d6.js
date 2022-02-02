"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5695],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=i,k=c["".concat(l,".").concat(g)]||c[g]||p[g]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29825:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={description:"Learn how to Create and Import custom Assets into nanos world",sidebar_position:1,tags:["verm\xf6gen"]},l="Importing Custom Assets",d={unversionedId:"assets-modding/creating-assets/importing-assets",id:"version-latest/assets-modding/creating-assets/importing-assets",title:"Importing Custom Assets",description:"Learn how to Create and Import custom Assets into nanos world",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/assets-modding/creating-assets/importing-assets.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/importing-assets",permalink:"/de/docs/assets-modding/creating-assets/importing-assets",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/assets-modding/creating-assets/importing-assets.md",tags:[{label:"verm\xf6gen",permalink:"/de/docs/tags/vermogen"}],version:"latest",sidebarPosition:1,frontMatter:{description:"Learn how to Create and Import custom Assets into nanos world",sidebar_position:1,tags:["verm\xf6gen"]},sidebar:"version-latest/main",previous:{title:"Enums",permalink:"/de/docs/scripting-reference/glossary/enums"},next:{title:"Assets Development Kit",permalink:"/de/docs/assets-modding/creating-assets/adk-assets-development-kit"}},m=[{value:"Installing Unreal Engine 4",id:"installing-unreal-engine-4",children:[{value:"1. Download and Install Epic Games Launcher",id:"1-download-and-install-epic-games-launcher",children:[],level:4},{value:"2. Install Unreal Engine from inside Epic Games Launcher",id:"2-install-unreal-engine-from-inside-epic-games-launcher",children:[],level:4}],level:2},{value:"Guidelines for exporting Assets from Unreal",id:"guidelines-for-exporting-assets-from-unreal",children:[],level:2},{value:"Additional Tips",id:"additional-tips",children:[{value:"Recommended Asset Naming Conventions",id:"recommended-asset-naming-conventions",children:[],level:3}],level:2},{value:"Exporting &amp; Cooking your Assets",id:"exporting--cooking-your-assets",children:[{value:"Considerations after Exporting",id:"considerations-after-exporting",children:[],level:3}],level:2}],p={toc:m};function c(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"importing-custom-assets"},"Importing Custom Assets"),(0,r.kt)("p",null,"Currently all our workflow for exporting content is through Unreal Engine as the Assets need to be Cooked and Packaged in the correct way before being accessible by the game. This page will give an overview and will have fundamental information which can be accessed at any time during the Assets creation."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please before continuing, make sure you read ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/core-concepts/assets"},"Assets")," article!"))),(0,r.kt)("h2",{id:"installing-unreal-engine-4"},"Installing Unreal Engine 4"),(0,r.kt)("p",null,"The first step for creating your own Assets, is downloading and installing Unreal Engine."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Little by little we are able to allow loading some assets without the need of cooking them in Unreal, such as ",(0,r.kt)("strong",{parentName:"p"},"Textures")," and soon\u2122 ",(0,r.kt)("strong",{parentName:"p"},"Sounds"),"."))),(0,r.kt)("h4",{id:"1-download-and-install-epic-games-launcher"},"1. Download and Install ",(0,r.kt)("a",{parentName:"h4",href:"https://www.unrealengine.com/en-US/download/ue_non_games"},"Epic Games Launcher")),(0,r.kt)("p",null,"Follow the steps for agreeing to Unreal Engine terms"),(0,r.kt)("h4",{id:"2-install-unreal-engine-from-inside-epic-games-launcher"},"2. Install Unreal Engine from inside Epic Games Launcher"),(0,r.kt)("p",null,"Unreal Engine version which nanos world is: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"4.26.2"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access ",(0,r.kt)("strong",{parentName:"li"},"Unreal Engine")," Tab"),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Library")),(0,r.kt)("li",{parentName:"ol"},"Press ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"+"))," and select the correct ",(0,r.kt)("strong",{parentName:"li"},"Unreal Engine")," version"),(0,r.kt)("li",{parentName:"ol"},"Before Installing it, select ",(0,r.kt)("strong",{parentName:"li"},"Options")," in the dropdown menu and deselect all items ","(","or at least all from ",(0,r.kt)("strong",{parentName:"li"},"Target Platforms"),")"," which are unecessary")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selecting Options in the Dropdown",src:n(49748).Z,width:"492",height:"315"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deselecting all options",src:n(18675).Z,width:"658",height:"512"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/GettingStarted"},"Unreal Official Documentation")," for more information and tutorials. For the sake of this articles we are not covering too much details on Unreal\u2019s peculiarities."))),(0,r.kt)("h2",{id:"guidelines-for-exporting-assets-from-unreal"},"Guidelines for exporting Assets from Unreal"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Always create a ",(0,r.kt)("strong",{parentName:"li"},"Root Folder")," with the name of your pack ","(","e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/Content/My_Weapon_Pack/"),")"," and put all content you use inside that ","(","you can create sub-folders as well",")"),(0,r.kt)("li",{parentName:"ol"},"Do not use ",(0,r.kt)("strong",{parentName:"li"},"Engine Content")," ","(","i.e. Engine\u2019s Materials or Meshes",")",". If you want to use them, we recommend copying them to your Content/Your","_","Pack folder, otherwise they may not be exported correctly")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are some ",(0,r.kt)("strong",{parentName:"p"},"Engine Content")," which is allowed to use, but only from the following folders ",(0,r.kt)("em",{parentName:"p"},"(","these are already included by the base game and are safe to use",")"),":"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/Engine/Functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/Engine/BasicShapes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/Engine/ArtTools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/Engine/EngineMaterials"))))),(0,r.kt)("h2",{id:"additional-tips"},"Additional Tips"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use a proper name pattern for your Assets"),(0,r.kt)("li",{parentName:"ol"},"Use small assets size and configure textures compression properly ","(","big files are bad for network bandwidth",")",". We recommend max 2048x2048 size for textures, as they will be 5MB each")),(0,r.kt)("h3",{id:"recommended-asset-naming-conventions"},"Recommended Asset Naming Conventions"),(0,r.kt)("p",null,"We hardly recommend and encourage you to follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Allar/ue4-style-guide#1-asset-naming-conventions-"},"Allar\u2019s Asset Naming Conventions"),". We\u2019ve summarized the most common ones here:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Asset Type")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Prefix")),(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"th"},"Suffix")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Skelettnetzwerk"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SK_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Statisches Netz"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"SM_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Physical Asset"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PHYS_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Material"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Material Instance"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MI_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Animation"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Animation Montage"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Particle"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"P_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sound Wave"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A_")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sound Cue"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A_")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_Cue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Texture"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T_")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_?")," ","(","see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/Allar/ue4-style-guide#anc-textures"},"Textures"),")")))),(0,r.kt)("h2",{id:"exporting--cooking-your-assets"},"Exporting & Cooking your Assets"),(0,r.kt)("p",null,"After you created your Assets, exporting them from Unreal Engine is pretty much like packaging a game."),(0,r.kt)("p",null,"For that, select ",(0,r.kt)("strong",{parentName:"p"},"File \u27a1 Package Project \u27a1 Windows ","(","64-bit",")")," and select a folder to save."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(73232).Z,width:"1919",height:"1038"})),(0,r.kt)("p",null,"This will start the Cooking & Packing process, which may take a while depending if the Assets were already loaded. It usually is only longer at the first time."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57788).Z,width:"555",height:"79"})),(0,r.kt)("p",null,"After finishing, you may end up with a folder like that:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(18701).Z,width:"653",height:"160"})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Notice that you get an ",(0,r.kt)("inlineCode",{parentName:"p"},"*.exe"),' which is actually the "Game" you just created! But we won\'t use this, instead we want only the Assets it generated.'))),(0,r.kt)("p",null,"After packaging your project, we will manually copy the exported folder from it, the one we are looking for probably will be located at a ",(0,r.kt)("inlineCode",{parentName:"p"},"Content/")," inside the main folder beside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Engine/")," ","(","this folder name may vary if you are using the ",(0,r.kt)("a",{parentName:"p",href:"docs/assets-modding/creating-assets/adk-assets-development-kit"},"ADK")," or not",")","."),(0,r.kt)("p",null,"Inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content/")," you will be able to locate the folder you created ","(",(0,r.kt)("inlineCode",{parentName:"p"},"MyAssetPack/"),")",". This is the folder we will copy which will become our ",(0,r.kt)("a",{parentName:"p",href:"docs/core-concepts/assets"},"Asset Pack"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Now just copy it to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/Assets/")," , create and configure your ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.toml")," and you are done!"))),(0,r.kt)("h3",{id:"considerations-after-exporting"},"Considerations after Exporting"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Remember to configure in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets.toml")," the Unreal folder name ","(","the folder name which you just copied",")"," in  ",(0,r.kt)("inlineCode",{parentName:"p"},"unreal_folder")," setting! After that, you are allowed to rename the Asset Pack folder!"))),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Never rename or delete any file/folder inside your Asset Pack final folder! It will break all internal references used by your assets."))))}c.isMDXComponent=!0},49748:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-01-6b2776a4d18cdaad1944c21b3b18b011.jpg"},18675:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-02-cd76b92f1dd5e4c11951b7ad0b7864ea.jpg"},73232:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-03-418d44df119162f5f538805c94ff26c1.jpg"},57788:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-04-e53113676ea092c532282b5d3c06a2b3.jpg"},18701:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-05-52e160ea3f6dd7630fc9f6be5c40f775.jpg"}}]);