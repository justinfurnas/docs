"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9479],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(a),m=r,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},36701:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={slug:"march-2022",title:"March: Steam, Databases & Blueprints!",authors:"gtnardy",tags:["updates"]},l=void 0,d={permalink:"/de/blog/march-2022",editUrl:"https://github.com/nanos-world/docs/edit/master/blog/2022-04-06-march.md",source:"@site/i18n/de/docusaurus-plugin-content-blog/2022-04-06-march.md",title:"March: Steam, Databases & Blueprints!",description:"Steam Store Page",date:"2022-04-06T00:00:00.000Z",formattedDate:"6. April 2022",tags:[{label:"updates",permalink:"/de/blog/tags/updates"}],readingTime:8.13,truncated:!1,authors:[{name:"Gabriel T. Nardy",title:"nanos world developer (SyedMuhammad)",url:"https://twitter.com/gtnardy",imageURL:"/img/blog/gtnardy.jpg",key:"gtnardy"}],frontMatter:{slug:"march-2022",title:"March: Steam, Databases & Blueprints!",authors:"gtnardy",tags:["updates"]},nextItem:{title:"February: Unreal 5 & Network Authority!",permalink:"/de/blog/february-2022"}},c={authorsImageUrls:[void 0]},p=[{value:"Steam Store Page",id:"steam-store-page",level:2},{value:"Please WISHLIST NOW!!!",id:"please-wishlist-now",level:4},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Memory",id:"memory",level:3},{value:"Network",id:"network",level:3},{value:"Client Side",id:"client-side",level:3},{value:"New Class: Blueprint",id:"new-class-blueprint",level:2},{value:"New Class: Database",id:"new-class-database",level:2},{value:"Vehicles Tire Skid Mark",id:"vehicles-tire-skid-mark",level:2},{value:"Sandbox Improvements",id:"sandbox-improvements",level:2},{value:"New Particle Methods",id:"new-particle-methods",level:2},{value:"Notable Improvements",id:"notable-improvements",level:2},{value:"Music Concurrency",id:"music-concurrency",level:3},{value:"Client-side Props",id:"client-side-props",level:3},{value:"Level Static Meshes",id:"level-static-meshes",level:3},{value:"Async Texture Loading",id:"async-texture-loading",level:3},{value:"Async File Loading",id:"async-file-loading",level:3},{value:"New Light Methods",id:"new-light-methods",level:3},{value:"Assets.toml Changes",id:"assetstoml-changes",level:3},{value:"Vehicle Collisions",id:"vehicle-collisions",level:3},{value:"Sun Improvements",id:"sun-improvements",level:3},{value:"Conclusion",id:"conclusion",level:2}],h={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"steam-store-page"},"Steam Store Page"),(0,i.kt)("p",null,"Recently we got a hitch in our Store Page which required us from getting a brand new one. And now we finally are re-releasing it! It got new screenshots, videos and a better description!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://store.steampowered.com/app/1841660/nanos_world/"},(0,i.kt)("img",{src:a(15038).Z,width:"969",height:"515"}))),(0,i.kt)("h4",{id:"please-wishlist-now"},"Please WISHLIST NOW!!!"),(0,i.kt)("iframe",{class:"steam-widget",src:"https://store.steampowered.com/widget/1841660/",frameborder:"0",width:"620",height:"190",loading:"lazy"}),(0,i.kt)("p",null,"A downside of this whole situation is that the old store and the old game entry will be deactivated. Soonish everyone will receive a new Steam Key to activate the new nanos world in your library!"),(0,i.kt)("p",null,"Also we embedded a tool to export (then import) your Achievements and Stats from the old game to the new one. You just need to launch the old game once before launching the new one and everything is imported automatically!"),(0,i.kt)("h2",{id:"performance-optimization"},"Performance Optimization"),(0,i.kt)("p",null,"Everyone knows that one of the great aspects of nanos world is the performance and the optimization. And in the last month we had a significant advance in improving some internal critical points of our framework."),(0,i.kt)("h3",{id:"memory"},"Memory"),(0,i.kt)("p",null,"The first one to mention was a ",(0,i.kt)("strong",{parentName:"p"},"huge")," improvement in the memory usage of our spawned entities."),(0,i.kt)("p",null,"Internally, we use a special system to handle sending and syncing data through the network. Our approach is to have a similar system to Unreal's Replication system. But until then this system was responsible for most of part of the memory usage in each spawned Entity."),(0,i.kt)("p",null,"With that in mind we aimed to solve this problem, not to mention most of these memory usage was duplicated in all entities unnecessarily. And fortunately we succeeded on reducing up to 90% of the memory usage of the entities. Right now it occupies exactly the data which is strictly needed for it's existence!"),(0,i.kt)("p",null,"We did a small test to compare, spawning 10.000 Characters through Scripting, check the memory usage difference:"),(0,i.kt)("p",null,"Before: ",(0,i.kt)("img",{src:a(65552).Z,width:"600",height:"26"})),(0,i.kt)("p",null,"After: ",(0,i.kt)("img",{src:a(82360).Z,width:"600",height:"26"})),(0,i.kt)("p",null,"Comparison of some Entities Memory Usage Before x After:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Entity"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Memory Usage Before"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Memory Usage After"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Reduction"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Cable"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5.4 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.1 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"80%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Character"),(0,i.kt)("td",{parentName:"tr",align:"left"},"13.1 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.8 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"86%"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Light"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.8 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.0 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"79%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Melee"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7.1 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.5 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"79%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Particle"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.6 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.0 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"78%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Player"),(0,i.kt)("td",{parentName:"tr",align:"left"},"3.1 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"90%"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Prop"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.8 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.0 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"79%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"StaticMesh"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.5 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.0 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"78%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"TextRender"),(0,i.kt)("td",{parentName:"tr",align:"left"},"5.3 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1.1 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"79%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Trigger"),(0,i.kt)("td",{parentName:"tr",align:"left"},"4.0 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"0.8 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"80%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Vehicle"),(0,i.kt)("td",{parentName:"tr",align:"left"},"7.9 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.0 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"75%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Weapon"),(0,i.kt)("td",{parentName:"tr",align:"left"},"11.1 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2.0 KB"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"82%"))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This usage was calculated on Server side. On Client side the values would be a little bit bigger, not to mention to the Assets which are loaded together."))),(0,i.kt)("p",null,"This was achieved just by improving one single system, we didn't even start looking for active compression techniques or reducing some variables sizes which are unnecessarily bigger than it needs. \ud83d\ude4f"),(0,i.kt)("h3",{id:"network"},"Network"),(0,i.kt)("p",null,'Another great optimization was in our network packets, each data sent through the network has a common "header" to identify some operations. This is a constant "cost" for the network which we managed to reduce up to 75% of it\'s size, making all data being sent through the network statically lower!'),(0,i.kt)("h3",{id:"client-side"},"Client Side"),(0,i.kt)("p",null,"We started advancing into optimizing the game in the client side. Which normally is trickier than on Server side because it concerns to dealing to Unreal Engine subsystems. But we managed to add some optimizations based on the Quality Settings selected. For example on the Blood or Bullet Holes particles, now depending on the distance and on the Effects Quality selected, they will be less or not spawned at all."),(0,i.kt)("p",null,"We've also tweaked the Vehicle System to do similar optimizations using this system. There is still a lot which we can improve! \ud83d\ude00"),(0,i.kt)("h2",{id:"new-class-blueprint"},"New Class: ",(0,i.kt)("a",{parentName:"h2",href:"https://docs.nanos.world/docs/next/scripting-reference/classes/blueprint"},"Blueprint")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(82598).Z,width:"2248",height:"1124"})),(0,i.kt)("p",null,"A very required class is being introduced: ",(0,i.kt)("strong",{parentName:"p"},"Blueprint"),"! Now it is possible to spawn any Blueprint Actor in nanos world!"),(0,i.kt)("p",null,"We've managed to implement the method: ",(0,i.kt)("inlineCode",{parentName:"p"},"CallBlueprintEvent()")," which you can create any ",(0,i.kt)("strong",{parentName:"p"},"Event")," or ",(0,i.kt)("strong",{parentName:"p"},"Function")," with any number of parameters in your Blueprint and call it from Scripting! This expands many possibilities!"),(0,i.kt)("p",null,"Also, you can spawn it on server and it will follow the same rules as any other Actor Entity, and it will be synchronized with other players using the Network Authority system as well!"),(0,i.kt)("h2",{id:"new-class-database"},"New Class: ",(0,i.kt)("a",{parentName:"h2",href:"https://docs.nanos.world/docs/next/scripting-reference/classes/database"},"Database")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(43376).Z,width:"800",height:"300"})),(0,i.kt)("p",null,"Something that is extremely fundamental for some game-modes such as roleplay is the Database. Until then we were providing a MySQL Module to be used as a third-party Lua library, but due it's complexity to integrate with your server and also because it wasn't possible to make async queries we dug into a more robust solution."),(0,i.kt)("p",null,"For that, we present the new class: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/scripting-reference/classes/database"},"Database"),". A all-in-one solution for connecting to a database, it supports ",(0,i.kt)("strong",{parentName:"p"},"MySQL"),", ",(0,i.kt)("strong",{parentName:"p"},"PostgreSQL")," and ",(0,i.kt)("strong",{parentName:"p"},"SQLite")," out of the box! Not to mention the async and thread-safe queries!"),(0,i.kt)("p",null,"Check it's page for complete documentation and examples!"),(0,i.kt)("h2",{id:"vehicles-tire-skid-mark"},"Vehicles Tire Skid Mark"),(0,i.kt)("p",null,"A small but cool addition we did for vehicles was adding Tire marks when it skids:"),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/2022-march/tire-skid.mp4",type:"video/mp4"})),(0,i.kt)("p",null,"Also, an awesome detail was added: the wheels get smeared with blood!"),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/2022-march/tire-blood.mp4",type:"video/mp4"})),(0,i.kt)("p",null,"It is 100% dynamic and procedural!"),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/2022-march/tire-blood-decal.mp4",type:"video/mp4"})),(0,i.kt)("h2",{id:"sandbox-improvements"},"Sandbox Improvements"),(0,i.kt)("p",null,'We got several improvements regarding the sandbox game-mode! The first one is the sandbox "API": we listed all functions and events it exports so you can integrate your own entities/tools or use it\'s features.'),(0,i.kt)("p",null,"Also we've modularized the menu, categories and tabs, and you can add your own from your external package!"),(0,i.kt)("p",null,"Check it out the sandbox API in the GitHub page: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox"},"https://github.com/nanos-world/nanos-world-sandbox"),"."),(0,i.kt)("p",null,"Finally, we've improved our Physics Gun tool, now you can control it using the mouse and also have a 'snap-to-grid' movement!"),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/2022-march/physics-gun.mp4",type:"video/mp4"})),(0,i.kt)("p",null,"Several other adjustments and bug fixes were made on Sandbox as well."),(0,i.kt)("h2",{id:"new-particle-methods"},"New ",(0,i.kt)("a",{parentName:"h2",href:"https://docs.nanos.world/docs/next/scripting-reference/classes/particle"},"Particle Methods")),(0,i.kt)("p",null,"We've expanded the possibilities for Particles! Now it's possible to set Material parameters on it, and also use any ",(0,i.kt)("strong",{parentName:"p"},"Texture"),", ",(0,i.kt)("strong",{parentName:"p"},"WebUI")," and ",(0,i.kt)("strong",{parentName:"p"},"Canvas")," as parameters as well!"),(0,i.kt)("p",null,"For example you can spawn a Canvas, draw on it and use as a Material Particle parameter!"),(0,i.kt)("p",null,"The following video shows using the WebUI ",(0,i.kt)("a",{parentName:"p",href:"https://nanos.world"},"https://nanos.world")," as a Material parameter into the Particle! Rendering in runtime!"),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/2022-march/particles-webui.mp4",type:"video/mp4"})),(0,i.kt)("h2",{id:"notable-improvements"},"Notable Improvements"),(0,i.kt)("h3",{id:"music-concurrency"},"Music Concurrency"),(0,i.kt)("p",null,"We finally managed to fix the Music problem, which was making Sounds of type Music from stopping when too many sounds were spawned."),(0,i.kt)("h3",{id:"client-side-props"},"Client-side ",(0,i.kt)("a",{parentName:"h3",href:"https://docs.nanos.world/docs/next/scripting-reference/classes/prop"},"Props")),(0,i.kt)("p",null,'Props can now be spawned on Client side as well! This allows having "unnetworked" dynamic meshes spawned on client, intended for use as visual effects and non-gameplay features.'),(0,i.kt)("p",null,"We've already updated the Sandbox's Destructable entities to use client-side debris!"),(0,i.kt)("h3",{id:"level-static-meshes"},"Level Static Meshes"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(63671).Z,width:"660",height:"371"})),(0,i.kt)("p",null,"Now all ",(0,i.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/Basics/Actors/StaticMeshActor/"},"StaticMeshActors")," from a Map are automatically loaded as ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/scripting-reference/classes/static-mesh"},"StaticMesh")," entity on Client Side! It is possible to paint, destroy, move and everything else on them on client-side!"),(0,i.kt)("h3",{id:"async-texture-loading"},"Async Texture Loading"),(0,i.kt)("p",null,"We've improved our Client loading system and now textures (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},".jpg"),") are asynchronously loaded and the texture is applied in a deferred way. This system currently is implemented under ",(0,i.kt)("inlineCode",{parentName:"p"},"SetMaterialTextureParameter()")," for testing, soon we can use it in other methods as well."),(0,i.kt)("h3",{id:"async-file-loading"},"Async ",(0,i.kt)("a",{parentName:"h3",href:"https://docs.nanos.world/docs/next/scripting-reference/classes/file"},"File")," Loading"),(0,i.kt)("p",null,"In addition to the above, we've expanded our Async implementation into File class, which now have the ",(0,i.kt)("inlineCode",{parentName:"p"},":ReadAsync()")," method!"),(0,i.kt)("h3",{id:"new-light-methods"},"New ",(0,i.kt)("a",{parentName:"h3",href:"https://docs.nanos.world/docs/next/scripting-reference/classes/light"},"Light")," Methods"),(0,i.kt)("p",null,"We've added a bunch of missing Light setters and getters methods, also the ability to toggle it on/off with ",(0,i.kt)("inlineCode",{parentName:"p"},"SetVisibility()"),"."),(0,i.kt)("h3",{id:"assetstoml-changes"},(0,i.kt)("a",{parentName:"h3",href:"https://docs.nanos.world/docs/next/core-concepts/assets#assets-pack-configuration"},"Assets.toml")," Changes"),(0,i.kt)("p",null,"The Asset.toml got a new category: ",(0,i.kt)("inlineCode",{parentName:"p"},"unreal"),", where we must specify a new setting ",(0,i.kt)("inlineCode",{parentName:"p"},"unreal_version")," (the unreal version this Asset Pack was compiled on), this will be an important feature to prevent old Assets versions from crashing the game."),(0,i.kt)("p",null,"Also it got the new ",(0,i.kt)("inlineCode",{parentName:"p"},"blueprints")," category for listing Blueprints \ud83d\ude09."),(0,i.kt)("h3",{id:"vehicle-collisions"},"Vehicle Collisions"),(0,i.kt)("p",null,"We've tweaked and improved our Collision configurations and now Vehicles interact better when colliding with other objects, including Networked Characters, Props and other Vehicles."),(0,i.kt)("p",null,"Before other Networked Characters were desyncing when colliding with vehicles (they started to fly and weird things happened when objects hit the Vehicles wheels), and also the hit between two vehicles were extremely rigid, which has been fixed too and will be more organic now."),(0,i.kt)("h3",{id:"sun-improvements"},"Sun Improvements"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(72520).Z,width:"1918",height:"696"})),(0,i.kt)("p",null,"The Default Sun light and shadows has been improved, specially during sunrise/sunset which we had some artifacts and shadows disappearing, now it must be smoother and prettier (and hopefully more efficient)."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Thank you for another month of support! There were incredible advances with Blueprint and Database Classes, and also to finally lining up our Steam Page again!"),(0,i.kt)("p",null,"Our north is to continue advancing performance and memory optimizations, as well as bringing essential new features to nanos world!"),(0,i.kt)("p",null,"We also have some important challenges of bringing distance based culling and dimensions system for entities, which is essential for creating special environments."),(0,i.kt)("p",null,"There are some essential Classes that we want to implement as well, like custom Characters (e.g. for Animals) and other types of Vehicles (Air, Sea)."),(0,i.kt)("p",null,"Finally, we are very excited with the release of Unreal Engine 5 (yesterday 05 April), as with it comes with several solutions to important questions in nanos world (such as Runtime Retargetting which promises solving several animations compatibility issues) and tons of new features to be used! We gonna have good news soon\u2122 for you!"),(0,i.kt)("p",null,"See you next month! \ud83e\udd73"))}m.isMDXComponent=!0},63671:function(e,t,a){t.Z=a.p+"assets/images/been-d35169fa959ff3db4c0867d187f0ab34.jpg"},82360:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAAaCAYAAABraSKSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAA3LSURBVHhe7ZwPbBPXHce/GW3pWtRsAsRQK7qF2EDkqbSjKI0nuk7hj5NRImAR2ta6Q1HCRNtE/GmpZnValw5aKEvaRUpchGqmTchKWVBKzMDrn5QESNkEkmva/GuHWmUUGKH8CQkN3nvv3p3Pztm+JI4dot8nOsnv3b17937vnPe93+93zujt7Q1lZmaCIIjxy7mgB5kz7pQlwohLZ6+TjRJANkoM2Sgx3EbT78+WJcKQu+34lvxIEARBEARBJAkSWARBEARBEEmGBBZBEARBEESSIYFFEARBEASRZEhgEQRBEARBJJm0C6zLfQP420efI/+rbchoADKOAz848T5K8BS8N+rlUQRBEARBELcOpgXW8ePH0dzcLEvJofdaP27cvIlfNnfhn+9uATpZZe6vsXRBPa6zj29P+jse/3qVONYcPpRlZCCjzCfLKrzejmp+/hTgK8tA5CUY9O8rM7jORMQbR9Q+fn5uC7GVsb0Tj85qu7RhJ6rt6ljDtufzYE/VpBNh/LswedoasT1ae1ZWDuXgBuWYydNexBvdSl1X7Yta2/V+pY7Dj9WXU4YYyy4clEWNIfVn8YZDHU/iaxXjdPjQJcthTmI9P8eGk7IciWIf1V7yWN2WFhtxTM55THsKxmDsvL8Y50sZabFN+DtFmODQq8iY8mOx2Wu+kJVsZalZp9WXHZKVDN+zkeVYmBZY/f39aGtrw+HDh2XN6DnafR5Tl64DpuQio59V3AU8EbqJO9jf4OBN9F3tQ8YAsKyrUGlgijzkBQqiBE5qcRSVwt2gu4DOdgTQCu+B8GLf2R5AXo5FlpJMZzXsBUBTKIQQ3zpy0D7RFBYbo9NbjI46Byt0wOpSx1qFQIEiKB11HSj2OlMmrAkO++e+Bth/fi/6z2+BzVVj+I+eC6at1mp2DD/uJTyTxWtPYuf+RxCUbfGaFCDdPmzFFtTk80KqkIKpCSiRNQqx6ntg2civm21tTgTWxFooOWycrnb52Qgrck/vM7CbUTsrdrSZ7XesMDPnsewWTTLHzvp87Qx2PD1fltNBumxDmOcYylay9fLKEYSu7IDt+UpUCxsfw/a3f4oOWY9tXuEDQrcXldiBuiW8EB/TAmvRokV44IEHcOrUqaSJrAt9N4HC54G+XuDqRWDvXuyBB69jJ372jxLc6A1h4MoABvt4KPGybJWYYhdbZCurFWOkA0sOE3ntWv+dB7ywVVUBwQ61BqwKxYVj9ENtHUG05uVAk2/Z5SjnOmQCwW3KDAjFgg441PFlW2GTH1kB5S4bKrZPNHU5jvGfwK4nF2CZKMzHhkqg/lD0U/tJNJ52Yve6GbIcD7b4rP8SL+xM9SI5A8/42KK4c4Esq8Sqn49lqgDMmqm7B4fSVbsPqHQiV5aNsM0zsJuwbX7sRVj0ewYdQxbgMcbUnMey21CSNvbuf6N+3kop3tPEeLANEZ9DzXCvXcRWEU4uNr8CeH1hL1YkX6C65HO4Xo/37Q0zrBysxYsXJ1VkPfHWcWRNZ5dw7RJWrZ2NUPMaPNaxGMsHitC44E18fWAqbl4bxO1TLuOpgWF8SyzlcNkq4IzhuuChIy18prm6ZIitOhxaiwgvca+Q2oZtYQ+ZQXgquxDF8EJxWCliKqeQLfzuBhmq60Cw1Qarqq9inlu5prIyO6s3CPPp2tmrdU8wjiKUtsYYf0Rf6jn1/dhhZ+MJXwODhxvtUrAmbB//OpX9is00++rPzzHsQ08cgeprgLu0SH5ZGFFilxhbujrPINc6U5aA2dmzcKy9R5YkfEGY9yV2yrBJOFTGFqAVR5Ej6rcBG9ks1tbgk40lcoG6RYhYVKPo9mFt+0rUJHj6nfv0SthcjTqPjOqNibMIi35TLyhMzfkwSNbYuw4dha1AFebSSyTvuVSFUtNqG3avPSrHGw5NyvCh32hfemyUbjqZKs+bc58sseXbkoXWT7nAYmJr1buwiBDhJmBLMVBTieCW58LrSwKGJbA4+fn5mDp1qhBZPT0jv1EEV87ji/Zu3H7HbbjwvwU48tkRvGc5jEuBXvTedRHTVl7EzZ6L8P3l99j3qkc2Moejrgm2CuPwkKNOhpNCTSh1V+qOaUVFsEjZ11SK1ortYQFhqYCtSR+GkvlOvu2osDXJ84UgIlbIhtXWKh1WTEwxuVWY7UBRaQDtoo1eBMQ5t6AVgRwP21cXNamR7TxM0LnlHu7RqQvx8JhFiJQIwWbxorhD9tXEHqS1jtR+WtDiigxx+hrcKHWVs1GZaW90ndFtgPIWPj/cvmw/D2e28PPHOl4zhiRKoDJEPhYXZA1s/pRJUOAerdYga0GMK/acwVwZ3tk/z4O18p/87HUvKSEfttXkKyHDDSkNDY4cLX+saQH6DT1ubAFbfxSrTYWs5mP5k340qosc98bgERQMEU/t2LRQLoo8FJVyT99YkIyx87DZLCxX7x1/IzbN26K7t2T9LccwbPMasJuPt80JRIQmY+ybMDZKHtnraxESIcIjqFuihAw3mwgNqgxbYPn9fly4cEF4smbODCvzEXH+HAauXsbtk8AWx0l4+b5XsOSsA80PvY+DU97BlcErmDRzKvDNDeA/Xej/ZlA2NAMTGU0xwkNaAniBTpRw8lC1WS7O3AsEKYhEDlUpitR1O7scrlIpoLiHxF0wJJlay8PiYspmFeKBHSrysCLyr+KdW5Bn7Knh7fKqoF5udrmLnUVPNhMxTKAIwSZFlswFq7BI71CBG61aR7p++Ng1b5sPDQHZj9n2emK24fMDFLA5QJNOlMXtIzbZ5S2KICtqYO30AtWCnDw5j8T4QedtWFaQb/hUf3DDPsytYXeGKlzG+VO1Jg4LTrBrHZpk3FVbg/oV6017mJY97URA5qEd/LMHto0OzFZ26dDnId2LrRMkuXnUY/efQKByediLmHUvcvdsi59kfotg2jbsuyPqsxx44cl2fKLdFzH2TSAbjQW+Z99Czi7uxTJOfDdiWAKLhwW554qLKx4uHC3fu+dNkXt17dIltL71Bxx3/RwfHv4j8v+1VOwPDYbw3w/Y4to/AHz5Md77dJgT79iMquiEdx5+0hLAO1CVJ+tHChNELexcHjiFIND6kqEpHxNTpVI9ZReyyQkeGNv8q2jY9XnYIMMeqdJw8jvf9N4eDQc2VwWE56izuhIBLdeJY6Z9NMNtM5I+JI46NEUI1KHeLmLsiA6BRIdITCMS27kIU7xY+sT3cU9+CfZHLGgcJRH5mKtcEYsLPTj2kQc5hm8SSrIewmocRZOf2eK0M7Enjx//cHS/Y0/S5lzPqMauhM1WL9Hl+DEh8QG7h3ajJqVCfVzYhtmj47T8OATdvjTZKN2EQ4IK0SFDgUhsfwrlWUMT3+NhWmDxn2hIprjiZA5OYRf+FfD1V7j+7ZkonjsHfb96EI0/3I+lFwtx48oNnOuaz/43vYvQe7WYfFuGbGmWbJR7uAdH56nSJ4B3HoC3VdTGRyROu6FpFCbSKt06rxODe1A6mJAJqK4SkYdVgYIKQHtZkJ/HXYEK/YJv4tyGiNBXBVQHHRdC2hh91ToPDs9XalU8ZrKvoSG3oQgx6N2O7V4bXOXyYk2394V/MiJmGxka5DFA+dafwFQfUV4pHw80qvjQ4M4L21x4+nQJ/8TYIp6CT8gcES4qIBc63avj+QtQskd9G4ovhn6UaLkyHB5KS0di+yjwn9TlxZxE4x4r5gpPlTru+agRIlH1uDiR+7ATQZ+R90FlBp7ZOAub1niAFQ/FOU7Cw0Ufqf2mEDNzPmxGMXb+OUZyO/cyBiutCHSmyEuTNtu0h5PhhW3yw+HSuPvSYKN0k/195O1ulmsIE1DPA8UOvcAaXmK7HtMCa/LkyVi4cGHSxBXnE28QUzI/ZgLrHNDbg7o+Kyb9FXj8xkpMu/ojWEMOfGf6b2B/8EHsOtqNx+aMQPlLD44G92ox4WPh4SdnEDZTHiwH6mSoTYStRI6QDGvpfm/KUqETI0zcFRazk+fx/CtZxVoU8TiePgk73rnjwkNspXDLdk4m57QQocOKoBpiy7CIHLEWcV1KX6hQcrPEFuHe0yEEohtu29BrNdVew6gNE4D2AgSqNrO9iresQEtyN9MHt60SbhVY2lGpHitCji3QpoELahmiJVIAfwrey/7vi5DeNmCv+hMMepjYaHsE9SJ/plzkfejzPZRQmhreMUh8H49k9WCruMZ44x4B+cux4+F8vBDzjUtdHtLCo1jdlqR+h4OpOR8BIxx7ZHK7RPdbVDmuWXHOmWTSZhv2oNqueKK4t9S2V/+iSIx96bJRuskqRss+9pyvJrPvq0W5bo46ayrhXfULtjJxDBLf45DR29sbyszMlMX0kLH8t2yQC5kwtwL3TMe0D5/DnE2foaX+d8CpdxA6uEMeSRASHup1Ah4tOd4I/raiOCgsuG5RzgU9yJxxpywRRlw6e51slICJb6OTWO/owYa4nsH4TGwbcc/ZPswdpRDnNpp+Pz22xuVu+/CT3MeCUOPLCFWvAIJ+4GM/zn83Hy1/WoHQKz8hcUUYwz2TxV5Y4njQfGXce+e65cUVQRBmmY+aUYgrgkgm48KDRRBEfMiDlRjyYCWGbJQY8mAlhjxYJhgvHiyCIAiCIMYa/rJFkvLAiISQwCIIgiAIgkgyJLAIgiAIgiCSDAksgiAIgiCIJEMCiyAIgiAIIsmQwCIIgiAIgkgyJLAIgiAIgiCSCvB/ygSQX+5KRWcAAAAASUVORK5CYII="},65552:function(e,t){t.Z="data:image/png;base64,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"},15038:function(e,t,a){t.Z=a.p+"assets/images/store-page-7abe22ce0ed97edb603d941cec280ba8.jpg"},72520:function(e,t,a){t.Z=a.p+"assets/images/sunrise-3d580ee2784e0ef4add3c0f9078707d0.jpg"},82598:function(e,t,a){t.Z=a.p+"assets/images/blueprint-b59cf366b93560569b6a01bd4d93f1a6.png"},43376:function(e,t,a){t.Z=a.p+"assets/images/db-f39b634ae0b38ffb62382f05a1ad38bb.png"}}]);