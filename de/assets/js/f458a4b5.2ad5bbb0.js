"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[253],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{PZ:function(){return y},SM:function(){return s},Ut:function(){return b},YS:function(){return a},Yb:function(){return f},aj:function(){return g},p2:function(){return k},rt:function(){return m}});n(83117),n(80102),n(67294);var r=n(3905),o=n(80143),i=function(){return(0,o.zu)().path},a=function(e){var t=e.title,n=e.description,o=e.href,a=e.image_src;return(0,r.kt)("a",{class:"card-link",href:o.startsWith("http")?o:i()+"/"+o},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},s=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},t,(0,r.kt)("span",null,n))},c=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},f=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},d=function(e){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},h=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},m={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},b={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},y={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},k={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Blueprint:function(){return d("Blueprint Asset")},Sound:function(){return h("Sound Asset or Special Path")},Image:function(){return h("Image Special Path")},HTML:function(){return h("HTML Special Path")}}},51188:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=n(87469),s=["components"],c={id:"signing-up-alpha",title:"\ud83e\uddea F\xfcrs Alpha Testing anmelden",description:"How to become a Tester",image:"/img/docs/uncle-sam.png",keywords:["alpha","beta","test","tester","sign-up"],sidebar_position:.1},u=void 0,l={unversionedId:"signing-up-alpha",id:"signing-up-alpha",title:"\ud83e\uddea F\xfcrs Alpha Testing anmelden",description:"How to become a Tester",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/signing-up-alpha.mdx",sourceDirName:".",slug:"/signing-up-alpha",permalink:"/de/docs/next/signing-up-alpha",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/signing-up-alpha.mdx",tags:[],version:"current",sidebarPosition:.1,frontMatter:{id:"signing-up-alpha",title:"\ud83e\uddea F\xfcrs Alpha Testing anmelden",description:"How to become a Tester",image:"/img/docs/uncle-sam.png",keywords:["alpha","beta","test","tester","sign-up"],sidebar_position:.1},sidebar:"main",previous:{title:"\ud83d\udc4b Willkommen",permalink:"/de/docs/next/"},next:{title:"\ud83d\udee3\ufe0f Feedback, Bugs & Roadmap",permalink:"/de/docs/next/roadmap"}},p={},f=[{value:"Who can become a Tester?",id:"who-can-become-a-tester",level:2},{value:"How do I know I was selected?",id:"how-do-i-know-i-was-selected",level:2},{value:"Will I keep the game after the Testing Phase ends?",id:"will-i-keep-the-game-after-the-testing-phase-ends",level:2},{value:"Registering to become an Alpha Tester",id:"registering-to-become-an-alpha-tester",level:2}],d={toc:f};function h(e){var t=e.components,c=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"How to subscribe to become a Tester."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(96635).Z,width:"750",height:"427"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We want you!")," nanos world is under heavy development since 2 years! And finally has come to an Alpha state! This means a lot is already done and it's time to test the limits!"),(0,i.kt)("p",null,"We love our testers! We consider testers as a fundamental part of nanos world. Most of our features and bug fixes is worked on based on your feedback! Therefore we choose the testers thoroughly!"),(0,i.kt)("h2",{id:"who-can-become-a-tester"},"Who can become a Tester?"),(0,i.kt)("p",null,"Everyone can register! We are looking for people who are enthusiastic about sandbox games looking to help! All opinions count! We are giving preference to people interested in creating content, scripting and testing our API! Let us know of your interest! We heavily recommend getting in touch to us in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord"),"! Active community members will much likely get the access earlier! Be sure to introduce yourself so we can get to know each other \ud83d\ude04!"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use the forms to tell us why you should become a tester and how you can contribute to the development of nanos world! Feel free to express your skills in other areas you have abilities and would like to contribute in other ways too!")),(0,i.kt)("h2",{id:"how-do-i-know-i-was-selected"},"How do I know I was selected?"),(0,i.kt)("p",null,"Once selected, you will get notified or by e-mail or through Discord (by ",(0,i.kt)("strong",{parentName:"p"},"SyedMuhammad"),")!"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We weekly review the applications to become a tester. But we are not always able to respond as quickly as possible, all subscriptions are stored and never discarded. If you are an community active member, your chances are much better of being prioritized!")),(0,i.kt)("h2",{id:"will-i-keep-the-game-after-the-testing-phase-ends"},"Will I keep the game after the Testing Phase ends?"),(0,i.kt)("p",null,"We want to be able to give back in some way to testers who actively contributed to the nanos world. So ",(0,i.kt)("strong",{parentName:"p"},"YES"),", we desire to to give away keys to the deserving testers after the testing phase is over!"),(0,i.kt)("h2",{id:"registering-to-become-an-alpha-tester"},"Registering to become an Alpha Tester"),(0,i.kt)("p",null,"In the bottom of our website there is a forms to input your e-mail and receive the link to subscribe:"),(0,i.kt)(a.SM,{href:"https://nanos.world/#subscribe",mdxType:"ReferenceLink"},"nanos world Subscribe"))}h.isMDXComponent=!0},96635:function(e,t,n){t.Z=n.p+"assets/images/uncle-sam-d033425b97aa7fb6f98a9829a3748868.png"}}]);