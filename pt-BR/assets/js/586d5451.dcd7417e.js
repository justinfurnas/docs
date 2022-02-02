"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7694],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(r),g=i,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||a;return r?n.createElement(m,o(o({ref:e},l),{},{components:r})):n.createElement(m,o({ref:e},l))}));function g(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},87469:function(t,e,r){r.d(e,{YS:function(){return o},SM:function(){return s},Yb:function(){return p},aj:function(){return f},rt:function(){return h},Ut:function(){return y},PZ:function(){return k},p2:function(){return b}});r(87462),r(63366),r(67294);var n=r(3905),i=r(65551),a=function(){return(0,i.useActiveVersion)().path},o=function(t){var e=t.title,r=t.description,i=t.href,o=t.image_src;return(0,n.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,n.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,e),(0,n.kt)("p",null,r))},s=function(t){var e=t.children,r=t.href;return(0,n.kt)("a",{class:"reference-link",href:r.startsWith("http")?r:a()+"/"+r},e,(0,n.kt)("span",null,r))},c=function(t,e){return(0,n.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:t,title:e}))},u=function(t){return(0,n.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},l=function(t,e){return(0,n.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},d=function(t,e){return(0,n.kt)("a",{href:a()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},p=function(t){var e=t.children;return(0,n.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},g=function(t){return(0,n.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},m=function(t){return(0,n.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},f={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},y={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},k={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Canvas:function(){return d("Canvas")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Melee:function(){return d("Melee")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},SceneCapture:function(){return d("SceneCapture","scene-capture")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},b={StaticMesh:function(){return g("StaticMesh Asset")},SkeletalMesh:function(){return g("SkeletalMesh Asset")},Animation:function(){return g("Animation Asset")},Particle:function(){return g("Particle Asset")},Material:function(){return g("Material Asset")},Map:function(){return g("Map Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},82499:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return g}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=r(87469),s=["components"],c={description:"Lista de todos os tutoriais",sidebar_position:0},u="\ud83d\udcd1 Lista Completa de Tutoriais",l={unversionedId:"getting-started/tutorials-and-examples/tutorials",id:"version-latest/getting-started/tutorials-and-examples/tutorials",title:"\ud83d\udcd1 Lista Completa de Tutoriais",description:"Lista de todos os tutoriais",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/getting-started/tutorials-and-examples/tutorials.mdx",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/tutorials",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/tutorials",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/tutorials.mdx",tags:[],version:"latest",sidebarPosition:0,frontMatter:{description:"Lista de todos os tutoriais",sidebar_position:0},sidebar:"version-latest/main",previous:{title:"\ud83d\udcd1 Lista Completa de Tutoriais",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/"},next:{title:"HUD B\xe1sica (Canvas)",permalink:"/pt-BR/docs/getting-started/tutorials-and-examples/basic-hud-canvas"}},d=[],p={toc:d};function g(t){var e=t.components,r=(0,i.Z)(t,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-lista-completa-de-tutoriais"},"\ud83d\udcd1 Lista Completa de Tutoriais"),(0,a.kt)("p",null,"Lista de Tutoriais, Snippets e Exemplos para criar Packages e game-modes para o nanos world."),(0,a.kt)("div",{class:"card-links"},(0,a.kt)(o.YS,{title:"HUD B\xe1sica (Canvas)",description:"How to add a basic HUD using Render\u2019s Canvas features, to display the character\u2019s Health and Ammo.",image_src:"/img/docs/tutorials/canvas.jpg",href:"getting-started/tutorials-and-examples/basic-hud-canvas",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"HUD b\xe1sica (HTML)",description:"How to add a basic HUD using HTML + JavaScript + CSS to display the character\u2019s Health and Ammo based on CS:GO HUD.",image_src:"/img/docs/tutorials/html-01.jpg",href:"getting-started/tutorials-and-examples/basic-hud-html",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Chat Colors",description:"How to customize chat messages.",image_src:"/img/docs/tutorials/chat-colors.jpg",href:"getting-started/tutorials-and-examples/chat-colors",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Portas",description:"How to create a simple and automatic door when Characters move in.",image_src:"/img/docs/tutorials/doors.jpg",href:"getting-started/tutorials-and-examples/doors",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Fogo de Artif\xedcio",description:"How to create a Firework-shooter weapon using the Fireworks Particle Effects Asset Pack from our Vault!",image_src:"/img/docs/tutorials/fireworks-01.jpg",href:"getting-started/tutorials-and-examples/fireworks",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Gravity Gun",description:"How to create a simple Gravity Gun to move Props around.",image_src:"/img/docs/tutorials/gravity-gun.jpg",href:"getting-started/tutorials-and-examples/gravity-gun",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Hosting Server 4Free - Google Cloud",description:"How to create a Linux virtual machine instance on Compute Engine using the Google Cloud Console within the Free Tier.",image_src:"/img/docs/tutorials/hosting-4free-01.jpg",href:"getting-started/tutorials-and-examples/hosting-server-4free-gcp",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Monster Truck",description:"How to create a Monster Truck using the Vehicle system.",image_src:"/img/docs/tutorials/monster-truck.jpg",href:"getting-started/tutorials-and-examples/monster-truck",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Nametags",description:"How to add Name Tags to Characters.",image_src:"/img/docs/tutorials/nametag.jpg",href:"getting-started/tutorials-and-examples/name-tags",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Pintando Meshes",description:"How to use the new Material customization methods available to use.",image_src:"/img/docs/tutorials/painting-meshes-01.jpg",href:"getting-started/tutorials-and-examples/painting-meshes",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Jogar como Prop",description:"How to simulate a Prop possessing using a Character. This can be used for Prop Hunt game-modes!",image_src:"/img/docs/tutorials/play-as-prop.jpg",href:"getting-started/tutorials-and-examples/play-as-prop",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Lanterna na Arma",description:"This sample code attaches a Light to a Weapon to make a Flashlight attachment.",image_src:"/img/docs/tutorials/weapon-flashlight.jpg",href:"getting-started/tutorials-and-examples/weapon-flashlight",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"Mira para Armas",description:"This sample code shows how to attach custom sights meshes into a Weapon and work as real scopes.",image_src:"/img/docs/tutorials/weapon-scope.jpg",href:"getting-started/tutorials-and-examples/weapon-scope",mdxType:"CardLink"}),(0,a.kt)(o.YS,{title:"X-Ray & Highlight",description:"This sample code shows how to set Actors to be highlighted when behind walls, or always highlighted!",image_src:"/img/docs/tutorials/xray.jpg",href:"getting-started/tutorials-and-examples/x-ray-and-highlight",mdxType:"CardLink"})))}g.isMDXComponent=!0}}]);