"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3798],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},87469:function(e,n,t){t.d(n,{YS:function(){return o},SM:function(){return c},Yb:function(){return f},aj:function(){return g},rt:function(){return h},Ut:function(){return v},PZ:function(){return b},p2:function(){return y}});t(87462),t(63366),t(67294);var r=t(3905),i=t(65551),a=function(){return(0,i.useActiveVersion)().path},o=function(e){var n=e.title,t=e.description,i=e.href,o=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,n),(0,r.kt)("p",null,t))},c=function(e){var n=e.children,t=e.href;return(0,r.kt)("a",{class:"reference-link",href:t.startsWith("http")?t:a()+"/"+t},n,(0,r.kt)("span",null,t))},s=function(e,n){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:n}))},u=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,n){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(n||e.toLowerCase())},e)},p=function(e,n){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(n||e.toLowerCase())},e)},f=function(e){var n=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+n.toLowerCase(),title:n+" Enum (number)"},n)},d=function(e){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},v={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},b={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},y={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},8419:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=t(87469),c=["components"],s={description:"Comment afficher des informations sur l'\xe9cran pour le joueur",sidebar_position:5,tags:["scripting","ui"]},u="User Interface",l={unversionedId:"core-concepts/scripting/user-interface",id:"core-concepts/scripting/user-interface",title:"User Interface",description:"Comment afficher des informations sur l'\xe9cran pour le joueur",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/scripting/user-interface.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/user-interface",permalink:"/fr/docs/next/core-concepts/scripting/user-interface",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/user-interface.mdx",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"},{label:"ui",permalink:"/fr/docs/next/tags/ui"}],version:"current",sidebarPosition:5,frontMatter:{description:"Comment afficher des informations sur l'\xe9cran pour le joueur",sidebar_position:5,tags:["scripting","ui"]},sidebar:"main",previous:{title:"Valeurs des entit\xe9s",permalink:"/fr/docs/next/core-concepts/scripting/entity-values"},next:{title:"Intelligence artificielle",permalink:"/fr/docs/next/core-concepts/scripting/artificial-intelligence"}},p=[{value:"WebUI",id:"webui",children:[{value:"Configuration de base de WebUI",id:"configuration-de-base-de-webui",children:[],level:3}],level:2},{value:"Canvas",id:"canvas",children:[],level:2}],f={toc:p};function d(e){var n=e.components,s=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-interface"},"User Interface"),(0,a.kt)("p",null,"Comment afficher des informations sur l'\xe9cran pour le joueur."),(0,a.kt)("p",null,"Dans nanos world, il existe 2 fa\xe7ons officielles d'afficher des donn\xe9es sur l'\xe9cran : ",(0,a.kt)("strong",{parentName:"p"},"WebUI")," et Render ",(0,a.kt)("strong",{parentName:"p"},"Canvas"),"."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Bien que nous recommandions vivement l'utilisation de ",(0,a.kt)("strong",{parentName:"p"},"WebUI"),", l'utilisation de Render Canvas est toujours prise en charge mais d\xe9pr\xe9ci\xe9e."))),(0,a.kt)("h2",{id:"webui"},"WebUI"),(0,a.kt)("p",null,"Avec WebUI, vous pouvez charger des pages HTML qui s'int\xe8grent \xe0 vos packages en Lua en utilisant des \xe9v\xe9nements."),(0,a.kt)("h3",{id:"configuration-de-base-de-webui"},"Configuration de base de WebUI"),(0,a.kt)("p",null,"Cet exemple de code montre comment ajouter une page de base en utilisant HTML+JavaScript avec la classe WebUI."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Tout le code WebUI s'ex\xe9cute c\xf4t\xe9 client !"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Lance une interface Web avec le fichier HTML que vous venez de cr\xe9er\nMyUI = WebUI("My UI", "file:///UI/index.html")\n\n-- Lorsque le HTML est pr\xeat, il d\xe9clenche un \xe9v\xe9nement.\nMyUI:Subscribe("Ready", function()\n    MyUI:CallEvent("MyAwesomeEvent", "Bonjour! Vous \xeates pr\xeats !")\nend)\n\nMyUI:Subscribe("MyAwesomeAnswer", function(param1)\n    Package.Log("R\xe9ception d\'une r\xe9ponse! Message: " .. param1)\nend)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Client/UI/index.html"',title:'"Client/UI/index.html"'},'<html>\n    <head>\n        <script src="index.js"><\/script>\n    </head>\n    <body>\n        Hello World!\n    </body>\n</html>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Client/UI/index.js"',title:'"Client/UI/index.js"'},'// Enregistrement pour "MyAwesomeEvent" \xe0 partir de Lua\nEvents.Subscribe("MyAwesomeEvent", function(param1) {\n    console.log("D\xe9clenchement! " + param1);\n\n    // D\xe9clencheurs "MyAwesomeAnswer" dans Lua\n    Events.Call("MyAwesomeAnswer", "Hey there!");\n})\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WebUI results",src:t(86108).Z,width:"1284",height:"750"})),(0,a.kt)("p",null,"Cela produira un r\xe9sultat :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"[WebUI]  D\xe9clenchement! Bonjour! Vous \xeates pr\xeats !\n[Script] R\xe9ception d'une r\xe9ponse! Message: Hey there!\n")),(0,a.kt)(o.SM,{href:"getting-started/tutorials-and-examples/basic-hud-html",mdxType:"ReferenceLink"},"Basic HUD (HTML)"),(0,a.kt)("h2",{id:"canvas"},"Canvas"),(0,a.kt)(o.SM,{href:"getting-started/tutorials-and-examples/basic-hud-canvas",mdxType:"ReferenceLink"},"Basic HUD (Canvas)"))}d.isMDXComponent=!0},86108:function(e,n,t){n.Z=t.p+"assets/images/user-interface-7e95b34bf99d9b0891c7fd3a8d9fc278.jpg"}}]);