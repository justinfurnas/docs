"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6314],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{PZ:function(){return y},SM:function(){return u},Ut:function(){return b},YS:function(){return o},Yb:function(){return p},aj:function(){return m},p2:function(){return k},rt:function(){return g}});n(87462),n(63366),n(67294);var r=n(3905),a=n(65551),i=function(){return(0,a.zu)().path},o=function(e){var t=e.title,n=e.description,a=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:i()+"/"+a},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},u=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},t,(0,r.kt)("span",null,n))},c=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},s=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},f=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},p=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},d=function(e){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},h=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},m={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},g={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},b={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},y={Actor:function(){return f("Actor","base-classes/actor")},Paintable:function(){return f("Paintable","base-classes/paintable")},Pickable:function(){return f("Pickable","base-classes/pickable")},Billboard:function(){return f("Billboard")},Blueprint:function(){return f("Blueprint")},Canvas:function(){return f("Canvas")},Cable:function(){return f("Cable")},Character:function(){return f("Character")},Database:function(){return f("Database")},File:function(){return f("File")},Grenade:function(){return f("Grenade")},Melee:function(){return f("Melee")},Light:function(){return f("Light")},Particle:function(){return f("Particle")},Player:function(){return f("Player")},Prop:function(){return f("Prop")},Sound:function(){return f("Sound")},SceneCapture:function(){return f("SceneCapture","scene-capture")},StaticMesh:function(){return f("StaticMesh","static-mesh")},TextRender:function(){return f("TextRender","text-render")},Trigger:function(){return f("Trigger")},Vehicle:function(){return f("Vehicle")},Weapon:function(){return f("Weapon")},WebUI:function(){return f("WebUI")}},k={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Blueprint:function(){return d("Blueprint Asset")},Sound:function(){return h("Sound Asset or Special Path")},Image:function(){return h("Image Special Path")},HTML:function(){return h("HTML Special Path")}}},99463:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(87469),u=["components"],c={description:"nanos world Roadmap and future updates",sidebar_position:.2},s="\ud83d\udee3\ufe0f Roadmap",l={unversionedId:"roadmap",id:"version-latest/roadmap",title:"\ud83d\udee3\ufe0f Roadmap",description:"nanos world Roadmap and future updates",source:"@site/versioned_docs/version-latest/roadmap.mdx",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/roadmap.mdx",tags:[],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1634073576,formattedLastUpdatedAt:"10/12/2021",sidebarPosition:.2,frontMatter:{description:"nanos world Roadmap and future updates",sidebar_position:.2},sidebar:"version-latest/main",previous:{title:"\ud83e\uddea Sign Up for Alpha Testing",permalink:"/docs/signing-up-alpha"},next:{title:"\ud83e\udd1d Contributing to the Docs",permalink:"/docs/contributing-to-the-docs"}},f={},p=[{value:"Suggesting new Ideas",id:"suggesting-new-ideas",level:2}],d={toc:p};function h(e){var t=e.components,c=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-roadmap"},"\ud83d\udee3\ufe0f Roadmap"),(0,i.kt)("p",null,"Check out our future plans and upcoming updates!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1787).Z,width:"1407",height:"793"})),(0,i.kt)("p",null,"nanos world is a feedback-driven game, that means we are always listening to community feedback and ideas to follow a development path!"),(0,i.kt)("p",null,"We group all our goals and ideas in our official ",(0,i.kt)("a",{parentName:"p",href:"https://roadmap.nanos.world"},"Roadmap Trello Board"),", which is always being updated with the new ideas that may come up!"),(0,i.kt)(o.SM,{href:"https://roadmap.nanos.world",mdxType:"ReferenceLink"},"\ud83d\udee3\ufe0f Official Roadmap"),(0,i.kt)("h2",{id:"suggesting-new-ideas"},"Suggesting new Ideas"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41423).Z,width:"1248",height:"318"})),(0,i.kt)("p",null,"All your suggestion and ideas can be collected in our official ",(0,i.kt)("a",{parentName:"p",href:"https://issues.nanos.world"},"GitHub Issue Tracker"),". We read all reports in there and deeply discuss them to add the feature to the game!"),(0,i.kt)(o.SM,{href:"https://issues.nanos.world",mdxType:"ReferenceLink"},"\u2714\ufe0f Official Issue Tracker"),(0,i.kt)("p",null,"You can also join us on ",(0,i.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord")," and brainstormw ith us in the # \ud83e\udde0\uff5cbrainstorm channel :P!"))}h.isMDXComponent=!0},41423:function(e,t,n){t.Z=n.p+"assets/images/github-issues-fcf9f576f01fc930d24e89357f2ee6ab.jpg"},1787:function(e,t,n){t.Z=n.p+"assets/images/roadmap-b2298f740cfedf78356bbe5dc59fd92e.jpg"}}]);