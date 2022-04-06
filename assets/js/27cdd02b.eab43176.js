"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9418],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),f=i,m=d["".concat(l,".").concat(f)]||d[f]||A[f]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32547:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return A}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),s=["components"],r={title:"Creating Custom Maps",description:"How to create and export maps from Unreal to nanos world",tags:["assets"],keywords:["map","level","unreal"]},l=void 0,p={unversionedId:"assets-modding/creating-assets/maps-and-levels/importing-maps",id:"assets-modding/creating-assets/maps-and-levels/importing-maps",title:"Creating Custom Maps",description:"How to create and export maps from Unreal to nanos world",source:"@site/docs/assets-modding/creating-assets/maps-and-levels/importing-maps.md",sourceDirName:"assets-modding/creating-assets/maps-and-levels",slug:"/assets-modding/creating-assets/maps-and-levels/importing-maps",permalink:"/docs/next/assets-modding/creating-assets/maps-and-levels/importing-maps",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/maps-and-levels/importing-maps.md",tags:[{label:"assets",permalink:"/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1649242488,formattedLastUpdatedAt:"4/6/2022",frontMatter:{title:"Creating Custom Maps",description:"How to create and export maps from Unreal to nanos world",tags:["assets"],keywords:["map","level","unreal"]},sidebar:"main",previous:{title:"Importing Mixamo Animations",permalink:"/docs/next/assets-modding/creating-assets/animations/mixamo-animations"},next:{title:"Map Script and Configuration",permalink:"/docs/next/assets-modding/creating-assets/maps-and-levels/map-script-and-data"}},c={},A=[{value:"Rules for creating a Map/Level for nanos world",id:"rules-for-creating-a-maplevel-for-nanos-world",level:2},{value:"Creating a Map in Unreal Engine 4 from Scratch",id:"creating-a-map-in-unreal-engine-4-from-scratch",level:2},{value:"Video Tutorial by EinfachMax",id:"video-tutorial-by-einfachmax",level:3},{value:"Importing your Map into your Server",id:"importing-your-map-into-your-server",level:2},{value:"Configuring your Map",id:"configuring-your-map",level:2}],d={toc:A};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Maps and Levels are quite the most straightforward asset that you can create and import. In Unreal, Maps are called ",(0,o.kt)("inlineCode",{parentName:"p"},"Levels"),", usually these levels are filled with a Landscape component to make the terrain, some Lights and some Static Meshes ","(","Trees, Houses, etc",")","."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/Engine/Levels/HowTo/WorkWithLevelAssets/index.html"},"Unreal\u2019s Official tutorial - Working with Levels"),"."))),(0,o.kt)("h2",{id:"rules-for-creating-a-maplevel-for-nanos-world"},"Rules for creating a Map/Level for nanos world"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Do not spawn/place ",(0,o.kt)("strong",{parentName:"li"},"Dynamic Meshes")," (with Physics), as they will not be synced in-game. You need to spawn them as a ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/scripting-reference/classes/prop"},"Prop")," on the scripting."),(0,o.kt)("li",{parentName:"ol"},"Add a \u201c",(0,o.kt)("strong",{parentName:"li"},"Sun"),"\u201d actor-tag to all Lighting/Sky/Sun related actors (",(0,o.kt)("strong",{parentName:"li"},"DirectionalLight"),", ",(0,o.kt)("strong",{parentName:"li"},"SkyLight"),", ",(0,o.kt)("strong",{parentName:"li"},"DomeMesh"),", ",(0,o.kt)("strong",{parentName:"li"},"SkyAtmosphere")," or ",(0,o.kt)("strong",{parentName:"li"},"SunSky"),"), this will allow, if wanted, to your light to be overridden by scripters to use, instead, the Official nanos world Sun through ",(0,o.kt)("inlineCode",{parentName:"li"},"World.SpawnDefaultSun()"),", which allows in-game light/sun customization."),(0,o.kt)("li",{parentName:"ol"},"If you are creating a Map, please remember to nullify (set to None) all references it has for Unreal ",(0,o.kt)("strong",{parentName:"li"},"GameModes")," Override in the World Settings.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GameMode Overrides nullified",src:a(45925).Z,width:"366",height:"362"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Most of ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/scripting-reference/static-classes/world"},"World")," functions rely on our own assets and code, so it is not (yet) possible to change the lighting or weather in your custom Map with World scripting functions."))),(0,o.kt)("p",null,"After exporting your project (refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/assets-modding/creating-assets/importing-assets#exporting-and-cooking-your-assets"},"Creating Assets"),", you can just reference your map in your server config like ",(0,o.kt)("inlineCode",{parentName:"p"},"MyPack::MyLevel"),"."),(0,o.kt)("h2",{id:"creating-a-map-in-unreal-engine-4-from-scratch"},"Creating a Map in Unreal Engine 4 from Scratch"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Attention! This page is old and this tutorial may be outdated! Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/assets-modding/creating-assets/adk-assets-development-kit"},"ADK")," for a modern approach."))),(0,o.kt)("h3",{id:"video-tutorial-by-einfachmax"},"Video Tutorial by EinfachMax"),(0,o.kt)("iframe",{width:"760",height:"425",src:"https://www.youtube-nocookie.com/embed/2FGkWdn9JP4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"The first step is to create a folder inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content/")," folder, ",(0,o.kt)("em",{parentName:"p"},"this step is very important"),". Rename this folder with the Asset Pack name you desire"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Expand the tab"),(0,o.kt)("li",{parentName:"ol"},"Right click on Content"),(0,o.kt)("li",{parentName:"ol"},"Create a New Folder")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7120).Z,width:"1919",height:"1036"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(71568).Z,width:"398",height:"82"})),(0,o.kt)("p",null,"Now let\u2019s create the Map itself, in Unreal maps are called ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/Engine/Levels/index.html"},"Levels"),", to do so:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right click on the Content space"),(0,o.kt)("li",{parentName:"ol"},"Create a new Level")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(39264).Z,width:"1919",height:"1037"})),(0,o.kt)("p",null,"Rename it with the map name you desire, save it and open it up. You will notice the Viewport got black, this is because the Map you just opened doesn\u2019t have anything, let\u2019s add some stuff into it: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(10282).Z,width:"1919",height:"1039"})),(0,o.kt)("p",null,"First let\u2019s add a floor, for that just drag-and-drop a Plane from Place Actors -> Basic window into the Viewport:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1113).Z,width:"1919",height:"1039"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(98678).Z,width:"1919",height:"1039"})),(0,o.kt)("p",null,"With the plane selected, you will notice it is a simple Static Mesh, this Static Mesh is a model already included in the Engine, so it is important that you copy this Mesh to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Content/YourAssetPack/")," folder to avoid any further export problem: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(26733).Z,width:"491",height:"1040"})),(0,o.kt)("p",null,"To find where your Mesh is located, press the magnifying glass at the right of the Static Mesh item at the right of the screen: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(23063).Z,width:"380",height:"161"})),(0,o.kt)("p",null,"This will open the Engine\u2019s folder which contains some Basic meshes which come with the Engine: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13957).Z,width:"1919",height:"362"})),(0,o.kt)("p",null,"Let\u2019s copy some Basic Meshes into our AssetsPack folder to be used later, including the Plane: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(96453).Z,width:"1176",height:"330"})),(0,o.kt)("p",null,"Use CTRL+C + CTRL+V to copy the assets into your folder: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(52372).Z,width:"1563",height:"363"})),(0,o.kt)("p",null,"Now let\u2019s replace the plane mesh we were using to our copied mesh, for that, just "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the copied Plane mesh"),(0,o.kt)("li",{parentName:"ol"},"Press the arrow on your Plane Actor to replace it\u2019s Static Mesh ","(","alternatively you can just Delete the spawned Plane and drag and drop the new Plane from your assets pack\u2019s folder",")",": ")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(60488).Z,width:"1912",height:"477"})),(0,o.kt)("p",null,"After that, with your Plane ","(","floor",")"," selected, let\u2019s just scale it to ",(0,o.kt)("inlineCode",{parentName:"p"},"X = 10, Y = 10, Z = 10")," and centralize it on ",(0,o.kt)("inlineCode",{parentName:"p"},"X = 0, X = 0, X = 0"),": "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(22903).Z,width:"415",height:"742"})),(0,o.kt)("p",null,"We can also add some lights, for that, just drag and drop a ",(0,o.kt)("strong",{parentName:"p"},"Directional Light")," ","(","Sun Light/Shadows",")"," and a ",(0,o.kt)("strong",{parentName:"p"},"Sky Light")," ","(","Shadow\u2019s Color",")"," into your level ","(","you can fly around with Right Click + WASD in the viewport, or press F to centralize the Plane - if selected",")",": "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(39553).Z,width:"1919",height:"1001"})),(0,o.kt)("p",null,"Great job, now we can see the stuff! Now let\u2019s add some color to it, applying color and textures in Unreal are made through ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/Engine/Rendering/Materials/index.html"},"Materials"),", for that, let\u2019s just create a Material"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right Click"),(0,o.kt)("li",{parentName:"ol"},"Create new Material")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(20374).Z,width:"1199",height:"900"})),(0,o.kt)("p",null,"Rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"M_Plane")," and open it up: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2962).Z,width:"1919",height:"1031"})),(0,o.kt)("p",null,"We won\u2019t cover all aspects of Materials in this tutorial, for now let\u2019s just pin a Vector3 node with a color into Base Color input, for that Right Click on the screen and search for ",(0,o.kt)("inlineCode",{parentName:"p"},"Constant3Vector"),": "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(92782).Z,width:"800",height:"617"})),(0,o.kt)("p",null,"After that, pin it into Base Color input: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(130).Z,width:"624",height:"632"})),(0,o.kt)("p",null,"Select the Vector3 node and select a color for it: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(67190).Z,width:"1465",height:"960"})),(0,o.kt)("p",null,"Now save and close this Material window, and you are able to drag and drop your material into the Mesh you want, let\u2019s do it for the Plane: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(88847).Z,width:"1190",height:"882"})),(0,o.kt)("p",null,"And voila, it gets greenish (or the color you selected in the Plane\u2019s Material screen)!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(40138).Z,width:"1237",height:"558"})),(0,o.kt)("p",null,"Now let\u2019s drag\u2019n drop other Meshes into our Level, like so: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(54079).Z,width:"1254",height:"905"})),(0,o.kt)("p",null,"Also, the ADK project provides a built-in Sun & SkyBox Actor ","(","to fill up the sky with color and clouds",")",", to add it, just look into ",(0,o.kt)("inlineCode",{parentName:"p"},"NanosWorld/Blueprints/World/")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"BP_SunSky")," and drag it to the viewport."),(0,o.kt)("p",null,"You can create a new Material and use it to paint these meshes as well: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(73380).Z,width:"1320",height:"891"})),(0,o.kt)("p",null,"If you ","(","1.",")"," select the Directional Light, you can change it\u2019s ","(","2.",")"," Rotation, also, remember to set it to ","(","3.",")"," Movable, so it\u2019s shadows work in Real Time, feel free to tweak the light as you want, including it\u2019s Color and intensity: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4594).Z,width:"1850",height:"1078"})),(0,o.kt)("p",null,"When you are fine with it, move your camera to see the whole map and take a screenshot of it, we will use that for a Thumbnail afterwards ","(","save it anywhere with the same name as your Map as .jpg, in our case: ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeMap.jpg"),")",": "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(67460).Z,width:"1919",height:"1039"})),(0,o.kt)("p",null,"And we are done! Save everything and let\u2019s export it: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(73421).Z,width:"1919",height:"1039"})),(0,o.kt)("p",null,"Select any folder in your computer and wait it to finish:  "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1761).Z,width:"1909",height:"366"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(85574).Z,width:"1911",height:"1014"})),(0,o.kt)("h2",{id:"importing-your-map-into-your-server"},"Importing your Map into your Server"),(0,o.kt)("p",null,"Open your Packaged folder and you will have something like this: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13801).Z,width:"1081",height:"643"})),(0,o.kt)("p",null,"Copy the Thumbnail to the same folder as your Level (should be in ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeAssetPack/Content/MyAwesomeAssetPack"),"): "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(77477).Z,width:"1909",height:"983"})),(0,o.kt)("p",null,"Now jump to the (1.) ",(0,o.kt)("inlineCode",{parentName:"p"},"Content/")," folder and (2/3.) copy your whole ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeAssetPack/")," folder: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(34681).Z,width:"1193",height:"758"})),(0,o.kt)("p",null,"And paste it inside your server\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets/")," folder: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(36057).Z,width:"1215",height:"731"})),(0,o.kt)("p",null,"Open the folder you copied and create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets.toml")," file in it, ","(","you can paste the content located at ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/assets#assets-pack-configuration"},"Assets Configuration File")," into this file. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7559).Z,width:"1114",height:"672"})),(0,o.kt)("p",null,"You will end up with something like that, remember to add an Entry to ",(0,o.kt)("inlineCode",{parentName:"p"},"assets.maps")," list with the ",(0,o.kt)("strong",{parentName:"p"},"MapKeyName")," = ",(0,o.kt)("strong",{parentName:"p"},"MapPath")," pattern, the Map Key Name can be whatever you want, as our map is in the root of our Asset Pack, the Path is just ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeMap")," and we gave the key the name ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAwesomeMap")," as well: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(32619).Z,width:"1919",height:"1030"})),(0,o.kt)("p",null,"Now you can add your map to your Server\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.toml")," settings: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2777).Z,width:"1018",height:"777"})),(0,o.kt)("p",null,"Or just open the game and ","(","if you are using the built-in nanos world Server",")",", you will find your new map in the ",(0,o.kt)("inlineCode",{parentName:"p"},"New Game")," screen like that with your thumbnail: "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(48232).Z,width:"1919",height:"1079"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can now just start the New Game with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Sandbox")," package selected and VOILA! Your playable new map made from scratch! "))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(72627).Z,width:"1919",height:"1079"})),(0,o.kt)("h2",{id:"configuring-your-map"},"Configuring your Map"),(0,o.kt)("p",null,"Also it is possible to add a Image, a Configuration File, Custom Data and even a exclusive Package (scripting) for your map."),(0,o.kt)("p",null,"After importing your map, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/assets-modding/creating-assets/maps-and-levels/map-script-and-data"},"Map Script and Configuration")))}f.isMDXComponent=!0},45925:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-01-9abc030a4464a65eae7e04ae51ed23a4.jpg"},7120:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-02-2d3538c22ab55e9531ee2e307f258700.jpg"},71568:function(e,t){t.Z="data:image/jpeg;base64,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"},39264:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-04-d04eca32121a1760c02f7801d2d4229d.jpg"},10282:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-05-b7cc6f2be6420d8c2397e11d131790b7.jpg"},1113:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-06-7075471bce4df954fa5d6c4e005584d3.jpg"},98678:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-07-a1296a66399910aecd6f07e46390f998.jpg"},26733:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-08-a1caf9421fbae13b3edf3df6e1a0b021.jpg"},23063:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-09-8c10e2cbc1986e1925554afbd79b434e.jpg"},13957:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-10-f8ae875e2de82b43da09bbbc3225fd37.jpg"},96453:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-11-8efca1c3e3e916217155d713772a3918.jpg"},52372:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-12-da26dc5f5a5347993e359838ee46fbbb.jpg"},60488:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-13-5ba55d36ea8a38dd29803d0df9720b13.jpg"},22903:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-14-2a0837815c01b46c629978ad28f356fe.jpg"},39553:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-15-9d491723b7098769665a2f61e675bc70.jpg"},20374:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-16-adb11953ffc772263669c9b57c7ae7f8.jpg"},2962:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-17-240826cab8520c5df348cba45d334a8d.jpg"},92782:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-18-94f2707efcb6c84644e0e5d9a84878e4.jpg"},130:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-19-0f635380b4dcf502e2e20cb13dbe4bab.jpg"},67190:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-20-94bde8bd09c156c09bf4c645107b2485.jpg"},88847:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-21-1545061a434461425b93dad1cf0e5901.jpg"},40138:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-22-1193abfb3025041bcfcc474d1e0b5439.jpg"},54079:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-23-db4cd7ff00759ed9d56d99f39d6fad44.jpg"},73380:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-24-16284095b37fbcfa51b68016ebdf1708.jpg"},4594:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-25-1ffd83aa5fe28a099acd924b6ac337ec.jpg"},67460:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-26-e763fc9e5067134413a575ce458c6b93.jpg"},73421:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-27-26720f69f462342f06bb130098da9038.jpg"},1761:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-28-6adb203f4b804720360a2e7fcd1dc52f.jpg"},85574:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-29-6d41c3e71f5245cdebb1a914c42845ff.jpg"},13801:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-30-195c1fefd860499e95d8c488e4887c6d.jpg"},77477:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-31-a2239871d72b0651c14b17f419a12734.jpg"},34681:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-32-50f0bf8c184a51f8616718a08cbf5863.jpg"},36057:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-33-a296d37e530d46cc5198d64695310c82.jpg"},7559:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-34-243eca5ab47cd1354211df998c7089b2.jpg"},32619:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-35-188dbcfd394d294fd5717c20046dd788.jpg"},2777:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-36-ffa6b8f50ff719ae19cbe46d16b876cf.jpg"},48232:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-37-219b2c123245046ad9e6fe1817f15a49.jpg"},72627:function(e,t,a){t.Z=a.p+"assets/images/custom-maps-38-e19bbece2f89c2ac72c7d1e9898024e0.jpg"}}]);