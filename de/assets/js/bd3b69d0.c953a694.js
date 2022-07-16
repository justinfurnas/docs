"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1526],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),s=["components"],i={title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",sidebar_position:2,tags:["verm\xf6gen"],keywords:["SDK","ADK","verm\xf6gen","kit","unreal"]},l=void 0,d={unversionedId:"assets-modding/creating-assets/adk-assets-development-kit",id:"version-latest/assets-modding/creating-assets/adk-assets-development-kit",title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/assets-modding/creating-assets/adk-assets-development-kit.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/adk-assets-development-kit",permalink:"/de/docs/assets-modding/creating-assets/adk-assets-development-kit",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/assets-modding/creating-assets/adk-assets-development-kit.md",tags:[{label:"verm\xf6gen",permalink:"/de/docs/tags/vermogen"}],version:"latest",sidebarPosition:2,frontMatter:{title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",sidebar_position:2,tags:["verm\xf6gen"],keywords:["SDK","ADK","verm\xf6gen","kit","unreal"]},sidebar:"version-latest/main",previous:{title:"Import von Custom Assets",permalink:"/de/docs/assets-modding/creating-assets/importing-assets"},next:{title:"Static Meshes",permalink:"/de/docs/assets-modding/creating-assets/static-meshes/"}},p={},u=[{value:"Downloading nanos world Assets Development Kit - ADK",id:"downloading-nanos-world-assets-development-kit---adk",level:2},{value:"Opening the Assets Development Kit Project",id:"opening-the-assets-development-kit-project",level:2},{value:"Tools available in the ADK project",id:"tools-available-in-the-adk-project",level:2},{value:"Placeholder Blueprints",id:"placeholder-blueprints",level:3},{value:"<code>NanosWorld/Blueprints/Placeholders/</code>",id:"nanosworldblueprintsplaceholders",level:4},{value:"Lua Code Generator",id:"lua-code-generator",level:3},{value:"<code>NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator</code>",id:"nanosworldblueprintsutilitywbp_luacodegenerator",level:4},{value:"Assets.toml Generator",id:"assetstoml-generator",level:3},{value:"<code>NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator</code>",id:"nanosworldblueprintsutilitywbp_assetstomlgenerator",level:4},{value:"Sun &amp; Sky Actor",id:"sun--sky-actor",level:3},{value:"<code>NanosWorld/Blueprints/World/BP_SunSky</code>",id:"nanosworldblueprintsworldbp_sunsky",level:4},{value:"Physical Materials",id:"physical-materials",level:3},{value:"<code>NanosWorld/MaterialLibrary/PhysicalMaterials/</code>",id:"nanosworldmateriallibraryphysicalmaterials",level:4},{value:"Mannequin Skeleton",id:"mannequin-skeleton",level:3},{value:"<code>NanosWorld/Characters/Common/SKEL_Mannequin</code>",id:"nanosworldcharacterscommonskel_mannequin",level:4},{value:"Thumbnail Generator",id:"thumbnail-generator",level:3},{value:"<code>NanosWorld/Blueprints/Utility/ThumbnailGenerator</code>",id:"nanosworldblueprintsutilitythumbnailgenerator",level:4}],c={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"nanos world Assets Development Kit - ADK"),(0,o.kt)("p",null,"nanos world provides a fully configurable and ready ",(0,o.kt)("strong",{parentName:"p"},"Unreal Project")," called Assets Development Kit (ADK) to help you integrating and exporting Assets and Maps much faster. This project contains ",(0,o.kt)("strong",{parentName:"p"},"Placeholders"),", ",(0,o.kt)("strong",{parentName:"p"},"Tools")," and ",(0,o.kt)("strong",{parentName:"p"},"Correct References")," that must be used in order to create ",(0,o.kt)("strong",{parentName:"p"},"Characters")," and make proper ",(0,o.kt)("strong",{parentName:"p"},"Physical Materials"),", for example."),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To be able to use the ",(0,o.kt)("strong",{parentName:"p"},"ADK"),", you will need to have ",(0,o.kt)("a",{parentName:"p",href:"#installing-unreal-engine-5"},"Unreal Engine")," installed.")),(0,o.kt)("h2",{id:"downloading-nanos-world-assets-development-kit---adk"},"Downloading nanos world Assets Development Kit - ADK"),(0,o.kt)("p",null,"Our ADK is uploaded in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/assets-development-kit/"},"GitHub"),", please download it latest version and extract it in your computer."),(0,o.kt)("h2",{id:"opening-the-assets-development-kit-project"},"Opening the Assets Development Kit Project"),(0,o.kt)("p",null,"You will find a file ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorldADK.uproject")," in there, just open it with Unreal Engine and you are set!"),(0,o.kt)("p",null,"You will notice we have two folders in the root directory: ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAssetPack/"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ADK Folders",src:n(25397).Z,width:"1516",height:"347"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can delete or rename ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAssetPack")," to anything you want to be your Asset Pack.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please do not ",(0,o.kt)("strong",{parentName:"p"},"MODIFY"),", ",(0,o.kt)("strong",{parentName:"p"},"DELETE"),", ",(0,o.kt)("strong",{parentName:"p"},"CREATE")," or ",(0,o.kt)("strong",{parentName:"p"},"COPY")," any file inside ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," folder, otherwise the ADK will not work properly. Also make sure you DO NOT modify them unintentionally! If asked to save any modified file in there, cancel it! All references must use ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," where they are."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," folder has some Assets which you can use to reference ",(0,o.kt)("strong",{parentName:"p"},"your")," assets and make the export keep the correct references when using them in-game.")),(0,o.kt)("h2",{id:"tools-available-in-the-adk-project"},"Tools available in the ADK project"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#placeholder-blueprints"},"Placeholder Blueprints ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Placeholders/"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#lua-code-generator"},"Lua Code Generator ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#assets-toml-generator"},"Assets.toml Generator ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#sunand-sky-actor"},"Sun & Sky Actor ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/World/BP_SunSky"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#physical-materials"},"Physical Materials ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/MaterialLibrary/PhysicalMaterials/"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#mannequin-skeleton"},"Mannequin Skeleton ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Characters/Common/SKEL_Mannequin"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"adk-assets-development-kit#thumbnail-generator"},"Thumbnail Generator ",(0,o.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")))),(0,o.kt)("h3",{id:"placeholder-blueprints"},"Placeholder Blueprints"),(0,o.kt)("h4",{id:"nanosworldblueprintsplaceholders"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Placeholders/")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Placeholder Blueprints overview",src:n(20802).Z,width:"1244",height:"287"})),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("strong",{parentName:"p"},"Placeholder Blueprints")," to set Spawn Positions of ",(0,o.kt)("strong",{parentName:"p"},"Vehicles"),", ",(0,o.kt)("strong",{parentName:"p"},"Weapons"),", ",(0,o.kt)("strong",{parentName:"p"},"Characters")," and ",(0,o.kt)("strong",{parentName:"p"},"Props"),". This works only to help you generating a Lua code with spawn positions after all. These Blueprints aren\u2019t cooked with the map. Use the ",(0,o.kt)("a",{parentName:"p",href:"adk-assets-development-kit#lua-code-generator"},"Lua Code Generator")," to generate the Lua script with all spawn locations."),(0,o.kt)("h3",{id:"lua-code-generator"},"Lua Code Generator"),(0,o.kt)("h4",{id:"nanosworldblueprintsutilitywbp_luacodegenerator"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lua Code Generator Widget",src:n(2949).Z,width:"1002",height:"606"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Lua Code Generator")," is an ",(0,o.kt)("strong",{parentName:"p"},"Editor Utility Widget")," which scans the map which is currently loaded in your Unreal and generate a list of spawn code with exact Location and Rotation for every ",(0,o.kt)("a",{parentName:"p",href:"adk-assets-development-kit#placeholder-blueprints"},"Placeholder Blueprint "),"you had spawned."),(0,o.kt)("p",null,"To open it, right click on it and press ",(0,o.kt)("strong",{parentName:"p"},"Run Editor Utility Widget"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(80741).Z,width:"362",height:"611"})),(0,o.kt)("h3",{id:"assetstoml-generator"},"Assets.toml Generator"),(0,o.kt)("h4",{id:"nanosworldblueprintsutilitywbp_assetstomlgenerator"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(47187).Z,width:"1005",height:"604"})),(0,o.kt)("p",null,"This is an ",(0,o.kt)("strong",{parentName:"p"},"Editor Utility Widget")," which scans a folder (determined by the TextBox) and generates the configuration for an Assets.toml with all Assets in the folder ","(","which can be used in nanos world",")","."),(0,o.kt)("h3",{id:"sun--sky-actor"},"Sun & Sky Actor"),(0,o.kt)("h4",{id:"nanosworldblueprintsworldbp_sunsky"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/World/BP_SunSky")),(0,o.kt)("p",null,"This is a pre-configured ",(0,o.kt)("strong",{parentName:"p"},"Sun & Sky Blueprint")," which can be used and easily replaced by nanos world Official Sun with ",(0,o.kt)("inlineCode",{parentName:"p"},"World,SpawnDefaultSun()"),". This is useful to get an approximate result of how the light will look like in-game if you decide to Spawn the Default Sun."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Overriding the Sun through Scripting with ",(0,o.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),", will respawn the Sun actor, which means no configuration did on the Sun & Sky actor will persist"),(0,o.kt)("p",{parentName:"admonition"},"Example: Light Intensity, Color, Post Process and other configuration will be lost.")),(0,o.kt)("h3",{id:"physical-materials"},"Physical Materials"),(0,o.kt)("h4",{id:"nanosworldmateriallibraryphysicalmaterials"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/MaterialLibrary/PhysicalMaterials/")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85410).Z,width:"1507",height:"316"})),(0,o.kt)("p",null,"If you are creating a ",(0,o.kt)("strong",{parentName:"p"},"Material"),", you can ","(","and should",")"," use these ",(0,o.kt)("strong",{parentName:"p"},"Physical Materials")," do integrate better with nanos world. Using these Physical Materials will allow nanos world recognize which type of surface your Prop/Object is, giving it the proper auto-generated Hit or Footstep sound."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"DO NOT ",(0,o.kt)("strong",{parentName:"p"},"modify")," or ",(0,o.kt)("strong",{parentName:"p"},"rename")," any Physical Materials, only use by referencing them in your Materials.")),(0,o.kt)("h3",{id:"mannequin-skeleton"},"Mannequin Skeleton"),(0,o.kt)("h4",{id:"nanosworldcharacterscommonskel_mannequin"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Characters/Common/SKEL_Mannequin")),(0,o.kt)("p",null,"To be able to create Skeletal ","(","Character",")"," Meshes which work with our ",(0,o.kt)("a",{parentName:"p",href:"/de/docs/scripting-reference/classes/character"},"Character")," class, you must set your Skeletal Mesh to use our ",(0,o.kt)("strong",{parentName:"p"},"Mannequin Skeleton"),". This Skeleton is the same as Unreal Engine 5 default Mannequin, so any Skeletal Mesh which uses UE4\u2019s Mannequin Skeleton will work for us!"),(0,o.kt)("p",null,"To change a Skeletal Mesh\u2019s Skeleton: right click on it ",">",">"," Skeleton ",">",">"," Assign Skeleton and change it to our ",(0,o.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(88622).Z,width:"943",height:"726"})),(0,o.kt)("h3",{id:"thumbnail-generator"},"Thumbnail Generator"),(0,o.kt)("h4",{id:"nanosworldblueprintsutilitythumbnailgenerator"},(0,o.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")),(0,o.kt)("p",null,"We\u2019ve shipped a ",(0,o.kt)("strong",{parentName:"p"},"Thumbnail Generator")," tool to help you generating ",(0,o.kt)("inlineCode",{parentName:"p"},".jpg")," images of your assets. To use that, just open ",(0,o.kt)("strong",{parentName:"p"},"ThumbnailGenerator")," level and hit Play. Then you will be able to define a folder for search the assets ","(","currently only Static and Skeletal Meshes are supported",")"," and a folder to save the images ","(",".jpg",")",". You can optionally keep the directory hierarchy in the output folder or save all images in the same folder. Once you hit ",(0,o.kt)("strong",{parentName:"p"},"Generate"),", it will start loading all assets and taking a photo from them."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note:")," this may be a slow process depending if your assets were already compiled previously."),(0,o.kt)("p",{parentName:"admonition"},"It is also recommended to generate the Thumbnails twice, so you grant they will be saved in the max quality possible.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9870).Z,width:"1487",height:"626"})))}m.isMDXComponent=!0},20802:function(e,t,n){t.Z=n.p+"assets/images/adk-01-6664a43bf743949943da69b00554bc55.jpg"},2949:function(e,t,n){t.Z=n.p+"assets/images/adk-02-cd11254c13506205ee09bd4e88531498.jpg"},80741:function(e,t,n){t.Z=n.p+"assets/images/adk-03-0ff436a1e51ca784fd1b2643207f6890.jpg"},47187:function(e,t,n){t.Z=n.p+"assets/images/adk-04-3195ee765d888ce3ad98323142edd12b.jpg"},85410:function(e,t,n){t.Z=n.p+"assets/images/adk-05-a101f7203ddd191ec9b0a25ec34f986a.jpg"},88622:function(e,t,n){t.Z=n.p+"assets/images/adk-06-18f6ce791b46ef55e82e514d2c2afbb2.jpg"},9870:function(e,t,n){t.Z=n.p+"assets/images/adk-07-6a11957e82b95344dbb2e4f35fc241fc.jpg"},25397:function(e,t,n){t.Z=n.p+"assets/images/adk-folders-770bb54719fade09742a52673a98db64.jpg"}}]);