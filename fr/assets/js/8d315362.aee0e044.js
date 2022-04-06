"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3008],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(o,".").concat(h)]||u[h]||p[h]||l;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<l;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77864:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=["components"],i={slug:"november-2021",title:"November: Unreal Engine 5?",authors:"gtnardy",tags:["updates"]},o=void 0,d={permalink:"/fr/blog/november-2021",editUrl:"https://github.com/nanos-world/docs/edit/master/blog/2021-12-01-unreal-engine-5.md",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021-12-01-unreal-engine-5.md",title:"November: Unreal Engine 5?",description:"New Classes, Unreal Engine 5 Experiments and Scripting Improvements!",date:"2021-12-01T00:00:00.000Z",formattedDate:"1 d\xe9cembre 2021",tags:[{label:"updates",permalink:"/fr/blog/tags/updates"}],readingTime:6.435,truncated:!1,authors:[{name:"Gabriel T. Nardy",title:"nanos world developer (SyedMuhammad)",url:"https://twitter.com/gtnardy",imageURL:"/img/blog/gtnardy.jpg",key:"gtnardy"}],frontMatter:{slug:"november-2021",title:"November: Unreal Engine 5?",authors:"gtnardy",tags:["updates"]},prevItem:{title:"Janvier : Boutique & Vault !",permalink:"/fr/blog/janvier-2022"},nextItem:{title:"October: Alpha released!",permalink:"/fr/blog/alpha-released"}},c={authorsImageUrls:[void 0]},p=[{value:"New Class: Decal",id:"new-class-decal",level:2},{value:"New Class: Billboard",id:"new-class-billboard",level:2},{value:"New Class: Melee",id:"new-class-melee",level:2},{value:"Scripting Improvements",id:"scripting-improvements",level:2},{value:"Real Hot Reload",id:"real-hot-reload",level:3},{value:"Extending Classes",id:"extending-classes",level:3},{value:"New View Mode: TopDown",id:"new-view-mode-topdown",level:2},{value:"New Camera Methods",id:"new-camera-methods",level:2},{value:"TextRender on Server Side",id:"textrender-on-server-side",level:2},{value:"Other Changes",id:"other-changes",level:2},{value:"Unreal Engine 5",id:"unreal-engine-5",level:2},{value:"Graphical Results",id:"graphical-results",level:3},{value:"Stability",id:"stability",level:3},{value:"What now?",id:"what-now",level:3}],u={toc:p};function h(e){var t=e.components,i=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"New Classes, Unreal Engine 5 Experiments and Scripting Improvements!"),(0,l.kt)("h2",{id:"new-class-decal"},"New Class: ",(0,l.kt)("a",{parentName:"h2",href:"/docs/scripting-reference/classes/decal"},"Decal")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(10400).Z,width:"820",height:"175"})),(0,l.kt)("p",null,"We've added a new class to spawning ",(0,l.kt)("strong",{parentName:"p"},"Decals"),"! Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes. You can load any ",(0,l.kt)("inlineCode",{parentName:"p"},".jpg")," from disk during runtime and use it as parameter in your Decal Material!"),(0,l.kt)("p",null,"As Decals are inherited from Actors, you can change it's location, rotation, attach it or call any method from ",(0,l.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Base Actor")," on it!"),(0,l.kt)("h2",{id:"new-class-billboard"},"New Class: ",(0,l.kt)("a",{parentName:"h2",href:"/docs/scripting-reference/classes/billboard"},"Billboard")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(54085).Z,width:"650",height:"175"})),(0,l.kt)("p",null,"We've added another new class to spawning ",(0,l.kt)("strong",{parentName:"p"},"Billboards"),"! A Billboard is a 2D Material that will be rendered always facing the camera. It's possible to use all custom methods from Paintable as well and spawning custom textures on it. You can tweak it's material properties with ",(0,l.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/paintable"},"Base Paintable")," or even use a material of your own."),(0,l.kt)("p",null,"As Billboards are inherited from Actors, you can change it's location, rotation, attach it or call any method from ",(0,l.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Base Actor")," on it!"),(0,l.kt)("h2",{id:"new-class-melee"},"New Class: ",(0,l.kt)("a",{parentName:"h2",href:"/docs/scripting-reference/classes/melee"},"Melee")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(67018).Z,width:"800",height:"216"})),(0,l.kt)("p",null,"We are getting a brand new very-requested class: ",(0,l.kt)("strong",{parentName:"p"},"Melee"),"! The Melee is coming to replace the former ",(0,l.kt)("strong",{parentName:"p"},"Item")," class."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Melee")," is a new Class (which works exactly as the old ",(0,l.kt)("strong",{parentName:"p"},"Item"),") but now with ability to attack with it. It is possible to add custom animations, a cooldown and tweak the damage of it. The attack physics is procedurally based on the animation, this means you can stab, slash or even smash things only by changing the animation and then the hit will be based on that!"),(0,l.kt)("p",null,"The results are quite fun, the hit/damage also affects the environment dynamically \ud83d\ude0a"),(0,l.kt)("video",{controls:"true",allowfullscreen:"true"},(0,l.kt)("source",{src:"/videos/blog/november/melee.mp4",type:"video/mp4"})),(0,l.kt)("h2",{id:"scripting-improvements"},"Scripting Improvements"),(0,l.kt)("p",null,"We've listen to your demand and we're finally bringing long-awaited new amazing scripting features!"),(0,l.kt)("h3",{id:"real-hot-reload"},"Real Hot Reload"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(96724).Z,width:"612",height:"176"})),(0,l.kt)("p",null,"After several requests, we've started implementing a real Hot Reload feature!"),(0,l.kt)("p",null,"The real ",(0,l.kt)("strong",{parentName:"p"},"Hot Reloading")," is an amazing feature which allows you loading new scripting code without needing to lose all the current memory state of your Packages. It works by loading the scripting files over the current running Lua VM."),(0,l.kt)("p",null,"Currently it works by manually triggering it in the console:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"package hotreload [PACKAGE_NAME|all]\n")),(0,l.kt)("p",null,"This will update the clients with the newer files version and load the ",(0,l.kt)("inlineCode",{parentName:"p"},"Index.lua")," files from the packages. It will keep the current memory state of the packages as it is. It will also unsubscribe from all registered Events in that package."),(0,l.kt)("p",null,"In the future, it would be possible to add a real-time checker to automatically update the modified files after saving them."),(0,l.kt)("h3",{id:"extending-classes"},"Extending Classes"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(9688).Z,width:"823",height:"319"})),(0,l.kt)("p",null,"A new cool feature that is being added is Extending and Inheriting nanos world Classes. ",(0,l.kt)("em",{parentName:"p"},"This is still experimental and we want to collect your feedback and find remaining bugs.")),(0,l.kt)("p",null,"It is now possible to ",(0,l.kt)("strong",{parentName:"p"},"Add new Methods")," to nanos world Classes, ",(0,l.kt)("strong",{parentName:"p"},"Override existing Methods")," and even ",(0,l.kt)("strong",{parentName:"p"},"Override ",(0,l.kt)("strong",{parentName:"strong"},"index and "),"newindex"),"."),(0,l.kt)("p",null,"Adding a new method to a class is easy like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Adding a new method \'AddScore\' to Player class\nfunction Player:AddScore(score)\n    self:SetValue("score", self:GetValue("score", 0) + score)\nend\n\n-- Using it\nmy_player:AddScore(10)\n')),(0,l.kt)("p",null,"Read the full documentation ",(0,l.kt)("a",{parentName:"p",href:"/docs/core-concepts/scripting/extending-classes"},"here"),"."),(0,l.kt)("h2",{id:"new-view-mode-topdown"},"New View Mode: TopDown"),(0,l.kt)("p",null,"We created a new native View Mode: ",(0,l.kt)("strong",{parentName:"p"},"TopDown"),"!"),(0,l.kt)("p",null,"This ViewMode allows you to fully control Characters from a TopDown perspective."),(0,l.kt)("p",null,"With just a single line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_character:SetViewMode(ViewMode.TopDown)\n")),(0,l.kt)("p",null,"nanos world becomes a completely different game, the mouse is now a crosshair which the Character aims to. Mechanics of picking up Weapons, grabbing Props and interacting with stuff was slightly modified to work with the ViewMode. Also driving is fully supported as well! \ud83e\udd29"),(0,l.kt)("p",null,"It also is possible to dynamically change the view mode and switch between them during game-play and also tweak settings such as camera distance and so on."),(0,l.kt)("video",{controls:"true",allowfullscreen:"true"},(0,l.kt)("source",{src:"/videos/blog/november/top-down.mp4",type:"video/mp4"})),(0,l.kt)("h2",{id:"new-camera-methods"},"New Camera Methods"),(0,l.kt)("p",null,"Player got a bunch of new Camera methods: ",(0,l.kt)("inlineCode",{parentName:"p"},"Player:SetCameraSocketOffset()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Player:SetCameraArmLength()"),"."),(0,l.kt)("p",null,"And also ability to detach and attach it to other actors (\ud83d\udc40 including Props): ",(0,l.kt)("inlineCode",{parentName:"p"},"Player:AttachCameraTo()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Player:ResetCamera()"),". It will attach including a Camera SpringArm component!"),(0,l.kt)("p",null,"Note: ",(0,l.kt)("strong",{parentName:"p"},"Spectate")," methods from ",(0,l.kt)("strong",{parentName:"p"},"Client")," has been moved to ",(0,l.kt)("strong",{parentName:"p"},"Player"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Player:Spectate()"),"."),(0,l.kt)("h2",{id:"textrender-on-server-side"},(0,l.kt)("a",{parentName:"h2",href:"/docs/scripting-reference/classes/text-render"},"TextRender")," on Server Side"),(0,l.kt)("p",null,"Now the Class ",(0,l.kt)("inlineCode",{parentName:"p"},"TextRender")," now can be spawned on Server Side as well!"),(0,l.kt)("h2",{id:"other-changes"},"Other Changes"),(0,l.kt)("p",null,"Besides the major topics covered here, we've got several other new features which were been added during the month:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added a new method for Character: ",(0,l.kt)("inlineCode",{parentName:"li"},"Character:Follow()")," which will make the AI follow other actor."),(0,l.kt)("li",{parentName:"ul"},"Added a new Utils method: ",(0,l.kt)("inlineCode",{parentName:"li"},"NanosUtils.Benchmark()")," which will take a function as parameter and test the performance of it."),(0,l.kt)("li",{parentName:"ul"},"Now ",(0,l.kt)("inlineCode",{parentName:"li"},"Subscribe")," will return the callback function (which can be used to Unsubscribe afterwards)."),(0,l.kt)("li",{parentName:"ul"},"Fixed tons of bugs, detailed information can be found in the Discord Changelog channel.")),(0,l.kt)("h2",{id:"unreal-engine-5"},"Unreal Engine 5"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(38488).Z,width:"1200",height:"630"})),(0,l.kt)("p",null,"Lastly, it is already known we have a big objective of porting nanos world to Unreal Engine 5. Personally this is something I wanted to do as soon as possible because Unreal Engine 5 features are amazing, not to mention the publicity and marketing bonuses we would get for nanos world."),(0,l.kt)("p",null,"In this month, we decided to give a try: we tested porting nanos world to Unreal 5, at first we had some problems because of some Unreal modules have been completely renamed or even removed. And also we got some Unreal methods deprecated by the newer version, so we needed to update them and even reimplement some small stuff."),(0,l.kt)("p",null,"Currently Unreal Engine 4 uses PhysX physics and in Unreal 5 all the Physics Engine have been replaced by ",(0,l.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/PhysicsFeatures/ChaosVSPhysxOverview/"},"Unreal's Chaos"),", which is a new Engine replacing the NVIDIA's PhysX."),(0,l.kt)("p",null,"This made us need to disable Vehicles for this test, as Unreal vehicles are very dependent on the PhysX engine and I would need to reimplement them using the new Chaos API for vehicles (I believe that our Vehicles API will need to change a bit as well once we fully update it)."),(0,l.kt)("p",null,"But after half of dozen adaptions and disabled Vehicles, the results were surprisingly good! nanos world worked on Unreal Engine 5! Personally I got very happy and proud that the biggest problems I had was updating deprecate methods and updating some Unreal modules, thanks to the architecture developed so far in nanos world!"),(0,l.kt)("h3",{id:"graphical-results"},"Graphical Results"),(0,l.kt)("p",null,"nanos world on Unreal Engine 5 is beautiful, joying with Lumen and Global Illumination is really fun!"),(0,l.kt)("p",null,"There were some graphical artifacts (such as changing the time of day too fast causing a delay/ghosting effect), but I believe they will improve them for the final Unreal Engine 5 version."),(0,l.kt)("p",null,"Check it out some screenshots taken during the tests trying the Global Illumination and Lumen:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(78491).Z,width:"1919",height:"1079"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(52168).Z,width:"1916",height:"1079"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(13713).Z,width:"1919",height:"1079"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(922).Z,width:"1919",height:"1079"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(77929).Z,width:"1919",height:"1079"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(37681).Z,width:"1919",height:"1079"})),(0,l.kt)("h3",{id:"stability"},"Stability"),(0,l.kt)("p",null,"Unfortunately the stability was extremely bad. It didn't surprise me too much as Unreal Engine 5 is on Early Access, so bugs and crashes would happen. Several random crashes occurred during gameplay, I could notice mostly of them were caused by the new Chaos Engine (related to Physics)."),(0,l.kt)("h3",{id:"what-now"},"What now?"),(0,l.kt)("p",null,"I was really happy in being able to port nanos world to Unreal Engine 5, this attempt made us be sure that this would be possible. But I decided that currently is not time yet. During the tests we had several crashes (random ones, related to the low-level of Unreal, mainly coming from Chaos Engine and from Water) that made us conclude that is better to wait a better stable version because it makes nanos world really unplayable. Those random crashes are extremely bad as sometimes it's hard to know if it's my or Unreal's fault."),(0,l.kt)("p",null,"Fortunately, with this we could prove ourselves that nanos world will, when the time comes, be compatible and updated to Unreal Engine 5!"))}h.isMDXComponent=!0},54085:function(e,t,a){t.Z=a.p+"assets/images/billboard-2f990d1836614cb4911de0037063db6a.jpg"},10400:function(e,t,a){t.Z=a.p+"assets/images/decal-1c2b5a43f92764fef8aef1ef52ab55a8.jpg"},9688:function(e,t,a){t.Z=a.p+"assets/images/extending-8581420412041d85bb4dc0d7f9d771e6.jpg"},96724:function(e,t,a){t.Z=a.p+"assets/images/hotreload-4253a61702f6eb5248f5625c777c2633.jpg"},67018:function(e,t,a){t.Z=a.p+"assets/images/melee-2a6d5eba17ca2d388e7feab8cca626d7.jpg"},922:function(e,t,a){t.Z=a.p+"assets/images/ue5-inside-flash-01-babc950dd37dfd1eb1c79fb29e202715.jpg"},77929:function(e,t,a){t.Z=a.p+"assets/images/ue5-inside-flash-02-25a13edcbc3eaa5cdc6f16e70b8bea77.jpg"},37681:function(e,t,a){t.Z=a.p+"assets/images/ue5-inside-flash-03-ca53b17e598a56ef52d64acb758ecc8a.jpg"},52168:function(e,t,a){t.Z=a.p+"assets/images/ue5-inside-gas-01-732adef7d75375ac86d95f4507b828fe.jpg"},13713:function(e,t,a){t.Z=a.p+"assets/images/ue5-inside-gas-02-b68679c2e0428ea57fb6c283f798f50e.jpg"},78491:function(e,t,a){t.Z=a.p+"assets/images/ue5-outside-053681aeb9b681e37261b9f7b9b4b531.jpg"},38488:function(e,t,a){t.Z=a.p+"assets/images/ue5-4c7bf9a20188f2814f19bef2abfc392f.jpg"}}]);