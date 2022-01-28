"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9991],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return o},SM:function(){return c},Yb:function(){return d},aj:function(){return g},rt:function(){return h},Ut:function(){return y},PZ:function(){return b},p2:function(){return v}});n(87462),n(63366),n(67294);var r=n(3905),i=n(80907),a=function(){return(0,i.zu)().path},o=function(e){var t=e.title,n=e.description,i=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},c=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:a()+"/"+n},t,(0,r.kt)("span",null,n))},s=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},f=function(e){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},y={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},b={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},v={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},11245:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=n(87469),c=["components"],s={description:"How to display information in the Screen for the Player",sidebar_position:5,tags:["scripting","ui"]},u="User Interface",l={unversionedId:"core-concepts/scripting/user-interface",id:"core-concepts/scripting/user-interface",title:"User Interface",description:"How to display information in the Screen for the Player",source:"@site/docs/core-concepts/scripting/user-interface.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/user-interface",permalink:"/docs/next/core-concepts/scripting/user-interface",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/user-interface.mdx",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"},{label:"ui",permalink:"/docs/next/tags/ui"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1630320236,formattedLastUpdatedAt:"8/30/2021",sidebarPosition:5,frontMatter:{description:"How to display information in the Screen for the Player",sidebar_position:5,tags:["scripting","ui"]},sidebar:"main",previous:{title:"Entity Values",permalink:"/docs/next/core-concepts/scripting/entity-values"},next:{title:"Artificial Intelligence",permalink:"/docs/next/core-concepts/scripting/artificial-intelligence"}},p=[{value:"WebUI",id:"webui",children:[{value:"Basic WebUI Setup",id:"basic-webui-setup",children:[],level:3}],level:2},{value:"Canvas",id:"canvas",children:[],level:2}],d={toc:p};function f(e){var t=e.components,s=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-interface"},"User Interface"),(0,a.kt)("p",null,"How to display information in the Screen for the Player."),(0,a.kt)("p",null,"In nanos world there are 2 official ways of plotting screen data: ",(0,a.kt)("strong",{parentName:"p"},"WebUI")," and Render ",(0,a.kt)("strong",{parentName:"p"},"Canvas"),"."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Although we highly recommend using ",(0,a.kt)("strong",{parentName:"p"},"WebUI"),", using Render Canvas is still supported but deprecated."))),(0,a.kt)("h2",{id:"webui"},"WebUI"),(0,a.kt)("p",null,"With WebUI you can load HTML pages which integrate with your Packages in Lua using Events."),(0,a.kt)("h3",{id:"basic-webui-setup"},"Basic WebUI Setup"),(0,a.kt)("p",null,"This sample code shows how to add a basic page using HTML+JavaScript with the WebUI class."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Note:")," All WebUI code runs on Client side!"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Spawns a WebUI with the HTML file you just created\nMyUI = WebUI("My UI", "file:///UI/index.html")\n\n-- When the HTML is ready, triggers an Event in there\nMyUI:Subscribe("Ready", function()\n    MyUI:CallEvent("MyAwesomeEvent", "Hello! You are ready!")\nend)\n\nMyUI:Subscribe("MyAwesomeAnswer", function(param1)\n    Package.Log("Received an answer! Message: " .. param1)\nend)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Client/UI/index.html"',title:'"Client/UI/index.html"'},'<html>\n    <head>\n        <script src="index.js"><\/script>\n    </head>\n    <body>\n        Hello World!\n    </body>\n</html>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Client/UI/index.js"',title:'"Client/UI/index.js"'},'// Register for "MyAwesomeEvent" from Lua\nEvents.Subscribe("MyAwesomeEvent", function(param1) {\n    console.log("Triggered! " + param1);\n\n    // Triggers "MyAwesomeAnswer" on Lua\n    Events.Call("MyAwesomeAnswer", "Hey there!");\n})\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WebUI results",src:n(86108).Z})),(0,a.kt)("p",null,"This will output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[WebUI]  Triggered! Hello! You are ready!\n[Script] Received an answer! Message: Hey there!\n")),(0,a.kt)(o.SM,{href:"getting-started/tutorials-and-examples/basic-hud-html",mdxType:"ReferenceLink"},"Basic HUD (HTML)"),(0,a.kt)("h2",{id:"canvas"},"Canvas"),(0,a.kt)(o.SM,{href:"getting-started/tutorials-and-examples/basic-hud-canvas",mdxType:"ReferenceLink"},"Basic HUD (Canvas)"))}f.isMDXComponent=!0},86108:function(e,t,n){t.Z=n.p+"assets/images/user-interface-7e95b34bf99d9b0891c7fd3a8d9fc278.jpg"}}]);