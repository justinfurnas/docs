"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6095],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),c=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(m,".").concat(d)]||u[d]||p[d]||i;return a?n.createElement(k,l(l({ref:e},s),{},{components:a})):n.createElement(k,l({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87469:function(t,e,a){a.d(e,{PZ:function(){return h},SM:function(){return o},Ut:function(){return g},YS:function(){return l},Yb:function(){return u},aj:function(){return f},p2:function(){return b},rt:function(){return N}});a(87462),a(63366),a(67294);var n=a(3905),r=a(65551),i=function(){return(0,r.zu)().path},l=function(t){var e=t.title,a=t.description,r=t.href,l=t.image_src;return(0,n.kt)("a",{class:"card-link",href:r.startsWith("http")?r:i()+"/"+r},(0,n.kt)("img",{src:l||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,e),(0,n.kt)("p",null,a))},o=function(t){var e=t.children,a=t.href;return(0,n.kt)("a",{class:"reference-link",href:a.startsWith("http")?a:i()+"/"+a},e,(0,n.kt)("span",null,a))},m=function(t,e){return(0,n.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:t,title:e}))},c=function(t){return(0,n.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},s=function(t,e){return(0,n.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},p=function(t,e){return(0,n.kt)("a",{href:i()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},u=function(t){var e=t.children;return(0,n.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},d=function(t){return(0,n.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},k=function(t){return(0,n.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},f={AuthorityOnly:function(){return m("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return m("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return m("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return m("/img/scripting/both.png","both-sides - this can be called on any side!")}},N={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},g={Vector:function(){return s("Vector")},Rotator:function(){return s("Rotator")},Color:function(){return s("Color")},Quat:function(){return s("Quat","quaternion")},Vector2D:function(){return s("Vector2D","vectortwod")}},h={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},b={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Blueprint:function(){return d("Blueprint Asset")},Sound:function(){return k("Sound Asset or Special Path")},Image:function(){return k("Image Special Path")},HTML:function(){return k("HTML Special Path")}}},1653:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(87469),o=["components"],m={title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals",tags:["static-class"]},c=void 0,s={unversionedId:"scripting-reference/static-classes/timer",id:"scripting-reference/static-classes/timer",title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting-reference/static-classes/timer.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/timer",permalink:"/de/docs/next/scripting-reference/static-classes/timer",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/static-classes/timer.mdx",tags:[{label:"static-class",permalink:"/de/docs/next/tags/static-class"}],version:"current",frontMatter:{title:"\u23f1\ufe0f Timer",description:"Execute of code at specified time intervals",tags:["static-class"]},sidebar:"main",previous:{title:"\ud83d\udcbb Server",permalink:"/de/docs/next/scripting-reference/static-classes/server"},next:{title:"\ud83c\udf0d World",permalink:"/de/docs/next/scripting-reference/static-classes/world"}},p={},u=[{value:"Static Functions",id:"static-functions",level:2},{value:"<code>SetTimeout</code>",id:"settimeout",level:3},{value:"<code>SetInterval</code>",id:"setinterval",level:3},{value:"<code>ClearTimeout</code>",id:"cleartimeout",level:3},{value:"<code>ClearInterval</code>",id:"clearinterval",level:3},{value:"<code>Bind</code>",id:"bind",level:3},{value:"<code>IsValid</code>",id:"isvalid",level:3},{value:"<code>GetElapsedTime</code>",id:"getelapsedtime",level:3},{value:"<code>GetRemainingTime</code>",id:"getremainingtime",level:3},{value:"<code>Pause</code>",id:"pause",level:3},{value:"<code>Resume</code>",id:"resume",level:3},{value:"Examples",id:"examples",level:2}],d={toc:u};function k(t){var e=t.components,m=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,m,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Execute of code at specified time intervals"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(38805).Z,width:"2000",height:"877"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ud83d\udfe6\ud83d\udfe7 ",(0,i.kt)("strong",{parentName:"p"},"Authority:")," This can be accessed on both ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/core-concepts/scripting/authority-concepts"},"Client")," and ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/core-concepts/scripting/authority-concepts"},"Server"),"."),(0,i.kt)("p",{parentName:"div"},"\ud83d\uddff ",(0,i.kt)("strong",{parentName:"p"},"Static Class:")," This is a Static Class. You can access it\u2019s methods directly with ",(0,i.kt)("inlineCode",{parentName:"p"},"."),". It is not possible to initialize or create new instances."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The shortest interval possible is equal to the local Tick Rate - usually at 33ms. On the Server this can vary depending on the Config.toml setting."))),(0,i.kt)("h2",{id:"static-functions"},"Static Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"timer#settimeout"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetTimeout")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Executes a function, after waiting a specified number of milliseconds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"timer#setinterval"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"SetInterval")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Same as SetTimeout(), but repeats the execution of the function continuously")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"timer#cleartimeout"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"ClearTimeout")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Stops the execution of the function specified in SetTimeout()")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"timer#clearinterval"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"ClearInterval")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Stops the execution of the function specified in SetInterval()")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"timer#bind"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Bind")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Binds a Timer to any Actor. The timer will be automatically cleared when the Actor is destroyed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"timer#isvalid"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"IsValid")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Checks if a Timer is currently active or waiting to be triggered")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"timer#getelapsedtime"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetElapsedTime")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns the time elapsed since the last tick")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"timer#getremainingtime"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"GetRemainingTime")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Returns the time remaining to the next tick")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"timer#pause"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Pause")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pauses the Timer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"timer#resume"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"Resume")))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resumes the Timer")))),(0,i.kt)("h3",{id:"settimeout"},(0,i.kt)("inlineCode",{parentName:"h3"},"SetTimeout")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Executes a function, after waiting a specified number of milliseconds"),(0,i.kt)("p",{parentName:"blockquote"},"Returns the timeout_id")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'Timer.SetTimeout(function(param1, param2)\n    Package.Log("Timeout after 3 seconds! Param1: " .. param1 .. ". Param2: " .. param2)\nend, 3000, "hello", 123)\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Function,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The callback that will be executed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"milliseconds"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"0"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The time in milliseconds to wait before executing the function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Any,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"parameters..."))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Additional parameters to pass to the function")))),(0,i.kt)("h3",{id:"setinterval"},(0,i.kt)("inlineCode",{parentName:"h3"},"SetInterval")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Same as SetTimeout(), but repeats the execution of the function continuously"),(0,i.kt)("p",{parentName:"blockquote"},"Returns the interval_id")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'Timer.SetInterval(function(param1, param2)\n    Package.Log("Triggered each 2 seconds! Param1: " .. param1 .. ". Param2: " .. param2)\nend, 2000, "world", 456)\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Function,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The callback that will be executed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"milliseconds"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"0"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The time in milliseconds the timer should delay in between executions of the specified function")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Any,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"parameters..."))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Additional parameters to pass to the function")))),(0,i.kt)("h3",{id:"cleartimeout"},(0,i.kt)("inlineCode",{parentName:"h3"},"ClearTimeout")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Stops the execution of the function specified in SetTimeout()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Creates the Timeout\nlocal my_timeout = Timer.SetTimeout(function() end, 3000)\n\n-- Stops the Timeout\nTimer.ClearTimeout(my_timeout)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"interval_id"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ID value returned by SetTimeout() is used as the parameter for this method")))),(0,i.kt)("h3",{id:"clearinterval"},(0,i.kt)("inlineCode",{parentName:"h3"},"ClearInterval")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Stops the execution of the function specified in SetInterval()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Creates the Interval\nlocal my_interval = Timer.SetInterval(function() end, 3000)\n\n-- Stops the Interval\nTimer.ClearInterval(my_interval)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"interval_id"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ID value returned by SetInterval() is used as the parameter for this method")))),(0,i.kt)("h3",{id:"bind"},(0,i.kt)("inlineCode",{parentName:"h3"},"Bind")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Binds a Timer to any Actor. The timer will be automatically cleared when the Actor is destroyed")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local character = Character(...)\n\nmy_timer = Timer.SetTimeout(function(_character)\n    -- Do something with _character\n    -- Ex: Destroy the character after 10 seconds\n    _character:Destroy()\nend, 10000, character)\n\n-- Binds the Timer to the Character\nTimer.Bind(my_timer, character)\n\n-- This will ensure it will never trigger if the character is destroyed before it\n-- With this you don't need to validate if the '_character' parameter is valid\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"timer_id"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Timer ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.PZ.Actor,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"actor"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Actor to be bound")))),(0,i.kt)("h3",{id:"isvalid"},(0,i.kt)("inlineCode",{parentName:"h3"},"IsValid")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Checks if a Timer is currently active or waiting to be triggered")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Timer.IsValid(timer_id)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"timer_id"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Timer ID")))),(0,i.kt)("h3",{id:"getelapsedtime"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetElapsedTime")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the time elapsed since the last tick")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local elapsed_time = Timer.GetElapsedTime(timer_id)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"timer_id"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Timer ID")))),(0,i.kt)("h3",{id:"getremainingtime"},(0,i.kt)("inlineCode",{parentName:"h3"},"GetRemainingTime")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the time remaining to the next tick")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local remaining_time = Timer.GetRemainingTime(timer_id)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"timer_id"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Timer ID")))),(0,i.kt)("h3",{id:"pause"},(0,i.kt)("inlineCode",{parentName:"h3"},"Pause")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pauses the Timer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Timer.Pause(timer_id)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"timer_id"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Timer ID")))),(0,i.kt)("h3",{id:"resume"},(0,i.kt)("inlineCode",{parentName:"h3"},"Resume")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Resumes the Timer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"Timer.Resume(timer_id)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)(l.rt.Number,null)),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"timer_id"))),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Timer ID")))),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- creates a Interval to call a function at every 1 second\nlocal my_interval = Timer.SetInterval(1000, function()\n    Package.Log("Tick 1 second!")\nend)\n\n-- cancels the Interval\nTimer.ClearInterval(my_id)\n\n-- creates a Timeout to call my_function in 5 seconds, once - passing a parameter\nTimer.SetTimeout(function(my_param)\n    Package.Log("nanos " .. my_param)\nend, 5000, "world")\n')))}k.isMDXComponent=!0},38805:function(t,e,a){e.Z=a.p+"assets/images/stopwatch-08246c09f773e427087cc4eeec589c4e.png"}}]);