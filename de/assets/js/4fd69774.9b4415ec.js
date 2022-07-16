"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2661],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),f=u(n),d=i,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(g,a(a({ref:e},l),{},{components:n})):r.createElement(g,a({ref:e},l))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{PZ:function(){return b},SM:function(){return c},Ut:function(){return y},YS:function(){return a},Yb:function(){return f},aj:function(){return m},p2:function(){return k},rt:function(){return h}});n(83117),n(80102),n(67294);var r=n(3905),i=n(80143),o=function(){return(0,i.zu)().path},a=function(t){var e=t.title,n=t.description,i=t.href,a=t.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:o()+"/"+i},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,n))},c=function(t){var e=t.children,n=t.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:o()+"/"+n},e,(0,r.kt)("span",null,n))},s=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:o()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},u=function(t){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},l=function(t,e){return(0,r.kt)("a",{href:o()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},p=function(t,e){return(0,r.kt)("a",{href:o()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},f=function(t){var e=t.children;return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},d=function(t){return(0,r.kt)("a",{href:o()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},g=function(t){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},m={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},y={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},b={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},k={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Blueprint:function(){return d("Blueprint Asset")},Sound:function(){return g("Sound Asset or Special Path")},Image:function(){return g("Image Special Path")},HTML:function(){return g("HTML Special Path")}}},96368:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(87469),c=["components"],s={title:"Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",tags:["utility-class"]},u=void 0,l={unversionedId:"scripting-reference/utility-classes/vectortwod",id:"version-latest/scripting-reference/utility-classes/vectortwod",title:"Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/scripting-reference/utility-classes/vectortwod.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/vectortwod",permalink:"/de/docs/scripting-reference/utility-classes/vectortwod",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/utility-classes/vectortwod.mdx",tags:[{label:"utility-class",permalink:"/de/docs/tags/utility-class"}],version:"latest",frontMatter:{title:"Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",tags:["utility-class"]},sidebar:"version-latest/main",previous:{title:"Vector",permalink:"/de/docs/scripting-reference/utility-classes/vector"},next:{title:"Basic Types",permalink:"/de/docs/scripting-reference/glossary/basic-types"}},p={},f=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2}],d={toc:f};function g(t){var e=t.components,n=(0,i.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," This structure is Open Sourced at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note:")," This structure supports ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"==")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector2D = Vector2D(1452.5, 512)\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Type")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Name")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Beschreibung")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)(a.rt.Number,null)),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"X"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"X Coordinate")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)(a.rt.Number,null)),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Y"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Y Coordinate")))))}g.isMDXComponent=!0}}]);