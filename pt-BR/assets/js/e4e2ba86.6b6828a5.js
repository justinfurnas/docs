"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8554],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87469:function(e,n,t){t.d(n,{PZ:function(){return b},SM:function(){return c},Ut:function(){return y},YS:function(){return a},Yb:function(){return p},aj:function(){return g},p2:function(){return v},rt:function(){return h}});t(83117),t(80102),t(67294);var r=t(3905),o=t(80143),i=function(){return(0,o.zu)().path},a=function(e){var n=e.title,t=e.description,o=e.href,a=e.image_src;return(0,r.kt)("a",{class:"card-link",href:o.startsWith("http")?o:i()+"/"+o},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,n),(0,r.kt)("p",null,t))},c=function(e){var n=e.children,t=e.href;return(0,r.kt)("a",{class:"reference-link",href:t.startsWith("http")?t:i()+"/"+t},n,(0,r.kt)("span",null,t))},s=function(e,n){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:n}))},u=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,n){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(n||e.toLowerCase())},e)},d=function(e,n){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(n||e.toLowerCase())},e)},p=function(e){var n=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+n.toLowerCase(),title:n+" Enum (number)"},n)},f=function(e){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},y={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},b={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Billboard:function(){return d("Billboard")},Blueprint:function(){return d("Blueprint")},Canvas:function(){return d("Canvas")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},Database:function(){return d("Database")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Melee:function(){return d("Melee")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},SceneCapture:function(){return d("SceneCapture","scene-capture")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},v={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Blueprint:function(){return f("Blueprint Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},44087:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=t(87469),c=["components"],s={id:"welcome",title:"\ud83d\udc4b Bem vindo",description:"Bem vindo \xe0 nova documenta\xe7\xe3o oficial do nanos world!",image:"/img/docs/new-docs.jpg",keywords:["docs"],sidebar_position:0,slug:"/"},u=void 0,l={unversionedId:"welcome",id:"version-latest/welcome",title:"\ud83d\udc4b Bem vindo",description:"Bem vindo \xe0 nova documenta\xe7\xe3o oficial do nanos world!",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/welcome.mdx",sourceDirName:".",slug:"/",permalink:"/pt-BR/docs/",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/welcome.mdx",tags:[],version:"latest",sidebarPosition:0,frontMatter:{id:"welcome",title:"\ud83d\udc4b Bem vindo",description:"Bem vindo \xe0 nova documenta\xe7\xe3o oficial do nanos world!",image:"/img/docs/new-docs.jpg",keywords:["docs"],sidebar_position:0,slug:"/"},sidebar:"version-latest/main",next:{title:"\ud83e\uddea Sign Up for Alpha Testing",permalink:"/pt-BR/docs/signing-up-alpha"}},d={},p=[{value:"Come\xe7e Agora",id:"come\xe7e-agora",level:2}],f={toc:p};function m(e){var n=e.components,s=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bem vindo \xe0 nova documenta\xe7\xe3o oficial do nanos world!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(89519).Z,width:"1950",height:"800"})),(0,i.kt)("p",null,"Bem-vindo \xe0 ",(0,i.kt)("strong",{parentName:"p"},"documenta\xe7\xe3o oficial nanos world"),"! Uma compila\xe7\xe3o da documenta\xe7\xe3o t\xe9cnica escrita pelo nanos e por voc\xea! Comece lendo as p\xe1ginas introdut\xf3rias ou navegue at\xe9 uma p\xe1gina espec\xedfica usando a caixa de pesquisa."),(0,i.kt)("iframe",{class:"steam-widget",src:"https://store.steampowered.com/widget/1841660/",frameborder:"0",width:"620",height:"190",loading:"lazy"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udcb9 Esta documenta\xe7\xe3o est\xe1 constantemente crescendo e melhorando. Contamos com sua ajuda nos dando feedback e at\xe9 mesmo adicionando novas p\xe1ginas ou informa\xe7\xf5es na docs \ud83d\ude01!"),(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udc91 You are allowed and encouraged to edit this and the other pages of this docs, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/pt-BR/docs/contributing-to-the-docs"},"Contributing to the Docs")," for more information on how to collaborate!")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Temos um espa\xe7o centralizado para reportar ",(0,i.kt)("strong",{parentName:"p"},"BUGs")," e ",(0,i.kt)("strong",{parentName:"p"},"Sugerir")," novas ideias em ",(0,i.kt)("a",{parentName:"p",href:"https://issues.nanos.world"},"https://issues.nanos.world"),". nanos world \xe9 um jogo desenvolvido com base em seu feedback, todas as suas sugest\xf5es s\xe3o ouvidas e profundamente discutidas internamente!")),(0,i.kt)("p",null,"If you desire to become a Closed Tester, please check the following page:"),(0,i.kt)(a.SM,{href:"signing-up-alpha",mdxType:"ReferenceLink"},"\ud83e\uddea Sign Up for Alpha Testing"),(0,i.kt)("h2",{id:"come\xe7e-agora"},"Come\xe7e Agora"),(0,i.kt)("p",null,"Start now creating content for nanos world!"),(0,i.kt)(a.SM,{href:"getting-started/quick-start",mdxType:"ReferenceLink"},"\ud83d\udccc In\xedcio r\xe1pido"),(0,i.kt)(a.SM,{href:"getting-started/tutorials-and-examples",mdxType:"ReferenceLink"},"\ud83d\udcd1 Tutoriais e Exemplos"),(0,i.kt)(a.SM,{href:"core-concepts/server-manual/server-installation",mdxType:"ReferenceLink"},"\ud83d\udcbb Instala\xe7\xe3o do Servidor"),(0,i.kt)(a.SM,{href:"core-concepts/packages/packages-guide",mdxType:"ReferenceLink"},"\ud83d\udce6 Guia de Packages"),(0,i.kt)(a.SM,{href:"core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"\ud83d\udcda Guia de Classes"))}m.isMDXComponent=!0},89519:function(e,n,t){n.Z=t.p+"assets/images/new-docs-6dd4c4d819097e0bcfa5d47b2630de1f.jpg"}}]);