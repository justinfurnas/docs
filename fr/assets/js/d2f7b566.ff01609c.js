"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2313],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,g=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(g,r(r({ref:t},h),{},{components:n})):a.createElement(g,r({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31459:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={slug:"february-2022",title:"February: Unreal 5 & Network Authority!",authors:"gtnardy",tags:["updates"]},l=void 0,c={permalink:"/fr/blog/february-2022",editUrl:"https://github.com/nanos-world/docs/edit/master/blog/2022-03-02-february.md",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2022-03-02-february.md",title:"February: Unreal 5 & Network Authority!",description:"Unreal Engine 5 Preview, new Network Authority System, Store API and more",date:"2022-03-02T00:00:00.000Z",formattedDate:"2 mars 2022",tags:[{label:"updates",permalink:"/fr/blog/tags/updates"}],readingTime:8.12,truncated:!1,authors:[{name:"Gabriel T. Nardy",title:"nanos world developer (SyedMuhammad)",url:"https://twitter.com/gtnardy",imageURL:"/img/blog/gtnardy.jpg",key:"gtnardy"}],frontMatter:{slug:"february-2022",title:"February: Unreal 5 & Network Authority!",authors:"gtnardy",tags:["updates"]},prevItem:{title:"March: Steam, Databases & Blueprints!",permalink:"/fr/blog/march-2022"},nextItem:{title:"Janvier : Boutique & Vault !",permalink:"/fr/blog/janvier-2022"}},h={authorsImageUrls:[void 0]},u=[{value:"Network Authority System",id:"network-authority-system",level:2},{value:"New Debug Modes",id:"new-debug-modes",level:2},{value:"Store API",id:"store-api",level:2},{value:"Documentation Changes",id:"documentation-changes",level:2},{value:"Modules",id:"modules",level:3},{value:"Unreal Engine 5: Preview",id:"unreal-engine-5-preview",level:2},{value:"Migrating nanos world",id:"migrating-nanos-world",level:3},{value:"Graphics",id:"graphics",level:3},{value:"Technical",id:"technical",level:3},{value:"Stability",id:"stability",level:3},{value:"UE5 worth it now?",id:"ue5-worth-it-now",level:3},{value:"Negative Points \ud83d\udc4e",id:"negative-points-",level:4},{value:"Positive Points \ud83d\udc4d",id:"positive-points-",level:4},{value:"Community Spotlight",id:"community-spotlight",level:2}],d={toc:u};function p(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Unreal Engine 5 Preview, new Network Authority System, Store API and more")),(0,o.kt)("h2",{id:"network-authority-system"},"Network Authority System"),(0,o.kt)("p",null,'As everyone knows, nanos world relies on a "server-less" solution for physics and other world operations. All the sync relies of sharing data between the players and replicating in each client. This approach brings several advantages and of course some drawbacks, in the advantages we can include a very lightweight server, where we have all the control over it, without needing to rely on Unreal\'s server executable or the way it handles the network.'),(0,o.kt)("p",null,"In the other hand we got some challenges on how to distribute physics information and other stuff. Then in the beginning we created our first Network Authority system in which each player is responsible for sharing a specific set of entities from the server to others, similar to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.roblox.com/en-us/articles/Network-Ownership"},"Roblox Solution"),"."),(0,o.kt)("p",null,'However, just like in Roblox, some problems become more noticeable when we have many players connected with many different pings. As some players will receive the "network authority" over entities faster than others, they will start sharing their location/rotation to other players while the \'old\' network authority is still the authority over that because he didn\'t receive the "lost network authority" message yet.'),(0,o.kt)("p",null,"We created this diagram to exemplify the problem:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(46776).Z,width:"851",height:"681"})),(0,o.kt)("p",null,'As you could notice, there is a "gap" and a "overlap" when switching network authority if we have discrepancies between players ping, causing several weird behaviors on physics objects.'),(0,o.kt)("p",null,"Considering this and after much study, we improved our Network Authority system to make it more robust, this new way aims to fill up the gaps and ignore overlaps:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(46395).Z,width:"851",height:"681"})),(0,o.kt)("p",null,'While still in a "beta" version, with this new system we intend to improve all the "warnings" and flickering problems that were occurring since then, all feedback is appreciated!'),(0,o.kt)("h2",{id:"new-debug-modes"},"New Debug Modes"),(0,o.kt)("p",null,"With the addition of the new Network Authority system, we are adding a new ",(0,o.kt)("strong",{parentName:"p"},"Debug")," section in the Settings."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(79679).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,"A cool setting is the ",(0,o.kt)("strong",{parentName:"p"},"Draw Network Debug")," which draws on World all network information:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(95259).Z,width:"1916",height:"1079"})),(0,o.kt)("p",null,"You can find more information in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/core-concepts/scripting/authority-concepts#debugging-network--network-authority"},"Network Authority")," page."),(0,o.kt)("p",null,'Also you can fake "packet loss" which will simulate some Sync Data being discarded.'),(0,o.kt)("h2",{id:"store-api"},"Store API"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(38026).Z,width:"1400",height:"392"})),(0,o.kt)("p",null,"Last month we released our ",(0,o.kt)("a",{parentName:"p",href:"https://store.nanos.world"},"Store"),", a place to share and download community Assets & Packages, integrated with the game."),(0,o.kt)("p",null,"Now we are releasing the ",(0,o.kt)("strong",{parentName:"p"},"Store API"),": You can download, upload and edit your resources through HTTP requests, check it the Swagger documentation at ",(0,o.kt)("a",{parentName:"p",href:"https://api.nanos.world/store/docs"},"https://api.nanos.world/store/docs"),". More tutorials coming soon\u2122."),(0,o.kt)("h2",{id:"documentation-changes"},"Documentation Changes"),(0,o.kt)("h3",{id:"modules"},"Modules"),(0,o.kt)("p",null,"We've added a new tutorial for creating your own C Module. You can check it out at the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/core-concepts/modules#creating-your-own-c-module"},"Modules")," page."),(0,o.kt)("h2",{id:"unreal-engine-5-preview"},"Unreal Engine 5: Preview"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(38786).Z,width:"1920",height:"800"})),(0,o.kt)("p",null,"A week ago, Epic Games gave us the wonderful news that they were releasing ",(0,o.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/blog/unreal-engine-5-is-now-available-in-preview"},"Unreal Engine 5: Preview"),". A Preview release means most of the features are already present and almost ready for a final shipping version."),(0,o.kt)("p",null,"And we, as good enthusiasts, and in addition to our other blog news (",(0,o.kt)("a",{parentName:"p",href:"https://nanos.world/blog/november-2021"},"November: Unreal Engine 5?"),") decided to give another try on converting nanos world into Unreal Engine 5. And let's move to our impressions:"),(0,o.kt)("h3",{id:"migrating-nanos-world"},"Migrating nanos world"),(0,o.kt)("p",null,"This time migrating nanos world to Unreal Engine 5: Preview was more trickier, we've got even more deprecated methods and some functionalities changed and/or removed, which required more hard work converting and debugging what has changed."),(0,o.kt)("p",null,"We've had to update a lot more code and files than the Early Access version to be able just to launch the Project. Also Vehicles had to be disabled due the new Chaos engine, which completely changes how Vehicles need to be implemented and we didn't want to bother on converting them right now."),(0,o.kt)("h3",{id:"graphics"},"Graphics"),(0,o.kt)("p",null,"Unreal Engine 5 introduces ",(0,o.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/blog/lumen-in-ue5-let-there-be-light"},"Lumen"),", a new dynamic Global Illumination method, and playing with it is very cool and impressive. Here's some screenshots taken from our Testing Map:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85480).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(28468).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(97437).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(92105).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(93088).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(29359).Z,width:"1919",height:"1079"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Next you can see how the object colors can reflect dynamically in the environment lights."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(64066).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(36381).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(49860).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(63657).Z,width:"1919",height:"1079"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Here we can see the contribution of Emissive Materials to the environment."))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(84537).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,"A cool feature is that we can enable Hardware-Accelerated for calculating Lumen (which replaces Hardware Ray Tracing), and tested with a RTX 3070 makes it even more beauty at a really low GPU cost."),(0,o.kt)("h3",{id:"technical"},"Technical"),(0,o.kt)("p",null,"In the technical aspect, the biggest changes Unreal 5 brings are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lumen")," (Dynamic Global Illumination)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nanite")," (Mesh Virtualization)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Chaos")," (new Physics Engine)"),(0,o.kt)("li",{parentName:"ul"},"and also not less important, the new features regarding World/Level creation (",(0,o.kt)("strong",{parentName:"li"},"One File Per Actor")," and ",(0,o.kt)("strong",{parentName:"li"},"World Partition"),")")),(0,o.kt)("p",null,"While Lumen, Nanite and World features can be toggled on or off (we can choose to use it or not), the same truth is not valid for ",(0,o.kt)("strong",{parentName:"p"},"Chaos"),". Unreal is completely removing PhysX and replacing by it's new Physics Engine: ",(0,o.kt)("strong",{parentName:"p"},"Chaos"),". Although we are open to new things, unfortunately Chaos doesn't seem to be in a totally good state, neither at least at the same level/stability as PhysX."),(0,o.kt)("p",null,'We could experience several Collision glitches, such as objects flickering, wrong "collision boxes", objects flying through walls, bugs with Rope (Cable), objects sleeping randomly, bad Hit events callbacks and so on.'),(0,o.kt)("p",null,"Most of the problems we could find an workaround (like applying force to some objects so they don't sleep, or finding a workaround on the Cables settings), but the main problem we've found using Chaos is the Hit feedback event, which are totally inconsistent, sometimes they are triggered with force 0, which annoys the hit sounds and also the nanos world Hit events from being triggered, and this can break gameplay/scripting functionalities."),(0,o.kt)("p",null,"Not to mention the objects flickering/disappearing/losing collisions which gives a really bad impression on the game quality."),(0,o.kt)("p",null,"And we didn't even started implementing the new Chaos Vehicles, can't wait what we gonna find there \ud83d\ude05."),(0,o.kt)("h3",{id:"stability"},"Stability"),(0,o.kt)("p",null,"Actually, this version of Unreal surprised us positively, it had less crashes than in early access, but still had some, but in this case it was when we were stressing the game really hard using several balloons, cables and props flying around. Although I was a little disappointed as most of the bugs I found in the Early Access were still prevent in this Preview and weren't yet fixed."),(0,o.kt)("p",null,"Also some rare bugs could be noticed, like suddenly being teleported to the 0, 0, 0 location, which we couldn't yet find the reason."),(0,o.kt)("h3",{id:"ue5-worth-it-now"},"UE5 worth it now?"),(0,o.kt)("p",null,'Summing up, we\'ve created a list of positive and negative points according to our view regarding if we should or not migrate to Unreal 5 "right now":'),(0,o.kt)("p",null,'Also, another point to consider: we are going to migrate to Unreal Engine 5 soon or later, the decision is "when". \ud83d\ude09'),(0,o.kt)("h4",{id:"negative-points-"},"Negative Points \ud83d\udc4e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gameplay Bugs related to Physics, objects jumping, flickering, bad collisions happening, objects passing through floor/walls due ",(0,o.kt)("strong",{parentName:"li"},"Chaos"),"."),(0,o.kt)("li",{parentName:"ul"},"Visual Artifacts, not only related to Lumen, but to the standard Rendering methods as well."),(0,o.kt)("li",{parentName:"ul"},"Random Unreal internal Crashes, which we cannot fix by ourselves."),(0,o.kt)("li",{parentName:"ul"},"More frequent Unreal updates, much probably we are going to have other Preview version, and after the UE5 release we are going to get several hotfixes, and each one will much likely require us from rebuilding all assets and publishing a new version of them, otherwise they won't work in the new versions. This means the Asset Packs won't work in newer Unreal versions."),(0,o.kt)("li",{parentName:"ul"},"Using Lumen has it's drawbacks, such as the performance, which can hit from 25% to 50% of the FPS (but can be toggled on/off).")),(0,o.kt)("h4",{id:"positive-points-"},"Positive Points \ud83d\udc4d"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We are going to be the first ones to explore Unreal Engine 5 (which can be bad because some problems no one figured out yet, but personally I love exploring new features and using new tools)."),(0,o.kt)("li",{parentName:"ul"},"nanos world will have a great self-marketing potential, and also can bring lots of new enthusiasts on UE5 to know, play and create with the game."),(0,o.kt)("li",{parentName:"ul"},"Lumen is fun and beautiful."),(0,o.kt)("li",{parentName:"ul"},"New World/Level tools which allows creating big maps and also improves a lot the co-creations pipelines using the ",(0,o.kt)("strong",{parentName:"li"},"One File Per Actor")," system and ",(0,o.kt)("strong",{parentName:"li"},"World Partition"),"!"),(0,o.kt)("li",{parentName:"ul"},"New Unreal Editor which has a fresh and pleasing look."),(0,o.kt)("li",{parentName:"ul"},"Lots of new tools and technology to use, including Nanite, Chaos Destruction, Animation tools (which can help us from dynamically linking your custom Animation Blueprint) and the new MetaSounds."),(0,o.kt)("li",{parentName:"ul"},"It's really hard to convert nanos world from scratch every update to test it's stability, I can't reuse the previous conversion because many changes are in blueprints (UI) that I can't merge and lots had changed since then. So converting once and right now we can already start digging, fixing stuff and the next unreal updates will be easier and faster to test and maintain.")),(0,o.kt)("p",null,"Unlike Early Access, this version seemed to have more positives than negatives points, and it seems like a better opportunity than before to officially migrate nanos world. Come to our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord")," to discuss this idea with us! We are going to make a poll to bring all feedback from the community!"),(0,o.kt)("h2",{id:"community-spotlight"},"Community Spotlight"),(0,o.kt)("p",null,"Here we'd like to share all amazing stuff our community is doing the last weeks!"),(0,o.kt)("p",null,"Timmy is doing an amazing job, and is sharing it's new Inventory System:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(66227).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"Also Timmy created a nice smooth Weather system transition:"),(0,o.kt)("video",{controls:"true",allowfullscreen:"true"},(0,o.kt)("source",{src:"/videos/blog/february/timmy-weather-01.mp4",type:"video/mp4"})),(0,o.kt)("video",{controls:"true",allowfullscreen:"true"},(0,o.kt)("source",{src:"/videos/blog/february/timmy-weather-02.mp4",type:"video/mp4"})),(0,o.kt)("p",null,"MegaThorx released it's brand new ",(0,o.kt)("a",{parentName:"p",href:"https://store.nanos.world/packages/egui/"},"EGUI")," library. A Package for creating GUIs from scripting! It also contains it's own complete ",(0,o.kt)("a",{parentName:"p",href:"https://nanos-world.github.io/egui-docs/"},"documentation"),"!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78061).Z,width:"620",height:"549"})),(0,o.kt)("p",null,"Voltaism shared a very cool implementation of Bots playing his game-mode VZombies by themselves with no Players:"),(0,o.kt)("video",{controls:"true",allowfullscreen:"true"},(0,o.kt)("source",{src:"/videos/blog/february/voltaism-bots.mp4",type:"video/mp4"})))}p.isMDXComponent=!0},79679:function(e,t,n){t.Z=n.p+"assets/images/debug-settings-885b03f9c7b3d5c87f58b1cf04773aae.jpg"},95259:function(e,t,n){t.Z=n.p+"assets/images/debug-visualizer-c087044d005e1ae370cc83cde211dad4.jpg"},38786:function(e,t,n){t.Z=n.p+"assets/images/matrix-725aac4bb78eb865c7eab146e3104fe9.webp"},78061:function(e,t,n){t.Z=n.p+"assets/images/megathorx-egui-7848a96c802b8db0a86912f6d7f5bc75.jpg"},46776:function(e,t,n){t.Z=n.p+"assets/images/network-authority-problem-87e59351e261f860e32abf36e8150ffb.jpg"},46395:function(e,t,n){t.Z=n.p+"assets/images/network-authority-solution-c865e7c9abd5fa2c1bc6ee5d50213cdb.jpg"},38026:function(e,t,n){t.Z=n.p+"assets/images/swagger-137c5ff2a490efb7ffa89089cedfddd4.png"},66227:function(e,t,n){t.Z=n.p+"assets/images/timmy-inventory-ccb55318e9d7ca72d23c5deb3a25c0d1.jpg"},85480:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-01-81409553f59c529ff3a46808a41de510.jpg"},28468:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-02-a1be36a6c9eb72ab068dfca6311cc566.jpg"},97437:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-03-f6d93e48336c065b745d501fe070a724.jpg"},64066:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-04-6bc9516fd9311d9967287055f9701304.jpg"},36381:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-05-d40073ca9dfbced6c6bf82627fc61c63.jpg"},49860:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-06-2592f22a6d54f62b925e6401c5a75e07.jpg"},63657:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-07-6898fe4b319a59a069e11eb7b999dcf6.jpg"},92105:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-08-ab9dd06f3548c19ccd38d4f94979435e.jpg"},93088:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-09-e4fa61287c021b5692a34e1ae98267d4.jpg"},29359:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-10-d5a77676b24b961c14dc264d6e0c5271.jpg"},84537:function(e,t,n){t.Z=n.p+"assets/images/ue5-graphics-11-a2167789320906715988a5adebbd1b2f.jpg"}}]);