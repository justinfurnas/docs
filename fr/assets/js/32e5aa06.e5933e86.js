"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5604],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{PZ:function(){return b},SM:function(){return i},Ut:function(){return f},YS:function(){return l},Yb:function(){return d},aj:function(){return g},p2:function(){return C},rt:function(){return N}});n(83117),n(80102),n(67294);var r=n(3905),a=n(80143),o=function(){return(0,a.zu)().path},l=function(t){var e=t.title,n=t.description,a=t.href,l=t.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:o()+"/"+a},(0,r.kt)("img",{src:l||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,n))},i=function(t){var e=t.children,n=t.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:o()+"/"+n},e,(0,r.kt)("span",null,n))},u=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:o()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},s=function(t){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},p=function(t,e){return(0,r.kt)("a",{href:o()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},c=function(t,e){return(0,r.kt)("a",{href:o()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},d=function(t){var e=t.children;return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},m=function(t){return(0,r.kt)("a",{href:o()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},k=function(t){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},g={AuthorityOnly:function(){return u("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return u("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return u("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return u("/img/scripting/both.png","both-sides - this can be called on any side!")}},N={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},f={Vector:function(){return p("Vector")},Rotator:function(){return p("Rotator")},Color:function(){return p("Color")},Quat:function(){return p("Quat","quaternion")},Vector2D:function(){return p("Vector2D","vectortwod")}},b={Actor:function(){return c("Actor","base-classes/actor")},Paintable:function(){return c("Paintable","base-classes/paintable")},Pickable:function(){return c("Pickable","base-classes/pickable")},Billboard:function(){return c("Billboard")},Blueprint:function(){return c("Blueprint")},Canvas:function(){return c("Canvas")},Cable:function(){return c("Cable")},Character:function(){return c("Character")},Database:function(){return c("Database")},File:function(){return c("File")},Grenade:function(){return c("Grenade")},Melee:function(){return c("Melee")},Light:function(){return c("Light")},Particle:function(){return c("Particle")},Player:function(){return c("Player")},Prop:function(){return c("Prop")},Sound:function(){return c("Sound")},SceneCapture:function(){return c("SceneCapture","scene-capture")},StaticMesh:function(){return c("StaticMesh","static-mesh")},TextRender:function(){return c("TextRender","text-render")},Trigger:function(){return c("Trigger")},Vehicle:function(){return c("Vehicle")},Weapon:function(){return c("Weapon")},WebUI:function(){return c("WebUI")}},C={StaticMesh:function(){return m("StaticMesh Asset")},SkeletalMesh:function(){return m("SkeletalMesh Asset")},Animation:function(){return m("Animation Asset")},Particle:function(){return m("Particle Asset")},Material:function(){return m("Material Asset")},Map:function(){return m("Map Asset")},Blueprint:function(){return m("Blueprint Asset")},Sound:function(){return k("Sound Asset or Special Path")},Image:function(){return k("Image Special Path")},HTML:function(){return k("HTML Special Path")}}},74517:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=n(87469),i=["components"],u={title:"Couleur",description:"Une couleur compos\xe9e de composants (R, G, B, A) avec une pr\xe9cision \xe0 virgule flottante.",tags:["classe-utilitaire"]},s=void 0,p={unversionedId:"scripting-reference/utility-classes/color",id:"scripting-reference/utility-classes/color",title:"Couleur",description:"Une couleur compos\xe9e de composants (R, G, B, A) avec une pr\xe9cision \xe0 virgule flottante.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/utility-classes/color.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/color",permalink:"/fr/docs/next/scripting-reference/utility-classes/color",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/utility-classes/color.mdx",tags:[{label:"classe-utilitaire",permalink:"/fr/docs/next/tags/classe-utilitaire"}],version:"current",frontMatter:{title:"Couleur",description:"Une couleur compos\xe9e de composants (R, G, B, A) avec une pr\xe9cision \xe0 virgule flottante.",tags:["classe-utilitaire"]},sidebar:"main",previous:{title:"\ud83c\udf0d World",permalink:"/fr/docs/next/scripting-reference/static-classes/world"},next:{title:"JSON",permalink:"/fr/docs/next/scripting-reference/utility-classes/json"}},c={},d=[{value:"Utilisation",id:"utilisation",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2},{value:"Propri\xe9t\xe9s statiques",id:"propri\xe9t\xe9s-statiques",level:2},{value:"Fonctions statiques",id:"fonctions-statiques",level:2},{value:"Functions",id:"functions",level:2}],m={toc:d};function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Une couleur compos\xe9e de composants (R, G, B, A) avec une pr\xe9cision \xe0 virgule flottante."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Astuce :")," Cette structure est Open Sourc\xe9e \xe0 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". N'h\xe9sitez pas \xe0 proposer des demandes de fusion et \xe0 sugg\xe9rer des modifications !")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Remarque :")," Cette structure supporte les op\xe9rations ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"=="),", et ",(0,o.kt)("inlineCode",{parentName:"p"},"tostring"),".")),(0,o.kt)("h2",{id:"utilisation"},"Utilisation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local grey_color = Color(0.5, 0.5, 0.5, 1)\n")),(0,o.kt)("h2",{id:"propri\xe9t\xe9s"},"Propri\xe9t\xe9s"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Valeur")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Nom")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(l.rt.Number,null)),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"R"))),(0,o.kt)("td",{parentName:"tr",align:null},"Pourcentage de couleur rouge (0-1)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(l.rt.Number,null)),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"G"))),(0,o.kt)("td",{parentName:"tr",align:null},"Pourcentage de couleur verte (0-1)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(l.rt.Number,null)),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"B"))),(0,o.kt)("td",{parentName:"tr",align:null},"Pourcentage de couleur bleue (0-1)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)(l.rt.Number,null)),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"A"))),(0,o.kt)("td",{parentName:"tr",align:null},"Pourcentage de transparence Alpha (0-1)")))),(0,o.kt)("h2",{id:"propri\xe9t\xe9s-statiques"},"Propri\xe9t\xe9s statiques"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Valeur")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Nom")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(1, 1, 1)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.WHITE")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(0, 0, 0)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.BLACK")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(0, 0, 0, 0)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.TRANSPARENT")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(1, 0, 0)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.RED")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(0, 1, 0)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.GREEN")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(0, 0, 1)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.BLUE")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(1, 1, 0)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.YELLOW")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(0, 1, 1)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.CYAN")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(1, 0, 1)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.MAGENTA")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(1, 0.5, 0)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.ORANGE")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(0.5, 1, 1)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.CHARTREUSE")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(0, 1, 0.5)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.AQUAMARINE")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(0, 0.5, 1)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.AZURE")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(0.5, 0, 1)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.VIOLET")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Color(1, 0, 0.5)")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.ROSE")))))),(0,o.kt)("h2",{id:"fonctions-statiques"},"Fonctions statiques"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Valeur retourn\xe9e")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Nom")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"color"},"Couleur")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.RandomPalette(inclure_noir = true)"))),(0,o.kt)("td",{parentName:"tr",align:null},"Renvoie une couleur al\xe9atoire de la palette de couleurs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"color"},"Couleur")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.Random()"))),(0,o.kt)("td",{parentName:"tr",align:null},"Renvoie une couleur al\xe9atoire dans toutes les couleurs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"color"},"Couleur")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.FromRGBA(number r, number g, number b, number a)"))),(0,o.kt)("td",{parentName:"tr",align:null},"Renvoie la couleur \xe0 partir des valeurs de 0 \xe0 255 d'intervalle")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"color"},"Couleur")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.FromCYMK(number c, number y, number m, number k, number a)"))),(0,o.kt)("td",{parentName:"tr",align:null},"Renvoie une couleur depuis le format CYMK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"color"},"Couleur")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.FromHSL(number h, number s, number l)"))),(0,o.kt)("td",{parentName:"tr",align:null},"Renvoie une couleur depuis le format HSL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"color"},"Couleur")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.FromHSV(number h, number s, number v)"))),(0,o.kt)("td",{parentName:"tr",align:null},"Renvoie une couleur depuis le format HSV")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"color"},"Couleur")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Color.FromHEX(string hex)"))),(0,o.kt)("td",{parentName:"tr",align:null},"Renvoie une couleur depuis le format Hexad\xe9cimal")))),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Valeur retourn\xe9e")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Nom")),(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)(l.rt.String,null)),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"ToHEX()"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Retourne la repr\xe9sentation Hexad\xe9cimale de cette couleur")))))}k.isMDXComponent=!0}}]);