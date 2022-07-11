"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9659],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},A=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),A=d(n),c=r,f=A["".concat(l,".").concat(c)]||A[c]||p[c]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=A;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},86744:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],s={title:"Importing Custom Assets",description:"Learn how to Create and Import custom Assets into nanos world",sidebar_position:1,tags:["m\xeddias"],keywords:["m\xeddias","ADK","import","unreal"]},l=void 0,d={unversionedId:"assets-modding/creating-assets/importing-assets",id:"assets-modding/creating-assets/importing-assets",title:"Importing Custom Assets",description:"Learn how to Create and Import custom Assets into nanos world",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/importing-assets.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/importing-assets",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/importing-assets",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/importing-assets.md",tags:[{label:"m\xeddias",permalink:"/pt-BR/docs/next/tags/midias"}],version:"current",sidebarPosition:1,frontMatter:{title:"Importing Custom Assets",description:"Learn how to Create and Import custom Assets into nanos world",sidebar_position:1,tags:["m\xeddias"],keywords:["m\xeddias","ADK","import","unreal"]},sidebar:"main",previous:{title:"Enums",permalink:"/pt-BR/docs/next/scripting-reference/glossary/enums"},next:{title:"Assets Development Kit",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/adk-assets-development-kit"}},m={},p=[{value:"Installing Unreal Engine 5",id:"installing-unreal-engine-5",level:2},{value:"1. Download and Install Epic Games Launcher",id:"1-download-and-install-epic-games-launcher",level:4},{value:"2. Install Unreal Engine from inside Epic Games Launcher",id:"2-install-unreal-engine-from-inside-epic-games-launcher",level:4},{value:"Guidelines for exporting Assets from Unreal",id:"guidelines-for-exporting-assets-from-unreal",level:2},{value:"Additional Tips",id:"additional-tips",level:2},{value:"Recommended Asset Naming Conventions",id:"recommended-asset-naming-conventions",level:3},{value:"Assets Thumbnails",id:"assets-thumbnails",level:3},{value:"Exporting &amp; Cooking your Assets",id:"exporting--cooking-your-assets",level:2},{value:"Considerations after Exporting",id:"considerations-after-exporting",level:3}],A={toc:p};function c(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},A,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Currently all our workflow for exporting content is through Unreal Engine as the Assets need to be Cooked and Packaged in the correct way before being accessible by the game. This page will give an overview and will have fundamental information which can be accessed at any time during the Assets creation."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please before continuing, make sure you read ",(0,i.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/core-concepts/assets"},"Assets")," article!"))),(0,i.kt)("h2",{id:"installing-unreal-engine-5"},"Installing Unreal Engine 5"),(0,i.kt)("p",null,"The first step for creating your own Assets, is downloading and installing Unreal Engine."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Little by little we are able to allow loading some assets without the need of cooking them in Unreal, such as ",(0,i.kt)("strong",{parentName:"p"},"Textures")," and soon\u2122 ",(0,i.kt)("strong",{parentName:"p"},"Sounds"),"."))),(0,i.kt)("h4",{id:"1-download-and-install-epic-games-launcher"},"1. Download and Install ",(0,i.kt)("a",{parentName:"h4",href:"https://store.epicgames.com/download"},"Epic Games Launcher")),(0,i.kt)("p",null,"Follow the steps for agreeing to Unreal Engine terms"),(0,i.kt)("h4",{id:"2-install-unreal-engine-from-inside-epic-games-launcher"},"2. Install Unreal Engine from inside Epic Games Launcher"),(0,i.kt)("p",null,"Unreal Engine version which nanos world is: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"5.0"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access ",(0,i.kt)("strong",{parentName:"li"},"Unreal Engine")," Tab"),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"Library")),(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"+"))," and select the correct ",(0,i.kt)("strong",{parentName:"li"},"Unreal Engine")," version"),(0,i.kt)("li",{parentName:"ol"},"Before Installing it, select ",(0,i.kt)("strong",{parentName:"li"},"Options")," in the dropdown menu and deselect all items ","(","or at least all from ",(0,i.kt)("strong",{parentName:"li"},"Target Platforms"),")"," which are unecessary")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Selecting Options in the Dropdown",src:n(14637).Z,width:"492",height:"315"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deselecting all options",src:n(87130).Z,width:"658",height:"512"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/GettingStarted"},"Unreal Official Documentation")," for more information and tutorials. For the sake of this articles we are not covering too much details on Unreal's peculiarities."))),(0,i.kt)("h2",{id:"guidelines-for-exporting-assets-from-unreal"},"Guidelines for exporting Assets from Unreal"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Always create a ",(0,i.kt)("strong",{parentName:"li"},"Root Folder")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"/Content/MyWeaponPack/"),") and put all content you use inside that (you can create sub-folders as well)"),(0,i.kt)("li",{parentName:"ol"},"Avoid using ",(0,i.kt)("strong",{parentName:"li"},"Engine Content")," (i.e. Engine's Materials or Meshes). If you want to use them, we recommend copying them to your Content/YourPack folder, otherwise they may not be exported correctly")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There are some ",(0,i.kt)("strong",{parentName:"p"},"Engine Content")," which is allowed to use, but only from the following folders ",(0,i.kt)("em",{parentName:"p"},"(these are already included by the base game and are safe to use)"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/Engine/Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/Engine/BasicShapes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/Engine/ArtTools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/Engine/EngineMaterials"))))),(0,i.kt)("h2",{id:"additional-tips"},"Additional Tips"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use a proper name pattern for your Assets"),(0,i.kt)("li",{parentName:"ol"},"Use small assets size and configure textures compression properly (big files are bad for network bandwidth). We recommend max 2048x2048 size for textures, as they will be 5MB each")),(0,i.kt)("h3",{id:"recommended-asset-naming-conventions"},"Recommended Asset Naming Conventions"),(0,i.kt)("p",null,"We hardly recommend and encourage you to follow ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Allar/ue4-style-guide#1-asset-naming-conventions-"},"Allar's Asset Naming Conventions"),". We've summarized the most common ones here:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Asset Type")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Prefix")),(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Suffix")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Malha Esquel\xe9tica"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SK_")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Malha Est\xe1tica"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SM_")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Physical Asset"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PHYS_")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Material"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"M_")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Material Instance"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"MI_")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Animation"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A_")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Animation Montage"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A_")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Particle"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P_")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Sound Wave"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A_")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Sound Cue"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"A_")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_Cue"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Texture"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T_")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_?")," (see ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Allar/ue4-style-guide#anc-textures"},"Textures"),")")))),(0,i.kt)("h3",{id:"assets-thumbnails"},"Assets Thumbnails"),(0,i.kt)("p",null,"It is a good practice to include thumbnails of your assets into a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"Thumbnails/")," in the root of your Asset Pack. This is a convention as the ",(0,i.kt)("strong",{parentName:"p"},"Sandbox")," game-mode reads from it to display on Spawn Menu. Add ",(0,i.kt)("inlineCode",{parentName:"p"},".jpg")," with the name of the assets all in the Thumbnails folder."),(0,i.kt)("h2",{id:"exporting--cooking-your-assets"},"Exporting & Cooking your Assets"),(0,i.kt)("p",null,"After you created your Assets, exporting them from Unreal Engine is very easy."),(0,i.kt)("p",null,"For that, select ",(0,i.kt)("strong",{parentName:"p"},"Platforms \u2b07\ufe0f Windows \u27a1 Cook Content"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(39008).Z,width:"1528",height:"690"})),(0,i.kt)("p",null,"This will start the Cooking & Packing process, which may take a while depending if the Assets were already loaded. It usually is only longer at the first time."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(19687).Z,width:"382",height:"115"})),(0,i.kt)("p",null,"After finishing, go for the Cooked folder of your ADK project:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assets-development-kit/Saved/Cooked/Windows/NanosWorldADK/Content/MyAssetPack/")),(0,i.kt)("p",null,"You may end up with a folder like that:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(92744).Z,width:"676",height:"199"})),(0,i.kt)("p",null,"After cooking your assets, we will manually copy the cooked folder from it, the one we are looking for is the one you added your assets (MyAssetPack in our case). This is the folder we will copy which will become our ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/assets"},"Asset Pack"),"."),(0,i.kt)("p",null,"Now just copy it to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Server/Assets/"),", create and configure your ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets.toml")," and you are done!"),(0,i.kt)("h3",{id:"considerations-after-exporting"},"Considerations after Exporting"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is very important to ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/assets#assets-pack-configuration"},"Configure your Assets.toml")," properly as it has fundamental settings which are mandatory to the Asset Pack to work and also to be able to reference your assets through scripting."),(0,i.kt)("p",{parentName:"div"},"After that, you are allowed to rename the Asset Pack folder! A standard to rename the Asset Pack folder is in ",(0,i.kt)("inlineCode",{parentName:"p"},"kebab-case")," format. You will get a warning if not."))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Never rename or delete any file/folder inside your Asset Pack final folder! It will break all internal references used by your assets."))))}c.isMDXComponent=!0},14637:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-01-4d3a36b3644353d18c2e5d09f1fcaa74.jpg"},87130:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-02-84f522524490a0c083d04812a1c9704c.jpg"},39008:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-03-e1a9f524224e7ece029a2bcb1e9dc805.jpg"},19687:function(e,t){t.Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCABzAX4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8j6KKKACiq2oazZ6Rs+1XVta+Znb5sqpux1xk+4/Oq3/CZaP/ANBXTf8AwJT/ABoA0qKzf+Ey0f8A6Cum/wDgSn+NH/CZaP8A9BXTf/AlP8aANKis3/hMtH/6Cum/+BKf40f8Jlo//QV03/wJT/GgDSorN/4TLR/+grpv/gSn+NH/AAmWj/8AQV03/wACU/xoA0qKzf8AhMtH/wCgrpv/AIEp/jR/wmWj/wDQV03/AMCU/wAaANKis3/hMtH/AOgrpv8A4Ep/jR/wmWj/APQV03/wJT/GgDSorN/4TLR/+grpv/gSn+NH/CZaP/0FdN/8CU/xoA0qKzf+Ey0f/oK6b/4Ep/jR/wAJlo//AEFdN/8AAlP8aANKis3/AITLR/8AoK6b/wCBKf40f8Jlo/8A0FdN/wDAlP8AGgDSorN/4TLR/wDoK6b/AOBKf40f8Jlo/wD0FdN/8CU/xoA0qKzf+Ey0f/oK6b/4Ep/jR/wmWj/9BXTf/AlP8aANKis3/hMtH/6Cum/+BKf40f8ACZaP/wBBXTf/AAJT/GgDSorN/wCEy0f/AKCum/8AgSn+NH/CZaP/ANBXTf8AwJT/ABoA0qKzf+Ey0f8A6Cum/wDgSn+NH/CZaP8A9BXTf/AlP8aANKis3/hMtH/6Cum/+BKf40f8Jlo//QV03/wJT/GgDSorN/4TLR/+grpv/gSn+NH/AAmWj/8AQV03/wACU/xoA0qKzf8AhMtH/wCgrpv/AIEp/jR/wmWj/wDQV03/AMCU/wAaANKis3/hMtH/AOgrpv8A4Ep/jR/wmWj/APQV03/wJT/GgDSorN/4TLR/+grpv/gSn+NH/CZaP/0FdN/8CU/xoA0qKzf+Ey0f/oK6b/4Ep/jR/wAJlo//AEFdN/8AAlP8aANKis3/AITLR/8AoK6b/wCBKf40f8Jlo/8A0FdN/wDAlP8AGgDSorN/4TLR/wDoK6b/AOBKf41Z0/WbPV9/2W6trry8bvKlV9uemcHvg/lQBZrB8bf8uv8AwP8A9lrerB8bf8uv/A//AGWgDeooooA9u+COnWtn8LNDuLe1gtn1Oyiv7jy1x5k0qCR2Pc5Zj1JwMDtXVVzXwY/5I94T/wCwNZ/+iErsNC0O78Taxb2FjBJc3d04jiiQZZ2Ndcdjke5UrV0nwNrWurustJ1K6XrmK2dx+gr3z4YfD/wj8NPG2m+GpY7LxF481JWVHuf3mm6bP5bMiOo5YkjY3pnPOMGt4T/aE+KPjL4u/wDCHt4jbwrfNNNZRxWlvHFDBcIDtRgo+6WQLkE4yG5xgg7Hgup+GtR0Wby7ywvLWT+7LCyH9RVFlKnBGCOxr7G/ZF/bG8SW/wC0LbeEfiVpul+LLbzJ7FrbUrON3iuUVsAyAZxuXbkZ6g84r5y/aU1+18S/HHxJdWmix+HYft0qf2cmNtoysQU444INAjhqKK9a/Y++Cui/GDxxrlx4le7/AOEb8H6Jc6/qENq22a7jhA/dK38Oc5J64UgEEghi3PJaK9y8X6L8MvjR4FsW8D+H9Q8H+PJdWjsLfw8L641KPVYZMBZFlkXCOHIGCwGAeDkYr/FH9ifxN8JPB2oa1LfeGddh0SeO21eDSNR+13GjyudqrcJtG0liF4zzR6lcrPF0iaT7qsfwqVdPkbrtX8a9v8V/sM+OPCng/UNSkn8Mz6lo9gNT1HQYNSEmr6fbEbvMlh24AAOThia7z47/ALLc3xGXwPN4bt/DvhjTdM+G1hrmu6lPH9ktQ535klaKNmeZ8HHylm2n0o5kHKz5XXTfVvyFL9gQfxmvd/CX7Mni743/AAx+Fel2EPgCxh8TS6r/AGbfiKWHULg27yNL9tlWNiwGwiPG7C4BxXLeMf2M/F3hPw94f1K3uPD/AIhg8R6muiwjRtRW8NtfN0tpSAFD8H7rMoxyemTmQcrPMfsMZ/jP5ij+zlPRjXsPxD/YQ8VfDfwX4n1y41zwXqFr4PWEanDp+qG4uLeWWQR+SyBMrIpIJD7Rg8FiCByPwQ/Z01z46x6vdWF3ouj6RoESS6jqusXn2SytN5IRWfBO5iDgAHp24ycyFys4ltOYdGU1G9pIn8OfpXstj+w345PjnXNHvLnw/o9n4dtob291q/1ERaUkM2fJkE2DuEmDjC54IODVix/Yb8d3HxB1fw403h2O40vQj4jiu5L7FlqVmCAHgmC7TuJ4L7FGCSQOaOaI+VnhxGDRX0x8N/2C59T+Mng/RfE3iDw7J4d8WW013aalo+qLKl+ItqvBbyNGQ0wLqSCuNofBJFcq/wCxZqXiD4peMdH0XXvDI0HwfIDea7eals062Rz+7R5tgPm9UYBOHRh6ZXMg5WeI0V7kn/BP7xtHdeKI7zUPCumw+ExZy3N1eal5NrcQXRIjuIpSuwxgKxJYqeMAFvlrrPg5/wAE7pNW+MeqeGfGniDSbOC10IazYz6bqS/8TOOTd5c8LPEwaBSjeYSFIyuMg5pcyDlZ8w0V2ngP4Vw+JvjrZ+EJ9c0JbeTUzYyamLoixmVGILxy7clXC4Q7RksvTPH0F+1p+zTN4+/aUj8D+BtN+Huk6boOnvdSSWDfZ3063VY98mpykZ3huVPzHa4PJJo5g5W1c+SaK9sg/YL8Y3vxO8M+G7XUvC19D4wguJ9J1q1v2n0u7ECM8oEqRltyhcY2dSPcjz/xV4Gh+EnxIs9O1e70XxBDayQzXyaXem4hK5BkgMqY+cDKtsPB6N3qriszk6K+4vD37BPgzXP2jfidpbWaweGLbSrRPDQa8mCx3d7CGhdX37pCrRy/K5YHIyDxXF/Cn9ni307wr8GI9J8P+F7z4jeNbvV7mUeJlmuNONtbRTKI5oBuX7uHUhM71XnANTzIfIz5Ror3bwx+wX4s8faToGrR634F02HxdNdR6fDd6k1s8k0MxjMKRmPLMzA7Qm4YHzFSQDk/D79jLxZ4rt9bvry48O+H7Pw3qx0a4bWtRW1S6vUOGtomIKs/TqQpz164fMg5WeP0V9WftS/sk3HxB/a38d2nhW38LeEfDHhm1sZ727unTTdL07zLaLAOxcBnbccBeTknrXmWvfsTeMPDeoeJre6n0Pd4Z0MeJPMiumlj1SwJx51syoQ6jHO7ZS5kDizyCivZLv8AYc8ZaZqrWt5Notl5fhFvGcs000ojitFxuiYiMnzwTgqAR/tY5qSz/YR8bX3gGLWo7rw39tn0j+3otCOpAavJY9fPEOMbSOfvZ7Y3cU+ZBys8XooopkhRRRQAUUUUAFFFFABXK/G7TrW8+FmuXFxawXL6ZZS39v5i58uaJDIjDuMMo6EZGR3rqq5r4z/8ke8Wf9ga8/8ARD0PYcdzwysHxt/y6/8AA/8A2Wt6sHxt/wAuv/A//Za4zrN6iiigD3P4Mf8AJHvCf/YGs/8A0Qle5/BK6X4e+CvEHjDapvLZVsNOYj/VzSdXHuFrwz4Mf8ke8J/9gaz/APRCV7KJjN+zb5cZ/wBTrG6UDtlOM/rXWtjl6nbfs7eHrHwN4N1L4w+I2mvm0e8NvpdkGwby8IGHdj/CC+eOflY84AN74Nrb6fpuv/HPxZuvLm11KQadYRfItzevghiTnCLv4A5GwnnaAdLwL+zj8eNG+FeteC9T+BvxcvvD+tEXMTR+Eb8TWFyNpWVMw4ZTsUMhxkZwRk5XwP8As3/HrRPhbrngrVPgX8XL3QdYYXETR+Eb9ZrC5UqVlTMOGU7FDIcZGcEZOVcCh8Glt9K0rXvjp4s3Xl3DqUi6bYRfItzeP/ESc4RS+AByNhPOAD4T4w8VXfjnxVqOsX7K15qlw9zMVGFDMSSAOwGcAegr6G8D/s4/HrRfhVrfgnVfgX8XL7QdXYXELR+Eb9Z9PuQVKyJmHDKSoDIcZGcEZOfG/iP+z144+CJsT448GeLPB/8AaQc2a63pFxp/2vZt37PNRd23emducblz1FUtQexx8Fq0/svrXsH7Ivxn0H4LeNdat/EiXTeHvF2i3Og6jLarvmtY5sfvVXvjGCOuGJAJAB8kuL3jbHwPWqxOaHa1idj6Q0Xx98Iv2bbrw3qPhvUL34h+JrHxBDqE2qCxuNNjs7FMb4FikfDytyQxBAyeRgZ6Dxb8fvhx8K/DPxM1Dwd4j1DxZrnxQ1KC8FlcaXJax6Oi3D3DLK78Stl2UFPb3NfJ9FTylcx9keJv2nPhfYePPHXxU0rxBq194m8beHW0mLwxLpkifYJ5Ioo2eS4J8t0XygcLzyfatLX/ANsT4e/Eb4U6T8MNa1prfwxeeCLG1n1SKxufM0nV7cZCOoTdLHlI87Qy5HXDEj4loo5EHOz7H/Zw/aj8A/Dnw/8AA2z1XxEkMngubX/7XKWNy62wuTP5BGI8uH3qflyRn5gvOOT+Af7S3h34afArQtNaaa+8Qaf8Sode/syK2kaSez8hYyyNt8vcTkBS27OOMc18yU6GZ7eVZI2aOSMhlZTgqR0INHKg5mfdfxd8A6T4B/Zs/aA1y0vvEEieNtSsrxY9X0KfSmgle9MhgTzsNMy+Y25lUAADk848D/Zt+KPhJvgl46+HHjDWLnwzZ+KpbS9tdYisnvEt5YHDFJIk+dg2Fxjpz7V5V4s+J/ibx7bQQ674i1zWobX/AFKX9/LcrD2+UOxA/CsOjl01ByPqPQvi18KZPCnjz4Z/8JN4m0/wt4gg09rLxJf2j3j/AGi2fe+YEw6wsQoReq4YnGRjpR+1t8P7O+1jQ7PVro6HovwuuPB+lahc2UqyaxeMEwQiqxjVtoxvwBg5IGK+N6KOVBzM+pvhv+1D4P8ABHg79npZ9QlmuvAuoanJrcEdtLus47iZtjAlQr/K27CFjxjrxWp8KP2kPA/w68S/FbwzD4vEOj+Mb6LVNK8TSeHTeQwy7vMeKWzlVmYAtsB2/wAJYbcjHyLRRyoOZn1t8Qv2qPD/AIl+EXxU0TUPHH/CVanq9jo9lo9z/wAI+2mLdpb3EkkiLHGpVFQOSDIVJzgDgVseGv2p/Aen/Fz4c302sTf2XY/DmPwvqlzHZTN/Z9yUOQVKhnCkAZTcDngmvjGnwztC3y/l60cqDnZ0mjvpfgv4x2bQal/aGi6XrEbR6h9meH7RbxzAibyjll3KN205Izjmvom5/ai8D337VfxamutSuv8AhC/iVpD6OmsW1nIZLMtBGolMTBXKghwVxk8dq+W/3d8no36iqs0LQPtb8/WqcQ5rH2Z8J/2ovhr8G/Gnwl8NWfiS61Twz4G/tW61DxBNpk8KzTXUUoRI4AGlChnweO4Pqa+ONTmW41K4kQ7lklZlPqCTUFFJKwOVz6z+Jv7cGjzfBX4Qx6HctN4o0C7sLzxAqwyRsTYLsiRnZQrh9zt8pI45xwK3/E37YHgC+/4KA+BfE1jq4t/APhXS7i1+1LZXAVJZoLrcRFs8zl5Y14XHGenNfFtFLkQc7PqG6/aK8GyaZ+z7GusfP4H8R3d/rY+yT/6FC+oRzK33PnzGpOE3HjGM8VreO/jz8M/jZ4S8XeHdZ8U33h+3tfHVz4p0q9t9Jlul1a3kDgRhPlKSHccGTaBlffHyRRRyhzM+zvir+1H8NvjL40+LXhu98SXWleGfHa6Vc6fr8WmTTLBNaxRb0kgwshUsmBgdie4NZ+kftbeAtO/aA8G6V9turn4c6D4Pk8G6lqdzaSK+oxPEdz+UoMgQusQ24yPmPTFfINFHKg52fYXxZ/bu0H4m/s+fEC1kuGTxdqOpXOl6Kv2eQE6LNcRS4L7dowqMu0kHkYHWqOk/Hj4X3vwZhsfEniC88U21p4cNhZ6Dq+grLq2m3oXC/ZtRjRAtup+6GJIXt/CPkuijlQc7O4svAPg2fxB4YtpvH0VvY6tZ+fq95/Ytyw0KbYT5BQfNP8wC74+Oc9BWXN4X8Pp4F1DUF8URvrVvqP2a20n+zpgbu2wD9p877iDOR5Z+biuboqiQooooAKKKKACiiigArmvjP/yR7xZ/2Brz/wBEPXS1zXxn/wCSPeLP+wNef+iHoHHc8MrB8bf8uv8AwP8A9lrerB8bf8uv/A//AGWuM6zeooooA9z+DH/JHvCf/YGs/wD0Qleq/DHWYLm01Dw/fSLHa6so2O3SOUfdNeVfBj/kj3hP/sDWf/ohK6UHBrrjscnU/pb/AOCcn7V2n/tY/swaBqX2iP8A4SfQ7WLS/EdkW/e2t7GgVnK/3JceYh6ENjOVYD3mv5hf2ef2xvGn7N/i+DXPDOu6jourQJ5Iu7RhmaPIPlzRsCkyZAO11IyAeoBr7G0H/g4u+NOn6Uscln8NdSZR/r73RbtJnwO/lXSJ78KOprJ0nfQ2jUVtT9tK/BP/AIL3ftlaR+1B+1fZ6B4ZvItR8O/Dq0k00XcLboru9kcNctG3dF2RR56ExMQSCDXK/tTf8Frfjj+014WvNAuPEVj4b0O+Rorq08OWjWIukOQUaV3ebYQSCokAYcMDXyDVQp21ZM6l9EFFFdt8B/h3p3xK8V3tnqEl2/2XT5bu2sLSaOG61eZSgW2ieQMquQzN91iRGQFJIFaGRxNFe2aL8EvC+qXHja3C6los2k+GY78w+I/Nhm8PXf8AaFtC6ymNF84eS7EERZIlACbwK5u7/Zl1TSrq9k1DXPDenaLaRWcqazPNN9iuxdxmS3EW2JpSzornBjG0I27bilcfKzzeivVtN/Y38Yap4r0zRYzpK32p3t9YANcny7eW0jjlYSOFK4kSWIxlSwbzF6ZrivEHw01Dw1aeHJLhrbzvE1sbu2t1ZvOhTz5IF8wEAKWaJiACflwTjOKYWZz1Feza18DvCL+MPFXgrTLnxAfFXhO1vpHv55YmsNRmso3kuYlgEYeIERS7HMj5KrlV3ccsP2e9Wj8RX2nzaho9udN0G28R3E7vKYktZ47eRfuxli6rcJuAX+FsE8ZVwscFRXs3xE/ZKh8K+JtejtPGnhr+xdBmsba5vr37VF5Ut1FLIiFRAWY/uWJKBgA6Enh9nO6z+zJ4k8PazpGn3smmwXWteIJfDcK+czBJ4/s58xiqkeUwuoyrKWJGTjpkug5Wed0V6N8VvgZafDL4beHNY/4SLT9Q1LV7m7trmxhjnBhMEhQlWaJVIUja2Wzll2hlyRk/F74eWvgTXdDs9Pa7uP7V0HTdTcSkM3nXNtHK6rtA+UM5Cjk4xkk807hY4+ivTNR/ZT8SQXxsbG60XWtWttSt9I1DTrG4drjS7qdikcc25FQ/OChaNnVWGCwOKyfH3wRuPAvhKPXI9e8O69psmovpfm6ZNM+24RA7qRJGhwAR8wyrZ+Ukc0XCzOJooooEKrFGyODVuKVbxNrfeqnQrbTkUAPnhMD7T+B9aZVyN1vYdrfeFVZEMblT2pgNooopAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXNfGf/kj3iz/sDXn/AKIeulrmvjP/AMke8Wf9ga8/9EPQOO54ZWD42/5df+B/+y1vVg+Nv+XX/gf/ALLXGdZvUUUUAe5/Bj/kj3hP/sDWf/ohK6Wua+DH/JHvCf8A2BrP/wBEJXS11x2OMktofPkx/D3qa9n2jy1/GnL/AKFbZ/ib+dUycmqAKKKKQBXbfB+zt2h1m41DSdD1nS2tmt7iK71u10u8hIjluhLatK24yBbWRcrHIGaRItpknhR+JooA+gPGXinVG0XXNLisfC8enx+GW8M25fx1pl9dRRwX9xetI0qyf6QxbT7hEWNVUrJaCPP2i2E8uueJ7nUvC7aB4i0fwzqOh6bY2cLRWPj3S0uPtOmxahF50UivIGWRLa5Hlqj799p5bE3NsZvntVLtgcmrdvZCP5m+ZvT0pKJXMfQWr/ErxpHpPjqFl8F291rt8l3Bc2fi3TZP7IW1Nxvjtws7GXeulqispJcLbbd/2y383n/j7putfE/4n6j4kZfB+krapsis7TxbplxHarbJdBhEVn+fc1jcOu0HeZrfZu+1W3m+S1Xv5tqBR/F1quVLUOY988ZeLLhNS8U65a6J4Ts/F+uW19banqMXjrTLm0zIt6l3LbW6SZ8yVbS6CkSyBvPg8tT9qtfMbrHii6ttA1j7Ro3heTxBceGf+EXvL+Lx7pksDQ2izIssUCOS0hTSnHyyOJd9sYx/pdt53zzRU2DmPqLxN4i0fxJ4O8Zf8JFp+hyajql7pt3Pp9j4700/aW0+DVYbieCdd6Kp+z4SE+Y0omiMRcXFuWq3/wAUNQm8QtqPiHQ/COoyeHfEMviDTIrDx5pscds0SSRtAdskhuI9mj4QoVZy1uVLi8thL8z0UuUOY9m+KtrqXjDwTDpl1beFYbzQdS1O8jurfxrpdxG0Msl5JLEI1lJkYPYzbHRsOHtwqN9rtjLpfEG2sdfsrO6utJs4fEfhvR4NMjvLP4kaLLaNJYQXMSzLAI2aQE6dKwRJT5m+2CMftVsZfB6KdgufTDfEjWfDHjHUNa0PS/BOla9qmtx6xrdxJ450y8tbmW1mvJnSBFlBSGSWznfAeUvutRG2Lq2E2D8eNK0Xw5+ztZ6bpKaDYyp4nkvJ7G18XWeuTRpLb7I3BhIzGTBIPlVvLAj8xgZot/hcFm03J+Vf51ajtY4v4cn1NNRDmKSQPJ91TSSJ5bYPX+VWry68sbV+93PpVOgkKKKKAHRSGJ9wq1cILqASL94VTqexn8t9p+6386YEFFTXkPky8fdbmoaQBRRRQAUUUUAFFUfEXiK38M6d9ouPMZWcRoka7nkY9FA9evsACawv+Fqp/wBAXWfzt/8A47ScktylFvY6uiuU/wCFqp/0BdZ/O3/+PUf8LVT/AKAus/nb/wDx6lzIOSR1dFcp/wALVT/oC6z+dv8A/HqP+Fqp/wBAXWfzt/8A49RzIOSR1dFcp/wtVP8AoC6z+dv/APHqP+Fqp/0BdZ/O3/8Aj1HMg5JHV0Vyn/C1U/6Aus/nb/8Ax6tfwz4st/FMc3kpPDNbsFlhmUB0zyDwSCDzyCRwfSjmT2Bxa3NSua+M/wDyR7xZ/wBga8/9EPXS1zXxn/5I94s/7A15/wCiHqhR3PDKwfG3/Lr/AMD/APZa3qwfG3/Lr/wP/wBlrjOs3qKKKAPc/gx/yR7wn/2BrP8A9EJXV2UXmTey81ynwY/5I94T/wCwNZ/+iErsbYfZ7Rm7nn/CuyJxkN9N5ku3svFQ0E5ooAKKKKAChRuOB3oq5Y2+1d56npQA+2thAv8AtHqaloorQAqnqH+vH0q5UN1beeBj7wpMCjRUk9u0G3dj5vSo6gAopUbY2cA+xFXUijuY921fw7UAUQMmrltZbPmblvT0p8FosDFuvpntUtUogFR3E3kxbvyqSqV/Lul29lpsCAncc0UUVABRRRQAUUUUAXD/AKXaf7S/zqnVjT5NshX+9UdzH5UzD8RTAjooopAFFFFAHKfFU/udF/7CJ/8ASeesKt34q/6nRf8AsIn/ANJ56wq56m50U9j0f9lT4IWnx++L8ej6pqFxpOg6bpeo6/rN5bxCWeGx0+ymvbjykJAaVo4GRATjc654zXQar8Nvhb8XP+Efj+Huuah4N1a+1Cez1HTfHGrwy29napD5q3/9oRW0Eew7ZEMHlmXcECeaXArkP2dvjhdfs8/FW08SW+n2msW4trvTdQ026Zlg1Oxu7aS1urdypDKJIJpFDDlSQw5Ar1f4Zftp+B/gX400G88F/CmTTtP019Rlubq+1+O78RySXdm1qrW2pLZxra/Zgxlhxbttl+di5C7czQoL/wAE8fEUkt5dp4y8At4XtfCq+M4/Ehub1NOu9N/tOPTJHjVrUXPmR3LsGieFXIjbarsUV477/gnv4i0DUtUm1rxd4B0Hwpp0GlzweKr28u/7J1T+04GuLFbfy7d7hmkijlYhoV8sRP5nl456v4v/APBSv/haPw+1Dw//AMIvrjfbPAj+Bk1DWPFMmrXzIdfi1hbqaV4FMsgEfklRtXncuxVEQzdT/b20Xx/8PLHwX4z8A3mteEbPSdAtltrHxD9gvEvtJtZ7VLpJzbSKI5oriVZITGxxt2yKV3EAyvh3/wAE3/HfxBvLi1/tLwno95J4juPCOkQ3t9JIPEmqwbPMtrSSCKWIgGWECaV44SZowJCTgYH7RPwm0b4efAT4G6tY6a1jrXi3w7qd5rcjSyM1zcQ67qNojFWYqhWG3iTCBQdmSCxJPdfDj/gop/wiHw9uvCs+geKNJ0G28Q33iDRLPwZ40ufDqacbsRB7OY+XO1zbL5EWwEpKvz4l+c15N8Xvjy/xY+GHw08Oyac9rJ8PdJvdMa8e785tTNxql5fmUrtGwj7XsxubOzdkbtoAPPa1Phqf+Kp1j/r0tP8A0O4rLrU+Gv8AyNOsf9elp/6HcVpT+Iip8J2lc18Z/wDkj3iz/sDXn/oh66Wua+M//JHvFn/YGvP/AEQ9dBzx3PDKwfG3/Lr/AMD/APZa3qwfG3/Lr/wP/wBlrjOs3qKKKAPVvhd8UPDeh/DjRbG+1qx02bTbZLBlv5VtWkaFQhZQ5G5TgMCpIww5zXTXfxu8GvEqr4s8NH1/4mcP/wAVXgdFaqq0rGXske5/8Ln8H/8AQ2eGv/BnB/8AFUf8Ln8H/wDQ2eGv/BnB/wDFV4ZRT9qw9kj3P/hc/g//AKGzw1/4M4P/AIqj/hc/g/8A6Gzw1/4M4P8A4qvDKKPasPZI90j+M3g0uN3izw0F7/8AEzh/+Kq8Pjn4KH/M3eGv/BlD/wDFV8+0Ue2aD2SPoL/hengr/obvDX/gyh/+Ko/4Xp4K/wChu8Nf+DKH/wCKr59op+3YeyR9Bf8AC9PBX/Q3eGv/AAZQ/wDxVH/C9PBX/Q3eGv8AwZQ//FV8+0Ue3YeyR71e/G3wbMV2+LPDRx/1E4f/AIqoP+Fz+D/+hs8Nf+DOD/4qvDKKXtmHske5/wDC5/B//Q2eGv8AwZwf/FVPZfG7wbCW3eLPDQU/9ROH/wCKrwWij2zD2SPoL/hengr/AKG7w1/4Mof/AIqj/hengr/obvDX/gyh/wDiq+faKft2HskfQX/C9PBX/Q3eGv8AwZQ//FVRk+NPg93Zv+Es8NcnP/ITg/8Aiq8Lope2bD2SPc/+Fz+D/wDobPDX/gzg/wDiqP8Ahc/g/wD6Gzw1/wCDOD/4qvDKKPasPZI9z/4XP4P/AOhs8Nf+DOD/AOKo/wCFz+D/APobPDX/AIM4P/iq8Moo9qw9kj3P/hc/g/8A6Gzw1/4M4P8A4qj/AIXP4P8A+hs8Nf8Agzg/+Krwyij2rD2SPdI/jT4PSRW/4Szw1wf+gnB/8VU178bPBkxUr4t8NHsf+JnD/wDFV4LRR7Zh7JHuf/C5/B//AENnhr/wZwf/ABVH/C5/B/8A0Nnhr/wZwf8AxVeGUUe1YeyR7n/wufwf/wBDZ4a/8GcH/wAVR/wufwf/ANDZ4a/8GcH/AMVXhlFHtWHskeyeIviL4H8T6d9nuPFnh5VVxIjx6rCrxsOjA7uvX2IJFYf9o+C/+ijWf/gysP8A4ivN6Kl1L7oap22Z6R/aPgv/AKKNZ/8AgysP/iKP7R8F/wDRRrP/AMGVh/8AEV5vRRzLsPlfc9I/tHwX/wBFGs//AAZWH/xFH9o+C/8Aoo1n/wCDKw/+IrzeijmXYOV9z0j+0fBf/RRrP/wZWH/xFH9o+C/+ijWf/gysP/iK83oo5l2Dlfc9I/tHwX/0Uaz/APBlYf8AxFbHhnx34G8LRzeT4u0Gaa4YNLNNqtuzvjgDggADngADk14/RQqltkJ077s9z/4XP4P/AOhs8Nf+DOD/AOKrC+KPxR8N678ONasbHWrHUptStnsFWwlW6aNplKBmCE7VGSxLEDCnnNeU0U/asPZoKwfG3/Lr/wAD/wDZa3qwfG3/AC6/8D/9lrI0N6iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKwfG3/Lr/wAD/wDZaKKAP//Z"},92744:function(e,t,n){t.Z=n.p+"assets/images/importing-assets-05-424a3f2e483e230d3e14f02e8d2ca612.jpg"}}]);