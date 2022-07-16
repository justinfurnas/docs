"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2949],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),f=s(n),d=i,k=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(k,a(a({ref:e},u),{},{components:n})):r.createElement(k,a({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{PZ:function(){return y},SM:function(){return l},Ut:function(){return h},YS:function(){return a},Yb:function(){return f},aj:function(){return g},p2:function(){return b},rt:function(){return m}});n(83117),n(80102),n(67294);var r=n(3905),i=n(80143),o=function(){return(0,i.zu)().path},a=function(t){var e=t.title,n=t.description,i=t.href,a=t.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:o()+"/"+i},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,n))},l=function(t){var e=t.children,n=t.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:o()+"/"+n},e,(0,r.kt)("span",null,n))},c=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:o()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},s=function(t){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},u=function(t,e){return(0,r.kt)("a",{href:o()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},p=function(t,e){return(0,r.kt)("a",{href:o()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},f=function(t){var e=t.children;return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},d=function(t){return(0,r.kt)("a",{href:o()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},k=function(t){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},g={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},m={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},h={Vector:function(){return u("Vector")},Rotator:function(){return u("Rotator")},Color:function(){return u("Color")},Quat:function(){return u("Quat","quaternion")},Vector2D:function(){return u("Vector2D","vectortwod")}},y={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},b={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Blueprint:function(){return d("Blueprint Asset")},Sound:function(){return k("Sound Asset or Special Path")},Image:function(){return k("Image Special Path")},HTML:function(){return k("HTML Special Path")}}},16922:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(87469),l=["components"],c={title:"Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},s=void 0,u={unversionedId:"scripting-reference/utility-classes/vector",id:"scripting-reference/utility-classes/vector",title:"Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting-reference/utility-classes/vector.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/vector",permalink:"/de/docs/next/scripting-reference/utility-classes/vector",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/utility-classes/vector.mdx",tags:[{label:"utility-class",permalink:"/de/docs/next/tags/utility-class"}],version:"current",frontMatter:{title:"Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},sidebar:"main",previous:{title:"Rotator",permalink:"/de/docs/next/scripting-reference/utility-classes/rotator"},next:{title:"Vector2D",permalink:"/de/docs/next/scripting-reference/utility-classes/vectortwod"}},p={},f=[{value:"\ud83d\udc4c Usage",id:"-usage",level:2},{value:"\ud83c\udf9a Properties",id:"-properties",level:2},{value:"\u23e9 Functions",id:"-functions",level:2}],d={toc:f};function k(t){var e=t.components,n=(0,i.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A vector composed of components (X, Y, Z) with floating point precision."),(0,o.kt)("admonition",{title:"Tip",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This structure is Open Sourced at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Vectors are internally and automatically compressed, which reduces it's size in the network up to 90%. Some cool details:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Vectors parameters in Classes Methods are usually compressed with precision of 1 decimal place (with some exceptions which we need more precision)."),(0,o.kt)("li",{parentName:"ul"},"Vectors passed in Remote Events are compressed with precision of 2 decimal places. If you need more precision, we recommend passing them as raw ",(0,o.kt)(a.rt.Number,null)," instead."))),(0,o.kt)("h2",{id:"-usage"},"\ud83d\udc4c Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector(1452.5, 512, 943.1)\n")),(0,o.kt)("h2",{id:"-properties"},"\ud83c\udf9a Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Type")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Name")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Beschreibung")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)(a.rt.Number,null)),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"X"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"X Coordinate")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)(a.rt.Number,null)),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Y"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Y Coordinate")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)(a.rt.Number,null)),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Z"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Z Coordinate")))),(0,o.kt)("h2",{id:"-functions"},"\u23e9 Functions"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note:")," This structure supports ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"=="),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,o.kt)("table",{"spaces-before":"0"},(0,o.kt)("tr",null,(0,o.kt)("th",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},"Returns")),(0,o.kt)("th",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},"Name")),(0,o.kt)("th",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},"Beschreibung"))),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.rt.Boolean,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"Equals(other, tolerance)"))),(0,o.kt)("td",{align:"left"},"Check against another vector for equality, within specified error limits")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.rt.Number,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"Distance(other)"))),(0,o.kt)("td",{align:"left"},"Distance between two points")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.rt.Number,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"DistanceSquared(other)"))),(0,o.kt)("td",{align:"left"},"Squared distance between two points")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.Ut.Vector,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"GetUnsafeNormal()"))),(0,o.kt)("td",{align:"left"},"Calculates normalized version of vector without checking for zero length")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.Ut.Vector,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"GetSafeNormal()"))),(0,o.kt)("td",{align:"left"},"Gets a normalized copy of the vector, checking it is safe to do so based on the length")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.rt.Boolean,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"IsNearlyZero(tolerance)"))),(0,o.kt)("td",{align:"left"},"Checks whether vector is near to zero within a specified tolerance")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.rt.Boolean,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"IsZero()"))),(0,o.kt)("td",{align:"left"},"Checks whether all components of the vector are exactly zero")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.rt.Boolean,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"Normalize()"))),(0,o.kt)("td",{align:"left"},"Normalize this vector in-place if it is larger than a given tolerance. Leaves it unchanged if not")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.rt.Number,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"Size()"))),(0,o.kt)("td",{align:"left"},"Get the length (magnitude) of this vector")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.rt.Number,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"SizeSquared()"))),(0,o.kt)("td",{align:"left"},"Get the squared length of this vector")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"left"},(0,o.kt)(a.Ut.Rotator,null)),(0,o.kt)("td",{align:"left"},(0,o.kt)("strong",{"x-id":"1"},(0,o.kt)("code",null,"Rotation()"))),(0,o.kt)("td",{align:"left"},"Returns the orientation corresponding to the direction in which the vector points"))))}k.isMDXComponent=!0}}]);