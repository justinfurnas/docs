"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7840],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87469:function(e,n,t){t.d(n,{PZ:function(){return y},SM:function(){return c},Ut:function(){return h},YS:function(){return o},Yb:function(){return f},aj:function(){return m},p2:function(){return v},rt:function(){return b}});t(83117),t(80102),t(67294);var r=t(3905),i=t(80143),a=function(){return(0,i.zu)().path},o=function(e){var n=e.title,t=e.description,i=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,n),(0,r.kt)("p",null,t))},c=function(e){var n=e.children,t=e.href;return(0,r.kt)("a",{class:"reference-link",href:t.startsWith("http")?t:a()+"/"+t},n,(0,r.kt)("span",null,t))},s=function(e,n){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:n}))},u=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,n){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(n||e.toLowerCase())},e)},p=function(e,n){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(n||e.toLowerCase())},e)},f=function(e){var n=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+n.toLowerCase(),title:n+" Enum (number)"},n)},d=function(e){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},g=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},m={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},b={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},h={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},y={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},v={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Blueprint:function(){return d("Blueprint Asset")},Sound:function(){return g("Sound Asset or Special Path")},Image:function(){return g("Image Special Path")},HTML:function(){return g("HTML Special Path")}}},55361:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),o=t(87469),c=["components"],s={title:"User Interface",description:"Informationen auf dem Bildschirm des Players anzeigen",sidebar_position:5,tags:["scripting","ui"]},u=void 0,l={unversionedId:"core-concepts/scripting/user-interface",id:"version-latest/core-concepts/scripting/user-interface",title:"User Interface",description:"Informationen auf dem Bildschirm des Players anzeigen",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/user-interface.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/user-interface",permalink:"/de/docs/core-concepts/scripting/user-interface",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/user-interface.mdx",tags:[{label:"scripting",permalink:"/de/docs/tags/scripting"},{label:"ui",permalink:"/de/docs/tags/ui"}],version:"latest",sidebarPosition:5,frontMatter:{title:"User Interface",description:"Informationen auf dem Bildschirm des Players anzeigen",sidebar_position:5,tags:["scripting","ui"]},sidebar:"version-latest/main",previous:{title:"Entit\xe4tswerte",permalink:"/de/docs/core-concepts/scripting/entity-values"},next:{title:"K\xfcnstliche Intelligenz",permalink:"/de/docs/core-concepts/scripting/artificial-intelligence"}},p={},f=[{value:"WebUI",id:"webui",level:2},{value:"Grundlegendes WebUI-Setup",id:"grundlegendes-webui-setup",level:3},{value:"Leinwand",id:"leinwand",level:2}],d={toc:f};function g(e){var n=e.components,s=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wie man Informationen im Bildschirm f\xfcr den Spieler anzeigt."),(0,a.kt)("p",null,"In der Nano-Welt gibt es 2 offizielle Wege zum Plotten von Bildschirmdaten: ",(0,a.kt)("strong",{parentName:"p"},"WebUI")," und Render ",(0,a.kt)("strong",{parentName:"p"},"Leinwand"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Obwohl wir sehr empfehlen, ",(0,a.kt)("strong",{parentName:"p"},"WebUI"),"zu verwenden, wird die Verwendung von RenderCanvas immer noch unterst\xfctzt, aber veraltet.")),(0,a.kt)("h2",{id:"webui"},"WebUI"),(0,a.kt)("p",null,"Mit WebUI k\xf6nnen Sie HTML-Seiten laden, die mit Ihren Paketen in Lua mit Events integriert werden."),(0,a.kt)("h3",{id:"grundlegendes-webui-setup"},"Grundlegendes WebUI-Setup"),(0,a.kt)("p",null,"Dieser Beispielcode zeigt, wie man eine grundlegende Seite mit HTML+JavaScript in die WebUI-Klasse einf\xfcgt."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Hinweis:")," Der gesamte WebUI-Code l\xe4uft auf der Client-Seite!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Spawnt ein WebUI mit der HTML-Datei, die Sie gerade erstellt haben\nMyUI = WebUI("Meine UI", "file:///UI/index. tml")\n\n-- Wenn das HTML bereit ist, l\xf6st dort ein Ereignis\nMyUI:Subscribe("Ready", function()\n    MyUI:CallEvent("MyAwesomeEvent", "Hallo! Du bist bereit!")\nend)\n\nMyUI:Subscribe("MyAwesomeAnswer", function(param1)\n    Package.Log("Antwort erhalten! Nachricht: " .. param1)\nEnde)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Client/UI/index.html"',title:'"Client/UI/index.html"'},'<html>\n    <head>\n        <script src="index.js"><\/script>\n    </head>\n    <body>\n        Hallo Welt!\n    </body>\n</html>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Client/UI/index.js"',title:'"Client/UI/index.js"'},'// Registrieren f\xfcr "MyAwesomeEvent" von Lua\nEvents.Subscribe("MyAwesomeEvent", function(param1) {\n    console.log("Triggered! " + param1);\n\n    // Trigger "MyAwesomeAnswer" auf Lua\n    Events.Call("MyAwesomeAnswer", "Hallo!");\n})\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WebUI-Ergebnisse",src:t(20924).Z,width:"1284",height:"750"})),(0,a.kt)("p",null,"Dies wird ausgegeben:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[WebUI]  Ausgel\xf6st! Hallo! Du bist bereit!\n[Script] Antwort erhalten! Nachricht: Hey da!\n")),(0,a.kt)(o.SM,{href:"getting-started/tutorials-and-examples/basic-hud-html",mdxType:"ReferenceLink"},"Basic HUD (HTML)"),(0,a.kt)("h2",{id:"leinwand"},"Leinwand"),(0,a.kt)(o.SM,{href:"getting-started/tutorials-and-examples/basic-hud-canvas",mdxType:"ReferenceLink"},"Basic HUD (Canvas)"))}g.isMDXComponent=!0},20924:function(e,n,t){n.Z=t.p+"assets/images/user-interface-7e95b34bf99d9b0891c7fd3a8d9fc278.jpg"}}]);