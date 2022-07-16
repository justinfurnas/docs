"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5452],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=m(n),d=r,c=s["".concat(p,".").concat(d)]||s[d]||k[d]||l;return n?a.createElement(c,o(o({ref:e},u),{},{components:n})):a.createElement(c,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{PZ:function(){return h},SM:function(){return i},Ut:function(){return f},YS:function(){return o},Yb:function(){return s},aj:function(){return N},p2:function(){return b},rt:function(){return g}});n(83117),n(80102),n(67294);var a=n(3905),r=n(80143),l=function(){return(0,r.zu)().path},o=function(t){var e=t.title,n=t.description,r=t.href,o=t.image_src;return(0,a.kt)("a",{class:"card-link",href:r.startsWith("http")?r:l()+"/"+r},(0,a.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,a.kt)("h4",null,e),(0,a.kt)("p",null,n))},i=function(t){var e=t.children,n=t.href;return(0,a.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:l()+"/"+n},e,(0,a.kt)("span",null,n))},p=function(t,e){return(0,a.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,a.kt)("img",{src:t,title:e}))},m=function(t){return(0,a.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},u=function(t,e){return(0,a.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},k=function(t,e){return(0,a.kt)("a",{href:l()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},s=function(t){var e=t.children;return(0,a.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},d=function(t){return(0,a.kt)("a",{href:l()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},c=function(t){return(0,a.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},N={AuthorityOnly:function(){return p("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return p("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return p("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return p("/img/scripting/both.png","both-sides - this can be called on any side!")}},g={Number:function(){return m("number")},String:function(){return m("string")},Boolean:function(){return m("boolean")},Table:function(){return m("table")},Iterator:function(){return m("iterator")},Any:function(){return m("any")},Function:function(){return m("function")},Nil:function(){return m("nil")}},f={Vector:function(){return u("Vector")},Rotator:function(){return u("Rotator")},Color:function(){return u("Color")},Quat:function(){return u("Quat","quaternion")},Vector2D:function(){return u("Vector2D","vectortwod")}},h={Actor:function(){return k("Actor","base-classes/actor")},Paintable:function(){return k("Paintable","base-classes/paintable")},Pickable:function(){return k("Pickable","base-classes/pickable")},Billboard:function(){return k("Billboard")},Blueprint:function(){return k("Blueprint")},Canvas:function(){return k("Canvas")},Cable:function(){return k("Cable")},Character:function(){return k("Character")},Database:function(){return k("Database")},File:function(){return k("File")},Grenade:function(){return k("Grenade")},Melee:function(){return k("Melee")},Light:function(){return k("Light")},Particle:function(){return k("Particle")},Player:function(){return k("Player")},Prop:function(){return k("Prop")},Sound:function(){return k("Sound")},SceneCapture:function(){return k("SceneCapture","scene-capture")},StaticMesh:function(){return k("StaticMesh","static-mesh")},TextRender:function(){return k("TextRender","text-render")},Trigger:function(){return k("Trigger")},Vehicle:function(){return k("Vehicle")},Weapon:function(){return k("Weapon")},WebUI:function(){return k("WebUI")}},b={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Blueprint:function(){return d("Blueprint Asset")},Sound:function(){return c("Sound Asset or Special Path")},Image:function(){return c("Image Special Path")},HTML:function(){return c("HTML Special Path")}}},28023:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=n(87469),i=["components"],p={title:"NanosMath",description:"A table containing useful and aux Math functions",tags:["utility-class"]},m=void 0,u={unversionedId:"scripting-reference/utility-classes/nanosmath",id:"scripting-reference/utility-classes/nanosmath",title:"NanosMath",description:"A table containing useful and aux Math functions",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/utility-classes/nanosmath.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/nanosmath",permalink:"/pt-BR/docs/next/scripting-reference/utility-classes/nanosmath",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/utility-classes/nanosmath.mdx",tags:[{label:"utility-class",permalink:"/pt-BR/docs/next/tags/utility-class"}],version:"current",frontMatter:{title:"NanosMath",description:"A table containing useful and aux Math functions",tags:["utility-class"]},sidebar:"main",previous:{title:"JSON",permalink:"/pt-BR/docs/next/scripting-reference/utility-classes/json"},next:{title:"NanosUtils",permalink:"/pt-BR/docs/next/scripting-reference/utility-classes/nanosutils"}},k={},s=[{value:"Usage",id:"usage",level:2},{value:"Static Functions",id:"static-functions",level:2},{value:"<code>Round</code>",id:"round",level:3},{value:"<code>Clamp</code>",id:"clamp",level:3},{value:"<code>ClampAxis</code>",id:"clampaxis",level:3},{value:"<code>NormalizeAxis</code>",id:"normalizeaxis",level:3},{value:"<code>RelativeTo</code>",id:"relativeto",level:3},{value:"<code>FInterpTo</code>",id:"finterpto",level:3},{value:"<code>RInterpTo</code>",id:"rinterpto",level:3},{value:"<code>RInterpConstantTo</code>",id:"rinterpconstantto",level:3},{value:"<code>VInterpTo</code>",id:"vinterpto",level:3},{value:"<code>VInterpConstantTo</code>",id:"vinterpconstantto",level:3}],d={toc:s};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A table containing useful and aux Math functions"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Tip:")," This structure is Open Sourced at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local axis = NanosMath.ClampAxis(720)\n")),(0,l.kt)("h2",{id:"static-functions"},"Static Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Returns"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"nanosmath#round"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Round")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Rounds a number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"nanosmath#clamp"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Clamp")))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"nanosmath#clampaxis"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"ClampAxis")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Clamps an angle to the range of ","[","0, 360","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"nanosmath#normalizeaxis"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"NormalizeAxis")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Clamps an angle to the range of ","[","-180, 180","]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Vector,null),", ",(0,l.kt)(o.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"nanosmath#relativeto"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"RelativeTo")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Calculates the location and rotation relative to an actor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"nanosmath#finterpto"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"FInterpTo")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Interpolate number from Current to Target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"nanosmath#rinterpto"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"RInterpTo")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Interpolate Rotator from Current to Target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"nanosmath#rinterpconstantto"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"RInterpConstantTo")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Interpolate Rotator from Current to Target with a constant step")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"nanosmath#vinterpto"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"VInterpTo")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Interpolate Vector from Current to Target")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"nanosmath#vinterpconstantto"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"VInterpConstantTo")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Interpolate Vector from Current to Target with a constant step")))),(0,l.kt)("h3",{id:"round"},(0,l.kt)("inlineCode",{parentName:"h3"},"Round")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Rounds a number")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"NanosMath.Round(value)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"clamp"},(0,l.kt)("inlineCode",{parentName:"h3"},"Clamp")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Clamps a number")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"NanosMath.Clamp(value, min, max)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"min"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"max"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"clampaxis"},(0,l.kt)("inlineCode",{parentName:"h3"},"ClampAxis")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Clamps an angle to the range of ","[","0, 360","]",".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"NanosMath.ClampAxis(value)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"normalizeaxis"},(0,l.kt)("inlineCode",{parentName:"h3"},"NormalizeAxis")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Clamps an angle to the range of ","[","-180, 180","]",".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"NanosMath.NormalizeAxis(value)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"relativeto"},(0,l.kt)("inlineCode",{parentName:"h3"},"RelativeTo")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Calculates the location and rotation relative to an actor"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(o.Ut.Vector,null),", ",(0,l.kt)(o.Ut.Rotator,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"NanosMath.RelativeTo(location, rotation, actor)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"location"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"rotation"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.PZ.Actor,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"actor"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"finterpto"},(0,l.kt)("inlineCode",{parentName:"h3"},"FInterpTo")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Interpolate scalar from Current to Target")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"NanosMath.FInterpTo(current, target, delta_time, interp_speed)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"current"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"target"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"delta_time"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"interp_speed"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"rinterpto"},(0,l.kt)("inlineCode",{parentName:"h3"},"RInterpTo")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Interpolate Rotator from Current to Target")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"NanosMath.RInterpTo(current, target, delta_time, interp_speed)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"current"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"target"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"delta_time"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"interp_speed"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"rinterpconstantto"},(0,l.kt)("inlineCode",{parentName:"h3"},"RInterpConstantTo")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Interpolate Rotator from Current to Target with a constant step")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"NanosMath.RInterpConstantTo(current, target, delta_time, interp_speed)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"current"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Rotator,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"target"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"delta_time"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"interp_speed"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"vinterpto"},(0,l.kt)("inlineCode",{parentName:"h3"},"VInterpTo")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Interpolate Vector from Current to Target")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"NanosMath.VInterpTo(current, target, delta_time, interp_speed)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"current"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"target"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"delta_time"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"interp_speed"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"vinterpconstantto"},(0,l.kt)("inlineCode",{parentName:"h3"},"VInterpConstantTo")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Interpolate Vector from Current to Target with a constant step")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"NanosMath.VInterpConstantTo(current, target, delta_time, interp_speed)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"current"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.Ut.Vector,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"target"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"delta_time"))),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(o.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"interp_speed"))),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}c.isMDXComponent=!0}}]);