"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8892],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(g,o(o({ref:e},u),{},{components:n})):r.createElement(g,o({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{PZ:function(){return f},SM:function(){return s},Ut:function(){return y},YS:function(){return o},Yb:function(){return d},aj:function(){return k},p2:function(){return N},rt:function(){return m}});n(87462),n(63366),n(67294);var r=n(3905),a=n(65551),i=function(){return(0,a.zu)().path},o=function(t){var e=t.title,n=t.description,a=t.href,o=t.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:i()+"/"+a},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,n))},s=function(t){var e=t.children,n=t.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},e,(0,r.kt)("span",null,n))},l=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},c=function(t){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},u=function(t,e){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},p=function(t,e){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},d=function(t){var e=t.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},h=function(t){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},g=function(t){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},k={AuthorityOnly:function(){return l("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return l("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return l("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return l("/img/scripting/both.png","both-sides - this can be called on any side!")}},m={Number:function(){return c("number")},String:function(){return c("string")},Boolean:function(){return c("boolean")},Table:function(){return c("table")},Iterator:function(){return c("iterator")},Any:function(){return c("any")},Function:function(){return c("function")},Nil:function(){return c("nil")}},y={Vector:function(){return u("Vector")},Rotator:function(){return u("Rotator")},Color:function(){return u("Color")},Quat:function(){return u("Quat","quaternion")},Vector2D:function(){return u("Vector2D","vectortwod")}},f={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},N={StaticMesh:function(){return h("StaticMesh Asset")},SkeletalMesh:function(){return h("SkeletalMesh Asset")},Animation:function(){return h("Animation Asset")},Particle:function(){return h("Particle Asset")},Material:function(){return h("Material Asset")},Map:function(){return h("Map Asset")},Blueprint:function(){return h("Blueprint Asset")},Sound:function(){return g("Sound Asset or Special Path")},Image:function(){return g("Image Special Path")},HTML:function(){return g("HTML Special Path")}}},80834:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(87469),s=["components"],l={title:"Authority Concepts",description:"All you need to know about Authority & Network Authority concepts.",sidebar_position:2,tags:["scripting"]},c=void 0,u={unversionedId:"core-concepts/scripting/authority-concepts",id:"core-concepts/scripting/authority-concepts",title:"Authority Concepts",description:"All you need to know about Authority & Network Authority concepts.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/scripting/authority-concepts.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/authority-concepts",permalink:"/fr/docs/next/core-concepts/scripting/authority-concepts",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/authority-concepts.mdx",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",sidebarPosition:2,frontMatter:{title:"Authority Concepts",description:"All you need to know about Authority & Network Authority concepts.",sidebar_position:2,tags:["scripting"]},sidebar:"main",previous:{title:"Events Guide",permalink:"/fr/docs/next/core-concepts/scripting/events-guide"},next:{title:"Packages Communication",permalink:"/fr/docs/next/core-concepts/scripting/communicating-between-packages"}},p={},d=[{value:"Authority",id:"authority",level:2},{value:"Methods and Events Availability",id:"methods-and-events-availability",level:3},{value:"<AuthorityType.ServerOnly /><strong><code>Server Side</code></strong>",id:"server-side",level:4},{value:"<AuthorityType.ClientOnly /><strong><code>Client Side</code></strong>",id:"client-side",level:4},{value:"<AuthorityType.AuthorityOnly /><strong><code>Authority Side</code></strong>",id:"authority-side",level:4},{value:"<AuthorityType.Both /><strong><code>Both Sides</code></strong>",id:"both-sides",level:4},{value:"Network Authority",id:"network-authority",level:2},{value:"Overriding the current Network Authority",id:"overriding-the-current-network-authority",level:3},{value:"Examples of actions that are only executed by the Network Authority of that Actor",id:"examples-of-actions-that-are-only-executed-by-the-network-authority-of-that-actor",level:4},{value:"Debugging Network &amp; Network Authority",id:"debugging-network--network-authority",level:3},{value:"Entity Square Colors Meaning",id:"entity-square-colors-meaning",level:4},{value:"Entity Trace Colors Meaning",id:"entity-trace-colors-meaning",level:4}],h={toc:d};function g(t){var e=t.components,l=(0,a.Z)(t,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All you need to know about Authority & Network Authority concepts."),(0,i.kt)("h2",{id:"authority"},"Authority"),(0,i.kt)("p",null,"Some Classes can only be spawned on the Server, others can only be spawned in the Client, and there are some which can be spawned in both Server or Client. The side which the Class is spawned is called ",(0,i.kt)("strong",{parentName:"p"},"Authority"),"."),(0,i.kt)("h3",{id:"methods-and-events-availability"},"Methods and Events Availability"),(0,i.kt)("p",null,"Some methods and events in the API are only available on a specific side ","(","Client or Server",")",", others are only available in the side which spawned it Authority side",")",":"),(0,i.kt)("h4",{id:"server-side"},(0,i.kt)(o.aj.ServerOnly,null),(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"Server Side"))),(0,i.kt)("p",null,"Method or Events which can only be called in the ",(0,i.kt)("strong",{parentName:"p"},"Server")," side."),(0,i.kt)("h4",{id:"client-side"},(0,i.kt)(o.aj.ClientOnly,null),(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"Client Side"))),(0,i.kt)("p",null,"Methods or Events which can only be called in the ",(0,i.kt)("strong",{parentName:"p"},"Client")," side."),(0,i.kt)("h4",{id:"authority-side"},(0,i.kt)(o.aj.AuthorityOnly,null),(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"Authority Side"))),(0,i.kt)("p",null,"Methods or Events which can only be called in the side which spawned it."),(0,i.kt)("h4",{id:"both-sides"},(0,i.kt)(o.aj.Both,null),(0,i.kt)("strong",{parentName:"h4"},(0,i.kt)("inlineCode",{parentName:"strong"},"Both Sides"))),(0,i.kt)("p",null,"Methods or Events which can only be called in any side."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"All entities spawned in the ",(0,i.kt)("strong",{parentName:"p"},"Server")," will be automatically synced in the ",(0,i.kt)("strong",{parentName:"p"},"Client"),". I.e. you can access it's methods and get all data from it without needing to manually sync it."),(0,i.kt)("p",{parentName:"div"},"In the same way, entities spawned in the ",(0,i.kt)("strong",{parentName:"p"},"Client")," will only exist for that Client, trying to send those entities to the server will cause errors."))),(0,i.kt)("h2",{id:"network-authority"},"Network Authority"),(0,i.kt)("p",null,"Another important concept in nanos world is the ",(0,i.kt)("strong",{parentName:"p"},"Network Authority"),". We have a ",(0,i.kt)("em",{parentName:"p"},'"distributed network authority"')," concept, which means the work of calculating physics and AI (for example) are automatically assigned and distributed to the clients. In general, if an ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/classes/base-classes/actor"},"Actor")," is near an in-game Character, it's physics will be calculated by that player's device. The Player that is responsible for calculating and sharing the results is called ",(0,i.kt)("strong",{parentName:"p"},"Network Authority"),"."),(0,i.kt)("p",null,"The Player assigned is automatically calculated by the server and takes some things into consideration, this calculation is only made if the Player is possessing a Character:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"distance")," from the Character to the object"),(0,i.kt)("li",{parentName:"ul"},"If the Character is ",(0,i.kt)("strong",{parentName:"li"},"grabbing")," a ",(0,i.kt)(o.PZ.Prop,null)),(0,i.kt)("li",{parentName:"ul"},"If the Character is ",(0,i.kt)("strong",{parentName:"li"},"handling")," a ",(0,i.kt)("a",{parentName:"li",href:"/fr/docs/next/scripting-reference/classes/base-classes/pickable"},"Pickable")),(0,i.kt)("li",{parentName:"ul"},"If the Character is ",(0,i.kt)("strong",{parentName:"li"},"driving")," a Vehicle"),(0,i.kt)("li",{parentName:"ul"},"If the Character has just ",(0,i.kt)("strong",{parentName:"li"},"shot")," something")),(0,i.kt)("p",null,"In all this cases, the Player will be automatically assigned to be the ",(0,i.kt)("strong",{parentName:"p"},"Network Authority")," of that Object."),(0,i.kt)("h3",{id:"overriding-the-current-network-authority"},"Overriding the current Network Authority"),(0,i.kt)("p",null,"It is possible to override the current Network Authority of a specific entity by using the method ",(0,i.kt)("inlineCode",{parentName:"p"},":SetNetworkAuthority()"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Some actors aren't ",(0,i.kt)("strong",{parentName:"p"},"Network Distributed"),". This means they will not be automatically assigned neither be able to have it's Network Authority changed. You can check if an entity is Network Distributed with the method ",(0,i.kt)("inlineCode",{parentName:"p"},":IsNetworkDistributed()"),"."))),(0,i.kt)("h4",{id:"examples-of-actions-that-are-only-executed-by-the-network-authority-of-that-actor"},"Examples of actions that are only executed by the Network Authority of that Actor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Objects Physics sync (including when calling ",(0,i.kt)("inlineCode",{parentName:"li"},":SetForce()"),")."),(0,i.kt)("li",{parentName:"ul"},"NPCs walking with ",(0,i.kt)("inlineCode",{parentName:"li"},":MoveTo()")," or ",(0,i.kt)("inlineCode",{parentName:"li"},":Follow()"),".")),(0,i.kt)("h3",{id:"debugging-network--network-authority"},"Debugging Network & Network Authority"),(0,i.kt)("p",null,"We've added a new option in the settings to ",(0,i.kt)("strong",{parentName:"p"},"Draw Network Debug")," information in the World, you can toggle it in the settings (",(0,i.kt)("em",{parentName:"p"},"Settings -> Debug -> Draw Network Debug"),"), it will draw squares on each entity and traces representing their networked movement."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(250).Z,width:"1916",height:"1079"})),(0,i.kt)("h4",{id:"entity-square-colors-meaning"},"Entity Square Colors Meaning"),(0,i.kt)("p",null,"The Square in the entities represent the state in the Network Authority and it's health."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Couleur"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("span",{style:{color:"#306CCE"}},"BLUE"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"You ",(0,i.kt)("strong",{parentName:"td"},"are the current Network Authority")," of that entity. ",(0,i.kt)("br",null),"You are sharing sync data to the other players.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"WHITE")),(0,i.kt)("td",{parentName:"tr",align:"left"},"You ",(0,i.kt)("strong",{parentName:"td"},"are not the Network Authority")," and the entity is sleeping. ",(0,i.kt)("br",null),"The current Network Authority is not sending sync data because the entity is sleeping.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("span",{style:{color:"#00A400"}},"GREEN"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"You ",(0,i.kt)("strong",{parentName:"td"},"are not the Network Authority")," and the entity is being synced in a ",(0,i.kt)("strong",{parentName:"td"},"good")," cadence (no lag).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("span",{style:{color:"#FFA500"}},"ORANGE"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"You ",(0,i.kt)("strong",{parentName:"td"},"are not the Network Authority")," and the entity is being synced in an ",(0,i.kt)("strong",{parentName:"td"},"ok")," cadence (small lag - < 100ms).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("span",{style:{color:"#FF0000"}},"RED"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"You ",(0,i.kt)("strong",{parentName:"td"},"are not the Network Authority")," and the entity is being synced in an ",(0,i.kt)("strong",{parentName:"td"},"bad")," cadence (big lag - > 100ms, maybe even with packet loss).")))),(0,i.kt)("h4",{id:"entity-trace-colors-meaning"},"Entity Trace Colors Meaning"),(0,i.kt)("p",null,"The Traces in the entities represent the network data received from the server. If you are the network authority you won't see the traces. The arrow points from where the entity is currently in your machine and where it should be accordingly to the network authority."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Couleur"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("span",{style:{color:"#00A400"}},"GREEN"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The entity is being synced in a ",(0,i.kt)("strong",{parentName:"td"},"good")," cadence (no lag).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("span",{style:{color:"#FFA500"}},"ORANGE"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The entity is being synced in an ",(0,i.kt)("strong",{parentName:"td"},"ok")," cadence (small lag - < 100ms).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("span",{style:{color:"#FF0000"}},"RED"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The entity is being synced in an ",(0,i.kt)("strong",{parentName:"td"},"bad")," cadence (big lag - > 100ms, maybe even with packet loss).")))))}g.isMDXComponent=!0},250:function(t,e,n){e.Z=n.p+"assets/images/debug-visualizer-c087044d005e1ae370cc83cde211dad4.jpg"}}]);