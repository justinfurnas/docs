"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8721],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{PZ:function(){return y},SM:function(){return o},Ut:function(){return k},YS:function(){return s},Yb:function(){return d},aj:function(){return g},p2:function(){return b},rt:function(){return h}});n(87462),n(63366),n(67294);var r=n(3905),i=n(65551),a=function(){return(0,i.zu)().path},s=function(e){var t=e.title,n=e.description,i=e.href,s=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:s||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},o=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:a()+"/"+n},t,(0,r.kt)("span",null,n))},c=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},f=function(e){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},k={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},y={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},b={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Blueprint:function(){return f("Blueprint Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},95602:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),s=n(87469),o=["components"],c={title:"Donn\xe9es persistantes",description:"Comment stocker et r\xe9cup\xe9rer des donn\xe9es persistantes sur le disque \xe0 l'aide de notre syst\xe8me int\xe9gr\xe9",tags:["scripting"]},u=void 0,l={unversionedId:"core-concepts/scripting/persistent-data",id:"core-concepts/scripting/persistent-data",title:"Donn\xe9es persistantes",description:"Comment stocker et r\xe9cup\xe9rer des donn\xe9es persistantes sur le disque \xe0 l'aide de notre syst\xe8me int\xe9gr\xe9",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/scripting/persistent-data.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/persistent-data",permalink:"/fr/docs/next/core-concepts/scripting/persistent-data",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/persistent-data.mdx",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",frontMatter:{title:"Donn\xe9es persistantes",description:"Comment stocker et r\xe9cup\xe9rer des donn\xe9es persistantes sur le disque \xe0 l'aide de notre syst\xe8me int\xe9gr\xe9",tags:["scripting"]},sidebar:"main",previous:{title:"Interagir avec le Soleil",permalink:"/fr/docs/next/core-concepts/scripting/interacting-with-the-sun"},next:{title:"Assets",permalink:"/fr/docs/next/core-concepts/assets"}},p={},d=[{value:"Format de fichier",id:"format-de-fichier",level:2},{value:"Stockage et r\xe9cup\xe9ration des donn\xe9es",id:"stockage-et-r\xe9cup\xe9ration-des-donn\xe9es",level:2},{value:"Examples",id:"examples",level:2}],f={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Comment stocker et r\xe9cup\xe9rer des donn\xe9es persistantes sur le disque \xe0 l'aide de notre syst\xe8me int\xe9gr\xe9."),(0,a.kt)("p",null,"Dans nanos world, il est possible de stocker et d'extraire des donn\xe9es du disque avec des fonctions simples."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Il est possible de stocker des donn\xe9es persistantes cot\xe9 ",(0,a.kt)("strong",{parentName:"p"},"Client")," et ",(0,a.kt)("strong",{parentName:"p"},"Serveur"),"!"))),(0,a.kt)("h2",{id:"format-de-fichier"},"Format de fichier"),(0,a.kt)("p",null,"Les donn\xe9es persistantes sont automatiquement stock\xe9es au format ",(0,a.kt)("strong",{parentName:"p"},"TOML")," dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"PersistentData.toml")," \xe0 l'int\xe9rieur de votre dossier Package/. Ce fichier n'est cr\xe9\xe9 que si vous appelez ",(0,a.kt)("inlineCode",{parentName:"p"},"Package.SetPersistentData()"),"."),(0,a.kt)("h2",{id:"stockage-et-r\xe9cup\xe9ration-des-donn\xe9es"},"Stockage et r\xe9cup\xe9ration des donn\xe9es"),(0,a.kt)("p",null,"Tous les fichiers ",(0,a.kt)("strong",{parentName:"p"},"PersistentData")," sont charg\xe9s automatiquement lors du chargement du Package et stock\xe9s en m\xe9moire. Vous pouvez facilement acc\xe9der \xe0 l'ensemble du fichier avec la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"Package.GetPersistentData()"),"."),(0,a.kt)("p",null,"Pour stocker des donn\xe9es, vous devrez passer une valeur ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", qui stockera la valeur lua ",(0,a.kt)(s.rt.Any,null)," dans cette cl\xe9."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local my_table = {\n    my_id = 123,\n    my_data_02 = "data"\n}\n\nPackage.SetPersistentData("awesome_table", my_table)\n\n-- PersistentData.toml sera:\n-- awesome_table = {my_id = 123, my_data_02 = "data"}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local my_table = Package.GetPersistentData().awesome_table\n\nPackage.Log(my_table.my_id)\n\n-- Va print:\n-- 123\n")))}m.isMDXComponent=!0}}]);